/**
 * Checkpoints — Algebra, delmoment 2–8 (Omläsning Ma1b)
 * ======================================================
 * Skapar ALLA sju återstående checkpoint-quiz i en körning:
 * Faktorisering, Ställa upp och tolka uttryck, Ekvationer, Potensekvationer,
 * Formler, Problemlösning med algebra, Potenser och rötter.
 * 10 frågor per quiz, feldistraktorer byggda på klassiska misstag,
 * träna mer-länk till delmomentsidan vid fel svar.
 *
 * KÖRS SÅ HÄR (en gång, av Simon, inloggad med dbgy.se-kontot):
 *   1. script.google.com → Nytt projekt → klistra in HELA filen → spara
 *   2. Kör funktionen "skapaAllaAlgebraCheckpoints" (tar ~1 minut)
 *   3. Öppna Körlogg (Ctrl+Enter) — där listas PUBLICERAD-URL för alla sju
 *   4. Klistra in hela loggen i chatten med Claude → länkarna läggs in på sidorna
 *
 * EFTERÅT — verifiera per formulär (Apps Script kan inte styra allt):
 *   A. Inställningar → Frågeformulär → "Visa betyg" = "Omedelbart efter varje inlämning"
 *   B. Publicera-knappen → Respondenter = "Alla på AcadeMedia"
 *
 * Tröskel: minst 8/10 rätt = klarad checkpoint. Obegränsade försök (mastery).
 */

const BAS_URL = 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/algebra/';

function skapaAllaAlgebraCheckpoints() {
  const resultat = [];
  for (const cp of CHECKPOINTS) {
    const url = skapaCheckpoint(cp);
    resultat.push(cp.namn + '\n  PUBLICERAD: ' + url.publicerad + '\n  REDIGERA:   ' + url.redigera);
  }
  Logger.log('\n========= ALLA SJU SKAPADE =========\n\n' + resultat.join('\n\n'));
}

