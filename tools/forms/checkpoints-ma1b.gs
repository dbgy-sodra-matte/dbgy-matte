/**
 * Checkpoints — ORDINARIE Ma1b (18 kumulativa veckovis-checkpoints)
 * ================================================================
 * Modell 3: täta, små, KUMULATIVA test. Varje checkpoint = 10 flervalsfrågor
 * på ALLT hittills (mix ~5 nya / ~3 förra blocket / ~2 äldre, spiral).
 * Feldistraktorer på klassiska misstag, "träna mer"-länk till rätt Ma1b-sida.
 *
 * EN MASTER-SHEET PER KLASS (beslut 2026-06-16). Kör en funktion per klass:
 *   - skapaCheckpointsSaBep()   → 18 Forms + ett data-Sheet för SaBep
 *   - skapaCheckpointsBF()      → 18 Forms + ett data-Sheet för BF
 *
 * KÖRS SÅ HÄR (en gång per klass, av Simon, inloggad med dbgy.se-kontot):
 *   1. script.google.com → Nytt projekt → klistra in HELA filen → spara
 *   2. Kör t.ex. skapaCheckpointsSaBep() (~2-3 min). Godkänn behörigheter.
 *   3. Öppna Körlogg (Ctrl+Enter) → master-Sheet-URL + alla 18 Form-URL:er
 *   4. Klistra in loggen i chatten med Claude → länkarna läggs in på sidorna
 *   5. Upprepa med skapaCheckpointsBF() för andra klassen
 *
 * EFTERÅT — per formulär (Apps Script kan inte styra detta):
 *   A. Inställningar → "Visa betyg" = "Omedelbart efter varje inlämning"
 *   B. Publicera → Respondenter = "Alla på AcadeMedia"
 *
 * Tröskel: minst 8/10 = klarad. Obegränsade försök (mastery).
 * ⚠️ Master-Sheet innehåller elevdata — dela ENDAST med undervisande lärare.
 */

const SITE = 'https://dbgy-sodra-matte.github.io/dbgy-matte/';

// Slug-uppslag (kort nyckel → full sökväg). Måste matcha lektionernas slug:-frontmatter.
const L = {
  '1-1': 'ma1b/1-algebra/1-1-forenkling-och-parentesmultiplikation',
  '1-2a': 'ma1b/1-algebra/1-2a-linjara-ekvationer-tekniker',
  '1-2b': 'ma1b/1-algebra/1-2b-linjara-ekvationer-tillampning',
  '1-3': 'ma1b/1-algebra/1-3-ekvationer-med-namnare',
  '1-4': 'ma1b/1-algebra/1-4-potenslagar',
  '1-6': 'ma1b/1-algebra/1-6-potensekvationer',
  '2-1': 'ma1b/2-ekonomi/2-1-forandringsfaktor',
  '2-2': 'ma1b/2-ekonomi/2-2-upprepad-forandring',
  '2-3': 'ma1b/2-ekonomi/2-3-dugga-ekonomi',
  '2-4': 'ma1b/2-ekonomi/2-4-lan-ranta-amortering',
  '2-5': 'ma1b/2-ekonomi/2-5-prov-ekonomi',
  '3-2': 'ma1b/3-funktioner/3-2-funktioner-vardetabeller-grafer',
  '3-3': 'ma1b/3-funktioner/3-3-funktionsbegreppet-fx',
  '3-4': 'ma1b/3-funktioner/3-4-linjara-funktioner-grafiskt',
  '3-5': 'ma1b/3-funktioner/3-5-linjara-funktioner-algebraiskt',
  '3-7': 'ma1b/3-funktioner/3-7-exponentialfunktioner',
  '3-8': 'ma1b/3-funktioner/3-8-potensfunktioner',
  '3-9': 'ma1b/3-funktioner/3-9-jamfora-modeller',
  '3-11': 'ma1b/3-funktioner/3-11-problemlosning-funktioner',
  '3-12': 'ma1b/3-funktioner/3-12-definitionsmangd-vardemangd',
  '4-1': 'ma1b/4-fordjupning/4-1-noll-produktmetoden',
  '4-2': 'ma1b/4-fordjupning/4-2-ekvationer-fordjupning',
  '4-3': 'ma1b/4-fordjupning/4-3-formler',
  '4-4': 'ma1b/4-fordjupning/4-4-tolka-funktionsbegreppet',
  '4-5': 'ma1b/4-fordjupning/4-5-faktorisering-fordjupning',
  '4-6': 'ma1b/4-fordjupning/4-6-forenkling-fordjupning',
  '4-7': 'ma1b/4-fordjupning/4-7-problemlosning-algebra-fordjupning',
  '4-8': 'ma1b/4-fordjupning/4-8-ekvationer-fordjupning-2',
  '4-9': 'ma1b/4-fordjupning/4-9-definitionsmangd-vardemangd-fordjupning',
  '4-10': 'ma1b/4-fordjupning/4-10-linjara-funktioner-fordjupning',
  '4-11': 'ma1b/4-fordjupning/4-11-exponentialfunktioner-fordjupning',
};

function skapaCheckpointsSaBep() { skapaAlla('SaBep'); }
function skapaCheckpointsBF() { skapaAlla('BF'); }

