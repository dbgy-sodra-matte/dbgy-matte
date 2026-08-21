import { defineConfig } from 'astro/config';
import { rehypeVariabler } from './src/lib/rehype-variabler.mjs';

// Ägs av GitHub-organisationen dbgy-sodra-matte (se "Ägarskap & drift" i Modell v1).
// URL:er här är kontrakt — de klistras i Classroom och får inte ändras efter terminsstart.

export default defineConfig({
  site: 'https://dbgy-sodra-matte.github.io',
  base: '/dbgy-matte',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  },
  markdown: {
    /* Syntaxfärgningen AV. Astro kör annars Shiki med temat github-dark, som
     * sätter mörk bakgrund INLINE på <pre>. Inline-stil vinner över vår ljusa
     * .lesson-content pre, medan vår .lesson-content pre code sätter mörk
     * textfärg — resultatet blev mörk text på mörk botten, i praktiken
     * oläsligt. Dessutom är färgningen meningslös här: alla 162 kodblock i
     * materialet är "plaintext" och innehåller matteformler
     * ("nytt värde = gammalt värde · förändringsfaktor"), inte programkod.
     * Utan Shiki renderas ren <pre><code> och vår egen styling tar över,
     * likadant som i genomgångarna (som går via marked och alltid sett rätt ut). */
    syntaxHighlight: false,
    // Kursiverar variabler i teoritextens uttryck. Bara omläsningskurserna —
    // pluginen filtrerar själv på filsökväg. Se src/lib/rehype-variabler.mjs.
    rehypePlugins: [rehypeVariabler]
  }
});
