---
slug: "omlasning-1a/funktioner/linjara-funktioner"
title: "Linjära funktioner"
course: omlasning-1a
moment: funktioner
moment_title: "Funktioner"
lesson_number: 4
lesson_total: 10

success_criteria:
  - Känna igen formen y = kx + m
  - Veta att m är startvärdet (där linjen skär y-axeln) och k är lutningen
  - Räkna ut y för ett givet x

bank:
  - question: "I y = 3x + 2, vad är m?"
    answer: "2"
  - question: "I y = 3x + 2, vad är k?"
    answer: "3"
  - question: "I y = 5x − 1, vad är startvärdet?"
    answer: "−1"
  - question: "y = 2x + 7. Vad är y när x = 0?"
    answer: "7"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLScvEeo6mLTQwS4_9nNCsgL49YJR5aMJ5sGzJALatWpwzckucA/viewform"

worked_example: |
  En **linjär funktion** skrivs `y = kx + m` och ger en rät linje. Två bokstäver styr den:

  | Bokstav | Namn | Vad den gör |
  |---|---|---|
  | **m** | startvärde | där linjen skär y-axeln (x = 0) |
  | **k** | lutning | hur mycket y ändras när x ökar med 1 |

  ## Läsa av k och m

  *y = 3x + 2* → k = 3, m = 2.

  ## Räkna ut y

  *y = 3x + 2, vad är y när x = 4?*

  | Steg | Räkning | Resultat |
  |---|---|---|
  | Sätt in x = 4 | 3 · 4 + 2 | — |
  | Räkna | 12 + 2 | **y = 14** |

exercises:
  E:
    - equation: "I funktionen y = 3x + 2, vad är m (startvärdet)?"
      hint1: "m är talet utan x — det som står sist."
      answer: ["2"]
      solution: |
        y = 3x + **2** → m = 2

    - equation: "I funktionen y = 3x + 2, vad är k (lutningen)?"
      hint1: "k är talet framför x."
      answer: ["3"]
      solution: |
        y = **3**x + 2 → k = 3

    - equation: "I funktionen y = 5x − 1, vad är m (startvärdet)?"
      hint1: "Startvärdet är talet utan x — här med minustecken."
      answer: ["-1", "−1"]
      solution: |
        y = 5x **− 1** → m = −1

    - equation: "y = 3x + 2. Vad är y när x = 4?"
      hint1: "Sätt in 4 i stället för x: 3 · 4 + 2."
      answer: ["14"]
      solution: |
        y = 3 · 4 + 2 = 12 + 2 = **14**

    - equation: "y = 2x + 7. Vad är y när x = 0?"
      hint1: "2 · 0 + 7. Vid x = 0 får du alltid startvärdet m."
      answer: ["7"]
      solution: |
        y = 2 · 0 + 7 = **7** (det är startvärdet m)

    - equation: "Grafen visar en linjär funktion. Var skär linjen y-axeln (vad är m)?"
      hint1: "Läs av var linjen korsar den lodräta axeln, vid x = 0."
      answer: ["1"]
      solution: |
        Linjen skär y-axeln i **1** → m = 1.
      graf:
        typ: linjär
        k: 2
        m: 1
        xmax: 5
        ymax: 12
        ySteg: 1

    - equation: "y = 4x − 3. Vad är y när x = 2?"
      hint1: "4 · 2 först, sedan − 3."
      answer: ["5"]
      solution: |
        y = 4 · 2 − 3 = 8 − 3 = **5**

prev: grafer
prev_lesson_title: "Grafer"
next: lasa-av-grafer
next_lesson_title: "Läsa av grafer"
---

## Formen y = kx + m

En **linjär funktion** ger en rät linje och skrivs alltid:

```
y = kx + m
```

Två bokstäver bestämmer hur linjen ser ut:

- **m = startvärdet** — där linjen skär y-axeln (värdet när x = 0)
- **k = lutningen** — hur mycket y ändras varje gång x ökar med 1

## Läsa av k och m

> `y = 3x + 2` → k = 3 (lutning), m = 2 (startvärde).
> `y = 5x − 1` → k = 5, m = −1.

Tänk: **k sitter ihop med x**, **m står ensamt**.

## Räkna ut y

Sätt in x-värdet och räkna — gånger före plus:

> `y = 3x + 2`, x = 4 → `3 · 4 + 2 = 14`.

Vid x = 0 får du alltid m (startvärdet), eftersom k · 0 = 0.

> **Regel att skriva ner:** y = kx + m. k = lutning (framför x), m = startvärde (där linjen skär y-axeln).
