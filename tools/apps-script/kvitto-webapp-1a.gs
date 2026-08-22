/**
 * Omläsning Ma1a — master-Sheet + kvitto-webbapp
 * ===============================================
 * Parallell till Ma1b-kvittot (kvitto-webapp.gs) men för Ma1a: 23 checkpoint-formulär,
 * FYRA områden (Algebra, Ekonomi, Sannolikhet, Funktioner). Område-logiken är
 * generaliserad (drivs av OMRADEN_ORDNING) så samma kod klarar valfritt antal områden.
 *
 *   1. setup() — körs EN gång: skapar master-Sheetet "DBGY Matte — Omläsning Ma1a data",
 *      sparar dess id i Script Properties, installerar EN timme-trigger, kör första aggregeringen.
 *   2. byggSammanstallning() — läser alla 23 formulärs svar, bästa poäng per elev/delmoment,
 *      skriver Sammanställning + Lärarvy + (sync) Tenta-av-flikarna. Timme-trigger + manuellt.
 *   3. doGet() — kvitto-webbappen. Läser Sammanställning + Tenta-av för inloggad elev,
 *      renderar framstegsvyn. Bäddas in på /omlasning-1a/mitt-kvitto.
 *
 * VIKTIGT: master-Sheetet innehåller elevdata (mejl + poäng) — bor i Google (ga.dbgy.se),
 * ALDRIG i repot. Detta script innehåller bara formulär-id:n (ger ingen åtkomst i sig).
 *
 * KÖR SÅ HÄR (av Simon, inkognito inloggad på ga.dbgy.se):
 *   1. NYTT Apps Script-projekt (separat från Ma1b-kvittot) → klistra in HELA filen → spara
 *   2. Kör "setup" → godkänn behörigheter → master-Sheetets URL står i körloggen
 *   3. Implementera → Ny distribution → Webbapp → "Kör som: Mig", "Åtkomst: Alla inom AcadeMedia"
 *      → kopiera /exec-URL:en → klistra in i chatten (Claude lägger den i site.config + sidan)
 *   4. Master-Sheetet: håll personal-only (dela ALDRIG med elever). Flytta till Delade enheten.
 */

// ───────── KONFIG ─────────
var TROSKEL = 8; // 8/10 rätt = klarad
var PROP_SHEET = 'masterSheetId';
var PROP_UPPD = 'senastUppdaterad';
var OMRADEN_ORDNING = ['Algebra', 'Ekonomi', 'Sannolikhet', 'Funktioner'];

// Delmoment i samma ordning som på sajten. formId = formulärets fil-id (från REDIGERA-länken).
var DELMOMENT = [
  // Algebra (7)
  { omrade: 'Algebra', namn: 'Förenkling', formId: '1GLKVkbiizrSDdZtr54fiZdrVoznAALcY4whTQHuLvnA' },
  { omrade: 'Algebra', namn: 'Grundläggande ekvationer', formId: '1dbxmSeRWxgjC0ERBRFVJFEQfxocdfCG-q6Y3SPEU8Cs' },
  { omrade: 'Algebra', namn: 'Ekvation med x i båda led', formId: '1IrX2aGKr5yNZu9ubqfFEFM3qA_0x5uH_2nOGeeGlLBs' },
  { omrade: 'Algebra', namn: 'Faktorisering', formId: '1JY3SvjScv8wrAmQOnN3GcLY_xugfz2BDsPeDdAwza0I' },
  { omrade: 'Algebra', namn: 'Ekvationer med parenteser', formId: '1g9F0j64rFMgNyyEKqUlUUjO_qbqVcRPYvhqKHyaw-AM' },
  { omrade: 'Algebra', namn: 'Ekvationer med nämnare', formId: '1WVXRVE-MLK4OuPr--UrY3dfqnP-7OUorQKb7inhSpkA' },
  { omrade: 'Algebra', namn: 'Formler', formId: '1KCap4yxP2EXBdbxK2tuPP9EpU6l6HiYmMmLXVPH5igU' },
  // Ekonomi (4)
  { omrade: 'Ekonomi', namn: 'Förändringsfaktor', formId: '1CuPsYgR3KHVN5B3TkWjOE7msdTNU3Q2i_AeceR1CP8o' },
  { omrade: 'Ekonomi', namn: 'Upprepad förändring', formId: '1X4Eko8q7eFNt7SIvKHT9BVjeCIfjZLdQ86Q5KIH1rio' },
  { omrade: 'Ekonomi', namn: 'Lån, ränta och amortering', formId: '1lE7R-tl-4PxSyN3ojKFcXPSMNpHKXrYBgpeO_VIPzO4' },
  { omrade: 'Ekonomi', namn: 'Lån och ränta med kalkylblad', formId: '1HU9iFEBM31XEJiLrrugfOFHlkTQ4179Fe3GQvvyDiEA' },
  // Sannolikhet (3)
  { omrade: 'Sannolikhet', namn: 'Sannolikhet (grunder)', formId: '14c7Zmoaazr3L1ZYa2WG7crGhRqmrI3Vol-oIRrVPreQ' },
  { omrade: 'Sannolikhet', namn: 'Beroende sannolikhet', formId: '1YcBeQgbDEneCkrC8Tid2uZ6ImHRoWyts5PL5rA2ey20' },
  { omrade: 'Sannolikhet', namn: 'Komplementhändelse', formId: '1Hu58hu4h8RyeCaoZaUAYMZ7QCLAKYLbF8W2puAa4QCQ' },
  // Funktioner (9)
  { omrade: 'Funktioner', namn: 'Värdetabell', formId: '1gq28pGFZS1bFioqjYSbhi3EnoUq-B_uXJUn_Ek7VYDM' },
  { omrade: 'Funktioner', namn: 'Koordinatsystem', formId: '1WUhqm5BuERrtrUMipyOdzGdXIes4GmLo8DZni5zN8kI' },
  { omrade: 'Funktioner', namn: 'Grafer', formId: '1B-UN6hpPppt5QUIBADEGEdQO7uydhNTynbIDLNKgRWo' },
  { omrade: 'Funktioner', namn: 'Linjära funktioner', formId: '1xKItoiGCJ6q2WwAnBSEGk8FVrur2jxczNWPMjYSnm4o' },
  { omrade: 'Funktioner', namn: 'Läsa av grafer', formId: '1Hv_uBLFGltkfM1lQGMD7PvQx7SJLXZBbWW5OdTCg2_s' },
  { omrade: 'Funktioner', namn: 'Funktionsbegreppet f(x)', formId: '1X8m3-Moc7M3oJYUl9vUJlSL2E-BvBFZuhrus94sFmOM' },
  { omrade: 'Funktioner', namn: 'Exponentialekvationer', formId: '15cx6mx8V1HwXW7KCqEkHtdNGEiHUMcvRkLet6DrrtiE' },
  { omrade: 'Funktioner', namn: 'Exponentialekvationer 2', formId: '1I1HRcfn8CeugsaBeGaC18sxuQNwcEL8_zZ8_FawHrWM' },
  { omrade: 'Funktioner', namn: 'Exponentialekvationer från graf', formId: '1c5BC9HJThBO3Xl1BX5Wpobwaz9eI_TN84krICzmYLH4' },
];

