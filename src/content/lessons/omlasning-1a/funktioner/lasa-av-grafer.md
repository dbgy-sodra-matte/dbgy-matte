---
slug: "omlasning-1a/funktioner/lasa-av-grafer"
title: "Läsa av grafer"
course: omlasning-1a
moment: funktioner
moment_title: "Funktioner"
lesson_number: 5
lesson_total: 10

success_criteria:
  - Läsa av y-värdet för ett givet x på en graf
  - Läsa av vilket x som ger ett visst y
  - Hitta var grafen skär y-axeln

bank:
  - question: "Hur hittar du y för ett givet x på en graf?"
    answer: "Gå upp från x-värdet till linjen och läs av höjden."
  - question: "Var skär en graf y-axeln?"
    answer: "Vid x = 0."
  - question: "Vad menas med att läsa av en graf?"
    answer: "Att hitta värden direkt ur bilden i stället för att räkna."

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

worked_example: |
  Att **läsa av** en graf är att hitta värden direkt ur bilden.

  ## Hitta y när x är givet

  1. Leta upp x-värdet på den **vågräta** axeln
  2. Gå rakt **upp** till linjen
  3. Gå rakt **vänster** till y-axeln och läs av

  ## Hitta x när y är givet

  Samma sak baklänges: börja på y-axeln, gå höger till linjen, gå ner till x-axeln.

  ## Var skär grafen y-axeln?

  Det är värdet där linjen korsar den lodräta axeln — alltså vid **x = 0**.

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

    - equation: "Grafen visar en linjär funktion. Vad är y när x = 4?"
      hint1: "Gå upp från 4 till linjen."
      answer: ["6"]
      solution: |
        Vid x = 4 ligger linjen på y = **6**.
      graf:
        typ: linjär
        k: 1
        m: 2
        xmax: 6
        ymax: 10
        ySteg: 1

    - equation: "Samma graf. Var skär linjen y-axeln?"
      hint1: "Vid x = 0."
      answer: ["2"]
      solution: |
        Linjen skär y-axeln i **2**.
      graf:
        typ: linjär
        k: 1
        m: 2
        xmax: 6
        ymax: 10
        ySteg: 1

    - equation: "Grafen visar en linjär funktion. Vad är y när x = 2?"
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
        ySteg: 1

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
        ySteg: 1

prev: linjara-funktioner
prev_lesson_title: "Linjära funktioner"
next: funktionsbegreppet-fx
next_lesson_title: "Funktionsbegreppet f(x)"
---

## Läsa direkt ur bilden

När du har en graf framför dig behöver du ofta inte räkna — du kan **läsa av** värdena direkt.

## Hitta y när x är givet

1. Leta upp x-värdet på den **vågräta** axeln
2. Gå rakt **upp** tills du träffar linjen
3. Gå rakt **vänster** till y-axeln och läs av talet

> Vid x = 3 ligger linjen på höjden 7 → y = 7.

## Hitta x när y är givet

Samma sak fast baklänges: börja på y-axeln vid y-värdet, gå **höger** till linjen, gå **ner** till x-axeln.

## Var skär grafen y-axeln?

Det är punkten där linjen korsar den lodräta axeln — alltså värdet vid **x = 0**. För en linjär funktion är det startvärdet m.

> **Regel att skriva ner:** y för givet x → upp från x till linjen, vänster till y-axeln. x för givet y → höger från y till linjen, ner till x-axeln.
