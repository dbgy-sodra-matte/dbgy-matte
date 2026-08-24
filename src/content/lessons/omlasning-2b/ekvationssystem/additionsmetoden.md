---
slug: "omlasning-2b/ekvationssystem/additionsmetoden"
title: "Additionsmetoden"
course: omlasning-2b
moment: ekvationssystem
moment_title: "Ekvationssystem"
lesson_number: 5
lesson_total: 6

success_criteria:
  - Addera två ekvationer så att en variabel försvinner
  - Subtrahera ekvationer när samma variabel har samma tecken
  - Multiplicera en ekvation med ett tal för att få lika stora motsatta termer
  - Räkna ut den andra variabeln och kontrollera i båda ekvationerna

bank:
  - question: "I systemet 2x + y = 10 och 3x − y = 5: vad händer om du adderar raderna?"
    answer: ["y försvinner", "y-termerna tar ut varandra", "man får 5x = 15"]
    solution: |
      Den ena raden har +y och den andra −y.
      Adderar du raderna tar de ut varandra och **y försvinner**: kvar blir 5x = 15.
  - question: "Lös systemet x + y = 10 och x − y = 4 med additionsmetoden. Ange x."
    answer: ["7", "x = 7"]
    solution: |
      Addera raderna: y tar ut sig självt och kvar blir 2x = 14.
      Dela med 2: **x = 7**
  - question: "Varför multiplicerar man ibland en hel ekvation med ett tal?"
    answer: ["För att få lika stora motsatta termer", "så att en variabel ska försvinna", "för att kunna eliminera en variabel"]
    solution: |
      Additionsmetoden kräver att en variabel har lika stora men motsatta tal framför sig.
      Genom att multiplicera hela ekvationen med ett tal ordnar du det, **så att variabeln kan elimineras**.
  - question: "Om du multiplicerar 2x + y = 7 med 3: vad blir raden?"
    answer: ["6x + 3y = 21", "6x+3y=21"]
    solution: |
      Multiplicera varje term i hela ekvationen, även högerledet.
      3 · 2x = 6x, 3 · y = 3y, 3 · 7 = 21.
      Svar: **6x + 3y = 21**

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## När termerna redan tar ut varandra

  Lös systemet:

  ```
  y − x = 9
  2y + x = 21
  ```

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Titta på x-termerna | −x och +x, motsatta | — |
  | Addera raderna, led för led | (y + 2y) + (−x + x) = 9 + 21 | 3y = 30 |
  | Lös ut y | 30 / 3 | **y = 10** |
  | Sätt in i rad 1 | 10 − x = 9 | **x = 1** |

  Svar: **x = 1 och y = 10**

  **Kontroll:** rad 2: 2 · 10 + 1 = 21 ✓

  ## När du måste subtrahera i stället

  Lös systemet:

  ```
  2x + y = 12
  x + y = 7
  ```

  Här står `+y` i **båda**. Adderar du får du 3y, då försvinner ingenting. **Subtrahera** i stället:

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Rad 1 minus rad 2 | (2x − x) + (y − y) = 12 − 7 | x = 5 |
  | Sätt in i rad 2 | 5 + y = 7 | **y = 2** |

  Svar: **x = 5 och y = 2**

  ## När du måste multiplicera först

  Lös systemet:

  ```
  3x + 2y = 12
  5x − 3y = 1
  ```

  Ingenting tar ut varandra. Fixa till y-termerna: gör dem till **6 och −6**.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Rad 1 · 3 | 9x + 6y = 36 | — |
  | Rad 2 · 2 | 10x − 6y = 2 | — |
  | Addera | 19x + 0 = 38 | **x = 2** |
  | Sätt in i rad 1 (originalet) | 3 · 2 + 2y = 12 → 2y = 6 | **y = 3** |

  Svar: **x = 2 och y = 3**

  **Kontroll:** rad 2: 5 · 2 − 3 · 3 = 10 − 9 = 1 ✓

  > När du multiplicerar en ekvation måste **hela** raden med, även högerledet. Det är där de flesta felen sitter.

