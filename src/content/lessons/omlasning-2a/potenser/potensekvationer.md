---
slug: "omlasning-2a/potenser/potensekvationer"
title: "Potensekvationer"
course: omlasning-2a
moment: potenser
moment_title: "Potenser och exponentialekvationer"
lesson_number: 2
lesson_total: 4

success_criteria:
  - Lösa ekvationer där x står i basen, som x⁵ = 32
  - Veta när svaret har två lösningar och när det bara har en
  - Göra potensen ensam innan du drar roten
  - Skilja en potensekvation från en exponentialekvation

bank:
  - question: "Lös ekvationen x⁵ = 32"
    answer: ["2", "x = 2"]
    solution: |
      x står i basen, så dra femte roten ur båda leden.
      Vilket tal gånger sig självt fem gånger blir 32? 2 · 2 · 2 · 2 · 2 = 32.
      Svar: **x = 2**
  - question: "Lös ekvationen x³ = 125"
    answer: ["5", "x = 5"]
    solution: |
      Udda exponent ger bara en lösning.
      5 · 5 · 5 = 125.
      Svar: **x = 5**
  - question: "Vad skiljer en potensekvation från en exponentialekvation?"
    answer: ["x står i basen", "i basen", "x i basen", "potensekvation har x i basen", "att x står i basen"]
    solution: |
      I en **potensekvation står x i basen**: x⁵ = 32.
      I en exponentialekvation står x i exponenten: 2^x = 32.
      Det är olika ekvationer med olika metoder.
  - question: "Hur många lösningar har ekvationen x⁴ = 81?"
    answer: ["2", "två"]
    solution: |
      Jämn exponent döljer tecknet: både 3⁴ och (−3)⁴ blir 81.
      Svar: **2 lösningar**

how_to:
  - Börja med repetitionen högst upp, den håller tidigare områden vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

widget: "potensekvationer/v1"
widget_height: 560

worked_example: |
  ## x står i basen

  En **potensekvation** har x i basen:

  `x⁵ = 32`

  Jämför med en exponentialekvation, där x står i exponenten: `2^x = 32`. Det är olika ekvationer med olika metoder, och att blanda ihop dem är det vanligaste felet i det här området.

  ## Lösa en potensekvation

  Dra roten med samma "grad" som exponenten.

  Lös `x⁵ = 32`:

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Fråga | vilket tal gånger sig självt fem gånger blir 32? | — |
  | Testa | 2 · 2 · 2 · 2 · 2 = 32 | **x = 2** |

  På miniräknaren: femte roten ur 32, eller `32^(1/5)`.

  ## Jämn eller udda exponent

  Det här avgör antalet lösningar.

  | Exponent | Antal lösningar | Exempel |
  |---|---|---|
  | **udda** (3, 5, 7) | en | x³ = 125 → x = 5 |
  | **jämn** (2, 4, 6) | två, ± | x⁴ = 81 → x = ±3 |

  Varför? En jämn exponent döljer tecknet: `3⁴ = 81` och `(−3)⁴ = 81` också. En udda exponent bevarar det: `(−5)³ = −125`, inte 125.

  > Samma regel som för `x² = 25` i Del 1. Jämn exponent, två lösningar, glöm inte minus-varianten.

  ## Gör potensen ensam först

  Lös `2x³ = 54`:

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Dela båda leden med 2 | 54 / 2 | x³ = 27 |
  | Dra tredje roten | 3 · 3 · 3 = 27 | **x = 3** |

  Lös `3x² − 5 = 70`:

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Lägg till 5 | 70 + 5 | 3x² = 75 |
  | Dela med 3 | 75 / 3 | x² = 25 |
  | Dra roten, båda tecknen | — | **x = ±5** |

  Ordningen är densamma som alltid: skala bort allt runt potensen innan du drar roten.

  ## Roten som potens

  `√x` är samma sak som `x^(1/2)`.

  Lös `√x = 7`: kvadrera båda leden → `x = 49`.

  Kontrollera alltid när du kvadrerat, kvadrering kan skapa lösningar som inte fanns från början.

