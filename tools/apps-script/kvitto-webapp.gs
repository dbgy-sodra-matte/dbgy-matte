/**
 * Kvitto-webbapp — elevens framstegsvy (Omläsning Ma1b)
 * ======================================================
 * Renderar ett personligt kvitto som HTML, kört som den INLOGGADE eleven.
 * Bäddas in i en iframe på /omlasning/mitt-kvitto på sajten — eller öppnas i egen flik.
 *
 * FAS A (nu): mock-data, för att TESTA att inbäddningen + inloggningen funkar i er miljö
 * (tredjepartscookie-frågan är den enda osäkra biten). Identiteten är skarp redan nu —
 * appen läser den inloggade e-posten och visar den, så du ser att rätt elev känns igen.
 *
 * FAS B (senare): byt ut funktionen hamtaElevData() mot en riktig läsning ur master-Sheetet.
 * Inget annat i filen behöver ändras — HTML:en är redan byggd kring datastrukturen.
 *
 * DEPLOY (en gång, av Simon, inloggad med dbgy.se):
 *   1. script.google.com → Nytt projekt → klistra in HELA filen → spara
 *   2. Kör funktionen "testaLokalt" en gång → godkänn behörigheterna
 *   3. Deploy (uppe till höger) → Ny distribution → välj typ: Webbapp
 *        - Beskrivning: "Kvitto omläsning"
 *        - Kör som: Användaren som använder webbappen   ← VIKTIGT
 *        - Vem har åtkomst: Alla inom AcadeMedia          ← VIKTIGT
 *   4. Distribuera → godkänn → kopiera webbappens URL (slutar på /exec)
 *   5. Klistra in /exec-URL:en i chatten med Claude → läggs i site.config (kvittoWebAppUrl)
 *
 * TESTA SEDAN: öppna /omlasning/mitt-kvitto på sajten (inloggad som dbgy-elev/lärare).
 * Syns kvittot i rutan? Bra. Tom ruta/inloggningskrav? Använd egen-flik-länken och säg till
 * Claude — då dokumenterar vi att iframe kräver cookie-allowlisting på skoldatorerna.
 */

function doGet() {
  var email = '';
  try { email = Session.getActiveUser().getEmail() || ''; } catch (e) { email = ''; }

  var data = hamtaElevData(email);
  var html = byggKvittoHtml(email, data);

  return HtmlService.createHtmlOutput(html)
    .setTitle('Mitt kvitto')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); // tillåt iframe-inbäddning
}

/** Hjälpfunktion för att testa behörigheter i editorn (kör en gång före deploy). */
function testaLokalt() {
  Logger.log(Session.getActiveUser().getEmail());
}

/**
 * FAS A: mock-data. FAS B: ersätt hela kroppen med en läsning ur master-Sheetet,
 * filtrerad på `email`. Returnera samma struktur så att byggKvittoHtml() funkar oförändrat.
 */
function hamtaElevData(email) {
  return {
    namn: email ? email.split('@')[0] : 'elev',
    omraden: [
      {
        titel: 'Algebra',
        delmoment: [
          { namn: 'Uttryck', klarad: true },
          { namn: 'Faktorisering', klarad: true },
          { namn: 'Ställa upp och tolka uttryck', klarad: true },
          { namn: 'Ekvationer', klarad: true },
          { namn: 'Potensekvationer', klarad: true },
          { namn: 'Formler', klarad: true },
          { namn: 'Problemlösning med algebra', klarad: false },
          { namn: 'Potenser och rötter', klarad: false },
        ],
        tentaAv: 'ej redo', // 'ej redo' | 'redo' | 'klarad'
      },
      {
        titel: 'Ekonomi',
        delmoment: [
          { namn: 'Grunder i procent', klarad: false },
          { namn: 'Förändringsfaktor och upprepad förändring', klarad: false },
          { namn: 'Lån, ränta och amortering', klarad: false },
        ],
        tentaAv: 'ej redo',
      },
      {
        titel: 'Funktioner',
        delmoment: [
          { namn: 'Tolka grafer', klarad: false },
          { namn: 'Linjära funktioner', klarad: false },
          { namn: 'Räta linjens ekvation', klarad: false },
          { namn: 'Funktionsbegreppet f(x)', klarad: false },
          { namn: 'Exponentialfunktioner', klarad: false },
          { namn: 'Exponentialfunktioner 2', klarad: false },
          { namn: 'Exponentialekvation från graf', klarad: false },
        ],
        tentaAv: 'ej redo',
      },
    ],
    aerMock: true,
  };
}

