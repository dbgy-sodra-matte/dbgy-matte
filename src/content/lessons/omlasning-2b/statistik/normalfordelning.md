---
slug: "omlasning-2b/statistik/normalfordelning"
title: "Normalfördelning"
course: omlasning-2b
moment: statistik
moment_title: "Statistik"
lesson_number: 3
lesson_total: 4

success_criteria:
  - Känna igen normalfördelningskurvans form och vad medelvärde och standardavvikelse betyder i den
  - Använda 68-95-99,7-regeln för att bestämma andelar
  - Räkna ut hur många standardavvikelser ett värde ligger från medelvärdet
  - Räkna om en andel till ett antal

bank:
  - question: "Hur många procent av värdena ligger inom en standardavvikelse från medelvärdet?"
    answer: ["68 %", "68", "68%"]
  - question: "Hur många procent ligger inom två standardavvikelser?"
    answer: ["95 %", "95", "95%"]
  - question: "Vad avgör hur bred en normalfördelningskurva är?"
    answer: ["Standardavvikelsen", "standardavvikelse", "spridningen"]
  - question: "Medelvärdet är 50 och standardavvikelsen 4. Hur många standardavvikelser från medel ligger värdet 58?"
    answer: ["2"]

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Rita alltid en skiss av kurvan när du löser en uppgift, det ger poäng på provet
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## 1. Kurvan och de två talen

  En normalfördelning beskrivs av två tal:

  - **Medelvärdet**: var toppen ligger
  - **Standardavvikelsen (σ)**: hur bred kurvan är

  Två kurvor med samma topp men olika bredd har **samma medelvärde men olika standardavvikelse**. Två lika breda kurvor som ligger på olika ställen har **samma standardavvikelse men olika medelvärde**.

  ## 2. Regeln du behöver kunna utantill

  | Inom | Andel av värdena |
  |---|---|
  | ± 1 standardavvikelse | **68 %** |
  | ± 2 standardavvikelser | **95 %** |
  | ± 3 standardavvikelser | **99,7 %** |

  Eftersom kurvan är **symmetrisk** kan du dela upp resten:

  - Utanför ± 2σ ligger 100 − 95 = 5 %
  - Hälften på varje sida → **2,5 % under** och 2,5 % över

  (Med exakta värden blir det 2,3 %, men 2,5 % är fullgott på E-nivå, visa hur du tänkt.)

  ## 3. Hur många standardavvikelser bort?

  *En maskin fyller påsar. Vikten är normalfördelad med medelvärdet 500 g och standardavvikelsen 5 g. Hur många procent väger mindre än 490 g?*

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Hur långt från medel? | 500 − 490 | 10 g |
  | Hur många σ är det? | 10 / 5 | **2 standardavvikelser** |
  | Inom ± 2σ ligger 95 % | 100 − 95 | 5 % utanför |
  | Symmetriskt, halva åt varje håll | 5 / 2 | **2,5 % väger mindre än 490 g** |

  ## 4. Från andel till antal

  Tillverkas 4 000 påsar per dag:

  `0,025 · 4 000` = **100 påsar**

  Skriv alltid ut svaret i klartext: *"Ungefär 100 påsar per dag väger mindre än 490 g."*

  ## 5. Rita alltid en skiss

  En enkel klockkurva med medelvärdet i mitten, strecken vid ±1σ och ±2σ och det efterfrågade området skuggat. Skissen ger poäng på provet, och den gör det nästan omöjligt att svara åt fel håll.

