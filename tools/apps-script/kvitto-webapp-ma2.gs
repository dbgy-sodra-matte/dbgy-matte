/**
 * Prövning Ma2a / Ma2b — master-Sheet + kvitto-webbapp
 * ====================================================
 * EN fil för BÅDA kurserna. Skillnaden mellan dem är konfigblocket längst upp:
 * sätt KURS = '2a' eller '2b' i respektive Apps Script-projekt. Allt annat är
 * identiskt, så en rättning behöver bara göras på ett ställe.
 *
 * SKILLNADEN MOT MA1-KVITTOT: Ma1 kör mastery — eleven tentar av ett område i
 * taget när det är klart. Ma2 kör DELTENTOR: två fasta provtillfällen (Del 1
 * vecka 43, Del 2 vecka 47). Därför finns ingen anmälningsknapp här — datumen är
 * bestämda i förväg — och "klarat kursen" betyder båda deltentorna godkända.
 * Checkpointsen är förberedelsen, deltentorna är betyget.
 *
 *   1. setup() — körs EN gång: skapar master-Sheetet, sparar id i Script Properties,
 *      installerar en timme-trigger, kör första aggregeringen.
 *   2. byggSammanstallning() — läser alla checkpointformulärs svar, bästa poäng per
 *      elev/delmoment, skriver Sammanställning + Lärarvy + Frågor + Deltentor.
 *   3. doGet() — kvitto-webbappen som bäddas in på /omlasning-2a/mitt-kvitto.
 *
 * VIKTIGT: master-Sheetet innehåller elevdata (mejl + poäng) — bor i Google
 * (ga.dbgy.se), ALDRIG i repot. Den här filen innehåller bara formulär-id:n.
 *
 * INNAN DU KÖR: formulär-id:na nedan är tomma tills checkpoint-generatorerna
 * körts. setup() vägrar starta med tomma id:n i stället för att bygga ett
 * tomt Sheet som ser färdigt ut. Kör generatorerna först, klistra in körloggen
 * i chatten, så fylls id:na i.
 *
 * KÖR SÅ HÄR (av Simon, inloggad på ga.dbgy.se):
 *   1. NYTT Apps Script-projekt per kurs → klistra in HELA filen → sätt KURS → spara
 *   2. Kör "setup" → godkänn behörigheter → master-Sheetets URL står i körloggen
 *   3. Implementera → Ny distribution → Webbapp → "Kör som: Mig",
 *      "Åtkomst: Alla inom AcadeMedia" → kopiera /exec-URL:en → klistra in i chatten
 *   4. Master-Sheetet: håll personal-only (dela ALDRIG med elever).
 */

// ═════════════════════ KONFIG ═════════════════════

var KURS = '2a';           // <-- '2a' eller '2b'. ENDA raden som skiljer projekten åt.
var TROSKEL = 8;           // 8/10 rätt = checkpoint klarad
var PROP_SHEET = 'masterSheetId';
var PROP_UPPD = 'senastUppdaterad';

