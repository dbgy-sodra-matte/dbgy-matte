---
slug: "omlasning-2a/andragradare/kvadrerings-och-konjugatregeln"
title: "Kvadreringsreglerna och konjugatregeln"
course: omlasning-2a
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 5
lesson_total: 9

success_criteria:
  - Utveckla (a + b)² och (a − b)² med kvadreringsreglerna
  - Utveckla (a + b)(a − b) med konjugatregeln
  - Förklara varför (x + 5)² inte är x² + 25
  - Känna igen en differens av två kvadrater och faktorisera den

bank:
  - question: "Utveckla: (x + 12)²"
    answer: ["x² + 24x + 144", "x^2 + 24x + 144", "x²+24x+144"]
    solution: |
      Kvadreringsregeln: (a + b)² = a² + 2ab + b².
      Här är a = x och b = 12, så mittentermen blir 2 · x · 12 = 24x.
      Svar: **x² + 24x + 144**
  - question: "Utveckla: (x + 14)(x − 14)"
    answer: ["x² − 196", "x^2 - 196", "x² - 196", "x²−196"]
    solution: |
      Konjugatregeln: (a + b)(a − b) = a² − b².
      Här är a = x och b = 14.
      Svar: **x² − 196**
  - question: "Är (x + 5)² samma sak som x² + 25? Svara ja eller nej."
    answer: ["nej", "Nej"]
    solution: |
      Kvadraten gäller hela parentesen, inte varje term för sig.
      (x + 5)² = x² + 10x + 25, och mittentermen 10x saknas i x² + 25.
      Svar: **nej**
  - question: "Faktorisera: x² − 121"
    answer: ["(x + 11)(x − 11)", "(x - 11)(x + 11)", "(x + 11)(x - 11)", "(x − 11)(x + 11)"]
    solution: |
      x² − 121 är en differens av två kvadrater: x² och 11².
      Konjugatregeln baklänges ger **(x + 11)(x − 11)**

how_to:
  - Börja med repetitionen högst upp, den håller tidigare delmoment vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Kvadreringsregeln, plusvarianten

  `(a + b)² = a² + 2ab + b²`

  Utveckla `(x + 12)²`:

  | Del | Vad det är | Resultat |
  |---|---|---|
  | a² | x · x | x² |
  | 2ab | 2 · x · 12 | 18x |
  | b² | 12 · 12 | 144 |

  Svar: **x² + 24x + 144**

  > **Mittentermen är hela poängen.** `(x + 12)²` är INTE `x² + 81`. Det är det vanligaste felet i hela kursen, och det syns direkt i bedömningsanvisningarna: "Använder sig av kvadreringsregeln" är en egen poäng.

  ### Varför finns mittentermen?

  `(x + 12)²` betyder `(x + 12)(x + 12)`. Multiplicerar du ihop det får du fyra produkter:

  `x² + 12x + 12x + 144`

  De två mittersta är lika stora och blir tillsammans `24x`. Kvadreringsregeln är bara en genväg för den uträkningen.

  ## Kvadreringsregeln, minusvarianten

  `(a − b)² = a² − 2ab + b²`

  Utveckla `(x − 11)²`:

  | Del | Uträkning | Resultat |
  |---|---|---|
  | a² | x · x | x² |
  | −2ab | −2 · x · 11 | −22x |
  | b² | (−11) · (−11) | +121 |

  Svar: **x² − 22x + 121**

  Bara mittentermen blir negativ. Sista termen blir alltid positiv, eftersom minus gånger minus är plus.

  ## Med siffra framför x

  Utveckla `(5x + 2)²`:

  | Del | Uträkning | Resultat |
  |---|---|---|
  | a² | (5x) · (5x) | 25x² |
  | 2ab | 2 · 5x · 2 | 20x |
  | b² | 2 · 2 | 4 |

  Svar: **25x² + 20x + 4**

  > Kvadrera hela `5x`, inte bara x. `(5x)² = 25x²`.

  ## Konjugatregeln

  `(a + b)(a − b) = a² − b²`

  Utveckla `(x + 14)(x − 14)`:

  De fyra produkterna blir `x² − 14x + 14x − 196`. De två mittersta tar ut varandra, eftersom de är lika stora med olika tecken.

  Svar: **x² − 196**

  ## Konjugatregeln baklänges

  Ser du en **differens av två kvadrater** kan du faktorisera direkt.

  `x² − 121` = `x² − 11²` = **(x + 11)(x − 11)**

  | Uttryck | Kvadraterna | Faktorisering |
  |---|---|---|
  | x² − 196 | x² och 8² | (x + 14)(x − 14) |
  | x² − 121 | x² och 11² | (x + 11)(x − 11) |
  | 9x² − 25 | (3x)² och 5² | (3x + 5)(3x − 5) |

  > Det fungerar bara vid **minus**. `x² + 64` går inte att faktorisera på det här sättet.

