---
slug: "omlasning/funktioner/exponentialekvation-fran-graf"
title: "Exponentialekvation från graf"
course: omlasning
moment: funktioner
moment_title: "Funktioner"
lesson_number: 7
lesson_total: 7

success_criteria:
  - Läsa av startvärdet C där grafen skär y-axeln (x = 0)
  - Räkna ut förändringsfaktorn a från två punkter
  - Skriva ihop exponentialfunktionen y = C · a^x från en graf eller tabell
  - Kontrollera funktionen genom att sätta in ett känt värde

bank:
  - question: "En graf skär y-axeln i 200. Vad är C?"
    answer: "200"
  - question: "Vid x = 0 är y = 100, vid x = 1 är y = 150. Vad är a?"
    answer: "1,5 (150/100)"
  - question: "C = 200 och a = 2. Skriv funktionen."
    answer: "y = 200 · 2^x"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — sen är hela Funktioner-området klart och du kan anmäla dig till tenta-av!

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSdvyzhNP9KbDhCi2RzqoztNtNZX4yqLI0jk02bXi_MKVYeEqQ/viewform"

worked_example: |
  Att hitta exponentialfunktionen från en graf är att hitta **C** och **a** — precis som med räta linjen, fast nu multipliceras värdet i stället för att adderas.

  ## 1. Hitta C — där grafen skär y-axeln

  C är y-värdet vid **x = 0** (startvärdet).

  *En graf går genom (0, 100), (1, 150), (2, 225).* → C = **100**.

  ## 2. Hitta a — hur mycket det multipliceras per steg

  Dela ett y-värde med det föregående:

  | Steg | Räkning | Resultat |
  |---|---|---|
  | a = y(1) / y(0) | 150 / 100 | **1,5** |
  | Kontroll: y(2)/y(1) | 225 / 150 | 1,5 ✓ |

  Samma faktor mellan varje steg = exponentiellt.

  ## 3. Skriv ihop funktionen

  > C = 100, a = 1,5 → **y = 100 · 1,5^x**

  ## 4. Kontrollera

  Sätt in x = 2: 100 · 1,5^2 = 100 · 2,25 = 225 ✓ (stämmer med grafen).

exercises:
  E:
    - equation: "En exponentiell graf skär y-axeln i punkten (0, 300). Vad är startvärdet C?"
      hint1: "C är y-värdet där x = 0."
      hint2: "Punkten (0, 300) — y-värdet är 300."
      answer: ["300"]
      solution: |
        Vid x = 0 är y = 300, så C = **300**.

    - equation: "En graf går genom (0, 100) och (1, 200). Vad är förändringsfaktorn a?"
      hint1: "a = hur mycket y multipliceras per steg = y vid x=1 delat med y vid x=0."
      hint2: "200 / 100."
      answer: ["2"]
      solution: |
        a = 200 / 100 = **2** (värdet dubblas per steg).

    - equation: "En graf går genom (0, 400) och (1, 480). Vad är förändringsfaktorn a?"
      hint1: "Dela y vid x=1 med y vid x=0."
      hint2: "480 / 400."
      answer: ["1.2", "1,2"]
      solution: |
        a = 480 / 400 = **1,2** (växer med 20 % per steg).

    - equation: "En graf har C = 200 och a = 2. Skriv funktionen y = C · a^x."
      hint1: "Sätt in C och a i formen y = C · a^x."
      hint2: "C = 200, a = 2."
      answer: ["y = 200 · 2^x", "200 · 2^x", "y=200·2^x"]
      solution: |
        **y = 200 · 2^x**

    - equation: "En graf går genom (0, 50) och (1, 150). Skriv hela funktionen y = C · a^x."
      hint1: "C är y vid x=0. a är y(1)/y(0)."
      hint2: "C = 50. a = 150/50 = 3."
      answer: ["y = 50 · 3^x", "50 · 3^x", "y=50·3^x"]
      solution: |
        C = 50, a = 150/50 = 3 → **y = 50 · 3^x**

    - equation: "En graf går genom (0, 1000) och (1, 900). Avtar eller växer den, och vad är a?"
      hint1: "Räkna a = 900/1000. Är den över eller under 1?"
      hint2: "900/1000 = 0,9. Under 1 → avtar."
      answer: ["0.9", "0,9", "avtar a = 0,9", "a = 0,9 avtar"]
      solution: |
        a = 900 / 1000 = **0,9** → funktionen **avtar** (−10 % per steg).

    - equation: "En värdetabell visar (0, 80), (1, 160), (2, 320). Skriv funktionen y = C · a^x."
      hint1: "C är värdet vid x=0. a är hur mycket det multipliceras: dela 160 med 80."
      hint2: "C = 80, a = 160/80 = 2. Kontrollera: 320/160 = 2 ✓."
      answer: ["y = 80 · 2^x", "80 · 2^x", "y=80·2^x"]
      solution: |
        C = 80, a = 160/80 = 2 (och 320/160 = 2 ✓) → **y = 80 · 2^x**

prev: exponentialfunktioner-2
prev_lesson_title: "Exponentialfunktioner 2"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Funktioner"
---

## Hitta funktionen från en graf

Det här är baklängesriktningen: i stället för att rita från en funktion ska du **läsa ut funktionen** ur en graf eller värdetabell. Du letar efter två saker — **C** och **a** — och skriver `y = C · a^x`.

## Steg 1: hitta C (startvärdet)

C är y-värdet där grafen skär y-axeln, alltså vid **x = 0**.

> Grafen går genom (0, 100) → C = 100.

## Steg 2: hitta a (förändringsfaktorn)

a är hur mycket värdet **multipliceras** för varje steg x tar. Dela ett y-värde med det föregående:

```
a = y-värdet vid nästa steg / y-värdet vid steget innan
```

> (0, 100) och (1, 150): a = 150 / 100 = **1,5**

**Kontroll:** dela nästa par också. Om du får samma a är det verkligen exponentiellt:
> (1, 150) och (2, 225): 225 / 150 = 1,5 ✓

## Steg 3: skriv ihop och kontrollera

> C = 100, a = 1,5 → **y = 100 · 1,5^x**

Kontrollera med en känd punkt: vid x = 2 → 100 · 1,5² = 100 · 2,25 = 225 ✓

## Linjär eller exponentiell graf?

| Mellan stegen… | …är det |
|---|---|
| samma tal **adderas** (+50, +50, …) | linjär — använd y = kx + m |
| samma tal **multipliceras** (·2, ·2, …) | exponentiell — använd y = C · a^x |

> **Regel att skriva ner:** C = y vid x = 0. a = y(nästa) / y(förra). Skriv y = C · a^x och kontrollera med en punkt.

## 🎉 Sista delmomentet!

Är checkpointen klarad har du gått igenom hela Funktioner-området. Gör "Redo att tenta?"-testet och anmäl dig till tenta-av.
