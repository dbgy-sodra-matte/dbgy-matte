---
slug: "omlasning-2b/ekvationssystem/redo-att-tenta"
title: "Redo att tenta? — Ekvationssystem"
course: omlasning-2b
moment: ekvationssystem
moment_title: "Ekvationssystem"
lesson_number: 7
lesson_total: 7

success_criteria:
  - Klara blandade uppgifter från alla sex delmoment, utan att titta i lösningarna
  - Veta vilket delmoment du behöver träna mer på om något skaver
  - Avgöra själv om området sitter inför Del 1

how_to:
  - Gör alla uppgifter nedan UTAN att öppna lösningarna
  - Rätta dig själv efteråt
  - Allt rätt? Området sitter, gå vidare till nästa område i Del 1
  - Något fel? Lösningen visar vilket delmoment som tränar just det, gå dit, träna, kom tillbaka

worked_example: |
  ## Så testar Del 1 det här området

  - **Ekvationssystem** är ett av två områden på Del 1. Det andra är **Algebra och andragradare**.
  - Uppgifterna liknar dem du tränat här: lösa system algebraiskt, läsa av en grafisk lösning, och en textuppgift där du ställer upp systemet själv.
  - **Redovisningen ger poäng.** Skriv upp systemet, visa metoden, svara i ord med enhet.

  ## Checklista inför provet

  1. **Två svar.** Ett ekvationssystem har alltid både ett x och ett y.
  2. **Kontrollera i BÅDA ekvationerna**: inte bara den du räknade med.
  3. **Multiplicerar du en rad** ska hela raden med, högerledet inkluderat.
  4. **Textuppgift:** skriv först vad x och y betyder. Den raden är ofta halva poängen.
  5. **Läs frågan igen** innan du sätter punkt, ibland ska något räknas ut efter systemet.

