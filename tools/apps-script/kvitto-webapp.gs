/**
 * Omläsning Ma1b — master-Sheet + kvitto-webbapp (FAS B)
 * =======================================================
 * Tre saker i samma projekt:
 *   1. byggSammanstallning() — läser alla 18 checkpoint-formulärens svar, räknar varje
 *      elevs BÄSTA poäng per delmoment, skriver en "Sammanställning"-flik i master-Sheetet.
 *      Körs av en TIMME-trigger (en enda trigger, inte 18) + kan köras manuellt.
 *   2. doGet() — kvitto-webbappen. Läser BARA Sammanställning-fliken (snabbt) för den
 *      inloggade eleven och renderar framstegsvyn. Bäddas in på /omlasning/mitt-kvitto.
 *   3. setup() — körs EN gång: skapar master-Sheetet, sparar dess id, installerar triggern,
 *      kör första aggregeringen.
 *
 * VIKTIGT om data: master-Sheetet innehåller elevdata (mejl + poäng). Det bor i Google
 * (ga.dbgy.se), ALDRIG i repot. Detta script innehåller bara formulär-id:n (ger ingen
 * åtkomst i sig). Flytta master-Sheetet till Delade enheten när den finns.
 *
 * KÖR SÅ HÄR (av Simon, inkognito inloggad på ga.dbgy.se):
 *   1. Klistra in HELA filen över den gamla koden i kvitto-projektet → spara
 *   2. Kör funktionen "setup" → godkänn behörigheterna (Forms + Sheets + Triggers)
 *      → i körloggen står master-Sheetets URL (spara den / lägg i driftinstruktionen)
 *   3. Implementera → Hantera distributioner → pennan ✏️ → Version: Ny version → Implementera
 *      (samma /exec-URL behålls, så inget ändras på sajten)
 *   4. Öppna /omlasning/mitt-kvitto — nu visas riktiga resultat (gör en checkpoint först
 *      och kör ev. byggSammanstallning manuellt för att se direkt; annars uppdateras varje timme)
 */

// ───────── KONFIG ─────────
var TROSKEL = 8; // 8/10 rätt = klarad
var PROP_SHEET = 'masterSheetId';
var PROP_UPPD = 'senastUppdaterad';

// Delmoment i samma ordning som på sajten. formId = formulärets fil-id (från REDIGERA-länken).
var DELMOMENT = [
  // Algebra
  { omrade: 'Algebra', namn: 'Uttryck', formId: '1a3U8aXIdlq-re8Wt0kIaHUUHyxN_-h8JBOJ0eAd73s0' },
  { omrade: 'Algebra', namn: 'Faktorisering', formId: '1YdUw50E9wKw-TAUnWvxrNc0Z-i-KBd2ybXnpceif6-4' },
  { omrade: 'Algebra', namn: 'Ställa upp och tolka uttryck', formId: '1GhIIuA2rxx3l9GytAqCiil7_fjd24sOlnp0uKJwi64o' },
  { omrade: 'Algebra', namn: 'Ekvationer', formId: '176ewjaNfNn6impNLBCnVXOL8wS_nWeSYfSsKCxuu-Qw' },
  { omrade: 'Algebra', namn: 'Potensekvationer', formId: '1L66UaIKnldWEulZvozm2i7zxoQzn4jy5HZ5oa_dSPns' },
  { omrade: 'Algebra', namn: 'Formler', formId: '1C3zVNGtS8k0aC1vbVm1Cwg2XaZ1Y3nf4z94qlYZun9I' },
  { omrade: 'Algebra', namn: 'Problemlösning med algebra', formId: '1lTmxaDbYOFC84iAz_CBxNzOPsKPF447Wrv17clxMifM' },
  { omrade: 'Algebra', namn: 'Potenser och rötter', formId: '1SyosZgyb777XSx5_8Hu_dNNfpOQgflWxtNH4Y5EGnUc' },
  // Ekonomi
  { omrade: 'Ekonomi', namn: 'Grunder i procent', formId: '19bOQhAg4VC6MM6idcMvVycJn80jsr_q5snFqxluYIjM' },
  { omrade: 'Ekonomi', namn: 'Förändringsfaktor och upprepad förändring', formId: '1uu01kGcUoWy7CuLVJ1IJaDLb7s1gF7wAKKjytOcC7UI' },
  { omrade: 'Ekonomi', namn: 'Lån, ränta och amortering', formId: '1dswpLNqM25fcjQHbd7eX9Jel3lgvT9fJsV-IhQtZqgQ' },
  // Funktioner
  { omrade: 'Funktioner', namn: 'Tolka grafer', formId: '16XtZ00D-TwG2W6ppOgw4bpxpgwRYvzWY1QoCXMOTDqM' },
  { omrade: 'Funktioner', namn: 'Linjära funktioner', formId: '1UuDf2YBLvXXD8D5YgXMJwhWcRXg7yYAiXUsgDpnRjCg' },
  { omrade: 'Funktioner', namn: 'Räta linjens ekvation', formId: '1869iKIfDpzZtYs3oPLdizrSBvHiW9c-ZUqyi3Haudqg' },
  { omrade: 'Funktioner', namn: 'Funktionsbegreppet f(x)', formId: '1HFWFsI1OpLiaLesCx92p_YhlUcxE-7tUt5rrpMtJX1w' },
  { omrade: 'Funktioner', namn: 'Exponentialfunktioner', formId: '1G_11YY-h38jx67N0udZ0HPW1wtCOpKRYuRmHCivBa-Y' },
  { omrade: 'Funktioner', namn: 'Exponentialfunktioner 2', formId: '18Uc7C-YEh8bjW6qwqIBerE7gY-X9BWVtE3NhjfHWt9A' },
  { omrade: 'Funktioner', namn: 'Exponentialekvation från graf', formId: '115APhbbtSOV5hU_-fFGNwvRWpvPNV5A9UIENGV413mk' },
];
var OMRADEN_ORDNING = ['Algebra', 'Ekonomi', 'Funktioner'];

