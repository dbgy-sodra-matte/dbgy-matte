---
slug: "omlasning-2b/andragradare/parentesmultiplikation"
title: "Parentesmultiplikation"
course: omlasning-2b
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 1
lesson_total: 8

success_criteria:
  - Multiplicera in ett tal eller en term i en parentes
  - Multiplicera ihop två parenteser med hjälp av alla fyra produkterna
  - Hålla reda på tecknen när det står minus i parentesen
  - Förenkla genom att slå ihop termerna som är lika

bank:
  - question: "Utveckla: 3x(x + 4)"
    answer: ["3x² + 12x", "3x^2 + 12x", "12x + 3x²"]
  - question: "Utveckla: (x + 2)(x + 5)"
    answer: ["x² + 7x + 10", "x^2 + 7x + 10"]
  - question: "Hur många produkter får du när du multiplicerar ihop två parenteser med två termer i varje?"
    answer: ["4", "fyra"]
  - question: "Utveckla: (x + 3)(x − 1)"
    answer: ["x² + 2x − 3", "x^2 + 2x - 3"]

how_to:
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Börja med kom-igång-frågorna, de repeterar förra området
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## 1. En term in i en parentes

  Utveckla `4x(2x + 3)`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Multiplicera in i första termen | 4x · 2x | 8x² |
  | Multiplicera in i andra termen | 4x · 3 | 12x |
  | Skriv ihop | — | **8x² + 12x** |

  > `x · x = x²`. Multiplicerar du två x får du x i kvadrat, det är så andragradstermen uppstår.

  ## 2. Två parenteser: fyra produkter

  Utveckla `(x + 2)(x + 6)`.

  Varje term i första parentesen ska gånga **varje** term i den andra. Två gånger två = **fyra produkter**.

  | Produkt | Uträkning | Resultat |
  |---|---|---|
  | x · x | — | x² |
  | x · 6 | — | 6x |
  | 2 · x | — | 2x |
  | 2 · 6 | — | 12 |

  Slå ihop de två x-termerna: 6x + 2x = 8x

  Svar: **x² + 8x + 12**

  ## 3. När det står minus

  Utveckla `(x + 3)(x − 5)`.

  | Produkt | Resultat |
  |---|---|
  | x · x | x² |
  | x · (−5) | −5x |
  | 3 · x | +3x |
  | 3 · (−5) | −15 |

  Slå ihop: −5x + 3x = −2x

  Svar: **x² − 2x − 15**

  > **Tecknet följer med talet.** Står det `− 5` i parentesen är talet `−5` i alla produkter det ingår i. Skriv gärna ut minustecknet i varje produkt tills det sitter.

