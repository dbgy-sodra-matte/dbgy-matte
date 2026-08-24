---
slug: "omlasning-2a/ekvationssystem/problemlosning-ekvationssystem"
title: "Problemlösning med ekvationssystem"
course: omlasning-2a
moment: ekvationssystem
moment_title: "Räta linjens ekvation och ekvationssystem"
lesson_number: 7
lesson_total: 7

success_criteria:
  - Bestämma vad x och y ska betyda, med enhet
  - Översätta två meningar till två ekvationer
  - Lösa systemet med den metod som passar bäst
  - Svara i ord, med enhet, och kontrollera mot texten

bank:
  - question: "Vad måste du bestämma innan du kan skriva ekvationerna i en textuppgift?"
    answer: ["vad x och y betyder", "variablerna", "vad bokstäverna står för", "vad x och y ska stå för", "variablernas betydelse"]
    solution: |
      Ekvationerna går inte att skriva förrän bokstäverna har en betydelse.
      Bestäm därför först **vad x och y står för**, med enhet.
  - question: "Två cyklar och tre hjälmar kostar 8400 kr. Skriv det som en ekvation med x för cykel och y för hjälm."
    answer: ["2x + 3y = 8400", "2x+3y=8400"]
    solution: |
      Två cyklar kostar 2x och tre hjälmar kostar 3y.
      Tillsammans blir det 8400 kr.
      Svar: **2x + 3y = 8400**
  - question: "Summan av två tal är 30 och differensen är 8. Vilket är det större talet?"
    answer: ["19", "x = 19", "det större talet är 19"]
    solution: |
      Kalla talen x och y: x + y = 30 och x − y = 8.
      Addera raderna: 2x = 38.
      Svar: **19**
  - question: "Varför räcker det inte med en enda ekvation när du har två okända?"
    answer: ["Det behövs lika många ekvationer som okända", "en ekvation har oändligt många lösningar", "man behöver två ekvationer för två okända", "en ekvation räcker inte för två okända"]
    solution: |
      En ekvation med två okända har oändligt många lösningar, varje punkt på en hel linje.
      **Det krävs lika många ekvationer som okända** för att låsa fast ett enda värdepar.

how_to:
  - Börja med repetitionen högst upp, den håller Del 1 vid liv medan du läser Del 2
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till pre-testet

worked_example: |
  ## Fyra steg, varje gång

  1. **Bestäm vad x och y betyder.** Skriv ut det, med enhet.
  2. **Skriv en ekvation per mening** som innehåller en siffra.
  3. **Lös systemet** med substitution eller addition.
  4. **Svara i ord** med enhet, och kontrollera mot texten.

  Steg 1 och 4 ger poäng på egen hand. Hoppar du över dem tappar du dem även när räkningen är rätt.

  ## Genomräknat exempel

  *En återvinningscentral tar betalt per säck. Ett företag lämnar 3 säckar trä och 2 säckar metall och betalar 210 kr. Ett annat lämnar 1 säck trä och 4 säckar metall och betalar 220 kr. Vad kostar en säck av varje sort?*

  ### Steg 1: vad betyder bokstäverna

  - `x` = priset för en säck trä, i kronor
  - `y` = priset för en säck metall, i kronor

  ### Steg 2: en ekvation per mening

  | Meningen | Ekvationen |
  |---|---|
  | 3 säckar trä och 2 säckar metall kostar 210 kr | 3x + 2y = 210 |
  | 1 säck trä och 4 säckar metall kostar 220 kr | x + 4y = 220 |

  ### Steg 3: lös

  Additionsmetoden. Multiplicera den andra raden med 3 så att x-termerna matchar:

  | Steg | Resultat |
  |---|---|
  | Rad 2 gånger 3 | 3x + 12y = 660 |
  | Dra bort rad 1 | 10y = 450 |
  | | y = 45 |
  | Sätt in i rad 2 | x + 180 = 220 → x = 40 |

  ### Steg 4: svara

  **En säck trä kostar 40 kr och en säck metall kostar 45 kr.**

  Kontroll mot texten: `3 · 40 + 2 · 45 = 120 + 90 = 210` ✓ och `40 + 4 · 45 = 220` ✓

  ## Varför två ekvationer

  En ekvation med två okända har oändligt många lösningar. `x + y = 30` stämmer för (10, 20), (1, 29), (15,5, 14,5) och alla andra punkter på en hel linje.

  Först när ett **andra** villkor läggs till låses ett enda par fast. Det är därför uppgiften alltid ger dig två meningar med siffror i.

  ## Summa och differens

  En återkommande typ: *summan av två tal är 30 och differensen är 8*.

  ```
  x + y = 30
  x − y = 8
  ```

  Additionsmetoden går på ett steg: `2x = 38` → `x = 19`, och `y = 11`.

  > Skriv alltid ut vilket tal som är vilket i svaret. "19 och 11" räcker inte om frågan var vilket som är störst.

