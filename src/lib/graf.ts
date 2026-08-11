/**
 * graf.ts — ritar ett koordinatsystem med utritad linje/kurva/punkter som SVG-sträng.
 *
 * Ren funktion utan beroenden → används både på sajten (Astro, via set:html) och i
 * prov-HTML (Node-genererat). Allt ritas i SVG: rutnät, axlar, gradering och grafen.
 *
 *   grafSvg({ typ: 'linjär', k: 2, m: 1, xmax: 6, ymax: 14 })
 *   grafSvg({ typ: 'exponentiell', C: 100, a: 2, xmax: 4, ymax: 1600, ySteg: 200 })
 *   grafSvg({ typ: 'punkter', punkter: [[0,2],[1,5],[2,8]], visaKurva: true, xmax: 5, ymax: 10 })
 */

export interface GrafSpec {
  /** "linjer" = rita enbart uppsättningen i `linjer` (ekvationssystem grafiskt).
   *  "ladagram" och "normalfordelning" ritas av egna funktioner (statistik). */
  typ: 'linjär' | 'exponentiell' | 'punkter' | 'andragrad' | 'linjer' | 'ladagram' | 'normalfordelning' | 'figur';
  /** Geometrifigur — deklarativ vektorritning i egna koordinater (y uppåt).
   *  Täcker trianglar, cirklar, kordor, längdmått, vinkelbågar och räta vinklar. */
  figur?: {
    /** Synligt område [xmin, ymin, xmax, ymax] i figurens egna koordinater. */
    vy: [number, number, number, number];
    polygon?: [number, number][];
    linjer?: { fran: [number, number]; till: [number, number]; streckad?: boolean }[];
    cirklar?: { c: [number, number]; r: number }[];
    /** Namngivna hörn/punkter. `plats` styr var etiketten hamnar. */
    punkter?: { p: [number, number]; namn?: string; plats?: 'over' | 'under' | 'vanster' | 'hoger'; fylld?: boolean }[];
    /** Längdmått: texten sätts vid sträckans mittpunkt, något förskjuten. */
    matt?: { fran: [number, number]; till: [number, number]; text: string; sida?: number }[];
    /** Vinkelbåge vid hörnet `vid`, mellan riktningarna mot `fran` och `till`. */
    vinklar?: { vid: [number, number]; fran: [number, number]; till: [number, number]; text?: string }[];
    /** Rätvinkelmarkering (liten kvadrat) vid `vid`, mot två grannhörn. */
    ratvinklar?: { vid: [number, number]; mot1: [number, number]; mot2: [number, number] }[];
  };
  /** Lådagram — ett eller flera i samma skala (jämförelseuppgifter). */
  ladagram?: { min: number; q1: number; median: number; q3: number; max: number; etikett?: string }[];
  /** Normalfördelning: klockkurva kring `medel` med spridningen `sigma`.
   *  Standardavvikelserna markeras med streckade linjer och etiketter. */
  medel?: number; sigma?: number;
  /** Skugga området under/över ett värde, eller mellan två (andelsuppgifter). */
  markeraUnder?: number; markeraOver?: number; markeraMellan?: [number, number];
  k?: number; m?: number;            // linjär: y = kx + m
  C?: number; a?: number;            // exponentiell: y = C · a^x
  /** andragrad: y = a·x² + b·x + c (a återanvänds från fältet ovan) */
  b?: number; c?: number;
  /** Flera räta linjer i samma system — ekvationssystem löst grafiskt.
   *  Ritas i skilda färger med valfri etikett vid högerkanten. */
  linjer?: { k: number; m: number; etikett?: string }[];
  punkter?: [number, number][];      // markerade punkter (alltid utritade som ringar)
  visaKurva?: boolean;               // rita linjen genom punkterna
  xmin?: number; xmax?: number; ymin?: number; ymax?: number;
  xSteg?: number; ySteg?: number;    // avstånd mellan rutnätslinjer/gradering
  bredd?: number; hojd?: number;
  titel?: string;                    // valfri etikett ovanför grafen
}

/** Färgpaletten för flera kurvor i samma system. Första = sajtens accent. */
const KURVFARGER = ['#2a5d8f', '#c2410c', '#15803d'];

