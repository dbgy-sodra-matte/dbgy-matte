---
slug: "omlasning-2a/ekvationssystem/rata-linjens-ekvation"
title: "Räta linjens ekvation"
course: omlasning-2a
moment: ekvationssystem
moment_title: "Räta linjens ekvation och ekvationssystem"
lesson_number: 2
lesson_total: 7

success_criteria:
  - Läsa av k och m ur en funktion skriven som y = kx + m
  - Ange en linjes ekvation genom att läsa av grafen
  - Avgöra om en punkt ligger på en linje
  - Ställa upp en linjär modell ur en text med fast avgift och styckpris

bank:
  - question: "Ange k och m för funktionen y = 5x − 8."
    answer: ["k = 5 och m = −8", "k = 5, m = -8", "5 och −8", "5 och -8", "k=5 m=-8", "k = 5 och m = -8"]
    solution: |
      k är talet framför x och m är det ensamma talet. Tecknen ingår.
      Svar: **k = 5 och m = −8**
  - question: "En linje skär y-axeln i 6 och har lutningen −4. Skriv linjens ekvation."
    answer: ["y = −4x + 6", "y = -4x + 6", "y=-4x+6", "y = 6 − 4x", "y = 6 - 4x"]
    solution: |
      Mallen är y = kx + m. Lutningen är k och skärningen med y-axeln är m.
      k = −4 och m = 6 ger **y = −4x + 6**
  - question: "Ligger punkten (3, 7) på linjen y = 2x + 1?"
    answer: ["ja", "Ja", "ja!"]
    solution: |
      Sätt in punktens x i formeln och se om du får punktens y.
      y = 2 · 3 + 1 = 7, och punkten har just y = 7.
      Svar: **ja**
  - question: "En uthyrning kostar 250 kr i startavgift plus 40 kr per timme. Skriv en formel för kostnaden y efter x timmar."
    answer: ["y = 40x + 250", "y = 250 + 40x", "y=40x+250", "y=250+40x"]
    solution: |
      Startavgiften betalas en gång och är m. Timpriset tas ut per timme och är k.
      Svar: **y = 40x + 250**

how_to:
  - Börja med repetitionen högst upp, den håller Del 1 vid liv medan du läser Del 2
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Mallen

  Alla räta linjer kan skrivas

  ```
  y = kx + m
  ```

  | Bokstav | Betyder | Var i grafen |
  |---|---|---|
  | k | lutningen, hur mycket y ändras när x ökar med 1 | hur brant linjen går |
  | m | startvärdet | där linjen skär y-axeln |

  ## Läsa av k och m

  Tecknen ingår i bokstäverna.

  | Funktion | k | m |
  |---|---|---|
  | y = 5x − 8 | 5 | −8 |
  | y = −4x + 3 | −4 | 3 |
  | y = x | 1 | 0 |
  | y = 7 − 2x | −2 | 7 |

  > Två fällor. **`y = x` har k = 1**, inte 0, det står en osynlig etta framför x. Och i **`y = 7 − 2x` är k = −2**: leta upp x-termen först, oavsett var i uttrycket den står.

  ## Ange ekvationen ur en graf

  Två avläsningar räcker.

  1. **m**: var skär linjen y-axeln?
  2. **k**: gå ett steg åt höger från en punkt på linjen. Hur många steg upp eller ner hamnar du?

  Skär linjen y-axeln i 3, och du går 1 höger och 2 upp, så är `k = 2` och `m = 3`:

  `y = 2x + 3`

  Går du **ner** när du går åt höger är k negativt.

  ## Ligger punkten på linjen?

  Sätt in punktens x-värde i formeln och jämför med punktens y-värde.

  Ligger `(3, 7)` på `y = 2x + 1`?

  | Steg | Uträkning |
  |---|---|
  | Sätt in x = 3 | y = 2 · 3 + 1 = 7 |
  | Jämför | punkten har y = 7 |

  **Ja**, punkten ligger på linjen.

  Ligger `(4, 5)` på samma linje? `y = 2 · 4 + 1 = 9`, men punkten har y = 5. **Nej.**

  > Skriv ut jämförelsen. "Nej" utan uträkning ger inga poäng, bedömningsanvisningarna kräver en prövning eller en figur.

  ## Ställa upp en modell ur text

  Leta efter två saker:

  - Något som betalas **en gång** → det är m
  - Något som betalas **per styck, per timme, per km** → det är k

  *En uthyrning kostar 250 kr i startavgift plus 40 kr per timme.*

  | Delen | Blir |
  |---|---|
  | 250 kr en gång | m = 250 |
  | 40 kr per timme | k = 40 |

  `y = 40x + 250`