exercises:
  E:
    - equation: "Ett byggvaruhus säljer skruvpaket och pluggpaket. Tre skruvpaket och två pluggpaket kostar 210 kr. Ett skruvpaket och fyra pluggpaket kostar 220 kr. Ställ upp ett ekvationssystem, med x för skruvpaket och y för pluggpaket. Skriv båda ekvationerna."
      hint1: "En ekvation per mening. Tre skruvpaket kostar 3x."
      hint2: "Första meningen ger 3x + 2y = 210. Skriv den andra på samma sätt."
      answer: ["3x + 2y = 210 och x + 4y = 220", "3x+2y=210 och x+4y=220", "3x + 2y = 210, x + 4y = 220"]
      solution: |
        x = priset för ett skruvpaket i kronor
        y = priset för ett pluggpaket i kronor

        Tre skruvpaket och två pluggpaket: **3x + 2y = 210**
        Ett skruvpaket och fyra pluggpaket: **x + 4y = 220**

    - equation: "Lös systemet från förra uppgiften: 3x + 2y = 210 och x + 4y = 220. Vad kostar ett skruvpaket respektive ett pluggpaket?"
      hint1: "Additionsmetoden. Multiplicera den andra raden med 3 så att x-termerna matchar."
      hint2: "3x + 12y = 660. Dra bort den första raden."
      answer: ["skruvpaket 40 kr, pluggpaket 45 kr", "40 och 45", "x = 40 och y = 45", "40 kr och 45 kr", "x = 40, y = 45", "40, 45"]
      solution: |
        Multiplicera rad 2 med 3: 3x + 12y = 660

        Dra bort rad 1: 10y = 450, alltså y = 45

        Sätt in: x + 4 · 45 = 220 ger x + 180 = 220, alltså x = 40

        **Ett skruvpaket kostar 40 kr och ett pluggpaket 45 kr.**

        Kontroll: 3 · 40 + 2 · 45 = 210 ✓

    - equation: "En klätterhall säljer dagkort och skouthyrning. Två dagkort och tre skouthyrningar kostar 430 kr. Ett dagkort och två skouthyrningar kostar 240 kr. Vad kostar ett dagkort?"
      hint1: "Kalla dagkortet x och skouthyrningen y. Skriv en ekvation per mening."
      hint2: "2x + 3y = 430 och x + 2y = 240. Multiplicera den andra med 2."
      answer: ["140", "140 kr", "x = 140"]
      solution: |
        x = priset för ett dagkort, y = priset för en skouthyrning

        2x + 3y = 430
        x + 2y = 240

        Multiplicera rad 2 med 2: 2x + 4y = 480

        Dra bort rad 1: y = 50

        Sätt in: x + 100 = 240 ger x = 140

        **Ett dagkort kostar 140 kr.**

        Kontroll: 2 · 140 + 3 · 50 = 280 + 150 = 430 ✓

    - equation: "En plantskola säljer påsar med tulpanlökar och påsar med påskliljelökar. Fyra tulpanpåsar och tre påskliljepåsar kostar 215 kr. Två tulpanpåsar och fem påskliljepåsar kostar 195 kr. Vad kostar en tulpanpåse?"
      hint1: "Kalla tulpanpåsen x och påskliljepåsen y."
      hint2: "4x + 3y = 215 och 2x + 5y = 195. Multiplicera den andra med 2."
      answer: ["35", "35 kr", "x = 35"]
      solution: |
        x = priset för en tulpanpåse, y = priset för en påskliljepåse

        4x + 3y = 215
        2x + 5y = 195

        Multiplicera rad 2 med 2: 4x + 10y = 390

        Dra bort rad 1: 7y = 175, alltså y = 25

        Sätt in: 4x + 75 = 215 ger 4x = 140, alltså x = 35

        **En tulpanpåse kostar 35 kr.**

        Kontroll: 2 · 35 + 5 · 25 = 70 + 125 = 195 ✓

    - equation: "En djuraffär säljer hundfoder och kattfoder i storpack. Två hundpack och tre kattpack kostar 720 kr. Tre hundpack och ett kattpack kostar 660 kr. Vad kostar ett hundpack respektive ett kattpack?"
      hint1: "Kalla hundpacket x och kattpacket y. Skriv en ekvation per mening."
      hint2: "2x + 3y = 720 och 3x + y = 660. Multiplicera den andra med 3 så att y-termerna matchar."
      answer: ["hundpack 180 kr, kattpack 120 kr", "180 och 120", "x = 180 och y = 120", "180 kr och 120 kr", "x = 180, y = 120", "180, 120"]
      solution: |
        x = priset för ett hundpack, y = priset för ett kattpack

        2x + 3y = 720
        3x + y = 660

        Multiplicera rad 2 med 3: 9x + 3y = 1980

        Dra bort rad 1: 7x = 1260, alltså x = 180

        Sätt in: 3 · 180 + y = 660 ger 540 + y = 660, alltså y = 120

        **Ett hundpack kostar 180 kr och ett kattpack 120 kr.**

        Kontroll: 2 · 180 + 3 · 120 = 360 + 360 = 720 ✓

    - equation: "Summan av två tal är 30 och differensen mellan dem är 8. Vilka är talen?"
      hint1: "Kalla talen x och y. Summan ger den ena ekvationen, differensen den andra."
      hint2: "x + y = 30 och x − y = 8. Addera raderna."
      answer: ["19 och 11", "11 och 19", "x = 19 och y = 11", "19, 11", "11, 19"]
      solution: |
        x + y = 30
        x − y = 8

        Addera raderna: 2x = 38, alltså x = 19

        Sätt in: 19 + y = 30 ger y = 11

        **Talen är 19 och 11.**

        Kontroll: 19 + 11 = 30 ✓ och 19 − 11 = 8 ✓