// Korta etiketter för Lärarvyns kolumnrubriker (heat-map blir för bred annars)
var KORT = {
  'Förenkling': 'Förenkl.', 'Grundläggande ekvationer': 'Grundekv.', 'Ekvation med x i båda led': 'x i båda',
  'Faktorisering': 'Faktor.', 'Ekvationer med parenteser': 'Parentes', 'Ekvationer med nämnare': 'Nämnare', 'Formler': 'Formler',
  'Förändringsfaktor': 'Förändr.', 'Upprepad förändring': 'Upprepad', 'Lån, ränta och amortering': 'Lån/ränta', 'Lån och ränta med kalkylblad': 'Kalkylblad',
  'Sannolikhet (grunder)': 'Sannolikh.', 'Beroende sannolikhet': 'Beroende', 'Komplementhändelse': 'Komplement',
  'Värdetabell': 'Värdetab.', 'Koordinatsystem': 'Koord.sys', 'Grafer': 'Grafer', 'Linjära funktioner': 'Linjära',
  'Läsa av grafer': 'Läsa graf', 'Funktionsbegreppet f(x)': 'f(x)', 'Exponentialekvationer': 'Exp.ekv',
  'Exponentialekvationer 2': 'Exp.ekv 2', 'Exponentialekvationer från graf': 'Exp ur graf',
};

// ───────── SETUP (kör en gång) ─────────
function setup() {
  var props = PropertiesService.getScriptProperties();
  var ssId = props.getProperty(PROP_SHEET);
  var ss;
  if (ssId) { ss = SpreadsheetApp.openById(ssId); }
  else { ss = SpreadsheetApp.create('DBGY Matte — Omläsning Ma1a data'); props.setProperty(PROP_SHEET, ss.getId()); }
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'byggSammanstallning') ScriptApp.deleteTrigger(triggers[i]);
  }
  ScriptApp.newTrigger('byggSammanstallning').timeBased().everyHours(1).create();
  byggSammanstallning();
  Logger.log('KLART. Master-Sheet: ' + ss.getUrl());
  Logger.log('Aggregering körs varje timme. Kör byggSammanstallning manuellt för att uppdatera direkt.');
}

// ───────── AGGREGERING (trigger + manuellt) ─────────
function byggSammanstallning() {
  var props = PropertiesService.getScriptProperties();
  var ssId = props.getProperty(PROP_SHEET);
  if (!ssId) throw new Error('Kör setup() först — master-Sheet saknas.');
  var ss = SpreadsheetApp.openById(ssId);

  var data = {}; // email -> { delmomentNamn -> bästa poäng }
  var senast = {}; // email -> senaste inlämning (ms)
  var fragor = []; // fritextsvaren → Frågor-fliken (se skrivFragorFlik_)
  for (var d = 0; d < DELMOMENT.length; d++) {
    var form;
    try { form = FormApp.openById(DELMOMENT[d].formId); } catch (e) { continue; }
    var resps = form.getResponses();
    for (var r = 0; r < resps.length; r++) {
      var email = resps[r].getRespondentEmail();
      if (!email) continue;
      email = email.toLowerCase();
      var score = summaScore_(resps[r]);
      data[email] = data[email] || {};
      var key = DELMOMENT[d].namn;
      if (data[email][key] == null || score > data[email][key]) data[email][key] = score;
      var ts = resps[r].getTimestamp();
      if (ts) { var ms = ts.getTime(); if (!senast[email] || ms > senast[email]) senast[email] = ms; }
      var fraga = fritextFraga_(resps[r]);
      if (fraga) fragor.push({ ms: ts ? ts.getTime() : 0, email: email, delmoment: DELMOMENT[d].namn, text: fraga });
    }
  }

  var sheet = ss.getSheetByName('Sammanställning') || ss.insertSheet('Sammanställning');
  sheet.clear();
  var header = ['E-post'];
  for (var i = 0; i < DELMOMENT.length; i++) header.push(DELMOMENT[i].omrade + ': ' + DELMOMENT[i].namn);
  var rows = [header];
  var emails = Object.keys(data).sort();
  for (var e = 0; e < emails.length; e++) {
    var row = [emails[e]];
    for (var k = 0; k < DELMOMENT.length; k++) {
      var v = data[emails[e]][DELMOMENT[k].namn];
      row.push(v == null ? '' : v);
    }
    rows.push(row);
  }
  sheet.getRange(1, 1, rows.length, header.length).setValues(rows);
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(1);

  var tenta = lasOchSyncTentaFlik_(ss, emails);
  skrivLararvy_(ss, data, senast, tenta);
  skrivFragorFlik_(ss, fragor);
  skrivUppfoljningFlik_(ss, data, senast, tenta);
  sakerstallMentorFlik_(ss);
  props.setProperty(PROP_UPPD, new Date().toISOString());
}

/** Läser (och vid behov skapar) "Tenta-av"-fliken som LÄRAREN fyller i manuellt:
 *  en cell per elev × område. Aggregeringen rör aldrig markeringarna. */
