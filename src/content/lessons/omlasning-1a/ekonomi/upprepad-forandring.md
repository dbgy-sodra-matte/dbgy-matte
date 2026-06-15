---
slug: "omlasning-1a/ekonomi/upprepad-forandring"
title: "Upprepad förändring"
course: omlasning-1a
moment: ekonomi
moment_title: "Ekonomi"
lesson_number: 2
lesson_total: 5

success_criteria:
  - Förstå att en förändring som upprepas blir faktorn upphöjt till antalet gånger
  - Skriva uttrycket slutvärde = startvärde · faktor^antal
  - Räkna ut värdet efter flera år av ränta eller värdeminskning

bank:
  - question: "3 000 kr växer med 4 % per år. Uttryck för värdet efter 5 år?"
    answer: "3 000 · 1,04⁵"
  - question: "En bil värd 200 000 kr tappar 10 % per år. Uttryck efter 3 år?"
    answer: "200 000 · 0,90³"
  - question: "Vilken faktor används vid +3 % per år?"
    answer: "1,03"
  - question: "Hur skrivs 'samma faktor fem gånger' kort?"
    answer: "faktorn upphöjt till 5"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar förra delmomentet
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSclUO5S9HmBlE3OycJ3A-vnSl_505YBVr19Zy_47qTfbperEQ/viewform"

worked_example: |
  När samma förändring sker **flera gånger i rad** (ränta varje år, värdeminskning varje år) multiplicerar du med samma faktor en gång per gång. Det skrivs som en potens.

  ```
  slutvärde = startvärde · (faktor)^antal gånger
  ```

  ## Sparande — 3 000 kr, 4 % ränta, 3 år

  Varje år multipliceras med 1,04. Tre år = tre gånger:

  | Steg | Räkning | Resultat |
  |---|---|---|
  | Faktor per år | +4 % → 1,04 | — |
  | Tre år | 3 000 · 1,04 · 1,04 · 1,04 = 3 000 · 1,04³ | **≈ 3 375 kr** |

  ## Värdeminskning — bil 200 000 kr, −10 % per år, 2 år

  | Steg | Räkning | Resultat |
  |---|---|---|
  | Faktor per år | −10 % → 0,90 | — |
  | Två år | 200 000 · 0,90² | **162 000 kr** |

  > Använd räknarens `^`-knapp (eller `x^y`) för faktorn upphöjt till antalet år.

exercises:
  E:
    - equation: "5 000 kr sätts in på ett konto med 3 % ränta per år. Skriv uttrycket för värdet efter 4 år (du behöver inte räkna ut svaret)."
      hint1: "Upprepad förändring: samma faktor flera gånger. Vad är faktorn för +3 %?"
      hint2: "Faktor 1,03, fyra år. Formeln: startvärde · faktor upphöjt till antal år."
      answer: ["5000 · 1,03^4", "5000·1,03^4", "5000 · 1.03^4", "5000*1,03^4", "5000 · 1,03⁴"]
      solution: |
        Faktor: 1,03. Fyra år → upphöjt till 4.

        Värde = **5 000 · 1,03⁴** (≈ 5 628 kr om du räknar ut det)

    - equation: "En bil värd 200 000 kr tappar 10 % i värde varje år. Skriv uttrycket för värdet efter 3 år."
      hint1: "Värdeminskning som upprepas. Faktor för −10 %?"
      hint2: "Faktor 0,90, tre år. Formeln: startvärde · faktor upphöjt till antal år."
      answer: ["200000 · 0,9^3", "200000·0,9^3", "200000 · 0.9^3", "200000*0,9^3", "200000 · 0,90³"]
      solution: |
        Faktor: 0,90. Tre år → upphöjt till 3.

        Värde = **200 000 · 0,90³** (≈ 145 800 kr)

    - equation: "1 000 kr växer med 5 % per år. Skriv uttrycket för värdet efter 2 år."
      hint1: "Faktor för +5 % är 1,05. Två år → upphöjt till 2."
      answer: ["1000 · 1,05^2", "1000·1,05^2", "1000 * 1,05^2", "1000 · 1.05^2", "1000 · 1,05²"]
      solution: |
        Värde = **1 000 · 1,05²** (= 1 102,50 kr)

    - equation: "Räkna ut: 1 000 · 1,05². Svara i kronor (avrunda till heltal)."
      hint1: "1,05² = 1,05 · 1,05 = 1,1025. Multiplicera sedan med 1 000."
      hint2: "1 000 · 1,1025 = 1 102,5."
      answer: ["1102", "1 102", "1102,5", "1102.5", "1 102,5"]
      solution: |
        1,05² = 1,1025
        1 000 · 1,1025 = **1 102,5 kr** (≈ 1 103 kr)

    - equation: "Ett sparande på 2 000 kr har 10 % ränta per år. Skriv uttrycket för värdet efter 3 år."
      hint1: "Faktor 1,10, tre år."
      answer: ["2000 · 1,1^3", "2000·1,1^3", "2000 * 1,1^3", "2000 · 1.1^3", "2000 · 1,10³"]
      solution: |
        Värde = **2 000 · 1,10³** (= 2 662 kr)

    - equation: "Räkna ut: 2 000 · 1,1³. Svara i kronor (heltal)."
      hint1: "1,1³ = 1,1 · 1,1 · 1,1 = 1,331. Multiplicera med 2 000."
      answer: ["2662", "2 662"]
      solution: |
        1,1³ = 1,331
        2 000 · 1,331 = **2 662 kr**

    - equation: "En dator värd 10 000 kr tappar 20 % per år. Skriv uttrycket för värdet efter 2 år."
      hint1: "Faktor för −20 % är 0,80. Två år → upphöjt till 2."
      answer: ["10000 · 0,8^2", "10000·0,8^2", "10000 * 0,8^2", "10000 · 0.8^2", "10000 · 0,80²"]
      solution: |
        Värde = **10 000 · 0,80²** (= 6 400 kr)

prev: forandringsfaktor
prev_lesson_title: "Förändringsfaktor"
next: lan-ranta-amortering
next_lesson_title: "Lån, ränta och amortering"
---

## När förändringen upprepas

I förra delmomentet ändrades värdet **en** gång. Nu händer det **flera gånger i rad** — ränta varje år, värdeminskning varje år. Då multiplicerar du med samma faktor en gång per gång.

## Potensen — kort skrivsätt

Att multiplicera med 1,04 tre gånger skrivs som `1,04³`:

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

## Så här på räknaren

Använd `^`-knappen (eller `x^y`): skriv faktorn, tryck `^`, skriv antalet år. Multiplicera sedan med startvärdet.

> 1,04⁵ → skriv `1,04 ^ 5` → 1,2167. Sedan `· 3 000`.

> **Regel att skriva ner:** en förändring → gånger faktorn. Flera lika förändringar → gånger faktorn upphöjt till antalet.