prev: additionsmetoden
prev_lesson_title: "Additionsmetoden"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Räta linjen och ekvationssystem"
---

## Fyra steg, varje gång

1. **Bestäm vad x och y betyder.** Skriv ut det, med enhet.
2. **Skriv en ekvation per mening** som innehåller siffror.
3. **Lös systemet** med substitution eller addition.
4. **Svara i ord**, med enhet, och kontrollera mot texten.

Steg 1 och 4 ger poäng på egen hand. Bedömningen belönar att variablerna är tydligt angivna och att svaret tolkas tillbaka i situationen, hoppar du över dem tappar du poäng även när räkningen är felfri.

## Att översätta text till ekvationer

Leta efter meningarna med siffror i. Varje sådan mening blir en ekvation.

| Meningen säger | Ekvationen blir |
|---|---|
| Tre skruvpaket och två pluggpaket kostar 210 kr | 3x + 2y = 210 |
| Två dagkort och tre skouthyrningar kostar 430 kr | 2x + 3y = 430 |
| Summan av talen är 30 | x + y = 30 |
| Differensen är 8 | x − y = 8 |

Mönstret är alltid detsamma: **antal gånger styckpris, adderat, lika med totalen.**

## Varför två ekvationer

En ekvation med två okända har oändligt många lösningar. `x + y = 30` stämmer för (10, 20), (25, 5), (14,5, 15,5), hela linjen.

Först när ett **andra** villkor läggs till låses ett enda värdepar fast.

Regeln: **lika många ekvationer som okända.** Har uppgiften två priser du inte känner måste den ge dig två upplysningar.

## Välja metod

| Systemet | Metod |
|---|---|
| En variabel står ensam | substitution |
| Båda på formen ax + by = c | addition |

I den här sortens uppgifter är det nästan alltid addition, eftersom prisuppgifter naturligt blir `ax + by = c`.

## Svara på riktigt

Sista raden ska vara en mening som svarar på frågan:

> *Ett skruvpaket kostar 40 kr och ett pluggpaket 45 kr.*

Inte "x = 40, y = 45". Talen säger ingenting utan sina enheter och sin betydelse.

Och kontrollera mot **texten**, inte bara mot dina egna ekvationer. Har du översatt fel märks det bara där.
