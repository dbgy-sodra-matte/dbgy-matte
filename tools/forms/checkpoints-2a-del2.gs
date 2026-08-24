/**
 * Checkpoints — Del 2: Ekvationssystem, potenser, statistik (14 st), Prövning Ma2a
 * ===============================================================================
 * Skapar fjorton checkpoint-quiz i en körning. 10 frågor per quiz,
 * feldistraktorer på klassiska misstag, träna mer-länk till rätt
 * Ma2a-delmomentsida vid fel svar.
 *
 * Alla namn i filen slutar på "2aDel2" / "_2A_DEL2" så att den kan klistras in
 * i SAMMA Apps Script-projekt som de andra checkpoint-filerna utan att krocka.
 *
 * MALL-TRICKET (läs detta först)
 * -----------------------------------
 * Apps Script kan INTE sätta betygssläppet eller respondentgruppen. Men en
 * KOPIA av ett formulär ärver båda.
 *
 * Mallen är därför en kopia av en Ma1-checkpoint som redan är i drift, INTE
 * ett nyskapat formulär. Ett nytt formulär får Googles nya delningsmodell, och
 * där erbjuds inte "Alla på AcadeMedia" — bara en personalgrupp (som eleverna
 * inte ingår i) eller "Alla med länken". Äldre publicerade formulär har kvar
 * den gamla modellen med rätt val.
 *
 * MALL_ID_2A_DEL2 nedan pekar på den kopian. Generatorn tömmer den på frågor och
 * lägger in checkpointens egna, så kopian behöver inte städas för hand.
 *
 * KONTROLLERA FÖRSTA FORMULÄRET efter första körningen: står det
 * "Alla på AcadeMedia" under Respondenter, och släpps betyget omedelbart?
 * Gör det inte det har arvet inte fungerat — säg till innan du kör resten.
 *
 * KÖRS SÅ HÄR (en gång, av Simon, inloggad med dbgy.se-kontot):
 *   1. script.google.com → Nytt projekt → klistra in HELA filen → spara
 *   2. Kör funktionen "skapaDel2Checkpoints2a" (~2-3 min)
 *   3. Öppna Körlogg (Ctrl+Enter) → alla fjorton PUBLICERAD-URL:er listas
 *   4. Klistra in loggen i chatten med Claude → länkarna läggs in på sidorna
 *
 *   Loggen skriver ut kursen efter varje namn, t.ex.
 *   "Funktionsbegreppet f(x)  [Prövning Ma2a]". Fjorton namn förekommer
 *   i båda kurserna, och utan kursen går det inte att avgöra vilken sida
 *   URL:en hör till.
 *
 * Tröskel: minst 8/10 = klarad. Obegränsade försök (mastery).
 */

const MALL_ID_2A_DEL2 = '1e0tDs_lbJ2hjeF2POdITNlQASNKeq-3ZK2oeLfDT_RU';   // kopia av en Ma1-checkpoint i drift, se ovan
const BAS_URL_2A_DEL2 = 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/';
const KURSNAMN_2A_DEL2 = 'Prövning Ma2a';

function skapaDel2Checkpoints2a() {
  const resultat = [];
  for (const cp of CHECKPOINTS_2A_DEL2) {
    const url = skapaCheckpoint2aDel2(cp);
    resultat.push(cp.namn + '  [' + KURSNAMN_2A_DEL2 + ']' + '\n  PUBLICERAD: ' + url.publicerad + '\n  REDIGERA:   ' + url.redigera);
  }
  Logger.log('\n===== ALLA FJORTON (DEL 2) SKAPADE =====\n\n' + resultat.join('\n\n'));
}

