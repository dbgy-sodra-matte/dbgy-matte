---
slug: "omlasning-2b/andragradare/implikation-och-ekvivalens"
title: "Implikation och ekvivalens"
course: omlasning-2b
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 9
lesson_total: 9

success_criteria:
  - Avgöra om ett samband går åt ena hållet eller åt båda
  - Sätta ut rätt pil mellan två påståenden
  - Förklara varför kvadrering bara ger en implikation, inte en ekvivalens
  - Använda de två frågorna som avgör vilken pil som gäller

bank:
  - question: "Vilken pil betyder ekvivalens?"
    answer: ["⇔", "dubbelpil", "dubbelriktad pil", "pil åt båda håll"]
    solution: |
      Ekvivalens skrivs med **dubbelpil: ⇔**.
      Den betyder att sambandet gäller åt båda hållen.
  - question: "Gäller x = 3 ⇒ x² = 9?"
    answer: ["ja", "Ja"]
    solution: |
      Ja. Är x lika med 3 så är x² garanterat 9.
      Åt andra hållet håller det inte: x² = 9 kan också betyda x = −3.
  - question: "Vilka två frågor avgör om det är implikation eller ekvivalens?"
    answer: ["om A gäller måste B gälla, och om B gäller måste A gälla", "om A så B, och om B så A", "båda hållen", "om A gäller måste B gälla och tvärtom"]
    solution: |
      **Fråga 1:** Om A gäller, måste B gälla?
      **Fråga 2:** Om B gäller, måste A gälla?
      Två ja ger ekvivalens. Ett ja ger implikation.

how_to:
  - Börja med repetitionen högst upp, den håller tidigare områden vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till pre-testet

worked_example: |
  ## Två frågor avgör allt

  Du har två påståenden, A och B. Ställ alltid de här två frågorna:

  | Fråga | |
  |---|---|
  | **1** | Om A gäller, måste B då gälla? |
  | **2** | Om B gäller, måste A då gälla? |

  | Svaren | Vad det betyder | Pil |
  |---|---|---|
  | ja och ja | ekvivalens, samma sak | `A ⇔ B` |
  | bara fråga 1 | implikation åt höger | `A ⇒ B` |
  | bara fråga 2 | implikation åt vänster | `A ⇐ B` |
  | nej och nej | inget samband | ingen pil |

  ## Ett exempel av varje

  **Ekvivalens.** A: *talet är delbart med 10.* B: *talet slutar på 0.*

  Fråga 1: delbart med 10 betyder alltid slutsiffra 0. Ja.
  Fråga 2: slutar på 0 betyder alltid delbart med 10. Ja.

  Två ja: `A ⇔ B`

  **Implikation.** A: *figuren är en kvadrat.* B: *figuren är en rektangel.*

  Fråga 1: varje kvadrat är en rektangel. Ja.
  Fråga 2: varje rektangel är en kvadrat? Nej, en 3×5-rektangel är ingen kvadrat.

  Ett ja: `A ⇒ B`

  > Testa alltid fråga 2 med ett **motexempel**. Hittar du ett enda fall där B gäller men inte A är svaret nej, och då är det en implikation.

  ## Varför det spelar roll när du löser ekvationer

  Varje gång du gör samma sak med båda leden behåller du ekvivalensen:

  ```
  2x = 10  ⇔  x = 5
  ```

  Men **kvadrering** är inte ekvivalent:

  ```
  x = 3  ⇒  x² = 9
  ```

  Åt andra hållet spricker det, eftersom `x² = 9` också stämmer för x = −3.

  | Steg | Ekvivalent? | Varför |
  |---|---|---|
  | addera eller subtrahera lika i båda led | ja | går att göra baklänges |
  | multiplicera eller dividera med ett tal som inte är 0 | ja | går att göra baklänges |
  | kvadrera båda leden | **nej** | tecknet försvinner |
  | dividera med x | **nej** | lösningen x = 0 tappas bort |

  Det är precis därför kursen sagt hela tiden att du ska **kontrollera** efter en kvadrering, och att du inte får dela bort x. Nu har de två varningarna ett namn.

