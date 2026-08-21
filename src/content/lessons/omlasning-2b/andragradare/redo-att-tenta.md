---
slug: "omlasning-2b/andragradare/redo-att-tenta"
title: "Redo att tenta? — Algebra och andragradare"
course: omlasning-2b
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 9
lesson_total: 9

success_criteria:
  - Klara blandade uppgifter från alla åtta delmoment, utan att titta i lösningarna
  - Välja rätt metod till rätt sorts ekvation, utan att någon säger vilken
  - Veta vilket delmoment du behöver träna mer på om något skaver

how_to:
  - Gör alla uppgifter nedan UTAN att öppna lösningarna
  - Rätta dig själv efteråt
  - Allt rätt? Området sitter, kör generalrepetitionen för Del 1
  - Något fel? Lösningen visar vilket delmoment som tränar just det, gå dit, träna, kom tillbaka

worked_example: |
  ## Det svåraste här är metodvalet

  På provet står det inte vilken metod du ska använda. Den här sidan tränar just det, uppgifterna kommer blandat.

  | Ekvationen ser ut så här | Metod |
  |---|---|
  | x² = 36 | Dra roten, svara med ± |
  | x² + 7x = 0 (ingen konstant) | Bryt ut x |
  | (x − 3)(x + 5) = 0 | Nollproduktmetoden |
  | x² + 5x + 6 = 0 (alla tre termer) | pq-formeln |
  | 2x² + 8x + 6 = 0 | Dela med 2 först, sedan pq |

  ## Checklista inför Del 1

  1. **Två lösningar.** Andragradsekvationer har oftast två, och båda krävs för poängen.
  2. **(x + 4)² är inte x² + 16.** Mittentermen 8x finns där.
  3. **Dela aldrig med x.** Bryt ut, annars tappar du lösningen x = 0.
  4. **pq-formeln kräver noll i högerledet och ensamt x².**
  5. **Minsta värdet är ett y-värde**, inte symmetrilinjens x.
  6. **Visa stegen.** Uppställning och metod ger poäng även om slutsvaret blir fel.

