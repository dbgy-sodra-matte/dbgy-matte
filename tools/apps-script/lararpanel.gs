/**
 * LÄRARPANEL — omläsningskurserna Ma1a + Ma1b
 * ============================================
 * En privat webbsida som visar vad som finns i master-Sheeten, i klartext.
 * Byggd för Carin och Simon. LÄSER ENDAST — panelen skriver aldrig till arken.
 *
 * VARFÖR INTE EN HTML-FIL PÅ DRIVE: Google slutade servera HTML från Drive 2016.
 * En .html på Drive går bara att ladda ner, och skulle ändå inte komma åt arkens
 * data (ingen inloggning, CORS). En Apps Script-webbapp löser båda delarna: den
 * körs innanför Google-inloggningen och läser arken direkt. Elevdata lämnar
 * aldrig Google-lagret, precis som driftreglerna kräver.
 *
 * SÅ SÄTTER DU UPP DEN (Simon, inloggad på ga.dbgy.se):
 *   1. script.google.com → Nytt projekt → döp det "Lärarpanel omläsning"
 *   2. Klistra in DEN HÄR filen i Kod.gs
 *   3. Filer → + → HTML → döp filen exakt "lararpanel" → klistra in lararpanel.html
 *   4. Kör funktionen sattSheetIds() EN gång. Den frågar inte efter något —
 *      fyll först i de två id:na längst ner i den funktionen (raderna märkta ▼).
 *      Sheet-id = den långa strängen i arkets URL mellan /d/ och /edit.
 *   5. Kör visaPanelenLokalt() för att godkänna behörigheterna (Sheets + läsa e-post)
 *   6. Implementera → Ny distribution → Typ: Webbapp
 *        Kör som:            Användaren som öppnar webbappen     ← VIKTIGT
 *        Vem har åtkomst:    Alla inom AcadeMedia
 *      Med "kör som användaren" styr behörigheten på SJÄLVA ARKET vem som ser
 *      något. Karin och du har åtkomst till arken; ingen annan i AcadeMedia
 *      kommer in ens med länken. Väljer du "kör som mig" i stället ser ALLA
 *      i hela AcadeMedia elevdatan — gör inte det.
 *   7. Kopiera /exec-URL:en och ge den till Carin. Spara den i driftinstruktionen.
 *
 * ⚠️ ÖPPNA ALDRIG PANELEN I EN IFRAME. Apps Script skickar X-Frame-Options och
 *    Safari blockerar dessutom tredjepartskakor — inbäddad blir sidan en tom ruta.
 *    Det var precis den fällan som gjorde elevernas kvitto-sida tom. Länka till
 *    den, bädda inte in den.
 *
 * DESIGNPRINCIP — panelen räknar INTE om något.
 *    Status, "senast aktiv" och områdessummor läses ur Lärarvy-fliken, som
 *    kvitto-projektets timkörning redan har beräknat. Panelen är en presentation
 *    av arket, inte en andra sanning. Ändras reglerna i kvitto-webapp.gs följer
 *    panelen med automatiskt. Duplicera ALDRIG in statuslogiken här — det är
 *    samma fälla som den inline-kopierade svarsbedömaren i Exercise.astro.
 */

// ───────── KONFIG ─────────
var PROP_MA1B = 'sheetMa1b';
var PROP_MA1A = 'sheetMa1a';
var CACHE_NYCKEL = 'panelData_v1';
var CACHE_SEK = 300; // 5 min — arken uppdateras ändå bara varje timme

/** Tröskel för klarad checkpoint. MÅSTE vara samma som TROSKEL i kvitto-webapp.gs.
 *  Används bara för att färga enskilda poäng i elevdetaljen; all status kommer
 *  från Lärarvy-fliken. */
var TROSKEL = 8;

