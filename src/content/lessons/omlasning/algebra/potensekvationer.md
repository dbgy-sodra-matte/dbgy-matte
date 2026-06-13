---
slug: "omlasning/algebra/potensekvationer"
title: "Potensekvationer"
course: omlasning
moment: algebra
moment_title: "Algebra"
lesson_number: 5
lesson_total: 8

success_criteria:
  - Lösa ekvationer av typen x² = a — och komma ihåg att det blir TVÅ lösningar
  - Lösa ekvationer av typen x³ = a — en lösning
  - Veta hur många lösningar en potensekvation har
  - Använda roten ur för att lösa potensekvationer

bank:
  - question: "Lös: x² = 49"
    answer: "x = ±7"
  - question: "Lös: x³ = 8"
    answer: "x = 2"
  - question: "Hur många lösningar har x² = 25?"
    answer: "Två (5 och −5)"
  - question: "Lös: x² = 81"
    answer: "x = ±9"

how_to:
  - Läs teorin nedan (klicka upp "Teorigenomgång och exempel")
  - Börja med kom-igång-frågorna — de repeterar tidigare delmoment
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner — minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSebvwbf5_-4GF_xteekV84fyWbf48b4HsQO11VsmVObrStE8A/viewform"

widget: "potensekvationer/v1"
widget_height: 560

worked_example: |
  ## 1. x² = a ger TVÅ lösningar

  Lös `x² = 36`.

  | Steg | Tanke | Resultat |
  |---|---|---|
  | Vilket tal i kvadrat blir 36? | 6 · 6 = 36 ✓ | x = 6 |
  | Men också… | (−6) · (−6) = 36 ✓ (minus · minus = plus!) | x = −6 |
  | Båda funkar | — | **x = ±6** |

  > Skrivsättet **±6** betyder "6 eller −6".

  ## 2. x³ = a ger EN lösning

  Lös `x³ = 27`.

  | Steg | Tanke | Resultat |
  |---|---|---|
  | Vilket tal i kub blir 27? | 3 · 3 · 3 = 27 ✓ | x = 3 |
  | Funkar −3? | (−3)·(−3)·(−3) = −27 ✗ (tre minus blir minus) | nej |
  | Bara en lösning | — | **x = 3** |

  ## 3. Antal lösningar — översikten

  | Ekvation | Antal lösningar | Varför |
  |---|---|---|
  | x² = 25 | **2** (±5) | både plus och minus i kvadrat blir plus |
  | x² = 0 | **1** (0) | bara 0 · 0 = 0 |
  | x² = −9 | **0** | inget tal i kvadrat blir negativt |
  | x³ = 64 | **1** (4) | kubens tecken följer talets tecken |

exercises:
  E:
    - equation: "Lös: x² = 64"
      hint1: "Vilket tal gånger sig självt blir 64? Och glöm inte: det finns TVÅ svar."
      hint2: "8 · 8 = 64 — men även (−8) · (−8) = 64, eftersom minus gånger minus blir plus."
      answer: ["±8", "8 eller -8", "8 och -8", "-8 eller 8", "-8 och 8"]
      solution: |
        x² = 64
        x = **±8**

        Både 8² = 64 och (−8)² = 64.

    - equation: "Lös: x² = 121"
      hint1: "Vilket tal i kvadrat blir 121? Tips: det är större än 10."
      hint2: "11 · 11 = 121. Och precis som alltid med x² — det negativa talet funkar också."
      answer: ["±11", "11 eller -11", "11 och -11", "-11 eller 11", "-11 och 11"]
      solution: |
        x² = 121
        x = **±11**

    - equation: "Lös: x³ = 27"
      hint1: "Nu är det upphöjt till 3 — vilket tal gånger sig självt TRE gånger blir 27?"
      hint2: "3 · 3 · 3 = 27. Fundera på om −3 också funkar: (−3)·(−3)·(−3) = … ?"
      answer: ["3"]
      solution: |
        x³ = 27
        x = **3**

        > (−3)³ = −27, inte 27. Därför bara EN lösning — kubekvationer
        > har alltid bara en.

    - equation: "Lös: x³ = 1000"
      hint1: "Vilket tal i kub blir 1000? Tänk på tiopotenser."
      hint2: "10 · 10 · 10 = 1000."
      answer: ["10"]
      solution: |
        x³ = 1000
        x = **10**

    - equation: "Hur många lösningar har ekvationen x² = 36? Svara med en siffra."
      hint1: "Tänk på vilka tal som ger 36 när de kvadreras."
      hint2: "6² = 36 och (−6)² = 36. Räkna dem."
      answer: ["2", "två"]
      solution: |
        x² = 36 har lösningarna 6 och −6.

        **2 lösningar.**

    - equation: "Hur många lösningar har ekvationen x³ = 64? Svara med en siffra."
      hint1: "Kubekvationer — hur brukar det vara med antalet lösningar där?"
      hint2: "4³ = 64 ✓. Men (−4)³ = −64 ✗. Hur många blev det?"
      answer: ["1", "en"]
      solution: |
        Bara x = 4 fungerar: 4³ = 64.

        **1 lösning.**

    - equation: "Hur många lösningar har ekvationen x² = −16? Svara med en siffra."
      hint1: "Kan ett tal i kvadrat bli negativt? Testa: vad blir 4² och (−4)²?"
      hint2: "4² = 16 (plus). (−4)² = 16 (plus, eftersom minus · minus = plus). Inget tal i kvadrat blir −16."
      answer: ["0", "inga", "ingen"]
      solution: |
        Ett tal i kvadrat är aldrig negativt — plus · plus = plus och minus · minus = plus.

        **0 lösningar** (ekvationen saknar lösning).

prev: ekvationer
prev_lesson_title: "Ekvationer"
next: formler
next_lesson_title: "Formler"
---

## Vad är en potensekvation?

En ekvation där x är **upphöjt** till något: `x² = 49` eller `x³ = 8`. Du löser dem genom att fråga: *vilket tal, upphöjt så där, ger talet på andra sidan?*

## x² — kvadraten och den gömda lösningen

`x² = 49`. Klart att 7 funkar: 7 · 7 = 49.

Men kolla här: **(−7) · (−7) = 49 också** — för minus gånger minus blir plus.

> **Regel att skriva ner:** `x² = a` (där a är positivt) har alltid **två** lösningar: `x = ±√a`.

Det här är ett klassiskt provmisstag: att bara svara 7. Halva svaret = inte hela poängen.

## x³ — kuben följer tecknet

`x³ = 27` → x = 3, och **bara** 3. För (−3)³ = (−3)·(−3)·(−3) = −27 — tre minustecken blir minus.

Kubekvationer har alltid **exakt en** lösning, och den har samma tecken som talet i högerledet: `x³ = −8` → x = −2.

## Antal lösningar — det frågas om på prov

| Typ | Lösningar |
|---|---|
| x² = positivt tal | 2 |
| x² = 0 | 1 |
| x² = negativt tal | 0 — saknar lösning |
| x³ = vilket tal som helst | 1 |

## Roten ur — verktyget

`√49 = 7` betyder: "talet som i kvadrat ger 49". På miniräknaren finns √-knappen — men kom ihåg att den bara ger **plus-svaret**. Minus-lösningen lägger du till själv när du löser `x² = a`.