export function grafSvg(s: GrafSpec): string {
  if (s.typ === 'ladagram') return ladagramSvg(s);
  if (s.typ === 'normalfordelning') return normalfordelningSvg(s);
  if (s.typ === 'figur') return figurSvg(s);
  const bredd = s.bredd ?? 340;
  const hojd = s.hojd ?? 260;
  const mL = 40, mR = 14, mT = 14, mB = 30; // marginaler för gradering
  const xmin = s.xmin ?? 0, xmax = s.xmax ?? 6;
  const ymin = s.ymin ?? 0, ymax = s.ymax ?? 10;
  const xSteg = s.xSteg ?? 1;
  const ySteg = s.ySteg ?? niceStep((ymax - ymin) / 6);
  const pw = bredd - mL - mR, ph = hojd - mT - mB;

  const X = (x: number) => mL + ((x - xmin) / (xmax - xmin)) * pw;
  const Y = (y: number) => mT + ((ymax - y) / (ymax - ymin)) * ph;

  /** Klipper en rät linje mot fönstrets y-intervall och returnerar de x-värden
   *  där den ska börja och sluta ritas. Att i stället bara klämma ändpunkternas
   *  y-värden (som en tidigare kopia av den här motorn gjorde) ändrar linjens
   *  lutning och ritar alltså fel linje. Null = linjen syns inte alls. */
  const klippLinje = (k: number, m: number): [number, number] | null => {
    const yAt = (x: number) => k * x + m;
    let a = xmin, b = xmax;
    if (Math.abs(k) > 1e-12) {
      const xVid = (y: number) => (y - m) / k;
      const gransar = [xVid(ymin), xVid(ymax)].sort((p, q) => p - q);
      a = Math.max(xmin, gransar[0]);
      b = Math.min(xmax, gransar[1]);
    } else if (m < ymin || m > ymax) {
      return null;                        // vågrät linje utanför fönstret
    }
    if (a >= b) return null;
    // Marginal för avrundning: håll kvar linjen om den precis tangerar kanten
    return [a, b];
  };

  const out: string[] = [];
  out.push(`<svg viewBox="0 0 ${bredd} ${hojd}" width="${bredd}" height="${hojd}" role="img" font-family="Inter, sans-serif" style="max-width:100%;height:auto;background:#fff;border:1px solid #e2e8f0;border-radius:8px">`);

  // Rutnät
  for (let x = xmin; x <= xmax + 1e-9; x += xSteg) {
    const px = X(x);
    out.push(`<line x1="${px.toFixed(1)}" y1="${mT}" x2="${px.toFixed(1)}" y2="${mT + ph}" stroke="#eef2f6" stroke-width="1"/>`);
  }
  for (let y = ymin; y <= ymax + 1e-9; y += ySteg) {
    const py = Y(y);
    out.push(`<line x1="${mL}" y1="${py.toFixed(1)}" x2="${mL + pw}" y2="${py.toFixed(1)}" stroke="#eef2f6" stroke-width="1"/>`);
  }

  // Axlar (vid x=0 / y=0 om de ligger i fönstret, annars vid kanten)
  const xAxisY = ymin <= 0 && ymax >= 0 ? Y(0) : mT + ph;
  const yAxisX = xmin <= 0 && xmax >= 0 ? X(0) : mL;
  out.push(`<line x1="${mL}" y1="${xAxisY.toFixed(1)}" x2="${mL + pw}" y2="${xAxisY.toFixed(1)}" stroke="#334155" stroke-width="1.5"/>`);
  out.push(`<line x1="${yAxisX.toFixed(1)}" y1="${mT}" x2="${yAxisX.toFixed(1)}" y2="${mT + ph}" stroke="#334155" stroke-width="1.5"/>`);
  // Pilspetsar på axlarna (gör det till ett "riktigt" koordinatsystem)
  const ex = mL + pw, ey = xAxisY;
  out.push(`<polyline points="${(ex - 6).toFixed(1)},${(ey - 3.5).toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)} ${(ex - 6).toFixed(1)},${(ey + 3.5).toFixed(1)}" fill="none" stroke="#334155" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>`);
  out.push(`<polyline points="${(yAxisX - 3.5).toFixed(1)},${(mT + 6).toFixed(1)} ${yAxisX.toFixed(1)},${mT.toFixed(1)} ${(yAxisX + 3.5).toFixed(1)},${(mT + 6).toFixed(1)}" fill="none" stroke="#334155" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>`);

  // Gradering på x-axeln
  for (let x = xmin; x <= xmax + 1e-9; x += xSteg) {
    if (x === 0) continue;
    out.push(`<text x="${X(x).toFixed(1)}" y="${(mT + ph + 16).toFixed(1)}" font-size="11" fill="#64748b" text-anchor="middle">${fmt(x)}</text>`);
  }
  // Gradering på y-axeln
  for (let y = ymin; y <= ymax + 1e-9; y += ySteg) {
    if (y === 0) continue;
    out.push(`<text x="${(mL - 6).toFixed(1)}" y="${(Y(y) + 4).toFixed(1)}" font-size="11" fill="#64748b" text-anchor="end">${fmt(y)}</text>`);
  }
  // Axelnamn
  out.push(`<text x="${(mL + pw).toFixed(1)}" y="${(xAxisY - 6).toFixed(1)}" font-size="12" fill="#334155" text-anchor="end" font-style="italic">x</text>`);
  out.push(`<text x="${(yAxisX + 6).toFixed(1)}" y="${(mT + 10).toFixed(1)}" font-size="12" fill="#334155" font-style="italic">y</text>`);

  // Kurva/linje
  const accent = '#2a5d8f';
  if (s.typ === 'linjär' && s.k != null && s.m != null) {
    const omr = klippLinje(s.k, s.m);
    if (omr) {
      const [a, b] = omr;
      out.push(`<line x1="${X(a).toFixed(1)}" y1="${Y(s.k * a + s.m).toFixed(1)}" x2="${X(b).toFixed(1)}" y2="${Y(s.k * b + s.m).toFixed(1)}" stroke="${accent}" stroke-width="2.5" stroke-linecap="round"/>`);
    }
  } else if (s.typ === 'exponentiell' && s.C != null && s.a != null) {
    const pts: string[] = [];
    const N = 80;
    for (let i = 0; i <= N; i++) {
      const x = xmin + (i / N) * (xmax - xmin);
      const y = s.C * Math.pow(s.a, x);
      pts.push(`${X(x).toFixed(1)},${Y(y).toFixed(1)}`);
    }
    out.push(`<polyline points="${pts.join(' ')}" fill="none" stroke="${accent}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>`);
  } else if (s.typ === 'punkter' && s.punkter && s.visaKurva) {
    // Mjuk kurva genom punkterna (Catmull-Rom → Bézier) så den ser jämn ut, inte kantig
    out.push(slatKurva_(s.punkter.map((p) => [X(p[0]), Y(p[1])] as [number, number]), accent));
  } else if (s.typ === 'andragrad' && s.a != null) {
    // y = a·x² + b·x + c — samplas tätt och klipps mot fönstret så parabelns
    // grenar inte ritas utanför rutan när de skjuter i höjden.
    const A = s.a, B = s.b ?? 0, C0 = s.c ?? 0;
    const segment: string[][] = [];
    let aktuell: string[] = [];
    const N = 200;
    for (let i = 0; i <= N; i++) {
      const x = xmin + (i / N) * (xmax - xmin);
      const y = A * x * x + B * x + C0;
      if (y < ymin || y > ymax) { if (aktuell.length > 1) segment.push(aktuell); aktuell = []; continue; }
      aktuell.push(`${X(x).toFixed(1)},${Y(y).toFixed(1)}`);
    }
    if (aktuell.length > 1) segment.push(aktuell);
    for (const seg of segment) {
      out.push(`<polyline points="${seg.join(' ')}" fill="none" stroke="${accent}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>`);
    }
  }

  // Flera räta linjer (ekvationssystem grafiskt) — ritas efter/utöver ovanstående
  if (s.linjer) {
    s.linjer.forEach((L, i) => {
      const farg = KURVFARGER[i % KURVFARGER.length];
      const omr = klippLinje(L.k, L.m);
      if (!omr) return;
      const [a, b] = omr;
      out.push(`<line x1="${X(a).toFixed(1)}" y1="${Y(L.k * a + L.m).toFixed(1)}" x2="${X(b).toFixed(1)}" y2="${Y(L.k * b + L.m).toFixed(1)}" stroke="${farg}" stroke-width="2.5" stroke-linecap="round"/>`);
      if (L.etikett) {
        // Etiketten sätts vid linjens högra ändpunkt inom det klippta området
        out.push(`<text x="${(X(b) - 6).toFixed(1)}" y="${(Y(L.k * b + L.m) - 7).toFixed(1)}" font-size="11" font-weight="600" fill="${farg}" text-anchor="end">${L.etikett}</text>`);
      }
    });
  }

  // Markerade punkter (vit kant så de syns mot kurvan)
  if (s.punkter) {
    for (const p of s.punkter) {
      out.push(`<circle cx="${X(p[0]).toFixed(1)}" cy="${Y(p[1]).toFixed(1)}" r="4" fill="${accent}" stroke="#fff" stroke-width="1.5"/>`);
    }
  }

  out.push(`</svg>`);
  return out.join('');
}

