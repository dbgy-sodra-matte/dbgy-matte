---
slug: "omlasning-1a/ekonomi/forandringsfaktor"
title: "Förändringsfaktor"
course: omlasning-1a
moment: ekonomi
moment_title: "Ekonomi"
lesson_number: 1
lesson_total: 5

success_criteria:
  - Räkna ut förändringsfaktorn för en ökning (+15 % → 1,15)
  - Räkna ut förändringsfaktorn för en minskning (−40 % → 0,60)
  - Använda förändringsfaktorn för att räkna ut ett nytt värde

bank:
  - question: "Vad är förändringsfaktorn för en ökning på 8 %?"
    answer: "1,08"
  - question: "Vad är förändringsfaktorn för en minskning på 15 %?"
    answer: "0,85"
  - question: "En tröja kostar 400 kr. Priset höjs med 20 %. Nytt pris?"
    answer: "480 kr"
  - question: "En vara på 500 kr får 30 % rabatt. Reapris?"
    answer: "350 kr"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Testa rabatt-räknaren — den visar sambandet pris, förändring och nytt pris
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

widget: "rabatt-raknaren/v1"
widget_height: 620

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSf1_iwHjVmq8XPawSMYcopgQKLLNsZTDOCNbViW3Xiv3UgnkA/viewform"

worked_example: |
  Hela tricket: **nytt värde = gammalt värde · förändringsfaktor**.

  ## 1. Ökning — +15 % på 200 kr

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Räkna ut faktorn | +15 % → 1 + 0,15 | **1,15** |
  | Multiplicera | 200 · 1,15 | **230 kr** |

  > **Tumregel ökning:** 1 + procenttalet som decimal.

  ## 2. Minskning — −40 % på 600 kr

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Räkna ut faktorn | −40 % → 1 − 0,40 | **0,60** (du har KVAR 60 %) |
  | Multiplicera | 600 · 0,60 | **360 kr** |

  > **Tumregel minskning:** 1 − procenttalet som decimal.

exercises:
  E:
    - equation: "Vad är förändringsfaktorn för en ökning på 12 %?"
      hint1: "Vid ökning behåller du hela det gamla (100 %) och lägger till ökningen."
      hint2: "Tumregel: 1 + procenttalet som decimal. 12 % = 0,12, så 1 + 0,12."
      answer: ["1,12", "1.12"]
      solution: |
        Ökning på 12 % → 1 + 0,12 = **1,12**

        Faktorn vid ökning är alltid större än 1.

    - equation: "Vad är förändringsfaktorn för en minskning på 25 %?"
      hint1: "Vid minskning räknar du ut hur mycket du har KVAR."
      hint2: "Tumregel: 1 − procenttalet som decimal. 25 % = 0,25, så 1 − 0,25."
      answer: ["0,75", "0.75"]
      solution: |
        Minskning på 25 % → 1 − 0,25 = **0,75**

        Faktorn vid minskning är alltid mindre än 1 (men positiv).

    - equation: "En jacka kostar 800 kr. Priset höjs med 10 %. Vad är det nya priset?"
      hint1: "Använd: nytt värde = gammalt värde · förändringsfaktor."
      hint2: "Faktor för +10 % är 1,10. Räkna 800 · 1,10."
      answer: ["880", "880 kr"]
      solution: |
        Faktor: 1,10
        Nytt pris = 800 · 1,10 = **880 kr**

        Kontroll: 10 % av 800 = 80, och 800 + 80 = 880 ✓

    - equation: "En vara som kostar 500 kr säljs med 30 % rabatt. Vad blir reapriset?"
      hint1: "Rabatt = minskning. Räkna ut faktorn för −30 %."
      hint2: "Faktor för −30 % är 0,70. Räkna 500 · 0,70."
      answer: ["350", "350 kr"]
      solution: |
        Faktor: 0,70
        Reapris = 500 · 0,70 = **350 kr**

    - equation: "Vad är förändringsfaktorn för en ökning på 100 %?"
      hint1: "100 % ökning betyder att du lägger till lika mycket till — alltså dubblar."
      hint2: "1 + 1,00 = 2,00. Priset dubblas."
      answer: ["2", "2,0", "2.0", "2,00", "2.00"]
      solution: |
        +100 % → 1 + 1,00 = **2,00**

        En ökning på 100 % betyder att värdet dubblas.

    - equation: "Ett pris på 1 200 kr höjs med 25 %. Vad blir det nya priset?"
      hint1: "Faktor för +25 % är 1,25. Räkna 1 200 · 1,25."
      answer: ["1500", "1 500", "1500 kr"]
      solution: |
        Faktor: 1,25
        Nytt pris = 1 200 · 1,25 = **1 500 kr**

    - equation: "En mobil kostar 4 000 kr och säljs med 20 % rabatt. Vad blir reapriset?"
      hint1: "Faktor för −20 % är 0,80. Räkna 4 000 · 0,80."
      answer: ["3200", "3 200", "3200 kr"]
      solution: |
        Faktor: 0,80
        Reapris = 4 000 · 0,80 = **3 200 kr**

next: upprepad-forandring
next_lesson_title: "Upprepad förändring"
---

## Vad är en förändringsfaktor?

Förändringsfaktorn är **det tal du multiplicerar med** för att gå från gammalt till nytt värde.

```
nytt värde = gammalt värde · förändringsfaktor
```

Det är hela hemligheten — och den används i resten av ekonomimomentet.

## Räkna ut faktorn

**Ökning:** lägg 1 framför decimalformen.

| Ökning | Faktor |
|---|---|
| +5 % | 1,05 |
| +12 % | 1,12 |
| +100 % | 2,00 (dubblas) |

*Varför?* Du behåller hela det gamla (100 % = 1) och lägger till ökningen.

**Minskning:** ta 1 minus decimalformen.

| Minskning | Faktor |
|---|---|
| −5 % | 0,95 |
| −25 % | 0,75 |
| −50 % | 0,50 (halveras) |

*Varför?* Tar du bort 25 % har du 75 % kvar.

## Räkna ut nytt värde

En t-shirt kostar 200 kr, priset höjs 15 %:
```
200 · 1,15 = 230 kr
```
En kapuschong kostar 600 kr, 40 % rabatt:
```
600 · 0,60 = 360 kr
```

> **Regel att skriva ner:** ökning → 1 + decimalen. Minskning → 1 − decimalen. Nytt värde = gammalt värde · faktorn.

## Använd rabatt-räknaren

Widgeten nedan visar sambandet mellan ordinarie pris, förändring och nytt pris. Samma matematik gäller för alla förändringsproblem — pris, ränta, värdeminskning.
