---
slug: "omlasning-2b/logaritmer/exponentialfunktioner"
title: "Exponentialfunktioner"
course: omlasning-2b
moment: logaritmer
moment_title: "Logaritmer och exponentialekvationer"
lesson_number: 2
lesson_total: 4

success_criteria:
  - Ställa upp en exponentialfunktion utifrån en text med procentuell förändring
  - Räkna ut ett värde efter ett givet antal år med miniräknare
  - Avgöra om en funktion växer eller avtar utifrån förändringsfaktorn
  - Läsa av startvärdet C ur funktionen

bank:
  - question: "En summa på 4 000 kr ökar med 5 % per år. Skriv funktionen y = C · a^x."
    answer: ["y = 4000 · 1,05^x", "4000·1,05^x", "y = 4000*1.05^x", "4000 · 1,05^x"]
  - question: "Växer eller avtar funktionen y = 900 · 0,94^x?"
    answer: ["Avtar", "avtar", "den avtar", "minskar"]
  - question: "Vad är startvärdet i funktionen y = 250 · 1,08^x?"
    answer: ["250"]
  - question: "Vilken förändringsfaktor svarar mot en minskning på 12 %?"
    answer: ["0.88", "0,88"]

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar förra delmomentet
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Du behöver miniräknare här — potenser räknas inte i huvudet
  - Klarar du alla sex utan ledtrådar sitter delmomentet — gå vidare till nästa

worked_example: |
  ## 1. Från text till funktion

  *Ett företag är värt 5 000 000 kr och värdet ökar med 4 % per år. Ställ upp en funktion som ger värdet efter x år.*

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Startvärdet | Vad det är från början | C = 5 000 000 |
  | Förändringsfaktor vid ökning | 1 + 0,04 | a = 1,04 |
  | Sätt in i mallen y = C · a^x | — | **y = 5 000 000 · 1,04^x** |

  Vid **minskning** med 4 % blir faktorn `1 − 0,04 = 0,96` i stället.

  ## 2. Räkna ut ett värde

  Vad är företaget värt efter 10 år?

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Sätt in x = 10 | 5 000 000 · 1,04¹⁰ | — |
  | Räkna 1,04¹⁰ på miniräknaren | ≈ 1,4802 | — |
  | Multiplicera | 5 000 000 · 1,4802 | **≈ 7 401 000 kr** |

  > **Miniräknaren:** använd `x^y`- eller `^`-knappen. Skriv `1,04 ^ 10` och multiplicera sedan med 5 000 000. Räkna aldrig 1,04 · 10 — det är ett helt annat tal.

  ## 3. Växer eller avtar?

  Titta bara på **förändringsfaktorn a**:

  | a | Vad som händer | Exempel |
  |---|---|---|
  | Större än 1 | Funktionen **växer** | 1,04 → ökar med 4 % per steg |
  | Mellan 0 och 1 | Funktionen **avtar** | 0,92 → minskar med 8 % per steg |
  | Precis 1 | Oförändrat | — |

  Från faktor till procent: `0,92` betyder `1 − 0,92 = 0,08`, alltså en **minskning med 8 %**.

  ## 4. Startvärdet C

  `C` är värdet när x = 0 — alltså innan något hänt.

  I `y = 250 · 1,08^x` är startvärdet **250**, eftersom `1,08⁰ = 1`.

