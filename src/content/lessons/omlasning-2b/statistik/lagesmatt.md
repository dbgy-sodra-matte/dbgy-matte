---
slug: "omlasning-2b/statistik/lagesmatt"
title: "Lägesmått"
course: omlasning-2b
moment: statistik
moment_title: "Statistik"
lesson_number: 1
lesson_total: 4

success_criteria:
  - Räkna ut medelvärde, median och typvärde
  - Hitta medianen när antalet värden är jämnt
  - Välja lämpligt lägesmått och motivera valet
  - Förklara hur ett extremvärde påverkar medelvärdet men inte medianen

bank:
  - question: "Bestäm medelvärdet av 4, 7, 9, 12"
    answer: ["8"]
    solution: |
      Medelvärde = summan delat med antalet värden.
      4 + 7 + 9 + 12 = 32, och 32 / 4 = **8**
  - question: "Bestäm medianen av 3, 5, 8, 9, 14"
    answer: ["8"]
    solution: |
      Medianen är mittenvärdet när talen står i storleksordning.
      Talen är redan ordnade och det finns 5 stycken, så mitten är det tredje: **8**
  - question: "Bestäm typvärdet av 2, 5, 5, 7, 9"
    answer: ["5"]
    solution: |
      Typvärdet är det värde som förekommer flest gånger.
      Här står 5 två gånger, alla andra en gång: **5**
  - question: "Vilket lägesmått påverkas mest av ett enda extremt högt värde?"
    answer: ["Medelvärdet", "medelvärde", "medelvärdet"]
    solution: |
      Medelvärdet räknar in varje värde med hela sin storlek, så ett extremvärde drar iväg summan.
      Medianen bryr sig bara om ordningen och står emot bättre.
      Svar: **medelvärdet**

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra området
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Medelvärde

  Lägg ihop allt och dela med antalet.

  Värdena `6, 9, 11, 14`:

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Summera | 6 + 9 + 11 + 14 | 40 |
  | Dela med antalet | 40 / 4 | **10** |

  ## Median: mittenvärdet

  Medianen är värdet **i mitten** när talen är sorterade i storleksordning.

  `3, 7, 8, 12, 20` → mitten är tredje talet → **median 8**

  **Är antalet jämnt** finns inget enskilt mittenvärde. Ta då medelvärdet av de två i mitten:

  `4, 6, 9, 15` → de två i mitten är 6 och 9 → `(6 + 9) / 2` = **7,5**

  > **Sortera alltid först.** Medianen av osorterade tal går inte att läsa av, och det är det vanligaste felet.

  ## Typvärde

  Det värde som förekommer **flest gånger**.

  `2, 5, 5, 7, 9` → **typvärde 5**

  Det kan finnas flera typvärden, eller inget alls om alla värden är olika.

  ## Vilket mått ska man välja?

  Åtta personer har månadslönerna (i tusental): `26, 27, 28, 28, 29, 30, 31, 210`

  | Mått | Värde | Beskriver det gruppen bra? |
  |---|---|---|
  | Medelvärde | 51,1 | Nej, ingen tjänar i närheten av det |
  | Median | 28,5 | Ja, hälften tjänar mer, hälften mindre |

  Den sista lönen (210) är ett **extremvärde**. Den drar upp medelvärdet kraftigt men påverkar knappt medianen.

  **Regel:** finns extremvärden är medianen mer rättvisande. Är materialet jämnt fördelat fungerar medelvärdet bra.