/** Allt kursspecifikt på ett ställe. formId fylls i efter att generatorerna körts. */
var KONFIG = {
  '2a': {
    titel: 'Prövning Ma2a',
    sheetNamn: 'DBGY Matte — Prövning Ma2a data',
    basUrl: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/',
    omraden: ['Andragradare', 'Ekvationssystem', 'Potenser', 'Statistik'],
    deltentor: [
      { namn: 'Del 1', vecka: 'vecka 43', omraden: ['Andragradare'] },
      { namn: 'Del 2', vecka: 'vecka 47', omraden: ['Ekvationssystem', 'Potenser', 'Statistik'] },
    ],
    delmoment: [
      // Andragradare (9) — Del 1
      { omrade: 'Andragradare', namn: 'Enkla andragradsekvationer', kort: 'Enkla ekv', formId: '1lEXYCrTi8egI0aNdLlUiUIBW9e-FcSeDEALNgvJSvz8' },
      { omrade: 'Andragradare', namn: 'Nollproduktmetoden', kort: 'Nollprod.', formId: '1S1bhsFrV0L6oOP6j5YjnatfIWvpN9CuKnZWoCqxOZP4' },
      { omrade: 'Andragradare', namn: 'Pythagoras sats och koordinatgeometri', kort: 'Pythagoras', formId: '1uGXklkSlNe4UwUI7RqTfMig9LFd1yoB_hn4grLUEvCk' },
      { omrade: 'Andragradare', namn: 'Parentesmultiplikation', kort: 'Parentes', formId: '1bRRkr_NBz3Ag1w6iMPXmwFHxCPmQb2UrJCbGFoc17Tg' },
      { omrade: 'Andragradare', namn: 'Kvadreringsreglerna och konjugatregeln', kort: 'Kvadr./konj.', formId: '1h-IMN7ke9dmk4-bm9Pg-BeUI2PfKBbgp-BL1IZq67lc' },
      { omrade: 'Andragradare', namn: 'pq-formeln', kort: 'pq', formId: '1NySxmrOrsMW_aNAJYl_a8AkgdVg1WqbE0AS0cgNR8RU' },
      { omrade: 'Andragradare', namn: 'Andragradsfunktioner grafiskt', kort: 'Grafiskt', formId: '1dKpD6Khf1Um7N11wPSFgCOcsFvZglokTvy1_AdDfyMU' },
      { omrade: 'Andragradare', namn: 'Andragradsfunktioner algebraiskt', kort: 'Algebraiskt', formId: '1hFNlZWFqgshi4dJ0cbxOynuoj_Xk7BYdsFvMozweQ4Y' },
      { omrade: 'Andragradare', namn: 'Andragradsfunktioner problemlösning', kort: 'Problemlösn.', formId: '1oyygDVGHTDWF26js5VosECPnraTNCS8lbOTH8yK_BOs' },
      // Ekvationssystem (7) — Del 2
      { omrade: 'Ekvationssystem', namn: 'Funktionsbegreppet f(x)', kort: 'f(x)', formId: '1hp-vzUHinXy56tDazvnpMWpe7l4mONjNAtRsa5p9axo' },
      { omrade: 'Ekvationssystem', namn: 'Räta linjens ekvation', kort: 'Räta linjen', formId: '1QkTEgs01ptxQq8dd9MbzFhfyU1i_IFLeEfbpRD3eu3o' },
      { omrade: 'Ekvationssystem', namn: 'Räta linjens ekvation algebraiskt', kort: 'Linjen alg.', formId: '1bYRr5w_7zO4r7oyQ-78LCnaLY6Eu0iyEACELvfIT8lw' },
      { omrade: 'Ekvationssystem', namn: 'Grafisk lösning av ekvationssystem', kort: 'Grafisk lösn.', formId: '1SNBzkktFJxhczPzWORHuUvFoSeI6sO1-mw9yijGKQwk' },
      { omrade: 'Ekvationssystem', namn: 'Substitutionsmetoden', kort: 'Substitution', formId: '1UxLFAsNAW3QKbWAHpa0GcXLkR_zRpGwfdGSB-B6s-jQ' },
      { omrade: 'Ekvationssystem', namn: 'Additionsmetoden', kort: 'Addition', formId: '1VBdIhpdLhzdiHI8w57Hwkvxo4M8WkHo8XXFSkWXNuxc' },
      { omrade: 'Ekvationssystem', namn: 'Problemlösning med ekvationssystem', kort: 'Problemlösn.', formId: '1K00fli2RkWUJrJA4t1mpYXy1QaimyLz3221sZY7ISxY' },
      // Potenser (4) — Del 2
      { omrade: 'Potenser', namn: 'Potenslagar', kort: 'Potenslagar', formId: '1cUY-uxMzI0KyQsxP537gsPWfhxYcGcOCOKIYFTNrdEs' },
      { omrade: 'Potenser', namn: 'Potensekvationer', kort: 'Potensekv.', formId: '1lvwXP_V6uoTv4F7SAdxhJYx5I8YItTIBYNW420l8r8Y' },
      { omrade: 'Potenser', namn: 'Exponentialfunktioner', kort: 'Exp.funk.', formId: '1vSJm-F3dritpCEix8WxX3QaSwRKZ36go29EIwg4ERpU' },
      { omrade: 'Potenser', namn: 'Exponentialekvationer', kort: 'Exp.ekv.', formId: '1UNyK0cdVRVo50b6qKAyya-B5Q8gvCDR7q3sWPveVe5w' },
      // Statistik (3) — Del 2
      { omrade: 'Statistik', namn: 'Lägesmått', kort: 'Lägesmått', formId: '1xo4LELR5TVJwdfaJwk7bunKCsQoEDAF-Wb3bAJessz4' },
      { omrade: 'Statistik', namn: 'Spridningsmått och lådagram', kort: 'Spridning', formId: '1II4GcWb2diFC_pqWfJco0Y9BGUczeFQilfYdGWmNBHc' },
      { omrade: 'Statistik', namn: 'Normalfördelning', kort: 'Normalförd.', formId: '1DhVk4HSrcy29K2BA1Mf-RFz1_zj0wxN8zGIcqVweueE' },
    ],
  },
  '2b': {
    titel: 'Prövning Ma2b',
    sheetNamn: 'DBGY Matte — Prövning Ma2b data',
    basUrl: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/',
    omraden: ['Ekvationssystem', 'Andragradare', 'Logaritmer', 'Statistik', 'Geometri'],
    deltentor: [
      { namn: 'Del 1', vecka: 'vecka 43', omraden: ['Ekvationssystem', 'Andragradare'] },
      { namn: 'Del 2', vecka: 'vecka 47', omraden: ['Logaritmer', 'Statistik', 'Geometri'] },
    ],
    delmoment: [
      // Ekvationssystem (6) — Del 1
      { omrade: 'Ekvationssystem', namn: 'Funktionsbegreppet f(x)', kort: 'f(x)', formId: '' },
      { omrade: 'Ekvationssystem', namn: 'Räta linjens ekvation', kort: 'Räta linjen', formId: '' },
      { omrade: 'Ekvationssystem', namn: 'Vad är ett ekvationssystem?', kort: 'Ekv.system', formId: '' },
      { omrade: 'Ekvationssystem', namn: 'Substitutionsmetoden', kort: 'Substitution', formId: '' },
      { omrade: 'Ekvationssystem', namn: 'Additionsmetoden', kort: 'Addition', formId: '' },
      { omrade: 'Ekvationssystem', namn: 'Problemlösning med ekvationssystem', kort: 'Problemlösn.', formId: '' },
      // Andragradare (9) — Del 1
      { omrade: 'Andragradare', namn: 'Parentesmultiplikation', kort: 'Parentes', formId: '' },
      { omrade: 'Andragradare', namn: 'Kvadreringsreglerna', kort: 'Kvadrering', formId: '' },
      { omrade: 'Andragradare', namn: 'Konjugatregeln', kort: 'Konjugat', formId: '' },
      { omrade: 'Andragradare', namn: 'Enkla andragradsekvationer', kort: 'Enkla ekv', formId: '' },
      { omrade: 'Andragradare', namn: 'Nollproduktmetoden', kort: 'Nollprod.', formId: '' },
      { omrade: 'Andragradare', namn: 'pq-formeln', kort: 'pq', formId: '' },
      { omrade: 'Andragradare', namn: 'Andragradsfunktioner grafiskt', kort: 'Grafiskt', formId: '' },
      { omrade: 'Andragradare', namn: 'Andragradsfunktioner algebraiskt', kort: 'Algebraiskt', formId: '' },
      { omrade: 'Andragradare', namn: 'Implikation och ekvivalens', kort: 'Implik./ekv.', formId: '' },
      // Logaritmer (4) — Del 2
      { omrade: 'Logaritmer', namn: 'Potenslagar', kort: 'Potenslagar', formId: '' },
      { omrade: 'Logaritmer', namn: 'Exponentialfunktioner', kort: 'Exp.funk.', formId: '' },
      { omrade: 'Logaritmer', namn: 'Tiologaritmer', kort: 'lg', formId: '' },
      { omrade: 'Logaritmer', namn: 'Exponentialekvationer', kort: 'Exp.ekv.', formId: '' },
      // Statistik (4) — Del 2
      { omrade: 'Statistik', namn: 'Lägesmått', kort: 'Lägesmått', formId: '' },
      { omrade: 'Statistik', namn: 'Spridningsmått och lådagram', kort: 'Spridning', formId: '' },
      { omrade: 'Statistik', namn: 'Normalfördelning', kort: 'Normalförd.', formId: '' },
      { omrade: 'Statistik', namn: 'Regression och korrelation', kort: 'Regression', formId: '' },
      // Geometri (6) — Del 2
      { omrade: 'Geometri', namn: 'Vinklar', kort: 'Vinklar', formId: '' },
      { omrade: 'Geometri', namn: 'Likformighet', kort: 'Likformig.', formId: '' },
      { omrade: 'Geometri', namn: 'Topptriangel-, transversal- och bisektrissatsen', kort: 'Topptriangel', formId: '' },
      { omrade: 'Geometri', namn: 'Randvinkelsatsen', kort: 'Randvinkel', formId: '' },
      { omrade: 'Geometri', namn: 'Kordasatsen', kort: 'Korda', formId: '' },
      { omrade: 'Geometri', namn: 'Koordinatgeometri', kort: 'Koord.geo.', formId: '' },
    ],
  },
};

