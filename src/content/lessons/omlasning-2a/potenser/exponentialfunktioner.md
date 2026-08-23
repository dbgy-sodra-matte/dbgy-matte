---
slug: "omlasning-2a/potenser/exponentialfunktioner"
title: "Exponentialfunktioner"
course: omlasning-2a
moment: potenser
moment_title: "Potenser och exponentialekvationer"
lesson_number: 3
lesson_total: 4

success_criteria:
  - Ställa upp en exponentialfunktion ur en text med procent per period
  - Läsa av startvärdet C och förändringsfaktorn a
  - Avgöra om funktionen växer eller avtar
  - Räkna ut värdet efter ett givet antal perioder

bank:
  - question: "En bostad är värd 400 000 kr och ökar 6 % per år. Skriv funktionen för värdet efter t år."
    answer: ["V = 400000 · 1,06^t", "400000 · 1,06^t", "y = 400000 · 1,06^x", "400000*1,06^t", "V = 400 000 · 1,06^t"]
    solution: |
      Mallen är V = C · a^t. Startvärdet är C = 400 000.
      +6 % ger förändringsfaktorn a = 1,06.
      Svar: **V = 400 000 · 1,06^t**
  - question: "I y = 750 · 1,15^x, vad är startvärdet?"
    answer: ["750", "C = 750"]
    solution: |
      Startvärdet är talet som står före potensen, alltså värdet när x = 0.
      Svar: **750**
  - question: "Växer eller avtar funktionen y = 640 · 0,85^x?"
    answer: ["avtar", "minskar", "den avtar", "avtagande", "den minskar"]
    solution: |
      Titta på a. Här är a = 0,85, alltså mindre än 1.
      Då blir y mindre för varje steg: funktionen **avtar**.
  - question: "Vilken förändringsfaktor hör till en minskning på 12 % per år?"
    answer: ["0,88", "0.88"]
    solution: |
      En minskning dras från det hela (1).
      1 − 0,12 = **0,88**

how_to:
  - Börja med repetitionen högst upp, den håller tidigare områden vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Mallen

  ```
  y = C · a^x
  ```

  | Bokstav | Betyder |
  |---|---|
  | C | startvärdet — vad det är från början, alltså när x = 0 |
  | a | förändringsfaktorn — vad det multipliceras med varje period |
  | x | antalet perioder: år, timmar, steg |

  Skillnaden mot en linjär funktion: den linjära **lägger till** samma tal varje steg, den exponentiella **multiplicerar** med samma faktor.

  ## Förändringsfaktorn ur procent

  | Förändringen | Räkna | a |
  |---|---|---|
  | ökar 6 % | 1 + 0,06 | 1,06 |
  | ökar 15 % | 1 + 0,15 | 1,15 |
  | minskar 12 % | 1 − 0,12 | 0,88 |
  | minskar 25 % | 1 − 0,25 | 0,75 |

  > **a > 1 betyder att funktionen växer. a < 1 betyder att den avtar.** Det är hela avläsningen — du behöver inte räkna något för att avgöra det.

  ## Ställa upp ur en text

  *En bostad är värd 400 000 kr och ökar 6 % per år.*

  | Delen | Blir |
  |---|---|
  | 400 000 kr från början | C = 400 000 |
  | ökar 6 % per år | a = 1,06 |

  `V = 400 000 · 1,06^t`

  *En maskin är värd 180 000 kr och tappar 12 % per år.*

  `V = 180 000 · 0,88^t`

  ## Räkna ut ett värde

  Vad är bostaden värd efter 3 år?

  | Steg | Uträkning |
  |---|---|
  | Sätt in t = 3 | V = 400 000 · 1,06³ |
  | 1,06³ på miniräknaren | ≈ 1,191016 |
  | Multiplicera | ≈ 476 406 kr |

  > **Räkna aldrig 6 % tre gånger som 18 %.** År två läggs räntan på ett redan ökat värde. Skillnaden växer snabbt: efter 10 år är 1,06¹⁰ ungefär 1,79, inte 1,60.

  ## Startvärdet är gratis

  Sätt in `x = 0`. Eftersom `a⁰ = 1` blir `y = C · 1 = C`.

  I `y = 750 · 1,15^x` är startvärdet alltså **750**, utan att du behöver räkna något.

