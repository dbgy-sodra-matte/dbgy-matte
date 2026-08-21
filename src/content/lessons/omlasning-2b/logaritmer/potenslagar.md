---
slug: "omlasning-2b/logaritmer/potenslagar"
title: "Potenslagar"
course: omlasning-2b
moment: logaritmer
moment_title: "Logaritmer och exponentialekvationer"
lesson_number: 1
lesson_total: 4

success_criteria:
  - Multiplicera potenser med samma bas genom att addera exponenterna
  - Dividera potenser med samma bas genom att subtrahera exponenterna
  - Hantera en potens av en potens
  - Tolka exponenten 0 och negativa exponenter

bank:
  - question: "Skriv som en potens: 3⁴ · 3²"
    answer: ["3^6", "3⁶"]
  - question: "Skriv som en potens: 8⁹ / 8⁵"
    answer: ["8^4", "8⁴"]
  - question: "Vad är 5⁰?"
    answer: ["1"]
  - question: "Skriv 2^−3 utan negativ exponent."
    answer: ["1/8", "1/2^3", "0.125"]

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna, de repeterar förra området
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## 1. Multiplikation: addera exponenterna

  `a^m · a^n = a^(m+n)`

  Skriv `3⁴ · 3²` som en potens.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Samma bas? | Ja, båda har basen 3 | — |
  | Addera exponenterna | 4 + 2 | **3⁶** |

  Varför? `3⁴` är fyra treor gångade, `3²` är två till. Tillsammans sex treor.

  ## 2. Division: subtrahera exponenterna

  `a^m / a^n = a^(m−n)`

  `8⁹ / 8⁵ = 8^(9−5)` = **8⁴**

  ## 3. Potens av potens: multiplicera exponenterna

  `(a^m)^n = a^(m·n)`

  `(5³)² = 5^(3·2)` = **5⁶**

  > Lätt att blanda ihop: `5³ · 5²` ger 5⁵ (addera), men `(5³)²` ger 5⁶ (multiplicera). Titta efter parentesen.

  ## 4. Exponent 0 och negativa exponenter

  | Regel | Betyder | Exempel |
  |---|---|---|
  | `a⁰ = 1` | Allt upphöjt till noll är 1 | 5⁰ = 1, 100⁰ = 1 |
  | `a^(−n) = 1 / a^n` | Negativ exponent = ett genom potensen | 2^(−3) = 1/2³ = 1/8 |

  Varför blir `a⁰ = 1`? Titta på `5³ / 5³`. Ett tal delat med sig självt är 1, och enligt divisionsregeln är det `5^(3−3) = 5⁰`. Alltså måste `5⁰` vara 1.

  ## 5. Blandade uttryck

  Förenkla `x⁶ · x^(−1) / x²`

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Täljaren: addera exponenterna | 6 + (−1) | x⁵ |
  | Dela: subtrahera nämnarens | 5 − 2 | **x³** |

exercises:
  E:
    - equation: "Skriv som en potens: 4³ · 4⁵"
      hint1: "Samma bas: då adderar du exponenterna."
      hint2: "3 + 5 = 8. Basen är kvar densamma."
      answer: ["4^8", "4⁸"]
      solution: |
        4³ · 4⁵ = 4^(3+5) = **4⁸**

    - equation: "Skriv som en potens: 7⁶ / 7²"
      hint1: "Division med samma bas: subtrahera exponenterna."
      hint2: "6 − 2 = 4."
      answer: ["7^4", "7⁴"]
      solution: |
        7⁶ / 7² = 7^(6−2) = **7⁴**

    - equation: "Förenkla: x⁵ · x³"
      hint1: "Samma bas x: addera exponenterna."
      hint2: "5 + 3 = 8."
      answer: ["x^8", "x⁸"]
      solution: |
        x⁵ · x³ = **x⁸**

    - equation: "Skriv som en potens: (2⁴)³"
      hint1: "Potens av potens: då multiplicerar du exponenterna."
      hint2: "4 · 3 = 12. Inte 4 + 3."
      answer: ["2^12", "2¹²"]
      solution: |
        (2⁴)³ = 2^(4·3) = **2¹²**

    - equation: "Skriv 3^−2 utan negativ exponent, som ett bråk."
      hint1: "Negativ exponent betyder ett genom potensen."
      hint2: "3^−2 = 1/3² och 3² = 9."
      answer: ["1/9"]
      solution: |
        3^−2 = 1/3² = **1/9**

    - equation: "Förenkla: x⁶ · x^−1 / x²"
      hint1: "Ta täljaren först: addera 6 och −1."
      hint2: "Täljaren blir x⁵. Dela sedan med x²: subtrahera 2 från 5."
      answer: ["x^3", "x³"]
      solution: |
        Täljaren: x^(6 + (−1)) = x⁵

        x⁵ / x² = x^(5−2) = **x³**

prev: del-1/generalrepetition
prev_lesson_title: "Generalrepetition — Del 1"
next: exponentialfunktioner
next_lesson_title: "Exponentialfunktioner"
---

## Varför potenslagarna kommer först

Det här området handlar om **exponentialfunktioner och logaritmer**, matematik där det okända står uppe i exponenten. För att kunna räkna med sådana uttryck måste reglerna för potenser sitta.

Alla lagarna handlar om samma sak: **vad som händer med exponenterna**. Basen ändras aldrig.

## De fem lagarna

| Lag | Formel | Exempel |
|---|---|---|
| Multiplikation | `a^m · a^n = a^(m+n)` | 3⁴ · 3² = 3⁶ |
| Division | `a^m / a^n = a^(m−n)` | 8⁹ / 8⁵ = 8⁴ |
| Potens av potens | `(a^m)^n = a^(m·n)` | (5³)² = 5⁶ |
| Exponent noll | `a⁰ = 1` | 7⁰ = 1 |
| Negativ exponent | `a^(−n) = 1 / a^n` | 2^(−3) = 1/8 |

**Villkoret för de två första:** basen måste vara **densamma**. `3⁴ · 5²` går inte att slå ihop, där finns ingen genväg.

## Addera eller multiplicera?

Det här är den vanligaste förväxlingen:

- `5³ · 5²` → **addera** exponenterna → 5⁵
- `(5³)²` → **multiplicera** exponenterna → 5⁶

Parentesen avgör. Står potensen inuti en parentes som i sin tur är upphöjd, multiplicerar du.

## Varför a⁰ = 1

Det ser konstigt ut, men följer direkt av divisionslagen:

`5³ / 5³ = 5^(3−3) = 5⁰`

Samtidigt är ett tal delat med sig självt alltid 1. Alltså måste `5⁰ = 1`.

Samma resonemang ger negativa exponenter:

`5³ / 5⁵ = 5^(3−5) = 5^(−2)`, och samma bråk är `1/5²`. Alltså `5^(−2) = 1/25`.

## Ordningen i blandade uttryck

Förenkla en del i taget:

`x⁶ · x^(−1) / x²`

1. Täljaren först: `x^(6−1) = x⁵`
2. Sedan divisionen: `x^(5−2) = x³`

Ta aldrig flera steg i huvudet samtidigt, skriv ut varje förenkling.