function K_() {
  var k = KONFIG[KURS];
  if (!k) throw new Error('KURS måste vara "2a" eller "2b" — står nu "' + KURS + '".');
  return k;
}
function DELMOMENT_() { return K_().delmoment; }
function OMRADEN_() { return K_().omraden; }
function DELTENTOR_() { return K_().deltentor; }
function DELTENTA_NAMN_() { return DELTENTOR_().map(function (d) { return d.namn; }); }

// ═════════════════════ SETUP (kör en gång) ═════════════════════

/** Vägrar köra så länge formulär-id:n saknas.
 *  Utan spärren bygger setup() ett komplett men TOMT Sheet, webbappen svarar
 *  "inga resultat än", och felet ser ut som att eleverna inte gjort något. */
function kontrolleraFormId_() {
  var dm = DELMOMENT_();
  var saknas = [];
  for (var i = 0; i < dm.length; i++) if (!dm[i].formId) saknas.push(dm[i].omrade + ': ' + dm[i].namn);
  if (saknas.length) {
    throw new Error(
      saknas.length + ' av ' + dm.length + ' formulär-id saknas i KONFIG["' + KURS + '"].\n\n' +
      'Kör checkpoint-generatorerna först (checkpoints-' + KURS + '-del1.gs och -del2.gs), ' +
      'klistra in körloggen i chatten med Claude, så fylls id:na i.\n\n' +
      'Först utan id: ' + saknas.slice(0, 3).join(' · '));
  }
}

