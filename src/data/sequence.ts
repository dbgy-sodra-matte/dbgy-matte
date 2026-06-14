/**
 * Lektionssekvens per kurs — den kronologiska följden Simon ger lektionerna i.
 *
 * Detta är källan till två saker:
 *   1. **Spaced retrieval**: när en lektion ges, plockas retrieval från sekvensens N-1, N-3, N-7 positioner bakåt.
 *      Inga datum krävs. Om en vecka missas — man tar bara nästa lektion i ordningen.
 *   2. **Moment-progress och prev/next**: även om frontmatter har `prev`/`next` använder vi sekvensen som källa.
 *
 * **Statiskt, robust, kronologiskt.** Ändras bara när Simon ändrar upplägget.
 *
 * Strukturen följer Classroom-uppdelningen 1:1 — varje punkt i Simons kursplan = en lektionssida.
 *
 * OBS: sluggar här ska matcha lektionernas explicita `slug:`-frontmatter exakt
 * (punkter i filnamn är bindestreck i slugs: "1.2a-..." → "1-2a-...").
 */

export const sequences: Record<string, string[]> = {
  // ───────── Ma1b SaBep ─────────
  'ma1b': [
    // 1. Algebra
    'ma1b/1-algebra/1-1-forenkling-och-parentesmultiplikation',
    'ma1b/1-algebra/1-2a-linjara-ekvationer-tekniker',
    'ma1b/1-algebra/1-2b-linjara-ekvationer-tillampning',
    'ma1b/1-algebra/1-3-ekvationer-med-namnare',
    'ma1b/1-algebra/1-4-potenslagar',
    'ma1b/1-algebra/1-5-dugga-algebra-ekvationer',
    'ma1b/1-algebra/1-6-potensekvationer',
    'ma1b/1-algebra/1-7-prov-algebra',

    // 2. Ekonomi
    'ma1b/2-ekonomi/2-1-forandringsfaktor',
    'ma1b/2-ekonomi/2-2-upprepad-forandring',
    'ma1b/2-ekonomi/2-3-dugga-ekonomi',
    'ma1b/2-ekonomi/2-4-lan-ranta-amortering',
    'ma1b/2-ekonomi/2-5-prov-ekonomi',
    'ma1b/2-ekonomi/2-6-laneberakningar-kalkylark',

    // 3. Funktioner och samband
    'ma1b/3-funktioner/3-1-koordinatsystem',
    'ma1b/3-funktioner/3-2-funktioner-vardetabeller-grafer',
    'ma1b/3-funktioner/3-3-funktionsbegreppet-fx',
    'ma1b/3-funktioner/3-4-linjara-funktioner-grafiskt',
    'ma1b/3-funktioner/3-5-linjara-funktioner-algebraiskt',
    'ma1b/3-funktioner/3-6-dugga-linjara-funktioner',
    'ma1b/3-funktioner/3-7-exponentialfunktioner',
    'ma1b/3-funktioner/3-8-potensfunktioner',
    'ma1b/3-funktioner/3-9-jamfora-modeller',
    'ma1b/3-funktioner/3-10-dugga2-funktioner',
    'ma1b/3-funktioner/3-11-problemlosning-funktioner',
    'ma1b/3-funktioner/3-12-definitionsmangd-vardemangd',
    'ma1b/3-funktioner/3-13-prov-funktioner',

    // 4. Fördjupning
    'ma1b/4-fordjupning/4-1-noll-produktmetoden',
    'ma1b/4-fordjupning/4-2-ekvationer-fordjupning',
    'ma1b/4-fordjupning/4-3-formler',
    'ma1b/4-fordjupning/4-4-tolka-funktionsbegreppet',
    'ma1b/4-fordjupning/4-5-faktorisering-fordjupning',
    'ma1b/4-fordjupning/4-6-forenkling-fordjupning',
    'ma1b/4-fordjupning/4-7-problemlosning-algebra-fordjupning',
    'ma1b/4-fordjupning/4-8-ekvationer-fordjupning-2',
    'ma1b/4-fordjupning/4-9-definitionsmangd-vardemangd-fordjupning',
    'ma1b/4-fordjupning/4-10-linjara-funktioner-fordjupning',
    'ma1b/4-fordjupning/4-11-exponentialfunktioner-fordjupning',
    'ma1b/4-fordjupning/4-12-ekvationer-med-geogebra',

    // 5. Kursprov
    'ma1b/5-kursprov/5-1-kursprov',
  ],

  // ───────── Ma1a BF (kommer fyllas på när Simons BF-struktur är fastställd) ─────────
  'ma1a': [],

  // ───────── Omläsningskurs (Ma1b-spåret) ─────────
  // Sekvens = delmomentordningen INOM ett område — eleven jobbar i egen takt
  // men i denna ordning. Retrieval drar från N-1/N-3 inom området.
  // Sluggar för sidor som inte byggts än ignoreras av retrieval tills de finns.
  'omlasning': [
    // Algebra (8 delmoment, från "Detta kan jag Ma1b 3.5")
    'omlasning/algebra/uttryck',
    'omlasning/algebra/faktorisering',
    'omlasning/algebra/stalla-upp-och-tolka-uttryck',
    'omlasning/algebra/ekvationer',
    'omlasning/algebra/potensekvationer',
    'omlasning/algebra/formler',
    'omlasning/algebra/problemlosning-med-algebra',
    'omlasning/algebra/potenser-och-rotter',
    'omlasning/algebra/redo-att-tenta',

    // Ekonomi (3 delmoment)
    'omlasning/ekonomi/grunder-i-procent',
    'omlasning/ekonomi/forandringsfaktor',
    'omlasning/ekonomi/lan-ranta-amortering',
    'omlasning/ekonomi/redo-att-tenta',

    // Funktioner (7 delmoment)
    'omlasning/funktioner/tolka-grafer',
    'omlasning/funktioner/linjara-funktioner',
    'omlasning/funktioner/rata-linjens-ekvation',
    'omlasning/funktioner/funktionsbegreppet-fx',
    'omlasning/funktioner/exponentialfunktioner',
    'omlasning/funktioner/exponentialfunktioner-2',
    'omlasning/funktioner/exponentialekvation-fran-graf',
    'omlasning/funktioner/redo-att-tenta',
  ],

  // ───────── Omläsningskurs (Ma1a-spåret) ─────────
  // Ma1a är bredare men grundare än Ma1b: 4 områden (inkl. Sannolikhet), finare delmomentsteg.
  // Sluggar för sidor som inte byggts än ignoreras av retrieval tills de finns.
  'omlasning-1a': [
    // Algebra (7 delmoment, från "Detta kan jag ma1a 2.0")
    'omlasning-1a/algebra/forenkling',
    'omlasning-1a/algebra/grundlaggande-ekvationer',
    'omlasning-1a/algebra/ekvation-x-i-bada-led',
    'omlasning-1a/algebra/faktorisering',
    'omlasning-1a/algebra/ekvationer-med-parenteser',
    'omlasning-1a/algebra/ekvationer-med-namnare',
    'omlasning-1a/algebra/formler',
    'omlasning-1a/algebra/redo-att-tenta',

    // Ekonomi (4 delmoment)
    'omlasning-1a/ekonomi/forandringsfaktor',
    'omlasning-1a/ekonomi/upprepad-forandring',
    'omlasning-1a/ekonomi/lan-ranta-amortering',
    'omlasning-1a/ekonomi/lan-och-ranta-med-kalkylblad',
    'omlasning-1a/ekonomi/redo-att-tenta',

    // Sannolikhet (3 delmoment — nyskrivna)
    'omlasning-1a/sannolikhet/sannolikhet-grunder',
    'omlasning-1a/sannolikhet/beroende-sannolikhet',
    'omlasning-1a/sannolikhet/komplementhandelse',
    'omlasning-1a/sannolikhet/redo-att-tenta',

    // Funktioner (9 delmoment)
    'omlasning-1a/funktioner/vardetabell',
    'omlasning-1a/funktioner/koordinatsystem',
    'omlasning-1a/funktioner/grafer',
    'omlasning-1a/funktioner/linjara-funktioner',
    'omlasning-1a/funktioner/lasa-av-grafer',
    'omlasning-1a/funktioner/funktionsbegreppet-fx',
    'omlasning-1a/funktioner/exponentialekvationer',
    'omlasning-1a/funktioner/exponentialekvationer-2',
    'omlasning-1a/funktioner/exponentialekvationer-fran-graf',
    'omlasning-1a/funktioner/redo-att-tenta',
  ],
};

/**
 * Hitta en lektions position i sin kurs-sekvens.
 * Returnerar -1 om lektionen inte finns i sekvensen.
 */
export function getLessonIndex(slug: string): { course: string; index: number } | null {
  for (const [course, seq] of Object.entries(sequences)) {
    const i = seq.indexOf(slug);
    if (i >= 0) return { course, index: i };
  }
  return null;
}

/**
 * Hämta slug för en lektion N positioner bakåt i sekvensen.
 * Returnerar null om position är utanför sekvensen.
 */
export function getPreviousSlug(slug: string, n: number): string | null {
  const pos = getLessonIndex(slug);
  if (!pos) return null;
  const targetIndex = pos.index - n;
  if (targetIndex < 0) return null;
  return sequences[pos.course][targetIndex];
}
