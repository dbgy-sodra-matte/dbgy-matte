---
slug: "omlasning/funktioner/funktionsbegreppet-fx"
title: "Funktionsbegreppet f(x)"
course: omlasning
moment: funktioner
moment_title: "Funktioner"
lesson_number: 4
lesson_total: 7

success_criteria:
  - Förstå vad skrivsättet f(x) betyder
  - Beräkna f(x) för ett givet x-värde
  - Veta att f(x) och y betyder samma sak
  - Lösa enkla uppgifter av typen "vid vilket x är f(x) = ett värde"

bank:
  - question: "Om f(x) = 2x + 1, vad är f(3)?"
    answer: "7"
  - question: "Vad betyder f(x) och y — är det skillnad?"
    answer: "Nej, samma sak. f(x) visar tydligt vilken funktion det är."
  - question: "Om f(x) = 3x, vad är f(5)?"
    answer: "15"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Testa funktionsmaskinen — mata in ett x och se vad som kommer ut
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

widget: "funktionsmaskinen/v1"
widget_height: 620

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSeyn4IvMS4QAdaAwBJX9rJBEs6FS9OYujZJVRMjo29ieAhI4A/viewform"

worked_example: |
  **f(x)** är bara ett annat sätt att skriva **y**. Det betyder "funktionens värde vid x".

  Tänk på funktionen som en **maskin**: du matar in ett x, maskinen räknar, och ut kommer ett värde.

  ## 1. Beräkna f(3) när f(x) = 2x + 1

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Byt varje x mot 3 | f(3) = 2 · 3 + 1 | — |
  | Räkna | 6 + 1 | **f(3) = 7** |

  Det betyder: när x = 3 är funktionens värde 7. Som punkt: (3, 7).

  ## 2. f(x) = y

  `f(x) = 2x + 1` och `y = 2x + 1` är **exakt samma funktion**. Skrivsättet f(x) gör bara tydligt vilken funktion vi pratar om — praktiskt när man har flera (f, g, h).

  ## 3. Vid vilket x är f(x) = 13?

  *f(x) = 2x + 1.* Nu vet vi svaret (13) och söker x — det blir en ekvation:

  | Steg | Räkning | Resultat |
  |---|---|---|
  | Ställ upp | 2x + 1 = 13 | — |
  | Lös (algebra!) | 2x = 12 → x = 6 | **x = 6** |

exercises:
  E:
    - equation: "Om f(x) = 2x + 1, vad är f(3)?"
      hint1: "Byt ut varje x mot 3 och räkna."
      hint2: "f(3) = 2 · 3 + 1. Multiplikation först."
      answer: ["7"]
      solution: |
        f(3) = 2 · 3 + 1 = 6 + 1 = **7**

    - equation: "Om f(x) = 3x, vad är f(5)?"
      hint1: "Byt x mot 5."
      hint2: "f(5) = 3 · 5."
      answer: ["15"]
      solution: |
        f(5) = 3 · 5 = **15**

    - equation: "Om f(x) = 4x − 2, vad är f(2)?"
      hint1: "Byt varje x mot 2, räkna med multiplikation före subtraktion."
      hint2: "f(2) = 4 · 2 − 2 = 8 − 2."
      answer: ["6"]
      solution: |
        f(2) = 4 · 2 − 2 = 8 − 2 = **6**

    - equation: "Om f(x) = x + 10, vad är f(0)?"
      hint1: "Byt x mot 0. Vad blir 0 + 10?"
      hint2: "f(0) = 0 + 10."
      answer: ["10"]
      solution: |
        f(0) = 0 + 10 = **10**

        > f(0) är startvärdet — samma som m i en linjär funktion.

    - equation: "Om f(x) = 5x + 3, vid vilket x är f(x) = 18?"
      hint1: "Nu vet du värdet (18) och söker x. Ställ upp ekvationen 5x + 3 = 18."
      hint2: "Lös 5x + 3 = 18: subtrahera 3, dela med 5."
      answer: ["3"]
      solution: |
        5x + 3 = 18
        5x = 15
        x = **3**

    - equation: "Funktionen f(x) = 2x beskriver priset för x kg lösgodis (2 kr/hg... nej, kr/kg). Vad kostar 7 kg, alltså f(7)?"
      hint1: "Sätt in x = 7 i f(x) = 2x."
      hint2: "f(7) = 2 · 7."
      answer: ["14", "14 kr"]
      solution: |
        f(7) = 2 · 7 = **14 kr**

prev: rata-linjens-ekvation
prev_lesson_title: "Räta linjens ekvation"
next: exponentialfunktioner
next_lesson_title: "Exponentialfunktioner"
---

## Vad betyder f(x)?

**f(x)** läses "f av x" och betyder **funktionens värde vid x**. Det är bara ett annat sätt att skriva **y**.

> `f(x) = 2x + 1` är samma sak som `y = 2x + 1`.

Varför då ett nytt skrivsätt? För att det blir **tydligt vilken funktion** vi menar och **vilket x** vi räknar med. `f(3)` säger direkt: "funktionen f, vid x = 3".

## Funktionen som en maskin

Tänk på funktionen som en maskin:

```
x  →  [ f: gångra med 2, lägg till 1 ]  →  f(x)
```

Matar du in 3 kommer 7 ut. Mata in olika x och se vad som händer i widgeten nedan.

## Beräkna f(ett tal)

Byt ut **varje x** mot talet och räkna:

> f(x) = 2x + 1
> f(3) = 2 · 3 + 1 = **7**
> f(0) = 2 · 0 + 1 = **1**
> f(5) = 2 · 5 + 1 = **11**

Det är exakt samma sak som att "beräkna värdet av ett uttryck" från algebra — bara med ett funktionsnamn på.

## Åt andra hållet: f(x) = ett värde

Ibland vet du svaret och söker x. Då blir det en **ekvation** som du löser med balansmetoden:

> *Vid vilket x är f(x) = 13, om f(x) = 2x + 1?*
> 2x + 1 = 13 → 2x = 12 → **x = 6**

Allt hänger ihop: f(x) bygger på uttryck och ekvationer du redan tränat.

> **Regel att skriva ner:** f(x) = y. f(3) betyder "byt varje x mot 3 och räkna". f(x) = värde → lös som ekvation.
