---
slug: "omlasning-2b/geometri/redo-att-tenta"
title: "Redo att tenta? — Geometri"
course: omlasning-2b
moment: geometri
moment_title: "Geometri"
lesson_number: 7
lesson_total: 7

success_criteria:
  - Klara blandade uppgifter från alla sex delmoment, utan att titta i lösningarna
  - Välja rätt sats till rätt figur, utan att någon säger vilken
  - Veta vilket delmoment du behöver träna mer på om något skaver

how_to:
  - Gör alla uppgifter nedan UTAN att öppna lösningarna
  - Rätta dig själv efteråt
  - Allt rätt? Området sitter, kör generalrepetitionen för Del 2
  - Något fel? Lösningen visar vilket delmoment som tränar just det, gå dit, träna, kom tillbaka

worked_example: |
  ## Att välja rätt sats

  På provet står det inte vilken sats som gäller. Så här känner du igen dem:

  | Figuren innehåller | Sats |
  |---|---|
  | Triangel med kända vinklar | Vinkelsumma 180° |
  | Två figurer med samma form | Likformighet |
  | Parallell linje inuti en triangel | Topptriangel-/transversalsatsen |
  | Cirkel med vinkel i mitten och på randen | Randvinkelsatsen |
  | Två kordor som skär varandra | Kordasatsen |
  | Punkter med koordinater | Avståndsformeln |

  ## Checklista inför Del 2

  1. **Räkna ut hela sidor** (addera delsträckor) innan du använder topptriangelsatsen.
  2. **Randvinkeln är den lilla**: hälften av medelpunktsvinkeln.
  3. **Kordasatsen gäller inom varje korda**: de två bitarna av samma korda.
  4. **Avståndsformeln** är Pythagoras: kvadrera skillnaderna, addera, dra roten.
  5. **Skriv ut satsen du använder.** Uppställningen ger poäng.

