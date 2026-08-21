---
slug: "omlasning-2b/andragradare/andragradsfunktioner-algebraiskt"
title: "Andragradsfunktioner algebraiskt"
course: omlasning-2b
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 8
lesson_total: 8

success_criteria:
  - Räkna ut en funktions nollställen genom att lösa f(x) = 0
  - Bestämma symmetrilinjen ur nollställena
  - Räkna ut det största eller minsta värdet genom att sätta in symmetrilinjens x
  - Redovisa svaren i rätt ordning, nollställen, symmetrilinje, extremvärde

bank:
  - question: "Hur får du en funktions nollställen?"
    answer: ["Löser f(x) = 0", "sätter f(x) = 0 och löser", "löser ekvationen f(x) = 0"]
  - question: "En funktion har nollställena x = −3 och x = 5. Vilken är symmetrilinjen?"
    answer: ["x = 1", "1"]
  - question: "Symmetrilinjen är x = 4. Hur räknar du ut funktionens minsta värde?"
    answer: ["Räknar ut f(4)", "sätter in x = 4", "beräknar f(4)"]
  - question: "Bestäm nollställena till f(x) = x² − 2x − 15"
    answer: ["x = 5 och x = −3", "5 och −3", "5 och -3"]

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar är området genomtränat, gå vidare till "Redo att tenta?"

worked_example: |
  ## Hela analysen i tre steg

  Analysera `f(x) = x² − 6x + 8`. Bestäm nollställen, symmetrilinje och minsta värde.

  ### Steg 1 — nollställen: lös f(x) = 0

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Sätt funktionen till noll | x² − 6x + 8 = 0 | p = −6, q = 8 |
  | pq-formeln | x = 3 ± √(9 − 8) | x = 3 ± 1 |
  | Två svar | — | **x = 4 och x = 2** |

  ### Steg 2 — symmetrilinjen: mitt emellan nollställena

  `(2 + 4) / 2 = 3` → **symmetrilinjen är x = 3**

  ### Steg 3 — minsta värdet: sätt in symmetrilinjens x

  `f(3) = 3² − 6 · 3 + 8 = 9 − 18 + 8` = **−1**

  **Svar:** nollställen x = 2 och x = 4 · symmetrilinje x = 3 · minsta värde −1 (vid x = 3)

  ## Varför ordningen är den här

  De tre stegen bygger på varandra: nollställena ger symmetrilinjen, och symmetrilinjen ger extremvärdet. Hoppar du över steg 1 har du inget att räkna vidare på.

  > **Genväg till symmetrilinjen:** den ligger alltid vid `x = −p/2`. För `x² − 6x + 8` är p = −6, alltså x = 3, samma svar utan att gå via nollställena. Genvägen fungerar även när funktionen saknar nollställen.

  ## Största värde i stället för minsta

  `f(x) = −x² + 6x − 5` har en negativ x²-term → **största** värde.

  Räkningen är identisk. Nollställena blir x = 1 och x = 5, symmetrilinjen x = 3, och

  `f(3) = −3² + 6 · 3 − 5 = −9 + 18 − 5` = **4**

  Största värdet är 4.

