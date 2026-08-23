---
slug: "omlasning-2b/ekvationssystem/rata-linjens-ekvation"
title: "Räta linjens ekvation"
course: omlasning-2b
moment: ekvationssystem
moment_title: "Ekvationssystem"
lesson_number: 2
lesson_total: 6

success_criteria:
  - Läsa av k och m ur en graf och skriva linjens ekvation
  - Räkna ut lutningen k ur två punkter
  - Bestämma m när du känner k och en punkt på linjen
  - Skriva linjens ekvation på formen y = kx + m

bank:
  - question: "En linje har k = 3 och m = −2. Skriv linjens ekvation."
    answer: ["y = 3x − 2", "y = 3x - 2", "3x − 2", "3x - 2"]
    solution: |
      Mallen är y = kx + m. Sätt in k = 3 och m = −2.
      Svar: **y = 3x − 2**
  - question: "Vad betyder m i y = kx + m?"
    answer: ["Var linjen skär y-axeln", "skärningen med y-axeln", "y-värdet när x är 0"]
    solution: |
      m är det tal som blir kvar när x = 0.
      Därför är m **y-värdet där linjen skär y-axeln**.
  - question: "En linje går genom (0, 4) och (2, 10). Vilken lutning k har den?"
    answer: ["3", "k = 3"]
    solution: |
      k är hur mycket y ändras när x ökar med 1.
      y ökar 10 − 4 = 6 medan x ökar 2 − 0 = 2.
      k = 6 / 2 = **3**
  - question: "Linjen y = −2x + 7: var skär den y-axeln?"
    answer: ["7", "(0, 7)", "i 7"]
    solution: |
      Linjen skär y-axeln där x = 0, och då är y = m.
      Svar: **7**

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Läsa av ekvationen ur en graf

  Två saker ska hittas: **var linjen skär y-axeln** (det är m) och **hur brant den lutar** (det är k).

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Hitta m | Var korsar linjen y-axeln? Säg i 1 | m = 1 |
  | Hitta k | Gå **1 steg åt höger**, hur många steg **upp** går linjen? Säg 2 | k = 2 |
  | Sätt in | y = kx + m | **y = 2x + 1** |

  Går linjen **nedåt** åt höger är k **negativt**.

  ## Lutning ur två punkter

  En linje går genom `(1, 3)` och `(4, 15)`. Vilken lutning har den?

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Hur mycket ökar y? | 15 − 3 | 12 |
  | Hur mycket ökar x? | 4 − 1 | 3 |
  | Dela | 12 / 3 | **k = 4** |

  > Formeln är alltid densamma: `k = (skillnad i y) / (skillnad i x)`.
  > Det spelar ingen roll vilken punkt du tar först, bara att du tar **samma ordning** uppe och nere.

  ## Hitta m när du har k

  Samma linje: k = 4 och punkten (1, 3) ligger på linjen.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Skriv upp mallen | y = 4x + m | — |
  | Sätt in punkten (x = 1, y = 3) | 3 = 4 · 1 + m | 3 = 4 + m |
  | Lös ut m | m = 3 − 4 | **m = −1** |

  Linjens ekvation: **y = 4x − 1**

  **Kontroll:** stämmer den andra punkten? 4 · 4 − 1 = 15 ✓

