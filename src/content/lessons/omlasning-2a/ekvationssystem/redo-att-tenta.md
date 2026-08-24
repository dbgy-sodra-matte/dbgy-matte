---
slug: "omlasning-2a/ekvationssystem/redo-att-tenta"
title: "Redo att tenta? — Räta linjen och ekvationssystem"
course: omlasning-2a
moment: ekvationssystem
moment_title: "Räta linjens ekvation och ekvationssystem"
lesson_number: 7
lesson_total: 7

success_criteria:
  - Klara blandade uppgifter från alla sju delmoment, utan att titta i lösningarna
  - Välja rätt metod till rätt sorts system, utan att någon säger vilken
  - Veta vilket delmoment du behöver träna mer på om något skaver

how_to:
  - Gör alla uppgifter nedan UTAN att öppna lösningarna
  - Rätta dig själv efteråt
  - Allt rätt? Området sitter, gå vidare till Potenser och exponentialekvationer
  - Något fel? Lösningen visar vilket delmoment som tränar just det, gå dit, träna, kom tillbaka

worked_example: |
  ## Det svåraste här är metodvalet

  På provet står det inte vilken metod du ska använda. Uppgifterna nedan kommer blandat.

  | Systemet ser ut så här | Metod |
  |---|---|
  | y = ... och y = ... | Sätt uttrycken lika, substitution |
  | En variabel står ensam | Substitution |
  | ax + by = c på båda raderna | Addition |
  | En variabel har redan motsatta tecken | Addition, direkt |
  | Ingenting matchar | Multiplicera en rad först, sedan addition |
  | Grafen är given | Läs av skärningspunkten |

  ## Checklista inför Del 2

  1. **k är talet framför x**, m är det ensamma talet — med tecken. `y = 7 − 2x` har k = −2.
  2. **k ur två punkter:** förändringen i y delat med förändringen i x, samma ordning i båda.
  3. **Parallella linjer har samma k.**
  4. **Lösningen är ett par**, inte ett tal. Både x och y ska med.
  5. **Kontrollera i BÅDA ekvationerna.** Det är den enda kontroll som fångar ett teckenfel.
  6. **Multiplicera hela raden**, högerledet inkluderat.
  7. **Definiera x och y** i textuppgifter, och svara i ord med enhet.
  8. **Visa stegen.** Uppställning och metod ger poäng även om slutsvaret blir fel.

