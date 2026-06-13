---
slug: "omlasning/ekonomi/grunder-i-procent"
title: "Grunder i procent"
course: omlasning
moment: ekonomi
moment_title: "Ekonomi"
lesson_number: 1
lesson_total: 3

success_criteria:
  - Växla mellan procent och decimalform (t.ex. 25 % = 0,25)
  - Räkna ut en viss procent av ett tal (t.ex. 20 % av 50 kr)
  - Räkna ut hur många procent en del är av det hela
  - Räkna ut ett pris efter rabatt

bank:
  - question: "Skriv 25 % i decimalform."
    answer: "0,25"
  - question: "Hur mycket är 20 % av 300 kr?"
    answer: "60 kr"
  - question: "Hur många procent är 15 av 60?"
    answer: "25 %"
  - question: "En vara kostar 200 kr. Vad blir priset efter 10 % rabatt?"
    answer: "180 kr"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Testa procent-stapeln — den visar del, andel och det hela samtidigt
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

widget: "procent-stapeln/v1"
widget_height: 560

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSe8XFlbMF_FgEfLehL8YMhY7eMbnKzKGQDndWeiykgC17JCpA/viewform"

worked_example: |
  Procent betyder "per hundra". 25 % betyder 25 av varje 100 — alltså 25/100 = 0,25.

  ## 1. Procent → decimal

  | Procent | Dela med 100 | Decimal |
  |---|---|---|
  | 25 % | 25 / 100 | **0,25** |
  | 6 % | 6 / 100 | **0,06** |
  | 150 % | 150 / 100 | **1,5** |

  > Genväg: flytta decimalkommat två steg åt vänster.

  ## 2. Hur mycket är X % av ett tal?

  *20 % av 50 kr.* Gör om procenten till decimal och multiplicera.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | 20 % som decimal | 0,20 | — |
  | Multiplicera | 0,20 · 50 | **10 kr** |

  ## 3. Hur många procent är en del av det hela?

  *15 av 60 — hur många procent?* Dela delen med det hela, gör om till procent.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Dela del / det hela | 15 / 60 | 0,25 |
  | Gör om till procent | 0,25 · 100 | **25 %** |

  ## 4. Pris efter rabatt

  *En tröja kostar 400 kr. 25 % rabatt.* Räkna ut rabatten i kronor, dra bort.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Rabatt i kronor | 0,25 · 400 | 100 kr |
  | Nytt pris | 400 − 100 | **300 kr** |

exercises:
  E:
    - equation: "Skriv 40 % i decimalform."
      hint1: "Procent betyder per hundra — dela talet med 100."
      hint2: "40 / 100. Eller: flytta decimalkommat två steg åt vänster i 40."
      answer: ["0.4", "0.40"]
      solution: |
        40 % = 40 / 100 = **0,4**

    - equation: "Skriv 7 % i decimalform."
      hint1: "Dela med 100. Tänk på att 7 är samma som 7,0."
      hint2: "7 / 100 = 0,07. (Två steg åt vänster från 7,0 — nollan behövs som platshållare.)"
      answer: ["0.07"]
      solution: |
        7 % = 7 / 100 = **0,07**

        > Vanligt fel: att skriva 0,7. Men 0,7 = 70 %. Sjuprocent är 0,07.

    - equation: "Hur mycket är 20 % av 150 kr?"
      hint1: "Gör om 20 % till decimal och multiplicera med 150."
      hint2: "0,20 · 150. Genväg: 10 % av 150 är 15, så 20 % är dubbelt så mycket."
      answer: ["30", "30 kr"]
      solution: |
        20 % = 0,20
        0,20 · 150 = **30 kr**

    - equation: "Hur mycket är 30 % av 400 kr?"
      hint1: "30 % som decimal är 0,30. Multiplicera med 400."
      hint2: "0,30 · 400. Genväg: 10 % av 400 är 40, så 30 % är tre gånger så mycket."
      answer: ["120", "120 kr"]
      solution: |
        0,30 · 400 = **120 kr**

    - equation: "Hur många procent är 15 av 60?"
      hint1: "Dela delen (15) med det hela (60). Du får ett decimaltal."
      hint2: "15 / 60 = 0,25. Gör om decimaltalet till procent genom att gånga med 100."
      answer: ["25", "25 %"]
      solution: |
        15 / 60 = 0,25 = **25 %**

    - equation: "Hur många procent är 9 av 25?"
      hint1: "Dela delen (9) med det hela (25)."
      hint2: "9 / 25 = 0,36. Gör om till procent: gånga med 100."
      answer: ["36", "36 %"]
      solution: |
        9 / 25 = 0,36 = **36 %**

    - equation: "En jacka kostar 600 kr. Vad blir priset efter 25 % rabatt?"
      hint1: "Räkna först ut hur mycket rabatten är i kronor (25 % av 600). Dra sedan bort den från priset."
      hint2: "Rabatt: 0,25 · 600 = 150 kr. Nytt pris: 600 − 150."
      answer: ["450", "450 kr"]
      solution: |
        Rabatt i kronor: 0,25 · 600 = 150 kr
        Nytt pris: 600 − 150 = **450 kr**

prev: ""
next: forandringsfaktor
next_lesson_title: "Förändringsfaktor och upprepad förändring"
---

## Vad betyder procent?

Procent betyder **"per hundra"**. Tecknet % är ett kortare sätt att skriva /100.

- 25 % = 25 per hundra = 25/100 = 0,25
- 50 % = hälften = 0,5
- 100 % = allt = 1

## Procent ↔ decimal

Den här växlingen behöver du hela tiden.

| Från procent till decimal | **dela med 100** | 8 % → 0,08 |
| Från decimal till procent | **gånga med 100** | 0,35 → 35 % |

Genväg: procent → decimal är att flytta kommat **två steg åt vänster**.

## De tre grundfrågorna

Nästan alla procentuppgifter är en av tre typer:

**1. Hur mycket är X % av ett tal?** → gör om till decimal och multiplicera.
*30 % av 200 = 0,30 · 200 = 60.*

**2. Hur många procent är en del av det hela?** → dela del med det hela, gånga med 100.
*40 av 200 = 40/200 = 0,20 = 20 %.*

**3. Pris efter rabatt (eller påslag)?** → räkna ut ändringen i kronor, lägg till eller dra bort.
*500 kr − 20 % = 500 − (0,20 · 500) = 500 − 100 = 400 kr.*

## Använd procent-stapeln

Widgeten nedan visar de tre delarna samtidigt: **det hela**, **delen** och **andelen i procent**. Dra i den och se hur de hänger ihop — det är samma samband i alla tre grundfrågorna.

> **Regel att skriva ner:** procent → decimal = dela med 100. "X % av" = multiplicera. "Hur många procent" = dela del med det hela.
