/**
 * Classroom-generatorns datablock — genereras ur sajten, skrivs aldrig för hand
 * ============================================================================
 * Fyller i SIDOR_* och provtexterna i classroom-generator.gs ur
 * src/data/sequence.ts, lektionernas frontmatter och src/site.config.ts.
 *
 * VARFÖR: titlarna i Classroom ska vara IDENTISKA med sajtens (Modell v1).
 * När Ma1a:s tre "Exponentialekvationer" döptes om till "…funktioner" 2026-08-23
 * följde generatorn inte med — fyra inlägg i de redan byggda Ma1-kurserna bär
 * fortfarande gamla namn. Handskrivna kopior av sajtens titlar driftar tyst.
 *
 * KÖR:
 *   node tools/classroom/gor-classroom-generator.mjs           skriver om blocket
 *   node tools/classroom/gor-classroom-generator.mjs --kolla    exit 1 om det är stale
 *   node tools/classroom/gor-classroom-generator.mjs --visa     skriver ut Ma2-texterna
 *
 * Kör --kolla efter varje titeländring. Ligger blocket efter måste inläggen som
 * REDAN finns i Classroom döpas om för hand — generatorn rör inte gamla inlägg.
 */

import { readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROT = join(__dirname, '..', '..');
const GS = join(__dirname, 'classroom-generator.gs');
const SAJT = 'https://dbgy-sodra-matte.github.io/dbgy-matte/';
const KOLLA = process.argv.includes('--kolla');

/* Kurserna som har en Classroom, i den ordning de står i .gs-filen. */
const KURSER = [
  { kod: 'omlasning', varde: 'SIDOR_MA1B' },
  { kod: 'omlasning-1a', varde: 'SIDOR_MA1A' },
  { kod: 'omlasning-2a', varde: 'SIDOR_MA2A' },
  { kod: 'omlasning-2b', varde: 'SIDOR_MA2B' },
];

/* ───────── sajtens egna moduler, transpilerade (samma grepp som gor-ovningshaften.mjs) ───────── */
const esbuild = await import('esbuild');
async function laddaTs(relativ) {
  const tmp = join(__dirname, '_' + relativ.replace(/[\\/.]/g, '_') + '.tmp.mjs');
  esbuild.buildSync({ entryPoints: [join(ROT, relativ)], bundle: true, format: 'esm', outfile: tmp });
  if (!existsSync(tmp)) { console.error('FEL: kunde inte transpilera ' + relativ); process.exit(1); }
  const mod = await import('file:///' + tmp.split('\\').join('/'));
  rmSync(tmp);
  return mod;
}
const { sequences } = await laddaTs('src/data/sequence.ts');
const { courses } = await laddaTs('src/site.config.ts');

/* ───────── frontmatter ───────── */
function frontmatter(slug) {
  const fil = join(ROT, 'src', 'content', 'lessons', ...slug.split('/')) + '.md';
  if (!existsSync(fil)) { console.error('FEL: lektionen saknas — ' + slug); process.exit(1); }
  const m = readFileSync(fil, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) { console.error('FEL: ingen frontmatter i ' + slug); process.exit(1); }
  return yaml.load(m[1]);
}

/* ───────── områdesnamnet = Classroom-ämnets namn ─────────
 * Mastery-kurserna (Ma1) grupperar på moment_title rakt av. Deltenta-kurserna
 * (Ma2) prefixar med deltentan, eftersom vilket prov ett område hör till är det
 * eleven behöver veta först — samma indelning som kvittot och pre-testsidorna. */
function omradesnamn(kurs, fm) {
  const c = courses[kurs];
  if (!c || !c.deltentor) return fm.moment_title;
  for (const del of c.deltentor) {
    const o = del.omraden.find((x) => x.slug === fm.moment);
    if (!o) continue;
    return del.namn + ' · ' + (o.arGeneralrep ? 'Generalrepetition' : o.titel);
  }
  console.error('FEL: momentet "' + fm.moment + '" i ' + kurs + ' hör inte till någon deltenta i site.config.ts');
  process.exit(1);
}

/* ───────── sidlistorna ───────── */
const varningar = [];
const block = {};
for (const { kod, varde } of KURSER) {
  const slugar = sequences[kod];
  if (!slugar) { console.error('FEL: ingen sekvens för ' + kod); process.exit(1); }
  block[varde] = slugar.map((slug) => {
    const fm = frontmatter(slug);
    if (fm.slug !== slug) varningar.push(slug + ': frontmatterns slug säger "' + fm.slug + '"');
    return { omrade: omradesnamn(kod, fm), titel: fm.title, url: SAJT + slug + '/' };
  });
}

/* ───────── provraderna ─────────
 * Byggs ur site.config.ts så att veckorna och områdena inte kan glida isär från
 * kvittot. Generalrepetitionerna räknas inte upp — de är inte egna provområden.
 * Sista området binds med "samt", inte "och": flera av områdesnamnen innehåller
 * redan ett "och" ("Potenser och exponentialekvationer"). */
function provrader(kurs) {
  return courses[kurs].deltentor.map((del) => {
    const omr = del.omraden.filter((o) => !o.arGeneralrep).map((o) => o.titel.toLowerCase());
    const lista = omr.length > 1 ? omr.slice(0, -1).join(', ') + ' samt ' + omr[omr.length - 1] : omr[0];
    return del.namn + ' — ' + del.nar + '. Handlar om ' + lista + '.';
  });
}

/* Provinlägget. Anmälningsmeningen och "klarat kursen"-raden läggs på i .gs:en,
 * eftersom de beror på om anmälningslänken är ifylld. */
function provtext(kurs) {
  return [
    'Kursen har två prov.',
    '',
    ...provrader(kurs),
    '',
    'Exakt tid och sal meddelas här i flödet i god tid.',
  ].join('\n');
}

/* "Börja här"-inläggets brödtext. Simons formulering (Classroom-texter Ma2.md),
 * med provraderna inlagda ur site.config.ts. Ren text — Classroom renderar inte
 * markdown, och länkarna ligger som bilagor, inte i texten. */
function startext(kurs) {
  const namn = courses[kurs].title.replace('Prövning Ma', 'Matematik ');
  return [
    'Välkommen till prövningen i ' + namn + '.',
    '',
    'Här läser du in kursen på egen hand, i din egen takt, med allt material',
    'samlat på en sida. Du skriver två prov under terminen.',
    '',
    '',
    'SÅ HÄR GÅR DET TILL',
    '',
    '1. Träna på kurssidan (första länken här nedanför).',
    '   Varje avsnitt har en genomgång och övningar som rättar sig själva.',
    '   Du kan göra om dem hur många gånger du vill.',
    '',
    '2. Gör avsnittets checkpoint.',
    '   Längst ner på varje sida ligger ett quiz med tio frågor.',
    '   8 rätt = klarat. Du får försöka hur många gånger som helst,',
    '   och ditt bästa resultat är det som räknas.',
    '',
    '3. Skriv provet.',
    '   När alla checkpoints inför ett prov är gröna är du redo.',
    '',
    '',
    'DE TVÅ PROVEN',
    '',
    ...provrader(kurs),
    '',
    'Tid och sal meddelas här i Classroom i god tid.',
    '',
    'Du har klarat kursen när båda proven är godkända.',
    '',
    '',
    'DITT KVITTO',
    '',
    'Andra länken här nedanför är din egen översikt: vad du klarat, vad som',
    'är kvar, och vad du bör göra härnäst. Bara du och dina lärare ser den.',
    'Logga in med skolkontot.',
    '',
    'Titta där när du undrar hur du ligger till. Den uppdateras varje timme.',
    '',
    '',
    'NÄR DU FASTNAR',
    '',
    'Varje checkpoint slutar med rutan "Något du fastnade på?".',
    'Skriv där — vi läser allt som kommer in, och det styr vad vi går igenom.',
    '',
    'Du kan också fråga oss på lektionstid. Har du varit borta behöver du',
    'inte ta igen något: allt ligger kvar på sidan, och du fortsätter där du',
    'slutade.',
  ].join('\n');
}

/* ───────── skriv blocket ───────── */
function cite(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
function jsRad(r) {
  return "  { omrade: '" + cite(r.omrade) + "', titel: '" + cite(r.titel) + "', url: '" + cite(r.url) + "' },";
}
/* Sista raden får INGET \n — provtexten byggs på i .gs:en, och ett hängande
 * radslut hade blivit en tom rad mitt i inlägget. */
function jsText(s) {
  const rader = s.split('\n');
  return rader.map((rad, i) => "'" + cite(rad) + (i < rader.length - 1 ? "\\n" : '') + "'").join(' +\n  ');
}

const delar = [];
for (const { varde } of KURSER) {
  delar.push('var ' + varde + ' = [\n' + block[varde].map(jsRad).join('\n') + '\n];');
}
for (const kurs of ['omlasning-2a', 'omlasning-2b']) {
  const kod = 'MA' + kurs.slice(-2).toUpperCase();
  delar.push('var START_' + kod + ' =\n  ' + jsText(startext(kurs)) + ';');
  delar.push('var PROV_' + kod + ' =\n  ' + jsText(provtext(kurs)) + ';');
}

const MARKOR = /(\/\/ <<< GENERERAT DATABLOCK[^\n]*\n)([\s\S]*?)(\/\/ <<< SLUT GENERERAT DATABLOCK >>>)/;
/* CRLF normaliseras bort före jämförelsen. En editor eller ett skript som sparar
 * med Windows-radslut hade annars gjort --kolla rödt på varenda rad, utan att en
 * enda titel ändrats. */
const gs = readFileSync(GS, 'utf8').replace(/\r\n/g, '\n');
if (!MARKOR.test(gs)) { console.error('FEL: markörerna för datablocket saknas i classroom-generator.gs'); process.exit(1); }
const nytt = gs.replace(MARKOR, (_, fore, __, efter) => fore + '\n' + delar.join('\n\n') + '\n\n' + efter);

if (process.argv.includes('--visa')) {
  for (const kurs of ['omlasning-2a', 'omlasning-2b']) {
    console.log('\n══════ ' + courses[kurs].title + ' — "Börja här — så funkar kursen" ══════\n');
    console.log(startext(kurs));
    console.log('\n══════ ' + courses[kurs].title + ' — "Proven — Del 1 och Del 2" ══════\n');
    console.log(provtext(kurs));
  }
  process.exit(0);
}

varningar.forEach((v) => console.log('VARNING: ' + v));
const antal = KURSER.map(({ kod, varde }) => kod + ': ' + block[varde].length + ' sidor').join(', ');

if (KOLLA) {
  if (nytt === gs) { console.log('OK — datablocket är i synk med sajten (' + antal + ').'); process.exit(0); }
  console.error('STALE: classroom-generator.gs matchar inte sajten. Kör om utan --kolla.');
  const gamla = gs.match(MARKOR)[2].split('\n');
  const nya = nytt.match(MARKOR)[2].split('\n');
  for (let i = 0; i < Math.max(gamla.length, nya.length); i++) {
    if (gamla[i] !== nya[i]) {
      console.error('  rad ' + (i + 1) + '\n    filen:  ' + (gamla[i] === undefined ? '(saknas)' : gamla[i]) +
        '\n    sajten: ' + (nya[i] === undefined ? '(saknas)' : nya[i]));
    }
  }
  process.exit(1);
}

writeFileSync(GS, nytt, 'utf8');
console.log((nytt === gs ? 'Oförändrat' : 'Skrivet') + ' — ' + antal + '.');