exercises:
  E:
    - equation: "Vilken pil ska stå mellan påståendena? A: talet är delbart med 4. B: talet är delbart med 2. Svara med ⇒, ⇐ eller ⇔."
      hint1: "Fråga 1: om ett tal är delbart med 4, måste det då vara delbart med 2?"
      hint2: "Fråga 2: är 6 delbart med 2? Är 6 delbart med 4?"
      answer: ["⇒", "=>", "implikation åt höger", "A ⇒ B", "höger"]
      solution: |
        Fråga 1: delbart med 4 betyder alltid delbart med 2. Ja.

        Fråga 2: 6 är delbart med 2 men inte med 4. Nej.

        Ett ja: **A ⇒ B**

    - equation: "Vilken pil ska stå mellan påståendena? A: 3x = 21. B: x = 7. Svara med ⇒, ⇐ eller ⇔."
      hint1: "Går det att komma från A till B, och tillbaka igen?"
      hint2: "Att dela med 3 går att göra baklänges genom att multiplicera med 3."
      answer: ["⇔", "<=>", "ekvivalens", "A ⇔ B", "dubbelpil", "båda hållen"]
      solution: |
        Fråga 1: 3x = 21 ger x = 7. Ja.

        Fråga 2: x = 7 ger 3x = 21. Ja.

        Två ja: **A ⇔ B**

        Division med ett tal som inte är 0 bevarar ekvivalensen.

    - equation: "Vilken pil ska stå mellan påståendena? A: x = −5. B: x² = 25. Svara med ⇒, ⇐ eller ⇔."
      hint1: "Fråga 2 är den intressanta: följer x = −5 av att x² = 25?"
      hint2: "x² = 25 stämmer även för x = 5."
      answer: ["⇒", "=>", "implikation åt höger", "A ⇒ B", "höger"]
      solution: |
        Fråga 1: x = −5 ger x² = 25. Ja.

        Fråga 2: x² = 25 kan också betyda x = 5. Nej.

        Ett ja: **A ⇒ B**

        Kvadrering går bara åt ena hållet, och det är därför du alltid ska kontrollera efter en kvadrering.

    - equation: "Vilken pil ska stå mellan påståendena? A: fyrhörningen är en kvadrat. B: fyrhörningen har fyra räta vinklar. Svara med ⇒, ⇐ eller ⇔."
      hint1: "Fråga 2: har varje figur med fyra räta vinklar också fyra lika långa sidor?"
      hint2: "Tänk på en rektangel som är 2 cm gånger 7 cm."
      answer: ["⇒", "=>", "implikation åt höger", "A ⇒ B", "höger"]
      solution: |
        Fråga 1: varje kvadrat har fyra räta vinklar. Ja.

        Fråga 2: en rektangel har fyra räta vinklar men behöver inte vara en kvadrat. Nej.

        Ett ja: **A ⇒ B**

    - equation: "Är kvadrering av båda leden en ekvivalent omskrivning? Svara ja eller nej."
      hint1: "Fundera på om steget går att göra baklänges utan att något går förlorat."
      hint2: "Både 4 och −4 kvadrerat blir 16."
      answer: ["nej", "Nej", "nej, det är en implikation"]
      solution: |
        **Nej.**

        Kvadrering är bara en implikation. Tecknet försvinner, så kvadreringen kan skapa lösningar som inte fanns i den ursprungliga ekvationen.

        Det är därför du alltid ska sätta in svaret och kontrollera efter en kvadrering.

    - equation: "En elev löser x² = 36 och svarar bara x = 6, med motiveringen att x = 6 ⇔ x² = 36. Vad är fel i resonemanget?"
      hint1: "Kolla fråga 2: följer x = 6 av att x² = 36?"
      hint2: "Vilket annat x-värde ger också 36?"
      answer: ["det är en implikation, inte en ekvivalens", "implikation inte ekvivalens", "bara implikation", "x kan också vara −6", "x kan också vara -6", "det går bara åt ena hållet"]
      solution: |
        Sambandet går bara åt ena hållet:

        x = 6 ⇒ x² = 36, men x² = 36 ⇒ x = 6 stämmer **inte**, eftersom x = −6 också ger 36.

        **Det är en implikation, inte en ekvivalens.**

        Därför tappar eleven lösningen x = −6. Rätt svar är x = ±6.

prev: andragradsfunktioner-algebraiskt
prev_lesson_title: "Andragradsfunktioner algebraiskt"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Algebra och andragradare"
---

## Vad det handlar om

Två påståenden kan höra ihop på två sätt. Antingen följer det ena av det andra åt **ett** håll, eller så gäller det åt **båda**.

| Pil | Heter | Betyder |
|---|---|---|
| `A ⇒ B` | implikation | om A gäller så gäller B, men inte tvärtom |
| `A ⇔ B` | ekvivalens | A och B gäller alltid samtidigt |

## De två frågorna

Fastna aldrig i att fundera fritt. Ställ de här två frågorna, i den här ordningen:

1. **Om A gäller, måste B gälla?**
2. **Om B gäller, måste A gälla?**

Två ja betyder ekvivalens. Ett ja betyder implikation åt det hållet.

För att svara nej på en fråga räcker det med **ett enda motexempel**. Det är oftast så du hittar svaret: leta efter fallet som spräcker det ena hållet.

## Ett exempel

A: *det regnar.* B: *marken är blöt.*

Regnar det blir marken blöt, så fråga 1 är ja. Men marken kan vara blöt av en trädgårdsslang, så fråga 2 är nej.

`A ⇒ B`

## Varför det hör hemma i det här området

Du har redan mött det här utan namnet. Kursen har sagt två saker om ekvationer:

- **kontrollera alltid efter en kvadrering**
- **dela aldrig bort x**

Båda handlar om samma sak. De stegen är inte ekvivalenta, de går bara åt ena hållet, och därför kan lösningar tillkomma eller försvinna.

| Steg i en ekvation | Ekvivalent |
|---|---|
| addera eller subtrahera lika i båda led | ja |
| multiplicera eller dividera med ett tal skilt från noll | ja |
| kvadrera båda leden | nej |
| dividera med x | nej |

## Vanliga fel

| Fel | Rätt |
|---|---|
| sätta ⇔ så fort båda påståendena är sanna | pilen handlar om **följd**, inte om att båda råkar stämma |
| glömma fråga 2 | de flesta felen sitter där, testa alltid med ett motexempel |
| skriva x = 6 ⇔ x² = 36 | det är ⇒, eftersom x = −6 också ger 36 |
