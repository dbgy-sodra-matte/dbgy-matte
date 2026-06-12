---
slug: "omlasning/algebra/stalla-upp-och-tolka-uttryck"
title: "Ställa upp och tolka uttryck"
course: omlasning
moment: algebra
moment_title: "Algebra"
lesson_number: 3
lesson_total: 8

success_criteria:
  - Skriva ett uttryck utifrån en beskrivning i ord
  - Använda en variabel (t.ex. x) för det du inte vet
  - Tolka vad ett färdigt uttryck betyder i verkligheten
  - Ställa upp uttryck för kostnader (fast avgift + pris per styck)

bank:
  - question: "Skriv ett uttryck för 'ett tal ökat med 7' (kalla talet x)."
    answer: "x + 7"
  - question: "Skriv ett uttryck för 'dubbelt så mycket som x'."
    answer: "2x"
  - question: "En biljett kostar 120 kr. Vad kostar x biljetter?"
    answer: "120x"
  - question: "Kim är 5 år äldre än Lo som är x år. Hur gammal är Kim?"
    answer: "x + 5"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

# exit_ticket_form: checkpoint-Form läggs in när Simon kört genereringsscriptet

worked_example: |
  ## 1. Från ord till uttryck

  *"Ett tal ökat med 3"* — kalla talet x.

  | Ord | Matte |
  |---|---|
  | ett tal | x |
  | ökat med 3 | + 3 |
  | **Uttrycket** | **x + 3** |

  ## 2. Kostnadsuttryck (den viktigaste typen)

  *En taxiresa kostar 50 kr i startavgift plus 12 kr per kilometer. Skriv ett uttryck för
  vad en resa på x km kostar.*

  | Del | Matte | Varför |
  |---|---|---|
  | Startavgift | 50 | betalas alltid, en gång |
  | Per kilometer | 12 · x = 12x | 12 kr för VARJE km |
  | **Uttrycket** | **50 + 12x** | fast del + rörlig del |

  ## 3. Tolka ett färdigt uttryck

  *Saldo på busskortet: `200 − 25x` där x = antal veckor.*

  | Del | Betyder |
  |---|---|
  | 200 | du startade med 200 kr |
  | −25x | det minskar med 25 kr varje vecka |

  Efter 4 veckor: 200 − 25 · 4 = 200 − 100 = **100 kr kvar**.

exercises:
  E:
    - equation: "Skriv ett uttryck för 'ett tal minskat med 9'. Kalla talet x."
      hint1: "'Minskat med' betyder att något dras bort från talet."
      hint2: "Talet är x. Att minska det med 9 skrivs med ett minustecken efter x:et."
      answer: ["x − 9", "x - 9"]
      solution: |
        Ett tal: x
        Minskat med 9: − 9

        **x − 9**

    - equation: "Skriv ett uttryck för 'tre gånger så stort som x'."
      hint1: "'Tre gånger så stort' betyder multiplikation."
      hint2: "Tre gånger x skrivs 3 · x — och det kortas till 3x."
      answer: ["3x", "3·x"]
      solution: |
        Tre gånger x = 3 · x = **3x**

    - equation: "Lösgodis kostar 9 kr per hekto. Skriv ett uttryck för vad x hekto kostar."
      hint1: "Varje hekto kostar 9 kr. Vad händer med priset när antalet hekto växer?"
      hint2: "1 hg kostar 9 kr, 2 hg kostar 9 · 2 kr, 3 hg kostar 9 · 3 kr… och x hg kostar?"
      answer: ["9x", "9·x"]
      solution: |
        Pris = 9 kr · antal hekto = 9 · x = **9x**

    - equation: "En hyrcykel kostar 45 kr i fast avgift plus 15 kr per timme. Skriv ett uttryck för kostnaden efter x timmar."
      hint1: "Det finns två delar: en som alltid betalas en gång, och en som beror på antalet timmar."
      hint2: "Fasta avgiften är 45 (ingen multiplikation — den betalas en gång). Timdelen är 15 · x. Lägg ihop delarna."
      answer: ["45 + 15x", "15x + 45"]
      solution: |
        Fast avgift: 45
        Per timme: 15x

        **45 + 15x**

        > Vanligaste felet: att skriva 60x (slå ihop 45 och 15). Men startavgiften
        > betalas bara EN gång — den ska inte gångas med x.

    - equation: "Mira är 4 år yngre än Pelle. Pelle är x år. Skriv ett uttryck för Miras ålder."
      hint1: "'Yngre' betyder att Miras ålder är mindre än Pelles."
      hint2: "Pelle är x år. Mira är 4 år MINDRE — dra bort 4 från x."
      answer: ["x − 4", "x - 4"]
      solution: |
        Pelle: x år
        Mira är 4 år yngre: **x − 4**

    - equation: "Ditt busskort har saldot 500 − 40x kr, där x är antal veckor. Förklara med egna ord vad talet 40 betyder i uttrycket."
      hint1: "Titta på vad som händer med saldot när x växer med 1 — alltså när en vecka går."
      hint2: "Efter 1 vecka: 500 − 40. Efter 2 veckor: 500 − 80. Hur mycket försvinner per vecka?"
      solution: |
        Saldot minskar med 40 för varje vecka som går.

        **40 = så många kronor kortet kostar dig per vecka.**

        (500 är vad du startade med.)

prev: faktorisering
prev_lesson_title: "Faktorisering"
next: ekvationer
next_lesson_title: "Ekvationer"
---

## Varför uttryck?

Ett uttryck är ett sätt att beskriva en situation med matte **innan du vet alla siffror**. Du vet inte hur många kilometer taxiresan blir — men du kan ändå skriva exakt vad den kommer att kosta: `50 + 12x`.

## Variabeln är "det vi inte vet än"

Välj en bokstav (oftast x) för det okända:

| Situation | Variabel | Uttryck |
|---|---|---|
| Ett tal ökat med 5 | talet = x | x + 5 |
| Dubbelt så mycket som ett tal | talet = x | 2x |
| Hälften av ett tal | talet = x | x/2 |
| 7 mindre än ett tal | talet = x | x − 7 |

## Ordlistan ord → matte

| När det står… | …betyder det |
|---|---|
| ökat med, mer än, äldre än | **+** |
| minskat med, mindre än, yngre än | **−** |
| gånger så mycket, per styck, varje | **·** (multiplikation) |
| hälften, delat lika | **÷** (division) |

## Kostnadsuttryck — fast del + rörlig del

Den vanligaste typen i prov och i verkligheten:

> **Kostnad = fast avgift + (pris per styck) · (antal)**

Gym: 300 kr startavgift + 250 kr per månad → `300 + 250x`

Den fasta delen betalas **en gång** (inget x). Den rörliga delen växer med antalet (gångas med x).

## Tolka åt andra hållet

Att *tolka* ett uttryck är att översätta tillbaka till verkligheten. I `200 − 25x`:
talet utan x är **startvärdet**, talet framför x är **förändringen per gång** — och minustecknet säger att det *minskar*.
