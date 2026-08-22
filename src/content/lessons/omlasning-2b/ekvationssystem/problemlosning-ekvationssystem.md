---
slug: "omlasning-2b/ekvationssystem/problemlosning-ekvationssystem"
title: "Problemlösning med ekvationssystem"
course: omlasning-2b
moment: ekvationssystem
moment_title: "Ekvationssystem"
lesson_number: 6
lesson_total: 6

success_criteria:
  - Bestämma vad x och y ska betyda i en textuppgift
  - Ställa upp ett ekvationssystem utifrån en text
  - Lösa systemet och svara på frågan som ställdes
  - Rimlighetsbedöma svaret

bank:
  - question: "Två kaffe och en bulle kostar 74 kr. Skriv det som en ekvation med x för kaffe och y för bulle."
    answer: ["2x + y = 74", "2x+y=74"]
  - question: "Vad är det första du gör i en textuppgift med ekvationssystem?"
    answer: ["Bestämmer vad x och y ska betyda", "definierar variablerna", "skriver vad x och y står för"]
  - question: "Tre biljetter kostar tillsammans 240 kr och alla kostar lika mycket. Vad kostar en?"
    answer: ["80", "80 kr"]
  - question: "Om x = priset på en tröja och du köper 4 tröjor: hur skriver du kostnaden?"
    answer: ["4x", "4·x", "4 · x"]

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar är området genomtränat, gå vidare till "Redo att tenta?"

worked_example: |
  ## Från text till system

  *En simhall tar 470 kr för tre vuxenbiljetter och två barnbiljetter. En vuxen och ett barn tillsammans kostar 170 kr. Vad kostar en vuxenbiljett och en barnbiljett?*

  | Steg | Vad vi gör |
  |---|---|
  | **Namnge** | x = priset för en vuxenbiljett (kr), y = priset för en barnbiljett (kr) |
  | **Rad 1: det stora köpet** | 3 vuxna + 2 barn = 470 → `3x + 2y = 470` |
  | **Rad 2: det lilla köpet** | 1 vuxen + 1 barn = 170 → `x + y = 170` |

  Lös med additionsmetoden, multiplicera rad 2 med 2 så y-termerna blir 2y i båda, och subtrahera:

  | Steg | Uträkning |
  |---|---|
  | Rad 2 · 2 | 2x + 2y = 340 |
  | Rad 1 minus den | x = 470 − 340 = **130** |
  | Sätt in i rad 2 | 130 + y = 170 → **y = 40** |

  **Svar:** en vuxenbiljett kostar 130 kr och en barnbiljett 40 kr.

  **Rimligt?** Ja, barnbiljetten är billigare än vuxenbiljetten, och priserna ligger på en normal nivå för en simhall.

  ## Skriv ALLTID vad x och y betyder

  Ett svar som bara är "x = 130" säger inget. Bedömningen kräver att det framgår **vad** talet är priset på.

  Skriv en rad överst:

  > *x = priset för en vuxenbiljett (kr), y = priset för en barnbiljett (kr)*

  Den raden ger poäng, och den gör att du själv inte tappar bort dig.

  ## Svara på frågan som ställdes

  Frågas det efter **omkretsen** räcker det inte att räkna ut sidorna, du måste addera dem också. Läs frågan en sista gång innan du sätter punkt.

