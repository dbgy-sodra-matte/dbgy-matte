---
slug: "omlasning-2b/andragradare/pq-formeln"
title: "pq-formeln"
course: omlasning-2b
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 6
lesson_total: 9

success_criteria:
  - Skriva om en andragradsekvation till formen x² + px + q = 0
  - Läsa av p och q med rätt tecken
  - Använda pq-formeln och ge båda lösningarna
  - Kontrollera lösningarna genom att sätta in dem

bank:
  - question: "Vad är p och q i ekvationen x² + 6x + 8 = 0? Ange p."
    answer: ["6", "p = 6"]
    solution: |
      Ekvationen ska stå i formen x² + px + q = 0.
      p är talet framför x.
      Svar: **p = 6**
  - question: "Lös ekvationen x² + 6x + 8 = 0"
    answer: ["x = −2 och x = −4", "−2 och −4", "-2 och -4"]
    solution: |
      p = 6 och q = 8 sätts in i pq-formeln.
      x = −3 ± √(3² − 8) = −3 ± √1 = −3 ± 1.
      Svar: **x = −2 och x = −4**
  - question: "Vad måste stå i högerledet innan du använder pq-formeln?"
    answer: ["0", "noll"]
    solution: |
      pq-formeln är härledd ur formen x² + px + q = 0.
      Därför måste allt samlas i vänsterledet så att högerledet är **0**.
  - question: "Vad gör du med ekvationen 2x² + 8x + 6 = 0 innan du använder pq-formeln?"
    answer: ["Delar med 2", "dividerar med 2", "delar alla termer med 2"]
    solution: |
      pq-formeln kräver att det står en ensam x² först, utan siffra framför.
      Dela därför alla termer med 2, så att ekvationen blir x² + 4x + 3 = 0.

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Formeln

  När ekvationen står på formen `x² + px + q = 0` gäller

  `x = −p/2 ± √((p/2)² − q)`

  Lös `x² + 6x + 8 = 0`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Läs av p och q | p = 6, q = 8 | — |
  | Räkna ut p/2 | 6 / 2 | 3 |
  | Framför roten står −p/2 | −3 | — |
  | Under roten: (p/2)² − q | 3² − 8 = 9 − 8 | 1 |
  | Dra roten | √1 | 1 |
  | Två svar: −3 + 1 och −3 − 1 | — | **x = −2 och x = −4** |

  **Kontroll:** (−2)² + 6·(−2) + 8 = 4 − 12 + 8 = 0 ✓

  ## Tecknen: där felen sitter

  Lös `x² − 8x + 15 = 0`.

  Här är p = **−8** (minustecknet hör till talet) och q = 15.

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | p/2 | −8 / 2 | −4 |
  | −p/2 | −(−4) | **+4** |
  | (p/2)² − q | (−4)² − 15 = 16 − 15 | 1 |
  | √1 | — | 1 |
  | 4 + 1 och 4 − 1 | — | **x = 5 och x = 3** |

  > Två fällor: att glömma minustecknet i p, och att glömma att `−p/2` blir **plus** när p är negativt. Skriv ut varje steg.

  ## Först: rätt form

  Formeln kräver att

  - högerledet är **0**
  - x²-termen står **ensam** (ingen siffra framför)

  | Ekvationen ser ut så här | Gör så här först |
  |---|---|
  | x² + 5x = 14 | Flytta över 14: x² + 5x − 14 = 0 |
  | 2x² + 10x + 12 = 0 | Dela ALLA termer med 2: x² + 5x + 6 = 0 |
  | x² = 4x + 5 | Flytta över allt: x² − 4x − 5 = 0 |

  ## Kontrollera med summa och produkt

  En snabb rimlighetskoll: lösningarnas **summa** ska bli −p och deras **produkt** ska bli q.

  För `x² − 8x + 15 = 0` med x = 5 och 3: summan 5 + 3 = 8 = −(−8) ✓ och produkten 5 · 3 = 15 = q ✓

