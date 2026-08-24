---
slug: "omlasning-2b/statistik/spridningsmatt-och-ladagram"
title: "Spridningsmått och lådagram"
course: omlasning-2b
moment: statistik
moment_title: "Statistik"
lesson_number: 2
lesson_total: 4

success_criteria:
  - Läsa av median, kvartiler, minsta och största värde ur ett lådagram
  - Räkna ut variationsbredd och kvartilavstånd
  - Veta hur många procent av materialet som ligger i varje del av lådagrammet
  - Jämföra två lådagram och avgöra vilket som har störst spridning

bank:
  - question: "Hur många procent av observationerna ligger inuti lådan i ett lådagram?"
    answer: ["50 %", "50", "50%"]
    solution: |
      Lådan går från nedre till övre kvartilen, alltså från 25 % till 75 %.
      Därinne ligger **50 %** av observationerna.
  - question: "Hur räknar du ut variationsbredden?"
    answer: ["Största värdet minus minsta värdet", "max minus min", "största minus minsta"]
    solution: |
      Variationsbredden är hela materialets spännvidd.
      Ta **största värdet minus minsta värdet**.
  - question: "Ett lådagram har nedre kvartil 12 och övre kvartil 20. Vad är kvartilavståndet?"
    answer: ["8"]
    solution: |
      Kvartilavståndet är lådans längd, alltså övre kvartilen minus den nedre.
      20 − 12 = **8**
  - question: "Vad kallas det värde som delar materialet i två lika stora halvor?"
    answer: ["Median", "medianen"]
    solution: |
      Hälften av värdena ligger under och hälften över.
      Det värdet kallas **medianen**.

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Lådagrammets fem tal

  Ett lådagram bygger på fem värden, i ordning från vänster:

  | Del | Vad det är |
  |---|---|
  | Vänstra strecket | **Minsta värdet** |
  | Lådans vänsterkant | **Nedre kvartilen** (Q1) |
  | Strecket inuti lådan | **Medianen** |
  | Lådans högerkant | **Övre kvartilen** (Q3) |
  | Högra strecket | **Största värdet** |

  ## Procenten är alltid desamma

  De fem talen delar materialet i **fyra lika stora delar**, 25 % i varje.

  | Område | Andel |
  |---|---|
  | Från minsta till Q1 | 25 % |
  | Inuti lådan (Q1 till Q3) | **50 %** |
  | Från Q3 till största | 25 % |
  | Under medianen | 50 % |
  | Över Q1 | 75 % |

  Det spelar ingen roll hur bred lådan är, procenten är alltid desamma. Är lådan bred betyder det att de mittersta 50 procenten är **utspridda**, inte att de är fler.

  ## Två spridningsmått

  Ett lådagram med minsta 4, Q1 = 10, median 14, Q3 = 18, största 30:

  | Mått | Uträkning | Resultat |
  |---|---|---|
  | **Variationsbredd** | största − minsta = 30 − 4 | **26** |
  | **Kvartilavstånd** | Q3 − Q1 = 18 − 10 | **8** |

  Variationsbredden mäter hela materialet, och blir därför känslig för extremvärden. Kvartilavståndet mäter bara de mittersta 50 procenten och är därför stabilare.

  ## Jämföra två lådagram

  Titta på **bredden**, inte på var lådan ligger:

  - Bred låda → stor spridning bland de mittersta 50 %
  - Långa morrhår → enskilda värden ligger långt ut
  - Lådan långt till höger → höga värden, men säger inget om spridningen

