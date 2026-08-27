/**
 * Classroom-generator — omläsnings- och prövningskurserna
 * =======================================================
 * Skapar hela Classroom-strukturen enligt de låsta konventionerna (Modell v1):
 * ämnen per område, ETT Material-inlägg per sida med EN länk till sajten,
 * identiska titlar, plus "Börja här" överst och provinlägget underst. Inget
 * innehåll dupliceras — Classroom pekar på sajten, sajten är källan.
 *
 * Två provmodeller, en per kurstyp:
 *   Ma1-omläsningen   tenta av ett område i taget på rullande provtider
 *                     → ämnet "Tenta-av" med anmälningslänken, och provtiden
 *                       hämtad ur tenta-av-info.gs
 *   Ma2-prövningen    två deltentor på fasta veckor
 *                     → ämnena prefixas "Del 1 · …" / "Del 2 · …", och
 *                       "Börja här" bär hela välkomsttexten
 *
 * KÖR SÅ HÄR (Simon, inloggad på ga.dbgy.se):
 *   1. Skapa kursen i classroom.google.com (tom). Du ska vara lärare.
 *   2. script.google.com → Nytt projekt → klistra in HELA filen → spara.
 *      För Ma1-körningarna: lägg också in tools/apps-script/tenta-av-info.gs i
 *      projektet, annars saknas hamtaTentaAv_(). Ma2 behöver den inte.
 *   3. VIKTIGT: aktivera Classroom-API:t — vänstermenyn "Tjänster" (+) →
 *      välj "Google Classroom API" → Lägg till
 *   4. Fyll i KURS_ID nedan. Kurs-ID:t är strängen i kursens URL:
 *      classroom.google.com/c/XXXXXXXXXXX  ← det är XXXXXXXXXXX du vill ha
 *   5. Kör kursens funktion → godkänn behörigheter → vänta (~1 min)
 *   6. Manuellt efteråt (API:t kan inte): kontrollera ordningen på ämnena med
 *      drag-and-drop och dra "Börja här" överst om den inte redan ligger där.
 *
 * Skapas i omvänd ordning eftersom Classroom visar senast skapade överst —
 * resultatet blir: Börja här → område 1 → … → provinlägget, med delmomenten
 * i kursordning inom varje ämne.
 *
 * OMKÖRNINGSSÄKERT: befintliga ämnen återanvänds och inlägg vars titel redan
 * finns hoppas över. Men ett inlägg som ligger uppe döps ALDRIG om — får en sida
 * ny titel på sajten måste inlägget döpas om för hand i Classroom.
 *
 * ⚠️ Klistra aldrig in master-ark eller lärarpanel här. Det är lärarlänkar med
 * elevdata bakom, i en kurs där eleverna är med.
 */

// ───────── FYLL I ─────────
var KURS_ID_MA1B = 'KLISTRA_IN_KURS_ID_HAR';
var KURS_ID_MA1A = 'KLISTRA_IN_KURS_ID_HAR';
var KURS_ID_MA2A = 'KLISTRA_IN_KURS_ID_HAR';
var KURS_ID_MA2B = 'KLISTRA_IN_KURS_ID_HAR';

var SAJT = 'https://dbgy-sodra-matte.github.io/dbgy-matte/';

// Elevlänkarna till anmälningsformulären (skapaAnmalningsForm() i kvitto-projekten).
// Tom sträng = provinlägget skapas utan bilaga och texten hänvisar bara till
// knappen i kvittot. Ma2a:s adress är inte antecknad än — hämta den ur körloggen
// eller sök i Drive efter "Anmälan till deltenta — Prövning Ma2a".
var ANMALAN_MA1B = 'https://docs.google.com/forms/d/e/1FAIpQLSfmXApTUs-oPZY02UK7-hITwB8Gjat4XToUh9t6J_wJh_GpHg/viewform';
var ANMALAN_MA1A = 'https://docs.google.com/forms/d/e/1FAIpQLSeuuvLFww1saooToRkggV3o7nZ6Ojud5fLuPVLPzuSht1bIDg/viewform';
var ANMALAN_MA2A = '';
var ANMALAN_MA2B = 'https://docs.google.com/forms/d/e/1FAIpQLSe6bFgqKuvW2gf7HzCu72yyrxjk_1jyGI1Xn5My8eYJuDprlg/viewform';