exercises:
  E:
    - equation: "Lös ekvationen: x² + 2x − 15 = 0"
      hint1: "p = 2 och q = −15. Räkna först ut p/2."
      hint2: "p/2 = 1, så framför roten står −1. Under roten: 1² − (−15) = 1 + 15 = 16."
      answer: ["x = 3 och x = −5", "3 och −5", "3 och -5"]
      solution: |
        p = 2, q = −15

        x = −1 ± √(1² − (−15))
        x = −1 ± √16
        x = −1 ± 4

        **x = 3 och x = −5**

        Kontroll: 3² + 2·3 − 15 = 9 + 6 − 15 = 0 ✓

    - equation: "Lös ekvationen: x² − 4x − 21 = 0"
      hint1: "p = −4 och q = −21. Tänk på att −p/2 blir positivt."
      hint2: "p/2 = −2, så framför roten står +2. Under roten: (−2)² − (−21) = 4 + 21 = 25."
      answer: ["x = 7 och x = −3", "7 och −3", "7 och -3"]
      solution: |
        p = −4, q = −21

        x = 2 ± √((−2)² − (−21))
        x = 2 ± √25
        x = 2 ± 5

        **x = 7 och x = −3**

        Kontroll: 7² − 4·7 − 21 = 49 − 28 − 21 = 0 ✓

    - equation: "Lös ekvationen: x² − 10x + 21 = 0"
      hint1: "p = −10 och q = 21."
      hint2: "p/2 = −5, framför roten står +5. Under roten: 25 − 21 = 4."
      answer: ["x = 7 och x = 3", "7 och 3", "3 och 7", "7, 3", "3, 7"]
      solution: |
        p = −10, q = 21

        x = 5 ± √(25 − 21)
        x = 5 ± √4
        x = 5 ± 2

        **x = 7 och x = 3**

        Rimlighetskoll: 7 + 3 = 10 ✓ och 7 · 3 = 21 ✓

    - equation: "Lös ekvationen: x² + 5x = 14"
      hint1: "Formeln kräver noll i högerledet. Flytta över 14 först."
      hint2: "x² + 5x − 14 = 0, alltså p = 5 och q = −14. p/2 = 2,5 och (2,5)² + 14 = 20,25."
      answer: ["x = 2 och x = −7", "2 och −7", "2 och -7"]
      solution: |
        x² + 5x − 14 = 0 → p = 5, q = −14

        x = −2,5 ± √(2,5² − (−14))
        x = −2,5 ± √(6,25 + 14)
        x = −2,5 ± √20,25
        x = −2,5 ± 4,5

        **x = 2 och x = −7**

        Kontroll: 2² + 5·2 = 4 + 10 = 14 ✓

    - equation: "Lös ekvationen: 2x² + 10x + 12 = 0"
      hint1: "x²-termen måste stå ensam, dela alla termer med 2 först."
      hint2: "x² + 5x + 6 = 0, alltså p = 5 och q = 6. Under roten: 2,5² − 6 = 0,25."
      answer: ["x = −2 och x = −3", "−2 och −3", "-2 och -3"]
      solution: |
        Dela allt med 2: x² + 5x + 6 = 0 → p = 5, q = 6

        x = −2,5 ± √(6,25 − 6)
        x = −2,5 ± √0,25
        x = −2,5 ± 0,5

        **x = −2 och x = −3**

        Kontroll: 2·(−2)² + 10·(−2) + 12 = 8 − 20 + 12 = 0 ✓

    - equation: "Lös ekvationen: x² − 6x + 5 = 0"
      hint1: "p = −6 och q = 5."
      hint2: "p/2 = −3, framför roten står +3. Under roten: 9 − 5 = 4."
      answer: ["x = 5 och x = 1", "5 och 1", "1 och 5", "5, 1", "1, 5"]
      solution: |
        p = −6, q = 5

        x = 3 ± √(9 − 5)
        x = 3 ± 2

        **x = 5 och x = 1**

        Rimlighetskoll: 5 + 1 = 6 ✓ och 5 · 1 = 5 ✓

    - equation: "Lös ekvationen: 3x² − 24x = 60"
      hint1: "Två saker måste fixas innan formeln: högerledet ska bli 0, och trean framför x² ska bort."
      hint2: "3x² − 24x − 60 = 0, dela sedan alla termer med 3: x² − 8x − 20 = 0."
      answer: ["x = 10 och x = −2", "10 och −2", "10 och -2", "x = 10, x = -2", "10, -2", "-2, 10"]
      solution: |
        3x² − 24x = 60
        3x² − 24x − 60 = 0

        Dela alla termer med 3: x² − 8x − 20 = 0

        p = −8 och q = −20

        **x = 10 och x = −2**

        Kontroll: 3 · 10² − 24 · 10 = 300 − 240 = 60 ✓

    - equation: "En rektangulär gräsmatta har en långsida som är 10 m längre än kortsidan. Arean är 600 m². Beräkna gräsmattans omkrets."
      hint1: "Kalla kortsidan x. Vad blir långsidan, och vad blir arean uttryckt i x?"
      hint2: "x(x + 10) = 600 ger x² + 10x − 600 = 0."
      answer: ["100", "100 m", "O = 100 m", "100 meter"]
      solution: |
        Kortsidan är x, långsidan x + 10.

        x(x + 10) = 600
        x² + 10x − 600 = 0

        p = 10 och q = −600 ger x = 20 eller x = −30.

        En sida kan inte vara negativ, så kortsidan är 20 m och långsidan 30 m.

        Omkrets = 2 · (20 + 30) = **100 m**

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSdVuzGe7eugGn4ud4Id7iXlQjW2jrk6fRjMxPadF8xb05u2yg/viewform"
prev: nollproduktmetoden
prev_lesson_title: "Nollproduktmetoden"
next: andragradsfunktioner-grafiskt
next_lesson_title: "Andragradsfunktioner grafiskt"
---

