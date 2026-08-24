---
slug: "omlasning-2b/geometri/topptriangel-och-transversalsatsen"
title: "Topptriangel-, transversal- och bisektrissatsen"
course: omlasning-2b
moment: geometri
moment_title: "Geometri"
lesson_number: 3
lesson_total: 6

success_criteria:
  - Känna igen en topptriangel, en parallell linje som skapar en mindre, likformig triangel
  - Ställa upp och lösa en proportion med topptriangelsatsen
  - Använda transversalsatsen på delsträckorna
  - Hålla isär hela sidan och delsträckan
  - Använda bisektrissatsen när en vinkel delas mitt itu

bank:
  - question: "Vad krävs för att topptriangelsatsen ska gälla?"
    answer: ["Att linjen är parallell med en sida", "en parallell linje", "att sträckan är parallell med basen"]
    solution: |
      Satsen bygger på att den lilla triangeln har samma vinklar som den stora.
      Det gäller bara om **linjen är parallell med triangelns bas**.
  - question: "I en triangel är DE parallell med AC. Är trianglarna BDE och BAC likformiga?"
    answer: ["ja", "Ja", "ja!"]
    solution: |
      DE är parallell med AC, så trianglarna har samma vinklar.
      Samma vinklar betyder likformiga: **ja**
  - question: "Topptriangelsatsen: BD/BA = BE/BC = ? "
    answer: ["DE/AC", "DE / AC"]
    solution: |
      I likformiga trianglar är alla motsvarande sidor förstorade lika mycket.
      Den tredje kvoten är därför **DE/AC**
  - question: "Två likformiga trianglar har skalfaktor 2. En sida är 7 i den mindre. Hur lång är motsvarande sida?"
    answer: ["14"]
    solution: |
      Multiplicera sidan i den mindre triangeln med skalfaktorn.
      7 · 2 = **14**

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Rita av figuren och skriv in alla mått innan du ställer upp
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Vad en topptriangel är

  Dras en linje **parallell med en av triangelns sidor** bildas en mindre triangel i toppen. Den lilla triangeln har samma vinklar som den stora, alltså är de **likformiga**.

  Det är hela satsen. Resten är att sätta upp rätt proportion.

  ## Topptriangelsatsen: hela sidor

  I en triangel ABC med DE parallell med AC:

  `BD / BA = BE / BC = DE / AC`

  Alla tre förhållandena är lika. Notera att det är **hela sidor** från toppen B som jämförs.

  ## Ett räkneexempel

  *DE är parallell med AC. BE = 4, EC = 3 och DE = 5. Bestäm AC.*

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Hela sidan BC | BE + EC = 4 + 3 | 7 |
  | Ställ upp satsen | DE / AC = BE / BC | 5 / AC = 4 / 7 |
  | Multiplicera korsvis | 4 · AC = 5 · 7 = 35 | — |
  | Lös ut | AC = 35 / 4 | **8,75** |

  > **Den vanligaste missen:** att skriva `5 / AC = 4 / 3` och använda delsträckan EC i stället för hela sidan BC. Topptriangelsatsen jämför **hela** sidor från toppen. Räkna ut BC = 4 + 3 = 7 först.

  ## Transversalsatsen: delsträckor

  Samma figur, men nu jämförs **delarna**:

  `BD / DA = BE / EC`

  Här används alltså de två bitarna av varje sida, inte hela sidan.

  ## Bisektrissatsen: när en vinkel delas mitt itu

  En **bisektris** är en linje som delar en vinkel i två lika stora delar.

  Dras bisektrisen från ett hörn ner till motstående sida delar den den sidan i två delar, och delarna förhåller sig som de sidor de ligger intill.

  ```
  AD / DB = AC / BC
  ```

  I ord: delsträckorna på den delade sidan förhåller sig som triangelns två andra sidor.

  | Steg | Vad du gör |
  |---|---|
  | 1 | Hitta bisektrisen, den som delar en vinkel i två lika delar |
  | 2 | Se vilken sida den träffar och vilka två delar den skapar |
  | 3 | Para ihop varje del med sidan den ligger intill |
  | 4 | Ställ upp proportionen och lös ut |

  ### Ett räkneexempel

  I triangeln ABC är AC = 12 cm och BC = 8 cm. Bisektrisen från C träffar AB, som är 15 cm, i punkten D. Hur lång är AD?

  | Steg | Uträkning |
  |---|---|
  | Proportionen | AD / DB = 12 / 8 |
  | Delarna tillsammans | AD + DB = 15 |
  | Andelen | AD utgör 12 av 12 + 8 = 20 delar |
  | Svar | AD = 15 · 12/20 = **9 cm** |

  > Blanda inte ihop bisektris med **höjd** eller **median**. Bisektrisen delar en vinkel, höjden möter sidan i rät vinkel, medianen träffar sidans mittpunkt. Tre olika linjer från samma hörn.

  ## Vilken sats när?

  | Uppgiften handlar om | Använd |
  |---|---|
  | Den parallella sträckan DE och basen AC | Topptriangelsatsen |
  | Hela sidorna från toppen (BD och BA) | Topptriangelsatsen |
  | Bara delsträckorna (BD och DA) | Transversalsatsen |

  Båda bygger på samma likformighet, de är två sätt att skriva samma sak.

