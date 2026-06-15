---
slug: "omlasning-1a/sannolikhet/komplementhandelse"
title: "Komplementhändelse"
course: omlasning-1a
moment: sannolikhet
moment_title: "Sannolikhet"
lesson_number: 3
lesson_total: 4

success_criteria:
  - Förstå att P(inte A) = 1 − P(A)
  - Räkna ut sannolikheten för att något INTE händer
  - Växla mellan bråk och decimaltal

bank:
  - question: "P(det regnar) = 0,3. P(det inte regnar)?"
    answer: "0,7"
  - question: "P(6:a på tärning) = 1/6. P(inte 6:a)?"
    answer: "5/6"
  - question: "Hur räknar man komplementhändelsen?"
    answer: "1 minus sannolikheten för händelsen."
  - question: "P(vinst) = 0,25. P(ingen vinst)?"
    answer: "0,75"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLScERrVGk3yRXJSYH2u4InFu0wvQZUjWqr6w0IatGHySRHryXA/viewform"

worked_example: |
  **Komplementhändelsen** är motsatsen: att händelsen INTE inträffar. Eftersom något antingen händer eller inte händer, blir summan alltid 1.

  ```
  P(inte A) = 1 − P(A)
  ```

  ## 1. Med decimaltal

  *Sannolikheten att det regnar är 0,3. Vad är sannolikheten att det inte regnar?*

  → P(inte regn) = 1 − 0,3 = **0,7**

  ## 2. Med bråk

  *P(6:a på en tärning) = 1/6. P(inte 6:a)?*

  → 1 − 1/6 = 6/6 − 1/6 = **5/6**

  (Det stämmer: fem av sidorna är *inte* en 6:a.)

exercises:
  E:
    - equation: "Sannolikheten att det regnar imorgon är 0,3. Vad är sannolikheten att det INTE regnar?"
      hint1: "P(inte A) = 1 − P(A)."
      answer: ["0,7", "0.7"]
      solution: |
        1 − 0,3 = **0,7**

    - equation: "P(att få en 6:a på en tärning) = 1/6. Vad är P(att INTE få en 6:a)?"
      hint1: "1 − 1/6. Skriv 1 som 6/6."
      answer: ["5/6"]
      solution: |
        1 − 1/6 = 6/6 − 1/6 = **5/6**

    - equation: "Sannolikheten att vinna på en lott är 0,25. Vad är sannolikheten att INTE vinna?"
      hint1: "1 − 0,25."
      answer: ["0,75", "0.75"]
      solution: |
        1 − 0,25 = **0,75**

    - equation: "Sannolikheten att bussen kommer i tid är 0,9. Vad är sannolikheten att den INTE kommer i tid?"
      hint1: "1 − 0,9."
      answer: ["0,1", "0.1"]
      solution: |
        1 − 0,9 = **0,1**

    - equation: "Du slår en tärning. Vad är sannolikheten att INTE få en 1:a?"
      hint1: "P(1:a) = 1/6. Komplementet är 1 − 1/6."
      answer: ["5/6"]
      solution: |
        1 − 1/6 = **5/6** (fem av sidorna är inte en 1:a)

    - equation: "En påse har 10 kulor, varav 4 är röda, så P(röd) = 0,4. Vad är sannolikheten att INTE dra en röd?"
      hint1: "1 − 0,4."
      answer: ["0,6", "0.6"]
      solution: |
        1 − 0,4 = **0,6**

    - equation: "Sannolikheten att klara ett prov är 0,85. Vad är sannolikheten att INTE klara det?"
      hint1: "1 − 0,85."
      answer: ["0,15", "0.15"]
      solution: |
        1 − 0,85 = **0,15**

prev: beroende-sannolikhet
prev_lesson_title: "Beroende sannolikhet"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Sannolikhet"
---

## Motsatsen till en händelse

Ibland är det enklare att räkna ut sannolikheten för att något **inte** händer. Det kallas **komplementhändelsen**.

Eftersom en händelse antingen inträffar eller inte inträffar, är summan av de två alltid **1** (säkert):

```
P(inte A) = 1 − P(A)
```

## Med decimaltal

> P(regn) = 0,3 → P(inte regn) = 1 − 0,3 = **0,7**

## Med bråk

Skriv om 1 så att nämnaren stämmer:

> P(6:a) = 1/6 → P(inte 6:a) = 1 − 1/6 = 6/6 − 1/6 = **5/6**

## Varför det är användbart

Ibland är "minst en" krångligt att räkna direkt — då räknar man i stället ut "ingen alls" och tar 1 minus det. Komplementet är ofta genvägen.

> **Regel att skriva ner:** P(inte A) = 1 − P(A). Summan av händelsen och dess komplement är alltid 1.
