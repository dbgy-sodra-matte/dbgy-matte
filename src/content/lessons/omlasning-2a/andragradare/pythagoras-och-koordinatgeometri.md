---
slug: "omlasning-2a/andragradare/pythagoras-och-koordinatgeometri"
title: "Pythagoras sats och koordinatgeometri"
course: omlasning-2a
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 3
lesson_total: 9

success_criteria:
  - Använda Pythagoras sats för att räkna ut en sida i en rätvinklig triangel
  - Bestämma avståndet mellan två punkter i ett koordinatsystem
  - Bestämma mittpunkten mellan två punkter
  - Se att avståndsformeln bara är Pythagoras sats i koordinatsystemet

bank:
  - question: "Kateterna i en rätvinklig triangel är 9 och 12. Hur lång är hypotenusan?"
    answer: ["15", "15 le", "15 längdenheter"]
    solution: |
      Pythagoras sats: a² + b² = c².
      9² + 12² = 81 + 144 = 225.
      Roten ur 225 = **15**
  - question: "Bestäm avståndet mellan punkterna (2, 1) och (10, 7)."
    answer: ["10", "10 le", "10 längdenheter"]
    solution: |
      Skillnaden i x är 10 − 2 = 8 och skillnaden i y är 7 − 1 = 6.
      Pythagoras: 8² + 6² = 64 + 36 = 100.
      Roten ur 100 = **10**
  - question: "Bestäm mittpunkten mellan (−6, 2) och (4, 10)."
    answer: ["(−1, 6)", "(-1, 6)", "-1, 6", "−1, 6", "(-1,6)", "(−1,6)"]
    solution: |
      Mittpunkten är medelvärdet av x-värdena och medelvärdet av y-värdena var för sig.
      x: (−6 + 4) / 2 = −1. y: (2 + 10) / 2 = 6.
      Svar: **(−1, 6)**
  - question: "Vilken sida i en rätvinklig triangel kallas hypotenusan?"
    answer: ["den längsta", "den längsta sidan", "sidan mitt emot räta vinkeln", "mitt emot räta vinkeln", "längsta sidan"]
    solution: |
      Hypotenusan är **den längsta sidan, mitt emot den räta vinkeln**.
      De två andra sidorna kallas kateter, och det är de som kvadreras och adderas.

how_to:
  - Börja med repetitionen högst upp, den håller tidigare delmoment vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Pythagoras sats

  I en **rätvinklig** triangel gäller `a² + b² = c²`, där c är hypotenusan, den längsta sidan, mitt emot den räta vinkeln.

  Räkna ut hypotenusan när kateterna är 9 och 12:

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Kvadrera kateterna | 9² = 81, 12² = 144 | — |
  | Addera | 81 + 144 | c² = 225 |
  | Dra roten | √225 | **c = 15** |

  ## Baklänges: en katet saknas

  Hypotenusan är 25 och en katet är 7. Hur lång är den andra?

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Skriv upp satsen | 7² + b² = 25² | 49 + b² = 625 |
  | Flytta över 49 | 625 − 49 | b² = 576 |
  | Dra roten | √576 | **b = 24** |

  > När hypotenusan är känd **subtraherar** du. Adderar du av gammal vana får du ett svar som är längre än hypotenusan, omöjligt i en rätvinklig triangel, så det är lätt att upptäcka.

  ## Avstånd mellan två punkter

  Avståndsformeln är Pythagoras sats i koordinatsystemet. Skillnaden i x är ena kateten, skillnaden i y är den andra, och avståndet är hypotenusan.

  Bestäm avståndet mellan `(2, 1)` och `(10, 7)`:

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Skillnad i x | 10 − 2 | 8 |
  | Skillnad i y | 7 − 1 | 6 |
  | Pythagoras | 8² + 6² = 64 + 36 | 100 |
  | Dra roten | √100 | **10 längdenheter** |

  > Ordningen spelar ingen roll. Räknar du 2 − 10 = −8 blir kvadraten ändå 64. Skillnaderna kvadreras, så minustecken försvinner av sig själva.

  ## Mittpunkten

  Mittpunkten är medelvärdet av koordinaterna, var för sig.

  Mittpunkten mellan `(−6, 2)` och `(4, 10)`:

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | x-koordinaten | (−6 + 4) / 2 | −1 |
  | y-koordinaten | (2 + 10) / 2 | 6 |

  Mittpunkten är **(−1, 6)**.

  ## Är triangeln likbent?

  Likbent betyder att två sidor är lika långa. Räkna ut alla tre sidorna med avståndsformeln och jämför.