exercises:
  E:
    - equation: "Bestäm medelvärdet av 12, 15, 18, 19"
      hint1: "Lägg ihop alla värden och dela med hur många de är."
      hint2: "Summan är 64 och antalet är 4."
      answer: ["16"]
      solution: |
        (12 + 15 + 18 + 19) / 4 = 64 / 4 = **16**

    - equation: "Bestäm medianen av 9, 4, 15, 7, 11"
      hint1: "Sortera talen i storleksordning först."
      hint2: "Sorterat: 4, 7, 9, 11, 15. Vilket tal ligger i mitten?"
      answer: ["9"]
      solution: |
        Sorterat: 4, 7, **9**, 11, 15

        Medianen är **9**, tredje talet av fem.

    - equation: "Bestäm medianen av 5, 8, 12, 20"
      hint1: "Antalet är jämnt, då finns inget enskilt mittenvärde."
      hint2: "Ta medelvärdet av de två i mitten: 8 och 12."
      answer: ["10"]
      solution: |
        De två mittersta är 8 och 12.

        (8 + 12) / 2 = **10**

    - equation: "Bestäm typvärdet av 3, 6, 6, 6, 9, 11"
      hint1: "Vilket värde förekommer flest gånger?"
      hint2: "Räkna hur många gånger varje tal dyker upp."
      answer: ["6"]
      solution: |
        6 förekommer tre gånger, övriga en gång var.

        Typvärdet är **6**.

    - equation: "I en grupp är månadslönerna (i tusental kr): 25, 26, 27, 28, 180. Vilket lägesmått beskriver gruppen bäst, medelvärdet eller medianen?"
      hint1: "Räkna ut båda och jämför med vad personerna faktiskt tjänar."
      hint2: "Medelvärdet blir 57,2, men fyra av fem tjänar under 30. Medianen är 27."
      answer: ["Medianen", "median", "medianen"]
      solution: |
        Medelvärde: (25 + 26 + 27 + 28 + 180) / 5 = 286 / 5 = 57,2
        Median: **27**

        Lönen 180 är ett extremvärde som drar upp medelvärdet, ingen i gruppen tjänar i närheten av 57,2.

        **Medianen** beskriver gruppen bäst.

    - equation: "Fem elever fick poängen 12, 14, 15, 16, 18 på ett prov. Om den som fick 18 i stället hade fått 48, vilket lägesmått ändras INTE?"
      hint1: "Medianen är mittenvärdet. Ändras mitten om bara det högsta värdet höjs?"
      hint2: "Sorterat blir det 12, 14, 15, 16, 48, mittenvärdet är fortfarande det tredje."
      answer: ["Medianen", "median", "medianen"]
      solution: |
        Före: 12, 14, **15**, 16, 18 → median 15
        Efter: 12, 14, **15**, 16, 48 → median 15

        **Medianen** ändras inte. Medelvärdet går däremot från 15 till 21.

    - equation: "På ett företag arbetar 25 män med medelåldern 45 år och 40 kvinnor med medelåldern 38 år. En 50-årig man slutar och ersätts av en 30-årig kvinna. Vad blir den nya medelåldern för alla anställda? Svara med en decimal."
      hint1: "Räkna ut den sammanlagda åldern för varje grupp först. Medelvärde gånger antal ger summan."
      hint2: "25 · 45 + 40 · 38 = 2 645 år fördelat på 65 personer. Byt sedan ut en 50-åring mot en 30-åring."
      answer: ["40,4", "40.4", "40,4 år", "40.4 år"]
      solution: |
        Männens sammanlagda ålder: 25 · 45 = 1 125 år

        Kvinnornas: 40 · 38 = 1 520 år

        Tillsammans 2 645 år på 65 personer.

        En 50-åring byts mot en 30-åring: 2 645 − 50 + 30 = 2 625 år

        Antalet är fortfarande 65.

        2 625 / 65 ≈ **40,4 år**

        Medelvärden går aldrig att addera direkt, du måste gå via summorna.

    - equation: "Stapeldiagrammet visar skostorlekarna i ett handbollslag. Bestäm medelvärdet. Svara med en decimal."
      hint1: "Läs av hur många spelare varje stapel visar, precis som i en frekvenstabell."
      hint2: "Multiplicera varje skostorlek med sin frekvens, summera, och dela med antalet spelare."
      answer: ["37,8", "37.8", "37,8 i skostorlek"]
      solution: |
        Ur diagrammet: 36 (2 st), 37 (5 st), 38 (7 st), 39 (3 st), 40 (1 st).

        Antal spelare: 2 + 5 + 7 + 3 + 1 = 18

        Summa: 36·2 + 37·5 + 38·7 + 39·3 + 40·1 = 72 + 185 + 266 + 117 + 40 = 680

        680 / 18 ≈ **37,8**
      graf:
        typ: "stapeldiagram"
        staplar:
          - varde: 36
            frekvens: 2
          - varde: 37
            frekvens: 5
          - varde: 38
            frekvens: 7
          - varde: 39
            frekvens: 3
          - varde: 40
            frekvens: 1
        xTitel: "Skostorlek"
        yTitel: "Antal spelare"

    - equation: "Samma diagram som förra uppgiften. Vilken skostorlek är medianen?"
      hint1: "Hur många spelare är det totalt? Medianen är mittvärdet när alla ställs i storleksordning."
      hint2: "18 spelare, alltså ligger medianen mellan det 9:e och det 10:e värdet."
      answer: ["38", "medianen är 38", "storlek 38"]
      solution: |
        Totalt 18 spelare, så medianen ligger mellan det 9:e och 10:e värdet.

        Räkna uppåt: 2 spelare har storlek 36, 7 har högst 37, 14 har högst 38.

        Både det 9:e och det 10:e värdet ligger i gruppen med storlek 38.

        **Medianen är 38**
      graf:
        typ: "stapeldiagram"
        staplar:
          - varde: 36
            frekvens: 2
          - varde: 37
            frekvens: 5
          - varde: 38
            frekvens: 7
          - varde: 39
            frekvens: 3
          - varde: 40
            frekvens: 1
        xTitel: "Skostorlek"
        yTitel: "Antal spelare"

