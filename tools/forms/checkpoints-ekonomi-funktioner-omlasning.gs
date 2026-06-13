/**
 * Checkpoints — Ekonomi (3) + Funktioner (7), Omläsning Ma1b
 * ==========================================================
 * Skapar alla TIO återstående checkpoint-quiz i en körning.
 * 10 frågor per quiz, feldistraktorer på klassiska misstag,
 * träna mer-länk till rätt delmomentsida vid fel svar.
 *
 * KÖRS SÅ HÄR (en gång, av Simon, inloggad med dbgy.se-kontot):
 *   1. script.google.com → Nytt projekt → klistra in HELA filen → spara
 *   2. Kör funktionen "skapaAllaEkonomiFunktionerCheckpoints" (~1-2 min)
 *   3. Öppna Körlogg (Ctrl+Enter) → alla tio PUBLICERAD-URL:er listas
 *   4. Klistra in loggen i chatten med Claude → länkarna läggs in på sidorna
 *
 * EFTERÅT — per formulär (Apps Script kan inte styra detta):
 *   A. Inställningar → "Visa betyg" = "Omedelbart efter varje inlämning"
 *   B. Publicera → Respondenter = "Alla på AcadeMedia"
 *
 * Tröskel: minst 8/10 = klarad. Obegränsade försök (mastery).
 */

const BAS_URL = 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/';