function lasOchSyncTentaFlik_(ss, emails) {
  var nOmr = OMRADEN_ORDNING.length;
  var sheet = ss.getSheetByName('Tenta-av');
  if (!sheet) {
    sheet = ss.insertSheet('Tenta-av');
    sheet.getRange(1, 1, 1, nOmr + 1).setValues([['E-post'].concat(OMRADEN_ORDNING)]).setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 220);
  }
  // Sätts varje körning så att även befintliga blad får skyddet.
  sheet.getRange('A1').setNote(
    'Skriv x i områdescellen NÄR ELEVEN KLARAT tenta-av för området.\n\n' +
    'Lämna cellen TOM om eleven inte klarat. Skriv aldrig U, IG eller "ej godkänt" här — ' +
    'anteckna provversion, datum och underkända försök i kolumnerna till höger (Provversion, Datum, Anteckningar) — de läses inte av systemet.\n\n' +
    'Markeringen syns direkt i Lärarvyn och i elevens kvitto. Aggregeringen skriver ALDRIG över ' +
    'dina markeringar — den lägger bara till rader för nya elever.');
  try {
    var regel = SpreadsheetApp.newDataValidation()
      .requireValueInList(['x'], true)
      .setAllowInvalid(false)
      .setHelpText('Skriv x när eleven KLARAT. Lämna tomt annars. Underkända försök antecknas i egen kolumn.')
      .build();
    sheet.getRange(2, 2, Math.max(sheet.getMaxRows() - 1, 1), nOmr).setDataValidation(regel);
  } catch (e) { /* validering är ett skydd, inte ett krav — blockera aldrig aggregeringen */ }
  // Loggkolumner för läraren: systemet skriver bara rubrikerna — innehållet är
  // lärarens och läses aldrig av aggregeringen. Provversion är viktig vid omprov
  // (sex versioner A–F): utan logg vet ingen om eleven redan sett version C.
  sheet.getRange(1, 2 + OMRADEN_ORDNING.length, 1, 3)
    .setValues([['Provversion', 'Datum', 'Anteckningar']]).setFontWeight('bold');
  var existing = {};
  var last = sheet.getLastRow();
  if (last >= 2) {
    var vals = sheet.getRange(2, 1, last - 1, nOmr + 1).getValues();
    for (var i = 0; i < vals.length; i++) {
      var em = ('' + vals[i][0]).toLowerCase().trim();
      if (!em) continue;
      var rec = {};
      for (var o = 0; o < nOmr; o++) rec[OMRADEN_ORDNING[o]] = arKlarmarkering_(vals[i][o + 1]);
      existing[em] = rec;
    }
  }
  var toAppend = [];
  for (var e = 0; e < emails.length; e++) {
    if (!existing[emails[e]]) {
      var blank = [emails[e]];
      for (var o = 0; o < nOmr; o++) blank.push('');
      toAppend.push(blank);
      var rec0 = {};
      for (var o2 = 0; o2 < nOmr; o2++) rec0[OMRADEN_ORDNING[o2]] = false;
      existing[emails[e]] = rec0;
    }
  }
  if (toAppend.length) sheet.getRange(sheet.getLastRow() + 1, 1, toAppend.length, nOmr + 1).setValues(toAppend);
  return existing;
}

/** Räknas cellen som "eleven har KLARAT tenta-av"?
 *  Tidigare räknades allt icke-tomt som godkänt. Skrev läraren 'U' eller
 *  'ej godkänt 12/9' för att minnas ett underkänt prov markerades eleven som
 *  klar — både i lärarvyn och i elevens eget kvitto, tyst och utan spår.
 *  Nu krävs en uttrycklig klarmarkering. Allt annat läses som INTE klarat,
 *  så felriktningen blir "syns inte som klar" i stället för "falskt godkänd". */
function arKlarmarkering_(v) {
  if (v instanceof Date) return true;
  var s = ('' + v).trim().toLowerCase();
  if (!s) return false;
  if (/^(x|ok|klar|klart|godkänd|godkänt|g|ja)$/.test(s)) return true;
  // Rent datum, t.ex. 2026-09-12, 12/9 eller 12-09-2026.
  if (/^\d{1,4}[-/.]\d{1,2}([-/.]\d{1,4})?$/.test(s)) return true;
  return false;
}

/** Bygger den formaterade "Lärarvy"-fliken: heat-map (elever × delmoment), områdes-
 *  och totalsummor, frånvarosignal och statuskolumn. Drivs av OMRADEN_ORDNING. */
function skrivLararvy_(ss, data, senast, tenta) {
  tenta = tenta || {};
  var GRON = '#c7f0d8', AMBER = '#fdecc8', VIT = '#ffffff', HEAD = '#e2e8f0', FOOT = '#f1f5f9', GOLD = '#fde68a';
  var nDelm = DELMOMENT.length;
  var areaSize = {};
  for (var o = 0; o < OMRADEN_ORDNING.length; o++) areaSize[OMRADEN_ORDNING[o]] = 0;
  for (var i = 0; i < nDelm; i++) areaSize[DELMOMENT[i].omrade]++;

  var sheet = ss.getSheetByName('Lärarvy') || ss.insertSheet('Lärarvy');
  sheet.clear();

  var header = ['Elev'];
  for (var i = 0; i < nDelm; i++) header.push(KORT[DELMOMENT[i].namn] || DELMOMENT[i].namn);
  header = header.concat(OMRADEN_ORDNING);
  header.push('Totalt', 'Senast aktiv', 'Status');

  var values = [header];
  var bgs = [header.map(function () { return HEAD; })];
  var passPerDelm = []; for (var i = 0; i < nDelm; i++) passPerDelm.push(0);
  var nu = (new Date()).getTime();

  var emails = Object.keys(data).sort();
  for (var e = 0; e < emails.length; e++) {
    var email = emails[e];
    var row = [email.split('@')[0]];
    var brow = [VIT];
    var areaCount = {};
    for (var o = 0; o < OMRADEN_ORDNING.length; o++) areaCount[OMRADEN_ORDNING[o]] = 0;
    var total = 0;
    for (var k = 0; k < nDelm; k++) {
      var sc = data[email][DELMOMENT[k].namn];
      if (sc == null) { row.push(''); brow.push(VIT); }
      else if (sc >= TROSKEL) { row.push(sc); brow.push(GRON); areaCount[DELMOMENT[k].omrade]++; total++; passPerDelm[k]++; }
      else { row.push(sc); brow.push(AMBER); }
    }
    var tm = tenta[email] || {};
    for (var a = 0; a < OMRADEN_ORDNING.length; a++) {
      var o2 = OMRADEN_ORDNING[a];
      var done = areaCount[o2] + '/' + areaSize[o2];
      if (tm[o2]) { row.push('✅ ' + done); brow.push(GOLD); }
      else if (areaSize[o2] > 0 && areaCount[o2] === areaSize[o2]) { row.push(done); brow.push(GRON); }
      else { row.push(done); brow.push(VIT); }
    }
    row.push(total + '/' + nDelm); brow.push(VIT);
    var ms = senast[email];
    row.push(ms ? Utilities.formatDate(new Date(ms), 'Europe/Stockholm', 'd MMM') : '—'); brow.push(VIT);
    var st = beraknaStatus_(areaCount, areaSize, total, nDelm, ms, nu, tm);
    row.push(st.text); brow.push(st.farg);
    values.push(row); bgs.push(brow);
  }

  var foot = ['Klarade i klassen'];
  for (var k = 0; k < nDelm; k++) foot.push(passPerDelm[k] + '/' + emails.length);
  for (var c = 0; c < OMRADEN_ORDNING.length + 3; c++) foot.push('');
  var footBg = [HEAD]; for (var c = 1; c < header.length; c++) footBg.push(FOOT);
  values.push(foot); bgs.push(footBg);

  sheet.getRange(1, 1, values.length, header.length).setValues(values);
  sheet.getRange(1, 1, bgs.length, header.length).setBackgrounds(bgs);

  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(1);
  sheet.getRange(1, 1, 1, header.length).setFontWeight('bold').setVerticalAlignment('bottom');
  sheet.getRange(1, 2, 1, nDelm).setTextRotation(90);
  sheet.setRowHeight(1, 130);
  sheet.setColumnWidth(1, 150);
  for (var c = 2; c <= nDelm + 1; c++) sheet.setColumnWidth(c, 32);
  sheet.getRange(values.length, 1, 1, header.length).setFontWeight('bold');
  sheet.getRange(1, 1, values.length, header.length).setHorizontalAlignment('center');
  sheet.getRange(1, 1, values.length, 1).setHorizontalAlignment('left');
}