prev: logaritmer/redo-att-tenta
prev_lesson_title: "Redo att tenta? — Logaritmer och exponentialekvationer"
next: spridningsmatt-och-ladagram
next_lesson_title: "Spridningsmått och lådagram"
---

## Tre sätt att beskriva "mitten"

Ett **lägesmått** är ett enda tal som sammanfattar var materialet ligger.

| Mått | Vad det är | Hur du får det |
|---|---|---|
| **Medelvärde** | Genomsnittet | Summan delat med antalet |
| **Median** | Mittenvärdet | Sortera, ta det i mitten |
| **Typvärde** | Det vanligaste | Det värde som förekommer flest gånger |

## Medelvärde

`(6 + 9 + 11 + 14) / 4 = 10`

Enkelt att räkna ut, men känsligt. Ett enda extremt värde drar iväg hela medelvärdet.

## Median

Sortera först. **Alltid.**

- **Udda antal:** ta värdet i mitten. `3, 7, 8, 12, 20` → medianen är 8.
- **Jämnt antal:** ta medelvärdet av de två i mitten. `4, 6, 9, 15` → (6 + 9)/2 = 7,5.

Medianen bryr sig bara om **ordningen**, inte om hur stora talen är. Därför påverkas den inte av extremvärden.

## Typvärde

Det vanligaste värdet. Användbart när materialet är kategorier snarare än tal, vilken skostorlek som säljs mest, vilken betygsnivå som är vanligast.

## Extremvärden avgör vilket mått du väljer

Månadslöner i tusental: `26, 27, 28, 28, 29, 30, 31, 210`

- Medelvärde: **51,1**
- Median: **28,5**

Medelvärdet säger att gruppen tjänar drygt 51 000, men sju av åtta tjänar under 32 000. Det enda höga värdet förvränger bilden.

> **Regel:** finns extremvärden → använd medianen. Är materialet jämnt fördelat → medelvärdet fungerar bra.

Att kunna **motivera** vilket mått som passar är en vanlig uppgiftstyp. Motiveringen ska peka på extremvärdet.

## Vad som kommer härnäst

Lägesmåtten säger var mitten ligger, men ingenting om hur **utspritt** materialet är. Två grupper kan ha samma medelvärde och ändå se helt olika ut. Det är nästa delmoment.
