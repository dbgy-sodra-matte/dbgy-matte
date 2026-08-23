---
slug: "omlasning-2a/andragradare/andragradsfunktioner-grafiskt"
title: "Andragradsfunktioner grafiskt"
course: omlasning-2a
moment: andragradare
moment_title: "Algebra och andragradare"
lesson_number: 7
lesson_total: 9

success_criteria:
  - Läsa av en parabels nollställen ur grafen
  - Ange symmetrilinjens ekvation
  - Avgöra om funktionen har ett största eller ett minsta värde
  - Läsa av f(a) och lösa f(x) = k direkt ur grafen

bank:
  - question: "Vad kallas de punkter där parabeln skär x-axeln?"
    answer: ["Nollställen", "nollställena", "nollställe", "nollställen"]
    solution: |
      På x-axeln är y = 0, och där är alltså funktionens värde noll.
      Därför kallas punkterna **nollställen**.
  - question: "En parabel har nollställena x = 2 och x = 8. Vilken ekvation har symmetrilinjen?"
    answer: ["x = 5", "5"]
    solution: |
      Parabeln är symmetrisk, så symmetrilinjen ligger mitt emellan nollställena.
      (2 + 8) / 2 = 5.
      Svar: **x = 5**
  - question: "Har f(x) = −x² + 6x ett största eller ett minsta värde?"
    answer: ["Största värde", "största", "ett största värde", "största värdet"]
    solution: |
      Titta på tecknet framför x². Här är det minus, så parabeln vänder nedåt.
      En nedåtvänd parabel har ett **största värde**.
  - question: "Var skär grafen till f(x) = x² − 8x + 12 y-axeln?"
    answer: ["12", "(0, 12)", "y = 12", "(0,12)"]
    solution: |
      Grafen skär y-axeln där x = 0. Sätt in det.
      f(0) = 0 − 0 + 12 = **12**

how_to:
  - Börja med repetitionen högst upp, den håller tidigare delmoment vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Parabelns fem ställen

  Grafen till en andragradsfunktion kallas en **parabel**. Fem saker läses av direkt ur bilden:

  | Vad | Var i grafen |
  |---|---|
  | Nollställen | där kurvan skär x-axeln |
  | y-skärning | där kurvan skär y-axeln, alltså vid x = 0 |
  | Symmetrilinje | den lodräta linjen mitt emellan nollställena |
  | Extrempunkt | kurvans vändpunkt, ligger på symmetrilinjen |
  | Största eller minsta värde | y-värdet i extrempunkten |

  ## Glad eller ledsen mun

  Tecknet framför `x²` avgör åt vilket håll parabeln öppnar sig.

  | Tecken | Öppning | Extrempunkt | Har |
  |---|---|---|---|
  | positivt | uppåt, glad mun | minimipunkt | ett minsta värde |
  | negativt | nedåt, ledsen mun | maximipunkt | ett största värde |

  `f(x) = x² − 8x + 12` öppnar **uppåt** och har ett minsta värde.
  `f(x) = −x² + 6x` öppnar **nedåt** och har ett största värde.

  > En uppåtvänd parabel har inget största värde alls — den fortsätter uppåt hur långt som helst. Frågan "vilket är det största värdet?" har då svaret "det finns inget".

  ## Symmetrilinjen ligger mitt emellan

  Parabeln är spegelsymmetrisk. Är nollställena `x = 2` och `x = 8` ligger symmetrilinjen precis mitt emellan:

  `(2 + 8) / 2 = 5` → symmetrilinjen är **x = 5**

  Skriv alltid `x = 5`, inte bara `5`. Symmetrilinjen är en linje, och en linje har en ekvation.

  ## Extrempunkten

  Extrempunkten ligger på symmetrilinjen. Har du symmetrilinjen `x = 5` läser du av kurvans höjd där.

  Är höjden −13 blir extrempunkten `(5, −13)`, och funktionens minsta värde är `−13`.

  > **Punkt eller värde?** Extrempunkten är ett koordinatpar, `(5, −13)`. Minsta värdet är ett enda tal, `−13`. Läs frågan noga — det är olika svar.

  ## Läsa av f(a) och lösa f(x) = k

  Precis som för räta linjer:

  - `f(3)` betyder: gå till x = 3, gå upp eller ner till kurvan, läs av höjden.
  - `f(x) = 5` betyder: gå till höjden 5, gå i sidled till kurvan, läs av x-värdet.

  Skillnaden mot en rät linje: parabeln träffas oftast på **två** ställen. Då har ekvationen `f(x) = 5` två lösningar, och båda ska med.