/** Statustext + bakgrundsfärg för en elevrad. Ren funktion (testbar). Drivs av OMRADEN_ORDNING. */
function beraknaStatus_(areaCount, areaSize, total, nDelm, ms, nu, tenta) {
  var GRON = '#c7f0d8', VIT = '#ffffff', ROD = '#fde2e2', GOLD = '#fde68a';
  tenta = tenta || {};
  var omr = OMRADEN_ORDNING;
  var tentaKlara = [];
  for (var i = 0; i < omr.length; i++) if (tenta[omr[i]]) tentaKlara.push(omr[i]);

  if (tentaKlara.length === omr.length) return { text: '🎉 Klar med allt', farg: GRON };

  /* Inaktivitet vägs FÖRE allt annat utom "klar med allt".
   * Tidigare låg den sist, vilket dolde två riskgrupper:
   *  - eleven som kämpat men aldrig nått 8/10 har total === 0 och fastnade i
   *    "Inte börjat" — kunde vara borta i månader utan att bli röd.
   *  - eleven som klarat ett områdes checkpoints och sedan försvunnit fastnade
   *    i guld "Tenta av" för alltid.
   * senast[email] (= ms) sätts vid VARJE inlämning oavsett poäng, så ms är rätt
   * signal för aktivitet. Saknas ms har eleven aldrig lämnat in något. */
  // Redo-områden beräknas FÖRE inaktivitetslarmet så att larmet bär med sig
  // nästa steg: eleven som gjort klart allt och väntar på provtid ska inte se
  // ut som bara borta.
  var redo = [];
  for (var i = 0; i < omr.length; i++) {
    if (!tenta[omr[i]] && areaSize[omr[i]] > 0 && areaCount[omr[i]] === areaSize[omr[i]]) redo.push(omr[i]);
  }
  var dagar = ms ? Math.floor((nu - ms) / 86400000) : 999;
  if (ms && dagar > 14) {
    return redo.length
      ? { text: '🎯 Tenta av: ' + redo.join(', ') + ' · ⚠️ inaktiv ' + dagar + ' d', farg: ROD }
      : { text: '⚠️ Inaktiv ' + dagar + ' d', farg: ROD };
  }
  if (!ms && tentaKlara.length === 0) return { text: 'Inte börjat', farg: VIT };

  if (redo.length) return { text: '🎯 Tenta av: ' + redo.join(', '), farg: GOLD };

  if (tentaKlara.length) return { text: '✅ ' + tentaKlara.join(', ') + ' klar', farg: GRON };
  return { text: 'Pågår', farg: VIT };
}

/** Summerar poängen för en quiz-inlämning (antal rätt, max 10). */
function summaScore_(resp) {
  var items = resp.getGradableItemResponses();
  var s = 0;
  for (var i = 0; i < items.length; i++) { var sc = items[i].getScore(); if (typeof sc === 'number') s += sc; }
  return s;
}

// ───────── FRÅGOR-FLIKEN (elev→lärare-kanalen) ─────────
/** Elevens fritextsvar ("Något du fastnade på …") ur en inlämning, eller ''. */
function fritextFraga_(resp) {
  var items = resp.getItemResponses();
  for (var i = 0; i < items.length; i++) {
    var titel = '';
    try { titel = items[i].getItem().getTitle(); } catch (e) { continue; }
    if (titel && titel.indexOf('Något du fastnade på') === 0) {
      var v = items[i].getResponse();
      return v == null ? '' : ('' + v).trim();
    }
  }
  return '';
}

/** Skriver "Frågor"-fliken: alla icke-tomma fritextsvar ur checkpointsen, nyast först.
 *  Fältet är elev→lärare-kanalen — utan den här fliken ligger frågorna kvar
 *  utspridda i formulär som ingen lärare öppnar. */
function skrivFragorFlik_(ss, fragor) {
  var sheet = ss.getSheetByName('Frågor') || ss.insertSheet('Frågor');
  sheet.clear();
  var rows = [['Tid', 'Elev', 'Delmoment', 'Fråga / fastnade på']];
  fragor.sort(function (a, b) { return b.ms - a.ms; });
  for (var i = 0; i < fragor.length; i++) {
    var f = fragor[i];
    rows.push([
      f.ms ? Utilities.formatDate(new Date(f.ms), 'Europe/Stockholm', 'yyyy-MM-dd HH:mm') : '',
      f.email, f.delmoment, f.text,
    ]);
  }
  sheet.getRange(1, 1, rows.length, 4).setValues(rows);
  sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 130);
  sheet.setColumnWidth(2, 220);
  sheet.setColumnWidth(3, 240);
  sheet.setColumnWidth(4, 460);
}

// ───────── ANMÄLAN + UPPFÖLJNING + MENTORER ─────────
/** KÖR EN GÅNG (Simon): skapar anmälningsformuläret till tenta-av, kopplar svaren
 *  till master-Sheetet och sparar elevlänken i ScriptProperties så att kvittot
 *  visar en anmälningsknapp när ett område är redo. Kör byggSammanstallning efteråt. */
