/**
 * Checkpoints — Del 1: Ekvationssystem + andragradare (15 st), Prövning Ma2b
 * =========================================================================
 * Skapar femton checkpoint-quiz i en körning. 10 frågor per quiz,
 * feldistraktorer på klassiska misstag, träna mer-länk till rätt
 * Ma2b-delmomentsida vid fel svar.
 *
 * Alla namn i filen slutar på "2bDel1" / "_2B_DEL1" så att den kan klistras in
 * i SAMMA Apps Script-projekt som de andra checkpoint-filerna utan att krocka.
 *
 * Talen är medvetet andra än i Ma2a-checkpointsen på samma delmoment — samma
 * nivå, nya siffror, så att ingen kan öva på det ena quizet för att klara det andra.
 *
 * MALL-TRICKET (läs detta först — sparar ~150 klick)
 * --------------------------------------------------
 * Apps Script kan INTE sätta "Visa betyg omedelbart" eller
 * "Respondenter: alla på AcadeMedia". Men en KOPIA av ett formulär
 * ärver inställningarna. Så:
 *   1. Skapa ETT tomt formulär för hand, gör det till quiz, och sätt
 *      de två inställningarna på det. Döp det till "MALL — checkpoint".
 *   2. Kopiera formulärets id ur adressraden
 *      (.../forms/d/DET_HAR_AR_ID/edit) och klistra in i MALL_ID_2B_DEL1 nedan.
 *   3. Kör skriptet. Varje checkpoint blir en kopia av mallen med
 *      mallens frågor borttagna och sina egna insatta.
 *   4. KONTROLLERA FÖRSTA FORMULÄRET: stämmer båda inställningarna?
 *      Om ja — resten stämmer också. Om nej: töm MALL_ID_2B_DEL1, kör om, och
 *      sätt inställningarna för hand enligt listan längst ned.
 *
 * KÖRS SÅ HÄR (en gång, av Simon, inloggad med dbgy.se-kontot):
 *   1. script.google.com → Nytt projekt → klistra in HELA filen → spara
 *   2. Kör funktionen "skapaDel1Checkpoints2b" (~2-3 min)
 *   3. Öppna Körlogg (Ctrl+Enter) → alla femton PUBLICERAD-URL:er listas
 *   4. Klistra in loggen i chatten med Claude → länkarna läggs in på sidorna
 *
 *   Loggen skriver ut kursen efter varje namn, t.ex.
 *   "Funktionsbegreppet f(x)  [Prövning Ma2a]". Fjorton namn förekommer
 *   i båda kurserna, och utan kursen går det inte att avgöra vilken sida
 *   URL:en hör till.
 *
 * Tröskel: minst 8/10 = klarad. Obegränsade försök (mastery).
 */

const MALL_ID_2B_DEL1 = '';   // <-- klistra in mall-formulärets id här (valfritt)
const BAS_URL_2B_DEL1 = 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/';
const KURSNAMN_2B_DEL1 = 'Prövning Ma2b';

function skapaDel1Checkpoints2b() {
  const resultat = [];
  for (const cp of CHECKPOINTS_2B_DEL1) {
    const url = skapaCheckpoint2bDel1(cp);
    resultat.push(cp.namn + '  [' + KURSNAMN_2B_DEL1 + ']' + '\n  PUBLICERAD: ' + url.publicerad + '\n  REDIGERA:   ' + url.redigera);
  }
  Logger.log('\n===== ALLA FEMTON (MA2B DEL 1) SKAPADE =====\n\n' + resultat.join('\n\n'));
}

