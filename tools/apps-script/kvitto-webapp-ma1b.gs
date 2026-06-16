/**
 * Ordinarie Ma1b (SaBep) — kvitto-webbapp + aggregering (FAS B)
 * =============================================================
 * Ma1b = SaBep. BF läser Ma1a (separat kurs, egen webapp). KLASSER-arrayen
 * är ändå kvar som lista så fler grupper enkelt kan läggas till senare.
 *   1. byggSammanstallning() — läser klassens 18 checkpoint-formulär, räknar varje elevs
 *      BÄSTA poäng per checkpoint, skriver "Sammanställning" + "Lärarvy" i master-Sheetet.
 *      EN timme-trigger.
 *   2. doGet() — kvitto-webbappen. Slår upp den inloggade eleven i Sammanställning och
 *      renderar trattvyn. En /exec-URL på sajten (/ma1b/mitt-kvitto).
 *   3. setup() — körs EN gång: installerar timme-triggern och kör första aggregeringen.
 *
 * ⚠️ master-Sheets innehåller elevdata — bor i Google (ga.dbgy.se), ALDRIG i repot,
 *    delas ENDAST med undervisande lärare. Detta script innehåller bara id:n.
 *
 * INNAN DEPLOY — fyll i KLASSER nedan från generatorns körlogg (checkpoints-ma1b.gs):
 *   - sheetId  = master-Sheetets id ("id:" i loggen)
 *   - formIds  = varje checkpoints REDIGERA-länk-id (cp01..cp18)
 *
 * KÖR SÅ HÄR (av Simon, inloggad på ga.dbgy.se):
 *   1. script.google.com → Nytt projekt → klistra in HELA filen → fyll i KLASSER → spara
 *   2. Kör setup() → godkänn behörigheter (Forms + Sheets + Triggers)
 *   3. Implementera → Webbapp → Kör som: mig, Åtkomst: alla på AcadeMedia → kopiera /exec-URL
 *   4. Klistra /exec-URL i src/site.config.ts (kvittoWebAppUrl för ma1b)
 */

// ───────── KONFIG ─────────
var TROSKEL = 8;            // 8/10 rätt = klarad checkpoint
var PROP_UPPD = 'senastUppdaterad';

// De 18 checkpoints, grupperade per moment. Ordning = kursordning.
var CHECKPOINTS = [
  { id: 'cp01', moment: 'Algebra', namn: 'Förenkling & ekvationer' },
  { id: 'cp02', moment: 'Algebra', namn: 'Tillämpning & nämnare' },
  { id: 'cp03', moment: 'Algebra', namn: 'Dugga: Algebra' },
  { id: 'cp04', moment: 'Algebra', namn: 'Prov: Algebra' },
  { id: 'cp05', moment: 'Ekonomi', namn: 'Förändringsfaktor' },
  { id: 'cp06', moment: 'Ekonomi', namn: 'Dugga: Ekonomi' },
  { id: 'cp07', moment: 'Ekonomi', namn: 'Prov: Ekonomi' },
  { id: 'cp08', moment: 'Funktioner', namn: 'Koordinatsystem & grafer' },
  { id: 'cp09', moment: 'Funktioner', namn: 'f(x) & linjära grafiskt' },
  { id: 'cp10', moment: 'Funktioner', namn: 'Dugga: Linjära' },
  { id: 'cp11', moment: 'Funktioner', namn: 'Exp- & potensfunktioner' },
  { id: 'cp12', moment: 'Funktioner', namn: 'Dugga 2: Funktioner' },
  { id: 'cp13', moment: 'Funktioner', namn: 'Problemlösning & def-mängd' },
  { id: 'cp14', moment: 'Funktioner', namn: 'Prov: Funktioner' },
  { id: 'cp15', moment: 'Fördjupning', namn: 'Ekvationer & formler' },
  { id: 'cp16', moment: 'Fördjupning', namn: 'Faktorisering & förenkling' },
  { id: 'cp17', moment: 'Fördjupning', namn: 'Funktioner (pre-test)' },
  { id: 'cp18', moment: 'Kursprov', namn: 'Kursprov: hela Ma1b' },
];
var MOMENT_ORDNING = ['Algebra', 'Ekonomi', 'Funktioner', 'Fördjupning', 'Kursprov'];

