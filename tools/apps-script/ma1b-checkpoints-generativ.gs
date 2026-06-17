/**
 * Ma1b checkpoints — GENERATIV variant (granskningsskiva: Algebra cp01–04)
 * =======================================================================
 * Didaktiskt skifte (beslut 2026-06-17): checkpointen blir GENERATIV (eleven
 * SKRIVER svaret) i stället för flerval. Forskningsskäl: testing effect är
 * starkast vid generativ återkallning, och NP + vår egen Ma2b-lärdom ("svara
 * på frågan") kräver att eleven producerar svar/metod — inte känner igen.
 *
 * Google Forms kan inte auto-rätta kortsvar via API:t → VI rättar själva:
 * aggregeringen läser elevens råa textsvar och jämför mot facit med samma
 * `canonicalize` som sajten. Direkt-feedback i formuläret ges som ALLMÄN
 * feedback (rätt svar + vanligt fel, samma för alla) via setGeneralFeedback.
 * Skarp bedömning av metod/enhet sker i TENTA-AV (NP-format, lärarbedömt).
 *
 * DEN HÄR FILEN = granskningsskiva. När du nickat på formatet fyller jag
 * cp05–18 och slår ihop allt med kvitto-webappen till ETT projekt. Då:
 *   - konverteraSaBep()  skriver om dina 18 befintliga formulär PÅ PLATS
 *     (samma URL:er → ingen omkoppling av lektioner/id:n behövs)
 *   - byggSammanstallning() självrättar och uppdaterar kvittot
 *
 * GRANSKA SÅ HÄR (vill du se det live på ETT formulär):
 *   1. script.google.com → nytt projekt → klistra in → spara
 *   2. Kör konverteraEttForformulär() (konverterar bara cp01 som demo)
 *   3. Öppna cp01-formuläret → nu är frågorna kortsvar med facit-feedback
 */

// ───────── KONFIG ─────────
var TROSKEL = 8;

// SaBep-formulärens REDIGERA-id (cp01..cp18). Samma som i kvitto-webappen.
var FORM_IDS = {
  cp01: '12Zh71zHhix7ZltXq6Kna4pstxjiE5Bt3CH_kINdXW9I',
  cp02: '1n_mAt0ikxnkGJfHGIMBEcQw2X6qI_6YsNFnMptgics4',
  cp03: '1RKTd2WRgSorWO9WZTZ96qeNpJj7LzMYeHDA9YDqL9sU',
  cp04: '1Tx8-Lr7dVixUXs-bQd-IGsxe5lddTs_Qmx0SUYJI4Sw',
  // cp05..cp18 fylls i när hela banken är klar
};

// ───────── FRÅGEBANK (ny generativ form) ─────────
// q = { t: fråga, typ: 'kort'|'flerval', svar: [godkända svar], fel?: [distraktorer], fb: allmän feedback }
// 'kort'    → eleven skriver svaret; rättas mot `svar` via canonicalize (alla varianter den hanterar gäller).
// 'flerval' → bara för äkta begreppsval (t.ex. "vilken funktionstyp?"); svar[0] = rätt.
// fb visas för ALLA efter inlämning (rätt svar + vanligt fel).

