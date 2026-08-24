---
slug: "omlasning-2b/andragradare/kvadreringsreglerna"
title: "Kvadreringsreglerna"
course: omlasning-2b
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 2
lesson_total: 8

success_criteria:
  - Använda första kvadreringsregeln (a + b)² = a² + 2ab + b²
  - Använda andra kvadreringsregeln (a − b)² = a² − 2ab + b²
  - Se varför (x + 4)² INTE är x² + 16
  - Fylla i tal som saknas i ett kvadrerat uttryck

bank:
  - question: "Utveckla: (x + 4)²"
    answer: ["x² + 8x + 16", "x^2 + 8x + 16"]
    solution: |
      Kvadreringsregeln: (a + b)² = a² + 2ab + b².
      Här är a = x och b = 4, så mittentermen blir 2 · x · 4 = 8x.
      Svar: **x² + 8x + 16**
  - question: "Utveckla: (x − 6)²"
    answer: ["x² − 12x + 36", "x^2 - 12x + 36", "x² - 12x + 36"]
    solution: |
      Kvadreringsregeln med minus: (a − b)² = a² − 2ab + b².
      Mittentermen blir 2 · x · 6 = 12x, med minustecken.
      Svar: **x² − 12x + 36**
  - question: "Är (x + 3)² samma sak som x² + 9? Svara ja eller nej."
    answer: ["nej", "Nej", "nej!"]
    solution: |
      Kvadraten gäller hela parentesen, inte varje term för sig.
      (x + 3)² = x² + 6x + 9, och mittentermen 6x saknas i x² + 9.
      Svar: **nej**
  - question: "Vad blir mittentermen i (x + 7)²?"
    answer: ["14x", "+14x"]
    solution: |
      Mittentermen är 2 · a · b i regeln (a + b)² = a² + 2ab + b².
      2 · x · 7 = **14x**

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Första kvadreringsregeln

  `(a + b)² = a² + 2ab + b²`

  Utveckla `(x + 4)²`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Vad är a och b? | a = x, b = 4 | — |
  | Första kvadraten, a² | x · x | x² |
  | Dubbla produkten, 2ab | 2 · x · 4 | 8x |
  | Sista kvadraten, b² | 4 · 4 | 16 |

  Svar: **x² + 8x + 16**

  ## Andra kvadreringsregeln

  `(a − b)² = a² − 2ab + b²`

  Utveckla `(x − 6)²`.

  Allt är likadant utom att mittentermen blir **minus**. Sista termen blir fortfarande **plus**, eftersom (−6)·(−6) = +36.

  | Term | Uträkning | Resultat |
  |---|---|---|
  | a² | x · x | x² |
  | −2ab | −2 · x · 6 | −12x |
  | b² | (−6) · (−6) | +36 |

  Svar: **x² − 12x + 36**

  ## Varför (x + 4)² inte är x² + 16

  Kvadrering betyder att uttrycket gångar sig självt:

  `(x + 4)² = (x + 4)(x + 4)`

  Multiplicerar du ihop det på vanligt sätt får du fyra produkter: x², 4x, 4x och 16. De två mittentermerna blir 8x, och **det är den termen som försvinner** om man tar genvägen.

  > Det här är det vanligaste felet i hela Ma2. Fastnar regeln inte: skriv om till två parenteser och multiplicera som vanligt. Det tar tio sekunder längre och blir rätt.

  ## Baklänges: fyll i det som saknas

  `(x + ___)² = x² + ___x + 49`

  Sista talet är b² = 49, så **b = 7**. Mittentermen är då 2 · 7 = **14**.

  Svar: `(x + 7)² = x² + 14x + 49`