exercises:
  E:
    - equation: "Kateterna i en rätvinklig triangel är 9 och 12 längdenheter. Hur lång är hypotenusan?"
      hint1: "Pythagoras sats: kvadrera båda kateterna och addera."
      hint2: "81 + 144 = 225. Vilket tal gånger sig självt blir 225?"
      answer: ["15", "15 le", "15 längdenheter", "c = 15"]
      solution: |
        9² + 12² = 81 + 144 = 225

        √225 = **15 längdenheter**
      graf:
        typ: figur
        figur:
          vy: [-1, -1, 14, 11]
          polygon: [[0, 0], [12, 0], [0, 9]]
          ratvinklar: [{ vid: [0, 0], mot1: [12, 0], mot2: [0, 9] }]
          matt:
            - { fran: [0, 0], till: [12, 0], text: "12" }
            - { fran: [0, 0], till: [0, 9], text: "9" }

    - equation: "Hypotenusan i en rätvinklig triangel är 25 och en katet är 7. Hur lång är den andra kateten?"
      hint1: "Här är hypotenusan känd, så du ska subtrahera i stället för att addera."
      hint2: "7² + b² = 25², alltså 49 + b² = 625."
      answer: ["24", "24 le", "24 längdenheter", "b = 24"]
      solution: |
        7² + b² = 25²
        49 + b² = 625
        b² = 576

        √576 = **24 längdenheter**

        Kontroll: 7² + 24² = 49 + 576 = 625 = 25² ✓

    - equation: "Bestäm avståndet mellan punkterna (2, 1) och (10, 7)."
      hint1: "Räkna ut hur många steg det är i sidled och hur många i höjdled."
      hint2: "8 steg i x-led och 6 i y-led. Använd Pythagoras på dem."
      answer: ["10", "10 le", "10 längdenheter"]
      solution: |
        Skillnad i x: 10 − 2 = 8
        Skillnad i y: 7 − 1 = 6

        8² + 6² = 64 + 36 = 100

        √100 = **10 längdenheter**
      graf:
        typ: figur
        figur:
          vy: [0, 0, 12, 9]
          linjer:
            - { fran: [2, 1], till: [10, 7] }
            - { fran: [2, 1], till: [10, 1], streckad: true }
            - { fran: [10, 1], till: [10, 7], streckad: true }
          punkter:
            - { p: [2, 1], namn: "(2, 1)", plats: "under", fylld: true }
            - { p: [10, 7], namn: "(10, 7)", plats: "over", fylld: true }
          matt:
            - { fran: [2, 1], till: [10, 1], text: "8" }
            - { fran: [10, 1], till: [10, 7], text: "6" }

    - equation: "Bestäm avståndet mellan punkterna (−3, 4) och (2, 16)."
      hint1: "Skillnaden i x är 2 − (−3). Var noga med dubbelminus."
      hint2: "Skillnaden i x är 5 och i y är 12. 5² + 12² = ?"
      answer: ["13", "13 le", "13 längdenheter"]
      solution: |
        Skillnad i x: 2 − (−3) = 5
        Skillnad i y: 16 − 4 = 12

        5² + 12² = 25 + 144 = 169

        √169 = **13 längdenheter**

    - equation: "Bestäm mittpunkten mellan punkterna (−6, 2) och (4, 10)."
      hint1: "Mittpunkten är medelvärdet av koordinaterna, en axel i taget."
      hint2: "x: (−6 + 4) delat med 2. Gör sedan samma sak med y-värdena."
      answer: ["(−1, 6)", "(-1, 6)", "-1, 6", "−1, 6", "(-1,6)", "(−1,6)"]
      solution: |
        x-koordinaten: (−6 + 4) / 2 = −2 / 2 = −1
        y-koordinaten: (2 + 10) / 2 = 12 / 2 = 6

        Mittpunkten är **(−1, 6)**

    - equation: "Bestäm mittpunkten mellan punkterna (3, −5) och (11, 1)."
      hint1: "Samma metod: medelvärdet av x-värdena, sedan medelvärdet av y-värdena."
      hint2: "y-koordinaten blir (−5 + 1) delat med 2."
      answer: ["(7, −2)", "(7, -2)", "7, -2", "7, −2", "(7,-2)", "(7,−2)"]
      solution: |
        x-koordinaten: (3 + 11) / 2 = 14 / 2 = 7
        y-koordinaten: (−5 + 1) / 2 = −4 / 2 = −2

        Mittpunkten är **(7, −2)**

