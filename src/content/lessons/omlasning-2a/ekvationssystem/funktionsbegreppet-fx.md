---
slug: "omlasning-2a/ekvationssystem/funktionsbegreppet-fx"
title: "Funktionsbegreppet f(x)"
course: omlasning-2a
moment: ekvationssystem
moment_title: "Räta linjens ekvation och ekvationssystem"
lesson_number: 1
lesson_total: 7

success_criteria:
  - Räkna ut f(a) genom att sätta in a på x-platsen
  - Lösa ekvationen f(x) = k när svaret är känt och x söks
  - Förklara vad f(3) = 7 betyder i ord
  - Se att f(x) och y är samma sak

bank:
  - question: "Låt f(x) = 4x − 3. Vad är f(5)?"
    answer: ["17", "f(5) = 17"]
    solution: |
      f(5) betyder: sätt in 5 på x-platsen.
      f(5) = 4 · 5 − 3 = 20 − 3 = **17**
  - question: "Låt f(x) = 12 − 3x. Vad är f(0)?"
    answer: ["12", "f(0) = 12"]
    solution: |
      Sätt in 0 på x-platsen, då försvinner 3x.
      f(0) = 12 − 0 = **12**
  - question: "Låt f(x) = 6x. Lös ekvationen f(x) = 42."
    answer: ["7", "x = 7"]
    solution: |
      Här är svaret känt och x sökt, så lös ekvationen 6x = 42.
      Dela med 6: **x = 7**
  - question: "Vad betyder f(4) = 9?"
    answer: ["När x är 4 blir y 9", "y = 9 när x = 4", "att f ger 9 när x är 4", "x = 4 ger y = 9"]
    solution: |
      Talet i parentesen är x-värdet och talet efter likhetstecknet är funktionens värde.
      Alltså: **när x är 4 blir y 9**.

how_to:
  - Börja med repetitionen högst upp, den håller Del 1 vid liv medan du läser Del 2
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

widget: "funktionsmaskinen/v1"
widget_height: 560

worked_example: |
  ## f(x) är bara ett annat namn på y

  `y = 4x − 3` och `f(x) = 4x − 3` är samma funktion. Skillnaden är att `f(x)`-skrivsättet gör det möjligt att **säga vilket x du menar**.

  ## Sätta in ett värde

  `f(5)` betyder: byt ut varje x mot 5.

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Skriv om med 5 på x-platsen | f(5) = 4 · 5 − 3 | — |
  | Multiplicera först | 20 − 3 | — |
  | Svar | | **f(5) = 17** |

  Prioriteringsreglerna gäller som vanligt: gånger före minus.

  ## Negativa värden

  `f(−2)` med samma funktion:

  `f(−2) = 4 · (−2) − 3 = −8 − 3 = −11`

  > Sätt parentes runt det negativa talet när du skriver in det. Utan parentes blir `4 · −2` lätt till `4 − 2` när du läser om din egen uträkning.

  ## Åt andra hållet: f(x) = k

  Nu är svaret känt och x sökt. Det är en vanlig ekvation.

  Lös `f(x) = 25` när `f(x) = 4x − 3`:

  | Steg | Uträkning |
  |---|---|
  | Sätt uttrycket lika med 25 | 4x − 3 = 25 |
  | Lägg till 3 | 4x = 28 |
  | Dela med 4 | **x = 7** |

  ## Läsa av vad ett påstående betyder

  `f(4) = 9` betyder att **när x är 4 blir y 9**. I ett koordinatsystem: punkten `(4, 9)` ligger på grafen.

  | Skrivsätt | Betyder |
  |---|---|
  | f(4) = 9 | punkten (4, 9) ligger på grafen |
  | f(0) = 12 | grafen skär y-axeln i 12 |
  | f(x) = 0 | de x-värden där grafen skär x-axeln |