// FYLL I från generatorns körlogg (ETT block per klass). formIds = REDIGERA-länk-id per checkpoint.
var KLASSER = [
  {
    namn: 'SaBep',
    sheetId: '1Iq4UxI4rCgphFDE5ldS74dVMMM-RQawj4hKQrjUj7WI',
    formIds: {
      cp01: '12Zh71zHhix7ZltXq6Kna4pstxjiE5Bt3CH_kINdXW9I',
      cp02: '1n_mAt0ikxnkGJfHGIMBEcQw2X6qI_6YsNFnMptgics4',
      cp03: '1RKTd2WRgSorWO9WZTZ96qeNpJj7LzMYeHDA9YDqL9sU',
      cp04: '1Tx8-Lr7dVixUXs-bQd-IGsxe5lddTs_Qmx0SUYJI4Sw',
      cp05: '1eQTk9tCyJ-wX7eEC2rXiKEFysrM3stz1UvEaH-9g16w',
      cp06: '1BH0XkY5XOT3XaQX6Wzi7eVF3ewE9WiZnbpTWhaDb2xo',
      cp07: '1vm6R7BUoNCBQ6tXZ81biau5D6DiJ4kAPLUAejz89eBM',
      cp08: '14KPxYqW5Xc6llluy72fPeYqJov6e_OsQcyv2HIOGgd4',
      cp09: '1kpmtB-CUKbY8hiUpCw0iAfxaz9fumzDN2ALl06dr_uA',
      cp10: '1eRnu1OM0WDZQpMNnKxe8owTI4bjgshyKv0iFgTxOCgM',
      cp11: '15ncpXrIkcb-YOo78t7BqKTSo72BX0Zz7RLPI-5ZHv7M',
      cp12: '1-ErmhvglR-JCTKQW2HBv6KEUUux1lSiXV4mApkNXUM4',
      cp13: '1C83GyUkMEKc4NH-xZXBhRTILM4Bm4d5gn8pJUR4M4Rs',
      cp14: '1stlBtDndmNjqd2WyLC3HiKpsRN9CN2BoUA5Jz61QFPE',
      cp15: '1s8i9N-3Gixj3O1WxaqMupOZ3ZsO5lb-hudQhYfLBQ48',
      cp16: '1UlerbkoB6SKV6XNm0OfhAIq824hsRY-dcPgbHoXu6gU',
      cp17: '14-TRcO8nisI9lAJJglRhFQ8p3-5yXCmXqDRZqDKHGEg',
      cp18: '1ojCSIOvp1PrXJEyVCtUphOPi34Q6wP6HHPua1N4DAD4',
    },
  },
  // BF läser Ma1a (separat kurs) → ingen BF-post här.
];

// ───────── SETUP (kör en gång) ─────────
function setup() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'byggSammanstallning') ScriptApp.deleteTrigger(triggers[i]);
  }
  ScriptApp.newTrigger('byggSammanstallning').timeBased().everyHours(1).create();
  byggSammanstallning();
  Logger.log('KLART. Aggregering körs varje timme. Kör byggSammanstallning manuellt för direkt uppdatering.');
}

// ───────── AGGREGERING (trigger + manuellt) ─────────
function byggSammanstallning() {
  for (var k = 0; k < KLASSER.length; k++) byggForKlass_(KLASSER[k]);
  PropertiesService.getScriptProperties().setProperty(PROP_UPPD, new Date().toISOString());
}

