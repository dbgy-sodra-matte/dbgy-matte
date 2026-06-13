---
slug: "omlasning/algebra/potenser-och-rotter"
title: "Potenser och rötter"
course: omlasning
moment: algebra
moment_title: "Algebra"
lesson_number: 8
lesson_total: 8

success_criteria:
  - Beräkna värdet av en potens (t.ex. 2⁴ = 16)
  - Använda potenslagarna för multiplikation och division (finns på formelbladet!)
  - Veta vad upphöjt till 0 blir
  - Beräkna kvadratroten ur ett tal

bank:
  - question: "Beräkna: 2³"
    answer: "8"
  - question: "Förenkla: a⁴ · a³"
    answer: "a⁷"
  - question: "Beräkna: √64"
    answer: "8"
  - question: "Förenkla: a⁸ / a⁵"
    answer: "a³"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — sen är hela Algebra-området klart och du kan anmäla dig till tenta-av!

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSdqjyzwdNACQzN9Xe3DTx7EsbfJ6uGcm1sWY5JNWBS9QkTWpQ/viewform"

widget: "potens-leksak/v1"
widget_height: 560

worked_example: |
  ## 1. Vad en potens ÄR

  `2⁴` betyder "multiplicera 2 med sig självt 4 gånger":

  | Potens | Utskrivet | Värde |
  |---|---|---|
  | 2⁴ | 2 · 2 · 2 · 2 | **16** |
  | 3³ | 3 · 3 · 3 | **27** |
  | 10⁵ | 10 · 10 · 10 · 10 · 10 | **100 000** |

  > Fällan: 2⁴ är INTE 2 · 4 = 8. Det är 2 · 2 · 2 · 2 = 16.

  ## 2. Multiplikationslagen — varför den funkar

  Förenkla `a² · a³`.

  | Steg | Vad det betyder | Resultat |
  |---|---|---|
  | Skriv ut | (a · a) · (a · a · a) | — |
  | Räkna a:na | fem stycken | a⁵ |
  | Genvägen | addera exponenterna: 2 + 3 | **a⁵** |

  ## 3. Divisionslagen

  Förenkla `a⁵ / a²`.

  | Steg | Vad det betyder | Resultat |
  |---|---|---|
  | Skriv ut | (a · a · a · a · a) / (a · a) | — |
  | Förkorta bort två a | tre kvar uppe | a³ |
  | Genvägen | subtrahera exponenterna: 5 − 2 | **a³** |

  > Lagarna står på formelbladet — du behöver inte memorera dem, men du måste
  > veta VILKEN lag som används när.

exercises:
  E:
    - equation: "Beräkna: 3³"
      hint1: "Upphöjt till 3 betyder att talet multipliceras med sig självt tre gånger."
      hint2: "3 · 3 · 3. Räkna i två steg: 3 · 3 = 9, sedan 9 · 3."
      answer: ["27"]
      solution: |
        3³ = 3 · 3 · 3 = **27**

        > Inte 3 · 3 = 9 — exponenten säger TRE faktorer.

    - equation: "Beräkna: 10⁴"
      hint1: "Tiopotenser är snälla: exponenten visar antalet nollor."
      hint2: "10 · 10 · 10 · 10 — en etta följd av fyra nollor."
      answer: ["10000", "10 000"]
      solution: |
        10⁴ = 10 · 10 · 10 · 10 = **10 000**

    - equation: "Förenkla: a⁵ · a²"
      hint1: "Multiplikation av potenser med samma bas — vilken lag gäller? (Kolla formelbladet!)"
      hint2: "Vid multiplikation ADDERAS exponenterna: 5 + 2."
      answer: ["a⁷", "a^7"]
      solution: |
        a⁵ · a² = a⁵⁺² = **a⁷**

        (a·a·a·a·a) · (a·a) = sju a:n.

    - equation: "Förenkla: b⁸ / b³"
      hint1: "Division av potenser med samma bas — exponenterna ska inte adderas nu."
      hint2: "Vid division SUBTRAHERAS exponenterna: 8 − 3."
      answer: ["b⁵", "b^5"]
      solution: |
        b⁸ / b³ = b⁸⁻³ = **b⁵**

    - equation: "Förenkla: (a³)²"
      hint1: "En potens upphöjd till något — tredje lagen på formelbladet."
      hint2: "(a³)² betyder a³ · a³. Vid 'potens av potens' MULTIPLICERAS exponenterna: 3 · 2."
      answer: ["a⁶", "a^6"]
      solution: |
        (a³)² = a³·² = **a⁶**

        Kontroll: a³ · a³ = a³⁺³ = a⁶ ✓

    - equation: "Beräkna: 7⁰"
      hint1: "Vad som helst upphöjt till 0 har ett speciellt värde — och det är inte 0."
      hint2: "Mönstret: 7² = 49, 7¹ = 7, 7⁰ = ? (varje steg delas med 7)."
      answer: ["1"]
      solution: |
        7⁰ = **1**

        > Allt (utom 0) upphöjt till 0 är 1. Står på formelbladet.

    - equation: "Beräkna: √81"
      hint1: "Roten ur frågar: vilket tal gånger sig självt blir 81?"
      hint2: "9 · 9 = 81."
      answer: ["9"]
      solution: |
        √81 = **9**, eftersom 9² = 81.

        > Roten ur ger alltid plus-svaret.

prev: problemlosning-med-algebra
prev_lesson_title: "Problemlösning med algebra"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Algebra"
---

## Potenser — upprepad multiplikation

`2⁴` läses "två upphöjt till fyra" och betyder `2 · 2 · 2 · 2 = 16`. Talet som upprepas (2) kallas **bas**, antalet gånger (4) kallas **exponent**.

> **Vanligaste felet i hela delmomentet:** att räkna 2⁴ som 2 · 4. Exponenten säger *hur många faktorer*, inte vad du ska gånga med.

## Potenslagarna — de står på formelbladet

Du har dem framför dig på provet. Din uppgift är att veta **vilken som ska användas**:

| Situation | Lag | Exempel |
|---|---|---|
| Multiplikation, samma bas | addera exponenterna | a⁴ · a² = a⁶ |
| Division, samma bas | subtrahera exponenterna | a⁴ / a² = a² |
| Potens av potens | multiplicera exponenterna | (a⁴)² = a⁸ |
| Upphöjt till 0 | blir alltid 1 | a⁰ = 1 |

Minnesknep: **gånger → plus, delat → minus, potens-av-potens → gånger.**

## Rötter — baklängespotensen

`√49` frågar: *vilket tal i kvadrat blir 49?* Svar: 7.

| √ | Svar | För att |
|---|---|---|
| √25 | 5 | 5² = 25 |
| √64 | 8 | 8² = 64 |
| √100 | 10 | 10² = 100 |

Roten ur-knappen finns på miniräknaren. Och kopplingen bakåt: det är exakt det här verktyget du använde i delmoment 5 för att lösa `x² = a` — där la du själv till ±.

## 🎉 Sista delmomentet!

Är checkpointen klarad har du gått igenom hela Algebra-området. Nästa steg: gör "Redo att tenta?"-testet och anmäl dig till tenta-av på provtiden. Du är nära nu.