exercises:
  E:
    - equation: "En bil är värd 180 000 kr och värdet minskar med 15 % per år. Skriv en funktion y = C · a^x som ger värdet efter x år."
      hint1: "Startvärdet är 180 000. Vid minskning är faktorn 1 minus procenttalet i decimalform."
      hint2: "1 − 0,15 = 0,85."
      answer: ["y = 180000 · 0,85^x", "180000·0,85^x", "y = 180000*0.85^x", "180000 · 0,85^x"]
      solution: |
        Startvärde: C = 180 000
        Minskning 15 % → a = 1 − 0,15 = 0,85

        **y = 180 000 · 0,85^x**

    - equation: "Ett sparkonto innehåller 25 000 kr och växer med 3 % per år. Skriv en funktion y = C · a^x som ger beloppet efter x år."
      hint1: "Vid ökning är faktorn 1 plus procenttalet i decimalform."
      hint2: "1 + 0,03 = 1,03."
      answer: ["y = 25000 · 1,03^x", "25000·1,03^x", "y = 25000*1.03^x", "25000 · 1,03^x"]
      solution: |
        C = 25 000 och a = 1 + 0,03 = 1,03

        **y = 25 000 · 1,03^x**

    - equation: "En summa på 8 000 kr växer med 6 % per år. Hur mycket finns efter 5 år? Svara i hela kronor."
      hint1: "Funktionen är 8000 · 1,06^x. Sätt in x = 5."
      hint2: "Räkna 1,06^5 på miniräknaren först (≈ 1,3382) och multiplicera sedan med 8 000."
      answer: ["10706", "10706 kr"]
      solution: |
        8 000 · 1,06⁵
        1,06⁵ ≈ 1,338226
        8 000 · 1,338226 ≈ 10 705,8 ≈ **10 706 kr**

    - equation: "En dator är värd 12 000 kr och tappar 20 % av värdet varje år. Vad är den värd efter 4 år? Svara i hela kronor."
      hint1: "Faktorn är 1 − 0,20 = 0,80. Funktionen blir 12000 · 0,8^x."
      hint2: "Räkna 0,8^4 på miniräknaren (= 0,4096) och multiplicera med 12 000."
      answer: ["4915", "4915 kr"]
      solution: |
        12 000 · 0,8⁴
        0,8⁴ = 0,4096
        12 000 · 0,4096 = 4 915,2 ≈ **4 915 kr**

    - equation: "Växer eller avtar funktionen y = 700 · 0,96^x? Och med hur många procent per steg?"
      hint1: "Är förändringsfaktorn större eller mindre än 1?"
      hint2: "0,96 är mindre än 1, så den avtar. 1 − 0,96 = 0,04."
      answer: ["Avtar med 4 %", "avtar 4 %", "minskar med 4 %", "avtar, 4 %"]
      solution: |
        Faktorn 0,96 är mindre än 1 → funktionen **avtar**.

        1 − 0,96 = 0,04 → **minskar med 4 % per steg**

    - equation: "Vad är startvärdet i funktionen y = 3 400 · 1,12^x?"
      hint1: "Startvärdet är värdet när x = 0."
      hint2: "1,12⁰ = 1, så bara talet framför är kvar."
      answer: ["3400"]
      solution: |
        När x = 0: y = 3 400 · 1,12⁰ = 3 400 · 1 = **3 400**

        Talet framför potensen är alltid startvärdet.

prev: potenslagar
prev_lesson_title: "Potenslagar"
next: tiologaritmer
next_lesson_title: "Tiologaritmer"
---

## Mallen

En exponentialfunktion skrivs

`y = C · a^x`

- **C** = startvärdet, alltså vad det är från början (när x = 0)
- **a** = förändringsfaktorn, det som händer varje steg
- **x** = antal steg, oftast antal år

Skillnaden mot en linjär funktion: där **läggs** något till varje steg. Här **multipliceras** något varje steg. Därför växer exponentialfunktioner allt snabbare.

## Från procent till förändringsfaktor

Detta är samma förändringsfaktor som i Ma1:

| I texten står | Faktorn blir |
|---|---|
| ökar med 4 % | 1 + 0,04 = **1,04** |
| ökar med 25 % | 1 + 0,25 = **1,25** |
| minskar med 15 % | 1 − 0,15 = **0,85** |
| minskar med 8 % | 1 − 0,08 = **0,92** |

Och baklänges: faktorn `0,94` betyder `1 − 0,94 = 0,06`, alltså en **minskning med 6 %**.

## Växer eller avtar?

Bara faktorn avgör:

- `a > 1` → funktionen **växer**
- `0 < a < 1` → funktionen **avtar**

Ett vanligt fel är att tro att 0,85 betyder "minskar med 85 %". Det betyder att **85 % är kvar** — alltså en minskning med 15 %.

## Räkna ut ett värde

Sätt in antalet steg och räkna med miniräknare:

`y = 8 000 · 1,06⁵`

1. Räkna `1,06⁵` först → ≈ 1,3382
2. Multiplicera med 8 000 → ≈ 10 706 kr

> **Miniräknaren:** använd `^` eller `x^y`. Skriv aldrig `1,06 · 5` — det ger 5,3 och är ett helt annat räknesätt.

## Skriv ut funktionen på provet

Uppgifter av typen *"ställ upp en funktion som ger värdet efter t år"* ger poäng för själva funktionen, även om du inte räknar ut något värde. Det tar tio sekunder:

> `V(t) = 2 000 000 · 1,10^t`

Skriv gärna vad C och a betyder — det visar att du förstått, inte bara satt in i en mall.

## Det som kommer härnäst

Nästa fråga blir naturligt: *när* når värdet en viss nivå? Då står det okända uppe i exponenten, och för att komma åt det behövs logaritmer — nästa delmoment.
