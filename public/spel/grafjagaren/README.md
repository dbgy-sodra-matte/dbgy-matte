# Grafjägaren (v1)

Arkad-spel för **grafavläsning** — det nationella provets enskilt största brist i Ma1a (avläs f(a), lös f(x)=k, riktningskoefficient/m, skärningspunkt, skilja rät linje från exponentiell, startvärde).

Del av det **portabla spel-paketet** `Spel/` (se `../index.html`). Spelet ligger på en egen **spelsida**, INTE inbäddat i en lektion — lektionssidan länkar till spelet, så att inlärningsflödet på lektionen förblir lugnt och spelet är frivilligt (opt-in). Detta är ett medvetet designval grundat i forskningen (se nedan).

## Arkitektur & ägande (Model 1)
- **Fristående HTML, noll beroenden.** Ingen Astro, inget ramverk, inga byggsteg, ingen inbakad bas-sökväg. Filen öppnas och fungerar var som helst.
- **Portabelt paket:** hela mappen `Spel/` (hubb `index.html` + spel) använder bara **relativa länkar** → kör identiskt på DBGY:s GitHub Pages (`/dbgy-matte/spel/`) och på **smatte.se** (`/spel/`). Simon äger källan och kan kopiera mappen till smatte.se när som helst.
- **Skolkopia:** en kopia deployas i DBGY-sajten (`dbgy-matte/public/spel/`) så att skolsajten är självständig (projektets prime directive: DBGY ska fungera helt utan Smatte). Ingen korsberoende åt något håll.
- **Synk vid ändring:** redigera källan i `Spel/`, kopiera sedan `Spel/` → `dbgy-matte/public/spel/` (en `cp -r`). Lägg samma mapp på smatte.se separat.

## Pedagogiska val
- **Tre nivåer (E → C → A) som eleven väljer fritt:**
  - **Nivå 1 Avläsning:** läs av `f(a)` och lös `f(x)=k` ur en rät linje. Heltalssvar.
  - **Nivå 2 Linjens DNA:** bestäm riktningskoefficient `k` (inkl. 0,5) och `m`.
  - **Nivå 3 Skärning & form:** skärningspunktens x-värde, "rät linje vs exponentiell", startvärde `f(0)`.
- **Fel = amber, aldrig rött** (Kluger & DeNisi). Inget poängavdrag, ingen skam — "Inte än" + rätt svar visas.
- **Avslöjandet lär ut avläsningen:** efter svar ritas streckade hjälplinjer (x → upp till grafen → ut till y) i grönt + punkten + en kort förklaring. Under frågan visas bara en svag markör för *vilket* x/y man ska läsa.
- **Combo (×1 → ×2) + snabbhetsbonus** ger arkad-driv utan att straffa. 10 frågor/omgång → resultatskärm med träffsäkerhet, bästa combo och rekord.
- **Ingen topplista, inga elevdata** — rekord sparas bara i `localStorage` (per nivå, mot sig själv). Forskningen: publika absoluta topplistor skadar lågrankade; eget rekord är säkert. Uppfyller datakravet.

## Forskningsgrund (varför egen sida, inte inbäddat)
- **Bär inlärningen (starkt stöd):** retrieval practice / testningseffekten (Roediger & Karpicke) + omedelbar, förklarande feedback (van der Kleij: elaborerad ES 0,49; lågpresterande vinner mest).
- **Risk = tidspress:** Boaler/Beilock/NCTM varnar för att tidtagning i matte ger ångest och blockerar arbetsminnet. Därför är spelet **frivilligt på egen sida**, utanför lektionens inlärningsbana — inte påtvingat. (Spelets klocka kvar som medvetet val 2026-06-25; lugnt läge utan klocka kan läggas till i v2 vid behov.)
- **Undvik distraktion (seductive details, Mayer):** chromet hålls avskalat i matematikens tjänst; lägg inte till maskotar/ljud/explosioner.
- **Nyhetseffekt:** spel ska vara *en* frivillig komponent, inte dagligt tvång — då håller effekten.

## Teknik
- Koordinatsystemet ritas programmatiskt i **SVG** (rutnät, axlar, etiketter var 2:a vid stora fönster, clip-path). `fitWindow()` ramar in nyckelpunkter med marginal och ≥8 enheters spann.
- **Frågegeneratorerna kontrollräknade** (5000 försök/typ): varje svar heltal eller 0,5, alla fönster giltiga.
- **Touch-först sifferknappsats** + fysiskt tangentbord. Svarsjämförelse tål komma/punkt och `−`/`-`; halvtal med epsilon.
- `prefers-reduced-motion` respekteras. Behåller `WIDGET_RESIZE_v1`-blocket (no-op när sidan körs som helsida).

## Länka från en lektion
Lägg en frivillig länk i lektionens markdown (helst i slutet — seductive-details-forskningen: enrichment skadar mest i början):

```markdown
> 🎮 **Vill du träna mer?** [Spela Grafjägaren](/dbgy-matte/spel/grafjagaren/v1.html) — grafavläsning som arkadspel. Frivilligt.
```

Relevanta lektioner: Ma1a 4.3 Läsa av grafer (nivå 1–2), samt 4.5 (skärningspunkt), 4.7 (linjär/exp), 4.8 (startvärde).
