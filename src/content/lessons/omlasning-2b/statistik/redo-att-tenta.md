---
slug: "omlasning-2b/statistik/redo-att-tenta"
title: "Redo att tenta? — Statistik"
course: omlasning-2b
moment: statistik
moment_title: "Statistik"
lesson_number: 5
lesson_total: 5

success_criteria:
  - Klara blandade uppgifter från alla fyra delmoment — utan att titta i lösningarna
  - Veta vilket delmoment du behöver träna mer på om något skaver
  - Avgöra själv om området sitter inför Del 2

how_to:
  - Gör alla uppgifter nedan UTAN att öppna lösningarna
  - Rätta dig själv efteråt
  - Allt rätt? Området sitter — gå vidare till Geometri
  - Något fel? Lösningen visar vilket delmoment som tränar just det — gå dit, träna, kom tillbaka

worked_example: |
  ## Så testas statistiken på Del 2

  Typiska uppgifter: räkna ut lägesmått, läsa av ett lådagram, använda 68-95-regeln på en normalfördelning, och tolka ett spridningsdiagram eller en regressionslinje.

  ## Checklista

  1. **Sortera alltid** innan du tar medianen.
  2. **Jämnt antal värden** → medelvärdet av de två i mitten.
  3. **Lådagrammets procent är fasta:** 25 % i varje del, 50 % i lådan.
  4. **Kvartilavstånd** = Q3 − Q1. **Variationsbredd** = största − minsta.
  5. **68 / 95 / 99,7** för ± 1, 2 och 3 standardavvikelser.
  6. **Rita normalfördelningskurvan** — skissen ger poäng.
  7. **Samband ≠ orsak.** Peka på en tänkbar tredje faktor.

