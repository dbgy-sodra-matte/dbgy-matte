/**
 * Checkpoint-kadens för ORDINARIE kurser (Modell 3: täta, små, KUMULATIVA test).
 *
 * En checkpoint = ett Google Form-quiz som eleven gör EFTER att ha tränat blockets
 * lektioner på siten. Klarad checkpoint (≥ PASS_THRESHOLD rätt) → "klarad" i kvittot.
 * Trattmodellen: träna (siten) → checkpointa (Form) → tenta av (läraren).
 *
 * **Skillnad mot omläsningen:** varje checkpoint är KUMULATIV — den täcker allt hittills
 * i kursen (med tyngdpunkt på det nya blocket), inte bara senaste delmomentet.
 *
 * Denna fil är ENDA källan för blockindelningen. Apps Script-scriptet (Forms-generator
 * + kvitto-webapp) speglar samma struktur. Den kumulativa räckvidden BERÄKNAS ur
 * sequence.ts (anchor-positionen) så lektionsordningen aldrig dubbelunderhålls.
 *
 * Beslut (Simon 2026-06-16): veckovis kadens, tröskel 8/10, ett master-Sheet per klass.
 * Ma1b ges till SaBep. BF läser Ma1a (separat kurs, eget bygge senare).
 */

import { sequences } from './sequence';

/** Antal frågor per checkpoint. */
export const QUESTION_COUNT = 10;

/** Antal rätt som krävs för "klarad". */
export const PASS_THRESHOLD = 8;

/**
 * Frågemix per kumulativ checkpoint (summerar till QUESTION_COUNT).
 *   - `nytt`:   frågor från blockets egna lektioner (covers)
 *   - `forra`:  frågor från föregående block (spacing N−1)
 *   - `aldre`:  frågor från äldre moment (spacing N−3/N−7), gärna NP-typ
 */
export const QUESTION_MIX = { nytt: 5, forra: 3, aldre: 2 } as const;

export interface Checkpoint {
  /** Stabilt id — används som nyckel i master-Sheet och kvitto. Ändra ALDRIG efter terminsstart. */
  id: string;
  course: string;
  /** Momentmapp, t.ex. "1-algebra" — grupperar checkpoints i kvittot. */
  moment: string;
  moment_title: string;
  /** Löpnummer 1..N i kursen. */
  number: number;
  title: string;
  /** Typ: vanlig veckokoll, dugga eller (slut)prov. Styr vikt/omfång i scriptet. */
  kind: 'veckokoll' | 'dugga' | 'prov';
  /**
   * Ankarlektion — den SISTA lektionen i blocket (slug i sequence.ts).
   * Checkpoanten ges efter denna. Kumulativ räckvidd = allt t.o.m. denna position.
   */
  anchor: string;
  /** Nya lektioner blocket introducerar (delmängd av sekvensen). Tom för rena dugga/prov-veckor. */
  covers: string[];
}

/**
 * De 18 Ma1b-checkpointsen. anchor-sluggar MÅSTE matcha sequence.ts exakt.
 * 2.6 (kalkylark) och 3.x utan checkpoint tränas men har ingen egen checkpoint.
 */
