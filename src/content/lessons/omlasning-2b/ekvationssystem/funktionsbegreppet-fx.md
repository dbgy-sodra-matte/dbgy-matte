---
slug: "omlasning-2b/ekvationssystem/funktionsbegreppet-fx"
title: "Funktionsbegreppet och f(x)"
course: omlasning-2b
moment: ekvationssystem
moment_title: "Ekvationssystem"
lesson_number: 1
lesson_total: 6

success_criteria:
  - Räkna ut ett funktionsvärde, t.ex. f(2), när funktionen är given
  - Lösa en ekvation av typen f(x) = 11
  - Läsa av f(x) ur en graf och ur en värdetabell
  - Fylla i luckor i en värdetabell för ett linjärt samband

bank:
  - question: "Låt f(x) = 3x + 5. Vad är f(2)?"
    answer: ["11"]
  - question: "Låt f(x) = 10 − 2x. Vad är f(0)?"
    answer: ["10"]
  - question: "Låt f(x) = 4x. Lös ekvationen f(x) = 20."
    answer: ["5", "x = 5"]
  - question: "Vad betyder f(3) = 7?"
    answer: ["När x är 3 blir y 7", "y = 7 när x = 3", "att f ger 7 när x är 3"]

how_to:
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Räkna ut ett funktionsvärde

  Låt `f(x) = 14 − 3x`. Beräkna `f(2)`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Vad står i parentesen? | Talet **2**, det är vad x ska vara | x = 2 |
  | Byt ut x mot 2 i uttrycket | 14 − 3 · **2** | — |
  | Räkna ut | 14 − 6 | **f(2) = 8** |

  > `f(2)` är inte "f gånger 2". Parentesen talar om **vilket x** du ska sätta in.

  ## Negativt x

  Beräkna `f(−2)` för samma funktion.

  14 − 3 · (−2) = 14 + 6 = **20**

  Minus gånger minus blir plus, det är här det oftast går fel.

  ## Lös ekvationen f(x) = 5

  Nu är det tvärtom: du vet **svaret** och letar efter x.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Skriv ekvationen | 14 − 3x = 5 | — |
  | Flytta över 14 | −3x = 5 − 14 = −9 | — |
  | Dela med −3 | x = −9 / −3 | **x = 3** |

  **Kontroll:** f(3) = 14 − 3 · 3 = 5 ✓

  ## Läsa f(x) ur en graf

  `f(2)` ur en graf: gå till **x = 2** på x-axeln, gå rakt upp till kurvan, läs av **y-värdet**.

  `f(x) = 9` ur en graf: gå till **y = 9** på y-axeln, gå rakt ut till kurvan, läs av **x-värdet**.

exercises:
  E:
    - equation: "Låt f(x) = 3x − 4. Beräkna f(5)."
      hint1: "Sätt in 5 där det står x i uttrycket."
      hint2: "f(5) = 3 · 5 − 4. Räkna multiplikationen först."
      answer: ["11"]
      solution: |
        f(5) = 3 · 5 − 4
        = 15 − 4
        = **11**

    - equation: "Låt f(x) = 12 − 2x. Beräkna f(−3)."
      hint1: "Sätt in −3 där x står. Tänk på tecknet när du multiplicerar."
      hint2: "−2 · (−3) = +6. Minus gånger minus blir plus."
      answer: ["18"]
      solution: |
        f(−3) = 12 − 2 · (−3)
        = 12 + 6
        = **18**

    - equation: "Låt f(x) = 7x. Lös ekvationen f(x) = 42."
      hint1: "Skriv om det som en vanlig ekvation: 7x = 42."
      hint2: "Dela båda leden med 7."
      answer: ["6", "x = 6"]
      solution: |
        7x = 42
        x = 42 / 7
        **x = 6**

        Kontroll: f(6) = 7 · 6 = 42 ✓

    - equation: "Låt f(x) = 2x + 9. Lös ekvationen f(x) = 25."
      hint1: "Ekvationen blir 2x + 9 = 25. Bli av med 9:an först."
      hint2: "2x = 25 − 9 = 16. Dela sedan med 2."
      answer: ["8", "x = 8"]
      solution: |
        2x + 9 = 25
        2x = 16
        **x = 8**

        Kontroll: f(8) = 2 · 8 + 9 = 25 ✓

    - equation: "Grafen visar funktionen f. Bestäm f(3)."
      graf:
        typ: "linjär"
        k: 2
        m: 1
        xmax: 6
        ymax: 14
        ySteg: 2
      hint1: "Gå till x = 3 på x-axeln och sedan rakt upp tills du träffar linjen."
      hint2: "Från träffpunkten går du rakt vänster till y-axeln. Vilket tal står där?"
      answer: ["7"]
      solution: |
        Vid x = 3 ligger linjen på höjden y = 7.

        **f(3) = 7**

    - equation: "Värdetabellen visar ett linjärt samband. Vilket tal ska stå i stället för A? (x: 2, 4, 6, 8; y: 7, 13, 19, A)"
      hint1: "Titta hur mycket y ökar varje gång x ökar med 2."
      hint2: "y ökar med 6 varje gång x ökar med 2 (7 → 13 → 19). Fortsätt mönstret ett steg till."
      answer: ["25", "A = 25"]
      solution: |
        x ökar med 2 varje steg, och y ökar då med 6:

        7 → 13 → 19 → **25**

        A = **25**

next: rata-linjens-ekvation
next_lesson_title: "Räta linjens ekvation"
---

## Vad är en funktion?

En funktion är en **regel**: du stoppar in ett tal, och ut kommer exakt ett tal.

Skrivsättet `f(x)` betyder "det som kommer ut när jag stoppar in x".

`f(x) = 3x + 5` läses: *"stoppar du in ett tal, gångrar jag det med 3 och lägger till 5."*

## f(2) är inte f gånger 2

Det här är den vanligaste missuppfattningen. Parentesen är **ingen multiplikation**, den talar om vilket tal som ska in.

| Skrivsätt | Betydelse |
|---|---|
| `f(2)` | Vad blir det när x = 2? |
| `f(0)` | Vad blir det när x = 0? |
| `f(a)` | Vad blir det när x = a? |

Så för `f(x) = 3x + 5`:

`f(2) = 3 · 2 + 5 = 11`

## Åt andra hållet: lösa f(x) = något

Ibland får du svaret och ska hitta x. Då blir det en vanlig ekvation.

`f(x) = 20` för `f(x) = 3x + 5` betyder:

`3x + 5 = 20` → `3x = 15` → `x = 5`

> **Tumregel:** står talet **inne i parentesen** är det ett x du ska sätta in. Står talet **efter likhetstecknet** är det ett y, och då måste du lösa en ekvation.

## Funktioner i en tabell

En värdetabell är samma funktion, uppradad:

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| y | 5 | 8 | 11 | 14 |

Varje gång x ökar med 1 ökar y med 3. Det är samma 3 som i `3x`. Talet på x = 0 (här 5) är det som läggs till.

## Varför det här kommer först

Hela det här området handlar om **två samband samtidigt**, ekvationssystem. Innan du kan jämföra två funktioner måste du kunna läsa en. Allt som kommer sedan bygger på att `f(x)`, tabell och graf är tre bilder av samma sak.
