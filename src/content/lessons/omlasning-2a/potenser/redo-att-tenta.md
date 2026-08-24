---
slug: "omlasning-2a/potenser/redo-att-tenta"
title: "Redo att tenta? — Potenser och exponentialekvationer"
course: omlasning-2a
moment: potenser
moment_title: "Potenser och exponentialekvationer"
lesson_number: 4
lesson_total: 4

success_criteria:
  - Klara blandade uppgifter från alla fyra delmoment, utan att titta i lösningarna
  - Skilja en potensekvation från en exponentialekvation utan att någon säger vilket
  - Veta vilket delmoment du behöver träna mer på om något skaver

how_to:
  - Gör alla uppgifter nedan UTAN att öppna lösningarna
  - Rätta dig själv efteråt
  - Allt rätt? Området sitter, gå vidare till Statistik
  - Något fel? Lösningen visar vilket delmoment som tränar just det, gå dit, träna, kom tillbaka

worked_example: |
  ## Frågan du måste ställa först

  **Var står x?**

  | Ekvationen | x står i | Metod |
  |---|---|---|
  | x⁵ = 32 | basen | dra roten |
  | 2^x = 32 | exponenten | pröva dig fram |

  Allt annat i det här området följer av det. Ser du inte skillnaden blir metoden fel oavsett hur bra du räknar.

  ## Checklista

  1. **Potenslagarna kräver samma bas.** `2³ · 5⁴` går inte att slå ihop.
  2. **Multiplikation → addera exponenter. Division → subtrahera. Potens av potens → multiplicera.**
  3. **a⁰ = 1** för alla a utom 0.
  4. **Negativ exponent = ett i nämnaren**, inte ett negativt tal. `3⁻² = 1/9`.
  5. **Jämn exponent i en potensekvation ger två lösningar**, udda ger en.
  6. **Gör potensen ensam** innan du drar roten eller prövar.
  7. **Förändringsfaktor: 1 + procenten vid ökning, 1 − procenten vid minskning.**
  8. **Procent per period staplas inte.** 4 % i 3 år är faktorn 1,04³, inte 12 %.
  9. **Redovisa prövningen.** Ett ensamt tal ger sällan poäng.

