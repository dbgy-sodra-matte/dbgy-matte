---
slug: "omlasning-2b/del-2/generalrepetition"
title: "Generalrepetition — Del 2"
course: omlasning-2b
moment: del-2
moment_title: "Del 2 — generalrepetition"
lesson_number: 1
lesson_total: 1

success_criteria:
  - Klara blandade uppgifter från ALLA tre områdena i Del 2 utan ledtrådar
  - Välja rätt metod och rätt sats utan att någon säger vilken
  - Avgöra själv om du är redo att skriva Del 2

how_to:
  - Gör alla tolv uppgifterna i ett svep, utan att öppna lösningarna
  - Ha miniräknare framme, flera uppgifter kräver den
  - Ta tid på dig, sikta på att bli klar på cirka en timme
  - Rätta dig själv efteråt och räkna hur många som blev rätt
  - Under 9 rätt? Gå tillbaka till området där felen sitter, träna, och kom tillbaka

worked_example: |
  ## Vad den här sidan är

  Det närmaste provet du kommer utan att skriva det. Uppgifterna är blandade från
  **alla tre** områdena i Del 2 (Logaritmer och exponentialekvationer, Statistik
  och Geometri), och det finns **inga ledtrådar**.

  Gör den när alla tre pre-testen sitter, inte innan.

  ## Så skriver du för att få poäng

  1. **Visa metoden.** Uppställningen är ofta halva poängen på en uppgift.
  2. **Skriv ut vilken sats du använder** i geometrin.
  3. **Rita normalfördelningskurvan** när uppgiften handlar om andelar, skissen ger poäng.
  4. **Svara i klartext med enhet** när uppgiften handlar om år, kronor eller antal.
  5. **Kontrollera.** Sätt tillbaka svaret, eller kontrollräkna produkten i kordasatsen.

  ## Vilken metod till vad

  | Uppgiften | Metod |
  |---|---|
  | Det okända står i exponenten | Logaritmera |
  | lg står framför x | 10 upphöjt till högerledet |
  | Andel i en normalfördelning | 68-95-99,7 + symmetri |
  | Parallell linje i en triangel | Topptriangel-/transversalsatsen |
  | Vinkel i mitten och på randen | Randvinkelsatsen |
  | Två kordor som korsar | Kordasatsen |

exercises:
  E:
    - equation: "Skriv som en potens: 5⁷ / 5³"
      answer: ["5^4", "5⁴"]
      solution: |
        5^(7−3) = **5⁴**

    - equation: "En summa på 20 000 kr växer med 5 % per år. Hur mycket finns efter 8 år? Svara i hela kronor."
      answer: ["29549", "29549 kr"]
      solution: |
        1,05⁸ ≈ 1,477455
        20 000 · 1,477455 ≈ **29 549 kr**

    - equation: "Beräkna: lg 0,1"
      answer: ["−1", "-1"]
      solution: |
        0,1 = 10^(−1), alltså **lg 0,1 = −1**

    - equation: "Lös ekvationen: 6^x = 100. Svara med två decimaler."
      answer: ["2.57", "2,57"]
      solution: |
        x · lg 6 = lg 100
        x = lg 100 / lg 6 = 2 / 0,7782 ≈ **2,57**

    - equation: "Ett kapital på 5 000 kr växer med 8 % per år. Efter hur många år har det fördubblats? Svara med en decimal."
      answer: ["9.0", "9,0", "9"]
      solution: |
        1,08^x = 2
        x = lg 2 / lg 1,08 ≈ 0,30103 / 0,033424 ≈ **9,0 år**

    - equation: "Bestäm medianen av 14, 8, 21, 11, 17"
      answer: ["14"]
      solution: |
        Sorterat: 8, 11, **14**, 17, 21

        Medianen är **14**.

    - equation: "Lådagrammet visar ett material. Bestäm kvartilavståndet."
      graf:
        typ: "ladagram"
        ladagram:
          - min: 4
            q1: 11
            median: 16
            q3: 23
            max: 32
        xmin: 0
        xmax: 34
        xSteg: 2
      answer: ["12"]
      solution: |
        Q3 − Q1 = 23 − 11 = **12**

    - equation: "En normalfördelning har medelvärdet 500 och standardavvikelsen 20. Hur många procent av värdena ligger mellan 480 och 520?"
      answer: ["68 %", "68", "68%"]
      solution: |
        480 och 520 ligger båda 20 från medelvärdet, alltså **en** standardavvikelse.

        Inom ± 1σ ligger **68 %**.

    - equation: "En regressionslinje är y = 2,5x + 40. Vad blir prognosen för x = 16?"
      answer: ["80"]
      solution: |
        y = 2,5 · 16 + 40 = 40 + 40 = **80**

    - equation: "Två vinklar i en triangel är 39° och 74°. Bestäm den tredje."
      answer: ["67", "67°"]
      solution: |
        180 − 39 − 74 = **67°**

    - equation: "I en triangel är DE parallell med AC. BE = 6, EC = 4 och DE = 9. Bestäm AC."
      answer: ["15"]
      solution: |
        BC = 6 + 4 = 10

        9 / AC = 6 / 10
        6 · AC = 90
        **AC = 15**

    - equation: "Bestäm avståndet mellan punkterna (−3, 1) och (5, 7)."
      answer: ["10"]
      solution: |
        Skillnad i x: 5 − (−3) = 8
        Skillnad i y: 7 − 1 = 6

        √(8² + 6²) = √100 = **10**

prev: geometri/redo-att-tenta
prev_lesson_title: "Redo att tenta? — Geometri"
---

## Sista steget före Del 2

Den här sidan blandar **Logaritmer och exponentialekvationer**, **Statistik** och **Geometri**, allt som testas på Del 2, i samma oordning som provet.

Det finns **inga ledtrådar** här. Det är avsiktligt: på provet finns de inte heller.

## Så använder du sidan

Gör alla tolv i ett svep, som ett riktigt prov. Papper, penna och miniräknare framme, telefonen undanlagd. Skriv fullständiga lösningar, inte bara svar.

Rätta först när du är klar med allihop.

## Hur många rätt behöver du?

| Antal rätt | Vad det betyder |
|---|---|
| 11–12 | Du är redo. |
| 9–10 | Nästan. Titta på vad som gick fel, oftast är det ett par delmoment. |
| Under 9 | Gå tillbaka till området där felen sitter och träna. Gör om sidan om en vecka. |

Att göra om sidan efter en veckas träning är den bästa användningen av den. Du minns inte svaren då, men du märker vad som blivit lättare.

## När båda delarna är klara

Har du klarat både Del 1 och Del 2 har du visat allt som krävs för E i Ma2b.

Går något fel på provet är det inte slutet, det betyder att du behöver mer tid med ett område. Det viktigaste är att du vet **vilket**. Pre-testen och de här två generalrepetitionerna svarar på den frågan.
