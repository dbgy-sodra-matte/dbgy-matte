---
slug: "omlasning-2a/statistik/lagesmatt"
title: "Lägesmått"
course: omlasning-2a
moment: statistik
moment_title: "Statistik"
lesson_number: 1
lesson_total: 3

success_criteria:
  - Räkna ut medelvärde, median och typvärde
  - Hitta medianen när antalet värden är jämnt
  - Räkna ut medelvärde ur en frekvenstabell
  - Uppskatta medelvärdet ur klassindelad data med klassmitt

bank:
  - question: "Bestäm medelvärdet av 12, 15, 18 och 23."
    answer: ["17", "17,0", "17.0"]
    solution: |
      Medelvärde = summan delat med antalet värden.
      12 + 15 + 18 + 23 = 68, och 68 / 4 = **17**
  - question: "Bestäm medianen av 6, 9, 11, 14 och 20."
    answer: ["11"]
    solution: |
      Medianen är mittenvärdet när talen står i storleksordning.
      Talen är redan ordnade och det finns 5 stycken, så mitten är det tredje: **11**
  - question: "Bestäm medianen av 4, 8, 11 och 15."
    answer: ["9,5", "9.5"]
    solution: |
      Antalet är jämnt, så det finns inget enskilt mittenvärde.
      Ta medelvärdet av de två mittersta: (8 + 11) / 2 = **9,5**
  - question: "Vad kallas klassmitten i intervallet 20 ≤ x < 30?"
    answer: ["25", "klassmitt 25"]
    solution: |
      Klassmitten är mitt emellan intervallets ändpunkter.
      (20 + 30) / 2 = **25**

how_to:
  - Börja med repetitionen högst upp, den håller tidigare områden vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## De tre lägesmåtten

  Ett lägesmått är ett enda tal som säger var materialet "ligger".

  | Måttet | Så räknar du | Bra när |
  |---|---|---|
  | **Medelvärde** | summan delat med antalet | värdena är jämnt fördelade |
  | **Median** | mittenvärdet i storleksordning | det finns extremvärden |
  | **Typvärde** | det som förekommer flest gånger | materialet är kategorier |

  ## Medelvärde

  `12, 15, 18, 23`

  Summan: `12 + 15 + 18 + 23 = 68`
  Antalet: `4`
  Medelvärde: `68 / 4 = 17`

  ## Median

  Ordna först i storleksordning. **Det steget glöms nästan alltid bort.**

  `6, 9, 11, 14, 20`: fem värden, mitten är det tredje: **11**

  Är antalet **jämnt** finns inget enskilt mittenvärde. Ta medelvärdet av de två mittersta:

  `4, 8, 11, 15` → `(8 + 11) / 2 = 9,5`

  ## Varför medianen ibland är bättre

  Fem löner: `24 000, 26 000, 27 000, 28 000, 195 000`

  | Måttet | Värde |
  |---|---|
  | medelvärde | 60 000 |
  | median | 27 000 |

  Medelvärdet säger att gruppen tjänar 60 000, men fyra av fem ligger under 28 000. **Ett enda extremvärde drar iväg medelvärdet.** Medianen bryr sig bara om ordningen och står emot.

  ## Medelvärde ur en frekvenstabell

  Frekvensen säger hur många gånger varje värde förekommer.

  | Antal cyklar | 0 | 1 | 2 | 3 |
  |---|---|---|---|---|
  | Frekvens | 2 | 5 | 8 | 5 |

  | Steg | Uträkning |
  |---|---|
  | Summan | 0·2 + 1·5 + 2·8 + 3·5 = 0 + 5 + 16 + 15 = 36 |
  | Antalet | 2 + 5 + 8 + 5 = 20 |
  | Medelvärde | 36 / 20 = **1,8** |

  > **Antalet är summan av frekvenserna**, inte antalet kolumner. Här 20 familjer, inte 4.

  ## Klassindelad data och klassmitt

  Ibland är värdena grupperade i intervall, och då vet du inte de exakta talen. Använd **klassmitten** som uppskattning.

  | Ålder | Frekvens | Klassmitt |
  |---|---|---|
  | 0 ≤ x < 10 | 4 | 5 |
  | 10 ≤ x < 20 | 6 | 15 |
  | 20 ≤ x < 30 | 10 | 25 |

  | Steg | Uträkning |
  |---|---|
  | Summan | 5·4 + 15·6 + 25·10 = 20 + 90 + 250 = 360 |
  | Antalet | 4 + 6 + 10 = 20 |
  | Medelvärde | 360 / 20 = **18 år** |

  Svaret är en **uppskattning**, skriv det. De exakta åldrarna är okända.