exercises:
  E:
    - equation: "Lådagrammet visar ett statistiskt material. Bestäm medianen."
      graf:
        typ: "ladagram"
        ladagram:
          - min: 4
            q1: 10
            median: 14
            q3: 18
            max: 30
        xmin: 0
        xmax: 32
        xSteg: 2
      hint1: "Medianen är strecket inuti lådan."
      hint2: "Läs av vilket värde strecket står vid på skalan."
      answer: ["14"]
      solution: |
        Strecket inuti lådan står vid **14**.

    - equation: "Samma lådagram som ovan (minsta 4, Q1 = 10, median 14, Q3 = 18, största 30). Bestäm variationsbredden."
      hint1: "Variationsbredd = största värdet minus minsta värdet."
      hint2: "30 − 4."
      answer: ["26"]
      solution: |
        30 − 4 = **26**

    - equation: "Lådagrammet visar ett material. Bestäm kvartilavståndet."
      graf:
        typ: "ladagram"
        ladagram:
          - min: 2
            q1: 9
            median: 13
            q3: 21
            max: 28
        xmin: 0
        xmax: 30
        xSteg: 2
      hint1: "Kvartilavståndet är lådans bredd: övre kvartilen minus nedre kvartilen."
      hint2: "Lådans kanter står vid 9 och 21."
      answer: ["12"]
      solution: |
        Q3 − Q1 = 21 − 9 = **12**

    - equation: "Hur många procent av observationerna i ett lådagram ligger mellan nedre kvartilen och övre kvartilen?"
      hint1: "De fem talen delar materialet i fyra lika stora delar."
      hint2: "Lådan täcker två av de fyra delarna."
      answer: ["50 %", "50", "50%"]
      solution: |
        Lådan täcker två fjärdedelar av materialet.

        **50 %**

    - equation: "I ett lådagram är medianen 15. Hur många procent av observationerna är större än 15?"
      hint1: "Medianen delar materialet i två lika stora halvor."
      answer: ["50 %", "50", "50%"]
      solution: |
        Medianen delar materialet mitt itu.

        **50 %** ligger över medianen (och 50 % under).

    - equation: "Två lådagram visas. Vem av A och B har störst kvartilavstånd? Svara A eller B."
      graf:
        typ: "ladagram"
        ladagram:
          - min: 3
            q1: 8
            median: 10
            q3: 12
            max: 19
            etikett: "A"
          - min: 2
            q1: 6
            median: 11
            q3: 16
            max: 20
            etikett: "B"
        xmin: 0
        xmax: 22
        xSteg: 2
      hint1: "Kvartilavståndet är lådans bredd. Jämför hur breda lådorna är."
      hint2: "A: 12 − 8 = 4. B: 16 − 6 = 10."
      answer: ["B"]
      solution: |
        A: Q3 − Q1 = 12 − 8 = 4
        B: Q3 − Q1 = 16 − 6 = 10

        **B** har störst kvartilavstånd, bredare låda betyder större spridning bland de mittersta 50 procenten.

    - equation: "Ange fem tal som har medelvärdet 4, medianen 3, typvärdet 1 och variationsbredden 10. Skriv talen i storleksordning, separerade med komma."
      hint1: "Börja med det som låser mest: typvärdet 1 måste förekomma flest gånger, och medianen 3 är det mittersta av fem tal."
      hint2: "Sätt 1, 1, 3 och två okända, och använd variationsbredden 10 för att få det största talet. Medelvärdet ger sedan det sista."
      answer: ["1, 1, 3, 4, 11", "1,1,3,4,11", "1 1 3 4 11"]
      solution: |
        Fem tal i ordning, det mittersta är medianen.

        | Krav | Ger |
        |---|---|
        | typvärdet 1 | 1 förekommer minst två gånger, alltså de två minsta |
        | medianen 3 | tredje talet är 3 |
        | variationsbredden 10 | största − minsta = 10, och minsta är 1, alltså största 11 |
        | medelvärdet 4 | summan är 5 · 4 = 20 |

        Hittills: 1 + 1 + 3 + ? + 11 = 16 + ?

        Summan ska bli 20, alltså är det fjärde talet 4.

        **1, 1, 3, 4, 11**

        Kontroll: medelvärde 20/5 = 4 ✓, median 3 ✓, typvärde 1 ✓, variationsbredd 11 − 1 = 10 ✓

        Baklängesuppgifter löses genom att börja med det krav som låser mest.

prev: lagesmatt
prev_lesson_title: "Lägesmått"
next: normalfordelning
next_lesson_title: "Normalfördelning"
---

## Spridning: det lägesmåtten missar

Två klasser kan ha exakt samma medelvärde på ett prov och ändå se helt olika ut: i den ena ligger alla nära medel, i den andra finns både mycket höga och mycket låga resultat.

**Spridningsmått** beskriver den skillnaden.

## Lådagrammets fem tal

Ett lådagram ritas utifrån fem värden:

`minsta värdet · nedre kvartil (Q1) · median · övre kvartil (Q3) · största värdet`

Grafiskt:

- **Morrhåren** (strecken ut från lådan) går till minsta och största värdet
- **Lådan** går från Q1 till Q3
- **Strecket inuti lådan** är medianen

## Procenten är fasta

De fem talen delar materialet i fyra lika stora delar. Varje del innehåller **25 %** av observationerna, oavsett hur bred den ser ut.

| Fråga | Svar |
|---|---|
| Hur många procent ligger i lådan? | 50 % |
| Hur många procent är större än medianen? | 50 % |
| Hur många procent är större än Q1? | 75 % |
| Hur många procent är mindre än Q3? | 75 % |
| Hur många procent ligger mellan minsta och Q1? | 25 % |

> **Vanligt fel:** att tro att en bred del innehåller fler observationer. Den innehåller lika många, de ligger bara **mer utspritt**.

## Två spridningsmått

| Mått | Formel | Vad det säger |
|---|---|---|
| **Variationsbredd** | största − minsta | Hela materialets omfång |
| **Kvartilavstånd** | Q3 − Q1 | Hur utspridda de mittersta 50 % är |

Variationsbredden påverkas kraftigt av ett enda extremvärde. Kvartilavståndet gör det inte, det är därför det ofta är det mer användbara måttet, precis som medianen är mer stabil än medelvärdet.

## Jämföra lådagram

När flera lådagram ritas i samma skala kan du jämföra direkt:

- **Var lådan ligger** → hur höga värdena är
- **Hur bred lådan är** → kvartilavståndet, alltså spridningen i mitten
- **Hur långa morrhåren är** → variationsbredden och eventuella extremvärden

En vanlig uppgift är att peka ut vem som har störst spridning, högst median eller flest värden över en viss gräns. Läs av tal för tal och skriv ner dem innan du svarar, det går snabbare än att jämföra på ögonmått.
