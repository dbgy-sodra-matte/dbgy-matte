/**
 * Checkpoints — ORDINARIE Ma1a (BF) — 19 kumulativa checkpoints
 * ================================================================
 * Modell 3: täta, små, KUMULATIVA test. Varje checkpoint = 10 flervalsfrågor
 * på ALLT hittills (mix ~5 nya / ~3 förra blocket / ~2 äldre, spiral).
 * Feldistraktorer på klassiska misstag, "träna mer"-länk till rätt Ma1a-sida.
 *
 * Ma1a = BF (BF läser Ma1a — Ma1b är separat kurs, eget bygge). EN master-Sheet:
 *   - skapaCheckpointsBF()   → 19 Forms + ett data-Sheet för BF
 *
 * KÖRS SÅ HÄR (en gång, av Simon, inloggad med dbgy.se-kontot):
 *   1. script.google.com → Nytt projekt → klistra in HELA filen → spara
 *   2. Kör skapaCheckpointsBF() (~2-3 min). Godkänn behörigheter.
 *   3. Öppna Körlogg (Ctrl+Enter) → master-Sheet-URL + alla 19 Form-URL:er
 *   4. Klistra in loggen i chatten med Claude → länkarna läggs in på sidorna
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
  '1-1': 'ma1a/1-aritmetik/1-1-tal-och-prioritering',
  '1-2': 'ma1a/1-aritmetik/1-2-brakrakning',
  '1-3': 'ma1a/1-aritmetik/1-3-enhetsomvandling-och-overslag',
  '1-4': 'ma1a/1-aritmetik/1-4-medelvarde-och-hastighet',
  '2-1': 'ma1a/2-algebra/2-1-forenkling-och-parenteser',
  '2-2': 'ma1a/2-algebra/2-2-faktorisering',
  '2-3': 'ma1a/2-algebra/2-3-grundlaggande-ekvationer',
  '2-4': 'ma1a/2-algebra/2-4-ekvationer-x-i-bada-led-och-parenteser',
  '2-5': 'ma1a/2-algebra/2-5-ekvationer-med-namnare',
  '2-6': 'ma1a/2-algebra/2-6-formler-och-formelhantering',
  '2-7': 'ma1a/2-algebra/2-7-komplettera-likhet-och-parametervarde',
  '3-1': 'ma1a/3-ekonomi/3-1-procent-grunder',
  '3-2': 'ma1a/3-ekonomi/3-2-forandringsfaktor',
  '3-3': 'ma1a/3-ekonomi/3-3-baklangesrakning-med-procent',
  '3-4': 'ma1a/3-ekonomi/3-4-upprepad-och-sammansatt-forandring',
  '3-5': 'ma1a/3-ekonomi/3-5-lon-och-ob-ersattning',
  '3-6': 'ma1a/3-ekonomi/3-6-vinstmarginal-och-prissattning',
  '3-7': 'ma1a/3-ekonomi/3-7-valutavaxling-och-blandning',
  '3-8': 'ma1a/3-ekonomi/3-8-lan-ranta-och-kalkylark',
  '4-1': 'ma1a/4-funktioner/4-1-vardetabell-och-koordinatsystem',
  '4-2': 'ma1a/4-funktioner/4-2-linjara-funktioner',
  '4-3': 'ma1a/4-funktioner/4-3-lasa-av-grafer',
  '4-4': 'ma1a/4-funktioner/4-4-funktionsbegreppet-fx',
  '4-5': 'ma1a/4-funktioner/4-5-linjara-modeller-och-skarningspunkt',
  '4-6': 'ma1a/4-funktioner/4-6-exponentialfunktioner',
  '4-7': 'ma1a/4-funktioner/4-7-linjar-eller-exponentiell',
  '4-8': 'ma1a/4-funktioner/4-8-exponentiell-modell-ur-graf',
  '5-1': 'ma1a/5-talmonster/5-1-figurmonster-och-talfoljder',
  '5-2': 'ma1a/5-talmonster/5-2-formel-for-ett-monster',
  '5-3': 'ma1a/5-talmonster/5-3-bestam-figurnumret',
  '5-4': 'ma1a/5-talmonster/5-4-bord-och-stolar',
  '5-5': 'ma1a/5-talmonster/5-5-brakmonster',
  '5-6': 'ma1a/5-talmonster/5-6-icke-linjara-monster',
  '6-1': 'ma1a/6-sannolikhet/6-1-sannolikhet-grunder',
  '6-2': 'ma1a/6-sannolikhet/6-2-oberoende-handelser',
  '6-3': 'ma1a/6-sannolikhet/6-3-utan-aterlaggning',
  '6-4': 'ma1a/6-sannolikhet/6-4-komplementhandelse',
  '6-5': 'ma1a/6-sannolikhet/6-5-minst-en',
  '6-6': 'ma1a/6-sannolikhet/6-6-upprepade-handelser-och-jamforelse',
  '7-1': 'ma1a/7-statistik/7-1-lagesmatt',
  '7-2': 'ma1a/7-statistik/7-2-tabeller-och-diagram',
  '7-3': 'ma1a/7-statistik/7-3-spridningsdiagram-och-korrelation',
  '7-4': 'ma1a/7-statistik/7-4-tvavagstabell',
  '7-5': 'ma1a/7-statistik/7-5-urval-och-felmarginal',
  '8-1': 'ma1a/8-geometri/8-1-area-och-omkrets',
  '8-2': 'ma1a/8-geometri/8-2-cirkeln',
  '8-3': 'ma1a/8-geometri/8-3-pythagoras-sats',
  '8-4': 'ma1a/8-geometri/8-4-formler-och-geometri',
  '8-5': 'ma1a/8-geometri/8-5-geometriska-monster',
  '8-6': 'ma1a/8-geometri/8-6-bevis',
};

function skapaCheckpointsBF() { skapaAlla('BF'); }

function skapaAlla(klass) {
  const ss = SpreadsheetApp.create('DBGY Matte — Ma1a ' + klass + ' data');
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
  const form = FormApp.create('Checkpoint ' + cp.nr + ' — ' + cp.namn + ' (Ma1a ' + klass + ')');
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

// ═════════════════════ FRÅGEBANKEN (19 kumulativa checkpoints) ═════════════════════
// q = { t: fråga, ratt: rätt svar, fel: [distraktorer], l: slug-nyckel }
// Alla rätt-svar hämtade/kontrollräknade från lektionernas bank: och exercises:.

const CHECKPOINTS = [
  // ───────── 1. ARITMETIK ─────────
  { nr: 1, id: 'ma1a-cp01', namn: 'Tal, prioritering & bråk', fragor: [
    { t: 'Räkna ut: 5 + 2 · 3', ratt: '11', fel: ['21', '13', '17'], l: '1-1' },
    { t: 'Räkna ut: −7 + 10', ratt: '3', fel: ['−3', '17', '−17'], l: '1-1' },
    { t: 'Räkna ut: (4 + 2) · 3', ratt: '18', fel: ['10', '24', '14'], l: '1-1' },
    { t: 'Räkna ut: 5 + 3² − 4 · 2', ratt: '6', fel: ['8', '24', '0'], l: '1-1' },
    { t: 'Räkna ut: −4 · 3 + 6', ratt: '−6', fel: ['6', '−18', '18'], l: '1-1' },
    { t: 'Förkorta så långt som möjligt: 6/9', ratt: '2/3', fel: ['3/2', '2/9', '6/3'], l: '1-2' },
    { t: 'Räkna ut: 1/4 + 2/4', ratt: '3/4', fel: ['3/8', '2/8', '1/2'], l: '1-2' },
    { t: 'Hur mycket är 1/2 av 80?', ratt: '40', fel: ['160', '20', '82'], l: '1-2' },
    { t: 'Räkna ut: 1/2 + 1/3', ratt: '5/6', fel: ['2/5', '1/6', '2/6'], l: '1-2' },
    { t: 'Hur mycket är 3/4 av 200?', ratt: '150', fel: ['50', '600', '267'], l: '1-2' },
  ]},
  { nr: 2, id: 'ma1a-cp02', namn: 'Dugga: Aritmetik', fragor: [
    { t: 'Hur många deciliter är 2,5 liter?', ratt: '25 dl', fel: ['250 dl', '2,5 dl', '0,25 dl'], l: '1-3' },
    { t: 'Hur många gram är 3 hg?', ratt: '300 g', fel: ['30 g', '3000 g', '3 g'], l: '1-3' },
    { t: 'Ett recept använder 8 kaffemått à 20 ml. Hur många deciliter blir det?', ratt: '1,6 dl', fel: ['16 dl', '160 dl', '0,16 dl'], l: '1-3' },
    { t: 'Räkna ut medelvärdet av 3, 7 och 8.', ratt: '6', fel: ['18', '7', '9'], l: '1-4' },
    { t: 'En bil kör 120 km på 2 timmar. Vilken medelhastighet i km/h?', ratt: '60 km/h', fel: ['240 km/h', '122 km/h', '30 km/h'], l: '1-4' },
    { t: 'Gör om 10 m/s till km/h.', ratt: '36 km/h', fel: ['2,8 km/h', '10 km/h', '360 km/h'], l: '1-4' },
    { t: 'Räkna ut: (4 + 2) · 3', ratt: '18', fel: ['10', '24', '14'], l: '1-1' },
    { t: 'Räkna ut: −4 · 3 + 6', ratt: '−6', fel: ['6', '−18', '18'], l: '1-1' },
    { t: 'Räkna ut: 1/2 + 1/3', ratt: '5/6', fel: ['2/5', '1/6', '2/6'], l: '1-2' },
    { t: 'Förkorta så långt som möjligt: 6/9', ratt: '2/3', fel: ['3/2', '2/9', '6/3'], l: '1-2' },
  ]},
  { nr: 3, id: 'ma1a-cp03', namn: 'Förenkling & faktorisering', fragor: [
    { t: 'Förenkla: 7x + 4 − 2x', ratt: '5x + 4', fel: ['9x + 4', '5x + 2', '3x + 4'], l: '2-1' },
    { t: 'Multiplicera in: 4(x + 3)', ratt: '4x + 12', fel: ['4x + 3', 'x + 12', '4x + 7'], l: '2-1' },
    { t: 'Multiplicera in: 3(2x − 5)', ratt: '6x − 15', fel: ['6x − 5', '5x − 15', '6x + 15'], l: '2-1' },
    { t: 'Faktorisera: 6x + 9', ratt: '3(2x + 3)', fel: ['3(2x + 9)', '6(x + 3)', '3(2x − 3)'], l: '2-2' },
    { t: 'Faktorisera: x² + 5x', ratt: 'x(x + 5)', fel: ['x(x + 5x)', '5x(x + 1)', 'x²(1 + 5)'], l: '2-2' },
    { t: 'Faktorisera: 8x + 12', ratt: '4(2x + 3)', fel: ['4(2x + 12)', '2(4x + 6)', '8(x + 12)'], l: '2-2' },
    { t: 'Hur många gram är 3 hg?', ratt: '300 g', fel: ['30 g', '3000 g', '3 g'], l: '1-3' },
    { t: 'En bil kör 120 km på 2 timmar. Vilken medelhastighet i km/h?', ratt: '60 km/h', fel: ['240 km/h', '122 km/h', '30 km/h'], l: '1-4' },
    { t: 'Räkna ut: 5 + 3² − 4 · 2', ratt: '6', fel: ['8', '24', '0'], l: '1-1' },
    { t: 'Hur mycket är 3/4 av 200?', ratt: '150', fel: ['50', '600', '267'], l: '1-2' },
  ]},
  { nr: 4, id: 'ma1a-cp04', namn: 'Ekvationer', fragor: [
    { t: 'Lös: 2x + 5 = 17', ratt: '6', fel: ['11', '22', '12'], l: '2-3' },
    { t: 'Lös: 4x − 3 = 21', ratt: '6', fel: ['4,5', '24', '18'], l: '2-3' },
    { t: 'Lös: 5x = 2x + 9', ratt: '3', fel: ['9', '1,3', '7'], l: '2-4' },
    { t: 'Lös: 2(x + 4) = 16', ratt: '4', fel: ['8', '6', '12'], l: '2-4' },
    { t: 'Lös: 3(x − 1) = 12', ratt: '5', fel: ['3', '4', '13'], l: '2-4' },
    { t: 'Lös: x/2 = 8', ratt: '16', fel: ['4', '10', '6'], l: '2-5' },
    { t: 'Lös: x/4 + 2 = 6', ratt: '16', fel: ['32', '2', '8'], l: '2-5' },
    { t: 'Faktorisera: 6x + 9', ratt: '3(2x + 3)', fel: ['3(2x + 9)', '6(x + 3)', '3(2x − 3)'], l: '2-2' },
    { t: 'Räkna ut: 1/4 + 2/4', ratt: '3/4', fel: ['3/8', '2/8', '1/2'], l: '1-2' },
    { t: 'Räkna ut medelvärdet av 3, 7 och 8.', ratt: '6', fel: ['18', '7', '9'], l: '1-4' },
  ]},
  { nr: 5, id: 'ma1a-cp05', namn: 'Prov: Algebra', fragor: [
    { t: 'O = 2a + 2b. Beräkna O när a = 6 och b = 4.', ratt: '20', fel: ['12', '48', '10'], l: '2-6' },
    { t: 'A = b · h. Beräkna A när b = 5 och h = 8.', ratt: '40', fel: ['13', '26', '45'], l: '2-6' },
    { t: 'Lös ut h ur formeln A = b · h.', ratt: 'h = A/b', fel: ['h = A · b', 'h = b/A', 'h = A − b'], l: '2-6' },
    { t: 'Fyll i talet som saknas: 2(x + 3) = 2x + ___', ratt: '6', fel: ['3', '5', '8'], l: '2-7' },
    { t: 'Fyll i talet: ___(x + 1) = 5x + 5', ratt: '5', fel: ['1', '6', '4'], l: '2-7' },
    { t: 'Förenkla: 2(3x − 4) − 3(x − 5)', ratt: '3x + 7', fel: ['3x − 23', '9x + 7', '3x + 23'], l: '2-1' },
    { t: 'Lös: x/3 = 9', ratt: '27', fel: ['3', '12', '6'], l: '2-5' },
    { t: 'Lös: 7x − 4 = 4x + 11', ratt: '5', fel: ['3', '2,3', '15'], l: '2-4' },
    { t: 'Lös: 2x + 5 = 17', ratt: '6', fel: ['11', '22', '12'], l: '2-3' },
    { t: 'Hur mycket är 1/2 av 80?', ratt: '40', fel: ['160', '20', '82'], l: '1-2' },
  ]},

  // ───────── 3. EKONOMI ─────────
  { nr: 6, id: 'ma1a-cp06', namn: 'Procent & förändringsfaktor', fragor: [
    { t: 'Hur mycket är 25 % av 80?', ratt: '20', fel: ['25', '55', '2'], l: '3-1' },
    { t: 'I en klass på 60 elever cyklar 12 till skolan. Hur stor andel är det, i procent?', ratt: '20 %', fel: ['12 %', '48 %', '5 %'], l: '3-1' },
    { t: 'En vara kostar 200 kr. Priset höjs med 15 %. Hur många kronor är höjningen?', ratt: '30 kr', fel: ['15 kr', '215 kr', '3 kr'], l: '3-1' },
    { t: 'Vad är förändringsfaktorn för en ökning på 12 %?', ratt: '1,12', fel: ['0,88', '12', '1,012'], l: '3-2' },
    { t: 'Vad är förändringsfaktorn för en minskning på 25 %?', ratt: '0,75', fel: ['1,25', '0,25', '0,975'], l: '3-2' },
    { t: 'En jacka kostar 800 kr. Priset höjs med 10 %. Vad är det nya priset?', ratt: '880 kr', fel: ['810 kr', '88 kr', '720 kr'], l: '3-2' },
    { t: 'Fyll i talet som saknas: 2(x + 3) = 2x + ___', ratt: '6', fel: ['3', '5', '8'], l: '2-7' },
    { t: 'O = 2a + 2b. Beräkna O när a = 6 och b = 4.', ratt: '20', fel: ['12', '48', '10'], l: '2-6' },
    { t: 'Lös: 2x + 5 = 17', ratt: '6', fel: ['11', '22', '12'], l: '2-3' },
    { t: 'Räkna ut: 1/4 + 2/4', ratt: '3/4', fel: ['3/8', '2/8', '1/2'], l: '1-2' },
  ]},
  { nr: 7, id: 'ma1a-cp07', namn: 'Baklänges & upprepad förändring', fragor: [
    { t: 'Efter en höjning på 25 % kostar en vara 250 kr. Vad kostade den innan höjningen?', ratt: '200 kr', fel: ['312,50 kr', '225 kr', '187,50 kr'], l: '3-3' },
    { t: 'Efter 20 % rabatt kostar en vara 320 kr. Vad var ordinarie pris?', ratt: '400 kr', fel: ['384 kr', '340 kr', '256 kr'], l: '3-3' },
    { t: 'Ett pris ökade med 10 % till 88 kr. Vad var ursprungspriset?', ratt: '80 kr', fel: ['78 kr', '96,8 kr', '79,2 kr'], l: '3-3' },
    { t: 'En bil värd 200 000 kr tappar 10 % i värde varje år. Skriv uttrycket för värdet efter 3 år.', ratt: '200000 · 0,90³', fel: ['200000 · 0,10³', '200000 · 0,90 · 3', '200000 · 1,10³'], l: '3-4' },
    { t: '5 000 kr sätts in på ett konto med 3 % ränta per år. Skriv uttrycket för värdet efter 4 år.', ratt: '5000 · 1,03⁴', fel: ['5000 · 1,12', '5000 · 1,03 · 4', '5000 · 0,03⁴'], l: '3-4' },
    { t: 'Räkna ut: 1 000 · 1,05². Svara i kronor.', ratt: '1 102,5 kr', fel: ['1 100 kr', '1 050 kr', '2 000 kr'], l: '3-4' },
    { t: 'Vad är förändringsfaktorn för en ökning på 12 %?', ratt: '1,12', fel: ['0,88', '12', '1,012'], l: '3-2' },
    { t: 'Hur mycket är 25 % av 80?', ratt: '20', fel: ['25', '55', '2'], l: '3-1' },
    { t: 'Lös: 5x = 2x + 9', ratt: '3', fel: ['9', '1,3', '7'], l: '2-4' },
    { t: 'Lös ut h ur formeln A = b · h.', ratt: 'h = A/b', fel: ['h = A · b', 'h = b/A', 'h = A − b'], l: '2-6' },
  ]},
  { nr: 8, id: 'ma1a-cp08', namn: 'Prov: Ekonomi', fragor: [
    { t: 'Du jobbar 6 timmar och har timlönen 150 kr. Vad tjänar du?', ratt: '900 kr', fel: ['156 kr', '25 kr', '750 kr'], l: '3-5' },
    { t: 'Din timlön är 140 kr. På kvällar får du ett OB-tillägg på 20 %. Hur många kronor extra är det per timme?', ratt: '28 kr', fel: ['168 kr', '20 kr', '112 kr'], l: '3-5' },
    { t: 'En vara köps in för 80 kr och säljs för 100 kr. Beräkna vinstmarginalen i procent.', ratt: '20 %', fel: ['25 %', '80 %', '125 %'], l: '3-6' },
    { t: 'En affär köper en tröja för 180 kr och säljer den för 300 kr. Beräkna vinstmarginalen i procent.', ratt: '40 %', fel: ['67 %', '120 %', '60 %'], l: '3-6' },
    { t: '1 euro kostar 11 kr. Hur mycket kostar 20 euro i kronor?', ratt: '220 kr', fel: ['31 kr', '1,8 kr', '200 kr'], l: '3-7' },
    { t: '1 dollar kostar 10 kr. Du växlar 500 kr till dollar. Hur många dollar får du?', ratt: '50 dollar', fel: ['5000 dollar', '490 dollar', '510 dollar'], l: '3-7' },
    { t: 'Ett lån på 50 000 kr har 5 % årlig ränta. Hur mycket är räntan per år?', ratt: '2 500 kr', fel: ['250 kr', '25 000 kr', '52 500 kr'], l: '3-8' },
    { t: 'Årsräntan på ett lån är 7 200 kr. Hur mycket är det per månad?', ratt: '600 kr', fel: ['86 400 kr', '60 kr', '720 kr'], l: '3-8' },
    { t: 'Efter 20 % rabatt kostar en vara 320 kr. Vad var ordinarie pris?', ratt: '400 kr', fel: ['384 kr', '340 kr', '256 kr'], l: '3-3' },
    { t: 'Lös: x/4 + 2 = 6', ratt: '16', fel: ['32', '2', '8'], l: '2-5' },
  ]},

  // ───────── 4. FUNKTIONER ─────────
  { nr: 9, id: 'ma1a-cp09', namn: 'Tabeller, linjära & grafavläsning', fragor: [
    { t: 'y = 2x + 1. Vad är y när x = 3?', ratt: '7', fel: ['8', '6', '5'], l: '4-1' },
    { t: 'y = x + 5. Vad är y när x = 0?', ratt: '5', fel: ['0', '6', '50'], l: '4-1' },
    { t: 'I funktionen y = 3x + 2, vad är k (lutningen)?', ratt: '3', fel: ['2', '5', '6'], l: '4-2' },
    { t: 'I funktionen y = 5x − 1, vad är m (startvärdet)?', ratt: '−1', fel: ['5', '1', '4'], l: '4-2' },
    { t: 'En graf visar en linje där y = 7 när x = 3 och y = 5 när x = 2. Var skär linjen y-axeln?', ratt: '1', fel: ['7', '0', '3'], l: '4-3' },
    { t: 'En linje på en graf går genom (3, 7). Vid vilket x är y = 5 om linjen är y = 2x + 1?', ratt: '2', fel: ['5', '1', '11'], l: '4-3' },
    { t: 'En vara köps in för 80 kr och säljs för 100 kr. Beräkna vinstmarginalen i procent.', ratt: '20 %', fel: ['25 %', '80 %', '125 %'], l: '3-6' },
    { t: 'Ett lån på 50 000 kr har 5 % årlig ränta. Hur mycket är räntan per år?', ratt: '2 500 kr', fel: ['250 kr', '25 000 kr', '52 500 kr'], l: '3-8' },
    { t: 'Lös: 2x + 5 = 17', ratt: '6', fel: ['11', '22', '12'], l: '2-3' },
    { t: 'Vad är förändringsfaktorn för en minskning på 25 %?', ratt: '0,75', fel: ['1,25', '0,25', '0,975'], l: '3-2' },
  ]},
  { nr: 10, id: 'ma1a-cp10', namn: 'f(x) & linjära modeller', fragor: [
    { t: 'f(x) = 2x + 1. Beräkna f(3).', ratt: '7', fel: ['8', '6', '5'], l: '4-4' },
    { t: 'f(x) = 3x − 2. Beräkna f(4).', ratt: '10', fel: ['14', '5', '11'], l: '4-4' },
    { t: 'f(x) = 2x + 1. Vid vilket x är f(x) = 11?', ratt: '5', fel: ['23', '6', '5,5'], l: '4-4' },
    { t: 'En taxi kostar 50 kr i startavgift plus 20 kr per km. Skriv en formel för kostnaden y efter x km.', ratt: 'y = 50 + 20x', fel: ['y = 20 + 50x', 'y = 70x', 'y = 50x + 20'], l: '4-5' },
    { t: 'Samma taxi (y = 50 + 20x). Vad kostar en resa på 10 km?', ratt: '250 kr', fel: ['70 kr', '700 kr', '200 kr'], l: '4-5' },
    { t: 'Företag A kostar y = 100x och företag B kostar y = 40x + 180. Vid vilket x kostar de lika mycket?', ratt: '3', fel: ['180', '2', '4,5'], l: '4-5' },
    { t: 'y = 2x + 1. Vad är y när x = 3?', ratt: '7', fel: ['8', '6', '5'], l: '4-1' },
    { t: 'I funktionen y = 3x + 2, vad är k (lutningen)?', ratt: '3', fel: ['2', '5', '6'], l: '4-2' },
    { t: 'Ett lån på 50 000 kr har 5 % årlig ränta. Hur mycket är räntan per år?', ratt: '2 500 kr', fel: ['250 kr', '25 000 kr', '52 500 kr'], l: '3-8' },
    { t: 'Lös: 5x = 2x + 9', ratt: '3', fel: ['9', '1,3', '7'], l: '2-4' },
  ]},
  { nr: 11, id: 'ma1a-cp11', namn: 'Prov: Funktioner', fragor: [
    { t: 'Beräkna y i y = 100 · 2^x när x = 3.', ratt: '800', fel: ['600', '108', '206'], l: '4-6' },
    { t: 'Växer eller avtar funktionen y = 1000 · 0,8^x?', ratt: 'Avtar', fel: ['Växer', 'Konstant', 'Linjär'], l: '4-6' },
    { t: 'En förändringsfaktor är 1,07. Hur många procents ökning per steg motsvarar det?', ratt: '7 %', fel: ['107 %', '0,07 %', '17 %'], l: '4-6' },
    { t: 'En värdetabell ger y-värdena 100, 200, 400 för x = 0, 1, 2. Är funktionen linjär eller exponentiell?', ratt: 'Exponentiell', fel: ['Linjär', 'Potens', 'Ingen'], l: '4-7' },
    { t: 'En värdetabell ger y-värdena 100, 120, 140 för x = 0, 1, 2. Är funktionen linjär eller exponentiell?', ratt: 'Linjär', fel: ['Exponentiell', 'Potens', 'Ingen'], l: '4-7' },
    { t: 'En exponentiell graf skär y-axeln i 300 och dubblas per steg. Skriv funktionen y = C · a^x.', ratt: 'y = 300 · 2^x', fel: ['y = 2 · 300^x', 'y = 300 + 2x', 'y = 300 · 0,5^x'], l: '4-8' },
    { t: 'f(x) = 2x + 1. Beräkna f(3).', ratt: '7', fel: ['8', '6', '5'], l: '4-4' },
    { t: 'En taxi kostar 50 kr i startavgift plus 20 kr per km. Skriv en formel för kostnaden y efter x km.', ratt: 'y = 50 + 20x', fel: ['y = 20 + 50x', 'y = 70x', 'y = 50x + 20'], l: '4-5' },
    { t: 'En graf visar en linje där y = 7 när x = 3 och y = 5 när x = 2. Var skär linjen y-axeln?', ratt: '1', fel: ['7', '0', '3'], l: '4-3' },
    { t: 'Vad är förändringsfaktorn för en ökning på 12 %?', ratt: '1,12', fel: ['0,88', '12', '1,012'], l: '3-2' },
  ]},

  // ───────── 5. TALMÖNSTER ─────────
  { nr: 12, id: 'ma1a-cp12', namn: 'Figurmönster & formler', fragor: [
    { t: 'Ett prickmönster ökar 2, 4, 6, 8... Hur många prickar i figur 5?', ratt: '10', fel: ['12', '16', '9'], l: '5-1' },
    { t: 'Ett mönster börjar: 5, 8, 11, 14... Vad är nästa tal (figur 5)?', ratt: '17', fel: ['16', '18', '15'], l: '5-1' },
    { t: 'Ett prickmönster är 2, 4, 6 för figur 1–3. Skriv en formel för antalet prickar i figur n.', ratt: '2n', fel: ['n + 2', '2n + 2', 'n²'], l: '5-2' },
    { t: 'Ett mönster är 5, 10, 15, 20... Skriv en formel för figur n.', ratt: '5n', fel: ['n + 5', '5n + 5', '10n'], l: '5-2' },
    { t: 'Ett mönster är 3, 5, 7, 9... Skriv en formel för figur n.', ratt: '2n + 1', fel: ['2n', 'n + 2', '3n'], l: '5-2' },
    { t: 'Ett mönster har formeln antal = 2n. I vilken figur finns 12 prickar?', ratt: '6', fel: ['24', '10', '14'], l: '5-3' },
    { t: 'Ett mönster har formeln antal = 2n + 1. Vilken figur har 11 prickar?', ratt: '5', fel: ['6', '23', '4'], l: '5-3' },
    { t: 'f(x) = 3x − 2. Beräkna f(4).', ratt: '10', fel: ['14', '5', '11'], l: '4-4' },
    { t: 'Beräkna y i y = 100 · 2^x när x = 3.', ratt: '800', fel: ['600', '108', '206'], l: '4-6' },
    { t: 'Lös: 3(x − 1) = 12', ratt: '5', fel: ['3', '4', '13'], l: '2-4' },
  ]},
  { nr: 13, id: 'ma1a-cp13', namn: 'Prov: Talmönster', fragor: [
    { t: 'Bord i rad: 1 bord → 4 stolar, 2 bord → 6, 3 bord → 8. Hur många stolar vid 4 bord?', ratt: '10', fel: ['12', '8', '14'], l: '5-4' },
    { t: 'Skriv en formel för antalet stolar vid b bord (mönstret 4, 6, 8 för 1, 2, 3 bord).', ratt: '2b + 2', fel: ['2b', '4b', 'b + 2'], l: '5-4' },
    { t: 'Ett bråkmönster: 1/2, 2/3, 3/4, 4/5... Vad är nästa bråk?', ratt: '5/6', fel: ['4/6', '5/5', '6/7'], l: '5-5' },
    { t: 'Ett bråkmönster: 1/2, 1/4, 1/8, 1/16... Vad är nästa bråk?', ratt: '1/32', fel: ['1/20', '1/18', '1/24'], l: '5-5' },
    { t: 'Kvadrattalen 1, 4, 9, 16... Vad är nästa tal?', ratt: '25', fel: ['20', '24', '36'], l: '5-6' },
    { t: 'Ett mönster: 2, 6, 12, 20... Vad är nästa tal?', ratt: '30', fel: ['28', '32', '24'], l: '5-6' },
    { t: 'Ett prickmönster är 2, 4, 6 för figur 1–3. Skriv en formel för antalet prickar i figur n.', ratt: '2n', fel: ['n + 2', '2n + 2', 'n²'], l: '5-2' },
    { t: 'Ett mönster har formeln antal = 2n. I vilken figur finns 12 prickar?', ratt: '6', fel: ['24', '10', '14'], l: '5-3' },
    { t: 'Beräkna y i y = 100 · 2^x när x = 3.', ratt: '800', fel: ['600', '108', '206'], l: '4-6' },
    { t: 'Lös: x/2 = 8', ratt: '16', fel: ['4', '10', '6'], l: '2-5' },
  ]},

  // ───────── 6. SANNOLIKHET ─────────
  { nr: 14, id: 'ma1a-cp14', namn: 'Grunder, oberoende & utan återläggning', fragor: [
    { t: 'Du slår en tärning. Vad är sannolikheten att få en 4:a?', ratt: '1/6', fel: ['1/4', '4/6', '1/2'], l: '6-1' },
    { t: 'En påse har 10 kulor, varav 4 är gröna. Vad är sannolikheten att dra en grön?', ratt: '2/5', fel: ['4/6', '5/2', '1/4'], l: '6-1' },
    { t: 'Du slår två tärningar. Vad är sannolikheten att BÅDA visar en sexa?', ratt: '1/36', fel: ['1/12', '2/6', '1/6'], l: '6-2' },
    { t: 'En spelare gör mål på en straff med sannolikheten 0,8. Vad är sannolikheten att hon gör mål på TVÅ straffar i rad?', ratt: '0,64', fel: ['1,6', '0,8', '0,16'], l: '6-2' },
    { t: 'En påse har 6 kulor, varav 4 är blå. Du drar en blå och behåller den. Vad är sannolikheten att nästa kula också är blå?', ratt: '3/5', fel: ['4/6', '4/5', '3/6'], l: '6-3' },
    { t: 'En påse har 5 kulor, varav 2 är röda. Du drar två kulor utan att lägga tillbaka. Vad är sannolikheten att BÅDA är röda?', ratt: '1/10', fel: ['4/25', '2/5', '1/5'], l: '6-3' },
    { t: 'Hur mycket är 25 % av 80?', ratt: '20', fel: ['25', '55', '2'], l: '3-1' },
    { t: 'Räkna ut: 1/4 + 2/4', ratt: '3/4', fel: ['3/8', '2/8', '1/2'], l: '1-2' },
    { t: 'Bord i rad: 1 bord → 4 stolar, 2 bord → 6, 3 bord → 8. Hur många stolar vid 4 bord?', ratt: '10', fel: ['12', '8', '14'], l: '5-4' },
    { t: 'Kvadrattalen 1, 4, 9, 16... Vad är nästa tal?', ratt: '25', fel: ['20', '24', '36'], l: '5-6' },
  ]},
  { nr: 15, id: 'ma1a-cp15', namn: 'Prov: Sannolikhet', fragor: [
    { t: 'Sannolikheten att det regnar imorgon är 0,3. Vad är sannolikheten att det INTE regnar?', ratt: '0,7', fel: ['0,3', '1,3', '0,07'], l: '6-4' },
    { t: 'P(att få en 6:a på en tärning) = 1/6. Vad är P(att INTE få en 6:a)?', ratt: '5/6', fel: ['1/6', '6/6', '4/6'], l: '6-4' },
    { t: 'Du slår två tärningar. Sannolikheten att INGEN visar en sexa är 25/36. Vad är sannolikheten att MINST EN visar en sexa?', ratt: '11/36', fel: ['25/36', '1/36', '2/6'], l: '6-5' },
    { t: 'Du singlar slant tre gånger. Vad är sannolikheten att få MINST EN krona?', ratt: '7/8', fel: ['1/8', '3/8', '1/2'], l: '6-5' },
    { t: 'En spelare gör mål på en straff med sannolikheten 0,8. Vad är sannolikheten att hon gör mål på 3 straffar i rad?', ratt: '0,512', fel: ['2,4', '0,64', '0,24'], l: '6-6' },
    { t: 'Vilket är troligast: att få en sexa på en tärning, eller att få krona när du singlar slant?', ratt: 'Krona', fel: ['Sexa', 'Lika troligt', 'Går inte att avgöra'], l: '6-6' },
    { t: 'Du slår två tärningar. Vad är sannolikheten att BÅDA visar en sexa?', ratt: '1/36', fel: ['1/12', '2/6', '1/6'], l: '6-2' },
    { t: 'En påse har 5 kulor, varav 2 är röda. Du drar två kulor utan att lägga tillbaka. Vad är sannolikheten att BÅDA är röda?', ratt: '1/10', fel: ['4/25', '2/5', '1/5'], l: '6-3' },
    { t: 'Ett mönster: 2, 6, 12, 20... Vad är nästa tal?', ratt: '30', fel: ['28', '32', '24'], l: '5-6' },
    { t: 'En taxi kostar 50 kr i startavgift plus 20 kr per km. Skriv en formel för kostnaden y efter x km.', ratt: 'y = 50 + 20x', fel: ['y = 20 + 50x', 'y = 70x', 'y = 50x + 20'], l: '4-5' },
  ]},

  // ───────── 7. STATISTIK ─────────
  { nr: 16, id: 'ma1a-cp16', namn: 'Lägesmått, tabeller & diagram', fragor: [
    { t: 'Vad är medianen av talen 2, 5, 9?', ratt: '5', fel: ['2', '9', '16'], l: '7-1' },
    { t: 'Vad är typvärdet i talen 4, 4, 7, 9?', ratt: '4', fel: ['7', '6', '9'], l: '7-1' },
    { t: 'Vad är variationsbredden i talen 3, 8, 12?', ratt: '9', fel: ['12', '3', '8'], l: '7-1' },
    { t: 'Antal sålda glassar: Måndag 12, Tisdag 8, Onsdag 15. Hur många glassar såldes totalt under de tre dagarna?', ratt: '35', fel: ['33', '30', '15'], l: '7-2' },
    { t: 'En tabell: x = 0, 1, 2, 3 ger y = 2, 4, 8, 16. Är sambandet linjärt?', ratt: 'Nej', fel: ['Ja', 'Vet ej', 'Alltid'], l: '7-2' },
    { t: 'Ju mer du tränar, desto bättre blir din kondition. Är det ett positivt eller negativt samband?', ratt: 'Positivt samband', fel: ['Negativt samband', 'Inget samband', 'Konstant samband'], l: '7-3' },
    { t: 'Visar ett spridningsdiagram där punkterna sjunker ett positivt eller negativt samband?', ratt: 'Negativt samband', fel: ['Positivt samband', 'Inget samband', 'Starkt samband'], l: '7-3' },
    { t: 'Sannolikheten att det regnar imorgon är 0,3. Vad är sannolikheten att det INTE regnar?', ratt: '0,7', fel: ['0,3', '1,3', '0,07'], l: '6-4' },
    { t: 'Hur mycket är 25 % av 80?', ratt: '20', fel: ['25', '55', '2'], l: '3-1' },
    { t: 'En bil kör 120 km på 2 timmar. Vilken medelhastighet i km/h?', ratt: '60 km/h', fel: ['240 km/h', '122 km/h', '30 km/h'], l: '1-4' },
  ]},
  { nr: 17, id: 'ma1a-cp17', namn: 'Prov: Statistik', fragor: [
    { t: 'Tvåvägstabell: Pojkar 8 cyklar/4 går, Flickor 6 cyklar/7 går. Hur många elever är det totalt?', ratt: '25', fel: ['18', '14', '13'], l: '7-4' },
    { t: 'I ett stickprov på 25 elever cyklar 14 till skolan. Skolan har totalt 500 elever. Uppskatta hur många av alla elever som cyklar.', ratt: '280', fel: ['350', '14', '500'], l: '7-4' },
    { t: 'En skola har 600 elever, varav 1/3 går i ettan. Ett representativt urval på 60 elever ska spegla skolan. Hur många ettor bör vara med?', ratt: '20', fel: ['60', '200', '30'], l: '7-5' },
    { t: 'En opinionsundersökning visar 40 % stöd, med felmarginal ±3 procentenheter. Vad är det LÄGSTA värdet det sanna stödet kan vara?', ratt: '37 %', fel: ['43 %', '40 %', '3 %'], l: '7-5' },
    { t: 'Vad är medianen av talen 2, 5, 9?', ratt: '5', fel: ['2', '9', '16'], l: '7-1' },
    { t: 'En tabell: x = 0, 1, 2, 3 ger y = 2, 4, 8, 16. Är sambandet linjärt?', ratt: 'Nej', fel: ['Ja', 'Vet ej', 'Alltid'], l: '7-2' },
    { t: 'Ju mer du tränar, desto bättre blir din kondition. Är det ett positivt eller negativt samband?', ratt: 'Positivt samband', fel: ['Negativt samband', 'Inget samband', 'Konstant samband'], l: '7-3' },
    { t: 'Du singlar slant tre gånger. Vad är sannolikheten att få MINST EN krona?', ratt: '7/8', fel: ['1/8', '3/8', '1/2'], l: '6-5' },
    { t: 'Vad är förändringsfaktorn för en ökning på 12 %?', ratt: '1,12', fel: ['0,88', '12', '1,012'], l: '3-2' },
    { t: 'f(x) = 2x + 1. Beräkna f(3).', ratt: '7', fel: ['8', '6', '5'], l: '4-4' },
  ]},

  // ───────── 8. GEOMETRI + KURSPROV ─────────
  { nr: 18, id: 'ma1a-cp18', namn: 'Area, cirkel & Pythagoras', fragor: [
    { t: 'En rektangel är 5 cm bred och 3 cm hög. Vad är arean?', ratt: '15 cm²', fel: ['16 cm²', '8 cm²', '30 cm²'], l: '8-1' },
    { t: 'En triangel har basen 6 cm och höjden 4 cm. Vad är arean?', ratt: '12 cm²', fel: ['24 cm²', '10 cm²', '20 cm²'], l: '8-1' },
    { t: 'En cirkel har radien 5 cm. Vad är diametern?', ratt: '10 cm', fel: ['2,5 cm', '25 cm', '15,7 cm'], l: '8-2' },
    { t: 'En cirkel har diametern 10 cm. Vad är omkretsen? (π ≈ 3,14)', ratt: '31,4 cm', fel: ['78,5 cm', '15,7 cm', '314 cm'], l: '8-2' },
    { t: 'En rätvinklig triangel har kateterna 3 cm och 4 cm. Hur lång är hypotenusan?', ratt: '5 cm', fel: ['7 cm', '12 cm', '25 cm'], l: '8-3' },
    { t: 'En rätvinklig triangel har kateterna 6 cm och 8 cm. Hur lång är hypotenusan?', ratt: '10 cm', fel: ['14 cm', '48 cm', '100 cm'], l: '8-3' },
    { t: 'Tvåvägstabell: Pojkar 8 cyklar/4 går, Flickor 6 cyklar/7 går. Hur många elever är det totalt?', ratt: '25', fel: ['18', '14', '13'], l: '7-4' },
    { t: 'Vad är variationsbredden i talen 3, 8, 12?', ratt: '9', fel: ['12', '3', '8'], l: '7-1' },
    { t: 'O = 2a + 2b. Beräkna O när a = 6 och b = 4.', ratt: '20', fel: ['12', '48', '10'], l: '2-6' },
    { t: 'Vad är förändringsfaktorn för en minskning på 25 %?', ratt: '0,75', fel: ['1,25', '0,25', '0,975'], l: '3-2' },
  ]},
  { nr: 19, id: 'ma1a-cp19', namn: 'Kursprov: Geometri & hela Ma1a', fragor: [
    { t: 'Arean av en rektangel är A = b · h. Lös ut h.', ratt: 'h = A/b', fel: ['h = A · b', 'h = b/A', 'h = A − b'], l: '8-4' },
    { t: 'En triangels area är A = b · h / 2. Om arean är 12 cm² och basen 6 cm, vad är höjden?', ratt: '4 cm', fel: ['2 cm', '36 cm', '1 cm'], l: '8-4' },
    { t: 'I ett Koch-mönster multipliceras omkretsen med 4/3 i varje steg. Steg 0 har omkretsen 9 cm. Vad är omkretsen i steg 1?', ratt: '12 cm', fel: ['13,5 cm', '6,75 cm', '36 cm'], l: '8-5' },
    { t: 'I ett Koch-mönster multipliceras omkretsen med samma faktor (4/3) varje steg. Är det linjär eller exponentiell tillväxt?', ratt: 'Exponentiell', fel: ['Linjär', 'Konstant', 'Avtagande'], l: '8-5' },
    { t: 'Ett A4-papper är 21,0 cm brett och 29,7 cm långt. Räkna förhållandet mellan långsidan och kortsidan. Avrunda till 2 decimaler.', ratt: '1,41', fel: ['8,70', '0,71', '50,70'], l: '8-6' },
    { t: 'En triangel är inskriven i en halvcirkel och är därför rätvinklig. Kateterna är 6 cm och 8 cm. Hur lång är diametern (som är hypotenusan)?', ratt: '10 cm', fel: ['14 cm', '48 cm', '7 cm'], l: '8-6' },
    { t: 'Lös: 7x − 4 = 4x + 11', ratt: '5', fel: ['3', '2,3', '15'], l: '2-4' },
    { t: 'f(x) = 3x − 2. Beräkna f(4).', ratt: '10', fel: ['14', '5', '11'], l: '4-4' },
    { t: 'En jacka kostar 800 kr. Priset höjs med 10 %. Vad är det nya priset?', ratt: '880 kr', fel: ['810 kr', '88 kr', '720 kr'], l: '3-2' },
    { t: 'Du slår två tärningar. Vad är sannolikheten att BÅDA visar en sexa?', ratt: '1/36', fel: ['1/12', '2/6', '1/6'], l: '6-2' },
  ]},
];
