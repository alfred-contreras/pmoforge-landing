// =====================================================================
// Contenido bilingüe (ES/EN) de la landing PMOforge
// Para actualizar: editar este archivo. Los componentes consumen getContent(lang).
// =====================================================================

export type Lang = 'es' | 'en';

const es = {
  meta: {
    title: 'PMOforge — Forja tu PMO con agentes IA jerárquicos',
    description:
      'PMOforge ayuda a Directores PMO y Gerentes de Proyectos de TI a aumentar su capacidad de decisión con un equipo de agentes IA jerárquicos: memoria persistente, auditoría automática y métricas EVM con determinismo matemático. Cumplimiento PMI/SAFe ajustado al nivel de gobierno que tu organización demanda.'
  },
  nav: {
    problem: 'El problema',
    solution: 'La solución',
    value: 'Por qué PMOforge',
    competitive: 'Diferencial',
    security: 'Seguridad',
    vision: 'Visión',
    useCases: 'Casos de uso',
    preview: 'Vista del producto',
    founder: 'Fundador',
    waitlist: 'Lista de espera'
  },
  hero: {
    eyebrow: 'Próximamente · Acceso anticipado',
    title: 'Forja tu PMO con agentes IA que sí ejecutan',
    subtitle:
      'PMOforge equipa al Gerente de Proyectos de TI con un equipo de agentes IA jerárquicos que automatizan la gobernanza, mantienen vivos los artefactos PMI/SAFe y aumentan la capacidad de decisión — con ~50% menos tiempo de iteración y sin cambiar tu cultura.',
    ctaPrimary: 'Sumarme a la lista de espera',
    ctaSecondary: 'Hablemos',
    // Etiquetas de la gráfica hero
    graph: {
      pmBubbleLine1: 'Roles como PM, Director PMO, CTO o CEO conversan con el Agente Coordinador PMO.',
      pmBubbleLine2: 'El Coordinador adapta vistas y funciones al perfil de cada rol.',
      coordinator: 'Agente Coordinador PMO',
      coordinatorRole: 'supervisa la PMO',
      layerLabel: 'Capa operativa multiagente',
      board: 'Tablero compartido',
      boardSub: 'eventos asíncronos',
      agents: {
        onboarder: 'Onboarder',
        scope: 'Alcance',
        schedule: 'Cronograma',
        evm: 'EVM',
        risks: 'Riesgos',
        minutes: 'Minutas',
        auditor: 'Auditor',
        repo: 'Repositorio'
      },
      dashboardLabel: 'Dashboard ejecutivo',
      artifactsLabel: 'Artefactos PMO',
      artifacts: {
        status: 'Status',
        raid: 'RAID',
        minute: 'Minuta',
        schedule: 'Cronog.',
        evm: 'EVM',
        committee: '→ comité'
      }
    }
  },
  problem: {
    eyebrow: 'El problema',
    title: 'El PM senior de TI gasta el 30–40% de su tiempo en lo administrativo, no en decidir',
    bullets: [
      {
        title: 'Status reports que envejecen mal',
        body: 'Cada lunes empieza con tres horas de copiar–pegar entre Jira/Azure DevOps, Excel y PowerPoint. Para cuando llegan al comité, los datos ya cambiaron.'
      },
      {
        title: 'RAID logs que nadie audita',
        body: 'Riesgos, supuestos, dependencias e issues escritos al inicio del proyecto que nadie revisa hasta que el riesgo se materializa.'
      },
      {
        title: 'Gobernanza vs Agilidad: la fricción que mata el valor',
        body: 'Endurecer PMI/SAFe burocratiza el proceso y frena la entrega de incrementos; flexibilizarlo recupera ritmo pero pierde visibilidad institucional. PMOforge elimina la disonancia: automatiza el cumplimiento metodológico para que el equipo se concentre en iterar e inyectar valor real en cada ciclo.'
      },
      {
        title: 'Decisiones sin trazabilidad',
        body: 'La minuta del comité de cambios queda en el correo. Tres semanas después nadie recuerda quién aprobó qué, ni con qué criterio.'
      }
    ],
    closer:
      'La IA no reemplaza al PM. Lo libera del “pobreman” — esa figura que carga minutas, status, comités, dependencias y proveedores hasta no quedarle tiempo para decidir.'
  },
  solution: {
    eyebrow: 'La solución',
    title: 'Una jerarquía de agentes IA que trabajan a tu lado, no en tu lugar',
    intro:
      'PMOforge orquesta un equipo de agentes especializados con cadena de mando y supervisión: un Coordinador conversa contigo, ocho agentes operacionales ejecutan en paralelo sobre un tablero compartido. Cada agente tiene una misión concreta, reporta al Coordinador, y el Coordinador reporta al PMP. Tu estrategia se vuelve la brújula viva de la PMO en ejecución — los agentes ejecutan, documentan y auditan; tú decides.',
    layers: [
      {
        name: 'Capa de Mando',
        role: 'PMP humano',
        description: 'Define objetivos, aprueba decisiones críticas y revisa resúmenes ejecutivos. La IA propone, el humano dispone.'
      },
      {
        name: 'Capa de Supervisión',
        role: 'Coordinador',
        description: 'Único interlocutor con el PMP. Coordina los ocho agentes operacionales, consolida hallazgos, escala alertas, mantiene la cadena de auditoría y la memoria del proyecto entre sesiones.'
      },
      {
        name: 'Capa Operativa',
        role: 'Ocho agentes especialistas',
        description: 'Ocho agentes operacionales trabajando en paralelo: Onboarding del proyecto, Alcance + Backlog, Cronograma con ruta crítica, Salud Financiera con EVM, Riesgos + Dependencias, Minutas + Status, Auditor de Calidad de artefactos y Repositorio del proyecto. Cada uno con su prompt, sus rúbricas y su acceso controlado a las fuentes.'
      }
    ],
    governance: {
      title: 'Personalización por nivel de gobierno',
      body: 'Configura cuánta documentación, cuántos checkpoints y cuánta evidencia exige tu organización. PMOforge se adapta de "ágil ligero" a "PMI estricto" sin reescribir agentes.'
    }
  },
  audience: {
    eyebrow: 'Quién gana qué',
    title: 'Dos lentes — porque el PM no es quien firma el contrato',
    lead:
      'PMOforge resuelve dos problemas distintos al mismo tiempo. Por eso lo defienden tanto quien lo opera como quien lo aprueba.',
    columns: [
      {
        label: 'Lente del PM',
        sub: 'el que opera el día a día del proyecto',
        items: [
          { k: 'Calidad de vida', v: 'deja de ser “pobreman” — los agentes cargan lo administrativo.' },
          { k: 'Ahorro de tiempo', v: 'esa hora y media diaria atrapada en status, minutas y RAID.' },
          { k: 'Mejores decisiones', v: 'dashboard y riesgos llegan auditados, no intuidos.' },
          { k: 'Respaldo institucional', v: 'los riesgos los reporta el sistema, no quedas solo defendiéndolos.' }
        ]
      },
      {
        label: 'Lente del comprador',
        sub: 'Director PMO · Director TI · Sponsor',
        items: [
          { k: 'Seguridad y control', v: 'visibilidad del portafolio entero, no de un solo proyecto.' },
          { k: 'Trazabilidad inmutable', v: 'compliance y gobierno PMI con audit trail desde el día 0.' },
          { k: 'Centralización de datos', v: 'lecciones, proveedores y artefactos en un único repositorio.' },
          { k: 'ROI medible', v: '70% del valor lo captura el cliente — los números cierran solos.' }
        ]
      }
    ],
    closer: 'El PM no firma el contrato, pero sin su buy-in no se compra. Los dos lentes importan.'
  },
  valueProp: {
    eyebrow: 'Por qué PMOforge',
    title: 'Cuatro promesas de ingeniería que tu PMO puede auditar',
    lead: 'PMOforge se construye con cuatro garantías técnicas que se traducen en confianza operativa para el comité directivo. No pedimos que creas; entregamos cómo verificarlo.',
    pillars: [
      {
        iconKey: 'memory',
        label: 'Memoria',
        title: 'Memoria persistente del proyecto',
        claim: 'El sistema recuerda lo aprendido a lo largo del ciclo de vida del proyecto.',
        body: 'Decisiones, supuestos, lecciones y contexto se preservan entre sesiones. No empiezas cada lunes desde cero — la memoria vive en el sistema, no en la cabeza del PM que se ausentó.'
      },
      {
        iconKey: 'audit',
        label: 'Auditoría',
        title: 'Auditoría automática de cada artefacto',
        claim: 'Un agente independiente valida cada entregable contra rúbricas configurables por tu organización.',
        body: 'El criterio de calidad no es opaco. Cuando un artefacto se rechaza, sabes exactamente por qué — y puedes editar la rúbrica si el criterio no encaja con tu cultura. Caja transparente, no caja negra.'
      },
      {
        iconKey: 'evm',
        label: 'EVM',
        title: 'Determinismo matemático en EVM y ruta crítica',
        claim: 'CPI, SPI, CV, SV, EAC, ETC y CPM se calculan con código verificable, no con un LLM intuyendo cifras.',
        body: 'Las métricas financieras y de cronograma críticas se computan con Python determinista que un auditor puede replicar. Cero alucinaciones aritméticas en lo que llega al sponsor.'
      },
      {
        iconKey: 'resilience',
        label: 'Resiliencia',
        title: 'Recuperación ante fallos sin intervención manual',
        claim: 'Un servicio de vigilancia detecta bloqueos, errores o tiempos muertos y los recupera o escala automáticamente.',
        body: 'El sistema no se queda colgado esperando que tú notes el problema. Cuando un agente falla, se reintenta con alternativa o se notifica al PM con propuesta de acción — antes de que el comité se entere.'
      }
    ],
    closer: 'Esto es lo que recibe un PMO sénior cuando elige PMOforge: ingeniería de software seria detrás de la IA, no un chatbot bonito. Audítalo, no nos creas.'
  },
  competitive: {
    eyebrow: 'Diferencial',
    title: 'PMOforge es categoría nueva, no incremento sobre lo que existe',
    lead: 'Los copilotos verticales (Rovo, Copilot, Asana AI) maduraron en 2026 y cerraron varios gaps clásicos. La IA conversacional directa (ChatGPT, Claude, Gemini) exige al PM subir el contexto cada vez. PMOforge se diferencia por la intersección de cinco condiciones que nadie cubre simultáneamente: agente único de cara al PM, EVM y CPM con determinismo Python verificable, Auditor LLM por rúbrica configurable, baseline PMI inmutable y foco vertical IT real sin lock-in a un único ecosistema.',
    columns: ['PMOforge', 'Atlassian Rovo', 'MS Copilot for Project', 'Asana AI Teammates'],
    rows: [
      {
        axis: 'Coordinación multiagente con paralelismo real',
        values: [
          'Sí — equipo de 9 agentes con jerarquía, supervisión y memoria compartida',
          'Multi-agente jerárquico (Hybrid Orchestrator + Rovo Studio); sin Auditor LLM por rúbrica, sin baseline PMI formal del proyecto',
          'Coordinación vía plano de control externo (Agent 365 + A2A); EVM solo en Project Pro desktop con Plan 5 EOL mayo 2026 y Project Online retirando sep 2026',
          '21 teammates pre-construidos con memoria cross-project en Work Graph; el PM elige qué teammate llamar (no hay agente único orquestador)'
        ]
      },
      {
        axis: 'EVM con determinismo matemático (CPI/SPI/EAC/ETC)',
        values: ['Sí, cálculo Python verificable', 'No', 'Solo en Project Pro desktop, sin garantía determinista', 'No']
      },
      {
        axis: 'Auditor LLM de artefactos con rúbricas configurables',
        values: ['Sí, agente dedicado', 'No (Rovo Studio audita ejecución, no contenido)', 'No (Agent 365 gobierna agentes, no juzga artefactos)', 'No (Compliance Specialist no es capa obligatoria)']
      },
      {
        axis: 'Líneas base inmutables con flujo de aprobación PMI formal',
        values: ['Sí, gobierno PMI integrado', 'No para el baseline del proyecto', 'Vía MS Project, sin trazabilidad de aprobación nativa', 'No']
      },
      {
        axis: 'Foco vertical en PM de TI (no feature lateral)',
        values: [
          'Único producto, único caso',
          'Generalista (dev, IT, business)',
          'Generalista (knowledge worker)',
          'Generalista (PM colaborativo)'
        ]
      }
    ],
    note: 'Comparativa basada en documentación pública de cada producto a mayo de 2026 (Atlassian Team \'26, Microsoft Build, Asana Work Innovation Summit). PMOforge se encuentra en fase pre-MVP; las capacidades listadas corresponden a la arquitectura cerrada y validada el 2026-05-19.',
    ppm: {
      title: '¿Y frente al PPM enterprise?',
      body: 'Planview-Sciforma, ServiceNow SPM y Planisware tienen gobernanza enterprise y EVM nativo, pero su capa agéntica recién madura y un piloto típico dura 12 a 18 meses. PMOforge entrega valor en piloto corto con foco vertical IT real, sin lock-in PPM y con Auditor LLM por rúbrica que esa categoría todavía no ofrece.',
      adjacent: 'El competidor más cercano por foco vertical IT es Forecast.app, pero opera en Professional Services Automation, no en gobernanza PMO con baseline inmutable.'
    }
  },
  security: {
    eyebrow: 'Seguridad y gobernanza',
    title: 'Seguridad por diseño, no como feature añadido',
    lead: 'El Coordinador opera bajo un contrato declarativo: lo que puede hacer está enumerado y lo que no puede hacer está prohibido por estructura, no solo por instrucción. Multi-tenant con aislamiento lógico, defensas contra prompt injection y audit log inmutable desde el día cero.',
    pillars: [
      {
        title: 'Contrato del Coordinador',
        body: 'Propósito acotado a orquestar 8 agentes sobre el proyecto activo. Lista blanca de capacidades autorizadas y lista negra explícita: sin web abierto, sin código arbitrario fuera de sandbox, sin acceso cross-tenant, sin bypass del Auditor de Calidad, sin bypass del flujo de re-baseline.'
      },
      {
        title: 'Jerarquía de instrucciones en 6 niveles',
        body: 'System prompt > configuración del tenant > configuración del proyecto > mensajes del PM > artefactos de agentes internos > contenido ingerido (docs del cliente, RFPs, minutas). Un PDF subido al Repositorio nunca puede instruir al Coordinador — se trata como dato, jamás como orden.'
      },
      {
        title: 'Defensas contra prompt injection',
        body: 'Clasificador de propósito previo al Coordinador que descarta solicitudes fuera de contrato; LLM-as-Judge sobre contenido ingerido para detectar instrucciones embebidas; output filter previo a entrega al PM; audit log de cada intento fuera de alcance.'
      },
      {
        title: 'Aislamiento multi-tenant y multi-proyecto',
        body: 'Default deny en todo acceso. Contexto cero entre proyectos. Memoria persistente con clave (tenant, proyecto, usuario), nunca solo por usuario. Embeddings vectoriales segregados por proyecto, no únicamente por tenant.'
      },
      {
        title: 'Auditabilidad inmutable',
        body: 'Append-only log de artefactos, decisiones del Auditor de Calidad, prompts del Coordinador y eventos de seguridad. Retención mínima de un año, configurable por tenant. Acceso restringido a Auditor humano + Director PMO.'
      }
    ],
    closer: 'Documento técnico del modelo de seguridad disponible para Directores PMO, CISOs y compradores enterprise.',
    cta: 'Agenda 30 min para revisarlo',
    note: 'Modelo de seguridad v0.1 baseline declarativo (2026-05-21). La v1.0 ampliada incluye diseño implementable, matriz RBAC × proyecto, mapeo OWASP LLM Top 10 y plan de pruebas adversariales pre-piloto.'
  },
  vision: {
    eyebrow: 'Hacia dónde vamos',
    title: 'Una plataforma que escala más allá de TI',
    lead: 'PMOforge nace en gestión de proyectos de TI, pero el patrón —Coordinador único + agentes operacionales + tablero compartido + Auditor con rúbricas + memoria persistente + determinismo matemático— es dominio-agnóstico. El producto de hoy es la primera vertical; la plataforma es lo que se está forjando.',
    horizons: [
      {
        label: 'Horizonte 1',
        period: '0 a 12 meses',
        title: 'MVP comercial vertical IT',
        body: 'PMOs internos de TI, telco y consultoría tecnológica. Validación de pricing con primeros clientes, telemetría real de uso, piloto productivo cerrado.'
      },
      {
        label: 'Horizonte 2',
        period: '12 a 24 meses',
        title: 'Expansión a industrias ejecutoras de proyectos',
        body: 'Apertura a sectores no-software con marco PMI común: construcción e infraestructura, manufactura, energía, sector público, banca, salud, educación. Plantillas y rúbricas sectoriales empaquetadas; servicio profesional absorbe la personalización.'
      },
      {
        label: 'Horizonte 3',
        period: '24 a 36 meses',
        title: 'Plataforma multi-portafolio',
        body: 'Vista PMO ejecutiva multi-portafolio (estrategia → portafolio → programa → proyecto). Integración con OKRs y Balanced Scorecard. Marketplace de plugins sectoriales. Modelos multimodales nativos. Modo autónomo asistido con elevación a humano por Red Flags.'
      }
    ],
    roadmap: {
      title: 'Hoja de ruta visible',
      lead: 'Cinco hitos de aquí al cierre de año.',
      items: [
        { phase: 'mayo 2026', body: 'Pre-MVP en ejecución · arquitectura cerrada · primeros agentes en POC.' },
        { phase: 'junio 2026', body: 'Demo funcional con caso feliz reproducible · 5-6 agentes coordinados.' },
        { phase: 'jul–ago 2026', body: 'Piloto remunerado controlado con primer cliente · ciclo completo con fallo recuperado.' },
        { phase: 'sep–oct 2026', body: 'Integraciones reales · flujo formal de aprobación de re-baseline · sync con repositorios corporativos.' },
        { phase: 'Q4 2026', body: 'Apertura comercial controlada en SaaS multi-tenant con clientes early-adopter.' }
      ]
    },
    closer: 'Naming, registro de dominio y arquitectura de marca de los productos hermanos están sujetos a trademark check en curso.'
  },
  useCases: {
    eyebrow: 'Casos de uso',
    title: 'Cinco automatizaciones que devuelven horas a tu semana',
    items: [
      {
        title: 'Auditor RAID semanal',
        body: 'Cada viernes, un agente revisa el RAID log, contrasta con el avance real, propone cambios de probabilidad/impacto y redacta el resumen para el comité.'
      },
      {
        title: 'Status report consolidado',
        body: 'Lunes a las 7am tienes un PPT y un correo en tu bandeja con avance, riesgos top-5, presupuesto y decisiones pendientes. Listo para tu comité de las 9am.'
      },
      {
        title: 'Minutas con decisiones trazables',
        body: 'El agente toma la transcripción del comité, separa decisión de discusión, asigna responsables y fechas, y publica la minuta firmada por los asistentes.'
      },
      {
        title: 'Monitor de dependencias',
        body: 'Cruza tu cronograma con los compromisos de proveedores. Cuando una dependencia se desliza, te avisa antes de que afecte la ruta crítica.'
      },
      {
        title: 'Asistente de comité de cambios',
        body: 'Recibe la solicitud de cambio, evalúa impacto en alcance/costo/cronograma, propone aprobación condicional y prepara el acta para tu firma.'
      }
    ]
  },
  uiPreview: {
    eyebrow: 'Vista del producto · en construcción',
    title: 'Así te conversas con el Agente Coordinador PMO',
    lead: 'Mockup de la interfaz web del producto. Una sola conversación con el Agente Coordinador PMO; ocho agentes trabajando detrás; dashboard que se actualiza solo. Preview pre-Demo 1 — las pantallas reales llegan post-prueba con cliente.',
    labels: {
      browser: 'app.pmoforge.ai · proyecto · LATAM',
      sidebarProjects: 'PROYECTOS',
      sidebarViews: 'VISTAS',
      sidebarOps: 'CAPA OPERATIVA',
      chatHeader: 'Agente Coordinador PMO · LATAM',
      chatSub: 'único interlocutor · memoria viva · 8 agentes detrás',
      panelHeader: 'SALUD DEL PROYECTO',
      kpiBlock: 'CPI · SPI · EAC',
      kpiCaption: 'EAC USD 1.2M · +3% sobre línea base',
      progress: 'AVANCE vs LÍNEA BASE',
      progressCaption: 'avance real · línea base aprobada',
      risks: 'TOP RIESGOS · auditados',
      nextArtifacts: 'PRÓXIMOS ARTEFACTOS',
      stealth: 'todo auditado · cero alucinaciones aritméticas',
      placeholder: 'Pregunta o instruye al Agente Coordinador PMO…',
      badge: 'EN CONSTRUCCIÓN'
    },
    sidebar: {
      activeProject: 'LATAM',
      otherProjects: ['Migración BSS', 'Automatización IA · tablero de issues']
    },
    chat: {
      botName: 'Agente Coordinador PMO',
      bot1: [
        'Buenos días Alfredo. El status semanal está listo. CPI 1.04, SPI 0.97.',
        'El Auditor marcó la minuta del jueves para revisión: falta firma del sponsor.'
      ],
      user1: '¿Qué riesgos cambiaron desde el último corte?',
      bot2: [
        'Tres cambios. Riesgos consultó al Auditor:',
        '• R-07 “Dependencia con proveedor Y” → impacto alto (era medio).',
        '• R-11 “Rotación de equipo” → cerrado (mitigado por contratación de Z).',
        '• R-14 NUEVO “Cambio regulatorio Ley 1581” → propuesto por Onboarder.',
        '¿Te paso el detalle al comité o quieres revisarlo aquí?'
      ],
      user2: 'Aquí. Y prepara la actualización del RAID.',
      typing: 'Agente Coordinador PMO está consultando a Riesgos + Dependencias…',
      progressLabel: '→ progreso al 77%',
      progressPercent: 77
    }
  },
  founder: {
    eyebrow: 'Quién está detrás',
    title: 'Dos décadas entregando proyectos. Ahora forjando la PMO del futuro.',
    body:
      'Soy Alfredo Contreras. He liderado entregas en Telco (BSS), Oil & Gas y Gobierno con presupuestos anuales superiores a USD 10M. PMOforge nace de mi propia frustración como Technical Owner: necesitaba un copiloto que entendiera el lenguaje del PMI y respetara la cadencia ágil. Como no existía, lo estoy construyendo.',
    photoAlt: 'Retrato de Alfredo Contreras, fundador de PMOforge',
    cvLink: 'Ver mi hoja de vida completa',
    cvUrl: 'https://cv-alfredo-contreras.vercel.app/'
  },
  waitlist: {
    eyebrow: 'Acceso anticipado',
    title: 'Sumate a la lista de espera',
    subtitle:
      'Estamos eligiendo a los primeros 10 PMPs que quieran co-crear PMOforge. Acceso preferente a precios de fundador y sesiones 1-a-1 conmigo durante el piloto.',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'tu@correo.com',
    rolePlaceholder: 'Tu rol (PMP, PMO, Director IT…)',
    cta: 'Sumarme',
    privacy: 'Tu correo solo se usa para notificarte el lanzamiento. Sin spam.',
    or: 'o si prefieres conversar primero',
    bookCall: 'Agenda una llamada de 30 min'
  },
  footer: {
    tagline: 'PMOforge · Forjando el PMO del futuro',
    builtBy: 'Construido por Alfredo Contreras · 2026',
    cv: 'Mi CV',
    contact: 'Contacto'
  }
};