prev: nollproduktmetoden
prev_lesson_title: "Nollproduktmetoden"
next: parentesmultiplikation
next_lesson_title: "Parentesmultiplikation"
---

## Pythagoras sats

I en **rätvinklig** triangel gäller:

`a² + b² = c²`

- `a` och `b` är **kateterna**, de två sidor som bildar den räta vinkeln
- `c` är **hypotenusan**, den längsta sidan, mitt emot den räta vinkeln

Satsen gäller bara när triangeln har en vinkel på 90°. Saknas den räta vinkeln fungerar formeln inte.

### Räkna ut hypotenusan

Kvadrera kateterna, addera, dra roten.

| Kateter | a² + b² | Hypotenusa |
|---|---|---|
| 3 och 4 | 9 + 16 = 25 | 5 |
| 9 och 12 | 81 + 144 = 225 | 15 |
| 8 och 15 | 64 + 225 = 289 | 17 |

### Räkna ut en katet

Är hypotenusan känd **subtraherar** du i stället:

`7² + b² = 25²` → `49 + b² = 625` → `b² = 576` → `b = 24`

> Kontrollen är enkel: hypotenusan måste vara triangelns längsta sida. Får du en katet som är längre än hypotenusan har du adderat när du skulle subtrahera.

## Avstånd mellan två punkter

Två punkter i ett koordinatsystem bildar en osynlig rätvinklig triangel. Skillnaden i x är ena kateten, skillnaden i y är den andra, och avståndet du söker är hypotenusan.

Avståndet mellan `(2, 1)` och `(10, 7)`:

1. Skillnad i x: `10 − 2 = 8`
2. Skillnad i y: `7 − 1 = 6`
3. Pythagoras: `8² + 6² = 100`
4. Avstånd: `√100 = 10`

Formeln skrivs ofta så här, men det är samma sak:

`d = √((x₂ − x₁)² + (y₂ − y₁)²)`

> Ordningen spelar ingen roll. Räknar du `2 − 10 = −8` blir kvadraten ändå 64. Minustecknen försvinner när skillnaderna kvadreras.

Var däremot noga med **dubbelminus**: skillnaden mellan 2 och −3 är `2 − (−3) = 5`, inte −1.

## Mittpunkten

Mittpunkten mellan två punkter är medelvärdet av koordinaterna, en axel i taget:

`M = ((x₁ + x₂)/2, (y₁ + y₂)/2)`

| Punkterna | x-koordinat | y-koordinat | Mittpunkt |
|---|---|---|---|
| (−6, 2) och (4, 10) | (−6 + 4)/2 = −1 | (2 + 10)/2 = 6 | (−1, 6) |
| (3, −5) och (11, 1) | (3 + 11)/2 = 7 | (−5 + 1)/2 = −2 | (7, −2) |

Här spelar ordningen ingen roll heller, addition är kommutativ.

## Är triangeln likbent?

Likbent betyder två lika långa sidor. Metoden är alltid densamma:

1. Räkna ut alla tre sidorna med avståndsformeln
2. Jämför talen
3. Svara ja eller nej, och skriv ut vilka sidor som var lika

Det räcker inte att titta på figuren, två sidor kan se lika ut och skilja sig med en halv längdenhet.