exercises:
  E:
    - equation: "Två filmbiljetter och tre popcorn kostar 415 kr. En filmbiljett och ett popcorn kostar 160 kr. Låt x vara priset för en biljett och y priset för ett popcorn. Ställ upp ekvationssystemets FÖRSTA rad (den om 415 kr)."
      hint1: "Två biljetter skrivs 2x. Tre popcorn skrivs 3y."
      hint2: "Lägg ihop dem och sätt lika med totalsumman."
      answer: ["2x + 3y = 415", "2x+3y=415"]
      solution: |
        Två biljetter: 2x
        Tre popcorn: 3y

        **2x + 3y = 415**

    - equation: "Samma situation: två filmbiljetter och tre popcorn kostar 415 kr, en biljett och ett popcorn kostar 160 kr. Vad kostar en filmbiljett?"
      hint1: "Systemet är 2x + 3y = 415 och x + y = 160. Multiplicera den andra raden med 3."
      hint2: "3x + 3y = 480. Dra bort rad 1 från den: (3x − 2x) + (3y − 3y) = 480 − 415."
      answer: ["65", "65 kr", "x = 65"]
      solution: |
        2x + 3y = 415
        x + y = 160 → gånger 3 → 3x + 3y = 480

        Subtrahera:
        x = 480 − 415 = **65**

        En filmbiljett kostar **65 kr**. (Ett popcorn: 160 − 65 = 95 kr.)

        Kontroll: 2 · 65 + 3 · 95 = 130 + 285 = 415 ✓

    - equation: "En cykelverkstad tar 620 kr för fyra punkteringslagningar och två nya slangar. Två lagningar och tre slangar kostar 470 kr. Låt x vara priset för en lagning och y priset för en slang. Ställ upp systemets ANDRA rad (den om 470 kr)."
      hint1: "Två lagningar skrivs 2x. Tre slangar skrivs 3y."
      hint2: "Summan av dem är 470."
      answer: ["2x + 3y = 470", "2x+3y=470"]
      solution: |
        Två lagningar: 2x
        Tre slangar: 3y

        **2x + 3y = 470**

    - equation: "Samma verkstad: 4 lagningar + 2 slangar = 620 kr, 2 lagningar + 3 slangar = 470 kr. Vad kostar en punkteringslagning?"
      hint1: "Förenkla rad 1 först, allt går att dela med 2."
      hint2: "Rad 1 blir 2x + y = 310. Subtrahera den från rad 2 så försvinner x-termerna."
      answer: ["115", "115 kr", "x = 115"]
      solution: |
        Rad 1 delat med 2: 2x + y = 310

        Rad 2: 2x + 3y = 470

        Subtrahera:
        2y = 160 → y = 80

        Sätt in: 2x + 80 = 310 → 2x = 230 → **x = 115**

        En lagning kostar **115 kr**. (En slang: 80 kr.)

        Kontroll: 4 · 115 + 2 · 80 = 460 + 160 = 620 ✓

    - equation: "I skolcaféet kostar två smörgåsar och tre juice 141 kr. En smörgås och en juice kostar 57 kr. Vad kostar en smörgås?"
      hint1: "Låt x = priset för en smörgås och y för en juice. Systemet blir 2x + 3y = 141 och x + y = 57."
      hint2: "Multiplicera rad 2 med 2: 2x + 2y = 114. Subtrahera den från rad 1, x-termerna tar ut varandra."
      answer: ["30", "30 kr", "x = 30"]
      solution: |
        x = priset för en smörgås, y = priset för en juice

        2x + 3y = 141
        x + y = 57 → gånger 2 → 2x + 2y = 114

        Subtrahera:
        y = 141 − 114 = 27

        Sätt in i rad 2: x + 27 = 57 → x = **30**

        En smörgås kostar **30 kr**. Kontroll: 2 · 30 + 3 · 27 = 60 + 81 = 141 ✓

    - equation: "I en klass går 28 elever. Det går 4 fler flickor än pojkar. Hur många pojkar går i klassen?"
      hint1: "Låt x = antal pojkar och y = antal flickor. Systemet blir x + y = 28 och y = x + 4."
      hint2: "Sätt in y = x + 4 i första raden: x + (x + 4) = 28."
      answer: ["12", "12 pojkar", "x = 12"]
      solution: |
        x = antal pojkar, y = antal flickor

        x + y = 28
        y = x + 4

        Sätt in:
        x + (x + 4) = 28
        2x = 24
        **x = 12**

        Det går **12 pojkar** i klassen (och 16 flickor).

        Kontroll: 12 + 16 = 28 ✓ och 16 är 4 fler än 12 ✓

prev: additionsmetoden
prev_lesson_title: "Additionsmetoden"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Ekvationssystem"
---

## Det svåra är inte räknandet

När systemet väl står på pappret kan du redan lösa det, du har gjort det i två delmoment. Det som avgör textuppgifterna är **översättningen**: att komma från meningar till två rader matematik.

## Arbetsgången

1. **Bestäm vad x och y ska vara.** Skriv ner det i ord, med enhet.
2. **Leta upp de två påståendena.** En textuppgift som ska bli ett ekvationssystem innehåller alltid två oberoende uppgifter, ofta två personer, två köp eller två tillfällen.
3. **Skriv en rad per påstående.**
4. **Lös** med den metod som passar.
5. **Svara i ord**, med enhet, på det som faktiskt frågades.
6. **Rimlighetskolla.** En pizza för 4 kr eller −3 elever betyder att något gått fel.

## Så låter påståendena

| I texten står | I matematiken blir det |
|---|---|
| "tre vuxna och två barn kostar 470 kr" | 3x + 2y = 470 |
| "tillsammans 28 elever" | x + y = 28 |
| "4 fler flickor än pojkar" | y = x + 4 |
| "dubbelt så många" | y = 2x |
| "10 kr dyrare" | y = x + 10 |

> Notera skillnaden mellan **fler/dyrare** (plus) och **gånger så många** (multiplikation). Det är den vanligaste felöversättningen.

## Namnge variablerna: det ger poäng

Bedömningsanvisningarna på prövningen ger poäng för en *godtagbar ansats: ställer upp ett korrekt ekvationssystem*. Den poängen får du även om räkningen sedan spårar ur. Att skriva

> *x = priset för en vuxenbiljett (kr), y = priset för en barnbiljett (kr)*

och de två raderna kostar tio sekunder och är ofta halva uppgiftens poäng.

## Läs frågan igen till sist

Uppgiften kan be om något annat än x och y. Frågas det efter *omkretsen*, *totalsumman* eller *hur mycket dyrare*, så finns ett räknesteg kvar efter att systemet är löst.

Det är det vanligaste sättet att tappa en färdigräknad uppgift.
