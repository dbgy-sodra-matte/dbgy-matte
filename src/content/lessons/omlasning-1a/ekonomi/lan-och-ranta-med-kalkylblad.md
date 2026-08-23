---
slug: "omlasning-1a/ekonomi/lan-och-ranta-med-kalkylblad"
title: "Lån och ränta med kalkylblad"
course: omlasning-1a
moment: ekonomi
moment_title: "Ekonomi"
lesson_number: 4
lesson_total: 4

success_criteria:
  - Förstå att en formel i en cell börjar med = och räknar automatiskt
  - Skriva en formel som räknar ut ränta på ett belopp i en annan cell
  - Läsa av en lånetabell och förstå hur skulden minskar år för år

bank:
  - question: "Vilket tecken måste en formel i ett kalkylblad börja med?"
    answer: ["=", "likhetstecken", "lika med", "ett likhetstecken", "likamedtecken"]
    solution: |
      Kalkylbladet räknar bara om cellen börjar med **=**.
      Utan likhetstecknet ser programmet innehållet som vanlig text.
  - question: "I B2 står 10 000. Vad visar cellen =B2*0,05?"
    answer: ["500", "500 kr"]
    solution: |
      0,05 är samma sak som 5 %.
      10 000 · 0,05 = **500**
  - question: "I B2 står 5 000. Vad visar cellen =B2*1,04?"
    answer: ["5200", "5 200", "5200 kr"]
    solution: |
      1,04 är förändringsfaktorn för +4 %.
      5 000 · 1,04 = **5 200**
  - question: "I B2 står 8 000. Vad visar cellen =B2*0,90?"
    answer: ["7200", "7 200", "7200 kr"]
    solution: |
      0,90 är förändringsfaktorn för −10 %.
      8 000 · 0,90 = **7 200**

how_to:
  - Börja med kom-igång-frågorna, de repeterar tidigare delmoment
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Avsluta med checkpointen längst ner, minst 8 av 10 rätt så är delmomentet klart

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSd648E7iDvuctBaxtatvgiYuxH04_feB4ajlHbGHPzNh1wjBg/viewform"

worked_example: |
  Ett **kalkylblad** (Google Kalkylark eller Excel) räknar åt dig. Du skriver en **formel** i en cell (den börjar alltid med `=`) och bladet räknar ut svaret.

  ## En formel börjar med =

  | Cell | Innehåll | Visar |
  |---|---|---|
  | B2 | 10000 | 10000 |
  | C2 | =B2*0,05 | **500** (5 % ränta på 10 000) |

  Cellen `C2` tar talet i `B2` och multiplicerar med 0,05. Ändrar du `B2` räknas `C2` om automatiskt.

  ## Räkna nytt värde med förändringsfaktor

  | Cell | Innehåll | Visar |
  |---|---|---|
  | B2 | 5000 | 5000 |
  | C2 | =B2*1,04 | **5200** (värdet efter +4 %) |

  ## En lånetabell: skulden minskar år för år

  Lån 100 000 kr, du amorterar 20 000 kr per år:

  | År | Skuld vid årets början |
  |---|---|
  | 1 | 100 000 |
  | 2 | 80 000 |
  | 3 | 60 000 |

  Varje rad tar förra årets skuld minus amorteringen. Det är precis vad ett kalkylblad gör automatiskt när du "drar ner" formeln.

