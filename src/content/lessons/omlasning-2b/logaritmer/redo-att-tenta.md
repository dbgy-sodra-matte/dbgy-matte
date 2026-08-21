---
slug: "omlasning-2b/logaritmer/redo-att-tenta"
title: "Redo att tenta? — Logaritmer och exponentialekvationer"
course: omlasning-2b
moment: logaritmer
moment_title: "Logaritmer och exponentialekvationer"
lesson_number: 5
lesson_total: 5

success_criteria:
  - Klara blandade uppgifter från alla fyra delmoment, utan att titta i lösningarna
  - Veta vilket delmoment du behöver träna mer på om något skaver
  - Avgöra själv om området sitter inför Del 2

how_to:
  - Gör alla uppgifter nedan UTAN att öppna lösningarna
  - Ha miniräknaren framme
  - Rätta dig själv efteråt
  - Allt rätt? Området sitter, gå vidare till nästa område i Del 2
  - Något fel? Lösningen visar vilket delmoment som tränar just det, gå dit, träna, kom tillbaka

worked_example: |
  ## Så testas området på Del 2

  Del 2 innehåller tre områden: **Logaritmer och exponentialekvationer**, **Statistik** och **Geometri**.

  Från det här området kommer typiskt: förenkla med potenslagar, ställa upp en exponentialfunktion ur en text, beräkna ett värde efter x år, och lösa en exponentialekvation med logaritm.

  ## Checklista

  1. **Potenslagar:** multiplikation → addera exponenter. Potens av potens → multiplicera.
  2. **Förändringsfaktor:** ökning `1 + p`, minskning `1 − p`. Faktorn 0,85 = minskning med 15 %.
  3. **lg x** betyder "10 upphöjt till vad blir x".
  4. **Gör potensen ensam** innan du logaritmerar.
  5. **Annan bas** → `x = lg b / lg a`. Räkna bråket, förkorta det inte.
  6. **Svara i klartext** med enhet när uppgiften handlar om år.

