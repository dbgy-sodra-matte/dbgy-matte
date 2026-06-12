# Text-till-ekvation — widget v1

POC-widget för **1.2b Linjära ekvationer — tillämpning** i Ma1b. Bygger ekvationer från ord-problem genom interaktiv översättning.

## Vad den gör
- Eleven läser en text med vissa fraser som är klickbara
- Klickar fraserna i rätt ordning för att bygga ekvationen
- Ekvationen växer fram i en synlig ruta
- När klar visas lösningen steg-för-steg
- 3 olika ord-problem att rotera mellan (tal-gåta, ålder, tre på varandra följande)

## Pedagogiska val
- **Bryt ner översättningen:** varje fras i texten motsvarar en del av ekvationen
- **Tvingar fram ordning:** eleven måste tänka på vilken del som kommer först
- **Visar steg-för-steg-lösning** efter byggandet
- **Tolkning tillbaka:** "Pelle är 7 år (Lisa är 11)" inte bara "x = 7"

## Tekniska val
- Vanilla HTML/CSS/JS, ~330 rader
- Mobile-first
- 3 originalformulerade problem (inte derivativ av KM-uppgifter)
- State-machine för phrase-ordering

## Hosting / embed
Höjd ~700 px.