exercises:
  E:
    - equation: "Lös ekvationssystemet med additionsmetoden: x + y = 10 och x − y = 4. Svara på formen x = ... och y = ..."
      hint1: "Titta på y-termerna: +y och −y. Vad händer om du adderar raderna?"
      hint2: "Addera led för led: 2x = 14."
      answer: ["x = 7 och y = 3", "x = 7, y = 3", "(7, 3)", "7 och 3", "7, 3"]
      solution: |
        Addera raderna:
        (x + x) + (y − y) = 10 + 4
        2x = 14
        **x = 7**

        Sätt in i rad 1: 7 + y = 10 → **y = 3**

        Svar: **x = 7 och y = 3**. Kontroll: 7 − 3 = 4 ✓

    - equation: "Lös ekvationssystemet med additionsmetoden: 2x + y = 11 och 3x − y = 9. Svara på formen x = ... och y = ..."
      hint1: "y-termerna är +y och −y, de tar ut varandra vid addition."
      hint2: "(2x + 3x) = 5x och 11 + 9 = 20."
      answer: ["x = 4 och y = 3", "x = 4, y = 3", "(4, 3)", "4 och 3", "4, 3"]
      solution: |
        Addera raderna:
        5x = 20
        **x = 4**

        Sätt in i rad 1: 2 · 4 + y = 11 → 8 + y = 11 → **y = 3**

        Svar: **x = 4 och y = 3**. Kontroll: 3 · 4 − 3 = 9 ✓

    - equation: "Lös ekvationssystemet: 3x + y = 17 och x + y = 7. Svara på formen x = ... och y = ..."
      hint1: "Båda har +y. Adderar du blir det 2y, det hjälper inte. Testa att subtrahera i stället."
      hint2: "Rad 1 minus rad 2: (3x − x) + (y − y) = 17 − 7."
      answer: ["x = 5 och y = 2", "x = 5, y = 2", "(5, 2)", "5 och 2", "5, 2"]
      solution: |
        Rad 1 − rad 2:
        2x = 10
        **x = 5**

        Sätt in i rad 2: 5 + y = 7 → **y = 2**

        Svar: **x = 5 och y = 2**. Kontroll: 3 · 5 + 2 = 17 ✓

    - equation: "Lös ekvationssystemet: x + 2y = 11 och 2x − y = 2. Svara på formen x = ... och y = ..."
      hint1: "Multiplicera rad 2 med 2, så blir y-termerna +2y och −2y."
      hint2: "Rad 2 · 2 ger 4x − 2y = 4. Addera den till rad 1."
      answer: ["x = 3 och y = 4", "x = 3, y = 4", "(3, 4)", "3 och 4", "3, 4"]
      solution: |
        Rad 2 · 2: 4x − 2y = 4

        Addera med rad 1 (x + 2y = 11):
        5x = 15
        **x = 3**

        Sätt in i rad 2: 2 · 3 − y = 2 → 6 − y = 2 → **y = 4**

        Svar: **x = 3 och y = 4**. Kontroll: 3 + 2 · 4 = 11 ✓

    - equation: "Lös ekvationssystemet: 2x + 3y = 19 och 4x − y = 10. Svara på formen x = ... och y = ..."
      hint1: "Multiplicera rad 2 med 3 så att y-termerna blir +3y och −3y."
      hint2: "Rad 2 · 3 ger 12x − 3y = 30. Addera raderna: 14x = 49."
      answer: ["x = 3,5 och y = 4", "x = 3.5 och y = 4", "x = 3,5, y = 4", "(3,5; 4)"]
      solution: |
        Rad 2 · 3: 12x − 3y = 30

        Addera med rad 1 (2x + 3y = 19):
        14x = 49
        **x = 3,5**

        Sätt in i rad 2: 4 · 3,5 − y = 10 → 14 − y = 10 → **y = 4**

        Svar: **x = 3,5 och y = 4**. Kontroll: 2 · 3,5 + 3 · 4 = 7 + 12 = 19 ✓

    - equation: "Lös ekvationssystemet: 3x + 2y = 16 och 2x + 5y = 18. Svara på formen x = ... och y = ..."
      hint1: "Ingen variabel tar ut den andra. Fixa x-termerna: multiplicera rad 1 med 2 och rad 2 med 3."
      hint2: "Rad 1 · 2 ger 6x + 4y = 32. Rad 2 · 3 ger 6x + 15y = 54. Nu har båda 6x. Subtrahera."
      answer: ["x = 4 och y = 2", "x = 4, y = 2", "(4, 2)", "4 och 2", "4, 2"]
      solution: |
        Rad 1 · 2: 6x + 4y = 32
        Rad 2 · 3: 6x + 15y = 54

        Subtrahera (den nedre minus den övre):
        11y = 22
        **y = 2**

        Sätt in i rad 1 (originalet): 3x + 2 · 2 = 16 → 3x = 12 → **x = 4**

        Svar: **x = 4 och y = 2**. Kontroll: 2 · 4 + 5 · 2 = 8 + 10 = 18 ✓

    - equation: "Lös ekvationssystemet: y − x = 6 och 2y + x = 24. Ange både x och y."
      hint1: "Titta på tecknen framför x, inte på vilken bokstav som står först."
      hint2: "−x och +x tar ut varandra när du adderar ekvationerna."
      answer: ["x = 4 och y = 10", "x = 4, y = 10", "4 och 10", "x=4 och y=10", "(4, 10)"]
      solution: |
        y − x = 6
        2y + x = 24

        Addera: 3y = 30, alltså y = 10.

        Sätt in i den första: 10 − x = 6 ger **x = 4**

        **x = 4 och y = 10**

        Att y står först ändrar ingenting, metoden ser på tecknen.

    - equation: "Lös ekvationssystemet: 2x + 3y = 7 och 5x − 2y = 8. Ange både x och y."
      hint1: "Här räcker det inte att multiplicera en ekvation. Vilket tal är både 3 och 2 delbara i?"
      hint2: "Multiplicera den första med 2 och den andra med 3, så blir y-termerna 6y och −6y."
      answer: ["x = 2 och y = 1", "x = 2, y = 1", "2 och 1", "x=2 och y=1", "(2, 1)"]
      solution: |
        Multiplicera den första med 2: 4x + 6y = 14

        Multiplicera den andra med 3: 15x − 6y = 24

        Addera: 19x = 38, alltså x = 2.

        Sätt in: 2 · 2 + 3y = 7 ger 3y = 3, alltså **y = 1**

        **x = 2 och y = 1**

        Kontroll: 5 · 2 − 2 · 1 = 10 − 2 = 8 ✓

    - equation: "En elev löser 3x + y = 14 och x − y = 2 så här: adderar leden och får 4x = 16, alltså x = 4. Sätter in i den andra: 4 − y = 2 ger y = 6. Vilket steg är fel?"
      hint1: "Kontrollera varje steg för sig. Adderingen först, sedan insättningen."
      hint2: "4 − y = 2. Vad blir y om du löser den ekvationen ordentligt?"
      answer: ["insättningen", "sista steget", "y-värdet", "uträkningen av y", "det sista", "y = 6 är fel", "y"]
      solution: |
        Adderingen stämmer: 4x = 16 ger x = 4 ✓

        **Felet ligger i insättningen.**

        4 − y = 2 ger −y = −2, alltså y = 2. Inte 6.

        Kontroll: 3 · 4 + 2 = 14 ✓ och 4 − 2 = 2 ✓

        Att granska en färdig lösning är en egen färdighet, och den prövas på prov. Räkna varje steg själv i stället för att läsa dig fram.

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSfh9ffH00fry9_SquDIraS3y_V441hxPeWobtwsxamG4IeM1Q/viewform"
prev: substitutionsmetoden
prev_lesson_title: "Substitutionsmetoden"
next: problemlosning-ekvationssystem
next_lesson_title: "Problemlösning med ekvationssystem"
---

