/**
 * Celebration-utility — sparsamt använd konfetti vid avklarad lektion.
 *
 * Pedagogisk princip (från forskningsbasen):
 *   - Aldrig konfetti per rätt svar (Deci/Ryan: trivialiserar, skapar extrinsisk loop)
 *   - Endast vid avklarad helhet (informativ symbolisk markering)
 *   - Respektera prefers-reduced-motion kompromisslöst
 *
 * Teknisk princip:
 *   - Dynamic import — 0 KB på sidor som aldrig firar
 *   - useWorker: true — kör i OffscreenCanvas, blockar inte huvudtråden
 *   - Återhållsam dos (≤150 partiklar totalt)
 */

let isCelebrating = false;

export function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Skicka konfetti när hela lektionen är klar.
 * Måttlig intensitet — proportionerlig mot insatsen.
 */
export async function celebrateLessonComplete() {
  if (isCelebrating || prefersReducedMotion()) return;
  if (typeof window === 'undefined') return;

  isCelebrating = true;
  try {
    const { default: confetti } = await import('canvas-confetti');

    const colors = ['#2a5d8f', '#7a96b3', '#10b981', '#fbbf24', '#a78bfa'];
    const end = Date.now() + 1200;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        colors,
        useWorker: true,
        disableForReducedMotion: true,
        gravity: 1.1,
        scalar: 0.9,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
        colors,
        useWorker: true,
        disableForReducedMotion: true,
        gravity: 1.1,
        scalar: 0.9,
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        isCelebrating = false;
      }
    })();
  } catch (err) {
    console.warn('Confetti misslyckades att ladda:', err);
    isCelebrating = false;
  }
}

/**
 * Mindre puff vid stora delsteg (t.ex. när eleven gått från E- till C-uppgifter).
 * Just nu inte använt — reserverat för framtida bruk.
 */
export async function celebrateMilestone() {
  if (isCelebrating || prefersReducedMotion()) return;
  if (typeof window === 'undefined') return;

  isCelebrating = true;
  try {
    const { default: confetti } = await import('canvas-confetti');
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2a5d8f', '#10b981', '#fbbf24'],
      useWorker: true,
      disableForReducedMotion: true,
    });
    setTimeout(() => { isCelebrating = false; }, 800);
  } catch (err) {
    console.warn('Confetti misslyckades att ladda:', err);
    isCelebrating = false;
  }
}
