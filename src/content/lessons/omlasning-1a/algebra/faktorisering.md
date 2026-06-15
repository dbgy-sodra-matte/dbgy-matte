---
slug: "omlasning-1a/algebra/faktorisering"
title: "Faktorisering"
course: omlasning-1a
moment: algebra
moment_title: "Algebra"
lesson_number: 4
lesson_total: 8

success_criteria:
  - Hitta den största gemensamma faktorn i ett uttryck
  - Bryta ut ett tal ur ett uttryck (6x + 9 = 3(2x + 3))
  - Bryta ut x ur ett uttryck (x² + 4x = x(x + 4))
  - Kontrollera genom att multiplicera in igen

bank:
  - question: "Faktorisera: 6x + 9"
    answer: "3(2x + 3)"
  - question: "Faktorisera: x² + 4x"
    answer: "x(x + 4)"
  - question: "Faktorisera: 10x + 15"
    answer: "5(2x + 3)"
  - question: "Faktorisera: 8x + 12"
    answer: "4(2x + 3)"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLScRNY8-cHWA6IW4tiAqhzLVbtxjS4-3ISl_SGmR8q1_903cGQ/viewform"

worked_example: |
  Faktorisering är **baklänges** mot att multiplicera in. I stället för att lösa upp en parentes skapar du en.

  ## 1. Bryt ut ett tal

  Hitta det **största talet som delar båda termerna** och ställ det utanför en parentes.

  *6x + 9* — vad delar både 6 och 9? **3**.

  | Term | 6x | 9 |
  |---|---|---|
  | delat med 3 | 2x | 3 |

  → **3(2x + 3)**

  **Kontroll:** 3 · 2x = 6x och 3 · 3 = 9 ✓

  ## 2. Bryt ut x

  Om **varje** term innehåller x kan du bryta ut x.

  *x² + 4x* — båda har ett x. Bryt ut det:

  → **x(x + 4)**

  **Kontroll:** x · x = x² och x · 4 = 4x ✓

exercises:
  E:
    - equation: "Faktorisera: 6x + 9"
      hint1: "Vilket är största talet som delar både 6 och 9?"
      hint2: "3 delar båda. 6x/3 = 2x och 9/3 = 3."
      answer: ["3(2x + 3)", "3(3 + 2x)"]
      solution: |
        6x + 9 = **3(2x + 3)**

        Kontroll: 3 · 2x = 6x och 3 · 3 = 9 ✓

    - equation: "Faktorisera: 8x + 12"
      hint1: "Största gemensamma talet i 8 och 12?"
      hint2: "4 delar båda. 8x/4 = 2x och 12/4 = 3."
      answer: ["4(2x + 3)", "4(3 + 2x)"]
      solution: |
        8x + 12 = **4(2x + 3)**

        Kontroll: 4 · 2x = 8x och 4 · 3 = 12 ✓

    - equation: "Faktorisera: 10x + 15"
      hint1: "Vilket tal delar både 10 och 15?"
      answer: ["5(2x + 3)", "5(3 + 2x)"]
      solution: |
        10x + 15 = **5(2x + 3)**

        Kontroll: 5 · 2x = 10x och 5 · 3 = 15 ✓

    - equation: "Faktorisera: 4x + 10"
      hint1: "Största gemensamma talet i 4 och 10?"
      hint2: "2 delar båda. 4x/2 = 2x och 10/2 = 5."
      answer: ["2(2x + 5)", "2(5 + 2x)"]
      solution: |
        4x + 10 = **2(2x + 5)**

        Kontroll: 2 · 2x = 4x och 2 · 5 = 10 ✓

    - equation: "Faktorisera: x² + 5x"
      hint1: "Båda termerna innehåller x. Bryt ut x."
      answer: ["x(x + 5)", "x(5 + x)"]
      solution: |
        x² + 5x = **x(x + 5)**

        Kontroll: x · x = x² och x · 5 = 5x ✓

    - equation: "Faktorisera: x² + 3x"
      hint1: "Bryt ut x ur båda termerna."
      answer: ["x(x + 3)", "x(3 + x)"]
      solution: |
        x² + 3x = **x(x + 3)**

        Kontroll: x · x = x² och x · 3 = 3x ✓

    - equation: "Faktorisera: 6x + 15"
      hint1: "Vilket tal delar både 6 och 15?"
      answer: ["3(2x + 5)", "3(5 + 2x)"]
      solution: |
        6x + 15 = **3(2x + 5)**

        Kontroll: 3 · 2x = 6x och 3 · 5 = 15 ✓

prev: ekvation-x-i-bada-led
prev_lesson_title: "Ekvation med x i båda led"
next: ekvationer-med-parenteser
next_lesson_title: "Ekvationer med parenteser"
---

## Faktorisering = baklänges

I delmomentet om förenkling **multiplicerade du in** ett tal i en parentes: `3(2x + 3) = 6x + 9`. Faktorisering är samma sak fast åt andra hållet: du tar `6x + 9` och **skapar** parentesen `3(2x + 3)`.

## Bryt ut ett tal

Leta efter det **största talet som delar alla termer**. Ställ det utanför parentesen, och dela varje term med det:

> `6x + 9` — 3 delar både 6 och 9 → `3(2x + 3)`

## Bryt ut x

Om **varje** term innehåller x kan du bryta ut ett x i stället:

> `x² + 4x` — båda har x → `x(x + 4)`

(Kom ihåg: `x² = x · x`, så `x² / x = x`.)

## Kontrollen — multiplicera in igen

Faktorisering kan du alltid kolla själv: multiplicera in och se om du får tillbaka det du började med.

> `3(2x + 3) = 6x + 9` ✓

> **Regel att skriva ner:** Hitta största gemensamma faktorn (tal eller x). Ställ den utanför parentesen. Kontrollera genom att multiplicera in igen.
