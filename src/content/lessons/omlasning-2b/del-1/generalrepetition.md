---
slug: "omlasning-2b/del-1/generalrepetition"
title: "Generalrepetition — Del 1"
course: omlasning-2b
moment: del-1
moment_title: "Del 1 — generalrepetition"
lesson_number: 1
lesson_total: 1

success_criteria:
  - Klara blandade uppgifter från BÅDA områdena i Del 1 utan ledtrådar
  - Välja rätt metod utan att någon säger vilken
  - Avgöra själv om du är redo att skriva Del 1

how_to:
  - Gör alla tolv uppgifterna i ett svep, utan att öppna lösningarna
  - Ta tid på dig — sikta på att bli klar på cirka en timme
  - Rätta dig själv efteråt och räkna hur många som blev rätt
  - Under 9 rätt? Gå tillbaka till området där felen sitter, träna, och kom tillbaka

worked_example: |
  ## Vad den här sidan är

  Den här sidan är det närmaste provet du kommer utan att skriva det. Uppgifterna är
  blandade från **båda** områdena i Del 1 — Ekvationssystem och Algebra och andragradare —
  och det finns **inga ledtrådar**. Precis som på provet.

  Gör den när båda pre-testen sitter, inte innan.

  ## Så skriver du för att få poäng

  1. **Visa metoden.** "Godtagbar ansats" är ofta halva poängen på en uppgift, och den får du för uppställningen — inte för slutsvaret.
  2. **Två lösningar** på andragradsekvationer, **två tal** i svaret på ett ekvationssystem.
  3. **Namnge variablerna** i textuppgifter: *x = priset för …, y = priset för …*
  4. **Svara på frågan som ställdes**, med enhet.
  5. **Kontrollera.** Ekvationssystem: sätt in i båda ekvationerna. Andragradsekvationer: sätt in i den ursprungliga.

  ## Vilken metod till vad

  | Uppgiften | Metod |
  |---|---|
  | Två ekvationer, en variabel ensam | Substitution |
  | Två ekvationer, siffror framför allt | Addition |
  | x² = ett tal | Dra roten, ± |
  | x² + bx = 0 | Bryt ut x |
  | Faktorform = 0 | Nollproduktmetoden |
  | Alla tre termer = 0 | pq-formeln |

