---
slug: "omlasning-2a/potenser/potenslagar"
title: "Potenslagar"
course: omlasning-2a
moment: potenser
moment_title: "Potenser och exponentialekvationer"
lesson_number: 1
lesson_total: 4

success_criteria:
  - Multiplicera potenser med samma bas genom att addera exponenterna
  - Dividera potenser med samma bas genom att subtrahera exponenterna
  - Räkna med potens av en potens
  - Veta vad exponenten 0 och negativa exponenter betyder

bank:
  - question: "Skriv som en potens: 4⁵ · 4³"
    answer: ["4^8", "4⁸", "4**8"]
    solution: |
      Samma bas och multiplikation: addera exponenterna.
      5 + 3 = 8, alltså **4⁸**
  - question: "Skriv som en potens: 7⁹ / 7⁴"
    answer: ["7^5", "7⁵", "7**5"]
    solution: |
      Samma bas och division: subtrahera exponenterna.
      9 − 4 = 5, alltså **7⁵**
  - question: "Vad är 9⁰?"
    answer: ["1", "ett"]
    solution: |
      Vilket tal som helst utom 0 upphöjt till 0 är 1.
      Det följer av potenslagen: 9³ / 9³ = 9⁰, och samma tal delat med sig självt är **1**.
  - question: "Skriv 3⁻² utan negativ exponent."
    answer: ["1/9", "1/3^2", "0,111", "0.111"]
    solution: |
      En negativ exponent betyder ett i nämnaren.
      3⁻² = 1 delat med 3² = **1/9**

how_to:
  - Börja med repetitionen högst upp, den håller tidigare områden vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

widget: "potens-leksak/v1"
widget_height: 560

worked_example: |
  ## Vad en potens är

  `4³` betyder `4 · 4 · 4`. Fyran är **basen** och trean är **exponenten**, hur många gånger basen multipliceras med sig själv.

  ## De tre lagarna

  Alla tre gäller bara när basen är **densamma**.

  | Lag | Formel | Exempel |
  |---|---|---|
  | Multiplikation | a^m · a^n = a^(m+n) | 4⁵ · 4³ = 4⁸ |
  | Division | a^m / a^n = a^(m−n) | 7⁹ / 7⁴ = 7⁵ |
  | Potens av potens | (a^m)^n = a^(m·n) | (5³)⁴ = 5¹² |

  ### Varför de stämmer

  `4⁵ · 4³` betyder fem fyror gånger tre fyror. Tillsammans åtta fyror, alltså `4⁸`. Lagen är bara en genväg för att slippa räkna dem.

  Samma sak för division: `7⁹ / 7⁴`, fyra av de nio sjuorna förkortas bort, fem blir kvar.

  Och `(5³)⁴` betyder `5³ · 5³ · 5³ · 5³`, alltså fyra grupper med tre femmor: `5¹²`.

  > **Olika baser går inte att slå ihop.** `2³ · 5⁴` går inte att skriva som en enda potens. Lagarna kräver att basen är densamma i båda potenserna.

  ## Flera steg i samma uttryck

  Förenkla `(2⁶ · 2³) / 2⁴`:

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Täljaren först | 6 + 3 | 2⁹ |
  | Sedan divisionen | 9 − 4 | **2⁵** |

  ## Exponenten 0

  `a⁰ = 1` för alla a utom 0.

  Det är inte en godtycklig regel utan följer av divisionslagen:

  `9³ / 9³ = 9^(3−3) = 9⁰`

  Men `9³ / 9³` är också samma tal delat med sig självt, alltså `1`.

  Alltså måste `9⁰ = 1`.

  ## Negativa exponenter

  En negativ exponent betyder **ett delat med** potensen:

  `a^(−n) = 1 / a^n`

  | Uttryck | Betyder | Värde |
  |---|---|---|
  | 3⁻² | 1 / 3² | 1/9 |
  | 2⁻³ | 1 / 2³ | 1/8 |
  | 10⁻¹ | 1 / 10 | 0,1 |

  Också det följer av divisionslagen: `9³ / 9⁵ = 9^(−2)`, och samma bråk förkortat är `1 / 9²`.

