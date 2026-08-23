---
slug: "omlasning-2b/andragradare/nollproduktmetoden"
title: "Nollproduktmetoden"
course: omlasning-2b
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 5
lesson_total: 8

success_criteria:
  - Lösa en ekvation som redan står i faktorform, t.ex. (x − 3)(x + 5) = 0
  - Bryta ut x ur ekvationer av typen x² + 6x = 0 och lösa dem
  - Komma ihåg lösningen x = 0 som lätt tappas bort
  - Förklara varför metoden kräver att högerledet är noll

bank:
  - question: "Lös ekvationen (x − 4)(x + 7) = 0"
    answer: ["x = 4 och x = −7", "4 och −7", "4 och -7", "x = 4, x = -7"]
    solution: |
      En produkt blir 0 bara om någon av faktorerna är 0.
      Sätt varje parentes för sig till 0: x − 4 = 0 och x + 7 = 0.
      Svar: **x = 4 och x = −7**
  - question: "Lös ekvationen x² + 3x = 0"
    answer: ["x = 0 och x = −3", "0 och −3", "0 och -3"]
    solution: |
      Faktorisera först, x är gemensam: x(x + 3) = 0.
      Sätt varje faktor till 0: x = 0 och x + 3 = 0.
      Svar: **x = 0 och x = −3**
  - question: "Varför måste högerledet vara 0 för att metoden ska funka?"
    answer: ["Bara noll gör en produkt till noll", "för att en produkt blir noll bara om en faktor är noll", "annars vet man inget om faktorerna"]
    solution: |
      Metoden bygger på regeln att en produkt blir noll bara om någon faktor är noll.
      Står det något annat än 0 i högerledet vet du ingenting om de enskilda faktorerna — 12 kan till exempel vara 2 · 6, 3 · 4 eller 1 · 12.
  - question: "Vilka lösningar har ekvationen x(x − 8) = 0?"
    answer: ["x = 0 och x = 8", "0 och 8"]
    solution: |
      Två faktorer, sätt var och en till 0.
      Första faktorn är x, andra är x − 8.
      Svar: **x = 0 och x = 8**

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Ekvationen står redan i faktorform

  Lös `(x − 3)(x + 5) = 0`.

  Två saker multipliceras och resultatet är noll. Då **måste** minst en av dem vara noll.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Sätt första parentesen till 0 | x − 3 = 0 | x = 3 |
  | Sätt andra parentesen till 0 | x + 5 = 0 | x = −5 |

  Svar: **x = 3 och x = −5**

  > Tecknet vänder: `(x − 3)` ger lösningen `+3`, och `(x + 5)` ger `−5`.

  ## När en faktor har en siffra framför

  Lös `(x + 2)(3x − 12) = 0`.

  | Faktor | Ekvation | Lösning |
  |---|---|---|
  | x + 2 | x + 2 = 0 | x = −2 |
  | 3x − 12 | 3x = 12 | x = 4 |

  Svar: **x = −2 och x = 4**

  ## Bryt ut x själv

  Lös `x² + 6x = 0`.

  Ekvationen står inte i faktorform, men båda termerna innehåller x.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Bryt ut x | x² = x · x, 6x = 6 · x | x(x + 6) = 0 |
  | Första faktorn | x = 0 | **x = 0** |
  | Andra faktorn | x + 6 = 0 | **x = −6** |

  Svar: **x = 0 och x = −6**

  > **Fällan:** att dela båda leden med x. Då försvinner lösningen `x = 0` spårlöst, och du får bara halva svaret. Bryt ut, dela aldrig med x.

  ## Högerledet måste vara noll

  `(x − 2)(x + 4) = 6` går **inte** att lösa så här. Att en produkt är 6 säger ingenting om faktorerna, det kan vara 1 · 6, 2 · 3, 12 · 0,5 …

  Är högerledet något annat än noll: multiplicera ihop, flytta över allt till ena sidan så att det står 0, och använd pq-formeln (nästa delmoment).

