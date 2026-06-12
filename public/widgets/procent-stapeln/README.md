# Procent-stapeln — widget v1

POC-widget för **procentförståelse** i Ma1a/b/c. Lär eleven att procent är *en av tre värden* — helhet, del, procent — som hänger ihop, inte tre separata räknesätt.

## Vad den gör
- En horisontell stapel visualiserar förhållandet del/helhet
- Tre rutor: Helhet, Del, Procent
- Eleven **klickar på rutan hen vill räkna ut** — den blir grön och räknas automatiskt
- De andra två justeras med +/- (med konfigurerbara steg: 1, 5, 10, 50, 100 kr / 1, 5, 10, 25 %)
- Stapeln uppdateras live
- Snabb-knappar för vardagsscenarier: "30 % av 200 kr", "200 kr av 800 kr", "15 % rabatt på 500 kr" osv.
- Collapsible "Visa formlerna" — när eleven är redo att se det algebraiskt

## Pedagogiska val
- **Bryter "tre olika procentuppgifter"-myten.** Det är *samma tre värden* — eleven flyttar bara om vilken som är target. Det är en av de viktigaste insikterna i procentmoment
- **Click-to-target** istället för läges-knappar — direktmanipulation känns naturligare
- **Vardagsscenarier** lockar BF/SaBep-elever som inte gillar abstrakt matte
- **Formlerna är dolda** by default — eleven ska först bygga intuition, sedan se algebran. Cognitive load i rätt ordning
- **Mjuk feedback:** ingen rätt/fel — det är ett utforskningsverktyg, inte ett prov

## Tekniska val
- Samma designspråk som Ekvationsvågen och Bråk-utforskaren
- Vanilla HTML/CSS/JS, ~450 rader, inga beroenden
- Mobile-first
- Steg-konfigurator gör att eleven kan jobba i de tal-storlekar som passar uppgiften
- State-machine med en `target`-flagga som styr vilket värde som auto-räknas

## Hosting / embed
Samma flöde som de andra två. Höjd ~620 px.

## Att göra härnäst
- [ ] Mobiltesta
- [ ] v2: lägg till "Räkna ut nytt pris efter rabatt"-läge (eller scenarier som triggar detta)
- [ ] v2: stöd för procent > 100 % (löneökning, ränta-på-ränta)
- [ ] v2: koppla till en Form för att logga vilka scenarier eleven testar
- [ ] Testa med BF/SaBep-elev — får de "aha"?

## Versioner
- **v1** (2026-05-11): Tre värden, click-to-target, visuell stapel, scenarier.
