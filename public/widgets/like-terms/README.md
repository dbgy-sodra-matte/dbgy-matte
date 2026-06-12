# Förenkla uttryck — widget v1 (Like Terms)

POC-widget för att förenkla algebraiska uttryck genom att kombinera "like terms". För algebra-momentet i Ma1.

## Vad den gör
- Visar ett uttryck (t.ex. `3x + 4 + 2x`) med termerna som färgade block
- Eleven **klickar på ett block** för att markera, sedan **ett block av samma färg** för att slå ihop
- Termer av olika typ är inte kombinerbara — systemet visar tydligt vilka som går
- När coef = 0 efter ihopslagning försvinner termen (tar ut varandra)
- Uttrycket markeras som "förenklat" när alla termer har unik typ
- 6 olika uttryck att rotera mellan

## Pedagogiska val
- **Färgkodning gör skillnaden synlig.** Blå = x-termer, orange = y-termer, grå = konstanter. Eleven *ser* varför 3x och 4 inte kan kombineras
- **Click-to-combine** istället för drag-and-drop — funkar lika bra på mobil
- **Hint disclosure** förklarar varför olika typer inte kombineras
- **Återställningsknapp** uppmuntrar utforskning utan rädsla
- **Sista regeln upptäcker eleven själv:** termer med samma "enhet" kan slås ihop, andra inte

## Tekniska val
- Samma designspråk
- Vanilla HTML/CSS/JS, ~480 rader
- Mobile-first
- State-machine med term-array och selected-id
- Hanterar specialfall: koefficient 1 (visas som "x"), −1 (visas som "−x"), 0 (försvinner)

## Hosting / embed
Som de andra. Höjd ~580 px.

## Att göra härnäst
- [ ] Mobiltesta
- [ ] v2: lägg till x²-termer (egen färg)
- [ ] v2: parenteser och distribution (a(b+c)) som extra steg
- [ ] v2: ge eleven själv möjlighet att skriva in egna uttryck
- [ ] v2: kopplingsuppgift — "Förenkla 3x + 5 − x + 2 till …"

## Versioner
- **v1** (2026-05-11): Klick-att-kombinera, 6 förinställda uttryck, färgkodade typer.