exercises:
  E:
    - equation: "Grafen visar en rät linje. Skriv linjens ekvation på formen y = kx + m."
      graf:
        typ: "linjär"
        k: 2
        m: 1
        xmin: -2
        xmax: 3
        ymin: -3
        ymax: 7
        ySteg: 1
      hint1: "Börja med m: var skär linjen y-axeln?"
      hint2: "Linjen skär y-axeln i 1, så m = 1. Gå nu 1 steg höger. Hur många steg upp går linjen?"
      answer: ["y = 2x + 1", "2x + 1"]
      solution: |
        Linjen skär y-axeln i 1 → **m = 1**

        Ett steg åt höger ger två steg upp → **k = 2**

        **y = 2x + 1**

    - equation: "Grafen visar en rät linje. Skriv linjens ekvation på formen y = kx + m."
      graf:
        typ: "linjär"
        k: -2
        m: 3
        xmin: -1
        xmax: 3
        ymin: -3
        ymax: 5
        ySteg: 1
      hint1: "Linjen går nedåt åt höger, då är k negativt."
      hint2: "Den skär y-axeln i 3, så m = 3. Ett steg åt höger ger två steg NER, så k = −2."
      answer: ["y = −2x + 3", "y = -2x + 3", "−2x + 3", "-2x + 3"]
      solution: |
        Skärning med y-axeln: **m = 3**

        Ett steg höger → två steg ner: **k = −2**

        **y = −2x + 3**

    - equation: "En rät linje går genom punkterna (1, 5) och (3, 11). Vilken lutning k har linjen?"
      hint1: "k = (skillnad i y) delat med (skillnad i x)."
      hint2: "y ökar från 5 till 11, alltså 6. x ökar från 1 till 3, alltså 2. Dela."
      answer: ["3", "k = 3"]
      solution: |
        k = (11 − 5) / (3 − 1) = 6 / 2 = **3**

    - equation: "En rät linje går genom punkterna (0, 7) och (4, −1). Bestäm linjens ekvation på formen y = kx + m."
      hint1: "Punkten (0, 7) ligger på y-axeln, då kan du läsa m direkt."
      hint2: "m = 7. Lutningen: y ändras från 7 till −1, alltså −8, medan x ökar med 4. k = −8/4."
      answer: ["y = −2x + 7", "y = -2x + 7", "−2x + 7", "-2x + 7"]
      solution: |
        x = 0 ger y = 7 → **m = 7**

        k = (−1 − 7) / (4 − 0) = −8 / 4 = **−2**

        **y = −2x + 7**

    - equation: "En linje har lutningen k = 5 och går genom punkten (2, 13). Bestäm m."
      hint1: "Sätt in punktens x och y i y = 5x + m."
      hint2: "13 = 5 · 2 + m ger 13 = 10 + m."
      answer: ["3", "m = 3"]
      solution: |
        13 = 5 · 2 + m
        13 = 10 + m
        **m = 3**

        Linjen är y = 5x + 3.

    - equation: "En rät linje går genom punkterna (2, 9) och (5, 18). Bestäm linjens ekvation på formen y = kx + m."
      hint1: "Räkna först ut k. Sätt sedan in en av punkterna för att hitta m."
      hint2: "k = (18 − 9)/(5 − 2) = 3. Sätt in (2, 9): 9 = 3 · 2 + m."
      answer: ["y = 3x + 3", "3x + 3"]
      solution: |
        k = (18 − 9) / (5 − 2) = 9 / 3 = **3**

        Sätt in (2, 9): 9 = 3 · 2 + m → 9 = 6 + m → **m = 3**

        **y = 3x + 3**

        Kontroll med andra punkten: 3 · 5 + 3 = 18 ✓

prev: funktionsbegreppet-fx
prev_lesson_title: "Funktionsbegreppet och f(x)"
next: vad-ar-ett-ekvationssystem
next_lesson_title: "Vad är ett ekvationssystem?"
---

## Mallen som allt bygger på

Varje rät linje kan skrivas

`y = kx + m`

- **k** = lutningen. Hur mycket y ändras när x ökar med 1.
- **m** = var linjen skär y-axeln. Alltså y-värdet när x = 0.

Kan du hitta k och m har du linjens ekvation. Inget mer behövs.

## Läsa k ur en graf

Gå **ett steg åt höger** längs linjen och se hur många steg den går **upp eller ner**.

| Vad linjen gör | k |
|---|---|
| Upp 2 steg | k = 2 |
| Upp 1 steg | k = 1 |
| Rakt (vågrät linje) | k = 0 |
| Ner 3 steg | k = −3 |

Går linjen uppåt åt höger är k positivt. Går den nedåt är k negativt. Det är hela regeln.

## Lutning ur två punkter

Har du inte någon graf men två punkter, räkna:

`k = (y₂ − y₁) / (x₂ − x₁)`

Ta punkterna `(1, 5)` och `(3, 11)`:

`k = (11 − 5) / (3 − 1) = 6 / 2 = 3`

> **Vanligt fel:** att blanda ihop ordningen, t.ex. ta y-skillnaden framlänges och x-skillnaden baklänges. Bestäm dig för vilken punkt som är "punkt 2" och håll dig till den både uppe och nere.

## Hitta m

När k är känd sätter du in en punkt som ligger på linjen och löser ut m.

Linjen har k = 3 och går genom (1, 5):

`5 = 3 · 1 + m` → `5 = 3 + m` → `m = 2`

Ekvationen: `y = 3x + 2`

**Kontrollera alltid** med den andra punkten: 3 · 3 + 2 = 11 ✓

## Varför detta hör till ekvationssystem

Ett ekvationssystem är **två linjer samtidigt**. Skärningspunkten är lösningen. Kan du inte skriva en linjes ekvation kan du varken rita systemet eller tolka svaret, därför kommer det här före metoderna.