const en: typeof es = {
  meta: {
    title: 'PMOforge — Forge your PMO with hierarchical AI agents',
    description:
      'PMOforge equips PMO Directors and IT Project Managers with a team of hierarchical AI agents: persistent project memory, automatic artifact auditing, and EVM metrics with mathematical determinism. PMI/SAFe-compliant, tailored to the level of governance your organization demands.'
  },
  nav: {
    problem: 'The problem',
    solution: 'The solution',
    value: 'Why PMOforge',
    competitive: 'Differentiator',
    security: 'Security',
    vision: 'Vision',
    useCases: 'Use cases',
    preview: 'Product preview',
    founder: 'Founder',
    waitlist: 'Waitlist'
  },
  hero: {
    eyebrow: 'Coming soon · Early access',
    title: 'Forge your PMO with AI agents that actually execute',
    subtitle:
      'PMOforge equips the IT Project Manager with a team of hierarchical AI agents that automate governance, keep PMI/SAFe artifacts alive, and amplify decision-making — with ~50% less iteration time and no change to your culture.',
    ctaPrimary: 'Join the waitlist',
    ctaSecondary: 'Let’s talk',
    graph: {
      pmBubbleLine1: 'Roles such as PM, PMO Director, CTO or CEO talk to the PMO Coordinator Agent.',
      pmBubbleLine2: "The Coordinator tailors views and functions to each role's profile.",
      coordinator: 'PMO Coordinator Agent',
      coordinatorRole: 'supervises the PMO',
      layerLabel: 'Multi-agent operational layer',
      board: 'Shared board',
      boardSub: 'asynchronous events',
      agents: {
        onboarder: 'Onboarder',
        scope: 'Scope',
        schedule: 'Schedule',
        evm: 'EVM',
        risks: 'Risks',
        minutes: 'Minutes',
        auditor: 'Auditor',
        repo: 'Repository'
      },
      dashboardLabel: 'Executive dashboard',
      artifactsLabel: 'PMO artifacts',
      artifacts: {
        status: 'Status',
        raid: 'RAID',
        minute: 'Minute',
        schedule: 'Schedule',
        evm: 'EVM',
        committee: '→ committee'
      }
    }
  },
  problem: {
    eyebrow: 'The problem',
    title: 'Senior IT PMs spend 30–40% of their time on the administrative load, not on deciding',
    bullets: [
      {
        title: 'Status reports that age badly',
        body: 'Every Monday starts with three hours copy-pasting between Jira/Azure DevOps, Excel, and PowerPoint. By the time you reach the committee, the data is already stale.'
      },
      {
        title: 'RAID logs nobody audits',
        body: 'Risks, assumptions, dependencies and issues written at project start that nobody revisits — until the risk materializes.'
      },
      {
        title: 'Governance vs Agility: the friction that kills value',
        body: 'Tightening PMI/SAFe bureaucratizes the process and stalls incremental delivery; loosening it restores pace but loses institutional visibility. PMOforge removes the disconnect: it automates methodological compliance so the team focuses on iterating and injecting real value every cycle.'
      },
      {
        title: 'Decisions without traceability',
        body: 'The change committee minute lives in someone’s inbox. Three weeks later nobody remembers who approved what, or why.'
      }
    ],
    closer:
      'AI is not here to replace the PM. It is here to free them from the “poor-man” role — the figure who carries minutes, status reports, committees, dependencies, and vendors until there is no time left to decide.'
  },
  solution: {
    eyebrow: 'The solution',
    title: 'A hierarchy of AI agents working with you, not for you',
    intro:
      'PMOforge orchestrates a team of specialized agents with chain-of-command and supervision: one Coordinator talks to you, eight operational agents execute in parallel on a shared board. Each agent has a specific mission, reports to the Coordinator, and the Coordinator reports to the PMP. Your strategy becomes the living compass of the PMO in execution — agents execute, document, and audit; you decide.',
    layers: [
      {
        name: 'Command Layer',
        role: 'Human PMP',
        description: 'Defines objectives, approves critical decisions, and reviews executive summaries. AI proposes, the human disposes.'
      },
      {
        name: 'Supervision Layer',
        role: 'Coordinator',
        description: 'Single point of contact with the PMP. Coordinates the eight operational agents, consolidates findings, escalates alerts, maintains the audit chain, and preserves project memory across sessions.'
      },
      {
        name: 'Operational Layer',
        role: 'Eight specialist agents',
        description: 'Eight operational agents running in parallel: Project Onboarding, Scope + Backlog, Schedule with critical path, Financial Health with EVM, Risks + Dependencies, Minutes + Status, Quality Auditor of artifacts, and Project Repository. Each with its own prompt, rubrics, and controlled source access.'
      }
    ],
    governance: {
      title: 'Customization by governance level',
      body: 'Configure how much documentation, checkpoints, and evidence your organization requires. PMOforge scales from "lean agile" to "strict PMI" without rewriting agents.'
    }
  },
  audience: {
    eyebrow: 'Who wins what',
    title: 'Two lenses — because the PM is not the one signing the contract',
    lead:
      'PMOforge solves two different problems at the same time. That is why both the operator and the approver defend it.',
    columns: [
      {
        label: 'PM lens',
        sub: 'the one running the project day to day',
        items: [
          { k: 'Quality of life', v: 'no more “poor-man” role — agents carry the admin weight.' },
          { k: 'Time saved', v: 'the daily 90 minutes trapped in status, minutes, and RAID.' },
          { k: 'Better decisions', v: 'dashboards and risks arrive audited, not guessed.' },
          { k: 'Institutional backup', v: 'risks are reported by the system — you are not alone defending them.' }
        ]
      },
      {
        label: 'Buyer lens',
        sub: 'PMO Director · IT Director · Sponsor',
        items: [
          { k: 'Safety and control', v: 'visibility across the portfolio, not just one project.' },
          { k: 'Immutable traceability', v: 'PMI compliance and governance with an audit trail from day 0.' },
          { k: 'Centralized data', v: 'lessons, vendors, and artifacts in a single repository.' },
          { k: 'Measurable ROI', v: '70% of the value goes to the customer — the numbers close themselves.' }
        ]
      }
    ],
    closer: 'The PM does not sign the contract, but without their buy-in nobody buys. Both lenses matter.'
  },
  valueProp: {
    eyebrow: 'Why PMOforge',
    title: 'Four engineering promises your PMO can audit',
    lead: 'PMOforge is built around four technical guarantees that translate into operational trust for the steering committee. We do not ask you to believe; we hand you how to verify.',
    pillars: [
      {
        iconKey: 'memory',
        label: 'Memory',
        title: 'Persistent project memory',
        claim: 'The system remembers what was learned across the project lifecycle.',
        body: 'Decisions, assumptions, lessons, and context are preserved between sessions. You do not start from scratch every Monday — memory lives in the system, not in the head of the PM who happened to be out that week.'
      },
      {
        iconKey: 'audit',
        label: 'Audit',
        title: 'Automatic artifact auditing',
        claim: 'An independent agent validates every deliverable against rubrics your organization can configure.',
        body: 'Quality criteria are not opaque. When an artifact is rejected you know exactly why — and you can edit the rubric if it does not match your culture. Transparent box, not black box.'
      },
      {
        iconKey: 'evm',
        label: 'EVM',
        title: 'Mathematical determinism in EVM and critical path',
        claim: 'CPI, SPI, CV, SV, EAC, ETC, and CPM are computed with verifiable code, not by an LLM guessing numbers.',
        body: 'Critical financial and schedule metrics are computed in deterministic Python any auditor can replicate. Zero arithmetic hallucinations in what reaches the sponsor.'
      },
      {
        iconKey: 'resilience',
        label: 'Resilience',
        title: 'Failure recovery without manual intervention',
        claim: 'A watchdog service detects hangs, errors, or stalls and recovers or escalates them automatically.',
        body: 'The system does not sit waiting for you to notice the problem. When an agent fails, it retries with a fallback or notifies the PM with a proposed action — before the committee finds out.'
      }
    ],
    closer: 'This is what a senior PMO gets when they pick PMOforge: serious software engineering behind the AI, not a pretty chatbot. Audit it, do not just take our word for it.'
  },
  competitive: {
    eyebrow: 'Differentiator',
    title: 'PMOforge is a new category, not an increment over what exists',
    lead: 'Vertical copilots (Rovo, Copilot, Asana AI) matured through 2026 and closed several classic gaps. Direct conversational AI (ChatGPT, Claude, Gemini) forces the PM to upload context every time. PMOforge differentiates through the intersection of five conditions no one covers simultaneously: a single agent fronting the PM, EVM and CPM with verifiable deterministic Python, an LLM Auditor with configurable rubrics, an immutable PMI baseline, and real vertical IT focus without lock-in to a single ecosystem.',
    columns: ['PMOforge', 'Atlassian Rovo', 'MS Copilot for Project', 'Asana AI Teammates'],
    rows: [
      {
        axis: 'Multi-agent coordination with real parallelism',
        values: [
          'Yes — team of 9 agents with hierarchy, supervision, and shared memory',
          'Hierarchical multi-agent (Hybrid Orchestrator + Rovo Studio); no LLM Auditor by rubric, no formal PMI baseline of the project',
          'Coordination via external control plane (Agent 365 + A2A); EVM only in Project Pro desktop with Plan 5 EOL May 2026 and Project Online retiring Sep 2026',
          '21 pre-built teammates with cross-project memory on Work Graph; the PM picks which teammate to call (no single orchestrating agent)'
        ]
      },
      {
        axis: 'EVM with mathematical determinism (CPI/SPI/EAC/ETC)',
        values: ['Yes, verifiable Python computation', 'No', 'Only in Project Pro desktop, no determinism guarantee', 'No']
      },
      {
        axis: 'LLM artifact auditor with configurable rubrics',
        values: ['Yes, dedicated agent', 'No (Rovo Studio audits execution, not content)', 'No (Agent 365 governs agents, does not judge artifacts)', 'No (Compliance Specialist is not a mandatory layer)']
      },
      {
        axis: 'Immutable baselines with formal PMI approval flow',
        values: ['Yes, PMI governance integrated', 'No for the project baseline', 'Via MS Project, no native approval traceability', 'No']
      },
      {
        axis: 'Vertical focus on IT PM (not a side feature)',
        values: [
          'Single product, single use case',
          'Generalist (dev, IT, business)',
          'Generalist (knowledge worker)',
          'Generalist (collaborative PM)'
        ]
      }
    ],
    note: 'Comparison based on public documentation of each product as of May 2026 (Atlassian Team \'26, Microsoft Build, Asana Work Innovation Summit). PMOforge is in a pre-MVP phase; capabilities listed correspond to the architecture closed and validated on 2026-05-19.',
    ppm: {
      title: 'What about enterprise PPM?',
      body: 'Planview-Sciforma, ServiceNow SPM, and Planisware bring enterprise governance and native EVM, but their agentic layer is just maturing and a typical pilot runs 12 to 18 months. PMOforge delivers value in a short pilot with real vertical IT focus, no PPM lock-in, and an LLM Auditor by rubric that the PPM category does not offer yet.',
      adjacent: 'The closest competitor by real vertical IT focus is Forecast.app, but it operates in Professional Services Automation, not PMO governance with an immutable baseline.'
    }
  },
  security: {
    eyebrow: 'Security and governance',
    title: 'Security by design, not as an add-on feature',
    lead: 'The Coordinator operates under a declarative contract: what it can do is enumerated and what it cannot do is forbidden by structure, not just by instruction. Multi-tenant with logical isolation, defenses against prompt injection, and an immutable audit log from day zero.',
    pillars: [
      {
        title: 'Coordinator contract',
        body: 'Bounded purpose: orchestrate 8 agents on the active project. Whitelist of authorized capabilities and explicit blacklist: no open web, no arbitrary code outside the sandbox, no cross-tenant access, no bypass of the Quality Auditor, no bypass of the re-baseline flow.'
      },
      {
        title: '6-level instruction hierarchy',
        body: 'System prompt > tenant config > project config > PM messages > internal agent artifacts > ingested content (client docs, RFPs, minutes). A PDF uploaded to the Repository can never instruct the Coordinator — it is treated as data, never as a command.'
      },
      {
        title: 'Prompt injection defenses',
        body: 'Purpose classifier ahead of the Coordinator that filters out-of-contract requests; LLM-as-Judge on ingested content to catch embedded instructions; output filter before delivery to the PM; audit log of every out-of-scope attempt.'
      },
      {
        title: 'Multi-tenant and multi-project isolation',
        body: 'Default deny on every access. Zero context across projects. Persistent memory keyed by (tenant, project, user) — never by user alone. Vector embeddings segregated per project, not only per tenant.'
      },
      {
        title: 'Immutable auditability',
        body: 'Append-only log of artifacts, Quality Auditor decisions, Coordinator prompts, and security events. Minimum retention of one year, configurable per tenant. Access restricted to the human Auditor + PMO Director.'
      }
    ],
    closer: 'Full security model document available for PMO Directors, CISOs, and enterprise buyers.',
    cta: 'Book a 30-min call to review it',
    note: 'Security model v0.1 declarative baseline (2026-05-21). The expanded v1.0 includes implementable design, RBAC × project matrix, OWASP LLM Top 10 mapping, and pre-pilot adversarial testing plan.'
  },
  vision: {
    eyebrow: 'Where we are going',
    title: 'A platform that scales beyond IT',
    lead: 'PMOforge is born in IT project management, but the pattern —single Coordinator + operational agents + shared board + Auditor with rubrics + persistent memory + mathematical determinism— is domain-agnostic. Today\'s product is the first vertical; the platform is what is being forged.',
    horizons: [
      {
        label: 'Horizon 1',
        period: '0 to 12 months',
        title: 'Commercial vertical IT MVP',
        body: 'Internal PMOs in IT, telco, and tech consulting. Pricing validation with first customers, real telemetry of use, productive pilot closed.'
      },
      {
        label: 'Horizon 2',
        period: '12 to 24 months',
        title: 'Expansion to project-executing industries',
        body: 'Opening to non-software sectors with a common PMI framework: construction and infrastructure, manufacturing, energy, public sector, banking, healthcare, education. Packaged sector templates and rubrics; professional services absorbs customization.'
      },
      {
        label: 'Horizon 3',
        period: '24 to 36 months',
        title: 'Multi-portfolio platform',
        body: 'Executive PMO view across multiple portfolios (strategy → portfolio → program → project). Integration with OKRs and Balanced Scorecard. Marketplace of sector plugins. Native multimodal models. Assisted autonomous mode with human escalation on Red Flags.'
      }
    ],
    roadmap: {
      title: 'Visible roadmap',
      lead: 'Five milestones from here to year-end.',
      items: [
        { phase: 'May 2026', body: 'Pre-MVP in execution · architecture closed · first agents in POC.' },
        { phase: 'June 2026', body: 'Functional demo with reproducible happy path · 5-6 coordinated agents.' },
        { phase: 'Jul–Aug 2026', body: 'Paid controlled pilot with first customer · full cycle with recovered failure.' },
        { phase: 'Sep–Oct 2026', body: 'Real integrations · formal re-baseline approval flow · sync with corporate repositories.' },
        { phase: 'Q4 2026', body: 'Controlled commercial launch in multi-tenant SaaS with early-adopter customers.' }
      ]
    },
    closer: 'Naming, domain registration, and brand architecture of sibling products are subject to ongoing trademark check.'
  },
  useCases: {
    eyebrow: 'Use cases',
    title: 'Five automations that give you back hours each week',
    items: [
      {
        title: 'Weekly RAID auditor',
        body: 'Every Friday, an agent reviews the RAID log, contrasts it with actual progress, proposes probability/impact changes, and drafts the summary for the committee.'
      },
      {
        title: 'Consolidated status report',
        body: 'Mondays at 7am you have a PPT and an email in your inbox: progress, top-5 risks, budget, and pending decisions. Ready for your 9am committee.'
      },
      {
        title: 'Traceable decision minutes',
        body: 'The agent takes the committee transcript, separates decision from discussion, assigns owners and dates, and publishes the minute signed by attendees.'
      },
      {
        title: 'Dependency monitor',
        body: 'Cross-checks your schedule against vendor commitments. When a dependency slips, you’re alerted before it impacts the critical path.'
      },
      {
        title: 'Change committee assistant',
        body: 'Receives the change request, assesses impact on scope/cost/schedule, proposes conditional approval, and prepares the minute for your signature.'
      }
    ]
  },
  uiPreview: {
    eyebrow: 'Product preview · under construction',
    title: 'This is how you talk to the PMO Coordinator Agent',
    lead: 'Mockup of the product web interface. A single conversation with the PMO Coordinator Agent; eight agents working behind; a dashboard that updates itself. Pre-Demo 1 preview — the real screens land after the first customer trial.',
    labels: {
      browser: 'app.pmoforge.ai · project · LATAM',
      sidebarProjects: 'PROJECTS',
      sidebarViews: 'VIEWS',
      sidebarOps: 'OPERATIONAL LAYER',
      chatHeader: 'PMO Coordinator Agent · LATAM',
      chatSub: 'single interlocutor · live memory · 8 agents behind',
      panelHeader: 'PROJECT HEALTH',
      kpiBlock: 'CPI · SPI · EAC',
      kpiCaption: 'EAC USD 1.2M · +3% over baseline',
      progress: 'PROGRESS vs BASELINE',
      progressCaption: 'actual progress · approved baseline',
      risks: 'TOP RISKS · audited',
      nextArtifacts: 'NEXT ARTIFACTS',
      stealth: 'all audited · zero arithmetic hallucinations',
      placeholder: 'Ask or instruct the PMO Coordinator Agent…',
      badge: 'UNDER CONSTRUCTION'
    },
    sidebar: {
      activeProject: 'LATAM',
      otherProjects: ['BSS Migration', 'AI Automation · issues board']
    },
    chat: {
      botName: 'PMO Coordinator Agent',
      bot1: [
        'Good morning Alfredo. Weekly status is ready. CPI 1.04, SPI 0.97.',
        'The Auditor flagged Thursday’s minute for review: sponsor signature missing.'
      ],
      user1: 'Which risks changed since the last cut-off?',
      bot2: [
        'Three changes. Risks consulted the Auditor:',
        '• R-07 “Vendor Y dependency” → impact now high (was medium).',
        '• R-11 “Team rotation” → closed (mitigated by hiring Z).',
        '• R-14 NEW “Regulatory change, Law 1581” → proposed by Onboarder.',
        'Should I push the detail to the committee or do you want to review it here?'
      ],
      user2: 'Here. And prepare the RAID update.',
      typing: 'PMO Coordinator Agent is consulting Risks + Dependencies…',
      progressLabel: '→ progress 77%',
      progressPercent: 77
    }
  },
  founder: {
    eyebrow: 'Who is behind this',
    title: 'Two decades delivering projects. Now forging the PMO of the future.',
    body:
      'I\'m Alfredo Contreras. I have led delivery in Telco (BSS), Oil & Gas, and Government, with annual budgets above USD 10M. PMOforge was born from my own frustration as a Technical Owner: I needed a copilot that understood PMI vocabulary and respected agile cadence. Since it didn\'t exist, I\'m building it.',
    photoAlt: 'Portrait of Alfredo Contreras, founder of PMOforge',
    cvLink: 'See my full résumé',
    cvUrl: 'https://cv-alfredo-contreras.vercel.app/en'
  },
  waitlist: {
    eyebrow: 'Early access',
    title: 'Join the waitlist',
    subtitle:
      'We are picking the first 10 PMPs who want to co-create PMOforge. Founder pricing and 1-on-1 sessions with me during the pilot.',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@email.com',
    rolePlaceholder: 'Your role (PMP, PMO, IT Director…)',
    cta: 'Count me in',
    privacy: 'Your email is only used to notify you of launch. No spam.',
    or: 'or if you prefer to talk first',
    bookCall: 'Book a 30-minute call'
  },
  footer: {
    tagline: 'PMOforge · Forging the PMO of the future',
    builtBy: 'Built by Alfredo Contreras · 2026',
    cv: 'My CV',
    contact: 'Contact'
  }
};

export function getContent(lang: Lang) {
  return lang === 'en' ? en : es;
}

export const contactEmail = 'alfredoe.contreras@gmail.com';
export const calendlyUrl = 'https://calendly.com/alfredoe-contreras/30min';
