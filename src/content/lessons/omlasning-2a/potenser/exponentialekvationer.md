---
slug: "omlasning-2a/potenser/exponentialekvationer"
title: "Exponentialekvationer"
course: omlasning-2a
moment: potenser
moment_title: "Potenser och exponentialekvationer"
lesson_number: 4
lesson_total: 4

success_criteria:
  - Känna igen en exponentialekvation på att x står i exponenten
  - Göra potensen ensam innan du löser
  - Lösa ekvationen genom att pröva dig fram systematiskt
  - Svara på "hur lång tid tar det" i en verklig situation

bank:
  - question: "Vad är första steget när du löser 300 · 2^x = 2400?"
    answer: ["Delar med 300", "dividerar med 300", "gör potensen ensam", "delar båda leden med 300"]
    solution: |
      Potensen måste stå ensam innan du kan pröva.
      **Dela båda leden med 300**, så att det står 2^x = 8.
  - question: "Lös ekvationen 2^x = 8"
    answer: ["3", "x = 3"]
    solution: |
      Frågan är: 2 upphöjt till vad blir 8?
      2 · 2 · 2 = 8, alltså **x = 3**
  - question: "I ekvationen 5^x = 625, står x i basen eller i exponenten?"
    answer: ["i exponenten", "exponenten", "exponent", "i exponent"]
    solution: |
      Basen är 5 och x sitter ovanför.
      x står alltså **i exponenten**, det är en exponentialekvation, inte en potensekvation.
  - question: "Hur löser du en exponentialekvation utan logaritmer?"
    answer: ["prövning", "genom prövning", "prövar", "testar sig fram", "provar sig fram"]
    solution: |
      Du **prövar dig fram**: testa olika x-värden och snäva in genom att gå för högt och för lågt växelvis.
      Med snygga tal landar du oftast på ett heltal direkt.

how_to:
  - Börja med repetitionen högst upp, den håller tidigare områden vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till pre-testet

worked_example: |
  ## x står i exponenten

  `2^x = 8` är en **exponentialekvation**. Jämför med `x² = 8`, som är en potensekvation.

  | Ekvation | x står i | Metod |
  |---|---|---|
  | x⁵ = 32 | basen | dra roten |
  | 2^x = 32 | exponenten | pröva dig fram |

  Att blanda ihop de två är det vanligaste felet här. Titta alltid först var x sitter.

  ## Steg 1: gör potensen ensam

  Lös `300 · 2^x = 2400`.

  Prövning fungerar inte så länge det står något framför potensen. Dela bort det först:

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Dela båda leden med 300 | 2400 / 300 | 2^x = 8 |

  ## Steg 2: pröva

  Vad ska 2 upphöjas till för att bli 8?

  | Test | Resultat | Slutsats |
  |---|---|---|
  | x = 2 | 2² = 4 | för lite |
  | x = 3 | 2³ = 8 | **rätt** |

  Svar: **x = 3**

  ## Systematisk prövning

  Är svaret inte uppenbart: gå för högt och för lågt växelvis, så snävar du in.

  Lös `2000 · 1,2^x = 3456`:

  | Steg | Uträkning |
  |---|---|
  | Gör potensen ensam | 1,2^x = 1,728 |
  | Testa x = 2 | 1,2² = 1,44, för lite |
  | Testa x = 4 | 1,2⁴ ≈ 2,07, för mycket |
  | Testa x = 3 | 1,2³ = 1,728, **rätt** |

  Svar: **x = 3**

  > **Utan logaritmer är prövning en fullgod metod i den här kursen.** Skriv ut dina test, bedömningen ger poäng för en redovisad prövning, inte bara för slutsvaret.

  ## Textuppgifter: hur lång tid tar det?

  *En dator är värd 12 000 kr och tappar 50 % av värdet varje år. Efter hur många år är den värd 1 500 kr?*

  | Steg | Uträkning |
  |---|---|
  | Ställ upp | 12 000 · 0,5^t = 1 500 |
  | Gör potensen ensam | 0,5^t = 0,125 |
  | Testa t = 3 | 0,5³ = 0,125, rätt |

  **Efter 3 år.**

  Svara i en mening med enhet: *Datorn är värd 1 500 kr efter 3 år.*

