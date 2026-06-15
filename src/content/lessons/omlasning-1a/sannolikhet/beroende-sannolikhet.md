---
slug: "omlasning-1a/sannolikhet/beroende-sannolikhet"
title: "Beroende sannolikhet"
course: omlasning-1a
moment: sannolikhet
moment_title: "Sannolikhet"
lesson_number: 2
lesson_total: 4

success_criteria:
  - Förstå att antalet ändras när du drar utan att lägga tillbaka
  - Räkna ut sannolikheten för den andra dragningen
  - Multiplicera sannolikheterna för att få "båda händelserna"

bank:
  - question: "Påse med 5 kulor. Du drar en och behåller den. Hur många är kvar?"
    answer: "4"
  - question: "6 kulor, 4 blå. Du drar en blå och behåller. Hur många blå kvar?"
    answer: "3"
  - question: "Hur räknar man P(båda händelserna)?"
    answer: "Multiplicera sannolikheterna."
  - question: "Påse 5 kulor 2 röda, dra 2 utan återläggning. P(båda röda)?"
    answer: "1/10"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar grunderna
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSc3IO2ENFw9m9CCfmhkEPmVhzxpXQCUV_wFjf2AA-18S5Tl3w/viewform"

worked_example: |
  När du drar något och **behåller det** (utan återläggning) ändras antalet inför nästa dragning. Då säger man att den andra händelsen är **beroende** av den första.

  ## 1. Antalet ändras

  *Påse med 6 kulor, 4 är blå. Du drar en blå och behåller den.*

  | Efter första draget | Antal |
  |---|---|
  | Blå kvar | 3 (en blå borta) |
  | Kulor totalt kvar | 5 (en kula borta) |

  → P(andra också blå) = 3/5

  ## 2. Sannolikheten för BÅDA — multiplicera

  *Påse med 5 kulor, 2 är röda. Du drar två utan att lägga tillbaka. P(båda röda)?*

  | Dragning | Sannolikhet |
  |---|---|
  | Första röd | 2/5 |
  | Andra röd (1 röd kvar av 4) | 1/4 |
  | **Båda röda** | 2/5 · 1/4 = 2/20 = **1/10** |

  > **Regel:** P(första OCH andra) = P(första) · P(andra, med det nya antalet).

exercises:
  E:
    - equation: "En påse har 5 kulor. Du drar en kula och behåller den. Hur många kulor är kvar i påsen?"
      hint1: "En kula är borta ur påsen."
      answer: ["4"]
      solution: |
        5 − 1 = **4 kulor kvar**

    - equation: "En påse har 6 kulor, varav 4 är blå. Du drar en blå och behåller den. Hur många blå är kvar?"
      hint1: "En av de blå är borta."
      answer: ["3"]
      solution: |
        4 − 1 = **3 blå kvar**

    - equation: "Samma påse: efter att du dragit en blå (och behållit den), hur många kulor finns kvar totalt?"
      hint1: "Det fanns 6, nu är en borta."
      answer: ["5"]
      solution: |
        6 − 1 = **5 kulor kvar totalt**

    - equation: "Det finns 3 blå kvar av totalt 5 kulor. Vad är sannolikheten att nästa kula du drar är blå?"
      hint1: "Gynnsamma (blå kvar) / möjliga (kulor kvar)."
      answer: ["3/5", "0,6", "0.6"]
      solution: |
        3 blå av 5 kulor → P = **3/5 = 0,6**

    - equation: "En påse har 4 kulor, varav 2 är röda. Du drar en röd och behåller den. Vad är sannolikheten att nästa också är röd?"
      hint1: "Efter draget: 1 röd kvar, 3 kulor totalt."
      answer: ["1/3", "0,333", "0.333"]
      solution: |
        Kvar: 1 röd av 3 kulor → P = **1/3**

    - equation: "En påse har 5 kulor, varav 2 är röda. Du drar två kulor utan att lägga tillbaka. Vad är sannolikheten att BÅDA är röda?"
      hint1: "Multiplicera: P(första röd) · P(andra röd med nya antalet)."
      hint2: "2/5 för första, sedan 1/4 för andra. Multiplicera."
      answer: ["1/10", "2/20", "0,1", "0.1"]
      solution: |
        Första röd: 2/5. Andra röd: 1 kvar av 4 → 1/4.
        P(båda) = 2/5 · 1/4 = 2/20 = **1/10 = 0,1**

    - equation: "En påse har 6 kulor, varav 3 är gröna. Du drar två utan att lägga tillbaka. Vad är sannolikheten att båda är gröna?"
      hint1: "P(första grön) = 3/6. P(andra grön) = 2/5. Multiplicera."
      answer: ["1/5", "6/30", "0,2", "0.2"]
      solution: |
        Första grön: 3/6. Andra grön: 2 kvar av 5 → 2/5.
        P(båda) = 3/6 · 2/5 = 6/30 = **1/5 = 0,2**

prev: sannolikhet-grunder
prev_lesson_title: "Sannolikhet (grunder)"
next: komplementhandelse
next_lesson_title: "Komplementhändelse"
---

## När antalet ändras

Säg att du drar en kula ur en påse och **behåller den**. Nu finns det en kula mindre — och kanske en färg mindre. Nästa dragning påverkas av den första. Det kallas **beroende sannolikhet**.

## Räkna den andra dragningen

Tänk i två steg: vad finns kvar efter första draget?

> Påse 6 kulor, 4 blå. Du drar en blå och behåller. Kvar: **3 blå av 5 kulor** → P(blå nästa) = 3/5.

Det viktiga är att **både täljaren och nämnaren** ändras: en blå borta (täljaren) och en kula borta (nämnaren).

## Sannolikheten för båda — multiplicera

Vill du veta sannolikheten att **båda** dragningarna blir röda, multiplicerar du:

```
P(första OCH andra) = P(första) · P(andra, med nya antalet)
```

> Påse 5 kulor, 2 röda, dra 2 utan återläggning:
> P(båda röda) = 2/5 · 1/4 = 2/20 = **1/10**

Tänk: först måste den första bli röd (2/5), och *sedan* den andra (nu 1 röd kvar av 4).

> **Regel att skriva ner:** Drar du utan att lägga tillbaka ändras antalet. P(båda) = gångra sannolikheterna, en för varje dragning.
