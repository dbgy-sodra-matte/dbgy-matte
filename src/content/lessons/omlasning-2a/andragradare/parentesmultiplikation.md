---
slug: "omlasning-2a/andragradare/parentesmultiplikation"
title: "Parentesmultiplikation"
course: omlasning-2a
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 4
lesson_total: 9

success_criteria:
  - Multiplicera in en term i en parentes
  - Multiplicera ihop två parenteser med två termer i varje
  - Veta att det blir fyra produkter, och hålla reda på alla fyra
  - Slå ihop termer av samma sort efteråt

bank:
  - question: "Utveckla: 4x(x + 3)"
    answer: ["4x² + 12x", "4x^2 + 12x", "12x + 4x²", "4x²+12x"]
    solution: |
      Multiplicera 4x med varje term inne i parentesen.
      4x · x = 4x² och 4x · 3 = 12x.
      Svar: **4x² + 12x**
  - question: "Utveckla: (x + 3)(x + 7)"
    answer: ["x² + 10x + 21", "x^2 + 10x + 21", "x²+10x+21"]
    solution: |
      Varje term i första parentesen gånger varje term i den andra.
      x · x = x², x · 7 = 7x, 3 · x = 3x, 3 · 7 = 21.
      Slå ihop x-termerna: **x² + 10x + 21**
  - question: "Två parenteser med två termer i varje multipliceras ihop. Hur många produkter blir det?"
    answer: ["4", "fyra"]
    solution: |
      Varje term i den första parentesen ska multipliceras med varje term i den andra.
      2 · 2 = **4 produkter**
  - question: "Utveckla: (x − 2)(x + 9)"
    answer: ["x² + 7x − 18", "x^2 + 7x - 18", "x² + 7x - 18", "x²+7x−18"]
    solution: |
      Multiplicera ihop alla par: x · x = x², x · 9 = 9x, (−2) · x = −2x, (−2) · 9 = −18.
      Slå ihop x-termerna: 9x − 2x = 7x.
      Svar: **x² + 7x − 18**

how_to:
  - Börja med repetitionen högst upp, den håller tidigare delmoment vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## En term gånger en parentes

  Multiplicera in framför parentesen i **varje** term inuti.

  Utveckla `4x(x + 3)`:

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | 4x gånger första termen | 4x · x | 4x² |
  | 4x gånger andra termen | 4x · 3 | 12x |

  Svar: **4x² + 12x**

  > Glöm inte att `x · x = x²`. Ett vanligt fel är att skriva 4x i stället för 4x² på första produkten.

  ## Två parenteser: fyra produkter

  Varje term i den första parentesen ska multipliceras med varje term i den andra. Med två termer i varje parentes blir det `2 · 2 = 4` produkter.

  Utveckla `(x + 3)(x + 7)`:

  | Produkt | Uträkning | Resultat |
  |---|---|---|
  | första gånger första | x · x | x² |
  | första gånger andra | x · 7 | 7x |
  | andra gånger första | 3 · x | 3x |
  | andra gånger andra | 3 · 7 | 21 |

  Summan blir `x² + 7x + 3x + 21`.

  Slå ihop x-termerna: **x² + 10x + 21**

  ## Med minustecken

  Tecknet följer med sin term. Utveckla `(x − 2)(x + 9)`:

  | Produkt | Uträkning | Resultat |
  |---|---|---|
  | x · x | — | x² |
  | x · 9 | — | 9x |
  | (−2) · x | minus gånger plus | −2x |
  | (−2) · 9 | minus gånger plus | −18 |

  `x² + 9x − 2x − 18` → **x² + 7x − 18**

  Två minustecken ger plus. Utveckla `(x − 3)(x − 8)`:

  `x² − 8x − 3x + 24` → **x² − 11x + 24**

  ## Med en siffra framför x

  Samma metod, bara fler saker att hålla reda på. Utveckla `(3x + 1)(x + 2)`:

  | Produkt | Resultat |
  |---|---|
  | 3x · x | 3x² |
  | 3x · 2 | 6x |
  | 1 · x | x |
  | 1 · 2 | 2 |

  `3x² + 6x + x + 2` → **3x² + 7x + 2**

  > Skriv alltid ner alla fyra produkterna innan du slår ihop något. Räknar du i huvudet tappar du nästan alltid den tredje.

