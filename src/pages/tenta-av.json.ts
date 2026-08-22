import type { APIRoute } from 'astro';
import { tentaAv, tentaAvNar } from '../site.config';

/**
 * /tenta-av.json — publicerar tenta-av-tiderna så att Apps Script kan läsa dem.
 *
 * Sajten, kvitto-webapparna, lärarpanelen och Classroom-generatorn är fyra
 * skilda system som inte kan dela kod. Tidigare löstes det genom att skriva in
 * samma tid på sju ställen, med följden att de kunde säga emot varandra.
 *
 * Nu är `tentaAv` i site.config.ts enda källan, och den här filen gör värdena
 * hämtbara för Google-sidan. Apps Script läser dem med UrlFetchApp och cachar
 * i sex timmar (se hamtaTentaAv_() i tools/apps-script/tenta-av-info.gs).
 *
 * Fälten skickas både rått och färdigformulerade, så att Apps Script slipper
 * bygga meningar själv — då kan formuleringarna aldrig glida isär mellan
 * sajten och kvittot.
 */
export const GET: APIRoute = () => {
  const data = {
    ...tentaAv,
    /** "Onsdagar kl 12:30–13:30 i sal 304, på stödtiden" */
    nar: tentaAvNar(),
    /** Färdig mening till kvittot och Classroom. */
    mening:
      `Prov ${tentaAv.dag} ${tentaAv.tid}` +
      (tentaAv.plats ? ` i ${tentaAv.plats}` : '') +
      (tentaAv.tillagg ? `, ${tentaAv.tillagg}` : '') +
      `. Anmäl dig senast ${tentaAv.anmalanSenast}.`,
    /** Full beskrivning till anmälningsformuläret. */
    formularText:
      `Anmäl dig senast ${tentaAv.anmalanSenast}. Provet skrivs ${tentaAv.dag} ` +
      `${tentaAv.tid}` +
      (tentaAv.plats ? ` i ${tentaAv.plats}` : '') +
      (tentaAv.tillagg ? `, ${tentaAv.tillagg}` : '') +
      `. Vilka ${tentaAv.dag} som gäller ser du i Classroom. ` +
      `Max ${tentaAv.maxAntal} skrivande per tillfälle; blir det fullt har du ` +
      `förtur till nästa. Ta med miniräknare.`,
    uppdaterad: new Date().toISOString().slice(0, 10),
  };

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      // Apps Script cachar själv i 6 h; den här hindrar bara onödiga hämtningar.
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
