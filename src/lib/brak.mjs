/**
 * brak.mjs — renderar division som riktigt bråk, täljaren ovanför nämnaren.
 *
 * Simons önskemål 2026-08-22: "När vi har en division vill jag att vi skriver
 * i bråkform i stället för som löpande text." Materialet skriver division med
 * snedstreck ("x/4 = 5", "(2 + 4) / 2"), vilket är hur man skriver på en
 * tangentbordsrad men inte hur det ser ut i en lärobok eller på ett prov.
 *
 * ⚠️ REN PRESENTATION — SAMMA PRINCIP SOM variabler.mjs/variabler.ts
 * Källtexten rörs aldrig. Snedstrecket finns kvar i .md-filerna, i facit och i
 * svarsbedömaren. Eleven skriver fortfarande "2/3" i svarsrutan och får rätt.
 * Skulle den här filen tas bort ser sidan ut precis som förut igen.
 *
 * ═══════════════════════════════════════════════════════════════════════════
 *  VARFÖR EN EGEN PARSER OCH INTE EN REGEX
 * ═══════════════════════════════════════════════════════════════════════════
 * Ett snedstreck betyder fyra olika saker i det här materialet, och bara ett
 * av dem är division:
 *
 *   division   "x/4", "(2 + 4) / 2", "lg 100 / lg 6", "DE/AC"   → bråk
 *   enhet      "80 km/h", "250 kr/månad", "12 kr/km"            → rör ej
 *   ordpar     "Största/minsta", "Smatte/Vidma", "plus/minus"   → rör ej
 *   sökväg     "spel/ekvations-race/v1.html", "algebra/redo"    → rör ej
 *
 * En regex på "något / något" träffar alla fyra. Lösningen här är i stället en
 * liten grammatik: ett led måste vara ett TAL, en VARIABEL, en PARENTESGRUPP
 * eller ett FUNKTIONSANROP. Enheter och vanliga ord ("kr", "månad", "Vidma",
 * "viewform") är flerbokstaviga gemena ord, som grammatiken vägrar — därför
 * faller de bort av sig själva i stället för att behöva räknas upp i en lista
 * som ändå aldrig blir komplett.
 *
 * Undantagen från "flerbokstavigt gement ord duger inte":
 *   VERSALER   "DE/AC", "BD/DA" — sträckor i likformighetskapitlet
 *   funktioner "lg 100 / lg 6" — logaritmekvationerna
 *
 * ═══════════════════════════════════════════════════════════════════════════
 *  ORDNING I PIPELINEN
 * ═══════════════════════════════════════════════════════════════════════════
 * Bråken måste sättas FÖRE kursiveringen av variabler. Kursiveringen sveper
 * ensamma bokstäver i <i class="mv">, och då ser den här parsern "<i>" i
 * stället för "x" och hittar inget led alls. Samma sak i teoritexten:
 * rehypeBrak före rehypeVariabler i astro.config.mjs.
 *
 * Filen är avsiktligt .mjs och inte .ts: den importeras både av .astro-filer
 * (via Vite) och av astro.config.mjs (via Node). variabler-reglerna fick
 * dubbleras i en .ts och en .mjs och bär därför varningen "HÅLL REGLERNA
 * SYNKADE" — här finns bara en implementation, så de kan inte glida isär.
 */

/** Upphöjda tecken som hör ihop med ledet före: a⁸, x², 5⁻³. */
const UPPHOJT = '⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺';

/** Funktionsnamn som får stå som flerbokstavigt led: lg 100 / lg 6. */
const FUNKTIONER = new Set(['lg', 'log', 'ln', 'sin', 'cos', 'tan']);

/**
 * Enhetspar som ser ut som matematik men är en hastighet eller ett pris.
 * "km/h" och "kr/månad" stoppas redan av grammatiken (flerbokstavigt gement
 * ord), men "m/s" består av två ENSAMMA bokstäver och skulle annars bli ett
 * bråk med m över s. Listan gäller bara när snedstrecket saknar mellanslag.
 */
const ENHETSPAR = new Set(['m/s', 'km/h', 'kr/h', 'kr/kg', 'g/l', 'l/s', 'mg/l']);

const arSiffra = (c) => c >= '0' && c <= '9';
const arLatin = (c) => !!c && /[A-Za-z]/.test(c);
const arBokstav = (c) => !!c && /[A-Za-zÀ-ÖØ-öø-ÿ]/.test(c);
const arUpphojt = (c) => !!c && UPPHOJT.includes(c);

