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
  - Läsa och skriva formler i ett kalkylblad som räknar ränta och skuld

bank:
  - question: "Ett lån på 100 000 kr har 4 % årlig ränta. Hur mycket ränta per år?"
    answer: "4 000 kr"
    solution: |
      Räntan är en procent av skulden. 4 % ger faktorn 0,04.
      100 000 · 0,04 = **4 000 kr**
  - question: "Vilken del minskar skulden: ränta eller amortering?"
    answer: ["amortering", "amorteringen"]
    solution: |
      Räntan är priset du betalar för att låna, den minskar ingenting.
      Det är **amorteringen** som betalar av på själva skulden.
  - question: "Årsräntan är 6 000 kr. Hur mycket är det per månad?"
    answer: ["500 kr", "500"]
    solution: |
      Ett år har 12 månader, så dela årsräntan med 12.
      6 000 / 12 = **500 kr**
  - question: "Ränta 2000 kr/mån + amortering 3000 kr/mån. Total månadskostnad?"
    answer: "5 000 kr"
    solution: |
      Månadskostnaden är ränta plus amortering.
      2 000 + 3 000 = **5 000 kr**

how_to:
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner, minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSeDDvSutb8LmZdfF5bpO-NTdKsDJAtFJ7XtyB5FfKxgJ7yh2g/viewform"

worked_example: |
  Ett lån har två delar: **räntan** (vad det kostar att låna) och **amorteringen** (att betala av skulden).

  ## Årlig ränta: en procent av skulden

  *Lån på 100 000 kr, 4 % årlig ränta.*

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Ränta = skuld · räntesats | 100 000 · 0,04 | **4 000 kr/år** |

  ## Månadsränta: dela årsräntan med 12

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Årsränta | 4 000 kr | — |
  | Per månad | 4 000 / 12 | **≈ 333 kr/mån** |

  ## Total månadskostnad: ränta + amortering

  *Samma lån, du amorterar 2 000 kr/månad.*

  | Komponent | Belopp |
  |---|---|
  | Månadsränta | 333 kr |
  | Amortering | 2 000 kr |
  | **Total månadskostnad** | **≈ 2 333 kr** |

  > Räntan (333 kr) "försvinner", det är priset för lånet. Amorteringen (2 000 kr) minskar din skuld.

  ## Kalkylbladet: låt datorn räkna om och om igen

  Ett lån räknas om varje månad i många år. Det är precis vad ett kalkylblad är bra på.

  **En formel börjar alltid med `=`.** Skriver du bara `B4*0,05` blir det text. Skriver du `=B4*0,05` räknar cellen.

  Tänk dig en lånetabell där skulden står i kolumn B och räntan i kolumn C:

  | | A | B | C |
  |---|---|---|---|
  | **3** | Månad | Lån kvar | Ränta |
  | **4** | 1 | 200 000 | |
  | **5** | 2 | | |

  | Du vill | Formeln blir | Varför |
  |---|---|---|
  | årsräntan på skulden i B4 | `=B4*0,045` | 4,5 % av skulden |
  | skulden efter en amortering på 3 400 kr | `=B4-3400` | amorteringen minskar skulden |
  | månadskostnaden | `=C4+3400` | ränta plus amortering |

  ## Peka på celler i stället för att skriva in tal

  Står amorteringen i cell B1 skriver du hellre `=B4-B1` än `=B4-3400`.

  Skillnaden märks när något ändras: byter du amorteringen i B1 räknas **hela tabellen** om av sig själv. Har du skrivit in 3400 direkt i formlerna måste du ändra på varje rad.

  > Det är den enda anledningen till att kalkylblad är värda besväret. Ett blad som pekar på celler går att återanvända för ett annat lån, en annan ränta och en annan amortering utan att du rör formlerna.

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
      answer: ["amortering", "Amortering", "amorteringen"]
      solution: |
        **Amortering** minskar skulden.

        Räntan är kostnaden för att låna, den minskar inte skulden.

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

    - equation: "Vad måste en cell börja med för att räkna i stället för att visa text?"
      hint1: "Ett enda tecken skiljer en uträkning från en text."
      hint2: "Samma tecken som i en ekvation."
      answer: ["=", "likhetstecken", "ett likhetstecken", "lika med", "="]
      solution: |
        En formel börjar alltid med **`=`**.

        `B4*0,045` visas som text. `=B4*0,045` räknar.

    - equation: "I cell B4 står skulden 200 000 kr. Räntan är 4,5 % per år. Skriv formeln som räknar ut årsräntan."
      hint1: "Peka på cellen med skulden och multiplicera med räntesatsen som decimaltal."
      hint2: "4,5 % skrivs 0,045."
      answer: ["=B4*0,045", "=B4*0.045", "= B4*0,045", "=b4*0,045", "=B4·0,045"]
      solution: |
        Räntan är en procent av skulden, och skulden står i B4.

        **`=B4*0,045`**

        Glöm inte likhetstecknet, annars blir det text.

    - equation: "I cell B4 står skulden. Amorteringen är 3 400 kr. Skriv formeln för cell B5, alltså skulden efter en amortering."
      hint1: "Amorteringen minskar skulden."
      hint2: "Utgå från B4 och dra bort amorteringen."
      answer: ["=B4-3400", "=B4 - 3400", "= B4-3400", "=b4-3400", "=B4−3400"]
      solution: |
        Amorteringen minskar skulden, så du drar bort den från förra månadens värde.

        **`=B4-3400`**

    - equation: "Amorteringen står i cell B1. Varför är formeln =B4-B1 bättre än =B4-3400?"
      hint1: "Tänk på vad som händer om amorteringen ändras."
      hint2: "Hur många formler måste du skriva om i vardera fallet?"
      answer: ["hela tabellen räknas om när B1 ändras", "man behöver bara ändra på ett ställe", "bladet går att återanvända", "då räknas allt om automatiskt", "man slipper ändra varje rad"]
      solution: |
        Pekar formeln på B1 behöver du **bara ändra på ett ställe** när amorteringen ändras, och hela tabellen räknas om.

        Står talet 3400 inskrivet i varje formel måste du ändra på varje rad, och det är där felen uppstår.

        Ett blad som pekar på celler går att återanvända för ett annat lån, en annan ränta och en annan amortering.