function setup() {
  kontrolleraFormId_();
  var props = PropertiesService.getScriptProperties();
  var ssId = props.getProperty(PROP_SHEET);
  var ss;
  if (ssId) { ss = SpreadsheetApp.openById(ssId); }
  else { ss = SpreadsheetApp.create(K_().sheetNamn); props.setProperty(PROP_SHEET, ss.getId()); }
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'byggSammanstallning') ScriptApp.deleteTrigger(triggers[i]);
  }
  ScriptApp.newTrigger('byggSammanstallning').timeBased().everyHours(1).create();
  byggSammanstallning();
  Logger.log('KLART (' + K_().titel + '). Master-Sheet: ' + ss.getUrl());
  Logger.log('Aggregering körs varje timme. Kör byggSammanstallning manuellt för att uppdatera direkt.');
}

// ═════════════════════ AGGREGERING ═════════════════════

function byggSammanstallning() {
  var DELMOMENT = DELMOMENT_();
  var props = PropertiesService.getScriptProperties();
  var ssId = props.getProperty(PROP_SHEET);
  if (!ssId) throw new Error('Kör setup() först — master-Sheet saknas.');
  var ss = SpreadsheetApp.openById(ssId);

  var data = {};    // email -> { delmomentNamn -> bästa poäng }
  var senast = {};  // email -> senaste inlämning (ms)
  var fragor = [];
  for (var d = 0; d < DELMOMENT.length; d++) {
    if (!DELMOMENT[d].formId) continue;
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

  var prov = lasOchSyncDeltentaFlik_(ss, emails);
  skrivLararvy_(ss, data, senast, prov);
  skrivFragorFlik_(ss, fragor);
  props.setProperty(PROP_UPPD, new Date().toISOString());
}

/** Läser (och vid behov skapar) "Deltentor"-fliken som LÄRAREN fyller i för hand:
 *  en cell per elev × deltenta. Aggregeringen rör aldrig markeringarna. */
function lasOchSyncDeltentaFlik_(ss, emails) {
  var namn = DELTENTA_NAMN_();
  var n = namn.length;
  var sheet = ss.getSheetByName('Deltentor');
  if (!sheet) {
    sheet = ss.insertSheet('Deltentor');
    sheet.getRange(1, 1, 1, n + 1).setValues([['E-post'].concat(namn)]).setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 220);
  }
  var veckor = DELTENTOR_().map(function (d) { return d.namn + ' = ' + d.vecka; }).join(', ');
  sheet.getRange('A1').setNote(
    'Skriv x i deltenta-cellen NÄR ELEVEN KLARAT provet (' + veckor + ').\n\n' +
    'Lämna cellen TOM om eleven inte klarat. Skriv aldrig U, IG eller "ej godkänt" här — ' +
    'anteckna provversion, datum och underkända försök i kolumnerna till höger. De läses inte av systemet.\n\n' +
    'Markeringen syns direkt i Lärarvyn och i elevens kvitto. Aggregeringen skriver ALDRIG över ' +
    'dina markeringar — den lägger bara till rader för nya elever.');
  try {
    var regel = SpreadsheetApp.newDataValidation()
      .requireValueInList(['x'], true)
      .setAllowInvalid(false)
      .setHelpText('Skriv x när eleven KLARAT deltentan. Lämna tomt annars.')
      .build();
    sheet.getRange(2, 2, Math.max(sheet.getMaxRows() - 1, 1), n).setDataValidation(regel);
  } catch (e) { /* validering är ett skydd, inte ett krav */ }
  sheet.getRange(1, 2 + n, 1, 3)
    .setValues([['Provversion', 'Datum', 'Anteckningar']]).setFontWeight('bold');

  var existing = {};
  var last = sheet.getLastRow();
  if (last >= 2) {
    var vals = sheet.getRange(2, 1, last - 1, n + 1).getValues();
    for (var i = 0; i < vals.length; i++) {
      var em = ('' + vals[i][0]).toLowerCase().trim();
      if (!em) continue;
      var rec = {};
      for (var o = 0; o < n; o++) rec[namn[o]] = arKlarmarkering_(vals[i][o + 1]);
      existing[em] = rec;
    }
  }
  var toAppend = [];
  for (var e = 0; e < emails.length; e++) {
    if (!existing[emails[e]]) {
      var blank = [emails[e]];
      for (var o = 0; o < n; o++) blank.push('');
      toAppend.push(blank);
      var rec0 = {};
      for (var o2 = 0; o2 < n; o2++) rec0[namn[o2]] = false;
      existing[emails[e]] = rec0;
    }
  }
  if (toAppend.length) sheet.getRange(sheet.getLastRow() + 1, 1, toAppend.length, n + 1).setValues(toAppend);
  return existing;
}

