---
slug: "omlasning-2b/geometri/randvinkelsatsen"
title: "Randvinkelsatsen"
course: omlasning-2b
moment: geometri
moment_title: "Geometri"
lesson_number: 4
lesson_total: 6

success_criteria:
  - Skilja på randvinkel och medelpunktsvinkel
  - Använda att randvinkeln är hälften så stor som medelpunktsvinkeln på samma båge
  - Veta att alla randvinklar på samma båge är lika stora
  - Använda att en randvinkel på en diameter är 90°

bank:
  - question: "En medelpunktsvinkel är 80°. Hur stor är randvinkeln på samma båge?"
    answer: ["40", "40°"]
    solution: |
      Randvinkelsatsen: randvinkeln är hälften så stor som medelpunktsvinkeln på samma båge.
      80 / 2 = **40°**
  - question: "En randvinkel är 25°. Hur stor är medelpunktsvinkeln på samma båge?"
    answer: ["50", "50°"]
    solution: |
      Samma sats åt andra hållet: medelpunktsvinkeln är dubbelt så stor.
      25 · 2 = **50°**
  - question: "Hur stor är en randvinkel som står på en diameter?"
    answer: ["90", "90°"]
    solution: |
      En diameter svarar mot en medelpunktsvinkel på 180°.
      Randvinkeln är hälften: 180 / 2 = **90°**
  - question: "Två randvinklar står på samma båge. Vad gäller om deras storlek?"
    answer: ["De är lika stora", "lika stora", "de är lika"]
    solution: |
      Båda är hälften av samma medelpunktsvinkel.
      Därför är de **lika stora**, oavsett var på cirkeln de ligger.

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Håll koll på vilken vinkel som har spetsen i medelpunkten
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Två sorters vinklar i en cirkel

  | Vinkel | Var spetsen sitter |
  |---|---|
  | **Medelpunktsvinkel** | I cirkelns **medelpunkt** |
  | **Randvinkel** | På cirkelns **rand** (kanten) |

  Båda "vilar" på samma två punkter på cirkeln, de spänner över samma **båge**.

  ## Satsen

  **Randvinkeln är hälften så stor som medelpunktsvinkeln på samma båge.**

  `randvinkel = medelpunktsvinkel / 2`

  Eller åt andra hållet: `medelpunktsvinkel = 2 · randvinkel`

  ## Räkneexempel

  *Randvinkeln vid C är 35°. Hur stor är medelpunktsvinkeln vid M på samma båge AB?*

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Medelpunktsvinkeln är dubbelt så stor | 2 · 35 | **70°** |

  Och tvärtom: är medelpunktsvinkeln 120° är randvinkeln `120 / 2 = 60°`.

  ## Alla randvinklar på samma båge är lika

  Flyttar du randvinkelns spets längs cirkelns kant, men behåller samma båge, förblir vinkeln **exakt lika stor**.

  Det följer direkt av satsen: alla är hälften av samma medelpunktsvinkel.

  ## Randvinkel på en diameter är 90°

  Är bågen en **halv cirkel** är medelpunktsvinkeln 180° (en rak linje genom mitten).

  Randvinkeln blir då `180 / 2` = **90°**.

  Med andra ord: en triangel där ena sidan är cirkelns diameter och tredje hörnet ligger på cirkeln är **alltid rätvinklig**. Det är ett specialfall värt att känna igen direkt.

