---
slug: "omlasning-1a/funktioner/koordinatsystem"
title: "Koordinatsystem"
course: omlasning-1a
moment: funktioner
moment_title: "Funktioner"
lesson_number: 2
lesson_total: 9

success_criteria:
  - Förstå att en punkt skrivs som ett koordinatpar (x, y)
  - Veta att x-koordinaten kommer först och y-koordinaten sedan
  - Läsa av koordinaterna för en utmarkerad punkt

bank:
  - question: "Punkten (3, 5). Vad är x-koordinaten?"
    answer: "3"
  - question: "Punkten (3, 5). Vad är y-koordinaten?"
    answer: "5"
  - question: "Vilket tal skrivs först i ett koordinatpar?"
    answer: "x-koordinaten"
  - question: "En punkt har x = 2 och y = 4. Skriv som koordinatpar."
    answer: "(2, 4)"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

worked_example: |
  Ett **koordinatsystem** har två axlar: x-axeln (vågrät) och y-axeln (lodrät). En punkt anges med ett **koordinatpar** `(x, y)`.

  ## Ordningen: x först, y sedan

  Punkten `(3, 5)` betyder:

  | Koordinat | Värde | Betyder |
  |---|---|---|
  | x | 3 | gå 3 steg åt höger |
  | y | 5 | gå 5 steg uppåt |

  > Minnesregel: **x före y**, precis som i alfabetet. Först hur långt åt sidan, sedan hur högt upp.

exercises:
  E:
    - equation: "Punkten (4, 7). Vad är x-koordinaten?"
      hint1: "x-koordinaten är det FÖRSTA talet i paret."
      answer: ["4"]
      solution: |
        I (4, 7) är x = **4** (det första talet).

    - equation: "Punkten (4, 7). Vad är y-koordinaten?"
      hint1: "y-koordinaten är det ANDRA talet i paret."
      answer: ["7"]
      solution: |
        I (4, 7) är y = **7** (det andra talet).

    - equation: "En punkt har x = 2 och y = 5. Skriv den som ett koordinatpar."
      hint1: "x först, y sedan, inom parentes med kommatecken."
      answer: ["(2, 5)", "(2,5)", "2, 5"]
      solution: |
        **(2, 5)**

    - equation: "Vilken koordinat har den markerade punkten i grafen?"
      hint1: "Läs av hur långt åt höger (x) och hur högt upp (y) punkten ligger."
      hint2: "Punkten ligger vid x = 3 och y = 4."
      answer: ["(3, 4)", "(3,4)", "3, 4"]
      solution: |
        Punkten ligger 3 steg åt höger och 4 steg upp → **(3, 4)**
      graf:
        typ: punkter
        punkter: [[3, 4]]
        xmax: 6
        ymax: 8
        ySteg: 1

    - equation: "Vilken koordinat har den markerade punkten i grafen?"
      hint1: "Hur långt åt höger (x), hur högt upp (y)?"
      hint2: "x = 5 och y = 2."
      answer: ["(5, 2)", "(5,2)", "5, 2"]
      solution: |
        Punkten ligger 5 steg åt höger och 2 steg upp → **(5, 2)**
      graf:
        typ: punkter
        punkter: [[5, 2]]
        xmax: 6
        ymax: 8
        ySteg: 1

    - equation: "Vilket tal skrivs först i ett koordinatpar — x eller y?"
      hint1: "Tänk på alfabetet."
      answer: ["x", "x-koordinaten"]
      solution: |
        **x** skrivs först, sedan y. (x, y)

    - equation: "Punkten (0, 6) ligger på vilken axel?"
      hint1: "x = 0 betyder att du inte gått något åt sidan — du står kvar på den lodräta axeln."
      answer: ["y-axeln", "y", "på y-axeln"]
      solution: |
        x = 0 → punkten ligger på **y-axeln**.

prev: vardetabell
prev_lesson_title: "Värdetabell"
next: grafer
next_lesson_title: "Grafer"
---

## Två axlar

Ett **koordinatsystem** har två tallinjer som korsar varandra:

- **x-axeln** — den vågräta (åt höger)
- **y-axeln** — den lodräta (uppåt)

Där de korsar varandra (0, 0) kallas **origo**.

## Koordinatpar (x, y)

En punkt anges med två tal inom parentes: `(x, y)`. Ordningen är alltid **x först, y sedan**:

> `(3, 5)` = 3 steg åt höger, 5 steg uppåt.

Minnesregel: **x kommer före y**, precis som i alfabetet.

## Läsa av en punkt

För att läsa av en utmarkerad punkt: kolla hur långt åt **höger** den ligger (x) och hur långt **upp** (y).

> En punkt rakt ovanför 3:an på x-axeln, i höjd med 4:an på y-axeln → `(3, 4)`.

> **Regel att skriva ner:** En punkt = (x, y). x först (åt sidan), y sedan (uppåt).
