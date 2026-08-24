---
slug: "omlasning-2a/ekvationssystem/substitutionsmetoden"
title: "Substitutionsmetoden"
course: omlasning-2a
moment: ekvationssystem
moment_title: "Räta linjens ekvation och ekvationssystem"
lesson_number: 5
lesson_total: 7

success_criteria:
  - Lösa ett system där båda ekvationerna är lösta för y
  - Sätta in ett uttryck i den andra ekvationen i stället för en variabel
  - Lösa ut en variabel själv när ingen står ensam
  - Räkna ut den andra variabeln och skriva hela lösningen

bank:
  - question: "Lös systemet y = 4x − 3 och y = x + 9 algebraiskt. Ange x."
    answer: ["4", "x = 4"]
    solution: |
      Båda uttrycken är lika med y, så de är lika med varandra.
      4x − 3 = x + 9. Dra bort x: 3x − 3 = 9. Lägg till 3: 3x = 12.
      Svar: **x = 4**
  - question: "Vad måste du ha innan du kan sätta in något i den andra ekvationen?"
    answer: ["ett uttryck för en variabel", "en variabel utlöst", "en variabel ensam", "ett uttryck att sätta in", "en utlöst variabel"]
    solution: |
      Substitution betyder att sätta in, och då krävs något att sätta in.
      Du behöver alltså **ett uttryck för den ena variabeln**, hämtat ur den ena ekvationen.
  - question: "Du har fått x = 5 och vet att y = 3x − 4. Vad är y?"
    answer: ["11", "y = 11"]
    solution: |
      Sätt in x = 5 i uttrycket för y.
      y = 3 · 5 − 4 = 15 − 4 = **11**
  - question: "Lös systemet y = 2x + 1 och 3x + y = 16 algebraiskt. Ange x."
    answer: ["3", "x = 3"]
    solution: |
      Första ekvationen ger ett uttryck för y. Sätt in det i den andra.
      3x + (2x + 1) = 16 ger 5x + 1 = 16, alltså 5x = 15.
      Svar: **x = 3**

how_to:
  - Börja med repetitionen högst upp, den håller Del 1 vid liv medan du läser Del 2
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Idén

  Substituera betyder **byta ut**. Har du ett uttryck för den ena variabeln kan du sätta in det i den andra ekvationen. Då blir det en ekvation med bara en okänd, och den kan du lösa.

  ## Fall 1: båda är lösta för y

  ```
  y = 4x − 3
  y = x + 9
  ```

  Båda uttrycken är lika med y, alltså är de lika med varandra:

  | Steg | Uträkning |
  |---|---|
  | Sätt uttrycken lika | 4x − 3 = x + 9 |
  | Dra bort x från båda leden | 3x − 3 = 9 |
  | Lägg till 3 | 3x = 12 |
  | Dela med 3 | **x = 4** |

  Sätt in x = 4 i vilken som helst av ekvationerna:

  `y = 4 + 9 = 13`

  Svar: **x = 4 och y = 13**

  Kontroll i den andra ekvationen: `4 · 4 − 3 = 13` ✓

  ## Fall 2: en är löst, den andra inte

  ```
  y = 2x + 1
  3x + y = 16
  ```

  Den första ger ett uttryck för y. Sätt in det där y står i den andra:

  | Steg | Uträkning |
  |---|---|
  | Byt ut y mot (2x + 1) | 3x + (2x + 1) = 16 |
  | Slå ihop | 5x + 1 = 16 |
  | Dra bort 1 | 5x = 15 |
  | Dela med 5 | **x = 3** |

  `y = 2 · 3 + 1 = 7`

  Svar: **x = 3 och y = 7**

  > **Sätt parentes runt uttrycket** när du byter ut. Utan parentes går tecken lätt förlorade, särskilt när det står ett minus framför.

  ## Fall 3: ingen står ensam

  ```
  x = y + 4
  2x + y = 20
  ```

  Här står x ensamt i stället. Det fungerar precis lika bra — byt ut x:

  `2(y + 4) + y = 20` → `2y + 8 + y = 20` → `3y = 12` → **y = 4**

  Sedan `x = 4 + 4 = 8`.

  Svar: **x = 8 och y = 4**

  Står ingen variabel ensam får du lösa ut en själv först. Välj den som är enklast — helst en som redan har en ensam etta framför sig.

  ## Kontrollen

  Sätt in **båda** värdena i **båda** ekvationerna. Det tar tjugo sekunder och är den enda kontrollen som fångar ett teckenfel.