var BANK = {
  cp01: [ // Förenkling & ekvationer
    { t: 'Förenkla: 4x + 3 − x + 8', typ: 'kort', svar: ['3x + 11'], fb: 'Rätt svar: 3x + 11. Slå ihop x-termer (4x − x) och konstanter (3 + 8) var för sig.' },
    { t: 'Förenkla: 7y − (3y + 4)', typ: 'kort', svar: ['4y − 4'], fb: 'Rätt svar: 4y − 4. Minustecknet framför parentesen vänder BÅDA tecknen inuti.' },
    { t: 'Multiplicera in: 3(2x − 5)', typ: 'kort', svar: ['6x − 15'], fb: 'Rätt svar: 6x − 15. 3:an gångas med både 2x OCH −5.' },
    { t: 'Utveckla: (x + 3)(x − 1)', typ: 'kort', svar: ['x^2 + 2x − 3', 'x² + 2x − 3'], fb: 'Rätt svar: x² + 2x − 3. Glöm inte de två x-termerna i mitten (−x + 3x = 2x).' },
    { t: 'Förenkla: 5x + 3 − 2x', typ: 'kort', svar: ['3x + 3'], fb: 'Rätt svar: 3x + 3. Bara x-termerna slås ihop; 3:an står kvar.' },
    { t: 'Multiplicera in: 5(x − 4)', typ: 'kort', svar: ['5x − 20'], fb: 'Rätt svar: 5x − 20. 5 · x och 5 · (−4).' },
    { t: 'Lös ekvationen: 2x + 9 = 21  (skriv värdet på x)', typ: 'kort', svar: ['6'], fb: 'Rätt svar: x = 6. Ta bort 9 först (2x = 12), dela sedan med 2.' },
    { t: 'Lös ekvationen: 5x − 12 = 28', typ: 'kort', svar: ['8'], fb: 'Rätt svar: x = 8. Addera 12 (5x = 40), dela med 5.' },
    { t: 'Lös ekvationen: 4(x − 3) = 2x + 6', typ: 'kort', svar: ['9'], fb: 'Rätt svar: x = 9. Multiplicera in först: 4x − 12 = 2x + 6, samla sedan x åt vänster.' },
    { t: 'Lös ekvationen: 6x − 5 = 2x + 15', typ: 'kort', svar: ['5'], fb: 'Rätt svar: x = 5. Samla x-termer vänster, konstanter höger: 4x = 20.' },
  ],
  cp02: [ // Tillämpning & nämnare
    { t: 'Lös: x/2 + 3 = 10', typ: 'kort', svar: ['14'], fb: 'Rätt svar: x = 14. Ta bort +3 först (x/2 = 7), multiplicera sedan med 2.' },
    { t: 'Lös: x/4 − 2 = 3', typ: 'kort', svar: ['20'], fb: 'Rätt svar: x = 20. x/4 = 5, sedan · 4.' },
    { t: 'Lös: 2x/3 = 10', typ: 'kort', svar: ['15'], fb: 'Rätt svar: x = 15. Multiplicera med 3 (2x = 30), dela med 2.' },
    { t: 'Lös: (2x − 1)/3 = (x + 2)/2', typ: 'kort', svar: ['8'], fb: 'Rätt svar: x = 8. Multiplicera båda led med 6: 2(2x − 1) = 3(x + 2).' },
    { t: 'Mira är 3 år äldre än Kim. Tillsammans är de 21 år. Hur gammal är Kim?', typ: 'kort', svar: ['9'], fb: 'Rätt svar: 9 år. x + (x + 3) = 21 → 2x + 3 = 21. Frågan gäller Kim (x), inte Mira.' },
    { t: 'Tre heltal i följd har summan 153. Vilket är det STÖRSTA?', typ: 'kort', svar: ['52'], fb: 'Rätt svar: 52. x + (x+1) + (x+2) = 153 ger x = 50 — men frågan vill ha det största (x+2).' },
    { t: 'Lös: 3(x − 2) = 12', typ: 'kort', svar: ['6'], fb: 'Rätt svar: x = 6. Dela båda led med 3 (x − 2 = 4), addera 2.' },
    { t: 'Lös: 4x + 6 = 26', typ: 'kort', svar: ['5'], fb: 'Rätt svar: x = 5. 4x = 20.' },
    { t: 'Förenkla: 9x − (4x + 2)', typ: 'kort', svar: ['5x − 2'], fb: 'Rätt svar: 5x − 2. Minustecknet vänder båda tecknen i parentesen.' },
    { t: 'Multiplicera in: 6(x + 3)', typ: 'kort', svar: ['6x + 18'], fb: 'Rätt svar: 6x + 18.' },
  ],
  cp03: [ // Dugga: Algebra & ekvationer (kumulativ 1.1–1.4)
    { t: 'Förenkla: a⁵ · a³', typ: 'kort', svar: ['a^8', 'a⁸'], fb: 'Rätt svar: a⁸. Samma bas → addera exponenterna (5 + 3).' },
    { t: 'Förenkla: 8a⁶ / (2a²)', typ: 'kort', svar: ['4a^4', '4a⁴'], fb: 'Rätt svar: 4a⁴. Dela talen (8/2) och dra av exponenterna (6 − 2).' },
    { t: 'Förenkla: (a³)²', typ: 'kort', svar: ['a^6', 'a⁶'], fb: 'Rätt svar: a⁶. Potens av potens → multiplicera exponenterna.' },
    { t: 'Beräkna: 3⁰', typ: 'kort', svar: ['1'], fb: 'Rätt svar: 1. Vad som helst (utom 0) upphöjt till 0 är 1.' },
    { t: 'Förenkla: x⁷ / x⁴', typ: 'kort', svar: ['x^3', 'x³'], fb: 'Rätt svar: x³. 7 − 4 = 3.' },
    { t: 'Lös: x/2 + 3 = 10', typ: 'kort', svar: ['14'], fb: 'Rätt svar: x = 14.' },
    { t: 'Lös: x/3 = 7', typ: 'kort', svar: ['21'], fb: 'Rätt svar: x = 21. Multiplicera med 3.' },
    { t: 'Lös: 4(x − 3) = 2x + 6', typ: 'kort', svar: ['9'], fb: 'Rätt svar: x = 9.' },
    { t: 'Förenkla: 7y − (3y + 4)', typ: 'kort', svar: ['4y − 4'], fb: 'Rätt svar: 4y − 4.' },
    { t: 'Utveckla: (x + 5)(x − 2)', typ: 'kort', svar: ['x^2 + 3x − 10', 'x² + 3x − 10'], fb: 'Rätt svar: x² + 3x − 10. Mitten: −2x + 5x = 3x.' },
  ],
  cp04: [ // Prov: Algebra (kumulativ hela algebra + potensekvationer)
    { t: 'Lös: x² = 100  (skriv båda lösningarna)', typ: 'kort', svar: ['±10', '10 eller -10'], fb: 'Rätt svar: x = ±10. Glöm inte den negativa lösningen (minus · minus = plus). Skriv ± som +-.' },
    { t: 'Lös: x² = 49', typ: 'kort', svar: ['±7', '7 eller -7'], fb: 'Rätt svar: x = ±7.' },
    { t: 'Förenkla kvadratroten: √18  (skriv rot som rot18)', typ: 'kort', svar: ['3√2', '3 rot2'], fb: 'Rätt svar: 3√2. 18 = 9 · 2, och √9 = 3.' },
    { t: 'Lös exakt: x² = 50  (skriv ± och rot, t.ex. +-5rot2)', typ: 'kort', svar: ['±5√2', '±5 rot2'], fb: 'Rätt svar: ±5√2. 50 = 25 · 2.' },
    { t: 'Förenkla: a⁵ · a³', typ: 'kort', svar: ['a^8', 'a⁸'], fb: 'Rätt svar: a⁸.' },
    { t: 'Förenkla: 8a⁶ / (2a²)', typ: 'kort', svar: ['4a^4', '4a⁴'], fb: 'Rätt svar: 4a⁴.' },
    { t: 'Lös: x/2 + 3 = 10', typ: 'kort', svar: ['14'], fb: 'Rätt svar: x = 14.' },
    { t: 'Lös: 4(x − 3) = 2x + 6', typ: 'kort', svar: ['9'], fb: 'Rätt svar: x = 9.' },
    { t: 'Utveckla och förenkla: (2x + 1)(x − 4)', typ: 'kort', svar: ['2x^2 − 7x − 4', '2x² − 7x − 4'], fb: 'Rätt svar: 2x² − 7x − 4. Mitten: −8x + x = −7x.' },
    { t: 'Tre heltal i följd har summan 153. Vilket är det största?', typ: 'kort', svar: ['52'], fb: 'Rätt svar: 52.' },
  ],
  // cp05–cp18: fylls i efter att formatet godkänts.
};

