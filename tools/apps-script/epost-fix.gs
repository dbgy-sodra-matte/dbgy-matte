/**
 * ⛔ SLUTSATS 2026-08-22 — KRYSSRUTAN GÅR INTE ATT TA BORT. LÄS DETTA FÖRST.
 *
 * Frågan var: kan eleverna slippa kryssa i "Registrera <mejl> som e-postadress
 * som ska inkluderas i mitt svar" när de gör en checkpoint eller anmälan?
 *
 * SVAR: nej. Kryssrutan är Googles EGET beteende för läget "Verifierad".
 * Google lade till den som ett samtyckessteg — respondenten måste aktivt
 * godkänna att den verifierade adressen kopplas till svaret. Den finns på
 * alla formulär med den inställningen, oavsett hur de skapats, och kan inte
 * stängas av vare sig i gränssnittet eller via Apps Script.
 *
 * Det ENDA sättet att bli av med klicket är att byta till "Respondentindata",
 * och det river upp grunden för hela kvitto-arkitekturen: eleven skriver då
 * adressen för hand, felstavningar blir möjliga, och kvittot hittar inte
 * eleven. Priset är alltså mycket högre än ett klick. RÖR INTE INSTÄLLNINGEN.
 *
 * Vägen fram till svaret, så att ingen gör om den:
 *   1. Hypotes: sattAutomatiskEpost() missade anmälningsformuläret.
 *      FEL — kollaOchSattEpost() visade VERIFIED på alla 19 i båda kurserna.
 *   2. Hypotes: en kvarvarande E-post-FRÅGA från gamla setCollectEmail(true).
 *      FEL — listaEpostFragor() hittade 0 i både Ma1b och Ma1a.
 *   3. Kontroll i gränssnittet: inställningen står på "Verifierad", alltså rätt.
 *   4. Källkoll: Googles dokumentation och supportforum bekräftar att
 *      "Verifierad" numera kräver bekräftelse via kryssruta.
 *
 * Funktionerna nedan är kvar som DIAGNOSVERKTYG. De är fortfarande nyttiga om
 * något formulär i framtiden hamnar i fel läge — men de löser inte det här.
 *
 * ---------------------------------------------------------------------------
 * epost-fix.gs — FRISTÅENDE tilläggsfil. Läggs till som EGEN fil i
 * kvitto-projektet, så att Kod.gs inte behöver röras alls.
 *
 * PROBLEMET (2026-08-22)
 * Eleverna måste kryssa i "Registrera <mejl> som e-postadress som ska
 * inkluderas i mitt svar" innan de kan skicka en checkpoint eller anmälan.
 *
 * VARFÖR DET INTE RÄCKTE ATT SÄTTA VERIFIED
 * Inställningen och frågan är två skilda saker. Formulären skapades med
 *     try  { form.setEmailCollectionType(VERIFIED); }
 *     catch{ form.setCollectEmail(true); }
 * och fallbacken lägger till en RIKTIG, obligatorisk fråga i formuläret.
 * Att senare sätta VERIFIED ändrar bara inställningen — den kvarvarande
 * frågan står kvar som ett objekt och måste tas bort separat. Därför
 * rapporterar API:t "VERIFIED" samtidigt som eleven fortfarande ser rutan.
 *
 * ANVÄNDNING — kör i den här ordningen:
 *   1. listaEpostFragor()    visar vad som finns, ändrar INGENTING
 *   2. taBortEpostFragor()   tar bort frågorna
 *   3. listaEpostFragor()    igen — allt ska nu säga "ingen e-postfråga"
 *
 * Filen använder DELMOMENT och PROP_SHEET från Kod.gs. Apps Script delar
 * globalt scope mellan filer i samma projekt, så det fungerar utan import.
 *
 * Redan inlämnade svar påverkas inte. Kolumnen ligger kvar i kalkylarket och
 * kvittot fortsätter fungera — det är bara framtida inlämningar som slipper
 * klicket.
 */

/** Radbrytning utan bakslag i källan (undviker escape-strul vid inklistring). */
var EF_NL = String.fromCharCode(10);

/** DIAGNOS. Rör ingenting — skriver bara ut vad som finns. Kör den först. */
function listaEpostFragor() {
  ef_kor_(false);
}

/** ÅTGÄRD. Tar bort e-postfrågorna. Kör listaEpostFragor() först. */
function taBortEpostFragor() {
  ef_kor_(true);
}

function ef_kor_(taBort) {
  var rader = [];
  var antalTraffar = 0;

  for (var i = 0; i < DELMOMENT.length; i++) {
    var r = ef_form_(DELMOMENT[i].formId, DELMOMENT[i].namn, taBort);
    if (r.traff) antalTraffar++;
    rader.push(r.text);
    Utilities.sleep(120);
  }

  var a = ef_anmalan_(taBort);
  if (a.traff) antalTraffar++;
  rader.push(a.text);

  rader.push('');
  rader.push(taBort
    ? ('KLART. ' + antalTraffar + ' formulär hade en e-postfråga som nu är borttagen.'
       + EF_NL + 'Kör listaEpostFragor() en gång till — allt ska säga "ingen e-postfråga".')
    : ('DIAGNOS KLAR. ' + antalTraffar + ' formulär har en e-postfråga.'
       + EF_NL + (antalTraffar
            ? 'Kör taBortEpostFragor() för att ta bort dem.'
            : 'Inget att göra — rutan eleverna ser kommer i så fall från något annat.')));

  Logger.log(rader.join(EF_NL));
}

/**
 * Letar efter en fråga som handlar om e-post och tar bort den om taBort=true.
 * Matchar bara titlar som BÖRJAR med e-post/epost/mejl, så att en riktig
 * uppgift som råkar nämna ordet inte plockas bort av misstag.
 */
function ef_form_(formId, namn, taBort) {
  try {
    var f = FormApp.openById(formId);
    var items = f.getItems();
    var traffar = [];
    for (var i = 0; i < items.length; i++) {
      var titel = (items[i].getTitle() || '').trim().toLowerCase();
      if (titel.indexOf('e-post') === 0 || titel.indexOf('epost') === 0 || titel.indexOf('mejl') === 0) {
        traffar.push(items[i]);
      }
    }
    if (!traffar.length) return { traff: false, text: namn + ': ingen e-postfråga' };
    if (!taBort) {
      return { traff: true, text: namn + ':  >> E-POSTFRÅGA: "' + traffar[0].getTitle() + '"' };
    }
    for (var j = 0; j < traffar.length; j++) f.deleteItem(traffar[j]);
    return { traff: true, text: namn + ':  BORTTAGEN (' + traffar.length + ' st)' };
  } catch (e) {
    return { traff: false, text: namn + ':  FEL — ' + e };
  }
}

/** Anmälningsformuläret nås via svarsflikens koppling — dess id sparades aldrig. */
function ef_anmalan_(taBort) {
  try {
    var ssId = PropertiesService.getScriptProperties().getProperty(PROP_SHEET);
    var flik = SpreadsheetApp.openById(ssId).getSheetByName('Anmälningar');
    var url = flik ? flik.getFormUrl() : null;
    if (!url) return { traff: false, text: '>>> ANMÄLAN: inget kopplat formulär hittades' };
    return ef_form_(FormApp.openByUrl(url).getId(), '>>> ANMÄLAN till tenta-av', taBort);
  } catch (e) {
    return { traff: false, text: '>>> ANMÄLAN: kunde inte nås — ' + e };
  }
}
