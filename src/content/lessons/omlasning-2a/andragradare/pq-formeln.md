---
slug: "omlasning-2a/andragradare/pq-formeln"
title: "pq-formeln"
course: omlasning-2a
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 6
lesson_total: 9

success_criteria:
  - Skriva om ekvationen till formen x² + px + q = 0 innan du använder formeln
  - Identifiera p och q med rätt tecken
  - Räkna ut båda rötterna med pq-formeln
  - Dela bort en siffra framför x² innan du sätter in

bank:
  - question: "Vilket tal måste stå ensamt i högerledet för att pq-formeln ska fungera?"
    answer: ["0", "noll"]
    solution: |
      pq-formeln är härledd ur formen x² + px + q = 0.
      Därför måste allt samlas i vänsterledet så att högerledet är **0**.
  - question: "Vad är p i ekvationen x² + 8x + 15 = 0?"
    answer: ["8", "p = 8"]
    solution: |
      Ekvationen står redan i formen x² + px + q = 0.
      p är talet framför x.
      Svar: **p = 8**
  - question: "Lös ekvationen x² + 8x + 15 = 0"
    answer: ["x = −3 och x = −5", "−3 och −5", "-3 och -5", "x = -3, x = -5", "−5 och −3", "-5 och -3"]
    solution: |
      p = 8 och q = 15 sätts in i pq-formeln.
      x = −4 ± √(4² − 15) = −4 ± √1 = −4 ± 1.
      Svar: **x = −3 och x = −5**
  - question: "Vad gör du med ekvationen 2x² + 10x − 28 = 0 innan du använder pq-formeln?"
    answer: ["Delar med 2", "dividerar med 2", "delar alla termer med 2", "delar med två"]
    solution: |
      pq-formeln kräver att det står en ensam x² först, utan siffra framför.
      Dela därför alla termer med 2, så att ekvationen blir x² + 5x − 14 = 0.

how_to:
  - Börja med repetitionen högst upp, den håller tidigare delmoment vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Formeln

  För en ekvation på formen `x² + px + q = 0` gäller:

  ```
  x = −p/2 ± √((p/2)² − q)
  ```

  Två villkor måste vara uppfyllda innan du sätter in:

  1. Högerledet ska vara **0**
  2. Det ska stå en **ensam x²**, ingen siffra framför

  ## Grundexemplet

  Lös `x² + 8x + 15 = 0`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Läs av p och q | talet framför x, och det ensamma talet | p = 8, q = 15 |
  | Halva p | 8 / 2 | 4 |
  | Sätt in | x = −4 ± √(4² − 15) | x = −4 ± √1 |
  | Räkna ut roten | √1 = 1 | x = −4 ± 1 |
  | Dela upp | −4 + 1 och −4 − 1 | **x = −3 och x = −5** |

  Kontroll: `(−3)² + 8 · (−3) + 15 = 9 − 24 + 15 = 0` ✓

  ## Negativa p och q

  Tecknen följer med. Lös `x² − 12x + 35 = 0`:

  | Steg | Resultat |
  |---|---|
  | p = −12, q = 35 | — |
  | Halva p | −6 |
  | x = 6 ± √(36 − 35) | x = 6 ± √1 |
  | x = 6 ± 1 | **x = 7 och x = 5** |

  > `−p/2` betyder att du byter tecken på halva p. Är p negativt blir `−p/2` positivt. Det är den vanligaste teckenfällan i formeln.

  Lös `x² + 8x − 33 = 0`:

  | Steg | Resultat |
  |---|---|
  | p = 8, q = −33 | — |
  | x = −4 ± √(16 + 33) | x = −4 ± √49 |
  | x = −4 ± 7 | **x = 3 och x = −11** |

  Lägg märke till `16 − (−33) = 16 + 33`. Är q negativt blir det plus under roten.

  ## När det står en siffra framför x²

  Lös `2x² + 10x − 28 = 0`.

  Formeln fungerar inte direkt, dela först **alla** termer med 2:

  | Steg | Resultat |
  |---|---|
  | Dela med 2 | x² + 5x − 14 = 0 |
  | p = 5, q = −14 | — |
  | x = −2,5 ± √(6,25 + 14) | x = −2,5 ± √20,25 |
  | √20,25 = 4,5 | x = −2,5 ± 4,5 |
  | | **x = 2 och x = −7** |

  ## När allt inte står på rätt sida

  Lös `x² = 5x + 24`.

  Flytta över allt till vänsterledet först:

  `x² − 5x − 24 = 0` → p = −5, q = −24

  `x = 2,5 ± √(6,25 + 24) = 2,5 ± √30,25 = 2,5 ± 5,5`

  **x = 8 och x = −3**

