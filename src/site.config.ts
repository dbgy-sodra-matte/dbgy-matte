// Site-wide configuration.
// Edit kurslänkar och Sites-URL:er per kurs här — sidan använder dem automatiskt.

export const SITE_TITLE = 'DBGY Matte';

export type CourseConfig = {
  code: string;
  title: string;
  /** Länken till denna kurs översikt på Google Sites — används av "Kursöversikt"-knappen */
  sitesOverviewUrl: string;
  /** Färgnyans för kursens header (valfri — fall-back till accent om utelämnad) */
  accent?: string;
  /** Temavariant — sätter klassen theme-<namn> på <body>. Omläsningen kör "vhs". */
  theme?: string;
  /** Vad en sida kallas i kursens UI ("Lektion" default; omläsningen säger "Delmoment") */
  unitLabel?: string;
  /** Apps Script-webbappens /exec-URL för elevens kvitto. Tom = "Mitt kvitto" visar
   *  "kommer snart". Fylls i när Simon deployat kvitto-webbappen (tools/apps-script/kvitto-webapp.gs). */
  kvittoWebAppUrl?: string;
};

export const courses: Record<string, CourseConfig> = {
  'ma1b': {
    code: 'ma1b',
    title: 'Ma1b SaBep1',
    sitesOverviewUrl: 'https://sites.google.com/dbgy.se/matte/ma1b-sabep1',
  },
  'ma1a': {
    code: 'ma1a',
    title: 'Ma1a BF1',
    sitesOverviewUrl: 'https://sites.google.com/dbgy.se/matte/ma1a-bf1',
  },
  'omlasning': {
    code: 'omlasning',
    title: 'Omläsning Ma1b',
    sitesOverviewUrl: 'https://sites.google.com/dbgy.se/matte/omlasning',
    theme: 'vhs',
    unitLabel: 'Delmoment',
    kvittoWebAppUrl: 'https://script.google.com/a/macros/ga.dbgy.se/s/AKfycbytHEiSXh2_5XnhbH81CSxoH3rX6qOgO05_X_-BLEXIW7k9Irfpi3GvTLhU-zZ9Owx0/exec',
  },
  'omlasning-1a': {
    code: 'omlasning-1a',
    title: 'Omläsning Ma1a',
    sitesOverviewUrl: 'https://sites.google.com/dbgy.se/matte/omlasning',
    theme: 'vhs',
    unitLabel: 'Delmoment',
    // kvittoWebAppUrl sätts när dataspinen för Ma1a-omläsningen är byggd (egna checkpoint-Forms + Sheet).
  },
};

/** Helper: hämta kursen för en lektions slug (t.ex. "ma1b/M2-ekvationer/L3" → ma1b) */
export function getCourseFromSlug(slug: string): CourseConfig | undefined {
  const code = slug.split('/')[0];
  return courses[code];
}
