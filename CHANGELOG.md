# Changelog

Todos los cambios relevantes de la landing PMOforge se documentan en este archivo.

El formato se basa en [Keep a Changelog 1.1.0](https://keepachangelog.com/es-ES/1.1.0/) y el versionado sigue [Semantic Versioning 2.0.0](https://semver.org/lang/es/spec/v2.0.0.html).

Convención adoptada el 2026-05-20 (decisión D5 en `DECISIONS.md` del monorepo `pmforge`). La versión 0.1.0 se documenta retroactivamente sin git tag; el etiquetado formal arranca en v0.2.0.

## [Unreleased]

## [0.3.0] — 2026-05-20

> Rediseño visual completo del hero (constelación orbital), fix del bug de iconos en "Cuatro promesas" (cuadrado negro), sección nueva "Vista del producto · en construcción" entre Casos de uso y Fundador, sección nueva "Dos lentes — quién gana qué" entre Solución y Cuatro promesas, copy refinado con 6 mensajes nuevos extraídos del deck Sinapsa v2.0. Cero filtraciones de Modo Stealth (sin nombres de modelos, providers, ni cifras unitarias de costo).

### Added

- **Sección nueva `UIPreview.astro`** entre `UseCases` y `Founder`: mockup SVG inline de la interfaz web del producto — sidebar de proyecto con capa operativa visible (Onboarder, Alcance, Cronograma, Auditor revisando, Minutas), chat con Coordinador como único interlocutor, panel derecho con salud del proyecto (CPI/SPI, avance vs línea base, top riesgos auditados, próximos artefactos). Sello "En construcción" visible. Bilingüe.
- **Sección nueva `Audience.astro`** entre `Solution` y `ValueProp`: doble lente PM (calidad de vida, ahorro de tiempo, mejores decisiones, respaldo institucional) vs comprador (seguridad/control, trazabilidad inmutable, centralización, ROI medible). Marco "características → ventajas → beneficios" de Rene aplicado a landing.
- **Entrada nueva en navegación:** "Vista del producto" / "Product preview" visible en breakpoints `lg+`.
- **Closer del bloque Problem:** anti-frame "pobreman" — "La IA no reemplaza al PM. Lo libera del 'pobreman'." (slide 3 del deck v2.0).
- Frase "~50% menos tiempo de iteración" en subtítulo del hero (slide 6 del deck v2.0).
- Frase "Brújula viva de la PMO en ejecución" en intro de Solution (slide 11 del deck v2.0).
- Frase "Categoría nueva, no incremento sobre lo que existe" como título de Competitive (slide 5 del deck v2.0).
- Cifra "70% del valor lo captura el cliente" como ROI medible en Audience > comprador (slide 7 del deck v2.0).

### Changed

- **Gráfica hero rediseñada como "Constelación orbital":** Tablero compartido al centro como núcleo ember, 8 agentes operacionales en órbita radial (Auditor destacado en ember-100 + stroke ember-600), PM al norte con burbuja conversacional hacia el Coordinador (puerta única), Dashboard ejecutivo al sur-oeste con CPI/SPI/EAC, Artefactos PMO al sur-este (Status, RAID, Minuta, Cronograma, EVM, → comité). Reemplaza la jerarquía vertical Mando/Supervisión/Operativos del SVG anterior. Integra Dashboard + Artefactos que no aparecían en el slide 6 del deck Sinapsa.
- **Título de Problem:** "El PMP moderno gasta el 60% de su tiempo en mantener artefactos vivos, no en decidir" → "El PM senior de TI gasta el 30–40% de su tiempo en lo administrativo, no en decidir". Cifra alineada con slide 4 del deck v2.0 (banda más realista y específica a "senior de TI").
- **Intro de Solution:** incorpora "Tu estrategia se vuelve la brújula viva de la PMO en ejecución".
- **Título de Competitive:** "PMOforge frente a las opciones que ya conoces" → "PMOforge es categoría nueva, no incremento sobre lo que existe".
- **Lead de Competitive:** reescrito con framing "no es comparable uno a uno; es deliberado" + contraste explícito vs IA conversacional directa (ChatGPT, Claude, Gemini) que exige re-subir contexto.
- **Subtítulo del hero:** añade promesa cuantitativa "~50% menos tiempo de iteración".

### Fixed

- **Bug crítico de iconos en `ValueProp.astro` (cuadrado negro en "Cuatro promesas"):** la clase `text-ember-300` NO existía en `tailwind.config.mjs` (la paleta tiene `ember-50/100/200/400/500/600/700`). Tailwind no generaba la regla; la letra heredaba `color:#0B1525` sobre fondo `bg-ink-900` → letras invisibles. Fix: reemplazo de las letras por íconos SVG (lucide-style) inline en `stroke="currentColor"` heredando `text-ember-200` (existente). Iconos: Memoria (stack de discos), Auditoría (sello con check), EVM (gráfica de barras + línea), Resiliencia (escudo con check).
- **Esquema de `pillar` en `content.ts`:** campo `icon` (letra string) reemplazado por `iconKey` (clave del switch que selecciona el SVG en el componente).

### Diferido a próximas releases

- v0.3.1 / v0.4.0: D-02 backend real para waitlist (Resend + Notion o Formspree); D-05 JSON-LD Organization + SoftwareApplication; D-12 teaser pricing post-validación Sinapsa 21 mayo (depende del resultado de la sesión); D-13 screenshots reales post-Demo 1.
- v0.3.1: resolución de `npm audit` (3 vulnerabilidades en deps preexistentes — D-16 deuda del ciclo v0.2.x).
- v0.4.0+: sección "Voz cuando estás en movimiento" si el modo voz queda demostrable en Demo 2 (sem 13–15).

## [0.2.0] — 2026-05-20

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

[Unreleased]: https://github.com/alfred-contreras/pmoforge-landing/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/alfred-contreras/pmoforge-landing/releases/tag/v0.3.0
[0.2.0]: https://github.com/alfred-contreras/pmoforge-landing/releases/tag/v0.2.0
[0.1.0]: https://github.com/alfred-contreras/pmoforge-landing/commit/84236a3
