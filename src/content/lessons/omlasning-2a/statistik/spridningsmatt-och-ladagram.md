---
slug: "omlasning-2a/statistik/spridningsmatt-och-ladagram"
title: "Spridningsmått och lådagram"
course: omlasning-2a
moment: statistik
moment_title: "Statistik"
lesson_number: 2
lesson_total: 3

success_criteria:
  - Räkna ut variationsbredd och kvartilavstånd
  - Läsa av median och kvartiler ur ett lådagram
  - Veta hur stor andel som ligger i varje del av lådagrammet
  - Jämföra två lådagram och avgöra vilket som har störst spridning

bank:
  - question: "Vilka två värden använder du för att få fram variationsbredden?"
    answer: ["Största värdet minus minsta värdet", "max minus min", "största minus minsta", "störst minus minst"]
    solution: |
      Variationsbredden är hela materialets spännvidd.
      Ta **största värdet minus minsta värdet**.
  - question: "Ett lådagram har nedre kvartil 18 och övre kvartil 34. Vad är kvartilavståndet?"
    answer: ["16"]
    solution: |
      Kvartilavståndet är lådans längd, alltså övre kvartilen minus den nedre.
      34 − 18 = **16**
  - question: "Lådan i ett lådagram går från nedre till övre kvartilen. Hur stor andel ligger där?"
    answer: ["50 %", "50", "50%"]
    solution: |
      Lådan går från nedre till övre kvartilen, alltså från 25 % till 75 %.
      Därinne ligger **50 %** av observationerna.
  - question: "Bestäm variationsbredden för 8, 14, 21 och 29."
    answer: ["21"]
    solution: |
      Största värdet minus det minsta.
      29 − 8 = **21**

how_to:
  - Börja med repetitionen högst upp, den håller tidigare områden vid liv
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Varför spridning behövs

  Två grupper kan ha samma medelvärde och ändå se helt olika ut:

  - `19, 20, 20, 21`: medelvärde 20
  - `2, 8, 30, 40`: medelvärde 20

  Lägesmåttet säger 20 i båda fallen. **Spridningsmåtten är det som skiljer dem åt.**

  ## Variationsbredd

  Största värdet minus det minsta. Hela spännvidden.

  `8, 14, 21, 29` → `29 − 8 = 21`

  Enkel, men känslig: ett enda extremvärde bestämmer hela måttet.

  ## Kvartiler

  Kvartilerna delar materialet i fyra lika stora delar.

  | Punkt | Andel under |
  |---|---|
  | minsta värdet | 0 % |
  | nedre kvartil (Q1) | 25 % |
  | median (Q2) | 50 % |
  | övre kvartil (Q3) | 75 % |
  | största värdet | 100 % |

  ## Kvartilavstånd

  `Q3 − Q1`. Alltså hur brett de mittersta 50 procenten ligger.

  Nedre kvartil 18, övre kvartil 34 → `34 − 18 = 16`

  Kvartilavståndet påverkas **inte** av extremvärden, till skillnad från variationsbredden. Det är därför det ofta är det ärligare måttet.

  ## Lådagrammet

  Ett lådagram ritar de fem talen: minsta värdet, Q1, medianen, Q3, största värdet.

  ```
  |-----[====|====]-----|
  min   Q1  med  Q3   max
  25 %  25 %  25 %  25 %
  ```

  Varje del innehåller **25 %** av observationerna, oavsett hur lång den är.

  | Frågan | Svaret |
  |---|---|
  | Hur många procent ligger i lådan? | 50 % |
  | Hur många procent är över medianen? | 50 % |
  | Hur många procent är under Q1? | 25 % |
  | Hur många procent är över Q3? | 25 % |

  > **En lång del betyder inte fler observationer, den betyder mer utspridda observationer.** Det är den vanligaste feltolkningen av ett lådagram.

  ## Jämföra lådagram

  Två frågor, två mått:

  - **Störst variationsbredd?** Jämför hela strecken, från min till max.
  - **Störst kvartilavstånd?** Jämför bara lådorna.

  De behöver inte ge samma svar. En grupp kan ha ett enda extremvärde som ger stor variationsbredd, men en kort låda.

