/**
 * md.ts — mini-markdown för uppgiftsfälten (equation, hint1–3, solution).
 *
 * Fälten författas i markdown-stil (**fet**, `kod`, "> notis") men renderades
 * länge som råtext — eleven såg bokstavligen "**8b − 3**" och "&gt;" i exakt
 * det ögonblick hen öppnat lösningen. Den här hjälparen renderar de tre
 * mönster som faktiskt används i materialet, inget mer:
 *
 *   **text**   → <strong>text</strong>
 *   `text`     → <code>text</code>
 *   > rad      → raden sveps i <span class="md-note"> (dämpad notisrad)
 *
 * All text HTML-escapas FÖRST — fälten är författartext, aldrig HTML, och
 * matematiska tecken som "<" i "V(t) < 2 000" ska visas som de är.
 * Enkla asterisker (multiplikation, "3 * 4") lämnas orörda: fet kräver **.
 * Radbrytningar bevaras (lösningar visas i <pre>, uppgiftstext byter \n→<br>
 * hos anroparen).
 */

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function mdField(s: string): string {
  const escaped = escapeHtml(s);
  const withNotes = escaped
    .split('\n')
    .map((line) => {
      const m = line.match(/^(\s*)&gt;\s?(.*)$/);
      return m ? `${m[1]}<span class="md-note">${m[2]}</span>` : line;
    })
    .join('\n');
  // Fet-innehållet får innehålla ENSAMMA asterisker (kalkylformler: **=A1*A2**),
  // men aldrig ett dubbelt ** — det avslutar. Multiplikation "3 * 4" lämnas orörd.
  return withNotes
    .replace(/\*\*((?:[^*\n]|\*(?!\*))+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`\n]+)`/g, '<code>$1</code>');
}
