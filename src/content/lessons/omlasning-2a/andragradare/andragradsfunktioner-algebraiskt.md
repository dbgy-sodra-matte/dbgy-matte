---
slug: "omlasning-2a/andragradare/andragradsfunktioner-algebraiskt"
title: "Andragradsfunktioner algebraiskt"
course: omlasning-2a
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 8
lesson_total: 9

success_criteria:
  - Bestämma nollställen genom att lösa f(x) = 0
  - Räkna ut symmetrilinjen som medelvärdet av nollställena
  - Bestämma extrempunkten genom att sätta in symmetrilinjen i funktionen
  - Avgöra om extremvärdet är ett största eller ett minsta värde

bank:
  - question: "Vad ska funktionen sättas lika med när du letar nollställen?"
    answer: ["0", "noll", "f(x) = 0", "med noll"]
    solution: |
      Nollställen är de x-värden där grafen ligger på x-axeln, och där är y lika med **0**.
      Sätt alltså f(x) = 0 och lös ekvationen.
  - question: "En funktion har nollställena x = −1 och x = 7. Vilken är symmetrilinjen?"
    answer: ["x = 3", "3"]
    solution: |
      Symmetrilinjen ligger mitt emellan nollställena.
      Ta medelvärdet: (−1 + 7) / 2 = 3.
      Svar: **x = 3**
  - question: "En parabels symmetrilinje är x = 6. Vilket värde sätter du in i funktionen för att få minsta värdet?"
    answer: ["6", "x = 6", "sex"]
    solution: |
      Minsta värdet ligger i vändpunkten, och vändpunkten ligger alltid på symmetrilinjen.
      Sätt därför in **6** och räkna ut f(6).
  - question: "Bestäm nollställena till f(x) = x² − 14x + 33"
    answer: ["x = 3 och x = 11", "3 och 11", "x = 3, x = 11", "11 och 3", "x=3 och x=11", "3, 11", "11, 3"]
    solution: |
      Sätt f(x) = 0: x² − 14x + 33 = 0. Här är p = −14 och q = 33.
      pq-formeln: x = 7 ± √(49 − 33) = 7 ± 4.
      Svar: **x = 3 och x = 11**

how_to:
  - Börja med repetitionen högst upp, den håller tidigare delmoment vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Samma frågor som förra delmomentet: utan graf

  Nu har du bara formeln. Ordningen är alltid densamma:

  1. **Nollställen**: lös `f(x) = 0` med pq-formeln
  2. **Symmetrilinje**: medelvärdet av nollställena
  3. **Extrempunkt**: sätt in symmetrilinjen i funktionen
  4. **Största eller minsta**: avgör på tecknet framför x²

  ## Hela analysen på ett exempel

  Analysera `f(x) = x² − 14x + 33`.

  ### Steg 1: nollställen

  | Steg | Uträkning |
  |---|---|
  | Sätt f(x) = 0 | x² − 14x + 33 = 0 |
  | p = −14, q = 33 | — |
  | pq-formeln | x = 7 ± √(7² − 33) |
  | | x = 7 ± √16 = 4 ± 2 |

  **Nollställen: x = 3 och x = 11**

  ### Steg 2: symmetrilinje

  `(3 + 11) / 2 = 7` → **x = 7**

  ### Steg 3: extrempunkt

  Sätt in x = 7 i funktionen:

  `f(7) = 7² − 14 · 7 + 33 = 49 − 98 + 33 = −16`

  **Extrempunkten är (7, −16)**

  ### Steg 4: största eller minsta

  Tecknet framför x² är positivt, alltså öppnar parabeln uppåt.

  **Minsta värdet är −16**, och det inträffar vid x = 7. Något största värde finns inte.

  ## Genväg till symmetrilinjen

  Symmetrilinjen kan räknas ut direkt ur `p`, utan att lösa ekvationen:

  `x = −p/2`

  I `f(x) = x² − 14x + 33` är p = −14, så symmetrilinjen är `x = 7`. Samma svar, färre steg.

  Genvägen är särskilt användbar när nollställena är obekväma tal eller saknas helt, symmetrilinjen finns alltid.

  ## Med siffra framför x²

  Analysera `f(x) = 2x² − 12x + 10`.

  För att hitta nollställena, dela hela ekvationen med 2 **efter** att du satt den lika med noll:

  | Steg | Uträkning |
  |---|---|
  | 2x² − 12x + 10 = 0 | dela alla termer med 2 |
  | x² − 6x + 5 = 0 | p = −6, q = 5 |
  | x = 3 ± √(9 − 5) | x = 3 ± 2 |

  **Nollställen: x = 1 och x = 5.** Symmetrilinje: `x = 3`.

  > **Extremvärdet räknas ut i ORIGINALFUNKTIONEN**, inte i den delade. `f(3) = 2 · 9 − 36 + 10 = −8`, inte `3² − 18 + 5 = −4`. Delningen var bara ett knep för att lösa ekvationen.

  Extrempunkten är **(3, −8)** och minsta värdet är **−8**.

  ## När nollställen saknas

  Blir det negativt under rottecknet finns inga nollställen, grafen når aldrig x-axeln.

  Symmetrilinjen och extrempunkten finns ändå. Använd genvägen `x = −p/2` och sätt in.

