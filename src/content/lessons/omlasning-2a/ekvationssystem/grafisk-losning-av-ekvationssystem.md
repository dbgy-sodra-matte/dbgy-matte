---
slug: "omlasning-2a/ekvationssystem/grafisk-losning-av-ekvationssystem"
title: "Grafisk lösning av ekvationssystem"
course: omlasning-2a
moment: ekvationssystem
moment_title: "Räta linjens ekvation och ekvationssystem"
lesson_number: 4
lesson_total: 7

success_criteria:
  - Läsa av lösningen till ett ekvationssystem ur skärningspunkten
  - Skriva lösningen som x = ... och y = ...
  - Avgöra hur många lösningar ett system har utifrån linjernas läge
  - Tolka en kostnads- och intäktsgraf

bank:
  - question: "Två linjer skär varandra i punkten (5, 3). Vad är lösningen till ekvationssystemet?"
    answer: ["x = 5 och y = 3", "x = 5, y = 3", "(5, 3)", "5 och 3", "x=5 och y=3"]
    solution: |
      Skärningspunkten är den enda punkt som ligger på båda linjerna, alltså det värdepar som passar i båda ekvationerna.
      Svar: **x = 5 och y = 3**
  - question: "Två linjer i ett ekvationssystem är parallella. Hur många lösningar finns då?"
    answer: ["Ingen", "0", "inga", "ingen lösning", "noll"]
    solution: |
      Parallella linjer har samma lutning och möts därför aldrig.
      Utan skärningspunkt finns **ingen lösning**.
  - question: "I hur många av ekvationerna måste en lösning stämma?"
    answer: ["båda", "i båda", "2", "två", "alla"]
    solution: |
      En lösning måste gälla för sambanden samtidigt, inte bara för det ena.
      Den måste alltså stämma i **båda** ekvationerna.
  - question: "Hur många lösningar har ett ekvationssystem där de två ekvationerna beskriver samma linje?"
    answer: ["oändligt många", "oändligt", "oändligt antal", "hur många som helst", "alla punkter på linjen"]
    solution: |
      Ligger linjerna ovanpå varandra är varje punkt på linjen en gemensam punkt.
      Då finns **oändligt många lösningar**.

how_to:
  - Börja med repetitionen högst upp, den håller Del 1 vid liv medan du läser Del 2
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Vad ett ekvationssystem är

  Två samband som ska gälla **samtidigt**. Varje ekvation är en linje, och lösningen är det värdepar `(x, y)` som passar i båda.

  Grafiskt: **skärningspunkten**.

  ```
  y = 2x − 1
  y = −x + 5
  ```

  Ritar du båda linjerna korsar de varandra i `(2, 3)`. Lösningen skrivs

  `x = 2 och y = 3`

  ## Så läser du av

  1. Leta upp punkten där linjerna korsar varandra
  2. Gå rakt **ner** till x-axeln → x-värdet
  3. Gå rakt **vänster** till y-axeln → y-värdet

  > Skriv **båda** talen. En lösning till ett ekvationssystem är ett par, inte ett tal. Bara "x = 2" är ett halvt svar.

  ## Kontrollera i BÅDA ekvationerna

  Sätt in `x = 2` och `y = 3`:

  | Ekvation | Vänsterled | Högerled | Stämmer? |
  |---|---|---|---|
  | y = 2x − 1 | 3 | 2 · 2 − 1 = 3 | ✓ |
  | y = −x + 5 | 3 | −2 + 5 = 3 | ✓ |

  Stämmer det bara i den ena är det inte en lösning till systemet.

  ## Tre möjliga utfall

  | Linjernas läge | Antal lösningar |
  |---|---|
  | korsar varandra | **en** |
  | parallella, olika m | **ingen** |
  | ligger ovanpå varandra | **oändligt många** |

  Parallella linjer har samma k. Ligger de dessutom på samma ställe (samma m) är det egentligen samma linje skriven på två sätt, och varje punkt på den är en lösning.

  > Att svara "ingen lösning" är ett fullgott svar. Skriv motiveringen: *linjerna har samma lutning och möts aldrig*.

  ## Fördel och nackdel

  Den grafiska metoden **visar** vad som händer, och det är svårt att räkna fel på en bild.

  Nackdelen är precisionen. Ligger skärningen vid `x = 2,37` går den inte att läsa av exakt. Då behövs de algebraiska metoderna, som kommer i nästa två delmoment.