function skapaAlla(klass) {
  const ss = SpreadsheetApp.create('DBGY Matte — Ma1b ' + klass + ' data');
  const resultat = [];
  for (const cp of CHECKPOINTS) {
    const url = skapaCheckpoint(cp, klass, ss.getId());
    resultat.push('CP' + cp.nr + '  ' + cp.id + '  ' + cp.namn +
      '\n  PUBLICERAD: ' + url.publicerad + '\n  REDIGERA:   ' + url.redigera);
  }
  Logger.log('\n===== ' + klass + ' — MASTER-SHEET (elevdata, dela bara med larare) =====\n' +
    ss.getUrl() + '\n  id: ' + ss.getId() +
    '\n\n===== ' + CHECKPOINTS.length + ' CHECKPOINTS SKAPADE (' + klass + ') =====\n\n' +
    resultat.join('\n\n'));
}

function skapaCheckpoint(cp, klass, ssId) {
  const form = FormApp.create('Checkpoint ' + cp.nr + ' — ' + cp.namn + ' (Ma1b ' + klass + ')');
  form.setIsQuiz(true);
  form.setDescription(
    'Kumulativ checkpoint — 10 frågor på allt vi gått igenom hittills, med tyngdpunkt på det senaste.\n\n' +
    'KLARAD = minst 8 rätt av 10. Får du färre: öppna sidorna som länkas vid frågorna du missade, ' +
    'träna, och gör om quizet. Du har hur många försök som helst.'
  );
  try { form.setEmailCollectionType(FormApp.EmailCollectionType.VERIFIED); }
  catch (e) { form.setCollectEmail(true); }
  try { form.setRequireLogin(true); } catch (e) {}
  form.setPublishingSummary(false);
  try { form.setDestination(FormApp.DestinationType.SPREADSHEET, ssId); } catch (e) {}

  for (const q of cp.fragor) {
    const item = form.addMultipleChoiceItem();
    item.setTitle(q.t).setPoints(1).setRequired(true);
    const choices = [item.createChoice(q.ratt, true)].concat(
      q.fel.map(function (f) { return item.createChoice(f, false); })
    );
    choices.sort(function () { return Math.random() - 0.5; });
    item.setChoices(choices);
    const lank = SITE + L[q.l] + '/';
    item.setFeedbackForIncorrect(
      FormApp.createFeedback()
        .setText('Inte riktigt — öppna lektionen nedan, träna och försök igen.')
        .addLink(lank, 'Öppna lektionen')
        .build()
    );
    item.setFeedbackForCorrect(FormApp.createFeedback().setText('Rätt!').build());
  }

  form.addParagraphTextItem()
    .setTitle('Något du fastnade på eller vill fråga om? (frivilligt)')
    .setRequired(false);

  return { publicerad: form.getPublishedUrl(), redigera: form.getEditUrl() };
}

// ═════════════════════ FRÅGEBANKEN (18 kumulativa checkpoints) ═════════════════════
// q = { t: fråga, ratt: rätt svar, fel: [distraktorer], l: slug-nyckel }

