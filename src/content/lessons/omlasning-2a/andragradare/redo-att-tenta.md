---
slug: "omlasning-2a/andragradare/redo-att-tenta"
title: "Redo att tenta? — Algebra och andragradare"
course: omlasning-2a
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 9
lesson_total: 9

success_criteria:
  - Klara blandade uppgifter från alla nio delmoment, utan att titta i lösningarna
  - Välja rätt metod till rätt sorts ekvation, utan att någon säger vilken
  - Veta vilket delmoment du behöver träna mer på om något skaver

how_to:
  - Gör alla uppgifter nedan UTAN att öppna lösningarna
  - Rätta dig själv efteråt
  - Allt rätt? Området sitter, kör generalrepetitionen för Del 1
  - Något fel? Lösningen visar vilket delmoment som tränar just det, gå dit, träna, kom tillbaka

worked_example: |
  ## Det svåraste här är metodvalet

  På provet står det inte vilken metod du ska använda. Den här sidan tränar just det — uppgifterna kommer blandat, precis som på Del 1.

  | Ekvationen ser ut så här | Metod |
  |---|---|
  | x² = 49 | Dra roten, svara med ± |
  | x² − 13x = 0 (ingen konstant) | Bryt ut x |
  | (x + 6)(x − 11) = 0 | Nollproduktmetoden |
  | x² + 7x + 10 = 0 (alla tre termer) | pq-formeln |
  | 3x² − 15x + 12 = 0 | Dela med 3 först, sedan pq |
  | x² − 100 (faktorisera) | Konjugatregeln baklänges |

  ## Checklista inför Del 1

  1. **Två lösningar.** Andragradsekvationer har oftast två, och båda krävs för poängen.
  2. **(x + 6)² är inte x² + 36.** Mittentermen 12x finns där.
  3. **Dela aldrig med x.** Bryt ut, annars tappar du lösningen x = 0.
  4. **pq-formeln kräver noll i högerledet och ensamt x².**
  5. **Minsta värdet är ett y-värde**, inte symmetrilinjens x.
  6. **Extremvärdet räknas i originalfunktionen**, inte i den du delat.
  7. **Enhet och tolkning** i problemlösningsuppgifter. Förkasta negativ tid och skriv varför.
  8. **Visa stegen.** Uppställning och metod ger poäng även om slutsvaret blir fel.

