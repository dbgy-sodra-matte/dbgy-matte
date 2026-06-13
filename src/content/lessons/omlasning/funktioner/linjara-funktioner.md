---
slug: "omlasning/funktioner/linjara-funktioner"
title: "Linjära funktioner"
course: omlasning
moment: funktioner
moment_title: "Funktioner"
lesson_number: 2
lesson_total: 7

success_criteria:
  - Känna igen formen y = kx + m
  - Veta att m är startvärdet (där linjen skär y-axeln)
  - Veta att k är lutningen (hur mycket y ändras per steg i x)
  - Räkna ut y för ett givet x i en linjär funktion

bank:
  - question: "I y = 3x + 5, vad är m (startvärdet)?"
    answer: "5"
  - question: "I y = 3x + 5, vad är k (lutningen)?"
    answer: "3"
  - question: "Beräkna y i y = 2x + 4 när x = 3."
    answer: "10"
  - question: "Lutar linjen y = −2x + 6 uppåt eller nedåt?"
    answer: "Nedåt (k är negativt)."

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

# exit_ticket_form: checkpoint-Form läggs in när Simon kört genereringsscriptet

worked_example: |
  En linjär funktion ger en **rak linje**. Den skrivs alltid på formen:

  ```
  y = kx + m
  ```

  - **m** = startvärdet (där linjen skär y-axeln, alltså y när x = 0)
  - **k** = lutningen (hur mycket y ändras varje gång x ökar med 1)

  ## 1. Läsa av k och m

  *y = 3x + 5*

  | Del | Värde | Betyder |
  |---|---|---|
  | m | 5 | linjen skär y-axeln i 5 |
  | k | 3 | y ökar med 3 varje gång x ökar med 1 |

  ## 2. Räkna ut y för ett givet x

  *y = 3x + 5, vad är y när x = 4?*

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Byt x mot 4 | y = 3 · 4 + 5 | — |
  | Räkna (gånger före plus) | 12 + 5 | **y = 17** |

  ## 3. Uppåt eller nedåt?

  - **k positivt** → linjen lutar **uppåt** (y växer)
  - **k negativt** → linjen lutar **nedåt** (y minskar)

  *y = −2x + 6* lutar nedåt, eftersom k = −2.

exercises:
  E:
    - equation: "I funktionen y = 4x + 7, vad är m (startvärdet)?"
      hint1: "m är talet utan x — det som står ensamt."
      hint2: "I y = kx + m är m det sista talet: 7."
      answer: ["7"]
      solution: |
        y = 4x + **7** → m = 7 (linjen skär y-axeln i 7).

    - equation: "I funktionen y = 4x + 7, vad är k (lutningen)?"
      hint1: "k är talet som står framför x."
      hint2: "I y = kx + m är k talet vid x: 4."
      answer: ["4"]
      solution: |
        y = **4**x + 7 → k = 4 (y ökar med 4 per steg).

    - equation: "Beräkna y i y = 2x + 4 när x = 3."
      hint1: "Byt ut x mot 3. Kom ihåg: multiplikation före addition."
      hint2: "y = 2 · 3 + 4. Räkna 2 · 3 först, sedan + 4."
      answer: ["10"]
      solution: |
        y = 2 · 3 + 4 = 6 + 4 = **10**

    - equation: "Beräkna y i y = 5x − 2 när x = 4."
      hint1: "Byt x mot 4. Multiplikation först."
      hint2: "y = 5 · 4 − 2 = 20 − 2."
      answer: ["18"]
      solution: |
        y = 5 · 4 − 2 = 20 − 2 = **18**

    - equation: "Lutar linjen y = −3x + 8 uppåt eller nedåt?"
      hint1: "Titta på tecknet framför x (alltså k)."
      hint2: "k = −3 är negativt. Negativ lutning betyder att linjen går nedåt."
      answer: ["nedåt", "Nedåt"]
      solution: |
        k = −3 är negativt → linjen lutar **nedåt** (y minskar när x ökar).

    - equation: "Var skär linjen y = 6x + 9 y-axeln?"
      hint1: "Linjen skär y-axeln där x = 0. Vilket tal är startvärdet m?"
      hint2: "Sätt x = 0: y = 6 · 0 + 9 = 9. Det är m."
      answer: ["9", "(0, 9)", "(0,9)"]
      solution: |
        Vid x = 0: y = 6 · 0 + 9 = **9**. Linjen skär y-axeln i 9 (= m).

    - equation: "En taxi kostar 50 kr i startavgift plus 10 kr per km. Kostnaden ges av y = 10x + 50. Vad kostar en resa på 6 km?"
      hint1: "x är antal km. Sätt in x = 6 i funktionen."
      hint2: "y = 10 · 6 + 50. Räkna multiplikationen först."
      answer: ["110", "110 kr"]
      solution: |
        y = 10 · 6 + 50 = 60 + 50 = **110 kr**

        > Här är m = 50 (startavgiften) och k = 10 (priset per km).

prev: tolka-grafer
prev_lesson_title: "Tolka grafer"
next: rata-linjens-ekvation
next_lesson_title: "Räta linjens ekvation"
---

## En rak linje: y = kx + m

En **linjär funktion** ritar alltid en rak linje. Den skrivs på formen:

```
y = kx + m
```

Två bokstäver styr allt:

- **m = startvärdet** — var linjen skär y-axeln (y-värdet när x = 0)
- **k = lutningen** — hur mycket y ändras varje gång x ökar med 1

## m — startvärdet

m är värdet "innan något hänt", vid x = 0. I `y = 2x + 5` är m = 5: linjen börjar på 5 på y-axeln.

Det här är samma sak som "var skär grafen y-axeln" från förra delmomentet — nu har det bara ett namn.

## k — lutningen

k talar om hur brant linjen är:

| k | Betyder |
|---|---|
| k = 3 | y ökar med 3 för varje steg x tar |
| k = 1 | y ökar med 1 per steg (svag lutning) |
| k = −2 | y *minskar* med 2 per steg (lutar nedåt) |

> **Tecknet på k bestämmer riktningen:** positivt k → uppåt, negativt k → nedåt.

## Räkna ut y för ett x

Sätt bara in x-värdet och räkna — precis som med formler:

> `y = 2x + 5`, x = 4:
> y = 2 · 4 + 5 = 8 + 5 = **13**

Kom ihåg räkneordningen: multiplikationen (kx) före additionen (+ m).

## Vardagsexempel

Kostnadsformeln du mötte i algebra är en linjär funktion! `y = 10x + 50` (taxi: 50 kr start + 10 kr/km):
- m = 50 = startavgiften
- k = 10 = priset per kilometer

> **Regel att skriva ner:** y = kx + m. m = startvärde (skär y-axeln). k = lutning (ändring per steg).