export const checkpoints: Checkpoint[] = [
  // ───────── 1. Algebra (4) ─────────
  { id: 'ma1b-cp01', course: 'ma1b', moment: '1-algebra', moment_title: 'Algebra', number: 1, kind: 'veckokoll', title: 'Förenkling & ekvationer',
    anchor: 'ma1b/1-algebra/1-2a-linjara-ekvationer-tekniker',
    covers: ['ma1b/1-algebra/1-1-forenkling-och-parentesmultiplikation', 'ma1b/1-algebra/1-2a-linjara-ekvationer-tekniker'] },
  { id: 'ma1b-cp02', course: 'ma1b', moment: '1-algebra', moment_title: 'Algebra', number: 2, kind: 'veckokoll', title: 'Tillämpning & nämnare',
    anchor: 'ma1b/1-algebra/1-3-ekvationer-med-namnare',
    covers: ['ma1b/1-algebra/1-2b-linjara-ekvationer-tillampning', 'ma1b/1-algebra/1-3-ekvationer-med-namnare'] },
  { id: 'ma1b-cp03', course: 'ma1b', moment: '1-algebra', moment_title: 'Algebra', number: 3, kind: 'dugga', title: 'Dugga: Algebra & ekvationer',
    anchor: 'ma1b/1-algebra/1-5-dugga-algebra-ekvationer',
    covers: ['ma1b/1-algebra/1-4-potenslagar'] },
  { id: 'ma1b-cp04', course: 'ma1b', moment: '1-algebra', moment_title: 'Algebra', number: 4, kind: 'prov', title: 'Prov: Algebra',
    anchor: 'ma1b/1-algebra/1-7-prov-algebra',
    covers: ['ma1b/1-algebra/1-6-potensekvationer'] },

  // ───────── 2. Ekonomi (3) ─────────
  { id: 'ma1b-cp05', course: 'ma1b', moment: '2-ekonomi', moment_title: 'Ekonomi', number: 5, kind: 'veckokoll', title: 'Förändringsfaktor & upprepad förändring',
    anchor: 'ma1b/2-ekonomi/2-2-upprepad-forandring',
    covers: ['ma1b/2-ekonomi/2-1-forandringsfaktor', 'ma1b/2-ekonomi/2-2-upprepad-forandring'] },
  { id: 'ma1b-cp06', course: 'ma1b', moment: '2-ekonomi', moment_title: 'Ekonomi', number: 6, kind: 'dugga', title: 'Dugga: Ekonomi',
    anchor: 'ma1b/2-ekonomi/2-3-dugga-ekonomi',
    covers: [] },
  { id: 'ma1b-cp07', course: 'ma1b', moment: '2-ekonomi', moment_title: 'Ekonomi', number: 7, kind: 'prov', title: 'Prov: Ekonomi',
    anchor: 'ma1b/2-ekonomi/2-5-prov-ekonomi',
    covers: ['ma1b/2-ekonomi/2-4-lan-ranta-amortering'] },

  // ───────── 3. Funktioner och samband (7) ─────────
  { id: 'ma1b-cp08', course: 'ma1b', moment: '3-funktioner', moment_title: 'Funktioner och samband', number: 8, kind: 'veckokoll', title: 'Koordinatsystem & grafer',
    anchor: 'ma1b/3-funktioner/3-2-funktioner-vardetabeller-grafer',
    covers: ['ma1b/3-funktioner/3-1-koordinatsystem', 'ma1b/3-funktioner/3-2-funktioner-vardetabeller-grafer'] },
  { id: 'ma1b-cp09', course: 'ma1b', moment: '3-funktioner', moment_title: 'Funktioner och samband', number: 9, kind: 'veckokoll', title: 'f(x) & linjära grafiskt',
    anchor: 'ma1b/3-funktioner/3-4-linjara-funktioner-grafiskt',
    covers: ['ma1b/3-funktioner/3-3-funktionsbegreppet-fx', 'ma1b/3-funktioner/3-4-linjara-funktioner-grafiskt'] },
  { id: 'ma1b-cp10', course: 'ma1b', moment: '3-funktioner', moment_title: 'Funktioner och samband', number: 10, kind: 'dugga', title: 'Dugga: Linjära funktioner',
    anchor: 'ma1b/3-funktioner/3-6-dugga-linjara-funktioner',
    covers: ['ma1b/3-funktioner/3-5-linjara-funktioner-algebraiskt'] },
  { id: 'ma1b-cp11', course: 'ma1b', moment: '3-funktioner', moment_title: 'Funktioner och samband', number: 11, kind: 'veckokoll', title: 'Exponential- & potensfunktioner',
    anchor: 'ma1b/3-funktioner/3-8-potensfunktioner',
    covers: ['ma1b/3-funktioner/3-7-exponentialfunktioner', 'ma1b/3-funktioner/3-8-potensfunktioner'] },
  { id: 'ma1b-cp12', course: 'ma1b', moment: '3-funktioner', moment_title: 'Funktioner och samband', number: 12, kind: 'dugga', title: 'Dugga 2: Funktioner',
    anchor: 'ma1b/3-funktioner/3-10-dugga2-funktioner',
    covers: ['ma1b/3-funktioner/3-9-jamfora-modeller'] },
  { id: 'ma1b-cp13', course: 'ma1b', moment: '3-funktioner', moment_title: 'Funktioner och samband', number: 13, kind: 'veckokoll', title: 'Problemlösning & definitionsmängd',
    anchor: 'ma1b/3-funktioner/3-12-definitionsmangd-vardemangd',
    covers: ['ma1b/3-funktioner/3-11-problemlosning-funktioner', 'ma1b/3-funktioner/3-12-definitionsmangd-vardemangd'] },
  { id: 'ma1b-cp14', course: 'ma1b', moment: '3-funktioner', moment_title: 'Funktioner och samband', number: 14, kind: 'prov', title: 'Prov: Funktioner',
    anchor: 'ma1b/3-funktioner/3-13-prov-funktioner',
    covers: [] },

  // ───────── 4. Fördjupning + 5. Kursprov (4) ─────────
  { id: 'ma1b-cp15', course: 'ma1b', moment: '4-fordjupning', moment_title: 'Fördjupning', number: 15, kind: 'veckokoll', title: 'Fördjupning: ekvationer & formler',
    anchor: 'ma1b/4-fordjupning/4-4-tolka-funktionsbegreppet',
    covers: ['ma1b/4-fordjupning/4-1-noll-produktmetoden', 'ma1b/4-fordjupning/4-2-ekvationer-fordjupning', 'ma1b/4-fordjupning/4-3-formler', 'ma1b/4-fordjupning/4-4-tolka-funktionsbegreppet'] },
  { id: 'ma1b-cp16', course: 'ma1b', moment: '4-fordjupning', moment_title: 'Fördjupning', number: 16, kind: 'veckokoll', title: 'Fördjupning: faktorisering & förenkling',
    anchor: 'ma1b/4-fordjupning/4-8-ekvationer-fordjupning-2',
    covers: ['ma1b/4-fordjupning/4-5-faktorisering-fordjupning', 'ma1b/4-fordjupning/4-6-forenkling-fordjupning', 'ma1b/4-fordjupning/4-7-problemlosning-algebra-fordjupning', 'ma1b/4-fordjupning/4-8-ekvationer-fordjupning-2'] },
  { id: 'ma1b-cp17', course: 'ma1b', moment: '4-fordjupning', moment_title: 'Fördjupning', number: 17, kind: 'veckokoll', title: 'Fördjupning: funktioner (pre-test)',
    anchor: 'ma1b/4-fordjupning/4-12-ekvationer-med-geogebra',
    covers: ['ma1b/4-fordjupning/4-9-definitionsmangd-vardemangd-fordjupning', 'ma1b/4-fordjupning/4-10-linjara-funktioner-fordjupning', 'ma1b/4-fordjupning/4-11-exponentialfunktioner-fordjupning', 'ma1b/4-fordjupning/4-12-ekvationer-med-geogebra'] },
  { id: 'ma1b-cp18', course: 'ma1b', moment: '5-kursprov', moment_title: 'Kursprov', number: 18, kind: 'prov', title: 'Kursprov: hela Ma1b',
    anchor: 'ma1b/5-kursprov/5-1-kursprov',
    covers: [] },
];