function byggForKlass_(klass) {
  if (!klass.sheetId || klass.sheetId.indexOf('FYLL_I') === 0) return; // ej konfigurerad än
  var ss = SpreadsheetApp.openById(klass.sheetId);

  var data = {};   // email -> { cpId -> bästa poäng }
  var senast = {}; // email -> senaste inlämning (ms)
  for (var c = 0; c < CHECKPOINTS.length; c++) {
    var fid = klass.formIds[CHECKPOINTS[c].id];
    if (!fid) continue;
    var form;
    try { form = FormApp.openById(fid); } catch (e) { continue; }
    var resps = form.getResponses();
    for (var r = 0; r < resps.length; r++) {
      var email = resps[r].getRespondentEmail();
      if (!email) continue;
      email = email.toLowerCase();
      var score = summaScore_(resps[r]);
      data[email] = data[email] || {};
      var key = CHECKPOINTS[c].id;
      if (data[email][key] == null || score > data[email][key]) data[email][key] = score;
      var ts = resps[r].getTimestamp();
      if (ts) { var ms = ts.getTime(); if (!senast[email] || ms > senast[email]) senast[email] = ms; }
    }
  }

  // Sammanställning: rad per elev, kolumn per checkpoint (bästa poäng)
  var sheet = ss.getSheetByName('Sammanställning') || ss.insertSheet('Sammanställning');
  sheet.clear();
  var header = ['E-post'];
  for (var i = 0; i < CHECKPOINTS.length; i++) header.push(CHECKPOINTS[i].id + ' · ' + CHECKPOINTS[i].namn);
  var rows = [header];
  var emails = Object.keys(data).sort();
  for (var e = 0; e < emails.length; e++) {
    var row = [emails[e]];
    for (var j = 0; j < CHECKPOINTS.length; j++) {
      var v = data[emails[e]][CHECKPOINTS[j].id];
      row.push(v == null ? '' : v);
    }
    rows.push(row);
  }
  sheet.getRange(1, 1, rows.length, header.length).setValues(rows);
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(1);

  var tenta = lasOchSyncTentaFlik_(ss, emails);
  skrivLararvy_(ss, data, senast, tenta);
}

/**
 * "Tenta-av"-fliken som LÄRAREN fyller i manuellt: en cell per elev × moment.
 * Aggregeringen rör aldrig markeringarna — lägger bara till rader för nya elever.
 */
function lasOchSyncTentaFlik_(ss, emails) {
  var head = ['E-post'].concat(MOMENT_ORDNING);
  var sheet = ss.getSheetByName('Tenta-av');
  if (!sheet) {
    sheet = ss.insertSheet('Tenta-av');
    sheet.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight('bold');
    sheet.getRange('A1').setNote(
      'Skriv valfritt tecken (t.ex. x eller ett datum) i ett moment när eleven klarat tenta-av. ' +
      'Syns direkt i Lärarvyn och elevens kvitto. Aggregeringen skriver ALDRIG över dina markeringar.');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 220);
  }
  var existing = {};
  var last = sheet.getLastRow();
  if (last >= 2) {
    var vals = sheet.getRange(2, 1, last - 1, head.length).getValues();
    for (var i = 0; i < vals.length; i++) {
      var em = ('' + vals[i][0]).toLowerCase().trim();
      if (!em) continue;
      var o = {};
      for (var m = 0; m < MOMENT_ORDNING.length; m++) o[MOMENT_ORDNING[m]] = ('' + vals[i][m + 1]).trim() !== '';
      existing[em] = o;
    }
  }
  var toAppend = [];
  for (var e = 0; e < emails.length; e++) {
    if (!existing[emails[e]]) {
      var blank = [emails[e]];
      for (var m2 = 0; m2 < MOMENT_ORDNING.length; m2++) blank.push('');
      toAppend.push(blank);
      var o2 = {};
      for (var m3 = 0; m3 < MOMENT_ORDNING.length; m3++) o2[MOMENT_ORDNING[m3]] = false;
      existing[emails[e]] = o2;
    }
  }
  if (toAppend.length) sheet.getRange(sheet.getLastRow() + 1, 1, toAppend.length, head.length).setValues(toAppend);
  return existing;
}

