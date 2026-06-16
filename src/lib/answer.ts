/**
 * answer.ts — delad svarskanonisering för självrättande svar.
 * Används av både Exercise (övningar) och RetrievalBlock (kom-igång) så att
 * elevsvar och facit jämförs likadant överallt.
 *
 * Hanterar: svenskt decimaltecken (,→.), *→·, unicode-minus, superscript-exponenter,
 * implicit multiplikation, enheter, ±/eller/och-svarsmängder, termordning, OCH
 * förlåtande rot-notation ("rot18", "roten ur 18", "sqrt18", "√(18)" → "√18").
 */

const UNIT_PATTERNS = [
  'kr', 'kronor',
  'm²', 'm2', 'm³', 'm3',
  'cm²', 'cm2', 'cm³', 'cm3',
  'dm²', 'dm2', 'dm³', 'dm3',
  'mm', 'cm', 'dm', 'm', 'km',
  'kg', 'g',
  'år', 'månader', 'månad', 'veckor', 'vecka', 'dagar', 'dag', 'timmar', 'timme', 'sekunder', 'sekund',
  'st', 'stycken', 'styck',
  '%', 'procent',
  'personer', 'invånare', 'elever',
  'kalorier', 'kcal',
  'enheter', 'areaenheter',
  'bakterier', 'pennor', 'böcker',
];

function stripUnits(s: string): string {
  let out = s;
  for (const u of UNIT_PATTERNS) {
    const escaped = u.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out.replace(new RegExp(`\\s*${escaped}\\s*$`, 'i'), '');
  }
  return out;
}

function normalize(s: string): string {
  let out = s
    .trim()
    .toLowerCase()
    .replace(/,/g, '.')                  // svenskt decimaltecken → punkt
    .replace(/\*/g, '·')                 // *-tecken → korrekt mult-tecken
    .replace(/[−–]/g, '-')               // unicode-minus/tankstreck → vanlig minus
    // Rot-notation, förlåtande: "kvadratroten ur", "roten ur", "roten", "rot", "sqrt" → √
    .replace(/kvadratrot(?:en)?\s*(?:ur\s*)?/g, '√')
    .replace(/roten\s*ur\s*/g, '√')
    .replace(/\bsqrt\s*/g, '√')
    .replace(/\brot(?:en)?\s*(?:ur\s*)?/g, '√')
    .replace(/√\s*\(([^()]*)\)/g, '√$1') // √(18) → √18
    .replace(/\s+/g, ' ')                // normalisera blanksteg
    .replace(/^[a-zåäö]\s*=\s*/, '');    // strippa "x = ", "t = ", "n = " etc.
  out = stripUnits(out);
  out = out.replace(/\s+/g, '');         // sista blanksteg bort

  // Exponenter: superscript → ^n så att "x²" och "x^2" blir samma sak
  const SUPERSCRIPTS: Record<string, string> = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-' };
  out = out.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+/g, (m) => '^' + m.split('').map((c) => SUPERSCRIPTS[c]).join(''));

  // Implicit multiplikation: "3·x" = "3x", "2·(x+1)" = "2(x+1)". Mellan tal behålls ·.
  out = out.replace(/·([a-zåäö(√])/g, '$1').replace(/([a-zåäö)])·/g, '$1');

  return out;
}

/** Dela uttrycket i termer på toppnivå och sortera, så "11+3x" = "3x+11". */
function canonicalTerms(s: string): string {
  const terms: string[] = [];
  let cur = '';
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    const prev = i > 0 ? s[i - 1] : '';
    if ((ch === '+' || ch === '-') && depth === 0 && i > 0 && !'^·/('.includes(prev)) {
      terms.push(cur);
      cur = ch === '-' ? '-' : '';
      continue;
    }
    cur += ch;
  }
  terms.push(cur);
  if (terms.length < 2) return s;
  const sorted = terms
    .map((t) => (t.startsWith('-') ? { sign: '-', body: t.slice(1) } : { sign: '+', body: t }))
    .sort((a, b) => (a.body < b.body ? -1 : a.body > b.body ? 1 : 0));
  const joined = sorted.map((t) => t.sign + t.body).join('');
  return joined.startsWith('+') ? joined.slice(1) : joined;
}

/** Full kanonisering — körs på både elevsvar och facit. */
export function canonicalize(s: string): string {
  let n = normalize(s);
  n = n.replace(/\+\/-/g, '±').replace(/\+-/g, '±');
  const parts = n.split(/eller|och/).flatMap((p) => {
    p = p.replace(/^[a-zåäö]=/, '').replace(/=[a-zåäö]$/, '');
    if (p.startsWith('±')) {
      const rest = p.slice(1);
      return [rest, '-' + rest];
    }
    return [p];
  }).filter(Boolean);
  const canon = parts.map(canonicalTerms).sort();
  return canon.join('eller');
}
