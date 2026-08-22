---
slug: "omlasning-2b/logaritmer/tiologaritmer"
title: "Tiologaritmer"
course: omlasning-2b
moment: logaritmer
moment_title: "Logaritmer och exponentialekvationer"
lesson_number: 3
lesson_total: 4

success_criteria:
  - 'Förklara vad lg betyder: "10 upphöjt till vad?"'
  - Beräkna lg av tiopotenser i huvudet, även negativa
  - Använda att 10 upphöjt till lg av ett tal ger tillbaka talet
  - Räkna ut lg med miniräknare och avrunda

bank:
  - question: "Vad är lg 1000?"
    answer: ["3"]
  - question: "Vad är lg 0,01?"
    answer: ["−2", "-2"]
  - question: "Vad är 10^(lg 7)?"
    answer: ["7"]
  - question: "Vilken fråga svarar lg x på?"
    answer: ["10 upphöjt till vad blir x", "vilken exponent 10 ska ha för att bli x", "tio upphöjt till vad blir x"]

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Leta upp lg-knappen på din miniräknare innan du börjar
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Vad lg betyder

  `lg x` svarar på frågan **"10 upphöjt till vad blir x?"**

  | Uttryck | Frågan | Svar |
  |---|---|---|
  | lg 100 | 10 upphöjt till vad blir 100? | 2, eftersom 10² = 100 |
  | lg 1000 | 10 upphöjt till vad blir 1000? | 3 |
  | lg 10 | 10 upphöjt till vad blir 10? | 1 |
  | lg 1 | 10 upphöjt till vad blir 1? | 0, eftersom 10⁰ = 1 |

  Det är hela definitionen. Allt annat följer av den.

  ## Tal mindre än 1 ger negativa logaritmer

  | Uttryck | Tänk så här | Svar |
  |---|---|---|
  | lg 0,1 | 0,1 = 10^(−1) | **−1** |
  | lg 0,01 | 0,01 = 10^(−2) | **−2** |
  | lg 0,001 | 0,001 = 10^(−3) | **−3** |

  Räkna nollorna efter kommat, så många, fast negativt.

  ## De två tar ut varandra

  `10^(lg x) = x`

  Exempel: `10^(lg 7) = 7`

  Varför? `lg 7` är precis den exponent som gör 10 till 7. Sätter du tillbaka den exponenten får du 7 igen. Logaritmen och tiopotensen är varandras motsatser, precis som plus och minus.

  ## När talet inte är en tiopotens

  `lg 500` är inte ett jämnt tal. Använd miniräknarens **lg**-knapp:

  `lg 500 ≈ 2,70`

  Rimlighetskoll: 500 ligger mellan 100 (= 10²) och 1000 (= 10³), så svaret ska ligga mellan 2 och 3 ✓

  > Har din miniräknare bara `log` är det samma sak, `log` utan angiven bas betyder tiologaritm.

  ## Varför lg av ett negativt tal inte finns

  `lg (−5)` frågar: "10 upphöjt till vad blir −5?"

  Men 10 upphöjt till **vad som helst** blir alltid positivt, stora exponenter ger stora tal, negativa exponenter ger små positiva bråk. Noll blir det aldrig, och negativt blir det aldrig.

  Därför är `lg` av negativa tal och av noll **odefinierat**.

