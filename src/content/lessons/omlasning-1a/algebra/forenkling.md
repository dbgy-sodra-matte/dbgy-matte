---
slug: "omlasning-1a/algebra/forenkling"
title: "Förenkling"
course: omlasning-1a
moment: algebra
moment_title: "Algebra"
lesson_number: 1
lesson_total: 7

success_criteria:
  - Samla ihop termer av samma sort (x-termer för sig, tal för sig)
  - Multiplicera in ett tal i en parentes
  - Subtrahera en parentes och hålla koll på tecknen
  - Skriva svaret så enkelt som möjligt

bank:
  - question: "Förenkla: 4x + 3x"
    answer: "7x"
    solution: |
      Båda termerna är av samma sort (x), så de får slås ihop.
      4 + 3 = 7, alltså **7x**
  - question: "Förenkla: 8x + 2 − 3x"
    answer: "5x + 2"
    solution: |
      Slå bara ihop det som är av samma sort. x-termerna: 8x − 3x = 5x.
      Tvåan har inget x och står kvar för sig.
      Svar: **5x + 2**
  - question: "Multiplicera in: 3(x + 4)"
    answer: "3x + 12"
    solution: |
      Multiplicera trean med varje term inne i parentesen.
      3 · x = 3x och 3 · 4 = 12.
      Svar: **3x + 12**
  - question: "Förenkla: 5a − (2a + 1)"
    answer: "3a − 1"
    solution: |
      Minustecknet framför parentesen byter tecken på allt inuti.
      5a − 2a − 1.
      Slå ihop a-termerna: **3a − 1**

how_to:
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner, minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSc9Wrh4CUWAUglTyIjku0zGuZQ8PCQqT8S9882RuqQByx_okA/viewform"

worked_example: |
  Att förenkla ett uttryck är att skriva samma sak men **kortare**. Tre saker räcker långt.

  ## Samla samma sort

  Bara termer av **samma sort** kan slås ihop: x-termer med x-termer, tal med tal.

  *7x + 4 − 2x + 5*

  | Sort | Räkning | Resultat |
  |---|---|---|
  | x-termer | 7x − 2x | 5x |
  | tal | 4 + 5 | 9 |

  → **5x + 9**

  ## Multiplicera in i en parentes

  Talet framför parentesen gångas med **varje** term inuti.

  *3(x + 4)* = 3 · x + 3 · 4 = **3x + 12**

  ## Subtrahera en parentes: se upp med tecknen

  Ett minus framför en parentes byter tecken på **allt** inuti.

  *9a − (2a + 5)* = 9a − 2a − 5 = **7a − 5**

exercises:
  E:
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

    - equation: "Elin packar 4 lådor med x tvålar i varje. Sedan packar hon 5 likadana lådor till. Skriv ett så kort uttryck som möjligt för hur många tvålar hon har packat."
      hint1: "x = antalet tvålar i en låda. Hur många tvålar finns i 4 lådor? I 5 lådor?"
      hint2: "4 lådor = 4x och 5 lådor = 5x. Totalt 4x + 5x. Lägg ihop talen framför x, eftersom båda är x-termer."
      answer: ["9x", "9x tvålar"]
      solution: |
        x = antalet tvålar i en låda.

        4x + 5x = 9x

        **Hon har packat 9x tvålar.** Kontroll: 4 + 5 = 9 lådor med x tvålar i varje ✓

    - equation: "Ali har 7 kartonger med x burkar i varje, plus 3 lösa burkar. Han säljer 2 kartonger. Skriv ett så kort uttryck som möjligt för hur många burkar han har kvar."
      hint1: "x = antalet burkar i en kartong. Hur många burkar har han från början? Hur många säljer han?"
      hint2: "Från början: 7x + 3. Han säljer 2x: 7x + 3 − 2x. Samla x-termerna. 3:an står kvar, eftersom den är ett ensamt tal."
      answer: ["5x + 3", "3 + 5x", "5x + 3 burkar"]
      solution: |
        x = antalet burkar i en kartong.

        7x + 3 − 2x
        7x − 2x = 5x, talet 3 står kvar → 5x + 3

        **Han har 5x + 3 burkar kvar.** Kontroll: 7 − 2 = 5 kartonger kvar, plus de 3 lösa burkarna ✓

next: grundlaggande-ekvationer
next_lesson_title: "Grundläggande ekvationer"
---

## Förenkla = skriva kortare

Ett uttryck som `7x + 4 − 2x + 5` betyder samma sak som `5x + 9`, men det andra är enklare att läsa och räkna med. Att förenkla är att städa ihop uttrycket.

## Samma sort med samma sort

Tänk på det som att sortera. **x-termer** är en sort, **tal** (konstanter) är en annan. Du kan bara slå ihop det som är av samma sort:

- `4x + 3x = 7x` ✓ (samma sort)
- `4x + 3 = 4x + 3` (olika sort, kan inte slås ihop)

> `a` betyder alltid `1a`. Så `6a − a = 5a`.

## Multiplicera in i en parentes

Talet utanför parentesen gångas med **varje** term inuti:

> `3(x + 4) = 3 · x + 3 · 4 = 3x + 12`

## Minus framför en parentes

Det här är felfällan. Ett minus framför parentesen byter tecken på **allt** inuti:

> `9a − (2a + 5) = 9a − 2a − 5 = 7a − 5`

Tänk: minuset "delas ut" till varje term, precis som en trea skulle ha gjorts.

> **Regel att skriva ner:** Samla samma sort. Tal framför parentes gångas med allt inuti. Minus framför parentes byter tecken på allt inuti.
