import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// `site` se usa por @astrojs/sitemap para construir URLs absolutas.
// Cuando el dominio definitivo (pmoforge.ai u otro tras trademark check)
// quede vinculado en Vercel, actualizar aquí en una sola línea.
export default defineConfig({
  site: 'https://pmoforge-landing.vercel.app',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' }
      }
    })
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false }
  }
});
