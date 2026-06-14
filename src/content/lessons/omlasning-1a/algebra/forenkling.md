---
slug: "omlasning-1a/algebra/forenkling"
title: "Förenkling"
course: omlasning-1a
moment: algebra
moment_title: "Algebra"
lesson_number: 1
lesson_total: 8

success_criteria:
  - Samla ihop termer av samma sort (x-termer för sig, tal för sig)
  - Multiplicera in ett tal i en parentes
  - Subtrahera en parentes och hålla koll på tecknen
  - Skriva svaret så enkelt som möjligt

bank:
  - question: "Förenkla: 4x + 3x"
    answer: "7x"
  - question: "Förenkla: 8x + 2 − 3x"
    answer: "5x + 2"
  - question: "Multiplicera in: 3(x + 4)"
    answer: "3x + 12"
  - question: "Förenkla: 5a − (2a + 1)"
    answer: "3a − 1"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

worked_example: |
  Att förenkla ett uttryck är att skriva samma sak men **kortare**. Tre saker räcker långt.

  ## 1. Samla samma sort

  Bara termer av **samma sort** kan slås ihop: x-termer med x-termer, tal med tal.

  *7x + 4 − 2x + 5*

  | Sort | Räkning | Resultat |
  |---|---|---|
  | x-termer | 7x − 2x | 5x |
  | tal | 4 + 5 | 9 |

  → **5x + 9**

  ## 2. Multiplicera in i en parentes

  Talet framför parentesen gångas med **varje** term inuti.

  *3(x + 4)* = 3 · x + 3 · 4 = **3x + 12**

  ## 3. Subtrahera en parentes — se upp med tecknen

  Ett minus framför en parentes byter tecken på **allt** inuti.

  *9a − (2a + 5)* = 9a − 2a − 5 = **7a − 5**

exercises:
  E:
    - equation: "Förenkla: 4x + 5x"
      hint1: "Samma sort — båda är x-termer. Lägg ihop talen framför x."
      answer: ["9x"]
      solution: |
        4x + 5x = **9x**

    - equation: "Förenkla: 7x + 3 − 2x"
      hint1: "Samla x-termerna för sig. 3:an är ett ensamt tal och står kvar."
      answer: ["5x + 3", "3 + 5x"]
      solution: |
        7x − 2x = 5x, talet 3 står kvar → **5x + 3**

    - equation: "Förenkla: 6a + 2 − a + 5"
      hint1: "a betyder 1a. Samla a-termerna, samla talen."
      hint2: "6a − a = 5a och 2 + 5 = 7."
      answer: ["5a + 7", "7 + 5a"]
      solution: |
        6a − a = 5a och 2 + 5 = 7 → **5a + 7**

    - equation: "Multiplicera in: 3(x + 2)"
      hint1: "3:an gångas med BÅDA termerna i parentesen."
      answer: ["3x + 6", "6 + 3x"]
      solution: |
        3(x + 2) = 3 · x + 3 · 2 = **3x + 6**

    - equation: "Multiplicera in: 5(2x − 1)"
      hint1: "5:an gångas med 2x och med −1."
      hint2: "5 · 2x = 10x och 5 · (−1) = −5."
      answer: ["10x − 5", "10x - 5"]
      solution: |
        5(2x − 1) = 5 · 2x − 5 · 1 = **10x − 5**

    - equation: "Förenkla: 9x − (4x + 2)"
      hint1: "Minus framför parentesen byter tecken på allt inuti: −4x och −2."
      answer: ["5x − 2", "5x - 2"]
      solution: |
        9x − (4x + 2) = 9x − 4x − 2 = **5x − 2**

    - equation: "Förenkla: 8a − (3a − 5)"
      hint1: "Minustecknet byter tecken på BÅDA termerna: −3a blir kvar som −3a, och −(−5) blir +5."
      hint2: "8a − 3a + 5."
      answer: ["5a + 5", "5 + 5a"]
      solution: |
        8a − (3a − 5) = 8a − 3a + 5 = **5a + 5**

next: grundlaggande-ekvationer
next_lesson_title: "Grundläggande ekvationer"
---

## Förenkla = skriva kortare

Ett uttryck som `7x + 4 − 2x + 5` betyder samma sak som `5x + 9` — men det andra är enklare att läsa och räkna med. Att förenkla är att städa ihop uttrycket.

## Samma sort med samma sort

Tänk på det som att sortera. **x-termer** är en sort, **tal** (konstanter) är en annan. Du kan bara slå ihop det som är av samma sort:

- `4x + 3x = 7x` ✓ (samma sort)
- `4x + 3 = 4x + 3` (olika sort — kan inte slås ihop)

> `a` betyder alltid `1a`. Så `6a − a = 5a`.

## Multiplicera in i en parentes

Talet utanför parentesen gångas med **varje** term inuti:

> `3(x + 4) = 3 · x + 3 · 4 = 3x + 12`

## Minus framför en parentes

Det här är felfällan. Ett minus framför parentesen byter tecken på **allt** inuti:

> `9a − (2a + 5) = 9a − 2a − 5 = 7a − 5`

Tänk: minuset "delas ut" till varje term, precis som en trea skulle ha gjorts.

> **Regel att skriva ner:** Samla samma sort. Tal framför parentes gångas med allt inuti. Minus framför parentes byter tecken på allt inuti.
