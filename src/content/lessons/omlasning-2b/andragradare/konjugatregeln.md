---
slug: "omlasning-2b/andragradare/konjugatregeln"
title: "Konjugatregeln"
course: omlasning-2b
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 3
lesson_total: 9

success_criteria:
  - Känna igen ett konjugatpar, samma två termer, ett plus och ett minus
  - Använda konjugatregeln (a + b)(a − b) = a² − b²
  - Förklara varför mittentermerna försvinner
  - Faktorisera ett uttryck av typen x² − 25 baklänges

bank:
  - question: "Utveckla: (x + 5)(x − 5)"
    answer: ["x² − 25", "x^2 - 25", "x² - 25"]
    solution: |
      Konjugatregeln: (a + b)(a − b) = a² − b².
      Här är a = x och b = 5.
      Svar: **x² − 25**
  - question: "Utveckla: (x + 10)(x − 10)"
    answer: ["x² − 100", "x^2 - 100", "x² - 100"]
    solution: |
      Konjugatregeln med a = x och b = 10.
      Svar: **x² − 100**
  - question: "Varför försvinner x-termen i (x + 7)(x − 7)?"
    answer: ["De tar ut varandra", "−7x och +7x tar ut varandra", "för att de blir noll tillsammans"]
    solution: |
      Multiplicerar du ihop allt får du −7x och +7x.
      De är lika stora men har olika tecken, så **de tar ut varandra** och blir 0.
  - question: "Faktorisera: x² − 36"
    answer: ["(x + 6)(x − 6)", "(x - 6)(x + 6)", "(x + 6)(x - 6)", "(x − 6)(x + 6)"]
    solution: |
      x² − 36 är en differens av två kvadrater: x² och 6².
      Konjugatregeln baklänges ger **(x + 6)(x − 6)**

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Regeln

  `(a + b)(a − b) = a² − b²`

  Utveckla `(x + 5)(x − 5)`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Vad är a och b? | a = x, b = 5 | — |
  | Första kvadrerad | x · x | x² |
  | Minus sista kvadrerad | 5 · 5 = 25 | −25 |

  Svar: **x² − 25**

  Ingen x-term alls. Det är hela poängen med regeln.

  ## Varför mittentermerna försvinner

  Gör om det på det långa sättet:

  | Produkt | Resultat |
  |---|---|
  | x · x | x² |
  | x · (−5) | −5x |
  | 5 · x | +5x |
  | 5 · (−5) | −25 |

  `−5x + 5x = 0`: de tar ut varandra exakt. Kvar blir bara `x² − 25`.

  Det fungerar bara när termerna är **identiska** och tecknen är **motsatta**. Därför heter det ett konjugatpar.

  ## Ordningen spelar ingen roll

  `(9 − x)(9 + x)` är också ett konjugatpar: a = 9, b = x.

  `= 9² − x² = 81 − x²`

  Här står kvadraten på talet först, eftersom det var talet som stod först i parenteserna.

  ## Baklänges: faktorisera

  Ser du ett uttryck på formen "kvadrat minus kvadrat" kan du gå åt andra hållet:

  `x² − 49`

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Vad är kvadrerat först? | x² → a = x | — |
  | Vad är kvadrerat sist? | 49 = 7² → b = 7 | — |
  | Skriv konjugatparet | — | **(x + 7)(x − 7)** |

  Det här är förberedelsen för nollproduktmetoden två delmoment fram.