/** Räknas cellen som "eleven har KLARAT"?
 *  Allt icke-tomt dög förr, vilket gjorde att lärarens egen minnesanteckning
 *  'U' eller 'ej godkänt 12/9' markerade eleven som klar — tyst, både i
 *  lärarvyn och i elevens kvitto. Nu krävs en uttrycklig klarmarkering, så
 *  felriktningen blir "syns inte som klar" i stället för "falskt godkänd". */
function arKlarmarkering_(v) {
  if (v instanceof Date) return true;
  var s = ('' + v).trim().toLowerCase();
  if (!s) return false;
  if (/^(x|ok|klar|klart|godkänd|godkänt|g|ja)$/.test(s)) return true;
  if (/^\d{1,4}[-/.]\d{1,2}([-/.]\d{1,4})?$/.test(s)) return true;
  return false;
}

// ═════════════════════ LÄRARVY ═════════════════════

function skrivLararvy_(ss, data, senast, prov) {
  prov = prov || {};
  var DELMOMENT = DELMOMENT_(), OMR = OMRADEN_(), DT = DELTENTOR_();
  var GRON = '#c7f0d8', AMBER = '#fdecc8', VIT = '#ffffff', HEAD = '#e2e8f0', FOOT = '#f1f5f9', GOLD = '#fde68a';
  var nDelm = DELMOMENT.length;
  var areaSize = {};
  for (var o = 0; o < OMR.length; o++) areaSize[OMR[o]] = 0;
  for (var i = 0; i < nDelm; i++) areaSize[DELMOMENT[i].omrade]++;

  var sheet = ss.getSheetByName('Lärarvy') || ss.insertSheet('Lärarvy');
  sheet.clear();

  var header = ['Elev'];
  for (var i = 0; i < nDelm; i++) header.push(DELMOMENT[i].kort || DELMOMENT[i].namn);
  header = header.concat(OMR);
  for (var t = 0; t < DT.length; t++) header.push(DT[t].namn);
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
    for (var o = 0; o < OMR.length; o++) areaCount[OMR[o]] = 0;
    var total = 0;
    for (var k = 0; k < nDelm; k++) {
      var sc = data[email][DELMOMENT[k].namn];
      if (sc == null) { row.push(''); brow.push(VIT); }
      else if (sc >= TROSKEL) { row.push(sc); brow.push(GRON); areaCount[DELMOMENT[k].omrade]++; total++; passPerDelm[k]++; }
      else { row.push(sc); brow.push(AMBER); }
    }
    for (var a = 0; a < OMR.length; a++) {
      var done = areaCount[OMR[a]] + '/' + areaSize[OMR[a]];
      row.push(done);
      brow.push(areaSize[OMR[a]] > 0 && areaCount[OMR[a]] === areaSize[OMR[a]] ? GRON : VIT);
    }
    var pm = prov[email] || {};
    for (var t = 0; t < DT.length; t++) {
      if (pm[DT[t].namn]) { row.push('✅'); brow.push(GOLD); }
      else if (deltentaRedo_(DT[t], areaCount, areaSize)) { row.push('redo'); brow.push(GRON); }
      else { row.push(''); brow.push(VIT); }
    }
    row.push(total + '/' + nDelm); brow.push(VIT);
    var ms = senast[email];
    row.push(ms ? Utilities.formatDate(new Date(ms), 'Europe/Stockholm', 'd MMM') : '—'); brow.push(VIT);
    var st = beraknaStatus_(areaCount, areaSize, total, ms, nu, pm);
    row.push(st.text); brow.push(st.farg);
    values.push(row); bgs.push(brow);
  }

  var foot = ['Klarade i klassen'];
  for (var k = 0; k < nDelm; k++) foot.push(passPerDelm[k] + '/' + emails.length);
  for (var c = 0; c < OMR.length + DT.length + 3; c++) foot.push('');
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

