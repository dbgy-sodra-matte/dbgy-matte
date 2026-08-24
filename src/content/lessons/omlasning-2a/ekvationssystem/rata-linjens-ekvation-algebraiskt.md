---
slug: "omlasning-2a/ekvationssystem/rata-linjens-ekvation-algebraiskt"
title: "Räta linjens ekvation algebraiskt"
course: omlasning-2a
moment: ekvationssystem
moment_title: "Räta linjens ekvation och ekvationssystem"
lesson_number: 3
lesson_total: 7

success_criteria:
  - Räkna ut k ur två punkter med förändringen i y delat med förändringen i x
  - Bestämma m när k och en punkt är kända
  - Skriva hela ekvationen ur två givna punkter
  - Veta att parallella linjer har samma k
  - Skriva om en ekvation till formen y = kx + m

bank:
  - question: "En linje går genom (1, 8) och (3, 4). Vad är k?"
    answer: ["-2", "−2", "k = -2", "k = −2"]
    solution: |
      k är förändringen i y delat med förändringen i x.
      y ändras 4 − 8 = −4 medan x ändras 3 − 1 = 2.
      k = −4 / 2 = **−2**
  - question: "En linje har k = 3 och går genom punkten (2, 11). Vad är m?"
    answer: ["5", "m = 5"]
    solution: |
      Sätt in punkten i y = kx + m.
      11 = 3 · 2 + m ger 11 = 6 + m.
      Svar: **m = 5**
  - question: "Vilket k har en linje som är parallell med y = 6x − 1?"
    answer: ["6", "k = 6"]
    solution: |
      Parallella linjer har **samma lutning**.
      Svar: **k = 6**
  - question: "Lös ut y ur sambandet 2y = 8x − 10."
    answer: ["y = 4x − 5", "y = 4x - 5", "y=4x-5", "y = 4x−5"]
    solution: |
      Dela alla termer med 2.
      8x / 2 = 4x och 10 / 2 = 5.
      Svar: **y = 4x − 5**

how_to:
  - Börja med repetitionen högst upp, den håller Del 1 vid liv medan du läser Del 2
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## k ur två punkter

  Lutningen är hur mycket y ändras per steg i x:

  ```
  k = (y₂ − y₁) / (x₂ − x₁)
  ```

  Bestäm k för linjen genom `(1, 8)` och `(3, 4)`:

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Förändring i y | 4 − 8 | −4 |
  | Förändring i x | 3 − 1 | 2 |
  | Dela | −4 / 2 | **k = −2** |

  > **Samma ordning i täljare och nämnare.** Börjar du med punkt två i täljaren måste du börja med punkt två i nämnaren också. Byter du ordning i bara den ena får du fel tecken.

  Kontroll: k = −2 betyder att linjen går nedåt. Punkterna går från y = 8 till y = 4 när x ökar, det stämmer.

  ## m när k och en punkt är kända

  Sätt in punktens värden i `y = kx + m` och lös ut m.

  En linje har `k = 3` och går genom `(2, 11)`:

  | Steg | Uträkning |
  |---|---|
  | Sätt in x = 2, y = 11, k = 3 | 11 = 3 · 2 + m |
  | Räkna ut | 11 = 6 + m |
  | Dra bort 6 | **m = 5** |

  Ekvationen är `y = 3x + 5`.

  ## Hela ekvationen ur två punkter

  Två steg: först k, sedan m.

  Bestäm ekvationen för linjen genom `(5, 9)` och `(8, 6)`:

  | Steg | Uträkning |
  |---|---|
  | k | (6 − 9) / (8 − 5) = −3 / 3 = −1 |
  | m, med punkten (5, 9) | 9 = −1 · 5 + m → 9 = −5 + m → m = 14 |

  Svar: **y = −x + 14**

  > Kontrollera med den **andra** punkten: `−8 + 14 = 6` ✓. Använder du samma punkt två gånger upptäcker du inte ett räknefel.

  ## Parallella linjer

  Parallella linjer har **samma k** och olika m. De möts därför aldrig.

  En linje är parallell med `y = 6x − 1` och går genom `(0, 4)`.

  - Samma lutning: `k = 6`
  - Punkten ligger på y-axeln, så `m = 4`

  Svar: `y = 6x + 4`

  ## Skriva om till y = kx + m

  Står ekvationen på någon annan form måste y stå ensamt först.

  Lös ut y ur `2y = 8x − 10`:

  Dela **alla** termer med 2: `y = 4x − 5`

  Lös ut y ur `3y + 6x = 12`:

  | Steg | Resultat |
  |---|---|
  | Flytta över 6x | 3y = −6x + 12 |
  | Dela alla termer med 3 | **y = −2x + 4** |