function skapaAnmalningsForm() {
  var props = PropertiesService.getScriptProperties();
  var ssId = props.getProperty(PROP_SHEET);
  if (!ssId) throw new Error('Kör setup() först — master-Sheet saknas.');
  var form = FormApp.create('Anmälan till tenta-av — Omläsning Ma1a');
  form.setDescription(
    'Anmäl dig senast tisdag kl 12:00. Provet skrivs på stödtiden onsdag '
    + 'kl 12:30–13:30 i sal 304 — ' +
    'vilka onsdagar som gäller ser du i Classroom. Max 20 skrivande per tillfälle; ' +
    'blir det fullt har du förtur till nästa. Ta med miniräknare.');
  try { form.setEmailCollectionType(FormApp.EmailCollectionType.VERIFIED); }
  catch (e) { try { form.setCollectEmail(true); } catch (e2) {} }
  try { form.setRequireLogin(true); } catch (e) {}
  form.addListItem().setTitle('Vilket område vill du tenta av?')
    .setChoiceValues(OMRADEN_ORDNING).setRequired(true);
  form.addParagraphTextItem().setTitle('Något Carin bör veta inför provet? (frivilligt)');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ssId);
  props.setProperty('anmalanUrl', form.getPublishedUrl());
  // Svarsfliken skapas asynkront som "Formulärsvar N" — döp om den till "Anmälningar".
  try {
    SpreadsheetApp.flush();
    var sheets = SpreadsheetApp.openById(ssId).getSheets();
    for (var i = 0; i < sheets.length; i++) {
      var n = sheets[i].getName();
      if (/^(Formulärsvar|Form Responses)/i.test(n)) { sheets[i].setName('Anmälningar'); break; }
    }
  } catch (e) { Logger.log('Kunde inte döpa om svarsfliken — gör det för hand: ' + e); }
  Logger.log('KLART. Elevlänk (visas nu i kvittot): ' + form.getPublishedUrl());
  Logger.log('Redigeringslänk (till driftinstruktionen): ' + form.getEditUrl());
}

/** Uppföljningsfliken: elever med >14 dagars inaktivitet + vilket trappsteg som gäller.
 *  Driver eskaleringstrappan så att Carin slipper räkna dagar själv. */
function skrivUppfoljningFlik_(ss, data, senast, tenta) {
  var sheet = ss.getSheetByName('Uppföljning') || ss.insertSheet('Uppföljning');
  sheet.clear();
  sheet.getRange('A1').setNote(
    'Byggs om varje timme — anteckna ALDRIG här (använd Tenta-av-flikens Anteckningar).\n' +
    'Elever som aldrig gjort någon checkpoint syns inte i systemet alls — stäm av mot klasslistan.');
  var head = ['E-post', 'Senast aktiv', 'Dagar inaktiv', 'Läge', 'Trappsteg — åtgärd'];
  var areaSize = {}, areaOf = {};
  for (var d = 0; d < DELMOMENT.length; d++) {
    areaSize[DELMOMENT[d].omrade] = (areaSize[DELMOMENT[d].omrade] || 0) + 1;
    areaOf[DELMOMENT[d].namn] = DELMOMENT[d].omrade;
  }
  var nu = (new Date()).getTime();
  var rader = [];
  var emails = Object.keys(data);
  for (var e = 0; e < emails.length; e++) {
    var email = emails[e];
    var ms = senast[email];
    if (!ms) continue;
    var dagar = Math.floor((nu - ms) / 86400000);
    if (dagar <= 14) continue;
    var cnt = {};
    for (var k in data[email]) {
      if (data[email][k] >= TROSKEL) cnt[areaOf[k]] = (cnt[areaOf[k]] || 0) + 1;
    }
    var tm = tenta[email] || {};
    var redo = [];
    for (var o = 0; o < OMRADEN_ORDNING.length; o++) {
      var omr = OMRADEN_ORDNING[o];
      if (!tm[omr] && (cnt[omr] || 0) === areaSize[omr]) redo.push(omr);
    }
    var lage = redo.length ? '🎯 Redo för prov: ' + redo.join(', ') : 'Mitt i träningen';
    var trapp = dagar > 42 ? '3 · EHT enligt skolans rutin'
      : dagar > 28 ? '2 · Mentor kopplas in (Simon kör skapaMentorUtkast)'
      : '1 · Carin tar kontakt inom en vecka';
    if (redo.length) trapp = 'Boka provplats åt eleven! + ' + trapp;
    rader.push([email, Utilities.formatDate(new Date(ms), 'Europe/Stockholm', 'd MMM'), dagar, lage, trapp]);
  }
  rader.sort(function (a, b) { return b[2] - a[2]; });
  var rows = [head].concat(rader.length ? rader : [['(ingen elev över 14 dagars inaktivitet)', '', '', '', '']]);
  sheet.getRange(1, 1, rows.length, head.length).setValues(rows);
  sheet.getRange(1, 1, 1, head.length).setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 220); sheet.setColumnWidth(4, 240); sheet.setColumnWidth(5, 340);
}

/** Mentorer-fliken skapas tom (fylls i för hand av Simon/Carin). Systemet rör den aldrig. */
function sakerstallMentorFlik_(ss) {
  if (ss.getSheetByName('Mentorer')) return;
  var sheet = ss.insertSheet('Mentorer');
  sheet.getRange(1, 1, 1, 3).setValues([['Elevens e-post', 'Mentors namn', 'Mentors e-post']]).setFontWeight('bold');
  sheet.getRange('A1').setNote(
    'Fylls i för hand — en rad per elev. Används av skapaMentorUtkast() som grupperar ' +
    'inaktiva elever per mentor och skapar färdiga Gmail-UTKAST (skickar aldrig själv).');
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 220); sheet.setColumnWidth(2, 160); sheet.setColumnWidth(3, 220);
}

/** KÖRS AV SIMON VID BEHOV: skapar ETT GMAIL-UTKAST PER MENTOR med mentorns
 *  inaktiva elever (trappsteg 2+, dvs >28 dagar) ur Uppföljningsfliken.
 *  SKICKAR INGENTING — utkasten hamnar i Simons Utkast-mapp för granskning.
 *  Obs: första körningen ber om Gmail-behörighet. */
