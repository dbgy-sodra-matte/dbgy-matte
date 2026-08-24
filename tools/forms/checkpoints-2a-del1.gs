/**
 * Checkpoints — Del 1: Andragradare (9 st), Prövning Ma2a
 * ======================================================
 * Skapar nio checkpoint-quiz i en körning. 10 frågor per quiz,
 * feldistraktorer på klassiska misstag, träna mer-länk till rätt
 * Ma2a-delmomentsida vid fel svar.
 *
 * MALL-TRICKET (läs detta först — sparar ~100 klick)
 * --------------------------------------------------
 * Apps Script kan INTE sätta "Visa betyg omedelbart" eller
 * "Respondenter: alla på AcadeMedia". Men en KOPIA av ett formulär
 * ärver inställningarna. Så:
 *   1. Skapa ETT tomt formulär för hand, gör det till quiz, och sätt
 *      de två inställningarna på det. Döp det till "MALL — checkpoint".
 *   2. Kopiera formulärets id ur adressraden
 *      (.../forms/d/DET_HAR_AR_ID/edit) och klistra in i MALL_ID nedan.
 *   3. Kör skriptet. Varje checkpoint blir en kopia av mallen med
 *      mallens frågor borttagna och sina egna insatta.
 *   4. KONTROLLERA FÖRSTA FORMULÄRET: stämmer båda inställningarna?
 *      Om ja — resten stämmer också. Om nej: töm MALL_ID, kör om, och
 *      sätt inställningarna för hand enligt listan längst ned.
 *
 * KÖRS SÅ HÄR (en gång, av Simon, inloggad med dbgy.se-kontot):
 *   1. script.google.com → Nytt projekt → klistra in HELA filen → spara
 *   2. Kör funktionen "skapaDel1Checkpoints2a" (~1-2 min)
 *   3. Öppna Körlogg (Ctrl+Enter) → alla nio PUBLICERAD-URL:er listas
 *   4. Klistra in loggen i chatten med Claude → länkarna läggs in på sidorna
 *
 * Tröskel: minst 8/10 = klarad. Obegränsade försök (mastery).
 */

const MALL_ID = '';   // <-- klistra in mall-formulärets id här (valfritt, se ovan)
const BAS_URL = 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/';
const KURSNAMN = 'Prövning Ma2a';

function skapaDel1Checkpoints2a() {
  const resultat = [];
  for (const cp of CHECKPOINTS) {
    const url = skapaCheckpoint(cp);
    resultat.push(cp.namn + '\n  PUBLICERAD: ' + url.publicerad + '\n  REDIGERA:   ' + url.redigera);
  }
  Logger.log('\n===== ALLA NIO (DEL 1 — ANDRAGRADARE) SKAPADE =====\n\n' + resultat.join('\n\n'));
}

