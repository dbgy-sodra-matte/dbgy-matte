// Site-wide configuration.
// Edit kurslänkar och Sites-URL:er per kurs här — sidan använder dem automatiskt.

export const SITE_TITLE = 'DBGY Matte';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  TENTA-AV: TID OCH PLATS — ÄNDRA HÄR, INGEN ANNANSTANS
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Tiden stod tidigare inskriven på sju ställen i fyra system (sajten, båda
 * kvitto-webapparna, lärarpanelen, Classroom-generatorn). Att ändra 13:45 till
 * 12:30 krävde sju redigeringar, och missade man ett sa systemen emot varandra
 * för eleverna. Nu är det här den enda källan.
 *
 * Sajten läser objektet direkt. Apps Script-delarna hämtar samma värden som
 * JSON från /tenta-av.json (se src/pages/tenta-av.json.ts) — så en ändring här
 * plus en push räcker för ALLT.
 *
 * Skriv bara den STÅENDE regeln. Enskilda datum hör hemma i Classroom, annars
 * ruttnar sidan så fort ett tillfälle flyttas.
 */
export const tentaAv = {
  /** "onsdagar", "torsdagar" … */
  dag: 'onsdagar',
  /** Klockslag med en-dash. En-dash är rätt för tidsspann, inte tankstreck. */
  tid: 'kl 12:30–13:30',
  /** "sal 304". Tom sträng döljer platsen i alla texter. */
  plats: 'sal 304',
  /** Kort tillägg om när på dagen, t.ex. "på stödtiden". Tom = utelämnas. */
  tillagg: 'på stödtiden',
  /** Sista anmälningstidpunkt. */
  anmalanSenast: 'tisdag kl 12:00',
  /** Antal platser per tillfälle. */
  maxAntal: 20,
};

/** "Onsdagar kl 12:30–13:30 i sal 304, på stödtiden" — utan avslutande punkt. */
export function tentaAvNar(): string {
  const delar = [tentaAv.dag, tentaAv.tid];
  if (tentaAv.plats) delar.push('i ' + tentaAv.plats);
  const rad = delar.join(' ');
  const med = tentaAv.tillagg ? rad + ', ' + tentaAv.tillagg : rad;
  return med.charAt(0).toUpperCase() + med.slice(1);
}

export type CourseConfig = {
  code: string;
  title: string;
  /** Länken till denna kurs översikt på Google Sites — används av "Kursöversikt"-knappen */
  sitesOverviewUrl: string;
  /** Färgnyans för kursens header (valfri — fall-back till accent om utelämnad) */
  accent?: string;
  /** Temavariant — sätter klassen theme-<namn> på <body>. Omläsningen kör
   *  "omlasning" (indigo, se global.css). Utan tema gäller basens blå. */
  theme?: string;
  /** Vad en sida kallas i kursens UI ("Lektion" default; omläsningen säger "Delmoment") */
  unitLabel?: string;
  /** Apps Script-webbappens /exec-URL för elevens kvitto. Tom = "Mitt kvitto" visar
   *  "kommer snart". Fylls i när Simon deployat kvitto-webbappen (tools/apps-script/kvitto-webapp.gs). */
  kvittoWebAppUrl?: string;
  /** Elevlänken till anmälningsformuläret för tenta-av (skapas av skapaAnmalningsForm()
   *  i kvitto-projektet — kör funktionen, kopiera loggens elevlänk hit). Tom = rutan på
   *  pre-testsidorna visar provtiden utan knapp och hänvisar till Classroom. */
  tentaAvAnmalanUrl?: string;
  /** Dold = kursen visas inte på startsidan (sidorna finns kvar på sina URL:er).
   *  SaBep/BF döljs HT26: klasserna kör Smatte, Astro-kurserna är källa/backup. */
  dold?: boolean;
  /** Provmodell. "mastery" = Ma1-omläsningen: eleven tentar av ett område i taget
   *  när den själv är redo, på rullande provtider. "deltentor" = Ma2-prövningen:
   *  områdena buntas i två deltentor med FASTA tillfällen. Styr "Börja här"-texten
   *  på kursöversikten och tenta-av-rutan på pre-testsidorna. Default: mastery. */
  provModell?: 'mastery' | 'deltentor';
  /** Deltentorna, i ordning. Bara relevant när provModell = "deltentor".
   *  `omraden[].slug` är moment-mappnamnet (samma sträng som frontmatterns `moment`);
   *  `titel` är det eleven ser. Generalrepetitionens egen mapp (`del-N`) tas med så
   *  att även den sidan vet vilken deltenta den hör till, men den listas aldrig som
   *  ett område att kunna — därför flaggan `arGeneralrep`. */
  deltentor?: {
    namn: string;
    nar: string;
    omraden: { slug: string; titel: string; arGeneralrep?: boolean }[];
  }[];
};