/** Är alla checkpoints i deltentans områden klarade? Ren funktion. */
function deltentaRedo_(deltenta, areaCount, areaSize) {
  for (var i = 0; i < deltenta.omraden.length; i++) {
    var o = deltenta.omraden[i];
    if (!areaSize[o] || areaCount[o] !== areaSize[o]) return false;
  }
  return true;
}

/** Statustext + färg för en elevrad. Ren funktion (testbar utan Google).
 *  Prioritetsordning: klar med allt → inaktiv → redo för deltenta → pågår. */
function beraknaStatus_(areaCount, areaSize, total, ms, nu, prov) {
  var GRON = '#c7f0d8', VIT = '#ffffff', ROD = '#fde2e2', GOLD = '#fde68a';
  prov = prov || {};
  var DT = DELTENTOR_();
  var klara = [];
  for (var i = 0; i < DT.length; i++) if (prov[DT[i].namn]) klara.push(DT[i].namn);
  if (klara.length === DT.length) return { text: '🎉 Klar med kursen', farg: GRON };

  // Redo-listan beräknas FÖRE inaktivitetslarmet så att larmet bär med sig nästa
  // steg: eleven som gjort klart allt och väntar på provveckan ska inte se ut
  // som bara borta.
  var redo = [];
  for (var i = 0; i < DT.length; i++) {
    if (!prov[DT[i].namn] && deltentaRedo_(DT[i], areaCount, areaSize)) redo.push(DT[i].namn + ' (' + DT[i].vecka + ')');
  }
  var dagar = ms ? Math.floor((nu - ms) / 86400000) : 999;
  if (ms && dagar > 14) {
    return redo.length
      ? { text: '🎯 Redo: ' + redo.join(', ') + ' · ⚠️ inaktiv ' + dagar + ' d', farg: ROD }
      : { text: '⚠️ Inaktiv ' + dagar + ' d', farg: ROD };
  }
  if (!ms && klara.length === 0) return { text: 'Inte börjat', farg: VIT };
  if (redo.length) return { text: '🎯 Redo: ' + redo.join(', '), farg: GOLD };
  if (klara.length) return { text: '✅ ' + klara.join(', ') + ' klar', farg: GRON };
  return { text: 'Pågår', farg: VIT };
}

/** Summerar poängen för en quiz-inlämning (antal rätt, max 10). */
function summaScore_(resp) {
  var items = resp.getGradableItemResponses();
  var s = 0;
  for (var i = 0; i < items.length; i++) { var sc = items[i].getScore(); if (typeof sc === 'number') s += sc; }
  return s;
}

// ═════════════════════ FRÅGOR-FLIKEN (elev→lärare) ═════════════════════

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

/** Alla icke-tomma fritextsvar ur checkpointsen, nyast först. Utan den här fliken
 *  ligger elevernas frågor kvar utspridda i formulär som ingen lärare öppnar. */
function skrivFragorFlik_(ss, fragor) {
  var sheet = ss.getSheetByName('Frågor') || ss.insertSheet('Frågor');
  sheet.clear();
  fragor.sort(function (a, b) { return b.ms - a.ms; });
  var rows = [['Tidpunkt', 'Elev', 'Delmoment', 'Fråga']];
  for (var i = 0; i < fragor.length; i++) {
    rows.push([
      fragor[i].ms ? Utilities.formatDate(new Date(fragor[i].ms), 'Europe/Stockholm', 'd MMM HH:mm') : '',
      fragor[i].email.split('@')[0],
      fragor[i].delmoment,
      fragor[i].text,
    ]);
  }
  sheet.getRange(1, 1, rows.length, 4).setValues(rows);
  sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 110);
  sheet.setColumnWidth(2, 150);
  sheet.setColumnWidth(3, 220);
  sheet.setColumnWidth(4, 520);
  sheet.getRange(1, 4, rows.length, 1).setWrap(true);
}

