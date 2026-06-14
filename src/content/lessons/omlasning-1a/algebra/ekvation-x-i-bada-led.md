---
slug: "omlasning-1a/algebra/ekvation-x-i-bada-led"
title: "Ekvation med x i båda led"
course: omlasning-1a
moment: algebra
moment_title: "Algebra"
lesson_number: 3
lesson_total: 7

success_criteria:
  - Samla alla x på en sida och alla tal på den andra
  - Lösa ekvationer där x finns i båda leden
  - Kontrollera svaret genom insättning i båda leden

bank:
  - question: "Lös: 5x = 3x + 8"
    answer: "x = 4"
  - question: "Lös: 7x − 2 = 4x + 10"
    answer: "x = 4"
  - question: "Lös: 6x + 1 = 2x + 9"
    answer: "x = 2"
  - question: "Lös: 8x − 5 = 5x + 7"
    answer: "x = 4"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

widget: "ekvation-vag/v1"
widget_height: 560

worked_example: |
  När x finns i **båda** leden börjar du alltid likadant: **samla alla x på en sida**. Sedan är det en vanlig ekvation.

  ## Exempel

  Lös `5x − 3 = 3x + 7`.

  | Steg | Vad vi gör (samma i båda leden) | Resultat |
  |---|---|---|
  | Samla x på vänster | subtrahera 3x i båda leden | 2x − 3 = 7 |
  | Samla talen på höger | addera 3 i båda leden | 2x = 10 |
  | Dela med 2 | — | **x = 5** |

  **Kontroll:** vänster 5 · 5 − 3 = 22, höger 3 · 5 + 7 = 22 ✓

  > Tips: subtrahera bort det **mindre** antalet x, så slipper du minustecken framför x.

exercises:
  E:
    - equation: "Lös: 5x = 2x + 9"
      hint1: "Samla x: subtrahera 2x i båda leden så blir det 3x = 9."
      answer: ["3"]
      solution: |
        5x = 2x + 9
        3x = 9        [subtrahera 2x]
        x = 3         [dela med 3]

        Kontroll: vänster 5 · 3 = 15, höger 2 · 3 + 9 = 15 ✓

    - equation: "Lös: 7x = 3x + 16"
      hint1: "Subtrahera 3x i båda leden."
      answer: ["4"]
      solution: |
        7x = 3x + 16
        4x = 16       [subtrahera 3x]
        x = 4         [dela med 4]

        Kontroll: 7 · 4 = 28 och 3 · 4 + 16 = 28 ✓

    - equation: "Lös: 6x − 4 = 4x + 10"
      hint1: "Samla x på vänster (subtrahera 4x), samla talen på höger (addera 4)."
      hint2: "2x − 4 = 10 → 2x = 14."
      answer: ["7"]
      solution: |
        6x − 4 = 4x + 10
        2x − 4 = 10   [subtrahera 4x]
        2x = 14       [addera 4]
        x = 7         [dela med 2]

        Kontroll: 6 · 7 − 4 = 38 och 4 · 7 + 10 = 38 ✓

    - equation: "Lös: 8x − 3 = 5x + 9"
      hint1: "Subtrahera 5x, addera 3, dela med 3."
      answer: ["4"]
      solution: |
        8x − 3 = 5x + 9
        3x − 3 = 9    [subtrahera 5x]
        3x = 12       [addera 3]
        x = 4         [dela med 3]

        Kontroll: 8 · 4 − 3 = 29 och 5 · 4 + 9 = 29 ✓

    - equation: "Lös: 9x + 1 = 4x + 26"
      hint1: "Subtrahera 4x, subtrahera 1, dela med 5."
      answer: ["5"]
      solution: |
        9x + 1 = 4x + 26
        5x + 1 = 26   [subtrahera 4x]
        5x = 25       [subtrahera 1]
        x = 5         [dela med 5]

        Kontroll: 9 · 5 + 1 = 46 och 4 · 5 + 26 = 46 ✓

    - equation: "Lös: 4x + 7 = x + 19"
      hint1: "x betyder 1x. Subtrahera x i båda leden."
      hint2: "3x + 7 = 19 → 3x = 12."
      answer: ["4"]
      solution: |
        4x + 7 = x + 19
        3x + 7 = 19   [subtrahera x]
        3x = 12       [subtrahera 7]
        x = 4         [dela med 3]

        Kontroll: 4 · 4 + 7 = 23 och 4 + 19 = 23 ✓

    - equation: "Lös: 10x − 8 = 7x + 7"
      hint1: "Subtrahera 7x, addera 8, dela med 3."
      answer: ["5"]
      solution: |
        10x − 8 = 7x + 7
        3x − 8 = 7    [subtrahera 7x]
        3x = 15       [addera 8]
        x = 5         [dela med 3]

        Kontroll: 10 · 5 − 8 = 42 och 7 · 5 + 7 = 42 ✓

prev: grundlaggande-ekvationer
prev_lesson_title: "Grundläggande ekvationer"
next: faktorisering
next_lesson_title: "Faktorisering"
---

## x på båda sidor

Ibland står det x i **båda** leden, t.ex. `5x − 3 = 3x + 7`. Det är fortfarande balansmetoden — du behöver bara ett extra första steg.

## Steg 1: samla alla x på en sida

Subtrahera bort x-termen från den ena sidan i **båda** leden. Tips: ta bort det **mindre** antalet x, så slipper du ett minustecken framför x.

> `5x − 3 = 3x + 7` → subtrahera 3x i båda leden → `2x − 3 = 7`

## Steg 2: vanlig ekvation

Nu är det en helt vanlig tvåstegsekvation:

> `2x − 3 = 7` → addera 3 → `2x = 10` → dela med 2 → `x = 5`

## Kontrollen

Sätt in svaret i **båda** leden var för sig. Får du samma tal är det rätt:

> vänster: 5 · 5 − 3 = 22, höger: 3 · 5 + 7 = 22 ✓

> **Regel att skriva ner:** Samla x på en sida (ta bort det mindre antalet x). Lös sedan som en vanlig ekvation. Kontrollera i båda leden.
