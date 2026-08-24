---
slug: "omlasning-2a/statistik/normalfordelning"
title: "Normalfördelning"
course: omlasning-2a
moment: statistik
moment_title: "Statistik"
lesson_number: 3
lesson_total: 3

success_criteria:
  - Använda 68-95-99,7-regeln för att bestämma andelar
  - Räkna ut hur många standardavvikelser ett värde ligger från medelvärdet
  - Använda symmetrin för att få fram andelen under eller över ett värde
  - Räkna om en andel till ett antal

bank:
  - question: "Hur stor andel av värdena hamnar inom en standardavvikelse åt vardera hållet?"
    answer: ["68 %", "68", "68%"]
    solution: |
      I en normalfördelning ligger ungefär två tredjedelar nära mitten.
      Inom en standardavvikelse: **68 %**
  - question: "Medelvärdet är 72 och standardavvikelsen 6. Hur många standardavvikelser från medelvärdet ligger värdet 84?"
    answer: ["2", "två"]
    solution: |
      Räkna ut avståndet till medelvärdet och dela med standardavvikelsen.
      84 − 72 = 12, och 12 / 6 = **2 standardavvikelser**
  - question: "Två klockkurvor har toppen på samma ställe men olika bredd. Vilket tal skiljer dem åt?"
    answer: ["Standardavvikelsen", "standardavvikelse", "spridningen"]
    solution: |
      Standardavvikelsen mäter spridningen.
      Stor **standardavvikelse** ger en bred och låg kurva, liten ger en smal och hög.
  - question: "Hur många procent ligger under medelvärdet i en normalfördelning?"
    answer: ["50 %", "50", "50%"]
    solution: |
      Kurvan är symmetrisk kring medelvärdet.
      Hälften ligger under och hälften över: **50 %**

how_to:
  - Börja med repetitionen högst upp, den håller tidigare områden vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till pre-testet

worked_example: |
  ## Klockkurvan

  Många mätvärden i naturen och industrin fördelar sig i en symmetrisk klockform kring ett medelvärde: längder, vikter, tillverkningsmått, väntetider.

  Två tal beskriver hela kurvan:

  | Talet | Betyder | I bilden |
  |---|---|---|
  | medelvärdet | var mitten ligger | var toppen sitter |
  | standardavvikelsen (σ) | hur utspritt det är | hur bred kurvan är |

  Samma medelvärde men olika standardavvikelse ger två kurvor med toppen på samma ställe, den ena bred och låg, den andra smal och hög.

  ## 68-95-99,7-regeln

  | Inom | Andel |
  |---|---|
  | 1 standardavvikelse | 68 % |
  | 2 standardavvikelser | 95 % |
  | 3 standardavvikelser | 99,7 % |

  De tre talen är hela verktygslådan. Lär dem utantill, de står inte på något formelblad.

  ## Symmetrin gör resten

  Kurvan är symmetrisk, så det som ligger utanför fördelar sig lika på båda sidorna.

  Inom 2σ ligger 95 %. Utanför ligger alltså 5 %, **jämnt fördelat**: 2,5 % på varje sida.

  Egentligen 2,3 % om man räknar noga, och det är det värde som brukar användas.

  | Området | Andel |
  |---|---|
  | under medelvärdet | 50 % |
  | under medel − 1σ | 16 % |
  | under medel − 2σ | 2,3 % |
  | över medel + 1σ | 16 % |
  | över medel + 2σ | 2,3 % |
  | över medel − 2σ | 97,7 % |

  ## Genomräknat exempel

  *Skruvar tillverkas med medellängden 54,0 mm och standardavvikelsen 0,20 mm. Hur många procent kan förväntas vara kortare än 53,6 mm?*

  | Steg | Uträkning |
  |---|---|
  | Avstånd till medelvärdet | 54,0 − 53,6 = 0,40 mm |
  | Hur många σ är det? | 0,40 / 0,20 = 2 |
  | Vad ligger under medel − 2σ? | **2,3 %** |

  ## Från andel till antal

  *Sladdar har medellängden 25 m och standardavvikelsen 0,10 m. Bara sladdar längre än 24,8 m får säljas. Av 1 000 tillverkade, hur många får säljas?*

  | Steg | Uträkning |
  |---|---|
  | Avstånd | 25 − 24,8 = 0,2 m |
  | Antal σ | 0,2 / 0,1 = 2 |
  | Andel över medel − 2σ | 97,7 % |
  | Antal av 1 000 | 0,977 · 1000 ≈ **977 sladdar** |

  > **Rita alltid en skiss.** En klockkurva med medelvärdet i mitten och strecken vid ±1σ och ±2σ tar tjugo sekunder och gör det omöjligt att blanda ihop "under" och "över". Bedömningen ger dessutom poäng för en godtagbar skiss.

