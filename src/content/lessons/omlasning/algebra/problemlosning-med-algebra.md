---
slug: "omlasning/algebra/problemlosning-med-algebra"
title: "Problemlösning med algebra"
course: omlasning
moment: algebra
moment_title: "Algebra"
lesson_number: 7
lesson_total: 8

success_criteria:
  - Bestämma vad x ska stå för i ett textproblem
  - Översätta problemet till en ekvation
  - Lösa ekvationen och svara på frågan som faktiskt ställdes
  - Kontrollera att svaret är rimligt

bank:
  - question: "Ali är 6 år äldre än Sara. Tillsammans är de 30 år. Hur gammal är Sara?"
    answer: "12 år (x + (x+6) = 30)"
  - question: "Tre lika dyra biljetter plus 40 kr i avgift kostar 340 kr. Vad kostar en biljett?"
    answer: "100 kr (3x + 40 = 340)"
  - question: "Två tal som kommer direkt efter varandra har summan 31. Vilka är talen?"
    answer: "15 och 16"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSfRvLoNw9VpPycMO8vwDrqsJgkcQBapse7hzXZoVKhm-Tc33g/viewform"

widget: "text-till-ekvation/v1"
widget_height: 580

worked_example: |
  ## 1. Åldersproblem

  *Emma är 5 år äldre än Leo. Tillsammans är de 27 år. Hur gammal är Leo?*

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Bestäm x | x = Leos ålder (det frågan gäller) | — |
  | Uttryck den andra | Emma = x + 5 | — |
  | Ställ upp ekvationen | tillsammans 27: | x + (x + 5) = 27 |
  | Förenkla | 2x + 5 = 27 | — |
  | Lös | 2x = 22 | **x = 11** |
  | Svara på frågan | — | **Leo är 11 år** (Emma 16) |

  **Rimligt?** 11 + 16 = 27 ✓

  ## 2. Kostnadsproblem

  *Tre lika dyra tröjor plus 50 kr frakt kostar totalt 500 kr. Vad kostar en tröja?*

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Bestäm x | x = priset på en tröja | — |
  | Ställ upp | tre tröjor + frakt = 500 | 3x + 50 = 500 |
  | Lös | 3x = 450 | **x = 150** |
  | Svara | — | **En tröja kostar 150 kr** |

  ## 3. Tal efter varandra

  *Två tal som kommer direkt efter varandra har summan 45. Vilka är talen?*

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Bestäm x | x = det minsta talet | nästa tal = x + 1 |
  | Ställ upp | x + (x + 1) = 45 | 2x + 1 = 45 |
  | Lös | 2x = 44 | x = 22 |
  | Svara | — | **22 och 23** |

exercises:
  E:
    - equation: "Emma är 7 år äldre än Leo. Tillsammans är de 25 år. Hur gammal är Leo?"
      hint1: "Låt x = Leos ålder. Hur skriver du Emmas ålder då?"
      hint2: "Emma = x + 7. Tillsammans: x + (x + 7) = 25. Förenkla vänsterledet."
      hint3: "2x + 7 = 25 ger 2x = 18. Dela med 2 — och kom ihåg att frågan gäller Leo."
      answer: ["9"]
      solution: |
        x = Leos ålder. Emma = x + 7.

        x + (x + 7) = 25
        2x + 7 = 25
        2x = 18
        x = 9

        **Leo är 9 år** (Emma är 16). Kontroll: 9 + 16 = 25 ✓

    - equation: "Tre lika dyra böcker plus 30 kr i frakt kostar totalt 270 kr. Vad kostar en bok?"
      hint1: "Låt x = priset på en bok. Vad kostar tre böcker?"
      hint2: "Tre böcker = 3x. Plus frakten: 3x + 30 = 270. Subtrahera 30 från båda leden."
      answer: ["80"]
      solution: |
        x = priset på en bok.

        3x + 30 = 270
        3x = 240
        x = 80

        **En bok kostar 80 kr.** Kontroll: 3 · 80 + 30 = 270 ✓

    - equation: "Två tal som kommer direkt efter varandra har summan 45. Vilket är det minsta talet?"
      hint1: "Låt x = det minsta talet. Hur skriver du talet som kommer direkt efter?"
      hint2: "Nästa tal är x + 1. Summan: x + (x + 1) = 45. Förenkla och lös."
      answer: ["22"]
      solution: |
        Talen: x och x + 1.

        x + (x + 1) = 45
        2x + 1 = 45
        2x = 44
        x = 22

        Talen är **22** och 23. Kontroll: 22 + 23 = 45 ✓

    - equation: "Ett tal multipliceras med 4 och minskas sedan med 5. Resultatet blir 27. Vilket är talet?"
      hint1: "Kalla talet x och skriv händelserna i ordning: först gånger 4, sedan minus 5."
      hint2: "Ekvationen blir 4x − 5 = 27. Addera 5 till båda leden, dela sedan med 4."
      answer: ["8"]
      solution: |
        4x − 5 = 27
        4x = 32
        x = 8

        **Talet är 8.** Kontroll: 4 · 8 − 5 = 27 ✓

    - equation: "Du hyr en cykel för 60 kr plus 25 kr per timme. Du betalar totalt 185 kr. Hur många timmar hyrde du cykeln?"
      hint1: "Låt x = antal timmar. Ställ upp kostnaden som i kostnadsformeln: fast del + per timme."
      hint2: "60 + 25x = 185. Subtrahera 60 från båda leden: 25x = 125."
      answer: ["5"]
      solution: |
        60 + 25x = 185
        25x = 125
        x = 5

        **5 timmar.** Kontroll: 60 + 25 · 5 = 185 ✓

prev: formler
prev_lesson_title: "Formler"
next: potenser-och-rotter
next_lesson_title: "Potenser och rötter"
---

## Här knyts allt ihop

Det här delmomentet använder allt du tränat hittills: ställa upp uttryck (delmoment 3) + lösa ekvationer (delmoment 4). Nytt är bara att **du** ska välja vad x betyder.

## Receptet — fyra steg, alltid samma

1. **Bestäm vad x står för.** Skriv det! ("x = Leos ålder"). Välj oftast det frågan gäller, eller det minsta/okändaste.
2. **Översätt texten till en ekvation.** Använd ordlistan från delmoment 3 (äldre än = +, tillsammans = summan, osv).
3. **Lös ekvationen** med balansmetoden.
4. **Svara på frågan** — i ord, med enhet. Och kolla: är svaret rimligt?

## Den lömskaste fällan: fel fråga

Ekvationen ger dig x. Men frågan kanske gäller **något annat**! Om x = Leos ålder och frågan är "hur gammal är Emma?" — då är svaret x + 7, inte x. Läs frågan en extra gång innan du svarar. (Det här är ett klassiskt sätt att tappa poäng på nationella provet — räkna rätt men svara på fel sak.)

## Rimlighetskollen

Fick du att en biljett kostar 4 850 kr? Att Leo är 53 år när familjen tillsammans är 25? Stanna upp. Sätt in ditt svar i textens situation och känn efter — orimliga svar betyder oftast ett teckenfel eller en felställd ekvation, och du hittar det på 30 sekunder.