## Metoden som alltid fungerar

De tidigare metoderna kräver att ekvationen har en särskild form. **pq-formeln fungerar på alla andragradsekvationer**, den är verktyget du tar till när ingenting annat passar.

Kravet är bara att ekvationen först skrivs om till

`x² + px + q = 0`

Sedan gäller

`x = −p/2 ± √((p/2)² − q)`

Det du måste kunna är att **få ekvationen i rätt form** och **sätta in med rätt tecken**.

## Rätt form först

Två krav, båda absoluta:

1. **Högerledet ska vara 0.** `x² + 5x = 14` skrivs om till `x² + 5x − 14 = 0`.
2. **x² ska stå ensamt.** `2x² + 10x + 12 = 0` delas med 2 → `x² + 5x + 6 = 0`. Alla termer delas, även högerledet.

Missar du något av detta blir p och q fel, och då spelar det ingen roll hur rätt du räknar sedan.

## Läs av p och q med tecken

`x² − 8x + 15 = 0` → **p = −8** och **q = 15**

Minustecknet framför 8:an tillhör p. Det är den vanligaste felkällan i hela momentet.

| Ekvation | p | q |
|---|---|---|
| x² + 6x + 8 = 0 | 6 | 8 |
| x² − 4x − 21 = 0 | −4 | −21 |
| x² + 2x − 15 = 0 | 2 | −15 |
| x² − 9 = 0 | 0 | −9 |

## Steg för steg

`x² − 8x + 15 = 0`

1. `p/2 = −8/2 = −4`
2. Framför roten står `−p/2 = −(−4)` = **+4**
3. Under roten: `(p/2)² − q = (−4)² − 15 = 16 − 15 = 1`
4. `√1 = 1`
5. Två svar: `4 + 1 = 5` och `4 − 1 = 3`

`x = 5` och `x = 3`

## Tre saker att titta efter under roten

| Under roten står | Antal lösningar |
|---|---|
| Ett positivt tal | Två lösningar |
| 0 | En lösning (de två sammanfaller) |
| Ett negativt tal | Ingen lösning, roten ur ett negativt tal finns inte |

## Kontrollen som är snabbast

Sätt in ditt svar i ursprungsekvationen. Eller använd genvägen:

- Lösningarnas **summa** ska bli `−p`
- Lösningarnas **produkt** ska bli `q`

För `x² − 10x + 21 = 0` med x = 7 och 3: summa 10 ✓, produkt 21 ✓

Stämmer båda är svaret nästan säkert rätt.