function skapaCheckpoint2aDel2(cp) {
  const titel = 'Checkpoint — ' + cp.namn + ' (' + KURSNAMN_2A_DEL2 + ')';
  let form;
  if (MALL_ID_2A_DEL2) {
    const kopia = DriveApp.getFileById(MALL_ID_2A_DEL2).makeCopy(titel);
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

  // En KOPIA av mallen är opublicerad även om originalet är publicerat, så
  // formuläret måste publiceras uttryckligen. Vilket API som finns beror på
  // kontot: setPublished hör till Googles nya modell, setAcceptingResponses
  // till den gamla. Fungerar ingen av dem, kör publiceraAllaCheckpoints().
  try { form.setPublished(true); } catch (e) {}
  try { form.setAcceptingResponses(true); } catch (e) {}


  const sidaUrl = BAS_URL_2A_DEL2 + cp.slug;

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

const CHECKPOINTS_2A_DEL2 = [
  // ───────── EKVATIONSSYSTEM ─────────
  {
    namn: 'Funktionsbegreppet f(x)', slug: 'ekvationssystem/funktionsbegreppet-fx',
    fragor: [
      { t: 'Låt f(x) = 3x + 4. Bestäm f(6).', ratt: '22', fel: ['18', '13', '10'], avsnitt: 'Sätt in på x-platsen' },
      { t: 'Låt f(x) = 5x − 7. Bestäm f(3).', ratt: '8', fel: ['15', '22', '−2'], avsnitt: 'Sätt in på x-platsen' },
      { t: 'Låt f(x) = 20 − 4x. Bestäm f(0).', ratt: '20', fel: ['0', '16', '−4'], avsnitt: 'Sätt in på x-platsen' },
      { t: 'Låt f(x) = 2x + 9. Bestäm f(−3).', ratt: '3', fel: ['15', '−3', '6'], avsnitt: 'Negativa x-värden' },
      { t: 'Låt f(x) = 8x. Lös ekvationen f(x) = 56.', ratt: 'x = 7', fel: ['x = 448', 'x = 64', 'x = 48'], avsnitt: 'Lös f(x) = k' },
      { t: 'Låt f(x) = 3x + 4. Lös ekvationen f(x) = 25.', ratt: 'x = 7', fel: ['x = 79', 'x = 29', 'x = 21'], avsnitt: 'Lös f(x) = k' },
      { t: 'Vad betyder f(3) = 7?', ratt: 'När x är 3 blir funktionens värde 7', fel: ['När y är 3 blir x lika med 7', 'f multiplicerat med 3 är 7', 'Funktionen skär x-axeln i 3'], avsnitt: 'Vad f(3) = 7 betyder' },
      { t: 'För en funktion gäller f(5) = 12. Vilken punkt ligger på grafen?', ratt: '(5, 12)', fel: ['(12, 5)', '(5, 5)', '(12, 12)'], avsnitt: 'Vad f(3) = 7 betyder' },
      { t: 'Vad är skillnaden mellan f(x) och y?', ratt: 'Ingen — det är två sätt att skriva samma sak', fel: ['f(x) är alltid större än y', 'y används bara för räta linjer', 'f(x) betyder f gånger x'], avsnitt: 'f(x) och y är samma sak' },
      { t: 'Vad betyder f(x) = 4x egentligen?', ratt: 'Regeln: ta talet du får in och multiplicera det med 4', fel: ['f multiplicerat med x är lika med 4x', 'x är alltid 4', 'Funktionen har värdet 4'], avsnitt: 'f(x) och y är samma sak' },
    ],
  },
  {
    namn: 'Räta linjens ekvation', slug: 'ekvationssystem/rata-linjens-ekvation',
    fragor: [
      { t: 'Ange k och m för funktionen y = 4x − 9.', ratt: 'k = 4 och m = −9', fel: ['k = 4 och m = 9', 'k = −9 och m = 4', 'k = 4x och m = −9'], avsnitt: 'Läsa av k och m' },
      { t: 'Ange k och m för funktionen y = 11 − 3x.', ratt: 'k = −3 och m = 11', fel: ['k = 11 och m = −3', 'k = 3 och m = 11', 'k = −3 och m = −11'], avsnitt: 'Läsa av k och m' },
      { t: 'Vad betyder k i y = kx + m?', ratt: 'Lutningen — hur mycket y ändras när x ökar med 1', fel: ['Var linjen skär y-axeln', 'Var linjen skär x-axeln', 'Linjens längd'], avsnitt: 'Läsa av k och m' },
      { t: 'Vad betyder m i y = kx + m?', ratt: 'Var linjen skär y-axeln', fel: ['Lutningen', 'Var linjen skär x-axeln', 'Antalet lösningar'], avsnitt: 'Läsa av k och m' },
      { t: 'En linje skär y-axeln i 5 och har lutningen −2. Skriv linjens ekvation.', ratt: 'y = −2x + 5', fel: ['y = 5x − 2', 'y = 2x + 5', 'y = −2x − 5'], avsnitt: 'Skriva ekvationen' },
      { t: 'Ligger punkten (4, 11) på linjen y = 3x − 1?', ratt: 'Ja', fel: ['Nej', 'Bara om x är positivt', 'Det går inte att avgöra'], avsnitt: 'Ligger punkten på linjen?' },
      { t: 'Ligger punkten (2, 9) på linjen y = 4x − 3?', ratt: 'Nej — insatt ger det 5, inte 9', fel: ['Ja', 'Ja, om man byter plats på 2 och 9', 'Det går inte att avgöra'], avsnitt: 'Ligger punkten på linjen?' },
      { t: 'Hur avgör du om en punkt ligger på en linje?', ratt: 'Sätt in punktens x-värde i ekvationen och se om du får punktens y-värde', fel: ['Rita linjen och gissa', 'Kolla om båda talen är positiva', 'Räkna ut k ur punkten'], avsnitt: 'Ligger punkten på linjen?' },
      { t: 'En biluthyrning tar 400 kr i startavgift och 30 kr per mil. Skriv en formel för kostnaden y efter x mil.', ratt: 'y = 30x + 400', fel: ['y = 400x + 30', 'y = 430x', 'y = 30x − 400'], avsnitt: 'Linjär modell ur en text' },
      { t: 'I en linjär modell y = kx + m — vad blir den fasta avgiften?', ratt: 'm, eftersom den finns kvar även när x = 0', fel: ['k, eftersom den står först', 'k + m', 'x, eftersom den varierar'], avsnitt: 'Linjär modell ur en text' },
    ],
  },
  {
    namn: 'Räta linjens ekvation algebraiskt', slug: 'ekvationssystem/rata-linjens-ekvation-algebraiskt',
    fragor: [
      { t: 'En rät linje går genom punkterna (2, 5) och (6, 13). Bestäm k.', ratt: '2', fel: ['4', '8', '0,5'], avsnitt: 'Räkna ut k ur två punkter' },
      { t: 'En rät linje går genom punkterna (1, 10) och (4, 1). Bestäm k.', ratt: '−3', fel: ['3', '−9', '−1/3'], avsnitt: 'Räkna ut k ur två punkter' },
      { t: 'Hur räknar du ut k ur två punkter?', ratt: 'Förändringen i y delat med förändringen i x', fel: ['Förändringen i x delat med förändringen i y', 'Summan av y-värdena delat med två', 'Skillnaden mellan punkterna'], avsnitt: 'Räkna ut k ur två punkter' },
      { t: 'En rät linje har k = 4 och går genom punkten (3, 14). Bestäm m.', ratt: '2', fel: ['12', '−2', '14'], avsnitt: 'Bestäm m' },
      { t: 'En rät linje har k = −2 och går genom punkten (5, 1). Bestäm m.', ratt: '11', fel: ['−9', '9', '−11'], avsnitt: 'Bestäm m' },
      { t: 'En rät linje går genom punkterna (0, 7) och (2, 3). Skriv linjens ekvation.', ratt: 'y = −2x + 7', fel: ['y = 2x + 7', 'y = −2x − 7', 'y = −4x + 7'], avsnitt: 'Hela ekvationen ur två punkter' },
      { t: 'En linje är parallell med y = 5x + 2 och går genom (0, −3). Skriv linjens ekvation.', ratt: 'y = 5x − 3', fel: ['y = 5x + 3', 'y = −5x − 3', 'y = 2x − 3'], avsnitt: 'Parallella linjer' },
      { t: 'Vad gäller för två parallella linjer?', ratt: 'De har samma k men olika m', fel: ['De har samma m men olika k', 'De har samma k och samma m', 'De skär varandra i en punkt'], avsnitt: 'Parallella linjer' },
      { t: 'Lös ut y ur sambandet 3y = 12x − 18.', ratt: 'y = 4x − 6', fel: ['y = 12x − 18', 'y = 4x − 18', 'y = 36x − 54'], avsnitt: 'Skriv om till y = kx + m' },
      { t: 'Skriv om 2y + 8x = 10 på formen y = kx + m.', ratt: 'y = −4x + 5', fel: ['y = 4x + 5', 'y = −8x + 10', 'y = −4x − 5'], avsnitt: 'Skriv om till y = kx + m' },
    ],
  },
  {
    namn: 'Grafisk lösning av ekvationssystem', slug: 'ekvationssystem/grafisk-losning-av-ekvationssystem',
    fragor: [
      { t: 'Vad är den grafiska lösningen till ett ekvationssystem?', ratt: 'Linjernas skärningspunkt', fel: ['Där linjerna skär y-axeln', 'Där linjerna skär x-axeln', 'Avståndet mellan linjerna'], avsnitt: 'Skärningspunkten är lösningen' },
      { t: 'Två linjer skär varandra i punkten (3, 8). Vad är lösningen till ekvationssystemet?', ratt: 'x = 3 och y = 8', fel: ['x = 8 och y = 3', 'x = 3 och y = 3', 'x = 11'], avsnitt: 'Skriva lösningen' },
      { t: 'Hur många lösningar har ett ekvationssystem där linjerna är parallella och olika?', ratt: 'Ingen', fel: ['En', 'Två', 'Oändligt många'], avsnitt: 'Antal lösningar' },
      { t: 'Hur många lösningar har ett ekvationssystem där de två linjerna är exakt samma linje?', ratt: 'Oändligt många', fel: ['Ingen', 'En', 'Två'], avsnitt: 'Antal lösningar' },
      { t: 'Hur många lösningar har ett system där linjerna har olika k?', ratt: 'Exakt en — de måste skära varandra', fel: ['Ingen', 'Två', 'Oändligt många'], avsnitt: 'Antal lösningar' },
      { t: 'Är x = 5 och y = 8 en lösning till systemet y = x + 3 och y = 2x − 2?', ratt: 'Ja — båda ekvationerna stämmer', fel: ['Nej', 'Bara den första stämmer', 'Bara den andra stämmer'], avsnitt: 'Kontrollera en lösning' },
      { t: 'Är x = 2 och y = 7 en lösning till systemet y = 3x + 1 och y = x + 6?', ratt: 'Nej — bara den första stämmer', fel: ['Ja', 'Nej — ingen av dem stämmer', 'Nej — bara den andra stämmer'], avsnitt: 'Kontrollera en lösning' },
      { t: 'Vad måste gälla för att ett talpar ska vara lösning till ett ekvationssystem?', ratt: 'Det måste stämma i BÅDA ekvationerna', fel: ['Det räcker att det stämmer i en av dem', 'Båda talen måste vara positiva', 'x måste vara mindre än y'], avsnitt: 'Kontrollera en lösning' },
      { t: 'I en kostnads- och intäktsgraf — vad betyder skärningspunkten?', ratt: 'Break-even: intäkterna täcker precis kostnaderna', fel: ['Största möjliga vinst', 'Att företaget går i konkurs', 'Att försäljningen är noll'], avsnitt: 'Kostnad och intäkt' },
      { t: 'Varför är grafisk lösning ofta osäker?', ratt: 'Man läser av på ögonmått, och lösningar som inte är hela tal blir ungefärliga', fel: ['Grafer får bara ritas för hand', 'Metoden fungerar bara för positiva tal', 'Linjer kan inte skära varandra'], avsnitt: 'Skärningspunkten är lösningen' },
    ],
  },
  {
    namn: 'Substitutionsmetoden', slug: 'ekvationssystem/substitutionsmetoden',
    fragor: [
      { t: 'Lös ekvationssystemet: y = 3x − 5 och y = x + 7. Vad är x?', ratt: 'x = 6', fel: ['x = 3', 'x = 12', 'x = 1'], avsnitt: 'När båda är lösta för y' },
      { t: 'Lös ekvationssystemet: y = 3x − 5 och y = x + 7. Vad är y?', ratt: 'y = 13', fel: ['y = 6', 'y = 4', 'y = 18'], avsnitt: 'Räkna ut den andra variabeln' },
      { t: 'Lös ekvationssystemet: y = 4x och y = x + 12. Ange både x och y.', ratt: 'x = 4 och y = 16', fel: ['x = 16 och y = 4', 'x = 3 och y = 12', 'x = 12 och y = 48'], avsnitt: 'När båda är lösta för y' },
      { t: 'Lös ekvationssystemet: y = 2x + 3 och 4x + y = 21. Ange både x och y.', ratt: 'x = 3 och y = 9', fel: ['x = 9 och y = 3', 'x = 4 och y = 11', 'x = 2 och y = 7'], avsnitt: 'Sätt in i den andra ekvationen' },
      { t: 'Lös ekvationssystemet: x = y + 5 och 2x + y = 22. Ange både x och y.', ratt: 'x = 9 och y = 4', fel: ['x = 4 och y = 9', 'x = 11 och y = 6', 'x = 5 och y = 0'], avsnitt: 'Sätt in i den andra ekvationen' },
      { t: 'Vad är själva idén i substitutionsmetoden?', ratt: 'Byt ut en variabel mot ett uttryck så att bara en variabel blir kvar', fel: ['Addera de två ekvationerna', 'Rita båda linjerna', 'Dela ekvationerna med varandra'], avsnitt: 'Sätt in i den andra ekvationen' },
      { t: 'I systemet 3x + y = 17 och x − 2y = 1 — vilken variabel är enklast att lösa ut?', ratt: 'y ur den första, eftersom den står ensam där', fel: ['x ur den andra, eftersom den står först', 'y ur den andra', 'Ingen — systemet går inte att lösa'], avsnitt: 'Lös ut en variabel själv' },
      { t: 'Du har fått x = 4. Vad gör du sedan?', ratt: 'Sätter in 4 i någon av ekvationerna och räknar ut y', fel: ['Är klar — svaret är x = 4', 'Sätter in 4 i stället för y', 'Börjar om med additionsmetoden'], avsnitt: 'Räkna ut den andra variabeln' },
      { t: 'Lös ekvationssystemet: y = x − 4 och y = 16 − 3x. Ange både x och y.', ratt: 'x = 5 och y = 1', fel: ['x = 1 och y = 5', 'x = 4 och y = 0', 'x = 6 och y = 2'], avsnitt: 'När båda är lösta för y' },
      { t: 'Hur kontrollerar du att din lösning stämmer?', ratt: 'Sätter in både x och y i BÅDA ekvationerna', fel: ['Sätter in i den ekvation du använde sist', 'Räknar om med additionsmetoden', 'Kollar att båda talen är positiva'], avsnitt: 'Räkna ut den andra variabeln' },
    ],
  },
  {
    namn: 'Additionsmetoden', slug: 'ekvationssystem/additionsmetoden',
    fragor: [
      { t: 'Lös ekvationssystemet: x + y = 15 och x − y = 3. Ange både x och y.', ratt: 'x = 9 och y = 6', fel: ['x = 6 och y = 9', 'x = 12 och y = 3', 'x = 18 och y = 12'], avsnitt: 'Addera så en variabel försvinner' },
      { t: 'Lös ekvationssystemet: 2x + y = 19 och 3x − y = 16. Ange både x och y.', ratt: 'x = 7 och y = 5', fel: ['x = 5 och y = 7', 'x = 3 och y = 13', 'x = 35 och y = 5'], avsnitt: 'Addera så en variabel försvinner' },
      { t: 'Varför fungerar additionsmetoden på 2x + y = 19 och 3x − y = 16 direkt?', ratt: 'Termerna +y och −y tar ut varandra när ekvationerna adderas', fel: ['För att båda har ett x', 'För att högerleden är olika', 'För att båda talen är udda'], avsnitt: 'När metoden fungerar direkt' },
      { t: 'Lös ekvationssystemet: 4x + 3y = 27 och x − 3y = 3. Ange både x och y.', ratt: 'x = 6 och y = 1', fel: ['x = 1 och y = 6', 'x = 5 och y = 2', 'x = 3 och y = 5'], avsnitt: 'Addera så en variabel försvinner' },
      { t: 'I systemet 3x + 2y = 20 och x + y = 8 — vad gör du med den andra ekvationen för att kunna addera bort y?', ratt: 'Multiplicerar den med −2', fel: ['Multiplicerar den med 2', 'Multiplicerar den med 3', 'Dividerar den med 2'], avsnitt: 'Multiplicera en hel ekvation' },
      { t: 'När du multiplicerar en ekvation med ett tal — vad måste du multiplicera?', ratt: 'Alla termer i båda leden', fel: ['Bara vänsterledet', 'Bara termen med y', 'Bara högerledet'], avsnitt: 'Multiplicera en hel ekvation' },
      { t: 'Lös ekvationssystemet: 2x + 3y = 21 och x − y = 3. Ange både x och y.', ratt: 'x = 6 och y = 3', fel: ['x = 3 och y = 6', 'x = 9 och y = 6', 'x = 5 och y = 2'], avsnitt: 'Multiplicera en hel ekvation' },
      { t: 'Vad ska du göra om båda ekvationerna har +y?', ratt: 'Subtrahera ekvationerna, eller multiplicera en av dem med −1 först', fel: ['Addera dem ändå', 'Byta metod till grafisk lösning', 'Dela ekvationerna med varandra'], avsnitt: 'När metoden fungerar direkt' },
      { t: 'Lös ekvationssystemet: 5x − 2y = 16 och 3x + 2y = 16. Ange både x och y.', ratt: 'x = 4 och y = 2', fel: ['x = 2 och y = 4', 'x = 4 och y = −2', 'x = 8 och y = 12'], avsnitt: 'Addera så en variabel försvinner' },
      { t: 'Du har fått y = 5 med additionsmetoden. Hur får du x?', ratt: 'Sätter in y = 5 i någon av de ursprungliga ekvationerna', fel: ['Adderar ekvationerna en gång till', 'Sätter x = 5 också', 'Multiplicerar 5 med koefficienten framför x'], avsnitt: 'Räkna ut den andra variabeln' },
    ],
  },
  {
    namn: 'Problemlösning med ekvationssystem', slug: 'ekvationssystem/problemlosning-ekvationssystem',
    fragor: [
      { t: 'Vad är första steget när du löser ett problem med ekvationssystem?', ratt: 'Bestämma vad x och y ska betyda, med enhet', fel: ['Rita en graf', 'Gissa ett svar och kontrollera', 'Välja metod'], avsnitt: 'Bestäm vad x och y betyder' },
      { t: 'Två kaffe och tre bullar kostar 155 kr. Vilken ekvation beskriver det, om x är priset på ett kaffe och y priset på en bulle?', ratt: '2x + 3y = 155', fel: ['3x + 2y = 155', 'x + y = 155', '2x · 3y = 155'], avsnitt: 'Översätt till ekvationer' },
      { t: 'Ett kaffe och fyra bullar kostar 135 kr. Två kaffe och tre bullar kostar 155 kr. Vad kostar en bulle?', ratt: '25 kr', fel: ['35 kr', '40 kr', '20 kr'], avsnitt: 'Lös systemet' },
      { t: 'Samma system: ett kaffe och fyra bullar kostar 135 kr, två kaffe och tre bullar 155 kr. Vad kostar ett kaffe?', ratt: '35 kr', fel: ['25 kr', '45 kr', '30 kr'], avsnitt: 'Lös systemet' },
      { t: 'Summan av två tal är 40 och differensen mellan dem är 12. Vilka är talen?', ratt: '26 och 14', fel: ['28 och 12', '20 och 20', '30 och 10'], avsnitt: 'Summa och differens' },
      { t: 'Summan av två tal är 50 och differensen är 6. Vilket är det största talet?', ratt: '28', fel: ['22', '25', '44'], avsnitt: 'Summa och differens' },
      { t: 'Hur många ekvationer behöver du för att lösa ut två okända?', ratt: 'Två', fel: ['En', 'Tre', 'Det beror på talen'], avsnitt: 'Översätt till ekvationer' },
      { t: 'Vad ska svaret på ett problemlösningstal innehålla?', ratt: 'Ett svar i ord, med enhet', fel: ['Bara x- och y-värdena', 'Hela uträkningen utan svarsmening', 'Bara det största av talen'], avsnitt: 'Svara i ord med enhet' },
      { t: 'Två biljetter för vuxna och tre för barn kostar 640 kr. En vuxenbiljett och en barnbiljett kostar 260 kr. Vad kostar en barnbiljett?', ratt: '120 kr', fel: ['140 kr', '160 kr', '100 kr'], avsnitt: 'Lös systemet' },
      { t: 'Hur kontrollerar du ditt svar på ett problemlösningstal?', ratt: 'Sätter in svaret i den ursprungliga TEXTEN och ser att det stämmer', fel: ['Räknar om med samma metod', 'Kollar att talen är hela', 'Jämför med facit i boken'], avsnitt: 'Svara i ord med enhet' },
    ],
  },
  // ───────── POTENSER ─────────
  {
    namn: 'Potenslagar', slug: 'potenser/potenslagar',
    fragor: [
      { t: 'Skriv som en potens: 3⁶ · 3⁴', ratt: '3¹⁰', fel: ['3²⁴', '9¹⁰', '3²'], avsnitt: 'Multiplikation — addera exponenterna' },
      { t: 'Skriv som en potens: 8⁹ / 8⁵', ratt: '8⁴', fel: ['8¹⁴', '8⁴⁵', '1⁴'], avsnitt: 'Division — subtrahera exponenterna' },
      { t: 'Skriv som en potens: (6²)⁵', ratt: '6¹⁰', fel: ['6⁷', '6³²', '36¹⁰'], avsnitt: 'Potens av en potens' },
      { t: 'Förenkla och skriv som en potens: (5⁴ · 5³) / 5²', ratt: '5⁵', fel: ['5⁹', '5⁶', '5¹⁴'], avsnitt: 'Flera lagar i samma uttryck' },
      { t: 'Vad är 12⁰?', ratt: '1', fel: ['0', '12', 'Odefinierat'], avsnitt: 'Exponenten 0' },
      { t: 'Skriv 4⁻² utan negativ exponent.', ratt: '1/16', fel: ['−16', '−8', '1/8'], avsnitt: 'Negativa exponenter' },
      { t: 'Vad betyder en negativ exponent?', ratt: 'Att potensen hamnar i nämnaren', fel: ['Att talet blir negativt', 'Att man ska subtrahera', 'Att svaret är noll'], avsnitt: 'Negativa exponenter' },
      { t: 'Går 2³ · 5⁴ att skriva som en enda potens?', ratt: 'Nej — baserna är olika', fel: ['Ja, 10⁷', 'Ja, 10¹²', 'Ja, 7⁷'], avsnitt: 'Lagarna kräver samma bas' },
      { t: 'Skriv som en potens: 9⁷ · 9', ratt: '9⁸', fel: ['9⁷', '81⁷', '9⁷·¹'], avsnitt: 'Multiplikation — addera exponenterna' },
      { t: 'En elev skriver 2³ · 2⁴ = 4⁷. Vad är felet?', ratt: 'Basen ska stå kvar oförändrad — bara exponenterna adderas', fel: ['Exponenterna ska multipliceras', 'Basen ska adderas till exponenten', 'Ingenting — svaret är rätt'], avsnitt: 'Multiplikation — addera exponenterna' },
    ],
  },
  {
    namn: 'Potensekvationer', slug: 'potenser/potensekvationer',
    fragor: [
      { t: 'Lös ekvationen: x³ = 216', ratt: 'x = 6', fel: ['x = ±6', 'x = 72', 'x = 8'], avsnitt: 'Dra roten' },
      { t: 'Lös ekvationen: x⁴ = 625', ratt: 'x = ±5', fel: ['x = 5', 'x = 156,25', 'x = ±25'], avsnitt: 'Jämn eller udda exponent' },
      { t: 'Lös ekvationen: x⁵ = 243', ratt: 'x = 3', fel: ['x = ±3', 'x = 48,6', 'x = 5'], avsnitt: 'Dra roten' },
      { t: 'Var står x i en potensekvation?', ratt: 'I basen', fel: ['I exponenten', 'I högerledet', 'Under rottecknet'], avsnitt: 'Var står x?' },
      { t: 'Hur många lösningar har x⁶ = 64?', ratt: 'Två', fel: ['En', 'Sex', 'Ingen'], avsnitt: 'Jämn eller udda exponent' },
      { t: 'Varför ger en jämn exponent två lösningar?', ratt: 'En jämn exponent döljer tecknet — både talet och dess negativa motsvarighet fungerar', fel: ['För att jämna tal alltid är delbara med två', 'För att man måste dra roten två gånger', 'För att svaret alltid är ett bråk'], avsnitt: 'Jämn eller udda exponent' },
      { t: 'Lös ekvationen: 4x³ = 108', ratt: 'x = 3', fel: ['x = 27', 'x = ±3', 'x = 12'], avsnitt: 'Gör potensen ensam först' },
      { t: 'Lös ekvationen: 2x² + 7 = 79', ratt: 'x = ±6', fel: ['x = 6', 'x = ±36', 'x = ±43'], avsnitt: 'Gör potensen ensam först' },
      { t: 'Lös ekvationen: √x = 9', ratt: 'x = 81', fel: ['x = 3', 'x = 18', 'x = 4,5'], avsnitt: 'Rottecknet är också en potens' },
      { t: 'Vad skiljer x⁴ = 16 från 2ˣ = 16?', ratt: 'I den första står x i basen, i den andra i exponenten — olika metoder', fel: ['Ingenting, de har samma svar', 'Den andra saknar lösning', 'Den första har bara en lösning'], avsnitt: 'Var står x?' },
    ],
  },
  {
    namn: 'Exponentialfunktioner', slug: 'potenser/exponentialfunktioner',
    fragor: [
      { t: 'En bostad är värd 800 000 kr och ökar 5 % per år. Skriv en funktion för värdet efter t år.', ratt: 'V = 800 000 · 1,05^t', fel: ['V = 800 000 · 0,05^t', 'V = 800 000 · 5^t', 'V = 800 000 + 1,05t'], avsnitt: 'Ställa upp ur en text' },
      { t: 'En maskin är värd 240 000 kr och tappar 10 % per år. Skriv en funktion för värdet efter t år.', ratt: 'V = 240 000 · 0,90^t', fel: ['V = 240 000 · 1,10^t', 'V = 240 000 · 0,10^t', 'V = 240 000 − 0,10t'], avsnitt: 'Ställa upp ur en text' },
      { t: 'Vilken förändringsfaktor hör till en ökning på 8 % per period?', ratt: '1,08', fel: ['0,08', '8', '0,92'], avsnitt: 'Förändringsfaktorn ur procent' },
      { t: 'Vilken förändringsfaktor hör till en minskning på 20 % per period?', ratt: '0,80', fel: ['1,20', '0,20', '−0,20'], avsnitt: 'Förändringsfaktorn ur procent' },
      { t: 'I funktionen y = 950 · 1,25^x, vad är startvärdet?', ratt: '950', fel: ['1,25', '1187,5', '0'], avsnitt: 'Startvärdet är gratis' },
      { t: 'Varför är startvärdet talet före potensen?', ratt: 'Vid x = 0 blir potensen 1, och kvar står bara C', fel: ['För att det står först', 'För att a alltid är 1', 'För att x = 1 vid start'], avsnitt: 'Startvärdet är gratis' },
      { t: 'Växer eller avtar funktionen y = 480 · 0,78^x?', ratt: 'Avtar', fel: ['Växer', 'Varken eller — den är konstant', 'Det beror på x'], avsnitt: 'Växer eller avtar' },
      { t: 'Hur ser du direkt om en exponentialfunktion växer?', ratt: 'Förändringsfaktorn a är större än 1', fel: ['Startvärdet C är stort', 'Exponenten är positiv', 'a är mindre än 1'], avsnitt: 'Växer eller avtar' },
      { t: 'Vad skiljer en exponentialfunktion från en linjär funktion?', ratt: 'Den exponentiella multipliceras med samma faktor varje steg, den linjära adderas med samma tal', fel: ['Den exponentiella växer alltid snabbare från början', 'Den linjära har inget startvärde', 'Den exponentiella kan inte avta'], avsnitt: 'Mallen y = C · a^x' },
      { t: 'Ett belopp växer 5 % per år i 3 år. Med vilken faktor har det växt totalt?', ratt: '1,05³, alltså ungefär 1,158', fel: ['15 %, alltså faktorn 1,15', '3 · 1,05 = 3,15', '1,05 · 3 = 3,15'], avsnitt: 'Procent per period staplas inte' },
    ],
  },
  {
    namn: 'Exponentialekvationer', slug: 'potenser/exponentialekvationer',
    fragor: [
      { t: 'Var står x i en exponentialekvation?', ratt: 'I exponenten', fel: ['I basen', 'Under rottecknet', 'I högerledet'], avsnitt: 'Var står x?' },
      { t: 'Lös ekvationen: 2ˣ = 64', ratt: 'x = 6', fel: ['x = 32', 'x = 8', 'x = 5'], avsnitt: 'Pröva dig fram systematiskt' },
      { t: 'Lös ekvationen: 3ˣ = 81', ratt: 'x = 4', fel: ['x = 27', 'x = 3', 'x = 9'], avsnitt: 'Pröva dig fram systematiskt' },
      { t: 'Lös ekvationen: 400 · 2ˣ = 3200', ratt: 'x = 3', fel: ['x = 8', 'x = 4', 'x = 2800'], avsnitt: 'Gör potensen ensam först' },
      { t: 'Lös ekvationen: 600 · 3ˣ = 5400', ratt: 'x = 2', fel: ['x = 9', 'x = 3', 'x = 4800'], avsnitt: 'Gör potensen ensam först' },
      { t: 'Vad är första steget i 250 · 4ˣ = 4000?', ratt: 'Dela båda leden med 250', fel: ['Dra fjärde roten', 'Dra bort 250', 'Multiplicera med 4'], avsnitt: 'Gör potensen ensam först' },
      { t: 'En bakteriekultur har 4 000 bakterier och antalet fördubblas varje timme. Efter hur många timmar finns 32 000?', ratt: '3 timmar', fel: ['8 timmar', '4 timmar', '28 timmar'], avsnitt: 'Hur lång tid tar det?' },
      { t: 'En dator är värd 16 000 kr och tappar halva värdet varje år. Efter hur många år är den värd 2 000 kr?', ratt: '3 år', fel: ['8 år', '4 år', '14 år'], avsnitt: 'Hur lång tid tar det?' },
      { t: 'Vad är svaret på x⁵ = 32?', ratt: 'x = 2', fel: ['x = 5', 'x = 6,4', 'x = ±2'], avsnitt: 'Var står x?' },
      { t: 'Vad är svaret på 2ˣ = 32?', ratt: 'x = 5', fel: ['x = 2', 'x = 16', 'x = 30'], avsnitt: 'Var står x?' },
    ],
  },
  // ───────── STATISTIK ─────────
  {
    namn: 'Lägesmått', slug: 'statistik/lagesmatt',
    fragor: [
      { t: 'Bestäm medelvärdet av 10, 14, 19 och 21.', ratt: '16', fel: ['64', '16,5', '14'], avsnitt: 'Medelvärde' },
      { t: 'Bestäm medianen av 5, 8, 12, 17 och 25.', ratt: '12', fel: ['13,4', '8', '17'], avsnitt: 'Median' },
      { t: 'Bestäm medianen av 6, 10, 14 och 20.', ratt: '12', fel: ['10', '14', '12,5'], avsnitt: 'Median vid jämnt antal' },
      { t: 'Hur hittar du medianen när antalet värden är jämnt?', ratt: 'Ta medelvärdet av de två mittersta värdena', fel: ['Ta det största av de två mittersta', 'Ta det minsta av de två mittersta', 'Medianen finns inte då'], avsnitt: 'Median vid jämnt antal' },
      { t: 'Bestäm typvärdet av 4, 9, 9, 9, 13 och 15.', ratt: '9', fel: ['9,8', '11', '3'], avsnitt: 'Typvärde' },
      { t: 'Vad är typvärdet?', ratt: 'Det värde som förekommer flest gånger', fel: ['Det mittersta värdet', 'Genomsnittet', 'Skillnaden mellan största och minsta'], avsnitt: 'Typvärde' },
      { t: 'Vad måste du göra INNAN du bestämmer medianen?', ratt: 'Sortera värdena i storleksordning', fel: ['Räkna ut medelvärdet', 'Ta bort det största värdet', 'Ingenting'], avsnitt: 'Median' },
      { t: 'Varför kan medelvärdet vara missvisande i en löneundersökning?', ratt: 'Ett fåtal mycket höga löner drar upp medelvärdet, medan medianen står emot', fel: ['Medelvärdet är alltid för lågt', 'Medelvärdet kan inte räknas på pengar', 'Man får bara använda typvärdet på löner'], avsnitt: 'Vilket mått passar?' },
      { t: 'En tabell visar antal husdjur: 0 hos 3 familjer, 1 hos 6 familjer, 2 hos 11 familjer. Vad är medelvärdet?', ratt: '1,4', fel: ['1', '3', '6,7'], avsnitt: 'Medelvärde ur frekvenstabell' },
      { t: 'Vad är klassmitten i klassen 20 ≤ x < 30?', ratt: '25', fel: ['20', '30', '10'], avsnitt: 'Klassindelad data' },
    ],
  },
  {
    namn: 'Spridningsmått och lådagram', slug: 'statistik/spridningsmatt-och-ladagram',
    fragor: [
      { t: 'Bestäm variationsbredden för 7, 13, 19 och 31.', ratt: '24', fel: ['17,5', '38', '12'], avsnitt: 'Variationsbredd' },
      { t: 'Vad är variationsbredden?', ratt: 'Största värdet minus minsta värdet', fel: ['Övre kvartil minus nedre kvartil', 'Medelvärdet minus medianen', 'Antalet värden'], avsnitt: 'Variationsbredd' },
      { t: 'Ett lådagram har nedre kvartil 22 och övre kvartil 39. Bestäm kvartilavståndet.', ratt: '17', fel: ['61', '30,5', '39'], avsnitt: 'Kvartilavstånd' },
      { t: 'Vad beskriver kvartilavståndet?', ratt: 'Spridningen bland de mittersta 50 procenten av värdena', fel: ['Spridningen bland alla värden', 'Avståndet mellan medelvärde och median', 'Antalet observationer i lådan'], avsnitt: 'Kvartilavstånd' },
      { t: 'Hur många procent av observationerna ligger mellan nedre kvartilen och medianen?', ratt: '25 %', fel: ['50 %', '75 %', '12,5 %'], avsnitt: 'Andelarna i lådagrammet' },
      { t: 'Hur många procent av observationerna är mindre än medianen?', ratt: '50 %', fel: ['25 %', '75 %', '100 %'], avsnitt: 'Andelarna i lådagrammet' },
      { t: 'Hur många procent ligger i själva lådan i ett lådagram?', ratt: '50 %', fel: ['25 %', '75 %', '100 %'], avsnitt: 'Andelarna i lådagrammet' },
      { t: 'Ett lådagram visar minsta värdet 8, nedre kvartil 15, median 21, övre kvartil 30 och största värdet 44. Vad är variationsbredden?', ratt: '36', fel: ['15', '23', '52'], avsnitt: 'Läsa av ett lådagram' },
      { t: 'Samma lådagram: minsta 8, Q1 15, median 21, Q3 30, största 44. Vad är kvartilavståndet?', ratt: '15', fel: ['36', '45', '9'], avsnitt: 'Läsa av ett lådagram' },
      { t: 'Ali har kvartilavståndet 7 och Bea har kvartilavståndet 18. Vem har störst spridning i mitten?', ratt: 'Bea', fel: ['Ali', 'Lika stor', 'Det går inte att avgöra'], avsnitt: 'Jämföra två lådagram' },
    ],
  },
  {
    namn: 'Normalfördelning', slug: 'statistik/normalfordelning',
    fragor: [
      { t: 'Hur många procent av värdena ligger inom en standardavvikelse från medelvärdet?', ratt: '68 %', fel: ['95 %', '99,7 %', '50 %'], avsnitt: '68-95-99,7-regeln' },
      { t: 'Hur många procent ligger inom två standardavvikelser från medelvärdet?', ratt: '95 %', fel: ['68 %', '99,7 %', '90 %'], avsnitt: '68-95-99,7-regeln' },
      { t: 'Medelvärdet är 80 och standardavvikelsen 5. Hur många standardavvikelser från medelvärdet ligger värdet 90?', ratt: '2', fel: ['10', '1', '18'], avsnitt: 'Räkna i standardavvikelser' },
      { t: 'Medelvärdet är 150 och standardavvikelsen 12. Vilket värde ligger 2 standardavvikelser över medelvärdet?', ratt: '174', fel: ['162', '186', '300'], avsnitt: 'Räkna i standardavvikelser' },
      { t: 'En normalfördelning har medelvärdet 100 och standardavvikelsen 8. Hur många procent av värdena är större än 116?', ratt: '2,3 %', fel: ['5 %', '16 %', '2,5 %'], avsnitt: 'Andel över eller under' },
      { t: 'En normalfördelning har medelvärdet 60 och standardavvikelsen 4. Hur många procent är större än 64?', ratt: '16 %', fel: ['32 %', '68 %', '2,3 %'], avsnitt: 'Andel över eller under' },
      { t: 'Varför är andelen över medelvärdet alltid 50 % i en normalfördelning?', ratt: 'Kurvan är symmetrisk kring medelvärdet', fel: ['För att medelvärdet alltid är 0', 'För att standardavvikelsen är 1', 'För att hälften av värdena är negativa'], avsnitt: 'Symmetrin' },
      { t: 'Hur räknar du om en andel till ett antal?', ratt: 'Multiplicerar andelen med hela antalet', fel: ['Delar antalet med andelen', 'Adderar andelen till antalet', 'Multiplicerar med standardavvikelsen'], avsnitt: 'Från andel till antal' },
      { t: '2,3 % av 3 000 produkter — hur många är det?', ratt: '69', fel: ['23', '690', '130'], avsnitt: 'Från andel till antal' },
      { t: '16 % av 2 500 elever — hur många är det?', ratt: '400', fel: ['160', '40', '1 600'], avsnitt: 'Från andel till antal' },
    ],
  },
];

/**
 * OM MALL_ID lämnas tomt skapas formulären från grunden, och då måste båda
 * inställningarna sättas för hand på varje formulär. Det är ~100 klick och
 * hela anledningen till att mall-tricket finns.
 */