exercises:
  E:
    - equation: "Skriv som en potens: 4⁵ · 4³"
      hint1: "Samma bas. Vilken lag gäller vid multiplikation?"
      hint2: "Addera exponenterna: 5 + 3."
      answer: ["4^8", "4⁸", "4**8"]
      solution: |
        Samma bas och multiplikation, alltså addera exponenterna.

        5 + 3 = 8

        **4⁸**

    - equation: "Skriv som en potens: 7⁹ / 7⁴"
      hint1: "Samma bas. Vid division gäller motsatsen till multiplikation."
      hint2: "Subtrahera exponenterna: 9 − 4."
      answer: ["7^5", "7⁵", "7**5"]
      solution: |
        Samma bas och division, alltså subtrahera exponenterna.

        9 − 4 = 5

        **7⁵**

    - equation: "Skriv som en potens: (5³)⁴"
      hint1: "En potens som i sin tur upphöjs. Vilken lag gäller då?"
      hint2: "Multiplicera exponenterna: 3 · 4."
      answer: ["5^12", "5¹²", "5**12"]
      solution: |
        Potens av en potens, alltså multiplicera exponenterna.

        3 · 4 = 12

        **5¹²**

    - equation: "Förenkla och skriv som en potens: (2⁶ · 2³) / 2⁴"
      hint1: "Två steg. Ta täljaren först."
      hint2: "Täljaren blir 2⁹. Sedan subtraherar du nämnarens exponent."
      answer: ["2^5", "2⁵", "2**5"]
      solution: |
        Täljaren: 6 + 3 = 9, alltså 2⁹

        Sedan divisionen: 9 − 4 = 5

        **2⁵**

    - equation: "Vad är 9⁰?"
      hint1: "Ett tal upphöjt till noll, kom ihåg regeln."
      hint2: "Regeln följer av att 9³ / 9³ både är 9⁰ och samma tal delat med sig självt."
      answer: ["1", "ett"]
      solution: |
        9³ / 9³ = 9⁰ enligt divisionslagen.

        Men samma tal delat med sig självt är 1.

        Alltså **9⁰ = 1**

    - equation: "Skriv 3⁻² utan negativ exponent."
      hint1: "En negativ exponent flyttar potensen till nämnaren."
      hint2: "3⁻² är 1 delat med 3². Vad är 3²?"
      answer: ["1/9", "1/3^2", "0,111", "0.111"]
      solution: |
        3⁻² = 1 / 3² = 1 / 9

        **1/9**

next: potensekvationer
next_lesson_title: "Potensekvationer"
prev: ekvationssystem/redo-att-tenta
prev_lesson_title: "Redo att tenta? — Räta linjen och ekvationssystem"
---

## Basen och exponenten

`4³` betyder `4 · 4 · 4`.

- **4** är basen, talet som multipliceras
- **3** är exponenten, hur många gånger

## Tre lagar, samma bas

Alla tre kräver att basen är **densamma** i båda potenserna.

| Situation | Gör så här | Exempel |
|---|---|---|
| Multiplikation | addera exponenterna | 4⁵ · 4³ = 4⁸ |
| Division | subtrahera exponenterna | 7⁹ / 7⁴ = 7⁵ |
| Potens av potens | multiplicera exponenterna | (5³)⁴ = 5¹² |

Lagarna är genvägar, inte magi. `4⁵ · 4³` är fem fyror gånger tre fyror, åtta fyror totalt. Skriv ut det om du tvekar, det tar tio sekunder och du ser direkt vilken lag som gäller.

> **Olika baser går inte ihop.** `2³ · 5⁴` går inte att skriva som en enda potens. Lagarna gäller bara när basen är samma.

## Flera steg

Ta ett steg i taget, inifrån och ut:

`(2⁶ · 2³) / 2⁴` → täljaren blir `2⁹` → sedan `9 − 4 = 5` → **2⁵**

## Exponenten 0

`a⁰ = 1` för alla a utom 0.

Regeln är inte godtycklig. Divisionslagen ger `9³ / 9³ = 9⁰`, men samma tal delat med sig självt är 1. Alltså måste `9⁰` vara 1.

## Negativa exponenter

`a^(−n) = 1 / a^n`

| Uttryck | Betyder | Värde |
|---|---|---|
| 3⁻² | 1 / 3² | 1/9 |
| 2⁻³ | 1 / 2³ | 1/8 |
| 10⁻¹ | 1 / 10 | 0,1 |

Också det följer av divisionslagen: `9³ / 9⁵` blir `9⁻²` enligt lagen, och `1 / 9²` om du förkortar bråket. Samma sak.

> En negativ exponent gör **inte** talet negativt. `3⁻²` är `1/9`, inte `−9`.
