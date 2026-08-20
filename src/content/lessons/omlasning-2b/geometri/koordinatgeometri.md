---
slug: "omlasning-2b/geometri/koordinatgeometri"
title: "Koordinatgeometri"
course: omlasning-2b
moment: geometri
moment_title: "Geometri"
lesson_number: 6
lesson_total: 6

success_criteria:
  - Räkna ut avståndet mellan två punkter med avståndsformeln
  - Bestämma mittpunkten mellan två punkter
  - Avgöra om en triangel är likbent genom att jämföra sidlängder
  - Se sambandet mellan avståndsformeln och Pythagoras sats

bank:
  - question: "Bestäm avståndet mellan (0, 0) och (3, 4)."
    answer: ["5"]
  - question: "Vilken formel används för avståndet mellan två punkter?"
    answer: ["√((x2−x1)² + (y2−y1)²)", "avståndsformeln", "Pythagoras sats"]
  - question: "Bestäm mittpunkten mellan (2, 4) och (8, 10)."
    answer: ["(5, 7)", "5, 7", "(5,7)"]
  - question: "Bestäm avståndet mellan (1, 2) och (4, 6)."
    answer: ["5"]

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Ha miniräknare framme för rötterna
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar är området genomtränat, gå vidare till "Redo att tenta?"

worked_example: |
  ## 1. Avståndsformeln

  Avståndet mellan punkterna `(x₁, y₁)` och `(x₂, y₂)`:

  `d = √((x₂ − x₁)² + (y₂ − y₁)²)`

  ## 2. Ett räkneexempel

  *Bestäm avståndet mellan (−1, 6) och (5, −2).*

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Skillnad i x | 5 − (−1) | 6 |
  | Skillnad i y | −2 − 6 | −8 |
  | Kvadrera och addera | 6² + (−8)² = 36 + 64 | 100 |
  | Dra roten | √100 | **10** |

  > Kvadreringen gör att tecknen försvinner, det spelar ingen roll vilken punkt du kallar punkt 1. Testa gärna åt andra hållet: skillnaderna blir −6 och 8, och kvadraterna blir desamma.

  ## 3. Det är Pythagoras sats

  Avståndsformeln är inget nytt. Ritar du en rätvinklig triangel med sträckan som hypotenusa blir:

  - Ena kateten = skillnaden i x
  - Andra kateten = skillnaden i y
  - Hypotenusan = avståndet

  Pythagoras sats `a² + b² = c²` ger då precis formeln ovan.

  ## 4. Mittpunkten

  Mittpunkten mellan två punkter är **medelvärdet av koordinaterna**:

  `M = ((x₁ + x₂) / 2 , (y₁ + y₂) / 2)`

  Mellan (2, 4) och (8, 10): `((2+8)/2 , (4+10)/2)` = **(5, 7)**

  ## 5. Är triangeln likbent?

  En triangel är **likbent** om två sidor är lika långa.

  *Har triangeln med hörnen (1, 3), (3, 1) och (6, 6) två lika långa sidor?*

  | Sida | Uträkning | Längd |
  |---|---|---|
  | (1,3)–(3,1) | √(2² + (−2)²) = √8 | ≈ 2,83 |
  | (1,3)–(6,6) | √(5² + 3²) = √34 | ≈ 5,83 |
  | (3,1)–(6,6) | √(3² + 5²) = √34 | ≈ 5,83 |

  Två sidor är lika långa (√34) → **ja, triangeln är likbent**.

  Metoden är alltid densamma: räkna ut alla tre sidorna och jämför.

