---
slug: "omlasning-2b/logaritmer/exponentialekvationer"
title: "Exponentialekvationer"
course: omlasning-2b
moment: logaritmer
moment_title: "Logaritmer och exponentialekvationer"
lesson_number: 4
lesson_total: 4

success_criteria:
  - Lösa ekvationer av typen 10^x = 500 med hjälp av lg
  - Lösa ekvationer av typen lg x = 2
  - Lösa ekvationer med annan bas, t.ex. 4^x = 20, med logaritmlagen
  - Skala bort talet framför potensen innan du logaritmerar

bank:
  - question: "Lös ekvationen 10^x = 100"
    answer: ["2", "x = 2"]
    solution: |
      Frågan är: 10 upphöjt till vad blir 100?
      10² = 100, alltså **x = 2**
  - question: "Lös ekvationen lg x = 3"
    answer: ["1000", "x = 1000"]
    solution: |
      lg x = 3 betyder att 10 upphöjt till 3 är x.
      10³ = **1000**
  - question: "Vad är första steget när du löser 5 · 2^x = 40?"
    answer: ["Delar med 5", "dividerar med 5", "gör potensen ensam"]
    solution: |
      Logaritmen kan bara användas när potensen står ensam.
      Därför **delar du båda leden med 5** först, så att det står 2^x = 8.
  - question: "Vilken logaritmlag använder du för att lösa 3^x = 20?"
    answer: ["lg(a^x) = x · lg a", "att exponenten får flyttas ner", "x lg a = lg b"]
    solution: |
      Logaritmera båda leden och använd lagen som flyttar ner exponenten:
      **lg(a^x) = x · lg a**, vilket ger x · lg 3 = lg 20.

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Du behöver miniräknare med lg-knapp
  - Klarar du alla sex utan ledtrådar är området genomtränat, gå vidare till "Redo att tenta?"

worked_example: |
  ## Basen är 10: logaritmera direkt

  Lös `10^x = 500`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Frågan är: 10 upphöjt till vad blir 500? | Det är precis vad lg betyder | x = lg 500 |
  | Räkna på miniräknaren | — | **x ≈ 2,70** |

  **Kontroll:** 10^2,70 ≈ 501 ✓ (avrundningen gör att det inte blir exakt 500)

  ## Åt andra hållet: lg x = ett tal

  Lös `lg x = 2`.

  Läs uttrycket som en mening: *"10 upphöjt till 2 blir x."*

  `x = 10²` = **100**

  Regeln: står lg framför x flyttar du över genom att göra 10 upphöjt till högerledet.

  ## Annan bas: logaritmlagen

  Lös `4^x = 20`.

  Här hjälper inte lg direkt, eftersom basen är 4 och inte 10. Men det finns en lag:

  `lg(a^x) = x · lg a`

  Alltså: **exponenten får flyttas ner framför logaritmen.**

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Logaritmera båda leden | lg(4^x) = lg 20 | — |
  | Flytta ner exponenten | x · lg 4 = lg 20 | — |
  | Dela med lg 4 | x = lg 20 / lg 4 | — |
  | Räkna på miniräknaren | 1,3010 / 0,6021 | **x ≈ 2,16** |

  > Skriv `lg 20 / lg 4` som ett bråk och räkna hela bråket. Det är **inte** samma sak som `lg (20/4) = lg 5`.

  ## Skala bort talet framför först

  Lös `3 000 · 1,06^x = 6 000`.

  | Steg | Uträkning | Resultat |
  |---|---|---|
  | Dela med 3 000 så potensen står ensam | 6000 / 3000 | 1,06^x = 2 |
  | Logaritmera | x · lg 1,06 = lg 2 | — |
  | Dela | x = lg 2 / lg 1,06 | **x ≈ 11,9** |

  Tolkning: det tar ungefär **11,9 år** innan summan har fördubblats.

  > **Ordningen är absolut:** talet framför måste bort **innan** du logaritmerar. Logaritmerar du `3000 · 1,06^x` direkt blir det fel.

