---
slug: "omlasning/algebra/ekvationer"
title: "Ekvationer"
course: omlasning
moment: algebra
moment_title: "Algebra"
lesson_number: 4
lesson_total: 8

success_criteria:
  - Lösa ekvationer med balansmetoden — gör samma sak i båda leden
  - Lösa ekvationer med x i båda leden
  - Lösa ekvationer med parenteser
  - Lösa ekvationer med nämnare
  - Kontrollera ditt svar genom att sätta in det i ekvationen

bank:
  - question: "Lös: x + 8 = 15"
    answer: "x = 7"
  - question: "Lös: 4x = 28"
    answer: "x = 7"
  - question: "Lös: 2x + 5 = 17"
    answer: "x = 6"
  - question: "Lös: x/5 = 4"
    answer: "x = 20"
  - question: "Lös: 6x − 4 = 4x + 10"
    answer: "x = 7"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLScJfcL5yNTVO949hMdwFM-V0J9Iplo59KE3H1xpF7wmIw62YQ/viewform"

widget: "ekvation-vag/v1"
widget_height: 560

worked_example: |
  ## 1. Balansmetoden — grunden för allt

  Lös `2x + 9 = 21`.

  | Steg | Vad vi gör (samma sak i BÅDA leden) | Resultat |
  |---|---|---|
  | Bli av med +9 | subtrahera 9 från båda leden | 2x = 12 |
  | Bli av med 2:an | dela båda leden med 2 | **x = 6** |

  **Kontroll:** 2 · 6 + 9 = 12 + 9 = 21 ✓

  ## 2. x i båda leden

  Lös `5x − 3 = 3x + 7`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Samla x på vänster sida | subtrahera 3x från båda leden | 2x − 3 = 7 |
  | Samla talen på höger sida | addera 3 till båda leden | 2x = 10 |
  | Dela med 2 | — | **x = 5** |

  **Kontroll:** vänster: 5 · 5 − 3 = 22. Höger: 3 · 5 + 7 = 22 ✓

  ## 3. Ekvation med nämnare

  Lös `x/4 + 1 = 6`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Bli av med +1 | subtrahera 1 från båda leden | x/4 = 5 |
  | Bli av med nämnaren | multiplicera båda leden med 4 | **x = 20** |

  **Kontroll:** 20/4 + 1 = 5 + 1 = 6 ✓

exercises:
  E:
    - equation: "Lös: x − 6 = 11"
      hint1: "x:et är nästan ensamt — det är bara −6 i vägen."
      hint2: "Gör tvärtom mot −6: addera 6 till BÅDA leden."
      answer: ["17"]
      solution: |
        x − 6 = 11
        x = 17        [addera 6 till båda leden]

        Kontroll: 17 − 6 = 11 ✓

    - equation: "Lös: 5x = 35"
      hint1: "5x betyder 5 gånger x. Vad är motsatsen till att multiplicera med 5?"
      hint2: "Dela båda leden med 5."
      answer: ["7"]
      solution: |
        5x = 35
        x = 7         [dela båda leden med 5]

        Kontroll: 5 · 7 = 35 ✓

    - equation: "Lös: 3x + 4 = 19"
      hint1: "Två steg: bli av med +4 först, sedan med 3:an."
      hint2: "Subtrahera 4 från båda leden så får du 3x = 15. Dela sedan båda leden med 3."
      answer: ["5"]
      solution: |
        3x + 4 = 19
        3x = 15       [subtrahera 4]
        x = 5         [dela med 3]

        Kontroll: 3 · 5 + 4 = 19 ✓

    - equation: "Lös: 7x − 8 = 4x + 13"
      hint1: "Det finns x i båda leden. Samla alla x på ena sidan först."
      hint2: "Subtrahera 4x från båda leden: 3x − 8 = 13. Addera sedan 8 till båda leden och dela till sist med 3."
      hint3: "3x = 21. Sista steget: dela båda leden med 3."
      answer: ["7"]
      solution: |
        7x − 8 = 4x + 13
        3x − 8 = 13       [subtrahera 4x från båda leden]
        3x = 21           [addera 8]
        x = 7             [dela med 3]

        Kontroll: vänster 7 · 7 − 8 = 41, höger 4 · 7 + 13 = 41 ✓

    - equation: "Lös: 4(x − 2) = 12"
      hint1: "Två vägar: multiplicera in 4:an, ELLER dela båda leden med 4 direkt."
      hint2: "Enklast här: dela båda leden med 4 så blir det x − 2 = 3. Sista steget: addera 2."
      answer: ["5"]
      solution: |
        4(x − 2) = 12
        x − 2 = 3         [dela båda leden med 4]
        x = 5             [addera 2]

        Kontroll: 4 · (5 − 2) = 4 · 3 = 12 ✓

    - equation: "Lös: x/3 = 9"
      hint1: "x/3 betyder x delat med 3. Vad är motsatsen till att dela med 3?"
      hint2: "Multiplicera båda leden med 3."
      answer: ["27"]
      solution: |
        x/3 = 9
        x = 27        [multiplicera båda leden med 3]

        Kontroll: 27/3 = 9 ✓

    - equation: "Lös: x/2 + 5 = 9"
      hint1: "Bli av med +5 först — sedan nämnaren."
      hint2: "Subtrahera 5 från båda leden: x/2 = 4. Multiplicera sedan båda leden med 2."
      answer: ["8"]
      solution: |
        x/2 + 5 = 9
        x/2 = 4       [subtrahera 5]
        x = 8         [multiplicera med 2]

        Kontroll: 8/2 + 5 = 4 + 5 = 9 ✓

prev: stalla-upp-och-tolka-uttryck
prev_lesson_title: "Ställa upp och tolka uttryck"
next: potensekvationer
next_lesson_title: "Potensekvationer"
---

## Vad är en ekvation?

En ekvation är en **likhet med något okänt**: `2x + 9 = 21` säger att vänster sida och höger sida är *lika mycket värda*. Att lösa ekvationen = ta reda på vilket x som gör likheten sann.

## Balansmetoden — vågen

Tänk på ekvationen som en **balansvåg**. Båda sidorna väger lika. Så länge du gör **samma sak på båda sidorna** fortsätter vågen att balansera:

- Addera samma tal i båda leden ✓
- Subtrahera samma tal i båda leden ✓
- Multiplicera eller dela båda leden med samma tal ✓

Målet: få x **helt ensamt** på ena sidan. (Testa i widgeten — den är bokstavligen en våg.)

## Strategi: skala av i rätt ordning

För `3x + 4 = 19` — x:et har två saker på sig: en 3:a (gånger) och en +4. Skala av **längst bort först**:

1. Bli av med +4 (subtrahera 4) → `3x = 15`
2. Bli av med 3:an (dela med 3) → `x = 5`

## x i båda leden

`7x − 8 = 4x + 13` — börja med att **samla alla x på en sida** (subtrahera det mindre x-antalet från båda leden). Sen är det en vanlig tvåstegsekvation.

## Nämnare

`x/4 = 5` — nämnaren försvinner när du **multiplicerar båda leden** med den: `x = 20`.

## Kontrollen — ditt hemliga vapen

Sätt in svaret i ursprungsekvationen. Blir båda leden lika? Då är det rätt, garanterat. Det här är den enda delen av matten där du alltid kan rätta dig själv — använd det på varje uppgift, varje prov.
