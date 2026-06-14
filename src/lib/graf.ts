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
  typ: 'linjär' | 'exponentiell' | 'punkter';
  k?: number; m?: number;            // linjär: y = kx + m
  C?: number; a?: number;            // exponentiell: y = C · a^x
  punkter?: [number, number][];      // markerade punkter (alltid utritade som ringar)
  visaKurva?: boolean;               // rita linjen genom punkterna
  xmin?: number; xmax?: number; ymin?: number; ymax?: number;
  xSteg?: number; ySteg?: number;    // avstånd mellan rutnätslinjer/gradering
  bredd?: number; hojd?: number;
  titel?: string;                    // valfri etikett ovanför grafen
}

export function grafSvg(s: GrafSpec): string {
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
    const p1 = [X(xmin), Y(s.k * xmin + s.m)];
    const p2 = [X(xmax), Y(s.k * xmax + s.m)];
    out.push(`<line x1="${p1[0].toFixed(1)}" y1="${p1[1].toFixed(1)}" x2="${p2[0].toFixed(1)}" y2="${p2[1].toFixed(1)}" stroke="${accent}" stroke-width="2.5" stroke-linecap="round"/>`);
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