exercises:
  E:
    - equation: "Utveckla: 4x(x + 3)"
      hint1: "Multiplicera 4x med varje term inne i parentesen, en i taget."
      hint2: "4x · x blir 4x², inte 4x. Vad blir 4x · 3?"
      answer: ["4x² + 12x", "4x^2 + 12x", "12x + 4x²", "4x²+12x", "4x^2+12x"]
      solution: |
        4x · x = 4x²
        4x · 3 = 12x

        **4x² + 12x**

    - equation: "Utveckla: (x + 3)(x + 7)"
      hint1: "Varje term i första parentesen gånger varje term i den andra. Det blir fyra produkter."
      hint2: "x² + 7x + 3x + 21. Slå ihop de två x-termerna."
      answer: ["x² + 10x + 21", "x^2 + 10x + 21", "x²+10x+21", "x^2+10x+21"]
      solution: |
        x · x = x²
        x · 7 = 7x
        3 · x = 3x
        3 · 7 = 21

        x² + 7x + 3x + 21 = **x² + 10x + 21**

    - equation: "Utveckla: (x − 2)(x + 9)"
      hint1: "Minustecknet hör ihop med tvåan och följer med i båda produkterna."
      hint2: "x² + 9x − 2x − 18. Vad blir 9x − 2x?"
      answer: ["x² + 7x − 18", "x^2 + 7x - 18", "x² + 7x - 18", "x²+7x−18", "x^2+7x-18"]
      solution: |
        x · x = x²
        x · 9 = 9x
        (−2) · x = −2x
        (−2) · 9 = −18

        x² + 9x − 2x − 18 = **x² + 7x − 18**

    - equation: "Utveckla: (x − 3)(x − 8)"
      hint1: "Båda parenteserna har minus. Kom ihåg att minus gånger minus blir plus."
      hint2: "Sista produkten blir (−3) · (−8) = +24."
      answer: ["x² − 11x + 24", "x^2 - 11x + 24", "x² - 11x + 24", "x²−11x+24", "x^2-11x+24"]
      solution: |
        x · x = x²
        x · (−8) = −8x
        (−3) · x = −3x
        (−3) · (−8) = +24

        x² − 8x − 3x + 24 = **x² − 11x + 24**

    - equation: "Utveckla: (x + 6)(x − 4)"
      hint1: "Fyra produkter. Sista blir 6 · (−4)."
      hint2: "x² − 4x + 6x − 24. Slå ihop x-termerna."
      answer: ["x² + 2x − 24", "x^2 + 2x - 24", "x² + 2x - 24", "x²+2x−24", "x^2+2x-24"]
      solution: |
        x · x = x²
        x · (−4) = −4x
        6 · x = 6x
        6 · (−4) = −24

        x² − 4x + 6x − 24 = **x² + 2x − 24**

    - equation: "Utveckla: (3x + 1)(x + 2)"
      hint1: "Samma metod, men första termen är 3x."
      hint2: "3x · x = 3x² och 3x · 2 = 6x. Sedan 1 · x och 1 · 2."
      answer: ["3x² + 7x + 2", "3x^2 + 7x + 2", "3x²+7x+2", "3x^2+7x+2"]
      solution: |
        3x · x = 3x²
        3x · 2 = 6x
        1 · x = x
        1 · 2 = 2

        3x² + 6x + x + 2 = **3x² + 7x + 2**

    - equation: "Förenkla så långt som möjligt: (x + 4)² − 5(2 + x)"
      hint1: "Utveckla varje del för sig först. Glöm inte att minustecknet gäller HELA den andra parentesen."
      hint2: "(x + 4)² = x² + 8x + 16, och 5(2 + x) = 10 + 5x."
      answer: ["x² + 3x + 6", "x^2 + 3x + 6", "x²+3x+6"]
      solution: |
        (x + 4)² = x² + 8x + 16

        5(2 + x) = 10 + 5x

        Dra bort hela den andra parentesen:

        x² + 8x + 16 − 10 − 5x = **x² + 3x + 6**

        Vanligaste felet är att bara dra bort 10 och glömma 5x.

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSeTLfGMdpKkdtuRrgD4Q3D0buRYtAx3XfyWrMAVt_hlr-WPFw/viewform"
prev: pythagoras-och-koordinatgeometri
prev_lesson_title: "Pythagoras sats och koordinatgeometri"
next: kvadrerings-och-konjugatregeln
next_lesson_title: "Kvadreringsreglerna och konjugatregeln"
---

## En term gånger en parentes

Det här kan du från Ma1. Talet framför parentesen multipliceras med **varje** term inuti:

`4x(x + 3) = 4x · x + 4x · 3 = 4x² + 12x`

Det enda nya är att `x · x` blir `x²`. Skriv alltid ut den potensen, `4x` i stället för `4x²` är det vanligaste slarvfelet här.

## Två parenteser

Nu ska varje term i första parentesen multipliceras med varje term i den andra. Två termer gånger två termer blir **fyra produkter**.

`(x + 3)(x + 7)`

| | x | +7 |
|---|---|---|
| **x** | x² | 7x |
| **+3** | 3x | 21 |

Alla fyra rutorna adderas: `x² + 7x + 3x + 21`

Slå ihop det som är av samma sort: `7x + 3x = 10x`

**x² + 10x + 21**

> Rutmetoden ovan är bara ett sätt att hålla ordning. Räknar du i huvudet är det nästan alltid den tredje produkten som försvinner.

## Tecknen

Tecknet hör ihop med sin term och följer med i båda produkterna den ingår i.

| Uttryck | De fyra produkterna | Svar |
|---|---|---|
| (x − 2)(x + 9) | x², 9x, −2x, −18 | x² + 7x − 18 |
| (x − 3)(x − 8) | x², −8x, −3x, +24 | x² − 11x + 24 |
| (x + 6)(x − 4) | x², −4x, 6x, −24 | x² + 2x − 24 |

Minus gånger minus blir plus. I raden `(x − 3)(x − 8)` är det bara sista produkten som blir positiv.

## Med siffra framför x

Metoden ändras inte, det blir bara större tal:

`(3x + 1)(x + 2)` → `3x² + 6x + x + 2` → **3x² + 7x + 2**

## Vanliga fel

| Fel | Varför det blir fel |
|---|---|
| `(x + 3)(x + 7) = x² + 21` | Bara de yttersta produkterna räknades. De två mittersta saknas. |
| `4x(x + 3) = 4x + 12x` | `x · x` glömdes bort. Ska vara 4x². |
| `(x − 3)(x − 8) = x² − 11x − 24` | Minus gånger minus blev inte plus i sista produkten. |
