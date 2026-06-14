---
slug: "omlasning-1a/algebra/ekvationer-med-parenteser"
title: "Ekvationer med parenteser"
course: omlasning-1a
moment: algebra
moment_title: "Algebra"
lesson_number: 5
lesson_total: 8

success_criteria:
  - Lösa ekvationer som innehåller en parentes
  - Välja att dela bort talet framför parentesen eller multiplicera in det
  - Kontrollera svaret genom insättning

bank:
  - question: "Lös: 2(x + 3) = 14"
    answer: "x = 4"
  - question: "Lös: 4(x − 1) = 12"
    answer: "x = 4"
  - question: "Lös: 3(x + 2) = 18"
    answer: "x = 4"
  - question: "Lös: 5(x − 2) = 20"
    answer: "x = 6"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

worked_example: |
  När ekvationen har en parentes finns det två vägar. Båda ger samma svar — välj den som känns enklast.

  ## Väg 1: dela bort talet framför (oftast enklast)

  Lös `4(x − 2) = 12`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Dela båda leden med 4 | parentesen blir ensam | x − 2 = 3 |
  | Addera 2 | — | **x = 5** |

  **Kontroll:** 4 · (5 − 2) = 4 · 3 = 12 ✓

  ## Väg 2: multiplicera in först

  Samma ekvation:

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Multiplicera in 4 | 4 · x − 4 · 2 | 4x − 8 = 12 |
  | Addera 8 | — | 4x = 20 |
  | Dela med 4 | — | **x = 5** |

  Samma svar. Väg 1 är kortast när högerledet är delbart med talet framför.

exercises:
  E:
    - equation: "Lös: 2(x + 4) = 16"
      hint1: "Dela båda leden med 2 först, så blir parentesen ensam: x + 4 = 8."
      answer: ["4"]
      solution: |
        2(x + 4) = 16
        x + 4 = 8     [dela båda leden med 2]
        x = 4         [subtrahera 4]

        Kontroll: 2 · (4 + 4) = 2 · 8 = 16 ✓

    - equation: "Lös: 3(x + 1) = 15"
      hint1: "Dela båda leden med 3: x + 1 = 5."
      answer: ["4"]
      solution: |
        3(x + 1) = 15
        x + 1 = 5     [dela med 3]
        x = 4         [subtrahera 1]

        Kontroll: 3 · (4 + 1) = 3 · 5 = 15 ✓

    - equation: "Lös: 5(x − 2) = 25"
      hint1: "Dela båda leden med 5: x − 2 = 5."
      answer: ["7"]
      solution: |
        5(x − 2) = 25
        x − 2 = 5     [dela med 5]
        x = 7         [addera 2]

        Kontroll: 5 · (7 − 2) = 5 · 5 = 25 ✓

    - equation: "Lös: 4(x + 3) = 28"
      hint1: "Dela med 4: x + 3 = 7."
      answer: ["4"]
      solution: |
        4(x + 3) = 28
        x + 3 = 7     [dela med 4]
        x = 4         [subtrahera 3]

        Kontroll: 4 · (4 + 3) = 4 · 7 = 28 ✓

    - equation: "Lös: 2(x − 5) = 8"
      hint1: "Dela med 2: x − 5 = 4."
      answer: ["9"]
      solution: |
        2(x − 5) = 8
        x − 5 = 4     [dela med 2]
        x = 9         [addera 5]

        Kontroll: 2 · (9 − 5) = 2 · 4 = 8 ✓

    - equation: "Lös: 6(x + 2) = 30"
      hint1: "Dela med 6: x + 2 = 5."
      answer: ["3"]
      solution: |
        6(x + 2) = 30
        x + 2 = 5     [dela med 6]
        x = 3         [subtrahera 2]

        Kontroll: 6 · (3 + 2) = 6 · 5 = 30 ✓

    - equation: "Lös: 3(2x − 1) = 15"
      hint1: "Dela med 3 först: 2x − 1 = 5. Sedan addera 1 och dela med 2."
      hint2: "2x − 1 = 5 → 2x = 6."
      answer: ["3"]
      solution: |
        3(2x − 1) = 15
        2x − 1 = 5    [dela med 3]
        2x = 6        [addera 1]
        x = 3         [dela med 2]

        Kontroll: 3 · (2 · 3 − 1) = 3 · 5 = 15 ✓

prev: faktorisering
prev_lesson_title: "Faktorisering"
next: ekvationer-med-namnare
next_lesson_title: "Ekvationer med nämnare"
---

## En parentes i ekvationen

Ibland står en parentes mitt i ekvationen: `4(x − 2) = 12`. Det är fortfarande balansmetoden — du behöver bara hantera parentesen.

## Två vägar — välj den enklaste

**Väg 1 — dela bort talet framför.** Om högerledet är delbart med talet framför parentesen är det här snabbast:

> `4(x − 2) = 12` → dela båda leden med 4 → `x − 2 = 3` → `x = 5`

**Väg 2 — multiplicera in först.** Lös upp parentesen och lös som vanligt:

> `4(x − 2) = 12` → `4x − 8 = 12` → `4x = 20` → `x = 5`

Båda ger `x = 5`. Väg 1 har färre steg när det går jämnt ut.

## Kontrollen

Sätt in svaret i den **ursprungliga** ekvationen, med parentesen kvar:

> `4 · (5 − 2) = 4 · 3 = 12` ✓

> **Regel att skriva ner:** Dela bort talet framför parentesen om det går jämnt ut — annars multiplicera in. Kontrollera i ursprungsekvationen.
