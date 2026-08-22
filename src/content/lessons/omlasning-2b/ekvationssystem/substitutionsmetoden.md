---
slug: "omlasning-2b/ekvationssystem/substitutionsmetoden"
title: "Substitutionsmetoden"
course: omlasning-2b
moment: ekvationssystem
moment_title: "Ekvationssystem"
lesson_number: 4
lesson_total: 6

success_criteria:
  - Lösa ett ekvationssystem där en variabel redan är ensam, t.ex. y = x + 2
  - Göra en variabel ensam själv och sedan sätta in den i den andra ekvationen
  - Räkna ut den andra variabeln när den första är hittad
  - Kontrollera lösningen i båda ekvationerna

bank:
  - question: "Lös systemet y = x + 1 och y = 3x − 5 algebraiskt. Ange x."
    answer: ["3", "x = 3"]
  - question: "Vad är första steget i substitutionsmetoden?"
    answer: ["Få en variabel ensam", "att göra en variabel ensam i ena ekvationen", "lösa ut en variabel"]
  - question: "Du har fått x = 4 och vet att y = 2x − 1. Vad är y?"
    answer: ["7", "y = 7"]
  - question: "Lös systemet y = 2x och x + y = 9 algebraiskt. Ange x."
    answer: ["3", "x = 3"]

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## När y redan är ensam

  Lös systemet:

  ```
  y = x + 5
  y = 3x − 1
  ```

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Båda raderna säger vad y är | x + 5 och 3x − 1 måste vara samma tal | x + 5 = 3x − 1 |
  | Samla x på en sida | 5 + 1 = 3x − x | 6 = 2x |
  | Dela med 2 | — | **x = 3** |
  | Sätt in x = 3 i vilken rad som helst | y = 3 + 5 | **y = 8** |

  Svar: **x = 3 och y = 8**

  **Kontroll:** rad 2: 3 · 3 − 1 = 8 ✓

  ## När du måste göra en variabel ensam först

  Lös systemet:

  ```
  x + 3y = 17
  2x − y = 6
  ```

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Välj det lättaste | I rad 1 står x nästan ensamt | x = 17 − 3y |
  | Sätt in i **andra** raden | 2(17 − 3y) − y = 6 | — |
  | Multiplicera in | 34 − 6y − y = 6 | 34 − 7y = 6 |
  | Lös ut y | −7y = 6 − 34 = −28 | **y = 4** |
  | Tillbaka i uttrycket för x | x = 17 − 3 · 4 | **x = 5** |

  Svar: **x = 5 och y = 4**

  **Kontroll:** rad 2: 2 · 5 − 4 = 6 ✓

  > Sätt **alltid** in i den *andra* ekvationen. Sätter du in i samma rad du löste ut ur får du 0 = 0, vilket är sant men värdelöst.

  ## Vilken variabel ska man välja?

  Välj den som står **utan siffra framför sig**, för då slipper du bråk.

  | System | Bäst att lösa ut |
  |---|---|
  | y = 3x + 1 … | y, redan ensamt |
  | x + 4y = 9 … | x → x = 9 − 4y |
  | 3x + 2y = 12 … | ingen är gratis, då är additionsmetoden bättre |

