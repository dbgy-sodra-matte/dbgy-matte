/**
 * Checkpoint — Uttryck (Omläsning Ma1b)
 * ======================================
 * Skapar hela checkpoint-quizet automatiskt: 10 frågor, rätta svar, poäng,
 * och "träna mer"-länkar tillbaka till rätt avsnitt vid fel svar.
 *
 * KÖRS SÅ HÄR (en gång, av Simon, inloggad med dbgy.se-kontot):
 *   1. Gå till script.google.com → Nytt projekt
 *   2. Radera exempelkoden, klistra in HELA den här filen, spara (Ctrl+S)
 *   3. Kör funktionen "skapaCheckpointUttryck" (▶-knappen)
 *   4. Godkänn behörigheterna (första gången: "Avancerat" → "Fortsätt till ...")
 *   5. Öppna Körlogg (Ctrl+Enter) — där står två URL:er:
 *        REDIGERA  = formulärets redigeringsvy (spara för framtida ändringar)
 *        PUBLICERAD = länken som läggs in på delmomentsidan
 *   6. Flytta formuläret till Delade enheten när den finns (interim: Min enhet OK)
 *
 * Tröskel: minst 8/10 rätt = klarad checkpoint. Obegränsade försök (mastery).
 */

const SIDA = 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/algebra/uttryck';

function skapaCheckpointUttryck() {
  const form = FormApp.create('Checkpoint — Uttryck (Omläsning Ma1b)');

  form.setIsQuiz(true);
  form.setDescription(
    'Visa att Uttryck sitter — 10 frågor på delmomentets E-mål.\n\n' +
    'KLARAD = minst 8 rätt av 10. Får du färre: läs avsnitten som länkas vid ' +
    'frågorna du missade, träna, och gör om quizet. Du har hur många försök som helst.'
  );

  // Identitet: samla inloggad dbgy.se-mejl automatiskt
  try {
    form.setEmailCollectionType(FormApp.EmailCollectionType.VERIFIED);
  } catch (e) {
    form.setCollectEmail(true);
  }
  // Begränsa till skolans domän (kräver Workspace-konto — därav try/catch)
  try { form.setRequireLogin(true); } catch (e) {}

  // Visa resultat direkt efter inlämning
  form.setPublishingSummary(false);

  // ─── Hjälpare ───────────────────────────────────────────
  function fraga(titel, ratt, fel, avsnitt) {
    const item = form.addMultipleChoiceItem();
    item.setTitle(titel).setPoints(1).setRequired(true);
    const choices = [item.createChoice(ratt, true)].concat(
      fel.map(function (f) { return item.createChoice(f, false); })
    );
    // Blanda så rätt svar inte alltid ligger först
    choices.sort(function () { return Math.random() - 0.5; });
    item.setChoices(choices);
    item.setFeedbackForIncorrect(
      FormApp.createFeedback()
        .setText('Inte riktigt — träna mer på avsnittet "' + avsnitt + '" och försök igen.')
        .addLink(SIDA, 'Öppna delmomentet Uttryck')
        .build()
    );
    item.setFeedbackForCorrect(
      FormApp.createFeedback().setText('Rätt!').build()
    );
  }

  // ─── E-mål 1: Slå ihop termer av samma sort ─────────────
  fraga('Förenkla: 4a + 3a',
    '7a', ['12a', '7a²', 'Går inte att förenkla'],
    '"Samma sorts sak"');

  fraga('Förenkla: 6x + 4 + 2x − 1',
    '8x + 3', ['11x', '8x − 3', '8x + 5'],
    '"Samma sorts sak"');

  fraga('Vilken term kan slås ihop med 5y?',
    '2y', ['5x', 'y²', '5'],
    '"Samma sorts sak"');

  // ─── E-mål 2: Beräkna värdet genom insättning ───────────
  fraga('Beräkna värdet av 5x − 3 när x = 4',
    '17', ['51', '23', '5'],
    'Beräkna värdet av ett uttryck');

  fraga('Beräkna värdet av 2y + 6 när y = 5',
    '16', ['22', '13', '256'],
    'Beräkna värdet av ett uttryck');

  // ─── E-mål 3: Multiplicera in i parentes ────────────────
  fraga('Multiplicera in: 4(y + 6)',
    '4y + 24', ['4y + 6', '4y + 10', '24y'],
    'Multiplicera in i en parentes');

  fraga('Multiplicera in: 3(2a + 5)',
    '6a + 15', ['6a + 5', '5a + 8', '6a + 8'],
    'Multiplicera in i en parentes');

  // ─── E-mål 4: Minustecken framför parentes ──────────────
  fraga('Förenkla: 8a − (3 + 2a)',
    '6a − 3', ['6a + 3', '10a − 3', '10a + 3'],
    'Minustecknet framför en parentes');

  fraga('Förenkla: 7y − (3y + 4)',
    '4y − 4', ['4y + 4', '10y − 4', '4y'],
    'Minustecknet framför en parentes');

  // ─── Kombination (två steg) ─────────────────────────────
  fraga('Förenkla: 5(x + 2) − 3x',
    '2x + 10', ['2x + 2', '8x + 10', '2x + 7'],
    'Multiplicera in i en parentes');

  // ─── Elevens kanal till läraren ─────────────────────────
  form.addParagraphTextItem()
    .setTitle('Något du fastnade på eller vill fråga om? (frivilligt)')
    .setRequired(false);

  Logger.log('REDIGERA:   ' + form.getEditUrl());
  Logger.log('PUBLICERAD: ' + form.getPublishedUrl());
}