/**
 * Lådagram (box plot) — ett eller flera på en gemensam vågrät skala.
 * Ritar min–max som "morrhår", lådan q1–q3 och medianstrecket. Ingen y-axel:
 * y-led används bara för att separera flera lådagram i jämförelseuppgifter.
 */
function ladagramSvg(s: GrafSpec): string {
  const lador = s.ladagram ?? [];
  if (!lador.length) return '';
  const harEtiketter = lador.some((l) => l.etikett);
  const mL = harEtiketter ? 62 : 22, mR = 18, mT = 14, mB = 30;
  const radHojd = 44;
  const bredd = s.bredd ?? 340;
  const hojd = s.hojd ?? mT + mB + radHojd * lador.length;
  const alla = lador.flatMap((l) => [l.min, l.max]);
  const xmin = s.xmin ?? Math.min(...alla);
  const xmax = s.xmax ?? Math.max(...alla);
  const xSteg = s.xSteg ?? niceStep((xmax - xmin) / 8);
  const pw = bredd - mL - mR;
  const X = (x: number) => mL + ((x - xmin) / (xmax - xmin)) * pw;

  const out: string[] = [];
  out.push(`<svg viewBox="0 0 ${bredd} ${hojd}" width="${bredd}" height="${hojd}" role="img" font-family="Inter, sans-serif" style="max-width:100%;height:auto;background:#fff;border:1px solid #e2e8f0;border-radius:8px">`);

  // Lodrätt rutnät vid graderingen — gör avläsningen entydig
  for (let x = xmin; x <= xmax + 1e-9; x += xSteg) {
    out.push(`<line x1="${X(x).toFixed(1)}" y1="${mT}" x2="${X(x).toFixed(1)}" y2="${(hojd - mB).toFixed(1)}" stroke="#eef2f6" stroke-width="1"/>`);
  }

  const accent = '#2a5d8f';
  lador.forEach((l, i) => {
    const yMitt = mT + radHojd * i + radHojd / 2;
    const h = 20;
    // Morrhår min–max
    out.push(`<line x1="${X(l.min).toFixed(1)}" y1="${yMitt}" x2="${X(l.max).toFixed(1)}" y2="${yMitt}" stroke="${accent}" stroke-width="1.5"/>`);
    for (const v of [l.min, l.max]) {
      out.push(`<line x1="${X(v).toFixed(1)}" y1="${(yMitt - h / 2).toFixed(1)}" x2="${X(v).toFixed(1)}" y2="${(yMitt + h / 2).toFixed(1)}" stroke="${accent}" stroke-width="1.5"/>`);
    }
    // Lådan q1–q3
    out.push(`<rect x="${X(l.q1).toFixed(1)}" y="${(yMitt - h / 2).toFixed(1)}" width="${(X(l.q3) - X(l.q1)).toFixed(1)}" height="${h}" fill="#e8f0f7" stroke="${accent}" stroke-width="1.5"/>`);
    // Medianen
    out.push(`<line x1="${X(l.median).toFixed(1)}" y1="${(yMitt - h / 2).toFixed(1)}" x2="${X(l.median).toFixed(1)}" y2="${(yMitt + h / 2).toFixed(1)}" stroke="${accent}" stroke-width="2.5"/>`);
    if (l.etikett) {
      out.push(`<text x="${mL - 8}" y="${(yMitt + 4).toFixed(1)}" font-size="12" fill="#334155" text-anchor="end">${l.etikett}</text>`);
    }
  });

  // Skalan längst ner
  const yAxel = hojd - mB;
  out.push(`<line x1="${mL}" y1="${yAxel}" x2="${(mL + pw).toFixed(1)}" y2="${yAxel}" stroke="#334155" stroke-width="1.5"/>`);
  for (let x = xmin; x <= xmax + 1e-9; x += xSteg) {
    out.push(`<line x1="${X(x).toFixed(1)}" y1="${yAxel}" x2="${X(x).toFixed(1)}" y2="${yAxel + 4}" stroke="#334155" stroke-width="1"/>`);
    out.push(`<text x="${X(x).toFixed(1)}" y="${yAxel + 17}" font-size="11" fill="#64748b" text-anchor="middle">${fmt(x)}</text>`);
  }
  out.push(`</svg>`);
  return out.join('');
}

