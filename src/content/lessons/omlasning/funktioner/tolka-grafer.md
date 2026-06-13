---
slug: "omlasning/funktioner/tolka-grafer"
title: "Tolka grafer"
course: omlasning
moment: funktioner
moment_title: "Funktioner"
lesson_number: 1
lesson_total: 7

success_criteria:
  - Läsa av vad en punkt (x, y) betyder i en graf
  - Hitta y-värdet när du känner x-värdet
  - Hitta x-värdet när du känner y-värdet
  - Läsa av var grafen skär y-axeln (startvärdet)

bank:
  - question: "Punkten (3, 8) ligger på en graf. Vad är y-värdet när x = 3?"
    answer: "8"
  - question: "Vad menas med att en graf skär y-axeln i punkten (0, 5)?"
    answer: "När x = 0 är y = 5 — det är startvärdet."
  - question: "På en graf är y = 12 när x = 4. Skriv det som en punkt."
    answer: "(4, 12)"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSfkXPdk_01wC8281dCkDn5GilhT73MCx2qahLIuuXhX4mDNtg/viewform"

worked_example: |
  En graf är ett sätt att visa hur två saker hänger ihop. Varje **punkt** har ett x-värde och ett y-värde, skrivet **(x, y)**.

  ## 1. Vad en punkt betyder

  Punkten **(3, 8)** betyder: *när x är 3, är y 8.*

  - x läser du på den vågräta axeln (åt höger)
  - y läser du på den lodräta axeln (uppåt)

  ## 2. Hitta y när du vet x

  *En graf går genom punkterna (0, 2), (1, 4), (2, 6), (3, 8). Vad är y när x = 2?*

  Leta upp x = 2 i listan → y = **6**.

  ## 3. Hitta x när du vet y

  Samma graf. *Vid vilket x är y = 8?*

  Leta upp y = 8 → x = **3**.

  ## 4. Var skär grafen y-axeln?

  y-axeln är där **x = 0**. I listan ovan: (0, 2) → grafen skär y-axeln i **2**. Det kallas ofta **startvärdet**.

exercises:
  E:
    - equation: "Punkten (5, 9) ligger på en graf. Vad är y-värdet när x = 5?"
      hint1: "I en punkt (x, y) står x först och y sist."
      hint2: "Andra talet i (5, 9) är y-värdet."
      answer: ["9"]
      solution: |
        I punkten (5, 9) är x = 5 och y = 9.
        y-värdet är **9**.

    - equation: "En graf går genom punkterna (0, 3), (1, 5), (2, 7), (3, 9). Vad är y när x = 2?"
      hint1: "Leta upp punkten där x = 2."
      hint2: "Punkten (2, 7) — andra talet är y."
      answer: ["7"]
      solution: |
        Vid x = 2 är punkten (2, 7), så y = **7**.

    - equation: "Samma graf: (0, 3), (1, 5), (2, 7), (3, 9). Vid vilket x är y = 9?"
      hint1: "Nu vet du y och letar x. Leta upp punkten där y = 9."
      hint2: "Punkten (3, 9) — första talet är x."
      answer: ["3"]
      solution: |
        Punkten med y = 9 är (3, 9), så x = **3**.

    - equation: "Var skär grafen y-axeln om den går genom (0, 4), (1, 6), (2, 8)?"
      hint1: "y-axeln är där x = 0. Leta upp punkten med x = 0."
      hint2: "Punkten (0, 4) — y-värdet där är startvärdet."
      answer: ["4", "(0, 4)", "(0,4)"]
      solution: |
        Vid x = 0 är punkten (0, 4). Grafen skär y-axeln i **4**.

    - equation: "På en graf är y = 15 när x = 6. Skriv det som en punkt (x, y)."
      hint1: "x skrivs först, y sist, med kommatecken emellan inom parentes."
      hint2: "x = 6 och y = 15 ger punkten (6, 15)."
      answer: ["(6, 15)", "(6,15)"]
      solution: |
        x först, y sist: **(6, 15)**

    - equation: "En mobils batteri visas i en graf. Vid (0, 100) är batteriet fullt. Vad betyder punkten (0, 100)?"
      hint1: "Vad står x för (tid) och vad står y för (batteri)? x = 0 betyder starten."
      hint2: "Vid tiden 0 (starten) är batteriet 100 %."
      answer: ["Vid starten är batteriet 100 %", "batteriet är 100 % vid start", "100 % vid tiden 0"]
      solution: |
        x = 0 är starten (tiden noll), y = 100 är batterinivån.

        Punkten betyder: **vid starten är batteriet 100 %.**

prev: ""
next: linjara-funktioner
next_lesson_title: "Linjära funktioner"
---

## Vad är en graf?

En graf visar hur två saker hänger ihop — till exempel tid och pris, eller antal och kostnad. Den ritas i ett **koordinatsystem** med två axlar:

- **x-axeln** — den vågräta (åt höger)
- **y-axeln** — den lodräta (uppåt)

## En punkt: (x, y)

Varje punkt på grafen skrivs som **(x, y)** — x-värdet först, y-värdet sist.

> Punkten **(3, 8)** betyder: *när x är 3, är y 8.*

Det är hela grunden. x talar om var åt sidan, y hur högt upp.

## Läsa av grafen — åt båda håll

**Hitta y när du vet x:** gå till ditt x-värde, läs av hur högt grafen är där.

**Hitta x när du vet y:** gå till ditt y-värde, läs av vilket x som ger den höjden.

## Startvärdet — där grafen skär y-axeln

y-axeln ligger vid **x = 0**. Punkten där grafen korsar y-axeln har alltså x = 0, och dess y-värde kallas ofta **startvärdet** — värdet "innan något hänt".

> En graf som skär y-axeln i (0, 50) har startvärdet 50. *Vid tiden noll är värdet 50.*

Det här blir extra viktigt i nästa delmoment (linjära funktioner), där startvärdet har ett eget namn: **m**.

> **Regel att skriva ner:** punkt = (x, y), x först. Startvärdet är y-värdet där x = 0.