exercises:
  E:
    - equation: "Låt f(x) = 5x − 8. Beräkna f(3)."
      hint1: "Sätt in 3 där x står."
      answer: ["7"]
      solution: |
        f(3) = 5 · 3 − 8 = 15 − 8 = **7**
        → Tränas i delmoment 1: **Funktionsbegreppet och f(x)**

    - equation: "Låt f(x) = 4x + 6. Lös ekvationen f(x) = 26."
      hint1: "Skriv 4x + 6 = 26 och lös som en vanlig ekvation."
      answer: ["5", "x = 5"]
      solution: |
        4x + 6 = 26 → 4x = 20 → **x = 5**
        → Tränas i delmoment 1: **Funktionsbegreppet och f(x)**

    - equation: "En rät linje går genom punkterna (1, 4) och (3, 10). Bestäm linjens ekvation på formen y = kx + m."
      hint1: "Räkna först ut k, sätt sedan in en punkt för att hitta m."
      answer: ["y = 3x + 1", "3x + 1"]
      solution: |
        k = (10 − 4) / (3 − 1) = 6 / 2 = 3
        Sätt in (1, 4): 4 = 3 · 1 + m → m = 1

        **y = 3x + 1**
        → Tränas i delmoment 2: **Räta linjens ekvation**

    - equation: "Grafen visar två linjer. Ange lösningen till ekvationssystemet."
      graf:
        typ: "linjer"
        linjer:
          - k: 1
            m: 1
          - k: -1
            m: 7
        xmin: 0
        xmax: 6
        ymin: 0
        ymax: 8
        ySteg: 1
      hint1: "Leta upp punkten där linjerna korsar varandra och läs av båda koordinaterna."
      answer: ["x = 3 och y = 4", "x = 3, y = 4", "(3, 4)", "3 och 4"]
      solution: |
        Linjerna korsar varandra i (3, 4).

        **x = 3 och y = 4**
        → Tränas i delmoment 3: **Vad är ett ekvationssystem?**

    - equation: "Lös ekvationssystemet algebraiskt: y = 2x + 3 och y = 5x − 6. Svara på formen x = ... och y = ..."
      hint1: "Båda raderna säger vad y är. Sätt uttrycken lika med varandra."
      answer: ["x = 3 och y = 9", "x = 3, y = 9", "(3, 9)", "3 och 9"]
      solution: |
        2x + 3 = 5x − 6
        9 = 3x
        **x = 3**, och y = 2 · 3 + 3 = **9**

        Kontroll: 5 · 3 − 6 = 9 ✓
        → Tränas i delmoment 4: **Substitutionsmetoden**

    - equation: "Lös ekvationssystemet algebraiskt: x + 4y = 22 och 3x − y = 14. Svara på formen x = ... och y = ..."
      hint1: "x står utan siffra framför sig i rad 1. Lös ut x där och sätt in i rad 2."
      answer: ["x = 6 och y = 4", "x = 6, y = 4", "(6, 4)", "6 och 4"]
      solution: |
        x = 22 − 4y

        3(22 − 4y) − y = 14
        66 − 12y − y = 14
        −13y = −52
        **y = 4**, och x = 22 − 4 · 4 = **6**

        Kontroll: 3 · 6 − 4 = 14 ✓
        → Tränas i delmoment 4: **Substitutionsmetoden**

    - equation: "Lös ekvationssystemet: 3x + 2y = 21 och 5x − 2y = 11. Svara på formen x = ... och y = ..."
      hint1: "y-termerna är +2y och −2y. Vad händer om du adderar raderna?"
      answer: ["x = 4 och y = 4,5", "x = 4 och y = 4.5", "x = 4, y = 4,5", "(4; 4,5)"]
      solution: |
        Addera raderna: 8x = 32 → **x = 4**

        Sätt in i rad 1: 3 · 4 + 2y = 21 → 2y = 9 → **y = 4,5**

        Kontroll: 5 · 4 − 2 · 4,5 = 20 − 9 = 11 ✓
        → Tränas i delmoment 5: **Additionsmetoden**

    - equation: "En bokhandel säljer 3 anteckningsböcker och 2 pennor för 195 kr. En anteckningsbok och en penna kostar 75 kr. Vad kostar en anteckningsbok?"
      hint1: "Låt x = priset för en bok och y för en penna. Systemet blir 3x + 2y = 195 och x + y = 75."
      answer: ["45", "45 kr", "x = 45"]
      solution: |
        x = priset för en anteckningsbok (kr), y = priset för en penna (kr)

        3x + 2y = 195
        x + y = 75 → gånger 2 → 2x + 2y = 150

        Subtrahera: x = 195 − 150 = **45**

        En anteckningsbok kostar **45 kr**. (En penna: 30 kr.)
        Kontroll: 3 · 45 + 2 · 30 = 135 + 60 = 195 ✓
        → Tränas i delmoment 6: **Problemlösning med ekvationssystem**

prev: problemlosning-ekvationssystem
prev_lesson_title: "Problemlösning med ekvationssystem"
next: andragradare/parentesmultiplikation
next_lesson_title: "Parentesmultiplikation"
---

## Åtta uppgifter, blandat från hela området

Här kommer uppgifterna i **oordning**, precis som på provet. Ingen rubrik talar om vilken metod du ska använda. Att välja metod själv är en del av det som testas.

Gör alla åtta först. Rätta sedan.

## Så tolkar du resultatet

| Så gick det | Vad du gör |
|---|---|
| Allt rätt | Området sitter. Gå vidare till Algebra och andragradare. |
| 1–2 fel | Läs vilket delmoment lösningen pekar på, träna det, gör om sidan. |
| 3 eller fler fel | Gå tillbaka och träna om området i lugn takt. Det är inte bortkastat, repetitionen är det som gör att det fastnar. |

> Att göra fel här är hela poängen med sidan. Det är bättre att hitta luckan nu än på provet.
