---
slug: "omlasning-1a/funktioner/exponentialekvationer-2"
title: "Exponentialekvationer 2"
course: omlasning-1a
moment: funktioner
moment_title: "Funktioner"
lesson_number: 8
lesson_total: 10

success_criteria:
  - Använda y = C · a^x i vardagsnära situationer (sparande, bakterier, värdeminskning)
  - Beräkna y för ett givet x
  - Känna igen om en graf visar en växande eller avtagande exponentialfunktion

bank:
  - question: "200 bakterier dubblas varje timme: y = 200 · 2^x. Hur många efter 3 timmar?"
    answer: "1 600"
  - question: "Beräkna y i y = 300 · 2^x när x = 2."
    answer: "1 200"
  - question: "En graf som sjunker mot noll — växer eller avtar funktionen?"
    answer: "Avtar (a < 1)."
  - question: "1 000 kr med 5 % ränta: vad är y när x = 0?"
    answer: "1 000 kr"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

worked_example: |
  Samma formel `y = C · a^x` används i många vardagssituationer. Det enda du gör är att hitta C och a, och sedan sätta in x.

  ## Bakterier som dubblas

  *200 bakterier dubblas varje timme. Hur många efter 3 timmar?*

  - C = 200 (start), a = 2 (dubblas) → y = 200 · 2^x

  | Steg | Räkning | Resultat |
  |---|---|---|
  | Sätt in x = 3 | 200 · 2^3 | — |
  | Potensen först | 2^3 = 8 | — |
  | Multiplicera | 200 · 8 | **1 600 bakterier** |

  ## Växer eller avtar — från grafen

  Följ kurvan från vänster till höger. **Stiger** den brant uppåt → växer (a > 1). **Sjunker** den mot noll → avtar (a < 1).

exercises:
  E:
    - equation: "Ett bakteriebestånd börjar på 200 och dubblas varje timme: y = 200 · 2^x. Hur många bakterier finns efter 3 timmar?"
      hint1: "Sätt in x = 3. Räkna 2^3 först, multiplicera sedan med 200."
      hint2: "2^3 = 8, sedan 200 · 8."
      answer: ["1600", "1 600"]
      solution: |
        2^3 = 8
        y = 200 · 8 = **1 600 bakterier**

    - equation: "Beräkna y i y = 300 · 2^x när x = 2."
      hint1: "2^2 först, sedan · 300."
      answer: ["1200", "1 200"]
      solution: |
        2^2 = 4
        y = 300 · 4 = **1 200**

    - equation: "Grafen visar en exponentialfunktion. Vad är startvärdet C — där kurvan skär y-axeln?"
      hint1: "Startvärdet är y-värdet vid x = 0. Läs av var kurvan börjar."
      answer: ["200"]
      solution: |
        Vid x = 0 startar kurvan på y = **200** → C = 200.
      graf:
        typ: exponentiell
        C: 200
        a: 2
        xmax: 3
        ymax: 1600
        ySteg: 200
        punkter: [[0, 200]]

    - equation: "Växer eller avtar funktionen som den här grafen visar?"
      hint1: "Följ kurvan från vänster till höger. Stiger den eller sjunker den?"
      answer: ["avtar", "Avtar", "minskar"]
      solution: |
        Kurvan sjunker mot noll → funktionen **avtar** (a < 1).
      graf:
        typ: exponentiell
        C: 1000
        a: 0.5
        xmax: 4
        ymax: 1000
        ySteg: 200
        punkter: [[0, 1000]]

    - equation: "Beräkna y i y = 80 · 2^x när x = 4."
      hint1: "2^4 = 16, sedan · 80."
      answer: ["1280", "1 280"]
      solution: |
        2^4 = 16
        y = 80 · 16 = **1 280**

    - equation: "1 000 kr sätts in med 5 % ränta: y = 1000 · 1,05^x. Hur mycket finns vid x = 0?"
      hint1: "1,05^0 = 1. Allt upphöjt till 0 är 1."
      answer: ["1000", "1 000", "1000 kr"]
      solution: |
        y = 1000 · 1,05^0 = 1000 · 1 = **1 000 kr** (startvärdet)

    - equation: "Beräkna y i y = 100 · 3^x när x = 2."
      hint1: "3^2 = 9, sedan · 100."
      answer: ["900"]
      solution: |
        3^2 = 9
        y = 100 · 9 = **900**

prev: exponentialekvationer
prev_lesson_title: "Exponentialekvationer"
next: exponentialekvationer-fran-graf
next_lesson_title: "Exponentialekvationer från graf"
---

## Samma formel, verkliga situationer

`y = C · a^x` dyker upp överallt: sparande, bakterier, befolkning, värdeminskning. Knepet är alltid detsamma — hitta **C** (start) och **a** (faktor), sätt sedan in x.

## Exempel: bakterier

*200 bakterier dubblas varje timme.*

- C = 200, a = 2 → `y = 200 · 2^x`
- Efter 3 timmar: `200 · 2^3 = 200 · 8 = 1 600`

## Exempel: värdeminskning

*En mobil värd 4 000 kr tappar 20 % per år.*

- C = 4 000, a = 0,80 → `y = 4000 · 0,80^x`

## Växer eller avtar — kolla grafen

- Kurvan **stiger** brant → växer (a > 1)
- Kurvan **sjunker** mot noll → avtar (a < 1)

Båda börjar på startvärdet C där de skär y-axeln (x = 0).

> **Regel att skriva ner:** hitta C (start) och a (faktor) ur situationen, skriv y = C · a^x, sätt in x och räkna potensen först.
