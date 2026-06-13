---
slug: "omlasning/funktioner/rata-linjens-ekvation"
title: "Räta linjens ekvation"
course: omlasning
moment: funktioner
moment_title: "Funktioner"
lesson_number: 3
lesson_total: 7

success_criteria:
  - Bestämma m (startvärdet) från en graf eller text
  - Räkna ut k (lutningen) från två punkter
  - Skriva ihop en linjär funktions ekvation y = kx + m
  - Bygga ekvationen från en vardagssituation (startavgift + pris per styck)

bank:
  - question: "Linjen skär y-axeln i 4 och har lutning 2. Skriv ekvationen."
    answer: "y = 2x + 4"
  - question: "k = (ändring i y)/(ändring i x). Punkterna (0,3) och (2,9) ger vilket k?"
    answer: "k = 6/2 = 3"
  - question: "Vad står m för i y = kx + m?"
    answer: "Startvärdet — där linjen skär y-axeln."

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSdM2sUMmc44HU57cEMcoUDPjNqtNxIvOLwmAbZR68uQOW1RMw/viewform"

worked_example: |
  Att "bestämma räta linjens ekvation" är att hitta **k** och **m** och skriva ihop **y = kx + m**.

  ## 1. När du får k och m direkt

  *Linjen skär y-axeln i 4 och har lutningen 2.*

  | Del | Värde |
  |---|---|
  | m (startvärde) | 4 |
  | k (lutning) | 2 |
  | **Ekvationen** | **y = 2x + 4** |

  ## 2. Räkna ut k från två punkter

  k = hur mycket y ändras delat med hur mycket x ändras:

  ```
  k = (ändring i y) / (ändring i x)
  ```

  *Punkterna (1, 4) och (3, 10):*

  | Steg | Räkning | Resultat |
  |---|---|---|
  | Ändring i y | 10 − 4 | 6 |
  | Ändring i x | 3 − 1 | 2 |
  | k = 6 / 2 | | **k = 3** |

  ## 3. Hitta m och skriv ihop

  Om linjen går genom (0, 5) är m = 5 direkt (x = 0 är ju startvärdet). Med k = 3:

  > **y = 3x + 5**

exercises:
  E:
    - equation: "En linje skär y-axeln i 6 och har lutningen 2. Skriv ekvationen."
      hint1: "m är startvärdet (där den skär y-axeln), k är lutningen. Sätt in i y = kx + m."
      hint2: "m = 6, k = 2. Skriv y = 2x + 6."
      answer: ["y = 2x + 6", "y=2x+6", "2x + 6"]
      solution: |
        m = 6, k = 2 → **y = 2x + 6**

    - equation: "En linje skär y-axeln i 3 och har lutningen 5. Skriv ekvationen."
      hint1: "m = 3 (startvärde), k = 5 (lutning)."
      hint2: "Sätt in i y = kx + m."
      answer: ["y = 5x + 3", "y=5x+3", "5x + 3"]
      solution: |
        m = 3, k = 5 → **y = 5x + 3**

    - equation: "Räkna ut k för en linje som går genom punkterna (0, 2) och (4, 10)."
      hint1: "k = (ändring i y) / (ändring i x). Räkna ut hur mycket y och x ändras mellan punkterna."
      hint2: "Ändring i y: 10 − 2 = 8. Ändring i x: 4 − 0 = 4. k = 8/4."
      answer: ["2"]
      solution: |
        Ändring i y: 10 − 2 = 8
        Ändring i x: 4 − 0 = 4
        k = 8 / 4 = **2**

    - equation: "Räkna ut k för en linje som går genom punkterna (1, 3) och (4, 12)."
      hint1: "k = (ändring i y) / (ändring i x)."
      hint2: "Ändring i y: 12 − 3 = 9. Ändring i x: 4 − 1 = 3. k = 9/3."
      answer: ["3"]
      solution: |
        Ändring i y: 12 − 3 = 9
        Ändring i x: 4 − 1 = 3
        k = 9 / 3 = **3**

    - equation: "En linje har lutning 3 och går genom (0, 5). Skriv hela ekvationen."
      hint1: "Punkten (0, 5) har x = 0, så y-värdet där är m (startvärdet)."
      hint2: "m = 5, k = 3. Sätt in i y = kx + m."
      answer: ["y = 3x + 5", "y=3x+5", "3x + 5"]
      solution: |
        Punkten (0, 5) ger m = 5. Med k = 3: **y = 3x + 5**

    - equation: "Ett gym tar 200 kr i startavgift och 100 kr per månad. Skriv en linjär funktion y = kx + m för kostnaden efter x månader."
      hint1: "Startavgiften betalas en gång (= m). Månadsavgiften är per månad (= k)."
      hint2: "m = 200 (startavgift), k = 100 (per månad)."
      answer: ["y = 100x + 200", "y=100x+200", "100x + 200"]
      solution: |
        m = 200 (startavgift), k = 100 (per månad) → **y = 100x + 200**

prev: linjara-funktioner
prev_lesson_title: "Linjära funktioner"
next: funktionsbegreppet-fx
next_lesson_title: "Funktionsbegreppet f(x)"
---

## Bestämma räta linjens ekvation

Förra delmomentet handlade om att *läsa av* k och m. Nu ska du **bygga ihop** ekvationen själv: hitta k och m, och skriv `y = kx + m`.

## Om du får k och m direkt

Enklaste fallet — sätt bara in dem:

> *Skär y-axeln i 4, lutning 2.* → m = 4, k = 2 → **y = 2x + 4**

## Räkna ut k från två punkter

Lutningen k är **hur mycket y ändras delat med hur mycket x ändras**:

```
k = (ändring i y) / (ändring i x)
```

> Punkterna (1, 4) och (3, 10):
> - ändring i y: 10 − 4 = 6
> - ändring i x: 3 − 1 = 2
> - k = 6 / 2 = **3**

Tänk: "för varje steg åt höger, hur mycket går linjen upp?"

## Hitta m

Om en av punkterna har x = 0 (alltså (0, något)) är det y-värdet **m** direkt — det är ju startvärdet.

> Linjen går genom (0, 5) med k = 3 → m = 5 → **y = 3x + 5**

## Vardagssituationer

Samma struktur som kostnadsformlerna:
- **Startavgift** = m (betalas en gång)
- **Pris per styck/månad/km** = k (per enhet)

> Gym: 200 kr start + 100 kr/mån → **y = 100x + 200**

> **Regel att skriva ner:** k = (ändring i y)/(ändring i x). m = y-värdet när x = 0. Skriv ihop: y = kx + m.
