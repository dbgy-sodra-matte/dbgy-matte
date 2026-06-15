---
slug: "omlasning-1a/algebra/formler"
title: "Formler"
course: omlasning-1a
moment: algebra
moment_title: "Algebra"
lesson_number: 7
lesson_total: 8

success_criteria:
  - Sätta in värden i en formel och räkna ut svaret
  - Räkna i rätt ordning (gånger före plus)
  - Ställa upp en enkel formel utifrån en text

bank:
  - question: "O = 2a + 2b. Beräkna O när a = 3 och b = 5."
    answer: "O = 16"
  - question: "A = b · h. Beräkna A när b = 4 och h = 6."
    answer: "A = 24"
  - question: "s = v · t. Beräkna s när v = 50 och t = 3."
    answer: "s = 150"
  - question: "En taxi: 40 kr + 12 kr/km. Skriv formeln för kostnaden efter x km."
    answer: "K = 40 + 12x"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSe7Z970ciu4WLdI8FYbygLG3BPEjAsjCk5FgrJOtPwUFzcR_Q/viewform"

worked_example: |
  En formel är ett uttryck med bokstäver. Du gör två saker med formler: **sätta in värden** och **ställa upp** en egen.

  ## 1. Sätta in värden

  Byt ut varje bokstav mot sitt tal och räkna. **Gånger före plus.**

  *O = 2a + 2b, beräkna O när a = 6 och b = 4.*

  | Steg | Räkning | Resultat |
  |---|---|---|
  | Sätt in | 2 · 6 + 2 · 4 | — |
  | Räkna gångningarna först | 12 + 8 | **O = 20** |

  ## 2. Ställa upp en formel ur text

  Leta efter en **fast del** (betalas en gång) och en **rörlig del** (per styck — gångas med antalet).

  *En taxi kostar 45 kr i startavgift plus 12 kr per kilometer.*

  - Fast del: 45 kr
  - Rörlig del: 12 kr × antal km = 12x

  → **K = 45 + 12x**

exercises:
  E:
    - equation: "O = 2a + 2b. Beräkna O när a = 6 och b = 4."
      hint1: "Sätt in talen: 2 · 6 + 2 · 4. Räkna gångningarna först."
      answer: ["20", "O = 20"]
      solution: |
        O = 2 · 6 + 2 · 4 = 12 + 8 = **20**

    - equation: "A = b · h. Beräkna A när b = 5 och h = 8."
      hint1: "A = b gånger h. Sätt in talen."
      answer: ["40", "A = 40"]
      solution: |
        A = 5 · 8 = **40**

    - equation: "s = v · t. Beräkna s när v = 60 och t = 4."
      hint1: "s = v gånger t."
      answer: ["240", "s = 240"]
      solution: |
        s = 60 · 4 = **240**

    - equation: "y = 3x + 5. Beräkna y när x = 4."
      hint1: "Sätt in 4 i stället för x: 3 · 4 + 5. Gånger före plus."
      answer: ["17", "y = 17"]
      solution: |
        y = 3 · 4 + 5 = 12 + 5 = **17**

    - equation: "En taxi kostar 45 kr i startavgift plus 12 kr per kilometer. Skriv en formel för kostnaden K efter x kilometer."
      hint1: "Fast del betalas en gång (inget x). Rörlig del gångas med x."
      answer: ["K = 45 + 12x", "45 + 12x", "K = 12x + 45"]
      solution: |
        Fast del: 45 kr. Rörlig del: 12 kr per km = 12x.

        **K = 45 + 12x**

    - equation: "Ett gymkort kostar 200 kr i startavgift plus 100 kr per månad. Skriv en formel för kostnaden efter x månader."
      hint1: "200 kr betalas en gång. 100 kr gångas med antalet månader."
      answer: ["200 + 100x", "100x + 200", "K = 200 + 100x"]
      solution: |
        **200 + 100x**

    - equation: "O = 2a + 2b. Beräkna O när a = 7 och b = 5."
      hint1: "2 · 7 + 2 · 5. Räkna gångningarna först."
      answer: ["24", "O = 24"]
      solution: |
        O = 2 · 7 + 2 · 5 = 14 + 10 = **24**

prev: ekvationer-med-namnare
prev_lesson_title: "Ekvationer med nämnare"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Algebra"
---

## Vad är en formel?

En formel är ett uttryck med bokstäver som beskriver ett samband, t.ex. en rektangels omkrets `O = 2a + 2b`. Bokstäverna står för tal du sätter in.

## Sätta in värden

Byt ut varje bokstav mot sitt tal och räkna ut. Kom ihåg räkneordningen — **gånger före plus**:

> `O = 2a + 2b`, a = 6, b = 4 → `2 · 6 + 2 · 4 = 12 + 8 = 20`

## Ställa upp en formel ur text

Många vardagsproblem har en **fast del** och en **rörlig del**:

- **Fast del** — betalas en gång (startavgift, fast avgift). Inget x.
- **Rörlig del** — per styck/km/månad. Gångas med antalet, alltså med x.

> "45 kr i startavgift plus 12 kr per km" → fast 45, rörligt 12x → `K = 45 + 12x`

När formeln är uppställd kan du sätta in vilket x som helst och få kostnaden.

> **Regel att skriva ner:** Sätt in talen och räkna gånger före plus. För egen formel: hitta den fasta delen (utan x) och den rörliga delen (gångas med x).