exercises:
  E:
    - equation: "En bostad är värd 400 000 kr och ökar 6 % per år. Skriv en funktion för värdet V efter t år."
      hint1: "Mallen är V = C · a^t. Vad är startvärdet och vad är förändringsfaktorn?"
      hint2: "+6 % ger a = 1,06."
      answer: ["V = 400000 · 1,06^t", "400000 · 1,06^t", "V = 400 000 · 1,06^t", "400000*1,06^t", "V=400000·1,06^t"]
      solution: |
        C = 400 000 och a = 1 + 0,06 = 1,06

        **V = 400 000 · 1,06^t**

    - equation: "En maskin är värd 180 000 kr och tappar 12 % i värde per år. Skriv en funktion för värdet V efter t år."
      hint1: "En minskning ger en förändringsfaktor under 1."
      hint2: "1 − 0,12 = 0,88."
      answer: ["V = 180000 · 0,88^t", "180000 · 0,88^t", "V = 180 000 · 0,88^t", "180000*0,88^t", "V=180000·0,88^t"]
      solution: |
        C = 180 000 och a = 1 − 0,12 = 0,88

        **V = 180 000 · 0,88^t**

    - equation: "I funktionen y = 750 · 1,15^x, vad är startvärdet?"
      hint1: "Startvärdet är värdet när x = 0."
      hint2: "1,15⁰ = 1, så bara talet före potensen blir kvar."
      answer: ["750", "C = 750"]
      solution: |
        Sätt in x = 0: y = 750 · 1,15⁰ = 750 · 1 = 750

        **Startvärdet är 750**

    - equation: "Växer eller avtar funktionen y = 640 · 0,85^x?"
      hint1: "Titta på förändringsfaktorn a."
      hint2: "Är a mindre än 1 blir y mindre för varje steg."
      answer: ["avtar", "minskar", "den avtar", "avtagande", "den minskar"]
      solution: |
        a = 0,85, alltså mindre än 1.

        Varje steg multipliceras y med ett tal under 1, så värdet blir mindre.

        Funktionen **avtar**.

    - equation: "Vilken förändringsfaktor hör till en minskning på 12 % per år?"
      hint1: "En minskning dras från det hela."
      hint2: "Det hela är 1. Dra bort 0,12."
      answer: ["0,88", "0.88"]
      solution: |
        1 − 0,12 = **0,88**

    - equation: "Ett konto innehåller 2 500 kr och växer med 4 % per år. Hur mycket finns på kontot efter 3 år? Svara i hela kronor."
      hint1: "Ställ upp funktionen först: C = 2500 och a = 1,04."
      hint2: "Sätt in t = 3 och räkna ut 2500 · 1,04³ på miniräknaren."
      answer: ["2812", "2812 kr", "2 812", "2 812 kr"]
      solution: |
        y = 2500 · 1,04^t

        Sätt in t = 3:

        1,04³ ≈ 1,124864

        2500 · 1,124864 ≈ 2812,16

        **Ungefär 2 812 kr**

        Räkna inte 4 % tre gånger som 12 % — år två läggs räntan på ett redan ökat belopp.

prev: potensekvationer
prev_lesson_title: "Potensekvationer"
next: exponentialekvationer
next_lesson_title: "Exponentialekvationer"
---

## Mallen

`y = C · a^x`

- **C** är startvärdet — vad det är från början, när x = 0
- **a** är förändringsfaktorn — vad det multipliceras med varje period
- **x** är antalet perioder: år, timmar, steg

Skillnaden mot en linjär funktion: den linjära **lägger till** samma tal varje steg, den exponentiella **multiplicerar** med samma faktor.

## Förändringsfaktorn

Samma räkning som i Ma1: en ökning läggs till 1, en minskning dras från 1.

| Förändringen | a |
|---|---|
| ökar 6 % | 1,06 |
| ökar 15 % | 1,15 |
| minskar 12 % | 0,88 |
| minskar 25 % | 0,75 |

**a > 1 → funktionen växer. a < 1 → funktionen avtar.** Det avgörs på ett ögonkast, utan uträkning.

## Ur en text

Leta efter två saker: vad det är **från början**, och hur många **procent per period**.

| Texten säger | Funktionen blir |
|---|---|
| 400 000 kr, ökar 6 % per år | V = 400 000 · 1,06^t |
| 180 000 kr, tappar 12 % per år | V = 180 000 · 0,88^t |
| 2 500 kr, växer 4 % per år | y = 2 500 · 1,04^t |

## Räkna ut ett värde

Sätt in antalet perioder och använd miniräknaren.

`2 500 · 1,04³ ≈ 2 812 kr`

> **Procent per period staplas inte som addition.** 4 % i tre år är inte 12 %. År två räknas räntan på ett redan ökat belopp, och skillnaden växer: efter 10 år är `1,04¹⁰ ≈ 1,48`, alltså 48 % — inte 40 %.

## Startvärdet är gratis

Sätt `x = 0`. Eftersom `a⁰ = 1` blir `y = C`.

I `y = 750 · 1,15^x` är startvärdet alltså **750**, direkt avläst.

## Vanliga fel

| Fel | Rätt |
|---|---|
| a = 0,06 vid en ökning på 6 % | a = 1,06 |
| a = 1,12 vid en minskning på 12 % | a = 0,88 |
| 400 000 · 0,06³ | 400 000 · 1,06³ |
| "6 % i 3 år blir 18 %" | faktorn blir 1,06³ ≈ 1,19, alltså cirka 19 % |
