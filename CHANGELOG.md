# Changelog

Todos los cambios relevantes de la landing PMOforge se documentan en este archivo.

El formato se basa en [Keep a Changelog 1.1.0](https://keepachangelog.com/es-ES/1.1.0/) y el versionado sigue [Semantic Versioning 2.0.0](https://semver.org/lang/es/spec/v2.0.0.html).

Convención adoptada el 2026-05-20 (decisión D5 en `DECISIONS.md` del monorepo `pmforge`). La versión 0.1.0 se documenta retroactivamente sin git tag; el etiquetado formal arranca en v0.2.0.

## [Unreleased]

## [0.4.5] — 2026-05-22

> Cierre del bucle de inspectores: tras regenerar `og:image` en v0.4.4 y refrescar caches en Meta Sharing Debugger y LinkedIn Post Inspector, LinkedIn marcó dos warnings rojos en su reporte (`No author found` y `No publication date found`). LinkedIn aplica heurísticas de clasificación que tratan a la URL como tipo "Article" aunque nuestro `og:type` declare "website", y bajo ese supuesto exige `article:author` + `article:published_time`. Agregamos los meta tags necesarios para que el reporte salga 100% verde a quien inspeccione la URL (relevante para outreach a Directores PMO / Sinapsa). Aprovechamos para bilingüizar `og:image:alt` que estaba hardcoded en inglés.

### Added

- **`<meta name="author" content="Alfredo Contreras" />`** — atributo de autoría a nivel `<head>` para que crawlers SEO y Post Inspectors detecten autor de la página. Mismo nombre en ES y EN (no se traduce). Resuelve warning de LinkedIn "No author found".
- **`<meta property="article:author" content="Alfredo Contreras" />`** — duplicado en namespace Open Graph article para máxima compatibilidad (Meta debugger lee este; LinkedIn lee ambos). Misma constante `AUTHOR` declarada en el `<script>` frontmatter de `Base.astro`.
- **`<meta property="article:published_time" content="2026-05-01T00:00:00Z" />`** — fecha conservadora del primer release público de la landing (cuando se hizo el primer deploy a Vercel). Constante `PUBLISHED_ISO`, no cambia en sucesivos releases.
- **`<meta property="article:modified_time" content="2026-05-22T00:00:00Z" />`** — fecha del release actual (v0.4.5). Constante `MODIFIED_ISO` a sincronizar manualmente con CHANGELOG en cada cierre de versión. Documentado con comentario inline en `Base.astro` indicando la convención.
- **`<meta name="twitter:image:alt" content={OG_IMAGE_ALT} />`** — alt text del og en card de Twitter/X, bilingüe.

### Changed

- **`og:image:alt` ahora bilingüe.** Antes hardcoded en EN: `"PMOforge — hierarchical AI agents for Agile PMOs"`. Ahora se calcula via constante `OG_IMAGE_ALT`:
  - ES: `"PMOforge — PMO agéntica con coordinación multi-agente sobre tablero compartido"`
  - EN: `"PMOforge — agentic PMO with multi-agent coordination over a shared board"`
  Copy alineado con el subtítulo del og:image regenerado en v0.4.4. Mejora accesibilidad para lectores de pantalla y SEO multilingüe.

### Operational

- **Decisión tomada sobre warning `fb:app_id`:** ignorar. Es opcional para landings sin Facebook Insights ni Meta Ads. Si en el futuro se lanza pauta en Meta, se creará FB App y se agregará el tag en una línea (no es deuda crítica).
- **Diagnóstico de "borrosidad" en preview de LinkedIn Post Inspector:** falso positivo. El thumbnail que renderiza el debugger interno es de baja calidad por diseño y no representa la imagen que verán los usuarios en el feed real. Imagen 1200×627 (50 KB) cumple el estándar OG y se renderiza correctamente en feeds de LinkedIn, Meta y Twitter. No se requiere reescalado.

## [0.4.4] — 2026-05-22

> Regeneración de las imágenes Open Graph (`public/og.png` y `public/og-en.png`) para eliminar referencias a stack interno (Modo Stealth) y alinear el diagrama esquemático con el modelo de producto vigente. La imagen previa decía "Agentes jerárquicos sobre OpenClaw" y mostraba un esquema MANDO/SUPERVISIÓN/OPERATIVOS con nodos PMP/Supervisor/RAID/Status/Minuta/Deps que ya no corresponden a la arquitectura actual.

### Changed

- **Copy del og:image (ES y EN):** subtítulo `"Agentes jerárquicos sobre OpenClaw · PMI / SAFe"` → **"PMO agéntica · Coordinación multi-agente · PMI / SAFe"** (EN: `"Agentic AI on OpenClaw · PMI / SAFe ready"` → **"Agentic PMO · Multi-agent coordination · PMI / SAFe"**). Mismo cumplimiento de Modo Stealth que la landing: sin nombres de stack, providers ni arquitectura interna.
- **Etiquetas de capa del esquema:** MANDO → **PM · CLIENTE** (EN: COMMAND → PM · CLIENT); SUPERVISIÓN → **COORDINACIÓN** (SUPERVISION → COORDINATION); OPERATIVOS → **AGENTES OPERATIVOS** (OPERATIONAL → OPERATIONAL AGENTS). Refleja el modelo del producto donde el PM cliente conversa con un único agente Coordinador que orquesta a los operacionales sobre un tablero compartido.
- **Nodos del esquema:** Capa 1 PMP → **PM**; Capa 2 Supervisor → **Coordinador** (EN: Coordinator); Capa 3 RAID·Status·Minuta·Deps → **Cronograma · Finanzas · Riesgos · Status** (EN: Schedule · Finance · Risks · Status). Los 4 nodos seleccionados representan dominios PMI universalmente reconocibles a tamaño thumbnail; los 8 dominios completos del producto se ven en el hero al hacer clic.
- **`scripts/generate-og.py` parametrizado:** los nombres de nodos de las tres capas (`node_command`, `node_supervisor`, `nodes_operational`) ahora se leen del diccionario `COPY` por idioma en lugar de estar hardcoded en el renderizador. Esto facilita futuras iteraciones de copy del og sin tocar lógica de dibujo.
- **Ajustes de geometría del esquema:** caja del Coordinador ensanchada (160px vs 120px) y fuente subida a 15pt para acomodar "Coordinador/Coordinator" (palabras más largas que "Supervisor"); nodos operativos como elipses horizontales (84×48px) en lugar de círculos (48×48px) para acomodar etiquetas largas ("Cronograma", "Schedule") sin recorte; centros recalculados a `[50, 145, 240, 335]` con conectores realineados.

### Operational

- Script Pillow ejecutado en sandbox Ubuntu con fuentes Liberation/DejaVu del sistema; ambas imágenes regeneradas a 1200×627px (~50 KB cada una, dentro del límite recomendado de 300 KB para Open Graph). `og:image:width` y `og:image:height` en `Base.astro` quedan correctos sin tocar.
- Render validado visualmente: ambas imágenes ya no contienen referencias al stack interno, el diagrama refleja el modelo de producto descrito en `product-vision.md` y el hero de la landing es coherente con lo que verá el visitante al hacer clic en el preview de redes.

## [0.4.3] — 2026-05-21

> Dos cambios en una release: (a) fix del archivo `public/photo.jpg` que quedó untracked en v0.4.2; (b) ajuste de layout de la sección Founder por pedido del usuario — título y eyebrow pasan a full-width arriba, foto queda incrustada debajo del título al lado del párrafo.

### Fixed

- **`public/photo.jpg` no fue committeado en v0.4.2.** El archivo existía localmente cuando se editó `Founder.astro` pero no se incluyó en el `git add` del commit `77216d7` por estar en estado untracked (no modified). Resultado en producción: la imagen renderizaba el atributo `alt` ("Retrato de Alfredo Contreras, fundador de PMOforge") porque `/photo.jpg` devolvía 404 en Vercel. Fix: `git add public/photo.jpg` + commit + tag `v0.4.3`. Lección para próximos releases: validar `git status` post-add (verificar que `Untracked files` esté vacío) antes de commitear cuando hay archivos nuevos.

### Changed

- **Layout de `Founder.astro` reorganizado:** el eyebrow y el título pasan a **full-width arriba** (en su propio bloque con `max-w-4xl`), y debajo el grid acomoda foto + párrafo + certificaciones. Antes el título compartía columna con el párrafo (md:col-span-5 al lado de la foto); ahora el título tiene jerarquía visual propia atravesando el ancho de "foto + texto" y la foto queda incrustada **debajo del título al lado del párrafo**. `items-start` en el grid del cuerpo (antes `items-center`) — la altura del párrafo es menor que la de la foto, y `items-start` ancla los bloques al tope sin hacer flotar la card de certificaciones.
- **Responsive mobile mejorado:** el grid del cuerpo cambia de comportamiento por breakpoint. **Mobile (<768px):** foto en col-span-5 (~41%) + párrafo en col-span-7 (~58%) lado a lado · certificaciones en col-span-12 (full-width) abajo. **md+ (≥768px):** foto col-span-3 + párrafo col-span-5 + certificaciones col-span-4 en una sola fila. Pedido del usuario tras revisión visual: en mobile la foto debe quedar al lado del párrafo narrativo, no apilada arriba; las certificaciones bajan a un bloque propio. Ajustes adicionales para mobile: offset diagonal de la capa decorativa reducido a `translate-x-2 translate-y-2` (era `3/3`, foto más pequeña requiere offset proporcional); párrafo en `text-base md:text-lg` para no dominar el ancho mobile; margen del CV link reducido a `mt-5 md:mt-6`.

## [0.4.2] — 2026-05-21

> Sección Fundador rediseñada: foto del fundador a la izquierda con encuadre profesional (opción C — tarjeta `rounded-2xl` + capa decorativa `ember-200` desplazada en diagonal para profundidad), layout reorganizado a 3 columnas (foto · texto · certificaciones) con `items-center` para simetría vertical. Título reescrito para no redundar con las certificaciones de la columna derecha.

### Added

- **Foto del fundador en `Founder.astro` (lado izquierdo, columna 3/12 en md+):** sirve `public/photo.jpg` (1302×1448, 392 KB) con `<img>` HTML estándar (no `<Image>` de Astro para evitar dependencia adicional en este ciclo). `aspect-[4/5]` + `object-cover` para portrait consistente. `loading="lazy"` y `decoding="async"` — la sección no es LCP. Atributo `alt` semántico bilingüe via `t.photoAlt`.
- **Encuadre opción C — profundidad sin recargar:** capa decorativa `bg-ember-200 rounded-2xl` posicionada `absolute inset-0 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4` detrás de la foto; foto al frente con `relative ring-1 ring-ink-100 shadow-xl rounded-2xl`. El offset diagonal de 12-16px genera la sensación de "doble capa" que el usuario pidió ("que no se vea tan plana").
- **Campo nuevo `photoAlt` en `content.ts` (ES + EN):** "Retrato de Alfredo Contreras, fundador de PMOforge" / "Portrait of Alfredo Contreras, founder of PMOforge".

### Changed

- **Título de Founder reescrito** (ES y EN) para no redundar con las certificaciones de la card derecha (PMP/MBA/MIT xPRO/24+ años): "Construido por un PMP con 24 años entregando" → **"Dos décadas entregando proyectos. Ahora forjando la PMO del futuro."** (EN: "Two decades delivering projects. Now forging the PMO of the future."). Refuerza el verbo "forjar" alineado con la marca y desplaza el peso a la trayectoria + dirección futura, dejando las credenciales formales a la card.
- **Body de Founder:** se eliminan las menciones redundantes a PMP/MBA/MIT xPRO del párrafo (ya están en la card derecha). Se preserva el storytelling de fundador ("frustración propia como Technical Owner") + el ámbito sectorial (Telco BSS, Oil & Gas, Gobierno) + la cifra de presupuestos (USD 10M+).
- **Layout de Founder.astro reorganizado de 7+5 a 3+5+4 columnas** en md+: foto (3/12) + texto (5/12) + certificaciones (4/12). Wrapper con `items-center` para simetría vertical entre las tres columnas — la altura natural de la foto se acompasa con la altura del texto y de la card. `gap-8 md:gap-10` para respiración. En mobile las tres columnas hacen stack vertical con `max-w-[280px] mx-auto` para la foto.

## [0.4.1] — 2026-05-21

> Fix de navbar para evitar wrap de labels largos. Sin cambios funcionales ni de copy.

### Fixed

- **Navbar — labels largos hacían wrap a dos líneas y generaban desalineación vertical visible en pantallas `xl+` donde se mostraban los 9 items.** Causa: faltaba `whitespace-nowrap` en cada `<a>` y el `<nav>` estaba acotado a `max-w-6xl` (1152px), apretando los items contra el botón CTA. Fix integral:
  - `whitespace-nowrap` aplicado a todos los links del navbar, al logo y al botón Waitlist.
  - `flex-nowrap` explícito en el `<ul>` para reforzar que la lista no se rompe.
  - `max-w-6xl` → `max-w-7xl` (1280px) en el wrapper del `<nav>` — 128px adicionales.
  - Spacing entre items aumentado: `gap-5` → `gap-x-5 lg:gap-x-6`.
  - `shrink-0` aplicado al logo y al grupo CTA (LANG + Waitlist) para protegerlos cuando el menú se aprieta.
  - **Reorganización de breakpoints más conservadora:** `md+` muestra 4 items core (Solución, Diferencial, Seguridad, Visión) + CTA; `lg+` añade Problema; `xl+` añade Por qué PMOforge + Casos de uso + Fundador; `2xl+` añade Vista del producto. Antes 9 items intentaban entrar en `md+` con texto que hacía wrap.

## [0.4.0] — 2026-05-21

> Dos secciones permanentes nuevas (Seguridad por diseño + Hacia dónde vamos), reescritura completa de la sección competitiva ("Diferencial") con tres celdas actualizadas según cierre de 04-Investigación de mercado v1.0 + sub-bloque "¿Y frente al PPM enterprise?" (Planview-Sciforma, ServiceNow SPM, Planisware, Forecast.app), reescritura del bloque "Frameworks PMI/SAFe rígidos" del Problem como "Gobernanza vs Agilidad: la fricción que mata el valor", roadmap visible más agresivo (junio 2026 demo funcional · jul–ago piloto remunerado · Q4 apertura comercial controlada). Cero filtraciones de Modo Stealth (sin nombres de modelos, providers, ni nombres de productos hermanos en exploración).

### Added

- **Sección nueva `Security.astro` entre `Competitive` y `UseCases`:** cinco pilares del modelo de seguridad del Coordinador (`security-model.md` v0.1) traducidos a lenguaje accesible — contrato declarativo del Coordinador con lista blanca/negra de capacidades, jerarquía de instrucciones en 6 niveles, defensas contra prompt injection (clasificador de propósito + LLM-as-Judge + output filter), aislamiento multi-tenant y multi-proyecto, auditabilidad inmutable. CTA al Calendly del fundador para revisión del documento técnico completo. Bilingüe.
- **Sección nueva `Vision.astro` entre `UIPreview` y `Founder`:** tres horizontes a 36 meses (MVP comercial vertical IT → expansión a 8 industrias ejecutoras de proyectos → plataforma multi-portafolio + marketplace + multimodal nativo + modo autónomo asistido). Mini-timeline visible con 5 hitos hasta cierre de año (mayo → junio → jul-ago → sep-oct → Q4 2026) que reemplaza el rol que tendría una sección dedicada al alcance del producto sin filtrar nombres de stack. Cierre con disclaimer de trademark check en curso.
- **Tres entradas nuevas en la navegación:** "Diferencial / Differentiator" (visible md+, reemplazando "Comparativa / Comparison" en label), "Seguridad / Security" (visible md+), "Visión / Vision" (visible md+). Reorganización de breakpoints: "Por qué PMOforge", "Casos de uso" y "Fundador" pasan a `lg+`; "Vista del producto" pasa a `xl+`.
- **Sub-bloque "¿Y frente al PPM enterprise?" al final de la sección Diferencial:** card con Planview-Sciforma, ServiceNow SPM, Planisware mencionados explícitamente (anillo competitivo 2 según `competitive-landscape-2026.md` §2.2 y §6) + adjacent Forecast.app como competidor más cercano por foco vertical IT real (PSA). Cierra el gap identificado en el cierre 04-Mercado v1.0 punto (3).

### Changed

- **Reescritura completa del lead y de tres celdas de la sección Diferencial** (Atlassian Rovo, MS Copilot for Project, Asana AI Teammates) según cierre 04-Mercado v1.0 (`STATE.md` §1, `competitive-landscape-2026.md` §6, `landing-feedback.md`). Rovo se reframe a "Multi-agente jerárquico (Hybrid Orchestrator + Rovo Studio); sin Auditor LLM por rúbrica, sin baseline PMI formal del proyecto". MS Copilot se reframe a "Coordinación vía plano de control externo (Agent 365 + A2A); EVM solo en Project Pro desktop con Plan 5 EOL mayo 2026 y Project Online retirando sep 2026". Asana se reframe a "21 teammates pre-construidos con memoria cross-project en Work Graph; el PM elige qué teammate llamar (no hay agente único orquestador)". Lead actualizado al frame "intersección de cinco condiciones que nadie cubre simultáneamente". Eyebrow renombrado de "Cómo te diferencias" a "Diferencial".
- **Celda "Auditor LLM de artefactos con rúbricas configurables" matizada** con justificación explícita en lugar de un escueto "No": Rovo Studio audita ejecución no contenido; Agent 365 gobierna agentes no juzga artefactos; Compliance Specialist de Asana no es capa obligatoria.
- **Reescritura del tercer bullet de la sección Problem** ("Frameworks PMI/SAFe rígidos" → "Gobernanza vs Agilidad: la fricción que mata el valor"): formulación condensada (~50 palabras) del trade-off PMI estricto vs agilidad, con cierre en "PMOforge automatiza el cumplimiento metodológico para que el equipo se concentre en iterar e inyectar valor real en cada ciclo".
- **Note de la sección Diferencial:** referencias explícitas a Atlassian Team '26, Microsoft Build y Asana Work Innovation Summit como fuentes de la actualización mayo 2026.

### Diferido a próximas releases

- v0.4.1: D-02 backend real waitlist (Resend + Notion o Formspree); D-05 JSON-LD Organization + SoftwareApplication; D-16 resolución `npm audit`; D-17 optimización del PNG fuente del hero con `pngquant`/`oxipng`.
- v0.5.0+: D-12 teaser de pricing post-validación Sinapsa; D-13 screenshots reales reemplazan mockup en `UIPreview` cuando Demo 1 sem 6-8 esté funcional; eventual página `/security` con versión pública sanitizada del modelo de seguridad si CISOs lo piden recurrentemente.

## [0.3.0] — 2026-05-21

> Rediseño visual completo del hero (constelación → capa operativa multiagente con 8 pills + tablero hexagonal), fix del bug de iconos en "Cuatro promesas" (cuadrado negro), fix paralelo de `border-ember-300` en Solution.astro y Waitlist.astro, sección nueva "Vista del producto · en construcción" entre Casos de uso y Fundador, sección nueva "Dos lentes — quién gana qué" entre Solución y Cuatro promesas, copy refinado con 6 mensajes nuevos extraídos del deck Sinapsa v2.0. Cero filtraciones de marca pública (sin nombres de cliente, sin "Sinapsa", sin "Claro", sin "Ecopetrol"). Cero filtraciones de Modo Stealth (sin nombres de modelos, providers, ni cifras unitarias de costo).

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

- **Gráfica hero rediseñada como Arquitectura de Infraestructura Isométrica 2.5D:** tres capas flotantes superpuestas en el eje Z con `perspective: 2000px` + `transform-style: preserve-3d` sobre fondo dark mode premium (`#0B0F19` → `#131A2C`) con grid blueprint sutil y glow ember en esquinas. Transformación isométrica coordinada en escritorio (`rotateX(60deg) rotateY(0deg) rotateZ(-45deg)`).
  - **Capa 1 — Interfaz y Roles (`translateZ(+120px)`):** tarjeta cristal esmerilado (`backdrop-filter: blur(14px)`) con avatar SVG de persona + tag "Roles humanos" + lista `PM · Director PMO · CTO · CEO`, flecha conectora SVG, y pill del **Agente Coordinador PMO** en gradient ember-400→ember-600 con `box-shadow` cálido. Debajo, descripción "El Coordinador adapta vistas y funciones al perfil de cada rol".
  - **Capa 2 — Capa operativa multiagente (`translateZ(0px)`):** plataforma con borde dashed ember-200, etiqueta superior `CAPA OPERATIVA MULTIAGENTE` en chip oscuro. Tablero compartido como **hexágono CSS** (clip-path polygon 6 puntos, pointy-top) con borde gradient ember y interior crema con texto "Tablero compartido / eventos asíncronos". Los 8 agentes distribuidos simétricamente alrededor del hexágono (3 arriba, 2 lados, 3 abajo): pill píldora con icono Robot B minimalista + nombre. Conexiones bidireccionales mediante SVG inline con `marker-start` + `marker-end`, líneas dashed ember-400, una por agente al hexágono. Auditor destacado con `bg ember-500/22` + halo glow `0 0 24px rgba(255,122,26,.35)`.
  - **Capa 3 — Datos, Artefactos y Analítica (`translateZ(-120px)`):** grid 2 columnas — Dashboard ejecutivo con KPIs CPI 1.04 / SPI 0.97 / EAC $1.2M (cada uno con micro-trend "↑ saludable", "≈ a tiempo", "+3% baseline") y Artefactos PMO con 6 píldoras (Status, RAID, Minuta, Cronog., EVM, → comité destacada).
  - **Comportamiento responsive defensivo:** debajo del breakpoint `lg` (1024px) las transformaciones 3D se desactivan completamente (`perspective: none; transform: none`), las capas se reorganizan en stack vertical Capa 1 → 2 → 3 con `flex-direction: column; gap: 18px`. En <640px el hexágono encoge a 110px y los agentes pierden el ícono conector. Pointer-events preservados en todas las tarjetas; z-index escalonado (l1=30, l2=20, l3=10). `prefers-reduced-motion` respetado.
- **Título de Problem:** "El PMP moderno gasta el 60% de su tiempo en mantener artefactos vivos, no en decidir" → "El PM senior de TI gasta el 30–40% de su tiempo en lo administrativo, no en decidir". Cifra alineada con slide 4 del deck v2.0 (banda más realista y específica a "senior de TI").
- **Intro de Solution:** incorpora "Tu estrategia se vuelve la brújula viva de la PMO en ejecución".
- **Título de Competitive:** "PMOforge frente a las opciones que ya conoces" → "PMOforge es categoría nueva, no incremento sobre lo que existe".
- **Lead de Competitive:** reescrito con framing "no es comparable uno a uno; es deliberado" + contraste explícito vs IA conversacional directa (ChatGPT, Claude, Gemini) que exige re-subir contexto.
- **Subtítulo del hero:** añade promesa cuantitativa "~50% menos tiempo de iteración".

### Fixed

- **Bug crítico de iconos en `ValueProp.astro` (cuadrado negro en "Cuatro promesas"):** la clase `text-ember-300` NO existía en `tailwind.config.mjs` (la paleta tiene `ember-50/100/200/400/500/600/700`). Tailwind no generaba la regla; la letra heredaba `color:#0B1525` sobre fondo `bg-ink-900` → letras invisibles. Fix: reemplazo de las letras por íconos SVG (lucide-style) inline en `stroke="currentColor"` heredando `text-ember-200` (existente). Iconos: Memoria (stack de discos), Auditoría (sello con check), EVM (gráfica de barras + línea), Resiliencia (escudo con check).
- **Esquema de `pillar` en `content.ts`:** campo `icon` (letra string) reemplazado por `iconKey` (clave del switch que selecciona el SVG en el componente).
- **Fix paralelo `border-ember-300` en `Solution.astro` (Capa de Supervisión + banda de gobierno) y `Waitlist.astro` (link a Calendly):** mismo bug — clase inexistente en la paleta Tailwind, el `border-2` se renderizaba con `currentColor` en lugar del tono ámbar previsto. Cambio a `border-ember-200` (#FFC97A), color que sí existe y mantiene la intención visual.
- **UIPreview · barra del navegador, sidebar de proyectos y headers del chat:** removidos nombres de cliente (Sinapsa, Claro, Ecopetrol). Estado: URL `app.pmoforge.ai · proyecto · LATAM`; sidebar con proyecto activo `LATAM`, otros proyectos `Migración BSS` y `Automatización IA · tablero de issues`; header de chat `Agente Coordinador PMO · LATAM`; bot identificado como `Agente Coordinador PMO` en todas las burbujas y placeholder del input.
- **UIPreview · indicador de trabajo del Coordinador:** ahora muestra avance porcentual visible — texto `Agente Coordinador PMO está consultando a Riesgos + Dependencias… → progreso al 77%` con barra de progreso animada (gradient ember-400 → ember-500) y tres dots pulsantes desfasados.

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

[Unreleased]: https://github.com/alfred-contreras/pmoforge-landing/compare/v0.4.3...HEAD
[0.4.3]: https://github.com/alfred-contreras/pmoforge-landing/releases/tag/v0.4.3
[0.4.2]: https://github.com/alfred-contreras/pmoforge-landing/releases/tag/v0.4.2
[0.4.1]: https://github.com/alfred-contreras/pmoforge-landing/releases/tag/v0.4.1
[0.4.0]: https://github.com/alfred-contreras/pmoforge-landing/releases/tag/v0.4.0
[0.3.0]: https://github.com/alfred-contreras/pmoforge-landing/releases/tag/v0.3.0
[0.2.0]: https://github.com/alfred-contreras/pmoforge-landing/releases/tag/v0.2.0
[0.1.0]: https://github.com/alfred-contreras/pmoforge-landing/commit/84236a3