exercises:
  E:
    - equation: "Bestäm nollställena till f(x) = x² − 14x + 33"
      hint1: "Nollställen betyder att funktionens värde är 0. Sätt f(x) = 0."
      hint2: "x² − 14x + 33 = 0 med p = −14 och q = 33. Sätt in i pq-formeln."
      answer: ["x = 3 och x = 11", "3 och 11", "x = 3, x = 11", "11 och 3", "x=3 och x=11", "3, 11", "11, 3"]
      solution: |
        x² − 14x + 33 = 0

        p = −14, q = 33

        x = 7 ± √(7² − 33)
        x = 7 ± √16
        x = 7 ± 4

        **x = 3 och x = 11**

    - equation: "En andragradsfunktion har nollställena x = −1 och x = 7. Vilken är symmetrilinjens ekvation?"
      hint1: "Symmetrilinjen ligger precis mitt emellan nollställena."
      hint2: "Ta medelvärdet av −1 och 7."
      answer: ["x = 3", "3", "x=3"]
      solution: |
        (−1 + 7) / 2 = 6 / 2 = 3

        **x = 3**

    - equation: "Bestäm symmetrilinjen till f(x) = x² + 10x − 24 utan att räkna ut nollställena."
      hint1: "Använd genvägen: symmetrilinjen är x = −p/2."
      hint2: "p är talet framför x, alltså 10. Halva p är 5, och sedan byter du tecken."
      answer: ["x = −5", "x = -5", "−5", "-5", "x=-5", "x=−5"]
      solution: |
        p = 10

        Symmetrilinjen: x = −p/2 = −10/2 = −5

        **x = −5**

    - equation: "Bestäm extrempunkten till f(x) = x² − 14x + 33"
      hint1: "Extrempunkten ligger på symmetrilinjen. Ta reda på den först."
      hint2: "Symmetrilinjen är x = 7. Räkna sedan ut f(7)."
      answer: ["(7, −16)", "(7, -16)", "7, -16", "7, −16", "(7,-16)", "(7,−16)"]
      solution: |
        Symmetrilinjen: x = −p/2 = 14/2 = 7

        f(7) = 7² − 14 · 7 + 33 = 49 − 98 + 33 = −16

        Extrempunkten är **(7, −16)**

    - equation: "Har f(x) = −x² + 10x − 21 ett största eller ett minsta värde? Bestäm värdet."
      hint1: "Tecknet framför x² avgör åt vilket håll parabeln öppnar sig."
      hint2: "Dela med −1 för att få ensam x². Då blir p = −10 och symmetrilinjen x = 5. Räkna ut f(5) i originalfunktionen."
      answer: ["största värde 4", "största värdet 4", "4", "största 4", "ett största värde, 4", "största värde: 4"]
      solution: |
        Tecknet framför x² är negativt, alltså öppnar parabeln nedåt och har ett **största värde**.

        Dela alla termer med −1 för att få en ensam x²: x² − 10x + 21, alltså p = −10.

        Symmetrilinjen: x = −p/2 = 10/2 = 5

        f(5) = −(5²) + 10 · 5 − 21 = −25 + 50 − 21 = 4

        Största värdet är **4**

    - equation: "Bestäm nollställena till f(x) = 2x² − 12x + 10"
      hint1: "Det står en tvåa framför x². Sätt f(x) = 0 och dela sedan alla termer med 2."
      hint2: "x² − 6x + 5 = 0 med p = −6 och q = 5."
      answer: ["x = 1 och x = 5", "1 och 5", "x = 1, x = 5", "5 och 1", "x=1 och x=5", "1, 5", "5, 1"]
      solution: |
        2x² − 12x + 10 = 0

        Dela alla termer med 2:

        x² − 6x + 5 = 0

        p = −6, q = 5

        x = 3 ± √(9 − 5)
        x = 3 ± 2

        **x = 1 och x = 5**

    - equation: "Har f(x) = 12x − x² ett största eller ett minsta värde? Bestäm värdet."
      hint1: "Leta upp x²-termen, även om den står sist. Vilket tecken har den?"
      hint2: "Bryt ut x för att hitta nollställena: x(12 − x) = 0."
      answer: ["största värde 36", "36", "största värdet är 36", "största 36", "max 36"]
      solution: |
        x²-termen är −x², alltså negativ. Funktionen har ett **största** värde.

        Nollställen: x(12 − x) = 0 ger x = 0 och x = 12.

        Symmetrilinjen ligger mitt emellan: x = 6.

        f(6) = 12 · 6 − 6² = 72 − 36 = **36**

        Att x²-termen står sist ändrar ingenting, leta alltid upp den först.