exercises:
  E:
    - equation: "Utveckla: 5x(x + 3)"
      hint1: "Multiplicera in 5x i båda termerna inne i parentesen."
      hint2: "5x · x = 5x² och 5x · 3 = 15x."
      answer: ["5x² + 15x", "5x^2 + 15x", "15x + 5x²"]
      solution: |
        5x · x = 5x²
        5x · 3 = 15x

        **5x² + 15x**

    - equation: "Utveckla: 2x(4x − 7)"
      hint1: "Multiplicera in 2x i båda termerna. Minustecknet följer med."
      hint2: "2x · 4x = 8x² och 2x · (−7) = −14x."
      answer: ["8x² − 14x", "8x^2 - 14x", "8x² - 14x"]
      solution: |
        2x · 4x = 8x²
        2x · (−7) = −14x

        **8x² − 14x**

    - equation: "Utveckla och förenkla: (x + 1)(x + 6)"
      hint1: "Fyra produkter: x·x, x·6, 1·x och 1·6."
      hint2: "Du får x² + 6x + x + 6. Slå ihop de två x-termerna."
      answer: ["x² + 7x + 6", "x^2 + 7x + 6"]
      solution: |
        x · x = x²
        x · 6 = 6x
        1 · x = x
        1 · 6 = 6

        6x + x = 7x

        **x² + 7x + 6**

    - equation: "Utveckla och förenkla: (x + 4)(x − 2)"
      hint1: "Talet i andra parentesen är −2. Ta med minustecknet i produkterna."
      hint2: "x·x = x², x·(−2) = −2x, 4·x = 4x, 4·(−2) = −8. Slå ihop −2x + 4x."
      answer: ["x² + 2x − 8", "x^2 + 2x - 8", "x² + 2x - 8"]
      solution: |
        x · x = x²
        x · (−2) = −2x
        4 · x = 4x
        4 · (−2) = −8

        −2x + 4x = 2x

        **x² + 2x − 8**

    - equation: "Utveckla och förenkla: (x − 3)(x − 5)"
      hint1: "Båda talen är negativa: −3 och −5."
      hint2: "Sista produkten är (−3) · (−5) = +15. Minus gånger minus blir plus."
      answer: ["x² − 8x + 15", "x^2 - 8x + 15", "x² - 8x + 15"]
      solution: |
        x · x = x²
        x · (−5) = −5x
        (−3) · x = −3x
        (−3) · (−5) = **+15**

        −5x − 3x = −8x

        **x² − 8x + 15**

    - equation: "Utveckla och förenkla: (2x + 1)(x + 4)"
      hint1: "Första termen är 2x, den ska gånga båda termerna i andra parentesen."
      hint2: "2x·x = 2x², 2x·4 = 8x, 1·x = x, 1·4 = 4. Slå ihop 8x + x."
      answer: ["2x² + 9x + 4", "2x^2 + 9x + 4"]
      solution: |
        2x · x = 2x²
        2x · 4 = 8x
        1 · x = x
        1 · 4 = 4

        8x + x = 9x

        **2x² + 9x + 4**

prev: ekvationssystem/redo-att-tenta
prev_lesson_title: "Redo att tenta? — Ekvationssystem"
next: kvadreringsreglerna
next_lesson_title: "Kvadreringsreglerna"
---

## Varför det här kommer först

Hela det här området handlar om **andragradare**, uttryck och ekvationer med x². Innan du kan lösa dem måste du kunna skapa dem, och det är precis vad parentesmultiplikation gör: två parenteser gånger varandra ger ett x²-uttryck.

Senare i området går du åt andra hållet (faktorisering och nollproduktmetoden). Då är det här steget din kontroll.

## En term in i en parentes

Allt utanför parentesen ska gånga **allt** inuti:

`4x(2x + 3) = 4x · 2x + 4x · 3 = 8x² + 12x`

Missar du en term blir hela uttrycket fel. Gå igenom dem en i taget.

## Två parenteser: fyra produkter

`(x + 2)(x + 6)`

Varje term i den första parentesen ska gånga varje term i den andra:

| | x | +6 |
|---|---|---|
| **x** | x² | 6x |
| **+2** | 2x | 12 |

Sedan slår du ihop det som är lika: `6x + 2x = 8x`.

`(x + 2)(x + 6) = x² + 8x + 12`

> **Räkna produkterna.** Två termer gånger två termer ska alltid ge **fyra** produkter innan du förenklar. Har du bara tre har du missat en.

## Tecknen: där felen sitter

Står det minus i parentesen hör minustecknet till talet.

`(x + 3)(x − 5)`: talet är `−5`, inte `5`.

- `x · (−5) = −5x`
- `3 · (−5) = −15`

Och två minus ger plus: i `(x − 3)(x − 5)` blir sista produkten `(−3)(−5) = +15`.

## Förenkla till sist

Efter de fyra produkterna står det oftast två x-termer. Slå ihop dem:

`x² − 5x + 3x − 15` → `x² − 2x − 15`

x² och konstanten kan aldrig slås ihop med x-termen, de är olika sorter.

## Kontrollera med ett tal

Osäker? Sätt in ett tal, t.ex. x = 2, i **både** originalet och ditt svar. Blir det samma tal är du med stor sannolikhet rätt ute.

`(2 + 3)(2 − 5) = 5 · (−3) = −15`
`2² − 2·2 − 15 = 4 − 4 − 15 = −15` ✓