function skapaMentorUtkast() {
  var props = PropertiesService.getScriptProperties();
  var ss = SpreadsheetApp.openById(props.getProperty(PROP_SHEET));
  var upp = ss.getSheetByName('Uppföljning');
  var men = ss.getSheetByName('Mentorer');
  if (!upp || !men) throw new Error('Kör byggSammanstallning först (Uppföljning/Mentorer saknas).');
  var mentorAv = {};
  var mv = men.getDataRange().getValues();
  for (var i = 1; i < mv.length; i++) {
    var elev = ('' + mv[i][0]).trim().toLowerCase();
    if (elev) mentorAv[elev] = { namn: '' + mv[i][1], epost: ('' + mv[i][2]).trim() };
  }
  var grupper = {}, utanMentor = [];
  var uv = upp.getDataRange().getValues();
  for (var r = 1; r < uv.length; r++) {
    var email = ('' + uv[r][0]).trim().toLowerCase();
    var dagar = Number(uv[r][2]);
    if (!email || email.indexOf('@') < 0 || !(dagar > 28)) continue;
    var m = mentorAv[email];
    if (!m || !m.epost) { utanMentor.push(email + ' (' + dagar + ' d)'); continue; }
    if (!grupper[m.epost]) grupper[m.epost] = { namn: m.namn, elever: [] };
    grupper[m.epost].elever.push('• ' + email + ' — inaktiv ' + dagar + ' dagar — ' + uv[r][3]);
  }
  var antal = 0;
  for (var ep in grupper) {
    var g = grupper[ep];
    GmailApp.createDraft(ep,
      'Omläsningskursen i matematik — elever som behöver en knuff',
      'Hej ' + (g.namn || '') + '!\n\n' +
      'Följande av dina mentorselever läser omläsningskursen i matematik men har ' +
      'varit inaktiva ett tag. Kan du höra med dem hur det går och påminna om att ' +
      'kursen går att plocka upp precis där man slutade?\n\n' +
      g.elever.join('\n') + '\n\n' +
      'Kursen är helt självgående på webben — eleven behöver bara öppna den igen. ' +
      'Hör gärna av dig till mig eller Carin om något skaver.\n\n' +
      'Vänliga hälsningar\nSimon Engholm');
    antal++;
  }
  Logger.log('Skapade ' + antal + ' utkast i Gmail (granska och skicka själv).');
  if (utanMentor.length) Logger.log('SAKNAR MENTOR i Mentorer-fliken: ' + utanMentor.join(', '));
}

// ───────── AUTOMATISK E-POSTINSAMLING (körs en gång, Simons önskemål 10/8) ─────────
/** Sätter e-postinsamlingen till VERIFIERAD på alla kursens checkpoint-formulär:
 *  den inloggade elevens adress registreras automatiskt — inget att klicka i.
 *  Kör från editorn; ingen omdeploy behövs (rör inte webbappen). */
function sattAutomatiskEpost() {
  var ok = 0, fel = [];
  for (var i = 0; i < DELMOMENT.length; i++) {
    try {
      FormApp.openById(DELMOMENT[i].formId)
        .setEmailCollectionType(FormApp.EmailCollectionType.VERIFIED);
      ok++;
    } catch (e) { fel.push(DELMOMENT[i].namn + ': ' + e); }
    Utilities.sleep(200);
  }
  Logger.log('Automatisk e-post PÅ för ' + ok + ' av ' + DELMOMENT.length + ' formulär.');
  if (fel.length) Logger.log('FEL: ' + fel.join(' | '));
}