// ───────── Kursdata ─────────
// <<< GENERERAT DATABLOCK — kör tools/classroom/gor-classroom-generator.mjs, redigera inte för hand >>>

var SIDOR_MA1B = [
  { omrade: 'Algebra', titel: 'Uttryck', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/algebra/uttryck/' },
  { omrade: 'Algebra', titel: 'Faktorisering', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/algebra/faktorisering/' },
  { omrade: 'Algebra', titel: 'Ställa upp och tolka uttryck', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/algebra/stalla-upp-och-tolka-uttryck/' },
  { omrade: 'Algebra', titel: 'Ekvationer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/algebra/ekvationer/' },
  { omrade: 'Algebra', titel: 'Potensekvationer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/algebra/potensekvationer/' },
  { omrade: 'Algebra', titel: 'Formler', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/algebra/formler/' },
  { omrade: 'Algebra', titel: 'Problemlösning med algebra', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/algebra/problemlosning-med-algebra/' },
  { omrade: 'Algebra', titel: 'Potenser och rötter', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/algebra/potenser-och-rotter/' },
  { omrade: 'Algebra', titel: 'Redo att tenta? — Algebra', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/algebra/redo-att-tenta/' },
  { omrade: 'Ekonomi', titel: 'Grunder i procent', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/ekonomi/grunder-i-procent/' },
  { omrade: 'Ekonomi', titel: 'Förändringsfaktor och upprepad förändring', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/ekonomi/forandringsfaktor/' },
  { omrade: 'Ekonomi', titel: 'Lån, ränta och amortering', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/ekonomi/lan-ranta-amortering/' },
  { omrade: 'Ekonomi', titel: 'Redo att tenta? — Ekonomi', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/ekonomi/redo-att-tenta/' },
  { omrade: 'Funktioner', titel: 'Tolka grafer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/funktioner/tolka-grafer/' },
  { omrade: 'Funktioner', titel: 'Linjära funktioner', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/funktioner/linjara-funktioner/' },
  { omrade: 'Funktioner', titel: 'Räta linjens ekvation', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/funktioner/rata-linjens-ekvation/' },
  { omrade: 'Funktioner', titel: 'Funktionsbegreppet f(x)', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/funktioner/funktionsbegreppet-fx/' },
  { omrade: 'Funktioner', titel: 'Exponentialfunktioner', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/funktioner/exponentialfunktioner/' },
  { omrade: 'Funktioner', titel: 'Exponentialfunktioner 2', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/funktioner/exponentialfunktioner-2/' },
  { omrade: 'Funktioner', titel: 'Exponentialfunktion från graf', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/funktioner/exponentialekvation-fran-graf/' },
  { omrade: 'Funktioner', titel: 'Redo att tenta? — Funktioner', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/funktioner/redo-att-tenta/' },
];

var SIDOR_MA1A = [
  { omrade: 'Algebra', titel: 'Förenkling', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/algebra/forenkling/' },
  { omrade: 'Algebra', titel: 'Grundläggande ekvationer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/algebra/grundlaggande-ekvationer/' },
  { omrade: 'Algebra', titel: 'Ekvation med x i båda led', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/algebra/ekvation-x-i-bada-led/' },
  { omrade: 'Algebra', titel: 'Faktorisering', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/algebra/faktorisering/' },
  { omrade: 'Algebra', titel: 'Ekvationer med parenteser', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/algebra/ekvationer-med-parenteser/' },
  { omrade: 'Algebra', titel: 'Ekvationer med nämnare', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/algebra/ekvationer-med-namnare/' },
  { omrade: 'Algebra', titel: 'Formler', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/algebra/formler/' },
  { omrade: 'Algebra', titel: 'Redo att tenta? — Algebra', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/algebra/redo-att-tenta/' },
  { omrade: 'Ekonomi', titel: 'Förändringsfaktor', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/ekonomi/forandringsfaktor/' },
  { omrade: 'Ekonomi', titel: 'Upprepad förändring', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/ekonomi/upprepad-forandring/' },
  { omrade: 'Ekonomi', titel: 'Lån, ränta och amortering', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/ekonomi/lan-ranta-amortering/' },
  { omrade: 'Ekonomi', titel: 'Lån och ränta med kalkylblad', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/ekonomi/lan-och-ranta-med-kalkylblad/' },
  { omrade: 'Ekonomi', titel: 'Redo att tenta? — Ekonomi', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/ekonomi/redo-att-tenta/' },
  { omrade: 'Sannolikhet', titel: 'Sannolikhet (grunder)', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/sannolikhet/sannolikhet-grunder/' },
  { omrade: 'Sannolikhet', titel: 'Beroende sannolikhet', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/sannolikhet/beroende-sannolikhet/' },
  { omrade: 'Sannolikhet', titel: 'Komplementhändelse', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/sannolikhet/komplementhandelse/' },
  { omrade: 'Sannolikhet', titel: 'Redo att tenta? — Sannolikhet', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/sannolikhet/redo-att-tenta/' },
  { omrade: 'Funktioner', titel: 'Värdetabell', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/funktioner/vardetabell/' },
  { omrade: 'Funktioner', titel: 'Koordinatsystem', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/funktioner/koordinatsystem/' },
  { omrade: 'Funktioner', titel: 'Grafer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/funktioner/grafer/' },
  { omrade: 'Funktioner', titel: 'Linjära funktioner', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/funktioner/linjara-funktioner/' },
  { omrade: 'Funktioner', titel: 'Läsa av grafer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/funktioner/lasa-av-grafer/' },
  { omrade: 'Funktioner', titel: 'Funktionsbegreppet f(x)', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/funktioner/funktionsbegreppet-fx/' },
  { omrade: 'Funktioner', titel: 'Exponentialfunktioner', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/funktioner/exponentialekvationer/' },
  { omrade: 'Funktioner', titel: 'Exponentialfunktioner 2', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/funktioner/exponentialekvationer-2/' },
  { omrade: 'Funktioner', titel: 'Exponentialfunktioner från graf', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/funktioner/exponentialekvationer-fran-graf/' },
  { omrade: 'Funktioner', titel: 'Redo att tenta? — Funktioner', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/funktioner/redo-att-tenta/' },
];

var SIDOR_MA2A = [
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Enkla andragradsekvationer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/andragradare/enkla-andragradsekvationer/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Nollproduktmetoden', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/andragradare/nollproduktmetoden/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Pythagoras sats och koordinatgeometri', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/andragradare/pythagoras-och-koordinatgeometri/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Parentesmultiplikation', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/andragradare/parentesmultiplikation/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Kvadreringsreglerna och konjugatregeln', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/andragradare/kvadrerings-och-konjugatregeln/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'pq-formeln', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/andragradare/pq-formeln/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Andragradsfunktioner grafiskt', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/andragradare/andragradsfunktioner-grafiskt/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Andragradsfunktioner algebraiskt', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/andragradare/andragradsfunktioner-algebraiskt/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Andragradsfunktioner problemlösning', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/andragradare/andragradsfunktioner-problemlosning/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Redo att tenta? — Algebra och andragradare', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/andragradare/redo-att-tenta/' },
  { omrade: 'Del 1 · Generalrepetition', titel: 'Generalrepetition — Del 1', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/del-1/generalrepetition/' },
  { omrade: 'Del 2 · Räta linjens ekvation och ekvationssystem', titel: 'Funktionsbegreppet f(x)', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/ekvationssystem/funktionsbegreppet-fx/' },
  { omrade: 'Del 2 · Räta linjens ekvation och ekvationssystem', titel: 'Räta linjens ekvation', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/ekvationssystem/rata-linjens-ekvation/' },
  { omrade: 'Del 2 · Räta linjens ekvation och ekvationssystem', titel: 'Räta linjens ekvation algebraiskt', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/ekvationssystem/rata-linjens-ekvation-algebraiskt/' },
  { omrade: 'Del 2 · Räta linjens ekvation och ekvationssystem', titel: 'Grafisk lösning av ekvationssystem', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/ekvationssystem/grafisk-losning-av-ekvationssystem/' },
  { omrade: 'Del 2 · Räta linjens ekvation och ekvationssystem', titel: 'Substitutionsmetoden', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/ekvationssystem/substitutionsmetoden/' },
  { omrade: 'Del 2 · Räta linjens ekvation och ekvationssystem', titel: 'Additionsmetoden', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/ekvationssystem/additionsmetoden/' },
  { omrade: 'Del 2 · Räta linjens ekvation och ekvationssystem', titel: 'Problemlösning med ekvationssystem', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/ekvationssystem/problemlosning-ekvationssystem/' },
  { omrade: 'Del 2 · Räta linjens ekvation och ekvationssystem', titel: 'Redo att tenta? — Räta linjen och ekvationssystem', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/ekvationssystem/redo-att-tenta/' },
  { omrade: 'Del 2 · Potenser och exponentialekvationer', titel: 'Potenslagar', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/potenser/potenslagar/' },
  { omrade: 'Del 2 · Potenser och exponentialekvationer', titel: 'Potensekvationer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/potenser/potensekvationer/' },
  { omrade: 'Del 2 · Potenser och exponentialekvationer', titel: 'Exponentialfunktioner', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/potenser/exponentialfunktioner/' },
  { omrade: 'Del 2 · Potenser och exponentialekvationer', titel: 'Exponentialekvationer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/potenser/exponentialekvationer/' },
  { omrade: 'Del 2 · Potenser och exponentialekvationer', titel: 'Redo att tenta? — Potenser och exponentialekvationer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/potenser/redo-att-tenta/' },
  { omrade: 'Del 2 · Statistik', titel: 'Lägesmått', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/statistik/lagesmatt/' },
  { omrade: 'Del 2 · Statistik', titel: 'Spridningsmått och lådagram', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/statistik/spridningsmatt-och-ladagram/' },
  { omrade: 'Del 2 · Statistik', titel: 'Normalfördelning', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/statistik/normalfordelning/' },
  { omrade: 'Del 2 · Statistik', titel: 'Redo att tenta? — Statistik', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/statistik/redo-att-tenta/' },
  { omrade: 'Del 2 · Generalrepetition', titel: 'Generalrepetition — Del 2', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2a/del-2/generalrepetition/' },
];

var SIDOR_MA2B = [
  { omrade: 'Del 1 · Ekvationssystem', titel: 'Funktionsbegreppet och f(x)', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/ekvationssystem/funktionsbegreppet-fx/' },
  { omrade: 'Del 1 · Ekvationssystem', titel: 'Räta linjens ekvation', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/ekvationssystem/rata-linjens-ekvation/' },
  { omrade: 'Del 1 · Ekvationssystem', titel: 'Vad är ett ekvationssystem?', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/ekvationssystem/vad-ar-ett-ekvationssystem/' },
  { omrade: 'Del 1 · Ekvationssystem', titel: 'Substitutionsmetoden', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/ekvationssystem/substitutionsmetoden/' },
  { omrade: 'Del 1 · Ekvationssystem', titel: 'Additionsmetoden', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/ekvationssystem/additionsmetoden/' },
  { omrade: 'Del 1 · Ekvationssystem', titel: 'Problemlösning med ekvationssystem', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/ekvationssystem/problemlosning-ekvationssystem/' },
  { omrade: 'Del 1 · Ekvationssystem', titel: 'Redo att tenta? — Ekvationssystem', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/ekvationssystem/redo-att-tenta/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Parentesmultiplikation', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/andragradare/parentesmultiplikation/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Kvadreringsreglerna', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/andragradare/kvadreringsreglerna/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Konjugatregeln', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/andragradare/konjugatregeln/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Enkla andragradsekvationer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/andragradare/enkla-andragradsekvationer/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Nollproduktmetoden', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/andragradare/nollproduktmetoden/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'pq-formeln', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/andragradare/pq-formeln/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Andragradsfunktioner grafiskt', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/andragradare/andragradsfunktioner-grafiskt/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Andragradsfunktioner algebraiskt', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/andragradare/andragradsfunktioner-algebraiskt/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Implikation och ekvivalens', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/andragradare/implikation-och-ekvivalens/' },
  { omrade: 'Del 1 · Algebra och andragradare', titel: 'Redo att tenta? — Algebra och andragradare', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/andragradare/redo-att-tenta/' },
  { omrade: 'Del 1 · Generalrepetition', titel: 'Generalrepetition — Del 1', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/del-1/generalrepetition/' },
  { omrade: 'Del 2 · Logaritmer och exponentialekvationer', titel: 'Potenslagar', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/logaritmer/potenslagar/' },
  { omrade: 'Del 2 · Logaritmer och exponentialekvationer', titel: 'Exponentialfunktioner', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/logaritmer/exponentialfunktioner/' },
  { omrade: 'Del 2 · Logaritmer och exponentialekvationer', titel: 'Tiologaritmer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/logaritmer/tiologaritmer/' },
  { omrade: 'Del 2 · Logaritmer och exponentialekvationer', titel: 'Exponentialekvationer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/logaritmer/exponentialekvationer/' },
  { omrade: 'Del 2 · Logaritmer och exponentialekvationer', titel: 'Redo att tenta? — Logaritmer och exponentialekvationer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/logaritmer/redo-att-tenta/' },
  { omrade: 'Del 2 · Statistik', titel: 'Lägesmått', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/statistik/lagesmatt/' },
  { omrade: 'Del 2 · Statistik', titel: 'Spridningsmått och lådagram', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/statistik/spridningsmatt-och-ladagram/' },
  { omrade: 'Del 2 · Statistik', titel: 'Normalfördelning', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/statistik/normalfordelning/' },
  { omrade: 'Del 2 · Statistik', titel: 'Regression och korrelation', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/statistik/regression-och-korrelation/' },
  { omrade: 'Del 2 · Statistik', titel: 'Redo att tenta? — Statistik', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/statistik/redo-att-tenta/' },
  { omrade: 'Del 2 · Geometri', titel: 'Vinklar', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/geometri/vinklar/' },
  { omrade: 'Del 2 · Geometri', titel: 'Likformighet', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/geometri/likformighet/' },
  { omrade: 'Del 2 · Geometri', titel: 'Topptriangel-, transversal- och bisektrissatsen', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/geometri/topptriangel-och-transversalsatsen/' },
  { omrade: 'Del 2 · Geometri', titel: 'Randvinkelsatsen', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/geometri/randvinkelsatsen/' },
  { omrade: 'Del 2 · Geometri', titel: 'Kordasatsen', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/geometri/kordasatsen/' },
  { omrade: 'Del 2 · Geometri', titel: 'Koordinatgeometri', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/geometri/koordinatgeometri/' },
  { omrade: 'Del 2 · Geometri', titel: 'Redo att tenta? — Geometri', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/geometri/redo-att-tenta/' },
  { omrade: 'Del 2 · Generalrepetition', titel: 'Generalrepetition — Del 2', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-2b/del-2/generalrepetition/' },
];

var START_MA2A =
  'Välkommen till prövningen i Matematik 2a.\n' +
  '\n' +
  'Här läser du in kursen på egen hand, i din egen takt, med allt material\n' +
  'samlat på en sida. Du skriver två prov under terminen.\n' +
  '\n' +
  '\n' +
  'SÅ HÄR GÅR DET TILL\n' +
  '\n' +
  '1. Träna på kurssidan (första länken här nedanför).\n' +
  '   Varje avsnitt har en genomgång och övningar som rättar sig själva.\n' +
  '   Du kan göra om dem hur många gånger du vill.\n' +
  '\n' +
  '2. Gör avsnittets checkpoint.\n' +
  '   Längst ner på varje sida ligger ett quiz med tio frågor.\n' +
  '   8 rätt = klarat. Du får försöka hur många gånger som helst,\n' +
  '   och ditt bästa resultat är det som räknas.\n' +
  '\n' +
  '3. Skriv provet.\n' +
  '   När alla checkpoints inför ett prov är gröna är du redo.\n' +
  '\n' +
  '\n' +
  'DE TVÅ PROVEN\n' +
  '\n' +
  'Del 1 — stödtid vecka 43. Handlar om algebra och andragradare.\n' +
  'Del 2 — stödtid vecka 47. Handlar om räta linjens ekvation och ekvationssystem, potenser och exponentialekvationer samt statistik.\n' +
  '\n' +
  'Tid och sal meddelas här i Classroom i god tid.\n' +
  '\n' +
  'Du har klarat kursen när båda proven är godkända.\n' +
  '\n' +
  '\n' +
  'DITT KVITTO\n' +
  '\n' +
  'Andra länken här nedanför är din egen översikt: vad du klarat, vad som\n' +
  'är kvar, och vad du bör göra härnäst. Bara du och dina lärare ser den.\n' +
  'Logga in med skolkontot.\n' +
  '\n' +
  'Titta där när du undrar hur du ligger till. Den uppdateras varje timme.\n' +
  '\n' +
  '\n' +
  'NÄR DU FASTNAR\n' +
  '\n' +
  'Varje checkpoint slutar med rutan "Något du fastnade på?".\n' +
  'Skriv där — vi läser allt som kommer in, och det styr vad vi går igenom.\n' +
  '\n' +
  'Du kan också fråga oss på lektionstid. Har du varit borta behöver du\n' +
  'inte ta igen något: allt ligger kvar på sidan, och du fortsätter där du\n' +
  'slutade.';

var PROV_MA2A =
  'Kursen har två prov.\n' +
  '\n' +
  'Del 1 — stödtid vecka 43. Handlar om algebra och andragradare.\n' +
  'Del 2 — stödtid vecka 47. Handlar om räta linjens ekvation och ekvationssystem, potenser och exponentialekvationer samt statistik.\n' +
  '\n' +
  'Exakt tid och sal meddelas här i flödet i god tid.';

var START_MA2B =
  'Välkommen till prövningen i Matematik 2b.\n' +
  '\n' +
  'Här läser du in kursen på egen hand, i din egen takt, med allt material\n' +
  'samlat på en sida. Du skriver två prov under terminen.\n' +
  '\n' +
  '\n' +
  'SÅ HÄR GÅR DET TILL\n' +
  '\n' +
  '1. Träna på kurssidan (första länken här nedanför).\n' +
  '   Varje avsnitt har en genomgång och övningar som rättar sig själva.\n' +
  '   Du kan göra om dem hur många gånger du vill.\n' +
  '\n' +
  '2. Gör avsnittets checkpoint.\n' +
  '   Längst ner på varje sida ligger ett quiz med tio frågor.\n' +
  '   8 rätt = klarat. Du får försöka hur många gånger som helst,\n' +
  '   och ditt bästa resultat är det som räknas.\n' +
  '\n' +
  '3. Skriv provet.\n' +
  '   När alla checkpoints inför ett prov är gröna är du redo.\n' +
  '\n' +
  '\n' +
  'DE TVÅ PROVEN\n' +
  '\n' +
  'Del 1 — stödtid vecka 43. Handlar om ekvationssystem samt algebra och andragradare.\n' +
  'Del 2 — stödtid vecka 47. Handlar om logaritmer och exponentialekvationer, statistik samt geometri.\n' +
  '\n' +
  'Tid och sal meddelas här i Classroom i god tid.\n' +
  '\n' +
  'Du har klarat kursen när båda proven är godkända.\n' +
  '\n' +
  '\n' +
  'DITT KVITTO\n' +
  '\n' +
  'Andra länken här nedanför är din egen översikt: vad du klarat, vad som\n' +
  'är kvar, och vad du bör göra härnäst. Bara du och dina lärare ser den.\n' +
  'Logga in med skolkontot.\n' +
  '\n' +
  'Titta där när du undrar hur du ligger till. Den uppdateras varje timme.\n' +
  '\n' +
  '\n' +
  'NÄR DU FASTNAR\n' +
  '\n' +
  'Varje checkpoint slutar med rutan "Något du fastnade på?".\n' +
  'Skriv där — vi läser allt som kommer in, och det styr vad vi går igenom.\n' +
  '\n' +
  'Du kan också fråga oss på lektionstid. Har du varit borta behöver du\n' +
  'inte ta igen något: allt ligger kvar på sidan, och du fortsätter där du\n' +
  'slutade.';

var PROV_MA2B =
  'Kursen har två prov.\n' +
  '\n' +
  'Del 1 — stödtid vecka 43. Handlar om ekvationssystem samt algebra och andragradare.\n' +
  'Del 2 — stödtid vecka 47. Handlar om logaritmer och exponentialekvationer, statistik samt geometri.\n' +
  '\n' +
  'Exakt tid och sal meddelas här i flödet i god tid.';

// <<< SLUT GENERERAT DATABLOCK >>>

// ───────── Körfunktioner ─────────
function skapaClassroomMa1b() {
  bygg_(KURS_ID_MA1B, 'omlasning', SIDOR_MA1B, tentaAvInlagg_(ANMALAN_MA1B), START_MA1);
}

function skapaClassroomMa1a() {
  bygg_(KURS_ID_MA1A, 'omlasning-1a', SIDOR_MA1A, tentaAvInlagg_(ANMALAN_MA1A), START_MA1);
}

function skapaClassroomMa2a() {
  bygg_(KURS_ID_MA2A, 'omlasning-2a', SIDOR_MA2A, provInlagg_(PROV_MA2A, ANMALAN_MA2A), START_MA2A);
}

function skapaClassroomMa2b() {
  bygg_(KURS_ID_MA2B, 'omlasning-2b', SIDOR_MA2B, provInlagg_(PROV_MA2B, ANMALAN_MA2B), START_MA2B);
}

// ───────── Inläggen som ligger underst ─────────
var START_MA1 = 'Allt du behöver finns på kurssidan (första länken). Under Mitt kvitto (andra länken) ser du vad du klarat och vad som är nästa steg.';

/** Ma1: ett anmälningsinlägg med provtiden ur den delade tenta-av-info.gs. */
function tentaAvInlagg_(anmalanUrl) {
  var info = hamtaTentaAv_();
  return {
    amne: 'Tenta-av',
    titel: 'Anmälan till tenta-av',
    urlar: [anmalanUrl],
    text: info.mening + ' Vilka ' + info.dag + ' som gäller ser du i flödet.',
  };
}

/** Ma2: ett provinlägg med de två deltentorna. Saknas anmälningslänken görs
 *  inlägget ändå — men då utan meningen om att länken ligger nedanför, som
 *  annars hade pekat på en bilaga som inte finns. */
function provInlagg_(provtext, anmalanUrl) {
  var anmalan = anmalanUrl
    ? 'Du anmäler dig till ett prov när du är redo. Knappen dyker upp av sig själv i ditt kvitto, och samma anmälan ligger som länk här nedanför.'
    : 'Du anmäler dig till ett prov när du är redo — knappen dyker upp av sig själv i ditt kvitto.';
  return {
    amne: 'Proven',
    titel: 'Proven — Del 1 och Del 2',
    urlar: anmalanUrl ? [anmalanUrl] : [],
    text: provtext + '\n\n' + anmalan + '\n\nDu har klarat kursen när båda proven är godkända.',
  };
}

// ───────── Maskineriet ─────────
function bygg_(kursId, kurskod, sidor, sista, startText) {
  _titlar = null;
  if (kursId.indexOf('KLISTRA_IN') === 0) throw new Error('Fyll i KURS_ID överst i filen först.');
  // Adressfältet visar ID:t base64-kodat (classroom.google.com/c/XXXX) —
  // klistra in strängen rakt av så avkodas den här. Hela URL:en funkar också.
  kursId = kursId.replace(/^.*\/c\//, '').split(/[/?#]/)[0];
  if (!/^[0-9]+$/.test(kursId)) {
    try {
      var avkodat = Utilities.newBlob(Utilities.base64Decode(kursId)).getDataAsString();
      var siffror = avkodat.replace(/[^0-9]/g, '');
      if (siffror.length >= 8) kursId = siffror;
    } catch (e) { /* behåll som det är — kan vara ett alias */ }
  }
  Logger.log('Använder kurs-id: ' + kursId);
  var kursUrl = SAJT + kurskod + '/';
  var kvittoUrl = SAJT + kurskod + '/mitt-kvitto/';

  // Områdena i kursordning (unika, i den ordning de först dyker upp)
  var omraden = [];
  for (var i = 0; i < sidor.length; i++) {
    if (omraden.indexOf(sidor[i].omrade) < 0) omraden.push(sidor[i].omrade);
  }

  // 1. Provinlägget skapas FÖRST (hamnar underst)
  var sistaTopic = nyttTopic_(kursId, sista.amne);
  if (!sista.urlar.length) Logger.log('OBS: ingen anmälningslänk ifylld — "' + sista.titel + '" skapas utan bilaga.');
  nyttMaterial_(kursId, sistaTopic, sista.titel, sista.urlar, sista.text);

  // 2. Områdena i OMVÄND ordning, delmomenten i omvänd ordning inom varje
  for (var o = omraden.length - 1; o >= 0; o--) {
    var topicId = nyttTopic_(kursId, omraden[o]);
    var iOmrade = sidor.filter(function (s) { return s.omrade === omraden[o]; });
    for (var s = iOmrade.length - 1; s >= 0; s--) {
      nyttMaterial_(kursId, topicId, iOmrade[s].titel, [iOmrade[s].url], '');
    }
  }

  // 3. "Börja här" skapas SIST (hamnar överst)
  var startTopic = nyttTopic_(kursId, 'Börja här');
  nyttMaterial_(kursId, startTopic, 'Börja här — så funkar kursen', [kursUrl, kvittoUrl], startText);

  Logger.log('KLART: ' + (1 + omraden.length + 1) + ' ämnen och ' + (sidor.length + 2) + ' inlägg skapade.');
  Logger.log('Kontrollera ordningen i Klassuppgifter-fliken och dra "Börja här" överst om den inte redan ligger där.');
}

/* Omkörningssäkert: befintliga ämnen återanvänds (inga dubbletter om du kör om
 * efter ett fel) och inlägg vars titel redan finns hoppas över. */
function nyttTopic_(kursId, namn) {
  var svar = Classroom.Courses.Topics.list(kursId, { pageSize: 100 });
  var lista = (svar && svar.topic) || [];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].name === namn) { Logger.log('Ämne finns redan: ' + namn); return lista[i].topicId; }
  }
  var t = Classroom.Courses.Topics.create({ name: namn }, kursId);
  Utilities.sleep(400); // snäll mot API-kvoten
  return t.topicId;
}

var _titlar = null;
function finnsMaterial_(kursId, titel) {
  if (_titlar === null) {
    _titlar = {};
    var token = null;
    do {
      var svar = Classroom.Courses.CourseWorkMaterials.list(kursId, { pageSize: 100, pageToken: token });
      ((svar && svar.courseWorkMaterial) || []).forEach(function (m) { _titlar[m.title] = true; });
      token = svar && svar.nextPageToken;
    } while (token);
  }
  return !!_titlar[titel];
}

function nyttMaterial_(kursId, topicId, titel, urlar, beskrivning) {
  if (finnsMaterial_(kursId, titel)) { Logger.log('Hoppar över (finns redan): ' + titel); return; }
  var material = urlar.map(function (u) { return { link: { url: u } }; });
  // Stegvis reserv: full → utan beskrivning → utan state. Loggar det som nekas
  // i stället för att fälla hela körningen.
  var forsok = [
    { title: titel, topicId: topicId, materials: material, state: 'PUBLISHED', description: beskrivning || undefined },
    { title: titel, topicId: topicId, materials: material, state: 'PUBLISHED' },
    { title: titel, topicId: topicId, materials: material },
  ];
  for (var i = 0; i < forsok.length; i++) {
    var body = forsok[i];
    if (!body.description) delete body.description;
    try {
      Classroom.Courses.CourseWorkMaterials.create(body, kursId);
      _titlar[titel] = true;
      if (i > 0) Logger.log('OBS: "' + titel + '" skapades i förenklad form (försök ' + (i + 1) + ').');
      Utilities.sleep(400);
      return;
    } catch (e) {
      if (i === forsok.length - 1) {
        Logger.log('MISSLYCKADES: "' + titel + '" — ' + e + ' — body: ' + JSON.stringify(body));
      }
    }
  }
}