exercises:
  E:
    - equation: "Utveckla: (x + 2)²"
      hint1: "Använd (a + b)² = a² + 2ab + b² med a = x och b = 2."
      hint2: "Mittentermen är 2 · x · 2 = 4x. Sista är 2² = 4."
      answer: ["x² + 4x + 4", "x^2 + 4x + 4"]
      solution: |
        a = x, b = 2

        x² + 2 · x · 2 + 2² = **x² + 4x + 4**

    - equation: "Utveckla: (x + 9)²"
      hint1: "Mittentermen är dubbla produkten: 2 · x · 9."
      hint2: "2 · 9 = 18, så mittentermen är 18x. Sista termen är 9² = 81."
      answer: ["x² + 18x + 81", "x^2 + 18x + 81"]
      solution: |
        x² + 2 · x · 9 + 9² = **x² + 18x + 81**

    - equation: "Utveckla: (x − 5)²"
      hint1: "Andra kvadreringsregeln: mittentermen blir minus, sista blir plus."
      hint2: "−2 · x · 5 = −10x, och (−5)² = +25."
      answer: ["x² − 10x + 25", "x^2 - 10x + 25", "x² - 10x + 25"]
      solution: |
        x² − 2 · x · 5 + 5² = **x² − 10x + 25**

        Sista termen är plus: (−5) · (−5) = +25

    - equation: "Utveckla: (x − 8)²"
      hint1: "Mittentermen blir −2 · x · 8."
      hint2: "−16x i mitten. Sista termen: (−8)² = +64."
      answer: ["x² − 16x + 64", "x^2 - 16x + 64", "x² - 16x + 64"]
      solution: |
        x² − 2 · x · 8 + 8² = **x² − 16x + 64**

    - equation: "Vilket tal ska stå i rutan? (x + ▢)² = x² + 12x + 36"
      hint1: "Titta på sista termen: vilket tal blir 36 när det kvadreras?"
      hint2: "6² = 36. Kolla att det stämmer med mittentermen: 2 · 6 = 12 ✓"
      answer: ["6"]
      solution: |
        Sista termen: b² = 36 → b = **6**

        Kontroll av mittentermen: 2 · 6 = 12 ✓

        (x + 6)² = x² + 12x + 36

    - equation: "Utveckla: (2x + 3)²"
      hint1: "Här är a = 2x, inte bara x. Kvadrera hela 2x."
      hint2: "(2x)² = 4x². Mittentermen: 2 · 2x · 3 = 12x."
      answer: ["4x² + 12x + 9", "4x^2 + 12x + 9"]
      solution: |
        a = 2x, b = 3

        (2x)² = 4x²
        2 · 2x · 3 = 12x
        3² = 9

        **4x² + 12x + 9**

        > Glöm inte att kvadrera 2:an också, (2x)² är 4x², inte 2x².

    - equation: "Utveckla: (6 − x)²"
      hint1: "Andra kvadreringsregeln gäller även när talet står först. Här är a = 6 och b = x."
      hint2: "6² − 2 · 6 · x + x²"
      answer: ["36 − 12x + x²", "36 - 12x + x^2", "x² − 12x + 36", "x^2 - 12x + 36", "36-12x+x²"]
      solution: |
        (6 − x)² = 6² − 2 · 6 · x + x²

        **= 36 − 12x + x²**

        Samma sak som x² − 12x + 36, bara skrivet i annan ordning.

prev: parentesmultiplikation
prev_lesson_title: "Parentesmultiplikation"
next: konjugatregeln
next_lesson_title: "Konjugatregeln"
---

## Två regler som sparar tid

Kvadreringsreglerna är genvägar för när **samma parentes gångas med sig själv**:

**Första kvadreringsregeln:** `(a + b)² = a² + 2ab + b²`

**Andra kvadreringsregeln:** `(a − b)² = a² − 2ab + b²`

Skillnaden är bara tecknet i mitten. Sista termen är **alltid plus**, eftersom ett negativt tal gånger sig självt blir positivt.

## Så läser du en regel

Regeln har tre delar, och de kommer alltid i samma ordning:

| Del | Vad det är | I (x + 4)² |
|---|---|---|
| a² | första termen kvadrerad | x² |
| 2ab | dubbla produkten | 8x |
| b² | sista termen kvadrerad | 16 |

`(x + 4)² = x² + 8x + 16`

## Felet som kostar flest poäng

`(x + 4)²` är **inte** `x² + 16`.

Kvadrering betyder `(x + 4)(x + 4)`. Multiplicerar du ihop det får du fyra produkter, och de två i mitten blir tillsammans `8x`. Den termen finns där, oavsett om man skriver ut den eller inte.

> **Om du tvekar: skriv om till två parenteser.** `(x + 4)² = (x + 4)(x + 4)` och multiplicera som i förra delmomentet. Reglerna är en genväg, inte ett krav.

## När första termen har en siffra

`(2x + 3)²`

Här är a = **2x**, inte x. Alltså:

- `a² = (2x)² = 4x²`, tvåan kvadreras också
- `2ab = 2 · 2x · 3 = 12x`
- `b² = 9`

`(2x + 3)² = 4x² + 12x + 9`

## Baklänges

Ibland får du uttrycket och ska hitta talet:

`(x − ▢)² = x² − 14x + 49`

Börja alltid med **sista termen**: vilket tal kvadrerat blir 49? Svaret är 7. Kontrollera sedan mot mittentermen: 2 · 7 = 14 ✓

Om mittentermen inte stämmer med ditt tal har du hittat ett uttryck som inte är en kvadrat alls.
