---
slug: "omlasning-2b/geometri/vinklar"
title: "Vinklar"
course: omlasning-2b
moment: geometri
moment_title: "Geometri"
lesson_number: 1
lesson_total: 6

success_criteria:
  - Använda vinkelsumman i en triangel (180°) och i en fyrhörning (360°)
  - Räkna med sidovinklar som tillsammans blir 180°
  - Använda att vertikalvinklar är lika stora
  - Bestämma vinklar vid parallella linjer

bank:
  - question: "Två vinklar i en triangel är 52° och 71°. Hur stor är den tredje?"
    answer: ["57", "57°"]
  - question: "Vad är vinkelsumman i en fyrhörning?"
    answer: ["360", "360°"]
  - question: "En vinkel är 118°. Hur stor är dess sidovinkel?"
    answer: ["62", "62°"]
  - question: "Två linjer skär varandra. En av vinklarna är 74°. Hur stor är vertikalvinkeln?"
    answer: ["74", "74°"]

how_to:
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Börja med kom-igång-frågorna, de repeterar förra området
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## 1. Vinkelsumman i en triangel

  Vinklarna i en triangel är alltid **180°** tillsammans.

  Är två vinklar 52° och 38°:

  `180 − 52 − 38` = **90°**

  ## 2. Sidovinklar

  Två vinklar som tillsammans bildar en rak linje kallas **sidovinklar** och blir **180°**.

  Är den ena 118° är den andra `180 − 118` = **62°**.

  ## 3. Vertikalvinklar

  När två linjer skär varandra bildas fyra vinklar. De som ligger **mitt emot varandra** är lika stora, de kallas vertikalvinklar.

  Är en vinkel 74° är vinkeln mitt emot också **74°**, och de två andra `180 − 74 = 106°`.

  ## 4. Parallella linjer

  När en linje skär två **parallella** linjer upprepas vinklarna:

  | Läge | Regel |
  |---|---|
  | Samma sida, samma riktning (likbelägna) | **Lika stora** |
  | Diagonalt mellan linjerna (alternatvinklar) | **Lika stora** |
  | På samma sida, inuti | Tillsammans **180°** |

  Praktiskt: vid parallella linjer finns bara **två** vinkelstorlekar, och de är sidovinklar till varandra. Har du hittat en har du alla.

  ## 5. Fyrhörningar

  Vinkelsumman i en fyrhörning är **360°**. Det följer av att varje fyrhörning kan delas i två trianglar: `2 · 180 = 360`.

  Är tre vinklar 95°, 100° och 85°:

  `360 − 95 − 100 − 85` = **80°**

exercises:
  E:
    - equation: "I triangeln är två vinklar 52° och 38°. Bestäm vinkeln v."
      graf:
        typ: "figur"
        figur:
          vy: [-0.6, -0.6, 6.6, 4.6]
          polygon: [[0, 0], [6, 0], [2, 4]]
          punkter:
            - p: [0, 0]
              namn: "A"
              plats: "vanster"
            - p: [6, 0]
              namn: "B"
              plats: "hoger"
            - p: [2, 4]
              namn: "C"
              plats: "over"
          vinklar:
            - vid: [0, 0]
              fran: [6, 0]
              till: [2, 4]
              text: "52°"
            - vid: [6, 0]
              fran: [2, 4]
              till: [0, 0]
              text: "38°"
            - vid: [2, 4]
              fran: [0, 0]
              till: [6, 0]
              text: "v"
      hint1: "Vinkelsumman i en triangel är 180°."
      hint2: "Dra bort de två kända vinklarna från 180."
      answer: ["90", "90°"]
      solution: |
        180 − 52 − 38 = **90°**

        Triangeln är alltså rätvinklig.

    - equation: "Två vinklar i en triangel är 64° och 47°. Bestäm den tredje vinkeln."
      hint1: "Summan av alla tre är 180°."
      hint2: "180 − 64 − 47."
      answer: ["69", "69°"]
      solution: |
        180 − 64 − 47 = **69°**

    - equation: "En vinkel är 133°. Hur stor är dess sidovinkel?"
      hint1: "Sidovinklar bildar tillsammans en rak linje."
      hint2: "En rak linje är 180°."
      answer: ["47", "47°"]
      solution: |
        180 − 133 = **47°**

    - equation: "Två linjer skär varandra. En av vinklarna är 58°. Hur stor är vinkeln mitt emot?"
      hint1: "Vinklar mitt emot varandra kallas vertikalvinklar."
      hint2: "Vertikalvinklar är alltid lika stora."
      answer: ["58", "58°"]
      solution: |
        Vertikalvinklar är lika stora.

        Vinkeln mitt emot är **58°**.

    - equation: "I en fyrhörning är tre av vinklarna 95°, 100° och 85°. Bestäm den fjärde."
      hint1: "Vinkelsumman i en fyrhörning är 360°."
      hint2: "360 − 95 − 100 − 85."
      answer: ["80", "80°"]
      solution: |
        360 − 95 − 100 − 85 = **80°**

    - equation: "En triangel är likbent och de två lika vinklarna är 65° var. Bestäm den tredje vinkeln."
      hint1: "Två vinklar är 65° var. Hur mycket är det tillsammans?"
      hint2: "180 − 65 − 65."
      answer: ["50", "50°"]
      solution: |
        De två lika vinklarna: 65 + 65 = 130

        180 − 130 = **50°**

prev: statistik/redo-att-tenta
prev_lesson_title: "Redo att tenta? — Statistik"
next: likformighet
next_lesson_title: "Likformighet"
---

## Fyra regler som räcker långt

| Regel | Innebörd |
|---|---|
| Vinkelsumma i triangel | **180°** |
| Vinkelsumma i fyrhörning | **360°** |
| Sidovinklar | Tillsammans **180°** |
| Vertikalvinklar | **Lika stora** |

Nästan alla vinkeluppgifter i Ma2b löses med de här fyra, en i taget.

## Triangeln: 180°

Känner du två vinklar får du den tredje genom subtraktion:

`180 − 52 − 38 = 90°`

Är triangeln **likbent** är två vinklar lika stora. Är den **liksidig** är alla tre 60°.

## Sidovinklar och vertikalvinklar

En **rak linje** är 180°. Två vinklar som tillsammans bildar en rak linje är därför tillsammans 180°, det är sidovinklar.

När två linjer **skär varandra** bildas fyra vinklar:

- De mitt emot varandra (**vertikalvinklar**) är lika stora
- De som ligger intill varandra är sidovinklar, alltså 180° tillsammans

Har du en enda av de fyra vinklarna kan du räkna ut alla.

## Parallella linjer

En linje som skär två parallella linjer ger bara **två olika vinkelstorlekar**, och de är sidovinklar till varandra.

Det betyder i praktiken: hittar du en vinkel vet du alla, de är antingen lika stora som den, eller 180° minus den.

## Fyrhörningen: 360°

Varje fyrhörning kan delas i två trianglar med en diagonal. Alltså `2 · 180 = 360°`.

Samma idé ger vinkelsumman i vilken månghörning som helst: en femhörning delas i tre trianglar → 540°.

## Så redovisar du

Skriv ut vilken regel du använder:

> *Vinkelsumman i triangeln är 180°, alltså v = 180 − 52 − 38 = 90°.*

Bedömningen ger poäng för metoden. Ett ensamt tal utan motivering tappar den poängen även om svaret är rätt.