exercises:
  E:
    - equation: "Skriv som en potens: 6⁵ · 6³"
      hint1: "Samma bas: addera exponenterna."
      answer: ["6^8", "6⁸"]
      solution: |
        6^(5+3) = **6⁸**
        → Tränas i delmoment 1: **Potenslagar**

    - equation: "Skriv som en potens: (3²)⁴"
      hint1: "Potens av potens: multiplicera exponenterna."
      answer: ["3^8", "3⁸"]
      solution: |
        3^(2·4) = **3⁸**

        Inte 3⁶, det hade varit 3² · 3⁴.
        → Tränas i delmoment 1: **Potenslagar**

    - equation: "En maskin är värd 90 000 kr och tappar 12 % av värdet per år. Skriv en funktion y = C · a^x som ger värdet efter x år."
      hint1: "Minskning: faktorn är 1 minus procenttalet i decimalform."
      answer: ["y = 90000 · 0,88^x", "90000·0,88^x", "y = 90000*0.88^x", "90000 · 0,88^x"]
      solution: |
        C = 90 000 och a = 1 − 0,12 = 0,88

        **y = 90 000 · 0,88^x**
        → Tränas i delmoment 2: **Exponentialfunktioner**

    - equation: "En summa på 15 000 kr växer med 4 % per år. Hur mycket finns efter 6 år? Svara i hela kronor."
      hint1: "15000 · 1,04^6. Räkna potensen först på miniräknaren."
      answer: ["18980", "18980 kr"]
      solution: |
        1,04⁶ ≈ 1,265319
        15 000 · 1,265319 ≈ **18 980 kr**
        → Tränas i delmoment 2: **Exponentialfunktioner**

    - equation: "Växer eller avtar funktionen y = 500 · 1,03^x? Och med hur många procent per steg?"
      hint1: "Är faktorn större eller mindre än 1?"
      answer: ["Växer med 3 %", "växer 3 %", "ökar med 3 %", "växer, 3 %"]
      solution: |
        1,03 är större än 1 → funktionen **växer**, med **3 % per steg**.
        → Tränas i delmoment 2: **Exponentialfunktioner**

    - equation: "Beräkna: lg 100000"
      hint1: "Räkna nollorna. Hur många tior gångas ihop?"
      answer: ["5"]
      solution: |
        100 000 = 10⁵, alltså **lg 100000 = 5**
        → Tränas i delmoment 3: **Tiologaritmer**

    - equation: "Beräkna: lg 0,01"
      hint1: "0,01 är en tiopotens med negativ exponent."
      answer: ["−2", "-2"]
      solution: |
        0,01 = 10^(−2), alltså **lg 0,01 = −2**
        → Tränas i delmoment 3: **Tiologaritmer**

    - equation: "Beräkna: 10^(lg 25)"
      hint1: "Logaritmen och tiopotensen tar ut varandra."
      answer: ["25"]
      solution: |
        **10^(lg 25) = 25**
        → Tränas i delmoment 3: **Tiologaritmer**

    - equation: "Lös ekvationen: 10^x = 250. Svara med två decimaler."
      hint1: "x = lg 250. Använd lg-knappen."
      answer: ["2.40", "2,40", "2.4", "2,4"]
      solution: |
        x = lg 250 ≈ **2,40**

        Rimlighetskoll: 250 ligger mellan 100 och 1000 → svaret mellan 2 och 3 ✓
        → Tränas i delmoment 4: **Exponentialekvationer**

    - equation: "Lös ekvationen: lg x = 5"
      hint1: "10 upphöjt till 5 blir x."
      answer: ["100000", "x = 100000"]
      solution: |
        x = 10⁵ = **100 000**
        → Tränas i delmoment 4: **Exponentialekvationer**

    - equation: "Lös ekvationen: 7^x = 30. Svara med två decimaler."
      hint1: "Annan bas: logaritmera båda leden och flytta ner exponenten."
      answer: ["1.75", "1,75"]
      solution: |
        x · lg 7 = lg 30
        x = lg 30 / lg 7 ≈ 1,4771 / 0,8451 ≈ **1,75**
        → Tränas i delmoment 4: **Exponentialekvationer**

    - equation: "En stad har 40 000 invånare och växer med 2 % per år. Efter hur många år har staden 50 000 invånare? Svara med en decimal."
      hint1: "Ekvationen är 40000 · 1,02^x = 50000. Dela med 40 000 först."
      answer: ["11.3", "11,3"]
      solution: |
        40 000 · 1,02^x = 50 000
        1,02^x = 1,25
        x = lg 1,25 / lg 1,02 ≈ 0,09691 / 0,008600 ≈ **11,3 år**
        → Tränas i delmoment 4: **Exponentialekvationer**

prev: exponentialekvationer
prev_lesson_title: "Exponentialekvationer"
next: statistik/lagesmatt
next_lesson_title: "Lägesmått"
---

## Tolv uppgifter, blandat från hela området

Uppgifterna kommer i **oordning**, precis som på provet. Ha miniräknaren framme, flera av dem kräver den.

Gör alla tolv först. Rätta sedan.

## Så tolkar du resultatet

| Så gick det | Vad du gör |
|---|---|
| Allt rätt | Området sitter. Gå vidare till Statistik. |
| 1–3 fel | Läs vilket delmoment lösningen pekar på, träna det, gör om sidan. |
| 4 eller fler fel | Gå tillbaka och träna om området i lugn takt. |

## Det som brukar skava

- **Potens av potens** förväxlas med multiplikation: `(3²)⁴` är 3⁸, inte 3⁶.
- **Faktorn 0,88** tolkas som "minskar med 88 %". Den betyder att 88 % är kvar, alltså en minskning med 12 %.
- **Talet framför potensen** glöms bort före logaritmeringen.
- **`lg 30 / lg 7`** förkortas felaktigt till `lg (30/7)`. Det går inte, räkna ut båda logaritmerna och dela.