exercises:
  E:
    - equation: "Randvinkeln vid C är 35°. Bestäm medelpunktsvinkeln v vid M."
      graf:
        typ: "figur"
        figur:
          vy: [-3.4, -3.4, 3.4, 3.4]
          cirklar:
            - c: [0, 0]
              r: 3
          linjer:
            - fran: [-2.6, -1.5]
              till: [0, 3]
            - fran: [2.6, -1.5]
              till: [0, 3]
            - fran: [-2.6, -1.5]
              till: [0, 0]
            - fran: [2.6, -1.5]
              till: [0, 0]
          punkter:
            - p: [0, 0]
              namn: "M"
              plats: "over"
            - p: [0, 3]
              namn: "C"
              plats: "over"
            - p: [-2.6, -1.5]
              namn: "A"
              plats: "vanster"
            - p: [2.6, -1.5]
              namn: "B"
              plats: "hoger"
          vinklar:
            - vid: [0, 3]
              fran: [-2.6, -1.5]
              till: [2.6, -1.5]
              text: "35°"
            - vid: [0, 0]
              fran: [-2.6, -1.5]
              till: [2.6, -1.5]
              text: "v"
      hint1: "Medelpunktsvinkeln är dubbelt så stor som randvinkeln på samma båge."
      hint2: "2 · 35."
      answer: ["70", "70°"]
      solution: |
        Medelpunktsvinkeln är dubbelt så stor som randvinkeln:

        v = 2 · 35 = **70°**

    - equation: "En medelpunktsvinkel är 96°. Hur stor är randvinkeln på samma båge?"
      hint1: "Randvinkeln är hälften av medelpunktsvinkeln."
      hint2: "96 / 2."
      answer: ["48", "48°"]
      solution: |
        96 / 2 = **48°**

    - equation: "En randvinkel är 52°. Hur stor är medelpunktsvinkeln på samma båge?"
      hint1: "Åt det här hållet multiplicerar du med 2."
      hint2: "2 · 52."
      answer: ["104", "104°"]
      solution: |
        2 · 52 = **104°**

    - equation: "I en cirkel står två randvinklar på samma båge. Den ena är 41°. Hur stor är den andra?"
      hint1: "Vad gäller för alla randvinklar som står på samma båge?"
      hint2: "De är hälften av samma medelpunktsvinkel."
      answer: ["41", "41°"]
      solution: |
        Alla randvinklar på samma båge är lika stora, de är hälften av samma medelpunktsvinkel.

        Den andra är också **41°**.

    - equation: "En triangel är inskriven i en cirkel så att en av sidorna är cirkelns diameter. Hur stor är vinkeln vid det hörn som ligger på cirkeln?"
      hint1: "Hur stor är medelpunktsvinkeln när bågen är en halv cirkel?"
      hint2: "Medelpunktsvinkeln är 180°. Randvinkeln är hälften."
      answer: ["90", "90°"]
      solution: |
        En diameter ger medelpunktsvinkeln 180° (en rak linje).

        Randvinkeln blir 180 / 2 = **90°**

        Triangeln är alltså alltid rätvinklig.

    - equation: "En medelpunktsvinkel är 150°. Randvinkeln på samma båge kallas v. Bestäm v."
      hint1: "Randvinkeln är hälften."
      hint2: "150 / 2."
      answer: ["75", "75°"]
      solution: |
        150 / 2 = **75°**

prev: topptriangel-och-transversalsatsen
prev_lesson_title: "Topptriangel- och transversalsatsen"
next: kordasatsen
next_lesson_title: "Kordasatsen"
---

## Två vinklar över samma båge

I en cirkel kan man mäta en vinkel som spänner över två punkter på randen, från två olika ställen:

- **Medelpunktsvinkeln** har spetsen i cirkelns **mittpunkt**
- **Randvinkeln** har spetsen på cirkelns **kant**

Båda "tittar på" samma bit av cirkeln, samma **båge**.

## Satsen

**Randvinkeln är hälften så stor som medelpunktsvinkeln på samma båge.**

| Du känner | Du räknar |
|---|---|
| Medelpunktsvinkeln | Dela med 2 → randvinkeln |
| Randvinkeln | Multiplicera med 2 → medelpunktsvinkeln |

Det är hela satsen. Svårigheten är bara att hålla reda på **vilken vinkel som är vilken**.

> **Så avgör du:** titta var vinkelns spets sitter. I mitten av cirkeln = medelpunktsvinkel (den stora). På kanten = randvinkel (den lilla, hälften så stor).

## Alla randvinklar på samma båge är lika stora

Spelar det någon roll var på cirkelranden randvinkelns spets sitter? Nej, så länge den spänner över samma båge är vinkeln lika stor.

Det följer direkt av satsen: alla sådana randvinklar är hälften av **samma** medelpunktsvinkel, alltså lika stora sinsemellan.

Det är användbart i uppgifter där flera vinklar är utritade: hittar du en har du alla på den bågen.

## Specialfallet: randvinkel på en diameter

Är bågen en **halv cirkel** blir medelpunktsvinkeln 180°, den är ju en rak linje genom mitten.

Randvinkeln blir då `180 / 2 = 90°`.

**En triangel där ena sidan är en diameter och tredje hörnet ligger på cirkeln är alltid rätvinklig.** Det här specialfallet dyker upp ofta, och det är värt att känna igen direkt: ser du en diameter och ett hörn på cirkeln vet du att vinkeln är 90° utan att räkna.

## Redovisning

Skriv ut vilken sats du använder:

> *Enligt randvinkelsatsen är medelpunktsvinkeln dubbelt så stor som randvinkeln: v = 2 · 35 = 70°.*
