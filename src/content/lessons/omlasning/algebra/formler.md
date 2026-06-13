---
slug: "omlasning/algebra/formler"
title: "Formler"
course: omlasning
moment: algebra
moment_title: "Algebra"
lesson_number: 6
lesson_total: 8

success_criteria:
  - Sätta in värden i en formel och beräkna resultatet
  - Använda vanliga formler (sträcka, omkrets, area, kostnad)
  - Ställa upp en egen enkel formel utifrån en text
  - Räkna baklänges i en formel (t.ex. hitta x när du vet kostnaden)

bank:
  - question: "s = v · t. Beräkna s när v = 90 och t = 2."
    answer: "180"
  - question: "O = 2a + 2b. Beräkna O när a = 3 och b = 5."
    answer: "16"
  - question: "K = 100 + 50x. Vad är K när x = 4?"
    answer: "300"
  - question: "Ett gymkort kostar 200 kr i startavgift och 150 kr per månad. Ställ upp en formel för kostnaden K efter x månader."
    answer: "K = 200 + 150x"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSdMwTa8FiwuOHG--MUJ4KskpCaaqX3BxXEA3MKGn6zS3IQ73A/viewform"

widget: "funktionsmaskinen/v1"
widget_height: 560

worked_example: |
  ## 1. Sätta in i en formel

  Sträckan: `s = v · t`. Hur långt kommer du på 3 timmar i 80 km/h?

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Skriv formeln | s = v · t | — |
  | Byt ut bokstäverna mot talen | s = 80 · 3 | — |
  | Räkna | — | **s = 240 km** |

  ## 2. Formel med två delar

  Kostnad för festlokal: `K = 500 + 75x` där x = antal gäster. Vad kostar 20 gäster?

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Byt x mot 20 | K = 500 + 75 · 20 | — |
  | Multiplikation FÖRST | 75 · 20 = 1500 | K = 500 + 1500 |
  | Addera | — | **K = 2000 kr** |

  > Vanligaste felet: att addera 500 + 75 först. Multiplikation går före addition!

  ## 3. Ställa upp en egen formel

  *Ett gym kostar 400 kr i startavgift och 250 kr per månad. Skriv en formel för
  totala kostnaden K efter x månader.*

  | Del | Matte |
  |---|---|
  | Startavgift — betalas en gång | 400 |
  | Månadsavgift — varje månad | 250 · x |
  | **Formeln** | **K = 400 + 250x** |

exercises:
  E:
    - equation: "s = v · t. Beräkna s när v = 80 och t = 3."
      hint1: "Byt ut bokstäverna mot talen: v blir 80 och t blir 3."
      hint2: "s = 80 · 3. Räkna ut produkten."
      answer: ["240"]
      solution: |
        s = v · t
        s = 80 · 3
        **s = 240**

    - equation: "O = 2a + 2b. Beräkna O när a = 4 och b = 7."
      hint1: "Byt a mot 4 och b mot 7. Kom ihåg: multiplikation före addition."
      hint2: "O = 2 · 4 + 2 · 7. Räkna varje produkt för sig först: 8 och 14."
      answer: ["22"]
      solution: |
        O = 2a + 2b
        O = 2 · 4 + 2 · 7
        O = 8 + 14
        **O = 22**

    - equation: "K = 150 + 60x. Beräkna K när x = 5."
      hint1: "Byt x mot 5. Vad ska räknas först — additionen eller multiplikationen?"
      hint2: "Multiplikationen först: 60 · 5 = 300. Addera sedan 150."
      answer: ["450"]
      solution: |
        K = 150 + 60 · 5
        K = 150 + 300
        **K = 450**

        > Fällan: 150 + 60 = 210 först är FEL — multiplikation går före addition.

    - equation: "Arean av en triangel: A = b · h/2. Beräkna A när b = 6 och h = 4."
      hint1: "Byt b mot 6 och h mot 4. Multiplicera dem och dela sedan med 2."
      hint2: "6 · 4 = 24. Sedan 24/2."
      answer: ["12"]
      solution: |
        A = b · h / 2
        A = 6 · 4 / 2
        A = 24 / 2
        **A = 12**

    - equation: "En elektriker tar 350 kr i framkörning och 480 kr per timme. Ställ upp en formel för kostnaden K efter x timmar."
      hint1: "Två delar: en som betalas en gång, och en som beror på antalet timmar."
      hint2: "Framkörningen är 350 (utan x). Timdelen är 480 · x. Formeln börjar 'K = …'."
      answer: ["K = 350 + 480x", "350 + 480x", "480x + 350", "K = 480x + 350"]
      solution: |
        Fast del: 350
        Per timme: 480x

        **K = 350 + 480x**

    - equation: "K = 150 + 35x. Hur stort är x när K = 325?"
      hint1: "Nu vet du svaret (K) men inte x — det är en ekvation: 150 + 35x = 325."
      hint2: "Subtrahera 150 från båda leden: 35x = 175. Dela sedan med 35."
      answer: ["5"]
      solution: |
        150 + 35x = 325
        35x = 175      [subtrahera 150]
        x = 5          [dela med 35]

        Kontroll: 150 + 35 · 5 = 150 + 175 = 325 ✓

prev: potensekvationer
prev_lesson_title: "Potensekvationer"
next: problemlosning-med-algebra
next_lesson_title: "Problemlösning med algebra"
---

## Vad är en formel?

En formel är ett **färdigt recept** som beskriver ett samband: `s = v · t` säger hur sträcka, hastighet och tid hänger ihop — alltid. Du behöver inte komma på sambandet själv, bara **använda** det.

## Använda en formel = byta ut och räkna

1. **Skriv formeln**
2. **Byt ut** varje bokstav du känner mot dess tal
3. **Räkna** — med räkneordningen i behåll (multiplikation före addition!)

Det är samma sak som att beräkna värdet av ett uttryck (delmoment 1) — formeln är bara ett uttryck med ett namn.

## Formler du möter ofta

| Formel | Betyder |
|---|---|
| `s = v · t` | sträcka = hastighet · tid |
| `O = 2a + 2b` | omkrets av rektangel |
| `A = b · h` | area av rektangel |
| `A = b · h / 2` | area av triangel |
| `K = fast + pris · x` | kostnadsformeln |

## Ställa upp en egen formel

Samma tänk som i delmoment 3 (ställa upp uttryck) — men nu ger du uttrycket ett namn:

> Gym: 400 kr start + 250 kr/månad → **K = 400 + 250x**

Fast del utan x, rörlig del med x.

## Räkna baklänges

Ibland vet du **resultatet** och söker x: "K = 325, vad är x?" Då blir formeln en **ekvation** — och du löser den med balansmetoden från delmoment 4. Allt hänger ihop.