/** Lärarvy: heat-map (elever × checkpoints), moment-summor, frånvarosignal, status. */
function skrivLararvy_(ss, data, senast, tenta) {
  tenta = tenta || {};
  var GRON = '#c7f0d8', AMBER = '#fdecc8', VIT = '#ffffff', HEAD = '#e2e8f0', ROD = '#fde2e2', FOOT = '#f1f5f9', GOLD = '#fde68a';
  var nCp = CHECKPOINTS.length;
  var momentSize = {};
  for (var m = 0; m < MOMENT_ORDNING.length; m++) momentSize[MOMENT_ORDNING[m]] = 0;
  for (var i = 0; i < nCp; i++) momentSize[CHECKPOINTS[i].moment]++;

  var sheet = ss.getSheetByName('Lärarvy') || ss.insertSheet('Lärarvy');
  sheet.clear();

  var header = ['Elev'];
  for (var i2 = 0; i2 < nCp; i2++) header.push(CHECKPOINTS[i2].id);
  for (var m2 = 0; m2 < MOMENT_ORDNING.length; m2++) header.push(MOMENT_ORDNING[m2]);
  header.push('Totalt', 'Senast aktiv', 'Status');

  var values = [header];
  var bgs = [header.map(function () { return HEAD; })];
  var passPerCp = []; for (var i3 = 0; i3 < nCp; i3++) passPerCp.push(0);
  var nu = (new Date()).getTime();

  var emails = Object.keys(data).sort();
  for (var e = 0; e < emails.length; e++) {
    var email = emails[e];
    var row = [email.split('@')[0]];
    var brow = [VIT];
    var momentCount = {};
    for (var mm = 0; mm < MOMENT_ORDNING.length; mm++) momentCount[MOMENT_ORDNING[mm]] = 0;
    var total = 0;
    for (var k = 0; k < nCp; k++) {
      var sc = data[email][CHECKPOINTS[k].id];
      if (sc == null) { row.push(''); brow.push(VIT); }
      else if (sc >= TROSKEL) { row.push(sc); brow.push(GRON); momentCount[CHECKPOINTS[k].moment]++; total++; passPerCp[k]++; }
      else { row.push(sc); brow.push(AMBER); }
    }
    var tm = tenta[email] || {};
    for (var a = 0; a < MOMENT_ORDNING.length; a++) {
      var o = MOMENT_ORDNING[a];
      var done = momentCount[o] + '/' + momentSize[o];
      if (tm[o]) { row.push('✅ ' + done); brow.push(GOLD); }
      else if (momentSize[o] > 0 && momentCount[o] === momentSize[o]) { row.push(done); brow.push(GRON); }
      else { row.push(done); brow.push(VIT); }
    }
    row.push(total + '/' + nCp); brow.push(VIT);
    var ms = senast[email];
    row.push(ms ? Utilities.formatDate(new Date(ms), 'Europe/Stockholm', 'd MMM') : '—'); brow.push(VIT);
    var st = beraknaStatus_(momentCount, momentSize, total, nCp, ms, nu, tm);
    row.push(st.text); brow.push(st.farg);
    values.push(row); bgs.push(brow);
  }

  var foot = ['Klarade i klassen'];
  for (var k2 = 0; k2 < nCp; k2++) foot.push(passPerCp[k2] + '/' + emails.length);
  for (var f = 0; f < MOMENT_ORDNING.length + 3; f++) foot.push('');
  var footBg = [HEAD]; for (var c = 1; c < header.length; c++) footBg.push(FOOT);
  values.push(foot); bgs.push(footBg);

  sheet.getRange(1, 1, values.length, header.length).setValues(values);
  sheet.getRange(1, 1, bgs.length, header.length).setBackgrounds(bgs);
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(1);
  sheet.getRange(1, 1, 1, header.length).setFontWeight('bold').setVerticalAlignment('bottom');
  sheet.getRange(1, 2, 1, nCp).setTextRotation(90);
  sheet.setRowHeight(1, 110);
  sheet.setColumnWidth(1, 150);
  for (var c2 = 2; c2 <= nCp + 1; c2++) sheet.setColumnWidth(c2, 34);
  sheet.getRange(values.length, 1, 1, header.length).setFontWeight('bold');
  sheet.getRange(1, 1, values.length, header.length).setHorizontalAlignment('center');
  sheet.getRange(1, 1, values.length, 1).setHorizontalAlignment('left');
}

