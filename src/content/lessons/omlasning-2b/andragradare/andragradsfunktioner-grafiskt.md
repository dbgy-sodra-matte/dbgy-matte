---
slug: "omlasning-2b/andragradare/andragradsfunktioner-grafiskt"
title: "Andragradsfunktioner grafiskt"
course: omlasning-2b
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 7
lesson_total: 9

success_criteria:
  - Läsa av en parabels nollställen ur en graf
  - Ange symmetrilinjens ekvation
  - Avgöra om funktionen har ett största eller ett minsta värde, och motivera med tecknet på x²-termen
  - Läsa av det största eller minsta värdet ur grafen

bank:
  - question: "Vad kallas punkterna där parabeln skär x-axeln?"
    answer: ["Nollställen", "nollställena", "nollställe"]
    solution: |
      På x-axeln är y = 0, och där är alltså funktionens värde noll.
      Därför kallas punkterna **nollställen**.
  - question: "En parabel har nollställena x = 1 och x = 7. Vilken ekvation har symmetrilinjen?"
    answer: ["x = 4", "4"]
    solution: |
      Parabeln är symmetrisk, så symmetrilinjen ligger mitt emellan nollställena.
      (1 + 7) / 2 = 4.
      Svar: **x = 4**
  - question: "Har f(x) = −2x² + 5x ett största eller ett minsta värde?"
    answer: ["Största värde", "största", "ett största värde"]
    solution: |
      Titta på tecknet framför x². Här är det minus, så parabeln vänder nedåt.
      En nedåtvänd parabel har ett **största värde**.
  - question: "Var skär grafen till f(x) = x² + 3x − 7 y-axeln?"
    answer: ["−7", "-7", "(0, −7)", "(0, -7)"]
    solution: |
      Grafen skär y-axeln där x = 0. Sätt in det.
      f(0) = 0 + 0 − 7 = **−7**

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Parabelns delar

  Grafen till en andragradsfunktion kallas **parabel**. Fyra saker ska du kunna peka ut:

  | Del | Vad det är | Hur du hittar den |
  |---|---|---|
  | **Nollställen** | Där kurvan skär x-axeln | Läs av x-värdena där y = 0 |
  | **Symmetrilinjen** | Den lodräta linjen mitt i parabeln | Mitt emellan nollställena |
  | **Vertex** | Kurvans vändpunkt (botten eller toppen) | Ligger på symmetrilinjen |
  | **Skärning med y-axeln** | Där kurvan korsar y-axeln | f(0), alltså konstanttermen |

  ## Symmetrilinjen ligger mitt emellan

  En parabel med nollställena x = −2 och x = 4.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Lägg ihop nollställena | −2 + 4 | 2 |
  | Dela med 2 (mittpunkten) | 2 / 2 | 1 |
  | Skriv som en ekvation | — | **x = 1** |

  Symmetrilinjen skrivs alltid som `x = något`, det är en lodrät linje, inte ett tal.

  ## Största eller minsta värde?

  Titta bara på tecknet framför **x²-termen**:

  | x²-termen | Parabelns form | Funktionen har |
  |---|---|---|
  | Positiv (t.ex. x², 3x²) | Öppnar uppåt, som ett glatt ansikte | ett **minsta** värde |
  | Negativ (t.ex. −x², −2x²) | Öppnar nedåt | ett **största** värde |

  `f(x) = −x² + 4x` har alltså ett **största** värde, eftersom x²-termen är negativ.

  > Motiveringen ger poäng på prövningen. Skriv ut den: *"Största värde, eftersom x²-termen är negativ och parabeln därför öppnar nedåt."*

  ## Läsa av värdet

  Det största eller minsta värdet är **y-koordinaten i vertex**, inte x-koordinaten.

  Ligger vertex i punkten (2, −3) är det **minsta värdet −3**, och det inträffar när x = 2.

  Blanda inte ihop dem: frågan "vilket är minsta värdet" vill ha y, frågan "för vilket x" vill ha x.