/** Alla checkpoints för en kurs, i ordning. */
export function getCheckpointsForCourse(course: string): Checkpoint[] {
  return checkpoints.filter((c) => c.course === course).sort((a, b) => a.number - b.number);
}

/**
 * Kumulativ räckvidd för en checkpoint: alla lektionssluggar från kursens start
 * t.o.m. ankarlektionen (inklusive). Detta är poolen frågorna dras ur.
 * Returnerar [] om ankaret inte finns i sekvensen.
 */
export function getCheckpointReach(cp: Checkpoint): string[] {
  const seq = sequences[cp.course] ?? [];
  const anchorIdx = seq.indexOf(cp.anchor);
  if (anchorIdx < 0) return [];
  return seq.slice(0, anchorIdx + 1);
}

/** Checkpoints grupperade per moment (för kvittots momentvyer). */
export function getCheckpointsByMoment(course: string): { moment: string; moment_title: string; items: Checkpoint[] }[] {
  const out: { moment: string; moment_title: string; items: Checkpoint[] }[] = [];
  for (const cp of getCheckpointsForCourse(course)) {
    let group = out.find((g) => g.moment === cp.moment);
    if (!group) {
      group = { moment: cp.moment, moment_title: cp.moment_title, items: [] };
      out.push(group);
    }
    group.items.push(cp);
  }
  return out;
}