exercises:
  E:
    - equation: "Skriv som en potens: 6⁷ · 6²"
      hint1: "Samma bas och multiplikation."
      answer: ["6^9", "6⁹", "6**9"]
      solution: |
        7 + 2 = 9

        **6⁹**
        → Tränas i delmoment 1: **Potenslagar**

    - equation: "Skriv som en potens: (4²)⁵"
      hint1: "Potens av en potens."
      answer: ["4^10", "4¹⁰", "4**10"]
      solution: |
        2 · 5 = 10

        **4¹⁰**
        → Tränas i delmoment 1: **Potenslagar**

    - equation: "Skriv 5⁻² utan negativ exponent."
      hint1: "En negativ exponent flyttar potensen till nämnaren."
      answer: ["1/25", "1/5^2", "0,04", "0.04"]
      solution: |
        5⁻² = 1 / 5² = **1/25**

        En negativ exponent gör inte talet negativt.
        → Tränas i delmoment 1: **Potenslagar**

    - equation: "Lös ekvationen: x³ = 64"
      hint1: "x står i basen. Udda exponent — hur många lösningar?"
      answer: ["4", "x = 4"]
      solution: |
        4 · 4 · 4 = 64

        **x = 4**

        Udda exponent ger bara en lösning.
        → Tränas i delmoment 2: **Potensekvationer**

    - equation: "Lös ekvationen: x⁴ = 16"
      hint1: "Jämn exponent. Glöm inte den negativa lösningen."
      answer: ["±2", "x = ±2", "2 och −2", "2 och -2", "2, -2", "-2, 2"]
      solution: |
        2⁴ = 16 och (−2)⁴ = 16

        **x = ±2**
        → Tränas i delmoment 2: **Potensekvationer**

    - equation: "Lös ekvationen: 5x² + 4 = 129"
      hint1: "Gör potensen ensam först: dra bort 4, dela sedan med 5."
      answer: ["±5", "x = ±5", "5 och −5", "5 och -5", "5, -5", "-5, 5"]
      solution: |
        5x² + 4 = 129
        5x² = 125
        x² = 25

        **x = ±5**
        → Tränas i delmoment 2: **Potensekvationer**

    - equation: "Ett företag är värt 850 000 kr och växer med 8 % per år. Skriv en funktion för värdet V efter t år."
      hint1: "Startvärdet är C och 8 % ökning ger a."
      answer: ["V = 850000 · 1,08^t", "850000 · 1,08^t", "V = 850 000 · 1,08^t", "850000*1,08^t"]
      solution: |
        C = 850 000 och a = 1 + 0,08 = 1,08

        **V = 850 000 · 1,08^t**
        → Tränas i delmoment 3: **Exponentialfunktioner**

    - equation: "Växer eller avtar funktionen y = 1500 · 0,92^x?"
      hint1: "Titta på förändringsfaktorn."
      answer: ["avtar", "minskar", "den avtar", "avtagande", "den minskar", "sjunker"]
      solution: |
        a = 0,92, alltså mindre än 1.

        Funktionen **avtar**.
        → Tränas i delmoment 3: **Exponentialfunktioner**

    - equation: "Vilken förändringsfaktor hör till en minskning på 35 % per period?"
      hint1: "En minskning dras från det hela."
      answer: ["0,65", "0.65"]
      solution: |
        1 − 0,35 = **0,65**
        → Tränas i delmoment 3: **Exponentialfunktioner**

    - equation: "Lös ekvationen: 400 · 2^x = 6400"
      hint1: "Gör potensen ensam först."
      answer: ["4", "x = 4"]
      solution: |
        Dela med 400: 2^x = 16

        2⁴ = 16

        **x = 4**
        → Tränas i delmoment 4: **Exponentialekvationer**

    - equation: "Lös ekvationen: 900 · 3^x = 8100"
      hint1: "Dela båda leden med 900 och pröva sedan."
      answer: ["2", "x = 2"]
      solution: |
        Dela med 900: 3^x = 9

        3² = 9

        **x = 2**
        → Tränas i delmoment 4: **Exponentialekvationer**

    - equation: "En bil är värd 240 000 kr och tappar 50 % av värdet varje år. Efter hur många år är den värd 30 000 kr?"
      hint1: "Ställ upp 240 000 · 0,5^t = 30 000 och gör potensen ensam."
      answer: ["3", "3 år", "t = 3", "efter 3 år"]
      solution: |
        240 000 · 0,5^t = 30 000

        Dela med 240 000: 0,5^t = 0,125

        0,5³ = 0,125

        **Bilen är värd 30 000 kr efter 3 år.**
        → Tränas i delmoment 4: **Exponentialekvationer**

prev: exponentialekvationer
prev_lesson_title: "Exponentialekvationer"
next: statistik/lagesmatt
next_lesson_title: "Lägesmått"
---

## Vad den här sidan är

Tolv uppgifter, blandade från hela området. Ingen säger vilken metod som ska användas.

Gör dem **utan att öppna lösningarna**. Rätta dig själv efteråt.

## Så tolkar du resultatet

| Resultat | Vad det betyder |
|---|---|
| 11–12 rätt | Området sitter. Gå vidare till Statistik. |
| 8–10 rätt | Nästan. Varje lösning säger vilket delmoment som tränar just det. |
| Under 8 | Gå tillbaka och gör om delmomenten i tur och ordning. |

## Frågan som avgör metoden

**Var står x?**

- I **basen** — potensekvation. Dra roten. Jämn exponent ger `±`.
- I **exponenten** — exponentialekvation. Gör potensen ensam och pröva.

De två ser nästan likadana ut och har helt olika svar. `x⁵ = 32` har svaret 2. `2^x = 32` har svaret 5.

## Kvar av Del 2

Efter det här området återstår Statistik, och sedan generalrepetitionen som blandar alla tre områdena inför provet i vecka 47.
