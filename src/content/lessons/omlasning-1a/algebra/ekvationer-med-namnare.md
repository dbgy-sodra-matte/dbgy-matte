---
slug: "omlasning-1a/algebra/ekvationer-med-namnare"
title: "Ekvationer med nämnare"
course: omlasning-1a
moment: algebra
moment_title: "Algebra"
lesson_number: 6
lesson_total: 7

success_criteria:
  - Lösa ekvationer där x står över ett bråkstreck, som x/4 = 5
  - Multiplicera bort nämnaren genom att gångra båda leden
  - Lösa tvåstegsekvationer med nämnare, som x/4 + 1 = 6
  - Kontrollera svaret genom insättning

bank:
  - question: "Lös: x/3 = 5"
    answer: "x = 15"
    solution: |
      x är delat med 3, så gör tvärtom: multiplicera båda leden med 3.
      x = 5 · 3 = **15**
  - question: "Lös: x/4 = 6"
    answer: "x = 24"
    solution: |
      Multiplicera båda leden med 4.
      x = 6 · 4 = **24**
  - question: "Lös: x/2 + 1 = 5"
    answer: "x = 8"
    solution: |
      Ta bort det som står utanför bråket först: dra bort 1 i båda leden.
      Då står x delat med 2 lika med 4.
      Multiplicera båda leden med 2: **x = 8**
  - question: "Lös: x/5 = 3"
    answer: "x = 15"
    solution: |
      Multiplicera båda leden med 5.
      x = 3 · 5 = **15**

how_to:
  - Börja med kom-igång-frågorna, de repeterar tidigare delmoment
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner, minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSeH9NA9BpP7T77-xjwWaajW8FrKhe-3AFPS5-_sWFuiKFAVFQ/viewform"

worked_example: |
  `x/4` betyder "x delat med 4". Motsatsen till att dela med 4 är att **multiplicera med 4**, i båda leden.

  ## Ett steg

  Lös `x/4 = 5`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Bli av med nämnaren | multiplicera båda leden med 4 | **x = 20** |

  **Kontroll:** 20/4 = 5 ✓

  ## Två steg

  Lös `x/4 + 1 = 6`. Ta bort det som inte sitter på nämnaren först.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Bli av med +1 | subtrahera 1 i båda leden | x/4 = 5 |
  | Bli av med nämnaren | multiplicera båda leden med 4 | **x = 20** |

  **Kontroll:** 20/4 + 1 = 5 + 1 = 6 ✓

exercises:
  E:
    - equation: "Lös: x/2 = 8"
      hint1: "Motsatsen till att dela med 2 är att multiplicera med 2, i båda leden."
      answer: ["16"]
      solution: |
        x/2 = 8
        x = 16        [multiplicera båda leden med 2]

        Kontroll: 16/2 = 8 ✓

    - equation: "Lös: x/3 = 9"
      hint1: "Multiplicera båda leden med 3."
      answer: ["27"]
      solution: |
        x/3 = 9
        x = 27        [multiplicera med 3]

        Kontroll: 27/3 = 9 ✓

    - equation: "Lös: x/5 = 4"
      hint1: "Multiplicera båda leden med 5."
      answer: ["20"]
      solution: |
        x/5 = 4
        x = 20        [multiplicera med 5]

        Kontroll: 20/5 = 4 ✓

    - equation: "Lös: x/4 + 2 = 6"
      hint1: "Bli av med +2 först (subtrahera 2): x/4 = 4. Multiplicera sedan med 4."
      answer: ["16"]
      solution: |
        x/4 + 2 = 6
        x/4 = 4       [subtrahera 2]
        x = 16        [multiplicera med 4]

        Kontroll: 16/4 + 2 = 4 + 2 = 6 ✓

    - equation: "Lös: x/2 − 3 = 5"
      hint1: "Addera 3 först: x/2 = 8. Multiplicera sedan med 2."
      answer: ["16"]
      solution: |
        x/2 − 3 = 5
        x/2 = 8       [addera 3]
        x = 16        [multiplicera med 2]

        Kontroll: 16/2 − 3 = 8 − 3 = 5 ✓

    - equation: "En elektriker klipper en kabel i 6 lika långa bitar. Varje bit blir 5 m. Hur lång var kabeln från början?"
      hint1: "Låt x = kabelns längd från början. Hur skriver du en sjättedel av x?"
      hint2: "En bit = x/6. Varje bit är 5 m: x/6 = 5. Multiplicera båda leden med 6, eftersom det tar bort nämnaren."
      answer: ["30"]
      solution: |
        x = kabelns längd från början (i meter).

        x/6 = 5
        x = 30        [multiplicera med 6]

        **Kabeln var 30 m lång.** Kontroll: 30/6 = 5 ✓

    - equation: "Tre målare delar lika på ett målningsjobb. Hugo gör sin del och jobbar sedan 4 timmar på ett annat jobb. Totalt jobbar han 10 timmar. Hur många timmar tar hela målningsjobbet?"
      hint1: "Låt x = antalet timmar för hela målningsjobbet. Hur många timmar är Hugos del?"
      hint2: "Hugos del = x/3. Plus 4 timmar: x/3 + 4 = 10. Subtrahera 4 först, eftersom det står utanför bråket."
      answer: ["18"]
      solution: |
        x = antalet timmar för hela målningsjobbet.

        x/3 + 4 = 10
        x/3 = 6       [subtrahera 4]
        x = 18        [multiplicera med 3]

        **Hela målningsjobbet tar 18 timmar.** Kontroll: 18/3 + 4 = 6 + 4 = 10 ✓

prev: ekvationer-med-parenteser
prev_lesson_title: "Ekvationer med parenteser"
next: formler
next_lesson_title: "Formler"
---

## x i en nämnare

`x/4 = 5` betyder "x delat med 4 är 5". Nämnaren (4:an under bråkstrecket) ska bort.

## Multiplicera bort nämnaren

Motsatsen till att **dela** med 4 är att **multiplicera** med 4. Gör det i båda leden:

> `x/4 = 5` → multiplicera båda leden med 4 → `x = 20`

## Två steg: ta bort lösa tal först

Om det står ett extra tal utanför bråket, ta bort det **först**:

> `x/4 + 1 = 6` → subtrahera 1 → `x/4 = 5` → multiplicera med 4 → `x = 20`

## Kontrollen

Sätt in svaret och räkna:

> `20/4 + 1 = 5 + 1 = 6` ✓

> **Regel att skriva ner:** Ta bort lösa tal först. Multiplicera sedan båda leden med nämnaren. Kontrollera genom insättning.
