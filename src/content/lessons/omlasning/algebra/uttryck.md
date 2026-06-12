---
slug: "omlasning/algebra/uttryck"
title: "Uttryck"
course: omlasning
moment: algebra
moment_title: "Algebra"
lesson_number: 1
lesson_total: 8

# E-målen nedan är exakt vad checkpointen och tenta-av-provet testar för detta delmoment.
success_criteria:
  - Slå ihop termer av samma sort (t.ex. 3x + 2x = 5x)
  - Beräkna värdet av ett uttryck genom att sätta in tal
  - Multiplicera in i en parentes (t.ex. 4(y + 6))
  - Hantera minustecken framför en parentes

bank:
  - question: "Förenkla: 4a + 3a"
    answer: "7a"
  - question: "Beräkna 5x + 4 om x = 3."
    answer: "5 · 3 + 4 = 19"
  - question: "Multiplicera in: 3(x + 5)"
    answer: "3x + 15"
  - question: "Förenkla: 8k − (3k + 2)"
    answer: "5k − 2"

widget: "like-terms/v1"
widget_height: 580

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Testa widgeten — den visar med färger vilka termer som hör ihop
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först — den räcker ofta
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

# video: läggs in när Simon valt klipp (Smatte/Vidma — extern resurs, sidan fungerar utan)
exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLScBKNRmJkY2pLV7-gYRW8SiHbbGg6KTDCd3do8MDXE3xWLuuA/viewform"

worked_example: |
  Tre exempel som täcker det viktigaste. Läs dem långsamt — kolonnen "Vad vi gör" är halva poängen.

  ## 1. Slå ihop samma sort

  `4a + 3a + 2 − 1`

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Samla `a`-termerna | 4a + 3a | **7a** |
  | Samla konstanter | 2 − 1 | **1** |
  | Skriv ihop | — | **7a + 1** |

  **Viktigt:** `7a` och `1` slås INTE ihop — olika sort.

  ## 2. Multiplicera in i parentes

  `3(x + 5)`

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | 3 gångas med x | 3 · x | **3x** |
  | 3 gångas med 5 | 3 · 5 | **15** |
  | Skriv ihop | — | **3x + 15** |

  Tänk: "tre stycken `(x + 5)`" — alltså `(x+5) + (x+5) + (x+5)`. Det blir 3 x:n och 3 femmor.

  ## 3. Minustecken framför parentes

  `8k − (3k + 2)`

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Minustecknet vänder tecknen inuti | −(3k + 2) blir −3k − 2 | — |
  | Skriv om utan parentes | 8k − 3k − 2 | — |
  | Slå ihop k-termerna | 8k − 3k | **5k − 2** |

  > **Den enskilt största fällan i hela området:** minustecken framför parentes. Vänder ALLA tecken inuti — inte bara det första.

