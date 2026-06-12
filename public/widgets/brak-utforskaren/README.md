# Bråk-utforskaren — widget v1

POC-widget för att bygga **bråkförståelse** i Ma1a/b/c — visualiserar bråk som staplar, jämför två bråk sida vid sida, kopplar bråk → decimal → procent.

## Vad den gör
- Eleven justerar täljare och nämnare med +/-
- En blå stapel visualiserar bråket — fler men *mindre* delar när nämnaren ökar
- Decimal och procent visas i realtid (kopplar tre representationer)
- "Visa Bråk B" lägger till en orange stapel för jämförelse
- Verdict-rad säger "3/4 är större än 2/3" — eleven *ser* det och får det bekräftat i text
- Snabb-knappar för vanliga bråk (1/2, 1/3, ..., 7/10)

## Pedagogiska val
- **Bryter "större tal = större bråk"-fellösen.** Ökar nämnaren — stapeln visar att 1/4 är mindre än 1/3
- **Tre representationer på samma skärm:** bråk, decimal, procent. Hjälper eleven bygga ekvivalens-schema
- **Jämförelseläge** löser den klassiska "är 2/3 eller 5/8 störst?"-frågan visuellt utan att eleven behöver räkna gemensam nämnare
- **Mjuk feedback:** ingen rätt/fel — utforskning är hela poängen

## Tekniska val
- Samma designspråk som Ekvationsvågen (samma färgvariabler, samma kortlayout)
- Vanilla HTML/CSS/JS, ~400 rader, inga beroenden
- Mobile-first (single column under 540 px)
- Begränsar nämnaren till 1–24 (annars blir cellerna för smala för mobil)
- Täljaren clampas till [0, nämnaren] så vi inte hamnar i oäkta bråk (v2-fråga)

## Hosting / embed
Samma flöde som Ekvationsvågen:
1. Sites → Insert → Embed → Embed code
2. Klistra in hela `v1.html`
3. Höjd ~640 px (kan justeras)

## Att göra härnäst
- [ ] Mobiltesta
- [ ] v2: tillåt oäkta bråk (t.ex. 7/4) och visa det som 1 + 3/4
- [ ] v2: addera/subtrahera-läge (visa visuellt hur 1/2 + 1/3 funkar)
- [ ] v2: "challenge mode" — visa en stapel, eleven gissar bråket
- [ ] Koppla till Form för loggning av användning

## Versioner
- **v1** (2026-05-11): Första versionen. Visualisering + decimal/procent + jämförelse.