// ───────── FORMULÄRBYGGE (konvertering på plats) ─────────

/** Demo: konvertera BARA cp01 så du ser formatet live utan att röra resten. */
function konverteraEttForformulär() {
  konverteraForm_('cp01');
  Logger.log('cp01 konverterad till generativt format. Öppna formuläret och kolla.');
}

/** Konvertera alla checkpoints som har en BANK-post och ett FORM_ID. */
function konverteraSaBep() {
  var gjorda = [];
  for (var cp in BANK) {
    if (FORM_IDS[cp]) { konverteraForm_(cp); gjorda.push(cp); }
  }
  Logger.log('Konverterade: ' + gjorda.join(', '));
}

/** Skriver om ett befintligt formulär på plats: tar bort frågor, lägger nya. URL:en behålls. */
function konverteraForm_(cp) {
  var form = FormApp.openById(FORM_IDS[cp]);
  // Ta bort alla befintliga items (frågor + ev. fritextruta)
  var items = form.getItems();
  for (var i = items.length - 1; i >= 0; i--) form.deleteItem(items[i]);

  form.setIsQuiz(true);
  form.setDescription(
    'Kumulativ checkpoint — skriv dina svar (inte flerval). 10 frågor på allt hittills.\n\n' +
    'KLARAD = minst 8 rätt av 10 (visas i ditt kvitto). Efter inlämning ser du rätt svar och ' +
    'vanliga fel. Obegränsat antal försök. Skrivtips: decimaltal med komma, ± som +-, rot som rot18.'
  );

  var qs = BANK[cp];
  for (var q = 0; q < qs.length; q++) {
    var item = qs[q];
    if (item.typ === 'flerval') {
      var mc = form.addMultipleChoiceItem();
      mc.setTitle(item.t).setPoints(1).setRequired(true);
      var choices = [mc.createChoice(item.svar[0], true)].concat(
        (item.fel || []).map(function (f) { return mc.createChoice(f, false); }));
      // deterministisk shuffle (ingen Math.random i denna miljö-policy): rotera efter frågeindex
      choices = rotera_(choices, q % choices.length);
      mc.setChoices(choices);
      if (item.fb) mc.setFeedbackForCorrect(FormApp.createFeedback().setText(item.fb).build());
      if (item.fb) mc.setFeedbackForIncorrect(FormApp.createFeedback().setText(item.fb).build());
    } else {
      var t = form.addTextItem();
      t.setTitle(item.t).setPoints(1).setRequired(true);
      if (item.fb) t.setGeneralFeedback(FormApp.createFeedback().setText(item.fb).build());
    }
  }
  form.addParagraphTextItem()
    .setTitle('Något du fastnade på eller vill fråga om? (frivilligt)')
    .setRequired(false);
}