exercises:
  E:
    - equation: "Ange funktionens nollställen. Svara med båda x-värdena."
      hint1: "Nollställena är där kurvan skär x-axeln."
      hint2: "Läs av x-värdena i de två skärningspunkterna med den vågräta axeln."
      answer: ["2 och 6", "x = 2 och x = 6", "6 och 2", "x=2 och x=6", "2, 6"]
      solution: |
        Kurvan skär x-axeln på två ställen.

        **x = 2 och x = 6**
      graf:
        typ: "andragrad"
        a: 1
        b: -8
        c: 12
        xmin: 0
        xmax: 8
        ymin: -6
        ymax: 14
        ySteg: 2

    - equation: "Ange ekvationen för grafens symmetrilinje."
      hint1: "Symmetrilinjen är den lodräta linje som delar parabeln i två spegelbilder."
      hint2: "Den ligger mitt emellan nollställena. Läs av dem först och ta medelvärdet."
      answer: ["x = −2", "x = -2", "−2", "-2", "x=-2", "x=−2"]
      solution: |
        Nollställena är x = −5 och x = 1.

        Symmetrilinjen ligger mitt emellan: (−5 + 1) / 2 = −2

        **x = −2**
      graf:
        typ: "andragrad"
        a: 1
        b: 4
        c: -5
        xmin: -6
        xmax: 2
        ymin: -10
        ymax: 8
        ySteg: 2

    - equation: "Har funktionen ett största eller ett minsta värde, och vilket är det?"
      hint1: "Titta åt vilket håll parabeln öppnar sig."
      hint2: "Kurvan vänder nedåt, alltså finns ett största värde. Läs av höjden i vändpunkten."
      answer: ["största värde 9", "största värdet 9", "9", "största 9", "ett största värde, 9", "största värde: 9"]
      solution: |
        Parabeln öppnar nedåt, så funktionen har ett **största värde**.

        Vändpunkten ligger i (3, 9).

        Största värdet är **9**
      graf:
        typ: "andragrad"
        a: -1
        b: 6
        c: 0
        xmin: -1
        xmax: 7
        ymin: -8
        ymax: 10
        ySteg: 2

    - equation: "Bestäm f(0) med hjälp av grafen."
      hint1: "f(0) är höjden när x = 0, alltså där kurvan skär y-axeln."
      hint2: "Följ den lodräta axeln till kurvan och läs av y-värdet."
      answer: ["-3", "−3", "f(0) = -3", "f(0) = −3"]
      solution: |
        Vid x = 0 ligger kurvan på höjden −3.

        **f(0) = −3**
      graf:
        typ: "andragrad"
        a: 1
        b: -2
        c: -3
        xmin: -2
        xmax: 4
        ymin: -5
        ymax: 6
        ySteg: 1

    - equation: "Lös ekvationen f(x) = 8 med hjälp av grafen. Svara med båda x-värdena."
      hint1: "Gå till höjden 8 på y-axeln och gå i sidled tills du träffar kurvan."
      hint2: "Kurvan ligger på höjden 8 på två ställen. Läs av båda x-värdena."
      answer: ["0 och 2", "x = 0 och x = 2", "2 och 0", "x=0 och x=2", "0, 2"]
      solution: |
        Kurvan ligger på höjden 8 vid två x-värden.

        **x = 0 och x = 2**

        Kontroll: f(0) = 8 ✓ och f(2) = −4 + 4 + 8 = 8 ✓
      graf:
        typ: "andragrad"
        a: -1
        b: 2
        c: 8
        xmin: -3
        xmax: 5
        ymin: -8
        ymax: 10
        ySteg: 2

    - equation: "Bestäm koordinaterna för grafens minimipunkt."
      hint1: "Minimipunkten är kurvans lägsta punkt, där den vänder."
      hint2: "Läs av både x-värdet och y-värdet i vändpunkten och skriv som ett koordinatpar."
      answer: ["(−1, −4)", "(-1, -4)", "-1, -4", "−1, −4", "(-1,-4)", "(−1,−4)"]
      solution: |
        Kurvan vänder vid x = −1, och där ligger den på höjden −4.

        Minimipunkten är **(−1, −4)**
      graf:
        typ: "andragrad"
        a: 1
        b: 2
        c: -3
        xmin: -4
        xmax: 2
        ymin: -5
        ymax: 6
        ySteg: 1