exercises:
  E:
    - equation: "Utveckla: (x + 12)²"
      hint1: "Kvadreringsregeln: (a + b)² = a² + 2ab + b². Glöm inte mittentermen."
      hint2: "Mittentermen är 2 · x · 12."
      answer: ["x² + 24x + 144", "x^2 + 24x + 144", "x²+24x+144", "x^2+24x+144"]
      solution: |
        a² = x²
        2ab = 2 · x · 12 = 24x
        b² = 144

        **x² + 24x + 144**

    - equation: "Utveckla: (x − 11)²"
      hint1: "Minusvarianten: (a − b)² = a² − 2ab + b². Bara mittentermen blir negativ."
      hint2: "Mittentermen är 2 · x · 11 = 22x, med minustecken. Sista termen blir +121."
      answer: ["x² − 22x + 121", "x^2 - 22x + 121", "x² - 22x + 121", "x²−22x+121", "x^2-22x+121"]
      solution: |
        a² = x²
        −2ab = −2 · x · 11 = −22x
        b² = (−11)² = +121

        **x² − 22x + 121**

    - equation: "Utveckla: (5x + 2)²"
      hint1: "Kvadrera hela 5x, inte bara x."
      hint2: "(5x)² = 25x², och mittentermen blir 2 · 5x · 2."
      answer: ["25x² + 20x + 4", "25x^2 + 20x + 4", "25x²+20x+4", "25x^2+20x+4"]
      solution: |
        a² = (5x)² = 25x²
        2ab = 2 · 5x · 2 = 20x
        b² = 4

        **25x² + 20x + 4**

    - equation: "Utveckla: (x + 14)(x − 14)"
      hint1: "Samma tal i båda parenteserna, ett plus och ett minus. Det är konjugatregeln."
      hint2: "(a + b)(a − b) = a² − b². Här är a = x och b = 14."
      answer: ["x² − 196", "x^2 - 196", "x² - 196", "x²−196", "x^2-196"]
      solution: |
        De fyra produkterna blir x² − 14x + 14x − 196.

        De två mittersta tar ut varandra.

        **x² − 196**

    - equation: "Utveckla: (3x + 5)(3x − 5)"
      hint1: "Konjugatregeln igen, men nu är a = 3x."
      hint2: "a² blir (3x)² = 9x². Vad blir b²?"
      answer: ["9x² − 25", "9x^2 - 25", "9x² - 25", "9x²−25", "9x^2-25"]
      solution: |
        a = 3x och b = 5

        a² = (3x)² = 9x²
        b² = 25

        **9x² − 25**

    - equation: "Faktorisera: x² − 121"
      hint1: "Två kvadrater med minus emellan. Använd konjugatregeln baklänges."
      hint2: "121 = 11². Vilka två parenteser ger x² − 121 när de multipliceras?"
      answer: ["(x + 11)(x − 11)", "(x - 11)(x + 11)", "(x + 11)(x - 11)", "(x − 11)(x + 11)", "(x+11)(x-11)", "(x+11)(x−11)"]
      solution: |
        x² − 121 = x² − 11²

        Konjugatregeln baklänges:

        **(x + 11)(x − 11)**

        Kontroll: x² − 11x + 11x − 121 = x² − 121 ✓

prev: parentesmultiplikation
prev_lesson_title: "Parentesmultiplikation"
next: pq-formeln
next_lesson_title: "pq-formeln"
---

## Tre regler

De här tre är genvägar för parentesmultiplikationer du redan kan göra. Poängen är att de går fortare och att de går att använda **baklänges** för att faktorisera.

| Regel | Formel |
|---|---|
| Kvadreringsregeln, plus | (a + b)² = a² + 2ab + b² |
| Kvadreringsregeln, minus | (a − b)² = a² − 2ab + b² |
| Konjugatregeln | (a + b)(a − b) = a² − b² |

## Kvadreringsreglerna

`(x + 12)² = x² + 24x + 144`

Tre delar: förstas kvadrat, dubbla produkten, andras kvadrat.

> ### Felet som kostar mest
>
> `(x + 12)²` är **inte** `x² + 81`.
>
> Kvadraten gäller hela parentesen, inte varje term för sig. Skriv ut parentesen som `(x + 12)(x + 12)` om du tvekar — då ser du att det blir fyra produkter, och att de två mittersta tillsammans blir `18x`.

Vid minus är det bara mittentermen som byter tecken:

`(x − 11)² = x² − 22x + 121`

Sista termen blir positiv, eftersom `(−11) · (−11) = +121`.

### Med siffra framför x

Kvadrera hela termen:

`(5x + 2)² = 25x² + 20x + 4`

`(5x)² = 25x²`, inte `5x²`.

## Konjugatregeln

Samma tal i båda parenteserna, ett plus och ett minus:

`(x + 14)(x − 14) = x² − 196`

x-termerna tar ut varandra: `−8x + 8x = 0`. Kvar blir bara de två kvadraterna, med minus emellan.

| Uttryck | Svar |
|---|---|
| (x + 14)(x − 14) | x² − 196 |
| (3x + 5)(3x − 5) | 9x² − 25 |
| (x + 12)(x − 12) | x² − 144 |

## Baklänges: faktorisera en differens av kvadrater

Här sitter den praktiska nyttan. Ser du `något² − något²` kan du faktorisera direkt:

`x² − 121` → `x² − 11²` → **(x + 11)(x − 11)**

Två villkor måste vara uppfyllda:

1. Det ska stå **minus** mellan termerna
2. Båda termerna ska vara **kvadrater** (4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144 …)

`x² + 121` går alltså inte, och inte heller `x² − 50` — 50 är ingen kvadrat.
