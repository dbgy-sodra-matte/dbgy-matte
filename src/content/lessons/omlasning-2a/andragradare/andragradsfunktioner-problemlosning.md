---
slug: "omlasning-2a/andragradare/andragradsfunktioner-problemlosning"
title: "Andragradsfunktioner problemlösning"
course: omlasning-2a
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 9
lesson_total: 9

success_criteria:
  - Tolka vad x och y betyder i en verklig modell
  - Räkna ut starthöjden genom att sätta in x = 0
  - Hitta högsta punkten med hjälp av symmetrilinjen
  - Räkna ut när något når marken genom att lösa f(x) = 0
  - Svara med enhet och förkasta orimliga lösningar

bank:
  - question: "En boll kastas och höjden ges av h(t) = −5t² + 20t. Vilken höjd har bollen vid t = 0?"
    answer: ["0", "0 m", "0 meter", "noll"]
    solution: |
      Starthöjden får du genom att sätta in t = 0.
      h(0) = −5 · 0 + 20 · 0 = 0.
      Svar: **0 m** — bollen kastas från marknivå.
  - question: "I en kastbana h(t) = −5t² + 20t, hur hittar du tiden då bollen är som högst?"
    answer: ["symmetrilinjen", "räknar ut symmetrilinjen", "med symmetrilinjen", "x = -p/2", "symmetrilinjen x = -p/2"]
    solution: |
      Högsta punkten är parabelns vändpunkt, och den ligger på **symmetrilinjen**.
      Räkna ut symmetrilinjen först, sätt sedan in det t-värdet i funktionen för att få höjden.
  - question: "Varför förkastar man ofta den negativa lösningen i en kastbana?"
    answer: ["Tiden kan inte vara negativ", "negativ tid finns inte", "tid kan inte vara negativ", "för att tiden inte kan vara negativ"]
    solution: |
      Formeln beskriver vad som händer från kastögonblicket och framåt.
      En negativ tid ligger före kastet och betyder ingenting i verkligheten, så den lösningen **förkastas**.
  - question: "Vad ska alltid finnas med i svaret på en problemlösningsuppgift?"
    answer: ["enheten", "enhet", "en enhet", "enheten ska med"]
    solution: |
      Ett tal utan **enhet** är inget färdigt svar — 4 kan vara sekunder, meter eller kronor.
      Enheten är dessutom en kontroll: får du sekunder när du sökte meter har du räknat fel.

how_to:
  - Börja med repetitionen högst upp, den håller tidigare delmoment vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till pre-testet

worked_example: |
  ## Kastbanor

  Kastar du något upp i luften följer det en parabel. Höjden beskrivs av en andragradsfunktion, oftast på formen:

  ```
  h(t) = −5t² + (starthastighet)·t + (starthöjd)
  ```

  Minus framför `t²` betyder att parabeln vänder nedåt — det som kastas kommer ner igen.

  ## De fyra frågorna

  Nästan alla uppgifter frågar efter något av det här. Varje fråga är samma matematik som förra delmomentet, bara med ord runt omkring.

  | Frågan i uppgiften | Vad du räknar ut |
  |---|---|
  | Vilken höjd startar den på? | h(0), alltså sätt in t = 0 |
  | När landar den? | Nollställena, lös h(t) = 0 |
  | Hur högt når den? | Symmetrilinjen, sedan h vid det värdet |
  | När är den på höjden k? | Lös h(t) = k |

  ## Genomräknat exempel

  En boll kastas rakt upp. Höjden i meter efter `t` sekunder ges av

  `h(t) = −5t² + 30t + 10`

  ### Vilken höjd kastas bollen ifrån?

  Sätt in t = 0:

  `h(0) = 0 + 0 + 10 = 10`

  Svar: **10 meter**. Det ensamma talet i formeln är alltid starthöjden.

  ### Hur högt når bollen?

  | Steg | Uträkning |
  |---|---|
  | Dela med −5 för att få ensam t² | t² − 6t − 2 |
  | p = −6, symmetrilinjen | t = −p/2 = 3 |
  | Sätt in i originalfunktionen | h(3) = −45 + 90 + 10 |

  Svar: **55 meter**, efter 3 sekunder.

  > Sätt in i **originalfunktionen**, aldrig i den delade. Delningen var bara ett sätt att hitta symmetrilinjen.

  ### När slår bollen i marken?

  Marken är höjden 0, så lös `h(t) = 0`:

  | Steg | Uträkning |
  |---|---|
  | −5t² + 30t + 10 = 0 | dela alla termer med −5 |
  | t² − 6t − 2 = 0 | p = −6, q = −2 |
  | t = 3 ± √(9 + 2) | t = 3 ± √11 |
  | √11 ≈ 3,32 | t ≈ 6,32 eller t ≈ −0,32 |

  En negativ tid finns inte — den ligger före kastet. **Förkasta den.**

  Svar: **efter cirka 6,3 sekunder**.

  ## Att svara på riktigt

  Tre saker som ger poäng utöver själva räknandet:

  1. **Enhet i svaret.** "6,3" är inget svar, "6,3 sekunder" är det.
  2. **Förkasta orimliga lösningar och säg varför.** Skriv ut att negativ tid saknar mening.
  3. **Skriv vad t och h betyder** om uppgiften inte redan gjort det.