exercises:
  E:
    - equation: "Hur många procent av värdena i en normalfördelning ligger inom en standardavvikelse från medelvärdet?"
      hint1: "Regeln du ska kunna utantill har tre tal. Vilket av dem gäller för en standardavvikelse?"
      hint2: "Ungefär två tredjedelar."
      answer: ["68 %", "68", "68%"]
      solution: |
        Inom en standardavvikelse ligger **68 %** av värdena.

    - equation: "Medelvärdet är 72 och standardavvikelsen 6. Hur många standardavvikelser från medelvärdet ligger värdet 84?"
      hint1: "Räkna först ut avståndet till medelvärdet."
      hint2: "84 − 72 = 12. Dela sedan med standardavvikelsen."
      answer: ["2", "två"]
      solution: |
        84 − 72 = 12

        12 / 6 = **2 standardavvikelser**

    - equation: "En normalfördelning har medelvärdet 60 och standardavvikelsen 5. Hur många procent av värdena är mindre än 50?"
      hint1: "Hur många standardavvikelser under medelvärdet ligger 50?"
      hint2: "60 − 50 = 10, alltså 2 standardavvikelser. Vad ligger under medel − 2σ?"
      answer: ["2,3 %", "2,3", "2.3 %", "2.3", "2,3%"]
      solution: |
        60 − 50 = 10, och 10 / 5 = 2 standardavvikelser under medelvärdet.

        Inom 2σ ligger 95 %. Utanför ligger 5 %, jämnt fördelat på båda sidorna.

        Under medel − 2σ: **2,3 %**

    - equation: "En normalfördelning har medelvärdet 200 och standardavvikelsen 10. Hur många procent av värdena är större än 210?"
      hint1: "210 ligger en standardavvikelse över medelvärdet."
      hint2: "Inom 1σ ligger 68 %. Utanför ligger 32 %, jämnt fördelat."
      answer: ["16 %", "16", "16%"]
      solution: |
        210 − 200 = 10, alltså 1 standardavvikelse över medelvärdet.

        Inom 1σ ligger 68 %. Utanför ligger 32 %, jämnt fördelat på båda sidorna.

        Över medel + 1σ: **16 %**

    - equation: "Sladdar har medellängden 25 m och standardavvikelsen 0,10 m. Bara sladdar längre än 24,8 m får säljas. Hur många procent får säljas?"
      hint1: "24,8 m ligger två standardavvikelser under medelvärdet."
      hint2: "Under medel − 2σ ligger 2,3 %. Resten får säljas."
      answer: ["97,7 %", "97,7", "97.7 %", "97.7", "97,7%"]
      solution: |
        25 − 24,8 = 0,2 m, och 0,2 / 0,1 = 2 standardavvikelser.

        Under medel − 2σ ligger 2,3 %.

        100 − 2,3 = **97,7 %** får säljas.

    - equation: "Samma sladdar som i förra uppgiften. Företaget tillverkar 1 000 sladdar på en dag. Hur många av dessa får säljas?"
      hint1: "Använd andelen från förra uppgiften."
      hint2: "97,7 % av 1 000. Skriv om procenten till decimalform."
      answer: ["977", "977 sladdar", "977 st"]
      solution: |
        97,7 % av 1 000:

        0,977 · 1000 = **977 sladdar**

prev: spridningsmatt-och-ladagram
prev_lesson_title: "Spridningsmått och lådagram"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Statistik"
---

## Klockkurvan

Många mätvärden fördelar sig symmetriskt kring ett medelvärde: längder, vikter, tillverkningsmått, väntetider. Kurvan kallas en **normalfördelning**.

Två tal beskriver den helt:

- **Medelvärdet**: var mitten ligger, alltså var toppen sitter
- **Standardavvikelsen (σ)**: hur utspritt det är, alltså hur bred kurvan är

Två kurvor med samma medelvärde har toppen på samma ställe. Den med större standardavvikelse är bredare och lägre.

## 68-95-99,7

| Inom | Andel |
|---|---|
| 1 standardavvikelse | 68 % |
| 2 standardavvikelser | 95 % |
| 3 standardavvikelser | 99,7 % |

Det här är hela verktygslådan i Ma2a. **Lär de tre talen utantill**, de står inte på något formelblad, och utan dem går uppgifterna inte att lösa.

## Symmetrin

Kurvan är symmetrisk, så det som ligger utanför fördelar sig lika på båda sidorna.

Inom 2σ ligger 95 % → utanför ligger 5 % → **2,3 % på varje sida** (2,5 % om man avrundar grovt, men 2,3 % är det värde som används).

Det ger den här tabellen, som täcker nästan alla uppgifter:

| Området | Andel |
|---|---|
| under medelvärdet | 50 % |
| under medel − 1σ | 16 % |
| under medel − 2σ | 2,3 % |
| över medel + 1σ | 16 % |
| över medel + 2σ | 2,3 % |
| över medel − 2σ | 97,7 % |
| mellan medel − 1σ och medel + 1σ | 68 % |

## Metoden, varje gång

1. **Räkna ut avståndet** mellan värdet och medelvärdet
2. **Dela med standardavvikelsen**: hur många σ är det?
3. **Slå upp andelen** i tabellen ovan
4. **Räkna om till antal** om uppgiften frågar efter det: andelen gånger antalet

## Rita alltid

En skiss av klockkurvan med medelvärdet i mitten och streck vid ±1σ och ±2σ tar tjugo sekunder.

Den gör det omöjligt att blanda ihop "under" och "över", vilket annars är det vanligaste felet här. Bedömningsanvisningarna ger dessutom poäng för en godtagbar skiss på egen hand.

## Inga digitala verktyg

I den här kursen löses normalfördelning med **68-95-99,7-regeln, symmetri och skiss**, aldrig med räknarens statistikfunktioner. Uppgifterna är byggda så att värdena hamnar på hela standardavvikelser.

Hamnar ett värde mitt emellan två σ-streck har du troligen räknat fel på avståndet.
