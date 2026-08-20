---
slug: "omlasning-1a/funktioner/lasa-av-grafer"
title: "Läsa av grafer"
course: omlasning-1a
moment: funktioner
moment_title: "Funktioner"
lesson_number: 5
lesson_total: 9

success_criteria:
  - Läsa av y-värdet för ett givet x på en graf
  - Läsa av vilket x som ger ett visst y
  - Hitta var grafen skär y-axeln

bank:
  - question: "En linje har k = 2 och m = 1. Vilket y hör till x = 3?"
    answer: "7"
  - question: "Vid vilket x-värde skär en graf y-axeln?"
    answer: "0"
  - question: "En linje har k = 3 och m = 0. Vid vilket x är y = 12?"
    answer: "4"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna, de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner, minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSdf8qYe_OOaBTkJRYEo86tYEezI2XI_z5TIg0D3zFrRkX0sXg/viewform"

worked_example: |
  Att **läsa av** en graf är att hitta värden direkt ur bilden.

  ## Hitta y när x är givet

  1. Leta upp x-värdet på den **vågräta** axeln
  2. Gå rakt **upp** till linjen
  3. Gå rakt **vänster** till y-axeln och läs av

  ## Hitta x när y är givet

  Samma sak baklänges: börja på y-axeln, gå höger till linjen, gå ner till x-axeln.

  ## Var skär grafen y-axeln?

  Det är värdet där linjen korsar den lodräta axeln, alltså vid **x = 0**.

exercises:
  E:
    - equation: "Grafen visar en linjär funktion. Vad är y när x = 3?"
      hint1: "Gå upp från 3 på x-axeln till linjen, läs av höjden."
      answer: ["7"]
      solution: |
        Vid x = 3 ligger linjen på y = **7**.
      graf:
        typ: linjär
        k: 2
        m: 1
        xmax: 5
        ymax: 12
        ySteg: 1

    - equation: "Samma graf. Vid vilket x är y = 5?"
      hint1: "Börja vid 5 på y-axeln, gå höger till linjen, gå ner till x-axeln."
      answer: ["2"]
      solution: |
        Linjen är på höjden 5 när x = **2**.
      graf:
        typ: linjär
        k: 2
        m: 1
        xmax: 5
        ymax: 12
        ySteg: 1

    - equation: "Samma graf. Var skär linjen y-axeln?"
      hint1: "Läs av där linjen korsar den lodräta axeln (x = 0)."
      answer: ["1"]
      solution: |
        Linjen skär y-axeln i **1**.
      graf:
        typ: linjär
        k: 2
        m: 1
        xmax: 5
        ymax: 12
        ySteg: 1

    - equation: "Den här grafen lutar nedåt, värdet minskar. Vad är y när x = 4?"
      hint1: "Gå upp från 4 till linjen, samma metod även när linjen lutar nedåt."
      answer: ["6"]
      solution: |
        Vid x = 4 ligger linjen på y = **6**.
      graf:
        typ: linjär
        k: -1
        m: 10
        xmax: 6
        ymax: 12
        ySteg: 1

    - equation: "Samma graf. Var skär linjen y-axeln?"
      hint1: "Vid x = 0."
      answer: ["10"]
      solution: |
        Linjen skär y-axeln i **10**.
      graf:
        typ: linjär
        k: -1
        m: 10
        xmax: 6
        ymax: 12
        ySteg: 1

    - equation: "Grafen visar en brant linjär funktion som startar i origo. Vad är y när x = 2?"
      hint1: "Gå upp från 2 till linjen, läs av höjden."
      answer: ["6"]
      solution: |
        Vid x = 2 ligger linjen på y = **6**.
      graf:
        typ: linjär
        k: 3
        m: 0
        xmax: 5
        ymax: 15
        ySteg: 3

    - equation: "Samma graf (y = 3x). Vid vilket x är y = 9?"
      hint1: "Börja vid 9 på y-axeln, gå höger till linjen, ner till x-axeln."
      answer: ["3"]
      solution: |
        Linjen är på höjden 9 när x = **3**.
      graf:
        typ: linjär
        k: 3
        m: 0
        xmax: 5
        ymax: 15
        ySteg: 3

prev: linjara-funktioner
prev_lesson_title: "Linjära funktioner"
next: funktionsbegreppet-fx
next_lesson_title: "Funktionsbegreppet f(x)"
---

## Läsa direkt ur bilden

När du har en graf framför dig behöver du ofta inte räkna, du kan **läsa av** värdena direkt.

## Hitta y när x är givet

1. Leta upp x-värdet på den **vågräta** axeln
2. Gå rakt **upp** tills du träffar linjen
3. Gå rakt **vänster** till y-axeln och läs av talet

> Vid x = 3 ligger linjen på höjden 7 → y = 7.

## Hitta x när y är givet

Samma sak fast baklänges: börja på y-axeln vid y-värdet, gå **höger** till linjen, gå **ner** till x-axeln.

## Var skär grafen y-axeln?

Det är punkten där linjen korsar den lodräta axeln, alltså värdet vid **x = 0**. För en linjär funktion är det startvärdet m.

> **Regel att skriva ner:** y för givet x → upp från x till linjen, vänster till y-axeln. x för givet y → höger från y till linjen, ner till x-axeln.
