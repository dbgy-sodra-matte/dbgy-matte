/**
 * Checkpoints — Algebra (7) + Ekonomi (4), Omläsning Ma1a
 * =======================================================
 * Skapar elva checkpoint-quiz i en körning. 10 frågor per quiz,
 * feldistraktorer på klassiska misstag, träna mer-länk till rätt
 * Ma1a-delmomentsida vid fel svar.
 *
 * KÖRS SÅ HÄR (en gång, av Simon, inloggad med dbgy.se-kontot):
 *   1. script.google.com → Nytt projekt → klistra in HELA filen → spara
 *   2. Kör funktionen "skapaAlgebraEkonomiCheckpoints1a" (~1-2 min)
 *   3. Öppna Körlogg (Ctrl+Enter) → alla elva PUBLICERAD-URL:er listas
 *   4. Klistra in loggen i chatten med Claude → länkarna läggs in på sidorna
 *
 * EFTERÅT — per formulär (Apps Script kan inte styra detta):
 *   A. Inställningar → "Visa betyg" = "Omedelbart efter varje inlämning"
 *   B. Publicera → Respondenter = "Alla på AcadeMedia"
 *
 * Tröskel: minst 8/10 = klarad. Obegränsade försök (mastery).
 */

const BAS_URL = 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/';

function skapaAlgebraEkonomiCheckpoints1a() {
  const resultat = [];
  for (const cp of CHECKPOINTS) {
    const url = skapaCheckpoint(cp);
    resultat.push(cp.namn + '\n  PUBLICERAD: ' + url.publicerad + '\n  REDIGERA:   ' + url.redigera);
  }
  Logger.log('\n===== ALLA ELVA (ALGEBRA + EKONOMI) SKAPADE =====\n\n' + resultat.join('\n\n'));
}