exercises:
  E:
    - equation: "Bestäm medelvärdet av 12, 15, 18 och 23."
      hint1: "Lägg ihop alla värden och dela med hur många de är."
      hint2: "Summan är 68. Hur många värden finns det?"
      answer: ["17", "17,0", "17.0"]
      solution: |
        12 + 15 + 18 + 23 = 68

        68 / 4 = **17**

    - equation: "Bestäm medianen av 6, 9, 11, 14 och 20."
      hint1: "Kontrollera först att talen står i storleksordning."
      hint2: "Fem värden, mitten är det tredje."
      answer: ["11"]
      solution: |
        Talen står redan i storleksordning.

        Fem värden, mitten är det tredje: **11**

    - equation: "Bestäm typvärdet av 3, 7, 7, 7, 9 och 11."
      hint1: "Typvärdet är det värde som förekommer flest gånger."
      hint2: "Räkna hur många gånger varje tal står med."
      answer: ["7"]
      solution: |
        7 står tre gånger, alla andra en gång.

        **Typvärdet är 7**

    - equation: "Bestäm medianen av 4, 8, 11 och 15."
      hint1: "Antalet är jämnt. Då finns inget enskilt mittenvärde."
      hint2: "Ta medelvärdet av de två mittersta: 8 och 11."
      answer: ["9,5", "9.5"]
      solution: |
        Fyra värden, alltså två i mitten: 8 och 11.

        (8 + 11) / 2 = **9,5**

        Medianen behöver inte vara ett av värdena i materialet.

    - equation: "Tabellen visar antal cyklar per familj. Antal cyklar 0, 1, 2, 3 med frekvenserna 2, 5, 8, 5. Bestäm medelvärdet."
      hint1: "Multiplicera varje värde med sin frekvens och lägg ihop."
      hint2: "Summan är 36. Antalet familjer är summan av frekvenserna."
      answer: ["1,8", "1.8"]
      solution: |
        Summan: 0 · 2 + 1 · 5 + 2 · 8 + 3 · 5 = 0 + 5 + 16 + 15 = 36

        Antalet familjer: 2 + 5 + 8 + 5 = 20

        36 / 20 = **1,8 cyklar per familj**

    - equation: "Åldrarna är klassindelade: 0 ≤ x < 10 med frekvens 4, 10 ≤ x < 20 med frekvens 6, och 20 ≤ x < 30 med frekvens 10. Uppskatta medelåldern."
      hint1: "De exakta åldrarna är okända. Använd klassmitten som uppskattning."
      hint2: "Klassmitterna är 5, 15 och 25. Multiplicera med frekvenserna."
      answer: ["18", "18 år", "18,0"]
      solution: |
        Klassmitter: 5, 15 och 25

        Summan: 5 · 4 + 15 · 6 + 25 · 10 = 20 + 90 + 250 = 360

        Antalet: 4 + 6 + 10 = 20

        360 / 20 = **ungefär 18 år**

        Svaret är en uppskattning, de exakta åldrarna är okända.

    - equation: "I en hiss finns 5 personer med medelvikten 80 kg. En person som väger 100 kg går ut och en som väger 50 kg kliver in. Vad blir den nya medelvikten?"
      hint1: "Räkna ut den sammanlagda vikten först. Medelvärde gånger antal ger summan."
      hint2: "5 · 80 = 400 kg. Dra bort 100 och lägg till 50."
      answer: ["70", "70 kg", "medelvikten 70 kg"]
      solution: |
        Sammanlagd vikt från början: 5 · 80 = 400 kg

        En på 100 kg går ut och en på 50 kg kliver in:

        400 − 100 + 50 = 350 kg

        Antalet är fortfarande 5.

        350 / 5 = **70 kg**

        Vägen går via summan. Medelvärden går inte att addera eller dra ifrån direkt.

    - equation: "Samma tabell som tidigare: antal cyklar 0, 1, 2, 3 med frekvenserna 2, 5, 8, 5. Bestäm medianen."
      hint1: "Hur många familjer är det totalt? Medianen är mittvärdet när alla ställs i ordning."
      hint2: "20 värden, alltså ligger medianen mellan det 10:e och det 11:e."
      answer: ["2", "medianen är 2", "2 cyklar"]
      solution: |
        Totalt: 2 + 5 + 8 + 5 = 20 familjer.

        Räkna uppåt: 2 familjer har 0 cyklar, 7 har högst 1, 15 har högst 2.

        Det 10:e och 11:e värdet ligger båda i gruppen med 2 cyklar.

        **Medianen är 2**

    - equation: "Samma tabell: antal cyklar 0, 1, 2, 3 med frekvenserna 2, 5, 8, 5. Bestäm typvärdet."
      hint1: "Typvärdet är det värde som förekommer flest gånger."
      hint2: "Vilken frekvens är störst, och vilket antal cyklar hör till den?"
      answer: ["2", "typvärdet är 2", "2 cyklar"]
      solution: |
        Största frekvensen är 8, och den hör till 2 cyklar.

        **Typvärdet är 2**

        Typvärdet är antalet cyklar, inte frekvensen. Svaret är 2, inte 8.