exercises:
  E:
    - equation: "En rät linje går genom punkterna (1, 8) och (3, 4). Bestäm k."
      hint1: "k är förändringen i y delat med förändringen i x."
      hint2: "y ändras från 8 till 4, alltså −4. x ändras från 1 till 3, alltså 2."
      answer: ["-2", "−2", "k = -2", "k = −2"]
      solution: |
        Förändring i y: 4 − 8 = −4
        Förändring i x: 3 − 1 = 2

        k = −4 / 2 = **−2**

    - equation: "En rät linje har k = 3 och går genom punkten (2, 11). Bestäm m."
      hint1: "Sätt in punktens x och y i mallen y = kx + m."
      hint2: "11 = 3 · 2 + m. Nu är m den enda okända."
      answer: ["5", "m = 5"]
      solution: |
        11 = 3 · 2 + m
        11 = 6 + m

        **m = 5**

        Linjens ekvation är y = 3x + 5.

    - equation: "En rät linje går genom punkterna (5, 9) och (8, 6). Bestäm linjens ekvation på formen y = kx + m."
      hint1: "Två steg: räkna ut k först, använd sedan en av punkterna för att få m."
      hint2: "k = (6 − 9) / (8 − 5) = −1. Sätt sedan in punkten (5, 9)."
      answer: ["y = −x + 14", "y = -x + 14", "y=-x+14", "y = 14 − x", "y = 14 - x"]
      solution: |
        k = (6 − 9) / (8 − 5) = −3 / 3 = −1

        Sätt in (5, 9): 9 = −1 · 5 + m → 9 = −5 + m → m = 14

        **y = −x + 14**

        Kontroll med den andra punkten: −8 + 14 = 6 ✓

    - equation: "En rät linje är parallell med y = 6x − 1 och går genom punkten (0, 4). Bestäm linjens ekvation."
      hint1: "Parallella linjer har samma lutning."
      hint2: "k = 6. Punkten (0, 4) ligger på y-axeln, så m kan läsas av direkt."
      answer: ["y = 6x + 4", "y=6x+4"]
      solution: |
        Parallella linjer har samma k, alltså k = 6.

        Punkten (0, 4) ligger på y-axeln, så m = 4.

        **y = 6x + 4**

    - equation: "Lös ut y ur sambandet 2y = 8x − 10."
      hint1: "y ska stå ensamt. Vad är y multiplicerat med?"
      hint2: "Dela alla termer med 2, även den sista."
      answer: ["y = 4x − 5", "y = 4x - 5", "y=4x-5", "y = 4x−5"]
      solution: |
        2y = 8x − 10

        Dela alla termer med 2:

        **y = 4x − 5**

    - equation: "Skriv om 3y + 6x = 12 på formen y = kx + m."
      hint1: "Två steg: få y-termen ensam i vänsterledet först."
      hint2: "3y = −6x + 12. Dela sedan alla termer med 3."
      answer: ["y = −2x + 4", "y = -2x + 4", "y=-2x+4", "y = 4 − 2x", "y = 4 - 2x"]
      solution: |
        3y + 6x = 12

        Flytta över 6x: 3y = −6x + 12

        Dela alla termer med 3:

        **y = −2x + 4**

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSdblN6pmTKpQBl69f7olis8xSPf_lKlrshttOOrRppDHeYSeg/viewform"
prev: rata-linjens-ekvation
prev_lesson_title: "Räta linjens ekvation"
next: grafisk-losning-av-ekvationssystem
next_lesson_title: "Grafisk lösning av ekvationssystem"
---

## Räkna fram linjen i stället för att läsa av den

Förra delmomentet läste du av grafen. Nu ska du räkna fram `k` och `m` ur punkter och samband.

## k ur två punkter

`k = (y₂ − y₁) / (x₂ − x₁)`

Alltså: **förändringen i y delat med förändringen i x.**

Genom `(1, 8)` och `(3, 4)`:

- y ändras `4 − 8 = −4`
- x ändras `3 − 1 = 2`
- `k = −4 / 2 = −2`

> **Håll samma ordning i täljare och nämnare.** Börjar du med den andra punktens y måste du börja med den andra punktens x också. Byter du ordning i bara den ena blir tecknet fel.

Ett negativt k betyder att linjen går nedåt när du läser åt höger. Här går y från 8 till 4 medan x ökar, det stämmer.

## m när k är känt

Sätt in en punkt i `y = kx + m` och lös ut m.

`k = 3`, punkten `(2, 11)`:

`11 = 3 · 2 + m` → `11 = 6 + m` → `m = 5`

## Hela ekvationen ur två punkter

1. Räkna ut k
2. Sätt in en av punkterna och lös ut m

Genom `(5, 9)` och `(8, 6)`:

`k = −1`, sedan `9 = −5 + m` ger `m = 14` → **y = −x + 14**

**Kontrollera med den andra punkten.** `−1 · 8 + 14 = 6` ✓. Kontrollerar du med samma punkt du redan använt kan du inte upptäcka något fel.

## Parallella linjer

Samma k, olika m. De håller samma avstånd hela vägen och möts aldrig.

| Linje | Parallell linje har |
|---|---|
| y = 6x − 1 | k = 6 |
| y = −3x + 5 | k = −3 |
| y = x/2 | k = 0,5 |

## Skriva om till y = kx + m

Många uppgifter ger ekvationen på en annan form. Metoden är alltid: **få y ensamt.**

`2y = 8x − 10` → dela alla termer med 2 → `y = 4x − 5`

`3y + 6x = 12` → flytta över 6x → `3y = −6x + 12` → dela med 3 → `y = −2x + 4`

> Delar du bara vissa termer blir det en annan ekvation. Alla termer, varje gång.

Varför bry sig? För att `k` och `m` inte går att läsa av förrän linjen står på mallformen. Två linjer kan se helt olika ut och ändå vara parallella:

`y = 0,5x + 3` och `2x − 4y + 8 = 0` är samma lutning, det syns först efter omskrivningen.