exercises:
  E:
    - equation: "I triangeln är DE parallell med AC. BE = 4, EC = 3 och DE = 5. Bestäm sträckan x (= AC). Svara med två decimaler."
      graf:
        typ: "figur"
        figur:
          vy: [-0.6, -0.6, 6.6, 5.4]
          polygon: [[0, 0], [6, 0], [3, 5]]
          linjer:
            - fran: [1.2, 2]
              till: [4.8, 2]
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
            - p: [1.2, 2]
              namn: "D"
              plats: "vanster"
            - p: [4.8, 2]
              namn: "E"
              plats: "hoger"
          matt:
            - fran: [3, 5]
              till: [4.8, 2]
              text: "4"
              sida: -1
            - fran: [1.2, 2]
              till: [4.8, 2]
              text: "5"
            - fran: [4.8, 2]
              till: [6, 0]
              text: "3"
              sida: -1
            - fran: [0, 0]
              till: [6, 0]
              text: "x"
      hint1: "Räkna först ut hela sidan BC. Den består av BE och EC."
      hint2: "BC = 4 + 3 = 7. Ställ upp 5/x = 4/7 och multiplicera korsvis."
      answer: ["8,75", "8.75"]
      solution: |
        Hela sidan BC = 4 + 3 = 7

        DE / AC = BE / BC
        5 / x = 4 / 7
        4x = 35
        **x = 8,75**

        > Använd BC = 7, inte EC = 3. Satsen jämför hela sidor från toppen.

    - equation: "I en triangel är DE parallell med AC. BE = 6, EC = 3 och DE = 8. Bestäm AC."
      hint1: "Hela sidan BC = 6 + 3 = 9."
      hint2: "8 / AC = 6 / 9. Multiplicera korsvis: 6 · AC = 72."
      answer: ["12"]
      solution: |
        BC = 6 + 3 = 9

        8 / AC = 6 / 9
        6 · AC = 72
        **AC = 12**

    - equation: "I en triangel är DE parallell med AC. BD = 4, DA = 6 och BE = 6. Bestäm EC med transversalsatsen."
      hint1: "Transversalsatsen jämför delsträckorna: BD/DA = BE/EC."
      hint2: "4 / 6 = 6 / EC. Multiplicera korsvis: 4 · EC = 36."
      answer: ["9"]
      solution: |
        BD / DA = BE / EC
        4 / 6 = 6 / EC
        4 · EC = 36
        **EC = 9**

    - equation: "I en triangel är DE parallell med AC. BD = 3, BA = 9 och AC = 15. Bestäm DE."
      hint1: "Topptriangelsatsen: DE/AC = BD/BA."
      hint2: "DE / 15 = 3 / 9. Notera att BA = 9 redan är HELA sidan."
      answer: ["5"]
      solution: |
        DE / AC = BD / BA
        DE / 15 = 3 / 9
        9 · DE = 45
        **DE = 5**

    - equation: "I en triangel är DE parallell med AC. BE = 5, EC = 5 och AC = 14. Bestäm DE."
      hint1: "Hela sidan BC = 5 + 5 = 10."
      hint2: "DE / 14 = 5 / 10, alltså halva."
      answer: ["7"]
      solution: |
        BC = 5 + 5 = 10

        DE / 14 = 5 / 10 = 0,5
        **DE = 7**

        Ligger den parallella linjen mitt på sidorna blir den alltid halva basen.

    - equation: "I en triangel är DE parallell med AC. BD = 2, DA = 8 och DE = 4. Bestäm AC."
      hint1: "AC jämförs med DE via HELA sidan BA, inte delsträckan DA."
      hint2: "BA = 2 + 8 = 10. Ställ upp 4 / AC = 2 / 10."
      answer: ["20"]
      solution: |
        Hela sidan BA = 2 + 8 = 10

        DE / AC = BD / BA
        4 / AC = 2 / 10
        2 · AC = 40
        **AC = 20**

    - equation: "I triangeln ABC är AC = 12 cm och BC = 8 cm. Bisektrisen från C träffar sidan AB i punkten D. AB är 15 cm. Hur lång är AD?"
      hint1: "Bisektrissatsen: AD / DB = AC / BC. Delarna förhåller sig som sidorna de ligger intill."
      hint2: "Förhållandet är 12 : 8, alltså 12 av totalt 20 delar. Hela AB är 15 cm."
      answer: ["9", "9 cm", "AD = 9 cm", "AD = 9"]
      solution: |
        Bisektrissatsen ger AD / DB = AC / BC = 12 / 8.

        AD och DB är tillsammans 15 cm, och förhållandet 12 : 8 betyder 20 delar totalt.

        AD = 15 · 12/20 = **9 cm**

        Kontroll: DB = 15 − 9 = 6 cm, och 9/6 = 1,5 = 12/8 ✓

    - equation: "Vad är det som en bisektris delar mitt itu?"
      hint1: "Jämför med höjd och median, som delar något annat."
      hint2: "Ordet kommer av latinets bi (två) och secare (skära)."
      answer: ["vinkeln", "en vinkel", "vinkel", "den delar vinkeln"]
      solution: |
        En bisektris delar **vinkeln** i två lika stora delar.

        Höjden möter motstående sida i rät vinkel, och medianen träffar den sidans mittpunkt. Tre olika linjer från samma hörn, som är lätta att förväxla.

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSfaDA8n_YNzu12H6E2pt6KYVwn6RJvN5WctWS_SIB5osot9XQ/viewform"
prev: likformighet
prev_lesson_title: "Likformighet"
next: randvinkelsatsen
next_lesson_title: "Randvinkelsatsen"
---

