# Ekvations-race (v1)

Arkad-spel för **att lösa linjära ekvationer** — algebra är ca 27 % av det nationella provet i Ma1a. Lös ekvationen, skriv x-värdet på sifferknappsatsen, bygg combo.

Del av det **portabla spel-paketet** `Spel/` (se `../index.html`). Spelet ligger på en egen **spelsida**, INTE inbäddat i en lektion — lektionen länkar till spelet, så att inlärningsflödet förblir lugnt och spelet är frivilligt (opt-in).

## Arkitektur & ägande (Model 1)
- **Fristående HTML, noll beroenden.** Inget ramverk, inga byggsteg, ingen inbakad bas-sökväg. Filen öppnas och fungerar var som helst.
- **Portabelt paket:** bara **relativa länkar** → kör identiskt på DBGY:s GitHub Pages (`/dbgy-matte/spel/`) och på **smatte.se** (`/spel/`).
- **Inga elevdata:** rekord sparas bara i `localStorage` med nyckelprefix `race_best_<nivå>` (per nivå, mot sig själv). Inga namn, ingen nätverkskoppling.

## Pedagogiska val
- **Tre nivåer (E → C → A) som eleven väljer fritt:**
  - **Nivå 1 Enkla ekvationer:** `ax+b=c`, `ax=c`, `x+b=c`, `x/a+b=c`. Heltalslösning x i −6..12.
  - **Nivå 2 x i båda led:** `ax+b=cx+d` (a≠c), `a(x+b)=c`, `ax+b=c(x+d)`. Heltalslösning, parenteser ibland.
  - **Nivå 3 Bråk & nämnare:** `(mx+b)/k=c`, `x/a+d=e`, `(x+a)/b=c`. Koefficienter valda så att x blir helt (enstaka 0,5 ok).
- **Fel = amber, aldrig rött** (Kluger & DeNisi). Inget poängavdrag, ingen skam — "Inte än. Rätt svar: X".
- **Avslöjandet lär ut metoden:** efter svar visas hela uträkningen rad för rad i ekvationskortet (t.ex. `3x + 4 = 19 → 3x = 15 → x = 5`), sista raden i grönt — inte bara svaret.
- **Combo (×1 → ×2) + snabbhetsbonus** ger arkad-driv utan att straffa. 10 ekvationer/omgång → resultatskärm med träffsäkerhet, bästa combo och rekord.

## Teknik
- **Frågegeneratorerna kontrollräknade** (5000–8000 försök/nivå med oberoende lösare som återskapar svaret ur den genererade ekvationens koefficienter): varje svar heltal eller 0,5, inga NaN, ingen nämnare/koefficient = 0, x inom −6..12.
- **Touch-först sifferknappsats** (7-9/4-6/1-3 / ± 0 , / ⌫ Svara) + fysiskt tangentbord (siffror, −, , / ., Backspace, Enter). Svarsjämförelse tål komma/punkt och `−`/`-`; halvtal med epsilon (1e-9).
- `prefers-reduced-motion` respekteras. Behåller `WIDGET_RESIZE_v1`-blocket (no-op som helsida).

## Länka från en lektion
Lägg en frivillig länk i slutet av lektionens markdown:

```markdown
> 🎮 **Vill du träna mer?** [Spela Ekvations-race](/dbgy-matte/spel/ekvations-race/v1.html) — lös ekvationer som arkadspel. Frivilligt.
```

Relevanta lektioner: Ma1a-avsnitten om ekvationer (lös ut x, x i båda led, ekvationer med bråk/nämnare).