exercises:
  E:
    - equation: "Ange k och m för funktionen y = 5x − 8."
      hint1: "k är talet framför x, m är det ensamma talet."
      hint2: "Tecknen ingår. Minus åtta är alltså m = −8."
      answer: ["k = 5 och m = −8", "k = 5, m = -8", "5 och −8", "5 och -8", "k=5 m=-8", "k = 5 och m = -8"]
      solution: |
        k är talet framför x: **k = 5**
        m är det ensamma talet, med tecken: **m = −8**

    - equation: "Ange k och m för funktionen y = 7 − 2x."
      hint1: "Leta upp x-termen först, oavsett var i uttrycket den står."
      hint2: "x-termen är −2x, så k = −2. Kvar blir sjuan."
      answer: ["k = −2 och m = 7", "k = -2, m = 7", "−2 och 7", "-2 och 7", "k=-2 m=7", "k = -2 och m = 7"]
      solution: |
        x-termen är −2x, alltså **k = −2**
        Det ensamma talet är **m = 7**

        Att x-termen står sist ändrar ingenting. y = 7 − 2x är samma linje som y = −2x + 7.

    - equation: "En linje skär y-axeln i 6 och har lutningen −4. Skriv linjens ekvation på formen y = kx + m."
      hint1: "Lutningen är k och skärningen med y-axeln är m."
      hint2: "Sätt in k = −4 och m = 6 i mallen y = kx + m."
      answer: ["y = −4x + 6", "y = -4x + 6", "y=-4x+6", "y = 6 − 4x", "y = 6 - 4x"]
      solution: |
        k = −4 och m = 6

        **y = −4x + 6**

    - equation: "Ligger punkten (3, 7) på linjen y = 2x + 1? Svara ja eller nej."
      hint1: "Sätt in punktens x-värde i formeln och se vilket y du får."
      hint2: "y = 2 · 3 + 1. Blir det samma som punktens y-värde?"
      answer: ["ja", "Ja", "ja!"]
      solution: |
        Sätt in x = 3: y = 2 · 3 + 1 = 7

        Punkten har y = 7, och formeln ger 7.

        Svar: **ja**

    - equation: "Ligger punkten (4, 5) på linjen y = 2x + 1? Svara ja eller nej."
      hint1: "Samma metod: sätt in x = 4 och jämför."
      hint2: "y = 2 · 4 + 1 = 9. Punkten har y = 5."
      answer: ["nej", "Nej", "nej!"]
      solution: |
        Sätt in x = 4: y = 2 · 4 + 1 = 9

        Punkten har y = 5, men formeln ger 9. De stämmer inte överens.

        Svar: **nej**

    - equation: "En verktygsuthyrning tar 250 kr i startavgift och sedan 40 kr per timme. Skriv en formel för kostnaden y efter x timmar."
      hint1: "Vad betalas en gång, och vad betalas per timme?"
      hint2: "Startavgiften är m och timpriset är k."
      answer: ["y = 40x + 250", "y = 250 + 40x", "y=40x+250", "y=250+40x"]
      solution: |
        Startavgiften 250 kr betalas en gång: m = 250
        Timpriset 40 kr tas ut varje timme: k = 40

        **y = 40x + 250**

prev: funktionsbegreppet-fx
prev_lesson_title: "Funktionsbegreppet f(x)"
next: rata-linjens-ekvation-algebraiskt
next_lesson_title: "Räta linjens ekvation algebraiskt"
---

## Mallen

Varje rät linje kan skrivas

`y = kx + m`

- **k är lutningen.** Hur mycket y ändras när x ökar med 1.
- **m är startvärdet.** Där linjen skär y-axeln, alltså y-värdet när x = 0.

## Läsa av k och m

Tecknen hör till bokstäverna.

| Funktion | k | m |
|---|---|---|
| y = 5x − 8 | 5 | −8 |
| y = −4x + 3 | −4 | 3 |
| y = x | 1 | 0 |
| y = 7 − 2x | −2 | 7 |

Två saker som lurar:

**`y = x` har k = 1.** Det står en osynlig etta framför x.

**`y = 7 − 2x` har k = −2.** Leta upp x-termen först, oavsett i vilken ordning uttrycket är skrivet. `y = 7 − 2x` och `y = −2x + 7` är samma linje.

## Ange ekvationen ur en graf

Två avläsningar:

1. **Var skär linjen y-axeln?** Det är m.
2. **Gå ett steg höger från en punkt på linjen.** Hur många steg upp eller ner hamnar du? Det är k.

Går du nedåt är k negativt. Är linjen vågrät är k = 0.

## Ligger punkten på linjen?

Sätt in punktens x i formeln. Får du punktens y ligger den på linjen.

| Punkt | Linje | Uträkning | Svar |
|---|---|---|---|
| (3, 7) | y = 2x + 1 | 2 · 3 + 1 = 7 | ja |
| (4, 5) | y = 2x + 1 | 2 · 4 + 1 = 9 | nej |

> Skriv ut prövningen. Ett ensamt "nej" ger inga poäng, bedömningen kräver att du visar antingen uträkningen eller en figur med linjen och punkten.

## Modell ur text

Nästan alla textuppgifter i det här momentet har samma form: en fast avgift och ett pris per enhet.

- Betalas **en gång** → m
- Betalas **per timme, per km, per styck** → k

*250 kr i startavgift plus 40 kr per timme* → `y = 40x + 250`

Skriv alltid ut vad x och y betyder om uppgiften inte redan gjort det. "x = antal timmar, y = kostnaden i kronor" är en rad som ger poäng.