exercises:
  E:
    - equation: "Vad måste du skriva först i en cell för att det ska bli en formel som räknar?"
      hint1: "Ett särskilt tecken talar om för kalkylbladet att det är en uträkning."
      answer: ["=", "likhetstecken", "ett likhetstecken", "lika med", "likamedtecken"]
      solution: |
        En formel börjar alltid med **=** (likhetstecken). Utan det blir det bara text.

    - equation: "I cell B2 står talet 10 000. Vad visar cellen C2 om du skriver =B2*0,05?"
      hint1: "Formeln tar talet i B2 och multiplicerar med 0,05 (5 %)."
      answer: ["500", "500 kr"]
      solution: |
        =B2*0,05 → 10 000 · 0,05 = **500** (det är 5 % av 10 000).

    - equation: "I cell B2 står 5 000. Vad visar cellen =B2*1,04?"
      hint1: "1,04 är förändringsfaktorn för +4 %. Du räknar alltså värdet efter en ökning på 4 %."
      answer: ["5200", "5 200", "5200 kr"]
      solution: |
        =B2*1,04 → 5 000 · 1,04 = **5 200** (värdet efter +4 %).

    - equation: "I cell B2 står 8 000. Vad visar cellen =B2*0,90?"
      hint1: "0,90 är faktorn för −10 %. Värdet efter en minskning på 10 %."
      answer: ["7200", "7 200", "7200 kr"]
      solution: |
        =B2*0,90 → 8 000 · 0,90 = **7 200** (värdet efter −10 %).

    - equation: "Ett lån är 100 000 kr. Du amorterar 20 000 kr per år. Hur stor är skulden efter 2 år?"
      hint1: "Dra bort amorteringen en gång per år: 100 000 − 20 000 − 20 000."
      answer: ["60000", "60 000", "60000 kr"]
      solution: |
        År 1: 100 000 − 20 000 = 80 000
        År 2: 80 000 − 20 000 = **60 000 kr**

    - equation: "I en lånetabell står skulden 80 000 kr i cell B5. Räntan är 5 %. Vad visar =B5*0,05?"
      hint1: "5 % ränta på skulden 80 000."
      answer: ["4000", "4 000", "4000 kr"]
      solution: |
        =B5*0,05 → 80 000 · 0,05 = **4 000 kr** (årets ränta).

    - equation: "Skulden står i cell B5. Räntesatsen är 9 %. Skriv formeln som räknar ut årets ränta."
      hint1: "Börja med =. Ta cellen där skulden står och multiplicera med räntesatsen som decimal."
      hint2: "9 % som decimal är 0,09. I kalkylblad skrivs gånger som *."
      answer: ["=B5*0,09", "=B5*0.09", "=0,09*B5", "=0.09*B5", "B5*0,09", "B5*0.09", "0,09*B5"]
      solution: |
        Räntesatsen 9 % = 0,09. Formeln: **=B5*0,09**

        (=0,09*B5 fungerar lika bra, ordningen spelar ingen roll vid multiplikation.)

    - equation: "Varför är ett kalkylblad praktiskt när man räknar ränta i många år?"
      hint1: "Tänk på vad som händer om du måste räkna 20 år för hand jämfört med i ett blad."
      solution: |
        Kalkylbladet **räknar om automatiskt**, du skriver formeln en gång och drar ner den, i stället för att räkna varje år för hand.

prev: lan-ranta-amortering
prev_lesson_title: "Lån, ränta och amortering"
next: redo-att-tenta
next_lesson_title: "Redo att tenta? — Ekonomi"
---

## Låt datorn räkna

Ett **kalkylblad** (Google Kalkylark eller Excel) är ett rutnät av celler. Varje cell har en adress: kolumn + rad, t.ex. `B2`. Du kan skriva tal i celler, eller en **formel** som räknar åt dig.

## Formler börjar med =

För att en cell ska räkna måste du börja med ett **likhetstecken**:

```
=B2*0,05
```

Den här formeln tar talet i cell `B2` och multiplicerar med 0,05. Står det 10 000 i B2 visar cellen **500** (5 % ränta). Ändrar du B2 räknas allt om automatiskt, det är hela poängen.

## Räkna ränta och nytt värde

Allt du lärt dig om förändringsfaktor funkar i kalkylbladet:

| Du vill… | Formel | Exempel (B2 = 5 000) |
|---|---|---|
| ränta 5 % | =B2*0,05 | 250 |
| värde efter +4 % | =B2*1,04 | 5 200 |
| värde efter −10 % | =B2*0,90 | 4 500 |

## En lånetabell

Det smarta med kalkylblad: en **tabell** över många år. Lån 100 000 kr, amortering 20 000 kr/år:

| År | Skuld | Ränta (5 %) |
|---|---|---|
| 1 | 100 000 | 5 000 |
| 2 | 80 000 | 4 000 |
| 3 | 60 000 | 3 000 |

Varje år: skulden minskar med amorteringen, och räntan räknas på den nya, mindre skulden. När du "drar ner" formeln gör bladet alla raderna automatiskt.

> **Regel att skriva ner:** en formel börjar med =. Cellens adress (t.ex. B2) står för talet i den cellen. Samma procenträkning som för hand, fast automatiskt.
