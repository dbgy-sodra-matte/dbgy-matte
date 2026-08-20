---
slug: "omlasning/algebra/redo-att-tenta"
title: "Redo att tenta? — Algebra"
course: omlasning
moment: algebra
moment_title: "Algebra"
lesson_number: 9
lesson_total: 9

success_criteria:
  - Klara blandade uppgifter från ALLA åtta delmoment, utan att titta i lösningarna
  - Veta vilket delmoment du behöver träna mer på om något skaver
  - Avgöra själv om du är redo att anmäla dig till tenta-av

how_to:
  - Gör kom-igång-frågorna och alla uppgifter nedan, UTAN att öppna lösningarna
  - Rätta dig själv efteråt
  - Allt rätt? Anmäl dig till tenta-av på provtiden, du är redo
  - Något fel? Lösningen visar vilket delmoment som tränar exakt det, gå dit, träna, kom tillbaka

worked_example: |
  ## Så funkar tenta-av

  - **Skriftligt prov på provtiden** (i anslutning till stödlektionen). Du anmäler dig när du är redo.
  - Provet testar **E-målen från alla åtta delmomenten**, samma typer av uppgifter som du tränat här.
  - **Klarat prov = Algebra är avklarat.** Då återstår Ekonomi och Funktioner.
  - Inte klarat? Ingen fara, du tränar vidare och skriver igen vid nästa tillfälle. Tid är variabel, kunskap är konstant.

  ## Tips inför provet

  1. **Visa stegen, inte bara svaret**: det ger poäng även när slutsvaret blir fel
  2. **Kontrollera ekvationer genom insättning**: gratis felkoll
  3. **Vid x² = a: glöm inte minus-lösningen**
  4. **Läs frågan en extra gång**: svara på det som faktiskt frågas
  5. Fastnar du, hoppa vidare och kom tillbaka