exercises:
  E:
    - equation: "Två vinklar i en triangel är 47° och 68°. Bestäm den tredje."
      hint1: "Vinkelsumman är 180°."
      answer: ["65", "65°"]
      solution: |
        180 − 47 − 68 = **65°**
        → Tränas i delmoment 1: **Vinklar**

    - equation: "En vinkel är 126°. Hur stor är dess sidovinkel?"
      hint1: "Sidovinklar bildar tillsammans en rak linje."
      answer: ["54", "54°"]
      solution: |
        180 − 126 = **54°**
        → Tränas i delmoment 1: **Vinklar**

    - equation: "Två likformiga trianglar. En sida är 6 cm i den mindre och 24 cm i den större. En annan sida är 9 cm i den mindre. Hur lång är motsvarande sida i den större? Svara i cm."
      hint1: "Räkna först ut skalfaktorn: 24 / 6."
      answer: ["36", "36 cm"]
      solution: |
        Skalfaktor: 24 / 6 = 4

        9 · 4 = **36 cm**
        → Tränas i delmoment 2: **Likformighet**

    - equation: "I triangeln är DE parallell med AC. BE = 8, EC = 2 och DE = 6. Bestäm AC."
      graf:
        typ: "figur"
        figur:
          vy: [-0.6, -0.6, 6.6, 5.4]
          polygon: [[0, 0], [6, 0], [3, 5]]
          linjer:
            - fran: [0.6, 1]
              till: [5.4, 1]
          punkter:
            - p: [0, 0]
              namn: "A"
              plats: "vanster"
            - p: [6, 0]
              namn: "C"
              plats: "hoger"
            - p: [3, 5]
              namn: "B"
              plats: "over"
            - p: [0.6, 1]
              namn: "D"
              plats: "vanster"
            - p: [5.4, 1]
              namn: "E"
              plats: "hoger"
          matt:
            - fran: [3, 5]
              till: [5.4, 1]
              text: "8"
              sida: -1
            - fran: [0.6, 1]
              till: [5.4, 1]
              text: "6"
            - fran: [5.4, 1]
              till: [6, 0]
              text: "2"
              sida: -1
      hint1: "Räkna ut hela sidan BC först: 8 + 2."
      answer: ["7,5", "7.5"]
      solution: |
        BC = 8 + 2 = 10

        DE / AC = BE / BC
        6 / AC = 8 / 10
        8 · AC = 60
        **AC = 7,5**
        → Tränas i delmoment 3: **Topptriangel-, transversal- och bisektrissatsen**

    - equation: "I en triangel är DE parallell med AC. BD = 3, DA = 9 och BE = 4. Bestäm EC med transversalsatsen."
      hint1: "Transversalsatsen jämför delsträckorna: BD/DA = BE/EC."
      answer: ["12"]
      solution: |
        3 / 9 = 4 / EC
        3 · EC = 36
        **EC = 12**
        → Tränas i delmoment 3: **Topptriangel-, transversal- och bisektrissatsen**

    - equation: "En medelpunktsvinkel är 130°. Hur stor är randvinkeln på samma båge?"
      hint1: "Randvinkeln är hälften av medelpunktsvinkeln."
      answer: ["65", "65°"]
      solution: |
        130 / 2 = **65°**
        → Tränas i delmoment 4: **Randvinkelsatsen**

    - equation: "En randvinkel är 38°. Bestäm medelpunktsvinkeln på samma båge."
      hint1: "Åt det här hållet multiplicerar du med 2."
      answer: ["76", "76°"]
      solution: |
        2 · 38 = **76°**
        → Tränas i delmoment 4: **Randvinkelsatsen**

    - equation: "En triangel är inskriven i en cirkel så att en sida är cirkelns diameter. Hur stor är vinkeln vid hörnet på cirkeln?"
      hint1: "Medelpunktsvinkeln är 180° när bågen är en halv cirkel."
      answer: ["90", "90°"]
      solution: |
        180 / 2 = **90°**, triangeln är alltid rätvinklig.
        → Tränas i delmoment 4: **Randvinkelsatsen**

    - equation: "Två kordor skär varandra. Den ena delas i 8 och 3, den andra i 6 och x. Bestäm x."
      hint1: "Kordasatsen: 8 · 3 = 6 · x."
      answer: ["4"]
      solution: |
        8 · 3 = 6 · x
        24 = 6x
        **x = 4**
        → Tränas i delmoment 5: **Kordasatsen**

    - equation: "Två kordor skär varandra. Den ena delas i 9 och 4, den andra i 12 och x. Bestäm x."
      hint1: "9 · 4 = 12 · x."
      answer: ["3"]
      solution: |
        36 = 12x
        **x = 3**
        → Tränas i delmoment 5: **Kordasatsen**

    - equation: "Bestäm avståndet mellan punkterna (3, 2) och (9, 10)."
      hint1: "Skillnaderna är 6 och 8."
      answer: ["10"]
      solution: |
        √(6² + 8²) = √100 = **10**
        → Tränas i delmoment 6: **Koordinatgeometri**

    - equation: "Bestäm mittpunkten mellan (1, 4) och (7, 12). Svara på formen (x, y)."
      hint1: "Medelvärdet av x-koordinaterna och av y-koordinaterna."
      answer: ["(4, 8)", "4, 8", "(4,8)"]
      solution: |
        x: (1 + 7) / 2 = 4
        y: (4 + 12) / 2 = 8

        **(4, 8)**
        → Tränas i delmoment 6: **Koordinatgeometri**

prev: koordinatgeometri
prev_lesson_title: "Koordinatgeometri"
next: del-2/generalrepetition
next_lesson_title: "Generalrepetition — Del 2"
---

## Tolv uppgifter, blandat från hela området

Uppgifterna kommer i **oordning** och ingen rubrik talar om vilken sats som gäller. Att känna igen figuren och välja rätt sats är en stor del av det som testas.

Gör alla tolv först. Rätta sedan.

## Så tolkar du resultatet

| Så gick det | Vad du gör |
|---|---|
| Allt rätt | Området sitter. Kör generalrepetitionen för Del 2. |
| 1–3 fel | Läs vilket delmoment lösningen pekar på, träna det, gör om sidan. |
| 4 eller fler fel | Gå tillbaka och träna om området i lugn takt. |

## Det som brukar skava

- **Delsträcka används som hel sida** i topptriangelsatsen. Addera delarna först.
- **Randvinkel och medelpunktsvinkel förväxlas.** Randvinkeln har spetsen på kanten och är den mindre.
- **Kordasatsen paras fel.** De två bitarna av *samma* korda multipliceras.
- **Avståndsformeln:** glöm inte att kvadrera *båda* skillnaderna innan du adderar.

## Efter den här sidan

Del 2 testar det här området tillsammans med **Logaritmer och exponentialekvationer** och **Statistik**. När alla tre pre-testen sitter gör du **generalrepetitionen för Del 2**.
