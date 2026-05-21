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
    competitive: 'Comparativa',
    useCases: 'Casos de uso',
    founder: 'Fundador',
    waitlist: 'Lista de espera'
  },
  hero: {
    eyebrow: 'Próximamente · Acceso anticipado',
    title: 'Forja tu PMO con agentes IA que sí ejecutan',
    subtitle:
      'PMOforge equipa al Gerente de Proyectos de TI con un equipo de agentes IA jerárquicos que automatizan la gobernanza, mantienen vivos los artefactos PMI/SAFe y aumentan la capacidad de decisión sin cambiar tu cultura.',
    ctaPrimary: 'Sumarme a la lista de espera',
    ctaSecondary: 'Hablemos'
  },
  problem: {
    eyebrow: 'El problema',
    title: 'El PMP moderno gasta el 60% de su tiempo en mantener artefactos vivos, no en decidir',
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
        title: 'Frameworks PMI/SAFe rígidos',
        body: 'O cumples a rajatabla y matas la velocidad, o flexibilizas y pierdes auditabilidad. Tu organización demanda ambas cosas a la vez.'
      },
      {
        title: 'Decisiones sin trazabilidad',
        body: 'La minuta del comité de cambios queda en el correo. Tres semanas después nadie recuerda quién aprobó qué, ni con qué criterio.'
      }
    ]
  },
  solution: {
    eyebrow: 'La solución',
    title: 'Una jerarquía de agentes IA que trabajan a tu lado, no en tu lugar',
    intro:
      'PMOforge orquesta un equipo de agentes especializados con cadena de mando y supervisión: un Coordinador conversa contigo, ocho agentes operacionales ejecutan en paralelo. Cada agente tiene una misión concreta, reporta al Coordinador, y el Coordinador reporta al PMP. Tú decides; los agentes ejecutan, documentan y auditan.',
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
  valueProp: {
    eyebrow: 'Por qué PMOforge',
    title: 'Cuatro promesas de ingeniería que tu PMO puede auditar',
    lead: 'PMOforge se construye con cuatro garantías técnicas que se traducen en confianza operativa para el comité directivo. No pedimos que creas; entregamos cómo verificarlo.',
    pillars: [
      {
        icon: 'M',
        label: 'Memoria',
        title: 'Memoria persistente del proyecto',
        claim: 'El sistema recuerda lo aprendido a lo largo del ciclo de vida del proyecto.',
        body: 'Decisiones, supuestos, lecciones y contexto se preservan entre sesiones. No empiezas cada lunes desde cero — la memoria vive en el sistema, no en la cabeza del PM que se ausentó.'
      },
      {
        icon: 'A',
        label: 'Auditoría',
        title: 'Auditoría automática de cada artefacto',
        claim: 'Un agente independiente valida cada entregable contra rúbricas configurables por tu organización.',
        body: 'El criterio de calidad no es opaco. Cuando un artefacto se rechaza, sabes exactamente por qué — y puedes editar la rúbrica si el criterio no encaja con tu cultura. Caja transparente, no caja negra.'
      },
      {
        icon: '∑',
        label: 'EVM',
        title: 'Determinismo matemático en EVM y ruta crítica',
        claim: 'CPI, SPI, CV, SV, EAC, ETC y CPM se calculan con código verificable, no con un LLM intuyendo cifras.',
        body: 'Las métricas financieras y de cronograma críticas se computan con Python determinista que un auditor puede replicar. Cero alucinaciones aritméticas en lo que llega al sponsor.'
      },
      {
        icon: 'R',
        label: 'Resiliencia',
        title: 'Recuperación ante fallos sin intervención manual',
        claim: 'Un servicio de vigilancia detecta bloqueos, errores o tiempos muertos y los recupera o escala automáticamente.',
        body: 'El sistema no se queda colgado esperando que tú notes el problema. Cuando un agente falla, se reintenta con alternativa o se notifica al PM con propuesta de acción — antes de que el comité se entere.'
      }
    ],
    closer: 'Esto es lo que recibe un PMO sénior cuando elige PMOforge: ingeniería de software seria detrás de la IA, no un chatbot bonito. Audítalo, no nos creas.'
  },
  competitive: {
    eyebrow: 'Cómo te diferencias',
    title: 'PMOforge frente a las opciones que ya conoces',
    lead: 'Las suites generalistas con IA agregada cubren parcialmente lo que un PMO sénior necesita. PMOforge se construye vertical para el PM de TI, no como feature lateral de una suite de productividad.',
    columns: ['PMOforge', 'Atlassian Rovo', 'MS Copilot for Project', 'Asana AI Teammates'],
    rows: [
      {
        axis: 'Coordinación multiagente con paralelismo real',
        values: [
          'Sí — equipo de 9 agentes con jerarquía, supervisión y memoria compartida',
          'Asistente único conversacional sobre Jira/Confluence',
          'Copilots aislados por app (Project, Teams, Outlook) sin coordinación entre sí',
          'Teammates individuales por tarea, sin jerarquía ni memoria cross-proyecto'
        ]
      },
      {
        axis: 'EVM con determinismo matemático (CPI/SPI/EAC/ETC)',
        values: ['Sí, cálculo verificable', 'No', 'Parcial vía MS Project, sin garantía determinista', 'No']
      },
      {
        axis: 'Auditor automático de artefactos con rúbricas configurables',
        values: ['Sí, agente dedicado', 'No', 'No', 'No']
      },
      {
        axis: 'Líneas base inmutables con flujo de aprobación PMI formal',
        values: ['Sí, gobierno PMI integrado', 'No', 'Vía MS Project, sin trazabilidad de aprobación nativa', 'No']
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
    note: 'Comparativa basada en documentación pública de cada producto a mayo de 2026. PMOforge se encuentra en fase pre-MVP; las capacidades listadas corresponden a la arquitectura cerrada y validada el 2026-05-19.'
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
  founder: {
    eyebrow: 'Quién está detrás',
    title: 'Construido por un PMP con 24 años entregando',
    body:
      'Soy Alfredo Contreras. PMP desde enero de 2010, MBA, MIT xPRO en AI Product Design. He liderado entregas en Telco (BSS), Oil & Gas y Gobierno con presupuestos anuales superiores a USD 10M. PMOforge nace de mi propia frustración como Technical Owner: necesitaba un copiloto que entendiera el lenguaje del PMI y respetara la cadencia ágil. Como no existía, lo estoy construyendo.',
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
    competitive: 'Comparison',
    useCases: 'Use cases',
    founder: 'Founder',
    waitlist: 'Waitlist'
  },
  hero: {
    eyebrow: 'Coming soon · Early access',
    title: 'Forge your PMO with AI agents that actually execute',
    subtitle:
      'PMOforge equips the IT Project Manager with a team of hierarchical AI agents that automate governance, keep PMI/SAFe artifacts alive, and amplify decision-making — without changing your culture.',
    ctaPrimary: 'Join the waitlist',
    ctaSecondary: 'Let’s talk'
  },
  problem: {
    eyebrow: 'The problem',
    title: 'Modern PMPs spend 60% of their time keeping artifacts alive, not deciding',
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
        title: 'Rigid PMI/SAFe frameworks',
        body: 'Either you comply strictly and kill speed, or you bend the rules and lose auditability. Your organization demands both at once.'
      },
      {
        title: 'Decisions without traceability',
        body: 'The change committee minute lives in someone’s inbox. Three weeks later nobody remembers who approved what, or why.'
      }
    ]
  },
  solution: {
    eyebrow: 'The solution',
    title: 'A hierarchy of AI agents working with you, not for you',
    intro:
      'PMOforge orchestrates a team of specialized agents with chain-of-command and supervision: one Coordinator talks to you, eight operational agents execute in parallel. Each agent has a specific mission, reports to the Coordinator, and the Coordinator reports to the PMP. You decide; the agents execute, document, and audit.',
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
  valueProp: {
    eyebrow: 'Why PMOforge',
    title: 'Four engineering promises your PMO can audit',
    lead: 'PMOforge is built around four technical guarantees that translate into operational trust for the steering committee. We do not ask you to believe; we hand you how to verify.',
    pillars: [
      {
        icon: 'M',
        label: 'Memory',
        title: 'Persistent project memory',
        claim: 'The system remembers what was learned across the project lifecycle.',
        body: 'Decisions, assumptions, lessons, and context are preserved between sessions. You do not start from scratch every Monday — memory lives in the system, not in the head of the PM who happened to be out that week.'
      },
      {
        icon: 'A',
        label: 'Audit',
        title: 'Automatic artifact auditing',
        claim: 'An independent agent validates every deliverable against rubrics your organization can configure.',
        body: 'Quality criteria are not opaque. When an artifact is rejected you know exactly why — and you can edit the rubric if it does not match your culture. Transparent box, not black box.'
      },
      {
        icon: '∑',
        label: 'EVM',
        title: 'Mathematical determinism in EVM and critical path',
        claim: 'CPI, SPI, CV, SV, EAC, ETC, and CPM are computed with verifiable code, not by an LLM guessing numbers.',
        body: 'Critical financial and schedule metrics are computed in deterministic Python any auditor can replicate. Zero arithmetic hallucinations in what reaches the sponsor.'
      },
      {
        icon: 'R',
        label: 'Resilience',
        title: 'Failure recovery without manual intervention',
        claim: 'A watchdog service detects hangs, errors, or stalls and recovers or escalates them automatically.',
        body: 'The system does not sit waiting for you to notice the problem. When an agent fails, it retries with a fallback or notifies the PM with a proposed action — before the committee finds out.'
      }
    ],
    closer: 'This is what a senior PMO gets when they pick PMOforge: serious software engineering behind the AI, not a pretty chatbot. Audit it, do not just take our word for it.'
  },
  competitive: {
    eyebrow: 'How you differentiate',
    title: 'PMOforge vs. the options you already know',
    lead: 'General-purpose suites with AI tacked on partially cover what a senior PMO needs. PMOforge is built vertical for the IT PM, not as a side feature of a productivity suite.',
    columns: ['PMOforge', 'Atlassian Rovo', 'MS Copilot for Project', 'Asana AI Teammates'],
    rows: [
      {
        axis: 'Multi-agent coordination with real parallelism',
        values: [
          'Yes — team of 9 agents with hierarchy, supervision, and shared memory',
          'Single conversational assistant on top of Jira/Confluence',
          'Isolated copilots per app (Project, Teams, Outlook) with no cross-coordination',
          'Individual teammates per task, no hierarchy or cross-project memory'
        ]
      },
      {
        axis: 'EVM with mathematical determinism (CPI/SPI/EAC/ETC)',
        values: ['Yes, verifiable computation', 'No', 'Partial via MS Project, no determinism guarantee', 'No']
      },
      {
        axis: 'Automatic artifact auditor with configurable rubrics',
        values: ['Yes, dedicated agent', 'No', 'No', 'No']
      },
      {
        axis: 'Immutable baselines with formal PMI approval flow',
        values: ['Yes, PMI governance integrated', 'No', 'Via MS Project, no native approval traceability', 'No']
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
    note: 'Comparison based on public documentation of each product as of May 2026. PMOforge is in a pre-MVP phase; capabilities listed correspond to the architecture closed and validated on 2026-05-19.'
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
  founder: {
    eyebrow: 'Who is behind this',
    title: 'Built by a PMP with 24 years of delivery',
    body:
      'I’m Alfredo Contreras. PMP since January 2010, MBA, MIT xPRO in AI Product Design. I have led delivery in Telco (BSS), Oil & Gas, and Government, with annual budgets above USD 10M. PMOforge was born from my own frustration as a Technical Owner: I needed a copilot that understood PMI vocabulary and respected agile cadence. Since it didn’t exist, I’m building it.',
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