exercises:
  E:
    - equation: "Bestäm avståndet mellan punkterna (2, 1) och (6, 4)."
      hint1: "Räkna ut skillnaden i x och skillnaden i y."
      hint2: "Skillnaderna är 4 och 3. Kvadrera, addera och dra roten: √(16 + 9)."
      answer: ["5"]
      solution: |
        Skillnad i x: 6 − 2 = 4
        Skillnad i y: 4 − 1 = 3

        d = √(4² + 3²) = √(16 + 9) = √25 = **5**

    - equation: "Bestäm avståndet mellan punkterna (−2, 3) och (4, 11)."
      hint1: "Skillnad i x: 4 − (−2). Tänk på minustecknet."
      hint2: "Skillnaderna är 6 och 8. √(36 + 64)."
      answer: ["10"]
      solution: |
        Skillnad i x: 4 − (−2) = 6
        Skillnad i y: 11 − 3 = 8

        d = √(6² + 8²) = √100 = **10**

    - equation: "Bestäm avståndet mellan punkterna (1, 5) och (4, 9)."
      hint1: "Skillnaderna är 3 och 4."
      hint2: "√(9 + 16) = √25."
      answer: ["5"]
      solution: |
        d = √(3² + 4²) = √25 = **5**

    - equation: "Bestäm mittpunkten mellan (3, 2) och (9, 8). Svara på formen (x, y)."
      hint1: "Mittpunkten är medelvärdet av koordinaterna."
      hint2: "((3+9)/2 , (2+8)/2)."
      answer: ["(6, 5)", "6, 5", "(6,5)"]
      solution: |
        x: (3 + 9) / 2 = 6
        y: (2 + 8) / 2 = 5

        Mittpunkten är **(6, 5)**

    - equation: "Bestäm mittpunkten mellan (−4, 1) och (2, 7). Svara på formen (x, y)."
      hint1: "Även med negativa tal är det medelvärdet som gäller."
      hint2: "((−4+2)/2 , (1+7)/2)."
      answer: ["(−1, 4)", "(-1, 4)", "−1, 4", "-1, 4"]
      solution: |
        x: (−4 + 2) / 2 = −1
        y: (1 + 7) / 2 = 4

        Mittpunkten är **(−1, 4)**

    - equation: "En triangel har hörnen (0, 0), (6, 0) och (3, 4). Är triangeln likbent? Svara ja eller nej."
      hint1: "Räkna ut alla tre sidlängderna med avståndsformeln."
      hint2: "Sidorna från (3,4) till de båda andra hörnen: √(3² + 4²) = 5 vardera. Basen är 6."
      answer: ["ja", "Ja"]
      solution: |
        (0,0)–(6,0): 6
        (0,0)–(3,4): √(3² + 4²) = √25 = 5
        (6,0)–(3,4): √((−3)² + 4²) = √25 = 5

        Två sidor är lika långa (5 och 5) → **ja**, triangeln är likbent.

prev: kordasatsen
prev_lesson_title: "Kordasatsen"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Geometri"
---

## Geometri med koordinater

I koordinatgeometri används punkternas koordinater i stället för linjal och gradskiva. Två formler räcker för E-nivån.

## Avståndsformeln

`d = √((x₂ − x₁)² + (y₂ − y₁)²)`

Arbetsgång:

1. Räkna ut **skillnaden i x** och **skillnaden i y**
2. **Kvadrera** båda
3. **Addera** dem
4. **Dra roten**

Exempel med (−1, 6) och (5, −2):

`√(6² + (−8)²) = √(36 + 64) = √100 = 10`

> Ordningen på punkterna spelar ingen roll. Kvadreringen gör alla tecken positiva, så du får samma svar oavsett vilken punkt du räknar från.

## Det är Pythagoras sats i förklädnad

Ritar du sträckan mellan två punkter och lägger till en vågrät och en lodrät sträcka får du en rätvinklig triangel:

- Skillnaden i **x** är ena kateten
- Skillnaden i **y** är andra kateten
- **Avståndet** är hypotenusan

`a² + b² = c²` ger då exakt avståndsformeln. Kommer du inte ihåg formeln kan du alltså rita triangeln och använda Pythagoras.

## Mittpunkten

`M = ((x₁ + x₂) / 2 , (y₁ + y₂) / 2)`

Alltså **medelvärdet av x-koordinaterna** och **medelvärdet av y-koordinaterna**. Ingen rot, ingen kvadrering, bara två medelvärden.

Det fungerar också med negativa tal: mittpunkten mellan (−4, 1) och (2, 7) är ((−4+2)/2, (1+7)/2) = (−1, 4).

## Likbent triangel

En vanlig uppgiftstyp: *"En triangel har hörnen … Är den likbent?"*

Metoden är alltid densamma:

1. Räkna ut **alla tre** sidlängderna med avståndsformeln
2. Jämför dem
3. Två lika långa sidor → likbent. Tre lika → liksidig.

Svara i klartext med motivering:

> *Två av sidorna har längden √34, alltså är triangeln likbent.*

Låt gärna svaren stå kvar som rötter när du jämför, `√34` och `√34` är uppenbart lika, medan 5,83 och 5,83 kan dölja en avrundningsskillnad.