exercises:
  E:
    - equation: "Lös ekvationen: x⁵ = 32"
      hint1: "x står i basen. Dra femte roten ur båda leden."
      hint2: "Vilket tal gånger sig självt fem gånger blir 32?"
      answer: ["2", "x = 2"]
      solution: |
        2 · 2 · 2 · 2 · 2 = 32

        **x = 2**

    - equation: "Lös ekvationen: x³ = 125"
      hint1: "Udda exponent, då finns bara en lösning."
      hint2: "Vilket tal gånger sig självt tre gånger blir 125?"
      answer: ["5", "x = 5"]
      solution: |
        5 · 5 · 5 = 125

        **x = 5**

        Udda exponent ger bara en lösning: (−5)³ = −125, inte 125.

    - equation: "Lös ekvationen: x⁴ = 81"
      hint1: "Jämn exponent. Hur många lösningar brukar det ge?"
      hint2: "3⁴ = 81, och (−3)⁴ = 81 också."
      answer: ["±3", "x = ±3", "3 och −3", "3 och -3", "3, -3", "-3, 3"]
      solution: |
        3 · 3 · 3 · 3 = 81 och (−3)⁴ = 81

        **x = ±3**

    - equation: "Lös ekvationen: 2x³ = 54"
      hint1: "Gör potensen ensam först: dela båda leden med 2."
      hint2: "x³ = 27. Vilket tal gånger sig självt tre gånger blir 27?"
      answer: ["3", "x = 3"]
      solution: |
        2x³ = 54
        x³ = 27

        **x = 3**

    - equation: "Lös ekvationen: 3x² − 5 = 70"
      hint1: "Två steg innan roten: lägg till 5, dela sedan med 3."
      hint2: "3x² = 75, alltså x² = 25. Jämn exponent."
      answer: ["±5", "x = ±5", "5 och −5", "5 och -5", "5, -5", "-5, 5"]
      solution: |
        3x² − 5 = 70
        3x² = 75
        x² = 25

        **x = ±5**

        Kontroll: 3 · 5² − 5 = 75 − 5 = 70 ✓

    - equation: "Lös ekvationen: √x = 7"
      hint1: "Roten tas bort genom att kvadrera båda leden."
      hint2: "x = 7². Kontrollera sedan i originalekvationen."
      answer: ["49", "x = 49"]
      solution: |
        √x = 7

        Kvadrera båda leden: x = 49

        Kontroll: √49 = 7 ✓

        **x = 49**

    - equation: "Lös ekvationen: x⁷ = 45 667. Svara med två decimaler."
      hint1: "x står i basen och exponenten är udda, alltså en lösning. Dra sjunde roten."
      hint2: "På miniräknaren: 45667^(1/7)."
      answer: ["4,63", "4.63", "x = 4,63", "x = 4.63"]
      solution: |
        Udda exponent ger en lösning.

        x = 45667^(1/7) ≈ 4,6308…

        **x ≈ 4,63**

        Alla potensekvationer har inte snygga heltalssvar. När roten inte går jämnt ut använder du miniräknaren och avrundar som uppgiften säger.

    - equation: "Lös ekvationen: x³ = 1/27"
      hint1: "Udda exponent, alltså en lösning. Vilket tal gånger sig självt tre gånger blir 1/27?"
      hint2: "Både täljaren och nämnaren är kuber: 1³ = 1 och 3³ = 27."
      answer: ["1/3", "x = 1/3", "0,333", "1//3"]
      solution: |
        1/27 = 1³/3³ = (1/3)³

        **x = 1/3**

        Svaret behöver inte vara ett heltal. Dra roten ur täljare och nämnare var för sig.

prev: potenslagar
prev_lesson_title: "Potenslagar"
next: exponentialfunktioner
next_lesson_title: "Exponentialfunktioner"
---

## Var står x?

Det avgör allt i det här området.

| Ekvation | x står i | Kallas | Metod |
|---|---|---|---|
| x⁵ = 32 | basen | potensekvation | dra roten |
| 2^x = 32 | exponenten | exponentialekvation | pröva dig fram |

Den här sidan handlar om den första sorten. Nästa om den andra.

## Dra roten

`x⁵ = 32` → femte roten ur 32 → `x = 2`

På miniräknaren skriver du `32^(1/5)`, eller använder rot-knappen om den finns.

## Jämn eller udda exponent

| Exponent | Antal lösningar | Varför |
|---|---|---|
| udda (3, 5, 7) | **en** | tecknet bevaras: (−5)³ = −125 |
| jämn (2, 4, 6) | **två** | tecknet döljs: (−3)⁴ = 81 = 3⁴ |

Samma regel som för `x² = 25` i Del 1. Är exponenten jämn ska svaret skrivas med `±`.

| Ekvation | Svar |
|---|---|
| x³ = 125 | x = 5 |
| x⁴ = 81 | x = ±3 |
| x⁵ = 32 | x = 2 |
| x² = 100 | x = ±10 |

## Skala bort resten först

Precis som med vanliga ekvationer: gör potensen ensam innan du drar roten.

`2x³ = 54` → dela med 2 → `x³ = 27` → **x = 3**

`3x² − 5 = 70` → lägg till 5 → `3x² = 75` → dela med 3 → `x² = 25` → **x = ±5**

> Ordningen: först plus och minus, sedan gånger och delat. Roten sist.

## Rottecknet är också en potens

`√x` betyder `x^(1/2)`.

Lös `√x = 7` genom att kvadrera båda leden: `x = 49`.

**Kontrollera alltid när du kvadrerat.** Kvadrering kan skapa lösningar som inte löser den ursprungliga ekvationen, här stämmer det, `√49 = 7`, men vanan är värd att ha.