exercises:
  E:
    - equation: "Utveckla och förenkla: (x + 4)(x − 9)"
      hint1: "Fyra produkter. Talet i andra parentesen är −9."
      answer: ["x² − 5x − 36", "x^2 - 5x - 36", "x² - 5x - 36", "x²−5x−36"]
      solution: |
        x · x = x², x · (−9) = −9x, 4 · x = 4x, 4 · (−9) = −36
        −9x + 4x = −5x

        **x² − 5x − 36**
        → Tränas i delmoment 4: **Parentesmultiplikation**

    - equation: "Utveckla: (x − 9)²"
      hint1: "Kvadreringsregeln med minus. Glöm inte mittentermen."
      answer: ["x² − 18x + 81", "x^2 - 18x + 81", "x² - 18x + 81", "x²−18x+81"]
      solution: |
        a² = x², −2ab = −2 · x · 9 = −18x, b² = +81

        **x² − 18x + 81**

        Sista termen blir positiv: (−9) · (−9) = +81
        → Tränas i delmoment 5: **Kvadreringsreglerna och konjugatregeln**

    - equation: "Faktorisera: x² − 100"
      hint1: "Två kvadrater med minus emellan."
      answer: ["(x + 10)(x − 10)", "(x - 10)(x + 10)", "(x + 10)(x - 10)", "(x − 10)(x + 10)", "(x+10)(x-10)"]
      solution: |
        x² − 100 = x² − 10²

        Konjugatregeln baklänges: **(x + 10)(x − 10)**
        → Tränas i delmoment 5: **Kvadreringsreglerna och konjugatregeln**

    - equation: "Lös ekvationen: 4x² = 196"
      hint1: "Gör x² ensamt först, dela sedan roten ur båda leden."
      answer: ["±7", "x = ±7", "7 och −7", "7 och -7"]
      solution: |
        4x² = 196
        x² = 49

        **x = ±7**
        → Tränas i delmoment 1: **Enkla andragradsekvationer**

    - equation: "Lös ekvationen: x² − 13x = 0"
      hint1: "Ingen ensam siffra. Bryt ut det som är gemensamt."
      answer: ["x = 0 och x = 13", "0 och 13", "x = 0, x = 13", "13 och 0"]
      solution: |
        x(x − 13) = 0

        x = 0 eller x = 13

        **x = 0 och x = 13**

        Dela aldrig bort x — då försvinner lösningen x = 0.
        → Tränas i delmoment 2: **Nollproduktmetoden**

    - equation: "Lös ekvationen: (x + 6)(x − 11) = 0"
      hint1: "En produkt är noll bara om någon faktor är noll."
      answer: ["x = −6 och x = 11", "−6 och 11", "-6 och 11", "x = -6, x = 11", "11 och −6", "11 och -6"]
      solution: |
        x + 6 = 0 ger x = −6
        x − 11 = 0 ger x = 11

        **x = −6 och x = 11**
        → Tränas i delmoment 2: **Nollproduktmetoden**

    - equation: "Lös ekvationen: x² + 7x + 10 = 0"
      hint1: "Alla tre termerna finns. Använd pq-formeln."
      answer: ["x = −2 och x = −5", "−2 och −5", "-2 och -5", "x = -2, x = -5", "−5 och −2", "-5 och -2"]
      solution: |
        p = 7, q = 10

        x = −3,5 ± √(3,5² − 10)
        x = −3,5 ± √2,25
        x = −3,5 ± 1,5

        **x = −2 och x = −5**
        → Tränas i delmoment 6: **pq-formeln**

    - equation: "Lös ekvationen: 3x² − 15x + 12 = 0"
      hint1: "Det står en trea framför x². Formeln kräver ensam x²."
      answer: ["x = 1 och x = 4", "1 och 4", "x = 1, x = 4", "4 och 1"]
      solution: |
        Dela alla termer med 3:

        x² − 5x + 4 = 0

        p = −5, q = 4

        x = 2,5 ± √(6,25 − 4) = 2,5 ± 1,5

        **x = 1 och x = 4**
        → Tränas i delmoment 6: **pq-formeln**

    - equation: "Bestäm avståndet mellan punkterna (−1, 3) och (7, 9)."
      hint1: "Skillnaden i x är ena kateten, skillnaden i y den andra."
      answer: ["10", "10 le", "10 längdenheter"]
      solution: |
        Skillnad i x: 7 − (−1) = 8
        Skillnad i y: 9 − 3 = 6

        8² + 6² = 64 + 36 = 100

        **10 längdenheter**
        → Tränas i delmoment 3: **Pythagoras sats och koordinatgeometri**

    - equation: "Bestäm nollställena till f(x) = x² − 2x − 35"
      hint1: "Nollställen betyder f(x) = 0. Använd pq-formeln."
      answer: ["x = 7 och x = −5", "7 och −5", "7 och -5", "x = 7, x = -5", "−5 och 7", "-5 och 7"]
      solution: |
        x² − 2x − 35 = 0

        p = −2, q = −35

        x = 1 ± √(1 + 35) = 1 ± 6

        **x = 7 och x = −5**
        → Tränas i delmoment 8: **Andragradsfunktioner algebraiskt**

    - equation: "Bestäm extrempunkten till f(x) = x² − 2x − 35 och ange om det är ett största eller minsta värde."
      hint1: "Symmetrilinjen ligger mitt emellan nollställena. Sätt in den i funktionen."
      answer: ["(1, −36) minsta värde", "(1, -36) minsta", "(1, −36), minsta värde", "(1,-36) minsta värde", "(1, -36) minsta värde", "minimipunkt (1, −36)"]
      solution: |
        Nollställena är 7 och −5, så symmetrilinjen är x = (7 − 5) / 2 = 1

        f(1) = 1 − 2 − 35 = −36

        Tecknet framför x² är positivt, alltså öppnar parabeln uppåt.

        Extrempunkten är **(1, −36)** och det är ett **minsta värde**.
        → Tränas i delmoment 8: **Andragradsfunktioner algebraiskt**

    - equation: "En boll kastas från marken. Höjden i meter efter t sekunder ges av h(t) = −5t² + 30t. Hur högt når bollen som högst?"
      hint1: "Hitta nollställena först, sedan symmetrilinjen, sedan höjden där."
      answer: ["45", "45 m", "45 meter", "45m"]
      solution: |
        −5t² + 30t = 0
        5t(6 − t) = 0 ger t = 0 och t = 6

        Symmetrilinjen: t = 3

        h(3) = −5 · 9 + 30 · 3 = −45 + 90 = 45

        Bollen når **45 meter**, efter 3 sekunder.
        → Tränas i delmoment 9: **Andragradsfunktioner problemlösning**

prev: andragradsfunktioner-problemlosning
prev_lesson_title: "Andragradsfunktioner problemlösning"
next: del-1/generalrepetition
next_lesson_title: "Generalrepetition — Del 1"
---

## Vad den här sidan är

Tolv uppgifter, blandade från hela området. Ingen säger vilken metod som ska användas — det är själva poängen.

Gör dem **utan att öppna lösningarna**. Rätta dig själv efteråt.

## Så tolkar du resultatet

| Resultat | Vad det betyder |
|---|---|
| 11–12 rätt | Området sitter. Gå vidare till generalrepetitionen. |
| 8–10 rätt | Nästan. Varje lösning säger vilket delmoment som tränar just det — gå dit. |
| Under 8 | Gå tillbaka och gör om delmomenten i tur och ordning. Det tar en eftermiddag och är värt det. |

## Metodvalet

Det här är vad du egentligen övar. Titta på ekvationen och avgör:

- **Bara x² och ett tal?** Dra roten, svara med `±`
- **Ingen ensam siffra?** Bryt ut x, använd nollproduktmetoden
- **Redan faktoriserad?** Nollproduktmetoden direkt
- **Alla tre termerna?** pq-formeln
- **Siffra framför x²?** Dela alla termer med den först
- **Två kvadrater med minus emellan?** Konjugatregeln baklänges

## Innan du skriver Del 1

Gör generalrepetitionen också. Den blandar det här området med resten av Del 1 och har inga ledtrådar alls.
