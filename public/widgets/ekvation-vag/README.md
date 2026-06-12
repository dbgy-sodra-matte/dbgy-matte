# Ekvationsvågen — widget v1

POC-widget för "Lösa enkla linjära ekvationer" (Ma1a/b/c, första momentet med ekvationer).

## Vad den gör
Eleven ser en ekvation på formen `ax + b = c` visualiserad som blocks på en våg. Eleven väljer operationer (subtrahera, addera, dividera, multiplicera) och anger ett tal. Systemet applicerar operationen på *båda* sidor och uppdaterar visuellt. Mål: få `x` ensamt → win-state, eleven ser `x = ...`.

## Pedagogisk poäng
- Förstärker "gör samma sak på båda sidor" — den faktiska matematiska insikten
- Eleven kan **misslyckas** (välja fel operation, dividera så det inte går jämnt ut) → får feedback utan att vara dömande
- Historik visar alla steg → metakognitiv reflektion
- Vågmetaforen ligger närmare matematiken än "flytta över och byt tecken"

## Tekniska val
- Vanilla HTML/CSS/JS, inga beroenden, ~450 rader totalt
- Mobile-first (CSS grid, single-column under 540 px)
- Inga externa fonter, inga API-anrop, allt körs offline
- Ren state-machine: `{ leftA, leftB, rightC, history, won }`
- 6 fördefinierade ekvationer med integer-lösningar → "Nästa ekvation"-knapp

## Hosting / embed
**Embed i Google Sites:**
1. Öppna lektions-sidan i Sites
2. Insert → Embed → Embed code
3. Klistra in hela innehållet i `v1.html`
4. Sätt höjd till ~720 px (kan justeras)

Alternativt — när vi går vidare:
- Ladda upp `v1.html` till en publik Drive-mapp, ta länken, Insert → Embed → By URL
- Eller hosta på Apps Script Web App för data-koppling till elev-Sheet

## Att göra härnäst
- [ ] Testa embed-flödet i Sites (lägg upp i en test-Sites först)
- [ ] Mobiltesta på iOS Safari + Android Chrome
- [ ] Lägg till "Visa kontroll" — substituera x = 5 tillbaka i originalekvationen
- [ ] Eventuellt: ekvationer med x i båda leden (v2)
- [ ] Eventuellt: koppla till Google Form så vi loggar att eleven klarade widgeten
- [ ] Få en elev att testa och säga vad som är otydligt

## Versioner
- **v1** (2026-05-11): Första versionen. ax + b = c, integer-lösningar, 6 ekvationer.
