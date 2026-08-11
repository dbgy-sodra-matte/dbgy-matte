/**
 * Träningshäften — ett PDF-häfte per arbetsområde (Carins önskemål 2026-08-10)
 * ============================================================================
 * Genererar för varje område i omläsningskurserna ett utskriftsvänligt häfte
 * med SAMMA övningar som på sajten (E-uppgifterna i sekvensordning, inkl.
 * pre-testet) + samlat facit längst bak. Grafer renderas som SVG.
 *
 * Uppgifterna läses direkt ur src/content/lessons + src/data/sequence.ts —
 * häftena kan alltså aldrig glida ur synk med sajten, men de blir STALE när
 * innehållet ändras: kör om det här skriptet efter innehållsändringar.
 *
 * Utdata: public/haften/<kurs>-<omrade>.pdf (7 st) — länkas från lektionssidorna.
 * KÖR:  node tools/pdf/gor-ovningshaften.mjs   (kör även Chrome-PDF-exporten
 *       med verifiering: "bytes written" + färsk mtime krävs per fil)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROT = join(__dirname, '..', '..');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const KURSER = {
  'omlasning': 'Omläsning Ma1b',
  'omlasning-1a': 'Omläsning Ma1a',
  'omlasning-2b': 'Prövning Ma2b',
};

/* ───────── grafmotor ─────────
 * Importeras från src/lib/graf.ts i stället för att kopieras hit. Kopian som låg
 * här tidigare kunde glida ur synk med sajtens motor (nya graftyper syntes på
 * sajten men inte i häftena). esbuild transpilerar TS:en till en temporär .mjs
 * som laddas dynamiskt — samma kod som eleven ser på skärmen. */
const _grafJs = join(__dirname, '_graf.tmp.mjs');
const esbuild = await import('esbuild');
esbuild.buildSync({
  entryPoints: [join(ROT, 'src', 'lib', 'graf.ts')],
  bundle: true, format: 'esm', outfile: _grafJs,
});
if (!existsSync(_grafJs)) { console.error('FEL: kunde inte transpilera src/lib/graf.ts'); process.exit(1); }
const { grafSvg } = await import('file:///' + _grafJs.split('\\').join('/'));
rmSync(_grafJs);