exercises:
  E:
    - equation: "Utveckla och förenkla: (x + 3)(x − 7)"
      hint1: "Fyra produkter. Talet i andra parentesen är −7."
      answer: ["x² − 4x − 21", "x^2 - 4x - 21", "x² - 4x - 21"]
      solution: |
        x·x = x², x·(−7) = −7x, 3·x = 3x, 3·(−7) = −21
        −7x + 3x = −4x

        **x² − 4x − 21**
        → Tränas i delmoment 1: **Parentesmultiplikation**

    - equation: "Utveckla: (x − 4)²"
      hint1: "Andra kvadreringsregeln. Mittentermen blir minus, sista blir plus."
      answer: ["x² − 8x + 16", "x^2 - 8x + 16", "x² - 8x + 16"]
      solution: |
        x² − 2 · x · 4 + 4² = **x² − 8x + 16**
        → Tränas i delmoment 2: **Kvadreringsreglerna**

    - equation: "Utveckla: (x + 7)(x − 7)"
      hint1: "Konjugatpar: samma termer, motsatta tecken."
      answer: ["x² − 49", "x^2 - 49", "x² - 49"]
      solution: |
        x² − 7² = **x² − 49**. Ingen x-term, mittentermerna tar ut varandra.
        → Tränas i delmoment 3: **Konjugatregeln**

    - equation: "Lös ekvationen: 3x² = 108"
      hint1: "Gör x² ensamt först, dra sedan roten med båda tecknen."
      answer: ["±6", "x = ±6", "6 och −6", "6 och -6"]
      solution: |
        3x² = 108 → x² = 36 → **x = ±6**
        → Tränas i delmoment 4: **Enkla andragradsekvationer**

    - equation: "Lös ekvationen: x² − 7x = 0"
      hint1: "Båda termerna innehåller x. Bryt ut, dela inte."
      answer: ["x = 0 och x = 7", "0 och 7"]
      solution: |
        x(x − 7) = 0 → **x = 0 och x = 7**

        Delar du med x tappar du lösningen x = 0.
        → Tränas i delmoment 5: **Nollproduktmetoden**

    - equation: "Lös ekvationen: (x + 8)(2x − 10) = 0"
      hint1: "Sätt varje faktor för sig lika med noll."
      answer: ["x = −8 och x = 5", "−8 och 5", "-8 och 5"]
      solution: |
        x + 8 = 0 → x = −8
        2x − 10 = 0 → 2x = 10 → x = 5

        **x = −8 och x = 5**
        → Tränas i delmoment 5: **Nollproduktmetoden**

    - equation: "Lös ekvationen: x² − 2x − 24 = 0"
      hint1: "Alla tre termerna finns, pq-formeln. p = −2 och q = −24."
      answer: ["x = 6 och x = −4", "6 och −4", "6 och -4"]
      solution: |
        x = 1 ± √(1 + 24) = 1 ± 5

        **x = 6 och x = −4**

        Kontroll: 6 + (−4) = 2 = −p ✓ och 6 · (−4) = −24 = q ✓
        → Tränas i delmoment 6: **pq-formeln**

    - equation: "Grafen visar en andragradsfunktion. Ange funktionens nollställen."
      graf:
        typ: "andragrad"
        a: 1
        b: 2
        c: -3
        xmin: -4
        xmax: 2
        ymin: -5
        ymax: 6
        ySteg: 1
      hint1: "Nollställena är där kurvan skär x-axeln."
      answer: ["x = −3 och x = 1", "−3 och 1", "-3 och 1", "x = -3 och x = 1"]
      solution: |
        Kurvan skär x-axeln vid x = −3 och x = 1.

        **x = −3 och x = 1**
        → Tränas i delmoment 7: **Andragradsfunktioner grafiskt**

    - equation: "Har funktionen f(x) = −2x² + 8x − 3 ett största eller ett minsta värde?"
      hint1: "Titta på tecknet framför x²-termen."
      answer: ["Största värde", "största", "ett största värde", "största värdet"]
      solution: |
        x²-termen är negativ (−2x²), så parabeln öppnar nedåt.

        Funktionen har ett **största värde**.
        → Tränas i delmoment 7: **Andragradsfunktioner grafiskt**

    - equation: "Bestäm symmetrilinjen till f(x) = x² − 10x + 16"
      hint1: "Antingen räknar du ut nollställena och tar mitten, eller använder x = −p/2."
      answer: ["x = 5", "5"]
      solution: |
        p = −10 → x = −p/2 = **5**

        (Nollställena är 2 och 8, mitt emellan dem ligger 5.)

        **Symmetrilinjen är x = 5**
        → Tränas i delmoment 8: **Andragradsfunktioner algebraiskt**

    - equation: "Funktionen f(x) = x² − 10x + 16 har symmetrilinjen x = 5. Bestäm funktionens minsta värde."
      hint1: "Minsta värdet är f(5). Sätt in 5 i funktionen."
      answer: ["−9", "-9"]
      solution: |
        f(5) = 5² − 10 · 5 + 16 = 25 − 50 + 16 = **−9**

        Minsta värdet är −9, och det inträffar när x = 5.
        → Tränas i delmoment 8: **Andragradsfunktioner algebraiskt**

    - equation: "Bestäm nollställena till f(x) = x² + 6x + 5"
      hint1: "Nollställen får du genom att lösa f(x) = 0 med pq-formeln."
      answer: ["x = −1 och x = −5", "−1 och −5", "-1 och -5"]
      solution: |
        x² + 6x + 5 = 0
        x = −3 ± √(9 − 5) = −3 ± 2

        **x = −1 och x = −5**
        → Tränas i delmoment 8: **Andragradsfunktioner algebraiskt**

prev: andragradsfunktioner-algebraiskt
prev_lesson_title: "Andragradsfunktioner algebraiskt"
next: del-1/generalrepetition
next_lesson_title: "Generalrepetition — Del 1"
---

## Tolv uppgifter, blandat från hela området

Uppgifterna kommer i **oordning** och ingen rubrik talar om vilken metod som gäller. Att välja metod själv är en stor del av det som testas på provet.

Gör alla tolv först. Rätta sedan.

## Så tolkar du resultatet

| Så gick det | Vad du gör |
|---|---|
| Allt rätt | Området sitter. Kör generalrepetitionen för Del 1. |
| 1–3 fel | Läs vilket delmoment lösningen pekar på, träna det, gör om sidan. |
| 4 eller fler fel | Gå tillbaka och träna om området i lugn takt. Repetitionen är det som gör att det fastnar. |

## Efter den här sidan

Del 1 testar **både** det här området och Ekvationssystem. När båda pre-testen sitter gör du **generalrepetitionen för Del 1**, den blandar områdena precis som provet gör.

> Att göra fel här är hela poängen med sidan. Bättre att hitta luckan nu än på provet.