function skapaCheckpoint(cp) {
  const titel = 'Checkpoint — ' + cp.namn + ' (' + KURSNAMN + ')';
  let form;
  if (MALL_ID) {
    // Kopiera mallen så dess quiz-inställningar följer med, töm den på frågor
    const kopia = DriveApp.getFileById(MALL_ID).makeCopy(titel);
    form = FormApp.openById(kopia.getId());
    const gamla = form.getItems();
    for (let i = gamla.length - 1; i >= 0; i--) form.deleteItem(gamla[i]);
    form.setTitle(titel);
  } else {
    form = FormApp.create(titel);
  }
  form.setIsQuiz(true);
  form.setDescription(
    'Visa att ' + cp.namn + ' sitter — 10 frågor på delmomentets E-mål.\n\n' +
    'KLARAD = minst 8 rätt av 10. Får du färre: läs avsnitten som länkas vid ' +
    'frågorna du missade, träna, och gör om quizet. Du har hur många försök som helst.'
  );
  try {
    form.setEmailCollectionType(FormApp.EmailCollectionType.VERIFIED);
  } catch (e) {
    form.setCollectEmail(true);
  }
  try { form.setRequireLogin(true); } catch (e) {}
  form.setPublishingSummary(false);

  const sidaUrl = BAS_URL + cp.slug;

  for (const q of cp.fragor) {
    const item = form.addMultipleChoiceItem();
    item.setTitle(q.t).setPoints(1).setRequired(true);
    const choices = [item.createChoice(q.ratt, true)].concat(
      q.fel.map(function (f) { return item.createChoice(f, false); })
    );
    choices.sort(function () { return Math.random() - 0.5; });
    item.setChoices(choices);
    item.setFeedbackForIncorrect(
      FormApp.createFeedback()
        .setText('Inte riktigt — träna mer på avsnittet "' + q.avsnitt + '" och försök igen.')
        .addLink(sidaUrl, 'Öppna delmomentet ' + cp.namn)
        .build()
    );
    item.setFeedbackForCorrect(FormApp.createFeedback().setText('Rätt!').build());
  }

  form.addParagraphTextItem()
    .setTitle('Något du fastnade på eller vill fråga om? (frivilligt)')
    .setRequired(false);

  return { publicerad: form.getPublishedUrl(), redigera: form.getEditUrl() };
}

// ═════════════════════ FRÅGEBANKEN ═════════════════════