exercises:
  E:
    - equation: "En kula skjuts rakt upp. Höjden i meter efter t sekunder ges av h(t) = −5t² + 20t. Från vilken höjd skjuts kulan?"
      hint1: "Starthöjden är höjden i det ögonblick kastet sker, alltså vid t = 0."
      hint2: "Sätt in t = 0 i formeln. Vad blir kvar?"
      answer: ["0", "0 m", "0 meter", "noll", "0m"]
      solution: |
        h(0) = −5 · 0² + 20 · 0 = 0

        Svar: **0 meter** — kulan skjuts från marknivå.
      graf:
        typ: "andragrad"
        a: -5
        b: 20
        c: 0
        xmin: 0
        xmax: 4
        ymin: 0
        ymax: 24
        ySteg: 4

    - equation: "Samma kula: h(t) = −5t² + 20t. Efter hur många sekunder är kulan tillbaka på marken?"
      hint1: "På marken är höjden 0. Lös alltså ekvationen h(t) = 0."
      hint2: "Bryt ut 5t: 5t(4 − t) = 0. Vilka två t-värden ger noll?"
      answer: ["4", "4 s", "4 sekunder", "t = 4", "efter 4 sekunder"]
      solution: |
        −5t² + 20t = 0

        Bryt ut 5t: 5t(4 − t) = 0

        t = 0 eller t = 4

        t = 0 är ögonblicket kulan skjuts iväg. Den är tillbaka på marken efter **4 sekunder**.

    - equation: "Samma kula: h(t) = −5t² + 20t. Hur högt når kulan som högst?"
      hint1: "Högsta punkten ligger på symmetrilinjen. Nollställena är 0 och 4."
      hint2: "Symmetrilinjen är t = 2. Räkna ut h(2)."
      answer: ["20", "20 m", "20 meter", "20m"]
      solution: |
        Nollställena är t = 0 och t = 4, så symmetrilinjen är t = (0 + 4) / 2 = 2

        h(2) = −5 · 2² + 20 · 2 = −20 + 40 = 20

        Kulan når **20 meter**, efter 2 sekunder.

    - equation: "En sten kastas från en klippa. Höjden i meter efter t sekunder ges av h(t) = −5t² + 20t + 25. Hur hög är klippan?"
      hint1: "Klippans höjd är höjden i kastögonblicket, alltså vid t = 0."
      hint2: "Sätt in t = 0. Bara det ensamma talet blir kvar."
      answer: ["25", "25 m", "25 meter", "25m"]
      solution: |
        h(0) = −5 · 0² + 20 · 0 + 25 = 25

        Klippan är **25 meter** hög.

        Det ensamma talet i formeln är alltid starthöjden.

    - equation: "Samma sten: h(t) = −5t² + 20t + 25. Efter hur många sekunder träffar stenen marken?"
      hint1: "Marken är höjden 0. Lös h(t) = 0, och dela med −5 först."
      hint2: "t² − 4t − 5 = 0 med p = −4 och q = −5. En av lösningarna blir negativ."
      answer: ["5", "5 s", "5 sekunder", "t = 5", "efter 5 sekunder"]
      solution: |
        −5t² + 20t + 25 = 0

        Dela alla termer med −5:

        t² − 4t − 5 = 0

        p = −4, q = −5

        t = 2 ± √(4 + 5) = 2 ± 3

        t = 5 eller t = −1

        Negativ tid saknar mening, så den lösningen förkastas.

        Stenen träffar marken efter **5 sekunder**.

    - equation: "Samma sten: h(t) = −5t² + 20t + 25. Vilken är stenens högsta höjd över marken?"
      hint1: "Högsta punkten ligger på symmetrilinjen. Nollställena var −1 och 5."
      hint2: "Symmetrilinjen är t = 2. Sätt in i originalfunktionen, inte i den delade."
      answer: ["45", "45 m", "45 meter", "45m"]
      solution: |
        Symmetrilinjen: t = (−1 + 5) / 2 = 2

        h(2) = −5 · 2² + 20 · 2 + 25 = −20 + 40 + 25 = 45

        Stenens högsta höjd är **45 meter**, efter 2 sekunder.

