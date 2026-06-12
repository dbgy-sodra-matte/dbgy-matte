# DBGY Matte

Hybrid-arkitekturen för förstelärarprojektet: Sites är hubben, **detta repo bygger lektionssidorna** som elev-friendly statiska HTML-filer hostade på GitHub Pages.

## Kom igång på 3 minuter

```bash
# 1. Klona (eller bara packa upp om du fick det som zip)
cd dbgy-matte

# 2. Installera (Node 20+ rekommenderas)
npm install

# 3. Kör lokal dev-server
npm run dev
```

Öppna [http://localhost:4321/dbgy-matte/](http://localhost:4321/dbgy-matte/) i webbläsaren.

Du borde se:
- En landningssida med en lista över kurser och lektioner
- Klicka på "Lektion 1: Vad är en ekvation?" → komplett lektionssida
- Klicka på "Lektion 2: Förenkla uttryck" → samma mall, men med embeddad **Förenkla-uttryck-widget** + tre interaktiva övningar med hint-stege
- Klicka på "Lektion 3: Lösa enkla linjära ekvationer" → med **Ekvationsvågen** embeddad
- I botten av varje lektion: prev/next-navigation + "Kursöversikt" som pekar mot Sites

## Strukturen

```
dbgy-matte/
├── astro.config.mjs         # Site URL och base path
├── package.json
├── src/
│   ├── site.config.ts       # 👈 Kurslänkar till Sites — uppdatera här
│   ├── styles/global.css    # Design tokens — färger, fonter, layout
│   ├── content/
│   │   ├── config.ts        # Frontmatter-schema (type-safe)
│   │   └── lessons/         # 👈 ALLA LEKTIONER bor här som .md-filer
│   │       └── ma1b/
│   │           └── M2-ekvationer/
│   │               ├── L1.md
│   │               ├── L2.md
│   │               └── L3.md
│   ├── layouts/
│   │   └── Lesson.astro     # Mallen — orden från frontmatter blir blocken
│   ├── components/          # SuccessCriteria, RetrievalBlock, Widget, Exercise…
│   └── pages/
│       ├── index.astro      # Landningssidan (intern översikt)
│       └── [...slug].astro  # Renderar varje lektion via slug
└── public/
    └── widgets/             # Alla HTML-widgets — embedas av <Widget> via iframe
```

## Skriva en ny lektion

1. Skapa en ny fil i `src/content/lessons/<course>/<moment>/L<n>.md`
2. Kopiera frontmatter från en befintlig lektion och fyll i
3. Skriv markdown-text under
4. Spara — dev-servern bygger om automatiskt
5. Pusha till GitHub → live på GitHub Pages efter ~30 sekunder

## Spaced retrieval — sekvens-baserat

Lektioner får automatiskt retrieval-frågor från **tidigare lektioners frågebank** enligt **position i sekvensen** — N−1, N−3, N−7 lektioner bakåt.

**Varför sekvens, inte datum:** Robust mot allt som händer i schemat. Om en vecka försvinner — man tar bara nästa lektion i ordningen. Inga datum att underhålla.

**Tre filer styr detta:**
- `src/data/sequence.ts` — den kronologiska ordningen per kurs. Speglar Classroom-strukturen 1:1.
- `src/lib/retrieval.ts` — algoritmen. Inget du ändrar dagligen.
- `bank:` i varje lektions frontmatter — 3–5 frågor som testar lektionens stoff.

**När du skriver ny lektion:**
- Lägg till `bank:` i frontmatter (frågor som testar dagens stoff)
- Hoppa över `retrieval:` — auto-genereras
- Lägg till lektionens slug på rätt position i `sequence.ts`
- Klart

**Manuell override:** sätt `retrieval:` i frontmatter om du vill överstyra (t.ex. första lektionen i ett moment har inga tidigare lektioner att dra från).

## Frontmatter — vad varje fält betyder

```yaml
title: "Lektionens titel"
course: ma1b                  # matchar nyckel i src/site.config.ts
moment: M2-ekvationer         # mappnamn — används i URL och navigation
moment_title: "Linjära ekvationer"  # vad som visas till eleven
lesson_number: 3              # vilken lektion i momentet
lesson_total: 8               # hur många lektioner momentet har totalt

success_criteria:             # listas i blå banderoll längst upp
  - "Kunna sak A"
  - "Kunna sak B"

retrieval:                    # OPTIONAL — manuell override. Lämna borta för auto-spacing
  - question: "..."
    answer: "..."
    source: "..."             # vilken lektion frågan kommer från
    lessons_ago: 1            # antal lektioner tillbaka i sekvensen

bank:                         # 3–5 frågor som testar denna lektion (används som retrieval i senare lektioner)
  - question: "..."
    answer: "..."

video: "https://www.youtube.com/embed/XXXX"   # optional — genomgångsfilm

widget: "ekvation-vag/v1"     # optional — pekar till /public/widgets/<src>.html
widget_height: 720            # optional, default 720

exercises:                    # optional — interaktiva med hint-stege
  - equation: "2x + 7 = 21"
    hint1: "..."
    hint2: "..."
    hint3: "..."
    micro_question: "Vilken metod?"
    choices: ["Alt A", "Alt B", "Alt C", "Alt D"]
    correct: 1                # index (0-baserat)
    solution: |
      flerradslösning här

exit_ticket_form: "https://docs.google.com/forms/d/e/.../viewform?embedded=true"
exit_ticket_height: 720       # optional

prev: L2                      # föregående lektion-id i samma moment
next: L4                      # nästa lektion-id
prev_lesson_title: "Förenkla uttryck"
next_lesson_title: "Ekvationer med x i båda leden"
```

## Designspråk

Alla färger ligger som CSS-variabler i `src/styles/global.css`:

```css
--bg: #fafaf7;        --ink: #1d1d1f;
--accent: #2a5d8f;    --accent-soft: #e8f0f8;
--good: #2e7d4f;      --good-soft: #e3f1e8;
--warn: #c1873c;      --warn-soft: #f8efdf;
```

Widgets använder samma variabler — allt smälter in.

## Deploya till GitHub Pages

1. Skapa GitHub-repo, t.ex. `dbgy-matte`. Pusha koden.
2. I `astro.config.mjs`: byt `site` till din GitHub-Pages-URL och `base` till repots namn.
3. På GitHub: Settings → Pages → Source = **GitHub Actions**.
4. Pusha till `main`. Workflow i `.github/workflows/deploy.yml` bygger och deployar automatiskt.
5. URL:en blir `https://<username>.github.io/dbgy-matte/`.

## Sites — så här kopplar du

På din Google Sites-kursöversikt, lägg in en knapp/länk per lektion till motsvarande URL:

```
https://<username>.github.io/dbgy-matte/ma1b/M2-ekvationer/L3
```

Mappstrukturen i `src/content/lessons/` blir URL:en. Lektionsfilen `L3.md` → `/ma1b/M2-ekvationer/L3`.

I `src/site.config.ts` sätter du Sites-länken **per kurs** — den används av "Kursöversikt"-knappen i botten av varje lektion.

## Lägga till en ny widget

1. Bygg HTML-filen i `public/widgets/<widget-namn>/v1.html`
2. I en lektion: lägg till `widget: "widget-namn/v1"` i frontmatter
3. Klart

## Nästa steg

- Sätta riktiga URL:er i `astro.config.mjs` och `src/site.config.ts`
- Skapa exit-ticket-forms i Google Forms och klistra in URL:erna
- Spela in genomgångsfilmer (Loom eller YouTube unlisted)
- Skriva resten av lektionerna
- Bygga elevdokumentet (separat Apps Script — se [[Hybrid-arkitektur]] i Obsidian)

## Frågor?

Se Obsidian-vault: [[Förstelärarskap]] → [[Hybrid-arkitektur]] och [[Modell v1]].
