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
  - question: "Bestäm medianen av 3, 5, 8, 9, 14"
    answer: ["8"]
  - question: "Bestäm typvärdet av 2, 5, 5, 7, 9"
    answer: ["5"]
  - question: "Vilket lägesmått påverkas mest av ett enda extremt högt värde?"
    answer: ["Medelvärdet", "medelvärde", "medelvärdet"]

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar förra området
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet — gå vidare till nästa

worked_example: |
  ## 1. Medelvärde

  Lägg ihop allt och dela med antalet.

  Värdena `6, 9, 11, 14`:

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Summera | 6 + 9 + 11 + 14 | 40 |
  | Dela med antalet | 40 / 4 | **10** |

  ## 2. Median — mittenvärdet

  Medianen är värdet **i mitten** när talen är sorterade i storleksordning.

  `3, 7, 8, 12, 20` → mitten är tredje talet → **median 8**

  **Är antalet jämnt** finns inget enskilt mittenvärde. Ta då medelvärdet av de två i mitten:

  `4, 6, 9, 15` → de två i mitten är 6 och 9 → `(6 + 9) / 2` = **7,5**

  > **Sortera alltid först.** Medianen av osorterade tal går inte att läsa av, och det är det vanligaste felet.

  ## 3. Typvärde

  Det värde som förekommer **flest gånger**.

  `2, 5, 5, 7, 9` → **typvärde 5**

  Det kan finnas flera typvärden, eller inget alls om alla värden är olika.

  ## 4. Vilket mått ska man välja?

  Åtta personer har månadslönerna (i tusental): `26, 27, 28, 28, 29, 30, 31, 210`

  | Mått | Värde | Beskriver det gruppen bra? |
  |---|---|---|
  | Medelvärde | 51,1 | Nej — ingen tjänar i närheten av det |
  | Median | 28,5 | Ja — hälften tjänar mer, hälften mindre |

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

        Medianen är **9** — tredje talet av fem.

    - equation: "Bestäm medianen av 5, 8, 12, 20"
      hint1: "Antalet är jämnt — då finns inget enskilt mittenvärde."
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

    - equation: "I en grupp är månadslönerna (i tusental kr): 25, 26, 27, 28, 180. Vilket lägesmått beskriver gruppen bäst — medelvärdet eller medianen?"
      hint1: "Räkna ut båda och jämför med vad personerna faktiskt tjänar."
      hint2: "Medelvärdet blir 57,2 — men fyra av fem tjänar under 30. Medianen är 27."
      answer: ["Medianen", "median", "medianen"]
      solution: |
        Medelvärde: (25 + 26 + 27 + 28 + 180) / 5 = 286 / 5 = 57,2
        Median: **27**

        Lönen 180 är ett extremvärde som drar upp medelvärdet — ingen i gruppen tjänar i närheten av 57,2.

        **Medianen** beskriver gruppen bäst.

    - equation: "Fem elever fick poängen 12, 14, 15, 16, 18 på ett prov. Om den som fick 18 i stället hade fått 48 — vilket lägesmått ändras INTE?"
      hint1: "Medianen är mittenvärdet. Ändras mitten om bara det högsta värdet höjs?"
      hint2: "Sorterat blir det 12, 14, 15, 16, 48 — mittenvärdet är fortfarande det tredje."
      answer: ["Medianen", "median", "medianen"]
      solution: |
        Före: 12, 14, **15**, 16, 18 → median 15
        Efter: 12, 14, **15**, 16, 48 → median 15

        **Medianen** ändras inte. Medelvärdet går däremot från 15 till 21.

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

Enkelt att räkna ut — men känsligt. Ett enda extremt värde drar iväg hela medelvärdet.

## Median

Sortera först. **Alltid.**

- **Udda antal:** ta värdet i mitten. `3, 7, 8, 12, 20` → medianen är 8.
- **Jämnt antal:** ta medelvärdet av de två i mitten. `4, 6, 9, 15` → (6 + 9)/2 = 7,5.

Medianen bryr sig bara om **ordningen**, inte om hur stora talen är. Därför påverkas den inte av extremvärden.

## Typvärde

Det vanligaste värdet. Användbart när materialet är kategorier snarare än tal — vilken skostorlek som säljs mest, vilken betygsnivå som är vanligast.

## Extremvärden avgör vilket mått du väljer

Månadslöner i tusental: `26, 27, 28, 28, 29, 30, 31, 210`

- Medelvärde: **51,1**
- Median: **28,5**

Medelvärdet säger att gruppen tjänar drygt 51 000 — men sju av åtta tjänar under 32 000. Det enda höga värdet förvränger bilden.

> **Regel:** finns extremvärden → använd medianen. Är materialet jämnt fördelat → medelvärdet fungerar bra.

Att kunna **motivera** vilket mått som passar är en vanlig uppgiftstyp. Motiveringen ska peka på extremvärdet.

## Vad som kommer härnäst

Lägesmåtten säger var mitten ligger — men ingenting om hur **utspritt** materialet är. Två grupper kan ha samma medelvärde och ändå se helt olika ut. Det är nästa delmoment.