// ───────── KVITTO (doGet) ─────────
function doGet() {
  var email = '';
  try { email = Session.getActiveUser().getEmail() || ''; } catch (e) { email = ''; }
  var data = hamtaElevData(email);
  return HtmlService.createHtmlOutput(byggKvittoHtml(email, data))
    .setTitle('Mitt kvitto')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function testaLokalt() { Logger.log(Session.getActiveUser().getEmail()); }

function hamtaElevData(email) {
  var props = PropertiesService.getScriptProperties();
  var ssId = props.getProperty(PROP_SHEET);
  var scores = {};
  if (ssId && email) {
    var sheet = SpreadsheetApp.openById(ssId).getSheetByName('Sammanställning');
    if (sheet && sheet.getLastRow() > 1) {
      var values = sheet.getDataRange().getValues();
      var header = values[0];
      for (var r = 1; r < values.length; r++) {
        if (('' + values[r][0]).toLowerCase() === email.toLowerCase()) {
          for (var c = 1; c < header.length; c++) scores[header[c]] = values[r][c];
          break;
        }
      }
    }
  }
  var tentaMarks = lasTentaForElev_(ssId, email);
  return formaStruktur(email, scores, props.getProperty(PROP_UPPD), tentaMarks);
}

/** Läser den inloggade elevens tenta-av-markeringar (dynamiska områdeskolumner). */
function lasTentaForElev_(ssId, email) {
  var marks = {};
  for (var o = 0; o < OMRADEN_ORDNING.length; o++) marks[OMRADEN_ORDNING[o]] = false;
  if (!ssId || !email) return marks;
  var sheet = SpreadsheetApp.openById(ssId).getSheetByName('Tenta-av');
  if (!sheet || sheet.getLastRow() < 2) return marks;
  var vals = sheet.getDataRange().getValues();
  for (var r = 1; r < vals.length; r++) {
    if (('' + vals[r][0]).toLowerCase() === email.toLowerCase()) {
      for (var o = 0; o < OMRADEN_ORDNING.length; o++) marks[OMRADEN_ORDNING[o]] = arKlarmarkering_(vals[r][o + 1]);
      break;
    }
  }
  return marks;
}

/** Ren funktion: omvandlar poäng-map till kvitto-strukturen (testbar utan Google). */
function formaStruktur(email, scores, uppdISO, tentaMarks) {
  tentaMarks = tentaMarks || {};
  var omradenMap = {};
  var harData = false;
  for (var i = 0; i < DELMOMENT.length; i++) {
    var d = DELMOMENT[i];
    omradenMap[d.omrade] = omradenMap[d.omrade] || [];
    var sc = scores[d.omrade + ': ' + d.namn];
    var num = (sc === '' || sc == null) ? null : Number(sc);
    if (num != null && !isNaN(num)) harData = true;
    omradenMap[d.omrade].push({ namn: d.namn, klarad: (num != null && num >= TROSKEL) });
  }
  var omraden = [];
  for (var o = 0; o < OMRADEN_ORDNING.length; o++) {
    var titel = OMRADEN_ORDNING[o];
    var dm = omradenMap[titel] || [];
    var allaKlara = dm.length > 0;
    for (var j = 0; j < dm.length; j++) if (!dm[j].klarad) allaKlara = false;
    var tav = tentaMarks[titel] ? 'klarad' : (allaKlara ? 'redo' : 'ej redo');
    omraden.push({ titel: titel, delmoment: dm, tentaAv: tav });
  }
  return {
    namn: email ? email.split('@')[0] : 'elev',
    omraden: omraden,
    aerMock: false,
    harData: harData,
    uppdaterad: uppdISO || '',
  };
}

function byggKvittoHtml(email, data) {
  // Anmälningslänken sätts av skapaAnmalningsForm() — saknas den visas provtiden utan knapp.
  var anmalanUrl = '';
  try { anmalanUrl = PropertiesService.getScriptProperties().getProperty('anmalanUrl') || ''; } catch (e) {}
  var PROVTID = 'Prov på stödtiden onsdagar kl 12:30–13:30 i sal 304 (vilka onsdagar som gäller står i Classroom). Anmäl dig senast tisdag kl 12:00.';
  var nastaSteg = 'Du har klarat allt — snyggt jobbat!';
  outer:
  for (var i = 0; i < data.omraden.length; i++) {
    var o = data.omraden[i];
    for (var j = 0; j < o.delmoment.length; j++) {
      if (!o.delmoment[j].klarad) {
        nastaSteg = 'Nästa: <strong>' + esc(o.delmoment[j].namn) + '</strong> (' + esc(o.titel) + ')';
        break outer;
      }
    }
    if (o.tentaAv === 'redo') {
      nastaSteg = '<strong>' + esc(o.titel) + '</strong> är klart att tenta av — anmäl dig till nästa provtillfälle!' + (anmalanUrl ? ' <a style="color:#fff;text-decoration:underline;font-weight:700" href="' + anmalanUrl + '" target="_blank" rel="noopener">Anmäl dig här →</a>' : '');
      break;
    }
  }

  var omradenHtml = data.omraden.map(function (o) {
    var klarade = o.delmoment.filter(function (d) { return d.klarad; }).length;
    var totalt = o.delmoment.length;
    var procent = totalt ? Math.round((klarade / totalt) * 100) : 0;
    var rader = o.delmoment.map(function (d) {
      return '<li class="dm ' + (d.klarad ? 'klar' : 'kvar') + '">' + bock(d.klarad) + esc(d.namn) + '</li>';
    }).join('');
    var tentaText = o.tentaAv === 'klarad' ? '✅ Området avklarat — tenta-av godkänd!'
      : (klarade === totalt && totalt > 0)
        ? '🎯 Redo att tenta av! ' + PROVTID + (anmalanUrl
            ? ' <a class="anmal" href="' + anmalanUrl + '" target="_blank" rel="noopener">Anmäl dig här →</a>' : '')
      : 'Tenta-av: när alla delmoment är klara';
    return '<section class="omr"><div class="omr-head"><h2>' + esc(o.titel) + '</h2>' +
      '<span class="omr-count">' + klarade + ' / ' + totalt + ' klara</span></div>' +
      '<div class="bar"><div class="bar-fill" style="width:' + procent + '%"></div></div>' +
      '<ul class="dm-list">' + rader + '</ul>' +
      '<p class="tenta">' + tentaText + '</p></section>';
  }).join('');

  var banner = data.harData ? ''
    : '<p class="info">Inga resultat än — gör en checkpoint längst ner på ett delmoment, så dyker dina framsteg upp här.</p>';

  var uppd = data.uppdaterad ? '<p class="foot">Uppdateras varje timme. Senast: ' + esc(formatTid(data.uppdaterad)) + '</p>'
    : '<p class="foot">Bara du och din lärare ser det här. Uppdateras varje timme.</p>';

  return '<!doctype html><html lang="sv"><head><meta charset="utf-8">' +
'<meta name="viewport" content="width=device-width, initial-scale=1"><style>' +
'  * { box-sizing: border-box; }' +
'  body { margin:0; font-family:-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; background:#faf7f2; color:#0f172a; padding:18px; }' +
'  .wrap { max-width:640px; margin:0 auto; }' +
'  .eyebrow { font-size:12px; text-transform:uppercase; letter-spacing:.08em; color:#b91c1c; font-weight:700; }' +
'  h1 { font-size:26px; margin:4px 0 2px; }' +
'  .who { font-size:13px; color:#64748b; }' +
'  .info { font-size:13px; background:#fdeae3; color:#7f1d1d; padding:10px 12px; border-radius:8px; margin:12px 0 0; }' +
'  .nasta { background:#b91c1c; color:#fff; padding:14px 16px; border-radius:12px; margin:16px 0; font-size:15px; }' +
'  .nasta .lbl { display:block; font-size:11px; text-transform:uppercase; letter-spacing:.07em; opacity:.85; margin-bottom:3px; }' +
'  .omr { background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:14px 16px; margin:12px 0; box-shadow:0 1px 2px rgba(80,40,20,.05); }' +
'  .omr-head { display:flex; align-items:baseline; justify-content:space-between; }' +
'  .omr-head h2 { font-size:17px; margin:0; }' +
'  .omr-count { font-size:12px; color:#64748b; font-weight:600; }' +
'  .bar { height:8px; background:#f1f5f9; border-radius:99px; overflow:hidden; margin:10px 0 12px; }' +
'  .bar-fill { height:100%; background:#c2632a; border-radius:99px; }' +
'  .dm-list { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:5px; }' +
'  .dm { font-size:14px; padding:6px 10px; border-radius:6px; background:#f8fafc; }' +
'  .dm.kvar { color:#94a3b8; }' +
'  .tenta { font-size:13px; color:#334155; margin:12px 0 0; font-weight:600; }' +
'  .tenta .anmal { display:inline-block; margin-top:6px; font-weight:700; }' +
'  .foot { font-size:12px; color:#94a3b8; text-align:center; margin-top:18px; }' +
'</style></head><body><div class="wrap">' +
'  <div class="eyebrow">📼 Mitt kvitto · Omläsning Ma1a</div>' +
'  <h1>Dina framsteg</h1>' +
'  <div class="who">' + (email ? 'Inloggad som ' + esc(email) : 'Ej inloggad — öppna i egen flik och logga in med ditt skolkonto') + '</div>' +
   banner +
'  <div class="nasta"><span class="lbl">Vad du gör härnäst</span>' + nastaSteg + '</div>' +
   omradenHtml + uppd +
'</div>' +
'<script>' +
'  function rapporteraHojd(){ var h=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight); if(window.parent) window.parent.postMessage({kvittoHeight:h},"*"); }' +
'  window.addEventListener("load",rapporteraHojd); window.addEventListener("resize",rapporteraHojd); setTimeout(rapporteraHojd,300);' +
'</script></body></html>';
}

function formatTid(iso) {
  try { return Utilities.formatDate(new Date(iso), 'Europe/Stockholm', 'd MMM HH:mm'); } catch (e) { return ''; }
}
function bock(klarad) { return klarad ? '✅ ' : '⬜ '; }
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/**
 * kollaOchSattEpost() — diagnos + fix av e-postinsamlingen på ALLA formulär.
 *
 * BAKGRUND (2026-08-21). Eleverna fick fortfarande kryssa i sin e-post trots
 * att sattAutomatiskEpost() kördes 10/8. Tre orsaker samverkade:
 *   1. sattAutomatiskEpost() loopar över DELMOMENT och når därför BARA
 *      checkpoint-formulären. Anmälningsformuläret till tenta-av ingår inte.
 *   2. skapaAnmalningsForm() sätter VERIFIED i en try/catch med tyst fallback
 *      till gamla setCollectEmail(true). Fallbacken ger respondent-inmatning,
 *      alltså precis det klick vi vill bli av med.
 *   3. Anmälningsformulärets id sparades aldrig — bara den publicerade URL:en.
 *      Här hittas det i stället via Anmälningar-flikens getFormUrl().
 *
 * Funktionen SKRIVER UT läget för varje formulär före den ändrar något, så att
 * man ser sanningen i stället för att lita på att en tidigare körning tog.
 * Kör den, läs loggen, kör igen — andra gången ska allt säga "redan VERIFIED".
 */
function kollaOchSattEpost() {
  var rader = [];
  for (var i = 0; i < DELMOMENT.length; i++) {
    rader.push(epostForForm_(DELMOMENT[i].formId, DELMOMENT[i].namn));
    Utilities.sleep(150);
  }
  // Anmälningsformuläret: nås via svarsflikens koppling till formuläret.
  try {
    var ssId = PropertiesService.getScriptProperties().getProperty(PROP_SHEET);
    var flik = SpreadsheetApp.openById(ssId).getSheetByName('Anmälningar');
    var url = flik ? flik.getFormUrl() : null;
    if (url) rader.push(epostForForm_(FormApp.openByUrl(url).getId(), '>>> ANMÄLAN till tenta-av'));
    else rader.push('>>> ANMÄLAN: fliken saknar kopplat formulär — kör skapaAnmalningsForm().');
  } catch (e) {
    rader.push('>>> ANMÄLAN: kunde inte nås — ' + e);
  }
  Logger.log(rader.join('\n'));
}

/** Läser läget, sätter VERIFIED om det behövs, returnerar en rad till loggen. */
function epostForForm_(formId, namn) {
  try {
    var f = FormApp.openById(formId);
    var fore = epostLage_(f);
    if (fore === 'VERIFIED') return namn + ': redan VERIFIED';
    f.setEmailCollectionType(FormApp.EmailCollectionType.VERIFIED);
    return namn + ': ' + fore + '  ->  VERIFIED   (ÄNDRAD)';
  } catch (e) {
    return namn + ': FEL — ' + e;
  }
}

/** VERIFIED = Google fyller i från inloggningen, eleven klickar ingenting.
 *  RESPONDER_INPUT = eleven måste skriva/bekräfta själv. */
function epostLage_(form) {
  try { return String(form.getEmailCollectionType()); } catch (e) {}
  try { return form.collectsEmail() ? 'gamla setCollectEmail(true)' : 'AV'; } catch (e) {}
  return 'okänt läge';
}

/**
 * listaEpostFragor() — DIAGNOS: finns det en kvarvarande "E-post"-FRÅGA?
 *
 * Varför den behövs (2026-08-22). Eleverna måste fortfarande kryssa i
 * "Registrera <mejl> som e-postadress som ska inkluderas i mitt svar", trots
 * att kollaOchSattEpost() rapporterar VERIFIED på samtliga formulär.
 *
 * Förklaringen är att INSTÄLLNINGEN och FRÅGAN är två skilda saker:
 * formulären skapades med en try/catch där fallbacken var gamla
 * setCollectEmail(true). Den lägger till en riktig, obligatorisk fråga i
 * formuläret. Att senare sätta EmailCollectionType.VERIFIED ändrar bara
 * inställningen — den kvarvarande frågan står kvar och måste tas bort separat.
 *
 * Kör den här FÖRST och läs loggen. Ser du rader som säger "E-POSTFRÅGA
 * HITTAD" är det dem eleverna klickar i. Kör sedan taBortEpostFragor().
 */
function listaEpostFragor() {
  var rader = [];
  for (var i = 0; i < DELMOMENT.length; i++) {
    rader.push(epostFragaFor_(DELMOMENT[i].formId, DELMOMENT[i].namn, false));
    Utilities.sleep(120);
  }
  rader.push(anmalanRad_(false));
  Logger.log(rader.join(NL_));
}

/**
 * taBortEpostFragor() — tar bort den kvarvarande E-post-frågan.
 * Kör listaEpostFragor() först så du vet vad som försvinner.
 * Redan inlämnade svar påverkas inte; kolumnen finns kvar i kalkylarket.
 */
function taBortEpostFragor() {
  var rader = [];
  for (var i = 0; i < DELMOMENT.length; i++) {
    rader.push(epostFragaFor_(DELMOMENT[i].formId, DELMOMENT[i].namn, true));
    Utilities.sleep(150);
  }
  rader.push(anmalanRad_(true));
  Logger.log(rader.join(NL_));
}

var NL_ = String.fromCharCode(10);

/** Letar efter en fråga vars titel handlar om e-post. Tar bort den om taBort=true. */
function epostFragaFor_(formId, namn, taBort) {
  try {
    var f = FormApp.openById(formId);
    var items = f.getItems();
    var traffar = [];
    for (var i = 0; i < items.length; i++) {
      var titel = (items[i].getTitle() || '').toLowerCase();
      if (titel.indexOf('e-post') > -1 || titel.indexOf('epost') > -1 || titel.indexOf('mejl') > -1) {
        traffar.push(items[i]);
      }
    }
    if (!traffar.length) return namn + ': ingen e-postfråga';
    if (!taBort) return namn + ': E-POSTFRÅGA HITTAD (' + traffar.length + ' st) — "' + traffar[0].getTitle() + '"';
    for (var j = 0; j < traffar.length; j++) f.deleteItem(traffar[j]);
    return namn + ': ' + traffar.length + ' e-postfråga BORTTAGEN';
  } catch (e) {
    return namn + ': FEL — ' + e;
  }
}

/** Samma sak för anmälningsformuläret, som nås via svarsflikens koppling. */
function anmalanRad_(taBort) {
  try {
    var ssId = PropertiesService.getScriptProperties().getProperty(PROP_SHEET);
    var flik = SpreadsheetApp.openById(ssId).getSheetByName('Anmälningar');
    var url = flik ? flik.getFormUrl() : null;
    if (!url) return '>>> ANMÄLAN: inget kopplat formulär hittades';
    return epostFragaFor_(FormApp.openByUrl(url).getId(), '>>> ANMÄLAN till tenta-av', taBort);
  } catch (e) {
    return '>>> ANMÄLAN: kunde inte nås — ' + e;
  }
}