exercises:
  E:
    - equation: "Utveckla: (x + 8)(x − 8)"
      hint1: "Konjugatregeln: första kvadrerad minus sista kvadrerad."
      hint2: "x² − 8². Ingen x-term."
      answer: ["x² − 64", "x^2 - 64", "x² - 64"]
      solution: |
        (x + 8)(x − 8) = x² − 8² = **x² − 64**

    - equation: "Utveckla: (x − 4)(x + 4)"
      hint1: "Samma två termer med motsatta tecken, ordningen på parenteserna spelar ingen roll."
      hint2: "x² − 4² = x² − 16."
      answer: ["x² − 16", "x^2 - 16", "x² - 16"]
      solution: |
        (x − 4)(x + 4) = x² − 4² = **x² − 16**

    - equation: "Utveckla: (3x + 2)(3x − 2)"
      hint1: "Här är a = 3x. Kvadrera hela 3x."
      hint2: "(3x)² = 9x². Sedan minus 2² = 4."
      answer: ["9x² − 4", "9x^2 - 4", "9x² - 4"]
      solution: |
        (3x)² − 2² = **9x² − 4**

        > Glöm inte att trean kvadreras också: (3x)² = 9x², inte 3x².

    - equation: "Utveckla: (7 − x)(7 + x)"
      hint1: "Talet står först här. a = 7 och b = x."
      hint2: "7² − x² = 49 − x²."
      answer: ["49 − x²", "49 - x^2", "49 - x²"]
      solution: |
        7² − x² = **49 − x²**

    - equation: "Faktorisera: x² − 81"
      hint1: "Kvadrat minus kvadrat: gå baklänges med konjugatregeln."
      hint2: "81 = 9², så uttrycket är x² − 9². Skriv konjugatparet."
      answer: ["(x + 9)(x − 9)", "(x - 9)(x + 9)", "(x + 9)(x - 9)", "(x − 9)(x + 9)"]
      solution: |
        x² − 81 = x² − 9² = **(x + 9)(x − 9)**

        Kontroll: multiplicera in igen → x² − 81 ✓

    - equation: "Vilka tal ska stå i rutorna? (▢ + 6)(▢ − 6) = 4x² − 36. Ange vad som ska stå i den första rutan."
      hint1: "Vad ska kvadreras för att ge 4x²?"
      hint2: "(2x)² = 4x², så det som saknas är 2x."
      answer: ["2x"]
      solution: |
        Första termen kvadrerad ska bli 4x². Eftersom (2x)² = 4x² är svaret **2x**.

        (2x + 6)(2x − 6) = 4x² − 36 ✓

    - equation: "Förenkla: (x + 4)² + (x + 4)(x − 4)"
      hint1: "Två olika regler, en per term. Utveckla var och en för sig först."
      hint2: "Kvadreringsregeln på den första, konjugatregeln på den andra."
      answer: ["2x² + 8x", "2x^2 + 8x", "2x²+8x", "8x + 2x²"]
      solution: |
        (x + 4)² = x² + 8x + 16

        (x + 4)(x − 4) = x² − 16

        Lägg ihop:

        x² + 8x + 16 + x² − 16 = **2x² + 8x**

        De två 16:orna tar ut varandra.

prev: kvadreringsreglerna
prev_lesson_title: "Kvadreringsreglerna"
next: enkla-andragradsekvationer
next_lesson_title: "Enkla andragradsekvationer"
---

## Regeln

`(a + b)(a − b) = a² − b²`

I ord: **samma två termer, en parentes med plus och en med minus** ger första kvadrerad minus sista kvadrerad, och ingen term i mitten.

`(x + 5)(x − 5) = x² − 25`

## Varför x-termen försvinner

Multiplicerar du ihop på det vanliga sättet får du fyra produkter:

`x² − 5x + 5x − 25`

De två mittentermerna är **lika stora men med olika tecken**. De tar ut varandra och blir noll. Kvar blir `x² − 25`.

Det är därför regeln bara gäller för konjugatpar. I `(x + 5)(x + 5)` blir mittentermerna `+5x + 5x = 10x`, de tar inte ut varandra, och då är det kvadreringsregeln som gäller i stället.

## Känn igen paret

| Uttryck | Konjugatpar? | Varför |
|---|---|---|
| (x + 3)(x − 3) | ✅ | Samma termer, motsatta tecken |
| (x + 3)(x + 3) | ❌ | Båda plus → kvadreringsregeln |
| (x + 3)(x − 5) | ❌ | Olika tal |
| (2x − 7)(2x + 7) | ✅ | Samma termer, motsatta tecken |

## När en term har en siffra framför

`(3x + 2)(3x − 2)`

Här är a = `3x`. Hela termen kvadreras:

`(3x)² − 2² = 9x² − 4`

## Baklänges: faktorisera en differens av kvadrater

Ser du **kvadrat minus kvadrat** kan du dela upp uttrycket i två parenteser:

`x² − 49 = (x + 7)(x − 7)`

`9x² − 16 = (3x + 4)(3x − 4)`

Det här behöver du snart: när ett uttryck är faktoriserat kan du lösa ekvationen direkt med nollproduktmetoden.

> **Obs:** `x² + 25` går **inte** att faktorisera på det här sättet. Konjugatregeln kräver ett minustecken mellan kvadraterna.
