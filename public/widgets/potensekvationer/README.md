# Potensekvationer-utforskaren — widget v1

POC-widget för **1.6 Potensekvationer** i Ma1b. Visualiserar hur antalet lösningar beror på exponentens paritet.

## Vad den gör
- Eleven justerar n (exponent) och a (högerled) med sliders
- Visar ekvationen x^n = a
- Räknar ut lösningarna (0, 1 eller 2 stycken)
- Plottar lösningarna på en tallinje
- Förklarar mönstret (jämn vs udda exponent, positiv vs negativ a)

## Pedagogiska val
- **Visuellt:** eleven SER varför x² = 9 har två lösningar men x³ = 27 bara en
- **Verklighetsförankrat:** tallinjen är konkret
- **Tabellförklaring i hint:** översiktstabell över antal lösningar
- **Stora färgkoder:** positiva lösningar gröna, negativa rödbruna

## Tekniska val
- Vanilla HTML/CSS/JS, ~370 rader
- Mobile-first
- Använder Math.pow + n:te rot-funktion
- Hanterar specialfall: a < 0 med jämn n (ingen lösning), a = 0 (en lösning)

## Hosting / embed
Höjd ~620 px.
