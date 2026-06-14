---
slug: "omlasning-1a/funktioner/exponentialekvationer-fran-graf"
title: "Exponentialekvationer från graf"
course: omlasning-1a
moment: funktioner
moment_title: "Funktioner"
lesson_number: 9
lesson_total: 10

success_criteria:
  - Läsa av startvärdet C där kurvan skär y-axeln (x = 0)
  - Räkna ut förändringsfaktorn a från två punkter
  - Skriva ihop exponentialfunktionen y = C · a^x från en graf

bank:
  - question: "En graf skär y-axeln i 200. Vad är C?"
    answer: "200"
  - question: "Vid x = 0 är y = 100, vid x = 1 är y = 150. Vad är a?"
    answer: "1,5 (150/100)"
  - question: "C = 200 och a = 2. Skriv funktionen."
    answer: "y = 200 · 2^x"
  - question: "Hur räknar du ut a från två punkter?"
    answer: "Dela y-värdet vid x = 1 med y-värdet vid x = 0."

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — sen är hela Funktioner-området klart!

worked_example: |
  Att hitta funktionen från en graf är att hitta **C** och **a**.

  ## 1. Hitta C — där kurvan skär y-axeln

  C är y-värdet vid **x = 0** (startvärdet).

  *Kurvan går genom (0, 100), (1, 150).* → C = **100**.

  ## 2. Hitta a — dela y-värdena

  Dela y-värdet vid x = 1 med y-värdet vid x = 0:

  | Räkning | Resultat |
  |---|---|
  | a = y(1) / y(0) = 150 / 100 | **1,5** |

  ## 3. Skriv ihop funktionen

  > C = 100, a = 1,5 → **y = 100 · 1,5^x**

exercises:
  E:
    - equation: "Den här grafen visar en exponentialfunktion. Vad är startvärdet C — där kurvan skär y-axeln?"
      hint1: "C är y-värdet vid x = 0. Läs av var kurvan börjar."
      answer: ["300"]
      solution: |
        Vid x = 0 startar kurvan på y = **300** → C = 300.
      graf:
        typ: exponentiell
        C: 300
        a: 2
        xmax: 2
        ymax: 1200
        ySteg: 200
        punkter: [[0, 300], [1, 600]]

    - equation: "Använd samma graf. Vad är förändringsfaktorn a? (Dela y vid x = 1 med y vid x = 0.)"
      hint1: "y(1) = 600 och y(0) = 300. a = 600 / 300."
      answer: ["2"]
      solution: |
        a = 600 / 300 = **2** (värdet dubblas per steg).
      graf:
        typ: exponentiell
        C: 300
        a: 2
        xmax: 2
        ymax: 1200
        ySteg: 200
        punkter: [[0, 300], [1, 600]]

    - equation: "Skriv hela funktionen y = C · a^x för grafen ovan (C = 300, a = 2)."
      hint1: "Sätt in C och a i y = C · a^x."
      answer: ["y = 300 · 2^x", "300 · 2^x", "y=300·2^x", "300·2^x"]
      solution: |
        **y = 300 · 2^x**

    - equation: "Skriv funktionen som den här grafen visar. (Kurvan går genom (0, 100) och (1, 150).)"
      hint1: "C läser du av där kurvan skär y-axeln. a = y(1) / y(0)."
      hint2: "C = 100. a = 150 / 100 = 1,5."
      answer: ["y = 100 · 1,5^x", "100 · 1,5^x", "y=100·1,5^x", "y = 100·1.5^x"]
      solution: |
        C = 100, a = 150 / 100 = 1,5 → **y = 100 · 1,5^x**
      graf:
        typ: exponentiell
        C: 100
        a: 1.5
        xmax: 3
        ymax: 400
        ySteg: 50
        punkter: [[0, 100], [1, 150]]

    - equation: "Skriv funktionen som den här grafen visar. (Kurvan går genom (0, 50) och (1, 150).)"
      hint1: "C = 50. a = 150 / 50."
      answer: ["y = 50 · 3^x", "50 · 3^x", "y=50·3^x"]
      solution: |
        C = 50, a = 150 / 50 = 3 → **y = 50 · 3^x**
      graf:
        typ: exponentiell
        C: 50
        a: 3
        xmax: 2
        ymax: 500
        ySteg: 100
        punkter: [[0, 50], [1, 150]]

    - equation: "Vad är förändringsfaktorn a för den här grafen? (Tips: växer eller avtar den?)"
      hint1: "Läs av y(0) och y(1) och dela y(1) med y(0)."
      hint2: "y(0) = 1000 och y(1) = 900. a = 900 / 1000."
      answer: ["0,9", "0.9"]
      solution: |
        a = 900 / 1000 = **0,9**. Eftersom a < 1 avtar funktionen.
      graf:
        typ: exponentiell
        C: 1000
        a: 0.9
        xmax: 4
        ymax: 1000
        ySteg: 200
        punkter: [[0, 1000], [1, 900]]

    - equation: "Grafen går genom (0, 80), (1, 160) och (2, 320). Skriv funktionen y = C · a^x."
      hint1: "C är värdet vid x = 0. a är hur mycket det multipliceras per steg."
      hint2: "C = 80. a = 160 / 80 = 2. Kontroll: 320 / 160 = 2 ✓."
      answer: ["y = 80 · 2^x", "80 · 2^x", "y=80·2^x"]
      solution: |
        C = 80, a = 160 / 80 = 2 (och 320 / 160 = 2 ✓) → **y = 80 · 2^x**
      graf:
        typ: exponentiell
        C: 80
        a: 2
        xmax: 3
        ymax: 700
        ySteg: 100
        punkter: [[0, 80], [1, 160], [2, 320]]

prev: exponentialekvationer-2
prev_lesson_title: "Exponentialekvationer 2"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Funktioner"
---

## Hitta funktionen från en graf

Det här är baklängesriktningen: i stället för att rita från en funktion ska du **läsa ut funktionen** ur en graf. Du letar efter **C** och **a** och skriver `y = C · a^x`.

## Steg 1: hitta C (startvärdet)

C är y-värdet där kurvan skär y-axeln, alltså vid **x = 0**.

> Kurvan går genom (0, 100) → C = 100.

## Steg 2: hitta a (förändringsfaktorn)

Dela y-värdet vid x = 1 med y-värdet vid x = 0:

```
a = y(1) / y(0)
```

> (0, 100) och (1, 150): a = 150 / 100 = **1,5**

## Steg 3: skriv ihop

> C = 100, a = 1,5 → **y = 100 · 1,5^x**

Är a > 1 växer funktionen, är a < 1 avtar den.

## 🎉 Sista delmomentet!

Är checkpointen klarad har du gått igenom hela Funktioner-området. Gör "Redo att tenta?"-testet och anmäl dig till tenta-av.

> **Regel att skriva ner:** C = y vid x = 0. a = y(1) / y(0). Skriv y = C · a^x.