// ───────── SETUP (kör en gång) ─────────
function sattSheetIds() {
  // ▼ Klistra in de två arkens id här (mellan /d/ och /edit i URL:en)
  var idMa1b = 'KLISTRA_IN_MA1B_SHEET_ID';
  var idMa1a = 'KLISTRA_IN_MA1A_SHEET_ID';

  if (idMa1b.indexOf('KLISTRA') === 0 || idMa1a.indexOf('KLISTRA') === 0) {
    throw new Error('Fyll i de två Sheet-id:na i sattSheetIds() först.');
  }
  var props = PropertiesService.getScriptProperties();
  props.setProperty(PROP_MA1B, idMa1b);
  props.setProperty(PROP_MA1A, idMa1a);
  // Verifiera direkt att båda går att öppna — bättre att felet syns nu än i panelen.
  var namn = [];
  namn.push(SpreadsheetApp.openById(idMa1b).getName());
  namn.push(SpreadsheetApp.openById(idMa1a).getName());
  Logger.log('KLART. Panelen läser: ' + namn.join('  |  '));
}

/** Kör den här en gång i editorn för att godkänna behörigheterna innan du delar länken. */
function visaPanelenLokalt() {
  var d = hamtaPanelData(true);
  Logger.log('Kurser: ' + d.kurser.length + ', elever totalt: ' +
    d.kurser.reduce(function (s, k) { return s + k.elever.length; }, 0));
  if (d.fel.length) Logger.log('FEL: ' + d.fel.join(' | '));
}