prev: forandringsfaktor
prev_lesson_title: "Förändringsfaktor och upprepad förändring"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Ekonomi"
---

## Att låna pengar: två delar

När du lånar pengar finns det två saker att hålla isär:

1. **Skulden**: beloppet du lånat
2. **Räntan**: vad det kostar dig att låna

## Ränta: priset på lånade pengar

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

## Amortering: att betala av skulden

**Amortering** är när du betalar tillbaka på själva skulden, så att den minskar.

Den viktiga skillnaden:

| | Vad den gör |
|---|---|
| **Ränta** | kostnad, försvinner, kommer inte tillbaka |
| **Amortering** | betalning, minskar din skuld |

Båda står på din månadsfaktura, men de gör olika saker.

## Total månadskostnad

Det du betalar varje månad är **ränta + amortering**:

> Lån 100 000 kr, 4 % ränta, amorterar 2 000 kr/mån:
> - Månadsränta: 4 000 / 12 ≈ 333 kr
> - Amortering: 2 000 kr
> - **Totalt: ≈ 2 333 kr/månad**

Av detta är 333 kr "borta" (räntan) och 2 000 kr minskar din skuld.

## Varför räntan är viktig att förstå

Ju större skuld, desto mer ränta. Och amorterar du inte alls kan räntan ackumuleras, det är därför till exempel kreditkortsskulder (ofta 15–25 % ränta) kan bli dyra. Att förstå ränta hjälper dig fatta bättre beslut med pengar.

> **Regel att skriva ner:** årsränta = skuld · räntesats. Månadsränta = årsränta / 12. Månadskostnad = månadsränta + amortering.

## Kalkylbladet: låt datorn räkna

Ett lån räknas om varje månad i många år, och det är exakt vad ett kalkylblad är byggt för.

**En formel börjar med `=`.** Utan likhetstecknet blir det text i cellen, inte en uträkning.

| Du vill | Formel |
|---|---|
| räntan på skulden i B4, 4,5 % | `=B4*0,045` |
| skulden efter amorteringen 3 400 kr | `=B4-3400` |
| månadskostnaden | `=C4+3400` |

## Peka på celler, skriv inte in talen

Ligger amorteringen i cell B1 är `=B4-B1` bättre än `=B4-3400`.

Ändrar du sedan amorteringen räknas hela tabellen om av sig själv. Har du skrivit in talet direkt i varje formel måste du ändra på varje rad — och det är där felen kommer.