/** Läser en sammanhängande bokstavsföljd från index i. */
function lasOrd(s, i) {
  let j = i;
  while (j < s.length && arBokstav(s[j])) j++;
  return s.slice(i, j);
}

/**
 * Duger bokstavsföljden som matematiskt led?
 *
 * En ensam bokstav är en variabel (x, a, p). Enbart versaler är en sträcka
 * (AC, BD) eller en storhet (A, V). Ett funktionsnamn är ett funktionsnamn.
 * Allt annat — "kr", "månad", "Vidma", "viewform", "möjliga" — är ett ord,
 * och ord blir inte bråk.
 */
function dugerSomLed(ord) {
  if (ord.length === 1) return true;
  if (FUNKTIONER.has(ord.toLowerCase())) return true;
  return ord === ord.toUpperCase() && /[A-Z]/.test(ord);
}

/** Index EFTER den matchande högerparentesen, eller −1. */
function matchaParentesFramat(s, i) {
  let djup = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '(') djup++;
    else if (s[j] === ')') {
      djup--;
      if (djup === 0) return j + 1;
    }
  }
  return -1;
}

/**
 * Läser en exponent skriven med taktecken: a^n, x^−1, 2^(m−3).
 *
 * Upphöjda tecken (a⁸) fångas av svansen i lasEnkeltLed, men materialet
 * skriver också exponenter med ^ när de innehåller en variabel eller ett
 * uttryck. Utan det här steget delas "a^m / a^n" mitt itu och blir "a^" plus
 * ett bråk med m över a plus "^n" — potenslagen skulle bli obegriplig.
 *
 * Returnerar oförändrat index när det inte står någon exponent här.
 */
function lasExponent(s, i) {
  if (s[i] !== '^') return i;
  let k = i + 1;
  if (s[k] === '−' || s[k] === '-') k++;
  if (s[k] === '(') {
    const slut = matchaParentesFramat(s, k);
    return slut > 0 ? slut : i;
  }
  let j = k;
  while (j < s.length && (arSiffra(s[j]) || arLatin(s[j]))) j++;
  return j > k ? j : i;
}

/**
 * Läser ett ENKELT led (tal eller variabel) framåt. Returnerar slutindex
 * (exklusivt) eller −1.
 *
 * Tal får innehålla svenskt decimalkomma (0,7782) och tusenmellanslag
 * (4 000, 100 000) — det senare är viktigt, annars blir "4 000 / 12" ett bråk
 * med bara nollorna i täljaren.
 */
function lasEnkeltLed(s, i) {
  const n = s.length;
  let j = i;

  if (arSiffra(s[j])) {
    while (j < n && arSiffra(s[j])) j++;
    // Tusenmellanslag: exakt tre siffror efter, och inte en fjärde.
    while (
      s[j] === ' ' &&
      arSiffra(s[j + 1]) && arSiffra(s[j + 2]) && arSiffra(s[j + 3]) &&
      !arSiffra(s[j + 4])
    ) j += 4;
    if (s[j] === ',' && arSiffra(s[j + 1])) {
      j++;
      while (j < n && arSiffra(s[j])) j++;
    }
  } else {
    const ord = lasOrd(s, j);
    if (!ord || !dugerSomLed(ord)) return -1;
    j += ord.length;
  }

  // Svans: upphöjt och vidhängande faktorer — a⁸, x², 12x²y³, 6x.
  for (;;) {
    let k = j;
    while (k < n && arUpphojt(s[k])) k++;
    const ord = lasOrd(s, k);
    if (ord && dugerSomLed(ord)) { j = k + ord.length; continue; }
    if (k > j) { j = k; break; }
    break;
  }

  // Funktionsanrop på en variabel: y(0), f(x).
  if (s[j] === '(') {
    const slut = matchaParentesFramat(s, j);
    if (slut > 0) j = slut;
  }
  return lasExponent(s, j);
}

/**
 * Läser ett helt led framåt: tecken, parentesgrupp / funktionsanrop / enkelt
 * led, upphöjt — och för TÄLJAREN även en multiplikationskedja.
 *
 * Kedjan gäller bara täljaren, och det är precis vad prioriteringsreglerna
 * kräver: "b · h / 2" betyder (b · h)/2, medan "12 / 2 · 3" betyder
 * (12/2) · 3. Alltså får täljaren växa åt vänster förbi ett gångertecken,
 * men nämnaren får aldrig växa åt höger förbi ett.
 */