function rotera_(arr, n) { return arr.slice(n).concat(arr.slice(0, n)); }

// ───────── SJÄLVRÄTTNING ─────────

/** Poäng (0–10) för en inlämning: jämför varje textsvar mot facit via canonicalize. */
function rattaSvar_(resp, cp) {
  var qs = BANK[cp];
  var itemResponses = resp.getItemResponses();
  var score = 0;
  var qi = 0; // index i banken (hoppa över ev. icke-fråga-items)
  for (var r = 0; r < itemResponses.length && qi < qs.length; r++) {
    var ir = itemResponses[r];
    var title = ir.getItem().getTitle();
    if (title.indexOf('Något du fastnade') === 0) continue; // fritextrutan
    var svar = '' + ir.getResponse();
    if (matchar_(svar, qs[qi].svar)) score++;
    qi++;
  }
  return score;
}

// ───────── canonicalize (portad från src/lib/answer.ts) ─────────

var UNIT_PATTERNS = ['kr', 'kronor', 'm²', 'm2', 'm³', 'm3', 'cm²', 'cm2', 'cm³', 'cm3',
  'dm²', 'dm2', 'dm³', 'dm3', 'mm', 'cm', 'dm', 'm', 'km', 'kg', 'g',
  'år', 'månader', 'månad', 'veckor', 'vecka', 'dagar', 'dag', 'timmar', 'timme', 'sekunder', 'sekund',
  'st', 'stycken', 'styck', '%', 'procent', 'personer', 'invånare', 'elever',
  'kalorier', 'kcal', 'enheter', 'areaenheter', 'bakterier', 'pennor', 'böcker'];

