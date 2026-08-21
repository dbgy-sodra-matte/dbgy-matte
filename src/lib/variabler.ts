/**
 * variabler.ts — matematisk typografi för variabler.
 *
 * Simons önskemål 2026-08-21: ett "a" i ett uttryck ska se ut som ett
 * matematiskt 𝑎 (enkelvånings, kursivt), inte som monospace-fontens
 * tvåvånings-a. Det är samma konvention som läroböcker och nationella prov
 * följer: VARIABLER sätts kursivt, siffror och operatorer upprätt.
 *
 * ⚠️ VARFÖR DET HÄR ÄR EN REN PRESENTATIONSLÖSNING
 * Frestelsen är att byta tecknet mot Unicode U+1D44E (𝑎). Gör aldrig det:
 * bokstaven förekommer i FACIT ("a⁷", "a · b = c · d"), och eleven skriver
 * ett vanligt "a" i svarsrutan. Ett utbytt tecken skulle göra att korrekta
 * svar underkänns. Här rörs bara HTML-renderingen — datan är orörd, och
 * svarsbedömaren ser aldrig de här spannen.
 *
 * REGEL: en variabel är en ensam latinsk bokstav som inte sitter ihop med
 * andra bokstäver. Funktionsnamn (lg, sin) och enheter (km, kr) är flera
 * bokstäver och lämnas därför upprätta av sig själva, medan "x" i "2x"
 * fångas korrekt.
 *
 * Håll reglerna synkade med src/lib/rehype-variabler.mjs, som gör samma sak
 * för teoritexten (Astros egen markdown-pipeline går inte att nå härifrån).
 */

/**
 * Bokstäver som ALDRIG kursiveras trots att de står ensamma.
 * "i" och "I" är svenska ord och förekommer 700+ gånger i materialet
 * ("bara −6 i vägen", "I har x:et två saker på sig"). Att kursivera dem
 * skulle se ut som ett fel på varje sida. Priset är att ett "i" som råkar
 * användas som variabel missas — det är sällsynt i Ma1/Ma2b och ett
 * betydligt billigare fel.
 */
const ALDRIG_VARIABEL = new Set(['i', 'I', 'E']);

/** Versal direkt följd av siffra är en cellreferens (B2, A1), inte en variabel. */
function arCellreferens(bokstav: string, nastaTecken: string): boolean {
  return /[A-Z]/.test(bokstav) && /[0-9]/.test(nastaTecken);
}

/**
 * Bokstav efter kolon är en svensk böjning, inte en variabel:
 *   "en 3:a", "P(6:a)"  — räkneord efter siffra
 *   "sju a:n"           — pluralform efter bokstav
 * I "x:et" är det x som är variabeln; ändelsen "et" är två bokstäver och
 * fångas därför aldrig som ensam bokstav.
 */
function arEfterKolon(foreForeTecken: string, foreTecken: string): boolean {
  return foreTecken === ':' && /[0-9A-Za-z]/.test(foreForeTecken);
}

/**
 * Betygsbokstav i sammansättning: "E-målen", "C-nivå", "A-poäng".
 * A och C är visserligen också variabler (area, konstant), men följda av
 * bindestreck handlar det i det här materialet alltid om betygsnivån.
 * Notera att "x-axeln" INTE fångas här — där är x en riktig variabel.
 */
function arBetygsbokstav(bokstav: string, nastaTecken: string): boolean {
  return /[EAC]/.test(bokstav) && nastaTecken === '-';
}

/**
 * Förkortning: "T.ex.", "D.v.s." — versal följd av punkt och sedan bokstav.
 * En variabel i slutet av en mening ("...värdet är k.") följs av punkt plus
 * mellanslag eller radslut, inte av en bokstav.
 */
function arForkortning(bokstav: string, nasta: string, nastaNasta: string): boolean {
  return /[A-Z]/.test(bokstav) && nasta === '.' && /[A-Za-zÀ-ÖØ-öø-ÿ]/.test(nastaNasta);
}

const BOKSTAV = /[A-Za-zÀ-ÖØ-öø-ÿ]/;

/**
 * Sveper varje ensam bokstav i `<i class="mv">`.
 * Texten måste vara ren text — kör kursiveraHtml() på HTML i stället.
 */
export function kursiveraVariabler(text: string): string {
  let ut = '';
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
      ut += `<i class="mv">${tecken}</i>`;
    } else {
      ut += tecken;
    }
  }
  return ut;
}

/**
 * Kursiverar variabler i en HTML-sträng utan att röra taggarna.
 *
 * ⚠️ Att köra kursiveraVariabler() rakt på HTML vore en allvarlig bugg:
 * `<i class="mv">` innehåller ett ensamt "i" i själva taggnamnet, som då
 * skulle sveps i en ny tagg och förstöra markupen. Här delas strängen på
 * taggar först, och bara textdelarna behandlas.
 */
export function kursiveraHtml(html: string): string {
  return html
    .split(/(<[^>]*>)/)
    .map((del, index) => (index % 2 === 1 ? del : kursiveraVariabler(del)))
    .join('');
}