## En parallell linje skapar en likformig triangel

Dras en linje **parallell med en av triangelns sidor** bildas en mindre triangel i toppen. Den lilla triangeln har exakt samma vinklar som den stora, alltså är de likformiga.

Det ger två satser, som egentligen är samma sak skriven på två sätt.

## Topptriangelsatsen: hela sidor

I triangeln ABC med DE parallell med AC:

`BD / BA = BE / BC = DE / AC`

Alla tre förhållandena är lika stora. **Alla sträckor räknas från toppen B**, och de är hela sidor, inte delar.

## Transversalsatsen: delsträckor

Samma figur, men nu jämförs de två bitarna av varje sida:

`BD / DA = BE / EC`

## Fällan: hel sida eller delsträcka?

Det här är momentets enda riktiga svårighet, och nästan alla fel beror på den.

Får du veta att `BE = 4` och `EC = 3` är:

- **BE = 4** en delsträcka (från toppen ner till den parallella linjen)
- **EC = 3** den andra delsträckan
- **BC = 7** hela sidan

Topptriangelsatsen vill ha `BE / BC = 4 / 7`. Skriver du `4 / 3` har du blandat ihop hel sida med delsträcka och svaret blir fel.

> **Rutin:** rita av figuren, skriv in de mått du fått, och **räkna ut de hela sidorna** (addera delarna) innan du ställer upp något.

## Bisektrissatsen: när en vinkel delas mitt itu

En **bisektris** delar en vinkel i två lika stora delar. Går den från ett hörn ner till motstående sida delar den den sidan, och delarna förhåller sig som de sidor de ligger intill:

`AD / DB = AC / BC`

Det är samma likformighetsidé som förut, tillämpad på en annan sträcka.

| Linje från ett hörn | Vad den delar |
|---|---|
| **bisektris** | vinkeln, i två lika delar |
| höjd | möter motstående sida i rät vinkel |
| median | träffar motstående sidas mittpunkt |

De tre förväxlas lätt. Läs alltid vad uppgiften säger att linjen gör, inte hur den ser ut i figuren.

## Arbetsgången

1. Rita av figuren och märk ut alla kända mått
2. Räkna ut hela sidor genom att addera delsträckor
3. Skriv upp satsen med bokstäverna först, ställ in talen sist
4. Multiplicera korsvis och lös ut
5. Rimlighetskolla: den mindre triangelns sidor ska vara kortare än den storas

## Redovisning

Skriv ut vilken sats du använder och proportionen innan du sätter in talen:

> *Eftersom DE ∥ AC gäller topptriangelsatsen: DE/AC = BE/BC.*

Uppställningen är "godtagbar ansats" i bedömningsanvisningarna och ger poäng även om räkningen sedan går fel.
