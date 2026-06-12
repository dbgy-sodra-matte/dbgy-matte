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
    title: 'Omläsning',
    sitesOverviewUrl: 'https://sites.google.com/dbgy.se/matte/omlasning',
    theme: 'vhs',
    unitLabel: 'Delmoment',
  },
};

/** Helper: hämta kursen för en lektions slug (t.ex. "ma1b/M2-ekvationer/L3" → ma1b) */
export function getCourseFromSlug(slug: string): CourseConfig | undefined {
  const code = slug.split('/')[0];
  return courses[code];
}