## Idén: få bort en variabel genom att lägga ihop

Substitutionsmetoden byter ut en variabel. Additionsmetoden gör något annat: den **lägger ihop de två ekvationerna** så att den ena variabeln tar ut sig själv.

Det bygger på en enkel regel: adderar du lika mycket till båda leden är likheten fortfarande sann. Och ekvation 2 säger just att dess vänsterled och högerled är **lika mycket**.

## Fall 1: termerna är redan motsatta

```
y − x = 9
2y + x = 21
```

x-termerna är `−x` och `+x`. Lägg ihop raderna led för led:

`3y + 0 = 30` → `y = 10`

Sedan tillbaka i vilken rad som helst för att få x.

## Fall 2: samma tecken — subtrahera

```
2x + y = 12
x + y = 7
```

Här står `+y` i båda. Adderar du blir det `2y` och ingenting försvinner. **Dra i stället bort** den ena raden från den andra:

`(2x − x) + (y − y) = 12 − 7` → `x = 5`

> Tumregel: **motsatta tecken → addera. Samma tecken → subtrahera.**

## Fall 3: ingenting passar — multiplicera först

```
3x + 2y = 12
5x − 3y = 1
```

Varken x- eller y-termerna tar ut varandra. Då **förstorar** du raderna tills de gör det.

Målet: göra y-termerna till `+6y` och `−6y` (6 är minsta talet som både 2 och 3 går upp i).

- Rad 1 gånger 3 → `9x + 6y = 36`
- Rad 2 gånger 2 → `10x − 6y = 2`

Addera: `19x = 38` → `x = 2`

**Hela raden ska multipliceras**, alla termer och högerledet. Missar du högerledet blir det fel, och felet syns inte förrän kontrollen.

## Ordningen som gör det säkert

1. Titta på variablerna. Finns motsatta termer? Addera.
2. Samma tecken? Subtrahera.
3. Ingetdera? Multiplicera en (eller båda) raderna så att det passar.
4. Lös den ekvation som blir kvar.
5. Sätt in i en av **ursprungsekvationerna** för att få den andra variabeln.
6. Kontrollera i **båda**.

## Vilken metod ska jag välja?

| Systemet ser ut så här | Välj |
|---|---|
| En variabel är ensam (y = …) | Substitution |
| En variabel står utan siffra framför | Substitution |
| Alla termer har siffror framför sig | Addition |
| Motsatta termer redan från början | Addition |

Båda metoderna ger samma svar. På provet får du använda vilken du vill, men skriv ut stegen, för uppställningen ger poäng.
