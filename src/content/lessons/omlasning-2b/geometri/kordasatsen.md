---
slug: "omlasning-2b/geometri/kordasatsen"
title: "Kordasatsen"
course: omlasning-2b
moment: geometri
moment_title: "Geometri"
lesson_number: 5
lesson_total: 6

success_criteria:
  - Veta vad en korda är
  - Använda kordasatsen, produkten av delarna är lika för båda kordorna
  - Ställa upp och lösa ekvationen för en okänd delsträcka
  - Rimlighetsbedöma svaret mot figuren

bank:
  - question: "Vad kallas en sträcka mellan två punkter på en cirkels rand?"
    answer: ["Korda", "en korda", "kordan"]
    solution: |
      En sträcka mellan två punkter på cirkelns rand kallas en **korda**.
      (Går den dessutom genom mittpunkten är den en diameter.)
  - question: "Två kordor skär varandra. Den ena delas i 4 och 6, den andra i 3 och x. Bestäm x."
    answer: ["8"]
    solution: |
      Kordasatsen: delarna på den ena kordan multiplicerade ihop är lika med delarna på den andra.
      4 · 6 = 3 · x, alltså 24 = 3x.
      Dela med 3: **x = 8**
  - question: "Vilken formel gäller för två kordor som skär varandra?"
    answer: ["a · b = c · d", "ab = cd", "produkten av delarna är lika"]
    solution: |
      Kordasatsen säger att produkten av de två delarna är lika stor för båda kordorna.
      Svar: **a · b = c · d**
  - question: "Den ena kordan delas i 5 och 6. Den andra delas i 10 och x. Bestäm x."
    answer: ["3"]
    solution: |
      Kordasatsen: 5 · 6 = 10 · x, alltså 30 = 10x.
      Dela med 10: **x = 3**

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Vad en korda är

  En **korda** är en rak sträcka mellan två punkter på cirkelns rand. Diametern är den längsta kordan, den som går genom mitten.

  ## Satsen

  När **två kordor skär varandra** inuti cirkeln delas båda i två delar. Då gäller:

  `a · b = c · d`

  I ord: **produkten av den ena kordans två delar är lika med produkten av den andras.**

  ## Räkneexempel

  *Kordan AB delas av skärningspunkten i 6 och 4. Kordan CD delas i 3 och x. Bestäm x.*

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Ställ upp satsen | 6 · 4 = 3 · x | 24 = 3x |
  | Lös ut x | 24 / 3 | **x = 8** |

  **Kontroll:** 6 · 4 = 24 och 3 · 8 = 24 ✓

  ## Rimlighetskolla mot figuren

  Är den ena delen av en korda kort måste den andra vara lång, produkten ska ju bli densamma.

  Får du ett svar som ser orimligt ut jämfört med figuren (till exempel en delsträcka längre än hela cirkelns diameter) har du troligen multiplicerat fel delar.

  > **Vanligt fel:** att multiplicera en del av den ena kordan med en del av den *andra*. Satsen gäller **inom** varje korda: de två bitarna av samma korda multipliceras med varandra.

