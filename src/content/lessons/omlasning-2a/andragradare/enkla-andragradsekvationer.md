---
slug: "omlasning-2a/andragradare/enkla-andragradsekvationer"
title: "Enkla andragradsekvationer"
course: omlasning-2a
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 1
lesson_total: 9

success_criteria:
  - Lösa ekvationer av typen x² = ett tal och ge BÅDA lösningarna
  - Få x² ensamt först när det står tal runt omkring
  - Avgöra när en andragradsekvation saknar lösning
  - Kontrollera dina lösningar genom att sätta in dem

bank:
  - question: "Lös ekvationen x² = 169"
    answer: ["±13", "x = ±13", "13 och −13", "13 och -13", "13, -13", "-13, 13"]
    solution: |
      Dra roten ur båda leden och ta med båda tecknen: både 13 · 13 och (−13) · (−13) blir 169.
      Svar: **x = ±13**
  - question: "Lös ekvationen 7x² = 175"
    answer: ["±5", "x = ±5", "5 och −5", "5 och -5", "5, -5", "-5, 5"]
    solution: |
      Gör x² ensamt först: dela båda leden med 7.
      x² = 25.
      Dra roten ur med båda tecknen: **x = ±5**
  - question: "Hur många lösningar har ekvationen x² + 30 = 6?"
    answer: ["0", "ingen", "inga", "ingen lösning", "noll"]
    solution: |
      Gör x² ensamt: x² = 6 − 30 = −24.
      En kvadrat blir aldrig negativ, varken av positiva eller negativa tal.
      Antal lösningar: **0**
  - question: "Vilket tecken använder man för att skriva att svaret är både plus och minus?"
    answer: ["±", "plus minus", "plusminus", "plus-minus", "+/-", "+-"]
    solution: |
      Tecknet **±** betyder "både plus och minus".
      x = ±13 är samma sak som att skriva x₁ = 13 och x₂ = −13.

how_to:
  - Börja med repetitionen högst upp, den håller tidigare delmoment vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Grundfallet: x² = ett tal

  Lös `x² = 49`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Vilket tal gånger sig självt blir 49? | 7 · 7 = 49 | x = 7 |
  | Finns det fler? | (−7) · (−7) = 49 också | x = −7 |

  Svar: **x = 7 och x = −7**, som skrivs `x = ±7`

  > **Två lösningar, alltid** när högerledet är positivt. Att bara svara 7 ger halva poängen, i bedömningsanvisningarna står det uttryckligen "båda lösningarna korrekt angivna".

  ## Gör x² ensamt först

  Lös `5x² = 500`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Dela båda leden med 5 | 500 / 5 | x² = 100 |
  | Dra roten, båda tecknen | — | **x = ±10** |

  Lös `x² − 20 = 5`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Flytta över 20 | 5 + 20 | x² = 25 |
  | Dra roten | — | **x = ±5** |

  Regeln är densamma som för vanliga ekvationer: skala bort allt runt `x²` innan du drar roten.

  ## När det inte finns någon lösning

  Lös `x² = −16`.

  Finns det något tal som gånger sig självt blir negativt?

  - Positivt gånger positivt = positivt
  - Negativt gånger negativt = positivt

  Nej. Ekvationen **saknar lösning**.

  > Det är ett fullgott svar. Skriv "ingen lösning" och motivera med att en kvadrat aldrig kan bli negativ.

  ## Kontrollera

  Sätt in båda lösningarna i ursprungsekvationen.

  `x = ±10` i `5x² = 500`: 5 · 10² = 500 ✓ och 5 · (−10)² = 5 · 100 = 500 ✓

