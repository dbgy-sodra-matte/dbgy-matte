---
slug: "omlasning-2a/ekvationssystem/additionsmetoden"
title: "Additionsmetoden"
course: omlasning-2a
moment: ekvationssystem
moment_title: "Räta linjens ekvation och ekvationssystem"
lesson_number: 6
lesson_total: 7

success_criteria:
  - Addera två ekvationer så att en variabel försvinner
  - Se när metoden fungerar direkt och när den inte gör det
  - Multiplicera en hel ekvation med ett tal för att skapa motsatta termer
  - Räkna ut den andra variabeln och kontrollera i båda ekvationerna

bank:
  - question: "Lös systemet x + y = 12 och x − y = 4 med additionsmetoden. Ange x."
    answer: ["8", "x = 8"]
    solution: |
      Den ena raden har +y och den andra −y, så de tar ut varandra när du adderar.
      Kvar blir 2x = 16.
      Svar: **x = 8**
  - question: "Vad är syftet med att multiplicera en hel ekvation med ett tal innan du adderar?"
    answer: ["Att en variabel ska få lika stort tal framför sig i båda raderna", "att kunna eliminera en variabel", "så att en variabel försvinner vid additionen", "att få lika stora termer"]
    solution: |
      Additionen fungerar bara om en variabel har lika stort tal framför sig i de två raderna.
      Multiplikationen ordnar det, **så att variabeln försvinner när raderna läggs ihop**.
  - question: "Om du multiplicerar 3x − y = 5 med 4: vad blir raden?"
    answer: ["12x − 4y = 20", "12x - 4y = 20", "12x-4y=20", "12x−4y=20"]
    solution: |
      Multiplicera varje term i hela ekvationen, även högerledet.
      4 · 3x = 12x, 4 · (−y) = −4y, 4 · 5 = 20.
      Svar: **12x − 4y = 20**
  - question: "I systemet 2x + y = 17 och 3x − y = 13: vad händer om du adderar raderna?"
    answer: ["y försvinner", "y-termerna tar ut varandra", "man får 5x = 30", "y elimineras"]
    solution: |
      Den ena raden har +y och den andra −y.
      Adderar du raderna tar de ut varandra och **y försvinner**: kvar blir 5x = 30.

how_to:
  - Börja med repetitionen högst upp, den håller Del 1 vid liv medan du läser Del 2
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Idén

  Adderar du två ekvationer led för led får du en ny sann ekvation. Är det väl valt försvinner den ena variabeln på köpet.

  ## Fall 1: det fungerar direkt

  ```
  x + y = 12
  x − y = 4
  ```

  Den ena har `+y`, den andra `−y`. Addera raderna:

  | | x-termer | y-termer | högerled |
  |---|---|---|---|
  | rad 1 | x | +y | 12 |
  | rad 2 | x | −y | 4 |
  | **summa** | **2x** | **0** | **16** |

  `2x = 16` → **x = 8**

  Sätt in i vilken som helst av ekvationerna: `8 + y = 12` → `y = 4`

  Svar: **x = 8 och y = 4**

  ## Fall 2: koefficienter framför x

  ```
  2x + y = 17
  3x − y = 13
  ```

  y-termerna är fortfarande motsatta. Addera:

  `5x = 30` → **x = 6**, och `2 · 6 + y = 17` ger `y = 5`

  Svar: **x = 6 och y = 5**

  ## Fall 3: multiplicera först

  ```
  2x + 3y = 16
  x − y = 3
  ```

  Ingenting tar ut varandra som det står. Men multiplicerar du den **andra** raden med 2 får x-termerna samma storlek:

  | Steg | Resultat |
  |---|---|
  | Rad 2 gånger 2 | 2x − 2y = 6 |
  | Nu: rad 1 minus den nya raden | 5y = 10 |
  | | **y = 2** |

  `x − 2 = 3` → `x = 5`

  Svar: **x = 5 och y = 2**

  > **Multiplicera hela raden**, alla termer och högerledet. Missar du högerledet är det inte längre samma ekvation, och svaret blir fel utan att något ser konstigt ut.

  ## Fall 4: multiplicera båda raderna

  ```
  3x + 4y = 26
  5x − 2y = 26
  ```

  Multiplicera den andra raden med 2 så blir y-termerna motsatta:

  `10x − 4y = 52`

  Addera med den första: `13x = 78` → **x = 6**

  `3 · 6 + 4y = 26` → `4y = 8` → `y = 2`

  Svar: **x = 6 och y = 2**

  ## Vilken metod ska du välja?

  | Systemet ser ut så här | Välj |
  |---|---|
  | y = ... och y = ... | substitution |
  | en variabel står ensam | substitution |
  | ax + by = c på båda raderna | addition |
  | en variabel har redan motsatta tecken | addition |

  Båda metoderna ger samma svar. Välj den som ger minst räknande.

