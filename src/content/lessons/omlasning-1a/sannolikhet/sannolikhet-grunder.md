---
slug: "omlasning-1a/sannolikhet/sannolikhet-grunder"
title: "Sannolikhet (grunder)"
course: omlasning-1a
moment: sannolikhet
moment_title: "Sannolikhet"
lesson_number: 1
lesson_total: 3

success_criteria:
  - Förstå att sannolikhet = gynnsamma utfall / möjliga utfall
  - Räkna ut sannolikheten för en händelse med tärning, kulor eller lottning
  - Skriva svaret som bråk eller decimaltal

bank:
  - question: "Vad är sannolikheten att få en 6:a på en tärning?"
    answer: "1/6"
  - question: "Vad är sannolikheten att få krona på en slant?"
    answer: "1/2"
  - question: "Påse med 5 kulor, 2 är röda. P(röd)?"
    answer: "2/5"
  - question: "Vilken formel ger sannolikheten?"
    answer: "gynnsamma utfall / möjliga utfall"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

worked_example: |
  Sannolikhet mäter **hur troligt** något är, som ett tal mellan 0 (omöjligt) och 1 (säkert).

  ```
  Sannolikhet = gynnsamma utfall / möjliga utfall
  ```

  ## 1. Tärning — P(6:a)

  | Del | Antal |
  |---|---|
  | Gynnsamma (en 6:a) | 1 |
  | Möjliga (sidorna 1–6) | 6 |

  → P(6) = **1/6**

  ## 2. Tärning — P(jämnt tal)

  Jämna tal på en tärning: 2, 4, 6 → 3 gynnsamma av 6 möjliga.

  → P(jämnt) = 3/6 = **1/2 = 0,5**

  ## 3. Kulor i en påse

  *10 kulor, 4 är gröna. Du drar en utan att titta.*

  → P(grön) = 4/10 = **2/5 = 0,4**

exercises:
  E:
    - equation: "Du slår en tärning. Vad är sannolikheten att få en 4:a?"
      hint1: "Gynnsamma utfall (en 4:a) delat med möjliga utfall (1–6)."
      answer: ["1/6"]
      solution: |
        En gynnsam (4:an) av sex möjliga → P = **1/6**

    - equation: "Du slår en tärning. Vad är sannolikheten att få ett jämnt tal?"
      hint1: "Jämna tal på tärningen: 2, 4 och 6. Hur många av sex?"
      answer: ["1/2", "3/6", "0,5", "0.5"]
      solution: |
        Jämna tal: 2, 4, 6 → 3 av 6 → P = 3/6 = **1/2 = 0,5**

    - equation: "En påse har 10 kulor, varav 4 är gröna. Vad är sannolikheten att dra en grön?"
      hint1: "Gynnsamma (gröna) / möjliga (alla kulor)."
      answer: ["2/5", "4/10", "0,4", "0.4"]
      solution: |
        4 gröna av 10 → P = 4/10 = **2/5 = 0,4**

    - equation: "En påse har 20 kulor, varav 5 är röda. Vad är sannolikheten att dra en röd?"
      hint1: "5 röda av 20. Förkorta gärna bråket."
      answer: ["1/4", "5/20", "0,25", "0.25"]
      solution: |
        5 av 20 → P = 5/20 = **1/4 = 0,25**

    - equation: "Du slår en tärning. Vad är sannolikheten att få ett tal större än 4?"
      hint1: "Tal större än 4 på en tärning: 5 och 6."
      answer: ["1/3", "2/6", "0,333", "0.333"]
      solution: |
        Större än 4: 5 och 6 → 2 av 6 → P = 2/6 = **1/3**

    - equation: "I en klass med 25 elever är 10 pojkar. Vad är sannolikheten att en slumpvis vald elev är pojke?"
      hint1: "10 pojkar av 25 elever."
      answer: ["2/5", "10/25", "0,4", "0.4"]
      solution: |
        10 av 25 → P = 10/25 = **2/5 = 0,4**

    - equation: "Ett lyckohjul har 8 lika stora fält. Ett av dem ger vinst. Vad är sannolikheten att vinna på ett snurr?"
      hint1: "Ett gynnsamt fält av åtta möjliga."
      answer: ["1/8", "0,125", "0.125"]
      solution: |
        1 av 8 → P = **1/8 = 0,125**

next: beroende-sannolikhet
next_lesson_title: "Beroende sannolikhet"
---

## Vad är sannolikhet?

Sannolikhet är ett mått på **hur troligt** något är. Det är ett tal mellan 0 och 1:

- **0** = omöjligt (kan aldrig hända)
- **1** = säkert (händer alltid)
- **0,5** = lika troligt som inte

## Grundformeln

```
Sannolikhet = gynnsamma utfall / möjliga utfall
```

- **Möjliga utfall** = allt som kan hända (tärningens 6 sidor, alla kulor i påsen)
- **Gynnsamma utfall** = de du frågar efter (en 6:a, en röd kula)

## Exempel

**Tärning, P(6:a):** 1 gynnsam av 6 möjliga → `1/6`.

**Tärning, P(jämnt):** jämna tal är 2, 4, 6 → 3 av 6 → `3/6 = 1/2 = 0,5`.

**Kulor:** 10 kulor, 4 gröna → `4/10 = 2/5 = 0,4`.

## Bråk eller decimal

Du kan skriva svaret som **bråk** (4/10), **förkortat bråk** (2/5) eller **decimaltal** (0,4) — alla är rätt. Förkorta gärna bråket om det går.

> **Regel att skriva ner:** P = gynnsamma / möjliga. Räkna hur många utfall du vill ha, dela med hur många som finns totalt.
