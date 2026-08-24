import { defineCollection, z } from 'astro:content';

const retrievalItem = z.object({
  question: z.string(),
  answer: z.union([z.string(), z.array(z.string())]),
  /** Kort förklaring av HUR uppgiften löses. Visas bakom "Visa lösning" i
   *  repetitionsblocket. Enbart facit gick att klicka fram utan att tänka,
   *  därför visar vi metoden i stället. Skriv steg — inte bara svaret. */
  solution: z.string().optional(),
  source: z.string().optional(),
  lessons_ago: z.number().optional(),
});

const bankItem = z.object({
  question: z.string(),
  /** Ett eller flera accepterade svar — samma union som övningarna, så att
   *  repetitionen inte avvisar former som övningarna lär ut som rätt. */
  answer: z.union([z.string(), z.array(z.string())]),
  /** Lösningsgång — se retrievalItem.solution. Följer med frågan när den
   *  plockas in i en senare lektions repetition. */
  solution: z.string().optional(),
});

const exerciseItem = z.object({
  equation: z.string(),
  /** KM-nivå för badge/färg. Mest relevant för blandad träning (E default). */
  niva: z.enum(['E', 'C', 'A']).optional(),
  hint1: z.string().optional(),
  hint2: z.string().optional(),
  hint3: z.string().optional(),
  /** Accepterat svar — string eller array av strängar (om flera skrivsätt accepteras). Lämna borta för öppen uppgift. */
  answer: z.union([z.string(), z.array(z.string())]).optional(),
  solution: z.string().optional(),
  /** Valfri graf som ritas ovanför uppgiften (SVG, se src/lib/graf.ts). */
  graf: z.object({
    typ: z.enum(['linjär', 'exponentiell', 'punkter', 'andragrad', 'linjer', 'ladagram', 'stapeldiagram', 'normalfordelning', 'figur']),
    /** Geometrifigur — se GrafSpec['figur'] i src/lib/graf.ts */
    figur: z.object({
      vy: z.array(z.number()).length(4),
      polygon: z.array(z.array(z.number()).length(2)).optional(),
      linjer: z.array(z.object({
        fran: z.array(z.number()).length(2), till: z.array(z.number()).length(2),
        streckad: z.boolean().optional(),
      })).optional(),
      cirklar: z.array(z.object({ c: z.array(z.number()).length(2), r: z.number() })).optional(),
      punkter: z.array(z.object({
        p: z.array(z.number()).length(2), namn: z.string().optional(),
        plats: z.enum(['over', 'under', 'vanster', 'hoger']).optional(),
        fylld: z.boolean().optional(),
      })).optional(),
      matt: z.array(z.object({
        fran: z.array(z.number()).length(2), till: z.array(z.number()).length(2),
        text: z.string(), sida: z.number().optional(),
      })).optional(),
      vinklar: z.array(z.object({
        vid: z.array(z.number()).length(2), fran: z.array(z.number()).length(2),
        till: z.array(z.number()).length(2), text: z.string().optional(),
      })).optional(),
      ratvinklar: z.array(z.object({
        vid: z.array(z.number()).length(2), mot1: z.array(z.number()).length(2),
        mot2: z.array(z.number()).length(2),
      })).optional(),
    }).optional(),
    /** Lådagram — femtalssammanfattning, ett eller flera i samma skala */
    ladagram: z.array(z.object({
      min: z.number(), q1: z.number(), median: z.number(), q3: z.number(), max: z.number(),
      etikett: z.string().optional(),
    })).optional(),
    /** Stapeldiagram: en stapel per värde, höjden är frekvensen */
    staplar: z.array(z.object({
      varde: z.union([z.number(), z.string()]), frekvens: z.number(),
    })).optional(),
    xTitel: z.string().optional(), yTitel: z.string().optional(),
    /** Normalfördelning: klockkurva kring `medel` med spridningen `sigma` */
    medel: z.number().optional(), sigma: z.number().optional(),
    markeraUnder: z.number().optional(), markeraOver: z.number().optional(),
    markeraMellan: z.array(z.number()).length(2).optional(),
    k: z.number().optional(), m: z.number().optional(),
    C: z.number().optional(), a: z.number().optional(),
    /** andragrad: y = a·x² + b·x + c */
    b: z.number().optional(), c: z.number().optional(),
    /** Flera räta linjer i samma koordinatsystem (ekvationssystem grafiskt) */
    linjer: z.array(z.object({
      k: z.number(), m: z.number(), etikett: z.string().optional(),
    })).optional(),
    punkter: z.array(z.array(z.number())).optional(),
    visaKurva: z.boolean().optional(),
    xmin: z.number().optional(), xmax: z.number().optional(),
    ymin: z.number().optional(), ymax: z.number().optional(),
    xSteg: z.number().optional(), ySteg: z.number().optional(),
  }).optional(),
});

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    course: z.string(),
    moment: z.string(),
    moment_title: z.string(),
    lesson_number: z.number(),
    lesson_total: z.number(),
    date_planned: z.string().optional(),
    success_criteria: z.array(z.string()),
    /** Synlig arbetsgång ("Så jobbar du") — numrerade steg som visas direkt under
     *  målen, UTANFÖR det hopfällda teoriblocket. Används av omläsningens
     *  självhanterande delmomentsidor. */
    how_to: z.array(z.string()).optional(),
    /** Manuellt definierade retrieval-frågor. Lämna tom så auto-genereras från tidigare lektioners `bank`. */
    retrieval: z.array(retrievalItem).optional(),
    /** Frågebank som andra lektioner kan dra retrieval från. Frågorna ska testa just denna lektions stoff. */
    bank: z.array(bankItem).optional(),
    video: z.string().optional(),
    widget: z.string().optional(),
    widget_height: z.number().optional(),
    /** Markdown-text för worked example som visas synligt mellan widget och övningar.
     *  Bra för en frånvarande elev som vill se ett steg-för-steg-exempel utan att öppna teorigenomgången.
     *  Lämna borta om lektionen inte har ett distinkt "exempel-att-imitera". */
    worked_example: z.string().optional(),
    worked_example_title: z.string().optional(),
    exercises: z.object({
      E: z.array(exerciseItem).optional(),
      C: z.array(exerciseItem).optional(),
      A: z.array(exerciseItem).optional(),
    }).optional(),
    /** Modell 3 (interleaving): blandade uppgifter från TIDIGARE moment, med
     *  metodbyte mellan uppgifter. Renderas i en egen "Blandad träning"-sektion.
     *  Sätt `niva:` per uppgift för stigande svårighet (E→C→A över tid). */
    blandad_ovning: z.array(exerciseItem).optional(),
    exit_ticket_form: z.string().optional(),
    exit_ticket_height: z.number().optional(),
    prev: z.string().optional(),
    next: z.string().optional(),
    next_lesson_title: z.string().optional(),
    prev_lesson_title: z.string().optional(),
  }),
});

export const collections = { lessons };
