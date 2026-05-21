# PMOforge — Landing v0.2.0

Sitio comercial de **PMOforge**: SaaS de coordinación multiagente para Directores PMO y Gerentes de Proyectos de TI.

> Cambios y trazabilidad de releases en [`CHANGELOG.md`](./CHANGELOG.md). Versionado bajo Semantic Versioning 2.0.0 desde v0.2.0 (decisión D5 en el monorepo `pmforge`).

## Stack

- Astro 5 (static output) + Tailwind CSS 3
- i18n nativo de Astro (ES default, EN bajo `/en/`)
- Inter Variable + Fraunces Variable (self-hosted vía `@fontsource-variable`)
- Astro estático con islas React puntuales (`Reveal.tsx`, `MagneticButton.tsx`) hidratadas con `client:load` para animaciones Framer Motion
- Lenis para smooth scroll
- Vercel Analytics + Vercel Speed Insights para telemetría de visitas y Core Web Vitals

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/
```

## Estructura

```
src/
├── pages/
│   ├── index.astro       # Landing ES
│   └── en/index.astro    # Landing EN
├── components/
│   ├── NavBar.astro
│   ├── Hero.astro        # Headline + ilustración SVG de jerarquía
│   ├── Problem.astro     # 4 dolores del PMP
│   ├── Solution.astro    # 3 capas (Mando / Supervisión / Operativos)
│   ├── UseCases.astro    # 5 automatizaciones tipo
│   ├── Founder.astro     # Bio + credenciales + link al CV
│   ├── Waitlist.astro    # Form mailto + Calendly
│   └── Footer.astro
├── data/
│   └── content.ts        # Todo el copy ES/EN — único punto de edición
├── layouts/
│   └── Base.astro
└── styles/
    └── global.css        # Paleta ember + ink, .btn-primary, .card, .eyebrow
```

## Editar el copy

Todo el contenido bilingüe vive en `src/data/content.ts`. Edita ES en el objeto `es` y EN en `en`. Los componentes se regeneran solos.

## Próximos pasos

1. Verificar dominio `pmoforge.ai` libre y registrar
2. Configurar form real (Formspree o backend Vercel) en lugar del `mailto:` actual
3. Configurar Calendly real en `contactEmail`/`calendlyUrl` en `content.ts`
4. Subir a GitHub y desplegar en Vercel (el mismo flujo del CV)
5. Activar Vercel Analytics y Speed Insights
6. Cuando haya piloto narrable: agregar sección "Caso de uso real"

## Identidad visual

- **Naranja forge** `#FF7A1A` → CTA, acentos
- **Graphite ink** `#0B1525` → texto, sección oscura del waitlist
- **Cream** `#FFF6E5` → fondo suave
- **Tipografía**: Inter (UI) + Fraunces (titulares)
