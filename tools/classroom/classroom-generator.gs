/**
 * Classroom-generator — Omläsningskurserna
 * =========================================
 * Skapar hela Classroom-strukturen enligt de låsta konventionerna (Modell v1):
 * topics per område, ETT Material-inlägg per sida med EN länk till sajten,
 * identiska titlar, plus "Börja här" och "Tenta-av". Inget innehåll dupliceras.
 *
 * KÖR SÅ HÄR (Simon, inloggad på ga.dbgy.se):
 *   1. Skapa de två kurserna i classroom.google.com (tomma). Du ska vara lärare.
 *   2. script.google.com → Nytt projekt → klistra in HELA filen → spara
 *   3. VIKTIGT: aktivera Classroom-API:t — vänstermenyn "Tjänster" (+) →
 *      välj "Google Classroom API" → Lägg till
 *   4. Fyll i KURS_ID nedan. Kurs-ID:t är strängen i kursens URL:
 *      classroom.google.com/c/XXXXXXXXXXX  ← det är XXXXXXXXXXX du vill ha
 *   5. Kör skapaClassroomMa1b() → godkänn behörigheter → vänta (~1 min)
 *   6. Kör skapaClassroomMa1a()
 *   7. Manuellt efteråt (API:t kan inte): dra "Börja här"-ämnet överst om det
 *      inte redan ligger där, och kontrollera ordningen med drag-and-drop.
 *
 * Skapas i omvänd ordning eftersom Classroom visar senast skapade överst —
 * resultatet blir: Börja här → område 1 → … → Tenta-av, med delmomenten
 * i kursordning inom varje ämne.
 */

// ───────── FYLL I ─────────
var KURS_ID_MA1B = 'KLISTRA_IN_KURS_ID_HAR';
var KURS_ID_MA1A = 'KLISTRA_IN_KURS_ID_HAR';

// ───────── Kursdata (genererad ur sajtens sequence.ts + frontmatter — redigera inte för hand) ─────────
var SAJT = 'https://dbgy-sodra-matte.github.io/dbgy-matte/';
var ANMALAN_MA1B = 'https://docs.google.com/forms/d/e/1FAIpQLSfmXApTUs-oPZY02UK7-hITwB8Gjat4XToUh9t6J_wJh_GpHg/viewform';
var ANMALAN_MA1A = 'https://docs.google.com/forms/d/e/1FAIpQLSeuuvLFww1saooToRkggV3o7nZ6Ojud5fLuPVLPzuSht1bIDg/viewform';

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
  { omrade: 'Funktioner', titel: 'Exponentialekvation från graf', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning/funktioner/exponentialekvation-fran-graf/' },
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
  { omrade: 'Funktioner', titel: 'Exponentialekvationer', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/funktioner/exponentialekvationer/' },
  { omrade: 'Funktioner', titel: 'Exponentialekvationer 2', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/funktioner/exponentialekvationer-2/' },
  { omrade: 'Funktioner', titel: 'Exponentialekvationer från graf', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/funktioner/exponentialekvationer-fran-graf/' },
  { omrade: 'Funktioner', titel: 'Redo att tenta? — Funktioner', url: 'https://dbgy-sodra-matte.github.io/dbgy-matte/omlasning-1a/funktioner/redo-att-tenta/' },
];

// ───────── Körfunktioner ─────────
function skapaClassroomMa1b() {
  bygg_(KURS_ID_MA1B, 'omlasning', SIDOR_MA1B, ANMALAN_MA1B);
}

function skapaClassroomMa1a() {
  bygg_(KURS_ID_MA1A, 'omlasning-1a', SIDOR_MA1A, ANMALAN_MA1A);
}

// ───────── Maskineriet ─────────
function bygg_(kursId, kurskod, sidor, anmalanUrl) {
  if (kursId.indexOf('KLISTRA_IN') === 0) throw new Error('Fyll i KURS_ID överst i filen först.');
  var kursUrl = SAJT + kurskod + '/';
  var kvittoUrl = SAJT + kurskod + '/mitt-kvitto/';

  // Områdena i kursordning (unika, i den ordning de först dyker upp)
  var omraden = [];
  for (var i = 0; i < sidor.length; i++) {
    if (omraden.indexOf(sidor[i].omrade) < 0) omraden.push(sidor[i].omrade);
  }

  // 1. "Tenta-av" skapas FÖRST (hamnar underst)
  var tentaTopic = nyttTopic_(kursId, 'Tenta-av');
  nyttMaterial_(kursId, tentaTopic, 'Anmälan till tenta-av', [anmalanUrl],
    'Prov onsdagar 13:45 i sal 304 — vilka onsdagar som gäller ser du i flödet. Anmäl dig senast tisdag kl 12:00.');

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
  nyttMaterial_(kursId, startTopic, 'Börja här — så funkar kursen',
    [kursUrl, kvittoUrl],
    'Allt du behöver finns på kurssidan (första länken). Under Mitt kvitto (andra länken) ser du vad du klarat och vad som är nästa steg.');

  Logger.log('KLART: ' + (1 + omraden.length + 1) + ' ämnen och ' + (sidor.length + 2) + ' inlägg skapade.');
  Logger.log('Kontrollera ordningen i Klassuppgifter-fliken och dra "Börja här" överst om den inte redan ligger där.');
}

function nyttTopic_(kursId, namn) {
  var t = Classroom.Courses.Topics.create({ name: namn }, kursId);
  Utilities.sleep(400); // snäll mot API-kvoten
  return t.topicId;
}

function nyttMaterial_(kursId, topicId, titel, urlar, beskrivning) {
  var material = urlar.map(function (u) { return { link: { url: u } }; });
  var body = { title: titel, topicId: topicId, materials: material, state: 'PUBLISHED' };
  if (beskrivning) body.description = beskrivning;
  Classroom.Courses.CourseWorkMaterials.create(body, kursId);
  Utilities.sleep(400);
}
