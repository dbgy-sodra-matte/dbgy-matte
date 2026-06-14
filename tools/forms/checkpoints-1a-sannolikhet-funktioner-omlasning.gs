/**
 * Checkpoints — Sannolikhet (3) + Funktioner (9), Omläsning Ma1a
 * =============================================================
 * Skapar tolv checkpoint-quiz i en körning. 10 frågor per quiz,
 * feldistraktorer på klassiska misstag, träna mer-länk till rätt
 * Ma1a-delmomentsida vid fel svar.
 *
 * KÖRS SÅ HÄR (en gång, av Simon, inloggad med dbgy.se-kontot):
 *   1. script.google.com → Nytt projekt → klistra in HELA filen → spara
 *   2. Kör funktionen "skapaSannolikhetFunktionerCheckpoints1a" (~1-2 min)
 *   3. Öppna Körlogg (Ctrl+Enter) → alla tolv PUBLICERAD-URL:er listas
 *   4. Klistra in loggen i chatten med Claude → länkarna läggs in på sidorna
 *
 * EFTERÅT — per formulär (Apps Script kan inte styra detta):
 *   A. Inställningar → "Visa betyg" = "Omedelbart efter varje inlämning"
 *   B. Publicera → Respondenter = "Alla på AcadeMedia"
 *
 * Tröskel: minst 8/10 = klarad. Obegränsade försök (mastery).
 * OBS: grafavläsnings-delmomenten formuleras med givna punkter i text
 * (Google Forms kan inte visa sajtens SVG-grafer).
 */

const BAS_URL = 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/';