function skapaAllaEkonomiFunktionerCheckpoints() {
  const resultat = [];
  for (const cp of CHECKPOINTS) {
    const url = skapaCheckpoint(cp);
    resultat.push(cp.namn + '\n  PUBLICERAD: ' + url.publicerad + '\n  REDIGERA:   ' + url.redigera);
  }
  Logger.log('\n===== ALLA TIO SKAPADE =====\n\n' + resultat.join('\n\n'));
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
  // ───────── EKONOMI ─────────
  {
    namn: 'Grunder i procent', slug: 'ekonomi/grunder-i-procent',
    fragor: [
      { t: 'Skriv 30 % i decimalform.', ratt: '0,30', fel: ['3,0', '0,03', '30'], avsnitt: 'Procent ↔ decimal' },
      { t: 'Skriv 8 % i decimalform.', ratt: '0,08', fel: ['0,8', '0,008', '8'], avsnitt: 'Procent ↔ decimal' },
      { t: 'Skriv decimaltalet 0,35 som procent.', ratt: '35 %', fel: ['3,5 %', '0,35 %', '350 %'], avsnitt: 'Procent ↔ decimal' },
      { t: 'Hur mycket är 20 % av 200 kr?', ratt: '40 kr', fel: ['220 kr', '4 kr', '100 kr'], avsnitt: 'De tre grundfrågorna' },
      { t: 'Hur mycket är 25 % av 80 kr?', ratt: '20 kr', fel: ['105 kr', '2 kr', '55 kr'], avsnitt: 'De tre grundfrågorna' },
      { t: 'Hur mycket är 50 % av 90 kr?', ratt: '45 kr', fel: ['40 kr', '140 kr', '95 kr'], avsnitt: 'De tre grundfrågorna' },
      { t: 'Hur många procent är 12 av 48?', ratt: '25 %', fel: ['4 %', '36 %', '40 %'], avsnitt: 'De tre grundfrågorna' },
      { t: 'Hur många procent är 30 av 50?', ratt: '60 %', fel: ['30 %', '20 %', '15 %'], avsnitt: 'De tre grundfrågorna' },
      { t: 'En vara kostar 500 kr. Vad blir priset efter 20 % rabatt?', ratt: '400 kr', fel: ['480 kr', '100 kr', '520 kr'], avsnitt: 'De tre grundfrågorna' },
      { t: 'En vara kostar 250 kr. Vad blir priset efter 10 % rabatt?', ratt: '225 kr', fel: ['240 kr', '25 kr', '275 kr'], avsnitt: 'De tre grundfrågorna' },
    ],
  },
  {
    namn: 'Förändringsfaktor och upprepad förändring', slug: 'ekonomi/forandringsfaktor',
    fragor: [
      { t: 'Vad är förändringsfaktorn för en ökning på 10 %?', ratt: '1,10', fel: ['0,90', '10', '1,01'], avsnitt: 'Räkna ut faktorn' },
      { t: 'Vad är förändringsfaktorn för en minskning på 20 %?', ratt: '0,80', fel: ['1,20', '0,20', '0,98'], avsnitt: 'Räkna ut faktorn' },
      { t: 'Vad är förändringsfaktorn för en ökning på 50 %?', ratt: '1,50', fel: ['0,50', '1,05', '15'], avsnitt: 'Räkna ut faktorn' },
      { t: 'Vad är förändringsfaktorn för en ökning på 100 %?', ratt: '2,00', fel: ['1,00', '10', '0,00'], avsnitt: 'Räkna ut faktorn' },
      { t: 'Vad är förändringsfaktorn för en minskning på 50 %?', ratt: '0,50', fel: ['1,50', '0,05', '2,00'], avsnitt: 'Räkna ut faktorn' },
      { t: 'En vara kostar 400 kr. Priset höjs med 25 %. Nytt pris?', ratt: '500 kr', fel: ['425 kr', '300 kr', '100 kr'], avsnitt: 'Räkna ut nytt värde' },
      { t: 'En vara kostar 800 kr. Priset höjs med 20 %. Nytt pris?', ratt: '960 kr', fel: ['820 kr', '160 kr', '1 000 kr'], avsnitt: 'Räkna ut nytt värde' },
      { t: 'En vara kostar 600 kr och säljs med 30 % rabatt. Reapris?', ratt: '420 kr', fel: ['180 kr', '630 kr', '570 kr'], avsnitt: 'Räkna ut nytt värde' },
      { t: '1 000 kr växer 4 % per år. Vilket uttryck ger värdet efter 2 år?', ratt: '1000 · 1,04²', fel: ['1000 · 1,08', '1000 · 1,04 · 2', '1000 · 0,04²'], avsnitt: 'Upprepad förändring' },
      { t: 'En bil värd 100 000 kr tappar 10 % per år. Uttryck för värdet efter 3 år?', ratt: '100000 · 0,90³', fel: ['100000 · 0,70', '100000 · 0,90 · 3', '100000 · 1,10³'], avsnitt: 'Upprepad förändring' },
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
  // ───────── FUNKTIONER ─────────
  {
    namn: 'Tolka grafer', slug: 'funktioner/tolka-grafer',
    fragor: [
      { t: 'Punkten (4, 9) ligger på en graf. Vad är y-värdet när x = 4?', ratt: '9', fel: ['4', '13', '5'], avsnitt: 'En punkt: (x, y)' },
      { t: 'En graf går genom (0, 2), (1, 5), (2, 8). Vad är y när x = 1?', ratt: '5', fel: ['1', '2', '8'], avsnitt: 'Läsa av grafen — åt båda håll' },
      { t: 'Samma graf: (0, 2), (1, 5), (2, 8). Vid vilket x är y = 8?', ratt: '2', fel: ['8', '0', '5'], avsnitt: 'Läsa av grafen — åt båda håll' },
      { t: 'En graf går genom (0, 6) och (1, 9). Var skär den y-axeln?', ratt: '6', fel: ['9', '0', '1'], avsnitt: 'Startvärdet — där grafen skär y-axeln' },
      { t: 'På en graf är y = 20 när x = 7. Skriv det som en punkt (x, y).', ratt: '(7, 20)', fel: ['(20, 7)', '(7, 7)', '(20, 20)'], avsnitt: 'En punkt: (x, y)' },
      { t: 'I en punkt (x, y) — vilket värde skrivs först?', ratt: 'x-värdet', fel: ['y-värdet', 'Det större talet', 'Det mindre talet'], avsnitt: 'En punkt: (x, y)' },
      { t: 'Vilket x-värde har alla punkter som ligger PÅ y-axeln?', ratt: '0', fel: ['1', 'Samma som y-värdet', 'Det varierar'], avsnitt: 'Startvärdet — där grafen skär y-axeln' },
      { t: 'En graf går genom (0, 100), (1, 80), (2, 60). Vad är y när x = 2?', ratt: '60', fel: ['100', '80', '2'], avsnitt: 'Läsa av grafen — åt båda håll' },
      { t: 'Ett batteri visas i en graf och punkten (0, 100) finns med. Vad betyder den?', ratt: 'Vid starten är batteriet 100 %', fel: ['Batteriet tar slut efter 100 sekunder', 'Vid 100 sekunder är batteriet 0', 'Batteriet laddas till 0 %'], avsnitt: 'Startvärdet — där grafen skär y-axeln' },
      { t: 'En graf går genom (3, 12). Vad är y-värdet när x = 3?', ratt: '12', fel: ['3', '15', '9'], avsnitt: 'En punkt: (x, y)' },
    ],
  },
  {
    namn: 'Linjära funktioner', slug: 'funktioner/linjara-funktioner',
    fragor: [
      { t: 'I funktionen y = 3x + 7, vad är m (startvärdet)?', ratt: '7', fel: ['3', '10', '21'], avsnitt: 'm — startvärdet' },
      { t: 'I funktionen y = 3x + 7, vad är k (lutningen)?', ratt: '3', fel: ['7', '10', '21'], avsnitt: 'k — lutningen' },
      { t: 'Beräkna y i y = 2x + 4 när x = 3.', ratt: '10', fel: ['9', '14', '24'], avsnitt: 'Räkna ut y för ett x' },
      { t: 'Beräkna y i y = 5x − 1 när x = 2.', ratt: '9', fel: ['11', '10', '4'], avsnitt: 'Räkna ut y för ett x' },
      { t: 'Lutar linjen y = −2x + 8 uppåt eller nedåt?', ratt: 'Nedåt', fel: ['Uppåt', 'Vågrätt', 'Den lutar inte'], avsnitt: 'k — lutningen' },
      { t: 'Var skär linjen y = 4x + 9 y-axeln?', ratt: '9', fel: ['4', '0', '13'], avsnitt: 'm — startvärdet' },
      { t: 'Beräkna y i y = x + 5 när x = 0.', ratt: '5', fel: ['1', '0', '6'], avsnitt: 'Räkna ut y för ett x' },
      { t: 'Vad betyder k = −3 i en linjär funktion?', ratt: 'y minskar med 3 varje gång x ökar med 1', fel: ['y ökar med 3 per steg', 'startvärdet är −3', 'linjen skär y-axeln i −3'], avsnitt: 'k — lutningen' },
      { t: 'En taxi kostar y = 10x + 50 (x = km). Vad kostar en resa på 4 km?', ratt: '90 kr', fel: ['60 kr', '510 kr', '100 kr'], avsnitt: 'Vardagsexempel' },
      { t: 'Vilken är formen för en linjär funktion?', ratt: 'y = kx + m', fel: ['y = C · a^x', 'y = x²', 'y = a^x'], avsnitt: 'En rak linje: y = kx + m' },
    ],
  },
  {
    namn: 'Räta linjens ekvation', slug: 'funktioner/rata-linjens-ekvation',
    fragor: [
      { t: 'En linje skär y-axeln i 5 och har lutningen 3. Skriv ekvationen.', ratt: 'y = 3x + 5', fel: ['y = 5x + 3', 'y = 3x − 5', 'y = 5x − 3'], avsnitt: 'Om du får k och m direkt' },
      { t: 'En linje skär y-axeln i 2 och har lutningen 4. Skriv ekvationen.', ratt: 'y = 4x + 2', fel: ['y = 2x + 4', 'y = 4x − 2', 'y = 2x − 4'], avsnitt: 'Om du får k och m direkt' },
      { t: 'Räkna ut k för en linje genom (0, 3) och (2, 7).', ratt: '2', fel: ['4', '0,5', '10'], avsnitt: 'Räkna ut k från två punkter' },
      { t: 'Räkna ut k för en linje genom (1, 2) och (4, 11).', ratt: '3', fel: ['9', '13', '0,33'], avsnitt: 'Räkna ut k från två punkter' },
      { t: 'Räkna ut k för en linje genom (0, 10) och (5, 30).', ratt: '4', fel: ['20', '6', '40'], avsnitt: 'Räkna ut k från två punkter' },
      { t: 'En linje har lutning 2 och går genom (0, 7). Skriv hela ekvationen.', ratt: 'y = 2x + 7', fel: ['y = 7x + 2', 'y = 2x − 7', 'y = 9x'], avsnitt: 'Hitta m' },
      { t: 'Ett gym tar 300 kr i startavgift och 80 kr/mån. Skriv funktionen y = kx + m.', ratt: 'y = 80x + 300', fel: ['y = 300x + 80', 'y = 380x', 'y = 80x − 300'], avsnitt: 'Vardagssituationer' },
      { t: 'Vad står m för i y = kx + m?', ratt: 'Startvärdet (där linjen skär y-axeln)', fel: ['Lutningen', 'x-värdet', 'Antalet lösningar'], avsnitt: 'Bestämma räta linjens ekvation' },
      { t: 'En linje skär y-axeln i 0 och har lutningen 6. Skriv ekvationen.', ratt: 'y = 6x', fel: ['y = 6x + 6', 'y = 6', 'y = x + 6'], avsnitt: 'Hitta m' },
      { t: 'En linje går genom (0, 8). Vad är m?', ratt: '8', fel: ['0', 'Går inte att veta', '4'], avsnitt: 'Hitta m' },
    ],
  },
  {
    namn: 'Funktionsbegreppet f(x)', slug: 'funktioner/funktionsbegreppet-fx',
    fragor: [
      { t: 'Om f(x) = 2x + 1, vad är f(3)?', ratt: '7', fel: ['6', '9', '5'], avsnitt: 'Beräkna f(ett tal)' },
      { t: 'Om f(x) = 3x, vad är f(5)?', ratt: '15', fel: ['8', '35', '53'], avsnitt: 'Beräkna f(ett tal)' },
      { t: 'Om f(x) = 4x − 2, vad är f(2)?', ratt: '6', fel: ['8', '10', '4'], avsnitt: 'Beräkna f(ett tal)' },
      { t: 'Om f(x) = x + 10, vad är f(0)?', ratt: '10', fel: ['0', '1', '11'], avsnitt: 'Beräkna f(ett tal)' },
      { t: 'Om f(x) = 10x, vad är f(3)?', ratt: '30', fel: ['13', '103', '3'], avsnitt: 'Beräkna f(ett tal)' },
      { t: 'Vad betyder skrivsättet f(x)?', ratt: 'Funktionens värde vid x — samma som y', fel: ['f gånger x', 'Alltid ett större tal än x', 'x delat med f'], avsnitt: 'Vad betyder f(x)?' },
      { t: 'Om f(x) = 3x + 6, vad är f(0)?', ratt: '6', fel: ['0', '3', '9'], avsnitt: 'Beräkna f(ett tal)' },
      { t: 'Om f(x) = 5x + 3, vid vilket x är f(x) = 18?', ratt: '3', fel: ['15', '93', '5'], avsnitt: 'Åt andra hållet: f(x) = ett värde' },
      { t: 'Om f(x) = 2x − 1, vid vilket x är f(x) = 9?', ratt: '5', fel: ['4', '17', '10'], avsnitt: 'Åt andra hållet: f(x) = ett värde' },
      { t: 'Om f(x) = 2x, vad är f(7)?', ratt: '14', fel: ['9', '27', '72'], avsnitt: 'Beräkna f(ett tal)' },
    ],
  },
  {
    namn: 'Exponentialfunktioner', slug: 'funktioner/exponentialfunktioner',
    fragor: [
      { t: 'I funktionen y = 400 · 1,5^x, vad är startvärdet C?', ratt: '400', fel: ['1,5', '600', '40'], avsnitt: 'Läsa av C och a' },
      { t: 'I funktionen y = 400 · 1,5^x, vad är förändringsfaktorn a?', ratt: '1,5', fel: ['400', '600', '0,5'], avsnitt: 'Läsa av C och a' },
      { t: 'Växer eller avtar funktionen y = 1000 · 0,8^x?', ratt: 'Avtar', fel: ['Växer', 'Den är konstant', 'Går inte att veta'], avsnitt: 'Växer eller avtar?' },
      { t: 'Växer eller avtar funktionen y = 200 · 1,1^x?', ratt: 'Växer', fel: ['Avtar', 'Den är konstant', 'Går inte att veta'], avsnitt: 'Växer eller avtar?' },
      { t: 'Beräkna y i y = 100 · 2^x när x = 3.', ratt: '800', fel: ['600', '106', '200'], avsnitt: 'Beräkna y' },
      { t: 'Beräkna y i y = 50 · 3^x när x = 2.', ratt: '450', fel: ['300', '150', '56'], avsnitt: 'Beräkna y' },
      { t: 'Vilken förändringsfaktor a hör till en ökning på 10 % per steg?', ratt: '1,10', fel: ['0,90', '10', '1,01'], avsnitt: 'Växer eller avtar?' },
      { t: 'Vad blir a^0 (vad som helst upphöjt till 0)?', ratt: '1', fel: ['0', 'a', 'Beror på a'], avsnitt: 'Beräkna y' },
      { t: 'Vad är startvärdet (y när x = 0) i y = 300 · 2^x?', ratt: '300', fel: ['600', '2', '1'], avsnitt: 'Beräkna y' },
      { t: 'Vilken är formen för en exponentialfunktion?', ratt: 'y = C · a^x', fel: ['y = kx + m', 'y = x²', 'y = ax + b'], avsnitt: 'Något som ändras med samma faktor varje steg' },
    ],
  },
  {
    namn: 'Exponentialfunktioner 2', slug: 'funktioner/exponentialfunktioner-2',
    fragor: [
      { t: 'Vilken förändringsfaktor a hör till en ökning på 20 % per steg?', ratt: '1,2', fel: ['0,8', '20', '1,02'], avsnitt: 'Faktorn a = förändringsfaktorn' },
      { t: 'Vilken förändringsfaktor a hör till en minskning på 15 % per steg?', ratt: '0,85', fel: ['1,15', '0,15', '0,985'], avsnitt: 'Faktorn a = förändringsfaktorn' },
      { t: 'Vilken förändringsfaktor a hör till en minskning på 50 % per steg?', ratt: '0,5', fel: ['1,5', '0,05', '2'], avsnitt: 'Faktorn a = förändringsfaktorn' },
      { t: '2 000 kr sätts in med 3 % ränta per år. Skriv funktionen.', ratt: 'y = 2000 · 1,03^x', fel: ['y = 2000 · 0,03^x', 'y = 2000 · 1,3^x', 'y = 2000x + 1,03'], avsnitt: 'Ställa upp funktionen' },
      { t: 'En befolkning på 5 000 växer 10 % per år. Skriv funktionen.', ratt: 'y = 5000 · 1,1^x', fel: ['y = 5000 · 0,1^x', 'y = 5000 · 10^x', 'y = 5000x + 1,1'], avsnitt: 'Ställa upp funktionen' },
      { t: 'En bil värd 100 000 kr tappar 10 % per år. Skriv funktionen.', ratt: 'y = 100000 · 0,9^x', fel: ['y = 100000 · 1,1^x', 'y = 100000 · 0,1^x', 'y = 100000x − 0,9'], avsnitt: 'Ställa upp funktionen' },
      { t: 'Beräkna y i y = 2000 · 0,5^x när x = 2.', ratt: '500', fel: ['1000', '2000', '250'], avsnitt: 'Beräkna efter flera steg' },
      { t: 'Beräkna y i y = 1000 · 1,05^x när x = 2.', ratt: '1 102,5', fel: ['1 100', '2 000', '1 050'], avsnitt: 'Beräkna efter flera steg' },
      { t: 'Du sparar 100 kr och lägger till 100 kr varje månad. Linjärt eller exponentiellt?', ratt: 'Linjärt', fel: ['Exponentiellt', 'Varken eller', 'Båda samtidigt'], avsnitt: 'Linjärt eller exponentiellt?' },
      { t: 'Ett sparande växer 5 % varje månad. Linjärt eller exponentiellt?', ratt: 'Exponentiellt', fel: ['Linjärt', 'Varken eller', 'Konstant'], avsnitt: 'Linjärt eller exponentiellt?' },
    ],
  },
  {
    namn: 'Exponentialekvation från graf', slug: 'funktioner/exponentialekvation-fran-graf',
    fragor: [
      { t: 'En exponentiell graf skär y-axeln i (0, 300). Vad är startvärdet C?', ratt: '300', fel: ['0', '1', '30'], avsnitt: 'Steg 1: hitta C (startvärdet)' },
      { t: 'En graf går genom (0, 100) och (1, 200). Vad är förändringsfaktorn a?', ratt: '2', fel: ['100', '0,5', '200'], avsnitt: 'Steg 2: hitta a (förändringsfaktorn)' },
      { t: 'En graf går genom (0, 400) och (1, 480). Vad är förändringsfaktorn a?', ratt: '1,2', fel: ['80', '0,8', '2'], avsnitt: 'Steg 2: hitta a (förändringsfaktorn)' },
      { t: 'En graf går genom (0, 5), (1, 10), (2, 20). Vad är a?', ratt: '2', fel: ['5', '0,5', '10'], avsnitt: 'Steg 2: hitta a (förändringsfaktorn)' },
      { t: 'En graf har C = 200 och a = 2. Skriv funktionen y = C · a^x.', ratt: 'y = 200 · 2^x', fel: ['y = 2 · 200^x', 'y = 200x + 2', 'y = 200 · 2x'], avsnitt: 'Steg 3: skriv ihop och kontrollera' },
      { t: 'En graf går genom (0, 50) och (1, 150). Skriv funktionen.', ratt: 'y = 50 · 3^x', fel: ['y = 50 · 100^x', 'y = 150 · 50^x', 'y = 50x + 3'], avsnitt: 'Steg 3: skriv ihop och kontrollera' },
      { t: 'En graf går genom (0, 80), (1, 160), (2, 320). Skriv funktionen.', ratt: 'y = 80 · 2^x', fel: ['y = 80 · 80^x', 'y = 80x + 2', 'y = 2 · 80^x'], avsnitt: 'Steg 3: skriv ihop och kontrollera' },
      { t: 'En graf går genom (0, 1000) och (1, 900). Vad är a?', ratt: '0,9', fel: ['1,1', '100', '0,1'], avsnitt: 'Steg 2: hitta a (förändringsfaktorn)' },
      { t: 'Var läser du av startvärdet C i en graf?', ratt: 'Där grafen skär y-axeln (x = 0)', fel: ['Där grafen skär x-axeln', 'Vid x = 1', 'I grafens högsta punkt'], avsnitt: 'Steg 1: hitta C (startvärdet)' },
      { t: 'I en graf multipliceras värdet med 2 för varje steg. Linjär eller exponentiell?', ratt: 'Exponentiell', fel: ['Linjär', 'Ingen av dem', 'Vågrät'], avsnitt: 'Linjär eller exponentiell graf?' },
    ],
  },
];
