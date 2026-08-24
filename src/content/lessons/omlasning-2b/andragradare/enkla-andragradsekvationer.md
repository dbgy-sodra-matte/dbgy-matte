---
slug: "omlasning-2b/andragradare/enkla-andragradsekvationer"
title: "Enkla andragradsekvationer"
course: omlasning-2b
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 4
lesson_total: 9

success_criteria:
  - Lösa ekvationer av typen x² = ett tal och ge BÅDA lösningarna
  - Få x² ensamt först när det står tal runt omkring
  - Avgöra när en andragradsekvation saknar lösning
  - Kontrollera dina lösningar genom att sätta in dem

bank:
  - question: "Lös ekvationen x² = 25"
    answer: ["±5", "x = ±5", "5 och −5", "5 och -5", "5, -5", "-5, 5"]
    solution: |
      Dra roten ur båda leden och ta med båda tecknen: både 5 · 5 och (−5) · (−5) blir 25.
      Svar: **x = ±5**
  - question: "Hur många lösningar har ekvationen x² = 49?"
    answer: ["2", "två"]
    solution: |
      Både 7 och −7 ger 49 när de kvadreras.
      Svar: **2 lösningar**
  - question: "Lös ekvationen x² = −9"
    answer: ["Ingen lösning", "saknar lösning", "inga lösningar", "ingen"]
    solution: |
      Ett tal gånger sig självt blir aldrig negativt, varken när talet är positivt eller negativt.
      Svar: **ingen lösning**
  - question: "Lös ekvationen 2x² = 32"
    answer: ["±4", "x = ±4", "4 och −4", "4 och -4", "4, -4", "-4, 4"]
    solution: |
      Gör x² ensamt först: dela båda leden med 2.
      x² = 16.
      Dra roten ur med båda tecknen: **x = ±4**

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Grundfallet: x² = ett tal

  Lös `x² = 36`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Vilket tal gånger sig självt blir 36? | 6 · 6 = 36 | x = 6 |
  | Finns det fler? | (−6) · (−6) = 36 också | x = −6 |

  Svar: **x = 6 och x = −6**, som skrivs `x = ±6`

  > **Två lösningar, alltid** när högerledet är positivt. Att bara svara 6 ger halva poängen, och på prövningen står det uttryckligen "båda lösningarna korrekt angivna".

  ## Gör x² ensamt först

  Lös `3x² = 75`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Dela båda leden med 3 | 75 / 3 | x² = 25 |
  | Dra roten, båda tecknen | — | **x = ±5** |

  Lös `x² − 40 = 9`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Flytta över 40 | 9 + 40 | x² = 49 |
  | Dra roten | — | **x = ±7** |

  Regeln är densamma som för vanliga ekvationer: skala bort allt runt `x²` innan du drar roten.

  ## När det inte finns någon lösning

  Lös `x² = −16`.

  Finns det något tal som gånger sig självt blir negativt?

  - Positivt gånger positivt = positivt
  - Negativt gånger negativt = positivt

  Nej. Ekvationen **saknar lösning**.

  > Det är ett fullgott svar, skriv "ingen lösning" och motivera med att en kvadrat aldrig kan bli negativ.

  ## Kontrollera

  Sätt in båda lösningarna i ursprungsekvationen.

  `x = ±5` i `3x² = 75`: 3 · 5² = 75 ✓ och 3 · (−5)² = 3 · 25 = 75 ✓