exercises:
  E:
    - equation: "Lös ekvationssystemet med additionsmetoden: x + y = 12 och x − y = 4. Ange både x och y."
      hint1: "Den ena raden har +y och den andra −y. Vad händer om du adderar dem?"
      hint2: "y-termerna tar ut varandra. Kvar blir 2x = 16."
      answer: ["x = 8 och y = 4", "x = 8, y = 4", "(8, 4)", "8 och 4", "x=8 och y=4", "8, 4"]
      solution: |
        Addera raderna:

        2x = 16
        x = 8

        Sätt in i första ekvationen: 8 + y = 12 ger y = 4

        **x = 8 och y = 4**

        Kontroll: 8 − 4 = 4 ✓

    - equation: "Lös ekvationssystemet med additionsmetoden: 2x + y = 17 och 3x − y = 13. Ange både x och y."
      hint1: "y-termerna är motsatta. Addera raderna."
      hint2: "5x = 30. Sätt sedan in x i en av ekvationerna."
      answer: ["x = 6 och y = 5", "x = 6, y = 5", "(6, 5)", "6 och 5", "x=6 och y=5", "6, 5"]
      solution: |
        Addera raderna:

        5x = 30
        x = 6

        Sätt in: 2 · 6 + y = 17 ger 12 + y = 17, alltså y = 5

        **x = 6 och y = 5**

        Kontroll: 3 · 6 − 5 = 13 ✓

    - equation: "Lös ekvationssystemet med additionsmetoden: 3x + 2y = 19 och x − 2y = 1. Ange både x och y."
      hint1: "Titta på y-termerna: +2y och −2y."
      hint2: "De tar ut varandra vid addition. Kvar blir 4x = 20."
      answer: ["x = 5 och y = 2", "x = 5, y = 2", "(5, 2)", "5 och 2", "x=5 och y=2", "5, 2"]
      solution: |
        Addera raderna:

        4x = 20
        x = 5

        Sätt in: 5 − 2y = 1 ger −2y = −4, alltså y = 2

        **x = 5 och y = 2**

        Kontroll: 3 · 5 + 2 · 2 = 15 + 4 = 19 ✓

    - equation: "Lös ekvationssystemet med additionsmetoden: 4x − y = 11 och 2x + y = 13. Ange både x och y."
      hint1: "y-termerna är −y och +y."
      hint2: "Addera raderna: 6x = 24."
      answer: ["x = 4 och y = 5", "x = 4, y = 5", "(4, 5)", "4 och 5", "x=4 och y=5", "4, 5"]
      solution: |
        Addera raderna:

        6x = 24
        x = 4

        Sätt in: 2 · 4 + y = 13 ger 8 + y = 13, alltså y = 5

        **x = 4 och y = 5**

        Kontroll: 4 · 4 − 5 = 11 ✓

    - equation: "Lös ekvationssystemet: 2x + 3y = 16 och x − y = 3. Ange både x och y."
      hint1: "Ingenting tar ut varandra som det står. Multiplicera den andra raden med 2."
      hint2: "2x − 2y = 6. Dra sedan bort den från den första raden."
      answer: ["x = 5 och y = 2", "x = 5, y = 2", "(5, 2)", "5 och 2", "x=5 och y=2", "5, 2"]
      solution: |
        Multiplicera den andra raden med 2:

        2x − 2y = 6

        Dra bort den från den första raden:

        (2x + 3y) − (2x − 2y) = 16 − 6
        5y = 10
        y = 2

        Sätt in: x − 2 = 3 ger x = 5

        **x = 5 och y = 2**

        Kontroll: 2 · 5 + 3 · 2 = 10 + 6 = 16 ✓

    - equation: "Lös ekvationssystemet: 3x + 4y = 26 och 5x − 2y = 26. Ange både x och y."
      hint1: "Multiplicera den andra raden med 2 så att y-termerna blir motsatta."
      hint2: "10x − 4y = 52. Addera sedan med den första raden."
      answer: ["x = 6 och y = 2", "x = 6, y = 2", "(6, 2)", "6 och 2", "x=6 och y=2", "6, 2"]
      solution: |
        Multiplicera den andra raden med 2:

        10x − 4y = 52

        Addera med den första raden:

        13x = 78
        x = 6

        Sätt in: 3 · 6 + 4y = 26 ger 4y = 8, alltså y = 2

        **x = 6 och y = 2**

        Kontroll: 5 · 6 − 2 · 2 = 30 − 4 = 26 ✓

