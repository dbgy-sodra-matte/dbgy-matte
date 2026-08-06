---
slug: "omlasning/funktioner/exponentialfunktioner-2"
title: "Exponentialfunktioner 2"
course: omlasning
moment: funktioner
moment_title: "Funktioner"
lesson_number: 6
lesson_total: 7

success_criteria:
  - Ställa upp en exponentialfunktion från en text (start + procent per steg)
  - Räkna ut förändringsfaktorn a från en procentuell förändring
  - Beräkna värdet efter flera steg
  - Skilja på när något ska räknas linjärt (samma summa) och exponentiellt (samma procent)

bank:
  - question: "1000 kr växer 3 % per år. Skriv funktionen."
    answer: "y = 1000 · 1,03^x"
  - question: "Vilken faktor a hör till +25 % per steg?"
    answer: "1,25"
  - question: "Vilken faktor a hör till −10 % per steg?"
    answer: "0,90"
  - question: "y = 2000 · 0,5^x. Vad är y när x = 2?"
    answer: "500"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSfV3y2ygdBACWvmYWzKX2Yon0LeMS8zdT9WoRIEia2pK5WvMg/viewform"

worked_example: |
  Nu bygger du funktionen själv från en text — och använder förändringsfaktorn från ekonomin.

  ## 1. Ställa upp funktionen från text

  *5 000 kr på ett konto med 4 % ränta per år.*

  | Del | Värde | Varifrån |
  |---|---|---|
  | C (startvärde) | 5 000 | beloppet du börjar med |
  | a (faktor) | 1,04 | +4 % → 1 + 0,04 |
  | **Funktionen** | **y = 5 000 · 1,04^x** | x = antal år |

  ## 2. Faktorn a från procent (samma som ekonomin)

  - +25 % per steg → a = 1,25
  - −10 % per steg → a = 0,90
  - −50 % per steg → a = 0,50

  ## 3. Beräkna efter flera steg

  *y = 5 000 · 1,04^x. Hur mycket efter 3 år?*

  | Steg | Räkning | Resultat |
  |---|---|---|
  | Potensen | 1,04^3 ≈ 1,1249 | — |
  | Gånger C | 5 000 · 1,1249 | **≈ 5 625 kr** |

  ## 4. Linjärt eller exponentiellt?

  - Samma **summa** läggs till varje gång → **linjärt** (y = kx + m)
  - Samma **procent** varje gång → **exponentiellt** (y = C · a^x)

exercises:
  E:
    - equation: "Vilken förändringsfaktor a hör till en ökning på 20 % per steg?"
      hint1: "Samma som i ekonomin: ökning = 1 + procenttalet som decimal."
      hint2: "1 + 0,20."
      answer: ["1.2", "1,2", "1.20"]
      solution: |
        +20 % → a = 1 + 0,20 = **1,2**

    - equation: "Vilken förändringsfaktor a hör till en minskning på 15 % per steg?"
      hint1: "Minskning = 1 − procenttalet som decimal."
      hint2: "1 − 0,15."
      answer: ["0.85", "0,85"]
      solution: |
        −15 % → a = 1 − 0,15 = **0,85**

    - equation: "2 000 kr sätts in med 3 % ränta per år. Skriv exponentialfunktionen y = C · a^x."
      hint1: "C är startbeloppet. a är faktorn för +3 %."
      hint2: "C = 2000, a = 1,03."
      answer: ["y = 2000 · 1,03^x", "2000 · 1,03^x", "y=2000·1,03^x", "y = 2000·1.03^x"]
      solution: |
        C = 2 000, a = 1,03 → **y = 2 000 · 1,03^x**

    - equation: "En befolkning på 5 000 växer 10 % per år. Skriv funktionen y = C · a^x."
      hint1: "Startvärde C = 5000. Faktor för +10 %?"
      hint2: "a = 1,10."
      answer: ["y = 5000 · 1,1^x", "5000 · 1,1^x", "y = 5000 · 1,10^x", "y=5000·1,1^x"]
      solution: |
        C = 5 000, a = 1,10 → **y = 5 000 · 1,1^x**

    - equation: "Beräkna y i y = 2000 · 0,5^x när x = 2."
      hint1: "Räkna potensen 0,5^2 först, gånger sedan med 2000."
      hint2: "0,5^2 = 0,25. Sedan 2000 · 0,25."
      answer: ["500"]
      solution: |
        0,5^2 = 0,25
        y = 2000 · 0,25 = **500**

    - equation: "Ett sparande beskrivs av y = 1000 · 1,05^x. Vad är värdet efter 2 år (x = 2)? Avrunda till hela kronor."
      hint1: "Räkna 1,05^2 först (1,05 · 1,05), gånger sedan med 1000."
      hint2: "1,05^2 = 1,1025. Sedan 1000 · 1,1025."
      answer: ["1103", "1102.5", "1 103"]
      solution: |
        1,05^2 = 1,1025
        y = 1000 · 1,1025 = 1 102,5 ≈ **1 103 kr**

    - equation: "Du sparar 100 kr och lägger till 100 kr varje månad. Är det linjärt eller exponentiellt?"
      hint1: "Läggs samma SUMMA till varje gång, eller samma PROCENT?"
      hint2: "Samma summa (100 kr) varje gång → linjärt."
      answer: ["linjärt", "Linjärt"]
      solution: |
        Samma **summa** (100 kr) läggs till varje gång → **linjärt** (y = 100x + 100).

        Hade det varit "+5 % varje månad" vore det exponentiellt.

prev: exponentialfunktioner
prev_lesson_title: "Exponentialfunktioner"
next: exponentialekvation-fran-graf
next_lesson_title: "Exponentialekvation från graf"
---

## Bygg funktionen själv

Förra delmomentet läste du av C och a. Nu **bygger du funktionen** från en text — och du har redan verktyget från ekonomin: förändringsfaktorn.

## Faktorn a = förändringsfaktorn

Det är exakt samma a som i ekonomimomentet:

| Förändring per steg | a |
|---|---|
| +5 % | 1,05 |
| +20 % | 1,20 |
| −10 % | 0,90 |
| −50 % | 0,50 |

## Ställa upp funktionen

Hitta **C** (startvärdet) och **a** (faktorn), skriv ihop:

> *3 000 kr, 4 % ränta per år:*
> C = 3 000, a = 1,04 → **y = 3 000 · 1,04^x**

> *En bil värd 200 000 kr tappar 10 % per år:*
> C = 200 000, a = 0,90 → **y = 200 000 · 0,90^x**

## Beräkna efter flera steg

Sätt in x, räkna potensen, gånger med C:

> `y = 3 000 · 1,04^x`, efter 3 år:
> 1,04^3 ≈ 1,1249 → 3 000 · 1,1249 ≈ **3 375 kr**

## Linjärt eller exponentiellt? — den viktiga skillnaden

Detta avgör vilken sorts funktion du ska använda:

| Om texten säger… | …är det |
|---|---|
| "+100 kr varje månad" (samma summa) | **linjärt** y = kx + m |
| "+5 % varje månad" (samma procent) | **exponentiellt** y = C · a^x |

> **Regel att skriva ner:** procent per steg → exponentiellt, a = förändringsfaktorn. Fast summa per steg → linjärt.