export const courses: Record<string, CourseConfig> = {
  'ma1b': {
    code: 'ma1b',
    title: 'Ma1b SaBep1',
    dold: true,
    sitesOverviewUrl: 'https://sites.google.com/dbgy.se/matte/ma1b-sabep1',
    // Kvitto-webapp deployad 2026-06-16 (Ma1b = SaBep; BF läser Ma1a, egen kurs).
    kvittoWebAppUrl: 'https://script.google.com/a/macros/ga.dbgy.se/s/AKfycbwF4_vC5J5JbCKVZ5Ex9MmiMxvMgBJmD5YJ-zA8mGELGg-Kkj8ts3SjgT2Z9Zqy4Shd/exec',
  },
  'ma1a': {
    code: 'ma1a',
    title: 'Ma1a BF1',
    dold: true,
    sitesOverviewUrl: 'https://sites.google.com/dbgy.se/matte/ma1a-bf1',
    // Kvitto-webapp deployad 2026-06-24 (Ma1a = BF; 19 kumulativa checkpoints).
    kvittoWebAppUrl: 'https://script.google.com/a/macros/ga.dbgy.se/s/AKfycbyqmMT3wsSWbaRxK_Nae2ST5642uBHXhUcyzIzvfkMYAqZNzhLHc6hCS4lZ75dXyP_1IA/exec',
  },
  'omlasning-1a': {
    code: 'omlasning-1a',
    title: 'Omläsning Ma1a',
    sitesOverviewUrl: 'https://sites.google.com/dbgy.se/matte/omlasning',
    theme: 'omlasning',
    unitLabel: 'Delmoment',
    kvittoWebAppUrl: 'https://script.google.com/a/macros/ga.dbgy.se/s/AKfycbwZBpX0djD9STXPuzXjKRrErr7kCRxRkDl8QFpwjVvA2uTKs4bcTNk5s1BvDeca8_kA/exec',
    // Anmälan till tenta-av — skapad av skapaAnmalningsForm() 2026-08-07
    tentaAvAnmalanUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeuuvLFww1saooToRkggV3o7nZ6Ojud5fLuPVLPzuSht1bIDg/viewform',
  },
  'omlasning': {
    code: 'omlasning',
    title: 'Omläsning Ma1b',
    sitesOverviewUrl: 'https://sites.google.com/dbgy.se/matte/omlasning',
    theme: 'omlasning',
    unitLabel: 'Delmoment',
    kvittoWebAppUrl: 'https://script.google.com/a/macros/ga.dbgy.se/s/AKfycbytHEiSXh2_5XnhbH81CSxoH3rX6qOgO05_X_-BLEXIW7k9Irfpi3GvTLhU-zZ9Owx0/exec',
    // Anmälan till tenta-av — skapad av skapaAnmalningsForm() 2026-08-07
    tentaAvAnmalanUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfmXApTUs-oPZY02UK7-hITwB8Gjat4XToUh9t6J_wJh_GpHg/viewform',
  },
  'omlasning-2a': {
    code: 'omlasning-2a',
    title: 'Prövning Ma2a',
    kvittoWebAppUrl: 'https://script.google.com/a/macros/ga.dbgy.se/s/AKfycbzqmGKG48uU-RaCMlE9KqXpWOGmTvBbqM_fk0LSPwFtodfUVXnSkIokaof1MqqDV_NQ/exec',
    // Synlig sedan 2026-08-24. Simon vill att kollegorna ska kunna titta och tycka
    // till, och eleverna har inte börjat läsa kurserna än.
    sitesOverviewUrl: 'https://sites.google.com/dbgy.se/matte/omlasning',
    theme: 'omlasning',
    unitLabel: 'Delmoment',
    // Ingen tentaAvAnmalanUrl: med fasta deltentor skriver alla samma dag,
    // så det finns inget tillfälle att välja. Rutan hänvisar till Classroom.
    provModell: 'deltentor',
    deltentor: [
      {
        namn: 'Del 1',
        nar: 'stödtid vecka 43',
        omraden: [
          { slug: 'andragradare', titel: 'Algebra och andragradare' },
          { slug: 'del-1', titel: 'Generalrepetition Del 1', arGeneralrep: true },
        ],
      },
      {
        namn: 'Del 2',
        nar: 'stödtid vecka 47',
        omraden: [
          { slug: 'ekvationssystem', titel: 'Räta linjens ekvation och ekvationssystem' },
          { slug: 'potenser', titel: 'Potenser och exponentialekvationer' },
          { slug: 'statistik', titel: 'Statistik' },
          { slug: 'del-2', titel: 'Generalrepetition Del 2', arGeneralrep: true },
        ],
      },
    ],
  },
  'omlasning-2b': {
    code: 'omlasning-2b',
    title: 'Prövning Ma2b',
    // Synlig sedan 2026-08-24. Alla fem områden är skrivna, och kollegorna ska
    // kunna titta och tycka till innan eleverna börjar.
    sitesOverviewUrl: 'https://sites.google.com/dbgy.se/matte/omlasning',
    theme: 'omlasning',
    unitLabel: 'Delmoment',
    kvittoWebAppUrl: 'https://script.google.com/a/macros/ga.dbgy.se/s/AKfycbwbCzqQgW8i3fJ7bcbVQNUjblYKUOOWE8Xa9Y7S4Lwe_YuJzwHydTJ2JLwEsSEG-awH/exec',
    provModell: 'deltentor',
    deltentor: [
      {
        namn: 'Del 1',
        nar: 'stödtid vecka 43',
        omraden: [
          { slug: 'ekvationssystem', titel: 'Ekvationssystem' },
          { slug: 'andragradare', titel: 'Algebra och andragradare' },
          { slug: 'del-1', titel: 'Generalrepetition Del 1', arGeneralrep: true },
        ],
      },
      {
        namn: 'Del 2',
        nar: 'stödtid vecka 47',
        omraden: [
          { slug: 'logaritmer', titel: 'Logaritmer och exponentialekvationer' },
          { slug: 'statistik', titel: 'Statistik' },
          { slug: 'geometri', titel: 'Geometri' },
          { slug: 'del-2', titel: 'Generalrepetition Del 2', arGeneralrep: true },
        ],
      },
    ],
  },
};

/** Hitta vilken deltenta ett område tillhör. Null om kursen kör mastery-modellen. */
export function getDeltenta(courseCode: string, moment: string) {
  const c = courses[courseCode];
  if (!c?.deltentor) return null;
  return c.deltentor.find((d) => d.omraden.some((o) => o.slug === moment)) ?? null;
}

/** Helper: hämta kursen för en lektions slug (t.ex. "ma1b/M2-ekvationer/L3" → ma1b) */
export function getCourseFromSlug(slug: string): CourseConfig | undefined {
  const code = slug.split('/')[0];
  return courses[code];
}
