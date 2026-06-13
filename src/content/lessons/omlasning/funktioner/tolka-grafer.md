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
    - equation: "Grafen visar hur långt Mira har sprungit (y meter) efter x sekunder. Hur långt har hon sprungit efter 4 sekunder?"
      hint1: "Gå till x = 4 på den vågräta axeln och följ uppåt tills du når linjen. Läs av y där."
      hint2: "Vid x = 4 ligger linjen på y = 12."
      answer: ["12", "12 m", "12 meter"]
      solution: |
        Vid x = 4 är linjen på höjden y = 12.
        Mira har sprungit **12 meter**.
      graf:
        typ: linjär
        k: 3
        m: 0
        xmax: 6
        ymax: 18
        ySteg: 3

    - equation: "Samma graf över Miras löpning. Vid vilken tid (x) hade hon sprungit 6 meter?"
      hint1: "Nu vet du y (= 6) och söker x. Utgå från 6 på den lodräta axeln, gå vågrätt till linjen och läs av x nedanför."
      hint2: "Linjen är på y = 6 när x = 2."
      answer: ["2", "2 s", "2 sekunder"]
      solution: |
        Följ y = 6 vågrätt till linjen och sedan rakt ned: x = **2 sekunder**.
      graf:
        typ: linjär
        k: 3
        m: 0
        xmax: 6
        ymax: 18
        ySteg: 3

    - equation: "Grafen visar saldot (y kr) på Adams busskort efter x veckor. Hur mycket pengar fanns på kortet från början?"
      hint1: "'Från början' betyder x = 0. Läs av var linjen skär y-axeln (den lodräta axeln)."
      hint2: "Vid x = 0 ligger linjen på 100."
      answer: ["100", "100 kr"]
      solution: |
        Vid x = 0 skär linjen y-axeln i 100.
        Från början fanns **100 kr** på kortet.
      graf:
        typ: linjär
        k: -20
        m: 100
        xmax: 5
        ymax: 100
        ySteg: 20

    - equation: "Samma graf över busskortet. Efter hur många veckor är kortet tomt (saldo 0 kr)?"
      hint1: "Tomt betyder y = 0. Leta upp var linjen når den vågräta axeln (botten)."
      hint2: "Linjen når y = 0 vid x = 5."
      answer: ["5", "5 veckor"]
      solution: |
        Linjen träffar x-axeln (y = 0) vid x = **5**. Kortet är tomt efter 5 veckor.
      graf:
        typ: linjär
        k: -20
        m: 100
        xmax: 5
        ymax: 100
        ySteg: 20

    - equation: "Grafen visar priset (y kr) för x hekto lösgodis. Vad kostar 3 hekto?"
      hint1: "Gå till x = 3 på den vågräta axeln och läs av hur högt punkten ligger."
      hint2: "Vid x = 3 ligger grafen på y = 12."
      answer: ["12", "12 kr"]
      solution: |
        Vid x = 3 ligger grafen på y = 12.
        3 hekto kostar **12 kr**.
      graf:
        typ: punkter
        punkter: [[0, 0], [1, 4], [2, 8], [3, 12]]
        visaKurva: true
        xmax: 4
        ymax: 14
        ySteg: 2

    - equation: "Grafen visar månadskostnaden (y kr) för ett mobilabonnemang vid x GB surf. Vad är den fasta avgiften — alltså kostnaden redan vid 0 GB?"
      hint1: "Den fasta avgiften är vad du betalar redan vid 0 GB. Det är där linjen skär y-axeln."
      hint2: "Vid x = 0 ligger linjen på 20."
      answer: ["20", "20 kr"]
      solution: |
        Vid x = 0 skär linjen y-axeln i 20.
        Den fasta avgiften är **20 kr**.
      graf:
        typ: linjär
        k: 5
        m: 20
        xmax: 8
        ymax: 60
        ySteg: 10

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