prev: andragradsfunktioner-algebraiskt
prev_lesson_title: "Andragradsfunktioner algebraiskt"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Algebra och andragradare"
---

## Verkligheten bakom parabeln

Allt du kastar upp i luften följer en parabel. Det är därför andragradsfunktioner dyker upp i uppgifter om bollar, stenar, kulor och brobågar.

Formeln ser oftast ut så här:

`h(t) = −5t² + (starthastighet)·t + (starthöjd)`

- **Minus framför t²** betyder att parabeln vänder nedåt. Det som kastas kommer ner.
- **Femman** kommer från tyngdkraften och är alltid ungefär 5 i den här sortens uppgifter.
- **Det ensamma talet** är starthöjden.

## Fyra frågor, fyra metoder

| Uppgiften frågar | Du räknar |
|---|---|
| Vilken höjd kastas det ifrån? | h(0) — sätt in t = 0 |
| När landar det? | Nollställena — lös h(t) = 0 |
| Hur högt når det? | Symmetrilinjen, sedan h vid det värdet |
| När är höjden k? | Lös h(t) = k |

Ingen av dem är ny matematik. Det är exakt samma tre verktyg som i förra delmomentet — insättning, pq-formeln och symmetrilinjen — bara med en berättelse runt.

## Starthöjden är gratis

Sätt in `t = 0` och allt med t i försvinner. Kvar blir det ensamma talet.

`h(t) = −5t² + 20t + 25` → `h(0) = 25` → kastet sker från **25 meters höjd**.

Står det inget ensamt tal alls är starthöjden 0, alltså marknivå.

## När något träffar marken

Marken är höjden noll. Lös `h(t) = 0`.

`−5t² + 20t + 25 = 0` → dela med −5 → `t² − 4t − 5 = 0` → `t = 5` och `t = −1`

> **Förkasta den negativa lösningen** och skriv varför. Negativ tid ligger före kastet och betyder ingenting i verkligheten. Att skriva ut det ger poäng — bedömningsanvisningarna belönar att man tolkar tillbaka i situationen.

## Högsta höjden

Två steg, alltid i den här ordningen:

1. Hitta symmetrilinjen — som medelvärdet av nollställena, eller med `t = −p/2`
2. Sätt in det t-värdet i **originalfunktionen**

`h(2) = −5 · 4 + 40 + 25 = 45` → högsta höjden är **45 meter**.

Har du delat funktionen med −5 för att lösa ekvationen: sätt ändå in i den ursprungliga. Den delade är en annan funktion.

## Svara som på ett prov

Tre saker utöver själva uträkningen:

1. **Enhet.** "5" är inget svar. "5 sekunder" är det.
2. **Förkasta orimliga svar och motivera.** Negativ tid, negativ längd, en boll som landar innan den kastas.
3. **Tolka tillbaka.** Sista raden ska svara på frågan som ställdes, med ord.