exercises:
  E:
    - equation: "Grafen visar en andragradsfunktion. Ange funktionens nollställen."
      graf:
        typ: "andragrad"
        a: 1
        b: -2
        c: -8
        xmin: -3
        xmax: 5
        ymin: -10
        ymax: 8
        ySteg: 2
      hint1: "Nollställena är där kurvan skär x-axeln."
      hint2: "Kurvan korsar x-axeln på två ställen, läs av båda x-värdena."
      answer: ["x = −2 och x = 4", "−2 och 4", "-2 och 4", "x = -2 och x = 4"]
      solution: |
        Kurvan skär x-axeln vid x = −2 och x = 4.

        **Nollställena är x = −2 och x = 4**

    - equation: "Grafen visar en andragradsfunktion. Ange ekvationen för symmetrilinjen."
      graf:
        typ: "andragrad"
        a: 1
        b: -6
        c: 5
        xmin: -1
        xmax: 7
        ymin: -6
        ymax: 12
        ySteg: 2
      hint1: "Symmetrilinjen går rakt genom kurvans botten, mitt emellan nollställena."
      hint2: "Nollställena är 1 och 5. Mitt emellan dem ligger 3. Svara på formen x = ..."
      answer: ["x = 3", "3"]
      solution: |
        Nollställena är x = 1 och x = 5.

        Mitt emellan: (1 + 5) / 2 = 3

        **Symmetrilinjen är x = 3**

    - equation: "Grafen visar en andragradsfunktion. Har funktionen ett största eller ett minsta värde?"
      graf:
        typ: "andragrad"
        a: -1
        b: 4
        c: 0
        xmin: -1
        xmax: 5
        ymin: -6
        ymax: 5
        ySteg: 1
      hint1: "Åt vilket håll öppnar sig parabeln?"
      hint2: "Kurvan öppnar nedåt, den har alltså en topp, inte en botten."
      answer: ["Största värde", "största", "ett största värde", "största värdet"]
      solution: |
        Parabeln öppnar **nedåt**, så kurvan har en högsta punkt.

        Funktionen har ett **största värde**.

        (Det syns också på uttrycket: x²-termen är negativ.)

    - equation: "Grafen visar en andragradsfunktion. Ange funktionens minsta värde."
      graf:
        typ: "andragrad"
        a: 1
        b: -4
        c: 1
        xmin: -1
        xmax: 5
        ymin: -4
        ymax: 6
        ySteg: 1
      hint1: "Minsta värdet är y-koordinaten i kurvans lägsta punkt."
      hint2: "Bottenpunkten ligger vid x = 2. Gå rakt vänster därifrån till y-axeln. Vilket tal står där?"
      answer: ["−3", "-3"]
      solution: |
        Kurvans lägsta punkt ligger i (2, −3).

        Minsta värdet är **−3**, och det inträffar när x = 2.

        > Frågan vill ha y-värdet. x = 2 är **var** det händer, inte **vad** värdet är.

    - equation: "Har funktionen f(x) = 3x² − 12x + 7 ett största eller ett minsta värde?"
      hint1: "Du behöver ingen graf, titta på tecknet framför x²-termen."
      hint2: "3x² är positiv, så parabeln öppnar uppåt."
      answer: ["Minsta värde", "minsta", "ett minsta värde", "minsta värdet"]
      solution: |
        x²-termen är **positiv** (3x²), så parabeln öppnar uppåt och har en botten.

        Funktionen har ett **minsta värde**.

    - equation: "Var skär grafen till f(x) = x² + 5x − 12 y-axeln?"
      hint1: "På y-axeln är x = 0. Räkna ut f(0)."
      hint2: "f(0) = 0² + 5·0 − 12. Allt med x försvinner."
      answer: ["−12", "-12", "(0, −12)", "(0, -12)"]
      solution: |
        f(0) = 0² + 5 · 0 − 12 = **−12**

        Grafen skär y-axeln i punkten (0, −12).

        > Genväg: konstanttermen i uttrycket är alltid y-axelns skärning.

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSe1AtqxFu-KOSqdL85civ7SLCm9hCmZLV61OZGmIZJ2yQl3-Q/viewform"
prev: pq-formeln
prev_lesson_title: "pq-formeln"
next: andragradsfunktioner-algebraiskt
next_lesson_title: "Andragradsfunktioner algebraiskt"
---

## Parabeln

En andragradsfunktion `f(x) = ax² + bx + c` har en graf som kallas **parabel**, en symmetrisk kurva med en botten eller en topp.

Fyra saker ska du kunna läsa av:

| Del | Var den syns |
|---|---|
| Nollställen | Där kurvan skär **x-axeln** |
| Symmetrilinje | Lodrät linje mitt i kurvan |
| Vertex | Kurvans vändpunkt (lägsta eller högsta punkt) |
| Skärning med y-axeln | Där kurvan korsar **y-axeln** |

## Uppåt eller nedåt: titta på x²-termen

Det är **tecknet framför x²** som bestämmer åt vilket håll parabeln öppnar sig:

- **Positiv** x²-term (`x²`, `2x²`, `0,5x²`) → parabeln öppnar **uppåt** → funktionen har ett **minsta värde**
- **Negativ** x²-term (`−x²`, `−3x²`) → parabeln öppnar **nedåt** → funktionen har ett **största värde**

Det är hela regeln, och den kräver ingen uträkning alls. På prövningen ska motiveringen skrivas ut, den ger poäng.

## Symmetrilinjen

Parabeln är spegelsymmetrisk. Speglingslinjen är en **lodrät linje** som går rakt genom vertex.

Har du nollställena är den lätt att hitta: den ligger **mitt emellan** dem.

Nollställen −2 och 4 → `(−2 + 4) / 2 = 1` → symmetrilinjen är `x = 1`

> Symmetrilinjen skrivs som en **ekvation**: `x = 1`, inte bara "1". Den är en linje, inte ett tal.

## Största/minsta värdet är ett y-värde

Vertex är en punkt med två koordinater, till exempel (2, −3).

- **x-koordinaten (2)** talar om *var* extremvärdet inträffar, den ligger på symmetrilinjen
- **y-koordinaten (−3)** är *värdet*, det minsta värdet är −3

Frågan "vilket är funktionens minsta värde?" vill ha **y**. Att svara 2 är ett av de vanligaste felen.

## Skärningen med y-axeln

På y-axeln är x = 0. Alltså är skärningen `f(0)`, och alla termer med x försvinner:

`f(x) = x² + 5x − 12` → `f(0) = −12`

Konstanttermen i uttrycket **är** y-axelns skärning. Du kan läsa av den direkt.

## Sammanfattning: vad du ser i uttrycket

| I `f(x) = ax² + bx + c` | Vad det säger |
|---|---|
| Tecknet på a | Uppåt (minsta värde) eller nedåt (största värde) |
| c | Var grafen skär y-axeln |
| Nollställena | Får du genom att lösa `f(x) = 0`, nästa delmoment |
