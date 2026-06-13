---
slug: "omlasning/algebra/faktorisering"
title: "Faktorisering"
course: omlasning
moment: algebra
moment_title: "Algebra"
lesson_number: 2
lesson_total: 8

success_criteria:
  - Hitta den största gemensamma faktorn i ett uttryck
  - Bryta ut en faktor (t.ex. 6x + 9 = 3(2x + 3))
  - Bryta ut x när alla termer innehåller x (t.ex. x² + 5x = x(x + 5))
  - Kontrollera din faktorisering genom att multiplicera in igen

bank:
  - question: "Faktorisera: 4x + 8"
    answer: "4(x + 2)"
  - question: "Faktorisera: x² + 3x"
    answer: "x(x + 3)"
  - question: "Vad är största gemensamma faktorn i 6x + 9?"
    answer: "3"
  - question: "Faktorisera: 10x − 15"
    answer: "5(2x − 3)"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar förra delmomentet
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLScmwrVCou4vDFzJcCBI1Ybpb2lraRUkqCnlL35N3aAGSbMnAw/viewform"

worked_example: |
  ## 1. Bryta ut ett tal

  Faktorisera `6x + 9` så långt som möjligt.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Hitta största talet som går jämnt upp i BÅDA termerna | 6 och 9 delas båda av **3** | — |
  | Dela varje term med 3 | 6x ÷ 3 = 2x och 9 ÷ 3 = 3 | — |
  | Skriv 3:an utanför en parentes | — | **3(2x + 3)** |

  **Kontroll:** multiplicera in igen: 3 · 2x = 6x och 3 · 3 = 9. Stämmer! ✓

  ## 2. Bryta ut x

  Faktorisera `x² + 5x`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Båda termerna innehåller x | x² = x · x och 5x = 5 · x | — |
  | Bryt ut ett x | x² ÷ x = x och 5x ÷ x = 5 | — |
  | Skriv x:et utanför parentesen | — | **x(x + 5)** |

  **Kontroll:** x · x = x² och x · 5 = 5x. Stämmer! ✓

  ## 3. "Så långt som möjligt"

  `8x + 12` kan skrivas som `2(4x + 6)` — men det är INTE färdigt, för inuti parentesen
  går det att bryta ut 2 en gång till. Den **största** gemensamma faktorn är 4:

  `8x + 12 = 4(2x + 3)` — nu går det inte att bryta ut mer. Klart.

exercises:
  E:
    - equation: "Faktorisera: 3x + 12"
      hint1: "Vilket är det största talet som går jämnt upp i både 3 och 12?"
      hint2: "Talet är 3. Dela varje term med 3: vad blir 3x ÷ 3, och vad blir 12 ÷ 3? Skriv 3:an utanför en parentes."
      answer: ["3(x + 4)", "3(4 + x)"]
      solution: |
        3x + 12
        = 3 · x + 3 · 4
        = **3(x + 4)**

        Kontroll: 3 · x = 3x och 3 · 4 = 12 ✓

    - equation: "Faktorisera: 5x − 20"
      hint1: "Båda termerna går att dela med 5."
      hint2: "5x ÷ 5 = x och 20 ÷ 5 = 4. Minustecknet följer med in i parentesen."
      answer: ["5(x − 4)", "5(x - 4)"]
      solution: |
        5x − 20
        = 5 · x − 5 · 4
        = **5(x − 4)**

    - equation: "Vad är största gemensamma faktorn i 12x + 18?"
      hint1: "Vilka tal går jämnt upp i BÅDE 12 och 18? Det finns flera — du ska hitta det största."
      hint2: "2 funkar (ger 6x + 9), 3 funkar (ger 4x + 6) — men det finns ett ännu större tal som delar båda."
      answer: ["6"]
      solution: |
        12 = 6 · 2 och 18 = 6 · 3.

        Största gemensamma faktorn är **6**: 12x + 18 = 6(2x + 3)

    - equation: "Faktorisera: x² + 7x"
      hint1: "Det finns inget TAL som kan brytas ut här — men båda termerna innehåller något annat gemensamt."
      hint2: "Båda termerna innehåller x: x² = x · x och 7x = 7 · x. Bryt ut ett x."
      answer: ["x(x + 7)", "x(7 + x)"]
      solution: |
        x² + 7x
        = x · x + x · 7
        = **x(x + 7)**

        Kontroll: x · x = x² och x · 7 = 7x ✓

    - equation: "Faktorisera så långt som möjligt: 8x + 12"
      hint1: "Flera tal går att bryta ut — 2 funkar, men är det det STÖRSTA?"
      hint2: "Med 2 får du 2(4x + 6) — men inuti parentesen går det att bryta ut mer. Testa med 4 direkt."
      answer: ["4(2x + 3)", "4(3 + 2x)"]
      solution: |
        8x + 12
        = 4 · 2x + 4 · 3
        = **4(2x + 3)**

        > 2(4x + 6) är inte fel — men inte färdigt. Inuti parentesen kan 2 brytas ut igen.

    - equation: "Faktorisera: x² − 6x"
      hint1: "Båda termerna innehåller x. Minustecknet följer med."
      hint2: "x² ÷ x = x och 6x ÷ x = 6. Skriv x utanför parentesen: x(… − …)."
      answer: ["x(x − 6)", "x(x - 6)"]
      solution: |
        x² − 6x
        = x · x − x · 6
        = **x(x − 6)**

prev: uttryck
prev_lesson_title: "Uttryck"
next: stalla-upp-och-tolka-uttryck
next_lesson_title: "Ställa upp och tolka uttryck"
---

## Vad är faktorisering?

Faktorisering är **baklängesriktningen** av att multiplicera in i en parentes:

- **Multiplicera in:** `3(x + 4)` → `3x + 12`
- **Faktorisera:** `3x + 12` → `3(x + 4)`

Samma likhet — du går bara åt andra hållet.

## Hitta den gemensamma faktorn

För att faktorisera letar du efter något som **alla termer har gemensamt**.

`6x + 9` — vad delar både 6x och 9?

| Kandidat | 6x ÷ ? | 9 ÷ ? | Funkar? |
|---|---|---|---|
| 2 | 3x | 4,5 | ❌ 9 delas inte jämnt |
| 3 | 2x | 3 | ✅ |

Faktorn är 3: `6x + 9 = 3(2x + 3)`

## Bryta ut x

När **alla** termer innehåller x kan du bryta ut x:et självt:

`x² + 5x = x(x + 5)`

Tänk så här: `x²` betyder `x · x`, och `5x` betyder `5 · x`. Båda har ett x — ut med det.

## Kontrollera alltid

Det fina med faktorisering: du kan **alltid rätta dig själv**. Multiplicera in det du fått — kommer du tillbaka till uttrycket du startade med är det rätt.

> **Regel att skriva ner:** faktorisera = bryta ut det största gemensamma. Kontrollera genom att multiplicera in igen.
