---
slug: "omlasning-1a/algebra/grundlaggande-ekvationer"
title: "Grundläggande ekvationer"
course: omlasning-1a
moment: algebra
moment_title: "Algebra"
lesson_number: 2
lesson_total: 7

success_criteria:
  - Lösa ekvationer i ett steg (x + a = b och ax = b)
  - Lösa ekvationer i två steg (ax + b = c)
  - Göra samma sak i båda leden (balansmetoden)
  - Kontrollera svaret genom att sätta in det i ekvationen

bank:
  - question: "Lös: x + 5 = 12"
    answer: "x = 7"
  - question: "Lös: 6x = 42"
    answer: "x = 7"
  - question: "Lös: 2x + 4 = 10"
    answer: "x = 3"
  - question: "Lös: x − 2 = 9"
    answer: "x = 11"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar förra delmomentet
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

widget: "ekvation-vag/v1"
widget_height: 560

worked_example: |
  En ekvation är en **likhet med ett okänt tal**: `2x + 5 = 17`. Att lösa den = ta reda på vilket x som gör likheten sann.

  ## Balansmetoden — vågen

  Tänk på ekvationen som en **våg** som balanserar. Så länge du gör **samma sak i båda leden** håller den balansen. Målet: få x **ensamt**.

  ## 1. Ett steg

  Lös `x + 6 = 10`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Bli av med +6 | subtrahera 6 i båda leden | **x = 4** |

  **Kontroll:** 4 + 6 = 10 ✓

  ## 2. Två steg

  Lös `3x + 4 = 19`. Skala av **längst bort först**.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Bli av med +4 | subtrahera 4 i båda leden | 3x = 15 |
  | Bli av med 3:an | dela båda leden med 3 | **x = 5** |

  **Kontroll:** 3 · 5 + 4 = 19 ✓

exercises:
  E:
    - equation: "Lös: x + 7 = 12"
      hint1: "x:et är nästan ensamt — bara +7 i vägen. Gör tvärtom."
      hint2: "Subtrahera 7 i båda leden."
      answer: ["5"]
      solution: |
        x + 7 = 12
        x = 5         [subtrahera 7]

        Kontroll: 5 + 7 = 12 ✓

    - equation: "Lös: x − 4 = 9"
      hint1: "Motsatsen till −4 är att addera 4 — i båda leden."
      answer: ["13"]
      solution: |
        x − 4 = 9
        x = 13        [addera 4]

        Kontroll: 13 − 4 = 9 ✓

    - equation: "Lös: 6x = 42"
      hint1: "6x betyder 6 gånger x. Motsatsen är att dela med 6."
      answer: ["7"]
      solution: |
        6x = 42
        x = 7         [dela båda leden med 6]

        Kontroll: 6 · 7 = 42 ✓

    - equation: "Lös: 3x = 27"
      hint1: "Dela båda leden med 3."
      answer: ["9"]
      solution: |
        3x = 27
        x = 9         [dela med 3]

        Kontroll: 3 · 9 = 27 ✓

    - equation: "Lös: 2x + 5 = 17"
      hint1: "Två steg: bli av med +5 först, sedan 2:an."
      hint2: "Subtrahera 5 → 2x = 12. Dela sedan med 2."
      answer: ["6"]
      solution: |
        2x + 5 = 17
        2x = 12       [subtrahera 5]
        x = 6         [dela med 2]

        Kontroll: 2 · 6 + 5 = 17 ✓

    - equation: "Lös: 4x − 3 = 21"
      hint1: "Bli av med −3 först (addera 3), sedan dela med 4."
      hint2: "4x = 24, sedan x = 24/4."
      answer: ["6"]
      solution: |
        4x − 3 = 21
        4x = 24       [addera 3]
        x = 6         [dela med 4]

        Kontroll: 4 · 6 − 3 = 21 ✓

    - equation: "Lös: 5x + 2 = 22"
      hint1: "Subtrahera 2, sedan dela med 5."
      answer: ["4"]
      solution: |
        5x + 2 = 22
        5x = 20       [subtrahera 2]
        x = 4         [dela med 5]

        Kontroll: 5 · 4 + 2 = 22 ✓

prev: forenkling
prev_lesson_title: "Förenkling"
next: ekvation-x-i-bada-led
next_lesson_title: "Ekvation med x i båda led"
---

## Vad är en ekvation?

En ekvation är en **likhet** med ett okänt tal, t.ex. `2x + 5 = 17`. Vänster sida och höger sida är lika mycket värda. Att lösa = hitta vilket x som gör det sant.

## Balansmetoden — vågen

Tänk på ekvationen som en **balansvåg**. Båda sidor väger lika. Så länge du gör **samma sak på båda sidor** balanserar vågen fortfarande:

- Addera samma tal i båda leden ✓
- Subtrahera samma tal i båda leden ✓
- Dela båda leden med samma tal ✓

Målet är att få x **helt ensamt**. (Testa i widgeten — den är bokstavligen en våg.)

## Ett steg

`x + 6 = 10` → ta bort +6 genom att subtrahera 6 i båda leden → `x = 4`.

## Två steg — skala av i rätt ordning

`3x + 4 = 19` — x:et har två saker på sig: en 3:a (gånger) och en +4. Skala av **längst bort först**:

1. Bli av med +4 (subtrahera 4) → `3x = 15`
2. Bli av med 3:an (dela med 3) → `x = 5`

## Kontrollen — ditt hemliga vapen

Sätt in svaret i ekvationen. Blir båda leden lika är det rätt, garanterat. Gör det på varje uppgift.

> **Regel att skriva ner:** Gör samma sak i båda leden. Skala av det som ligger längst från x först. Kontrollera genom insättning.
