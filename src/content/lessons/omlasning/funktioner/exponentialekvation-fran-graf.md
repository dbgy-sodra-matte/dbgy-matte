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

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSdIyJx68ArgFstbSSDTNgPuBMk3QN5vskwsLTUe6wx6ifgLWQ/viewform"

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
    - equation: "Den här grafen visar en exponentialfunktion. Vad är startvärdet C — där kurvan skär y-axeln?"
      hint1: "C är y-värdet vid x = 0. Läs av var kurvan börjar på y-axeln."
      hint2: "Kurvan startar på 300 vid y-axeln."
      answer: ["300"]
      solution: |
        Vid x = 0 startar kurvan på y = **300**. Det är C.
      graf:
        typ: exponentiell
        C: 300
        a: 2
        xmax: 2
        ymax: 1200
        ySteg: 200
        punkter: [[0, 300], [1, 600]]

    - equation: "Använd samma graf. Vad är förändringsfaktorn a? (Dela y-värdet vid x = 1 med y-värdet vid x = 0.)"
      hint1: "Läs av y vid x = 0 och vid x = 1, och dela det större med det mindre."
      hint2: "y(1) = 600 och y(0) = 300. a = 600 / 300."
      answer: ["2"]
      solution: |
        a = 600 / 300 = **2** (värdet dubblas per steg).
      graf:
        typ: exponentiell
        C: 300
        a: 2
        xmax: 2
        ymax: 1200
        ySteg: 200
        punkter: [[0, 300], [1, 600]]

    - equation: "Vad är förändringsfaktorn a för funktionen som den här grafen visar?"
      hint1: "Läs av y vid x = 0 och vid x = 1. Dela y(1) med y(0)."
      hint2: "y(0) = 400 och y(1) = 480. a = 480 / 400."
      answer: ["1.2", "1,2"]
      solution: |
        a = 480 / 400 = **1,2** (växer med 20 % per steg).
      graf:
        typ: exponentiell
        C: 400
        a: 1.2
        xmax: 3
        ymax: 800
        ySteg: 100
        punkter: [[0, 400], [1, 480]]

    - equation: "Bestäm hela funktionen y = C · a^x utifrån grafen. (Kurvan går genom (0, 100) och (1, 150).)"
      hint1: "C läser du av där kurvan skär y-axeln. a = y(1) / y(0)."
      hint2: "C = 100. a = 150 / 100 = 1,5."
      answer: ["y = 100 · 1,5^x", "100 · 1,5^x", "y=100·1,5^x", "y = 100·1.5^x"]
      solution: |
        C = 100 (skär y-axeln i 100).
        a = 150 / 100 = 1,5.
        **y = 100 · 1,5^x**
      graf:
        typ: exponentiell
        C: 100
        a: 1.5
        xmax: 3
        ymax: 400
        ySteg: 50
        punkter: [[0, 100], [1, 150]]

    - equation: "Skriv funktionen som den här grafen visar. (Kurvan går genom (0, 50) och (1, 150).)"
      hint1: "C är där kurvan skär y-axeln. a = y(1) / y(0)."
      hint2: "C = 50. a = 150 / 50 = 3."
      answer: ["y = 50 · 3^x", "50 · 3^x", "y=50·3^x"]
      solution: |
        C = 50, a = 150 / 50 = 3 → **y = 50 · 3^x**
      graf:
        typ: exponentiell
        C: 50
        a: 3
        xmax: 2
        ymax: 500
        ySteg: 100
        punkter: [[0, 50], [1, 150]]

    - equation: "Vad är förändringsfaktorn a för den här grafen? (Tips: jämför y(0) och y(1) — växer eller avtar den?)"
      hint1: "Läs av y(0) och y(1) och dela y(1) med y(0)."
      hint2: "y(0) = 1000 och y(1) = 900. a = 900 / 1000."
      answer: ["0.9", "0,9"]
      solution: |
        a = 900 / 1000 = **0,9**. Eftersom a < 1 **avtar** funktionen (−10 % per steg).
      graf:
        typ: exponentiell
        C: 1000
        a: 0.9
        xmax: 4
        ymax: 1000
        ySteg: 200
        punkter: [[0, 1000], [1, 900]]

    - equation: "Grafen går genom (0, 80), (1, 160) och (2, 320). Skriv funktionen y = C · a^x."
      hint1: "C är värdet vid x = 0. a är hur mycket det multipliceras per steg."
      hint2: "C = 80. a = 160 / 80 = 2. Kontrollera: 320 / 160 = 2 ✓."
      answer: ["y = 80 · 2^x", "80 · 2^x", "y=80·2^x"]
      solution: |
        C = 80, a = 160 / 80 = 2 (och 320 / 160 = 2 ✓) → **y = 80 · 2^x**
      graf:
        typ: punkter
        punkter: [[0, 80], [1, 160], [2, 320]]
        visaKurva: true
        xmax: 3
        ymax: 350
        ySteg: 50

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