exercises:
  E:
    - equation: "Beräkna värdet av uttrycket 5x − 3 när x = 4."
      hint1: "Att 'beräkna värdet' betyder att vi byter ut x mot talet och räknar ut hela uttrycket."
      hint2: "Skriv om uttrycket med 4 där x står: 5 · 4 − 3. Räkna multiplikationen först."
      hint3: "Du har 20 − 3 kvar att räkna."
      answer: ["17"]
      solution: |
        5x − 3  där x = 4
        = 5 · 4 − 3
        = 20 − 3
        = **17**

    - equation: "Förenkla: 6b + 2b − 3"
      hint1: "Samla samma sort. b-termer kan slås ihop med b-termer — konstanten står för sig själv."
      hint2: "Räkna ut b-termerna för sig (6b + 2b). Konstanten −3 kan inte slås ihop med något — den följer bara med."
      answer: ["8b − 3", "8b - 3", "-3 + 8b"]
      solution: |
        6b + 2b − 3
        = (6b + 2b) − 3
        = **8b − 3**

        > `8b` och `3` är olika sort — de slås aldrig ihop.

    - equation: "Multiplicera in: 4(y + 6)"
      hint1: "4(y + 6) betyder 'fyra stycken (y + 6)'. Tänk på vad 4:an ska gångas med."
      hint2: "Regeln: 4:an ska multipliceras med BÅDA termerna i parentesen. Räkna 4 · y för sig och 4 · 6 för sig."
      answer: ["4y + 24", "24 + 4y"]
      solution: |
        4(y + 6)
        = 4 · y + 4 · 6
        = **4y + 24**

    - equation: "Förenkla: (6x + 4y) + (3x + 2y)"
      hint1: "Det finns två variabler — x och y. Tänk på dem som olika sorters saker. x-termer slås bara ihop med x-termer."
      hint2: "Plustecknet framför andra parentesen ändrar ingenting — du kan bara ta bort båda parenteserna och skriva alla termer i rad."
      hint3: "Du har 6x + 4y + 3x + 2y. Samla x-termerna (6x + 3x) och y-termerna (4y + 2y) var för sig."
      answer: ["9x + 6y", "6y + 9x"]
      solution: |
        (6x + 4y) + (3x + 2y)
        = 6x + 4y + 3x + 2y       [plus framför parentes — bara ta bort]
        = (6x + 3x) + (4y + 2y)   [samla samma sort]
        = **9x + 6y**

    - equation: "Förenkla: 8a − (3 + 2a)"
      hint1: "Här finns ett minustecken FRAMFÖR parentesen. Det är inte samma sak som plus."
      hint2: "Minustecknet vänder tecknen inuti parentesen: −(3 + 2a) blir −3 − 2a. Skriv om utan parentes och slå sedan ihop a-termerna."
      hint3: "Du har 8a − 3 − 2a. Samla a-termerna (8a − 2a) — konstanten −3 står ensam."
      answer: ["6a − 3", "6a - 3", "-3 + 6a"]
      solution: |
        8a − (3 + 2a)
        = 8a − 3 − 2a       [minustecknet vänder tecknen inuti]
        = (8a − 2a) − 3
        = **6a − 3**

        > **Stora fällan:** många missar att minustecknet ska vända BÅDA tecknen inuti — inte bara det första.

    - equation: "Förenkla: 5(x + 2) − 3x"
      hint1: "Två steg: multiplicera först in 5:an i parentesen, slå sedan ihop x-termerna."
      hint2: "5(x + 2) = 5x + 10. Skriv ut hela uttrycket: 5x + 10 − 3x. Samla x-termerna."
      answer: ["2x + 10", "10 + 2x"]
      solution: |
        5(x + 2) − 3x
        = 5x + 10 − 3x      [multiplicera in 5:an]
        = (5x − 3x) + 10
        = **2x + 10**
---

Du jobbar i din egen takt. Det här är delmoment 1 av 8 i Algebra — när alla 8 sitter är du redo att tenta av hela området.

## Vad är en term?

I uttrycket `3x + 5 + 2x` finns tre **termer**:

- `3x`
- `5`
- `2x`

En term är en bit av uttrycket som hänger ihop. Termer skiljs åt med `+` eller `−`.

## "Samma sorts sak"

Här kommer den centrala idén:

> Du kan bara **slå ihop** två termer om de mäter "samma sorts sak".

- `3x` och `2x` mäter båda **antal x**. De kan slås ihop till `5x`.
- `3x` och `4` mäter olika saker. `3x` är "antal x". `4` är ett rent tal. De *kan inte* slås ihop.

Det är som att försöka addera 3 äpplen och 4 bananer. Du får 3 äpplen och 4 bananer — inte 7 av något.

I widgeten är varje sorts term **färgkodad**. Termer av samma färg kan slås ihop.

## Beräkna värdet av ett uttryck

När vi *vet* vad en variabel är värd kan vi räkna ut hela uttryckets värde.

| Uttryck | Värde att sätta in | Uträkning | Resultat |
|---|---|---|---|
| `3x + 1` | x = 4 | 3 · 4 + 1 = 12 + 1 | **13** |
| `2y − 7` | y = 5 | 2 · 5 − 7 = 10 − 7 | **3** |

**Viktig regel:** *byt ut variabeln mot talet*. Skriv om hela uttrycket utan x, sedan räkna.

## Multiplicera in i en parentes

Tänk på `4(x + 3)`. Det betyder **fyra stycken `(x + 3)`**.

Om vi räknar ihop blir det `4x + 12`. Fyra x och fyra treor.

Genvägen är: **4:an gångar BÅDA termerna i parentesen.**

| Uttryck | Vad vi gör | Resultat |
|---|---|---|
| `4(x + 3)` | 4 · x och 4 · 3 | `4x + 12` |
| `2(3a + 5)` | 2 · 3a och 2 · 5 | `6a + 10` |
| `−3(x − 2)` | −3 · x och −3 · (−2) | `−3x + 6` |

## Minustecknet framför en parentes

`5x − (2x + 3)` — vad händer egentligen?

Tänk på `−(2x + 3)` som `−1 · (2x + 3)`. Då måste `−1` gångas med både `2x` och `3`:

`−1 · 2x = −2x` och `−1 · 3 = −3`

Så `−(2x + 3) = −2x − 3`. Hela uttrycket: `5x − 2x − 3 = 3x − 3`.

> **Regel att skriva ner:** ett minustecken framför en parentes **vänder tecken** på allt inuti.