/** Statustext + färg för en elevrad. Ren funktion. */
function beraknaStatus_(momentCount, momentSize, total, nCp, ms, nu, tenta) {
  var GRON = '#c7f0d8', VIT = '#ffffff', ROD = '#fde2e2', GOLD = '#fde68a';
  tenta = tenta || {};
  var teach = ['Algebra', 'Ekonomi', 'Funktioner', 'Fördjupning']; // Kursprov hanteras separat
  var tentaKlara = [];
  for (var i = 0; i < teach.length; i++) if (tenta[teach[i]]) tentaKlara.push(teach[i]);

  if (tenta['Kursprov']) return { text: '🎉 Klar med kursen', farg: GRON };
  if (total === 0 && tentaKlara.length === 0) return { text: 'Inte börjat', farg: VIT };

  var redo = [];
  for (var j = 0; j < teach.length; j++) {
    if (!tenta[teach[j]] && momentSize[teach[j]] > 0 && momentCount[teach[j]] === momentSize[teach[j]]) redo.push(teach[j]);
  }
  if (redo.length) return { text: '🎯 Tenta av: ' + redo.join(', '), farg: GOLD };

  var dagar = ms ? Math.floor((nu - ms) / 86400000) : 999;
  if (dagar > 14) return { text: '⚠️ Inaktiv ' + dagar + ' d', farg: ROD };
  if (tentaKlara.length) return { text: '✅ ' + tentaKlara.join(', ') + ' klar', farg: GRON };
  return { text: 'Pågår', farg: VIT };
}

/** Antal rätt för en quiz-inlämning (max 10). */
function summaScore_(resp) {
  var items = resp.getGradableItemResponses();
  var s = 0;
  for (var i = 0; i < items.length; i++) {
    var sc = items[i].getScore();
    if (typeof sc === 'number') s += sc;
  }
  return s;
}