exercises:
  E:
    - equation: "Lös ekvationssystemet algebraiskt: y = 4x − 3 och y = x + 9. Ange både x och y."
      hint1: "Båda uttrycken är lika med y, alltså är de lika med varandra."
      hint2: "4x − 3 = x + 9. Samla x i vänsterledet."
      answer: ["x = 4 och y = 13", "x = 4, y = 13", "(4, 13)", "4 och 13", "x=4 och y=13", "4, 13"]
      solution: |
        4x − 3 = x + 9
        3x − 3 = 9
        3x = 12
        x = 4

        y = 4 + 9 = 13

        **x = 4 och y = 13**

        Kontroll: 4 · 4 − 3 = 13 ✓

    - equation: "Lös ekvationssystemet algebraiskt: y = 2x + 5 och y = 20 − x. Ange både x och y."
      hint1: "Sätt uttrycken lika med varandra."
      hint2: "2x + 5 = 20 − x. Lägg till x i båda leden."
      answer: ["x = 5 och y = 15", "x = 5, y = 15", "(5, 15)", "5 och 15", "x=5 och y=15", "5, 15"]
      solution: |
        2x + 5 = 20 − x
        3x + 5 = 20
        3x = 15
        x = 5

        y = 2 · 5 + 5 = 15

        **x = 5 och y = 15**

        Kontroll: 20 − 5 = 15 ✓

    - equation: "Lös ekvationssystemet algebraiskt: y = 3x och y = x + 8. Ange både x och y."
      hint1: "Sätt uttrycken lika: 3x = x + 8."
      hint2: "Dra bort x från båda leden."
      answer: ["x = 4 och y = 12", "x = 4, y = 12", "(4, 12)", "4 och 12", "x=4 och y=12", "4, 12"]
      solution: |
        3x = x + 8
        2x = 8
        x = 4

        y = 3 · 4 = 12

        **x = 4 och y = 12**

    - equation: "Lös ekvationssystemet algebraiskt: y = 2x + 1 och 3x + y = 16. Ange både x och y."
      hint1: "Den första ger ett uttryck för y. Sätt in det där y står i den andra."
      hint2: "3x + (2x + 1) = 16. Slå ihop x-termerna."
      answer: ["x = 3 och y = 7", "x = 3, y = 7", "(3, 7)", "3 och 7", "x=3 och y=7", "3, 7"]
      solution: |
        Sätt in y = 2x + 1 i den andra ekvationen:

        3x + (2x + 1) = 16
        5x + 1 = 16
        5x = 15
        x = 3

        y = 2 · 3 + 1 = 7

        **x = 3 och y = 7**

        Kontroll: 3 · 3 + 7 = 16 ✓

    - equation: "Lös ekvationssystemet algebraiskt: x = y + 4 och 2x + y = 20. Ange både x och y."
      hint1: "Här står x ensamt. Byt ut x i den andra ekvationen."
      hint2: "2(y + 4) + y = 20. Multiplicera in tvåan först."
      answer: ["x = 8 och y = 4", "x = 8, y = 4", "(8, 4)", "8 och 4", "x=8 och y=4", "8, 4"]
      solution: |
        Sätt in x = y + 4 i den andra ekvationen:

        2(y + 4) + y = 20
        2y + 8 + y = 20
        3y = 12
        y = 4

        x = 4 + 4 = 8

        **x = 8 och y = 4**

        Kontroll: 2 · 8 + 4 = 20 ✓

    - equation: "Lös ekvationssystemet algebraiskt: y = x − 6 och y = 14 − 3x. Ange både x och y."
      hint1: "Sätt uttrycken lika med varandra."
      hint2: "x − 6 = 14 − 3x. Lägg till 3x i båda leden."
      answer: ["x = 5 och y = −1", "x = 5, y = -1", "(5, -1)", "(5, −1)", "5 och -1", "5 och −1"]
      solution: |
        x − 6 = 14 − 3x
        4x − 6 = 14
        4x = 20
        x = 5

        y = 5 − 6 = −1

        **x = 5 och y = −1**

        Kontroll: 14 − 3 · 5 = 14 − 15 = −1 ✓

prev: grafisk-losning-av-ekvationssystem
prev_lesson_title: "Grafisk lösning av ekvationssystem"
next: additionsmetoden
next_lesson_title: "Additionsmetoden"
---

## Varför en algebraisk metod behövs

Den grafiska metoden visar vad som händer, men den kan bara läsa av det som råkar ligga på en hel ruta. De algebraiska metoderna ger exakta svar varje gång.

## Idén bakom substitution

Substituera betyder **byta ut**.

Har du ett uttryck för den ena variabeln kan du sätta in det i den andra ekvationen. Då står bara en okänd kvar, och det är en vanlig ekvation.

## Båda lösta för y

```
y = 4x − 3
y = x + 9
```

Båda är lika med y, alltså lika med varandra:

`4x − 3 = x + 9` → `3x = 12` → **x = 4**

Sätt in i vilken som helst av ekvationerna: `y = 4 + 9 = 13`

Svar: **x = 4 och y = 13**

## En löst, en inte

```
y = 2x + 1
3x + y = 16
```

Byt ut `y` i den andra mot `(2x + 1)`:

`3x + (2x + 1) = 16` → `5x = 15` → **x = 3**, och `y = 7`

> **Parentesen är viktig.** Byter du ut y i något som `8 − y` blir det `8 − (2x + 1)`, alltså `8 − 2x − 1`. Utan parentes tappar du teckenbytet på ettan.

## Ingen står ensam

Då löser du ut en själv. Välj den som är billigast — helst en variabel som redan har en ensam etta framför sig, så slipper du bråk.

```
x = y + 4
2x + y = 20
```

Här står x ensamt, vilket fungerar precis lika bra:

`2(y + 4) + y = 20` → `3y = 12` → **y = 4**, och `x = 8`

## Ordningen som alltid fungerar

1. Se till att en variabel står ensam i den ena ekvationen
2. Sätt in uttrycket i den **andra** ekvationen
3. Lös den ekvation som blir kvar
4. Sätt in svaret för att få den andra variabeln
5. Kontrollera i **båda** ekvationerna

> Steg 2 säger *den andra* ekvationen av en anledning. Sätter du in uttrycket i sig självt får du `y = y` — sant, men värdelöst.

## Kontrollen

Sätt in båda värdena i båda ekvationerna. Det är den enda kontrollen som fångar ett teckenfel, och den tar tjugo sekunder.
