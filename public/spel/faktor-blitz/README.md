# Faktor-blitz (v1)

Flyt-träning på **procent ↔ förändringsfaktor** — det nationella provets tunga moment (ca 17 %): översätta +X % / −X % till faktor, räkna nytt värde, kombinera förändringar och räkna baklänges till ursprungspris.

Del av det **portabla spel-paketet** `Spel/` (se `../index.html`). Spelet ligger på en egen **spelsida**, INTE inbäddat i en lektion — lektionen länkar till spelet, så inlärningsflödet förblir lugnt och spelet är frivilligt (opt-in). Speglar arkitekturen i `../grafjagaren/` exakt; bara mekaniken/frågorna skiljer.

## Arkitektur & ägande (Model 1)
- **Fristående HTML, noll beroenden.** Inget ramverk, inga byggsteg, ingen inbakad bas-sökväg. Bara relativa länkar → kör identiskt på DBGY:s GitHub Pages (`/dbgy-matte/spel/`) och på **smatte.se** (`/spel/`).
- **Inga elevdata:** rekord sparas bara i `localStorage` under nyckelprefixet `faktor_best_<nivå>` (per nivå, mot sig själv). Ingen topplista, inga namn, ingen nätverkskoppling.

## Nivåer (E → C → A, fritt val på startskärmen)
- **Nivå 1 Hitta faktorn:** +X % / −X % → förändringsfaktor (X∈{5,10,15,20,25,30,40,50,60,75}). Svar = decimal, t.ex. +25 % → `1,25`, −40 % → `0,6`.
- **Nivå 2 Nytt värde & kedjor:** "N kr efter +X %?" (N,X valda så svaret blir heltal kr) samt "+X % sedan −Y %, total förändringsfaktor?" (faktorerna multipliceras, produkt med ≤2 decimaler, t.ex. `1,2 · 0,9 = 1,08`).
- **Nivå 3 Baklänges:** "Efter +X % kostar varan P kr — vad kostade den innan?" och "sänktes X % till P kr → ursprungspris?". Ursprung valt så svaret blir heltal kr (dela med faktorn).

## Pedagogiska val
- **Tape-/stapelmodell som visuellt stöd:** FÖRE = 100 %-referens, EFTER = faktor · 100 %. Före svar är det okända dolt (streckad `?`); avslöjandet ritar in EFTER-stapeln och visar metoden i text — `+25 % betyder ×1,25`, `baklänges: 1305 ÷ 1,25 = 1044`. Lär ut metoden, inte bara svaret.
- **Fel = amber, aldrig rött** (Kluger & DeNisi). Inget poängavdrag — "Inte än" + rätt svar + förklaring, kör vidare.
- **Combo (×1 → ×2) + snabbhetsbonus** ger arkad-driv utan att straffa. 10 frågor/omgång → resultatskärm med träffsäkerhet, bästa combo och rekord.
- Avskalat chrome i matematikens tjänst — inga maskotar/ljud/explosioner (seductive details, Mayer).

## Teknik
- Touch-först sifferknappsats (komma-inmatning) + fysiskt tangentbord (siffror, `,`/`.`, `−`/`-`, Backspace, Enter). Svarsjämförelse tål komma/punkt och `−`/`-`; faktorer jämförs med epsilon (1e-9).
- **Frågegeneratorerna är kontrollräknade** (5000 försök/nivå + per frågetyp): varje faktor-svar har ≤2 decimaler, varje kr-svar är heltal, inga NaN, ingen division med noll. Exakt heltalsaritmetik (hundradelar) säkrar rena svar — aldrig `1,0833…`.
- `prefers-reduced-motion` respekteras. Behåller `WIDGET_RESIZE_v1`-blocket (no-op som helsida).

## Länka från en lektion
```markdown
> 🎮 **Vill du träna mer?** [Spela Faktor-blitz](/dbgy-matte/spel/faktor-blitz/v1.html) — procent & förändringsfaktor som arkadspel. Frivilligt.
```
Relevanta lektioner: Ma1a procentkapitlet (förändringsfaktor, höjning/sänkning, upprepad förändring, ursprungligt värde/"baklänges").
