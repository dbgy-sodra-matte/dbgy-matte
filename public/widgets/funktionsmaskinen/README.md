# Funktionsmaskinen — widget v1

POC-widget för introduktion till funktioner i Ma1 — eleven utforskar en hemlig regel `y = ax + b` genom att mata in värden och se vad som kommer ut.

## Vad den gör
- Visualiserar funktionen som en maskin med "In", "Maskin", "Ut"
- Eleven matar in x — maskinen producerar y med kort fördröjning och flash-animation
- Tabell byggs upp över alla testade värden (sorterad)
- Eleven kan gissa regeln (a och b) — systemet kontrollerar mot alla data points
- "Ny funktion" → slumpar fram nya a, b (a ∈ [−4..5] utom 0, b ∈ [−5..5])
- "Visa svaret" som sista utväg

## Pedagogiska val
- **Funktion som svart låda → lockar fram x → y-tänkandet** innan formell notation
- **Eleven måste själv** välja vilka x-värden hen testar — pedagogiskt rikt (välj 0 och 1 → få a och b enkelt)
- **Ledtråden avslöjar strategin** men inte svaret: "skicka in 0 och 1"
- **Inga "vinster"** — det är utforskning, inte en quiz
- **Bygger bro till linjär funktion** — eleven har redan en intuition när formeln introduceras

## Tekniska val
- Samma designspråk
- Vanilla HTML/CSS/JS, ~480 rader
- Mobile-first (maskinen staplas vertikalt under 540 px)
- Slumpar bort konstanta funktioner (a = 0) — för svårt att gissa
- Validerar gissning mot *alla* testade x — inte bara en

## Hosting / embed
Som de andra. Höjd ~720 px.

## Att göra härnäst
- [ ] Mobiltesta
- [ ] v2: svårare funktioner (kvadratiska eller bråktal)
- [ ] v2: koppla till graf — visa punkterna i koordinatsystem
- [ ] v2: "Hint mode" — visa skillnader y(n+1) − y(n) som ledtråd till a
- [ ] v2: tävlingsläge — gissa regeln på så få x-prov som möjligt

## Versioner
- **v1** (2026-05-11): Maskin-metafor, gissningskontroll, slumpade regler.