exercises:
  E:
    - equation: "Förenkla: 9x + 4 − 3x + 2"
      hint1: "Samla samma sort, x-termer för sig, konstanter för sig."
      answer: ["6x + 6", "6 + 6x"]
      solution: |
        9x + 4 − 3x + 2 = (9x − 3x) + (4 + 2) = **6x + 6**

        → Tränas i delmoment 1: **Uttryck**

    - equation: "Multiplicera in: 6(y − 3)"
      hint1: "6:an gångas med BÅDA termerna i parentesen, även med minustecknet."
      answer: ["6y − 18", "6y - 18"]
      solution: |
        6(y − 3) = 6 · y − 6 · 3 = **6y − 18**

        → Tränas i delmoment 1: **Uttryck**

    - equation: "Multiplicera in: −4(x − 5)"
      hint1: "Minustecknet följer med in: −4 gånger BÅDA termerna. Minus gånger minus blir plus."
      answer: ["−4x + 20", "-4x + 20", "20 − 4x", "20 - 4x"]
      solution: |
        −4(x − 5) = −4 · x + (−4) · (−5) = **−4x + 20**

        → Tränas i delmoment 1: **Uttryck**

    - equation: "Faktorisera så långt som möjligt: 9x + 12"
      hint1: "Vilket är det största talet som delar både 9 och 12?"
      answer: ["3(3x + 4)", "3(4 + 3x)"]
      solution: |
        9x + 12 = **3(3x + 4)**

        Kontroll: 3 · 3x = 9x och 3 · 4 = 12 ✓
        → Tränas i delmoment 2: **Faktorisering**

    - equation: "Faktorisera: x² + 5x"
      hint1: "Båda termerna innehåller x, bryt ut det."
      answer: ["x(x + 5)", "x(5 + x)"]
      solution: |
        x² + 5x = **x(x + 5)**

        Kontroll: x · x = x² och x · 5 = 5x ✓
        → Tränas i delmoment 2: **Faktorisering**

    - equation: "Ett gymkort kostar 400 kr i startavgift och 250 kr per månad. Skriv ett uttryck för totala kostnaden efter x månader."
      hint1: "Fast del (betalas en gång, inget x) + rörlig del (per månad, gångas med x)."
      answer: ["400 + 250x", "250x + 400", "K = 400 + 250x"]
      solution: |
        **400 + 250x**

        → Tränas i delmoment 3: **Ställa upp och tolka uttryck**

    - equation: "Lös: 4x − 7 = 21"
      hint1: "Två steg: bli av med −7 först, sedan 4:an."
      answer: ["7"]
      solution: |
        4x − 7 = 21
        4x = 28
        **x = 7**

        Kontroll: 4 · 7 − 7 = 21 ✓
        → Tränas i delmoment 4: **Ekvationer**

    - equation: "Lös: x/6 = 5"
      hint1: "Motsatsen till att dela med 6 är att multiplicera med 6, i båda leden."
      answer: ["30"]
      solution: |
        x/6 = 5
        **x = 30**

        → Tränas i delmoment 4: **Ekvationer**

    - equation: "Lös: 7x − 4 = 3x + 16"
      hint1: "x i båda led, samla x-termerna på ena sidan först (dra bort 3x från båda led)."
      answer: ["5"]
      solution: |
        7x − 4 = 3x + 16
        4x − 4 = 16
        4x = 20
        **x = 5**

        Kontroll: 7 · 5 − 4 = 31 och 3 · 5 + 16 = 31 ✓
        → Tränas i delmoment 4: **Ekvationer**

    - equation: "Lös: x² = 144"
      hint1: "Vilket tal i kvadrat blir 144? Och kom ihåg: det finns TVÅ svar."
      answer: ["±12", "12 eller -12", "12 och -12", "-12 eller 12", "-12 och 12", "12, -12", "-12, 12"]
      solution: |
        x² = 144
        **x = ±12**

        Både 12² = 144 och (−12)² = 144.
        → Tränas i delmoment 5: **Potensekvationer**

    - equation: "Lös: x³ = 343"
      hint1: "Vilket tal gånger sig självt tre gånger blir 343? Testa: 5³ = 125, 6³ = 216, 7³ = ? (Vid udda exponent finns bara EN lösning.)"
      answer: ["7"]
      solution: |
        7³ = 7 · 7 · 7 = 343 → **x = 7**

        (Ingen minuslösning här: (−7)³ = −343, inte 343.)
        → Tränas i delmoment 5: **Potensekvationer**

    - equation: "Hur många lösningar har ekvationen x² = 121?"
      hint1: "Tänk på både plus och minus."
      answer: ["2", "två", "2 lösningar", "två lösningar", "2 stycken"]
      solution: |
        **Två lösningar:** x = 11 och x = −11, eftersom både 11² = 121 och (−11)² = 121.

        → Tränas i delmoment 5: **Potensekvationer**

    - equation: "s = v · t. Beräkna s när v = 60 och t = 4."
      hint1: "Byt ut bokstäverna mot talen och räkna."
      answer: ["240"]
      solution: |
        s = 60 · 4 = **240**

        → Tränas i delmoment 6: **Formler**

    - equation: "s = v · t. Beräkna t när s = 240 och v = 80."
      hint1: "Nu är det t som är okänd. Sätt in det du vet: 240 = 80 · t, och lös ut t."
      answer: ["3", "t = 3"]
      solution: |
        240 = 80 · t
        t = 240 / 80 = **3**

        → Tränas i delmoment 6: **Formler**

    - equation: "Två tal som kommer direkt efter varandra har summan 53. Vilket är det minsta talet?"
      hint1: "Låt x = minsta talet. Nästa tal är x + 1. Ställ upp ekvationen för summan."
      answer: ["26"]
      solution: |
        x + (x + 1) = 53
        2x = 52
        **x = 26** (talen är 26 och 27)

        → Tränas i delmoment 7: **Problemlösning med algebra**

    - equation: "Förenkla: a⁶ · a²"
      hint1: "Multiplikation av potenser med samma bas: vad händer med exponenterna?"
      answer: ["a⁸", "a^8"]
      solution: |
        a⁶ · a² = a⁶⁺² = **a⁸**

        → Tränas i delmoment 8: **Potenser och rötter**

    - equation: "Beräkna: √49 + 2³"
      hint1: "Två delar: roten ur 49 för sig, och 2³ för sig. Addera sedan."
      answer: ["15"]
      solution: |
        √49 = 7 och 2³ = 8

        7 + 8 = **15**

        → Tränas i delmoment 8: **Potenser och rötter**

prev: potenser-och-rotter
prev_lesson_title: "Potenser och rötter"
next: grunder-i-procent
next_lesson_title: "Grunder i procent"
---

## Sista anhalten före tenta-av

Det här är ditt **pre-test**, blandade uppgifter från alla åtta delmoment, i slumpad ordning precis som på provet. Skillnaden mot delmomentsidorna: här tränar du inte ett moment i taget, utan växlar mellan allt, exakt som tentan kräver.

## Spelregeln

> **Gör alla uppgifter utan att öppna ledtrådar eller lösningar.** Knapparna finns kvar på sidan, men här testar du dig själv, öppna dem först när du rättar i slutet.

- **Allt rätt?** Du är redo. Anmäl dig till tenta-av på nästa provtid.
- **1–2 fel?** Kolla lösningarna, varje lösning pekar ut vilket delmoment som tränar just det. Gå dit, gör om övningarna, kom tillbaka hit.
- **Fler fel?** Ingen stress, det är därför pre-testet finns. Träna delmomenten som pekas ut, i lugn takt. Tentan väntar på dig, inte tvärtom.

## Kom ihåg varför du gör det här

Checkpoints visar att delmomenten sitter **var för sig**. Det här testet visar att de sitter **tillsammans**, och det är så provet ser ut. Klarar du sidan utan facit finns inget på tentan som kan överraska dig.