function lasLed(s, i, tillatKedja) {
  const n = s.length;
  let j = i;
  if (s[j] === '−' || s[j] === '-') j++;

  if (s[j] === '(') {
    const slut = matchaParentesFramat(s, j);
    if (slut < 0) return -1;
    j = slut;
  } else {
    const ord = lasOrd(s, j);
    if (ord && FUNKTIONER.has(ord.toLowerCase()) && s[j + ord.length] === ' ') {
      j += ord.length;
      while (s[j] === ' ') j++;
      const arg = s[j] === '(' ? matchaParentesFramat(s, j) : lasEnkeltLed(s, j);
      if (arg < 0) return -1;
      j = arg;
    } else {
      const enkelt = lasEnkeltLed(s, j);
      if (enkelt < 0) return -1;
      j = enkelt;
    }
  }
  while (j < n && arUpphojt(s[j])) j++;
  j = lasExponent(s, j);

  if (tillatKedja) {
    for (;;) {
      let k = j;
      while (s[k] === ' ') k++;
      if (s[k] !== '·' && s[k] !== '*') break;
      k++;
      while (s[k] === ' ') k++;
      const nasta = lasLed(s, k, false);
      if (nasta < 0) break;
      j = nasta;
    }
  }
  return j;
}

/**
 * Är minustecknet vid index i ett förtecken (−p/2) eller ett minusräknesätt
 * (5 − 8/2)?
 *
 * Skillnaden avgör om minus hör till täljaren eller står utanför bråket, och
 * den är inte kosmetisk: "5 − 8/2" med −8 i täljaren blir ett annat tal.
 * Regeln är att titta på vad som står före. Ett avslutat led (tal, ensam
 * variabel, högerparentes) betyder att minus är ett räknesätt. Ett likhets-
 * tecken, en öppnande parentes, ett annat räknetecken — eller ett svenskt ord
 * som "så" — betyder att minus är ett förtecken.
 */
function arFortecken(s, i) {
  let k = i - 1;
  while (k >= 0 && s[k] === ' ') k--;
  if (k < 0) return true;
  const c = s[k];
  if (c === ')' || arSiffra(c)) return false;
  if (arBokstav(c)) {
    let start = k;
    while (start >= 0 && arBokstav(s[start])) start--;
    const ord = s.slice(start + 1, k + 1);
    // En ensam bokstav är en variabel → minus är ett räknesätt ("x − 8/2").
    // Ett ord är text → minus är ett förtecken ("så −p/2 = 4").
    return ord.length > 1;
  }
  return true;
}

/**
 * Var börjar täljaren till snedstrecket vid slashIdx?
 *
 * Metoden är att pröva varje möjlig startpunkt från vänster och behålla den
 * FÖRSTA vars framåtläsning slutar exakt vid snedstrecket. Att pröva från
 * vänster ger den längsta täljaren, vilket är den man vill ha: i "4 000 / 12"
 * duger både "4 000" och "000", och bara det första är rätt.
 */
function hittaTaljarStart(s, slashIdx, minStart) {
  let slut = slashIdx;
  while (slut > minStart && s[slut - 1] === ' ') slut--;
  if (slut <= minStart) return -1;

  for (let start = minStart; start < slut; start++) {
    if (s[start] === ' ') continue;
    if (lasLed(s, start, true) !== slut) continue;
    // Ledde träffen med ett minus som egentligen är ett räknesätt? Pröva då
    // nästa startpunkt i stället, så att bara talet hamnar i täljaren.
    if ((s[start] === '−' || s[start] === '-') && !arFortecken(s, start)) continue;
    return start;
  }
  return -1;
}

/** Närmaste tecken som inte är blanksteg, åt håll `steg` (+1 höger, −1 vänster). */
function nastaTecken(s, i, steg) {
  let k = i;
  while (k >= 0 && k < s.length && s[k] === ' ') k += steg;
  return k >= 0 && k < s.length ? s[k] : '';
}

/** Skalar bort en parentes som omsluter hela ledet: "(2 + 4)" → "2 + 4". */
function skalaParentes(text) {
  if (text[0] !== '(') return text;
  if (matchaParentesFramat(text, 0) !== text.length) return text;
  return text.slice(1, -1);
}

/**
 * Delar en textsträng i vanlig text och bråk.
 * @returns {Array<{typ:'text',text:string}|{typ:'brak',taljare:any[],namnare:any[]}>}
 */
