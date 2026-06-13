---
slug: "omlasning/ekonomi/forandringsfaktor"
title: "Förändringsfaktor och upprepad förändring"
course: omlasning
moment: ekonomi
moment_title: "Ekonomi"
lesson_number: 2
lesson_total: 3

success_criteria:
  - Räkna ut förändringsfaktorn för en ökning (+15 % → 1,15)
  - Räkna ut förändringsfaktorn för en minskning (−40 % → 0,60)
  - Använda förändringsfaktorn för att räkna ut nytt värde
  - Räkna ut värdet efter en förändring som upprepas flera gånger

bank:
  - question: "Vad är förändringsfaktorn för en ökning på 8 %?"
    answer: "1,08"
  - question: "Vad är förändringsfaktorn för en minskning på 15 %?"
    answer: "0,85"
  - question: "En tröja kostar 400 kr. Priset höjs med 20 %. Nytt pris?"
    answer: "480 kr"
  - question: "3000 kr växer med 4 % per år. Vad är formeln för värdet efter 5 år?"
    answer: "3000 · 1,04⁵"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Testa rabatt-räknaren — den visar sambandet pris, förändring och nytt pris
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

widget: "rabatt-raknaren/v1"
widget_height: 620

# exit_ticket_form: checkpoint-Form läggs in när Simon kört genereringsscriptet

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

  ## 3. Upprepad förändring — flera gånger i rad

  *3 000 kr på ett konto med 4 % ränta per år. Hur mycket efter 3 år?*

  Varje år multipliceras med samma faktor (1,04). Tre år = tre gånger:

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Faktor per år | +4 % → 1,04 | — |
  | Tre år | 3 000 · 1,04 · 1,04 · 1,04 = 3 000 · 1,04³ | — |
  | Räkna | 3 000 · 1,1249… | **≈ 3 375 kr** |

  > **Formel för upprepad förändring:** slutvärde = startvärde · (faktor)^antal gånger.

exercises:
  E:
    - equation: "Vad är förändringsfaktorn för en ökning på 12 %?"
      hint1: "Vid ökning behåller du hela det gamla (100 %) och lägger till ökningen."
      hint2: "Tumregel: 1 + procenttalet som decimal. 12 % = 0,12, så 1 + 0,12."
      answer: ["1.12"]
      solution: |
        Ökning på 12 % → 1 + 0,12 = **1,12**

        Faktorn vid ökning är alltid större än 1.

    - equation: "Vad är förändringsfaktorn för en minskning på 25 %?"
      hint1: "Vid minskning räknar du ut hur mycket du har KVAR."
      hint2: "Tumregel: 1 − procenttalet som decimal. 25 % = 0,25, så 1 − 0,25."
      answer: ["0.75"]
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
      answer: ["2", "2.0", "2.00"]
      solution: |
        +100 % → 1 + 1,00 = **2,00**

        En ökning på 100 % betyder att värdet dubblas.

    - equation: "5 000 kr sätts in på ett konto med 3 % ränta per år. Skriv uttrycket för värdet efter 4 år (du behöver inte räkna ut svaret)."
      hint1: "Upprepad förändring: samma faktor flera gånger. Vad är faktorn för +3 %?"
      hint2: "Faktor 1,03, fyra år. Formeln: startvärde · faktor upphöjt till antal år."
      answer: ["5000 · 1,03⁴", "5000·1,03^4", "5000 · 1.03^4", "5000*1,03^4"]
      solution: |
        Faktor: 1,03. Fyra år → upphöjt till 4.

        Värde = **5 000 · 1,03⁴** (≈ 5 628 kr om du räknar ut det)

    - equation: "En bil värd 200 000 kr tappar 10 % i värde varje år. Skriv uttrycket för värdet efter 3 år."
      hint1: "Värdeminskning som upprepas. Faktor för −10 %?"
      hint2: "Faktor 0,90, tre år. Formeln: startvärde · faktor upphöjt till antal år."
      answer: ["200000 · 0,90³", "200000·0,9^3", "200000 · 0.9^3", "200000*0,9^3"]
      solution: |
        Faktor: 0,90. Tre år → upphöjt till 3.

        Värde = **200 000 · 0,90³** (≈ 145 800 kr)

prev: grunder-i-procent
prev_lesson_title: "Grunder i procent"
next: lan-ranta-amortering
next_lesson_title: "Lån, ränta och amortering"
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

## Upprepad förändring — när det händer flera gånger

Saker ändras ofta flera gånger i rad: ränta varje år, värdeminskning varje år. Då multiplicerar du med samma faktor **en gång per gång** — det skrivs som en potens:

```
slutvärde = startvärde · (faktor)^antal gånger
```

**Sparande:** 3 000 kr med 4 % ränta i 5 år:
```
3 000 · 1,04⁵ ≈ 3 650 kr
```

**Värdeminskning:** en cykel värd 8 000 kr tappar 10 % per år i 4 år:
```
8 000 · 0,90⁴ ≈ 5 250 kr
```

Använd räknarens potensknapp `^` (eller `x^y`) för att räkna ut faktorn upphöjt till antalet år.

> **Regel att skriva ner:** en förändring → gånger faktorn. Flera lika förändringar → gånger faktorn upphöjt till antalet.

## Använd rabatt-räknaren

Widgeten nedan visar sambandet mellan ordinarie pris, förändring och nytt pris. Samma matematik gäller för alla förändringsproblem — pris, ränta, värdeminskning.