/**
 * Normalfördelningskurva med markerade standardavvikelser.
 * Kurvan är normerad till fönstrets höjd (absolut y-skala saknar mening här);
 * poängen är formen, symmetrilinjen vid medelvärdet och σ-markeringarna.
 */
function normalfordelningSvg(s: GrafSpec): string {
  const medel = s.medel ?? 0;
  const sigma = s.sigma ?? 1;
  const bredd = s.bredd ?? 340, hojd = s.hojd ?? 210;
  const mL = 20, mR = 20, mT = 16, mB = 34;
  const xmin = s.xmin ?? medel - 3.6 * sigma;
  const xmax = s.xmax ?? medel + 3.6 * sigma;
  const pw = bredd - mL - mR, ph = hojd - mT - mB;
  const X = (x: number) => mL + ((x - xmin) / (xmax - xmin)) * pw;
  const tathet = (x: number) => Math.exp(-((x - medel) ** 2) / (2 * sigma * sigma));
  const Y = (t: number) => mT + ph - t * ph * 0.92;

  const out: string[] = [];
  out.push(`<svg viewBox="0 0 ${bredd} ${hojd}" width="${bredd}" height="${hojd}" role="img" font-family="Inter, sans-serif" style="max-width:100%;height:auto;background:#fff;border:1px solid #e2e8f0;border-radius:8px">`);

  const N = 200;
  const punkt = (i: number) => {
    const x = xmin + (i / N) * (xmax - xmin);
    return [X(x), Y(tathet(x))] as [number, number];
  };

  // Skuggat område (andelsuppgifter)
  const skugga = (fran: number, till: number) => {
    const pts: string[] = [`${X(fran).toFixed(1)},${(mT + ph).toFixed(1)}`];
    const steg = 120;
    for (let i = 0; i <= steg; i++) {
      const x = fran + (i / steg) * (till - fran);
      pts.push(`${X(x).toFixed(1)},${Y(tathet(x)).toFixed(1)}`);
    }
    pts.push(`${X(till).toFixed(1)},${(mT + ph).toFixed(1)}`);
    out.push(`<polygon points="${pts.join(' ')}" fill="#2a5d8f" fill-opacity="0.18"/>`);
  };
  if (s.markeraUnder != null) skugga(xmin, s.markeraUnder);
  if (s.markeraOver != null) skugga(s.markeraOver, xmax);
  if (s.markeraMellan) skugga(s.markeraMellan[0], s.markeraMellan[1]);

  // Standardavvikelselinjer
  for (let k = -3; k <= 3; k++) {
    const x = medel + k * sigma;
    if (x < xmin || x > xmax) continue;
    const strek = k === 0 ? '' : ' stroke-dasharray="3 3"';
    out.push(`<line x1="${X(x).toFixed(1)}" y1="${Y(tathet(x)).toFixed(1)}" x2="${X(x).toFixed(1)}" y2="${(mT + ph).toFixed(1)}" stroke="#94a3b8" stroke-width="1"${strek}/>`);
    out.push(`<text x="${X(x).toFixed(1)}" y="${(mT + ph + 15).toFixed(1)}" font-size="11" fill="#64748b" text-anchor="middle">${fmt(x)}</text>`);
  }

  // Kurvan
  const pts: string[] = [];
  for (let i = 0; i <= N; i++) { const p = punkt(i); pts.push(`${p[0].toFixed(1)},${p[1].toFixed(1)}`); }
  out.push(`<polyline points="${pts.join(' ')}" fill="none" stroke="#2a5d8f" stroke-width="2.5" stroke-linejoin="round"/>`);

  // Baslinje
  out.push(`<line x1="${mL}" y1="${(mT + ph).toFixed(1)}" x2="${(mL + pw).toFixed(1)}" y2="${(mT + ph).toFixed(1)}" stroke="#334155" stroke-width="1.5"/>`);
  out.push(`<text x="${X(medel).toFixed(1)}" y="${(mT + ph + 29).toFixed(1)}" font-size="11" fill="#334155" text-anchor="middle" font-weight="600">medelvärde</text>`);
  out.push(`</svg>`);
  return out.join('');
}