export function delaIBrak(text) {
  const segment = [];
  let pos = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== '/') continue;
    // "//" och "://" är alltid webbadress, aldrig division.
    if (text[i + 1] === '/' || text[i - 1] === '/' || text[i - 1] === ':') continue;

    const start = hittaTaljarStart(text, i, pos);
    if (start < 0) continue;
    // Täljaren får aldrig börja mitt inne i ett ord. Utan den här spärren blir
    // "i 80 km/h" till "80 k" plus ett bråk med m över h, och "årsränta/12"
    // till "årsränt" plus a över 12 — grammatiken vägrar visserligen "km" och
    // "årsränta" som led, men hittar då en ensam slutbokstav som duger.
    if (arBokstav(text[start - 1]) || arSiffra(text[start - 1])) continue;

    let j = i + 1;
    while (text[j] === ' ') j++;
    const slut = lasLed(text, j, false);
    if (slut < 0) continue;
    // ... och nämnaren får inte sluta mitt inne i ett ord.
    if (arBokstav(text[slut])) continue;

    // Tre led i rad är en uppräkning, inte en division: "68 / 95 / 99,7" för
    // normalfördelningen skulle annars bli 68 över 95, gånger 99,7.
    if (nastaTecken(text, slut, 1) === '/' || nastaTecken(text, start - 1, -1) === '/') continue;

    const taljare = text.slice(start, i).trim();
    const namnare = text.slice(j, slut).trim();
    if (!taljare || !namnare) continue;
    // Hastighet eller pris skrivet utan mellanslag: 10 m/s.
    if (text[i - 1] !== ' ' && text[i + 1] !== ' ' &&
        ENHETSPAR.has(`${taljare}/${namnare}`.toLowerCase())) continue;

    if (start > pos) segment.push({ typ: 'text', text: text.slice(pos, start) });
    segment.push({
      typ: 'brak',
      taljare: delaIBrak(skalaParentes(taljare)),
      namnare: delaIBrak(skalaParentes(namnare)),
    });
    pos = slut;
    i = slut - 1;
  }

  if (pos < text.length) segment.push({ typ: 'text', text: text.slice(pos) });
  return segment;
}

/**
 * Bråket som HTML.
 *
 * Det dolda snedstrecket mitt i är inte dekoration: utan det läser en
 * skärmläsare "1 2" och en kopierad text blir "12" i stället för "1/2".
 * Det ligger utanför flödet (position:absolute i global.css) och påverkar
 * därför inte hur bråket ser ut.
 */
function segmentTillHtml(segment) {
  return segment
    .map((s) =>
      s.typ === 'text'
        ? s.text
        : '<span class="brak">' +
          `<span class="brak-t">${segmentTillHtml(s.taljare)}</span>` +
          '<span class="brak-s">/</span>' +
          `<span class="brak-n">${segmentTillHtml(s.namnare)}</span>` +
          '</span>'
    )
    .join('');
}

/**
 * Sätter bråk i en HTML-sträng utan att röra taggarna.
 *
 * Strängen delas på taggar först, precis som i kursiveraHtml(). Det skyddar
 * href-attributen: annars hade "spel/ekvations-race/v1.html" i en länk kunnat
 * bli ett bråk mitt inne i adressen.
 */
export function brakHtml(html) {
  return html
    .split(/(<[^>]*>)/)
    .map((del, index) => (index % 2 === 1 ? del : segmentTillHtml(delaIBrak(del))))
    .join('');
}

/** Innehåller HTML:en minst ett bråk? Används för radavstånd i <pre>. */
export function harBrak(html) {
  return html.includes('class="brak"');
}

/** Bråket som hast-noder, för rehype-pluginen. */
export function segmentTillHast(segment) {
  return segment.map((s) =>
    s.typ === 'text'
      ? { type: 'text', value: s.text }
      : {
          type: 'element',
          tagName: 'span',
          properties: { className: ['brak'] },
          children: [
            {
              type: 'element',
              tagName: 'span',
              properties: { className: ['brak-t'] },
              children: segmentTillHast(s.taljare),
            },
            {
              type: 'element',
              tagName: 'span',
              properties: { className: ['brak-s'] },
              children: [{ type: 'text', value: '/' }],
            },
            {
              type: 'element',
              tagName: 'span',
              properties: { className: ['brak-n'] },
              children: segmentTillHast(s.namnare),
            },
          ],
        }
  );
}