// ═════════════════════ WEBBAPPEN (elevens kvitto) ═════════════════════

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
  return formaStruktur(email, scores, props.getProperty(PROP_UPPD), lasProvForElev_(ssId, email));
}

/** Läser den inloggade elevens deltenta-markeringar. */
function lasProvForElev_(ssId, email) {
  var namn = DELTENTA_NAMN_();
  var marks = {};
  for (var o = 0; o < namn.length; o++) marks[namn[o]] = false;
  if (!ssId || !email) return marks;
  var sheet = SpreadsheetApp.openById(ssId).getSheetByName('Deltentor');
  if (!sheet || sheet.getLastRow() < 2) return marks;
  var vals = sheet.getDataRange().getValues();
  for (var r = 1; r < vals.length; r++) {
    if (('' + vals[r][0]).toLowerCase() === email.toLowerCase()) {
      for (var o = 0; o < namn.length; o++) marks[namn[o]] = arKlarmarkering_(vals[r][o + 1]);
      break;
    }
  }
  return marks;
}

/** Ren funktion: poäng-map -> kvitto-strukturen (testbar utan Google). */
function formaStruktur(email, scores, uppdISO, provMarks) {
  provMarks = provMarks || {};
  var DELMOMENT = DELMOMENT_(), OMR = OMRADEN_(), DT = DELTENTOR_();
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
  var klaraOmraden = {};
  for (var o = 0; o < OMR.length; o++) {
    var titel = OMR[o];
    var dm = omradenMap[titel] || [];
    var allaKlara = dm.length > 0;
    for (var j = 0; j < dm.length; j++) if (!dm[j].klarad) allaKlara = false;
    klaraOmraden[titel] = allaKlara;
    omraden.push({ titel: titel, delmoment: dm, klart: allaKlara });
  }
  var deltentor = [];
  for (var t = 0; t < DT.length; t++) {
    var redo = true;
    for (var i2 = 0; i2 < DT[t].omraden.length; i2++) if (!klaraOmraden[DT[t].omraden[i2]]) redo = false;
    deltentor.push({
      namn: DT[t].namn,
      vecka: DT[t].vecka,
      omraden: DT[t].omraden,
      status: provMarks[DT[t].namn] ? 'klarad' : (redo ? 'redo' : 'ej redo'),
    });
  }
  return {
    namn: email ? email.split('@')[0] : 'elev',
    kurs: K_().titel,
    omraden: omraden,
    deltentor: deltentor,
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
  }
  for (var t = 0; t < data.deltentor.length; t++) {
    if (data.deltentor[t].status === 'redo') {
      nastaSteg = 'Allt inför <strong>' + esc(data.deltentor[t].namn) + '</strong> sitter. Provet skrivs ' +
        esc(data.deltentor[t].vecka) + ' — se Classroom för tid och sal.';
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
    return '<section class="omr"><div class="omr-head"><h2>' + esc(o.titel) + '</h2>' +
      '<span class="omr-count">' + klarade + ' / ' + totalt + ' klara</span></div>' +
      '<div class="bar"><div class="bar-fill" style="width:' + procent + '%"></div></div>' +
      '<ul class="dm-list">' + rader + '</ul></section>';
  }).join('');

  var provHtml = data.deltentor.map(function (p) {
    var text = p.status === 'klarad' ? '✅ Godkänd!'
      : p.status === 'redo' ? '🎯 Du är redo — provet skrivs ' + esc(p.vecka)
      : 'Skrivs ' + esc(p.vecka) + '. Gör klart checkpointsen i ' + esc(p.omraden.join(', ')) + ' först.';
    return '<div class="prov ' + p.status.replace(' ', '-') + '"><span class="prov-namn">' + esc(p.namn) +
      '</span><span class="prov-text">' + text + '</span></div>';
  }).join('');

  var banner = data.harData ? ''
    : '<p class="info">Inga resultat än — gör en checkpoint längst ner på ett delmoment, så dyker dina framsteg upp här.</p>';

  var uppd = data.uppdaterad ? '<p class="foot">Uppdateras varje timme. Senast: ' + esc(formatTid(data.uppdaterad)) + '</p>'
    : '<p class="foot">Bara du och din lärare ser det här. Uppdateras varje timme.</p>';

  return '<!doctype html><html lang="sv"><head><meta charset="utf-8">' +
'<meta name="viewport" content="width=device-width, initial-scale=1"><style>' +
'  * { box-sizing: border-box; }' +
'  body { margin:0; font-family:-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; background:#f7f7fc; color:#0f172a; padding:18px; }' +
'  .wrap { max-width:640px; margin:0 auto; }' +
'  .eyebrow { font-size:12px; text-transform:uppercase; letter-spacing:.08em; color:#4b3fd4; font-weight:700; }' +
'  h1 { font-size:26px; margin:4px 0 2px; }' +
'  .who { font-size:13px; color:#64748b; }' +
'  .info { font-size:13px; background:#e8e6fb; color:#312a8f; padding:10px 12px; border-radius:8px; margin:12px 0 0; }' +
'  .nasta { background:#4b3fd4; color:#fff; padding:14px 16px; border-radius:12px; margin:16px 0; font-size:15px; }' +
'  .nasta .lbl { display:block; font-size:11px; text-transform:uppercase; letter-spacing:.07em; opacity:.85; margin-bottom:3px; }' +
'  .prov { display:flex; gap:12px; align-items:baseline; background:#fff; border:1px solid #e2e8f0; border-left:4px solid #cbd5e1; border-radius:10px; padding:11px 14px; margin:8px 0; }' +
'  .prov.klarad { border-left-color:#16a34a; background:#f0fdf4; }' +
'  .prov.redo { border-left-color:#d97706; background:#fffbeb; }' +
'  .prov-namn { font-weight:700; font-size:15px; min-width:52px; }' +
'  .prov-text { font-size:13px; color:#334155; }' +
'  .omr { background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:14px 16px; margin:12px 0; box-shadow:0 1px 2px rgba(40,30,90,.05); }' +
'  .omr-head { display:flex; align-items:baseline; justify-content:space-between; }' +
'  .omr-head h2 { font-size:17px; margin:0; }' +
'  .omr-count { font-size:12px; color:#64748b; font-weight:600; }' +
'  .bar { height:8px; background:#f1f5f9; border-radius:99px; overflow:hidden; margin:10px 0 12px; }' +
'  .bar-fill { height:100%; background:#4b3fd4; border-radius:99px; }' +
'  .dm-list { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:5px; }' +
'  .dm { font-size:14px; padding:6px 10px; border-radius:6px; background:#f8fafc; }' +
'  .dm.kvar { color:#94a3b8; }' +
'  h3 { font-size:13px; text-transform:uppercase; letter-spacing:.06em; color:#64748b; margin:22px 0 6px; }' +
'  .foot { font-size:12px; color:#94a3b8; text-align:center; margin-top:18px; }' +
'</style></head><body><div class="wrap">' +
'  <div class="eyebrow">📼 Mitt kvitto · ' + esc(data.kurs) + '</div>' +
'  <h1>Dina framsteg</h1>' +
'  <div class="who">' + (email ? 'Inloggad som ' + esc(email) : 'Ej inloggad — öppna i egen flik och logga in med ditt skolkonto') + '</div>' +
   banner +
'  <div class="nasta"><span class="lbl">Vad du gör härnäst</span>' + nastaSteg + '</div>' +
'  <h3>Deltentorna</h3>' + provHtml +
'  <h3>Dina områden</h3>' + omradenHtml + uppd +
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

// ═════════════════════ E-POSTINSAMLING ═════════════════════

/** VERIFIED = Google fyller i mejlen från inloggningen, eleven klickar ingenting.
 *  Kör efter generatorerna, läs loggen, kör igen — andra gången ska allt säga
 *  "redan VERIFIED". Litar man på att en tidigare körning tog får eleverna
 *  kryssa i sin mejl i varje quiz, och det märks först när de klagar. */
function kollaOchSattEpost() {
  var DELMOMENT = DELMOMENT_();
  var rader = [];
  for (var i = 0; i < DELMOMENT.length; i++) {
    if (!DELMOMENT[i].formId) { rader.push(DELMOMENT[i].namn + ': inget formId ännu'); continue; }
    rader.push(epostForForm_(DELMOMENT[i].formId, DELMOMENT[i].namn));
    Utilities.sleep(150);
  }
  Logger.log(rader.join('\n'));
}

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

function epostLage_(form) {
  try { return String(form.getEmailCollectionType()); } catch (e) {}
  try { return form.collectsEmail() ? 'gamla setCollectEmail(true)' : 'AV'; } catch (e) {}
  return 'okänt läge';
}
