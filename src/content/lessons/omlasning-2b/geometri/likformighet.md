---
slug: "omlasning-2b/geometri/likformighet"
title: "Likformighet"
course: omlasning-2b
moment: geometri
moment_title: "Geometri"
lesson_number: 2
lesson_total: 6

success_criteria:
  - Förklara vad som gör två figurer likformiga
  - Hitta skalfaktorn mellan två likformiga figurer
  - Räkna ut en okänd sida med hjälp av proportioner
  - Para ihop rätt sida med rätt sida innan du ställer upp

bank:
  - question: "Två likformiga trianglar: en sida 4 cm motsvarar 12 cm i den större. Vad är skalfaktorn?"
    answer: ["3"]
    solution: |
      Skalfaktorn är hur många gånger större den nya sidan är.
      Dela den större sidan med den mindre: 12 / 4 = **3**
  - question: "Vad gäller alltid för vinklarna i två likformiga figurer?"
    answer: ["De är lika stora", "lika stora", "de är parvis lika stora"]
    solution: |
      Likformighet betyder samma form men olika storlek.
      Formen sitter i vinklarna, så de är **parvis lika stora** — bara sidorna ändras.
  - question: "Skalfaktorn är 2,5. En sida är 6 cm i den mindre figuren. Hur lång är motsvarande sida i den större?"
    answer: ["15", "15 cm"]
    solution: |
      Multiplicera sidan i den mindre figuren med skalfaktorn.
      6 · 2,5 = **15 cm**
  - question: "Ändras vinklarna när en figur förstoras?"
    answer: ["nej", "Nej", "nej!"]
    solution: |
      En förstoring ändrar bara storleken, inte formen.
      Vinklarna är därför precis lika stora: **nej**

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Vad likformighet betyder

  Två figurer är **likformiga** om den ena är en förstoring eller förminskning av den andra.

  | Det som ändras | Det som INTE ändras |
  |---|---|
  | Alla sidor, med samma faktor | Alla vinklar |

  Det är därför man kan avgöra likformighet genom att jämföra vinklarna: **har två trianglar samma vinklar är de likformiga.**

  ## Skalfaktorn

  Skalfaktorn talar om hur mycket större den ena figuren är.

  En sida på 4 cm motsvaras av 12 cm i den större figuren:

  `skalfaktor = 12 / 4` = **3**

  Alla andra sidor följer samma faktor. Är en annan sida 5 cm i den mindre är den `5 · 3 = 15 cm` i den större.

  ## Räkna ut en okänd sida

  *Två likformiga trianglar. I den mindre är sidorna 6 cm och 9 cm. Den sida som motsvarar 6 cm är 15 cm i den större. Hur lång är den sida som motsvarar 9 cm?*

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Skalfaktor | 15 / 6 | 2,5 |
  | Andra sidan | 9 · 2,5 | **22,5 cm** |

  Alternativt med proportion:

  `x / 9 = 15 / 6` → `x = 9 · 15 / 6 = 22,5`

  ## Para ihop rätt sidor

  Det svåra är inte räkningen, det är att veta **vilken sida som hör ihop med vilken**.

  Tumregel: den **kortaste** sidan i den ena figuren motsvarar den **kortaste** i den andra, den längsta motsvarar den längsta.

  Är figurerna vridna hjälper det att skriva upp sidorna i storleksordning under varandra innan du ställer upp proportionen.

  > **Kontroll:** räkna ut skalfaktorn med två olika sidpar. Får du samma faktor har du parat ihop rätt.

