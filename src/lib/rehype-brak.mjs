/**
 * rehype-brak.mjs — sätter bråk i teoritexten.
 *
 * Uppgifter och genomgångar renderas av mdField respektive marked, och de kan
 * anropa brakHtml() direkt. Teoritexten går däremot genom Astros EGEN
 * markdown-pipeline (<slot /> i Lesson.astro), som varken går att nå med en
 * prop eller efterbehandla i komponenten. Därför den här pluginen.
 *
 * Till skillnad från rehype-variabler.mjs, som fick dubblera reglerna från
 * variabler.ts, finns här ingen risk för att reglerna glider isär: all logik
 * bor i brak.mjs och den här filen bara går igenom trädet.
 *
 * Gäller bara omläsningskurserna, samma gräns som variabelkursiveringen.
 * Ordinarie ma1a/ma1b ska se ut precis som förut.
 *
 * ⚠️ MÅSTE KÖRA FÖRE rehypeVariabler i astro.config.mjs. Kursiveringen bryter
 * upp texten i <i class="mv">-noder, och då finns inte längre någon
 * sammanhängande sträng där "x/4" går att känna igen.
 */

import { delaIBrak, segmentTillHast } from './brak.mjs';

/** Element vars innehåll aldrig är matematik. */
const HOPPA_OVER = new Set(['script', 'style', 'title']);

export function rehypeBrak() {
  return (tree, file) => {
    const sokvag = String(file?.path || file?.history?.[0] || '').split('\\').join('/');
    if (!/\/lessons\/omlasning/.test(sokvag)) return;

    const ga = (nod) => {
      if (!nod || !Array.isArray(nod.children)) return;
      if (HOPPA_OVER.has(nod.tagName)) return;
      nod.children = nod.children.flatMap((barn) => {
        if (barn.type !== 'text') {
          ga(barn);
          return [barn];
        }
        if (!barn.value.includes('/')) return [barn];
        const segment = delaIBrak(barn.value);
        if (!segment.some((s) => s.typ === 'brak')) return [barn];
        return segmentTillHast(segment);
      });
    };
    ga(tree);
  };
}
