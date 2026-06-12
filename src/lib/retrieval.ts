/**
 * Spaced retrieval enligt SEKVENS-position, inte datum.
 *
 * Hela poängen: lektioner ges i en kronologisk följd som vi äger i `src/data/sequence.ts`.
 * När lektion N visas, plockas retrieval-frågor från lektion N−1, N−3, N−7 i sekvensen.
 *
 * Fördelar mot datum-baserad spacing:
 *  - Robust mot allt som händer i schemat (sjukdag, lov, omplanering)
 *  - Inga datum att underhålla
 *  - "Om en vecka försvinner tar man bara nästa lektion i ordningen"
 *
 * Forskningsstöd (se Forskningsbas v1): spacing i sig är robust belagt (Cepeda 2006, Rohrer 2020).
 * Exakta intervall är inte heliga — N−1/N−3/N−7 är ett pragmatiskt mönster som ger
 * "färskt", "förra veckan", "förra-förra veckan" för båda klasstakterna (SaBep 2x/v, BF 3x/v).
 *
 * Manuellt override: om en lektion har `retrieval:` i frontmatter används det istället.
 */

import { sequences, getLessonIndex } from '../data/sequence';
import type { CollectionEntry } from 'astro:content';

export interface RetrievalItem {
  question: string;
  answer: string;
  source?: string;
  lessons_ago?: number;
}

export interface BankItem {
  question: string;
  answer: string;
}

/** Antal positioner bakåt i sekvensen vi siktar på */
const SPACING_TARGETS = [1, 3, 7];

interface Candidate {
  slug: string;
  lessonsAgo: number;
  bank: BankItem[];
  lessonTitle: string;
}

export function generateRetrieval(
  currentSlug: string,
  allLessons: CollectionEntry<'lessons'>[],
  count: number = 3
): RetrievalItem[] {
  const pos = getLessonIndex(currentSlug);
  if (!pos) return [];

  const sequence = sequences[pos.course];

  // Bygg snabb lookup: slug → lesson entry
  const bySlug = new Map<string, CollectionEntry<'lessons'>>();
  for (const l of allLessons) bySlug.set(l.slug, l);

  // För varje spacing-target, hitta lektion vid den positionen bakåt
  const selected: RetrievalItem[] = [];
  const usedSlugs = new Set<string>();
  const usedQuestions = new Set<string>();

  for (const target of SPACING_TARGETS) {
    if (selected.length >= count) break;
    const candidate = findCandidate(pos.index, target, sequence, bySlug, usedSlugs);
    if (!candidate) continue;
    const question = candidate.bank.find(q => !usedQuestions.has(q.question));
    if (!question) continue;

    selected.push({
      question: question.question,
      answer: question.answer,
      source: candidate.lessonTitle,
      lessons_ago: candidate.lessonsAgo,
    });
    usedSlugs.add(candidate.slug);
    usedQuestions.add(question.question);
  }

  // Fyll på med närmaste osanvända om vi inte nått count
  if (selected.length < count) {
    for (let offset = 1; offset <= pos.index; offset++) {
      if (selected.length >= count) break;
      const candidate = findCandidate(pos.index, offset, sequence, bySlug, usedSlugs);
      if (!candidate) continue;
      const question = candidate.bank.find(q => !usedQuestions.has(q.question));
      if (!question) continue;

      selected.push({
        question: question.question,
        answer: question.answer,
        source: candidate.lessonTitle,
        lessons_ago: candidate.lessonsAgo,
      });
      usedSlugs.add(candidate.slug);
      usedQuestions.add(question.question);
    }
  }

  return selected;
}

/**
 * Hitta lektion vid `offset` positioner bakåt från currentIndex.
 * Hoppar över sluggar i `usedSlugs`.
 * Returnerar null om position är utanför sekvensen eller lektion saknar bank.
 */
function findCandidate(
  currentIndex: number,
  offset: number,
  sequence: string[],
  bySlug: Map<string, CollectionEntry<'lessons'>>,
  usedSlugs: Set<string>
): Candidate | null {
  const targetIndex = currentIndex - offset;
  if (targetIndex < 0) return null;
  const slug = sequence[targetIndex];
  if (usedSlugs.has(slug)) return null;
  const entry = bySlug.get(slug);
  if (!entry) return null;
  const data = entry.data as { bank?: BankItem[]; title: string };
  if (!data.bank || data.bank.length === 0) return null;

  return {
    slug,
    lessonsAgo: offset,
    bank: data.bank,
    lessonTitle: data.title,
  };
}