/**
 * Geometrifigur — ritar en deklarativ figurspec. Egna koordinater med y uppåt
 * (matematisk orientering), skalade så att `vy` fyller rutan med lika skala i
 * båda led (annars blir cirklar ellipser och räta vinklar sneda).
 */
function figurSvg(s: GrafSpec): string {
  const f = s.figur;
  if (!f) return '';
  const [vx1, vy1, vx2, vy2] = f.vy;
  const bredd = s.bredd ?? 320;
  const marg = 26;
  const skalaX = (bredd - 2 * marg) / (vx2 - vx1);
  const hojd = s.hojd ?? Math.round((vy2 - vy1) * skalaX + 2 * marg);
  const skala = Math.min(skalaX, (hojd - 2 * marg) / (vy2 - vy1));
  // Centrera figuren i rutan
  const offX = (bredd - (vx2 - vx1) * skala) / 2;
  const offY = (hojd - (vy2 - vy1) * skala) / 2;
  const X = (x: number) => offX + (x - vx1) * skala;
  const Y = (y: number) => hojd - offY - (y - vy1) * skala;

  const bla = '#2a5d8f', mork = '#334155', grå = '#64748b';
  const out: string[] = [];
  out.push(`<svg viewBox="0 0 ${bredd} ${hojd}" width="${bredd}" height="${hojd}" role="img" font-family="Inter, sans-serif" style="max-width:100%;height:auto;background:#fff;border:1px solid #e2e8f0;border-radius:8px">`);

  for (const c of f.cirklar ?? []) {
    out.push(`<circle cx="${X(c.c[0]).toFixed(1)}" cy="${Y(c.c[1]).toFixed(1)}" r="${(c.r * skala).toFixed(1)}" fill="none" stroke="${bla}" stroke-width="2"/>`);
  }
  if (f.polygon) {
    const p = f.polygon.map((q) => `${X(q[0]).toFixed(1)},${Y(q[1]).toFixed(1)}`).join(' ');
    out.push(`<polygon points="${p}" fill="#e8f0f7" fill-opacity="0.5" stroke="${bla}" stroke-width="2" stroke-linejoin="round"/>`);
  }
  for (const l of f.linjer ?? []) {
    const d = l.streckad ? ' stroke-dasharray="5 4"' : '';
    out.push(`<line x1="${X(l.fran[0]).toFixed(1)}" y1="${Y(l.fran[1]).toFixed(1)}" x2="${X(l.till[0]).toFixed(1)}" y2="${Y(l.till[1]).toFixed(1)}" stroke="${bla}" stroke-width="2" stroke-linecap="round"${d}/>`);
  }

  // Rätvinkelmarkering: liten kvadrat längs de två riktningarna
  for (const r of f.ratvinklar ?? []) {
    const enhet = (a: [number, number], b: [number, number]) => {
      const dx = b[0] - a[0], dy = b[1] - a[1];
      const l = Math.hypot(dx, dy) || 1;
      return [dx / l, dy / l] as [number, number];
    };
    const u = enhet(r.vid, r.mot1), v = enhet(r.vid, r.mot2);
    const d = 9 / skala;                      // ~9 px i figurkoordinater
    const p1: [number, number] = [r.vid[0] + u[0] * d, r.vid[1] + u[1] * d];
    const p3: [number, number] = [r.vid[0] + v[0] * d, r.vid[1] + v[1] * d];
    const p2: [number, number] = [p1[0] + v[0] * d, p1[1] + v[1] * d];
    const pts = [p1, p2, p3].map((q) => `${X(q[0]).toFixed(1)},${Y(q[1]).toFixed(1)}`).join(' ');
    out.push(`<polyline points="${pts}" fill="none" stroke="${grå}" stroke-width="1.4"/>`);
  }

  // Vinkelbågar
  for (const v of f.vinklar ?? []) {
    const vinkel = (p: [number, number]) => Math.atan2(p[1] - v.vid[1], p[0] - v.vid[0]);
    let a1 = vinkel(v.fran), a2 = vinkel(v.till);
    let diff = a2 - a1;
    while (diff <= -Math.PI) diff += 2 * Math.PI;
    while (diff > Math.PI) diff -= 2 * Math.PI;
    const rPix = 20;
    const r0 = rPix / skala;
    const pkt = (a: number) => `${X(v.vid[0] + r0 * Math.cos(a)).toFixed(1)},${Y(v.vid[1] + r0 * Math.sin(a)).toFixed(1)}`;
    const storBage = Math.abs(diff) > Math.PI ? 1 : 0;
    const riktning = diff > 0 ? 0 : 1;   // SVG:s y pekar nedåt → svep-flaggan vänds
    out.push(`<path d="M ${pkt(a1)} A ${rPix} ${rPix} 0 ${storBage} ${riktning} ${pkt(a2)}" fill="none" stroke="${grå}" stroke-width="1.4"/>`);
    if (v.text) {
      const am = a1 + diff / 2;
      const rt = (rPix + 15) / skala;
      out.push(`<text x="${X(v.vid[0] + rt * Math.cos(am)).toFixed(1)}" y="${(Y(v.vid[1] + rt * Math.sin(am)) + 4).toFixed(1)}" font-size="12" fill="${mork}" text-anchor="middle">${v.text}</text>`);
    }
  }

  // Längdmått vid sträckans mittpunkt, förskjutet vinkelrätt
  for (const m of f.matt ?? []) {
    const mx = (m.fran[0] + m.till[0]) / 2, my = (m.fran[1] + m.till[1]) / 2;
    const dx = m.till[0] - m.fran[0], dy = m.till[1] - m.fran[1];
    const l = Math.hypot(dx, dy) || 1;
    const skjut = (m.sida ?? 1) * 13 / skala;      // vinkelrätt mot sträckan
    const px = mx - (dy / l) * skjut, py = my + (dx / l) * skjut;
    out.push(`<text x="${X(px).toFixed(1)}" y="${(Y(py) + 4).toFixed(1)}" font-size="12.5" fill="${mork}" text-anchor="middle">${m.text}</text>`);
  }

  // Punkter och deras namn
  for (const p of f.punkter ?? []) {
    if (p.fylld !== false) {
      out.push(`<circle cx="${X(p.p[0]).toFixed(1)}" cy="${Y(p.p[1]).toFixed(1)}" r="3.5" fill="${bla}"/>`);
    }
    if (p.namn) {
      const d = 15;
      const dx = p.plats === 'vanster' ? -d : p.plats === 'hoger' ? d : 0;
      const dy = p.plats === 'over' ? -d : p.plats === 'under' ? d : 0;
      out.push(`<text x="${(X(p.p[0]) + dx).toFixed(1)}" y="${(Y(p.p[1]) + dy + 4).toFixed(1)}" font-size="13" font-style="italic" fill="${mork}" text-anchor="middle">${p.namn}</text>`);
    }
  }

  out.push(`</svg>`);
  return out.join('');
}

/** Mjuk kurva genom punkter (Catmull-Rom → Bézier). Kollineära punkter ger rak linje. */
function slatKurva_(pts: [number, number][], color: string): string {
  if (pts.length < 2) return '';
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return `<path d="${d}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>`;
}

function fmt(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(1).replace('.', ',');
}

/** Avrundar ett stegvärde till 1/2/5 · 10^n så graderingen blir snygg. */
function niceStep(raw: number): number {
  if (raw <= 0) return 1;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const f = raw / pow;
  const nice = f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10;
  return nice * pow;
}
