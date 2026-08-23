---
slug: "omlasning-2a/andragradare/nollproduktmetoden"
title: "Nollproduktmetoden"
course: omlasning-2a
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 2
lesson_total: 9

success_criteria:
  - Lösa ekvationer där en produkt är lika med noll
  - Bryta ut x när ekvationen saknar konstantterm
  - Förklara varför högerledet måste vara 0
  - Ge båda lösningarna, även när en av dem är x = 0

bank:
  - question: "Lös ekvationen (x − 6)(x + 2) = 0"
    answer: ["x = 6 och x = −2", "6 och −2", "6 och -2", "x = 6, x = -2", "x=6 och x=-2"]
    solution: |
      En produkt blir 0 bara om någon av faktorerna är 0.
      Sätt varje parentes för sig till 0: x − 6 = 0 och x + 2 = 0.
      Svar: **x = 6 och x = −2**
  - question: "Lös ekvationen x² − 9x = 0"
    answer: ["x = 0 och x = 9", "0 och 9", "x = 0, x = 9", "x=0 och x=9"]
    solution: |
      Faktorisera först, x är gemensam: x(x − 9) = 0.
      Sätt varje faktor till 0: x = 0 och x − 9 = 0.
      Svar: **x = 0 och x = 9**
  - question: "Varför måste högerledet vara 0 innan du använder nollproduktmetoden?"
    answer: ["Bara noll gör en produkt till noll", "för att en produkt blir noll bara om en faktor är noll", "annars vet man inget om faktorerna", "en produkt är noll bara om en faktor är noll"]
    solution: |
      Metoden bygger på regeln att en produkt blir noll bara om någon faktor är noll.
      Står det något annat än 0 i högerledet vet du ingenting om de enskilda faktorerna — 12 kan lika gärna vara 2 · 6, 3 · 4 eller 1 · 12.
  - question: "Lös ekvationen x(3x − 21) = 0"
    answer: ["x = 0 och x = 7", "0 och 7", "x = 0, x = 7", "x=0 och x=7"]
    solution: |
      Två faktorer: x och (3x − 21). Sätt var och en till 0.
      x = 0, eller 3x − 21 = 0 vilket ger 3x = 21 och x = 7.
      Svar: **x = 0 och x = 7**

how_to:
  - Börja med repetitionen högst upp, den håller tidigare delmoment vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Regeln som allt bygger på

  Om två tal multiplicerade blir noll, måste minst ett av dem vara noll.

  `a · b = 0` betyder att `a = 0` **eller** `b = 0`.

  Det finns inget annat sätt. 0 · 5 = 0, 7 · 0 = 0 — men två tal som båda är skilda från noll ger aldrig noll.

  ## Fall 1: ekvationen är redan faktoriserad

  Lös `(x − 4)(x + 9) = 0`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Sätt första faktorn till 0 | x − 4 = 0 | x = 4 |
  | Sätt andra faktorn till 0 | x + 9 = 0 | x = −9 |

  Svar: **x = 4 och x = −9**

  > Lägg märke till teckenbytet. `x + 9 = 0` ger `x = −9`, inte 9. Det är det vanligaste slarvfelet på den här typen.

  ## Fall 2: en faktor har en siffra framför x

  Lös `(2x − 5)(x + 3) = 0`.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Första faktorn | 2x − 5 = 0, alltså 2x = 5 | x = 2,5 |
  | Andra faktorn | x + 3 = 0 | x = −3 |

  Svar: **x = 2,5 och x = −3**

  ## Fall 3: ingen konstantterm — bryt ut x

  Lös `x² − 9x = 0`.

  Här står ingen ensam siffra. Då är `x` gemensam faktor i båda termerna:

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Bryt ut x | x² = x · x, 9x = x · 9 | x(x − 9) = 0 |
  | Första faktorn | x = 0 | x = 0 |
  | Andra faktorn | x − 9 = 0 | x = 9 |

  Svar: **x = 0 och x = 9**

  > **x = 0 är en riktig lösning.** Frestelsen är att dela bort x i båda leden — gör aldrig det. Då försvinner lösningen x = 0 spårlöst och du tappar hälften av svaret.

  ## Varför högerledet måste vara noll

  Lös `(x − 2)(x + 5) = 12`? Det går inte med den här metoden.

  Vet du att en produkt är 12 vet du ingenting om faktorerna: det kan vara 2 · 6, 3 · 4, 12 · 1, eller något med decimaler. Bara **noll** låser fast varje faktor.

  Står det något annat i högerledet: flytta över allt, förenkla, och använd pq-formeln i stället.