exercises:
  E:
    - equation: "Bestäm nollställena till f(x) = x² − 2x − 15"
      hint1: "Nollställen får du genom att lösa ekvationen f(x) = 0."
      hint2: "x² − 2x − 15 = 0 med p = −2 och q = −15. Under roten: 1 + 15 = 16."
      answer: ["x = 5 och x = −3", "5 och −3", "5 och -3"]
      solution: |
        x² − 2x − 15 = 0
        x = 1 ± √(1 + 15) = 1 ± 4

        **x = 5 och x = −3**

    - equation: "Bestäm nollställena till f(x) = x² + 4x − 12"
      hint1: "Sätt f(x) = 0 och använd pq-formeln. p = 4 och q = −12."
      hint2: "x = −2 ± √(4 + 12) = −2 ± √16."
      answer: ["x = 2 och x = −6", "2 och −6", "2 och -6"]
      solution: |
        x² + 4x − 12 = 0
        x = −2 ± √(4 + 12) = −2 ± 4

        **x = 2 och x = −6**

    - equation: "En andragradsfunktion har nollställena x = −7 och x = −1. Ange symmetrilinjens ekvation."
      hint1: "Symmetrilinjen ligger mitt emellan nollställena."
      hint2: "(−7 + (−1)) / 2 = −8 / 2. Svara på formen x = ..."
      answer: ["x = −4", "−4", "-4", "x = -4"]
      solution: |
        (−7 + (−1)) / 2 = −8 / 2 = −4

        **Symmetrilinjen är x = −4**

    - equation: "Bestäm symmetrilinjen till f(x) = x² − 8x + 12"
      hint1: "Antingen räknar du ut nollställena först, eller använder genvägen x = −p/2."
      hint2: "p = −8, så −p/2 = 4. (Nollställena är 2 och 6, mitt emellan dem ligger 4.)"
      answer: ["x = 4", "4"]
      solution: |
        Genväg: p = −8 → x = −p/2 = 4

        Kontroll via nollställena: x² − 8x + 12 = 0 ger x = 4 ± √(16 − 12) = 4 ± 2, alltså 6 och 2. Mitt emellan: 4 ✓

        **Symmetrilinjen är x = 4**

    - equation: "Funktionen f(x) = x² − 6x + 8 har symmetrilinjen x = 3. Bestäm funktionens minsta värde."
      hint1: "Minsta värdet är funktionsvärdet på symmetrilinjen. Räkna ut f(3)."
      hint2: "f(3) = 3² − 6 · 3 + 8. Räkna ut termerna en i taget."
      answer: ["−1", "-1"]
      solution: |
        f(3) = 3² − 6 · 3 + 8
        = 9 − 18 + 8
        = **−1**

        Minsta värdet är −1, och det inträffar när x = 3.

    - equation: "Funktionen f(x) = −x² + 6x − 5 har symmetrilinjen x = 3. Bestäm funktionens största värde."
      hint1: "x²-termen är negativ, så funktionen har ett största värde. Räkna ut f(3)."
      hint2: "f(3) = −3² + 6 · 3 − 5. Tänk på att −3² betyder −(3 · 3) = −9."
      answer: ["4"]
      solution: |
        f(3) = −3² + 6 · 3 − 5
        = −9 + 18 − 5
        = **4**

        Största värdet är 4, och det inträffar när x = 3.

prev: andragradsfunktioner-grafiskt
prev_lesson_title: "Andragradsfunktioner grafiskt"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Algebra och andragradare"
---

## Samma frågor, utan graf

Förra delmomentet läste du av parabeln. Nu ska du räkna fram samma saker när du bara har uttrycket. Det är en av de vanligaste uppgiftstyperna på prövningen, och den ser oftast ut så här:

> *Funktionen f(x) = … ska analyseras. Bestäm funktionens a) nollställen b) symmetrilinje c) minsta värde.*

Tre deluppgifter som bygger på varandra.

## Steg 1: nollställen = lös f(x) = 0

Ett nollställe är ett x där funktionen är noll, alltså där grafen skär x-axeln. Så du sätter uttrycket till noll och löser med det verktyg som passar:

| Funktionen | Metod |
|---|---|
| f(x) = x² − 25 | Dra roten: x = ±5 |
| f(x) = x² + 6x | Bryt ut x |
| f(x) = x² − 6x + 8 | pq-formeln |

Det är alltså inget nytt räknesätt, bara ett nytt namn på något du redan kan.

## Steg 2: symmetrilinjen ligger mitt emellan

Parabeln är symmetrisk, så nollställena ligger på lika stort avstånd från mitten.

Nollställen 2 och 4 → `(2 + 4) / 2 = 3` → **x = 3**

**Genvägen:** symmetrilinjen ligger alltid vid `x = −p/2`. För `x² − 6x + 8` är p = −6, alltså `x = 3`. Samma svar, färre steg, och den fungerar även om funktionen saknar nollställen.

## Steg 3: extremvärdet = f(symmetrilinjens x)

Vertex ligger på symmetrilinjen. Sätt alltså in symmetrilinjens x-värde i funktionen:

`f(3) = 3² − 6 · 3 + 8 = 9 − 18 + 8 = −1`

Minsta värdet är **−1**.

Är x²-termen negativ är det i stället det **största** värdet, räkningen är identisk.

## Vanliga fel

| Felet | Vad som blir tokigt |
|---|---|
| Svarar symmetrilinjens x som "minsta värde" | Du svarar *var*, inte *vad* |
| Glömmer ett nollställe | Andragradsekvationer har oftast två lösningar |
| Räknar `−3²` som `+9` | `−3²` betyder `−(3 · 3) = −9` |
| Skriver symmetrilinjen som bara "3" | Den är en linje: `x = 3` |

## Redovisa i ordning

Skriv ut de tre delarna var för sig med etiketter:

> Nollställen: x = 2 och x = 4
> Symmetrilinje: x = 3
> Minsta värde: −1 (då x = 3)

Bedömningen ger poäng per del. En sammanhängande textmassa där svaren är inbakade tappar poäng som du faktiskt räknat fram.
