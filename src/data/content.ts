// =====================================================================
// Contenido bilingüe (ES/EN) de la landing PMOforge
// Para actualizar: editar este archivo. Los componentes consumen getContent(lang)
// =====================================================================

export type Lang = 'es' | 'en';

const es = {
  meta: {
    title: 'PMOforge — Forja tu PMO con agentes IA jerárquicos',
    description:
      'PMOforge ayuda a Gerentes de Proyectos IT a aumentar su capacidad de decisión con agentes IA jerárquicos sobre OpenClaw. Cumplimiento PMI/SAFe ajustado al nivel de gobierno que tu organización demanda.'
  },
  nav: {
    problem: 'El problema',
    solution: 'La solución',
    useCases: 'Casos de uso',
    founder: 'Fundador',
    waitlist: 'Lista de espera'
  },
  hero: {
    eyebrow: 'Próximamente · Acceso anticipado',
    title: 'Forja tu PMO con agentes IA que sí ejecutan',
    subtitle:
      'PMOforge equipa al Gerente de Proyectos IT con un equipo de agentes IA jerárquicos que automatizan la gobernanza, mantienen vivos los artefactos PMI/SAFe y aumentan la capacidad de decisión sin cambiar tu cultura.',
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
      'PMOforge orquesta agentes especializados con cadena de mando y supervisión sobre OpenClaw. Cada agente tiene una misión concreta, reporta a un supervisor, y el supervisor reporta al PMP. Tú decides; los agentes ejecutan, documentan y auditan.',
    layers: [
      {
        name: 'Capa de Mando',
        role: 'PMP humano',
        description: 'Define objetivos, aprueba decisiones críticas y revisa resúmenes ejecutivos. La IA propone, el humano dispone.'
      },
      {
        name: 'Capa de Supervisión',
        role: 'Agente Supervisor',
        description: 'Coordina los agentes operativos, consolida hallazgos, escala alertas al PMP y mantiene la cadena de auditoría.'
      },
      {
        name: 'Capa Operativa',
        role: 'Agentes especialistas',
        description: 'Auditor RAID, redactor de minutas, generador de status report, monitor de dependencias, asistente de comité de cambios. Cada uno con su prompt y su acceso controlado a las fuentes.'
      }
    ],
    governance: {
      title: 'Personalización por nivel de gobierno',
      body: 'Configura cuánta documentación, cuántos checkpoints y cuánta evidencia exige tu organización. PMOforge se adapta de "ágil ligero" a "PMI estricto" sin reescribir agentes.'
    }
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
      'PMOforge equips IT Project Managers with hierarchical AI agents on OpenClaw to automate governance and increase decision-making capacity. PMI/SAFe-compliant, tailored to the level of governance your organization demands.'
  },
  nav: {
    problem: 'The problem',
    solution: 'The solution',
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
      'PMOforge orchestrates specialized agents with chain-of-command and supervision on top of OpenClaw. Each agent has a specific mission, reports to a supervisor, and the supervisor reports to the PMP. You decide; the agents execute, document, and audit.',
    layers: [
      {
        name: 'Command Layer',
        role: 'Human PMP',
        description: 'Defines objectives, approves critical decisions, and reviews executive summaries. AI proposes, the human disposes.'
      },
      {
        name: 'Supervision Layer',
        role: 'Supervisor Agent',
        description: 'Coordinates operational agents, consolidates findings, escalates alerts to the PMP, and maintains the audit chain.'
      },
      {
        name: 'Operational Layer',
        role: 'Specialist agents',
        description: 'RAID auditor, minutes writer, status report generator, dependency monitor, change committee assistant. Each with its own prompt and controlled source access.'
      }
    ],
    governance: {
      title: 'Customization by governance level',
      body: 'Configure how much documentation, checkpoints, and evidence your organization requires. PMOforge scales from "lean agile" to "strict PMI" without rewriting agents.'
    }
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