exercises:
  E:
    - equation: "Lös ekvationen: (x − 2)(x + 9) = 0"
      hint1: "Sätt varje parentes för sig lika med noll."
      hint2: "x − 2 = 0 ger x = 2. x + 9 = 0 ger x = −9."
      answer: ["x = 2 och x = −9", "2 och −9", "2 och -9", "x = 2, x = -9"]
      solution: |
        x − 2 = 0 → x = 2
        x + 9 = 0 → x = −9

        **x = 2 och x = −9**

    - equation: "Lös ekvationen: (x + 1)(x + 6) = 0"
      hint1: "Båda parenteserna har plus, då blir båda lösningarna negativa."
      hint2: "x + 1 = 0 ger x = −1. x + 6 = 0 ger x = −6."
      answer: ["x = −1 och x = −6", "−1 och −6", "-1 och -6"]
      solution: |
        x + 1 = 0 → x = −1
        x + 6 = 0 → x = −6

        **x = −1 och x = −6**

    - equation: "Lös ekvationen: x(x − 11) = 0"
      hint1: "Den första faktorn är bara x. Vad blir x då?"
      hint2: "x = 0 är en lösning. Den andra: x − 11 = 0."
      answer: ["x = 0 och x = 11", "0 och 11"]
      solution: |
        x = 0
        x − 11 = 0 → x = 11

        **x = 0 och x = 11**

    - equation: "Lös ekvationen: x² + 4x = 0"
      hint1: "Båda termerna innehåller x. Bryt ut x."
      hint2: "x(x + 4) = 0. Nu har du två faktorer att sätta till noll."
      answer: ["x = 0 och x = −4", "0 och −4", "0 och -4"]
      solution: |
        x² + 4x = 0
        x(x + 4) = 0

        x = 0
        x + 4 = 0 → x = −4

        **x = 0 och x = −4**

        > Delar du båda leden med x tappar du lösningen x = 0.

    - equation: "Lös ekvationen: x² − 9x = 0"
      hint1: "Bryt ut x ur båda termerna. Minustecknet följer med in i parentesen."
      hint2: "x(x − 9) = 0."
      answer: ["x = 0 och x = 9", "0 och 9"]
      solution: |
        x² − 9x = 0
        x(x − 9) = 0

        **x = 0 och x = 9**

    - equation: "Lös ekvationen: (x − 5)(2x + 6) = 0"
      hint1: "Andra faktorn har en siffra framför x. Lös den som en vanlig ekvation."
      hint2: "2x + 6 = 0 ger 2x = −6, alltså x = −3."
      answer: ["x = 5 och x = −3", "5 och −3", "5 och -3"]
      solution: |
        x − 5 = 0 → x = 5

        2x + 6 = 0 → 2x = −6 → x = −3

        **x = 5 och x = −3**

prev: enkla-andragradsekvationer
prev_lesson_title: "Enkla andragradsekvationer"
next: pq-formeln
next_lesson_title: "pq-formeln"
---

## Regeln bakom allt

Om två tal multipliceras och svaret blir **noll**, så måste minst ett av talen vara noll. Det finns inget annat sätt att få noll ur en multiplikation.

`A · B = 0` betyder alltså: `A = 0` **eller** `B = 0`.

Det är hela nollproduktmetoden.

## Faktorform

En ekvation står i faktorform när ena sidan är en produkt av parenteser och andra sidan är noll:

`(x − 3)(x + 5) = 0`

Då sätter du varje parentes för sig lika med noll:

- `x − 3 = 0` → `x = 3`
- `x + 5 = 0` → `x = −5`

> **Tecknet vänder.** En parentes med `− 3` ger lösningen `+3`. Det känns baklänges första gången, men följer direkt av att du löser ekvationen `x − 3 = 0`.

## Bryt ut x själv

Ekvationer där **alla termer innehåller x** går att faktorisera direkt:

`x² + 6x = 0` → `x(x + 6) = 0` → `x = 0` eller `x = −6`

`x² − 9x = 0` → `x(x − 9) = 0` → `x = 0` eller `x = 9`

## Den bortglömda lösningen

Frestelsen är att dela båda leden med x:

`x² + 6x = 0` → dela med x → `x + 6 = 0` → `x = −6`

Det ger bara **en** lösning, den andra, `x = 0`, har försvunnit. Och den räknas.

Anledningen är att man inte får dela med något som kan vara noll. **Bryt ut i stället för att dela.** Då finns båda lösningarna kvar.

## Metoden kräver noll i högerledet

`(x − 2)(x + 4) = 6` går inte att lösa så här. Att produkten är 6 säger ingenting om de enskilda faktorerna.

Är högerledet inte noll:

1. Multiplicera ihop parenteserna
2. Flytta över allt till ena sidan så att det står `= 0`
3. Använd pq-formeln, nästa delmoment

## Vilken metod när?

| Ekvationen ser ut så här | Metod |
|---|---|
| x² = 25 | Dra roten, ±  |
| x² + 6x = 0 (ingen konstant) | Bryt ut x |
| (x − 3)(x + 5) = 0 | Nollproduktmetoden |
| x² + 5x + 6 = 0 (alla tre termer) | pq-formeln |
