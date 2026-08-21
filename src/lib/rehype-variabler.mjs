/**
 * rehype-variabler.mjs — kursiverar matematiska variabler i teoritexten.
 *
 * Uppgifter och genomgångar renderas av mdField respektive marked, och de
 * anropar kursiveraHtml() från src/lib/variabler.ts direkt. Teoritexten går
 * däremot genom Astros EGEN markdown-pipeline (<slot /> i Lesson.astro), som
 * varken går att nå med en prop eller efterbehandla i komponenten. Därför
 * den här pluginen.
 *
 * ⚠️ HÅLL REGLERNA SYNKADE MED src/lib/variabler.ts.
 * De två ska ge exakt samma resultat — annars ser samma uttryck olika ut
 * beroende på om det står i teorin eller i en uppgift. Ändrar du undantagen
 * här måste du ändra dem där, och tvärtom.
 *
 * Gäller BARA omläsningskurserna (Simons val 2026-08-21). Ordinarie
 * ma1a/ma1b ska se ut precis som förut.
 */

const BOKSTAV = /[A-Za-zÀ-ÖØ-öø-ÿ]/;

/** "i" och "I" är svenska ord, 700+ förekomster. Se variabler.ts. */
const ALDRIG_VARIABEL = new Set(['i', 'I', 'E']);

/** Versal + siffra = cellreferens (B2), inte variabel. */
const arCellreferens = (b, efter) => /[A-Z]/.test(b) && /[0-9]/.test(efter);

/** Bokstav efter kolon = svensk böjning: "en 3:a", "sju a:n". Jämför "x:et". */
const arEfterKolon = (foreFore, fore) => fore === ':' && /[0-9A-Za-z]/.test(foreFore);

/** Betygsbokstav i sammansättning: "E-målen", "C-nivå". Ej "x-axeln". */
const arBetygsbokstav = (b, efter) => /[EAC]/.test(b) && efter === '-';

/** Förkortning: "T.ex.", "D.v.s." — versal + punkt + bokstav. */
const arForkortning = (b, n1, n2) =>
  /[A-Z]/.test(b) && n1 === '.' && /[A-Za-zÀ-ÖØ-öø-ÿ]/.test(n2);

/** Delar en textsträng i text- och <i class="mv">-noder. */
function delaUpp(text) {
  const ut = [];
  let buffert = '';
  for (let i = 0; i < text.length; i++) {
    const tecken = text[i];
    const fore = i > 0 ? text[i - 1] : '';
    const foreFore = i > 1 ? text[i - 2] : '';
    const efter = i + 1 < text.length ? text[i + 1] : '';
    const efterEfter = i + 2 < text.length ? text[i + 2] : '';
    const ensam = /[A-Za-z]/.test(tecken) && !BOKSTAV.test(fore) && !BOKSTAV.test(efter);
    if (
      ensam &&
      !ALDRIG_VARIABEL.has(tecken) &&
      !arCellreferens(tecken, efter) &&
      !arEfterKolon(foreFore, fore) &&
      !arBetygsbokstav(tecken, efter) &&
      !arForkortning(tecken, efter, efterEfter)
    ) {
      if (buffert) { ut.push({ type: 'text', value: buffert }); buffert = ''; }
      ut.push({
        type: 'element',
        tagName: 'i',
        properties: { className: ['mv'] },
        children: [{ type: 'text', value: tecken }],
      });
    } else {
      buffert += tecken;
    }
  }
  if (buffert) ut.push({ type: 'text', value: buffert });
  return ut;
}

export function rehypeVariabler() {
  return (tree, file) => {
    const sokvag = String(file?.path || file?.history?.[0] || '').replace(/\\/g, '/');
    if (!/\/lessons\/omlasning/.test(sokvag)) return; // bara omläsningen

    const ga = (nod) => {
      if (!nod || !Array.isArray(nod.children)) return;
      // Gå aldrig in i element som inte ska röras.
      if (nod.tagName === 'script' || nod.tagName === 'style') return;
      nod.children = nod.children.flatMap((barn) => {
        if (barn.type === 'text') return delaUpp(barn.value);
        ga(barn);
        return [barn];
      });
    };
    ga(tree);
  };
}