exercises:
  E:
    - equation: "Lös ekvationssystemet algebraiskt: y = 3x − 4 och y = x + 6. Svara på formen x = ... och y = ..."
      answer: ["x = 5 och y = 11", "x = 5, y = 11", "(5, 11)", "5 och 11"]
      solution: |
        3x − 4 = x + 6
        2x = 10
        **x = 5**, och y = 5 + 6 = **11**

        Kontroll: 3 · 5 − 4 = 11 ✓

    - equation: "Utveckla och förenkla: (x + 5)(x − 2)"
      answer: ["x² + 3x − 10", "x^2 + 3x - 10", "x² + 3x - 10"]
      solution: |
        x·x = x², x·(−2) = −2x, 5·x = 5x, 5·(−2) = −10
        −2x + 5x = 3x

        **x² + 3x − 10**

    - equation: "Lös ekvationen: x² + 8x + 12 = 0"
      answer: ["x = −2 och x = −6", "−2 och −6", "-2 och -6"]
      solution: |
        p = 8, q = 12
        x = −4 ± √(16 − 12) = −4 ± 2

        **x = −2 och x = −6**

        Kontroll: (−2) + (−6) = −8 = −p ✓ och (−2)(−6) = 12 = q ✓

    - equation: "En rät linje går genom punkterna (2, 5) och (6, 17). Bestäm linjens ekvation på formen y = kx + m."
      answer: ["y = 3x − 1", "3x − 1", "y = 3x - 1", "3x - 1"]
      solution: |
        k = (17 − 5) / (6 − 2) = 12 / 4 = 3
        Sätt in (2, 5): 5 = 3 · 2 + m → m = −1

        **y = 3x − 1**

    - equation: "Utveckla: (x + 6)²"
      answer: ["x² + 12x + 36", "x^2 + 12x + 36"]
      solution: |
        x² + 2 · x · 6 + 6² = **x² + 12x + 36**

        Inte x² + 36 — mittentermen 12x finns där.

    - equation: "Grafen visar två linjer. Ange lösningen till ekvationssystemet."
      graf:
        typ: "linjer"
        linjer:
          - k: 2
            m: 1
          - k: -1
            m: 7
        xmin: 0
        xmax: 6
        ymin: 0
        ymax: 13
        ySteg: 1
      answer: ["x = 2 och y = 5", "x = 2, y = 5", "(2, 5)", "2 och 5"]
      solution: |
        Linjerna korsar varandra i (2, 5).

        **x = 2 och y = 5**

    - equation: "Lös ekvationen: x² − 5x = 0"
      answer: ["x = 0 och x = 5", "0 och 5"]
      solution: |
        x(x − 5) = 0

        **x = 0 och x = 5**

        Dela aldrig med x — då försvinner lösningen x = 0.

    - equation: "Lös ekvationssystemet: 2x + 3y = 23 och x − y = 4. Svara på formen x = ... och y = ..."
      answer: ["x = 7 och y = 3", "x = 7, y = 3", "(7, 3)", "7 och 3"]
      solution: |
        Lös ut x ur rad 2: x = y + 4

        2(y + 4) + 3y = 23
        2y + 8 + 3y = 23
        5y = 15
        **y = 3**, och x = 3 + 4 = **7**

        Kontroll: 2 · 7 + 3 · 3 = 14 + 9 = 23 ✓

    - equation: "Lös ekvationen: 5x² = 45"
      answer: ["±3", "x = ±3", "3 och −3", "3 och -3"]
      solution: |
        x² = 9 → **x = ±3**

        Båda lösningarna krävs.

    - equation: "Bestäm nollställena till f(x) = x² − 8x + 7"
      answer: ["x = 7 och x = 1", "7 och 1", "1 och 7"]
      solution: |
        x² − 8x + 7 = 0
        x = 4 ± √(16 − 7) = 4 ± 3

        **x = 7 och x = 1**

    - equation: "En skola köper 5 kompendier och 2 miniräknare för 1 340 kr. Två kompendier och en miniräknare kostar 590 kr. Vad kostar ett kompendium?"
      answer: ["160", "160 kr", "x = 160"]
      solution: |
        x = priset för ett kompendium (kr), y = priset för en miniräknare (kr)

        5x + 2y = 1340
        2x + y = 590 → y = 590 − 2x

        5x + 2(590 − 2x) = 1340
        5x + 1180 − 4x = 1340
        x = **160**

        Ett kompendium kostar **160 kr**. (En miniräknare: 590 − 320 = 270 kr.)
        Kontroll: 5 · 160 + 2 · 270 = 800 + 540 = 1340 ✓

    - equation: "Funktionen f(x) = x² − 4x + 9 har symmetrilinjen x = 2. Bestäm funktionens minsta värde."
      answer: ["5"]
      solution: |
        f(2) = 2² − 4 · 2 + 9 = 4 − 8 + 9 = **5**

        Minsta värdet är 5, och det inträffar när x = 2.

prev: andragradare/redo-att-tenta
prev_lesson_title: "Redo att tenta? — Algebra och andragradare"
---

## Sista steget före Del 1

Den här sidan blandar **Ekvationssystem** och **Algebra och andragradare** — allt som testas på Del 1, i samma oordning som provet.

Det finns **inga ledtrådar** här. Det är avsiktligt: på provet finns de inte heller, och det du behöver mäta nu är om du klarar dig utan dem.

## Så använder du sidan

Gör alla tolv i ett svep, som ett riktigt prov. Ta fram papper och miniräknare, lägg undan telefonen, och skriv fullständiga lösningar — inte bara svar.

Rätta först när du är klar med allihop.

## Hur många rätt behöver du?

| Antal rätt | Vad det betyder |
|---|---|
| 11–12 | Du är redo. |
| 9–10 | Nästan. Titta på vad som gick fel — oftast är det ett par delmoment. |
| Under 9 | Gå tillbaka till området där felen sitter och träna. Gör om sidan om en vecka. |

Att göra om den här sidan efter en veckas träning är den bästa användningen av den. Du minns inte svaren då, men du märker vad som blivit lättare.

## Om något går fel på provet ändå

Ett underkänt delprov är inte slutet — det betyder att du behöver mer tid med området. Prata med din lärare om vad som gäller för omprov.

Det viktigaste är att du vet **vilket** delmoment som brast. Den här sidan och pre-testen svarar på det.
