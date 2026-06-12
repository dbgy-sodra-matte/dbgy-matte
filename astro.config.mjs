import { defineConfig } from 'astro/config';

// Ägs av GitHub-organisationen dbgy-sodra-matte (se "Ägarskap & drift" i Modell v1).
// URL:er här är kontrakt — de klistras i Classroom och får inte ändras efter terminsstart.

export default defineConfig({
  site: 'https://dbgy-sodra-matte.github.io',
  base: '/dbgy-matte',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  }
});