exercises:
  E:
    - equation: "Kurvan visar en normalfördelning med medelvärdet 50 och standardavvikelsen 5. Hur många procent av värdena ligger mellan 45 och 55?"
      graf:
        typ: "normalfordelning"
        medel: 50
        sigma: 5
        markeraMellan: [45, 55]
      hint1: "Hur många standardavvikelser är 45 och 55 från medelvärdet 50?"
      hint2: "Båda ligger exakt en standardavvikelse bort. Vad säger regeln om ± 1σ?"
      answer: ["68 %", "68", "68%"]
      solution: |
        45 och 55 ligger båda **en** standardavvikelse från medelvärdet 50.

        Inom ± 1σ ligger **68 %** av värdena.

    - equation: "En normalfördelning har medelvärdet 200 och standardavvikelsen 10. Hur många procent av värdena ligger mellan 180 och 220?"
      hint1: "Räkna ut hur många standardavvikelser 180 och 220 ligger från 200."
      hint2: "20 / 10 = 2, alltså ± 2 standardavvikelser."
      answer: ["95 %", "95", "95%"]
      solution: |
        180 och 220 ligger 20 från medelvärdet, och 20 / 10 = **2 standardavvikelser**.

        Inom ± 2σ ligger **95 %**.

    - equation: "Längden på en sorts skruv är normalfördelad med medelvärdet 40 mm och standardavvikelsen 0,5 mm. Hur många procent av skruvarna är längre än 41 mm?"
      graf:
        typ: "normalfordelning"
        medel: 40
        sigma: 0.5
        markeraOver: 41
      hint1: "Hur många standardavvikelser är 41 mm från medelvärdet?"
      hint2: "1 mm / 0,5 mm = 2 standardavvikelser. Utanför ± 2σ ligger 5 %, men bara halva ligger ÖVER."
      answer: ["2,5 %", "2.5 %", "2,5", "2.5"]
      solution: |
        41 − 40 = 1 mm, och 1 / 0,5 = **2 standardavvikelser**.

        Inom ± 2σ ligger 95 %, alltså 5 % utanför.
        Kurvan är symmetrisk → hälften ligger över:

        5 / 2 = **2,5 %**

    - equation: "En normalfördelning har medelvärdet 100 och standardavvikelsen 8. Hur många procent av värdena är mindre än 84?"
      hint1: "Hur många standardavvikelser under medelvärdet ligger 84?"
      hint2: "100 − 84 = 16, och 16 / 8 = 2. Utanför ± 2σ ligger 5 %, hälften på varje sida."
      answer: ["2,5 %", "2.5 %", "2,5", "2.5"]
      solution: |
        100 − 84 = 16, och 16 / 8 = **2 standardavvikelser** under medelvärdet.

        5 % ligger utanför ± 2σ, hälften åt varje håll:

        **2,5 %** är mindre än 84.

    - equation: "Vikten på en sorts frukt är normalfördelad med medelvärdet 180 g och standardavvikelsen 12 g. En affär tar in 2 000 frukter. Ungefär hur många väger mer än 204 g?"
      hint1: "Räkna först ut andelen, sedan antalet."
      hint2: "204 − 180 = 24, och 24 / 12 = 2 standardavvikelser. Andelen över blir 2,5 %."
      answer: ["50", "50 st", "ca 50"]
      solution: |
        204 − 180 = 24, och 24 / 12 = **2 standardavvikelser** över medelvärdet.

        Andel över: (100 − 95) / 2 = 2,5 %

        0,025 · 2 000 = **50 frukter**

    - equation: "Två normalfördelningskurvor har toppen på samma ställe, men den ena är mycket bredare. Vad har de gemensamt, medelvärdet eller standardavvikelsen?"
      hint1: "Vad bestämmer var toppen ligger, och vad bestämmer bredden?"
      hint2: "Toppen sitter vid medelvärdet. Bredden styrs av standardavvikelsen."
      answer: ["Medelvärdet", "medelvärde", "medelvärdet"]
      solution: |
        Toppen sitter vid **medelvärdet**, samma topp betyder samma medelvärde.

        Bredden styrs av standardavvikelsen, så den skiljer sig åt.

prev: spridningsmatt-och-ladagram
prev_lesson_title: "Spridningsmått och lådagram"
next: regression-och-korrelation
next_lesson_title: "Regression och korrelation"
---

## Klockkurvan

Många mätningar i verkligheten fördelar sig i en symmetrisk klockform: längder, vikter, väntetider, tillverkningsmått. Flest värden ligger nära mitten, allt färre ju längre ut man kommer.

En sådan fördelning beskrivs helt av **två tal**:

- **Medelvärdet**: var kurvans topp ligger
- **Standardavvikelsen σ**: hur bred kurvan är

Liten standardavvikelse → hög, smal kurva (värdena ligger tätt). Stor standardavvikelse → låg, bred kurva (stor spridning).

## Regeln som allt bygger på

| Inom | Andel |
|---|---|
| ± 1 standardavvikelse | 68 % |
| ± 2 standardavvikelser | 95 % |
| ± 3 standardavvikelser | 99,7 % |

Den här kan du behöva utantill. Med den och kurvans symmetri löser du alla E-uppgifter i momentet, ingen räknare eller programvara behövs för själva andelen.

## Arbetsgången

1. **Hur långt från medelvärdet** ligger värdet? (subtrahera)
2. **Hur många standardavvikelser** är det? (dela med σ)
3. **Slå upp andelen** i regeln
4. **Utnyttja symmetrin** om frågan gäller bara ena sidan
5. **Räkna om till antal** om uppgiften frågar efter det

## Symmetrin: halva åt varje håll

Ligger 95 % inom ± 2σ, så ligger 5 % utanför. Eftersom kurvan är symmetrisk fördelas de lika:

- **2,5 % under** medelvärdet − 2σ
- **2,5 % över** medelvärdet + 2σ

Samma resonemang för ± 1σ: 32 % utanför, alltså 16 % på varje sida.

> På prövningen kan facit stå som 2,3 % i stället för 2,5 %, det är det exakta värdet. Båda godtas på E-nivå, förutsatt att du visar hur du tänkt.

## Rita skissen

Rita alltid en enkel klockkurva, sätt ut medelvärdet och strecken vid ±1σ och ±2σ, och skugga det område frågan gäller.

Två skäl: skissen **ger poäng** enligt bedömningsanvisningarna, och den gör det nästan omöjligt att svara på fel sida av kurvan, vilket annars är det vanligaste felet.

## Från andel till antal

Frågar uppgiften "hur många av 1 000?" räknar du:

`andelen som decimaltal · antalet`

`0,025 · 1 000 = 25 stycken`

Svara i klartext med enhet: *"Ungefär 25 av sladdarna är kortare än gränsen."*