exercises:
  E:
    - equation: "Ange k och m för funktionen y = 9 − 4x."
      hint1: "Leta upp x-termen först, oavsett var i uttrycket den står."
      answer: ["k = −4 och m = 9", "k = -4, m = 9", "−4 och 9", "-4 och 9", "k = -4 och m = 9"]
      solution: |
        x-termen är −4x, alltså k = −4
        Det ensamma talet är m = 9

        **k = −4 och m = 9**
        → Tränas i delmoment 2: **Räta linjens ekvation**

    - equation: "Ligger punkten (5, 12) på linjen y = 3x − 3? Svara ja eller nej."
      hint1: "Sätt in punktens x-värde i formeln och jämför med punktens y."
      answer: ["ja", "Ja", "ja!"]
      solution: |
        y = 3 · 5 − 3 = 12

        Punkten har y = 12 och formeln ger 12.

        Svar: **ja**
        → Tränas i delmoment 2: **Räta linjens ekvation**

    - equation: "En rät linje går genom punkterna (2, 3) och (6, 15). Bestäm k."
      hint1: "Förändringen i y delat med förändringen i x."
      answer: ["3", "k = 3"]
      solution: |
        Förändring i y: 15 − 3 = 12
        Förändring i x: 6 − 2 = 4

        k = 12 / 4 = **3**
        → Tränas i delmoment 3: **Räta linjens ekvation algebraiskt**

    - equation: "En rät linje har k = −2 och går genom punkten (3, 1). Bestäm linjens ekvation på formen y = kx + m."
      hint1: "Sätt in punktens värden i y = kx + m och lös ut m."
      answer: ["y = −2x + 7", "y = -2x + 7", "y=-2x+7", "y = 7 − 2x", "y = 7 - 2x"]
      solution: |
        1 = −2 · 3 + m
        1 = −6 + m
        m = 7

        **y = −2x + 7**
        → Tränas i delmoment 3: **Räta linjens ekvation algebraiskt**

    - equation: "Skriv om 4y − 8x = 20 på formen y = kx + m."
      hint1: "Få y-termen ensam först, dela sedan alla termer."
      answer: ["y = 2x + 5", "y=2x+5"]
      solution: |
        4y − 8x = 20
        4y = 8x + 20

        Dela alla termer med 4:

        **y = 2x + 5**
        → Tränas i delmoment 3: **Räta linjens ekvation algebraiskt**

    - equation: "Hur många lösningar har ett ekvationssystem där båda ekvationerna beskriver linjer med k = 4 men olika m?"
      hint1: "Samma lutning betyder att linjerna är parallella."
      answer: ["ingen", "0", "inga", "ingen lösning", "noll"]
      solution: |
        Samma k betyder samma lutning, alltså parallella linjer. Olika m betyder att de ligger på olika ställen.

        Parallella linjer möts aldrig.

        Antal lösningar: **ingen**
        → Tränas i delmoment 4: **Grafisk lösning av ekvationssystem**

    - equation: "Ange lösningen till ekvationssystemet som visas i grafen."
      hint1: "Läs av skärningspunkten och skriv båda koordinaterna."
      answer: ["x = 1 och y = 4", "x = 1, y = 4", "(1, 4)", "1 och 4", "x=1 och y=4", "1, 4"]
      solution: |
        Linjerna korsar varandra i punkten (1, 4).

        **x = 1 och y = 4**

        Kontroll: 3 · 1 + 1 = 4 ✓ och 6 − 2 · 1 = 4 ✓
        → Tränas i delmoment 4: **Grafisk lösning av ekvationssystem**
      graf:
        typ: "linjer"
        linjer:
          - k: 3
            m: 1
          - k: -2
            m: 6
        xmin: -2
        xmax: 4
        ymin: -5
        ymax: 12
        ySteg: 1

    - equation: "Lös ekvationssystemet algebraiskt: y = 5x − 7 och y = 2x + 2. Ange både x och y."
      hint1: "Båda är lika med y, alltså lika med varandra."
      answer: ["x = 3 och y = 8", "x = 3, y = 8", "(3, 8)", "3 och 8", "x=3 och y=8", "3, 8"]
      solution: |
        5x − 7 = 2x + 2
        3x = 9
        x = 3

        y = 2 · 3 + 2 = 8

        **x = 3 och y = 8**
        → Tränas i delmoment 5: **Substitutionsmetoden**

    - equation: "Lös ekvationssystemet algebraiskt: y = x + 4 och 2x + y = 19. Ange både x och y."
      hint1: "Den första ger ett uttryck för y. Sätt in det i den andra."
      answer: ["x = 5 och y = 9", "x = 5, y = 9", "(5, 9)", "5 och 9", "x=5 och y=9", "5, 9"]
      solution: |
        2x + (x + 4) = 19
        3x + 4 = 19
        3x = 15
        x = 5

        y = 5 + 4 = 9

        **x = 5 och y = 9**
        → Tränas i delmoment 5: **Substitutionsmetoden**

    - equation: "Lös ekvationssystemet: 3x + y = 22 och 2x − y = 8. Ange både x och y."
      hint1: "y-termerna är +y och −y. Addera raderna."
      answer: ["x = 6 och y = 4", "x = 6, y = 4", "(6, 4)", "6 och 4", "x=6 och y=4", "6, 4"]
      solution: |
        Addera raderna: 5x = 30, alltså x = 6

        Sätt in: 3 · 6 + y = 22 ger y = 4

        **x = 6 och y = 4**

        Kontroll: 2 · 6 − 4 = 8 ✓
        → Tränas i delmoment 6: **Additionsmetoden**

    - equation: "Lös ekvationssystemet: 5x + 2y = 26 och x − y = 1. Ange både x och y."
      hint1: "Ingenting tar ut varandra som det står. Multiplicera den andra raden med 2."
      answer: ["x = 4 och y = 3", "x = 4, y = 3", "(4, 3)", "4 och 3", "x=4 och y=3", "4, 3"]
      solution: |
        Multiplicera rad 2 med 2: 2x − 2y = 2

        Addera med rad 1: 7x = 28, alltså x = 4

        Sätt in: 4 − y = 1 ger y = 3

        **x = 4 och y = 3**

        Kontroll: 5 · 4 + 2 · 3 = 20 + 6 = 26 ✓
        → Tränas i delmoment 6: **Additionsmetoden**

    - equation: "En snickeri säljer trälister och plastlister. Fyra trälister och två plastlister kostar 340 kr. Två trälister och tre plastlister kostar 250 kr. Vad kostar en trälist?"
      hint1: "Definiera x och y först, skriv sedan en ekvation per mening."
      answer: ["65", "65 kr", "x = 65"]
      solution: |
        x = priset för en trälist, y = priset för en plastlist

        4x + 2y = 340
        2x + 3y = 250

        Multiplicera rad 2 med 2: 4x + 6y = 500

        Dra bort rad 1: 4y = 160, alltså y = 40

        Sätt in: 4x + 80 = 340 ger 4x = 260, alltså x = 65

        **En trälist kostar 65 kr.**
        → Tränas i delmoment 7: **Problemlösning med ekvationssystem**

prev: problemlosning-ekvationssystem
prev_lesson_title: "Problemlösning med ekvationssystem"
next: potenser/potenslagar
next_lesson_title: "Potenslagar"
---

## Vad den här sidan är

Tolv uppgifter, blandade från hela området. Ingen säger vilken metod som ska användas.

Gör dem **utan att öppna lösningarna**. Rätta dig själv efteråt.

## Så tolkar du resultatet

| Resultat | Vad det betyder |
|---|---|
| 11–12 rätt | Området sitter. Gå vidare till Potenser och exponentialekvationer. |
| 8–10 rätt | Nästan. Varje lösning säger vilket delmoment som tränar just det — gå dit. |
| Under 8 | Gå tillbaka och gör om delmomenten i tur och ordning. |

## Metodvalet

- **y = ... och y = ...** → sätt uttrycken lika
- **En variabel står ensam** → substitution
- **ax + by = c på båda raderna** → addition
- **Motsatta tecken redan** → addera direkt
- **Ingenting matchar** → multiplicera en rad först
- **Grafen är given** → läs av skärningspunkten

## Innan Del 2

Det här är ett av tre områden i Del 2. Nästa är potenser och exponentialekvationer, sedan statistik. Generalrepetitionen längst bak blandar alla tre.