exercises:
  E:
    - equation: "Beräkna: lg 10000"
      hint1: "Fråga dig: 10 upphöjt till vad blir 10 000?"
      hint2: "Räkna nollorna: 10 000 = 10⁴."
      answer: ["4"]
      solution: |
        10 000 = 10⁴, alltså **lg 10000 = 4**

    - equation: "Beräkna: lg 0,001"
      hint1: "0,001 är en tiopotens med negativ exponent."
      hint2: "0,001 = 10^(−3)."
      answer: ["−3", "-3"]
      solution: |
        0,001 = 10^(−3), alltså **lg 0,001 = −3**

    - equation: "Beräkna: lg 1"
      hint1: "10 upphöjt till vad blir 1?"
      hint2: "Allt upphöjt till noll är 1."
      answer: ["0"]
      solution: |
        10⁰ = 1, alltså **lg 1 = 0**

    - equation: "Beräkna: 10^(lg 12)"
      hint1: "Logaritmen och tiopotensen tar ut varandra."
      hint2: "lg 12 är exakt den exponent som gör 10 till 12."
      answer: ["12"]
      solution: |
        **10^(lg 12) = 12**

        lg 12 är den exponent som gör 10 till 12, sätter du tillbaka den får du 12.

    - equation: "Beräkna lg 400 med miniräknare. Svara med två decimaler."
      hint1: "Använd lg-knappen (kan heta log)."
      hint2: "Svaret ska ligga mellan 2 och 3, eftersom 400 ligger mellan 100 och 1000."
      answer: ["2.60", "2,60", "2.6", "2,6"]
      solution: |
        lg 400 ≈ **2,60**

        Rimlighetskoll: 400 ligger mellan 10² = 100 och 10³ = 1000, så svaret ska ligga mellan 2 och 3 ✓

    - equation: "Finns lg (−100)? Svara ja eller nej."
      hint1: "Frågan är: 10 upphöjt till vad blir −100?"
      hint2: "Kan 10 upphöjt till något tal någonsin bli negativt?"
      answer: ["nej", "Nej"]
      solution: |
        10 upphöjt till vilket tal som helst blir alltid **positivt**, stora exponenter ger stora tal, negativa ger små positiva bråk.

        Det finns alltså inget tal som gör 10 till −100.

        **Nej**, lg (−100) är odefinierat.

prev: exponentialfunktioner
prev_lesson_title: "Exponentialfunktioner"
next: exponentialekvationer
next_lesson_title: "Exponentialekvationer"
---

## En logaritm är en exponent

`lg x` betyder: **"10 upphöjt till vad blir x?"**

Svaret är alltid en exponent. Det är det enda du behöver hålla i huvudet, resten följer.

`lg 100 = 2` eftersom `10² = 100`.

## Tiopotenserna i huvudet

| x | lg x | Varför |
|---|---|---|
| 10 000 | 4 | 10⁴ = 10 000 |
| 1 000 | 3 | 10³ |
| 100 | 2 | 10² |
| 10 | 1 | 10¹ |
| 1 | 0 | 10⁰ = 1 |
| 0,1 | −1 | 10^(−1) |
| 0,01 | −2 | 10^(−2) |
| 0,001 | −3 | 10^(−3) |

Genvägen: **räkna nollorna**. Tre nollor efter ettan → lg = 3. Tre siffror efter kommat i 0,001 → lg = −3.

## De tar ut varandra

`10^(lg x) = x`

Logaritmen tar ett tal och ger exponenten. Tiopotensen tar exponenten och ger tillbaka talet. De är varandras motsatser.

`10^(lg 7) = 7`: du behöver inte räkna ut något alls.

## Med miniräknare

De flesta tal är inte tiopotenser. Då används **lg**-knappen (heter `log` på många räknare, samma sak).

`lg 500 ≈ 2,70`

**Rimlighetskolla alltid** genom att klämma in talet mellan två tiopotenser:

- 500 ligger mellan 100 och 1000
- alltså mellan 10² och 10³
- alltså ligger lg 500 mellan 2 och 3 ✓

Det avslöjar felslag på räknaren direkt.

## Negativa tal saknar logaritm

`lg (−5)` finns inte. Frågan "10 upphöjt till vad blir −5?" saknar svar, eftersom 10 upphöjt till vad som helst blir positivt.

Av samma skäl finns inte `lg 0`.

> Får du ett felmeddelande på räknaren när du logaritmerar är det nästan alltid detta: du har råkat mata in ett negativt tal eller noll.

## Vad logaritmen ska användas till

Nästa delmoment är hela poängen: när det okända står **uppe i exponenten**, som i `1,06^x = 2`, är logaritmen verktyget som får ner det.