exercises:
  E:
    - equation: "Lös ekvationssystemet algebraiskt: y = x + 4 och y = 3x. Svara på formen x = ... och y = ..."
      hint1: "Båda raderna säger vad y är. Då måste x + 4 och 3x vara lika."
      hint2: "x + 4 = 3x. Samla x-en på en sida: 4 = 3x − x = 2x."
      answer: ["x = 2 och y = 6", "x = 2, y = 6", "(2, 6)", "2 och 6"]
      solution: |
        x + 4 = 3x
        4 = 2x
        **x = 2**

        y = 3 · 2 = **6**

        Svar: **x = 2 och y = 6**. Kontroll: 2 + 4 = 6 ✓

    - equation: "Lös ekvationssystemet algebraiskt: y = 2x − 3 och y = x + 1. Svara på formen x = ... och y = ..."
      hint1: "Sätt de två uttrycken för y lika med varandra."
      hint2: "2x − 3 = x + 1. Flytta x till vänster och −3 till höger."
      answer: ["x = 4 och y = 5", "x = 4, y = 5", "(4, 5)", "4 och 5"]
      solution: |
        2x − 3 = x + 1
        2x − x = 1 + 3
        **x = 4**

        y = 4 + 1 = **5**

        Svar: **x = 4 och y = 5**. Kontroll: 2 · 4 − 3 = 5 ✓

    - equation: "Lös ekvationssystemet algebraiskt: y = 5 − x och 2x + y = 8. Svara på formen x = ... och y = ..."
      hint1: "Första raden säger redan vad y är. Sätt in 5 − x i stället för y i andra raden."
      hint2: "2x + (5 − x) = 8 blir x + 5 = 8."
      answer: ["x = 3 och y = 2", "x = 3, y = 2", "(3, 2)", "3 och 2"]
      solution: |
        2x + (5 − x) = 8
        x + 5 = 8
        **x = 3**

        y = 5 − 3 = **2**

        Svar: **x = 3 och y = 2**. Kontroll: 2 · 3 + 2 = 8 ✓

    - equation: "Lös ekvationssystemet algebraiskt: x = 2y och x + y = 12. Svara på formen x = ... och y = ..."
      hint1: "x är redan ensamt i första raden. Byt ut x mot 2y i andra raden."
      hint2: "2y + y = 12 blir 3y = 12."
      answer: ["x = 8 och y = 4", "x = 8, y = 4", "(8, 4)", "8 och 4"]
      solution: |
        2y + y = 12
        3y = 12
        **y = 4**

        x = 2 · 4 = **8**

        Svar: **x = 8 och y = 4**. Kontroll: 8 + 4 = 12 ✓

    - equation: "Lös ekvationssystemet algebraiskt: x + 3y = 14 och 2x − y = 7. Svara på formen x = ... och y = ..."
      hint1: "Ingen variabel är ensam. Lös ut x ur den första raden, x står utan siffra framför."
      hint2: "x = 14 − 3y. Sätt in det i andra raden: 2(14 − 3y) − y = 7."
      answer: ["x = 5 och y = 3", "x = 5, y = 3", "(5, 3)", "5 och 3"]
      solution: |
        Lös ut x ur rad 1: x = 14 − 3y

        Sätt in i rad 2:
        2(14 − 3y) − y = 7
        28 − 6y − y = 7
        28 − 7y = 7
        −7y = −21
        **y = 3**

        x = 14 − 3 · 3 = **5**

        Svar: **x = 5 och y = 3**. Kontroll: 2 · 5 − 3 = 7 ✓

    - equation: "Lös ekvationssystemet algebraiskt: y − x = 2 och 3x + y = 14. Svara på formen x = ... och y = ..."
      hint1: "Lös ut y ur första raden, flytta över x."
      hint2: "y = x + 2. Sätt in i rad 2: 3x + (x + 2) = 14."
      answer: ["x = 3 och y = 5", "x = 3, y = 5", "(3, 5)", "3 och 5"]
      solution: |
        Lös ut y ur rad 1: y = x + 2

        Sätt in i rad 2:
        3x + (x + 2) = 14
        4x + 2 = 14
        4x = 12
        **x = 3**

        y = 3 + 2 = **5**

        Svar: **x = 3 och y = 5**. Kontroll: 3 · 3 + 5 = 14 ✓

prev: vad-ar-ett-ekvationssystem
prev_lesson_title: "Vad är ett ekvationssystem?"
next: additionsmetoden
next_lesson_title: "Additionsmetoden"
---

## Idén: byt ut, så blir det en vanlig ekvation

Problemet med ett ekvationssystem är att det finns **två** okända. En ekvation med två okända går inte att lösa.

Substitutionsmetoden löser det genom att **byta ut** den ena variabeln mot ett uttryck. Kvar blir en helt vanlig ekvation med bara ett x, och sådana kan du lösa.

*Substituera* betyder just "byta ut".

## De fyra stegen

1. **Gör en variabel ensam** i den ena ekvationen (om den inte redan är det).
2. **Sätt in** uttrycket i stället för variabeln i den **andra** ekvationen.
3. **Lös** ekvationen du får, nu finns bara en okänd.
4. **Räkna ut den andra** variabeln genom att sätta tillbaka värdet.

Och sedan alltid: **kontrollera i båda ekvationerna**.

## Enklaste fallet: y är redan ensamt i båda

```
y = x + 5
y = 3x − 1
```

Båda raderna talar om vad y är. Alltså måste uttrycken vara lika:

`x + 5 = 3x − 1`

Nu är det en vanlig ekvation: `6 = 2x`, alltså `x = 3`.

Sedan sätter du tillbaka: `y = 3 + 5 = 8`.

## När du måste lösa ut själv

```
x + 3y = 17
2x − y = 6
```

Här är ingenting ensamt. Välj den variabel som **inte har någon siffra framför sig**, här x i första raden:

`x = 17 − 3y`

Sätt in i **andra** raden:

`2(17 − 3y) − y = 6`

Multiplicera in tvåan, förenkla, lös ut y. Sedan tillbaka in i `x = 17 − 3y`.

> **Fällan:** att sätta in i samma rad man löste ut ur. Då får du `17 − 3y + 3y = 17`, alltså `17 = 17`. Sant, men du har inte kommit någonstans.

## Glöm inte den andra variabeln

Ett halvt svar är inget svar. Har du fått x måste du räkna ut y också, och tvärtom. Ett ekvationssystem har alltid **två** tal i svaret.

## När passar metoden?

Substitution är bäst när **någon variabel är ensam eller nästan ensam**. Är båda ekvationerna av typen `3x + 2y = 12` blir det bråk direkt, då är additionsmetoden (nästa delmoment) enklare.
