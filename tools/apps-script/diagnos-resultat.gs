/**
 * diagnos-resultat.gs — FRISTÅENDE felsökningsfil. LÄSER ENDAST, ändrar ingenting.
 * ============================================================================
 * Läggs till som EGEN fil (Filer → + → Skript → "diagnos") i ett kvitto-projekt:
 * Omläsning Ma1b, Omläsning Ma1a, Prövning Ma2a eller Prövning Ma2b. Kod.gs rörs
 * inte. Filen använder kvitto-skriptets DELMOMENT (Ma1) eller DELMOMENT_() (Ma2),
 * PROP_SHEET och PROP_UPPD — Apps Script delar globalt scope mellan filer.
 *
 * PROBLEMET (2026-09-23): "en del elever jobbar på sidan men resultatet sparas inte".
 * Den här filen svarar på VAR i kedjan elevens resultat tappas:
 *     sajtens övningar  →  checkpoint-formuläret  →  byggSammanstallning  →  arket/kvittot
 *
 * ANVÄNDNING
 *   1. sokElev()        — skriv elevens namn (eller del av mejlen) på raden märkt ▼,
 *                          kör, läs körloggen. Visar VARJE inlämning eleven gjort i
 *                          det här projektets checkpoints: tid, poäng, vilken adress.
 *   2. diagnosResultat() — helhetskoll av alla formulär: går de att öppna, tar de emot
 *                          svar, hur många svar saknar mejl eller kommer från en
 *                          adress utanför @ga.dbgy.se, och när arket senast byggdes.
 *
 * Loggen innehåller elevmejl. Den stannar i Google (körloggen syns bara för
 * projektets ägare) — kopiera den inte till chatt, mejl eller dokument utanför skolan.
 */

var DIAG_DOMAN = '@ga.dbgy.se';

function diagDelmoment_() {
  if (typeof DELMOMENT_ === 'function') return DELMOMENT_();   // Ma2
  return DELMOMENT;                                             // Ma1
}

function diagKursnamn_() {
  try { if (typeof K_ === 'function' && K_().titel) return K_().titel; } catch (e) {}
  try { return SpreadsheetApp.openById(PropertiesService.getScriptProperties()
    .getProperty(PROP_SHEET)).getName(); } catch (e) {}
  return '(okänd kurs)';
}

function diagTid_(d) {
  return d ? Utilities.formatDate(d, 'Europe/Stockholm', 'yyyy-MM-dd HH:mm') : '—';
}

function diagPoang_(resp) {
  var items = resp.getGradableItemResponses(), s = 0;
  for (var i = 0; i < items.length; i++) {
    var sc = items[i].getScore();
    if (typeof sc === 'number') s += sc;
  }
  return s;
}

/**
 * Letar upp EN elevs inlämningar i alla checkpoints i det här projektet.
 * Kör den i BÅDA kursprojekten om du inte hittar eleven — en Ma1a-elev som gjort
 * Ma1b-sidornas checkpoints hamnar i Ma1b-arket, inte i sitt eget.
 */
function sokElev() {
  // ▼ Skriv elevens förnamn, efternamn eller en del av mejladressen:
  var sok = 'SKRIV_NAMN_HÄR';

  if (sok.indexOf('SKRIV_') === 0) throw new Error('Skriv elevens namn på raden märkt ▼ först.');
  sok = sok.toLowerCase().trim();
  var dm = diagDelmoment_();
  var ut = ['SÖKER "' + sok + '" i ' + dm.length + ' checkpoints — ' + diagKursnamn_(), ''];
  var traffar = 0, utanMejl = 0, adresser = {};

  for (var d = 0; d < dm.length; d++) {
    var form;
    try { form = FormApp.openById(dm[d].formId); }
    catch (e) { ut.push('⛔ ' + dm[d].namn + ': formuläret går inte att öppna — ' + e); continue; }
    var resps = form.getResponses();
    for (var r = 0; r < resps.length; r++) {
      var em = (resps[r].getRespondentEmail() || '').toLowerCase();
      if (!em) { utanMejl++; continue; }
      if (em.indexOf(sok) === -1) continue;
      traffar++;
      adresser[em] = true;
      var p = diagPoang_(resps[r]);
      ut.push((p >= TROSKEL ? '✅ ' : '🟡 ') + diagTid_(resps[r].getTimestamp()) + '  ' +
              dm[d].namn + '  ' + p + '/10  (' + em + ')');
    }
    Utilities.sleep(100);
  }

  ut.push('');
  if (!traffar) {
    ut.push('INGA inlämningar hittades. Troligaste förklaringarna, i ordning:');
    ut.push('  1. Eleven har bara gjort ÖVNINGARNA på sidan. De sparas bara i elevens egen');
    ut.push('     webbläsare och når aldrig läraren — det är checkpointen längst ner som räknas.');
    ut.push('  2. Eleven har gjort checkpoints i den ANDRA kursen — kör sokElev där också.');
    ut.push('  3. Eleven skrev något annat än mejlen i sökrutan — pröva bara efternamnet.');
  } else {
    var lista = Object.keys(adresser);
    ut.push(traffar + ' inlämning(ar) från ' + lista.join(', '));
    lista.forEach(function (a) {
      if (a.slice(-DIAG_DOMAN.length) !== DIAG_DOMAN)
        ut.push('⚠️ ' + a + ' är INTE en skoladress — kvittot letar efter elevens ' + DIAG_DOMAN +
                '-adress och hittar alltså inte de här svaren. Eleven var inloggad med fel konto.');
    });
    if (lista.length > 1) ut.push('⚠️ Flera adresser — arket räknar dem som olika elever.');
    ut.push('Står allt ovan rätt men kvittot är tomt: arket byggs bara om EN gång i timmen.');
    ut.push('Senaste bygget: ' + diagSenastByggt_());
  }
  if (utanMejl) ut.push('(' + utanMejl + ' inlämningar i projektet saknar helt mejladress — se diagnosResultat.)');
  Logger.log(ut.join('\n'));
}

