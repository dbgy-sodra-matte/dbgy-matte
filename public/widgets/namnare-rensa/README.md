# Nämnare-rensaren — widget v1

POC-widget för **1.3 Ekvationer med nämnare** i Ma1b. Visar steg-för-steg hur man rensar bort nämnaren och löser bråk-ekvationer.

## Vad den gör
- Visar en bråk-ekvation i läsbar form (med riktiga bråk-streck)
- Eleven klickar på den föreslagna operationen (multiplicera med nämnaren, sedan subtrahera/addera, sedan dividera)
- Animationer mellan steg
- Historik visar alla steg
- Win-state visar slutsvar
- 5 olika ekvationer att rotera mellan

## Pedagogiska val
- **Tvingar fram strategin:** först multiplicera bort nämnaren, sedan vanlig ekvationslösning
- **Steg-för-steg:** ingen genväg — eleven måste klicka sig igenom varje operation
- **Tydlig metaforer:** ”Få x-termen ensam”, ”få x ensam” — bygger vidare på Ekvationsvågen-tänket

## Tekniska val
- Samma designspråk som övriga widgets
- Vanilla HTML/CSS/JS, ~350 rader
- Mobile-first
- State-machine med 4 steg (start → multiplicerat → konstant flyttad → löst)

## Hosting / embed
Som de andra. Höjd ~580 px.