exercises:
  E:
    - equation: "Bestäm medelvärdet av 14, 17, 21, 24"
      hint1: "Summan delat med antalet."
      answer: ["19"]
      solution: |
        (14 + 17 + 21 + 24) / 4 = 76 / 4 = **19**
        → Tränas i delmoment 1: **Lägesmått**

    - equation: "Bestäm medianen av 11, 6, 19, 8, 14"
      hint1: "Sortera först."
      answer: ["11"]
      solution: |
        Sorterat: 6, 8, **11**, 14, 19

        Medianen är **11**.
        → Tränas i delmoment 1: **Lägesmått**

    - equation: "Bestäm medianen av 7, 9, 14, 18"
      hint1: "Jämnt antal — ta medelvärdet av de två mittersta."
      answer: ["11,5", "11.5"]
      solution: |
        De två mittersta är 9 och 14.

        (9 + 14) / 2 = **11,5**
        → Tränas i delmoment 1: **Lägesmått**

    - equation: "Lådagrammet visar ett material. Bestäm medianen."
      graf:
        typ: "ladagram"
        ladagram:
          - min: 5
            q1: 12
            median: 17
            q3: 24
            max: 35
        xmin: 0
        xmax: 36
        xSteg: 5
      hint1: "Medianen är strecket inuti lådan."
      answer: ["17"]
      solution: |
        Strecket inuti lådan står vid **17**.
        → Tränas i delmoment 2: **Spridningsmått och lådagram**

    - equation: "Samma lådagram (minsta 5, Q1 = 12, median 17, Q3 = 24, största 35). Bestäm kvartilavståndet."
      hint1: "Q3 − Q1, alltså lådans bredd."
      answer: ["12"]
      solution: |
        24 − 12 = **12**
        → Tränas i delmoment 2: **Spridningsmått och lådagram**

    - equation: "Hur många procent av observationerna i ett lådagram är större än den övre kvartilen?"
      hint1: "De fem talen delar materialet i fyra lika stora delar."
      answer: ["25 %", "25", "25%"]
      solution: |
        Området från Q3 till största värdet är en fjärdedel av materialet.

        **25 %**
        → Tränas i delmoment 2: **Spridningsmått och lådagram**

    - equation: "En normalfördelning har medelvärdet 60 och standardavvikelsen 4. Hur många procent av värdena ligger mellan 56 och 64?"
      hint1: "Hur många standardavvikelser bort ligger 56 och 64?"
      answer: ["68 %", "68", "68%"]
      solution: |
        Båda ligger 4 från medelvärdet, alltså **en** standardavvikelse.

        Inom ± 1σ ligger **68 %**.
        → Tränas i delmoment 3: **Normalfördelning**

    - equation: "Vikten på en produkt är normalfördelad med medelvärdet 250 g och standardavvikelsen 6 g. Hur många procent väger mindre än 238 g?"
      graf:
        typ: "normalfordelning"
        medel: 250
        sigma: 6
        markeraUnder: 238
      hint1: "250 − 238 = 12. Hur många standardavvikelser är det?"
      answer: ["2,5 %", "2.5 %", "2,5", "2.5"]
      solution: |
        12 / 6 = **2 standardavvikelser** under medelvärdet.

        Utanför ± 2σ ligger 5 %, hälften åt varje håll:

        **2,5 %** väger mindre än 238 g.
        → Tränas i delmoment 3: **Normalfördelning**

    - equation: "En fabrik gör 3 000 detaljer. Måttet är normalfördelat och 2,5 % ligger under den nedre gränsen. Ungefär hur många detaljer är det?"
      hint1: "Räkna om procenten till decimalform och multiplicera med antalet."
      answer: ["75", "75 st", "ca 75"]
      solution: |
        0,025 · 3 000 = **75 detaljer**
        → Tränas i delmoment 3: **Normalfördelning**

    - equation: "Spridningsdiagrammet visar ett samband. Är sambandet positivt eller negativt?"
      graf:
        typ: "punkter"
        punkter: [[2, 22], [4, 19], [6, 17], [8, 13], [10, 11], [12, 8]]
        xmin: 0
        xmax: 14
        ymin: 0
        ymax: 25
        ySteg: 5
      hint1: "Stiger eller sjunker punkterna från vänster till höger?"
      answer: ["Negativt", "negativt", "negativ"]
      solution: |
        Punkterna sjunker åt höger — y minskar när x ökar.

        Sambandet är **negativt**.
        → Tränas i delmoment 4: **Regression och korrelation**

    - equation: "En regressionslinje är y = 4x + 30. Vad blir prognosen för x = 12?"
      hint1: "Sätt in x = 12 i ekvationen."
      answer: ["78"]
      solution: |
        y = 4 · 12 + 30 = 48 + 30 = **78**
        → Tränas i delmoment 4: **Regression och korrelation**

    - equation: "Det finns ett starkt samband mellan antalet storkar i ett område och antalet födda barn. Kan man dra slutsatsen att storkar orsakar födslar? Svara ja eller nej."
      hint1: "Kan något annat förklara att båda storheterna följs åt?"
      answer: ["nej", "Nej"]
      solution: |
        **Nej.** Ett samband betyder bara att storheterna följs åt.

        Här kan till exempel områdets storlek eller graden av landsbygd påverka båda — en tredje faktor.
        → Tränas i delmoment 4: **Regression och korrelation**

prev: regression-och-korrelation
prev_lesson_title: "Regression och korrelation"
next: geometri/vinklar
next_lesson_title: "Vinklar"
---

## Tolv uppgifter, blandat från hela området

Uppgifterna kommer i **oordning**, precis som på provet.

Gör alla tolv först. Rätta sedan.

## Så tolkar du resultatet

| Så gick det | Vad du gör |
|---|---|
| Allt rätt | Området sitter. Gå vidare till Geometri. |
| 1–3 fel | Läs vilket delmoment lösningen pekar på, träna det, gör om sidan. |
| 4 eller fler fel | Gå tillbaka och träna om området i lugn takt. |

## Det som brukar skava

- **Medianen tas utan att sortera** — sortera alltid först.
- **Bred del i lådagrammet** tolkas som "fler observationer". Den innehåller lika många, men mer utspritt.
- **Halveringen glöms** vid normalfördelning: 5 % ligger utanför ± 2σ, men bara **2,5 %** på den sida frågan gäller.
- **Samband tolkas som orsak.** Svaret är nej — peka ut en tänkbar tredje faktor.
