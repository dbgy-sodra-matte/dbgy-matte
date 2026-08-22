---
slug: "omlasning-2b/ekvationssystem/vad-ar-ett-ekvationssystem"
title: "Vad är ett ekvationssystem?"
course: omlasning-2b
moment: ekvationssystem
moment_title: "Ekvationssystem"
lesson_number: 3
lesson_total: 6

success_criteria:
  - Förklara vad lösningen till ett ekvationssystem är
  - Läsa av lösningen ur en färdig graf med två linjer
  - Lösa ett ekvationssystem grafiskt genom att rita båda linjerna
  - Kontrollera att en lösning stämmer i BÅDA ekvationerna

bank:
  - question: "Två linjer skär varandra i punkten (4, 2). Vad är lösningen till ekvationssystemet?"
    answer: ["x = 4 och y = 2", "x = 4, y = 2", "(4, 2)", "4 och 2"]
  - question: "Hur många lösningar har ett ekvationssystem där linjerna är parallella?"
    answer: ["Ingen", "0", "inga", "ingen lösning"]
  - question: "Vad ska du göra för att kontrollera en lösning till ett ekvationssystem?"
    answer: ["Sätta in den i båda ekvationerna", "testa i båda ekvationerna", "pröva i båda ekvationerna"]
  - question: "Vad betyder skärningspunkten mellan två linjer?"
    answer: ["Det x och y som passar i båda ekvationerna", "punkten som ligger på båda linjerna", "där båda sambanden gäller samtidigt"]

how_to:
  - Börja med kom-igång-frågorna, de repeterar förra delmomentet
  - Klicka upp "Teorigenomgång och exempel" och läs teorin
  - Gör övningarna. Fastnar du? Öppna ledtråd 1 först
  - Klarar du alla sex utan ledtrådar sitter delmomentet, gå vidare till nästa

worked_example: |
  ## Läsa av lösningen ur en graf

  Två linjer är ritade i samma koordinatsystem. De korsar varandra i en punkt.

  | Steg | Vad vi gör | Resultat |
  |---|---|---|
  | Hitta korsningen | Punkten där linjerna möts | — |
  | Läs x-koordinaten | Gå rakt ner till x-axeln, säg 3 | x = 3 |
  | Läs y-koordinaten | Gå rakt vänster till y-axeln, säg 1 | y = 1 |

  Lösningen skrivs **x = 3 och y = 1**.

  ## Lösa grafiskt: rita själv

  Lös systemet:

  ```
  y = 2x + 1
  y = 9 − 2x
  ```

  | Steg | Vad vi gör |
  |---|---|
  | Linje 1 | m = 1, k = 2. Sätt en prick i (0, 1), gå 1 höger och 2 upp, dra linjen |
  | Linje 2 | m = 9, k = −2. Prick i (0, 9), gå 1 höger och 2 **ner**, dra linjen |
  | Läs av | Linjerna korsar varandra i (2, 5) |

  Svar: **x = 2 och y = 5**

  ## Kontrollera: alltid i BÅDA

  Sätt in x = 2 och y = 5:

  | Ekvation | Räkna ut högerledet | Blev det y = 5? |
  |---|---|---|
  | y = 2x + 1 | 2 · 2 + 1 = 5 | ✓ |
  | y = 9 − 2x | 9 − 2 · 2 = 5 | ✓ |

  Stämmer den i bara en av dem är det inte lösningen till systemet.