exercises:
  E:
    - equation: "Lös ekvationen: 300 · 2^x = 2400"
      hint1: "Gör potensen ensam först: dela båda leden med 300."
      hint2: "2^x = 8. Vad ska 2 upphöjas till för att bli 8?"
      answer: ["3", "x = 3"]
      solution: |
        300 · 2^x = 2400

        Dela med 300: 2^x = 8

        2³ = 8

        **x = 3**

    - equation: "Lös ekvationen: 1024 · 0,5^x = 32"
      hint1: "Dela båda leden med 1024 så att potensen står ensam."
      hint2: "0,5^x = 0,03125, alltså 1/32. Hur många halveringar krävs?"
      answer: ["5", "x = 5"]
      solution: |
        Dela med 1024: 0,5^x = 32/1024 = 1/32

        Varje steg halverar: 1/2, 1/4, 1/8, 1/16, 1/32

        Det är fem steg.

        **x = 5**

    - equation: "Lös ekvationen: 500 · 3^x = 4500"
      hint1: "Dela båda leden med 500."
      hint2: "3^x = 9. Vad ska 3 upphöjas till för att bli 9?"
      answer: ["2", "x = 2"]
      solution: |
        Dela med 500: 3^x = 9

        3² = 9

        **x = 2**

    - equation: "Lös ekvationen: 2000 · 1,2^x = 3456"
      hint1: "Gör potensen ensam och pröva dig sedan fram."
      hint2: "1,2^x = 1,728. Testa x = 2 och x = 4 först, snäva sedan in."
      answer: ["3", "x = 3"]
      solution: |
        Dela med 2000: 1,2^x = 1,728

        Testa x = 2: 1,2² = 1,44, för lite
        Testa x = 4: 1,2⁴ ≈ 2,07, för mycket
        Testa x = 3: 1,2³ = 1,728, rätt

        **x = 3**

    - equation: "En dator är värd 12 000 kr och tappar 50 % av värdet varje år. Efter hur många år är den värd 1 500 kr?"
      hint1: "Ställ upp ekvationen först: 12 000 · 0,5^t = 1 500."
      hint2: "Gör potensen ensam: 0,5^t = 0,125. Hur många halveringar är det?"
      answer: ["3", "3 år", "t = 3", "efter 3 år"]
      solution: |
        12 000 · 0,5^t = 1 500

        Dela med 12 000: 0,5^t = 0,125

        0,5³ = 0,125

        **Datorn är värd 1 500 kr efter 3 år.**

    - equation: "En bakteriekultur innehåller 5 000 bakterier och antalet fördubblas varje timme. Efter hur många timmar finns det 160 000 bakterier?"
      hint1: "Ställ upp: 5 000 · 2^t = 160 000."
      hint2: "2^t = 32. Hur många fördubblingar är det?"
      answer: ["5", "5 timmar", "t = 5", "efter 5 timmar"]
      solution: |
        5 000 · 2^t = 160 000

        Dela med 5 000: 2^t = 32

        2⁵ = 32

        **Det finns 160 000 bakterier efter 5 timmar.**

    - equation: "I en kommun minskar befolkningen med 2,5 % per år. Efter ungefär hur många år har befolkningen minskat till hälften? Svara i hela år."
      hint1: "Förändringsfaktorn är 0,975. Ställ upp 0,975^t = 0,5 och pröva dig fram."
      hint2: "Pröva t = 20, t = 30, och ringa in. 0,975²⁷ ≈ 0,505 och 0,975²⁸ ≈ 0,492."
      answer: ["27", "27 år", "ungefär 27 år", "cirka 27 år", "t = 27"]
      solution: |
        Förändringsfaktorn är 1 − 0,025 = 0,975.

        Hälften kvar betyder 0,975^t = 0,5.

        | t | 0,975^t |
        |---|---|
        | 20 | 0,603 |
        | 27 | 0,505 |
        | 28 | 0,492 |

        Halveringen sker mellan 27 och 28 år, närmast **27 år**.

        Här går svaret inte jämnt ut. Pröva dig fram systematiskt: ta stora steg först, ring sedan in.

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSdsyDUlJ-GtGcH8xtI88X22g3Z8YVICB1mUGmH8h5MtXoZSlA/viewform"
prev: exponentialfunktioner
prev_lesson_title: "Exponentialfunktioner"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Potenser och exponentialekvationer"
---

## Först: var står x?

| Ekvation | x står i | Kallas | Metod |
|---|---|---|---|
| x⁵ = 32 | basen | potensekvation | dra roten |
| 2^x = 32 | exponenten | exponentialekvation | pröva |

Det är samma två tal och nästan samma utseende, men helt olika ekvationer. `x⁵ = 32` har svaret 2. `2^x = 32` har svaret 5.

Titta alltid först var x sitter.

## Steg 1: gör potensen ensam

Prövning fungerar inte så länge det står något framför.

`300 · 2^x = 2400` → dela med 300 → `2^x = 8`

## Steg 2: pröva

Frågan blir: **vad ska basen upphöjas till för att bli det där talet?**

`2^x = 8` → `2³ = 8` → **x = 3**

Är svaret inte uppenbart, snäva in genom att gå för högt och för lågt växelvis:

| Test | 1,2^x | Slutsats |
|---|---|---|
| x = 2 | 1,44 | för lite |
| x = 4 | 2,07 | för mycket |
| x = 3 | 1,728 | rätt |

> **Prövning är en fullgod metod i den här kursen.** Logaritmer, som löser samma ekvationer direkt, ingår inte i Ma2a. Skriv ut dina test, en redovisad prövning ger poäng, ett ensamt tal gör det sällan.

## Textuppgifter

Nästan alla har samma form: *något ändras med x procent per period, hur lång tid tar det tills det når ett visst värde?*

1. Ställ upp funktionen: `startvärde · faktor^t = målvärde`
2. Gör potensen ensam genom att dela med startvärdet
3. Pröva fram t
4. Svara i en mening med enhet

*En dator värd 12 000 kr tappar 50 % per år. När är den värd 1 500 kr?*

`12 000 · 0,5^t = 1 500` → `0,5^t = 0,125` → `t = 3`

**Datorn är värd 1 500 kr efter 3 år.**

## Snabba fördubblingar och halveringar

De här är värda att känna igen direkt, de sparar mycket prövande:

| Faktor | Potens | Betyder |
|---|---|---|
| 2^t | 2 &nbsp; 4 &nbsp; 8 &nbsp; 16 &nbsp; 32 &nbsp; 64 | fördubbling varje steg |
| 0,5^t | 0,5 &nbsp; 0,25 &nbsp; 0,125 &nbsp; 0,0625 | halvering varje steg |
| 3^t | 3 &nbsp; 9 &nbsp; 27 &nbsp; 81 | tredubbling |
| 10^t | 10 &nbsp; 100 &nbsp; 1000 | tiodubbling |