function skapaCheckpoint(cp) {
  const form = FormApp.create('Checkpoint — ' + cp.namn + ' (Omläsning Ma1a)');
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
  // ───────── ALGEBRA ─────────
  {
    namn: 'Förenkling', slug: 'algebra/forenkling',
    fragor: [
      { t: 'Förenkla: 4x + 5x', ratt: '9x', fel: ['20x', '9', '9x²'], avsnitt: 'Samma sort med samma sort' },
      { t: 'Förenkla: 7x + 3 − 2x', ratt: '5x + 3', fel: ['8x', '5x', '2x + 3'], avsnitt: 'Samma sort med samma sort' },
      { t: 'Förenkla: 6a + 2 − a + 5', ratt: '5a + 7', fel: ['6a + 7', '5a + 3', '7a + 7'], avsnitt: 'Samma sort med samma sort' },
      { t: 'Multiplicera in: 3(x + 2)', ratt: '3x + 6', fel: ['3x + 2', 'x + 6', '5x'], avsnitt: 'Multiplicera in i en parentes' },
      { t: 'Multiplicera in: 5(2x − 1)', ratt: '10x − 5', fel: ['10x − 1', '7x', '10x + 5'], avsnitt: 'Multiplicera in i en parentes' },
      { t: 'Multiplicera in: 6(x + 3)', ratt: '6x + 18', fel: ['6x + 3', 'x + 18', '6x + 9'], avsnitt: 'Multiplicera in i en parentes' },
      { t: 'Förenkla: 9x − (4x + 2)', ratt: '5x − 2', fel: ['5x + 2', '13x + 2', '5x − 6'], avsnitt: 'Minus framför en parentes' },
      { t: 'Förenkla: 8a − (3a − 5)', ratt: '5a + 5', fel: ['5a − 5', '11a − 5', '5a'], avsnitt: 'Minus framför en parentes' },
      { t: 'Förenkla: 2x + 3 + x', ratt: '3x + 3', fel: ['5x', '2x + 3', '6x'], avsnitt: 'Samma sort med samma sort' },
      { t: 'Förenkla: 4y − y', ratt: '3y', fel: ['4', '3', '4y'], avsnitt: 'Samma sort med samma sort' },
    ],
  },
  {
    namn: 'Grundläggande ekvationer', slug: 'algebra/grundlaggande-ekvationer',
    fragor: [
      { t: 'Lös: x + 7 = 12', ratt: '5', fel: ['19', '7', '12'], avsnitt: 'Ett steg' },
      { t: 'Lös: x − 4 = 9', ratt: '13', fel: ['5', '36', '4'], avsnitt: 'Ett steg' },
      { t: 'Lös: 6x = 42', ratt: '7', fel: ['36', '48', '252'], avsnitt: 'Ett steg' },
      { t: 'Lös: 3x = 27', ratt: '9', fel: ['24', '30', '81'], avsnitt: 'Ett steg' },
      { t: 'Lös: 2x + 5 = 17', ratt: '6', fel: ['11', '7', '22'], avsnitt: 'Två steg — skala av i rätt ordning' },
      { t: 'Lös: 4x − 3 = 21', ratt: '6', fel: ['4,5', '5', '24'], avsnitt: 'Två steg — skala av i rätt ordning' },
      { t: 'Lös: 5x + 2 = 22', ratt: '4', fel: ['20', '5', '24'], avsnitt: 'Två steg — skala av i rätt ordning' },
      { t: 'Lös: x + 9 = 15', ratt: '6', fel: ['24', '9', '15'], avsnitt: 'Ett steg' },
      { t: 'Lös: 10x = 50', ratt: '5', fel: ['40', '500', '60'], avsnitt: 'Ett steg' },
      { t: 'Lös: 3x + 1 = 10', ratt: '3', fel: ['9', '11', '30'], avsnitt: 'Två steg — skala av i rätt ordning' },
    ],
  },
  {
    namn: 'Ekvation med x i båda led', slug: 'algebra/ekvation-x-i-bada-led',
    fragor: [
      { t: 'Lös: 5x = 2x + 9', ratt: '3', fel: ['9', '1', '11'], avsnitt: 'Steg 1: samla alla x på en sida' },
      { t: 'Lös: 7x = 3x + 16', ratt: '4', fel: ['16', '2', '1,6'], avsnitt: 'Steg 1: samla alla x på en sida' },
      { t: 'Lös: 6x − 4 = 4x + 10', ratt: '7', fel: ['3', '14', '1'], avsnitt: 'Steg 2: vanlig ekvation' },
      { t: 'Lös: 8x − 3 = 5x + 9', ratt: '4', fel: ['2', '12', '1'], avsnitt: 'Steg 2: vanlig ekvation' },
      { t: 'Lös: 9x + 1 = 4x + 26', ratt: '5', fel: ['25', '27', '6'], avsnitt: 'Steg 2: vanlig ekvation' },
      { t: 'Lös: 4x + 7 = x + 19', ratt: '4', fel: ['12', '26', '3'], avsnitt: 'Steg 1: samla alla x på en sida' },
      { t: 'Lös: 10x − 8 = 7x + 7', ratt: '5', fel: ['15', '1', '3'], avsnitt: 'Steg 2: vanlig ekvation' },
      { t: 'Lös: 3x = x + 8', ratt: '4', fel: ['8', '2', '12'], avsnitt: 'Steg 1: samla alla x på en sida' },
      { t: 'Lös: 6x + 2 = 2x + 14', ratt: '3', fel: ['12', '4', '16'], avsnitt: 'Steg 2: vanlig ekvation' },
      { t: 'Lös: 5x − 1 = 2x + 8', ratt: '3', fel: ['9', '7', '2'], avsnitt: 'Steg 2: vanlig ekvation' },
    ],
  },
  {
    namn: 'Faktorisering', slug: 'algebra/faktorisering',
    fragor: [
      { t: 'Faktorisera: 6x + 9', ratt: '3(2x + 3)', fel: ['3(2x + 9)', '2(3x + 3)', '6(x + 9)'], avsnitt: 'Bryt ut ett tal' },
      { t: 'Faktorisera: 8x + 12', ratt: '4(2x + 3)', fel: ['4(2x + 8)', '2(4x + 12)', '8(x + 12)'], avsnitt: 'Bryt ut ett tal' },
      { t: 'Faktorisera: 10x + 15', ratt: '5(2x + 3)', fel: ['5(2x + 15)', '5(x + 3)', '10(x + 15)'], avsnitt: 'Bryt ut ett tal' },
      { t: 'Faktorisera: 4x + 10', ratt: '2(2x + 5)', fel: ['2(2x + 10)', '4(x + 10)', '2(4x + 5)'], avsnitt: 'Bryt ut ett tal' },
      { t: 'Faktorisera: x² + 5x', ratt: 'x(x + 5)', fel: ['x(5x)', '5x(x + 1)', 'x²(1 + 5)'], avsnitt: 'Bryt ut x' },
      { t: 'Faktorisera: x² + 3x', ratt: 'x(x + 3)', fel: ['3x(x)', 'x(3x)', '3(x + x)'], avsnitt: 'Bryt ut x' },
      { t: 'Faktorisera: 6x + 15', ratt: '3(2x + 5)', fel: ['3(2x + 15)', '5(x + 3)', '6(x + 15)'], avsnitt: 'Bryt ut ett tal' },
      { t: 'Faktorisera: 9x + 6', ratt: '3(3x + 2)', fel: ['3(3x + 6)', '9(x + 6)', '3(3x + 3)'], avsnitt: 'Bryt ut ett tal' },
      { t: 'Faktorisera: x² + 7x', ratt: 'x(x + 7)', fel: ['7x(x)', 'x(7x)', 'x²(7)'], avsnitt: 'Bryt ut x' },
      { t: 'Faktorisera: 12x + 8', ratt: '4(3x + 2)', fel: ['4(3x + 8)', '2(6x + 8)', '4(3x + 4)'], avsnitt: 'Bryt ut ett tal' },
    ],
  },
  {
    namn: 'Ekvationer med parenteser', slug: 'algebra/ekvationer-med-parenteser',
    fragor: [
      { t: 'Lös: 2(x + 3) = 14', ratt: '4', fel: ['7', '11', '8'], avsnitt: 'Två vägar — välj den enklaste' },
      { t: 'Lös: 4(x − 1) = 12', ratt: '4', fel: ['3', '13', '2'], avsnitt: 'Två vägar — välj den enklaste' },
      { t: 'Lös: 3(x + 2) = 18', ratt: '4', fel: ['6', '16', '5'], avsnitt: 'Två vägar — välj den enklaste' },
      { t: 'Lös: 5(x − 2) = 20', ratt: '6', fel: ['4', '22', '2'], avsnitt: 'Två vägar — välj den enklaste' },
      { t: 'Lös: 2(x + 4) = 16', ratt: '4', fel: ['8', '12', '6'], avsnitt: 'Två vägar — välj den enklaste' },
      { t: 'Lös: 6(x + 2) = 30', ratt: '3', fel: ['5', '28', '4'], avsnitt: 'Två vägar — välj den enklaste' },
      { t: 'Lös: 3(2x − 1) = 15', ratt: '3', fel: ['6', '8', '2'], avsnitt: 'Två vägar — välj den enklaste' },
      { t: 'Lös: 4(x + 3) = 28', ratt: '4', fel: ['7', '25', '5'], avsnitt: 'Två vägar — välj den enklaste' },
      { t: 'Lös: 2(x − 5) = 8', ratt: '9', fel: ['4', '1', '3'], avsnitt: 'Två vägar — välj den enklaste' },
      { t: 'Lös: 5(x + 1) = 25', ratt: '4', fel: ['5', '24', '6'], avsnitt: 'Två vägar — välj den enklaste' },
    ],
  },
  {
    namn: 'Ekvationer med nämnare', slug: 'algebra/ekvationer-med-namnare',
    fragor: [
      { t: 'Lös: x/2 = 8', ratt: '16', fel: ['4', '10', '6'], avsnitt: 'Multiplicera bort nämnaren' },
      { t: 'Lös: x/3 = 9', ratt: '27', fel: ['3', '12', '6'], avsnitt: 'Multiplicera bort nämnaren' },
      { t: 'Lös: x/5 = 4', ratt: '20', fel: ['0,8', '9', '1,25'], avsnitt: 'Multiplicera bort nämnaren' },
      { t: 'Lös: x/4 + 2 = 6', ratt: '16', fel: ['32', '2', '24'], avsnitt: 'Två steg — ta bort lösa tal först' },
      { t: 'Lös: x/2 − 3 = 5', ratt: '16', fel: ['4', '1', '10'], avsnitt: 'Två steg — ta bort lösa tal först' },
      { t: 'Lös: x/6 = 5', ratt: '30', fel: ['1,2', '11', '0,83'], avsnitt: 'Multiplicera bort nämnaren' },
      { t: 'Lös: x/3 + 4 = 10', ratt: '18', fel: ['42', '2', '14'], avsnitt: 'Två steg — ta bort lösa tal först' },
      { t: 'Lös: x/4 = 6', ratt: '24', fel: ['1,5', '10', '2'], avsnitt: 'Multiplicera bort nämnaren' },
      { t: 'Lös: x/2 + 5 = 9', ratt: '8', fel: ['28', '2', '4'], avsnitt: 'Två steg — ta bort lösa tal först' },
      { t: 'Lös: x/3 = 7', ratt: '21', fel: ['2,33', '10', '4'], avsnitt: 'Multiplicera bort nämnaren' },
    ],
  },
  {
    namn: 'Formler', slug: 'algebra/formler',
    fragor: [
      { t: 'O = 2a + 2b. Beräkna O när a = 6 och b = 4.', ratt: '20', fel: ['12', '24', '10'], avsnitt: 'Sätta in värden' },
      { t: 'A = b · h. Beräkna A när b = 5 och h = 8.', ratt: '40', fel: ['13', '26', '45'], avsnitt: 'Sätta in värden' },
      { t: 's = v · t. Beräkna s när v = 60 och t = 4.', ratt: '240', fel: ['64', '15', '56'], avsnitt: 'Sätta in värden' },
      { t: 'y = 3x + 5. Beräkna y när x = 4.', ratt: '17', fel: ['12', '32', '27'], avsnitt: 'Sätta in värden' },
      { t: 'En taxi kostar 45 kr + 12 kr/km. Skriv formeln för kostnaden K efter x km.', ratt: 'K = 45 + 12x', fel: ['K = 57x', 'K = 12 + 45x', 'K = 45x + 12'], avsnitt: 'Ställa upp en formel ur text' },
      { t: 'Ett gym kostar 200 kr + 100 kr/månad. Skriv formeln för kostnaden efter x månader.', ratt: '200 + 100x', fel: ['300x', '100 + 200x', '200x + 100'], avsnitt: 'Ställa upp en formel ur text' },
      { t: 'O = 2a + 2b. Beräkna O när a = 7 och b = 5.', ratt: '24', fel: ['12', '14', '26'], avsnitt: 'Sätta in värden' },
      { t: 'A = b · h. Beräkna A när b = 6 och h = 7.', ratt: '42', fel: ['13', '21', '49'], avsnitt: 'Sätta in värden' },
      { t: 'y = 2x + 10. Beräkna y när x = 5.', ratt: '20', fel: ['17', '35', '30'], avsnitt: 'Sätta in värden' },
      { t: 'y = 4x − 3. Beräkna y när x = 3.', ratt: '9', fel: ['12', '1', '33'], avsnitt: 'Sätta in värden' },
    ],
  },
  // ───────── EKONOMI ─────────
  {
    namn: 'Förändringsfaktor', slug: 'ekonomi/forandringsfaktor',
    fragor: [
      { t: 'Vad är förändringsfaktorn för en ökning på 12 %?', ratt: '1,12', fel: ['0,88', '12', '1,012'], avsnitt: 'Räkna ut faktorn' },
      { t: 'Vad är förändringsfaktorn för en minskning på 25 %?', ratt: '0,75', fel: ['1,25', '0,25', '0,975'], avsnitt: 'Räkna ut faktorn' },
      { t: 'En jacka kostar 800 kr. Priset höjs med 10 %. Nytt pris?', ratt: '880 kr', fel: ['810 kr', '88 kr', '720 kr'], avsnitt: 'Räkna ut nytt värde' },
      { t: 'En vara kostar 500 kr och säljs med 30 % rabatt. Reapris?', ratt: '350 kr', fel: ['150 kr', '535 kr', '470 kr'], avsnitt: 'Räkna ut nytt värde' },
      { t: 'Vad är förändringsfaktorn för en ökning på 100 %?', ratt: '2,00', fel: ['1,00', '10', '0,00'], avsnitt: 'Räkna ut faktorn' },
      { t: 'Ett pris på 1 200 kr höjs med 25 %. Nytt pris?', ratt: '1 500 kr', fel: ['1 225 kr', '300 kr', '1 212 kr'], avsnitt: 'Räkna ut nytt värde' },
      { t: 'En mobil kostar 4 000 kr och säljs med 20 % rabatt. Reapris?', ratt: '3 200 kr', fel: ['800 kr', '4 020 kr', '3 920 kr'], avsnitt: 'Räkna ut nytt värde' },
      { t: 'Vad är förändringsfaktorn för en ökning på 5 %?', ratt: '1,05', fel: ['0,95', '5', '1,005'], avsnitt: 'Räkna ut faktorn' },
      { t: 'Vad är förändringsfaktorn för en minskning på 10 %?', ratt: '0,90', fel: ['1,10', '0,10', '0,99'], avsnitt: 'Räkna ut faktorn' },
      { t: 'En vara kostar 200 kr. Priset höjs med 50 %. Nytt pris?', ratt: '300 kr', fel: ['250 kr', '100 kr', '150 kr'], avsnitt: 'Räkna ut nytt värde' },
    ],
  },
  {
    namn: 'Upprepad förändring', slug: 'ekonomi/upprepad-forandring',
    fragor: [
      { t: '3 000 kr växer 4 % per år. Uttryck för värdet efter 5 år?', ratt: '3000 · 1,04⁵', fel: ['3000 · 1,20', '3000 · 1,04 · 5', '3000 · 0,04⁵'], avsnitt: 'Potensen — kort skrivsätt' },
      { t: 'En bil värd 200 000 kr tappar 10 % per år. Uttryck efter 3 år?', ratt: '200000 · 0,90³', fel: ['200000 · 0,70', '200000 · 0,90 · 3', '200000 · 1,10³'], avsnitt: 'Potensen — kort skrivsätt' },
      { t: '1 000 kr växer 5 % per år. Uttryck för värdet efter 2 år?', ratt: '1000 · 1,05²', fel: ['1000 · 1,10', '1000 · 1,05 · 2', '1000 · 0,05²'], avsnitt: 'Potensen — kort skrivsätt' },
      { t: 'Räkna ut: 1 000 · 1,05² (kr).', ratt: '1 102,5', fel: ['1 100', '1 050', '2 000'], avsnitt: 'Så här på räknaren' },
      { t: 'Räkna ut: 2 000 · 1,1³ (kr).', ratt: '2 662', fel: ['2 600', '2 660', '6 000'], avsnitt: 'Så här på räknaren' },
      { t: 'En dator värd 10 000 kr tappar 20 % per år. Uttryck efter 2 år?', ratt: '10000 · 0,80²', fel: ['10000 · 0,60', '10000 · 0,80 · 2', '10000 · 1,20²'], avsnitt: 'Potensen — kort skrivsätt' },
      { t: 'Vilken faktor används vid +3 % per år?', ratt: '1,03', fel: ['0,97', '3', '1,003'], avsnitt: 'När förändringen upprepas' },
      { t: 'Samma faktor 4 gånger i rad skrivs kort som…', ratt: 'faktorn upphöjt till 4', fel: ['faktorn gånger 4', 'faktorn + 4', 'faktorn delat med 4'], avsnitt: 'Potensen — kort skrivsätt' },
      { t: '5 000 kr växer 10 % på ett år. Hur mycket finns då?', ratt: '5 500 kr', fel: ['5 050 kr', '5 100 kr', '6 000 kr'], avsnitt: 'När förändringen upprepas' },
      { t: 'Räkna ut: 2 000 · 0,5² (kr).', ratt: '500', fel: ['1 000', '2 000', '250'], avsnitt: 'Så här på räknaren' },
    ],
  },
  {
    namn: 'Lån, ränta och amortering', slug: 'ekonomi/lan-ranta-amortering',
    fragor: [
      { t: 'Ett lån på 100 000 kr har 5 % årlig ränta. Hur mycket ränta per år?', ratt: '5 000 kr', fel: ['500 kr', '50 000 kr', '105 000 kr'], avsnitt: 'Ränta — priset på lånade pengar' },
      { t: 'Ett lån på 50 000 kr har 4 % årlig ränta. Hur mycket ränta per år?', ratt: '2 000 kr', fel: ['200 kr', '20 000 kr', '52 000 kr'], avsnitt: 'Ränta — priset på lånade pengar' },
      { t: 'Ett lån på 200 000 kr har 3 % årlig ränta. Hur mycket ränta per år?', ratt: '6 000 kr', fel: ['600 kr', '60 000 kr', '206 000 kr'], avsnitt: 'Ränta — priset på lånade pengar' },
      { t: 'Årsräntan på ett lån är 12 000 kr. Hur mycket är det per månad?', ratt: '1 000 kr', fel: ['144 000 kr', '100 kr', '1 200 kr'], avsnitt: 'Månadsränta' },
      { t: 'Årsräntan på ett lån är 6 000 kr. Hur mycket är det per månad?', ratt: '500 kr', fel: ['72 000 kr', '50 kr', '600 kr'], avsnitt: 'Månadsränta' },
      { t: 'Vilken av dessa MINSKAR din skuld?', ratt: 'Amortering', fel: ['Ränta', 'Både ränta och amortering', 'Ingen av dem'], avsnitt: 'Amortering — att betala av skulden' },
      { t: 'Vad är räntan på ett lån?', ratt: 'Priset för att låna pengarna', fel: ['En betalning som minskar skulden', 'Samma sak som amortering', 'Alltid 10 % av skulden'], avsnitt: 'Amortering — att betala av skulden' },
      { t: 'Du betalar 1 000 kr i ränta och amorterar 2 000 kr en månad. Total månadskostnad?', ratt: '3 000 kr', fel: ['1 000 kr', '2 000 kr', '1 500 kr'], avsnitt: 'Total månadskostnad' },
      { t: 'Ett lån på 120 000 kr har 5 % årlig ränta. Hur mycket ränta per månad?', ratt: '500 kr', fel: ['6 000 kr', '100 kr', '600 kr'], avsnitt: 'Månadsränta' },
      { t: 'Ett lån på 80 000 kr har 6 % årlig ränta. Du amorterar 1 000 kr/mån. Månadskostnad?', ratt: '1 400 kr', fel: ['4 800 kr', '5 800 kr', '1 480 kr'], avsnitt: 'Total månadskostnad' },
    ],
  },
  {
    namn: 'Lån och ränta med kalkylblad', slug: 'ekonomi/lan-och-ranta-med-kalkylblad',
    fragor: [
      { t: 'Vad måste en formel i ett kalkylblad börja med?', ratt: '=', fel: ['+', 'ett tal', ':'], avsnitt: 'Formler börjar med =' },
      { t: 'I cell B2 står 10 000. Vad visar =B2*0,05?', ratt: '500', fel: ['10 005', '50', '100'], avsnitt: 'Räkna ränta och nytt värde' },
      { t: 'I cell B2 står 5 000. Vad visar =B2*1,04?', ratt: '5 200', fel: ['5 004', '5 040', '4 960'], avsnitt: 'Räkna ränta och nytt värde' },
      { t: 'I cell B2 står 8 000. Vad visar =B2*0,90?', ratt: '7 200', fel: ['800', '8 090', '7 290'], avsnitt: 'Räkna ränta och nytt värde' },
      { t: 'Lån 100 000 kr, du amorterar 20 000 kr/år. Skuld efter 2 år?', ratt: '60 000 kr', fel: ['80 000 kr', '40 000 kr', '96 000 kr'], avsnitt: 'En lånetabell' },
      { t: 'I cell B5 står 80 000. Räntan är 5 %. Vad visar =B5*0,05?', ratt: '4 000 kr', fel: ['400 kr', '40 000 kr', '84 000 kr'], avsnitt: 'En lånetabell' },
      { t: 'Varför är ett kalkylblad praktiskt för att räkna ränta i många år?', ratt: 'Det räknar om automatiskt', fel: ['Det gör matten svårare', 'Man måste räkna varje år för hand', 'Det fungerar bara för ett år'], avsnitt: 'Låt datorn räkna' },
      { t: 'Vad står B2 för i en formel?', ratt: 'Talet som finns i cell B2', fel: ['Bokstaven B', 'Talet 2', 'En egen formel'], avsnitt: 'Formler börjar med =' },
      { t: 'I cell B2 står 2 000. Vad visar =B2*1,10?', ratt: '2 200', fel: ['2 010', '2 100', '1 800'], avsnitt: 'Räkna ränta och nytt värde' },
      { t: 'I cell B2 står 400. Vad visar =B2*0,25?', ratt: '100', fel: ['10', '425', '16'], avsnitt: 'Räkna ränta och nytt värde' },
    ],
  },
];