exercises:
  E:
    - equation: "Lös ekvationen: x² = 64"
      hint1: "Vilket tal gånger sig självt blir 64? Kom ihåg att det finns två."
      hint2: "8 · 8 = 64, och (−8) · (−8) = 64. Ange båda."
      answer: ["±8", "x = ±8", "8 och −8", "8 och -8", "8, -8", "-8, 8"]
      solution: |
        8 · 8 = 64 och (−8) · (−8) = 64

        **x = ±8**

    - equation: "Lös ekvationen: x² − 100 = 0"
      hint1: "Flytta över 100 så att x² står ensamt."
      hint2: "x² = 100. Vilka två tal kvadrerade blir 100?"
      answer: ["±10", "x = ±10", "10 och −10", "10 och -10", "10, -10", "-10, 10"]
      solution: |
        x² − 100 = 0
        x² = 100
        **x = ±10**

    - equation: "Lös ekvationen: 4x² = 36"
      hint1: "Dela båda leden med 4 först, så att x² blir ensamt."
      hint2: "x² = 9. Sedan drar du roten och tar med båda tecknen."
      answer: ["±3", "x = ±3", "3 och −3", "3 och -3", "3, -3", "-3, 3"]
      solution: |
        4x² = 36
        x² = 9
        **x = ±3**

        Kontroll: 4 · 3² = 36 ✓ och 4 · (−3)² = 36 ✓

    - equation: "Lös ekvationen: x² + 5 = 54"
      hint1: "Flytta över 5:an till högerledet."
      hint2: "x² = 49. Vilka två tal kvadrerade blir 49?"
      answer: ["±7", "x = ±7", "7 och −7", "7 och -7", "7, -7", "-7, 7"]
      solution: |
        x² + 5 = 54
        x² = 49
        **x = ±7**

    - equation: "Lös ekvationen: 2x² − 8 = 64"
      hint1: "Två steg: flytta över 8 först, dela sedan med 2."
      hint2: "2x² = 72, alltså x² = 36."
      answer: ["±6", "x = ±6", "6 och −6", "6 och -6", "6, -6", "-6, 6"]
      solution: |
        2x² − 8 = 64
        2x² = 72
        x² = 36
        **x = ±6**

        Kontroll: 2 · 6² − 8 = 72 − 8 = 64 ✓

    - equation: "Hur många lösningar har ekvationen x² + 20 = 4?"
      hint1: "Gör x² ensamt först och titta på vad som står i högerledet."
      hint2: "x² = −16. Kan en kvadrat vara negativ?"
      answer: ["0", "ingen", "inga", "ingen lösning"]
      solution: |
        x² + 20 = 4
        x² = −16

        En kvadrat kan aldrig bli negativ, varken positiva eller negativa tal ger ett negativt resultat när de gångas med sig själva.

        Antal lösningar: **0**

    - equation: "Lös ekvationen: 81 − x² = 0"
      hint1: "Här står x²-termen sist och har minustecken. Flytta över den till andra ledet."
      hint2: "81 = x². Vilka två tal kvadrerade blir 81?"
      answer: ["±9", "x = ±9", "9 och −9", "9 och -9", "9, -9", "-9, 9"]
      solution: |
        81 − x² = 0

        Flytta över x² så att den blir positiv: 81 = x²

        **x = ±9**

        Ordningen spelar ingen roll, det är fortfarande x² = 81.

    - equation: "Ekvationen x² − a = 0 har lösningarna x = 6 och x = −6. Bestäm a."
      hint1: "Sätt in en av lösningarna i ekvationen och lös ut a."
      hint2: "6² − a = 0."
      answer: ["36", "a = 36"]
      solution: |
        Sätt in x = 6:

        6² − a = 0
        36 − a = 0

        **a = 36**

        Kontroll: x² − 36 = 0 ger x = ±6 ✓

prev: konjugatregeln
prev_lesson_title: "Konjugatregeln"
next: nollproduktmetoden
next_lesson_title: "Nollproduktmetoden"
---

## Vad som är nytt

I Ma1 hade en ekvation ett svar. En **andragradsekvation** har oftast **två**, och det är den enskilt vanligaste anledningen till att poäng tappas här.

Orsaken är enkel: både `5 · 5` och `(−5) · (−5)` blir 25. Frågar ekvationen "vilket tal kvadrerat blir 25?" finns det alltså två giltiga svar.

## Grundformen: x² = ett tal

`x² = 25` → `x = ±5`

Tecknet `±` betyder "både plus och minus" och är ett fullgott sätt att skriva svaret. Du kan också skriva `x₁ = 5` och `x₂ = −5`.

| Ekvation | Lösningar |
|---|---|
| x² = 9 | x = ±3 |
| x² = 81 | x = ±9 |
| x² = 0 | x = 0 (bara en, noll har inget negativt tvillingtal) |
| x² = −4 | ingen lösning |

## Skala bort resten först

Står det något runt `x²` tar du bort det på vanligt sätt innan du drar roten:

`3x² = 75` → dela med 3 → `x² = 25` → `x = ±5`

`x² − 40 = 9` → flytta över 40 → `x² = 49` → `x = ±7`

`2x² − 8 = 64` → flytta över 8 → `2x² = 72` → dela med 2 → `x² = 36` → `x = ±6`

> **Ordningen:** först plus och minus, sedan gånger och delat. Precis som i Ma1. Roten dras **sist**, när x² står helt ensamt.

## När lösning saknas

`x² = −16` har ingen lösning, eftersom inget tal kvadrerat blir negativt.

Det är inget fel, det är svaret. Skriv "ingen lösning" och motivera kort: *en kvadrat kan aldrig bli negativ*.

## Kontrollera alltid båda

Sätt in båda lösningarna i den ursprungliga ekvationen. Det tar tio sekunder och avslöjar både räknefel och glömda minustecken.

`x = ±6` i `2x² − 8 = 64`:
- 2 · 6² − 8 = 72 − 8 = 64 ✓
- 2 · (−6)² − 8 = 72 − 8 = 64 ✓
