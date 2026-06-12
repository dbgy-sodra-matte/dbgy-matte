# Rabatt-räknaren — widget v1

POC-widget för rabatt och prisförändring — vardagsmatten som BF- och SaBep-elever ofta möter på riktigt.

## Vad den gör
- Visar ord. pris, nytt pris och rabatt-% som en prislapp
- Bar visualiserar förhållandet "du betalar / rabatt"
- Tre rutor: Ord. pris, Rabatt %, Nytt pris — click-to-target väljer vilken som räknas ut
- "Du sparar X kr"-rad uppdateras live
- 6 verkliga scenarier som snabbknappar (jeans, hörlurar, mat, t-shirt, cykel, bok)

## Pedagogiska val
- **Visar både sidor samtidigt:** "Du betalar 75 %" + "Rabatt 25 %" — två sidor av samma sak
- **Pris-lapp-estetik** kopplar matten till butikssituationen
- **Click-to-target** — eleven utforskar alla tre frågetyper med samma verktyg
- **Hint avslöjar genvägen:** räkna ut 75 % direkt istället för att räkna 25 % och dra bort
- **Vardagsscenarier** av särskilt intresse för yrkesprogram

## Tekniska val
- Bygger på samma mönster som Procent-stapeln (target-system)
- Vanilla HTML/CSS/JS, ~470 rader
- Mobile-first (boxar staplas vertikalt under 540 px, pilen roterar)
- Steg: 10 kr för pris, 5 % för rabatt — bra för snabb utforskning

## Hosting / embed
Som de andra. Höjd ~620 px.

## Att göra härnäst
- [ ] Mobiltesta
- [ ] v2: prishöjnings-läge (moms, ränta, allmänna prisökningar)
- [ ] v2: "stackable discounts" (10 % + 20 % stackat ≠ 30 %)
- [ ] v2: kopplingsuppgift — "Vilken är bästa dealen?" jämför två scenarier

## Versioner
- **v1** (2026-05-11): Tre värden, click-to-target, prislapp-visualisering, verkliga scenarier.