// ───────── WEBBAPPEN ─────────
function doGet() {
  return HtmlService.createHtmlOutputFromFile('lararpanel')
    .setTitle('Lärarpanel — omläsningen')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * SPÄRR MOT FEL DEPLOYLÄGE — den viktigaste säkerhetsfunktionen i filen.
 *
 * Panelen är säker BARA om den distribueras med "Kör som: användaren som öppnar
 * webbappen". Då läses arken med besökarens eget konto, och den som saknar
 * behörighet får ingenting. Väljs i stället "Kör som: mig" läses arken med
 * ÄGARENS behörighet — och då ser alla som kan öppna länken (hela AcadeMedia)
 * samtliga elevers data. Det är en enda rullgardin i distributionsdialogen,
 * och den är lätt att klicka fel på vid en framtida omdeploy.
 *
 * Därför kontrollerar vi det vid varje anrop i stället för att lita på minnet:
 *   getEffectiveUser() = kontot skriptet KÖR som
 *   getActiveUser()    = kontot som ÖPPNAR sidan
 * Är de olika kör appen i fel läge. Då vägrar panelen visa data.
 * Ta ALDRIG bort den här kontrollen för att "det blev något fel" — felet ÄR
 * varningen.
 */
function felDeployLage_() {
  var aktiv = '', effektiv = '';
  try { aktiv = (Session.getActiveUser().getEmail() || '').toLowerCase(); } catch (e) {}
  try { effektiv = (Session.getEffectiveUser().getEmail() || '').toLowerCase(); } catch (e) {}
  if (!effektiv) return null;              // kan inte avgöra i editorn — låt passera
  if (!aktiv) {
    return 'Panelen kan inte se vem som är inloggad. Det betyder oftast att den är ' +
           'distribuerad med "Kör som: mig" i stället för "Kör som: användaren som öppnar ' +
           'webbappen". Ingen data visas förrän det är rättat.';
  }
  if (aktiv !== effektiv) {
    return 'Panelen körs som ' + effektiv + ' men öppnades av ' + aktiv + '. Den är ' +
           'distribuerad i fel läge ("Kör som: mig"), vilket skulle visa elevdata för alla ' +
           'som kan öppna länken. Ingen data visas. Rätta i Implementera → Hantera ' +
           'distributioner → Kör som: Användaren som öppnar webbappen.';
  }
  return null;
}

/** Anropas från klienten. tvinga=true hoppar över cachen (knappen "Hämta färsk data"). */
function hamtaPanelData(tvinga) {
  var spärr = felDeployLage_();
  if (spärr) return { hämtad: nu_(), franCache: false, kurser: [], fel: [], spärr: spärr };

  var cache = CacheService.getUserCache();
  if (!tvinga) {
    var träff = cache.get(CACHE_NYCKEL);
    if (träff) {
      try {
        var d = JSON.parse(träff);
        d.franCache = true;
        return d;
      } catch (e) { /* trasig cache — läs om */ }
    }
  }

  var props = PropertiesService.getScriptProperties();
  var vem = '';
  try { vem = Session.getActiveUser().getEmail() || ''; } catch (e) {}
  var ut = { hämtad: nu_(), franCache: false, kurser: [], fel: [], inloggad: vem };

  var kursDef = [
    { id: 'ma1b', namn: 'Omläsning Ma1b', klass: 'SaBep', prop: PROP_MA1B },
    { id: 'ma1a', namn: 'Omläsning Ma1a', klass: 'BF', prop: PROP_MA1A }
  ];

  for (var i = 0; i < kursDef.length; i++) {
    var def = kursDef[i];
    var ssId = props.getProperty(def.prop);
    if (!ssId) { ut.fel.push(def.namn + ': Sheet-id saknas (kör sattSheetIds).'); continue; }
    try {
      ut.kurser.push(lasKurs_(ssId, def));
    } catch (e) {
      /* Apps Scripts eget felmeddelande innehåller arkets id ("Documents: 1AbC…").
       * Det säger ingenting till den som ändå saknar behörighet, men det finns
       * ingen anledning att skriva ut det på skärmen. Generisk text i stället. */
      var behörighetsfel = /permission|behörighet|access/i.test(String(e && e.message));
      ut.fel.push(def.namn + ': ' + (behörighetsfel
        ? 'du saknar behörighet till det arket (be Simon dela det med dig).'
        : 'kunde inte läsas. Kontrollera att arket finns och att sattSheetIds() körts.'));
    }
  }

  try { cache.put(CACHE_NYCKEL, JSON.stringify(ut), CACHE_SEK); } catch (e) { /* för stor = strunt i cache */ }
  return ut;
}

// ───────── LÄSNING AV ETT ARK ─────────
function lasKurs_(ssId, def) {
  var ss = SpreadsheetApp.openById(ssId);
  var kurs = {
    id: def.id, namn: def.namn, klass: def.klass, arkUrl: ss.getUrl(),
    delmoment: [], omraden: [], elever: [],
    anmalningar: [], fragor: [], uppfoljning: [],
    saknadeFlikar: []
  };

  // 1) Sammanställning → delmoment (ur headern) + poäng per elev
  var samm = vardenFran_(ss, 'Sammanställning');
  var poang = {}; // email -> {delmoment: poäng}
  if (!samm.length) {
    kurs.saknadeFlikar.push('Sammanställning');
  } else {
    var sHead = samm[0];
    for (var c = 1; c < sHead.length; c++) {
      var rubrik = ('' + sHead[c]).trim();
      if (!rubrik) continue;
      var bit = rubrik.split(':');
      var omrade = bit.length > 1 ? bit[0].trim() : 'Övrigt';
      var namn = bit.length > 1 ? bit.slice(1).join(':').trim() : rubrik;
      kurs.delmoment.push({ omrade: omrade, namn: namn, kol: c });
      if (kurs.omraden.indexOf(omrade) === -1) kurs.omraden.push(omrade);
    }
    for (var r = 1; r < samm.length; r++) {
      var em = ('' + samm[r][0]).toLowerCase().trim();
      if (!em || em.indexOf('@') === -1) continue;
      var p = {};
      for (var d = 0; d < kurs.delmoment.length; d++) {
        var v = samm[r][kurs.delmoment[d].kol];
        p[kurs.delmoment[d].namn] = (v === '' || v == null) ? null : Number(v);
      }
      poang[em] = p;
    }
  }

  // 2) Tenta-av → lärarens klarmarkeringar + provlogg (version/datum/anteckning)
  var tenta = vardenFran_(ss, 'Tenta-av');
  var tentaAv = {};
  if (!tenta.length) {
    kurs.saknadeFlikar.push('Tenta-av');
  } else {
    var tHead = tenta[0].map(function (x) { return ('' + x).trim(); });
    var iVer = tHead.indexOf('Provversion'), iDat = tHead.indexOf('Datum'), iAnt = tHead.indexOf('Anteckningar');
    for (var r2 = 1; r2 < tenta.length; r2++) {
      var em2 = ('' + tenta[r2][0]).toLowerCase().trim();
      if (!em2 || em2.indexOf('@') === -1) continue;
      var mark = {};
      for (var o = 1; o < tHead.length; o++) {
        if (o === iVer || o === iDat || o === iAnt) continue;
        if (!tHead[o]) continue;
        mark[tHead[o]] = arKlarmarkering_(tenta[r2][o]);
      }
      tentaAv[em2] = {
        omraden: mark,
        version: iVer > -1 ? textOf_(tenta[r2][iVer]) : '',
        datum: iDat > -1 ? textOf_(tenta[r2][iDat]) : '',
        anteckning: iAnt > -1 ? textOf_(tenta[r2][iAnt]) : ''
      };
    }
  }

  // 3) Lärarvy → status + senast aktiv (REDAN beräknade; panelen räknar inte om)
  //    OBS: Lärarvy har elevens kortnamn (delen före @), inte full e-post.
  var lv = vardenFran_(ss, 'Lärarvy');
  var status = {};
  if (!lv.length) {
    kurs.saknadeFlikar.push('Lärarvy');
  } else {
    var lHead = lv[0].map(function (x) { return ('' + x).trim(); });
    var iSen = lHead.indexOf('Senast aktiv'), iSta = lHead.indexOf('Status'), iTot = lHead.indexOf('Totalt');
    for (var r3 = 1; r3 < lv.length; r3++) {
      var kort = ('' + lv[r3][0]).toLowerCase().trim();
      if (!kort || kort.indexOf('klarade i klassen') === 0) continue; // footer-raden
      status[kort] = {
        senast: iSen > -1 ? textOf_(lv[r3][iSen]) : '',
        status: iSta > -1 ? textOf_(lv[r3][iSta]) : '',
        totalt: iTot > -1 ? textOf_(lv[r3][iTot]) : ''
      };
    }
  }

  // 4) Slå ihop till en elevlista
  var alla = {};
  for (var k in poang) alla[k] = true;
  for (var k2 in tentaAv) alla[k2] = true;
  var emails = Object.keys(alla).sort();
  for (var e = 0; e < emails.length; e++) {
    var email = emails[e];
    var kortnamn = email.split('@')[0];
    var st = status[kortnamn.toLowerCase()] || { senast: '—', status: '', totalt: '' };
    var ta = tentaAv[email] || { omraden: {}, version: '', datum: '', anteckning: '' };
    var p2 = poang[email] || {};

    // Områdesräkning (bara för progress-staplarna — inte för status)
    var perOmrade = {};
    for (var d2 = 0; d2 < kurs.delmoment.length; d2++) {
      var dm = kurs.delmoment[d2];
      perOmrade[dm.omrade] = perOmrade[dm.omrade] || { klara: 0, av: 0 };
      perOmrade[dm.omrade].av++;
      if (p2[dm.namn] != null && p2[dm.namn] >= TROSKEL) perOmrade[dm.omrade].klara++;
    }

    kurs.elever.push({
      email: email, kortnamn: kortnamn,
      poang: p2, perOmrade: perOmrade, tentaAv: ta.omraden,
      provVersion: ta.version, provDatum: ta.datum, provAnteckning: ta.anteckning,
      senast: st.senast, status: st.status, totalt: st.totalt,
      dagar: dagarUr_(st.status)
    });
  }

  // 5) Anmälningar (formulärsvar: Tidsstämpel, E-post, Område, Meddelande)
  var anm = vardenFran_(ss, 'Anmälningar');
  if (!anm.length) {
    kurs.saknadeFlikar.push('Anmälningar');
  } else {
    for (var a = 1; a < anm.length; a++) {
      var rad = anm[a];
      if (!rad || !rad.length) continue;
      var epost = '';
      for (var c2 = 0; c2 < rad.length; c2++) {
        if (('' + rad[c2]).indexOf('@') > -1) { epost = ('' + rad[c2]).toLowerCase().trim(); break; }
      }
      if (!epost) continue;
      // Området = första cellen som matchar ett känt områdesnamn
      var omr = '';
      for (var c3 = 0; c3 < rad.length; c3++) {
        var v3 = ('' + rad[c3]).trim();
        if (kurs.omraden.indexOf(v3) > -1) { omr = v3; break; }
      }
      kurs.anmalningar.push({
        tid: textOf_(rad[0]), email: epost, kortnamn: epost.split('@')[0],
        omrade: omr, meddelande: textOf_(rad[rad.length - 1]) === omr ? '' : textOf_(rad[rad.length - 1])
      });
    }
    kurs.anmalningar.reverse(); // senaste först
  }

  // 6) Frågor (Tid, Elev, Delmoment, Fråga)
  var fr = vardenFran_(ss, 'Frågor');
  if (!fr.length) kurs.saknadeFlikar.push('Frågor');
  else for (var f = 1; f < fr.length; f++) {
    if (!textOf_(fr[f][3])) continue;
    kurs.fragor.push({
      tid: textOf_(fr[f][0]), email: textOf_(fr[f][1]),
      kortnamn: textOf_(fr[f][1]).split('@')[0],
      delmoment: textOf_(fr[f][2]), text: textOf_(fr[f][3])
    });
  }

  // 7) Uppföljning (E-post, Senast aktiv, Dagar inaktiv, Läge, Trappsteg)
  var uf = vardenFran_(ss, 'Uppföljning');
  if (!uf.length) kurs.saknadeFlikar.push('Uppföljning');
  else for (var u = 1; u < uf.length; u++) {
    var e2 = textOf_(uf[u][0]);
    if (!e2 || e2.indexOf('@') === -1) continue; // hoppar över "(ingen elev över 14 dagar)"
    kurs.uppfoljning.push({
      email: e2, kortnamn: e2.split('@')[0], senast: textOf_(uf[u][1]),
      dagar: Number(uf[u][2]) || 0, lage: textOf_(uf[u][3]), trappsteg: textOf_(uf[u][4])
    });
  }

  return kurs;
}

// ───────── HJÄLPARE ─────────
/** Hämtar alla värden ur en flik. Tom array om fliken inte finns — panelen ska
 *  visa "fliken saknas", inte krascha. */
function vardenFran_(ss, namn) {
  var sh = ss.getSheetByName(namn);
  if (!sh) return [];
  var last = sh.getLastRow();
  if (last < 1) return [];
  return sh.getRange(1, 1, last, Math.max(sh.getLastColumn(), 1)).getValues();
}

function textOf_(v) {
  if (v == null) return '';
  if (v instanceof Date) return Utilities.formatDate(v, 'Europe/Stockholm', 'yyyy-MM-dd');
  return ('' + v).trim();
}

/** Samma regel som kvitto-webapp.gs: bara en uttrycklig klarmarkering räknas.
 *  Felriktningen ska vara "syns inte som klar", aldrig "falskt godkänd". */
function arKlarmarkering_(v) {
  if (v instanceof Date) return true;
  var s = ('' + v).trim().toLowerCase();
  if (!s) return false;
  if (/^(x|ok|klar|klart|godkänd|godkänt|g|ja)$/.test(s)) return true;
  if (/^\d{1,4}[-/.]\d{1,2}([-/.]\d{1,4})?$/.test(s)) return true;
  return false;
}

/** Plockar ut antal inaktiva dagar ur statustexten ("⚠️ Inaktiv 23 d"). */
function dagarUr_(statusText) {
  var m = ('' + statusText).match(/inaktiv\s+(\d+)\s*d/i);
  return m ? Number(m[1]) : 0;
}

function nu_() {
  return Utilities.formatDate(new Date(), 'Europe/Stockholm', 'yyyy-MM-dd HH:mm');
}
