/**
 * Checkpoints — Del 2: Logaritmer, statistik, geometri (14 st), Prövning Ma2b
 * ==========================================================================
 * Skapar fjorton checkpoint-quiz i en körning. 10 frågor per quiz,
 * feldistraktorer på klassiska misstag, träna mer-länk till rätt
 * Ma2b-delmomentsida vid fel svar.
 *
 * Alla namn i filen slutar på "2bDel2" / "_2B_DEL2" så att den kan klistras in
 * i SAMMA Apps Script-projekt som de andra checkpoint-filerna utan att krocka.
 *
 * OBS om exponentialekvationer: Ma2b löser dem med LOGARITM (lg), inte genom att
 * pröva sig fram som Ma2a. Frågorna här speglar den metoden.
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
 * MALL_ID_2B_DEL2 nedan pekar på den kopian. Generatorn tömmer den på frågor och
 * lägger in checkpointens egna, så kopian behöver inte städas för hand.
 *
 * KONTROLLERA FÖRSTA FORMULÄRET efter första körningen: står det
 * "Alla på AcadeMedia" under Respondenter, och släpps betyget omedelbart?
 * Gör det inte det har arvet inte fungerat — säg till innan du kör resten.
 *
 * KÖRS SÅ HÄR (en gång, av Simon, inloggad med dbgy.se-kontot):
 *   1. script.google.com → Nytt projekt → klistra in HELA filen → spara
 *   2. Kör funktionen "skapaDel2Checkpoints2b" (~2-3 min)
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

const MALL_ID_2B_DEL2 = '1e0tDs_lbJ2hjeF2POdITNlQASNKeq-3ZK2oeLfDT_RU';   // kopia av en Ma1-checkpoint i drift, se ovan
const BAS_URL_2B_DEL2 = 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/';
const KURSNAMN_2B_DEL2 = 'Prövning Ma2b';

function skapaDel2Checkpoints2b() {
  const resultat = [];
  for (const cp of CHECKPOINTS_2B_DEL2) {
    const url = skapaCheckpoint2bDel2(cp);
    resultat.push(cp.namn + '  [' + KURSNAMN_2B_DEL2 + ']' + '\n  PUBLICERAD: ' + url.publicerad + '\n  REDIGERA:   ' + url.redigera);
  }
  Logger.log('\n===== ALLA FJORTON (MA2B DEL 2) SKAPADE =====\n\n' + resultat.join('\n\n'));
}

function skapaCheckpoint2bDel2(cp) {
  const titel = 'Checkpoint — ' + cp.namn + ' (' + KURSNAMN_2B_DEL2 + ')';
  let form;
  if (MALL_ID_2B_DEL2) {
    const kopia = DriveApp.getFileById(MALL_ID_2B_DEL2).makeCopy(titel);
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

  const sidaUrl = BAS_URL_2B_DEL2 + cp.slug;

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

const CHECKPOINTS_2B_DEL2 = [
  // ───────── LOGARITMER ─────────
  {
    namn: 'Potenslagar', slug: 'logaritmer/potenslagar',
    fragor: [
      { t: 'Skriv som en potens: 5⁸ · 5³', ratt: '5¹¹', fel: ['5²⁴', '25¹¹', '5⁵'], avsnitt: 'Multiplikation — addera exponenterna' },
      { t: 'Skriv som en potens: 7¹² / 7⁵', ratt: '7⁷', fel: ['7¹⁷', '7⁶⁰', '1⁷'], avsnitt: 'Division — subtrahera exponenterna' },
      { t: 'Skriv som en potens: (4³)⁴', ratt: '4¹²', fel: ['4⁷', '4⁸¹', '64¹²'], avsnitt: 'Potens av en potens' },
      { t: 'Förenkla och skriv som en potens: (3⁵ · 3⁴) / 3⁶', ratt: '3³', fel: ['3¹⁵', '3⁷', '3²⁰'], avsnitt: 'Flera lagar i samma uttryck' },
      { t: 'Vad är 25⁰?', ratt: '1', fel: ['0', '25', 'Odefinierat'], avsnitt: 'Exponenten 0' },
      { t: 'Skriv 2⁻³ utan negativ exponent.', ratt: '1/8', fel: ['−8', '−6', '1/6'], avsnitt: 'Negativa exponenter' },
      { t: 'Vad betyder en negativ exponent?', ratt: 'Att potensen hamnar i nämnaren', fel: ['Att talet blir negativt', 'Att man ska subtrahera', 'Att svaret är noll'], avsnitt: 'Negativa exponenter' },
      { t: 'Går 3⁴ · 7² att skriva som en enda potens?', ratt: 'Nej — baserna är olika', fel: ['Ja, 21⁶', 'Ja, 10⁸', 'Ja, 21⁸'], avsnitt: 'Lagarna kräver samma bas' },
      { t: 'Skriv som en potens: 6¹¹ · 6', ratt: '6¹²', fel: ['6¹¹', '36¹¹', '6¹¹·¹'], avsnitt: 'Multiplikation — addera exponenterna' },
      { t: 'En elev skriver 5² · 5³ = 25⁵. Vad är felet?', ratt: 'Basen ska stå kvar oförändrad — bara exponenterna adderas', fel: ['Exponenterna ska multipliceras', 'Basen ska adderas till exponenten', 'Ingenting — svaret är rätt'], avsnitt: 'Multiplikation — addera exponenterna' },
    ],
  },
  {
    namn: 'Exponentialfunktioner', slug: 'logaritmer/exponentialfunktioner',
    fragor: [
      { t: 'Ett kapital är 50 000 kr och växer 4 % per år. Skriv en funktion för beloppet efter t år.', ratt: 'y = 50 000 · 1,04^t', fel: ['y = 50 000 · 0,04^t', 'y = 50 000 · 4^t', 'y = 50 000 + 1,04t'], avsnitt: 'Ställa upp ur en text' },
      { t: 'En bil är värd 320 000 kr och tappar 15 % per år. Skriv en funktion för värdet efter t år.', ratt: 'y = 320 000 · 0,85^t', fel: ['y = 320 000 · 1,15^t', 'y = 320 000 · 0,15^t', 'y = 320 000 − 0,15t'], avsnitt: 'Ställa upp ur en text' },
      { t: 'Vilken förändringsfaktor hör till en ökning på 3 % per period?', ratt: '1,03', fel: ['0,03', '3', '0,97'], avsnitt: 'Förändringsfaktorn ur procent' },
      { t: 'Vilken förändringsfaktor hör till en minskning på 40 % per period?', ratt: '0,60', fel: ['1,40', '0,40', '−0,40'], avsnitt: 'Förändringsfaktorn ur procent' },
      { t: 'I funktionen y = 1 200 · 0,95^x, vad är startvärdet?', ratt: '1 200', fel: ['0,95', '1 140', '0'], avsnitt: 'Startvärdet är gratis' },
      { t: 'Varför är startvärdet talet före potensen?', ratt: 'Vid x = 0 blir potensen 1, och kvar står bara C', fel: ['För att det står först', 'För att a alltid är 1', 'För att x = 1 vid start'], avsnitt: 'Startvärdet är gratis' },
      { t: 'Växer eller avtar funktionen y = 300 · 1,12^x?', ratt: 'Växer', fel: ['Avtar', 'Varken eller — den är konstant', 'Det beror på x'], avsnitt: 'Växer eller avtar' },
      { t: 'Hur ser du direkt om en exponentialfunktion avtar?', ratt: 'Förändringsfaktorn a är mindre än 1', fel: ['Startvärdet C är litet', 'Exponenten är negativ', 'a är större än 1'], avsnitt: 'Växer eller avtar' },
      { t: 'Vad skiljer en exponentialfunktion från en linjär funktion?', ratt: 'Den exponentiella multipliceras med samma faktor varje steg, den linjära adderas med samma tal', fel: ['Den exponentiella växer alltid snabbare från början', 'Den linjära har inget startvärde', 'Den exponentiella kan inte avta'], avsnitt: 'Mallen y = C · a^x' },
      { t: 'Ett belopp växer 10 % per år i 2 år. Med vilken faktor har det växt totalt?', ratt: '1,10², alltså 1,21', fel: ['20 %, alltså faktorn 1,20', '2 · 1,10 = 2,20', '1,10 + 1,10 = 2,20'], avsnitt: 'Procent per period staplas inte' },
    ],
  },
  {
    namn: 'Tiologaritmer', slug: 'logaritmer/tiologaritmer',
    fragor: [
      { t: 'Vad betyder lg 1000?', ratt: '10 upphöjt till vad blir 1000?', fel: ['1000 upphöjt till vad blir 10?', '1000 delat med 10', '10 gånger 1000'], avsnitt: 'Vad lg betyder' },
      { t: 'Beräkna: lg 100000', ratt: '5', fel: ['100000', '10', '4'], avsnitt: 'Logaritmen av tiopotenser' },
      { t: 'Beräkna: lg 100', ratt: '2', fel: ['10', '100', '20'], avsnitt: 'Logaritmen av tiopotenser' },
      { t: 'Beräkna: lg 0,01', ratt: '−2', fel: ['2', '−0,01', '0,01'], avsnitt: 'Negativa logaritmer' },
      { t: 'Beräkna: lg 0,0001', ratt: '−4', fel: ['4', '−0,0001', '−3'], avsnitt: 'Negativa logaritmer' },
      { t: 'Beräkna: lg 1', ratt: '0', fel: ['1', '10', 'Odefinierat'], avsnitt: 'Logaritmen av tiopotenser' },
      { t: 'Beräkna: 10^(lg 45)', ratt: '45', fel: ['10', '4,5', '1,65'], avsnitt: '10 upphöjt till lg tar ut varandra' },
      { t: 'Finns lg (−50)?', ratt: 'Nej — en tiopotens blir aldrig negativ', fel: ['Ja, det blir −1,7', 'Ja, det blir 1,7', 'Ja, men bara med miniräknare'], avsnitt: 'Vad lg inte kan' },
      { t: 'Mellan vilka heltal ligger lg 750?', ratt: 'Mellan 2 och 3', fel: ['Mellan 1 och 2', 'Mellan 7 och 8', 'Mellan 3 och 4'], avsnitt: 'Rimlighetsbedöm svaret' },
      { t: 'Lös ekvationen: lg x = 3', ratt: 'x = 1000', fel: ['x = 30', 'x = 0,3', 'x = 3'], avsnitt: 'Lösa lg x = k' },
    ],
  },
  {
    namn: 'Exponentialekvationer', slug: 'logaritmer/exponentialekvationer',
    fragor: [
      { t: 'Hur löser du 10^x = 850?', ratt: 'Ta lg på båda leden: x = lg 850', fel: ['Dela båda leden med 10', 'Dra tionde roten', 'Dra bort 10 från båda leden'], avsnitt: 'Logaritmera båda leden' },
      { t: 'Lös ekvationen: 10^x = 1000', ratt: 'x = 3', fel: ['x = 100', 'x = 10', 'x = 990'], avsnitt: 'Logaritmera båda leden' },
      { t: 'Lös ekvationen: lg x = 5', ratt: 'x = 100000', fel: ['x = 50', 'x = 0,5', 'x = 5'], avsnitt: 'Lösa lg x = k' },
      { t: 'Vad är första steget i 4 · 10^x = 800?', ratt: 'Dela båda leden med 4', fel: ['Ta lg direkt på 4 · 10^x', 'Dra bort 4', 'Multiplicera med 10'], avsnitt: 'Skala bort talet framför' },
      { t: 'Lös ekvationen: 4 · 10^x = 400', ratt: 'x = 2', fel: ['x = 100', 'x = 3', 'x = 396'], avsnitt: 'Skala bort talet framför' },
      { t: 'Hur löser du 5^x = 90 när basen inte är 10?', ratt: 'x = lg 90 / lg 5', fel: ['x = lg 90 − lg 5', 'x = lg (90 / 5)', 'x = lg 5 / lg 90'], avsnitt: 'Annan bas än 10' },
      { t: 'Vad blir x i 2^x = 50? Svara med två decimaler.', ratt: '5,64', fel: ['25,00', '1,40', '3,91'], avsnitt: 'Annan bas än 10' },
      { t: 'En summa växer 5 % per år. Vilken ekvation ger tiden till fördubbling?', ratt: '1,05^t = 2', fel: ['1,05t = 2', '1,05^t = 100', '0,05^t = 2'], avsnitt: 'Hur lång tid tar det?' },
      { t: 'Varför räcker det inte att pröva sig fram i 3^x = 45?', ratt: 'Svaret är inget helt tal — 3³ = 27 och 3⁴ = 81, så x ligger emellan', fel: ['Prövning är alltid förbjudet', 'Ekvationen saknar lösning', 'Basen måste vara 10'], avsnitt: 'Annan bas än 10' },
      { t: 'Vilket svar är rimligt på 10^x = 6000?', ratt: 'Ungefär 3,8', fel: ['Ungefär 600', 'Ungefär 60', 'Ungefär 0,4'], avsnitt: 'Rimlighetsbedöm svaret' },
    ],
  },
  // ───────── STATISTIK ─────────
  {
    namn: 'Lägesmått', slug: 'statistik/lagesmatt',
    fragor: [
      { t: 'Bestäm medelvärdet av 9, 13, 16 och 22.', ratt: '15', fel: ['60', '14,5', '13'], avsnitt: 'Medelvärde' },
      { t: 'Bestäm medianen av 4, 7, 15, 18 och 36.', ratt: '15', fel: ['16', '7', '18'], avsnitt: 'Median' },
      { t: 'Bestäm medianen av 8, 12, 18 och 24.', ratt: '15', fel: ['12', '18', '15,5'], avsnitt: 'Median vid jämnt antal' },
      { t: 'Hur hittar du medianen när antalet värden är jämnt?', ratt: 'Ta medelvärdet av de två mittersta värdena', fel: ['Ta det största av de två mittersta', 'Ta det minsta av de två mittersta', 'Medianen finns inte då'], avsnitt: 'Median vid jämnt antal' },
      { t: 'Bestäm typvärdet av 2, 5, 5, 5, 8 och 12.', ratt: '5', fel: ['6,2', '6,5', '3'], avsnitt: 'Typvärde' },
      { t: 'Vad är typvärdet?', ratt: 'Det värde som förekommer flest gånger', fel: ['Det mittersta värdet', 'Genomsnittet', 'Skillnaden mellan största och minsta'], avsnitt: 'Typvärde' },
      { t: 'Vad måste du göra INNAN du bestämmer medianen?', ratt: 'Sortera värdena i storleksordning', fel: ['Räkna ut medelvärdet', 'Ta bort det största värdet', 'Ingenting'], avsnitt: 'Median' },
      { t: 'I en klass tjänar nio elever 5 000 kr i månaden på extrajobb och en elev tjänar 95 000. Vilket mått beskriver klassen bäst?', ratt: 'Medianen — den påverkas inte av det extrema värdet', fel: ['Medelvärdet', 'Variationsbredden', 'Summan'], avsnitt: 'Vilket mått passar?' },
      { t: 'En tabell visar antal syskon: 0 hos 4 elever, 1 hos 8 elever, 2 hos 8 elever. Vad är medelvärdet?', ratt: '1,2', fel: ['1', '3', '6,7'], avsnitt: 'Medelvärde ur frekvenstabell' },
      { t: 'Vad är klassmitten i klassen 40 ≤ x < 50?', ratt: '45', fel: ['40', '50', '10'], avsnitt: 'Klassindelad data' },
    ],
  },
  {
    namn: 'Spridningsmått och lådagram', slug: 'statistik/spridningsmatt-och-ladagram',
    fragor: [
      { t: 'Bestäm variationsbredden för 11, 16, 24 och 38.', ratt: '27', fel: ['22,25', '49', '8'], avsnitt: 'Variationsbredd' },
      { t: 'Vad är variationsbredden?', ratt: 'Största värdet minus minsta värdet', fel: ['Övre kvartil minus nedre kvartil', 'Medelvärdet minus medianen', 'Antalet värden'], avsnitt: 'Variationsbredd' },
      { t: 'Ett lådagram har nedre kvartil 27 och övre kvartil 48. Bestäm kvartilavståndet.', ratt: '21', fel: ['75', '37,5', '48'], avsnitt: 'Kvartilavstånd' },
      { t: 'Vad beskriver kvartilavståndet?', ratt: 'Spridningen bland de mittersta 50 procenten av värdena', fel: ['Spridningen bland alla värden', 'Avståndet mellan medelvärde och median', 'Antalet observationer i lådan'], avsnitt: 'Kvartilavstånd' },
      { t: 'Hur många procent av observationerna ligger mellan medianen och den övre kvartilen?', ratt: '25 %', fel: ['50 %', '75 %', '12,5 %'], avsnitt: 'Andelarna i lådagrammet' },
      { t: 'Hur många procent av observationerna är större än medianen?', ratt: '50 %', fel: ['25 %', '75 %', '100 %'], avsnitt: 'Andelarna i lådagrammet' },
      { t: 'Hur många procent ligger i själva lådan i ett lådagram?', ratt: '50 %', fel: ['25 %', '75 %', '100 %'], avsnitt: 'Andelarna i lådagrammet' },
      { t: 'Ett lådagram visar minsta värdet 12, nedre kvartil 20, median 27, övre kvartil 35 och största värdet 51. Vad är variationsbredden?', ratt: '39', fel: ['15', '23', '63'], avsnitt: 'Läsa av ett lådagram' },
      { t: 'Samma lådagram: minsta 12, Q1 20, median 27, Q3 35, största 51. Vad är kvartilavståndet?', ratt: '15', fel: ['39', '55', '8'], avsnitt: 'Läsa av ett lådagram' },
      { t: 'Ines har kvartilavståndet 22 och Jonas har kvartilavståndet 9. Vem har störst spridning i mitten?', ratt: 'Ines', fel: ['Jonas', 'Lika stor', 'Det går inte att avgöra'], avsnitt: 'Jämföra två lådagram' },
    ],
  },
  {
    namn: 'Normalfördelning', slug: 'statistik/normalfordelning',
    fragor: [
      { t: 'Hur många procent av värdena ligger inom en standardavvikelse från medelvärdet?', ratt: '68 %', fel: ['95 %', '99,7 %', '50 %'], avsnitt: '68-95-99,7-regeln' },
      { t: 'Hur många procent ligger inom tre standardavvikelser från medelvärdet?', ratt: '99,7 %', fel: ['68 %', '95 %', '100 %'], avsnitt: '68-95-99,7-regeln' },
      { t: 'Medelvärdet är 250 och standardavvikelsen 15. Hur många standardavvikelser från medelvärdet ligger värdet 280?', ratt: '2', fel: ['30', '1', '15'], avsnitt: 'Räkna i standardavvikelser' },
      { t: 'Medelvärdet är 90 och standardavvikelsen 7. Vilket värde ligger 2 standardavvikelser UNDER medelvärdet?', ratt: '76', fel: ['83', '104', '45'], avsnitt: 'Räkna i standardavvikelser' },
      { t: 'En normalfördelning har medelvärdet 500 och standardavvikelsen 20. Hur många procent av värdena är större än 540?', ratt: '2,3 %', fel: ['5 %', '16 %', '2,5 %'], avsnitt: 'Andel över eller under' },
      { t: 'En normalfördelning har medelvärdet 45 och standardavvikelsen 3. Hur många procent är MINDRE än 42?', ratt: '16 %', fel: ['32 %', '68 %', '2,3 %'], avsnitt: 'Andel över eller under' },
      { t: 'Varför är andelen över medelvärdet alltid 50 % i en normalfördelning?', ratt: 'Kurvan är symmetrisk kring medelvärdet', fel: ['För att medelvärdet alltid är 0', 'För att standardavvikelsen är 1', 'För att hälften av värdena är negativa'], avsnitt: 'Symmetrin' },
      { t: 'Hur räknar du om en andel till ett antal?', ratt: 'Multiplicerar andelen med hela antalet', fel: ['Delar antalet med andelen', 'Adderar andelen till antalet', 'Multiplicerar med standardavvikelsen'], avsnitt: 'Från andel till antal' },
      { t: '2,3 % av 4 000 produkter — hur många är det?', ratt: '92', fel: ['23', '920', '174'], avsnitt: 'Från andel till antal' },
      { t: '16 % av 1 500 elever — hur många är det?', ratt: '240', fel: ['160', '24', '960'], avsnitt: 'Från andel till antal' },
    ],
  },
  {
    namn: 'Regression och korrelation', slug: 'statistik/regression-och-korrelation',
    fragor: [
      { t: 'Punkterna i ett spridningsdiagram stiger när man går åt höger. Vilket samband är det?', ratt: 'Positivt', fel: ['Negativt', 'Inget samband', 'Det går inte att avgöra'], avsnitt: 'Positivt eller negativt' },
      { t: 'Punkterna i ett spridningsdiagram sjunker när man går åt höger. Vilket samband är det?', ratt: 'Negativt', fel: ['Positivt', 'Inget samband', 'Det går inte att avgöra'], avsnitt: 'Positivt eller negativt' },
      { t: 'Vad kallas den linje som anpassas så nära punkterna som möjligt?', ratt: 'Regressionslinjen', fel: ['Symmetrilinjen', 'Medianlinjen', 'Normallinjen'], avsnitt: 'Regressionslinjen' },
      { t: 'När är ett samband starkt?', ratt: 'När punkterna ligger nära regressionslinjen', fel: ['När punkterna ligger utspridda', 'När linjen lutar brant', 'När det finns många punkter'], avsnitt: 'Starkt eller svagt' },
      { t: 'Två diagram visar samma sorts samband. I det ena ligger punkterna nästan på linjen, i det andra är de spridda. Vilket är starkast?', ratt: 'Det med punkterna nära linjen', fel: ['Det med spridda punkter', 'Lika starka', 'Det går inte att jämföra'], avsnitt: 'Starkt eller svagt' },
      { t: 'Regressionslinjen y = 2x + 30 beskriver ett samband. Vad blir prognosen för x = 15?', ratt: '60', fel: ['30', '45', '32'], avsnitt: 'Göra en prognos' },
      { t: 'Regressionslinjen y = 0,5x + 12 beskriver ett samband. Vad blir prognosen för x = 40?', ratt: '32', fel: ['20', '52', '12'], avsnitt: 'Göra en prognos' },
      { t: 'I regressionslinjen y = 2,4x + 18 — vad betyder 2,4?', ratt: 'Att y ökar med 2,4 när x ökar med 1', fel: ['Att y är 2,4 när x är 0', 'Att sambandet är starkt', 'Att det finns 2,4 mätpunkter'], avsnitt: 'Tolka k i sambandet' },
      { t: 'Det finns ett starkt samband mellan glassförsäljning och antal drunkningsolyckor. Betyder det att glass orsakar drunkningar?', ratt: 'Nej — varmt väder ligger bakom båda', fel: ['Ja, sambandet bevisar det', 'Ja, om sambandet är över 90 %', 'Det går inte att avgöra alls'], avsnitt: 'Samband är inte orsak' },
      { t: 'Vad betyder det att samband inte är samma sak som orsak?', ratt: 'Två storheter kan följas åt utan att den ena orsakar den andra', fel: ['Att samband alltid är slumpmässiga', 'Att regressionslinjen är fel', 'Att man aldrig får göra prognoser'], avsnitt: 'Samband är inte orsak' },
    ],
  },
  // ───────── GEOMETRI ─────────
  {
    namn: 'Vinklar', slug: 'geometri/vinklar',
    fragor: [
      { t: 'Vad är vinkelsumman i en triangel?', ratt: '180°', fel: ['360°', '90°', '270°'], avsnitt: 'Vinkelsumman' },
      { t: 'Vad är vinkelsumman i en fyrhörning?', ratt: '360°', fel: ['180°', '540°', '270°'], avsnitt: 'Vinkelsumman' },
      { t: 'Två vinklar i en triangel är 71° och 43°. Bestäm den tredje.', ratt: '66°', fel: ['114°', '246°', '76°'], avsnitt: 'Vinkelsumman' },
      { t: 'Två vinklar i en triangel är 90° och 34°. Bestäm den tredje.', ratt: '56°', fel: ['124°', '46°', '236°'], avsnitt: 'Vinkelsumman' },
      { t: 'En vinkel är 118°. Hur stor är dess sidovinkel?', ratt: '62°', fel: ['242°', '72°', '118°'], avsnitt: 'Sidovinklar' },
      { t: 'Vad gäller för två sidovinklar?', ratt: 'De blir tillsammans 180°', fel: ['De är lika stora', 'De blir tillsammans 360°', 'De blir tillsammans 90°'], avsnitt: 'Sidovinklar' },
      { t: 'Två linjer skär varandra. En av vinklarna är 73°. Hur stor är vinkeln mitt emot?', ratt: '73°', fel: ['107°', '17°', '287°'], avsnitt: 'Vertikalvinklar' },
      { t: 'Vad gäller för vertikalvinklar?', ratt: 'De är lika stora', fel: ['De blir tillsammans 180°', 'De blir tillsammans 90°', 'Den ena är dubbelt så stor'], avsnitt: 'Vertikalvinklar' },
      { t: 'I en fyrhörning är tre av vinklarna 80°, 110° och 95°. Bestäm den fjärde.', ratt: '75°', fel: ['285°', '65°', '105°'], avsnitt: 'Vinkelsumman' },
      { t: 'En likbent triangel har två lika vinklar på 72° var. Bestäm den tredje.', ratt: '36°', fel: ['108°', '72°', '144°'], avsnitt: 'Likbenta trianglar' },
    ],
  },
  {
    namn: 'Likformighet', slug: 'geometri/likformighet',
    fragor: [
      { t: 'Vad gör två figurer likformiga?', ratt: 'Samma form — lika vinklar och alla sidor förstorade med samma faktor', fel: ['Samma area', 'Samma omkrets', 'Att de har lika många hörn'], avsnitt: 'Vad likformighet är' },
      { t: 'Två likformiga trianglar. En sida är 6 cm i den mindre och motsvaras av 24 cm i den större. Vad är skalfaktorn?', ratt: '4', fel: ['18', '0,25', '30'], avsnitt: 'Skalfaktorn' },
      { t: 'Två likformiga figurer har skalfaktorn 5. En sida är 8 cm i den mindre. Hur lång är motsvarande sida i den större?', ratt: '40 cm', fel: ['13 cm', '1,6 cm', '3 cm'], avsnitt: 'Räkna med skalfaktorn' },
      { t: 'Två likformiga figurer har skalfaktorn 3. En sida är 27 cm i den STÖRRE. Hur lång är motsvarande sida i den mindre?', ratt: '9 cm', fel: ['81 cm', '24 cm', '30 cm'], avsnitt: 'Räkna med skalfaktorn' },
      { t: 'Två likformiga trianglar. I den mindre är sidorna 5 cm och 8 cm. Sidan som motsvarar 5 cm är 15 cm i den större. Hur lång är den sida som motsvarar 8 cm?', ratt: '24 cm', fel: ['18 cm', '12 cm', '40 cm'], avsnitt: 'Räkna ut en okänd sida' },
      { t: 'Två likformiga trianglar. I den större är sidorna 20 cm och 30 cm. Sidan som motsvarar 20 cm är 4 cm i den mindre. Hur lång är den sida som motsvarar 30 cm?', ratt: '6 cm', fel: ['14 cm', '10 cm', '150 cm'], avsnitt: 'Räkna ut en okänd sida' },
      { t: 'Två trianglar har vinklarna 35°, 65° och 80° respektive 35°, 65° och 80°. Är de likformiga?', ratt: 'Ja — lika vinklar räcker för trianglar', fel: ['Nej — sidorna måste också anges', 'Bara om de har samma area', 'Det går inte att avgöra'], avsnitt: 'Vad likformighet är' },
      { t: 'En 1,8 m hög person kastar en 3 m lång skugga. Samtidigt kastar ett träd en 15 m lång skugga. Hur högt är trädet?', ratt: '9 m', fel: ['25 m', '27 m', '5 m'], avsnitt: 'Skuggor och höjder' },
      { t: 'Vad är det vanligaste felet när man ställer upp en proportion?', ratt: 'Att para ihop fel sida med fel sida', fel: ['Att använda decimaler', 'Att förkorta bråket', 'Att räkna i centimeter'], avsnitt: 'Para ihop rätt sidor' },
      { t: 'Två figurer är likformiga med skalfaktorn 1. Vad betyder det?', ratt: 'De är lika stora — kongruenta', fel: ['Den ena är dubbelt så stor', 'De är inte likformiga', 'Den ena har area 1'], avsnitt: 'Skalfaktorn' },
    ],
  },
  {
    namn: 'Topptriangel-, transversal- och bisektrissatsen', slug: 'geometri/topptriangel-och-transversalsatsen',
    fragor: [
      { t: 'Vad skapar en topptriangel?', ratt: 'En linje som är parallell med en av triangelns sidor', fel: ['En linje genom två hörn', 'En höjd från ett hörn', 'En cirkel runt triangeln'], avsnitt: 'Känn igen topptriangeln' },
      { t: 'Varför är topptriangeln likformig med den stora triangeln?', ratt: 'Den parallella linjen ger samma vinklar i båda trianglarna', fel: ['De har samma area', 'De har samma omkrets', 'Den lilla är alltid hälften så stor'], avsnitt: 'Känn igen topptriangeln' },
      { t: 'I en triangel är DE parallell med AC. BE = 4, EC = 4 och DE = 6. Bestäm AC.', ratt: '12', fel: ['6', '8', '24'], avsnitt: 'Topptriangelsatsen' },
      { t: 'I en triangel är DE parallell med AC. BE = 3, EC = 6 och DE = 5. Bestäm AC.', ratt: '15', fel: ['10', '7,5', '30'], avsnitt: 'Topptriangelsatsen' },
      { t: 'I en triangel är DE parallell med AC. BD = 4, BA = 12 och AC = 21. Bestäm DE.', ratt: '7', fel: ['63', '10,5', '5,25'], avsnitt: 'Topptriangelsatsen' },
      { t: 'I en triangel är DE parallell med AC. BD = 3, DA = 6 och BE = 4. Bestäm EC med transversalsatsen.', ratt: '8', fel: ['2', '12', '6'], avsnitt: 'Transversalsatsen' },
      { t: 'I en triangel är DE parallell med AC. BD = 5, DA = 10 och BE = 3. Bestäm EC.', ratt: '6', fel: ['1,5', '9', '15'], avsnitt: 'Transversalsatsen' },
      { t: 'Vad är skillnaden mellan topptriangelsatsen och transversalsatsen?', ratt: 'Topptriangelsatsen jämför hela sidor, transversalsatsen jämför delsträckorna', fel: ['De ger alltid samma svar', 'Transversalsatsen kräver en rät vinkel', 'Topptriangelsatsen gäller bara likbenta trianglar'], avsnitt: 'Hela sidan eller delsträckan' },
      { t: 'BD = 3 och DA = 5. Hur lång är hela sidan BA?', ratt: '8', fel: ['3', '5', '15'], avsnitt: 'Hela sidan eller delsträckan' },
      { t: 'Vilket är det vanligaste felet med de här satserna?', ratt: 'Att blanda ihop hela sidan med bara delsträckan', fel: ['Att glömma dividera med 2', 'Att räkna i fel enhet', 'Att använda Pythagoras sats i stället'], avsnitt: 'Hela sidan eller delsträckan' },
    ],
  },
  {
    namn: 'Randvinkelsatsen', slug: 'geometri/randvinkelsatsen',
    fragor: [
      { t: 'Var ligger spetsen på en medelpunktsvinkel?', ratt: 'I cirkelns medelpunkt', fel: ['På cirkelns rand', 'Utanför cirkeln', 'På diametern'], avsnitt: 'Randvinkel eller medelpunktsvinkel' },
      { t: 'Var ligger spetsen på en randvinkel?', ratt: 'På cirkelns rand', fel: ['I medelpunkten', 'Utanför cirkeln', 'I mitten av kordan'], avsnitt: 'Randvinkel eller medelpunktsvinkel' },
      { t: 'En medelpunktsvinkel är 80°. Hur stor är randvinkeln på samma båge?', ratt: '40°', fel: ['160°', '80°', '100°'], avsnitt: 'Randvinkeln är hälften' },
      { t: 'En medelpunktsvinkel är 130°. Hur stor är randvinkeln på samma båge?', ratt: '65°', fel: ['260°', '130°', '50°'], avsnitt: 'Randvinkeln är hälften' },
      { t: 'En randvinkel är 28°. Hur stor är medelpunktsvinkeln på samma båge?', ratt: '56°', fel: ['14°', '28°', '152°'], avsnitt: 'Randvinkeln är hälften' },
      { t: 'En randvinkel är 45°. Hur stor är medelpunktsvinkeln på samma båge?', ratt: '90°', fel: ['22,5°', '45°', '135°'], avsnitt: 'Randvinkeln är hälften' },
      { t: 'Två randvinklar står på samma båge. Den ena är 37°. Hur stor är den andra?', ratt: '37°', fel: ['74°', '18,5°', '143°'], avsnitt: 'Randvinklar på samma båge' },
      { t: 'Vad gäller för alla randvinklar som står på samma båge?', ratt: 'De är lika stora', fel: ['De blir tillsammans 180°', 'Den närmast medelpunkten är störst', 'De är hälften av varandra'], avsnitt: 'Randvinklar på samma båge' },
      { t: 'En triangel är inskriven i en cirkel så att en sida är cirkelns diameter. Hur stor är vinkeln mittemot diametern?', ratt: '90°', fel: ['45°', '180°', '60°'], avsnitt: 'Randvinkel på en diameter' },
      { t: 'Varför blir randvinkeln på en diameter alltid 90°?', ratt: 'Diametern ger medelpunktsvinkeln 180°, och randvinkeln är hälften', fel: ['För att diametern delar cirkeln i två delar', 'För att alla trianglar i cirklar är rätvinkliga', 'För att radien är halva diametern'], avsnitt: 'Randvinkel på en diameter' },
    ],
  },
  {
    namn: 'Kordasatsen', slug: 'geometri/kordasatsen',
    fragor: [
      { t: 'Vad är en korda?', ratt: 'En sträcka mellan två punkter på cirkelns rand', fel: ['En sträcka från medelpunkten till randen', 'En linje som tangerar cirkeln', 'Cirkelns omkrets'], avsnitt: 'Vad en korda är' },
      { t: 'Vad säger kordasatsen?', ratt: 'Produkten av delarna är lika stor för båda kordorna', fel: ['Summan av delarna är lika stor', 'Kordorna är alltid lika långa', 'Delarna är alltid lika stora'], avsnitt: 'Kordasatsen' },
      { t: 'Två kordor skär varandra. Den ena delas i 8 och 3, den andra i 6 och x. Bestäm x.', ratt: '4', fel: ['5', '24', '11'], avsnitt: 'Ställ upp ekvationen' },
      { t: 'Två kordor skär varandra. Den ena delas i 10 och 4, den andra i 8 och x. Bestäm x.', ratt: '5', fel: ['6', '40', '2'], avsnitt: 'Ställ upp ekvationen' },
      { t: 'Två kordor skär varandra. Den ena delas i 12 och 2, den andra i 6 och x. Bestäm x.', ratt: '4', fel: ['8', '24', '3'], avsnitt: 'Ställ upp ekvationen' },
      { t: 'Två kordor skär varandra. Den ena delas i 9 och 4, den andra i x och 12. Bestäm x.', ratt: '3', fel: ['4', '36', '1'], avsnitt: 'Ställ upp ekvationen' },
      { t: 'Två kordor skär varandra. Den ena delas i 15 och 2, den andra i 10 och x. Bestäm x.', ratt: '3', fel: ['5', '30', '7'], avsnitt: 'Ställ upp ekvationen' },
      { t: 'Två kordor skär varandra. Den ena delas i 6 och 6, den andra i 9 och x. Bestäm x.', ratt: '4', fel: ['6', '3', '36'], avsnitt: 'Ställ upp ekvationen' },
      { t: 'Vilken ekvation ställer du upp när en korda delas i a och b, den andra i c och x?', ratt: 'a · b = c · x', fel: ['a + b = c + x', 'a / b = c / x', 'a · c = b · x'], avsnitt: 'Ställ upp ekvationen' },
      { t: 'En uträkning ger x = 40 när de andra delsträckorna är runt 5–10. Vad bör du göra?', ratt: 'Räkna om — svaret är orimligt stort jämfört med figuren', fel: ['Acceptera svaret, matematiken har alltid rätt', 'Dela svaret med 2', 'Byta till randvinkelsatsen'], avsnitt: 'Rimlighetsbedöm svaret' },
    ],
  },
  {
    namn: 'Koordinatgeometri', slug: 'geometri/koordinatgeometri',
    fragor: [
      { t: 'Bestäm avståndet mellan punkterna (1, 2) och (4, 6).', ratt: '5', fel: ['7', '25', '3'], avsnitt: 'Avståndsformeln' },
      { t: 'Bestäm avståndet mellan punkterna (−3, 1) och (5, 7).', ratt: '10', fel: ['14', '100', '8'], avsnitt: 'Avståndsformeln' },
      { t: 'Bestäm avståndet mellan punkterna (0, 0) och (9, 12).', ratt: '15', fel: ['21', '225', '11'], avsnitt: 'Avståndsformeln' },
      { t: 'Varför är avståndsformeln egentligen Pythagoras sats?', ratt: 'Skillnaden i x och skillnaden i y är kateterna, och avståndet är hypotenusan', fel: ['För att alla punkter ligger på en cirkel', 'För att koordinatsystemet är kvadratiskt', 'För att avståndet alltid är positivt'], avsnitt: 'Sambandet med Pythagoras' },
      { t: 'Bestäm mittpunkten mellan (2, 6) och (10, 14).', ratt: '(6, 10)', fel: ['(12, 20)', '(4, 4)', '(8, 8)'], avsnitt: 'Mittpunkten' },
      { t: 'Bestäm mittpunkten mellan (−6, 3) och (4, 11).', ratt: '(−1, 7)', fel: ['(5, 4)', '(−2, 14)', '(1, 7)'], avsnitt: 'Mittpunkten' },
      { t: 'Hur räknar man ut mittpunkten mellan två punkter?', ratt: 'Medelvärdet av x-värdena och medelvärdet av y-värdena', fel: ['Skillnaden mellan x-värdena och mellan y-värdena', 'Summan av alla fyra talen delat på fyra', 'Kvadratroten ur produkten av koordinaterna'], avsnitt: 'Mittpunkten' },
      { t: 'Hur avgör du om en triangel är likbent utifrån hörnens koordinater?', ratt: 'Räknar ut alla tre sidlängderna och ser om två är lika', fel: ['Räknar ut alla tre vinklarna', 'Kollar om två hörn har samma x-värde', 'Räknar ut mittpunkten'], avsnitt: 'Likbent triangel' },
      { t: 'Kan avståndet mellan två punkter bli negativt?', ratt: 'Nej — kvadreringen i formeln gör alltid resultatet positivt', fel: ['Ja, om båda punkterna har negativa koordinater', 'Ja, om man räknar bakvänt', 'Bara i tredje kvadranten'], avsnitt: 'Avståndsformeln' },
      { t: 'Spelar det någon roll vilken punkt du kallar den första i avståndsformeln?', ratt: 'Nej — skillnaderna kvadreras, så tecknet försvinner', fel: ['Ja, svaret byter tecken', 'Ja, man måste börja med den vänstra', 'Ja, men bara om y-värdena är negativa'], avsnitt: 'Avståndsformeln' },
    ],
  },
];

/**
 * OM MALL_ID lämnas tomt skapas formulären från grunden, och då måste båda
 * inställningarna sättas för hand på varje formulär. Det är ~100 klick och
 * hela anledningen till att mall-tricket finns.
 */