function byggKvittoHtml(email, data) {
  // Hitta nästa steg (feed forward): första oklara delmomentet, annars tenta-av
  var nastaSteg = 'Du har klarat allt — snyggt jobbat!';
  outer:
  for (var i = 0; i < data.omraden.length; i++) {
    var o = data.omraden[i];
    for (var j = 0; j < o.delmoment.length; j++) {
      if (!o.delmoment[j].klarad) {
        nastaSteg = 'Nästa: <strong>' + esc(o.delmoment[j].namn) + '</strong> (' + esc(o.titel) + ')';
        break outer;
      }
    }
    if (o.tentaAv === 'redo') {
      nastaSteg = '<strong>' + esc(o.titel) + '</strong> är klart att tenta av — anmäl dig på provtiden!';
      break;
    }
  }

  var omradenHtml = data.omraden.map(function (o) {
    var klarade = o.delmoment.filter(function (d) { return d.klarad; }).length;
    var totalt = o.delmoment.length;
    var procent = Math.round((klarade / totalt) * 100);
    var rader = o.delmoment.map(function (d) {
      return '<li class="dm ' + (d.klarad ? 'klar' : 'kvar') + '">' +
        bock(d.klarad) + esc(d.namn) + '</li>';
    }).join('');
    var tentaText = o.tentaAv === 'klarad' ? '✅ Tenta-av klarad'
      : (klarade === totalt ? '🎯 Redo att tenta av!' : 'Tenta-av: när alla delmoment är klara');
    return '' +
      '<section class="omr">' +
        '<div class="omr-head"><h2>' + esc(o.titel) + '</h2>' +
          '<span class="omr-count">' + klarade + ' / ' + totalt + ' klara</span></div>' +
        '<div class="bar"><div class="bar-fill" style="width:' + procent + '%"></div></div>' +
        '<ul class="dm-list">' + rader + '</ul>' +
        '<p class="tenta">' + tentaText + '</p>' +
      '</section>';
  }).join('');

  var mockBanner = data.aerMock
    ? '<p class="mock">📼 Förhandsvisning med exempeldata — riktiga resultat kopplas in när datakällan är på plats.</p>'
    : '';

  return '' +
'<!doctype html><html lang="sv"><head><meta charset="utf-8">' +
'<meta name="viewport" content="width=device-width, initial-scale=1">' +
'<style>' +
'  * { box-sizing: border-box; }' +
'  body { margin:0; font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;' +
'         background:#faf7f2; color:#0f172a; padding:18px; }' +
'  .wrap { max-width: 640px; margin: 0 auto; }' +
'  .top { margin-bottom: 18px; }' +
'  .eyebrow { font-size:12px; text-transform:uppercase; letter-spacing:.08em; color:#b91c1c; font-weight:700; }' +
'  h1 { font-size:26px; margin:4px 0 2px; }' +
'  .who { font-size:13px; color:#64748b; }' +
'  .mock { font-size:12.5px; background:#fdeae3; color:#7f1d1d; padding:8px 12px; border-radius:8px; margin:12px 0 0; }' +
'  .nasta { background:#b91c1c; color:#fff; padding:14px 16px; border-radius:12px; margin:16px 0; font-size:15px; }' +
'  .nasta .lbl { display:block; font-size:11px; text-transform:uppercase; letter-spacing:.07em; opacity:.85; margin-bottom:3px; }' +
'  .omr { background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:14px 16px; margin:12px 0;' +
'         box-shadow:0 1px 2px rgba(80,40,20,.05); }' +
'  .omr-head { display:flex; align-items:baseline; justify-content:space-between; }' +
'  .omr-head h2 { font-size:17px; margin:0; }' +
'  .omr-count { font-size:12px; color:#64748b; font-weight:600; }' +
'  .bar { height:8px; background:#f1f5f9; border-radius:99px; overflow:hidden; margin:10px 0 12px; }' +
'  .bar-fill { height:100%; background:#c2632a; border-radius:99px; }' +
'  .dm-list { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:5px; }' +
'  .dm { font-size:14px; padding:6px 10px; border-radius:6px; background:#f8fafc; }' +
'  .dm.klar { color:#0f172a; }' +
'  .dm.kvar { color:#94a3b8; }' +
'  .tenta { font-size:13px; color:#334155; margin:12px 0 0; font-weight:600; }' +
'  .foot { font-size:12px; color:#94a3b8; text-align:center; margin-top:18px; }' +
'</style></head><body><div class="wrap">' +
'  <div class="top">' +
'    <div class="eyebrow">📼 Mitt kvitto · Omläsning</div>' +
'    <h1>Dina framsteg</h1>' +
'    <div class="who">' + (email ? 'Inloggad som ' + esc(email) : 'Ej inloggad — öppna i egen flik och logga in med ditt skolkonto') + '</div>' +
     mockBanner +
'  </div>' +
'  <div class="nasta"><span class="lbl">Vad du gör härnäst</span>' + nastaSteg + '</div>' +
   omradenHtml +
'  <p class="foot">Bara du och din lärare ser det här. Uppdateras när du gör checkpoints och tentar av.</p>' +
'</div></body></html>';
}

/** Liten bock/ring framför delmomentet. */
function bock(klarad) { return klarad ? '✅ ' : '⬜ '; }

/** Escape för att aldrig råka rendera HTML från data. */
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