exercises:
  E:
    - equation: "Lös ekvationen: x² = 169"
      hint1: "Vilket tal gånger sig självt blir 169? Kom ihåg att det finns två."
      hint2: "13 · 13 = 169, och (−13) · (−13) = 169. Ange båda."
      answer: ["±13", "x = ±13", "13 och −13", "13 och -13", "13, -13", "-13, 13"]
      solution: |
        13 · 13 = 169 och (−13) · (−13) = 169

        **x = ±13**

    - equation: "Lös ekvationen: x² − 225 = 0"
      hint1: "Flytta över 225 så att x² står ensamt."
      hint2: "x² = 225. Vilka två tal kvadrerade blir 225?"
      answer: ["±15", "x = ±15", "15 och −15", "15 och -15", "15, -15", "-15, 15"]
      solution: |
        x² − 225 = 0
        x² = 225
        **x = ±15**

    - equation: "Lös ekvationen: 7x² = 175"
      hint1: "Dela båda leden med 7 först, så att x² blir ensamt."
      hint2: "x² = 25. Sedan drar du roten och tar med båda tecknen."
      answer: ["±5", "x = ±5", "5 och −5", "5 och -5", "5, -5", "-5, 5"]
      solution: |
        7x² = 175
        x² = 25
        **x = ±5**

        Kontroll: 7 · 5² = 175 ✓ och 7 · (−5)² = 175 ✓

    - equation: "Lös ekvationen: x² + 12 = 156"
      hint1: "Flytta över 12:an till högerledet."
      hint2: "x² = 144. Vilka två tal kvadrerade blir 144?"
      answer: ["±12", "x = ±12", "12 och −12", "12 och -12", "12, -12", "-12, 12"]
      solution: |
        x² + 12 = 156
        x² = 144
        **x = ±12**

    - equation: "Lös ekvationen: 5x² − 20 = 480"
      hint1: "Två steg: flytta över 20 först, dela sedan med 5."
      hint2: "5x² = 500, alltså x² = 100."
      answer: ["±10", "x = ±10", "10 och −10", "10 och -10", "10, -10", "-10, 10"]
      solution: |
        5x² − 20 = 480
        5x² = 500
        x² = 100
        **x = ±10**

        Kontroll: 5 · 10² − 20 = 500 − 20 = 480 ✓

    - equation: "Hur många lösningar har ekvationen x² + 30 = 6?"
      hint1: "Gör x² ensamt först och titta på vad som står i högerledet."
      hint2: "x² = −24. Kan en kvadrat vara negativ?"
      answer: ["0", "ingen", "inga", "ingen lösning", "noll"]
      solution: |
        x² + 30 = 6
        x² = −24

        En kvadrat kan aldrig bli negativ. Varken positiva eller negativa tal ger ett negativt resultat när de multipliceras med sig själva.

        Antal lösningar: **0**

    - equation: "Lös ekvationen: 49 − x² = 0"
      hint1: "Här står x²-termen sist och har minustecken. Flytta över den till andra ledet."
      hint2: "49 = x². Vilka två tal kvadrerade blir 49?"
      answer: ["±7", "x = ±7", "7 och −7", "7 och -7", "7, -7", "-7, 7"]
      solution: |
        49 − x² = 0

        Flytta över x² så att den blir positiv: 49 = x²

        **x = ±7**

        Ordningen spelar ingen roll, det är fortfarande x² = 49.

    - equation: "Ekvationen x² − a = 0 har lösningarna x = 8 och x = −8. Bestäm a."
      hint1: "Sätt in en av lösningarna i ekvationen och lös ut a."
      hint2: "8² − a = 0."
      answer: ["64", "a = 64"]
      solution: |
        Sätt in x = 8:

        8² − a = 0
        64 − a = 0

        **a = 64**

        Kontroll: x² − 64 = 0 ger x = ±8 ✓

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSd_NWjsJhZzGWYFOMgevQ3C15pLtbuEIpBQ4qK3xZVf0S_WNA/viewform"
next: nollproduktmetoden
next_lesson_title: "Nollproduktmetoden"
---

## Vad som är nytt

I Ma1 hade en ekvation ett svar. En **andragradsekvation** har oftast **två**, och det är den enskilt vanligaste anledningen till att poäng tappas här.

Orsaken är enkel: både `7 · 7` och `(−7) · (−7)` blir 49. Frågar ekvationen "vilket tal kvadrerat blir 49?" finns det alltså två giltiga svar.

## Grundformen: x² = ett tal

`x² = 49` → `x = ±7`

Tecknet `±` betyder "både plus och minus" och är ett fullgott sätt att skriva svaret. Du kan också skriva `x₁ = 7` och `x₂ = −7`.

| Ekvation | Lösningar |
|---|---|
| x² = 16 | x = ±4 |
| x² = 169 | x = ±13 |
| x² = 0 | x = 0 (bara en, noll har inget negativt tvillingtal) |
| x² = −25 | ingen lösning |

## Skala bort resten först

Står det något runt `x²` tar du bort det på vanligt sätt innan du drar roten:

`5x² = 500` → dela med 5 → `x² = 100` → `x = ±10`

`x² − 20 = 5` → flytta över 20 → `x² = 25` → `x = ±5`

`3x² − 8 = 100` → flytta över 8 → `3x² = 108` → dela med 3 → `x² = 36` → `x = ±6`

> **Ordningen:** först plus och minus, sedan gånger och delat. Precis som i Ma1. Roten dras **sist**, när x² står helt ensamt.

## När lösning saknas

`x² = −24` har ingen lösning, eftersom inget tal kvadrerat blir negativt.

Det är inget fel, det är svaret. Skriv "ingen lösning" och motivera kort: *en kvadrat kan aldrig bli negativ*.

## Kontrollera alltid båda

Sätt in båda lösningarna i den ursprungliga ekvationen. Det tar tio sekunder och avslöjar både räknefel och glömda minustecken.

`x = ±6` i `3x² − 8 = 100`:
- 3 · 6² − 8 = 108 − 8 = 100 ✓
- 3 · (−6)² − 8 = 108 − 8 = 100 ✓