// ───────── SETUP (kör en gång) ─────────
function setup() {
  var props = PropertiesService.getScriptProperties();
  var ssId = props.getProperty(PROP_SHEET);
  var ss;
  if (ssId) {
    ss = SpreadsheetApp.openById(ssId);
  } else {
    ss = SpreadsheetApp.create('DBGY Matte — Omläsning data');
    props.setProperty(PROP_SHEET, ss.getId());
  }
  // Installera EN timme-trigger för aggregeringen (rensa ev. gamla först)
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'byggSammanstallning') ScriptApp.deleteTrigger(triggers[i]);
  }
  ScriptApp.newTrigger('byggSammanstallning').timeBased().everyHours(1).create();

  byggSammanstallning();
  Logger.log('KLART. Master-Sheet: ' + ss.getUrl());
  Logger.log('Aggregering körs nu varje timme. Kör byggSammanstallning manuellt för att uppdatera direkt.');
}

// ───────── AGGREGERING (trigger + manuellt) ─────────
function byggSammanstallning() {
  var props = PropertiesService.getScriptProperties();
  var ssId = props.getProperty(PROP_SHEET);
  if (!ssId) throw new Error('Kör setup() först — master-Sheet saknas.');
  var ss = SpreadsheetApp.openById(ssId);

  // data: email -> { delmomentNamn -> bästa poäng };  senast: email -> senaste inlämning (ms)
  var data = {};
  var senast = {};
  for (var d = 0; d < DELMOMENT.length; d++) {
    var form;
    try { form = FormApp.openById(DELMOMENT[d].formId); }
    catch (e) { continue; } // hoppa över om ett formulär inte går att öppna
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

  // Skriv Sammanställning-fliken: rad per elev, kolumn per delmoment (bästa poäng)
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

/**
 * Läser (och vid behov skapar) "Tenta-av"-fliken som LÄRAREN fyller i manuellt:
 * en cell per elev × område. Aggregeringen RÖR ALDRIG markeringarna — den lägger bara
 * till rader för nya elever och läser av vad som är ifyllt. Allt icke-tomt = klarad.
 */
function lasOchSyncTentaFlik_(ss, emails) {
  var sheet = ss.getSheetByName('Tenta-av');
  if (!sheet) {
    sheet = ss.insertSheet('Tenta-av');
    sheet.getRange(1, 1, 1, 4).setValues([['E-post', 'Algebra', 'Ekonomi', 'Funktioner']]).setFontWeight('bold');
    sheet.getRange('A1').setNote(
      'Skriv valfritt tecken (t.ex. x eller ett datum) i Algebra/Ekonomi/Funktioner-cellen ' +
      'när eleven klarat tenta-av för området.\n\n' +
      'Det syns direkt i Lärarvyn och i elevens kvitto. Aggregeringen skriver ALDRIG över ' +
      'dina markeringar — den lägger bara till rader för nya elever.');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 220);
  }
  var existing = {};
  var last = sheet.getLastRow();
  if (last >= 2) {
    var vals = sheet.getRange(2, 1, last - 1, 4).getValues();
    for (var i = 0; i < vals.length; i++) {
      var em = ('' + vals[i][0]).toLowerCase().trim();
      if (!em) continue;
      existing[em] = {
        Algebra: ('' + vals[i][1]).trim() !== '',
        Ekonomi: ('' + vals[i][2]).trim() !== '',
        Funktioner: ('' + vals[i][3]).trim() !== '',
      };
    }
  }
  var toAppend = [];
  for (var e = 0; e < emails.length; e++) {
    if (!existing[emails[e]]) {
      toAppend.push([emails[e], '', '', '']);
      existing[emails[e]] = { Algebra: false, Ekonomi: false, Funktioner: false };
    }
  }
  if (toAppend.length) sheet.getRange(sheet.getLastRow() + 1, 1, toAppend.length, 4).setValues(toAppend);
  return existing;
}

/**
 * Bygger den formaterade "Lärarvy"-fliken: heat-map (elever × delmoment), områdes-
 * och totalsummor, frånvarosignal och statuskolumn. Återanvändbar för alla kurser.
 */
function skrivLararvy_(ss, data, senast, tenta) {
  tenta = tenta || {};
  // Korta kolumnetiketter (heat-map blir för bred annars)
  var KORT = {
    'Uttryck': 'Uttryck', 'Faktorisering': 'Faktor.', 'Ställa upp och tolka uttryck': 'Ställa upp',
    'Ekvationer': 'Ekvationer', 'Potensekvationer': 'Potensekv.', 'Formler': 'Formler',
    'Problemlösning med algebra': 'Problemlösn.', 'Potenser och rötter': 'Pot/rötter',
    'Grunder i procent': 'Procent', 'Förändringsfaktor och upprepad förändring': 'Förändr.faktor',
    'Lån, ränta och amortering': 'Lån/ränta',
    'Tolka grafer': 'Tolka graf', 'Linjära funktioner': 'Linjära', 'Räta linjens ekvation': 'Räta linjen',
    'Funktionsbegreppet f(x)': 'f(x)', 'Exponentialfunktioner': 'Exp.funk',
    'Exponentialfunktioner 2': 'Exp.funk 2', 'Exponentialekvation från graf': 'Exp. ur graf',
  };
  var GRON = '#c7f0d8', AMBER = '#fdecc8', VIT = '#ffffff', HEAD = '#e2e8f0', ROD = '#fde2e2', FOOT = '#f1f5f9', GOLD = '#fde68a';

  var nDelm = DELMOMENT.length;
  var areaSize = { Algebra: 0, Ekonomi: 0, Funktioner: 0 };
  for (var i = 0; i < nDelm; i++) areaSize[DELMOMENT[i].omrade]++;

  var sheet = ss.getSheetByName('Lärarvy') || ss.insertSheet('Lärarvy');
  sheet.clear();

  var header = ['Elev'];
  for (var i = 0; i < nDelm; i++) header.push(KORT[DELMOMENT[i].namn] || DELMOMENT[i].namn);
  header.push('Algebra', 'Ekonomi', 'Funktioner', 'Totalt', 'Senast aktiv', 'Status');

  var values = [header];
  var bgs = [header.map(function () { return HEAD; })];
  var passPerDelm = []; for (var i = 0; i < nDelm; i++) passPerDelm.push(0);
  var nu = (new Date()).getTime();

  var emails = Object.keys(data).sort();
  for (var e = 0; e < emails.length; e++) {
    var email = emails[e];
    var row = [email.split('@')[0]];
    var brow = [VIT];
    var areaCount = { Algebra: 0, Ekonomi: 0, Funktioner: 0 };
    var total = 0;
    for (var k = 0; k < nDelm; k++) {
      var sc = data[email][DELMOMENT[k].namn];
      if (sc == null) { row.push(''); brow.push(VIT); }
      else if (sc >= TROSKEL) { row.push(sc); brow.push(GRON); areaCount[DELMOMENT[k].omrade]++; total++; passPerDelm[k]++; }
      else { row.push(sc); brow.push(AMBER); }
    }
    var tm = tenta[email] || { Algebra: false, Ekonomi: false, Funktioner: false };
    var omr3 = ['Algebra', 'Ekonomi', 'Funktioner'];
    for (var a = 0; a < omr3.length; a++) {
      var o = omr3[a];
      var done = areaCount[o] + '/' + areaSize[o];
      if (tm[o]) { row.push('✅ ' + done); brow.push(GOLD); }                 // tenta-av godkänd (lärare)
      else if (areaSize[o] > 0 && areaCount[o] === areaSize[o]) { row.push(done); brow.push(GRON); } // alla checkpoints klara — redo att tenta
      else { row.push(done); brow.push(VIT); }
    }
    row.push(total + '/' + nDelm); brow.push(VIT);
    var ms = senast[email];
    row.push(ms ? Utilities.formatDate(new Date(ms), 'Europe/Stockholm', 'd MMM') : '—');
    brow.push(VIT);
    var st = beraknaStatus_(areaCount, areaSize, total, nDelm, ms, nu, tm);
    row.push(st.text); brow.push(st.farg);
    values.push(row); bgs.push(brow);
  }

  // Footer: hur många i klassen som klarat varje delmoment
  var foot = ['Klarade i klassen'];
  for (var k = 0; k < nDelm; k++) foot.push(passPerDelm[k] + '/' + emails.length);
  foot.push('', '', '', '', '', '');
  var footBg = [HEAD]; for (var c = 1; c < header.length; c++) footBg.push(FOOT);
  values.push(foot); bgs.push(footBg);

  sheet.getRange(1, 1, values.length, header.length).setValues(values);
  sheet.getRange(1, 1, bgs.length, header.length).setBackgrounds(bgs);

  // Formatering
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(1);
  sheet.getRange(1, 1, 1, header.length).setFontWeight('bold').setVerticalAlignment('bottom');
  sheet.getRange(1, 2, 1, nDelm).setTextRotation(90); // lodräta delmoment-rubriker
  sheet.setRowHeight(1, 130);
  sheet.setColumnWidth(1, 150);
  for (var c = 2; c <= nDelm + 1; c++) sheet.setColumnWidth(c, 32);
  sheet.getRange(values.length, 1, 1, header.length).setFontWeight('bold');
  sheet.getRange(1, 1, values.length, header.length).setHorizontalAlignment('center');
  sheet.getRange(1, 1, values.length, 1).setHorizontalAlignment('left');
}

/** Statustext + bakgrundsfärg för en elevrad. Ren funktion (testbar).
 *  tenta = {Algebra,Ekonomi,Funktioner} bool = lärarmarkerad tenta-av (det som verkligen räknas). */
function beraknaStatus_(areaCount, areaSize, total, nDelm, ms, nu, tenta) {
  var GRON = '#c7f0d8', VIT = '#ffffff', ROD = '#fde2e2', GOLD = '#fde68a';
  tenta = tenta || {};
  var omr = ['Algebra', 'Ekonomi', 'Funktioner'];
  var tentaKlara = [];
  for (var i = 0; i < omr.length; i++) if (tenta[omr[i]]) tentaKlara.push(omr[i]);

  if (tentaKlara.length === omr.length) return { text: '🎉 Klar med allt', farg: GRON };
  if (total === 0 && tentaKlara.length === 0) return { text: 'Inte börjat', farg: VIT };

  // Redo att tenta av: alla checkpoints i området klara men tenta-av ej markerad
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
    .setTitle('Mitt kvitto')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/** Hjälp för att testa behörigheter i editorn. */
function testaLokalt() { Logger.log(Session.getActiveUser().getEmail()); }

/** Läser Sammanställning-fliken för den inloggade eleven och bygger kvitto-strukturen. */
function hamtaElevData(email) {
  var props = PropertiesService.getScriptProperties();
  var ssId = props.getProperty(PROP_SHEET);
  var scores = {}; // "Område: namn" -> bästa poäng
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

/** Läser den inloggade elevens tenta-av-markeringar ur "Tenta-av"-fliken. */
function lasTentaForElev_(ssId, email) {
  var marks = { Algebra: false, Ekonomi: false, Funktioner: false };
  if (!ssId || !email) return marks;
  var sheet = SpreadsheetApp.openById(ssId).getSheetByName('Tenta-av');
  if (!sheet || sheet.getLastRow() < 2) return marks;
  var vals = sheet.getDataRange().getValues();
  for (var r = 1; r < vals.length; r++) {
    if (('' + vals[r][0]).toLowerCase() === email.toLowerCase()) {
      marks.Algebra = ('' + vals[r][1]).trim() !== '';
      marks.Ekonomi = ('' + vals[r][2]).trim() !== '';
      marks.Funktioner = ('' + vals[r][3]).trim() !== '';
      break;
    }
  }
  return marks;
}

/** Ren funktion: omvandlar poäng-map till kvitto-strukturen (testbar utan Google).
 *  tentaMarks = {Algebra,Ekonomi,Funktioner} bool = lärarmarkerad tenta-av. */
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
'  <div class="eyebrow">📼 Mitt kvitto · Omläsning</div>' +
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
  try {
    var d = new Date(iso);
    return Utilities.formatDate(d, 'Europe/Stockholm', 'd MMM HH:mm');
  } catch (e) { return ''; }
}

function bock(klarad) { return klarad ? '✅ ' : '⬜ '; }

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
