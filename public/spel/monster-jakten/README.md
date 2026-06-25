# Mönster-jakten (v1)

Arkad-spel för **talmönster / mönster i figurer** (NP-andel ~12 %): hitta regeln bakom ett växande prickmönster, fortsätt det, använd regeln framåt och baklänges, och känn igen kvadrattal (n²).

Del av det **portabla spel-paketet** `Spel/` (se `../index.html`). Spelet ligger på en egen **spelsida**, INTE inbäddat i en lektion — lektionssidan länkar till spelet, så att inlärningsflödet på lektionen förblir lugnt och spelet är frivilligt (opt-in).

## Arkitektur & ägande (Model 1)
- **Fristående HTML, noll beroenden.** Ingen Astro, inget ramverk, inga byggsteg, ingen inbakad bas-sökväg. Filen öppnas och fungerar var som helst.
- **Portabelt paket:** bara **relativa länkar** → kör identiskt på DBGY:s GitHub Pages (`/dbgy-matte/spel/`) och på **smatte.se** (`/spel/`).
- **Inga elevdata:** rekord sparas bara i `localStorage` med prefix `monster_best_<nivå>` (mot dig själv, per nivå). Ingen topplista, inga namn, ingen nätverkskoppling.

## Mekanik (visuellt)
Figur 1, 2 och 3 ritas programmatiskt i **SVG** som prickmönster (cirklar). Spelaren extrapolerar regeln och skriver svaret på sifferknappsatsen. 10 figurer/omgång, 15 s/fråga, combo (×1 → ×2) + snabbhetsbonus.

- **Blå prickar** = `a` prickar per steg (tillväxten, en kolumn per figur).
- **Orange prickar** = `b` fasta prickar (konstant bas).
- Den **frågade figuren ritas aldrig** — bara figur 1–3 visas, eleven ska klura ut regeln.

## Nivåer (E → C → A, väljs fritt)
- **Nivå 1 Fortsätt mönstret:** linjärt antal `a·n + b` (a∈{1,2,3}, b∈{0–3}). "Hur många prickar i figur 4?" → `a·4 + b`.
- **Nivå 2 Använd regeln:** framåt till stor figur ("figur 10" → `a·10 + b`) **och** baklänges ("Vilken figur har P prickar?", n = 5–12) → lös ut `n`.
- **Nivå 3 Svårare mönster:** kvadratmönster `n²` (rita 1–3 som fyllda kvadrater) → "figur m" (m = 4–7) **och** svårare linjär baklänges med större tal (a∈{2,3,4}, n = 8–15).

## Svar & avslöjande
- Heltalssvar via touch-sifferknappsats + fysiskt tangentbord. Jämförelsen tål komma/punkt och `−`/`-` (epsilon 1e-9).
- **Fel = amber, aldrig rött** (Kluger & DeNisi). Inget poängavdrag: "Inte än. Rätt svar: X".
- Avslöjandet **lär ut metoden**: regeln skrivs ut och räknas igenom, t.ex. `Regel: 3·n + 1. Figur 4 = 3·4 + 1 = 13`, och varje ritad figur får sitt prickantal (`= 4`, `= 7`, `= 10`) så `+a`-steget syns.

## Teknik & verifiering
- Prickarna ritas ur regeln (`figDots`): tillväxt `a` rader × `n` kolumner + konstant `b` i en basrad → antal stämmer exakt med `a·n + b` (kvadrat: `n²`).
- **Frågegeneratorerna kontrollräknade** (≥2500 försök/nivå): alla svar positiva heltal, inga NaN, ingen division med noll, och varje ritad figurs prickantal = regelns värde. Rimliga intervall (svar 4–49, max 16 ritade prickar).
- Avskalat chrome (seductive details, Mayer) — inga maskotar/ljud/explosioner. `prefers-reduced-motion` respekteras. Behåller `WIDGET_RESIZE_v1`-blocket (no-op som helsida).

## Länka från en lektion
```markdown
> 🎮 **Vill du träna mer?** [Spela Mönster-jakten](/dbgy-matte/spel/monster-jakten/v1.html) — talmönster som arkadspel. Frivilligt.
```
Relevanta lektioner: Ma1a talmönster / figurmönster, linjära samband (`a·n + b`) och kvadrattal.