// ───────── KVITTO (doGet) ─────────
function doGet() {
  var email = '';
  try { email = Session.getActiveUser().getEmail() || ''; } catch (e) { email = ''; }
  var data = hamtaElevData(email);
  return HtmlService.createHtmlOutput(byggKvittoHtml(email, data))
    .setTitle('Mitt kvitto — Ma1b')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function testaLokalt() { Logger.log(Session.getActiveUser().getEmail()); }

/** Slår upp eleven i klassens/klassernas Sammanställning; använder den som har rad. */
function hamtaElevData(email) {
  var props = PropertiesService.getScriptProperties();
  var scores = {}; // cpId -> bästa poäng
  var funnenKlass = null;
  if (email) {
    for (var k = 0; k < KLASSER.length && !funnenKlass; k++) {
      var klass = KLASSER[k];
      if (!klass.sheetId || klass.sheetId.indexOf('FYLL_I') === 0) continue;
      var sheet = SpreadsheetApp.openById(klass.sheetId).getSheetByName('Sammanställning');
      if (!sheet || sheet.getLastRow() < 2) continue;
      var values = sheet.getDataRange().getValues();
      for (var r = 1; r < values.length; r++) {
        if (('' + values[r][0]).toLowerCase() === email.toLowerCase()) {
          // kolumnordning = CHECKPOINTS-ordning (header byggd i samma loop)
          for (var c = 1; c < values[0].length; c++) scores[CHECKPOINTS[c - 1].id] = values[r][c];
          funnenKlass = klass;
          break;
        }
      }
    }
  }
  var tentaMarks = funnenKlass ? lasTentaForElev_(funnenKlass.sheetId, email) : {};
  return formaStruktur(email, scores, props.getProperty(PROP_UPPD), tentaMarks);
}

function lasTentaForElev_(sheetId, email) {
  var marks = {};
  for (var m = 0; m < MOMENT_ORDNING.length; m++) marks[MOMENT_ORDNING[m]] = false;
  if (!sheetId || !email) return marks;
  var sheet = SpreadsheetApp.openById(sheetId).getSheetByName('Tenta-av');
  if (!sheet || sheet.getLastRow() < 2) return marks;
  var vals = sheet.getDataRange().getValues();
  for (var r = 1; r < vals.length; r++) {
    if (('' + vals[r][0]).toLowerCase() === email.toLowerCase()) {
      for (var c = 0; c < MOMENT_ORDNING.length; c++) marks[MOMENT_ORDNING[c]] = ('' + vals[r][c + 1]).trim() !== '';
      break;
    }
  }
  return marks;
}

/** Ren funktion: poäng-map → kvitto-struktur (testbar utan Google). */
function formaStruktur(email, scores, uppdISO, tentaMarks) {
  tentaMarks = tentaMarks || {};
  var momentMap = {};
  var harData = false;
  for (var i = 0; i < CHECKPOINTS.length; i++) {
    var cp = CHECKPOINTS[i];
    momentMap[cp.moment] = momentMap[cp.moment] || [];
    var sc = scores[cp.id];
    var num = (sc === '' || sc == null) ? null : Number(sc);
    if (num != null && !isNaN(num)) harData = true;
    momentMap[cp.moment].push({ namn: cp.namn, klarad: (num != null && num >= TROSKEL) });
  }
  var moment = [];
  for (var o = 0; o < MOMENT_ORDNING.length; o++) {
    var titel = MOMENT_ORDNING[o];
    var cps = momentMap[titel] || [];
    var allaKlara = cps.length > 0;
    for (var j = 0; j < cps.length; j++) if (!cps[j].klarad) allaKlara = false;
    var tav = tentaMarks[titel] ? 'klarad' : (allaKlara ? 'redo' : 'ej redo');
    moment.push({ titel: titel, checkpoints: cps, tentaAv: tav });
  }
  return {
    namn: email ? email.split('@')[0] : 'elev',
    moment: moment,
    harData: harData,
    uppdaterad: uppdISO || '',
  };
}

function byggKvittoHtml(email, data) {
  var nastaSteg = 'Du har klarat allt — grymt jobbat!';
  outer:
  for (var i = 0; i < data.moment.length; i++) {
    var o = data.moment[i];
    for (var j = 0; j < o.checkpoints.length; j++) {
      if (!o.checkpoints[j].klarad) {
        nastaSteg = 'Nästa checkpoint: <strong>' + esc(o.checkpoints[j].namn) + '</strong> (' + esc(o.titel) + ')';
        break outer;
      }
    }
    if (o.tentaAv === 'redo') {
      nastaSteg = '<strong>' + esc(o.titel) + '</strong> är klart att tenta av — boka tid med din lärare!';
      break;
    }
  }

  var momentHtml = data.moment.map(function (o) {
    var klarade = o.checkpoints.filter(function (d) { return d.klarad; }).length;
    var totalt = o.checkpoints.length;
    var procent = totalt ? Math.round((klarade / totalt) * 100) : 0;
    var rader = o.checkpoints.map(function (d) {
      return '<li class="dm ' + (d.klarad ? 'klar' : 'kvar') + '">' + bock(d.klarad) + esc(d.namn) + '</li>';
    }).join('');
    var tentaText = o.tentaAv === 'klarad' ? '✅ Momentet avklarat — tenta-av godkänd!'
      : (klarade === totalt && totalt > 0) ? '🎯 Redo att tenta av!'
      : 'Tenta-av: när alla checkpoints är klarade';
    return '<section class="omr"><div class="omr-head"><h2>' + esc(o.titel) + '</h2>' +
      '<span class="omr-count">' + klarade + ' / ' + totalt + ' klarade</span></div>' +
      '<div class="bar"><div class="bar-fill" style="width:' + procent + '%"></div></div>' +
      '<ul class="dm-list">' + rader + '</ul>' +
      '<p class="tenta">' + tentaText + '</p></section>';
  }).join('');

  var banner = data.harData ? ''
    : '<p class="info">Inga resultat än — gör en checkpoint längst ner på en lektion, så dyker dina framsteg upp här.</p>';

  var uppd = data.uppdaterad ? '<p class="foot">Uppdateras varje timme. Senast: ' + esc(formatTid(data.uppdaterad)) + '</p>'
    : '<p class="foot">Bara du och din lärare ser det här. Uppdateras varje timme.</p>';

  return '<!doctype html><html lang="sv"><head><meta charset="utf-8">' +
'<meta name="viewport" content="width=device-width, initial-scale=1"><style>' +
'  * { box-sizing: border-box; }' +
'  body { margin:0; font-family:-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; background:#f4f6fb; color:#0f172a; padding:18px; }' +
'  .wrap { max-width:640px; margin:0 auto; }' +
'  .eyebrow { font-size:12px; text-transform:uppercase; letter-spacing:.08em; color:#1d4ed8; font-weight:700; }' +
'  h1 { font-size:26px; margin:4px 0 2px; }' +
'  .who { font-size:13px; color:#64748b; }' +
'  .info { font-size:13px; background:#e0ecff; color:#1e3a8a; padding:10px 12px; border-radius:8px; margin:12px 0 0; }' +
'  .nasta { background:#1d4ed8; color:#fff; padding:14px 16px; border-radius:12px; margin:16px 0; font-size:15px; }' +
'  .nasta .lbl { display:block; font-size:11px; text-transform:uppercase; letter-spacing:.07em; opacity:.85; margin-bottom:3px; }' +
'  .omr { background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:14px 16px; margin:12px 0; box-shadow:0 1px 2px rgba(20,40,80,.05); }' +
'  .omr-head { display:flex; align-items:baseline; justify-content:space-between; }' +
'  .omr-head h2 { font-size:17px; margin:0; }' +
'  .omr-count { font-size:12px; color:#64748b; font-weight:600; }' +
'  .bar { height:8px; background:#eef2f7; border-radius:99px; overflow:hidden; margin:10px 0 12px; }' +
'  .bar-fill { height:100%; background:#2563eb; border-radius:99px; }' +
'  .dm-list { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:5px; }' +
'  .dm { font-size:14px; padding:6px 10px; border-radius:6px; background:#f8fafc; }' +
'  .dm.kvar { color:#94a3b8; }' +
'  .tenta { font-size:13px; color:#334155; margin:12px 0 0; font-weight:600; }' +
'  .foot { font-size:12px; color:#94a3b8; text-align:center; margin-top:18px; }' +
'</style></head><body><div class="wrap">' +
'  <div class="eyebrow">📼 Mitt kvitto · Ma1b</div>' +
'  <h1>Dina framsteg</h1>' +
'  <div class="who">' + (email ? 'Inloggad som ' + esc(email) : 'Ej inloggad — öppna i egen flik och logga in med ditt skolkonto') + '</div>' +
   banner +
'  <div class="nasta"><span class="lbl">Vad du gör härnäst</span>' + nastaSteg + '</div>' +
   momentHtml + uppd +
'</div>' +
'<script>' +
'  function rapporteraHojd(){ var h=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight); if(window.parent) window.parent.postMessage({kvittoHeight:h},"*"); }' +
'  window.addEventListener("load",rapporteraHojd); window.addEventListener("resize",rapporteraHojd); setTimeout(rapporteraHojd,300);' +
'</script></body></html>';
}

function formatTid(iso) {
  try { return Utilities.formatDate(new Date(iso), 'Europe/Stockholm', 'd MMM HH:mm'); }
  catch (e) { return ''; }
}
function bock(klarad) { return klarad ? '✅ ' : '⬜ '; }
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