prev: substitutionsmetoden
prev_lesson_title: "Substitutionsmetoden"
next: problemlosning-ekvationssystem
next_lesson_title: "Problemlösning med ekvationssystem"
---

## Idén

Adderar du två ekvationer led för led får du en ny sann ekvation. Är den ena variabeln motsatt i de två raderna försvinner den på köpet.

```
x + y = 12
x − y = 4
```

`+y` och `−y` tar ut varandra:

`2x = 16` → **x = 8**

Sedan `8 + y = 12` → `y = 4`.

## När det fungerar direkt

När en variabel har **samma tal framför sig men olika tecken** i de två raderna.

| Systemet | Vad som händer vid addition |
|---|---|
| x + y = 12, x − y = 4 | y försvinner, 2x = 16 |
| 2x + y = 17, 3x − y = 13 | y försvinner, 5x = 30 |
| 3x + 2y = 19, x − 2y = 1 | y försvinner, 4x = 20 |

## När du måste förbereda

Står det `2x + 3y = 16` och `x − y = 3` tar ingenting ut varandra. Då **multiplicerar du en hel rad** så att det passar.

Multiplicera andra raden med 2: `2x − 2y = 6`

Nu har båda raderna `2x`. Drar du bort den ena från den andra försvinner x:

`5y = 10` → **y = 2**

> **Hela raden.** Alla termer och högerledet. Multiplicerar du bara vänsterledet är det en annan ekvation, och svaret blir fel utan att något ser konstigt ut.

Ibland behöver båda raderna multipliceras:

`3x + 4y = 26` och `5x − 2y = 26` → multiplicera den andra med 2 → `10x − 4y = 52` → addera → `13x = 78`

## Addera eller subtrahera?

- Samma tecken på variabeln i båda raderna → **subtrahera**
- Olika tecken → **addera**

Båda gör samma sak: får variabeln att försvinna.

## Vilken metod ska du välja?

| Systemet ser ut så här | Välj |
|---|---|
| y = ... och y = ... | substitution |
| en variabel står redan ensam | substitution |
| ax + by = c på båda raderna | addition |
| en variabel har redan motsatta tecken | addition |

Metoderna ger samma svar. Välj den som ger minst räknande — på provet står det inte vilken du ska använda.

## Kontrollen

Sätt in båda värdena i **båda** ekvationerna. Additionsmetoden har många små steg och ett teckenfel syns inte förrän du kontrollerar.
