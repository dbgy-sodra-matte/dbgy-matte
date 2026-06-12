# Potens-leksaken — widget v1

POC-widget för **1.4 Potenslagar** i Ma1b. Interaktiv utforskning av de tre potenslagarna.

## Vad den gör
- Tre flikar: Multiplikation, Division, Potens av potens
- Sliders för bas a, exponent m, exponent n
- Visar lagen i symbol-form och med konkreta värden
- Resultat räknas ut live (både som potens och som tal)

## Pedagogiska val
- **Färgkodning:** bas blå, exponent orange — synlig skillnad
- **Tre lagar i en widget:** lättare att jämföra dem
- **Konkret + symboliskt:** eleven ser både a^m och 2^3 = 8

## Tekniska val
- Vanilla HTML/CSS/JS, ~280 rader
- Sliders, inga klick-fällor
- Mobile-first
- Big number-hantering med exponentialnotation för stora värden

## Hosting / embed
Höjd ~620 px.
