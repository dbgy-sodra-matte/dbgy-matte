---
slug: "omlasning-2b/statistik/regression-och-korrelation"
title: "Regression och korrelation"
course: omlasning-2b
moment: statistik
moment_title: "Statistik"
lesson_number: 4
lesson_total: 4

success_criteria:
  - Avgöra om ett spridningsdiagram visar positivt eller negativt samband
  - Bedöma om sambandet är starkt eller svagt
  - Använda en given regressionslinje för att göra en prognos
  - Förklara varför samband inte är samma sak som orsak

bank:
  - question: "Punkterna i ett spridningsdiagram går nedåt åt höger. Är sambandet positivt eller negativt?"
    answer: ["Negativt", "negativt", "negativ"]
    solution: |
      Går punkterna nedåt åt höger minskar y när x ökar.
      Då är sambandet **negativt**.
  - question: "Vad kallas den linje som anpassas till punkterna i ett spridningsdiagram?"
    answer: ["Regressionslinjen", "regressionslinje", "trendlinjen", "trendlinje"]
    solution: |
      Linjen som läggs så nära punkterna som möjligt kallas **regressionslinjen** (eller trendlinjen).
  - question: "Regressionslinjen är y = 3x + 10. Vad blir prognosen för x = 5?"
    answer: ["25"]
    solution: |
      Sätt in x = 5 i linjens ekvation.
      y = 3 · 5 + 10 = 15 + 10 = **25**
  - question: "Betyder ett starkt samband mellan två storheter att den ena orsakar den andra?"
    answer: ["nej", "Nej", "nej!"]
    solution: |
      Samband visar bara att storheterna följs åt, inte varför.
      Det kan finnas en tredje bakomliggande orsak, eller vara en slump.
      Svar: **nej**

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar är området genomtränat, gå vidare till "Redo att tenta?"

worked_example: |
  ## Spridningsdiagram

  Ett **spridningsdiagram** ritar två storheter mot varandra, en prick per mätning. Formen på punktmolnet visar om det finns ett samband.

  | Punkterna går | Sambandet är |
  |---|---|
  | Uppåt åt höger | **Positivt**, ökar den ena ökar den andra |
  | Nedåt åt höger | **Negativt**, ökar den ena minskar den andra |
  | Utan riktning, som ett moln | **Inget samband** |

  ## Starkt eller svagt

  Titta på hur **tätt** punkterna ligger kring en tänkt linje:

  - Ligger de nästan på en linje → **starkt** samband
  - Ligger de utspridda men med tydlig riktning → **svagt** samband
  - Ingen riktning alls → inget samband

  Styrkan handlar om spridningen, riktningen om lutningen. De är två skilda frågor.

  ## Regressionslinjen

  **Regressionslinjen** (trendlinjen) är den räta linje som passar punkterna bäst. Den skrivs som vanligt:

  `y = kx + m`

  Med linjen kan du göra **prognoser**: sätt in ett x och räkna ut y.

  *En regressionslinje för sambandet mellan studietimmar (x) och provpoäng (y) är `y = 2,5x + 12`. Vilket resultat väntas för någon som studerat 16 timmar?*

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Sätt in x = 16 | 2,5 · 16 + 12 | 40 + 12 |
  | Räkna ut | — | **52 poäng** |

  ## Vad k och m betyder

  I `y = 2,5x + 12`:

  - **k = 2,5** → varje extra studietimme motsvarar i genomsnitt 2,5 poäng mer
  - **m = 12** → det förväntade resultatet vid noll studietimmar

  Att kunna tolka k i uppgiftens egna ord är en vanlig fråga.

  ## Samband är inte orsak

  Att två storheter följs åt betyder **inte** att den ena orsakar den andra.

  Ett klassiskt exempel: glassförsäljning och antal drunkningsolyckor följs åt över året. Glass orsakar inte drunkningar, det finns en **tredje faktor**, varmt väder, som driver båda.

  > Frågan "kan man dra slutsatsen att X orsakar Y?" ska nästan alltid besvaras med **nej**, följt av ett förslag på vad som annars kan förklara sambandet.