exercises:
  E:
    - equation: "Två kordor skär varandra i cirkeln. Den ena delas i 6 och 4, den andra i 3 och x. Bestäm x."
      graf:
        typ: "figur"
        figur:
          vy: [-3.4, -3.4, 3.4, 3.4]
          cirklar:
            - c: [0, 0]
              r: 3
          linjer:
            - fran: [-2.9, 0.8]
              till: [2.9, -0.8]
            - fran: [-0.8, 2.9]
              till: [1.6, -2.54]
          punkter:
            - p: [-2.9, 0.8]
              namn: "A"
              plats: "vanster"
            - p: [2.9, -0.8]
              namn: "B"
              plats: "hoger"
            - p: [-0.8, 2.9]
              namn: "C"
              plats: "over"
            - p: [1.6, -2.54]
              namn: "D"
              plats: "under"
          matt:
            - fran: [-2.9, 0.8]
              till: [0.15, 0.36]
              text: "6"
            - fran: [0.15, 0.36]
              till: [2.9, -0.8]
              text: "4"
      hint1: "Kordasatsen: produkten av den ena kordans delar är lika med produkten av den andras."
      hint2: "6 · 4 = 3 · x, alltså 24 = 3x."
      answer: ["8"]
      solution: |
        6 · 4 = 3 · x
        24 = 3x
        **x = 8**

        Kontroll: 6 · 4 = 24 och 3 · 8 = 24 ✓

    - equation: "Två kordor skär varandra. Den ena delas i 5 och 8, den andra i 4 och x. Bestäm x."
      hint1: "Ställ upp 5 · 8 = 4 · x."
      hint2: "40 = 4x."
      answer: ["10"]
      solution: |
        5 · 8 = 4 · x
        40 = 4x
        **x = 10**

    - equation: "Två kordor skär varandra. Den ena delas i 9 och 2, den andra i 6 och x. Bestäm x."
      hint1: "Produkten av den ena kordans delar: 9 · 2."
      hint2: "18 = 6x."
      answer: ["3"]
      solution: |
        9 · 2 = 6 · x
        18 = 6x
        **x = 3**

    - equation: "Två kordor skär varandra. Den ena delas i 12 och 3, den andra i x och 9. Bestäm x."
      hint1: "12 · 3 = x · 9."
      hint2: "36 = 9x."
      answer: ["4"]
      solution: |
        12 · 3 = x · 9
        36 = 9x
        **x = 4**

    - equation: "Två kordor skär varandra. Den ena delas i 10 och 6, den andra i 15 och x. Bestäm x."
      hint1: "10 · 6 = 15 · x."
      hint2: "60 = 15x."
      answer: ["4"]
      solution: |
        10 · 6 = 15 · x
        60 = 15x
        **x = 4**

    - equation: "Två kordor skär varandra. Den ena delas i 7 och 6, den andra i 14 och x. Bestäm x."
      hint1: "7 · 6 = 14 · x."
      hint2: "42 = 14x."
      answer: ["3"]
      solution: |
        7 · 6 = 14 · x
        42 = 14x
        **x = 3**

        Rimligt: den andra kordan har en lång del (14), så den andra delen måste vara kort.

prev: randvinkelsatsen
prev_lesson_title: "Randvinkelsatsen"
next: koordinatgeometri
next_lesson_title: "Koordinatgeometri"
---

## Kordor

En **korda** är en rak sträcka mellan två punkter på cirkelns rand. Den längsta möjliga kordan är **diametern**, som går genom medelpunkten.

## Satsen

När två kordor **skär varandra inuti cirkeln** delas var och en i två delar. Kalla den ena kordans delar `a` och `b`, den andras `c` och `d`. Då gäller:

`a · b = c · d`

I ord: **produkten av den ena kordans två delar är lika med produkten av den andras.**

Det är ett förvånande resultat, det spelar ingen roll var kordorna ligger eller hur stor cirkeln är. Produkten blir alltid densamma.

## Arbetsgången

1. Skriv ut vilka två sträckor som hör till **samma** korda
2. Ställ upp `a · b = c · d`
3. Sätt in talen och lös ekvationen
4. Kontrollera att båda produkterna blir lika

Det är en enkel ekvation, det som avgör är att du parar ihop rätt sträckor.

## Fällan

Satsen gäller **inom** varje korda. De två bitarna av **samma** korda multipliceras med varandra.

Ett vanligt fel är att multiplicera en del av den ena kordan med en del av den andra. Titta på figuren och följ varje korda från ände till ände genom skärningspunkten, de två bitarna du passerar hör ihop.

## Rimlighetskoll

Produkten ska bli densamma för båda kordorna. Är den ena kordans ena del **stor**, måste dess andra del vara **liten**.

Får du ett svar som är längre än cirkelns diameter har något gått fel, ingen korda kan vara längre än diametern.

## Kontrollen

Räkna ut båda produkterna med ditt svar insatt:

`6 · 4 = 24` och `3 · 8 = 24` ✓

Blir de lika är svaret rätt. Det tar fem sekunder och fångar alla räknefel.
