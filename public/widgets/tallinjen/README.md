# Tallinjen — widget v1

POC-widget för negativa tal och räkning på tallinjen (Ma1a/b/c, tal-momentet).

## Vad den gör
- Visualiserar nuvarande tal som en markör på en horisontell tallinje (−10 till +10)
- Eleven adderar eller subtraherar ett positivt tal — markören rör sig och en pil visar rörelsen
- Historik visar alla beräkningar som t.ex. `(−2) + 3 = 1`
- Startposition justerbar — utforska från olika nummer
- Färgkodning: addition (grön pil, rör sig höger), subtraktion (orange pil, rör sig vänster)

## Pedagogiska val
- **Negativa tal som position, inte som "mindre än noll".** Markörens position visar storleksordning direkt
- **Addition = höger, subtraktion = vänster** — alltid, oavsett tecken på utgångsläget. Bryter "minus och minus blir plus"-mantra
- **Animation** av rörelsen — eleven *ser* operationen, inte bara siffran
- **Parenteser kring negativa tal** i historiken — vana för senare algebra

## Tekniska val
- Samma designspråk som Ekvationsvågen, Bråk-utforskaren, Procent-stapeln
- Vanilla HTML/CSS/JS, ~450 rader, inga beroenden
- Mobile-first
- Markören animeras med CSS-transition på `left` — billigt, smidigt
- Pilen ritas med absolut positionerade element ovanför axeln

## Hosting / embed
Som de andra widgets. Höjd ~520 px.

## Att göra härnäst
- [ ] Mobiltesta
- [ ] v2: tillåt operation med negativa tal (4 + (−3))
- [ ] v2: multi-steg-utmaningar — "Kom till talet 5 från −3 på minst 2 steg"
- [ ] v2: större intervall för avancerade elever

## Versioner
- **v1** (2026-05-11): Linje med markör, addition/subtraktion av positiva tal, historik.
