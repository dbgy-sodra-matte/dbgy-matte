---
slug: "omlasning-2a/statistik/redo-att-tenta"
title: "Redo att tenta? — Statistik"
course: omlasning-2a
moment: statistik
moment_title: "Statistik"
lesson_number: 3
lesson_total: 3

success_criteria:
  - Klara blandade uppgifter från alla tre delmoment, utan att titta i lösningarna
  - Välja rätt mått till rätt fråga, utan att någon säger vilket
  - Veta vilket delmoment du behöver träna mer på om något skaver

how_to:
  - Gör alla uppgifter nedan UTAN att öppna lösningarna
  - Rätta dig själv efteråt
  - Allt rätt? Området sitter, kör generalrepetitionen för Del 2
  - Något fel? Lösningen visar vilket delmoment som tränar just det, gå dit, träna, kom tillbaka

worked_example: |
  ## Välj rätt mått

  | Frågan | Måttet |
  |---|---|
  | Vad ligger materialet på i genomsnitt? | medelvärde |
  | Vad ligger mitt i? | median |
  | Vad är vanligast? | typvärde |
  | Hur stor är hela spännvidden? | variationsbredd |
  | Hur brett ligger de mittersta 50 procenten? | kvartilavstånd |
  | Hur stor andel ligger under ett värde? | 68-95-99,7-regeln |

  ## Checklista inför Del 2

  1. **Ordna i storleksordning** innan du tar medianen. Det steget glöms bort oftast.
  2. **Jämnt antal** → medianen är medelvärdet av de två mittersta.
  3. **Antalet i en frekvenstabell** är summan av frekvenserna, inte antalet kolumner.
  4. **Klassindelad data** → använd klassmitten, och skriv att svaret är en uppskattning.
  5. **En lång del i ett lådagram** betyder mer utspridda värden, inte fler värden.
  6. **Varje del av ett lådagram innehåller 25 %**, oavsett längd.
  7. **68-95-99,7** ska sitta utantill. De står inte på formelbladet.
  8. **Rita klockkurvan.** Det ger poäng och gör det omöjligt att blanda ihop under och över.

