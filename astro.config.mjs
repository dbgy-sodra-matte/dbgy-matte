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
    // Kursiverar variabler i teoritextens uttryck. Bara omläsningskurserna —
    // pluginen filtrerar själv på filsökväg. Se src/lib/rehype-variabler.mjs.
    rehypePlugins: [rehypeVariabler]
  }
});