exercises:
  E:
    - equation: "Låt f(x) = 4x − 3. Bestäm f(5)."
      hint1: "f(5) betyder att du sätter in 5 där det står x."
      hint2: "4 · 5 − 3. Multiplicera först, subtrahera sedan."
      answer: ["17", "f(5) = 17"]
      solution: |
        f(5) = 4 · 5 − 3 = 20 − 3

        **f(5) = 17**

    - equation: "Låt f(x) = 12 − 3x. Bestäm f(0)."
      hint1: "Sätt in 0 på x-platsen."
      hint2: "3 · 0 = 0, så hela den termen försvinner."
      answer: ["12", "f(0) = 12"]
      solution: |
        f(0) = 12 − 3 · 0 = 12 − 0

        **f(0) = 12**

    - equation: "Låt f(x) = 4x − 3. Bestäm f(−2)."
      hint1: "Sätt parentes runt det negativa talet: 4 · (−2)."
      hint2: "4 · (−2) = −8. Sedan drar du bort 3 till."
      answer: ["-11", "−11", "f(-2) = -11", "f(−2) = −11"]
      solution: |
        f(−2) = 4 · (−2) − 3 = −8 − 3

        **f(−2) = −11**

    - equation: "Låt f(x) = 6x. Lös ekvationen f(x) = 42."
      hint1: "Här är svaret känt och x sökt. Skriv 6x = 42 och lös."
      hint2: "Dela båda leden med 6."
      answer: ["7", "x = 7"]
      solution: |
        6x = 42

        **x = 7**

    - equation: "Låt f(x) = 4x − 3. Lös ekvationen f(x) = 25."
      hint1: "Sätt uttrycket lika med 25: 4x − 3 = 25."
      hint2: "Lägg till 3 i båda leden först, dela sedan med 4."
      answer: ["7", "x = 7"]
      solution: |
        4x − 3 = 25
        4x = 28

        **x = 7**

    - equation: "För en funktion gäller att f(4) = 9. Vilken punkt ligger då på grafen? Svara som ett koordinatpar."
      hint1: "Talet i parentesen är x-värdet, talet efter likhetstecknet är y-värdet."
      hint2: "En punkt skrivs (x, y)."
      answer: ["(4, 9)", "4, 9", "(4,9)"]
      solution: |
        f(4) = 9 betyder att x = 4 ger y = 9.

        Punkten är **(4, 9)**

prev: del-1/generalrepetition
prev_lesson_title: "Generalrepetition — Del 1"
next: rata-linjens-ekvation
next_lesson_title: "Räta linjens ekvation"
---

## Del 2 börjar här

Del 1 handlade om andragradare. Del 2 börjar med det linjära: räta linjer och ekvationssystem. Det är stoff du känner igen från Ma1, men skrivsättet `f(x)` är nytt eller halvglömt för de flesta.

Repetitionen högst upp på varje sida i Del 2 kommer att blanda in Del 1-stoff. Det är avsiktligt, Del 1-provet är skrivet, men kunskapen ska sitta kvar.

## f(x) och y är samma sak

`y = 4x − 3` och `f(x) = 4x − 3` beskriver samma funktion.

Fördelen med `f(x)` är att du kan **peka ut ett specifikt x** utan att skriva en hel mening: `f(5)` betyder "funktionens värde när x är 5".

## Sätta in

Byt ut varje x mot talet i parentesen.

| Funktion | Fråga | Uträkning | Svar |
|---|---|---|---|
| f(x) = 4x − 3 | f(5) | 4 · 5 − 3 | 17 |
| f(x) = 4x − 3 | f(0) | 0 − 3 | −3 |
| f(x) = 12 − 3x | f(0) | 12 − 0 | 12 |
| f(x) = 4x − 3 | f(−2) | 4 · (−2) − 3 | −11 |

> Sätt parentes runt negativa tal när du skriver in dem. `4 · (−2)` är tydligt, `4 · −2` blir lätt till `4 − 2` när du läser om din egen uträkning.

## Åt andra hållet

`f(x) = 25` betyder att du vet svaret men söker x. Då är det en vanlig ekvation:

`4x − 3 = 25` → `4x = 28` → `x = 7`

Det är hela skillnaden mellan de två frågetyperna:

- **f(5) = ?**: x är känt, räkna ut y. Sätt in.
- **f(x) = 25**: y är känt, sök x. Lös ekvationen.

## Vad ett påstående betyder

`f(4) = 9` säger att när x är 4 blir y 9. Punkten `(4, 9)` ligger alltså på grafen.

Det här kommer tillbaka hela Del 2: en punkt på en graf, en lösning till ett ekvationssystem och ett funktionsvärde är olika sätt att säga samma sak.
