---
slug: "omlasning/funktioner/exponentialfunktioner"
title: "Exponentialfunktioner"
course: omlasning
moment: funktioner
moment_title: "Funktioner"
lesson_number: 5
lesson_total: 7

success_criteria:
  - Känna igen formen y = C · a^x
  - Veta att C är startvärdet och a är förändringsfaktorn
  - Avgöra om funktionen växer (a > 1) eller avtar (a < 1)
  - Beräkna y för ett givet x

bank:
  - question: "I y = 500 · 1,2^x, vad är startvärdet C?"
    answer: "500"
  - question: "I y = 500 · 1,2^x, växer eller avtar funktionen?"
    answer: "Växer (a = 1,2 > 1)."
  - question: "Beräkna y i y = 100 · 2^x när x = 3."
    answer: "800"
  - question: "Vilken förändringsfaktor a hör till en minskning på 10 % per steg?"
    answer: "0,90"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

# exit_ticket_form: checkpoint-Form läggs in när Simon kört genereringsscriptet

worked_example: |
  En exponentialfunktion beskriver något som ändras med en **fast förändringsfaktor varje steg** — precis som upprepad förändring i ekonomin! Den skrivs:

  ```
  y = C · a^x
  ```

  - **C** = startvärdet (värdet när x = 0)
  - **a** = förändringsfaktorn (vad det multipliceras med varje steg)

  ## 1. Läsa av C och a

  *y = 500 · 1,2^x*

  | Del | Värde | Betyder |
  |---|---|---|
  | C | 500 | startvärdet |
  | a | 1,2 | växer med 20 % per steg |

  ## 2. Växer eller avtar?

  - **a > 1** → funktionen **växer** (t.ex. ränta, befolkning)
  - **a < 1** (men positiv) → funktionen **avtar** (t.ex. värdeminskning)

  ## 3. Beräkna y för ett givet x

  *y = 100 · 2^x, vad är y när x = 3?*

  | Steg | Räkning | Resultat |
  |---|---|---|
  | Räkna potensen först | 2^3 = 8 | — |
  | Multiplicera med C | 100 · 8 | **y = 800** |

  > Räkneordning: potensen (a^x) räknas FÖRE multiplikationen med C.

exercises:
  E:
    - equation: "I funktionen y = 800 · 1,5^x, vad är startvärdet C?"
      hint1: "C är talet framför potensen — värdet när x = 0."
      hint2: "I y = C · a^x är C det första talet: 800."
      answer: ["800"]
      solution: |
        y = **800** · 1,5^x → C = 800 (startvärdet).

    - equation: "I funktionen y = 800 · 1,5^x, vad är förändringsfaktorn a?"
      hint1: "a är talet som står i basen, det som är upphöjt till x."
      hint2: "I y = C · a^x är a talet i potensen: 1,5."
      answer: ["1.5", "1,5"]
      solution: |
        y = 800 · **1,5**^x → a = 1,5.

    - equation: "Växer eller avtar funktionen y = 1000 · 0,8^x?"
      hint1: "Titta på a. Är den större eller mindre än 1?"
      hint2: "a = 0,8 är mindre än 1. Då avtar funktionen (minskar)."
      answer: ["avtar", "Avtar", "minskar"]
      solution: |
        a = 0,8 < 1 → funktionen **avtar** (minskar med 20 % per steg).

    - equation: "Växer eller avtar funktionen y = 200 · 1,1^x?"
      hint1: "Är a större eller mindre än 1?"
      hint2: "a = 1,1 är större än 1 → växer."
      answer: ["växer", "Växer", "ökar"]
      solution: |
        a = 1,1 > 1 → funktionen **växer** (ökar med 10 % per steg).

    - equation: "Beräkna y i y = 100 · 2^x när x = 3."
      hint1: "Räkna potensen 2^3 först, multiplicera sedan med 100."
      hint2: "2^3 = 2 · 2 · 2 = 8. Sedan 100 · 8."
      answer: ["800"]
      solution: |
        2^3 = 8
        y = 100 · 8 = **800**

    - equation: "Beräkna y i y = 50 · 3^x när x = 2."
      hint1: "Potensen 3^2 först."
      hint2: "3^2 = 9. Sedan 50 · 9."
      answer: ["450"]
      solution: |
        3^2 = 9
        y = 50 · 9 = **450**

    - equation: "Vad är startvärdet (y när x = 0) för funktionen y = 600 · 1,4^x? Tips: allt upphöjt till 0 är 1."
      hint1: "Sätt x = 0. Kom ihåg att a^0 = 1 (allt upphöjt till noll blir 1)."
      hint2: "y = 600 · 1,4^0 = 600 · 1."
      answer: ["600"]
      solution: |
        y = 600 · 1,4^0 = 600 · 1 = **600**

        Startvärdet är alltid C — eftersom a^0 = 1.

prev: funktionsbegreppet-fx
prev_lesson_title: "Funktionsbegreppet f(x)"
next: exponentialfunktioner-2
next_lesson_title: "Exponentialfunktioner 2"
---

## Något som ändras med samma faktor varje steg

I ekonomin räknade du upprepad förändring: `startvärde · faktor^antal`. En **exponentialfunktion** är exakt samma idé, skriven som en funktion:

```
y = C · a^x
```

- **C = startvärdet** — värdet när x = 0
- **a = förändringsfaktorn** — vad det multipliceras med varje gång x ökar med 1

> Sparande: 1 000 kr med 5 % ränta → `y = 1000 · 1,05^x`, där x = antal år.

## Skillnaden mot linjära funktioner

| Linjär (y = kx + m) | Exponentiell (y = C · a^x) |
|---|---|
| **adderar** samma tal per steg | **multiplicerar** med samma tal per steg |
| rak linje | böjd kurva |
| k = lutning | a = förändringsfaktor |

## Växer eller avtar?

Allt avgörs av **a**:

- **a > 1** → växer (ränta, befolkning, smitta)
- **0 < a < 1** → avtar (värdeminskning, avsvalning)

> a = 1,2 → +20 % per steg (växer). a = 0,8 → −20 % per steg (avtar).

Samma tumregler som förändringsfaktorn: ökning ger a över 1, minskning ger a under 1.

## Beräkna y

Sätt in x, räkna **potensen först**, multiplicera sedan med C:

> `y = 100 · 2^x`, x = 3:
> 2^3 = 8, sedan 100 · 8 = **800**

Använd räknarens `^`-knapp för potensen.

> **Regel att skriva ner:** y = C · a^x. C = startvärde. a = förändringsfaktor (>1 växer, <1 avtar). Räkna a^x före gångningen med C.