/* ───────── textformatering (samma mönster som sajtens mdField) ───────── */
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function md(s) {
  return esc(s)
    .replace(/\*\*((?:[^*\n]|\*(?!\*))+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`\n]+)`/g, '<code>$1</code>')
    .replace(/\^(-?\w+)/g, '<sup>$1</sup>')
    .replace(/\n/g, '<br>');
}

/* ───────── läs innehållet ───────── */
const seqSrc = readFileSync(join(ROT, 'src', 'data', 'sequence.ts'), 'utf8');
function slugsFor(kurs) {
  const start = seqSrc.indexOf(`'${kurs}': [`);
  const slut = seqSrc.indexOf(']', start);
  const re = new RegExp(`'(${kurs}\\/[^']+)'`, 'g');
  return [...seqSrc.slice(start, slut).matchAll(re)].map((m) => m[1]);
}
/** Läser frontmatter. Returnerar null för sluggar som står i sekvensen men ännu
 *  inte är skrivna — kurser under uppbyggnad ska inte krascha häftesbygget. */
function frontmatter(slug) {
  const fil = join(ROT, 'src', 'content', 'lessons', slug + '.md');
  if (!existsSync(fil)) return null;
  const src = readFileSync(fil, 'utf8');
  return yaml.load(src.match(/^---\r?\n([\s\S]*?)\r?\n---/)[1]);
}

const CSS = `
  * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  html, body { margin: 0; }
  body { font-family: Inter, Arial, sans-serif; color: #1e293b; line-height: 1.55; }
  .pg { padding: 14mm 16mm; }
  h1 { font-size: 21px; margin: 0 0 2px; color: #0f172a; }
  .sub { color: #64748b; font-size: 13px; margin: 0; }
  .topbar { display: flex; align-items: center; justify-content: space-between; gap: 12px;
    border-bottom: 3px solid #2a5d8f; padding-bottom: 10px; margin-bottom: 12px; }
  .verchip { flex-shrink: 0; background: #2a5d8f; color: #fff; font-weight: 700; font-size: 14px;
    padding: 6px 14px; border-radius: 999px; }
  .provinfo { display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 16px; }
  .provinfo span { font-size: 11.5px; color: #334155; background: #f1f5f9; border: 1px solid #e2e8f0;
    border-radius: 999px; padding: 3px 10px; }
  h2 { font-size: 16px; color: #0f172a; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 5px;
    margin: 20px 0 10px; page-break-after: avoid; }
  .fraga { margin: 0 0 13px; page-break-inside: avoid; }
  .num { display: inline-block; min-width: 24px; height: 22px; line-height: 22px; text-align: center;
    background: #0f172a; color: #fff; border-radius: 6px; font-size: 13px; margin-right: 7px;
    padding: 0 4px; font-weight: 700; }
  .graf { margin: 8px 0 2px 31px; }
  sup { font-size: 0.72em; }
  code { font-family: Consolas, monospace; background: #f1f5f9; border-radius: 4px; padding: 0 4px; }
  .facit-start { page-break-before: always; }
  .facit-start h1 { color: #b91c1c; }
  .facit-start .topbar { border-color: #b91c1c; }
  .frad { font-size: 13.5px; margin: 0 0 4px; }
  .frad .num { min-width: 20px; height: 18px; line-height: 18px; font-size: 11.5px; }
  .fdelm { font-weight: 700; margin: 12px 0 5px; font-size: 13.5px; color: #475569;
    text-transform: uppercase; letter-spacing: 0.05em; }
  @page { size: A4; margin: 0; }
`;

mkdirSync(join(ROT, 'public', 'haften'), { recursive: true });
const jobb = [];

for (const [kurs, kursTitel] of Object.entries(KURSER)) {
  const slugs = slugsFor(kurs);
  const perOmrade = new Map();
  for (const slug of slugs) {
    const omrade = slug.split('/')[1];
    if (!perOmrade.has(omrade)) perOmrade.set(omrade, []);
    perOmrade.get(omrade).push(slug);
  }

  for (const [omrade, omrSlugs] of perOmrade) {
    let inner = '';
    let facit = '';
    let omradeTitel = '';
    let antal = 0;

    for (const slug of omrSlugs) {
      const fm = frontmatter(slug);
      if (!fm) continue;              // ännu oskriven sida i sekvensen
      omradeTitel = fm.moment_title;
      const ovningar = (fm.exercises && fm.exercises.E) || [];
      if (!ovningar.length) continue;
      inner += `<h2>${esc(fm.title)}</h2>`;
      facit += `<p class="fdelm">${esc(fm.title)}</p>`;
      ovningar.forEach((ov, i) => {
        antal++;
        inner += `<div class="fraga"><span class="num">${i + 1}.</span> ${md(ov.equation)}`;
        if (ov.graf) inner += `<div class="graf">${grafSvg(ov.graf)}</div>`;
        inner += `</div>`;
        const svar = ov.answer
          ? (Array.isArray(ov.answer) ? ov.answer.join('  eller  ') : ov.answer)
          : '(öppen uppgift — jämför med lösningen på sajten)';
        facit += `<p class="frad"><span class="num">${i + 1}.</span> ${md(String(svar))}</p>`;
      });
    }

    // Område utan skrivna övningar (kurs under uppbyggnad) → inget häfte alls.
    // Ett tomt häfte vore en död länk med innehåll, vilket är värre än ingen fil.
    if (antal === 0) continue;

    const head =
      `<div class="topbar"><div><h1>${esc(omradeTitel)} — träningshäfte</h1>` +
      `<p class="sub">${esc(kursTitel)} · samma uppgifter som på sajten</p></div>` +
      `<span class="verchip">📄 Papper</span></div>` +
      `<p class="provinfo"><span>${antal} uppgifter</span><span>Träna så många gånger du vill</span>` +
      `<span>Facit längst bak — rätta dig själv</span><span>Ledtrådar och lösningar finns på sajten</span></p>`;

    const facitDel =
      `<div class="pg facit-start"><div class="topbar"><div><h1>Facit — ${esc(omradeTitel)}</h1>` +
      `<p class="sub">${esc(kursTitel)} · rätta dig själv, och träna om det som inte satt</p></div></div>${facit}</div>`;

    const html = `<!DOCTYPE html><html lang="sv"><head><meta charset="utf-8">` +
      `<title>${esc(omradeTitel)} — träningshäfte (${esc(kursTitel)})</title><style>${CSS}</style></head>` +
      `<body><div class="pg">${head}${inner}</div>${facitDel}</body></html>`;

    const htmlPath = join(__dirname, `_hafte-${kurs}-${omrade}.html`);
    writeFileSync(htmlPath, html, 'utf8');
    jobb.push({ htmlPath, pdfPath: join(ROT, 'public', 'haften', `${kurs}-${omrade}.pdf`), namn: `${kurs}-${omrade}`, antal });
  }
}

/* ───────── PDF-export med verifiering (tyst-fel-skyddet) ───────── */
const start = Date.now();
let fel = 0;
for (const j of jobb) {
  const r = spawnSync(CHROME, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer',
    `--print-to-pdf=${j.pdfPath}`, 'file:///' + j.htmlPath.replace(/\\/g, '/')],
    { encoding: 'utf8', timeout: 120000 });
  const skrevs = ((r.stderr || '') + (r.stdout || '')).includes('bytes written');
  const farsk = existsSync(j.pdfPath) && statSync(j.pdfPath).mtimeMs > start;
  if (skrevs && farsk) {
    console.log(`OK  ${String(j.antal).padStart(3)} uppgifter  ${j.namn}.pdf`);
    rmSync(j.htmlPath);
  } else {
    console.log(`FEL ${j.namn} — skrevs=${skrevs} färsk=${farsk}`);
    fel++;
  }
}
/* ───────── manifest: vilka häften som finns ─────────
 * Lesson.astro läser den här listan för att avgöra om "Träna på papper"-länken
 * ska visas. Skrivs här så att den aldrig kan glida ur synk med PDF-mappen. */
if (fel === 0) {
  const namn = jobb.map((j) => j.namn).sort();
  writeFileSync(
    join(ROT, 'src', 'data', 'haften.ts'),
    '/** GENERERAD av tools/pdf/gor-ovningshaften.mjs — redigera inte för hand.\n' +
    ' *  Lista över de träningshäften som finns i public/haften/ (<kurs>-<omrade>).\n' +
    ' *  Lesson.astro visar "Träna på papper"-länken bara för dessa. */\n' +
    'export const haften: string[] = [\n' +
    namn.map((n) => `  '${n}',`).join('\n') +
    '\n];\n',
    'utf8',
  );
  console.log(`Manifest skrivet: src/data/haften.ts (${namn.length} häften)`);
}

console.log(fel === 0 ? `KLART: ${jobb.length} häften i public/haften/` : `${fel} FEL`);
process.exit(fel ? 1 : 0);
