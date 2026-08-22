/**
 * tenta-av-info.gs — hämtar tenta-av-tiderna från sajten.
 *
 * ═══════════════════════════════════════════════════════════════════════════
 *  ÄNDRA ALDRIG TID ELLER PLATS HÄR. Enda källan är `tentaAv` i
 *  dbgy-matte/src/site.config.ts. Ändra där, pusha, klart — den här filen
 *  och sajten följer automatiskt med.
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * BAKGRUND (2026-08-22). Provtiden stod inskriven på sju ställen i fyra system:
 * sajten, båda kvitto-webapparna, lärarpanelen och Classroom-generatorn. När
 * tiden flyttades från 13:45 till 12:30 krävdes sju redigeringar, och hade ett
 * ställe missats hade eleverna mött två olika tider. Nu läser Google-sidan
 * samma värden som sajten via /tenta-av.json.
 *
 * LÄGG IN SOM EGEN FIL i varje Apps Script-projekt som behöver tiden
 * (kvitto-webapparna, lärarpanelen). Apps Script delar globalt scope mellan
 * filer i samma projekt, så funktionerna nedan blir direkt tillgängliga.
 *
 * ROBUSTHET: svaret cachas i sex timmar, så normal drift gör noll extra anrop.
 * Går hämtningen inte igenom används en RESERVTEXT som medvetet INTE innehåller
 * någon tid — den hänvisar till Classroom i stället. En reservtext med tid
 * skulle nämligen bli inaktuell i tysthet, vilket är precis det problem den
 * här filen finns för att lösa.
 */

var TENTA_AV_URL = 'https://dbgy-sodra-matte.github.io/dbgy-matte/tenta-av.json';
var TENTA_AV_CACHE_SEK = 21600; // 6 h

/** Reserv utan tidsuppgift — kan aldrig bli inaktuell. */
var TENTA_AV_RESERV = {
  dag: 'onsdagar',
  tid: '',
  plats: '',
  tillagg: '',
  anmalanSenast: 'tisdag kl 12:00',
  maxAntal: 20,
  nar: 'Tid och plats står i Classroom',
  mening: 'Tid och plats för provet står i Classroom. Anmäl dig senast tisdag kl 12:00.',
  formularText: 'Anmäl dig senast tisdag kl 12:00. Tid och plats för provet står i Classroom. ' +
                'Max 20 skrivande per tillfälle; blir det fullt har du förtur till nästa. ' +
                'Ta med miniräknare.',
  arReserv: true
};

/**
 * Hämtar tenta-av-uppgifterna. Returnerar alltid ett användbart objekt —
 * aldrig null — så anropande kod slipper felhantering.
 */
function hamtaTentaAv_() {
  var cache;
  try { cache = CacheService.getScriptCache(); } catch (e) { cache = null; }

  if (cache) {
    var traff = cache.get('tentaAvData');
    if (traff) {
      try { return JSON.parse(traff); } catch (e) { /* trasig cache, hämta om */ }
    }
  }

  try {
    var svar = UrlFetchApp.fetch(TENTA_AV_URL, { muteHttpExceptions: true });
    if (svar.getResponseCode() === 200) {
      var data = JSON.parse(svar.getContentText());
      if (data && data.nar) {
        if (cache) cache.put('tentaAvData', JSON.stringify(data), TENTA_AV_CACHE_SEK);
        return data;
      }
    }
  } catch (e) { /* nätverksfel eller sajten nere — faller igenom till reserven */ }

  return TENTA_AV_RESERV;
}

/**
 * DIAGNOS. Kör den efter en ändring i site.config.ts för att se att den slagit
 * igenom hit. Tömmer cachen först, så du får färska värden direkt i stället för
 * att vänta i upp till sex timmar.
 */
function visaTentaAvInfo() {
  try { CacheService.getScriptCache().remove('tentaAvData'); } catch (e) {}
  var d = hamtaTentaAv_();
  var rader = [
    d.arReserv ? '⚠️ RESERVTEXT ANVÄNDS — sajten kunde inte nås.' : 'Hämtat från sajten.',
    '',
    'nar:           ' + d.nar,
    'mening:        ' + d.mening,
    'anmalanSenast: ' + d.anmalanSenast,
    'maxAntal:      ' + d.maxAntal,
    'uppdaterad:    ' + (d.uppdaterad || '—')
  ];
  Logger.log(rader.join(String.fromCharCode(10)));
}

/**
 * uppdateraAnmalanText() — skriver om anmälningsformulärets beskrivning så att
 * den matchar site.config.ts.
 *
 * Behövs eftersom skapaAnmalningsForm() bara sätter beskrivningen NÄR
 * formuläret skapas. Ett formulär som redan finns påverkas inte av att koden
 * ändras, så texten skulle annars ligga kvar med gammal tid för alltid.
 *
 * Kör den i BÅDA kvitto-projekten efter varje ändring av tid eller plats.
 * (Kör ALDRIG skapaAnmalningsForm() igen för att lösa det — då får du ett nytt
 * formulär, och kopplingen till de anmälningar som redan kommit in bryts.)
 *
 * Funktionen kräver DELMOMENT och PROP_SHEET från Kod.gs, precis som resten
 * av filen.
 */
function uppdateraAnmalanText() {
  var ta = hamtaTentaAv_();
  if (ta.arReserv) {
    Logger.log('AVBRUTET: kunde inte hämta tiderna från sajten, så beskrivningen '
      + 'skulle ha blivit reservtexten utan tid. Kontrollera nätet och kör igen.');
    return;
  }
  try {
    var ssId = PropertiesService.getScriptProperties().getProperty(PROP_SHEET);
    var flik = SpreadsheetApp.openById(ssId).getSheetByName('Anmälningar');
    var url = flik ? flik.getFormUrl() : null;
    if (!url) {
      Logger.log('Hittade inget anmälningsformulär kopplat till Anmälningar-fliken.');
      return;
    }
    var form = FormApp.openByUrl(url);
    var fore = form.getDescription();
    form.setDescription(ta.formularText);
    var rader = [
      'KLART. Beskrivningen uppdaterad på: ' + form.getTitle(),
      '',
      'FÖRE:  ' + fore,
      '',
      'EFTER: ' + ta.formularText
    ];
    Logger.log(rader.join(String.fromCharCode(10)));
  } catch (e) {
    Logger.log('FEL: ' + e);
  }
}