exercises:
  E:
    - equation: "Ange lösningen till ekvationssystemet som visas i grafen."
      hint1: "Leta upp punkten där linjerna korsar varandra."
      hint2: "Från korsningen: gå rakt ner för x-värdet, rakt vänster för y-värdet."
      answer: ["x = 2 och y = 3", "x = 2, y = 3", "(2, 3)", "2 och 3", "x=2 och y=3"]
      solution: |
        Linjerna korsar varandra i punkten (2, 3).

        **x = 2 och y = 3**

        Kontroll: 2 · 2 − 1 = 3 ✓ och −2 + 5 = 3 ✓
      graf:
        typ: "linjer"
        linjer:
          - k: 2
            m: -1
          - k: -1
            m: 5
        xmin: -1
        xmax: 5
        ymin: -3
        ymax: 7
        ySteg: 1

    - equation: "Ange lösningen till ekvationssystemet som visas i grafen."
      hint1: "Skärningspunkten är den enda punkt som ligger på båda linjerna."
      hint2: "Läs av båda koordinaterna och skriv dem som x = ... och y = ..."
      answer: ["x = 3 och y = 4", "x = 3, y = 4", "(3, 4)", "3 och 4", "x=3 och y=4"]
      solution: |
        Linjerna korsar varandra i punkten (3, 4).

        **x = 3 och y = 4**

        Kontroll: 3 + 1 = 4 ✓ och 7 − 3 = 4 ✓
      graf:
        typ: "linjer"
        linjer:
          - k: 1
            m: 1
          - k: -1
            m: 7
        xmin: 0
        xmax: 6
        ymin: 0
        ymax: 8
        ySteg: 1

    - equation: "Lös ekvationssystemet grafiskt med hjälp av grafen. Ange både x och y."
      hint1: "Den ena linjen är vågrät. Var korsar den andra linjen den?"
      hint2: "Följ den vågräta linjen tills den lutande linjen träffar den."
      answer: ["x = 3 och y = 5", "x = 3, y = 5", "(3, 5)", "3 och 5", "x=3 och y=5"]
      solution: |
        Linjerna korsar varandra i punkten (3, 5).

        **x = 3 och y = 5**

        Kontroll: 3 · 3 − 4 = 5 ✓ och den vågräta linjen ligger på y = 5 ✓
      graf:
        typ: "linjer"
        linjer:
          - k: 3
            m: -4
          - k: 0
            m: 5
        xmin: -1
        xmax: 5
        ymin: -6
        ymax: 9
        ySteg: 1

    - equation: "Hur många lösningar har ekvationssystemet som visas i grafen?"
      hint1: "Titta på om linjerna någonsin möts."
      hint2: "Linjerna har samma lutning. Kommer de att korsa varandra någonstans?"
      answer: ["ingen", "0", "inga", "ingen lösning", "noll"]
      solution: |
        Linjerna har samma lutning och ligger parallellt. De möts aldrig.

        Antal lösningar: **ingen**

        Motivering: parallella linjer har samma k men olika m, så det finns ingen punkt som ligger på båda.
      graf:
        typ: "linjer"
        linjer:
          - k: 2
            m: 1
          - k: 2
            m: -4
        xmin: -1
        xmax: 5
        ymin: -6
        ymax: 10
        ySteg: 2

    - equation: "Är x = 4 och y = 6 en lösning till ekvationssystemet y = 2x − 2 och y = 10 − x? Svara ja eller nej."
      hint1: "Sätt in värdena i BÅDA ekvationerna. Det räcker inte att det stämmer i den ena."
      hint2: "y = 2 · 4 − 2 = 6 i den första. Vad ger den andra?"
      answer: ["ja", "Ja"]
      solution: |
        Första ekvationen: 2 · 4 − 2 = 6 ✓
        Andra ekvationen: 10 − 4 = 6 ✓

        Värdena stämmer i båda.

        Svar: **ja**

    - equation: "Är x = 2 och y = 9 en lösning till ekvationssystemet y = 4x + 1 och y = 3x + 4? Svara ja eller nej."
      hint1: "Testa i båda ekvationerna, en i taget."
      hint2: "Första ger 4 · 2 + 1 = 9. Vad ger den andra?"
      answer: ["nej", "Nej"]
      solution: |
        Första ekvationen: 4 · 2 + 1 = 9 ✓
        Andra ekvationen: 3 · 2 + 4 = 10, men y ska vara 9 ✗

        Värdena stämmer i den första men inte i den andra.

        Svar: **nej** — en lösning måste passa i båda.

prev: rata-linjens-ekvation-algebraiskt
prev_lesson_title: "Räta linjens ekvation algebraiskt"
next: substitutionsmetoden
next_lesson_title: "Substitutionsmetoden"
---

## Två samband samtidigt

Ett **ekvationssystem** är två samband som ska gälla på samma gång.

```
y = 2x − 1
y = −x + 5
```

Varje ekvation är en rät linje. Lösningen är det värdepar `(x, y)` som passar i **båda** — alltså den punkt som ligger på båda linjerna.

Grafiskt är det **skärningspunkten**.

## Läsa av lösningen

1. Hitta punkten där linjerna korsar varandra
2. Rakt ner till x-axeln → x-värdet
3. Rakt vänster till y-axeln → y-värdet

Skriv svaret som `x = 2 och y = 3`, eller som punkten `(2, 3)`.

> **Båda talen krävs.** En lösning till ett ekvationssystem är ett par. Svarar du bara "x = 2" är halva svaret borta.

## Kontrollen är hela poängen

Sätt in i **båda** ekvationerna:

| Ekvation | Med x = 2, y = 3 | Stämmer |
|---|---|---|
| y = 2x − 1 | 3 = 2 · 2 − 1 = 3 | ✓ |
| y = −x + 5 | 3 = −2 + 5 = 3 | ✓ |

Stämmer det bara i den ena är det inte en lösning till systemet. Det är den vanligaste fällan i den här typen av uppgifter.

## Tre utfall

| Linjerna | Antal lösningar | Varför |
|---|---|---|
| korsar varandra | en | en enda gemensam punkt |
| parallella | ingen | samma k, möts aldrig |
| ligger ovanpå varandra | oändligt många | varje punkt är gemensam |

"Ingen lösning" är ett riktigt svar, inte ett misslyckande. Skriv motiveringen: *linjerna har samma lutning och möts aldrig*.

## När grafisk metod räcker och inte

**Räcker** när skärningen ligger på en hel ruta och du bara behöver ungefär rätt — till exempel i en kostnadsgraf där frågan är "ungefär hur många måste säljas för att gå jämnt upp?".

**Räcker inte** när svaret är obekvämt. Ligger skärningen vid `x = 2,37` kan du inte läsa av det. Då behövs substitutionsmetoden eller additionsmetoden, som kommer härnäst.