exercises:
  E:
    - equation: "Lös ekvationen: x² + 8x + 15 = 0"
      hint1: "Ekvationen står redan i rätt form. Läs av p och q."
      hint2: "p = 8 och q = 15. Halva p är 4, så x = −4 ± √(16 − 15)."
      answer: ["x = −3 och x = −5", "−3 och −5", "-3 och -5", "x = -3, x = -5", "−5 och −3", "-5 och -3", "x=-3 och x=-5"]
      solution: |
        p = 8, q = 15

        x = −4 ± √(4² − 15)
        x = −4 ± √1
        x = −4 ± 1

        **x = −3 och x = −5**

        Kontroll: (−3)² + 8 · (−3) + 15 = 9 − 24 + 15 = 0 ✓

    - equation: "Lös ekvationen: x² − 12x + 35 = 0"
      hint1: "p är negativt här. Kom ihåg att −p/2 byter tecken."
      hint2: "p = −10 ger −p/2 = 5. Sedan x = 6 ± √(36 − 35)."
      answer: ["x = 7 och x = 5", "7 och 5", "5 och 7", "x = 5 och x = 7", "x=7 och x=5", "7, 5", "5, 7"]
      solution: |
        p = −12, q = 35

        x = 6 ± √(6² − 35)
        x = 6 ± √1
        x = 6 ± 1

        **x = 7 och x = 5**

    - equation: "Lös ekvationen: x² + 8x − 33 = 0"
      hint1: "q är negativt. Då blir det plus under rottecknet."
      hint2: "x = −4 ± √(16 + 33) = −1 ± 5."
      answer: ["x = 3 och x = −11", "3 och −11", "3 och -11", "x = 3, x = -11", "−11 och 3", "-11 och 3"]
      solution: |
        p = 8, q = −33

        x = −4 ± √(4² − (−33))
        x = −4 ± √49
        x = −4 ± 7

        **x = 3 och x = −11**

    - equation: "Lös ekvationen: x² − 6x − 27 = 0"
      hint1: "Både p och q är negativa. Två teckenbyten att hålla reda på."
      hint2: "−p/2 = 3, och under roten står 9 + 27 = 36."
      answer: ["x = 9 och x = −3", "9 och −3", "9 och -3", "x = 9, x = -3", "−3 och 9", "-3 och 9"]
      solution: |
        p = −6, q = −27

        x = 3 ± √(3² + 27)
        x = 3 ± √36
        x = 3 ± 6

        **x = 9 och x = −3**

    - equation: "Lös ekvationen: 2x² + 10x − 28 = 0"
      hint1: "Det står en tvåa framför x². Formeln kräver en ensam x²."
      hint2: "Dela alla termer med 2 först: x² + 5x − 14 = 0."
      answer: ["x = 2 och x = −7", "2 och −7", "2 och -7", "x = 2, x = -7", "−7 och 2", "-7 och 2"]
      solution: |
        Dela alla termer med 2:

        x² + 5x − 14 = 0

        p = 5, q = −14

        x = −2,5 ± √(2,5² + 14)
        x = −2,5 ± √20,25
        x = −2,5 ± 4,5

        **x = 2 och x = −7**

    - equation: "Lös ekvationen: x² = 5x + 24"
      hint1: "Allt måste stå på ena sidan med 0 i det andra ledet. Flytta över."
      hint2: "x² − 5x − 24 = 0. Nu är p = −5 och q = −24."
      answer: ["x = 8 och x = −3", "8 och −3", "8 och -3", "x = 8, x = -3", "−3 och 8", "-3 och 8"]
      solution: |
        Flytta över allt till vänsterledet:

        x² − 5x − 24 = 0

        p = −5, q = −24

        x = 2,5 ± √(2,5² + 24)
        x = 2,5 ± √30,25
        x = 2,5 ± 5,5

        **x = 8 och x = −3**

prev: kvadrerings-och-konjugatregeln
prev_lesson_title: "Kvadreringsreglerna och konjugatregeln"
next: andragradsfunktioner-grafiskt
next_lesson_title: "Andragradsfunktioner grafiskt"
---

## När du behöver formeln

Nollproduktmetoden fungerar bara när ekvationen går att faktorisera lätt. **pq-formeln fungerar alltid**, så länge ekvationen står i rätt form.

```
x² + px + q = 0

x = −p/2 ± √((p/2)² − q)
```

`±` betyder att du räknar ut två svar: ett med plus och ett med minus.

## Två saker att göra först

**1. Högerledet ska vara 0.** Står det något annat, flytta över.

`x² = 5x + 24` → `x² − 5x − 24 = 0`

**2. x² ska stå ensam.** Finns en siffra framför, dela alla termer med den.

`2x² + 10x − 28 = 0` → `x² + 5x − 14 = 0`

> Delar du bara vissa termer blir ekvationen en annan ekvation. Alla fyra ska med, även högerledets nolla, men 0 delat med 2 är fortfarande 0.

## Läsa av p och q

`p` är talet framför x. `q` är det ensamma talet. **Tecknen ingår.**

| Ekvation | p | q |
|---|---|---|
| x² + 8x + 15 = 0 | 8 | 15 |
| x² − 12x + 35 = 0 | −12 | 35 |
| x² + 8x − 33 = 0 | 8 | −33 |
| x² − 6x − 27 = 0 | −6 | −27 |

## Räkna ut

`x² + 8x + 15 = 0` med p = 8 och q = 15:

1. `−p/2 = −4`
2. Under roten: `4² − 15 = 16 − 15 = 1`
3. `x = −4 ± 1`
4. `x = −3` och `x = −5`

### De två teckenfällorna

**`−p/2` byter tecken på p.** Är p negativt blir `−p/2` positivt:

`x² − 12x + 35 = 0` → `−p/2 = 6`, inte −6.

**`− q` blir plus när q är negativt:**

`x² + 8x − 33 = 0` → under roten står `16 − (−33) = 16 + 33 = 49`.

## Kontrollera

Sätt in en av rötterna i den ursprungliga ekvationen. Blir vänsterledet 0 stämmer det.

`x = −3` i `x² + 8x + 15`: `9 − 24 + 15 = 0` ✓

En snabbare kontroll: de två rötterna ska tillsammans bli `−p`, och multiplicerade bli `q`.

`−3 + (−5) = −8 = −p` ✓ och `(−3) · (−5) = 15 = q` ✓