prev: pq-formeln
prev_lesson_title: "pq-formeln"
next: andragradsfunktioner-algebraiskt
next_lesson_title: "Andragradsfunktioner algebraiskt"
---

## Parabeln

Grafen till en andragradsfunktion kallas en **parabel**. Den är symmetrisk, och den vänder alltid en gång.

## Åt vilket håll öppnar den sig?

Tecknet framför `x²` bestämmer allt:

- **Positivt** → öppnar uppåt, "glad mun", har en **minimipunkt** och ett **minsta värde**
- **Negativt** → öppnar nedåt, "ledsen mun", har en **maximipunkt** och ett **största värde**

`f(x) = x² − 8x + 12` öppnar uppåt.
`f(x) = −x² + 6x` öppnar nedåt.

> En uppåtvänd parabel har **inget största värde** — den fortsätter uppåt i all oändlighet. Motsvarande gäller åt andra hållet. Frågan har alltså bara ett svar, inte två.

## De fem avläsningarna

| Fråga | Så gör du |
|---|---|
| Nollställen? | Läs av var kurvan skär x-axeln |
| Var skär den y-axeln? | Följ y-axeln till kurvan, alltså x = 0 |
| Symmetrilinje? | Mitt emellan nollställena |
| Extrempunkt? | Kurvans vändpunkt, som ett koordinatpar |
| Största eller minsta värde? | y-värdet i vändpunkten, ett enda tal |

## Symmetrilinjen

Parabeln är en spegelbild av sig själv kring en lodrät linje. Den linjen går genom vändpunkten.

Är nollställena `x = −5` och `x = 1`:

`(−5 + 1) / 2 = −2` → symmetrilinjen är **x = −2**

Svara alltid med ekvationen `x = −2`, inte bara talet −2. Det är en linje du beskriver.

## Punkt eller värde?

Det här är den vanligaste missförståelsen på den här sidan:

- **Extrempunkten** är ett koordinatpar: `(3, 9)`
- **Största värdet** är ett tal: `9`

Frågar uppgiften efter punkten ska båda koordinaterna med. Frågar den efter värdet räcker y-värdet.

## Läsa av f(a)

`f(0)` betyder: gå till x = 0, gå lodrätt till kurvan, läs av höjden.

Det fungerar för vilket x som helst — precis som på räta linjer i Ma1.

## Lösa f(x) = k grafiskt

Gå till höjden `k` på y-axeln, gå i sidled tills du träffar kurvan, gå ner och läs av x.

Skillnaden mot en rät linje är att du oftast träffar kurvan på **två** ställen. Då har ekvationen två lösningar, och båda ska anges.

| Antal träffar | Betyder |
|---|---|
| två | två lösningar |
| en | en lösning, du är precis vid vändpunkten |
| ingen | ekvationen saknar lösning |
