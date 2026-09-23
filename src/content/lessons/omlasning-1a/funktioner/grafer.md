---
slug: "omlasning-1a/funktioner/grafer"
title: "Grafer"
course: omlasning-1a
moment: funktioner
moment_title: "Funktioner"
lesson_number: 3
lesson_total: 9

success_criteria:
  - Räkna ut en punkt (x, y) ur en funktion
  - Förstå att en linjär funktion blir en rät linje
  - Avgöra om en punkt ligger på en graf

bank:
  - question: "y = x + 2. Vilken punkt får du när x = 1?"
    answer: ["(1, 3)", "1, 3", "(1,3)"]
    solution: |
      Sätt in x = 1 i formeln för att få y.
      y = 1 + 2 = 3.
      Punkten skrivs (x, y): **(1, 3)**
  - question: "y = 2x. Vilken punkt får du när x = 3?"
    answer: ["(3, 6)", "3, 6", "(3,6)"]
    solution: |
      Sätt in x = 3: y = 2 · 3 = 6.
      Punkten blir **(3, 6)**
  - question: "y = 2x + 1. Vilken punkt får du när x = 4?"
    answer: ["(4, 9)", "4, 9"]
    solution: |
      Sätt in x = 4: y = 2 · 4 + 1 = 9.
      Punkten blir **(4, 9)**
  - question: "Ligger (2, 4) på linjen y = 2x? Svara ja eller nej."
    answer: ["ja", "ja!"]
    solution: |
      Testa genom att sätta in punktens x i formeln.
      x = 2 ger y = 2 · 2 = 4, och punkten har just y = 4.
      Svar: **ja**

how_to:
  - Börja med kom-igång-frågorna, de repeterar tidigare delmoment
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner, minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSePJBORGVdeML_qpCSTij4oljtZjqjlOPYeZ6GOS1cURzkDjw/viewform"

worked_example: |
  En **graf** är funktionen ritad i ett koordinatsystem. Varje rad i värdetabellen blir en **punkt**.

  ## Från funktion till punkt

  *y = 2x + 1.* Sätt in ett x, räkna y, skriv som koordinatpar:

  | x | y | Punkt |
  |---|---|---|
  | 0 | 1 | (0, 1) |
  | 1 | 3 | (1, 3) |
  | 2 | 5 | (2, 5) |

  Markerar du punkterna och drar en linje genom dem får du grafen. En **linjär** funktion (y = kx + m) ger alltid en **rät linje**.

  ## Ligger en punkt på grafen?

  Sätt in punktens x i funktionen. Får du punktens y ligger den på linjen.

  *Ligger (3, 7) på y = 2x + 1?* → 2 · 3 + 1 = 7 ✓ Ja.

exercises:
  E:
    - equation: "y = x + 2. Vilken punkt får du när x = 1? Skriv som koordinatpar (x, y)."
      hint1: "Räkna y: 1 + 2. Skriv sedan (x, y)."
      answer: ["(1, 3)", "(1,3)", "1, 3"]
      solution: |
        y = 1 + 2 = 3 → punkten **(1, 3)**

    - equation: "y = 2x. Vilken punkt får du när x = 3? Skriv som koordinatpar."
      hint1: "y = 2 · 3. Skriv sedan (3, y)."
      answer: ["(3, 6)", "(3,6)", "3, 6"]
      solution: |
        y = 2 · 3 = 6 → punkten **(3, 6)**

    - equation: "y = 3x − 1. Vilken punkt får du när x = 2? Skriv som koordinatpar."
      hint1: "y = 3 · 2 − 1."
      answer: ["(2, 5)", "(2,5)", "2, 5"]
      solution: |
        y = 3 · 2 − 1 = 5 → punkten **(2, 5)**

    - equation: "Ligger punkten (2, 4) på linjen y = 2x? Svara ja eller nej."
      hint1: "Sätt in x = 2 i y = 2x. Blir y = 4?"
      answer: ["ja", "Ja", "ja!"]
      solution: |
        2 · 2 = 4 ✓ → **ja**, punkten ligger på linjen.

    - equation: "Ligger punkten (3, 5) på linjen y = 2x? Svara ja eller nej."
      hint1: "Sätt in x = 3 i y = 2x. Blir y = 5?"
      answer: ["nej", "Nej", "nej!"]
      solution: |
        2 · 3 = 6, inte 5 → **nej**, punkten ligger inte på linjen.

    - equation: "Grafen visar hur hög Noras planta är. x är antal veckor och y är höjden i cm. Hur hög är plantan efter 2 veckor?"
      hint1: "Veckorna står på den vågräta axeln och höjden på den lodräta. Leta upp x = 2."
      hint2: "Gå rakt upp från 2 på x-axeln tills du når linjen. Läs sedan av på y-axeln, eftersom y är plantans höjd."
      answer: ["5"]
      solution: |
        x = antal veckor, y = plantans höjd i cm.

        Vid x = 2 ligger linjen på y = 5.

        **Plantan är 5 cm hög efter 2 veckor.** Kontroll: linjen är y = 2x + 1, och 2 · 2 + 1 = 5 ✓
      graf:
        typ: linjär
        k: 2
        m: 1
        xmax: 5
        ymax: 12
        ySteg: 1

    - equation: "Samma graf. Hur hög var plantan när Nora planterade den?"
      hint1: "När Nora planterade den hade det gått 0 veckor. Låt x = 0."
      hint2: "x = 0 ligger på y-axeln. Läs av var linjen skär y-axeln, eftersom det är höjden från start."
      answer: ["1"]
      solution: |
        x = antal veckor, y = plantans höjd i cm.

        Vid x = 0 skär linjen y-axeln i y = 1.

        **Plantan var 1 cm hög när Nora planterade den.**
      graf:
        typ: linjär
        k: 2
        m: 1
        xmax: 5
        ymax: 12
        ySteg: 1

prev: koordinatsystem
prev_lesson_title: "Koordinatsystem"
next: linjara-funktioner
next_lesson_title: "Linjära funktioner"
---

## Grafen = funktionen ritad

En **graf** är funktionen ritad i ett koordinatsystem. Du gör den genom att räkna ut punkter och markera dem.

## Från funktion till punkter

Varje rad i värdetabellen blir en punkt `(x, y)`:

> `y = 2x + 1`: x = 1 ger y = 3 → punkten (1, 3).

Markera flera punkter och dra en linje genom dem.

## Linjära funktioner ger räta linjer

En funktion på formen `y = kx + m` kallas **linjär** och ger alltid en **rät linje**. Då räcker det egentligen med två punkter för att rita den.

## Ligger en punkt på grafen?

Sätt in punktens x-värde i funktionen. Får du punktens y-värde ligger punkten på linjen:

> Ligger (2, 4) på `y = 2x`? → 2 · 2 = 4 ✓ Ja.
> Ligger (3, 5) på `y = 2x`? → 2 · 3 = 6 ≠ 5 → Nej.

> **Regel att skriva ner:** En punkt på grafen får du genom att sätta in x och räkna y. Linjär funktion = rät linje.