exercises:
  E:
    - equation: "Lös ekvationen: 10^x = 700. Svara med två decimaler."
      hint1: "Frågan är: 10 upphöjt till vad blir 700? Det är definitionen av lg."
      hint2: "x = lg 700. Använd lg-knappen."
      answer: ["2.85", "2,85"]
      solution: |
        x = lg 700 ≈ **2,85**

        Rimlighetskoll: 700 ligger mellan 100 och 1000, så x ska ligga mellan 2 och 3 ✓

    - equation: "Lös ekvationen: lg x = 4"
      hint1: "Läs det som en mening: 10 upphöjt till 4 blir x."
      hint2: "x = 10⁴."
      answer: ["10000", "x = 10000"]
      solution: |
        lg x = 4 betyder att 10⁴ = x

        **x = 10 000**

    - equation: "Lös ekvationen: 5 · 10^x = 250. Svara med två decimaler."
      hint1: "Gör potensen ensam först, dela båda leden med 5."
      hint2: "10^x = 50, alltså x = lg 50."
      answer: ["1.70", "1,70", "1.7", "1,7"]
      solution: |
        5 · 10^x = 250
        10^x = 50
        x = lg 50 ≈ **1,70**

    - equation: "Lös ekvationen: 3^x = 45. Svara med två decimaler."
      hint1: "Basen är 3, inte 10, logaritmera båda leden och flytta ner exponenten."
      hint2: "x · lg 3 = lg 45, alltså x = lg 45 / lg 3."
      answer: ["3.46", "3,46"]
      solution: |
        lg(3^x) = lg 45
        x · lg 3 = lg 45
        x = lg 45 / lg 3 ≈ 1,6532 / 0,4771 ≈ **3,46**

    - equation: "En summa på 3 000 kr växer med 6 % per år. Efter hur många år har den fördubblats? Svara med en decimal."
      hint1: "Ekvationen är 3000 · 1,06^x = 6000. Dela med 3 000 först."
      hint2: "1,06^x = 2, alltså x = lg 2 / lg 1,06."
      answer: ["11.9", "11,9"]
      solution: |
        3 000 · 1,06^x = 6 000
        1,06^x = 2
        x · lg 1,06 = lg 2
        x = lg 2 / lg 1,06 ≈ 0,3010 / 0,0253 ≈ **11,9 år**

    - equation: "Ett bestånd på 8 000 djur minskar med 10 % per år. Efter hur många år är hälften kvar? Svara med två decimaler."
      hint1: "Faktorn är 0,9. Ekvationen blir 8000 · 0,9^x = 4000."
      hint2: "0,9^x = 0,5, alltså x = lg 0,5 / lg 0,9. Båda logaritmerna är negativa, svaret blir positivt."
      answer: ["6.58", "6,58"]
      solution: |
        8 000 · 0,9^x = 4 000
        0,9^x = 0,5
        x = lg 0,5 / lg 0,9 ≈ (−0,3010) / (−0,0458) ≈ **6,58 år**

        > Negativt delat med negativt blir positivt, tiden kan inte vara negativ.

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSeoW5pPF6NhhBjYs53CTgfFzCkdWrZhdfa7rLYa3pEg8BJAqw/viewform"
prev: tiologaritmer
prev_lesson_title: "Tiologaritmer"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Logaritmer och exponentialekvationer"
---

## Problemet logaritmen löser

I `1,06^x = 2` står det okända **uppe i exponenten**. En ekvation som ser ut så kallas en **exponentialekvation**. Ingen av metoderna från Ma1 kommer åt det okända, du kan varken flytta över eller dela bort en exponent.

Logaritmen är verktyget som får ner den.

## Tre typer

### Typ 1: basen är 10

`10^x = 500`

Det här är exakt vad lg betyder. Svaret är direkt:

`x = lg 500 ≈ 2,70`

### Typ 2: lg står framför x

`lg x = 2`

Läs det som en mening: *"10 upphöjt till 2 blir x."*

`x = 10² = 100`

### Typ 3: annan bas

`4^x = 20`

Använd logaritmlagen:

`lg(a^x) = x · lg a`

Logaritmera båda leden, flytta ner exponenten, dela:

`x · lg 4 = lg 20` → `x = lg 20 / lg 4 ≈ 2,16`

> **Vanligt fel:** att skriva `lg 20 / lg 4 = lg 5`. Det stämmer inte. Bråket `lg 20 / lg 4` är en division av två färdiga logaritmvärden, räkna ut båda och dela.

## Skala bort talet framför FÖRST

`3 000 · 1,06^x = 6 000`

Innan du logaritmerar måste potensen stå ensam:

1. Dela med 3 000 → `1,06^x = 2`
2. Logaritmera → `x · lg 1,06 = lg 2`
3. Dela → `x = lg 2 / lg 1,06 ≈ 11,9`

Gör du det i fel ordning blir svaret fel, och felet syns inte förrän kontrollen.

## Arbetsgången

| Steg | Vad du gör |
|---|---|
| 1 | Gör potensen ensam (dela bort talet framför) |
| 2 | Logaritmera båda leden |
| 3 | Flytta ner exponenten framför logaritmen |
| 4 | Dela med logaritmen som står kvar |
| 5 | Räkna på miniräknaren och avrunda |

## Tolka svaret

I tillämpade uppgifter är x oftast ett **antal år**. Svara i klartext:

> *Det tar ungefär 11,9 år innan summan har fördubblats.*

Ett svar som bara är "11,9" utan enhet eller mening tappar poäng, och en negativ tid är alltid ett tecken på att något gått fel.

## Kontrollera

Sätt tillbaka svaret i ursprungsekvationen och räkna på miniräknaren:

`3 000 · 1,06^11,9 ≈ 5 995`: nära 6 000 ✓

Avrundningen gör att det sällan blir exakt. Ligger du inom någon promille är det rätt.