const CHECKPOINTS = [
  {
    namn: 'Enkla andragradsekvationer', slug: 'andragradare/enkla-andragradsekvationer',
    fragor: [
      { t: 'Lös ekvationen: x² = 144', ratt: 'x = ±12', fel: ['x = 12', 'x = 72', 'x = 288'], avsnitt: 'Två lösningar, inte en' },
      { t: 'Lös ekvationen: x² = 361', ratt: 'x = ±19', fel: ['x = 19', 'x = 180,5', 'x = 722'], avsnitt: 'Två lösningar, inte en' },
      { t: 'Lös ekvationen: x² − 64 = 0', ratt: 'x = ±8', fel: ['x = 8', 'x = −8', 'x = 32'], avsnitt: 'Få x² ensamt först' },
      { t: 'Lös ekvationen: 3x² = 108', ratt: 'x = ±6', fel: ['x = 6', 'x = 36', 'x = ±36'], avsnitt: 'Få x² ensamt först' },
      { t: 'Lös ekvationen: x² + 5 = 86', ratt: 'x = ±9', fel: ['x = 9', 'x = ±91', 'x = ±81'], avsnitt: 'Få x² ensamt först' },
      { t: 'Lös ekvationen: 2x² − 8 = 64', ratt: 'x = ±6', fel: ['x = 6', 'x = ±4', 'x = ±36'], avsnitt: 'Få x² ensamt först' },
      { t: 'Hur många lösningar har ekvationen x² + 7 = 3?', ratt: 'Ingen — x² kan inte bli negativt', fel: ['En', 'Två', 'Oändligt många'], avsnitt: 'När ekvationen saknar lösning' },
      { t: 'Vad blir (−6)²?', ratt: '36', fel: ['−36', '−12', '12'], avsnitt: 'Två lösningar, inte en' },
      { t: 'Varför har x² = 25 två lösningar?', ratt: 'Både 5 och −5 blir 25 när de kvadreras', fel: ['För att 25 är ett udda tal', 'För att 25 kan delas med 5', 'För att andragradsekvationer alltid har två lösningar'], avsnitt: 'Två lösningar, inte en' },
      { t: 'Lös ekvationen: 5x² = 500', ratt: 'x = ±10', fel: ['x = 10', 'x = 100', 'x = ±100'], avsnitt: 'Få x² ensamt först' },
    ],
  },
  {
    namn: 'Nollproduktmetoden', slug: 'andragradare/nollproduktmetoden',
    fragor: [
      { t: 'Lös ekvationen: (x − 4)(x + 9) = 0', ratt: 'x = 4 och x = −9', fel: ['x = −4 och x = 9', 'x = 4 och x = 9', 'x = −4 och x = −9'], avsnitt: 'Byt tecken när du löser ut' },
      { t: 'Lös ekvationen: (x + 3)(x − 10) = 0', ratt: 'x = −3 och x = 10', fel: ['x = 3 och x = −10', 'x = 3 och x = 10', 'x = −3 och x = −10'], avsnitt: 'Byt tecken när du löser ut' },
      { t: 'Lös ekvationen: (3x − 6)(x + 1) = 0', ratt: 'x = 2 och x = −1', fel: ['x = 6 och x = −1', 'x = −2 och x = 1', 'x = 2 och x = 1'], avsnitt: 'När det står en siffra framför x' },
      { t: 'Lös ekvationen: x² − 7x = 0', ratt: 'x = 0 och x = 7', fel: ['x = 7', 'x = ±7', 'x = 0 och x = −7'], avsnitt: 'Bryt ut x' },
      { t: 'Lös ekvationen: x² + 5x = 0', ratt: 'x = 0 och x = −5', fel: ['x = −5', 'x = 0 och x = 5', 'x = ±5'], avsnitt: 'Bryt ut x' },
      { t: 'Lös ekvationen: 3x² − 15x = 0', ratt: 'x = 0 och x = 5', fel: ['x = 5', 'x = 0 och x = 15', 'x = ±5'], avsnitt: 'Bryt ut x' },
      { t: 'Lös ekvationen: 8x² = 32x', ratt: 'x = 0 och x = 4', fel: ['x = 4', 'x = 0 och x = 24', 'x = ±4'], avsnitt: 'Flytta över allt till ena ledet först' },
      { t: 'Varför måste högerledet vara 0 innan du använder nollproduktmetoden?', ratt: 'Bara noll kan skrivas som en produkt på ett enda sätt: någon faktor måste vara noll', fel: ['För att det ser snyggare ut', 'För att x annars blir negativt', 'För att parenteserna annars inte går att multiplicera'], avsnitt: 'Varför högerledet måste vara 0' },
      { t: 'En elev löser x² − 6x = 0 genom att dela båda leden med x och får x = 6. Vad är felet?', ratt: 'Lösningen x = 0 försvinner när man delar med x', fel: ['Man får inte dela en ekvation alls', 'Svaret ska vara −6', 'Man måste använda pq-formeln här'], avsnitt: 'Bryt ut x' },
      { t: 'Lös ekvationen: (x − 5)(x − 5) = 0', ratt: 'x = 5, en dubbelrot', fel: ['x = ±5', 'x = 5 och x = −5', 'x = 25'], avsnitt: 'Byt tecken när du löser ut' },
    ],
  },
  {
    namn: 'Pythagoras sats och koordinatgeometri', slug: 'andragradare/pythagoras-och-koordinatgeometri',
    fragor: [
      { t: 'Kateterna i en rätvinklig triangel är 6 och 8 längdenheter. Hur lång är hypotenusan?', ratt: '10', fel: ['14', '48', '100'], avsnitt: 'Pythagoras sats' },
      { t: 'Kateterna i en rätvinklig triangel är 5 och 12. Hur lång är hypotenusan?', ratt: '13', fel: ['17', '60', '169'], avsnitt: 'Pythagoras sats' },
      { t: 'Hypotenusan är 17 och en katet är 8. Hur lång är den andra kateten?', ratt: '15', fel: ['9', '25', '19'], avsnitt: 'När hypotenusan är känd' },
      { t: 'Vilken sida är hypotenusan i en rätvinklig triangel?', ratt: 'Den längsta sidan, mittemot den räta vinkeln', fel: ['Den kortaste sidan', 'Sidan som ligger vågrätt', 'En av de två sidor som bildar den räta vinkeln'], avsnitt: 'Pythagoras sats' },
      { t: 'Bestäm avståndet mellan punkterna (1, 3) och (7, 11).', ratt: '10', fel: ['14', '6', '100'], avsnitt: 'Avstånd mellan två punkter' },
      { t: 'Bestäm avståndet mellan punkterna (−4, 2) och (0, 5).', ratt: '5', fel: ['7', '25', '3'], avsnitt: 'Avstånd mellan två punkter' },
      { t: 'Bestäm mittpunkten mellan punkterna (2, 4) och (8, 10).', ratt: '(5, 7)', fel: ['(10, 14)', '(3, 3)', '(6, 6)'], avsnitt: 'Mittpunkten' },
      { t: 'Bestäm mittpunkten mellan punkterna (−5, 1) och (9, 7).', ratt: '(2, 4)', fel: ['(7, 3)', '(4, 8)', '(−7, −3)'], avsnitt: 'Mittpunkten' },
      { t: 'Hur räknar man ut mittpunkten mellan två punkter?', ratt: 'Medelvärdet av x-värdena och medelvärdet av y-värdena', fel: ['Skillnaden mellan x-värdena och mellan y-värdena', 'Summan av alla fyra talen delat på fyra', 'Kvadratroten ur produkten av koordinaterna'], avsnitt: 'Mittpunkten' },
      { t: 'Varför är avståndsformeln egentligen Pythagoras sats?', ratt: 'Skillnaden i x och skillnaden i y är kateterna, och avståndet är hypotenusan', fel: ['För att alla punkter ligger på en cirkel', 'För att koordinatsystemet är kvadratiskt', 'För att avståndet alltid är positivt'], avsnitt: 'Avstånd mellan två punkter' },
    ],
  },
  {
    namn: 'Parentesmultiplikation', slug: 'andragradare/parentesmultiplikation',
    fragor: [
      { t: 'Utveckla: 5x(x + 4)', ratt: '5x² + 20x', fel: ['5x² + 4', '5x + 20x', '9x²'], avsnitt: 'En term in i en parentes' },
      { t: 'Utveckla: 3x(2x − 7)', ratt: '6x² − 21x', fel: ['6x² − 7', '6x − 21x', '−21x²'], avsnitt: 'En term in i en parentes' },
      { t: 'Utveckla: (x + 2)(x + 5)', ratt: 'x² + 7x + 10', fel: ['x² + 10', 'x² + 7x', 'x² + 10x + 7'], avsnitt: 'Fyra produkter' },
      { t: 'Utveckla: (x + 8)(x − 3)', ratt: 'x² + 5x − 24', fel: ['x² − 5x − 24', 'x² − 24', 'x² + 11x − 24'], avsnitt: 'Håll koll på tecknen' },
      { t: 'Utveckla: (x − 5)(x − 6)', ratt: 'x² − 11x + 30', fel: ['x² − 11x − 30', 'x² + 11x + 30', 'x² − 30'], avsnitt: 'Håll koll på tecknen' },
      { t: 'Utveckla: (x − 9)(x + 4)', ratt: 'x² − 5x − 36', fel: ['x² + 5x − 36', 'x² − 13x − 36', 'x² − 36'], avsnitt: 'Håll koll på tecknen' },
      { t: 'Hur många produkter blir det när du multiplicerar (a + b)(c + d)?', ratt: 'Fyra', fel: ['Två', 'Tre', 'Sex'], avsnitt: 'Fyra produkter' },
      { t: 'Utveckla: (2x + 3)(x + 5)', ratt: '2x² + 13x + 15', fel: ['2x² + 15', '2x² + 8x + 15', '2x² + 13x + 8'], avsnitt: 'När det står en siffra framför x' },
      { t: 'Utveckla: (4x − 1)(x + 2)', ratt: '4x² + 7x − 2', fel: ['4x² − 7x − 2', '4x² + 8x − 2', '4x² − 2'], avsnitt: 'När det står en siffra framför x' },
      { t: 'En elev skriver (x + 3)(x + 4) = x² + 12. Vad har eleven glömt?', ratt: 'De två mittersta produkterna, 4x och 3x', fel: ['Att kvadrera trean och fyran', 'Att sätta ut minustecken', 'Ingenting — svaret är rätt'], avsnitt: 'Fyra produkter' },
    ],
  },
  {
    namn: 'Kvadreringsreglerna och konjugatregeln', slug: 'andragradare/kvadrerings-och-konjugatregeln',
    fragor: [
      { t: 'Utveckla: (x + 9)²', ratt: 'x² + 18x + 81', fel: ['x² + 81', 'x² + 9x + 81', 'x² + 18x + 18'], avsnitt: 'Första kvadreringsregeln' },
      { t: 'Utveckla: (x − 7)²', ratt: 'x² − 14x + 49', fel: ['x² − 49', 'x² − 14x − 49', 'x² + 14x + 49'], avsnitt: 'Andra kvadreringsregeln' },
      { t: 'Varför är (x + 5)² INTE lika med x² + 25?', ratt: 'Den dubbla produkten 2 · x · 5 = 10x saknas', fel: ['För att 5² är 10, inte 25', 'För att x² ska vara 2x', 'För att man måste byta tecken'], avsnitt: 'Den vanligaste fällan' },
      { t: 'Utveckla: (2x + 7)²', ratt: '4x² + 28x + 49', fel: ['2x² + 28x + 49', '4x² + 14x + 49', '4x² + 49'], avsnitt: 'När det står en siffra framför x' },
      { t: 'Utveckla: (x + 6)(x − 6)', ratt: 'x² − 36', fel: ['x² + 36', 'x² − 12x − 36', 'x² − 12x + 36'], avsnitt: 'Konjugatregeln' },
      { t: 'Utveckla: (4x + 3)(4x − 3)', ratt: '16x² − 9', fel: ['4x² − 9', '16x² + 9', '16x² − 24x − 9'], avsnitt: 'Konjugatregeln' },
      { t: 'Varför försvinner mittentermerna i konjugatregeln?', ratt: 'De två mittersta produkterna är lika stora men har olika tecken och tar ut varandra', fel: ['De är alltid noll', 'Man stryker dem för att förenkla', 'De hör till andragradstermen'], avsnitt: 'Konjugatregeln' },
      { t: 'Faktorisera: x² − 81', ratt: '(x + 9)(x − 9)', fel: ['(x − 9)(x − 9)', '(x + 9)(x + 9)', '(x − 81)(x + 1)'], avsnitt: 'Differens av två kvadrater' },
      { t: 'Faktorisera: x² − 100', ratt: '(x + 10)(x − 10)', fel: ['(x − 10)(x − 10)', '(x + 100)(x − 1)', 'Går inte att faktorisera'], avsnitt: 'Differens av två kvadrater' },
      { t: 'Vilket av uttrycken går att faktorisera med konjugatregeln?', ratt: 'x² − 49', fel: ['x² + 49', 'x² + 14x + 49', 'x² − 14x'], avsnitt: 'Differens av två kvadrater' },
    ],
  },
  {
    namn: 'pq-formeln', slug: 'andragradare/pq-formeln',
    fragor: [
      { t: 'I ekvationen x² + 6x − 16 = 0, vad är p och q?', ratt: 'p = 6 och q = −16', fel: ['p = 6 och q = 16', 'p = −6 och q = −16', 'p = 1 och q = 6'], avsnitt: 'Identifiera p och q' },
      { t: 'I ekvationen x² − 10x + 21 = 0, vad är p och q?', ratt: 'p = −10 och q = 21', fel: ['p = 10 och q = 21', 'p = −10 och q = −21', 'p = 10 och q = −21'], avsnitt: 'Identifiera p och q' },
      { t: 'Lös ekvationen: x² + 4x − 12 = 0', ratt: 'x = 2 och x = −6', fel: ['x = −2 och x = 6', 'x = 2 och x = 6', 'x = −2 och x = −6'], avsnitt: 'Sätt in i formeln' },
      { t: 'Lös ekvationen: x² − 8x + 12 = 0', ratt: 'x = 6 och x = 2', fel: ['x = −6 och x = −2', 'x = 6 och x = −2', 'x = 4 och x = 3'], avsnitt: 'Sätt in i formeln' },
      { t: 'Lös ekvationen: x² + 2x − 35 = 0', ratt: 'x = 5 och x = −7', fel: ['x = −5 och x = 7', 'x = 5 och x = 7', 'x = −5 och x = −7'], avsnitt: 'Sätt in i formeln' },
      { t: 'Lös ekvationen: x² − 3x − 10 = 0', ratt: 'x = 5 och x = −2', fel: ['x = −5 och x = 2', 'x = 5 och x = 2', 'x = 10 och x = −1'], avsnitt: 'Sätt in i formeln' },
      { t: 'Vad måste du göra FÖRE pq-formeln med ekvationen 3x² + 12x − 15 = 0?', ratt: 'Dela hela ekvationen med 3', fel: ['Multiplicera med 3', 'Flytta över 15 till högerledet', 'Ingenting — formeln funkar direkt'], avsnitt: 'Dela bort siffran framför x²' },
      { t: 'Lös ekvationen: 2x² − 14x + 20 = 0', ratt: 'x = 5 och x = 2', fel: ['x = 7 och x = 10', 'x = −5 och x = −2', 'x = 10 och x = 4'], avsnitt: 'Dela bort siffran framför x²' },
      { t: 'Vad måste du göra FÖRE pq-formeln med ekvationen x² = 7x + 18?', ratt: 'Flytta över allt till vänsterledet: x² − 7x − 18 = 0', fel: ['Dela båda leden med x', 'Sätta p = 7 och q = 18 direkt', 'Dra roten ur båda leden'], avsnitt: 'Skriv om till rätt form först' },
      { t: 'Vad betyder det om talet under rottecknet i pq-formeln blir negativt?', ratt: 'Ekvationen saknar reella lösningar', fel: ['Båda lösningarna blir negativa', 'Ekvationen har oändligt många lösningar', 'Man byter tecken och räknar vidare'], avsnitt: 'När ekvationen saknar lösning' },
    ],
  },
  {
    namn: 'Andragradsfunktioner grafiskt', slug: 'andragradare/andragradsfunktioner-grafiskt',
    fragor: [
      { t: 'Vad kallas de punkter där parabeln skär x-axeln?', ratt: 'Nollställen', fel: ['Symmetripunkter', 'Extrempunkter', 'Skärningspunkter med y-axeln'], avsnitt: 'Läsa av nollställen' },
      { t: 'En parabel skär x-axeln i x = 1 och x = 9. Vilken är symmetrilinjens ekvation?', ratt: 'x = 5', fel: ['x = 4', 'x = 10', 'y = 5'], avsnitt: 'Symmetrilinjen' },
      { t: 'En parabel skär x-axeln i x = −3 och x = 7. Vilken är symmetrilinjens ekvation?', ratt: 'x = 2', fel: ['x = 5', 'x = −2', 'x = 4'], avsnitt: 'Symmetrilinjen' },
      { t: 'Hur ser du på grafen att funktionen har ett STÖRSTA värde?', ratt: 'Parabeln är nedåtvänd, som ett berg', fel: ['Parabeln är uppåtvänd, som en dal', 'Parabeln skär y-axeln över noll', 'Parabeln saknar nollställen'], avsnitt: 'Största eller minsta värde' },
      { t: 'Vad betyder det att avläsa f(3) i en graf?', ratt: 'Gå till x = 3 och läs av grafens y-värde där', fel: ['Gå till y = 3 och läs av x-värdet', 'Multiplicera funktionen med 3', 'Läsa av var grafen skär x-axeln'], avsnitt: 'Läsa av f(a)' },
      { t: 'Hur löser du f(x) = 6 med hjälp av grafen?', ratt: 'Dra en vågrät linje vid y = 6 och läs av var den skär parabeln', fel: ['Dra en lodrät linje vid x = 6', 'Läs av var parabeln skär y-axeln', 'Räkna ut symmetrilinjen'], avsnitt: 'Lösa f(x) = k grafiskt' },
      { t: 'Vad kallas den lägsta punkten på en uppåtvänd parabel?', ratt: 'Minimipunkt', fel: ['Maximipunkt', 'Nollställe', 'Symmetrilinje'], avsnitt: 'Största eller minsta värde' },
      { t: 'Var skär parabeln y-axeln?', ratt: 'Där x = 0', fel: ['Där y = 0', 'I symmetrilinjen', 'I nollställena'], avsnitt: 'Läsa av f(a)' },
      { t: 'En parabel har minimipunkten (4, −7). Vilket är funktionens minsta värde?', ratt: '−7', fel: ['4', '(4, −7)', '7'], avsnitt: 'Största eller minsta värde' },
      { t: 'Hur många nollställen kan en andragradsfunktion ha?', ratt: 'Noll, ett eller två', fel: ['Alltid två', 'Alltid ett', 'Hur många som helst'], avsnitt: 'Läsa av nollställen' },
    ],
  },
  {
    namn: 'Andragradsfunktioner algebraiskt', slug: 'andragradare/andragradsfunktioner-algebraiskt',
    fragor: [
      { t: 'Hur bestämmer du nollställena till en andragradsfunktion algebraiskt?', ratt: 'Sätt f(x) = 0 och lös ekvationen', fel: ['Sätt x = 0 och räkna ut f(0)', 'Räkna ut symmetrilinjen först', 'Dela funktionen med x'], avsnitt: 'Nollställen' },
      { t: 'Bestäm nollställena till f(x) = x² − 10x + 16', ratt: 'x = 2 och x = 8', fel: ['x = −2 och x = −8', 'x = 5 och x = 5', 'x = 16 och x = 1'], avsnitt: 'Nollställen' },
      { t: 'Bestäm nollställena till f(x) = x² + 2x − 24', ratt: 'x = 4 och x = −6', fel: ['x = −4 och x = 6', 'x = 4 och x = 6', 'x = −4 och x = −6'], avsnitt: 'Nollställen' },
      { t: 'En andragradsfunktion har nollställena x = 2 och x = 12. Vilken är symmetrilinjen?', ratt: 'x = 7', fel: ['x = 5', 'x = 14', 'x = 6'], avsnitt: 'Symmetrilinjen som medelvärde' },
      { t: 'Bestäm symmetrilinjen till f(x) = x² − 8x + 3 utan att räkna ut nollställena.', ratt: 'x = 4', fel: ['x = −4', 'x = 8', 'x = 3'], avsnitt: 'Symmetrilinjen ur p' },
      { t: 'Bestäm symmetrilinjen till f(x) = x² + 6x + 1', ratt: 'x = −3', fel: ['x = 3', 'x = −6', 'x = 6'], avsnitt: 'Symmetrilinjen ur p' },
      { t: 'Hur får du fram extrempunktens y-värde när du vet symmetrilinjen?', ratt: 'Sätt in symmetrilinjens x-värde i funktionen', fel: ['Sätt in 0 i funktionen', 'Ta medelvärdet av nollställena igen', 'Dela symmetrilinjen med 2'], avsnitt: 'Extrempunkten' },
      { t: 'Bestäm extrempunkten till f(x) = x² − 6x + 5', ratt: '(3, −4)', fel: ['(3, 4)', '(−3, −4)', '(6, 5)'], avsnitt: 'Extrempunkten' },
      { t: 'Har f(x) = −x² + 8x − 12 ett största eller ett minsta värde?', ratt: 'Ett största värde, eftersom x²-termen är negativ', fel: ['Ett minsta värde, eftersom konstanten är negativ', 'Ett minsta värde, eftersom x²-termen är negativ', 'Varken eller'], avsnitt: 'Största eller minsta värde' },
      { t: 'Bestäm nollställena till f(x) = 2x² − 16x + 24', ratt: 'x = 2 och x = 6', fel: ['x = 4 och x = 12', 'x = −2 och x = −6', 'x = 8 och x = 3'], avsnitt: 'Dela bort siffran framför x²' },
    ],
  },
  {
    namn: 'Andragradsfunktioner problemlösning', slug: 'andragradare/andragradsfunktioner-problemlosning',
    fragor: [
      { t: 'I modellen h(t) = −5t² + 30t, vad betyder t?', ratt: 'Tiden i sekunder efter kastet', fel: ['Höjden i meter', 'Hastigheten', 'Antalet kast'], avsnitt: 'Vad x och y betyder' },
      { t: 'Hur räknar du ut starthöjden i en modell h(t)?', ratt: 'Sätt in t = 0', fel: ['Sätt h(t) = 0', 'Räkna ut symmetrilinjen', 'Ta det största värdet'], avsnitt: 'Starthöjden' },
      { t: 'En boll kastas med h(t) = −5t² + 30t. Från vilken höjd kastas den?', ratt: '0 meter — från marken', fel: ['30 meter', '5 meter', '45 meter'], avsnitt: 'Starthöjden' },
      { t: 'Samma boll: h(t) = −5t² + 30t. Efter hur många sekunder är den tillbaka på marken?', ratt: '6 sekunder', fel: ['3 sekunder', '30 sekunder', '5 sekunder'], avsnitt: 'När något når marken' },
      { t: 'Samma boll: h(t) = −5t² + 30t. Hur högt når bollen som högst?', ratt: '45 meter', fel: ['30 meter', '90 meter', '15 meter'], avsnitt: 'Högsta punkten' },
      { t: 'Hur hittar du tidpunkten för högsta punkten?', ratt: 'Räkna ut symmetrilinjen — den ligger mitt emellan nollställena', fel: ['Sätt in t = 0', 'Lös h(t) = 0', 'Ta det största nollstället'], avsnitt: 'Högsta punkten' },
      { t: 'En sten kastas från en klippa: h(t) = −5t² + 10t + 40. Vilken är starthöjden?', ratt: '40 meter', fel: ['10 meter', '0 meter', '45 meter'], avsnitt: 'Starthöjden' },
      { t: 'Samma sten: h(t) = −5t² + 10t + 40. När träffar den marken?', ratt: 'Efter 4 sekunder', fel: ['Efter 2 sekunder', 'Efter 40 sekunder', 'Efter 5 sekunder'], avsnitt: 'När något når marken' },
      { t: 'En uträkning ger t = 5 och t = −2 för när en boll landar. Vilket svar är rimligt?', ratt: 't = 5, eftersom tiden inte kan vara negativ', fel: ['t = −2, eftersom den är minst', 'Båda är rimliga', 'Ingen av dem'], avsnitt: 'Förkasta orimliga lösningar' },
      { t: 'Vad ska ett svar på ett problemlösningstal alltid innehålla?', ratt: 'Enhet — meter, sekunder eller kronor', fel: ['Bara siffran', 'Hela uträkningen som en enda rad', 'Både den rimliga och den orimliga lösningen'], avsnitt: 'Förkasta orimliga lösningar' },
    ],
  },
];

/**
 * OM MALL_ID lämnas tomt — gör detta per formulär efteråt:
 *   A. Inställningar → "Visa betyg" = "Omedelbart efter varje inlämning"
 *   B. Publicera → Respondenter = "Alla på AcadeMedia"
 */
