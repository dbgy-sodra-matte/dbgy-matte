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
    sheet.getRange('A1').setNote(
      'Skriv valfritt tecken (t.ex. x eller ett datum) i områdescellen när eleven klarat ' +
      'tenta-av för området. Syns direkt i Lärarvyn och i elevens kvitto. Aggregeringen skriver ' +
      'ALDRIG över dina markeringar — den lägger bara till rader för nya elever.');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 220);
  }
  var existing = {};
  var last = sheet.getLastRow();
  if (last >= 2) {
    var vals = sheet.getRange(2, 1, last - 1, nOmr + 1).getValues();
    for (var i = 0; i < vals.length; i++) {
      var em = ('' + vals[i][0]).toLowerCase().trim();
      if (!em) continue;
      var rec = {};
      for (var o = 0; o < nOmr; o++) rec[OMRADEN_ORDNING[o]] = ('' + vals[i][o + 1]).trim() !== '';
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
  if (total === 0 && tentaKlara.length === 0) return { text: 'Inte börjat', farg: VIT };

  var redo = [];
  for (var i = 0; i < omr.length; i++) {
    if (!tenta[omr[i]] && areaSize[omr[i]] > 0 && areaCount[omr[i]] === areaSize[omr[i]]) redo.push(omr[i]);
  }
  if (redo.length) return { text: '🎯 Tenta av: ' + redo.join(', '), farg: GOLD };

  var dagar = ms ? Math.floor((nu - ms) / 86400000) : 999;
  if (dagar > 14) return { text: '⚠️ Inaktiv ' + dagar + ' d', farg: ROD };
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
      for (var o = 0; o < OMRADEN_ORDNING.length; o++) marks[OMRADEN_ORDNING[o]] = ('' + vals[r][o + 1]).trim() !== '';
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
      nastaSteg = '<strong>' + esc(o.titel) + '</strong> är klart att tenta av — anmäl dig på provtiden!';
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
      : (klarade === totalt && totalt > 0) ? '🎯 Redo att tenta av!'
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