exercises:
  E:
    - equation: "Bestäm medelvärdet av 7, 11, 14 och 20."
      hint1: "Summan delat med antalet."
      answer: ["13", "13,0"]
      solution: |
        7 + 11 + 14 + 20 = 52

        52 / 4 = **13**
        → Tränas i delmoment 1: **Lägesmått**

    - equation: "Bestäm medianen av 9, 3, 14, 6 och 11."
      hint1: "Ordna i storleksordning först."
      answer: ["9"]
      solution: |
        Ordnat: 3, 6, 9, 11, 14

        Fem värden, mitten är det tredje: **9**

        Ordna alltid först — talen står sällan i ordning i uppgiften.
        → Tränas i delmoment 1: **Lägesmått**

    - equation: "Bestäm medianen av 10, 16, 22 och 30."
      hint1: "Jämnt antal värden."
      answer: ["19"]
      solution: |
        De två mittersta är 16 och 22.

        (16 + 22) / 2 = **19**
        → Tränas i delmoment 1: **Lägesmått**

    - equation: "Tabellen visar antal syskon per elev. Antal syskon 0, 1, 2, 3 med frekvenserna 4, 9, 5, 2. Bestäm medelvärdet."
      hint1: "Multiplicera varje värde med sin frekvens."
      answer: ["1,25", "1.25"]
      solution: |
        Summan: 0 · 4 + 1 · 9 + 2 · 5 + 3 · 2 = 0 + 9 + 10 + 6 = 25

        Antalet elever: 4 + 9 + 5 + 2 = 20

        25 / 20 = **1,25 syskon per elev**
        → Tränas i delmoment 1: **Lägesmått**

    - equation: "Bestäm variationsbredden för 11, 19, 26 och 38."
      hint1: "Största minus minsta."
      answer: ["27"]
      solution: |
        38 − 11 = **27**
        → Tränas i delmoment 2: **Spridningsmått och lådagram**

    - equation: "Ett lådagram har nedre kvartil 22 och övre kvartil 45. Bestäm kvartilavståndet."
      hint1: "Kvartilavståndet är lådans längd."
      answer: ["23"]
      solution: |
        45 − 22 = **23**
        → Tränas i delmoment 2: **Spridningsmått och lådagram**

    - equation: "Hur många procent av observationerna ligger under medianen i ett lådagram?"
      hint1: "Medianen delar materialet i två lika stora halvor."
      answer: ["50 %", "50", "50%"]
      solution: |
        Medianen är 50 %-gränsen.

        **50 %** ligger under.
        → Tränas i delmoment 2: **Spridningsmått och lådagram**

    - equation: "Hur många procent av observationerna ligger mellan nedre kvartilen och medianen?"
      hint1: "Nedre kvartilen är 25 %-gränsen och medianen är 50 %-gränsen."
      answer: ["25 %", "25", "25%"]
      solution: |
        Från 25 % till 50 %.

        **25 %** — precis som varje annan del av lådagrammet.
        → Tränas i delmoment 2: **Spridningsmått och lådagram**

    - equation: "Hur många procent av värdena i en normalfördelning ligger inom två standardavvikelser från medelvärdet?"
      hint1: "Det andra talet i 68-95-99,7-regeln."
      answer: ["95 %", "95", "95%"]
      solution: |
        Inom två standardavvikelser: **95 %**
        → Tränas i delmoment 3: **Normalfördelning**

    - equation: "En normalfördelning har medelvärdet 150 och standardavvikelsen 8. Hur många standardavvikelser från medelvärdet ligger värdet 166?"
      hint1: "Räkna avståndet och dela med standardavvikelsen."
      answer: ["2", "två"]
      solution: |
        166 − 150 = 16

        16 / 8 = **2 standardavvikelser**
        → Tränas i delmoment 3: **Normalfördelning**

    - equation: "En normalfördelning har medelvärdet 40 och standardavvikelsen 3. Hur många procent av värdena är större än 43?"
      hint1: "43 ligger en standardavvikelse över medelvärdet."
      answer: ["16 %", "16", "16%"]
      solution: |
        43 − 40 = 3, alltså 1 standardavvikelse över medelvärdet.

        Inom 1σ ligger 68 %. Utanför ligger 32 %, jämnt fördelat.

        Över medel + 1σ: **16 %**
        → Tränas i delmoment 3: **Normalfördelning**

    - equation: "Paket väger i genomsnitt 500 g med standardavvikelsen 20 g. Av 2 000 paket, hur många väger mer än 460 g?"
      hint1: "460 g ligger två standardavvikelser under medelvärdet."
      answer: ["1954", "1954 paket", "1 954", "1 954 paket"]
      solution: |
        500 − 460 = 40 g, och 40 / 20 = 2 standardavvikelser under medelvärdet.

        Under medel − 2σ ligger 2,3 %, alltså ligger 97,7 % över.

        0,977 · 2000 = **1 954 paket**
        → Tränas i delmoment 3: **Normalfördelning**

prev: normalfordelning
prev_lesson_title: "Normalfördelning"
next: del-2/generalrepetition
next_lesson_title: "Generalrepetition — Del 2"
---

## Vad den här sidan är

Tolv uppgifter, blandade från hela området. Ingen säger vilket mått som ska användas.

Gör dem **utan att öppna lösningarna**. Rätta dig själv efteråt.

## Så tolkar du resultatet

| Resultat | Vad det betyder |
|---|---|
| 11–12 rätt | Området sitter. Kör generalrepetitionen för Del 2. |
| 8–10 rätt | Nästan. Varje lösning säger vilket delmoment som tränar just det. |
| Under 8 | Gå tillbaka och gör om delmomenten i tur och ordning. |

## Välj rätt mått

| Frågan handlar om | Måttet |
|---|---|
| genomsnitt | medelvärde |
| mitten | median |
| det vanligaste | typvärde |
| hela spännvidden | variationsbredd |
| de mittersta 50 procenten | kvartilavstånd |
| andel under eller över ett värde | 68-95-99,7-regeln |

## Sista steget före Del 2

Generalrepetitionen blandar alla tre områdena i Del 2 — räta linjen och ekvationssystem, potenser och exponentialekvationer, och statistik. Den har inga ledtrådar alls.

Gör den när alla tre pre-testen sitter.
