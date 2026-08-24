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
    solution: |
      Rita en rätvinklig triangel: 3 steg i sidled och 4 steg uppåt.
      Pythagoras sats: 3² + 4² = 9 + 16 = 25.
      Roten ur 25 = **5**
  - question: "Vilken formel används för avståndet mellan två punkter?"
    answer: ["√((x2−x1)² + (y2−y1)²)", "avståndsformeln", "Pythagoras sats"]
    solution: |
      Avståndsformeln är Pythagoras sats i koordinatsystemet: skillnaden i x är ena kateten och skillnaden i y den andra.
      Svar: **√((x₂ − x₁)² + (y₂ − y₁)²)**
  - question: "Bestäm mittpunkten mellan (2, 4) och (8, 10)."
    answer: ["(5, 7)", "5, 7", "(5,7)"]
    solution: |
      Mittpunkten är medelvärdet av x-värdena och medelvärdet av y-värdena var för sig.
      x: (2 + 8) / 2 = 5. y: (4 + 10) / 2 = 7.
      Svar: **(5, 7)**
  - question: "Bestäm avståndet mellan (1, 2) och (4, 6)."
    answer: ["5"]
    solution: |
      Skillnaden i x är 4 − 1 = 3 och skillnaden i y är 6 − 2 = 4.
      Pythagoras: 3² + 4² = 25, och roten ur 25 = **5**

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Ha miniräknare framme för rötterna
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar är området genomtränat, gå vidare till "Redo att tenta?"

worked_example: |
  ## Avståndsformeln

  Avståndet mellan punkterna `(x₁, y₁)` och `(x₂, y₂)`:

  `d = √((x₂ − x₁)² + (y₂ − y₁)²)`

  ## Ett räkneexempel

  *Bestäm avståndet mellan (−1, 6) och (5, −2).*

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Skillnad i x | 5 − (−1) | 6 |
  | Skillnad i y | −2 − 6 | −8 |
  | Kvadrera och addera | 6² + (−8)² = 36 + 64 | 100 |
  | Dra roten | √100 | **10** |

  > Kvadreringen gör att tecknen försvinner, det spelar ingen roll vilken punkt du kallar punkt 1. Testa gärna åt andra hållet: skillnaderna blir −6 och 8, och kvadraterna blir desamma.

  ## Det är Pythagoras sats

  Avståndsformeln är inget nytt. Ritar du en rätvinklig triangel med sträckan som hypotenusa blir:

  - Ena kateten = skillnaden i x
  - Andra kateten = skillnaden i y
  - Hypotenusan = avståndet

  Pythagoras sats `a² + b² = c²` ger då precis formeln ovan.

  ## Mittpunkten

  Mittpunkten mellan två punkter är **medelvärdet av koordinaterna**:

  `M = ((x₁ + x₂) / 2 , (y₁ + y₂) / 2)`

  Mellan (2, 4) och (8, 10): `((2+8)/2 , (4+10)/2)` = **(5, 7)**

  ## Är triangeln likbent?

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
      answer: ["ja", "Ja", "ja!"]
      solution: |
        (0,0)–(6,0): 6
        (0,0)–(3,4): √(3² + 4²) = √25 = 5
        (6,0)–(3,4): √((−3)² + 4²) = √25 = 5

        Två sidor är lika långa (5 och 5) → **ja**, triangeln är likbent.

    - equation: "I en rätvinklig triangel är hypotenusan 15 cm och en katet 9 cm. Beräkna triangelns area."
      hint1: "Arean kräver båda kateterna. Ta fram den okända med Pythagoras sats först."
      hint2: "9² + b² = 15² ger b² = 144."
      answer: ["54", "54 cm²", "54 cm2", "area 54"]
      solution: |
        Ta fram den andra kateten:

        9² + b² = 15²
        81 + b² = 225
        b² = 144, alltså b = 12 cm

        Arean av en rätvinklig triangel är kateterna gånger varandra genom två:

        (9 · 12) / 2 = **54 cm²**

        Två steg: Pythagoras först, area sedan.

    - equation: "Ett rätblock har kanterna 3 cm, 4 cm och 12 cm. Hur lång är rymddiagonalen?"
      hint1: "Använd Pythagoras två gånger: först diagonalen i bottenytan, sedan den snett upp."
      hint2: "Bottendiagonalen är √(3² + 4²) = 5. Den bildar en katet tillsammans med höjden 12."
      answer: ["13", "13 cm"]
      solution: |
        **Steg 1, bottenytan:** diagonalen d uppfyller d² = 3² + 4² = 25, alltså d = 5 cm.

        **Steg 2, rymddiagonalen:** den bildar en rätvinklig triangel med bottendiagonalen 5 och höjden 12.

        r² = 5² + 12² = 25 + 144 = 169

        **r = 13 cm**

        Pythagoras sats fungerar i tre dimensioner också, du använder den bara två gånger.

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSe2JValCzF9y0kwQyx6pllnD3od3uJ1BqZbRRN8eXaEwkUiKw/viewform"
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