function skapaCheckpoint2bDel1(cp) {
  const titel = 'Checkpoint — ' + cp.namn + ' (' + KURSNAMN_2B_DEL1 + ')';
  let form;
  if (MALL_ID_2B_DEL1) {
    const kopia = DriveApp.getFileById(MALL_ID_2B_DEL1).makeCopy(titel);
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

  const sidaUrl = BAS_URL_2B_DEL1 + cp.slug;

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

const CHECKPOINTS_2B_DEL1 = [
  // ───────── EKVATIONSSYSTEM ─────────
  {
    namn: 'Funktionsbegreppet f(x)', slug: 'ekvationssystem/funktionsbegreppet-fx',
    fragor: [
      { t: 'Låt f(x) = 6x − 5. Bestäm f(4).', ratt: '19', fel: ['24', '29', '−1'], avsnitt: 'Sätt in på x-platsen' },
      { t: 'Låt f(x) = 2x + 11. Bestäm f(7).', ratt: '25', fel: ['22', '20', '18'], avsnitt: 'Sätt in på x-platsen' },
      { t: 'Låt f(x) = 30 − 5x. Bestäm f(0).', ratt: '30', fel: ['0', '25', '−5'], avsnitt: 'Sätt in på x-platsen' },
      { t: 'Låt f(x) = 3x + 8. Bestäm f(−4).', ratt: '−4', fel: ['20', '−12', '4'], avsnitt: 'Negativa x-värden' },
      { t: 'Låt f(x) = 9x. Lös ekvationen f(x) = 72.', ratt: 'x = 8', fel: ['x = 648', 'x = 81', 'x = 63'], avsnitt: 'Lös f(x) = k' },
      { t: 'Låt f(x) = 5x − 2. Lös ekvationen f(x) = 33.', ratt: 'x = 7', fel: ['x = 163', 'x = 31', 'x = 35'], avsnitt: 'Lös f(x) = k' },
      { t: 'Vad betyder f(2) = 9?', ratt: 'När x är 2 blir funktionens värde 9', fel: ['När y är 2 blir x lika med 9', 'f multiplicerat med 2 är 9', 'Funktionen skär y-axeln i 2'], avsnitt: 'Vad f(2) = 9 betyder' },
      { t: 'För en funktion gäller f(8) = 3. Vilken punkt ligger på grafen?', ratt: '(8, 3)', fel: ['(3, 8)', '(8, 8)', '(3, 3)'], avsnitt: 'Vad f(2) = 9 betyder' },
      { t: 'Vad är skillnaden mellan f(x) och y?', ratt: 'Ingen — det är två sätt att skriva samma sak', fel: ['f(x) är alltid större än y', 'y används bara för räta linjer', 'f(x) betyder f gånger x'], avsnitt: 'f(x) och y är samma sak' },
      { t: 'Vilket värde ska du sätta in för att få reda på var grafen skär y-axeln?', ratt: 'x = 0', fel: ['y = 0', 'x = 1', 'Det största x-värdet'], avsnitt: 'Sätt in på x-platsen' },
    ],
  },
  {
    namn: 'Räta linjens ekvation', slug: 'ekvationssystem/rata-linjens-ekvation',
    fragor: [
      { t: 'Ange k och m för funktionen y = 7x + 3.', ratt: 'k = 7 och m = 3', fel: ['k = 3 och m = 7', 'k = 7x och m = 3', 'k = 10 och m = 3'], avsnitt: 'Läsa av k och m' },
      { t: 'Ange k och m för funktionen y = 14 − 6x.', ratt: 'k = −6 och m = 14', fel: ['k = 14 och m = −6', 'k = 6 och m = 14', 'k = −6 och m = −14'], avsnitt: 'Läsa av k och m' },
      { t: 'Vad betyder k i y = kx + m?', ratt: 'Lutningen — hur mycket y ändras när x ökar med 1', fel: ['Var linjen skär y-axeln', 'Var linjen skär x-axeln', 'Linjens längd'], avsnitt: 'Läsa av k och m' },
      { t: 'En linje skär y-axeln i −4 och har lutningen 3. Skriv linjens ekvation.', ratt: 'y = 3x − 4', fel: ['y = −4x + 3', 'y = 3x + 4', 'y = −3x − 4'], avsnitt: 'Skriva ekvationen' },
      { t: 'Ligger punkten (5, 17) på linjen y = 3x + 2?', ratt: 'Ja', fel: ['Nej', 'Bara om x är udda', 'Det går inte att avgöra'], avsnitt: 'Ligger punkten på linjen?' },
      { t: 'Ligger punkten (3, 10) på linjen y = 2x + 6?', ratt: 'Nej — insatt ger det 12, inte 10', fel: ['Ja', 'Ja, om man byter plats på talen', 'Det går inte att avgöra'], avsnitt: 'Ligger punkten på linjen?' },
      { t: 'En linje har k = 0. Hur ser den ut?', ratt: 'Vågrät — y ändras inte när x ändras', fel: ['Lodrät', 'Den lutar 45 grader', 'Den finns inte'], avsnitt: 'Läsa av k och m' },
      { t: 'En gymkedja tar 300 kr i månadsavgift och 25 kr per pass. Skriv en formel för kostnaden y vid x pass.', ratt: 'y = 25x + 300', fel: ['y = 300x + 25', 'y = 325x', 'y = 25x − 300'], avsnitt: 'Linjär modell ur en text' },
      { t: 'I modellen y = 25x + 300 — vad betyder 25?', ratt: 'Kostnaden per pass', fel: ['Månadsavgiften', 'Antalet pass', 'Totalkostnaden'], avsnitt: 'Linjär modell ur en text' },
      { t: 'Vad händer med grafen om m ökar men k är oförändrad?', ratt: 'Linjen flyttas uppåt men har kvar samma lutning', fel: ['Linjen blir brantare', 'Linjen blir flackare', 'Linjen vänder åt andra hållet'], avsnitt: 'Läsa av k och m' },
    ],
  },
  {
    namn: 'Vad är ett ekvationssystem?', slug: 'ekvationssystem/vad-ar-ett-ekvationssystem',
    fragor: [
      { t: 'Vad är lösningen till ett ekvationssystem?', ratt: 'Det talpar som stämmer i BÅDA ekvationerna samtidigt', fel: ['Det talpar som stämmer i minst en ekvation', 'Summan av de två ekvationerna', 'Där linjerna skär y-axeln'], avsnitt: 'Vad lösningen är' },
      { t: 'Två linjer skär varandra i punkten (4, 9). Vad är lösningen till systemet?', ratt: 'x = 4 och y = 9', fel: ['x = 9 och y = 4', 'x = 4 och y = 4', 'x = 13'], avsnitt: 'Läsa av ur grafen' },
      { t: 'Var i grafen hittar du lösningen till ett ekvationssystem?', ratt: 'I skärningspunkten mellan linjerna', fel: ['Där linjerna skär x-axeln', 'Där linjerna skär y-axeln', 'I den brantaste linjens topp'], avsnitt: 'Läsa av ur grafen' },
      { t: 'Stämmer x = 2 och y = 7 i systemet y = 2x + 3 och y = 11 − 2x?', ratt: 'Ja — båda ekvationerna stämmer', fel: ['Nej', 'Bara den första stämmer', 'Bara den andra stämmer'], avsnitt: 'Kontrollera i BÅDA' },
      { t: 'Stämmer x = 4 och y = 9 i systemet y = 3x − 3 och y = x + 6?', ratt: 'Nej — bara den första stämmer', fel: ['Ja', 'Nej — ingen av dem stämmer', 'Nej — bara den andra stämmer'], avsnitt: 'Kontrollera i BÅDA' },
      { t: 'Hur många lösningar har systemet y = 4x + 1 och y = 4x + 8?', ratt: 'Ingen — linjerna är parallella', fel: ['En', 'Två', 'Oändligt många'], avsnitt: 'Antal lösningar' },
      { t: 'Hur många lösningar har systemet y = 2x + 5 och 2y = 4x + 10?', ratt: 'Oändligt många — det är samma linje', fel: ['Ingen', 'En', 'Två'], avsnitt: 'Antal lösningar' },
      { t: 'Vad krävs för att två linjer garanterat ska skära varandra?', ratt: 'Att de har olika k', fel: ['Att de har olika m', 'Att båda har positiv lutning', 'Att de skär y-axeln i samma punkt'], avsnitt: 'Antal lösningar' },
      { t: 'Lös grafiskt: y = x + 2 och y = 8 − x. Vad är lösningen?', ratt: 'x = 3 och y = 5', fel: ['x = 5 och y = 3', 'x = 2 och y = 4', 'x = 4 och y = 6'], avsnitt: 'Lösa grafiskt' },
      { t: 'Varför räcker det inte att ett talpar stämmer i den ena ekvationen?', ratt: 'Varje linje har oändligt många punkter — bara skärningspunkten ligger på båda', fel: ['Man måste alltid räkna två gånger', 'Den andra ekvationen är alltid svårare', 'Det räcker faktiskt'], avsnitt: 'Kontrollera i BÅDA' },
    ],
  },
  {
    namn: 'Substitutionsmetoden', slug: 'ekvationssystem/substitutionsmetoden',
    fragor: [
      { t: 'Lös ekvationssystemet: y = 5x − 8 och y = 2x + 7. Vad är x?', ratt: 'x = 5', fel: ['x = 3', 'x = 15', 'x = 1'], avsnitt: 'När båda är lösta för y' },
      { t: 'Lös ekvationssystemet: y = 5x − 8 och y = 2x + 7. Vad är y?', ratt: 'y = 17', fel: ['y = 5', 'y = 9', 'y = 25'], avsnitt: 'Räkna ut den andra variabeln' },
      { t: 'Lös ekvationssystemet: y = 6x och y = x + 15. Ange både x och y.', ratt: 'x = 3 och y = 18', fel: ['x = 18 och y = 3', 'x = 5 och y = 20', 'x = 15 och y = 90'], avsnitt: 'När båda är lösta för y' },
      { t: 'Lös ekvationssystemet: y = 3x − 1 och 2x + y = 19. Ange både x och y.', ratt: 'x = 4 och y = 11', fel: ['x = 11 och y = 4', 'x = 5 och y = 14', 'x = 3 och y = 8'], avsnitt: 'Sätt in i den andra ekvationen' },
      { t: 'Lös ekvationssystemet: x = y + 7 och 3x + y = 33. Ange både x och y.', ratt: 'x = 10 och y = 3', fel: ['x = 3 och y = 10', 'x = 13 och y = 6', 'x = 7 och y = 0'], avsnitt: 'Sätt in i den andra ekvationen' },
      { t: 'Vad är själva idén i substitutionsmetoden?', ratt: 'Byt ut en variabel mot ett uttryck så att bara en variabel blir kvar', fel: ['Addera de två ekvationerna', 'Rita båda linjerna', 'Dela ekvationerna med varandra'], avsnitt: 'Sätt in i den andra ekvationen' },
      { t: 'I systemet 4x + y = 23 och x − 3y = 1 — vilken variabel är enklast att lösa ut?', ratt: 'y ur den första, eftersom den står ensam där', fel: ['x ur den andra, eftersom den står först', 'y ur den andra', 'Ingen — systemet går inte att lösa'], avsnitt: 'Lös ut en variabel själv' },
      { t: 'Du har fått x = 6. Vad gör du sedan?', ratt: 'Sätter in 6 i någon av ekvationerna och räknar ut y', fel: ['Är klar — svaret är x = 6', 'Sätter in 6 i stället för y', 'Börjar om med additionsmetoden'], avsnitt: 'Räkna ut den andra variabeln' },
      { t: 'Lös ekvationssystemet: y = x − 9 och y = 21 − 4x. Ange både x och y.', ratt: 'x = 6 och y = −3', fel: ['x = −3 och y = 6', 'x = 5 och y = −4', 'x = 3 och y = 9'], avsnitt: 'När båda är lösta för y' },
      { t: 'Hur kontrollerar du att din lösning stämmer?', ratt: 'Sätter in både x och y i BÅDA ekvationerna', fel: ['Sätter in i den ekvation du använde sist', 'Räknar om med additionsmetoden', 'Kollar att båda talen är positiva'], avsnitt: 'Räkna ut den andra variabeln' },
    ],
  },
  {
    namn: 'Additionsmetoden', slug: 'ekvationssystem/additionsmetoden',
    fragor: [
      { t: 'Lös ekvationssystemet: x + y = 21 och x − y = 5. Ange både x och y.', ratt: 'x = 13 och y = 8', fel: ['x = 8 och y = 13', 'x = 16 och y = 5', 'x = 26 och y = 16'], avsnitt: 'Addera så en variabel försvinner' },
      { t: 'Lös ekvationssystemet: 3x + y = 23 och 2x − y = 12. Ange både x och y.', ratt: 'x = 7 och y = 2', fel: ['x = 2 och y = 7', 'x = 5 och y = 8', 'x = 35 och y = 2'], avsnitt: 'Addera så en variabel försvinner' },
      { t: 'Varför fungerar additionsmetoden direkt på 3x + y = 23 och 2x − y = 12?', ratt: 'Termerna +y och −y tar ut varandra när ekvationerna adderas', fel: ['För att båda har ett x', 'För att högerleden är olika', 'För att båda talen är udda'], avsnitt: 'När metoden fungerar direkt' },
      { t: 'Lös ekvationssystemet: 5x + 2y = 31 och 3x − 2y = 1. Ange både x och y.', ratt: 'x = 4 och y = 5,5', fel: ['x = 5,5 och y = 4', 'x = 4 och y = 4', 'x = 8 och y = 11'], avsnitt: 'Addera så en variabel försvinner' },
      { t: 'I systemet 4x + 3y = 29 och x + y = 9 — vad gör du med den andra ekvationen för att kunna addera bort y?', ratt: 'Multiplicerar den med −3', fel: ['Multiplicerar den med 3', 'Multiplicerar den med 4', 'Dividerar den med 3'], avsnitt: 'Multiplicera en hel ekvation' },
      { t: 'När du multiplicerar en ekvation med ett tal — vad måste du multiplicera?', ratt: 'Alla termer i båda leden', fel: ['Bara vänsterledet', 'Bara termen med y', 'Bara högerledet'], avsnitt: 'Multiplicera en hel ekvation' },
      { t: 'Lös ekvationssystemet: 3x + 4y = 34 och x − y = 2. Ange både x och y.', ratt: 'x = 6 och y = 4', fel: ['x = 4 och y = 6', 'x = 8 och y = 6', 'x = 5 och y = 3'], avsnitt: 'Multiplicera en hel ekvation' },
      { t: 'Vad ska du göra om båda ekvationerna har +y?', ratt: 'Subtrahera ekvationerna, eller multiplicera en av dem med −1 först', fel: ['Addera dem ändå', 'Byta metod till grafisk lösning', 'Dela ekvationerna med varandra'], avsnitt: 'När metoden fungerar direkt' },
      { t: 'Lös ekvationssystemet: 6x − 5y = 8 och 2x + 5y = 24. Ange både x och y.', ratt: 'x = 4 och y = 3,2', fel: ['x = 3,2 och y = 4', 'x = 4 och y = 4', 'x = 8 och y = 8'], avsnitt: 'Addera så en variabel försvinner' },
      { t: 'Du har fått y = 6 med additionsmetoden. Hur får du x?', ratt: 'Sätter in y = 6 i någon av de ursprungliga ekvationerna', fel: ['Adderar ekvationerna en gång till', 'Sätter x = 6 också', 'Multiplicerar 6 med koefficienten framför x'], avsnitt: 'Räkna ut den andra variabeln' },
    ],
  },
  {
    namn: 'Problemlösning med ekvationssystem', slug: 'ekvationssystem/problemlosning-ekvationssystem',
    fragor: [
      { t: 'Vad är första steget när du löser ett problem med ekvationssystem?', ratt: 'Bestämma vad x och y ska betyda, med enhet', fel: ['Rita en graf', 'Gissa ett svar och kontrollera', 'Välja metod'], avsnitt: 'Bestäm vad x och y betyder' },
      { t: 'Fyra pennor och två suddgummin kostar 96 kr. Vilken ekvation beskriver det, om x är priset på en penna och y priset på ett suddgummi?', ratt: '4x + 2y = 96', fel: ['2x + 4y = 96', 'x + y = 96', '4x · 2y = 96'], avsnitt: 'Översätt till ekvationer' },
      { t: 'Fyra pennor och två suddgummin kostar 96 kr. En penna och ett suddgummi kostar 33 kr. Vad kostar en penna?', ratt: '15 kr', fel: ['18 kr', '24 kr', '12 kr'], avsnitt: 'Lös systemet' },
      { t: 'Samma system: fyra pennor och två suddgummin 96 kr, en penna och ett suddgummi 33 kr. Vad kostar ett suddgummi?', ratt: '18 kr', fel: ['15 kr', '21 kr', '9 kr'], avsnitt: 'Lös systemet' },
      { t: 'Summan av två tal är 60 och differensen mellan dem är 14. Vilka är talen?', ratt: '37 och 23', fel: ['40 och 20', '30 och 30', '46 och 14'], avsnitt: 'Summa och differens' },
      { t: 'Summan av två tal är 84 och differensen är 10. Vilket är det minsta talet?', ratt: '37', fel: ['47', '42', '74'], avsnitt: 'Summa och differens' },
      { t: 'Hur många ekvationer behöver du för att lösa ut två okända?', ratt: 'Två', fel: ['En', 'Tre', 'Det beror på talen'], avsnitt: 'Översätt till ekvationer' },
      { t: 'Vad ska svaret på ett problemlösningstal innehålla?', ratt: 'Ett svar i ord, med enhet', fel: ['Bara x- och y-värdena', 'Hela uträkningen utan svarsmening', 'Bara det största av talen'], avsnitt: 'Svara i ord med enhet' },
      { t: 'Tre pizzor och två salader kostar 470 kr. En pizza och en salad kostar 180 kr. Vad kostar en pizza?', ratt: '110 kr', fel: ['70 kr', '90 kr', '130 kr'], avsnitt: 'Lös systemet' },
      { t: 'Hur kontrollerar du ditt svar på ett problemlösningstal?', ratt: 'Sätter in svaret i den ursprungliga TEXTEN och ser att det stämmer', fel: ['Räknar om med samma metod', 'Kollar att talen är hela', 'Jämför med facit i boken'], avsnitt: 'Svara i ord med enhet' },
    ],
  },
  // ───────── ANDRAGRADARE ─────────
  {
    namn: 'Parentesmultiplikation', slug: 'andragradare/parentesmultiplikation',
    fragor: [
      { t: 'Utveckla: 6x(x + 5)', ratt: '6x² + 30x', fel: ['6x² + 5', '6x + 30x', '11x²'], avsnitt: 'En term in i en parentes' },
      { t: 'Utveckla: 4x(3x − 2)', ratt: '12x² − 8x', fel: ['12x² − 2', '12x − 8x', '−8x²'], avsnitt: 'En term in i en parentes' },
      { t: 'Utveckla: (x + 4)(x + 6)', ratt: 'x² + 10x + 24', fel: ['x² + 24', 'x² + 10x', 'x² + 24x + 10'], avsnitt: 'Fyra produkter' },
      { t: 'Utveckla: (x + 7)(x − 2)', ratt: 'x² + 5x − 14', fel: ['x² − 5x − 14', 'x² − 14', 'x² + 9x − 14'], avsnitt: 'Håll koll på tecknen' },
      { t: 'Utveckla: (x − 4)(x − 7)', ratt: 'x² − 11x + 28', fel: ['x² − 11x − 28', 'x² + 11x + 28', 'x² − 28'], avsnitt: 'Håll koll på tecknen' },
      { t: 'Utveckla: (x − 10)(x + 3)', ratt: 'x² − 7x − 30', fel: ['x² + 7x − 30', 'x² − 13x − 30', 'x² − 30'], avsnitt: 'Håll koll på tecknen' },
      { t: 'Hur många produkter blir det när du multiplicerar (a + b)(c + d)?', ratt: 'Fyra', fel: ['Två', 'Tre', 'Sex'], avsnitt: 'Fyra produkter' },
      { t: 'Utveckla: (3x + 2)(x + 4)', ratt: '3x² + 14x + 8', fel: ['3x² + 8', '3x² + 6x + 8', '3x² + 14x + 6'], avsnitt: 'När det står en siffra framför x' },
      { t: 'Utveckla: (5x − 1)(x + 3)', ratt: '5x² + 14x − 3', fel: ['5x² − 14x − 3', '5x² + 15x − 3', '5x² − 3'], avsnitt: 'När det står en siffra framför x' },
      { t: 'En elev skriver (x + 2)(x + 6) = x² + 12. Vad har eleven glömt?', ratt: 'De två mittersta produkterna, 6x och 2x', fel: ['Att kvadrera tvåan och sexan', 'Att sätta ut minustecken', 'Ingenting — svaret är rätt'], avsnitt: 'Fyra produkter' },
    ],
  },
  {
    namn: 'Kvadreringsreglerna', slug: 'andragradare/kvadreringsreglerna',
    fragor: [
      { t: 'Utveckla: (x + 3)²', ratt: 'x² + 6x + 9', fel: ['x² + 9', 'x² + 3x + 9', 'x² + 6x + 6'], avsnitt: 'Första kvadreringsregeln' },
      { t: 'Utveckla: (x + 10)²', ratt: 'x² + 20x + 100', fel: ['x² + 100', 'x² + 10x + 100', 'x² + 20x + 20'], avsnitt: 'Första kvadreringsregeln' },
      { t: 'Utveckla: (x − 6)²', ratt: 'x² − 12x + 36', fel: ['x² − 36', 'x² − 12x − 36', 'x² + 12x + 36'], avsnitt: 'Andra kvadreringsregeln' },
      { t: 'Utveckla: (x − 9)²', ratt: 'x² − 18x + 81', fel: ['x² − 81', 'x² − 18x − 81', 'x² + 18x + 81'], avsnitt: 'Andra kvadreringsregeln' },
      { t: 'Varför är (x + 4)² INTE lika med x² + 16?', ratt: 'Den dubbla produkten 2 · x · 4 = 8x saknas', fel: ['För att 4² är 8, inte 16', 'För att x² ska vara 2x', 'För att man måste byta tecken'], avsnitt: 'Den vanligaste fällan' },
      { t: 'Varför blir sista termen i (x − 5)² positiv?', ratt: 'Minus gånger minus blir plus: (−5)(−5) = 25', fel: ['Man byter alltid tecken i sista termen', 'För att x är positivt', 'Den blir faktiskt negativ'], avsnitt: 'Andra kvadreringsregeln' },
      { t: 'Utveckla: (3x + 4)²', ratt: '9x² + 24x + 16', fel: ['3x² + 24x + 16', '9x² + 12x + 16', '9x² + 16'], avsnitt: 'När det står en siffra framför x' },
      { t: 'Vilket tal ska stå i rutan? (x + ▢)² = x² + 14x + 49', ratt: '7', fel: ['14', '49', '3,5'], avsnitt: 'Fyll i det som saknas' },
      { t: 'Vilket tal ska stå i rutan? (x − ▢)² = x² − 20x + 100', ratt: '10', fel: ['20', '100', '5'], avsnitt: 'Fyll i det som saknas' },
      { t: 'Hur hittar du mittentermen i (x + a)² snabbt?', ratt: 'Dubbla produkten: 2 gånger x gånger a', fel: ['a i kvadrat', 'x plus a', 'a delat med 2'], avsnitt: 'Första kvadreringsregeln' },
    ],
  },
  {
    namn: 'Konjugatregeln', slug: 'andragradare/konjugatregeln',
    fragor: [
      { t: 'Utveckla: (x + 5)(x − 5)', ratt: 'x² − 25', fel: ['x² + 25', 'x² − 10x − 25', 'x² − 10x + 25'], avsnitt: 'Konjugatregeln' },
      { t: 'Utveckla: (x − 12)(x + 12)', ratt: 'x² − 144', fel: ['x² + 144', 'x² − 24x − 144', 'x² − 24x + 144'], avsnitt: 'Konjugatregeln' },
      { t: 'Vad kännetecknar ett konjugatpar?', ratt: 'Samma två termer i båda parenteserna, ett plus och ett minus', fel: ['Två parenteser med samma tecken', 'Att båda termerna är positiva', 'Att den ena parentesen är kvadrerad'], avsnitt: 'Känn igen konjugatparet' },
      { t: 'Utveckla: (5x + 4)(5x − 4)', ratt: '25x² − 16', fel: ['5x² − 16', '25x² + 16', '25x² − 40x − 16'], avsnitt: 'När det står en siffra framför x' },
      { t: 'Utveckla: (9 − x)(9 + x)', ratt: '81 − x²', fel: ['x² − 81', '81 + x²', '81 − 18x − x²'], avsnitt: 'När talet står först' },
      { t: 'Varför försvinner mittentermerna i konjugatregeln?', ratt: 'De två mittersta produkterna är lika stora men har olika tecken och tar ut varandra', fel: ['De är alltid noll', 'Man stryker dem för att förenkla', 'De hör till andragradstermen'], avsnitt: 'Varför mittentermerna försvinner' },
      { t: 'Faktorisera: x² − 36', ratt: '(x + 6)(x − 6)', fel: ['(x − 6)(x − 6)', '(x + 6)(x + 6)', '(x − 36)(x + 1)'], avsnitt: 'Faktorisera baklänges' },
      { t: 'Faktorisera: x² − 144', ratt: '(x + 12)(x − 12)', fel: ['(x − 12)(x − 12)', '(x + 144)(x − 1)', 'Går inte att faktorisera'], avsnitt: 'Faktorisera baklänges' },
      { t: 'Vilket uttryck går att faktorisera med konjugatregeln?', ratt: 'x² − 64', fel: ['x² + 64', 'x² + 16x + 64', 'x² − 16x'], avsnitt: 'Faktorisera baklänges' },
      { t: 'Vad ska stå i den första rutan? (▢ + 5)(▢ − 5) = 9x² − 25', ratt: '3x', fel: ['9x', '3', '9'], avsnitt: 'När det står en siffra framför x' },
    ],
  },
  {
    namn: 'Enkla andragradsekvationer', slug: 'andragradare/enkla-andragradsekvationer',
    fragor: [
      { t: 'Lös ekvationen: x² = 121', ratt: 'x = ±11', fel: ['x = 11', 'x = 60,5', 'x = 242'], avsnitt: 'Två lösningar, inte en' },
      { t: 'Lös ekvationen: x² = 256', ratt: 'x = ±16', fel: ['x = 16', 'x = 128', 'x = 512'], avsnitt: 'Två lösningar, inte en' },
      { t: 'Lös ekvationen: x² − 49 = 0', ratt: 'x = ±7', fel: ['x = 7', 'x = −7', 'x = 24,5'], avsnitt: 'Få x² ensamt först' },
      { t: 'Lös ekvationen: 4x² = 100', ratt: 'x = ±5', fel: ['x = 5', 'x = 25', 'x = ±25'], avsnitt: 'Få x² ensamt först' },
      { t: 'Lös ekvationen: x² + 11 = 60', ratt: 'x = ±7', fel: ['x = 7', 'x = ±71', 'x = ±49'], avsnitt: 'Få x² ensamt först' },
      { t: 'Lös ekvationen: 3x² − 12 = 96', ratt: 'x = ±6', fel: ['x = 6', 'x = ±36', 'x = ±28'], avsnitt: 'Få x² ensamt först' },
      { t: 'Hur många lösningar har ekvationen x² + 15 = 4?', ratt: 'Ingen — x² kan inte bli negativt', fel: ['En', 'Två', 'Oändligt många'], avsnitt: 'När ekvationen saknar lösning' },
      { t: 'Vad blir (−9)²?', ratt: '81', fel: ['−81', '−18', '18'], avsnitt: 'Två lösningar, inte en' },
      { t: 'En elev löser x² = 36 och svarar x = 6. Vad har eleven missat?', ratt: 'Att −6 också fungerar: (−6)² = 36', fel: ['Att svaret ska vara 18', 'Att man ska dela med 2', 'Ingenting — svaret är komplett'], avsnitt: 'Två lösningar, inte en' },
      { t: 'Lös ekvationen: 7x² = 700', ratt: 'x = ±10', fel: ['x = 10', 'x = 100', 'x = ±100'], avsnitt: 'Få x² ensamt först' },
    ],
  },
  {
    namn: 'Nollproduktmetoden', slug: 'andragradare/nollproduktmetoden',
    fragor: [
      { t: 'Lös ekvationen: (x − 8)(x + 2) = 0', ratt: 'x = 8 och x = −2', fel: ['x = −8 och x = 2', 'x = 8 och x = 2', 'x = −8 och x = −2'], avsnitt: 'Byt tecken när du löser ut' },
      { t: 'Lös ekvationen: (x + 11)(x − 6) = 0', ratt: 'x = −11 och x = 6', fel: ['x = 11 och x = −6', 'x = 11 och x = 6', 'x = −11 och x = −6'], avsnitt: 'Byt tecken när du löser ut' },
      { t: 'Lös ekvationen: (2x − 10)(x + 4) = 0', ratt: 'x = 5 och x = −4', fel: ['x = 10 och x = −4', 'x = −5 och x = 4', 'x = 5 och x = 4'], avsnitt: 'När det står en siffra framför x' },
      { t: 'Lös ekvationen: x² − 9x = 0', ratt: 'x = 0 och x = 9', fel: ['x = 9', 'x = ±9', 'x = 0 och x = −9'], avsnitt: 'Bryt ut x' },
      { t: 'Lös ekvationen: x² + 12x = 0', ratt: 'x = 0 och x = −12', fel: ['x = −12', 'x = 0 och x = 12', 'x = ±12'], avsnitt: 'Bryt ut x' },
      { t: 'Lös ekvationen: 5x² − 20x = 0', ratt: 'x = 0 och x = 4', fel: ['x = 4', 'x = 0 och x = 20', 'x = ±4'], avsnitt: 'Bryt ut x' },
      { t: 'Lös ekvationen: 3x² = 21x', ratt: 'x = 0 och x = 7', fel: ['x = 7', 'x = 0 och x = 18', 'x = ±7'], avsnitt: 'Flytta över allt till ena ledet först' },
      { t: 'Varför måste högerledet vara 0 innan du använder nollproduktmetoden?', ratt: 'Bara noll kan skrivas som en produkt på ett enda sätt: någon faktor måste vara noll', fel: ['För att det ser snyggare ut', 'För att x annars blir negativt', 'För att parenteserna annars inte går att multiplicera'], avsnitt: 'Varför högerledet måste vara 0' },
      { t: 'En elev löser x² − 8x = 0 genom att dela båda leden med x och får x = 8. Vad är felet?', ratt: 'Lösningen x = 0 försvinner när man delar med x', fel: ['Man får inte dela en ekvation alls', 'Svaret ska vara −8', 'Man måste använda pq-formeln här'], avsnitt: 'Bryt ut x' },
      { t: 'Ekvationen (x − 3)(x + 7) = 0 har lösningen x = 3 och x = −7. Vad är det för samband mellan parenteserna och svaren?', ratt: 'Varje parentes sätts lika med noll och löses för sig', fel: ['Talen i parenteserna är svaren rakt av', 'Man adderar talen i parenteserna', 'Svaren är parenteserna multiplicerade'], avsnitt: 'Byt tecken när du löser ut' },
    ],
  },
  {
    namn: 'pq-formeln', slug: 'andragradare/pq-formeln',
    fragor: [
      { t: 'I ekvationen x² + 9x − 22 = 0, vad är p och q?', ratt: 'p = 9 och q = −22', fel: ['p = 9 och q = 22', 'p = −9 och q = −22', 'p = 1 och q = 9'], avsnitt: 'Identifiera p och q' },
      { t: 'I ekvationen x² − 7x + 10 = 0, vad är p och q?', ratt: 'p = −7 och q = 10', fel: ['p = 7 och q = 10', 'p = −7 och q = −10', 'p = 7 och q = −10'], avsnitt: 'Identifiera p och q' },
      { t: 'Lös ekvationen: x² + 5x − 14 = 0', ratt: 'x = 2 och x = −7', fel: ['x = −2 och x = 7', 'x = 2 och x = 7', 'x = −2 och x = −7'], avsnitt: 'Sätt in i formeln' },
      { t: 'Lös ekvationen: x² − 9x + 20 = 0', ratt: 'x = 5 och x = 4', fel: ['x = −5 och x = −4', 'x = 5 och x = −4', 'x = 10 och x = 2'], avsnitt: 'Sätt in i formeln' },
      { t: 'Lös ekvationen: x² + 6x − 27 = 0', ratt: 'x = 3 och x = −9', fel: ['x = −3 och x = 9', 'x = 3 och x = 9', 'x = −3 och x = −9'], avsnitt: 'Sätt in i formeln' },
      { t: 'Lös ekvationen: x² − 11x + 24 = 0', ratt: 'x = 8 och x = 3', fel: ['x = −8 och x = −3', 'x = 8 och x = −3', 'x = 12 och x = 2'], avsnitt: 'Sätt in i formeln' },
      { t: 'Vad måste du göra FÖRE pq-formeln med ekvationen 2x² + 10x − 48 = 0?', ratt: 'Dela hela ekvationen med 2', fel: ['Multiplicera med 2', 'Flytta över 48 till högerledet', 'Ingenting — formeln funkar direkt'], avsnitt: 'Dela bort siffran framför x²' },
      { t: 'Lös ekvationen: 3x² − 21x + 30 = 0', ratt: 'x = 5 och x = 2', fel: ['x = 7 och x = 10', 'x = −5 och x = −2', 'x = 15 och x = 6'], avsnitt: 'Dela bort siffran framför x²' },
      { t: 'Vad måste du göra FÖRE pq-formeln med ekvationen x² = 4x + 21?', ratt: 'Flytta över allt till vänsterledet: x² − 4x − 21 = 0', fel: ['Dela båda leden med x', 'Sätta p = 4 och q = 21 direkt', 'Dra roten ur båda leden'], avsnitt: 'Skriv om till rätt form först' },
      { t: 'Vad betyder det om talet under rottecknet i pq-formeln blir negativt?', ratt: 'Ekvationen saknar reella lösningar', fel: ['Båda lösningarna blir negativa', 'Ekvationen har oändligt många lösningar', 'Man byter tecken och räknar vidare'], avsnitt: 'När ekvationen saknar lösning' },
    ],
  },
  {
    namn: 'Andragradsfunktioner grafiskt', slug: 'andragradare/andragradsfunktioner-grafiskt',
    fragor: [
      { t: 'Vad kallas de punkter där parabeln skär x-axeln?', ratt: 'Nollställen', fel: ['Symmetripunkter', 'Extrempunkter', 'Skärningspunkter med y-axeln'], avsnitt: 'Läsa av nollställen' },
      { t: 'En parabel skär x-axeln i x = 2 och x = 10. Vilken är symmetrilinjens ekvation?', ratt: 'x = 6', fel: ['x = 4', 'x = 12', 'y = 6'], avsnitt: 'Symmetrilinjen' },
      { t: 'En parabel skär x-axeln i x = −5 och x = 3. Vilken är symmetrilinjens ekvation?', ratt: 'x = −1', fel: ['x = 1', 'x = −2', 'x = 4'], avsnitt: 'Symmetrilinjen' },
      { t: 'Hur ser du på grafen att funktionen har ett MINSTA värde?', ratt: 'Parabeln är uppåtvänd, som en dal', fel: ['Parabeln är nedåtvänd, som ett berg', 'Parabeln skär y-axeln under noll', 'Parabeln saknar nollställen'], avsnitt: 'Största eller minsta värde' },
      { t: 'Vad betyder det att avläsa f(5) i en graf?', ratt: 'Gå till x = 5 och läs av grafens y-värde där', fel: ['Gå till y = 5 och läs av x-värdet', 'Multiplicera funktionen med 5', 'Läsa av var grafen skär x-axeln'], avsnitt: 'Läsa av f(a)' },
      { t: 'Hur löser du f(x) = 4 med hjälp av grafen?', ratt: 'Dra en vågrät linje vid y = 4 och läs av var den skär parabeln', fel: ['Dra en lodrät linje vid x = 4', 'Läs av var parabeln skär y-axeln', 'Räkna ut symmetrilinjen'], avsnitt: 'Lösa f(x) = k grafiskt' },
      { t: 'Vad kallas den högsta punkten på en nedåtvänd parabel?', ratt: 'Maximipunkt', fel: ['Minimipunkt', 'Nollställe', 'Symmetrilinje'], avsnitt: 'Största eller minsta värde' },
      { t: 'Var skär parabeln y-axeln?', ratt: 'Där x = 0', fel: ['Där y = 0', 'I symmetrilinjen', 'I nollställena'], avsnitt: 'Läsa av f(a)' },
      { t: 'En parabel har maximipunkten (2, 11). Vilket är funktionens största värde?', ratt: '11', fel: ['2', '(2, 11)', '13'], avsnitt: 'Största eller minsta värde' },
      { t: 'Hur många nollställen kan en andragradsfunktion ha?', ratt: 'Noll, ett eller två', fel: ['Alltid två', 'Alltid ett', 'Hur många som helst'], avsnitt: 'Läsa av nollställen' },
    ],
  },
  {
    namn: 'Andragradsfunktioner algebraiskt', slug: 'andragradare/andragradsfunktioner-algebraiskt',
    fragor: [
      { t: 'Hur bestämmer du nollställena till en andragradsfunktion algebraiskt?', ratt: 'Sätt f(x) = 0 och lös ekvationen', fel: ['Sätt x = 0 och räkna ut f(0)', 'Räkna ut symmetrilinjen först', 'Dela funktionen med x'], avsnitt: 'Nollställen' },
      { t: 'Bestäm nollställena till f(x) = x² − 12x + 32', ratt: 'x = 4 och x = 8', fel: ['x = −4 och x = −8', 'x = 6 och x = 6', 'x = 32 och x = 1'], avsnitt: 'Nollställen' },
      { t: 'Bestäm nollställena till f(x) = x² + 4x − 32', ratt: 'x = 4 och x = −8', fel: ['x = −4 och x = 8', 'x = 4 och x = 8', 'x = −4 och x = −8'], avsnitt: 'Nollställen' },
      { t: 'En andragradsfunktion har nollställena x = 3 och x = 15. Vilken är symmetrilinjen?', ratt: 'x = 9', fel: ['x = 6', 'x = 18', 'x = 12'], avsnitt: 'Symmetrilinjen som medelvärde' },
      { t: 'Bestäm symmetrilinjen till f(x) = x² − 14x + 5 utan att räkna ut nollställena.', ratt: 'x = 7', fel: ['x = −7', 'x = 14', 'x = 5'], avsnitt: 'Symmetrilinjen ur p' },
      { t: 'Bestäm symmetrilinjen till f(x) = x² + 10x + 3', ratt: 'x = −5', fel: ['x = 5', 'x = −10', 'x = 10'], avsnitt: 'Symmetrilinjen ur p' },
      { t: 'Hur får du fram extrempunktens y-värde när du vet symmetrilinjen?', ratt: 'Sätt in symmetrilinjens x-värde i funktionen', fel: ['Sätt in 0 i funktionen', 'Ta medelvärdet av nollställena igen', 'Dela symmetrilinjen med 2'], avsnitt: 'Extrempunkten' },
      { t: 'Bestäm extrempunkten till f(x) = x² − 4x + 1', ratt: '(2, −3)', fel: ['(2, 3)', '(−2, −3)', '(4, 1)'], avsnitt: 'Extrempunkten' },
      { t: 'Har f(x) = −x² + 6x − 5 ett största eller ett minsta värde?', ratt: 'Ett största värde, eftersom x²-termen är negativ', fel: ['Ett minsta värde, eftersom konstanten är negativ', 'Ett minsta värde, eftersom x²-termen är negativ', 'Varken eller'], avsnitt: 'Största eller minsta värde' },
      { t: 'Bestäm nollställena till f(x) = 3x² − 24x + 45', ratt: 'x = 3 och x = 5', fel: ['x = 9 och x = 15', 'x = −3 och x = −5', 'x = 8 och x = 15'], avsnitt: 'Dela bort siffran framför x²' },
    ],
  },
  {
    namn: 'Implikation och ekvivalens', slug: 'andragradare/implikation-och-ekvivalens',
    fragor: [
      { t: 'Vilken pil betyder ekvivalens?', ratt: '⇔', fel: ['⇒', '⇐', '='], avsnitt: 'De två pilarna' },
      { t: 'Vilken pil betyder implikation åt höger?', ratt: '⇒', fel: ['⇔', '⇐', '>'], avsnitt: 'De två pilarna' },
      { t: 'Vilka två frågor avgör vilken pil som gäller?', ratt: 'Om A gäller måste B gälla, och om B gäller måste A gälla', fel: ['Är A sant, och är B sant', 'Vilket påstående är längst', 'Vilket påstående kommer först'], avsnitt: 'De två frågorna' },
      { t: 'A: talet är delbart med 9. B: talet är delbart med 3. Vilken pil gäller?', ratt: 'A ⇒ B', fel: ['A ⇔ B', 'A ⇐ B', 'ingen pil'], avsnitt: 'De två frågorna' },
      { t: 'A: 5x = 40. B: x = 8. Vilken pil gäller?', ratt: 'A ⇔ B', fel: ['A ⇒ B', 'A ⇐ B', 'ingen pil'], avsnitt: 'Ekvivalens i ekvationer' },
      { t: 'A: x = −4. B: x² = 16. Vilken pil gäller?', ratt: 'A ⇒ B', fel: ['A ⇔ B', 'A ⇐ B', 'ingen pil'], avsnitt: 'Kvadrering är bara en implikation' },
      { t: 'Är kvadrering av båda leden en ekvivalent omskrivning?', ratt: 'Nej, det är bara en implikation', fel: ['Ja, alltid', 'Ja, om talen är positiva', 'Bara i andragradsekvationer'], avsnitt: 'Kvadrering är bara en implikation' },
      { t: 'Varför får man inte dela båda leden med x?', ratt: 'Lösningen x = 0 försvinner, så steget är inte ekvivalent', fel: ['Man får aldrig dela en ekvation', 'Svaret blir negativt', 'Det är tillåtet'], avsnitt: 'Ekvivalens i ekvationer' },
      { t: 'A: fyrhörningen är en kvadrat. B: fyrhörningen har fyra lika långa sidor. Vilken pil gäller?', ratt: 'A ⇒ B', fel: ['A ⇔ B', 'A ⇐ B', 'ingen pil'], avsnitt: 'De två frågorna' },
      { t: 'Hur visar du att svaret på fråga 2 är nej?', ratt: 'Med ett motexempel: ett enda fall där B gäller men inte A', fel: ['Genom att pröva alla tal', 'Genom att rita en figur', 'Det går inte att visa'], avsnitt: 'De två frågorna' },
    ],
  },
];

/**
 * OM MALL_ID_2B_DEL1 lämnas tomt — gör detta per formulär efteråt:
 *   A. Inställningar → "Visa betyg" = "Omedelbart efter varje inlämning"
 *   B. Publicera → Respondenter = "Alla på AcadeMedia"
 */
