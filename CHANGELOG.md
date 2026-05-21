# Changelog

Todos los cambios relevantes de la landing PMOforge se documentan en este archivo.

El formato se basa en [Keep a Changelog 1.1.0](https://keepachangelog.com/es-ES/1.1.0/) y el versionado sigue [Semantic Versioning 2.0.0](https://semver.org/lang/es/spec/v2.0.0.html).

Convención adoptada el 2026-05-20 (decisión D5 en `DECISIONS.md` del monorepo `pmforge`). La versión 0.1.0 se documenta retroactivamente sin git tag; el etiquetado formal arranca en v0.2.0.

## [Unreleased] — v0.2.0

> Release ampliada (decisión D6, 2026-05-20): copy alineado con arquitectura cerrada de 9 agentes + sección competitiva + sección consolidada de oferta de valor con lenguaje accesible + higiene técnica F1 ligera (Speed Insights, sitemap, robots).

### Added

- Sección competitiva "Cómo te diferencias" con tabla compacta vs Atlassian Rovo, Microsoft Copilot for Project y Asana AI Teammates (roadmap 2.2.1).
- Sección consolidada de oferta de valor que integra Auditor de Calidad, EVM determinista (CPI/SPI/CV/SV/EAC/ETC) y auditoría automática de artefactos en un único mensaje accesible para Directores PMO y Sponsors sin background técnico de IA (decisión D6).
- Sexto caso de uso: "Auditoría automática de artefactos con rúbricas configurables" (roadmap 2.1.5).
- Mención explícita del Auditor de Calidad como octavo agente operacional con función única de validación contra rúbricas configurables (roadmap 2.1.4).
- Integración de [Vercel Speed Insights](https://vercel.com/docs/speed-insights) en `src/layouts/Base.astro` para métricas reales de Core Web Vitals (deuda D-03).
- `public/sitemap.xml` generado automáticamente vía `@astrojs/sitemap` y `public/robots.txt` apuntando al sitemap (deuda D-04).

### Changed

- Arquitectura cuantificada en el copy: "1 Coordinador + 8 agentes operacionales" reemplaza la fórmula genérica "agentes especialistas" sin cifra explícita (roadmap 2.1.3, decisión 2026-05-19 que cerró topología en 9 agentes).
- Meta description (ES + EN) y narrativa de la sección Solution ya no mencionan "OpenClaw"; se reemplaza por descripción agnóstica de proveedor (roadmap 2.1.1 + 2.1.2, decisión 2026-05-14 que descartó OpenClaw del núcleo).
- Closer de la sección Solution refuerza el Auditor de Calidad como diferenciador arquitectónico verificable ("el sistema no es caja negra").
- Sección Use Cases incorpora promesa de EVM real (CPI/SPI/CV/SV/EAC/ETC) y CPM con determinismo matemático Python como diferenciador frente a Rovo, Copilot y Asana AI (roadmap 2.1.6).
- Bump de versión a `0.2.0` en `package.json`.

### Fixed

- Descripción del `README.md` corregida para reflejar la realidad del stack: Astro estático con islas React (`Reveal.tsx`, `MagneticButton.tsx`) hidratadas con `client:load`. Se elimina la afirmación incorrecta "Sin React (todo Astro estático para máxima velocidad)" (deuda D-01).

### Diferido a próximas releases

- v0.3.0: sustituir form `mailto:` por backend real con captura de leads (deuda D-02); teaser de pricing validado post-Sinapsa (roadmap 2.2.3); screenshots reales del producto post-Demo 1 (roadmap 2.2.4).
- v0.2.1 (opcional, si queda ventana): structured data JSON-LD para Organization + SoftwareApplication (deuda D-05).

## [0.1.0] — 2026-05-07

Despliegue público inicial de la landing PMOforge en Vercel (`pmoforge-landing.vercel.app`). Sin git tag retroactivo; documentado para trazabilidad histórica conforme a la decisión D5.

### Added

- Estructura bilingüe ES/EN gobernada por `src/data/content.ts` con detección de idioma y enrutamiento por locale.
- Secciones de la home: Hero con SVG jerárquico de agentes, Problem, Solution con tarjetas de capas, Use Cases, Founder bio, Waitlist con `mailto:` + Calendly.
- Imágenes Open Graph bilingües (`og.png` ES, `og-en.png` EN) servidas según idioma.
- Capa visual cinemática: Lenis smooth scroll, Framer Motion para componentes `Reveal.tsx` y `MagneticButton.tsx` (islas React hidratadas con `client:load`), fondo de mesh animado y bordes con glow.
- Vercel Analytics integrado para telemetría de visitas.
- Sistema de marca cerrado: paleta ember `#FF7A1A` + ink `#0B1525` + cream `#FFF6E5`; tipografía Fraunces (display) + Inter (UI) self-hosted vía `@fontsource-variable`.

### Known issues at release

- Form de waitlist usa `mailto:` y pierde leads silenciosamente en móviles sin cliente de correo configurado (deuda D-02, cierre planificado en v0.3.0).
- `README.md` afirma "Sin React" pese a existir islas React (deuda D-01, cierre en v0.2.0).
- Vercel Speed Insights no activado (deuda D-03, cierre en v0.2.0).
- Sin `sitemap.xml` ni `robots.txt` (deuda D-04, cierre en v0.2.0).
- Copy menciona "OpenClaw", descartado del stack el 2026-05-14 (deuda D-08, cierre en v0.2.0).

---

[Unreleased]: https://github.com/alfred-contreras/pmoforge-landing/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/alfred-contreras/pmoforge-landing/releases/tag/v0.1.0