/** Helhetskoll av alla checkpoints i projektet. */
function diagnosResultat() {
  var dm = diagDelmoment_();
  var ut = ['DIAGNOS — ' + diagKursnamn_(), 'Senaste bygget av arket: ' + diagSenastByggt_(),
            'Timtrigger: ' + diagTrigger_(), ''];
  var summa = { svar: 0, utanMejl: 0, fremmande: 0, stangda: 0, trasiga: 0 };
  var fremmandeAdr = {};

  for (var d = 0; d < dm.length; d++) {
    var namn = dm[d].namn, form;
    try { form = FormApp.openById(dm[d].formId); }
    catch (e) {
      summa.trasiga++;
      ut.push('⛔ ' + namn + ': GÅR INTE ATT ÖPPNA — byggSammanstallning hoppar TYST över ' +
              'alla svar här. (' + e + ')');
      continue;
    }
    var fel = [];
    try { if (!form.isAcceptingResponses()) { fel.push('tar INTE emot svar'); summa.stangda++; } } catch (e) {}
    try { if (form.isPublished && !form.isPublished()) fel.push('är INTE publicerat'); } catch (e) {}
    try { if (!form.isQuiz()) fel.push('är inte ett quiz (poäng blir 0)'); } catch (e) {}
    try { if (String(form.getEmailCollectionType()) !== 'VERIFIED') fel.push('mejlinsamling = ' + form.getEmailCollectionType()); } catch (e) {}

    var resps = form.getResponses(), utan = 0, frem = 0, senast = null;
    for (var r = 0; r < resps.length; r++) {
      var em = (resps[r].getRespondentEmail() || '').toLowerCase();
      if (!em) utan++;
      else if (em.slice(-DIAG_DOMAN.length) !== DIAG_DOMAN) { frem++; fremmandeAdr[em] = (fremmandeAdr[em] || 0) + 1; }
      var ts = resps[r].getTimestamp();
      if (ts && (!senast || ts > senast)) senast = ts;
    }
    summa.svar += resps.length; summa.utanMejl += utan; summa.fremmande += frem;
    if (utan) fel.push(utan + ' svar UTAN mejl (räknas aldrig)');
    if (frem) fel.push(frem + ' svar från adress utanför skolan');
    ut.push((fel.length ? '⚠️ ' : 'OK ') + namn + ': ' + resps.length + ' svar, senast ' +
            diagTid_(senast) + (fel.length ? '  —  ' + fel.join(' · ') : ''));
    Utilities.sleep(100);
  }

  ut.push('', 'SUMMA: ' + summa.svar + ' svar totalt · ' + summa.utanMejl + ' utan mejl · ' +
          summa.fremmande + ' från främmande adress · ' + summa.stangda + ' stängda · ' +
          summa.trasiga + ' oåtkomliga formulär');
  var fa = Object.keys(fremmandeAdr);
  if (fa.length) {
    ut.push('', 'Adresser utanför ' + DIAG_DOMAN + ' (eleven var inloggad med privat konto):');
    fa.forEach(function (a) { ut.push('  ' + a + '  (' + fremmandeAdr[a] + ' svar)'); });
  }
  Logger.log(ut.join('\n'));
}

function diagSenastByggt_() {
  try {
    var iso = PropertiesService.getScriptProperties().getProperty(PROP_UPPD);
    if (!iso) return 'ALDRIG (PROP_UPPD saknas)';
    var d = new Date(iso), tim = Math.round((Date.now() - d.getTime()) / 3600000);
    return diagTid_(d) + ' (' + tim + ' h sedan' + (tim > 2 ? ' — ⚠️ TIMKÖRNINGEN VERKAR HA STANNAT' : '') + ')';
  } catch (e) { return 'okänt (' + e + ')'; }
}

function diagTrigger_() {
  try {
    var t = ScriptApp.getProjectTriggers().filter(function (x) {
      return x.getHandlerFunction() === 'byggSammanstallning';
    });
    return t.length ? t.length + ' st installerad(e)' : '⛔ SAKNAS — kör setup() igen';
  } catch (e) { return 'okänt (' + e + ')'; }
}