function skapaSannolikhetFunktionerCheckpoints1a() {
  const resultat = [];
  for (const cp of CHECKPOINTS) {
    const url = skapaCheckpoint(cp);
    resultat.push(cp.namn + '\n  PUBLICERAD: ' + url.publicerad + '\n  REDIGERA:   ' + url.redigera);
  }
  Logger.log('\n===== ALLA TOLV (SANNOLIKHET + FUNKTIONER) SKAPADE =====\n\n' + resultat.join('\n\n'));
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
  // ───────── SANNOLIKHET ─────────
  {
    namn: 'Sannolikhet (grunder)', slug: 'sannolikhet/sannolikhet-grunder',
    fragor: [
      { t: 'Du slår en tärning. Sannolikheten att få en 4:a?', ratt: '1/6', fel: ['1/4', '4/6', '1/2'], avsnitt: 'Grundformeln' },
      { t: 'Du slår en tärning. Sannolikheten att få ett jämnt tal?', ratt: '1/2', fel: ['1/3', '1/6', '2/3'], avsnitt: 'Grundformeln' },
      { t: 'En påse har 10 kulor, 4 är gröna. Sannolikheten att dra en grön?', ratt: '2/5', fel: ['4/6', '1/4', '10/4'], avsnitt: 'Grundformeln' },
      { t: 'En påse har 20 kulor, 5 är röda. Sannolikheten att dra en röd?', ratt: '1/4', fel: ['5/15', '1/5', '20/5'], avsnitt: 'Grundformeln' },
      { t: 'Du slår en tärning. Sannolikheten att få ett tal större än 4?', ratt: '1/3', fel: ['2/3', '1/6', '4/6'], avsnitt: 'Grundformeln' },
      { t: 'En klass har 25 elever, 10 är pojkar. Sannolikheten att en slumpvald är pojke?', ratt: '2/5', fel: ['10/15', '1/25', '5/2'], avsnitt: 'Grundformeln' },
      { t: 'Ett lyckohjul har 8 lika stora fält, 1 ger vinst. Sannolikheten att vinna?', ratt: '1/8', fel: ['1/7', '7/8', '8'], avsnitt: 'Grundformeln' },
      { t: 'Vilken formel ger sannolikheten?', ratt: 'gynnsamma utfall / möjliga utfall', fel: ['möjliga / gynnsamma', 'gynnsamma · möjliga', 'möjliga − gynnsamma'], avsnitt: 'Grundformeln' },
      { t: 'Sannolikheten att få krona på en slant?', ratt: '1/2', fel: ['1', '0', '1/4'], avsnitt: 'Grundformeln' },
      { t: 'En påse har 12 kulor, 3 är svarta. Sannolikheten att dra en svart?', ratt: '1/4', fel: ['3/9', '12/3', '1/3'], avsnitt: 'Grundformeln' },
    ],
  },
  {
    namn: 'Beroende sannolikhet', slug: 'sannolikhet/beroende-sannolikhet',
    fragor: [
      { t: 'En påse har 5 kulor. Du drar en och behåller den. Hur många kulor är kvar?', ratt: '4', fel: ['5', '6', '1'], avsnitt: 'När antalet ändras' },
      { t: 'En påse har 6 kulor, 4 är blå. Du drar en blå och behåller den. Hur många blå är kvar?', ratt: '3', fel: ['4', '5', '2'], avsnitt: 'När antalet ändras' },
      { t: 'Samma påse (6 kulor): efter att du dragit en kula, hur många kulor finns kvar totalt?', ratt: '5', fel: ['6', '4', '3'], avsnitt: 'När antalet ändras' },
      { t: 'Det finns 3 blå kvar av totalt 5 kulor. Sannolikheten att nästa är blå?', ratt: '3/5', fel: ['4/6', '3/6', '1/5'], avsnitt: 'Räkna den andra dragningen' },
      { t: 'En påse har 4 kulor, 2 röda. Du drar en röd och behåller. Sannolikheten att nästa är röd?', ratt: '1/3', fel: ['2/4', '1/4', '2/3'], avsnitt: 'Räkna den andra dragningen' },
      { t: 'En påse har 5 kulor, 2 röda. Du drar två utan återläggning. Sannolikheten att BÅDA är röda?', ratt: '1/10', fel: ['4/25', '2/5', '1/5'], avsnitt: 'Sannolikheten för båda — multiplicera' },
      { t: 'En påse har 6 kulor, 3 gröna. Du drar två utan återläggning. Sannolikheten att båda är gröna?', ratt: '1/5', fel: ['1/4', '1/2', '1/6'], avsnitt: 'Sannolikheten för båda — multiplicera' },
      { t: 'Hur räknar man sannolikheten för att BÅDA dragningarna lyckas?', ratt: 'Multiplicera sannolikheterna', fel: ['Addera dem', 'Subtrahera dem', 'Dividera dem'], avsnitt: 'Sannolikheten för båda — multiplicera' },
      { t: 'När du drar utan att lägga tillbaka, vad ändras inför nästa dragning?', ratt: 'Både antalet kvar och hur många av färgen', fel: ['Bara färgen', 'Bara totalen', 'Ingenting'], avsnitt: 'När antalet ändras' },
      { t: 'En påse har 10 kulor, 5 gröna. Du drar en grön och behåller. Sannolikheten att nästa är grön?', ratt: '4/9', fel: ['5/10', '5/9', '4/10'], avsnitt: 'Räkna den andra dragningen' },
    ],
  },
  {
    namn: 'Komplementhändelse', slug: 'sannolikhet/komplementhandelse',
    fragor: [
      { t: 'P(regn) = 0,3. Vad är P(inte regn)?', ratt: '0,7', fel: ['0,3', '1,3', '0,07'], avsnitt: 'Med decimaltal' },
      { t: 'P(6:a på tärning) = 1/6. Vad är P(inte 6:a)?', ratt: '5/6', fel: ['1/6', '6/6', '1/5'], avsnitt: 'Med bråk' },
      { t: 'P(vinst) = 0,25. Vad är P(ingen vinst)?', ratt: '0,75', fel: ['0,25', '1,25', '0,075'], avsnitt: 'Med decimaltal' },
      { t: 'P(bussen i tid) = 0,9. Vad är P(inte i tid)?', ratt: '0,1', fel: ['0,9', '1,9', '0,01'], avsnitt: 'Med decimaltal' },
      { t: 'Du slår en tärning. P(inte en 1:a)?', ratt: '5/6', fel: ['1/6', '1/5', '6/6'], avsnitt: 'Med bråk' },
      { t: 'En påse: P(röd) = 0,4. Vad är P(inte röd)?', ratt: '0,6', fel: ['0,4', '1,4', '0,04'], avsnitt: 'Med decimaltal' },
      { t: 'P(godkänt på prov) = 0,85. Vad är P(inte godkänt)?', ratt: '0,15', fel: ['0,85', '1,15', '0,015'], avsnitt: 'Med decimaltal' },
      { t: 'Hur räknar man komplementhändelsen?', ratt: '1 − P(A)', fel: ['P(A) − 1', '1 + P(A)', 'P(A) / 2'], avsnitt: 'Motsatsen till en händelse' },
      { t: 'Vad är summan av en händelse och dess komplement?', ratt: '1', fel: ['0', '2', 'Beror på händelsen'], avsnitt: 'Motsatsen till en händelse' },
      { t: 'P(udda tal på tärning) = 1/2. Vad är P(inte udda)?', ratt: '1/2', fel: ['1/6', '1/3', '1'], avsnitt: 'Med bråk' },
    ],
  },
  // ───────── FUNKTIONER ─────────
  {
    namn: 'Värdetabell', slug: 'funktioner/vardetabell',
    fragor: [
      { t: 'y = 2x + 1. Vad är y när x = 3?', ratt: '7', fel: ['6', '9', '5'], avsnitt: 'En funktion är en regel' },
      { t: 'y = 2x + 1. Vad är y när x = 0?', ratt: '1', fel: ['0', '2', '3'], avsnitt: 'En funktion är en regel' },
      { t: 'y = 3x. Vad är y när x = 4?', ratt: '12', fel: ['7', '34', '1'], avsnitt: 'En funktion är en regel' },
      { t: 'y = x + 5. Vad är y när x = 6?', ratt: '11', fel: ['30', '1', '56'], avsnitt: 'En funktion är en regel' },
      { t: 'y = 4x − 2. Vad är y när x = 3?', ratt: '10', fel: ['12', '14', '5'], avsnitt: 'En funktion är en regel' },
      { t: 'y = 5x. Vad är y när x = 0?', ratt: '0', fel: ['5', '50', '1'], avsnitt: 'En funktion är en regel' },
      { t: 'y = 2x + 3. Vad är y när x = 5?', ratt: '13', fel: ['10', '25', '16'], avsnitt: 'En funktion är en regel' },
      { t: 'I en funktion: hur många y-värden ger ett visst x?', ratt: 'Exakt ett', fel: ['Flera', 'Inget', 'Alltid noll'], avsnitt: 'Ett x → ett y' },
      { t: 'y = x + 4. Vad är y när x = 0?', ratt: '4', fel: ['0', '1', '5'], avsnitt: 'En funktion är en regel' },
      { t: 'y = 3x − 1. Vad är y när x = 2?', ratt: '5', fel: ['6', '7', '4'], avsnitt: 'En funktion är en regel' },
    ],
  },
  {
    namn: 'Koordinatsystem', slug: 'funktioner/koordinatsystem',
    fragor: [
      { t: 'Punkten (4, 7). Vad är x-koordinaten?', ratt: '4', fel: ['7', '11', '28'], avsnitt: 'Koordinatpar (x, y)' },
      { t: 'Punkten (4, 7). Vad är y-koordinaten?', ratt: '7', fel: ['4', '11', '3'], avsnitt: 'Koordinatpar (x, y)' },
      { t: 'En punkt har x = 2 och y = 5. Skriv som koordinatpar.', ratt: '(2, 5)', fel: ['(5, 2)', '(2, 2)', '(5, 5)'], avsnitt: 'Koordinatpar (x, y)' },
      { t: 'Vilket tal skrivs först i ett koordinatpar?', ratt: 'x-värdet', fel: ['y-värdet', 'Det större talet', 'Det mindre talet'], avsnitt: 'Koordinatpar (x, y)' },
      { t: 'Punkten (0, 6) ligger på vilken axel?', ratt: 'y-axeln', fel: ['x-axeln', 'Ingen axel', 'Båda'], avsnitt: 'Två axlar' },
      { t: 'En punkt ligger 3 steg åt höger och 4 steg upp. Skriv som koordinatpar.', ratt: '(3, 4)', fel: ['(4, 3)', '(3, 3)', '(7, 7)'], avsnitt: 'Läsa av en punkt' },
      { t: 'Vad kallas punkten (0, 0) där axlarna korsar varandra?', ratt: 'Origo', fel: ['Toppen', 'Mittlinjen', 'Nollpunkten x'], avsnitt: 'Två axlar' },
      { t: 'Vilken är x-axeln?', ratt: 'Den vågräta axeln', fel: ['Den lodräta axeln', 'Den sneda axeln', 'Mittlinjen'], avsnitt: 'Två axlar' },
      { t: 'Punkten (5, 0) ligger på vilken axel?', ratt: 'x-axeln', fel: ['y-axeln', 'Ingen axel', 'Båda'], avsnitt: 'Läsa av en punkt' },
      { t: 'Punkten (2, 8). Vad är y-koordinaten?', ratt: '8', fel: ['2', '10', '16'], avsnitt: 'Koordinatpar (x, y)' },
    ],
  },
  {
    namn: 'Grafer', slug: 'funktioner/grafer',
    fragor: [
      { t: 'y = x + 2. Vilken punkt får du när x = 1?', ratt: '(1, 3)', fel: ['(1, 2)', '(3, 1)', '(1, 1)'], avsnitt: 'Från funktion till punkter' },
      { t: 'y = 2x. Vilken punkt får du när x = 3?', ratt: '(3, 6)', fel: ['(6, 3)', '(3, 3)', '(3, 5)'], avsnitt: 'Från funktion till punkter' },
      { t: 'y = 3x − 1. Vilken punkt får du när x = 2?', ratt: '(2, 5)', fel: ['(2, 6)', '(5, 2)', '(2, 7)'], avsnitt: 'Från funktion till punkter' },
      { t: 'Vad blir grafen till en linjär funktion?', ratt: 'En rät linje', fel: ['En böjd kurva', 'En cirkel', 'En enda prick'], avsnitt: 'Linjära funktioner ger räta linjer' },
      { t: 'Ligger punkten (2, 4) på linjen y = 2x?', ratt: 'Ja, 2 · 2 = 4', fel: ['Nej', 'Bara om x = 4', 'Går inte att veta'], avsnitt: 'Ligger en punkt på grafen?' },
      { t: 'Ligger punkten (3, 5) på linjen y = 2x?', ratt: 'Nej, 2 · 3 = 6', fel: ['Ja', 'Bara om y = 3', 'Går inte att veta'], avsnitt: 'Ligger en punkt på grafen?' },
      { t: 'y = x + 1. Vilken punkt får du när x = 4?', ratt: '(4, 5)', fel: ['(4, 4)', '(5, 4)', '(4, 6)'], avsnitt: 'Från funktion till punkter' },
      { t: 'Hur många punkter behöver du minst för att rita en rät linje?', ratt: '2', fel: ['1', '3', '10'], avsnitt: 'Linjära funktioner ger räta linjer' },
      { t: 'y = 2x + 1. Vilken punkt får du när x = 2?', ratt: '(2, 5)', fel: ['(2, 4)', '(5, 2)', '(2, 6)'], avsnitt: 'Från funktion till punkter' },
      { t: 'Varje rad i en värdetabell blir vad i grafen?', ratt: 'En punkt', fel: ['En hel linje', 'En kurva', 'Ett x-värde'], avsnitt: 'Grafen = funktionen ritad' },
    ],
  },
  {
    namn: 'Linjära funktioner', slug: 'funktioner/linjara-funktioner',
    fragor: [
      { t: 'I y = 3x + 2, vad är m (startvärdet)?', ratt: '2', fel: ['3', '5', '6'], avsnitt: 'm = startvärdet' },
      { t: 'I y = 3x + 2, vad är k (lutningen)?', ratt: '3', fel: ['2', '5', '6'], avsnitt: 'k = lutningen' },
      { t: 'I y = 5x − 1, vad är m (startvärdet)?', ratt: '−1', fel: ['5', '1', '4'], avsnitt: 'm = startvärdet' },
      { t: 'y = 3x + 2. Vad är y när x = 4?', ratt: '14', fel: ['18', '20', '9'], avsnitt: 'Räkna ut y' },
      { t: 'y = 2x + 7. Vad är y när x = 0?', ratt: '7', fel: ['0', '9', '14'], avsnitt: 'Räkna ut y' },
      { t: 'y = 4x − 3. Vad är y när x = 2?', ratt: '5', fel: ['8', '11', '2'], avsnitt: 'Räkna ut y' },
      { t: 'Vad står k för i y = kx + m?', ratt: 'Lutningen', fel: ['Startvärdet', 'x-värdet', 'y-värdet'], avsnitt: 'k = lutningen' },
      { t: 'Vad står m för i y = kx + m?', ratt: 'Startvärdet (där linjen skär y-axeln)', fel: ['Lutningen', 'x-värdet', 'Antalet lösningar'], avsnitt: 'm = startvärdet' },
      { t: 'Vilken är formen för en linjär funktion?', ratt: 'y = kx + m', fel: ['y = C · a^x', 'y = x²', 'y = ax'], avsnitt: 'Formen y = kx + m' },
      { t: 'y = x + 8. Vad är y när x = 2?', ratt: '10', fel: ['9', '16', '11'], avsnitt: 'Räkna ut y' },
    ],
  },
  {
    namn: 'Läsa av grafer', slug: 'funktioner/lasa-av-grafer',
    fragor: [
      { t: 'En linje går genom (0, 1) och (3, 7) — det är y = 2x + 1. Vad är y när x = 3?', ratt: '7', fel: ['1', '3', '4'], avsnitt: 'Hitta y när x är givet' },
      { t: 'Linjen y = 2x + 1. Vid vilket x är y = 5?', ratt: '2', fel: ['5', '3', '1'], avsnitt: 'Hitta x när y är givet' },
      { t: 'Linjen y = 2x + 1. Var skär den y-axeln?', ratt: '1', fel: ['2', '0', '3'], avsnitt: 'Var skär grafen y-axeln?' },
      { t: 'En linje går genom (0, 2) och (4, 6) — y = x + 2. Vad är y när x = 4?', ratt: '6', fel: ['2', '4', '8'], avsnitt: 'Hitta y när x är givet' },
      { t: 'Var skär en graf y-axeln?', ratt: 'Vid x = 0', fel: ['Vid y = 0', 'Vid x = 1', 'I högsta punkten'], avsnitt: 'Var skär grafen y-axeln?' },
      { t: 'Linjen y = 3x. Vad är y när x = 2?', ratt: '6', fel: ['3', '5', '9'], avsnitt: 'Hitta y när x är givet' },
      { t: 'Linjen y = 3x. Vid vilket x är y = 9?', ratt: '3', fel: ['9', '27', '6'], avsnitt: 'Hitta x när y är givet' },
      { t: 'Hur hittar du y-värdet för ett givet x på en graf?', ratt: 'Gå upp från x till linjen, sedan vänster till y-axeln', fel: ['Gå höger från x', 'Gå ner från x', 'Läs av högsta punkten'], avsnitt: 'Hitta y när x är givet' },
      { t: 'En linje går genom (0, 5) och (1, 7). Vad är y när x = 0?', ratt: '5', fel: ['7', '0', '6'], avsnitt: 'Var skär grafen y-axeln?' },
      { t: 'En linje går genom (0, 0) och (2, 8) — y = 4x. Vad är y när x = 2?', ratt: '8', fel: ['2', '4', '10'], avsnitt: 'Hitta y när x är givet' },
    ],
  },
  {
    namn: 'Funktionsbegreppet f(x)', slug: 'funktioner/funktionsbegreppet-fx',
    fragor: [
      { t: 'f(x) = 2x + 1. Beräkna f(3).', ratt: '7', fel: ['6', '9', '5'], avsnitt: 'Beräkna f(a)' },
      { t: 'f(x) = 3x − 2. Beräkna f(4).', ratt: '10', fel: ['12', '14', '5'], avsnitt: 'Beräkna f(a)' },
      { t: 'f(x) = x + 5. Beräkna f(0).', ratt: '5', fel: ['0', '1', '6'], avsnitt: 'Beräkna f(a)' },
      { t: 'f(x) = 5x − 3. Beräkna f(2).', ratt: '7', fel: ['13', '10', '4'], avsnitt: 'Beräkna f(a)' },
      { t: 'f(x) = 2x + 1. Vid vilket x är f(x) = 11?', ratt: '5', fel: ['23', '6', '11'], avsnitt: 'Lösa f(x) = b' },
      { t: 'f(x) = 4x. Vid vilket x är f(x) = 20?', ratt: '5', fel: ['80', '16', '24'], avsnitt: 'Lösa f(x) = b' },
      { t: 'f(x) = 2x + 3. Vid vilket x är f(x) = 13?', ratt: '5', fel: ['29', '8', '6'], avsnitt: 'Lösa f(x) = b' },
      { t: 'Vad betyder skrivsättet f(x)?', ratt: 'Funktionens värde vid x — samma som y', fel: ['f gånger x', 'Alltid större än x', 'x delat med f'], avsnitt: 'f(x) — ett namn för y' },
      { t: 'f(x) = 3x. Beräkna f(5).', ratt: '15', fel: ['8', '35', '53'], avsnitt: 'Beräkna f(a)' },
      { t: 'f(x) = 2x. Beräkna f(7).', ratt: '14', fel: ['9', '27', '72'], avsnitt: 'Beräkna f(a)' },
    ],
  },
  {
    namn: 'Exponentialekvationer', slug: 'funktioner/exponentialekvationer',
    fragor: [
      { t: 'I y = 800 · 1,5^x, vad är startvärdet C?', ratt: '800', fel: ['1,5', '600', '80'], avsnitt: 'Läsa av C och a' },
      { t: 'I y = 800 · 1,5^x, vad är förändringsfaktorn a?', ratt: '1,5', fel: ['800', '600', '0,5'], avsnitt: 'Läsa av C och a' },
      { t: 'Växer eller avtar funktionen y = 1000 · 0,8^x?', ratt: 'Avtar', fel: ['Växer', 'Konstant', 'Går inte att veta'], avsnitt: 'Växer eller avtar?' },
      { t: 'Växer eller avtar funktionen y = 200 · 1,1^x?', ratt: 'Växer', fel: ['Avtar', 'Konstant', 'Går inte att veta'], avsnitt: 'Växer eller avtar?' },
      { t: 'Beräkna y i y = 100 · 2^x när x = 3.', ratt: '800', fel: ['600', '200', '106'], avsnitt: 'Beräkna y' },
      { t: 'Beräkna y i y = 50 · 3^x när x = 2.', ratt: '450', fel: ['300', '150', '56'], avsnitt: 'Beräkna y' },
      { t: 'Vad är startvärdet (y när x = 0) i y = 600 · 1,4^x?', ratt: '600', fel: ['840', '1', '0'], avsnitt: 'Beräkna y' },
      { t: 'Vad blir a^0 (vad som helst upphöjt till 0)?', ratt: '1', fel: ['0', 'a', 'Beror på a'], avsnitt: 'Beräkna y' },
      { t: 'Vilken är formen för en exponentialfunktion?', ratt: 'y = C · a^x', fel: ['y = kx + m', 'y = x²', 'y = ax + b'], avsnitt: 'Något som ändras med samma faktor varje steg' },
      { t: 'Vad betyder a > 1 i y = C · a^x?', ratt: 'Funktionen växer', fel: ['Funktionen avtar', 'Funktionen är konstant', 'Startvärdet är negativt'], avsnitt: 'Växer eller avtar?' },
    ],
  },
  {
    namn: 'Exponentialekvationer 2', slug: 'funktioner/exponentialekvationer-2',
    fragor: [
      { t: '200 bakterier dubblas varje timme (y = 200 · 2^x). Hur många efter 3 timmar?', ratt: '1 600', fel: ['1 200', '600', '206'], avsnitt: 'Bakterier som dubblas' },
      { t: 'Beräkna y i y = 300 · 2^x när x = 2.', ratt: '1 200', fel: ['600', '900', '304'], avsnitt: 'Samma formel, verkliga situationer' },
      { t: 'Beräkna y i y = 80 · 2^x när x = 4.', ratt: '1 280', fel: ['640', '320', '88'], avsnitt: 'Samma formel, verkliga situationer' },
      { t: 'Beräkna y i y = 100 · 3^x när x = 2.', ratt: '900', fel: ['600', '300', '106'], avsnitt: 'Samma formel, verkliga situationer' },
      { t: '1 000 kr med 5 % ränta (y = 1000 · 1,05^x). Hur mycket vid x = 0?', ratt: '1 000 kr', fel: ['1 050 kr', '1 kr', '0 kr'], avsnitt: 'Samma formel, verkliga situationer' },
      { t: 'En kurva sjunker mot noll när x ökar. Växer eller avtar funktionen?', ratt: 'Avtar', fel: ['Växer', 'Konstant', 'Går inte att veta'], avsnitt: 'Växer eller avtar — kolla grafen' },
      { t: 'En kurva stiger brant uppåt när x ökar. Växer eller avtar funktionen?', ratt: 'Växer', fel: ['Avtar', 'Konstant', 'Går inte att veta'], avsnitt: 'Växer eller avtar — kolla grafen' },
      { t: 'Beräkna y i y = 100 · 2^x när x = 2.', ratt: '400', fel: ['200', '104', '40'], avsnitt: 'Samma formel, verkliga situationer' },
      { t: 'Beräkna y i y = 2000 · 0,5^x när x = 2.', ratt: '500', fel: ['1 000', '250', '2 000'], avsnitt: 'Samma formel, verkliga situationer' },
      { t: 'Var börjar en exponentiell kurva (skär y-axeln)?', ratt: 'Vid startvärdet C', fel: ['Vid 0', 'Vid a', 'Vid x = 1'], avsnitt: 'Växer eller avtar — kolla grafen' },
    ],
  },
  {
    namn: 'Exponentialekvationer från graf', slug: 'funktioner/exponentialekvationer-fran-graf',
    fragor: [
      { t: 'En exponentiell graf skär y-axeln i (0, 300). Vad är startvärdet C?', ratt: '300', fel: ['0', '1', '30'], avsnitt: 'Steg 1: hitta C (startvärdet)' },
      { t: 'En graf går genom (0, 100) och (1, 200). Vad är förändringsfaktorn a?', ratt: '2', fel: ['100', '0,5', '200'], avsnitt: 'Steg 2: hitta a (förändringsfaktorn)' },
      { t: 'En graf går genom (0, 400) och (1, 480). Vad är förändringsfaktorn a?', ratt: '1,2', fel: ['80', '0,8', '2'], avsnitt: 'Steg 2: hitta a (förändringsfaktorn)' },
      { t: 'En graf går genom (0, 5), (1, 10), (2, 20). Vad är a?', ratt: '2', fel: ['5', '0,5', '10'], avsnitt: 'Steg 2: hitta a (förändringsfaktorn)' },
      { t: 'En graf har C = 200 och a = 2. Skriv funktionen.', ratt: 'y = 200 · 2^x', fel: ['y = 2 · 200^x', 'y = 200x + 2', 'y = 200 · 2x'], avsnitt: 'Steg 3: skriv ihop' },
      { t: 'En graf går genom (0, 50) och (1, 150). Skriv funktionen.', ratt: 'y = 50 · 3^x', fel: ['y = 50 · 100^x', 'y = 150 · 50^x', 'y = 50x + 3'], avsnitt: 'Steg 3: skriv ihop' },
      { t: 'En graf går genom (0, 80), (1, 160), (2, 320). Skriv funktionen.', ratt: 'y = 80 · 2^x', fel: ['y = 80 · 80^x', 'y = 80x + 2', 'y = 2 · 80^x'], avsnitt: 'Steg 3: skriv ihop' },
      { t: 'En graf går genom (0, 1000) och (1, 900). Vad är a?', ratt: '0,9', fel: ['1,1', '100', '0,1'], avsnitt: 'Steg 2: hitta a (förändringsfaktorn)' },
      { t: 'Var läser du av startvärdet C i en graf?', ratt: 'Där grafen skär y-axeln (x = 0)', fel: ['Där grafen skär x-axeln', 'Vid x = 1', 'I grafens högsta punkt'], avsnitt: 'Steg 1: hitta C (startvärdet)' },
      { t: 'Hur räknar du ut a från två punkter?', ratt: 'Dela y(1) med y(0)', fel: ['Dela y(0) med y(1)', 'y(1) minus y(0)', 'y(1) gånger y(0)'], avsnitt: 'Steg 2: hitta a (förändringsfaktorn)' },
    ],
  },
];