prev: potenser/redo-att-tenta
prev_lesson_title: "Redo att tenta? — Potenser och exponentialekvationer"
next: spridningsmatt-och-ladagram
next_lesson_title: "Spridningsmått och lådagram"
---

## Tre mått, tre frågor

| Måttet | Räknas som | Svarar på |
|---|---|---|
| Medelvärde | summan delat med antalet | vad ligger materialet på i genomsnitt? |
| Median | mittenvärdet i storleksordning | vad ligger mitt i? |
| Typvärde | det vanligaste värdet | vad är vanligast? |

## Medelvärde

`12 + 15 + 18 + 23 = 68`, och `68 / 4 = 17`

## Median

**Ordna först i storleksordning.** Det steget glöms bort oftare än något annat i hela området.

- **Udda antal** → mittenvärdet. `6, 9, 11, 14, 20` → 11
- **Jämnt antal** → medelvärdet av de två mittersta. `4, 8, 11, 15` → `(8+11)/2 = 9,5`

Medianen behöver alltså inte vara ett av talen i materialet.

## När medianen är ärligare

Fem löner: `24 000, 26 000, 27 000, 28 000, 195 000`

Medelvärdet blir 60 000. Medianen blir 27 000.

Fyra av fem tjänar under 28 000, medelvärdet beskriver ingen av dem. **Ett enda extremvärde drar iväg medelvärdet**, eftersom det räknas in med hela sin storlek. Medianen bryr sig bara om ordningen.

## Frekvenstabell

Frekvensen är hur många gånger värdet förekommer.

| Antal cyklar | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Frekvens | 2 | 5 | 8 | 5 |

Summan: `0·2 + 1·5 + 2·8 + 3·5 = 36`
Antalet: `2 + 5 + 8 + 5 = 20`
Medelvärde: `36 / 20 = 1,8`

> **Antalet är summan av frekvenserna**, inte antalet kolumner. Här 20 familjer, inte 4. Det är det vanligaste felet på den här uppgiftstypen.

## Klassindelad data

Är värdena grupperade i intervall vet du inte de exakta talen. Använd **klassmitten**.

Klassmitten är mitt emellan intervallets ändpunkter: `20 ≤ x < 30` har klassmitten `(20 + 30) / 2 = 25`.

Sedan räknar du precis som i en vanlig frekvenstabell, med klassmitterna som värden.

Svaret blir en **uppskattning**. Skriv det i svaret, det är en del av vad som bedöms.