function skapaCheckpoint(cp) {
  const form = FormApp.create('Checkpoint — ' + cp.namn + ' (Omläsning Ma1b)');
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
    namn: 'Faktorisering',
    slug: 'faktorisering',
    fragor: [
      { t: 'Faktorisera så långt som möjligt: 4x + 8', ratt: '4(x + 2)', fel: ['2(2x + 4)', '4(x + 8)', 'x(4 + 8)'], avsnitt: 'Hitta den gemensamma faktorn' },
      { t: 'Faktorisera så långt som möjligt: 6x + 9', ratt: '3(2x + 3)', fel: ['3(2x + 9)', '9(x + 3)', '6(x + 3)'], avsnitt: 'Hitta den gemensamma faktorn' },
      { t: 'Vad är största gemensamma faktorn i 10x + 15?', ratt: '5', fel: ['10', '15', '2'], avsnitt: 'Hitta den gemensamma faktorn' },
      { t: 'Faktorisera: x² + 4x', ratt: 'x(x + 4)', fel: ['x(x² + 4)', '4(x² + x)', 'x²(1 + 4)'], avsnitt: 'Bryta ut x' },
      { t: 'Faktorisera så långt som möjligt: 12x − 8', ratt: '4(3x − 2)', fel: ['2(6x − 4)', '4(3x − 8)', '8(4x − 1)'], avsnitt: 'Hitta den gemensamma faktorn' },
      { t: 'Vilket uttryck är LIKA med 5(x + 3)?', ratt: '5x + 15', fel: ['5x + 3', 'x + 15', '5x + 8'], avsnitt: 'Kontrollera alltid' },
      { t: 'Faktorisera: 7x + 7', ratt: '7(x + 1)', fel: ['7(x + 7)', '7x', '14x'], avsnitt: 'Hitta den gemensamma faktorn' },
      { t: 'Faktorisera: x² − 6x', ratt: 'x(x − 6)', fel: ['x(x + 6)', '6(x² − x)', '−6x'], avsnitt: 'Bryta ut x' },
      { t: 'Vad är största gemensamma faktorn i 8x + 12y?', ratt: '4', fel: ['2', '8', '24'], avsnitt: 'Hitta den gemensamma faktorn' },
      { t: 'Stämmer det att 3(2x − 5) = 6x − 15?', ratt: 'Ja — multiplicera in: 3 · 2x = 6x och 3 · (−5) = −15', fel: ['Nej — det ska vara 6x − 5', 'Nej — det ska vara 5x − 15', 'Det går inte att kontrollera'], avsnitt: 'Kontrollera alltid' },
    ],
  },
  {
    namn: 'Ställa upp och tolka uttryck',
    slug: 'stalla-upp-och-tolka-uttryck',
    fragor: [
      { t: 'Skriv "ett tal ökat med 12" som ett uttryck (talet = x)', ratt: 'x + 12', fel: ['12x', 'x − 12', '12 − x'], avsnitt: 'Ordlistan ord → matte' },
      { t: 'Skriv "hälften av x" som ett uttryck', ratt: 'x/2', fel: ['2x', 'x − 2', '2/x'], avsnitt: 'Ordlistan ord → matte' },
      { t: 'En biljett kostar 140 kr. Vad kostar x biljetter?', ratt: '140x', fel: ['140 + x', '140 − x', 'x/140'], avsnitt: 'Variabeln är "det vi inte vet än"' },
      { t: 'Taxi: 50 kr i startavgift plus 18 kr per km. Uttryck för en resa på x km?', ratt: '50 + 18x', fel: ['68x', '50x + 18', '18x − 50'], avsnitt: 'Kostnadsuttryck — fast del + rörlig del' },
      { t: 'Ali är 4 år äldre än Bea, som är x år. Alis ålder?', ratt: 'x + 4', fel: ['4x', 'x − 4', '4 − x'], avsnitt: 'Ordlistan ord → matte' },
      { t: 'Skriv "ett tal minskat med 8" som ett uttryck (talet = x)', ratt: 'x − 8', fel: ['8 − x', 'x + 8', '8x'], avsnitt: 'Ordlistan ord → matte' },
      { t: 'Saldo = 300 − 25x, där x = antal veckor. Vad betyder 25?', ratt: 'Saldot minskar med 25 kr per vecka', fel: ['Du har 25 kr kvar', 'Det tar 25 veckor innan kortet är slut', 'Startbeloppet är 25 kr'], avsnitt: 'Tolka åt andra hållet' },
      { t: 'Du köper x påsar för 22 kr/styck och betalar med en 200-lapp. Uttryck för växeln?', ratt: '200 − 22x', fel: ['22x − 200', '200 + 22x', '178x'], avsnitt: 'Kostnadsuttryck — fast del + rörlig del' },
      { t: 'Tre personer delar lika på x kr. Hur mycket får var och en?', ratt: 'x/3', fel: ['3x', 'x − 3', '3/x'], avsnitt: 'Ordlistan ord → matte' },
      { t: 'Skriv "dubbelt så mycket som y, plus 7" som ett uttryck', ratt: '2y + 7', fel: ['2(y + 7)', '7y + 2', '2y − 7'], avsnitt: 'Ordlistan ord → matte' },
    ],
  },
  {
    namn: 'Ekvationer',
    slug: 'ekvationer',
    fragor: [
      { t: 'Lös: x + 9 = 16', ratt: 'x = 7', fel: ['x = 25', 'x = −7', 'x = 9'], avsnitt: 'Balansmetoden — vågen' },
      { t: 'Lös: 6x = 42', ratt: 'x = 7', fel: ['x = 36', 'x = 48', 'x = 252'], avsnitt: 'Balansmetoden — vågen' },
      { t: 'Lös: 2x + 5 = 19', ratt: 'x = 7', fel: ['x = 12', 'x = 24', 'x = 9,5'], avsnitt: 'Strategi: skala av i rätt ordning' },
      { t: 'Lös: 3x − 4 = 11', ratt: 'x = 5', fel: ['x = 7', 'x = 15', 'x = 2,3'], avsnitt: 'Strategi: skala av i rätt ordning' },
      { t: 'Lös: 5x − 2 = 3x + 10', ratt: 'x = 6', fel: ['x = 4', 'x = 12', 'x = 1'], avsnitt: 'x i båda leden' },
      { t: 'Lös: 2(x + 3) = 14', ratt: 'x = 4', fel: ['x = 7', 'x = 5,5', 'x = 10'], avsnitt: 'Strategi: skala av i rätt ordning' },
      { t: 'Lös: x/4 = 8', ratt: 'x = 32', fel: ['x = 2', 'x = 12', 'x = 4'], avsnitt: 'Nämnare' },
      { t: 'Lös: x/5 + 3 = 7', ratt: 'x = 20', fel: ['x = 2', 'x = 50', 'x = 35'], avsnitt: 'Nämnare' },
      { t: 'Vilket är det smartaste FÖRSTA steget för 4x + 7 = 23?', ratt: 'Subtrahera 7 från båda leden', fel: ['Dela båda leden med 4', 'Addera 7 till båda leden', 'Subtrahera 23 från båda leden'], avsnitt: 'Strategi: skala av i rätt ordning' },
      { t: 'Du har löst en ekvation och fått x = 6. Hur kontrollerar du svaret?', ratt: 'Sätt in 6 i ekvationen och se att båda leden blir lika', fel: ['Lös ekvationen en gång till', 'Multiplicera båda leden med 6', 'Det går inte att kontrollera en ekvation'], avsnitt: 'Kontrollen — ditt hemliga vapen' },
    ],
  },
  {
    namn: 'Potensekvationer',
    slug: 'potensekvationer',
    fragor: [
      { t: 'Lös: x² = 49', ratt: 'x = 7 eller x = −7', fel: ['x = 7 (enda lösningen)', 'x = 24,5', 'x = ±24,5'], avsnitt: 'x² — kvadraten och den gömda lösningen' },
      { t: 'Lös: x² = 100', ratt: 'x = ±10', fel: ['x = 10 (enda lösningen)', 'x = 50', 'x = ±50'], avsnitt: 'x² — kvadraten och den gömda lösningen' },
      { t: 'Lös: x³ = 8', ratt: 'x = 2', fel: ['x = ±2', 'x = 4', 'x = 24'], avsnitt: 'x³ — kuben följer tecknet' },
      { t: 'Lös: x³ = 125', ratt: 'x = 5', fel: ['x = ±5', 'x = 25', 'x = 41,7'], avsnitt: 'x³ — kuben följer tecknet' },
      { t: 'Hur många lösningar har x² = 81?', ratt: '2', fel: ['1', '0', '81'], avsnitt: 'Antal lösningar — det frågas om på prov' },
      { t: 'Hur många lösningar har x³ = 27?', ratt: '1', fel: ['2', '3', '0'], avsnitt: 'Antal lösningar — det frågas om på prov' },
      { t: 'Hur många lösningar har x² = −16?', ratt: '0 — ekvationen saknar lösning', fel: ['2', '1 (x = −4)', 'Oändligt många'], avsnitt: 'Antal lösningar — det frågas om på prov' },
      { t: 'Lös: x² = 0,25', ratt: 'x = ±0,5', fel: ['x = 0,5 (enda lösningen)', 'x = ±0,125', 'x = 0,0625'], avsnitt: 'x² — kvadraten och den gömda lösningen' },
      { t: 'Varför har x² = 25 TVÅ lösningar?', ratt: 'Både 5² och (−5)² blir 25', fel: ['Alla ekvationer har två lösningar', 'Man ska alltid dubbla svaret', '25 går att dela med 5'], avsnitt: 'x² — kvadraten och den gömda lösningen' },
      { t: 'Vilken ekvation SAKNAR lösning?', ratt: 'x² = −9', fel: ['x² = 9', 'x³ = −27', 'x³ = 9'], avsnitt: 'Antal lösningar — det frågas om på prov' },
    ],
  },
  {
    namn: 'Formler',
    slug: 'formler',
    fragor: [
      { t: 's = v · t. Beräkna s när v = 70 och t = 3.', ratt: '210', fel: ['73', '23', '700'], avsnitt: 'Använda en formel = byta ut och räkna' },
      { t: 'O = 2a + 2b. Beräkna O när a = 5 och b = 8.', ratt: '26', fel: ['13', '40', '80'], avsnitt: 'Använda en formel = byta ut och räkna' },
      { t: 'K = 200 + 45x. Beräkna K när x = 4.', ratt: '380', fel: ['245', '980', '425'], avsnitt: 'Använda en formel = byta ut och räkna' },
      { t: 'A = b · h/2. Beräkna A när b = 10 och h = 6.', ratt: '30', fel: ['60', '16', '8'], avsnitt: 'Formler du möter ofta' },
      { t: 'K = 150 + 35x. Hur stort är x när K = 325?', ratt: 'x = 5', fel: ['x = 9', 'x = 175', 'x = 3'], avsnitt: 'Räkna baklänges' },
      { t: 'Ett gym kostar 400 kr i start och 250 kr per månad. Formeln för kostnaden efter x månader?', ratt: 'K = 400 + 250x', fel: ['K = 650x', 'K = 400x + 250', 'K = 250 − 400x'], avsnitt: 'Ställa upp en egen formel' },
      { t: 'Kvadratens omkrets: P = 4s. Beräkna P när s = 7.', ratt: '28', fel: ['11', '49', '74'], avsnitt: 'Använda en formel = byta ut och räkna' },
      { t: 'Hyrbil: 300 kr per dag plus 2 kr per km. Uttryck för EN dag och x km?', ratt: '300 + 2x', fel: ['302x', '300x + 2', '600x'], avsnitt: 'Ställa upp en egen formel' },
      { t: 's = v · t. Beräkna s när v = 90 och t = 2.', ratt: '180', fel: ['92', '45', '920'], avsnitt: 'Använda en formel = byta ut och räkna' },
      { t: 'Vad gör du FÖRST när du använder en formel?', ratt: 'Byter ut bokstäverna jag känner mot deras tal', fel: ['Löser ut x oavsett vad som söks', 'Förenklar bort alla bokstäver', 'Multiplicerar båda leden med 2'], avsnitt: 'Använda en formel = byta ut och räkna' },
    ],
  },
  {
    namn: 'Problemlösning med algebra',
    slug: 'problemlosning-med-algebra',
    fragor: [
      { t: 'Lisa är 5 år äldre än Omar, som är x år. Tillsammans är de 27. Vilken ekvation stämmer?', ratt: 'x + (x + 5) = 27', fel: ['x + 5x = 27', 'x · (x + 5) = 27', 'x + 5 = 27'], avsnitt: 'Receptet — fyra steg, alltid samma' },
      { t: '…och hur gammal är Omar? (x + (x + 5) = 27)', ratt: '11 år', fel: ['16 år', '13,5 år', '22 år'], avsnitt: 'Receptet — fyra steg, alltid samma' },
      { t: 'Tre lika dyra tröjor plus 50 kr frakt kostar 500 kr. Vilken ekvation stämmer?', ratt: '3x + 50 = 500', fel: ['3x = 500 + 50', 'x/3 + 50 = 500', '50x + 3 = 500'], avsnitt: 'Receptet — fyra steg, alltid samma' },
      { t: '…och vad kostar en tröja? (3x + 50 = 500)', ratt: '150 kr', fel: ['183 kr', '450 kr', '167 kr'], avsnitt: 'Receptet — fyra steg, alltid samma' },
      { t: 'Två tal som kommer direkt efter varandra har summan 37. Vilket är det minsta talet?', ratt: '18', fel: ['19', '18,5', '17'], avsnitt: 'Receptet — fyra steg, alltid samma' },
      { t: 'Ett tal gångas med 5 och minskas sedan med 8. Resultatet är 32. Vilket är talet?', ratt: '8', fel: ['4,8', '40', '6'], avsnitt: 'Receptet — fyra steg, alltid samma' },
      { t: 'Skidhyra: 95 kr fast plus 40 kr per dag. Du betalar 295 kr. Hur många dagar?', ratt: '5', fel: ['7', '200', '3'], avsnitt: 'Receptet — fyra steg, alltid samma' },
      { t: 'Vad är det smartaste FÖRSTA steget i ett textproblem?', ratt: 'Bestämma vad x ska stå för', fel: ['Gissa ett svar och testa', 'Multiplicera alla tal i texten', 'Räkna ut 10 % av talen'], avsnitt: 'Receptet — fyra steg, alltid samma' },
      { t: 'Mio och Ali delar på 84 kr så att Mio får dubbelt så mycket som Ali (x kr). Vilken ekvation stämmer?', ratt: 'x + 2x = 84', fel: ['2x = 84', 'x + x = 84', 'x · 2x = 84'], avsnitt: 'Receptet — fyra steg, alltid samma' },
      { t: '…och hur mycket får Ali? (x + 2x = 84)', ratt: '28 kr', fel: ['56 kr', '42 kr', '21 kr'], avsnitt: 'Den lömskaste fällan: fel fråga' },
    ],
  },
  {
    namn: 'Potenser och rötter',
    slug: 'potenser-och-rotter',
    fragor: [
      { t: 'Beräkna: 2⁴', ratt: '16', fel: ['8', '6', '24'], avsnitt: 'Potenser — upprepad multiplikation' },
      { t: 'Beräkna: 5²', ratt: '25', fel: ['10', '7', '52'], avsnitt: 'Potenser — upprepad multiplikation' },
      { t: 'Förenkla: a³ · a⁵', ratt: 'a⁸', fel: ['a¹⁵', 'a²', '2a⁸'], avsnitt: 'Potenslagarna — de står på formelbladet' },
      { t: 'Förenkla: b⁹ / b³', ratt: 'b⁶', fel: ['b³', 'b¹²', '3b'], avsnitt: 'Potenslagarna — de står på formelbladet' },
      { t: 'Förenkla: (a²)⁴', ratt: 'a⁸', fel: ['a⁶', 'a¹⁶', 'a²'], avsnitt: 'Potenslagarna — de står på formelbladet' },
      { t: 'Beräkna: 7⁰', ratt: '1', fel: ['0', '7', '70'], avsnitt: 'Potenslagarna — de står på formelbladet' },
      { t: 'Beräkna: √64', ratt: '8', fel: ['32', '4', '±8'], avsnitt: 'Rötter — baklängespotensen' },
      { t: 'Beräkna: √100 + √16', ratt: '14', fel: ['√116', '58', '26'], avsnitt: 'Rötter — baklängespotensen' },
      { t: 'Beräkna: 10³', ratt: '1 000', fel: ['30', '100', '10 000'], avsnitt: 'Potenser — upprepad multiplikation' },
      { t: 'Vilken potenslag använder du för a⁴ · a²?', ratt: 'Addera exponenterna: a⁴⁺² = a⁶', fel: ['Multiplicera exponenterna: a⁸', 'Subtrahera exponenterna: a²', 'Multiplicera baserna: 2a⁶'], avsnitt: 'Potenslagarna — de står på formelbladet' },
    ],
  },
];