prev: andragradsfunktioner-grafiskt
prev_lesson_title: "Andragradsfunktioner grafiskt"
next: andragradsfunktioner-problemlosning
next_lesson_title: "Andragradsfunktioner problemlösning"
---

## Samma frågor, ingen graf

Förra delmomentet läste du av parabeln. Nu ska du räkna fram samma sak ur formeln. Ordningen är alltid densamma:

1. Nollställen, lös `f(x) = 0`
2. Symmetrilinje, mitt emellan nollställena
3. Extrempunkt, sätt in symmetrilinjen i funktionen
4. Största eller minsta, avgör på tecknet framför x²

## 1. Nollställen

Nollställen är de x-värden där grafen ligger på x-axeln. Där är y = 0.

Sätt alltså `f(x) = 0` och lös andragradsekvationen med pq-formeln.

`f(x) = x² − 14x + 33` → `x² − 14x + 33 = 0` → `x = 2` och `x = 8`

> Står det en siffra framför x², dela alla termer med den **efter** att du satt uttrycket lika med noll.

## 2. Symmetrilinjen

Två sätt, samma svar:

**Ur nollställena:** ta medelvärdet.
`(3 + 11) / 2 = 7` → `x = 7`

**Genvägen ur p:** `x = −p/2`
p = −14 ger `x = 14/2 = 7`

Genvägen är bättre när nollställena är obekväma tal, och den fungerar även när nollställen saknas helt.

## 3. Extrempunkten

Vändpunkten ligger på symmetrilinjen. Sätt in symmetrilinjens x-värde i funktionen:

`f(7) = 7² − 14 · 7 + 33 = −16`

Extrempunkten är `(7, −16)`.

## 4. Största eller minsta värde

| Tecken framför x² | Parabeln | Extrempunkten är en | Funktionen har |
|---|---|---|---|
| positivt | öppnar uppåt | minimipunkt | minsta värde |
| negativt | öppnar nedåt | maximipunkt | största värde |

För `f(x) = x² − 14x + 33` är det ett **minsta värde: −16**.

## Fällan med siffran framför x²

`f(x) = 2x² − 12x + 10`

För att lösa `2x² − 12x + 10 = 0` delar du med 2 och får `x² − 6x + 5 = 0`, alltså nollställena 1 och 5. Så långt är allt rätt.

Men extremvärdet ska räknas i **originalfunktionen**:

- Rätt: `f(3) = 2 · 3² − 12 · 3 + 10 = 18 − 36 + 10 = −8`
- Fel: `3² − 6 · 3 + 5 = −4`

Delningen var ett knep för att lösa ekvationen, inte en ny funktion.

## När nollställen saknas

Blir uttrycket under rottecknet negativt finns inga nollställen, grafen når aldrig x-axeln.

Det är inget fel. Symmetrilinjen och extrempunkten finns ändå: använd `x = −p/2` och sätt in i funktionen.
