import { defineCollection, z } from 'astro:content';

const retrievalItem = z.object({
  question: z.string(),
  answer: z.string(),
  source: z.string().optional(),
  lessons_ago: z.number().optional(),
});

const bankItem = z.object({
  question: z.string(),
  answer: z.string(),
});

const exerciseItem = z.object({
  equation: z.string(),
  hint1: z.string().optional(),
  hint2: z.string().optional(),
  hint3: z.string().optional(),
  /** Accepterat svar — string eller array av strängar (om flera skrivsätt accepteras). Lämna borta för öppen uppgift. */
  answer: z.union([z.string(), z.array(z.string())]).optional(),
  solution: z.string().optional(),
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
    exit_ticket_form: z.string().optional(),
    exit_ticket_height: z.number().optional(),
    prev: z.string().optional(),
    next: z.string().optional(),
    next_lesson_title: z.string().optional(),
    prev_lesson_title: z.string().optional(),
  }),
});

export const collections = { lessons };