const CHECKPOINTS = [
  // ───────── 1. ALGEBRA ─────────
  { nr: 1, id: 'ma1b-cp01', namn: 'Förenkling & ekvationer', fragor: [
    { t: 'Förenkla: 4x + 3 − x + 8', ratt: '3x + 11', fel: ['3x + 8', '4x + 11', '12x'], l: '1-1' },
    { t: 'Förenkla: 7y − (3y + 4)', ratt: '4y − 4', fel: ['4y + 4', '10y + 4', '4y'], l: '1-1' },
    { t: 'Multiplicera in: 3(2x − 5)', ratt: '6x − 15', fel: ['6x − 5', '5x − 15', '6x + 15'], l: '1-1' },
    { t: 'Utveckla: (x + 3)(x − 1)', ratt: 'x² + 2x − 3', fel: ['x² − 3', 'x² + 4x − 3', 'x² + 2x + 3'], l: '1-1' },
    { t: 'Förenkla: 5x + 3 − 2x', ratt: '3x + 3', fel: ['6x', '3x', '8x + 3'], l: '1-1' },
    { t: 'Multiplicera in: 5(x − 4)', ratt: '5x − 20', fel: ['5x − 4', 'x − 20', '5x + 20'], l: '1-1' },
    { t: 'Lös: 2x + 9 = 21', ratt: '6', fel: ['15', '30', '5'], l: '1-2a' },
    { t: 'Lös: 5x − 12 = 28', ratt: '8', fel: ['16', '3,2', '40'], l: '1-2a' },
    { t: 'Lös: 4(x − 3) = 2x + 6', ratt: '9', fel: ['3', '1,5', '6'], l: '1-2a' },
    { t: 'Lös: 6x − 5 = 2x + 15', ratt: '5', fel: ['2,5', '10', '20'], l: '1-2a' },
  ]},
  { nr: 2, id: 'ma1b-cp02', namn: 'Tillämpning & nämnare', fragor: [
    { t: 'Lös: x/2 + 3 = 10', ratt: '14', fel: ['3,5', '5', '26'], l: '1-3' },
    { t: 'Lös: x/4 − 2 = 3', ratt: '20', fel: ['4', '0,25', '5'], l: '1-3' },
    { t: 'Lös: 2x/3 = 10', ratt: '15', fel: ['6,67', '30', '20'], l: '1-3' },
    { t: 'Lös: (2x − 1)/3 = (x + 2)/2', ratt: '8', fel: ['4', '2', '7'], l: '1-3' },
    { t: 'Mira är 3 år äldre än Kim. Tillsammans är de 21 år. Hur gammal är Kim?', ratt: '9', fel: ['12', '10,5', '18'], l: '1-2b' },
    { t: 'Tre heltal i följd har summan 153. Vilket är det största?', ratt: '52', fel: ['50', '51', '153'], l: '1-2b' },
    { t: 'Lös: 3(x − 2) = 12', ratt: '6', fel: ['2', '4', '14'], l: '1-2a' },
    { t: 'Lös: 4x + 6 = 26', ratt: '5', fel: ['8', '20', '3,2'], l: '1-2a' },
    { t: 'Förenkla: 9x − (4x + 2)', ratt: '5x − 2', fel: ['5x + 2', '13x + 2', '5x'], l: '1-1' },
    { t: 'Multiplicera in: 6(x + 3)', ratt: '6x + 18', fel: ['6x + 3', 'x + 18', '6x + 9'], l: '1-1' },
  ]},
  { nr: 3, id: 'ma1b-cp03', namn: 'Dugga: Algebra & ekvationer', fragor: [
    { t: 'Förenkla: a⁵ · a³', ratt: 'a⁸', fel: ['a¹⁵', 'a²', '2a⁸'], l: '1-4' },
    { t: 'Förenkla: 8a⁶ / (2a²)', ratt: '4a⁴', fel: ['4a³', '6a⁴', '4a⁸'], l: '1-4' },
    { t: 'Förenkla: (a³)²', ratt: 'a⁶', fel: ['a⁵', 'a⁹', '2a³'], l: '1-4' },
    { t: 'Beräkna: 3⁰', ratt: '1', fel: ['0', '3', 'odefinierat'], l: '1-4' },
    { t: 'Förenkla: x⁷ / x⁴', ratt: 'x³', fel: ['x¹¹', 'x²', '1'], l: '1-4' },
    { t: 'Lös: x/2 + 3 = 10', ratt: '14', fel: ['3,5', '5', '26'], l: '1-3' },
    { t: 'Lös: x/3 = 7', ratt: '21', fel: ['2,33', '10', '4'], l: '1-3' },
    { t: 'Lös: 4(x − 3) = 2x + 6', ratt: '9', fel: ['3', '1,5', '6'], l: '1-2a' },
    { t: 'Förenkla: 7y − (3y + 4)', ratt: '4y − 4', fel: ['4y + 4', '10y + 4', '4y'], l: '1-1' },
    { t: 'Utveckla: (x + 5)(x − 2)', ratt: 'x² + 3x − 10', fel: ['x² − 10', 'x² + 3x + 10', 'x² − 3x − 10'], l: '1-1' },
  ]},
  { nr: 4, id: 'ma1b-cp04', namn: 'Prov: Algebra', fragor: [
    { t: 'Lös: x² = 100', ratt: '±10', fel: ['10', '50', '±50'], l: '1-6' },
    { t: 'Lös: x² = 49', ratt: '±7', fel: ['7', '24,5', '±24,5'], l: '1-6' },
    { t: 'Förenkla kvadratroten: √18', ratt: '3√2', fel: ['9√2', '√9', '6'], l: '1-6' },
    { t: 'Lös exakt: x² = 50', ratt: '±5√2', fel: ['±25', '±2√5', '±√100'], l: '1-6' },
    { t: 'Förenkla: a⁵ · a³', ratt: 'a⁸', fel: ['a¹⁵', 'a²', '2a⁸'], l: '1-4' },
    { t: 'Förenkla: 8a⁶ / (2a²)', ratt: '4a⁴', fel: ['4a³', '6a⁴', '4a⁸'], l: '1-4' },
    { t: 'Lös: x/2 + 3 = 10', ratt: '14', fel: ['3,5', '5', '26'], l: '1-3' },
    { t: 'Lös: 4(x − 3) = 2x + 6', ratt: '9', fel: ['3', '1,5', '6'], l: '1-2a' },
    { t: 'Utveckla och förenkla: (2x + 1)(x − 4)', ratt: '2x² − 7x − 4', fel: ['2x² − 4', '2x² + 7x − 4', '2x² − 9x − 4'], l: '1-1' },
    { t: 'Tre heltal i följd har summan 153. Vilket är det största?', ratt: '52', fel: ['50', '51', '153'], l: '1-2b' },
  ]},

  // ───────── 2. EKONOMI ─────────
  { nr: 5, id: 'ma1b-cp05', namn: 'Förändringsfaktor & upprepad förändring', fragor: [
    { t: 'Vad är förändringsfaktorn för en ökning på 12 %?', ratt: '1,12', fel: ['0,88', '12', '1,012'], l: '2-1' },
    { t: 'Vad är förändringsfaktorn för en minskning på 25 %?', ratt: '0,75', fel: ['1,25', '0,25', '0,975'], l: '2-1' },
    { t: 'En jacka kostar 800 kr och höjs med 10 %. Nytt pris?', ratt: '880 kr', fel: ['810 kr', '88 kr', '720 kr'], l: '2-1' },
    { t: 'En vara kostar 500 kr och höjs med 20 %. Nytt pris?', ratt: '600 kr', fel: ['520 kr', '100 kr', '480 kr'], l: '2-1' },
    { t: '3 000 kr växer 4 % per år. Uttryck för värdet efter 5 år?', ratt: '3000 · 1,04⁵', fel: ['3000 · 1,20', '3000 · 1,04 · 5', '3000 · 0,04⁵'], l: '2-2' },
    { t: 'En bil värd 300 000 kr tappar 10 % per år. Uttryck efter x år?', ratt: '300000 · 0,9^x', fel: ['300000 · 0,1^x', '300000 · 0,9 · x', '300000 · 1,1^x'], l: '2-2' },
    { t: 'Räkna ut: 1 000 · 1,05² (kr)', ratt: '1 102,5', fel: ['1 100', '1 050', '2 000'], l: '2-2' },
    { t: 'Lös: 4x + 6 = 26', ratt: '5', fel: ['8', '20', '3,2'], l: '1-2a' },
    { t: 'Förenkla: a⁵ · a³', ratt: 'a⁸', fel: ['a¹⁵', 'a²', '2a⁸'], l: '1-4' },
    { t: 'Förenkla: 5x + 3 − 2x', ratt: '3x + 3', fel: ['6x', '3x', '8x + 3'], l: '1-1' },
  ]},
  { nr: 6, id: 'ma1b-cp06', namn: 'Dugga: Ekonomi', fragor: [
    { t: 'Ett prisindex är 100 ett basår och 250 senare. Hur många procent har priserna ökat?', ratt: '150 %', fel: ['250 %', '50 %', '15 %'], l: '2-3' },
    { t: 'Vad är förändringsfaktorn för en minskning på 8 %?', ratt: '0,92', fel: ['1,08', '0,08', '0,992'], l: '2-1' },
    { t: 'En vara höjs 15 %, sedan 10 %, sedan sänks 20 %. Ungefär total förändring?', ratt: '+1,2 %', fel: ['+5 %', '−5 %', '+45 %'], l: '2-3' },
    { t: '2 000 kr växer 5 % per år. Uttryck för värdet efter 3 år?', ratt: '2000 · 1,05³', fel: ['2000 · 1,15', '2000 · 1,05 · 3', '2000 · 0,05³'], l: '2-2' },
    { t: 'Räkna ut: 2 000 · 1,1³ (kr)', ratt: '2 662', fel: ['2 600', '2 660', '6 000'], l: '2-2' },
    { t: 'Vad är förändringsfaktorn för en ökning på 25 %?', ratt: '1,25', fel: ['0,75', '25', '1,025'], l: '2-1' },
    { t: 'Lös: x² = 100', ratt: '±10', fel: ['10', '50', '±50'], l: '1-6' },
    { t: 'Lös: x/2 + 3 = 10', ratt: '14', fel: ['3,5', '5', '26'], l: '1-3' },
    { t: 'Förenkla: 8a⁶ / (2a²)', ratt: '4a⁴', fel: ['4a³', '6a⁴', '4a⁸'], l: '1-4' },
    { t: 'Utveckla: (x + 3)(x − 1)', ratt: 'x² + 2x − 3', fel: ['x² − 3', 'x² + 4x − 3', 'x² + 2x + 3'], l: '1-1' },
  ]},
  { nr: 7, id: 'ma1b-cp07', namn: 'Prov: Ekonomi', fragor: [
    { t: 'Du lånar 100 000 kr med 5 % årsränta. Hur mycket ränta första året?', ratt: '5 000 kr', fel: ['500 kr', '50 000 kr', '105 000 kr'], l: '2-4' },
    { t: 'Ett lån har 7 200 kr i ränta per år. Hur mycket är det per månad?', ratt: '600 kr', fel: ['86 400 kr', '60 kr', '720 kr'], l: '2-4' },
    { t: 'Du lånar 150 000 kr med 4 % årsränta. Hur mycket ränta per månad?', ratt: '500 kr', fel: ['6 000 kr', '60 kr', '50 kr'], l: '2-4' },
    { t: 'Du sätter in 2 000 kr med 5 % ränta per år. Uttryck för beloppet efter 3 år?', ratt: '2000 · 1,05³', fel: ['2000 · 1,15', '2000 · 1,05 · 3', '2000 · 0,05³'], l: '2-4' },
    { t: 'En vara säljs för 300 kr efter 25 % rabatt. Vad var ordinarie pris?', ratt: '400 kr', fel: ['375 kr', '240 kr', '320 kr'], l: '2-5' },
    { t: 'Ett prisindex är 100 ett basår och 460 senare. Hur många procent har priserna ökat?', ratt: '360 %', fel: ['460 %', '46 %', '260 %'], l: '2-5' },
    { t: 'Vad är förändringsfaktorn för en minskning på 20 %?', ratt: '0,80', fel: ['1,20', '0,20', '0,98'], l: '2-1' },
    { t: 'Lös: 4(x − 3) = 2x + 6', ratt: '9', fel: ['3', '1,5', '6'], l: '1-2a' },
    { t: 'Lös: x² = 49', ratt: '±7', fel: ['7', '24,5', '±24,5'], l: '1-6' },
    { t: 'Förenkla: a⁵ · a³', ratt: 'a⁸', fel: ['a¹⁵', 'a²', '2a⁸'], l: '1-4' },
  ]},

  // ───────── 3. FUNKTIONER OCH SAMBAND ─────────
  { nr: 8, id: 'ma1b-cp08', namn: 'Koordinatsystem & grafer', fragor: [
    { t: 'Funktionen y = 4x − 1. Vad är y när x = 2?', ratt: '7', fel: ['8', '1', '9'], l: '3-2' },
    { t: 'Funktionen y = x + 3. Vad är y när x = 5?', ratt: '8', fel: ['15', '2', '35'], l: '3-2' },
    { t: 'Funktionen y = 2x − 4. Vad är y när x = 0?', ratt: '−4', fel: ['4', '−2', '0'], l: '3-2' },
    { t: 'Funktionen y = 3x. Vilket x ger y = 12?', ratt: '4', fel: ['36', '9', '15'], l: '3-2' },
    { t: 'Värdetabell: y = 2, 6, 18, 54 för x = 0,1,2,3. Vilket y vid x = 4?', ratt: '162', fel: ['108', '72', '58'], l: '3-2' },
    { t: 'En kurva går genom (1,4), (2,7), (3,10). Vad är y vid x = 4?', ratt: '13', fel: ['14', '11', '16'], l: '3-2' },
    { t: 'Vad är förändringsfaktorn för en ökning på 20 %?', ratt: '1,20', fel: ['0,80', '20', '1,02'], l: '2-1' },
    { t: 'Lös: 4x + 6 = 26', ratt: '5', fel: ['8', '20', '3,2'], l: '1-2a' },
    { t: 'Förenkla: a⁵ · a³', ratt: 'a⁸', fel: ['a¹⁵', 'a²', '2a⁸'], l: '1-4' },
    { t: 'En vara kostar 500 kr och höjs med 20 %. Nytt pris?', ratt: '600 kr', fel: ['520 kr', '100 kr', '480 kr'], l: '2-1' },
  ]},
  { nr: 9, id: 'ma1b-cp09', namn: 'f(x) & linjära grafiskt', fragor: [
    { t: 'Funktionen f(x) = 3x + 2. Beräkna f(4).', ratt: '14', fel: ['11', '18', '9'], l: '3-3' },
    { t: 'Funktionen g(x) = x² − 5. Beräkna g(3).', ratt: '4', fel: ['1', '13', '−1'], l: '3-3' },
    { t: 'Funktionen f(x) = 2x + 3. Beräkna f(5).', ratt: '13', fel: ['10', '25', '16'], l: '3-3' },
    { t: 'Funktionen f(x) = 4x + 7. Vilket x ger f(x) = 23?', ratt: '4', fel: ['7', '30', '16'], l: '3-3' },
    { t: 'Linjen y = 2x + 3. Vid vilket y-värde skär den y-axeln?', ratt: '3', fel: ['2', '0', '−3'], l: '3-4' },
    { t: 'En linje går genom (1,2) och (3,8). Vad är lutningen k?', ratt: '3', fel: ['2', '6', '4'], l: '3-4' },
    { t: 'Funktionen y = 4x − 1. Vad är y när x = 2?', ratt: '7', fel: ['8', '1', '9'], l: '3-2' },
    { t: 'Värdetabell: y = 2, 6, 18, 54. Vilket y vid x = 4?', ratt: '162', fel: ['108', '72', '58'], l: '3-2' },
    { t: 'Lös: x/2 + 3 = 10', ratt: '14', fel: ['3,5', '5', '26'], l: '1-3' },
    { t: 'Vad är förändringsfaktorn för en minskning på 25 %?', ratt: '0,75', fel: ['1,25', '0,25', '0,975'], l: '2-1' },
  ]},
  { nr: 10, id: 'ma1b-cp10', namn: 'Dugga: Linjära funktioner', fragor: [
    { t: 'En linje har k = 2 och skär y-axeln i (0,5). Skriv ekvationen.', ratt: 'y = 2x + 5', fel: ['y = 5x + 2', 'y = 2x − 5', 'y = 2x'], l: '3-5' },
    { t: 'En linje går genom (1,4) och (3,10). Bestäm lutningen k.', ratt: '3', fel: ['2', '6', '4'], l: '3-5' },
    { t: 'En linje har k = −2 och går genom (1,3). Bestäm m.', ratt: '5', fel: ['1', '−1', '3'], l: '3-5' },
    { t: 'Linjen y = 3x − 6. Vid vilket x skär den x-axeln?', ratt: '2', fel: ['−6', '6', '3'], l: '3-5' },
    { t: 'Funktionen f(x) = 3x + 2. Beräkna f(4).', ratt: '14', fel: ['11', '18', '9'], l: '3-3' },
    { t: 'Linjen y = 2x + 3. Vid vilket y-värde skär den y-axeln?', ratt: '3', fel: ['2', '0', '−3'], l: '3-4' },
    { t: 'Funktionen g(x) = x² − 5. Beräkna g(3).', ratt: '4', fel: ['1', '13', '−1'], l: '3-3' },
    { t: 'Lös: 4(x − 3) = 2x + 6', ratt: '9', fel: ['3', '1,5', '6'], l: '1-2a' },
    { t: 'Vad är förändringsfaktorn för en ökning på 12 %?', ratt: '1,12', fel: ['0,88', '12', '1,012'], l: '2-1' },
    { t: 'Förenkla: 8a⁶ / (2a²)', ratt: '4a⁴', fel: ['4a³', '6a⁴', '4a⁸'], l: '1-4' },
  ]},
  { nr: 11, id: 'ma1b-cp11', namn: 'Exponential- & potensfunktioner', fragor: [
    { t: 'Funktionen f(x) = 100 · 2^x. Beräkna f(3).', ratt: '800', fel: ['600', '108', '206'], l: '3-7' },
    { t: 'Funktionen f(x) = x³. Beräkna f(2).', ratt: '8', fel: ['6', '9', '23'], l: '3-8' },
    { t: 'Funktionen y = 2x². Beräkna y när x = 3.', ratt: '18', fel: ['36', '12', '81'], l: '3-8' },
    { t: 'Värdetabell: y = 80, 40, 20, 10. Vilken funktionstyp?', ratt: 'Avtagande exponential', fel: ['Linjär', 'Växande exponential', 'Potens'], l: '3-7' },
    { t: 'Funktionen f(x) = 3 · 2^x. Beräkna f(0).', ratt: '3', fel: ['0', '6', '1'], l: '3-8' },
    { t: 'En bakteriekultur har 200 bakterier och fördubblas varje timme. Hur många efter 4 timmar?', ratt: '3 200', fel: ['1 600', '800', '1 000'], l: '3-7' },
    { t: 'En linje har k = 2 och skär y-axeln i (0,5). Skriv ekvationen.', ratt: 'y = 2x + 5', fel: ['y = 5x + 2', 'y = 2x − 5', 'y = 2x'], l: '3-5' },
    { t: 'Funktionen f(x) = 3x + 2. Beräkna f(4).', ratt: '14', fel: ['11', '18', '9'], l: '3-3' },
    { t: 'Räkna ut: 2 000 · 1,1³ (kr)', ratt: '2 662', fel: ['2 600', '2 660', '6 000'], l: '2-2' },
    { t: 'Lös: x² = 49', ratt: '±7', fel: ['7', '24,5', '±24,5'], l: '1-6' },
  ]},
  { nr: 12, id: 'ma1b-cp12', namn: 'Dugga 2: Funktioner', fragor: [
    { t: 'Värdetabell: y = 3, 7, 11, 15. Vilken funktionstyp?', ratt: 'Linjär', fel: ['Exponential', 'Potens', 'Ingen'], l: '3-9' },
    { t: 'Värdetabell: y = 5, 10, 20, 40. Vilken funktionstyp?', ratt: 'Exponential', fel: ['Linjär', 'Potens', 'Ingen'], l: '3-9' },
    { t: 'x = 1,2,3 ger y = 3,12,27 (y/x² = 3). Vilken funktionstyp?', ratt: 'Potens', fel: ['Linjär', 'Exponential', 'Ingen'], l: '3-9' },
    { t: 'Vilken modell växer snabbast på lång sikt?', ratt: 'Exponential', fel: ['Linjär', 'Potens', 'Alla lika'], l: '3-9' },
    { t: 'Funktionen f(x) = 100 · 2^x. Beräkna f(3).', ratt: '800', fel: ['600', '108', '206'], l: '3-7' },
    { t: 'Funktionen y = 2x². Beräkna y när x = 3.', ratt: '18', fel: ['36', '12', '81'], l: '3-8' },
    { t: 'En linje går genom (0,−1) och (2,5). Skriv ekvationen.', ratt: 'y = 3x − 1', fel: ['y = 3x + 1', 'y = 2x − 1', 'y = x − 1'], l: '3-5' },
    { t: 'Vad är förändringsfaktorn för en minskning på 10 %?', ratt: '0,90', fel: ['1,10', '0,10', '0,99'], l: '2-1' },
    { t: 'Lös: x/3 = 7', ratt: '21', fel: ['2,33', '10', '4'], l: '1-3' },
    { t: 'Förenkla: (a³)²', ratt: 'a⁶', fel: ['a⁵', 'a⁹', '2a³'], l: '1-4' },
  ]},
  { nr: 13, id: 'ma1b-cp13', namn: 'Problemlösning & definitionsmängd', fragor: [
    { t: 'En taxi kostar f(s) = 40 + 15s kr (s = km). Vad kostar 5 km?', ratt: '115 kr', fel: ['55 kr', '75 kr', '95 kr'], l: '3-11' },
    { t: 'Samma taxi f(s) = 40 + 15s. Hur långt kan du åka för 175 kr?', ratt: '9 km', fel: ['11 km', '12 km', '7 km'], l: '3-11' },
    { t: 'Funktionen f(x) = √(x − 4). Vilken definitionsmängd?', ratt: 'x ≥ 4', fel: ['x ≤ 4', 'x ≥ 0', 'x ≤ −4'], l: '3-12' },
    { t: 'Funktionen y = x² för −2 ≤ x ≤ 3. Vilken värdemängd?', ratt: '0 ≤ y ≤ 9', fel: ['4 ≤ y ≤ 9', '−2 ≤ y ≤ 3', '0 ≤ y ≤ 4'], l: '3-12' },
    { t: 'Funktionen f(x) = 2x + 1 för 0 ≤ x ≤ 5. Minsta y-värdet?', ratt: '1', fel: ['0', '11', '2'], l: '3-12' },
    { t: 'Värdetabell: y = 5, 10, 20, 40. Vilken funktionstyp?', ratt: 'Exponential', fel: ['Linjär', 'Potens', 'Ingen'], l: '3-9' },
    { t: 'Funktionen f(x) = 100 · 2^x. Beräkna f(3).', ratt: '800', fel: ['600', '108', '206'], l: '3-7' },
    { t: 'En vara säljs för 300 kr efter 25 % rabatt. Ordinarie pris?', ratt: '400 kr', fel: ['375 kr', '240 kr', '320 kr'], l: '2-5' },
    { t: 'Lös: x² = 100', ratt: '±10', fel: ['10', '50', '±50'], l: '1-6' },
    { t: 'En linje har k = 2 och skär y-axeln i (0,5). Skriv ekvationen.', ratt: 'y = 2x + 5', fel: ['y = 5x + 2', 'y = 2x − 5', 'y = 2x'], l: '3-5' },
  ]},
  { nr: 14, id: 'ma1b-cp14', namn: 'Prov: Funktioner', fragor: [
    { t: 'En bergsbana kostar y = 25 + 5x kr (x = km). Vad betyder talet 25?', ratt: 'Fast startavgift (25 kr)', fel: ['Kostnad per km', 'Antal km', 'Totalpris'], l: '3-5' },
    { t: 'Samma funktion y = 25 + 5x. Vad betyder talet 5?', ratt: 'Kostnad per km (5 kr/km)', fel: ['Startavgift', 'Antal km', 'Totalpris'], l: '3-5' },
    { t: 'En linje går genom (0,2) och (4,10). Skriv ekvationen.', ratt: 'y = 2x + 2', fel: ['y = 2x', 'y = 4x + 2', 'y = x + 2'], l: '3-5' },
    { t: 'Funktionen f(x) = 2x² − 3. Beräkna f(−2).', ratt: '5', fel: ['−5', '13', '11'], l: '3-3' },
    { t: 'Ett sparkonto växer 4 % per år. Vilken funktionstyp?', ratt: 'Exponential', fel: ['Linjär', 'Potens', 'Ingen'], l: '3-9' },
    { t: 'Funktionen f(x) = 50 · 1,2^x. Vad är startvärdet (x = 0)?', ratt: '50', fel: ['60', '1', '0'], l: '3-7' },
    { t: 'Värdetabell: y = 3, 7, 11, 15. Vilken funktionstyp?', ratt: 'Linjär', fel: ['Exponential', 'Potens', 'Ingen'], l: '3-9' },
    { t: 'Funktionen y = 2x². Beräkna y när x = 3.', ratt: '18', fel: ['36', '12', '81'], l: '3-8' },
    { t: 'Funktionen f(x) = √(x − 4). Vilken definitionsmängd?', ratt: 'x ≥ 4', fel: ['x ≤ 4', 'x ≥ 0', 'x ≤ −4'], l: '3-12' },
    { t: 'En taxi kostar f(s) = 40 + 15s kr. Vad kostar 5 km?', ratt: '115 kr', fel: ['55 kr', '75 kr', '95 kr'], l: '3-11' },
  ]},

  // ───────── 4. FÖRDJUPNING + 5. KURSPROV ─────────
  { nr: 15, id: 'ma1b-cp15', namn: 'Fördjupning: ekvationer & formler', fragor: [
    { t: 'Lös: x(x − 4) = 0', ratt: '0 eller 4', fel: ['4', '−4', '0 eller −4'], l: '4-1' },
    { t: 'Lös: 2x² − 6x = 0', ratt: '0 eller 3', fel: ['3', '−3', '0 eller −3'], l: '4-1' },
    { t: 'Lös: x² = 5x', ratt: '0 eller 5', fel: ['5', '−5', '0 eller −5'], l: '4-1' },
    { t: 'Lös: 2(x + 3) = 2x + 6', ratt: 'Alla x (oändligt många)', fel: ['x = 0', 'Saknar lösning', 'x = 6'], l: '4-2' },
    { t: 'Lös: 3x + 5 = 3x − 2', ratt: 'Saknar lösning', fel: ['Alla x', 'x = 0', 'x = 7'], l: '4-2' },
    { t: 'Lös ut h ur formeln A = b · h.', ratt: 'h = A/b', fel: ['h = A · b', 'h = b/A', 'h = A − b'], l: '4-3' },
    { t: 'Lös ut x ur formeln y = kx + m.', ratt: 'x = (y − m)/k', fel: ['x = y − m − k', 'x = (y + m)/k', 'x = k(y − m)'], l: '4-3' },
    { t: 'Vinst V(n) = 80n − 2400 kr. Vid hur många varor går företaget jämnt upp (V = 0)?', ratt: '30', fel: ['80', '2400', '20'], l: '4-4' },
    { t: 'Funktionen f(x) = 2x + 1. Vilket x ger f(x) = 11?', ratt: '5', fel: ['23', '6', '5,5'], l: '3-3' },
    { t: 'Vad är förändringsfaktorn för en ökning på 8 %?', ratt: '1,08', fel: ['0,92', '8', '1,008'], l: '2-1' },
  ]},
  { nr: 16, id: 'ma1b-cp16', namn: 'Fördjupning: faktorisering & förenkling', fragor: [
    { t: 'Faktorisera: x² + 5x', ratt: 'x(x + 5)', fel: ['x(5x)', '5x(x + 1)', 'x²(1 + 5)'], l: '4-5' },
    { t: 'Faktorisera: x² + 7x + 12', ratt: '(x + 3)(x + 4)', fel: ['(x + 2)(x + 6)', '(x + 12)(x + 1)', '(x + 5)(x + 2)'], l: '4-5' },
    { t: 'Faktorisera: x² − 9', ratt: '(x − 3)(x + 3)', fel: ['(x − 3)²', '(x − 9)(x + 1)', '(x + 3)²'], l: '4-5' },
    { t: 'Förenkla: (x² − 9)/(x − 3)', ratt: 'x + 3', fel: ['x − 3', 'x − 9', '3'], l: '4-6' },
    { t: 'Förenkla: (x² + 5x + 6)/(x + 2)', ratt: 'x + 3', fel: ['x + 2', 'x + 5', 'x + 6'], l: '4-6' },
    { t: 'Förenkla: 10a⁶ / (5a²)', ratt: '2a⁴', fel: ['2a³', '5a⁴', '2a⁸'], l: '4-6' },
    { t: 'Lös: x² = 5x', ratt: '0 eller 5', fel: ['5', '−5', '0 eller −5'], l: '4-1' },
    { t: 'Lös: x/2 + x/4 = 6', ratt: '8', fel: ['4', '24', '2'], l: '4-8' },
    { t: 'Tre heltal i följd har summan 36. Vilket är det minsta?', ratt: '11', fel: ['10', '12', '33'], l: '4-7' },
    { t: 'Lös: 6/(x − 1) = 3', ratt: '3', fel: ['2', '1', '9'], l: '4-8' },
  ]},
  { nr: 17, id: 'ma1b-cp17', namn: 'Fördjupning: funktioner (pre-test)', fragor: [
    { t: 'Funktionen f(x) = √(x − 2). Vilken definitionsmängd?', ratt: 'x ≥ 2', fel: ['x ≤ 2', 'x ≥ 0', 'x > 2'], l: '4-9' },
    { t: 'Funktionen f(x) = x² (alla reella x). Vilken värdemängd?', ratt: 'y ≥ 0', fel: ['y > 0', 'y ≤ 0', 'alla y'], l: '4-9' },
    { t: 'Var skär linjerna y = 2x och y = x + 3 varandra (x-värdet)?', ratt: '3', fel: ['1', '6', '−3'], l: '4-10' },
    { t: 'Linjerna y = 2x − 4 och y = −x + 5 skär varandra vid vilket x?', ratt: '3', fel: ['1', '9', '−3'], l: '4-10' },
    { t: 'En bil värd 240 000 kr tappar 20 % per år. Värde efter 2 år?', ratt: '153 600 kr', fel: ['144 000 kr', '192 000 kr', '96 000 kr'], l: '4-11' },
    { t: 'Ett konto med 10 000 kr fördubblas vart sjunde år. Hur mycket efter 14 år?', ratt: '40 000 kr', fel: ['20 000 kr', '30 000 kr', '80 000 kr'], l: '4-11' },
    { t: 'Faktorisera: x² − 9', ratt: '(x − 3)(x + 3)', fel: ['(x − 3)²', '(x − 9)(x + 1)', '(x + 3)²'], l: '4-5' },
    { t: 'Lös: x(x − 4) = 0', ratt: '0 eller 4', fel: ['4', '−4', '0 eller −4'], l: '4-1' },
    { t: 'Ett prisindex går från 100 till 340. Hur många procent har priserna ökat?', ratt: '240 %', fel: ['340 %', '34 %', '140 %'], l: '2-5' },
    { t: 'En linje går genom (0,3) och (2,11). Skriv ekvationen.', ratt: 'y = 4x + 3', fel: ['y = 4x', 'y = 2x + 3', 'y = x + 3'], l: '3-5' },
  ]},
  { nr: 18, id: 'ma1b-cp18', namn: 'Kursprov: hela Ma1b', fragor: [
    { t: 'Förenkla: 7y − (3y + 4)', ratt: '4y − 4', fel: ['4y + 4', '10y + 4', '4y'], l: '1-1' },
    { t: 'Lös: 4(x − 3) = 2x + 6', ratt: '9', fel: ['3', '1,5', '6'], l: '1-2a' },
    { t: 'Lös exakt: x² = 50', ratt: '±5√2', fel: ['±25', '±2√5', '±√100'], l: '1-6' },
    { t: 'Förenkla: 8a⁶ / (2a²)', ratt: '4a⁴', fel: ['4a³', '6a⁴', '4a⁸'], l: '1-4' },
    { t: 'En vara säljs för 480 kr efter 20 % rabatt. Vad var ordinarie pris?', ratt: '600 kr', fel: ['576 kr', '384 kr', '500 kr'], l: '2-5' },
    { t: 'Du sätter in 5 000 kr med 3 % ränta per år. Uttryck efter 4 år?', ratt: '5000 · 1,03⁴', fel: ['5000 · 1,12', '5000 · 1,03 · 4', '5000 · 0,03⁴'], l: '2-4' },
    { t: 'En linje går genom (0,4) och (3,13). Skriv ekvationen.', ratt: 'y = 3x + 4', fel: ['y = 3x', 'y = 4x + 3', 'y = x + 4'], l: '3-5' },
    { t: 'Funktionen f(x) = 2x² − 3. Beräkna f(−2).', ratt: '5', fel: ['−5', '13', '11'], l: '3-3' },
    { t: 'Värdetabell: y = 5, 10, 20, 40. Vilken funktionstyp?', ratt: 'Exponential', fel: ['Linjär', 'Potens', 'Ingen'], l: '3-9' },
    { t: 'Lös: x² = 5x', ratt: '0 eller 5', fel: ['5', '−5', '0 eller −5'], l: '4-1' },
  ]},
];