exercises:
  E:
    - equation: "Spridningsdiagrammet visar ett samband. Är sambandet positivt eller negativt?"
      graf:
        typ: "punkter"
        punkter: [[1, 3], [2, 5], [3, 6], [4, 8], [5, 9], [6, 11], [7, 12]]
        xmin: 0
        xmax: 8
        ymin: 0
        ymax: 14
        ySteg: 2
      hint1: "Går punkterna uppåt eller nedåt när du läser från vänster till höger?"
      hint2: "Ökar y när x ökar är sambandet positivt."
      answer: ["Positivt", "positivt", "positiv"]
      solution: |
        Punkterna går uppåt åt höger, när x ökar ökar även y.

        Sambandet är **positivt**.

    - equation: "Spridningsdiagrammet visar ett samband. Är sambandet positivt eller negativt?"
      graf:
        typ: "punkter"
        punkter: [[1, 18], [2, 16], [3, 15], [4, 12], [5, 11], [6, 8], [7, 7]]
        xmin: 0
        xmax: 8
        ymin: 0
        ymax: 20
        ySteg: 2
      hint1: "Läs från vänster till höger, stiger eller sjunker punkterna?"
      hint2: "Minskar y när x ökar är sambandet negativt."
      answer: ["Negativt", "negativt", "negativ"]
      solution: |
        Punkterna sjunker åt höger, när x ökar minskar y.

        Sambandet är **negativt**.

    - equation: "En regressionslinje för sambandet mellan antal träningspass per månad (x) och konditionspoäng (y) är y = 1,8x + 25. Vilken konditionspoäng väntas för 20 träningspass?"
      hint1: "Sätt in x = 20 i linjens ekvation."
      hint2: "1,8 · 20 = 36. Lägg till 25."
      answer: ["61"]
      solution: |
        y = 1,8 · 20 + 25 = 36 + 25 = **61 poäng**

    - equation: "Regressionslinjen y = 1,8x + 25 beskriver sambandet mellan träningspass (x) och konditionspoäng (y). Vad betyder talet 1,8 i sammanhanget?"
      hint1: "k-värdet säger hur mycket y ändras när x ökar med 1."
      hint2: "Ett träningspass mer motsvarar hur många poäng?"
      answer: ["Ett extra träningspass ger 1,8 poäng mer", "varje träningspass ger 1,8 poäng mer", "poängen ökar med 1,8 per pass"]
      solution: |
        k-värdet visar hur mycket y ändras när x ökar med 1.

        **Varje extra träningspass motsvarar i genomsnitt 1,8 poäng mer** i kondition.

    - equation: "I en undersökning finns ett starkt positivt samband mellan antal glassar som säljs och antal drunkningsolyckor. Kan man dra slutsatsen att glassätande orsakar drunkningar? Svara ja eller nej."
      hint1: "Finns det något annat som kan påverka båda storheterna samtidigt?"
      hint2: "Tänk på årstiden. Vad händer båda när det blir varmt?"
      answer: ["nej", "Nej", "nej!"]
      solution: |
        **Nej.**

        Ett samband betyder bara att storheterna följs åt. Här finns en **tredje faktor**, varmt väder, som ökar både glassförsäljningen och antalet som badar.

        Samband är inte samma sak som orsak.

    - equation: "Två spridningsdiagram visar samma sorts samband. I det ena ligger punkterna nästan exakt på en linje, i det andra ligger de utspridda. Vilket visar det STARKASTE sambandet, det med punkterna nära linjen eller det med utspridda punkter?"
      hint1: "Styrkan handlar om hur nära punkterna ligger en tänkt linje."
      hint2: "Ju tätare kring linjen, desto starkare samband."
      answer: ["Det med punkterna nära linjen", "nära linjen", "det första", "punkterna nära linjen"]
      solution: |
        Ju **tätare** punkterna ligger kring linjen, desto starkare är sambandet.

        Diagrammet där punkterna nästan ligger på linjen visar det starkaste sambandet.

        > Riktningen (positiv/negativ) och styrkan (stark/svag) är två skilda frågor.

prev: normalfordelning
prev_lesson_title: "Normalfördelning"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Statistik"
---

## Två storheter samtidigt

Hittills har statistiken handlat om **ett** material. Nu tittar vi på **två storheter samtidigt** och frågar: hänger de ihop?

Verktyget är ett **spridningsdiagram**, en prick per mätning, med den ena storheten på x-axeln och den andra på y-axeln.

Sambandet mellan två storheter kallas **korrelation**. Att beskriva en korrelation är att svara på två frågor: åt vilket håll den går och hur stark den är. Det är precis de två nästa avsnitten.

## Riktning: positivt eller negativt

| Punktmolnet | Sambandet |
|---|---|
| Går uppåt åt höger | **Positivt** |
| Går nedåt åt höger | **Negativt** |
| Ingen tydlig riktning | Inget samband |

Positivt betyder att storheterna ökar tillsammans. Negativt att den ena minskar när den andra ökar.

## Styrka: starkt eller svagt

Styrkan handlar om hur **tätt** punkterna ligger kring en tänkt linje:

- Nästan på linjen → starkt samband
- Tydlig riktning men stor spridning → svagt samband

**Riktning och styrka är två olika frågor.** Ett samband kan vara negativt och starkt, eller positivt och svagt.

## Regressionslinjen

Den räta linje som bäst följer punkterna kallas **regressionslinje** eller trendlinje. Den skrivs `y = kx + m`, precis som alla räta linjer.

Med linjen kan du **göra en prognos**: sätt in ett x-värde och räkna ut y.

`y = 2,5x + 12` vid x = 16 → `2,5 · 16 + 12 = 52`

## Tolka k och m

Det räcker inte att räkna, du ska kunna säga vad talen **betyder i sammanhanget**:

- **k** = hur mycket y ändras när x ökar med **1**
- **m** = värdet på y när x är 0

För `y = 2,5x + 12` mellan studietimmar och poäng: *"Varje extra studietimme motsvarar i genomsnitt 2,5 poäng mer."*

## Prognoser har gränser

En regressionslinje bygger på de mätningar som gjorts. Använder du den långt utanför det området blir prognosen opålitlig, sambandet behöver inte fortsätta gälla där.

## Samband är inte orsak

Det viktigaste begreppet i hela momentet.

Att två storheter följs åt betyder **inte** att den ena orsakar den andra. Det kan finnas en **tredje faktor** som påverkar båda, eller vara en ren tillfällighet.

> Glassförsäljning och drunkningsolyckor följs åt, men glass orsakar inte drunkningar. Varmt väder driver båda.

Frågan *"kan man dra slutsatsen att X orsakar Y?"* besvaras därför nästan alltid med **nej**, plus ett förslag på vad som annars kan förklara sambandet. Det är själva svaret som ger poäng.