exercises:
  E:
    - equation: "Två likformiga trianglar. En sida är 5 cm i den mindre och motsvaras av 20 cm i den större. Vad är skalfaktorn?"
      hint1: "Skalfaktorn är den större sidan delat med den mindre."
      hint2: "20 / 5."
      answer: ["4"]
      solution: |
        20 / 5 = **4**

    - equation: "Två likformiga figurer har skalfaktorn 3. En sida är 7 cm i den mindre figuren. Hur lång är motsvarande sida i den större? Svara i cm."
      hint1: "Multiplicera med skalfaktorn."
      hint2: "7 · 3."
      answer: ["21", "21 cm"]
      solution: |
        7 · 3 = **21 cm**

    - equation: "Två likformiga trianglar. I den mindre är sidorna 4 cm och 6 cm. Sidan som motsvarar 4 cm är 10 cm i den större. Hur lång är den sida som motsvarar 6 cm? Svara i cm."
      hint1: "Räkna först ut skalfaktorn med det sidpar du känner."
      hint2: "Skalfaktorn är 10 / 4 = 2,5. Multiplicera 6 med den."
      answer: ["15", "15 cm"]
      solution: |
        Skalfaktor: 10 / 4 = 2,5

        6 · 2,5 = **15 cm**

    - equation: "Två likformiga trianglar. I den större är sidorna 18 cm och 24 cm. Sidan som motsvarar 18 cm är 6 cm i den mindre. Hur lång är den sida som motsvarar 24 cm? Svara i cm."
      hint1: "Här går du från större till mindre. Dela i stället för att multiplicera."
      hint2: "18 / 6 = 3, så den större är 3 gånger så stor. Dela 24 med 3."
      answer: ["8", "8 cm"]
      solution: |
        Faktorn mellan figurerna: 18 / 6 = 3

        24 / 3 = **8 cm**

    - equation: "En 1,7 m hög person kastar en 2,0 m lång skugga. Samtidigt kastar en flaggstång en 14 m lång skugga. Hur hög är flaggstången? Svara i meter."
      hint1: "Person och flaggstång bildar likformiga trianglar med sina skuggor."
      hint2: "Ställ upp: höjd/skugga är lika för båda. x / 14 = 1,7 / 2,0."
      answer: ["11,9", "11.9", "11,9 m"]
      solution: |
        Trianglarna är likformiga, så förhållandet höjd/skugga är detsamma:

        x / 14 = 1,7 / 2,0
        x = 14 · 0,85 = **11,9 m**

    - equation: "Två trianglar har vinklarna 40°, 60° och 80° respektive 40°, 60° och 80°. Är de likformiga? Svara ja eller nej."
      hint1: "Vad krävs för att två trianglar ska vara likformiga?"
      hint2: "Samma vinklar räcker, sidorna behöver inte vara kända."
      answer: ["ja", "Ja", "ja!"]
      solution: |
        **Ja.** Två trianglar med parvis lika stora vinklar är alltid likformiga.

        Den ena är en förstoring av den andra, oavsett hur långa sidorna är.

prev: vinklar
prev_lesson_title: "Vinklar"
next: topptriangel-och-transversalsatsen
next_lesson_title: "Topptriangel- och transversalsatsen"
---

## Samma form, olika storlek

Två figurer är **likformiga** när den ena är en förstoring eller förminskning av den andra.

- **Vinklarna** är parvis lika stora, de ändras aldrig
- **Sidorna** är förstorade med samma faktor

Det är hela definitionen, och den ger två användbara slutsatser:

1. Har två trianglar **samma vinklar** är de likformiga
2. Är två figurer likformiga är **alla** sidförhållanden desamma

## Skalfaktorn

Skalfaktorn är hur många gånger större den ena figuren är:

`skalfaktor = sida i större figuren / motsvarande sida i mindre`

Är en sida 4 cm och motsvarande sida 12 cm är faktorn 3. **Alla** sidor är då tre gånger så långa.

## Två sätt att räkna

**Med skalfaktor:**
1. Räkna ut faktorn med det sidpar du känner
2. Multiplicera (eller dela) den okända sidan med faktorn

**Med proportion:**

`x / 9 = 15 / 6`

Multiplicera korsvis och lös ut x. Samma sak, annan uppställning, välj den du tycker är tydligast.

## Det svåra: para ihop rätt sidor

Räkningen är enkel. Felet uppstår nästan alltid när fel sidor paras ihop, särskilt om figurerna är vridna eller spegelvända.

**Metod:** skriv sidorna i storleksordning för varje figur och ställ dem under varandra. Kortast mot kortast, längst mot längst.

> **Kontroll:** räkna ut skalfaktorn med **två olika** sidpar. Blir det samma faktor har du parat rätt. Blir det olika har du blandat ihop sidorna.

## Skuggor och höjder: den klassiska tillämpningen

En person och en flaggstång som står i samma solljus bildar två likformiga trianglar tillsammans med sina skuggor. Solstrålarna kommer i samma vinkel, alltså är trianglarna likformiga.

`höjd / skugga` är då lika för båda, och den okända höjden går att räkna ut.

Samma idé används för att mäta träd, hus och allt annat som är obekvämt att klättra på.