exercises:
  E:
    - equation: "Lös ekvationen: (x − 6)(x + 2) = 0"
      hint1: "En produkt är noll bara om någon faktor är noll. Sätt varje parentes för sig till 0."
      hint2: "x − 6 = 0 ger den ena lösningen. x + 2 = 0 ger den andra — tänk på tecknet."
      answer: ["x = 6 och x = −2", "6 och −2", "6 och -2", "x = 6, x = -2", "x=6 och x=-2"]
      solution: |
        x − 6 = 0 ger x = 6
        x + 2 = 0 ger x = −2

        **x = 6 och x = −2**

    - equation: "Lös ekvationen: (x + 8)(x − 1) = 0"
      hint1: "Sätt varje parentes till 0 var för sig."
      hint2: "x + 8 = 0 ger ett negativt svar."
      answer: ["x = −8 och x = 1", "−8 och 1", "-8 och 1", "x = -8, x = 1", "1 och −8", "1 och -8"]
      solution: |
        x + 8 = 0 ger x = −8
        x − 1 = 0 ger x = 1

        **x = −8 och x = 1**

    - equation: "Lös ekvationen: (2x − 5)(x + 3) = 0"
      hint1: "Samma metod, men första parentesen har en tvåa framför x."
      hint2: "2x − 5 = 0 ger 2x = 5. Dela sedan med 2."
      answer: ["x = 2,5 och x = −3", "2,5 och −3", "2,5 och -3", "2.5 och -3", "x = 2.5 och x = -3", "−3 och 2,5"]
      solution: |
        2x − 5 = 0 ger 2x = 5, alltså x = 2,5
        x + 3 = 0 ger x = −3

        **x = 2,5 och x = −3**

    - equation: "Lös ekvationen: x² − 9x = 0"
      hint1: "Det finns ingen ensam siffra. Vad är gemensamt för båda termerna?"
      hint2: "Bryt ut x: x(x − 9) = 0. Sätt sedan varje faktor till 0."
      answer: ["x = 0 och x = 9", "0 och 9", "x = 0, x = 9", "9 och 0", "x=0 och x=9"]
      solution: |
        x² − 9x = 0
        x(x − 9) = 0

        x = 0, eller x − 9 = 0 vilket ger x = 9

        **x = 0 och x = 9**

    - equation: "Lös ekvationen: 4x² + 12x = 0"
      hint1: "Bryt ut det som är gemensamt. Både 4x² och 12x innehåller 4x."
      hint2: "4x(x + 3) = 0. Nu har du två faktorer att sätta till noll."
      answer: ["x = 0 och x = −3", "0 och −3", "0 och -3", "x = 0, x = -3", "−3 och 0"]
      solution: |
        4x² + 12x = 0
        4x(x + 3) = 0

        4x = 0 ger x = 0
        x + 3 = 0 ger x = −3

        **x = 0 och x = −3**

    - equation: "Lös ekvationen: 6x² = 24x"
      hint1: "Flytta över allt till vänsterledet först, så att högerledet blir 0."
      hint2: "6x² − 24x = 0. Bryt sedan ut 6x."
      answer: ["x = 0 och x = 4", "0 och 4", "x = 0, x = 4", "4 och 0"]
      solution: |
        6x² = 24x
        6x² − 24x = 0
        6x(x − 4) = 0

        6x = 0 ger x = 0
        x − 4 = 0 ger x = 4

        **x = 0 och x = 4**

        Dela aldrig bort x här — då försvinner lösningen x = 0.

prev: enkla-andragradsekvationer
prev_lesson_title: "Enkla andragradsekvationer"
next: pythagoras-och-koordinatgeometri
next_lesson_title: "Pythagoras sats och koordinatgeometri"
---

## Regeln

En produkt blir noll bara om **någon av faktorerna** är noll.

`a · b = 0` betyder `a = 0` eller `b = 0`. Det finns inget tredje alternativ.

Hela metoden består av att utnyttja det: står ekvationen som en produkt lika med noll, kan du plocka isär den och lösa varje bit för sig.

## När parenteserna redan står där

`(x − 4)(x + 9) = 0`

Sätt varje parentes till noll:

- `x − 4 = 0` → **x = 4**
- `x + 9 = 0` → **x = −9**

> Teckenfällan: `x + 9 = 0` ger `x = −9`. Många skriver 9 av bara farten. Läs parentesen som en liten ekvation och lös den ordentligt.

Har en parentes en siffra framför x löser du den på vanligt sätt:

`(2x − 5)(x + 3) = 0` → `2x = 5` → **x = 2,5** och **x = −3**

## När du måste faktorisera själv

Saknas den ensamma siffran är `x` gemensam faktor:

| Ekvation | Utbruten | Lösningar |
|---|---|---|
| x² − 9x = 0 | x(x − 9) = 0 | x = 0, x = 9 |
| 4x² + 12x = 0 | 4x(x + 3) = 0 | x = 0, x = −3 |
| x² + 7x = 0 | x(x + 7) = 0 | x = 0, x = −7 |

**x = 0 räknas.** Den enskilt vanligaste förlusten av poäng här är att dela bort x i båda leden:

~~`x² − 9x = 0` → `x − 9 = 0` → `x = 9`~~

Då är lösningen x = 0 borta, och du har bara halva svaret. Bryt ut i stället för att dela.

## Står det något annat än noll?

Då fungerar metoden inte. `(x − 2)(x + 5) = 12` säger ingenting om de enskilda parenteserna, eftersom 12 kan byggas på hur många sätt som helst.

Gör så här i stället: multiplicera ihop, flytta över allt till ena ledet så att det står 0, och använd pq-formeln. Den kommer i ett senare delmoment.