exercises:
  E:
    - equation: "Grafen visar två linjer. Ange lösningen till ekvationssystemet."
      graf:
        typ: "linjer"
        linjer:
          - k: 1
            m: -2
          - k: -2
            m: 7
        xmin: 0
        xmax: 5
        ymin: -3
        ymax: 8
        ySteg: 1
      hint1: "Leta upp punkten där linjerna korsar varandra."
      hint2: "Från korsningen: gå rakt ner till x-axeln för x-värdet, rakt vänster till y-axeln för y-värdet."
      answer: ["x = 3 och y = 1", "x = 3, y = 1", "(3, 1)", "3 och 1"]
      solution: |
        Linjerna korsar varandra i punkten (3, 1).

        **x = 3 och y = 1**

    - equation: "Grafen visar två linjer. Ange lösningen till ekvationssystemet."
      graf:
        typ: "linjer"
        linjer:
          - k: 1
            m: 5
          - k: -1
            m: 1
        xmin: -5
        xmax: 2
        ymin: -3
        ymax: 8
        ySteg: 1
      hint1: "Var möts linjerna? Punkten ligger till vänster om y-axeln."
      hint2: "x-koordinaten är negativ. Läs av båda koordinaterna i korsningen."
      answer: ["x = −2 och y = 3", "x = -2 och y = 3", "x = −2, y = 3", "(−2, 3)", "(-2, 3)"]
      solution: |
        Linjerna korsar varandra i (−2, 3).

        **x = −2 och y = 3**

    - equation: "Lös ekvationssystemet grafiskt: y = 2x + 1 och y = 9 − 2x. Ange lösningen."
      graf:
        typ: "linjer"
        linjer:
          - k: 2
            m: 1
            etikett: "y = 2x + 1"
          - k: -2
            m: 9
            etikett: "y = 9 − 2x"
        xmin: 0
        xmax: 4
        ymin: 0
        ymax: 10
        ySteg: 1
      hint1: "Båda linjerna är ritade åt dig. Leta upp korsningen."
      hint2: "Korsningen ligger vid x = 2. Gå rakt upp. Vilket y-värde har den?"
      answer: ["x = 2 och y = 5", "x = 2, y = 5", "(2, 5)", "2 och 5"]
      solution: |
        Linjerna korsar varandra i (2, 5).

        **x = 2 och y = 5**

        Kontroll: 2 · 2 + 1 = 5 ✓ och 9 − 2 · 2 = 5 ✓

    - equation: "Stämmer x = 3 och y = 7 i ekvationssystemet y = 2x + 1 och y = 10 − x? Svara ja eller nej."
      hint1: "Sätt in x = 3 och y = 7 i den FÖRSTA ekvationen och se om det stämmer."
      hint2: "Första: 2 · 3 + 1 = 7 ✓. Testa nu den andra: 10 − 3 = ?"
      answer: ["ja", "Ja"]
      solution: |
        Ekvation 1: 2 · 3 + 1 = 7 ✓
        Ekvation 2: 10 − 3 = 7 ✓

        Båda stämmer → **ja**, det är lösningen.

    - equation: "Stämmer x = 1 och y = 5 i ekvationssystemet y = 3x + 2 och y = x + 6? Svara ja eller nej."
      hint1: "Testa i båda ekvationerna. Det räcker inte att en stämmer."
      hint2: "Första: 3 · 1 + 2 = 5 ✓. Andra: 1 + 6 = 7, inte 5."
      answer: ["nej", "Nej"]
      solution: |
        Ekvation 1: 3 · 1 + 2 = 5 ✓
        Ekvation 2: 1 + 6 = 7 ✗ (skulle blivit 5)

        Den stämmer bara i den ena → **nej**.

        > Ett par som passar i bara en ekvation ligger på bara en av linjerna, inte i korsningen.

    - equation: "Ett ekvationssystem består av linjerna y = 2x + 1 och y = 2x + 6. Hur många lösningar har systemet?"
      hint1: "Jämför k-värdena. Vad betyder det när två linjer har samma lutning?"
      hint2: "Båda har k = 2 men olika m, de är parallella och kommer aldrig att mötas."
      answer: ["0", "ingen", "inga", "ingen lösning"]
      solution: |
        Båda linjerna har k = 2, alltså samma lutning, men olika m.

        De är **parallella** och korsar aldrig varandra.

        Antal lösningar: **0**

prev: rata-linjens-ekvation
prev_lesson_title: "Räta linjens ekvation"
next: substitutionsmetoden
next_lesson_title: "Substitutionsmetoden"
---

## Två samband samtidigt

Ett **ekvationssystem** är två ekvationer som ska gälla på samma gång:

```
y = 2x + 1
y = 9 − 2x
```

Klammern `{` framför betyder just det: *båda dessa, samtidigt*.

Att **lösa** systemet är att hitta det x och det y som passar i **båda** raderna.

## Bilden: två linjer

Varje ekvation är en rät linje. Ritar du båda i samma koordinatsystem finns tre möjligheter:

| Vad linjerna gör | Antal lösningar |
|---|---|
| Korsar varandra i en punkt | **En**, den punkten |
| Är parallella (samma k, olika m) | **Ingen**, de möts aldrig |
| Ligger ovanpå varandra (samma k och m) | Oändligt många |

I den här kursen är det nästan alltid det första fallet.

## Så löser du grafiskt

1. Rita **linje 1**: sätt en prick i (0, m), använd k för att gå vidare, dra linjen.
2. Rita **linje 2** på samma sätt i samma koordinatsystem.
3. Leta upp **korsningen**.
4. Läs av x och y där.

Svaret skrivs som `x = … och y = …`.

## Kontrollen som räddar dig

Sätt in ditt x och ditt y i **båda** ekvationerna. Stämmer båda är du klar. Stämmer bara den ena har du hittat en punkt på en av linjerna, inte skärningspunkten.

> **Vanligaste felet:** att bara kolla den ekvation man råkade räkna med. Det upptäcker aldrig felet, eftersom svaret alltid stämmer i den man använde.

## Var grafiskt räcker, och inte

Grafisk lösning är bra för att **förstå** vad ett ekvationssystem är, och funkar fint när svaret ligger på en jämn ruta. Men ligger skärningen i (2,4 ; 3,7) blir avläsningen en gissning.

Därför kommer de algebraiska metoderna härnäst: de ger exakta svar oavsett hur talen ser ut.