exercises:
  E:
    - equation: "Bestäm variationsbredden för 8, 14, 21 och 29."
      hint1: "Variationsbredden är hela spännvidden."
      hint2: "Största värdet minus det minsta."
      answer: ["21"]
      solution: |
        29 − 8 = **21**

    - equation: "Ett lådagram har nedre kvartil 18 och övre kvartil 34. Bestäm kvartilavståndet."
      hint1: "Kvartilavståndet är lådans längd."
      hint2: "Övre kvartilen minus den nedre."
      answer: ["16"]
      solution: |
        34 − 18 = **16**

    - equation: "Hur många procent av observationerna ligger mellan medianen och den övre kvartilen?"
      hint1: "Medianen är 50 %-gränsen och övre kvartilen är 75 %-gränsen."
      hint2: "Varje del av ett lådagram innehåller lika stor andel."
      answer: ["25 %", "25", "25%"]
      solution: |
        Från 50 % till 75 % är ett kvarts steg.

        **25 %**: precis som varje annan del av lådagrammet.

    - equation: "Hur många procent av observationerna är större än den övre kvartilen?"
      hint1: "Övre kvartilen är gränsen där 75 % ligger under."
      hint2: "Resten upp till 100 %."
      answer: ["25 %", "25", "25%"]
      solution: |
        75 % ligger under övre kvartilen.

        100 − 75 = **25 %** ligger över.

    - equation: "Ett lådagram visar minsta värdet 5, nedre kvartil 12, median 17, övre kvartil 26 och största värdet 40. Bestäm variationsbredden och kvartilavståndet, i den ordningen."
      hint1: "Variationsbredden räknas på ytterkanterna, kvartilavståndet på lådan."
      hint2: "40 − 5 för det första, 26 − 12 för det andra."
      answer: ["35 och 14", "35, 14", "35 och 14 "]
      solution: |
        Variationsbredd: 40 − 5 = 35

        Kvartilavstånd: 26 − 12 = 14

        **35 och 14**

        Att variationsbredden är mer än dubbelt så stor beror på att materialet har långa svansar utanför lådan.

    - equation: "Anna har kvartilavståndet 9 och variationsbredden 30. Björn har kvartilavståndet 14 och variationsbredden 22. Vem har störst spridning på de mittersta 50 procenten?"
      hint1: "De mittersta 50 procenten är lådan."
      hint2: "Lådans längd är kvartilavståndet. Jämför 9 och 14."
      answer: ["Björn", "björn"]
      solution: |
        De mittersta 50 procenten är lådan, och lådans längd är kvartilavståndet.

        Anna: 9. Björn: 14.

        **Björn** har störst spridning på mitten.

        Anna har däremot störst variationsbredd (30 mot 22), hon har ett eller flera värden långt ut. Måtten svarar på olika frågor.

exit_ticket_form: "https://docs.google.com/forms/d/e/1FAIpQLSeNJ2KSepn9CKnTSFyHH4nR-Uy3haQV-ANclVNC7N21IusEZg/viewform"
prev: lagesmatt
prev_lesson_title: "Lägesmått"
next: normalfordelning
next_lesson_title: "Normalfördelning"
---

## Varför spridning behövs

Två grupper med **samma medelvärde**:

- `19, 20, 20, 21`
- `2, 8, 30, 40`

Båda har medelvärdet 20. Lägesmåttet säger ingenting om att den andra gruppen är utspridd över hela skalan. Det är vad spridningsmåtten är till för.

## Variationsbredd

`största värdet − minsta värdet`

`8, 14, 21, 29` → `29 − 8 = 21`

Enkelt mått, men ett enda extremvärde bestämmer hela resultatet.

## Kvartiler

Kvartilerna delar materialet i fyra lika stora delar.

| Punkt | Andel under |
|---|---|
| nedre kvartil, Q1 | 25 % |
| median, Q2 | 50 % |
| övre kvartil, Q3 | 75 % |

## Kvartilavstånd

`Q3 − Q1`: hur brett de mittersta 50 procenten ligger.

`34 − 18 = 16`

Extremvärden påverkar inte kvartilavståndet, eftersom de ligger utanför lådan. Det gör måttet stabilare än variationsbredden.

## Lådagrammet

Lådagrammet ritar fem tal: min, Q1, median, Q3, max.

Varje del (de två strecken och lådans två halvor) innehåller **25 %** av observationerna.

| Frågan | Svaret |
|---|---|
| andel i lådan | 50 % |
| andel över medianen | 50 % |
| andel under Q1 | 25 % |
| andel över Q3 | 25 % |

> **En lång del betyder inte fler observationer.** Den betyder att de 25 procenten ligger mer utspridda. Det är den vanligaste feltolkningen av ett lådagram, och den finns nästan alltid med som distraktor på provet.

## Jämföra två lådagram

- **Störst variationsbredd?** Jämför hela strecken, min till max.
- **Störst kvartilavstånd?** Jämför bara lådorna.
- **Flest över ett visst värde?** Titta var medianen och kvartilerna ligger i förhållande till värdet.

Svaren behöver inte bli desamma. En grupp kan ha ett enda extremvärde som ger stor variationsbredd men en kort, tät låda.