function stripUnits_(s) {
  var out = s;
  for (var i = 0; i < UNIT_PATTERNS.length; i++) {
    var escaped = UNIT_PATTERNS[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out.replace(new RegExp('\\s*' + escaped + '\\s*$', 'i'), '');
  }
  return out;
}

function normalize_(s) {
  var out = s.trim().toLowerCase()
    .replace(/,/g, '.').replace(/\*/g, '·').replace(/[−–]/g, '-')
    .replace(/kvadratrot(?:en)?\s*(?:ur\s*)?/g, '√')
    .replace(/roten\s*ur\s*/g, '√')
    .replace(/(?<![a-zåäö])sqrt\s*/g, '√')
    .replace(/(?<![a-zåäö])rot(?:en)?\s*(?:ur\s*)?/g, '√')
    .replace(/√\s*\(([^()]*)\)/g, '√$1')
    .replace(/\s+/g, ' ')
    .replace(/^[a-zåäö]\s*=\s*/, '');
  out = stripUnits_(out);
  out = out.replace(/\s+/g, '');
  var SUP = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-' };
  out = out.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+/g, function (m) {
    return '^' + m.split('').map(function (c) { return SUP[c]; }).join('');
  });
  out = out.replace(/·([a-zåäö(√])/g, '$1').replace(/([a-zåäö)])·/g, '$1');
  return out;
}

function canonicalTerms_(s) {
  var terms = [], cur = '', depth = 0;
  for (var i = 0; i < s.length; i++) {
    var ch = s[i];
    if (ch === '(') depth++; else if (ch === ')') depth--;
    var prev = i > 0 ? s[i - 1] : '';
    if ((ch === '+' || ch === '-') && depth === 0 && i > 0 && '^·/('.indexOf(prev) < 0) {
      terms.push(cur); cur = ch === '-' ? '-' : ''; continue;
    }
    cur += ch;
  }
  terms.push(cur);
  if (terms.length < 2) return s;
  var sorted = terms.map(function (t) {
    return t.charAt(0) === '-' ? { sign: '-', body: t.slice(1) } : { sign: '+', body: t };
  }).sort(function (a, b) { return a.body < b.body ? -1 : a.body > b.body ? 1 : 0; });
  var joined = sorted.map(function (t) { return t.sign + t.body; }).join('');
  return joined.charAt(0) === '+' ? joined.slice(1) : joined;
}

/** Sant om elevsvaret matchar något av facit-svaren (canonicalize + numerisk tolerans). */
function matchar_(stud, accepted) {
  var cs = canonicalize(stud);
  var numRe = /^-?\d*\.?\d+$/;
  for (var i = 0; i < accepted.length; i++) {
    var ca = canonicalize(accepted[i]);
    if (cs === ca) return true;
    // Numerisk tolerans: "6,0" = "6" = "6.00" (bara för rena tal)
    if (numRe.test(cs) && numRe.test(ca) && parseFloat(cs) === parseFloat(ca)) return true;
  }
  return false;
}

function canonicalize(s) {
  var n = normalize_(s);
  n = n.replace(/\+\/-/g, '±').replace(/\+-/g, '±');
  var parts = n.split(/eller|och/).map(function (p) {
    p = p.replace(/^[a-zåäö]=/, '').replace(/=[a-zåäö]$/, '');
    if (p.charAt(0) === '±') { var rest = p.slice(1); return [rest, '-' + rest]; }
    return [p];
  });
  var flat = [];
  for (var i = 0; i < parts.length; i++) for (var j = 0; j < parts[i].length; j++) if (parts[i][j]) flat.push(parts[i][j]);
  var canon = flat.map(canonicalTerms_).sort();
  return canon.join('eller');
}

/** Snabbtest av rättningen i editorn (kör och kolla loggen). */
function testaRattning() {
  var fall = [
    ['x = 6', ['6'], true], ['6,0', ['6'], true], ['7', ['6'], false],
    ['11 + 3x', ['3x + 11'], true], ['x^8', ['a⁸'], false], ['a8', ['a⁸'], false],
    ['a^8', ['a⁸'], true], ['+-10', ['±10'], true], ['10 eller -10', ['±10'], true],
    ['3 rot2', ['3√2'], true], ['x²+2x-3', ['x² + 2x − 3'], true],
  ];
  for (var i = 0; i < fall.length; i++) {
    var facit = fall[i][1].map(canonicalize);
    var got = facit.indexOf(canonicalize(fall[i][0])) >= 0;
    Logger.log((got === fall[i][2] ? 'OK   ' : 'FEL  ') + fall[i][0] + ' vs ' + fall[i][1] + ' → ' + got);
  }
}
