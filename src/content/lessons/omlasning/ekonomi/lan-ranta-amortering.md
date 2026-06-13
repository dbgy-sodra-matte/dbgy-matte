---
slug: "omlasning/ekonomi/lan-ranta-amortering"
title: "Lån, ränta och amortering"
course: omlasning
moment: ekonomi
moment_title: "Ekonomi"
lesson_number: 3
lesson_total: 3

success_criteria:
  - Räkna ut årlig ränta som en procent av skulden
  - Räkna om årlig ränta till månadsränta
  - Förstå skillnaden mellan ränta (kostnad) och amortering (betala av skulden)
  - Räkna ut den totala månadskostnaden för ett lån

bank:
  - question: "Ett lån på 100 000 kr har 4 % årlig ränta. Hur mycket ränta per år?"
    answer: "4 000 kr"
  - question: "Vad är skillnaden mellan ränta och amortering?"
    answer: "Ränta är kostnaden för att låna; amortering minskar själva skulden."
  - question: "Årsräntan är 6 000 kr. Hur mycket är det per månad?"
    answer: "500 kr"
  - question: "Ränta 2000 kr/mån + amortering 3000 kr/mån. Total månadskostnad?"
    answer: "5 000 kr"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSdQyOYSJoQkvJ4SfwAX_j8DwYc4pKdyO_PnC7Obv_IzoBpqVg/viewform"

worked_example: |
  Ett lån har två delar: **räntan** (vad det kostar att låna) och **amorteringen** (att betala av skulden).

  ## 1. Årlig ränta — en procent av skulden

  *Lån på 100 000 kr, 4 % årlig ränta.*

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Ränta = skuld · räntesats | 100 000 · 0,04 | **4 000 kr/år** |

  ## 2. Månadsränta — dela årsräntan med 12

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Årsränta | 4 000 kr | — |
  | Per månad | 4 000 / 12 | **≈ 333 kr/mån** |

  ## 3. Total månadskostnad — ränta + amortering

  *Samma lån, du amorterar 2 000 kr/månad.*

  | Komponent | Belopp |
  |---|---|
  | Månadsränta | 333 kr |
  | Amortering | 2 000 kr |
  | **Total månadskostnad** | **≈ 2 333 kr** |

  > Räntan (333 kr) "försvinner" — det är priset för lånet. Amorteringen (2 000 kr) minskar din skuld.

exercises:
  E:
    - equation: "Ett lån på 50 000 kr har 5 % årlig ränta. Hur mycket är räntan per år?"
      hint1: "Årlig ränta = skuld · räntesatsen som decimal."
      hint2: "5 % = 0,05. Räkna 50 000 · 0,05."
      answer: ["2500", "2 500", "2500 kr"]
      solution: |
        Ränta = 50 000 · 0,05 = **2 500 kr/år**

    - equation: "Ett lån på 200 000 kr har 3 % årlig ränta. Hur mycket är räntan per år?"
      hint1: "Skuld gånger räntesatsen som decimal."
      hint2: "3 % = 0,03. Räkna 200 000 · 0,03."
      answer: ["6000", "6 000", "6000 kr"]
      solution: |
        Ränta = 200 000 · 0,03 = **6 000 kr/år**

    - equation: "Årsräntan på ett lån är 7 200 kr. Hur mycket är det per månad?"
      hint1: "Ett år har 12 månader. Räntan fördelas jämnt."
      hint2: "Dela årsräntan med 12: 7 200 / 12."
      answer: ["600", "600 kr"]
      solution: |
        7 200 / 12 = **600 kr/månad**

    - equation: "Ett lån på 120 000 kr har 5 % årlig ränta. Hur mycket är räntan per månad?"
      hint1: "Två steg: räkna först ut årsräntan, dela sedan med 12."
      hint2: "Årsränta: 120 000 · 0,05 = 6 000 kr. Sedan 6 000 / 12."
      answer: ["500", "500 kr"]
      solution: |
        Årsränta: 120 000 · 0,05 = 6 000 kr
        Per månad: 6 000 / 12 = **500 kr**

    - equation: "Vilken av dessa MINSKAR din skuld: ränta eller amortering?"
      hint1: "Den ena är priset för att låna, den andra betalar av själva lånet."
      hint2: "Räntan är en kostnad som försvinner. Amorteringen betalar tillbaka på skulden."
      answer: ["amortering", "Amortering"]
      solution: |
        **Amortering** minskar skulden.

        Räntan är kostnaden för att låna — den minskar inte skulden.

    - equation: "Du betalar 1 200 kr i ränta och amorterar 2 500 kr en månad. Vad är den totala månadskostnaden?"
      hint1: "Total månadskostnad = ränta + amortering."
      hint2: "Lägg ihop: 1 200 + 2 500."
      answer: ["3700", "3 700", "3700 kr"]
      solution: |
        1 200 + 2 500 = **3 700 kr**

    - equation: "Ett lån på 80 000 kr har 6 % årlig ränta. Du amorterar 1 000 kr/månad. Vad är månadskostnaden den första månaden?"
      hint1: "Räkna ut månadsräntan först, lägg sedan till amorteringen."
      hint2: "Årsränta: 80 000 · 0,06 = 4 800 kr. Per månad: 4 800 / 12 = 400 kr. Total: 400 + 1 000."
      answer: ["1400", "1 400", "1400 kr"]
      solution: |
        Årsränta: 80 000 · 0,06 = 4 800 kr
        Månadsränta: 4 800 / 12 = 400 kr
        Total månadskostnad: 400 + 1 000 = **1 400 kr**

prev: forandringsfaktor
prev_lesson_title: "Förändringsfaktor och upprepad förändring"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Ekonomi"
---

## Att låna pengar — två delar

När du lånar pengar finns det två saker att hålla isär:

1. **Skulden** — beloppet du lånat
2. **Räntan** — vad det kostar dig att låna

## Ränta — priset på lånade pengar

Räntan är **en procent av skulden**, oftast angiven per år.

```
Årlig ränta (kr) = skuld · räntesatsen
```

Ett lån på 100 000 kr med 4 % ränta:
```
100 000 · 0,04 = 4 000 kr per år
```

### Månadsränta

Räntan anges per år men betalas oftast per månad. **Dela årsräntan med 12.**
```
4 000 / 12 ≈ 333 kr per månad
```

## Amortering — att betala av skulden

**Amortering** är när du betalar tillbaka på själva skulden, så att den minskar.

Den viktiga skillnaden:

| | Vad den gör |
|---|---|
| **Ränta** | kostnad — försvinner, kommer inte tillbaka |
| **Amortering** | betalning — minskar din skuld |

Båda står på din månadsfaktura, men de gör olika saker.

## Total månadskostnad

Det du betalar varje månad är **ränta + amortering**:

> Lån 100 000 kr, 4 % ränta, amorterar 2 000 kr/mån:
> - Månadsränta: 4 000 / 12 ≈ 333 kr
> - Amortering: 2 000 kr
> - **Totalt: ≈ 2 333 kr/månad**

Av detta är 333 kr "borta" (räntan) och 2 000 kr minskar din skuld.

## Varför räntan är viktig att förstå

Ju större skuld, desto mer ränta. Och amorterar du inte alls kan räntan ackumuleras — det är därför till exempel kreditkortsskulder (ofta 15–25 % ränta) kan bli dyra. Att förstå ränta hjälper dig fatta bättre beslut med pengar.

> **Regel att skriva ner:** årsränta = skuld · räntesats. Månadsränta = årsränta / 12. Månadskostnad = månadsränta + amortering.
