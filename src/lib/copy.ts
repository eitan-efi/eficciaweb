// ─── Copy del sitio principal ──────────────────────────────────────────────────
// Fuente única de verdad para todo el texto del sitio.
// Los componentes importan desde acá — nada hardcodeado en TSX.

export const COPY = {

  // ── Navbar ──────────────────────────────────────────────────────────────────
  navbar: {
    cta: "Diagnosticar mi empresa",
  },

  // ── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    badge: "Diagnóstico de IA para PYMEs",
    headline: "¿Cuánto le cuesta a tu empresa\nno tener IA?",
    subheadline:
      "Responde 4 preguntas y te decimos exactamente qué automatizar y qué resultado esperar. Diagnóstico personalizado, gratis.",
    cta_primary: "Comenzar mi diagnóstico",
    cta_secondary: "Ver cómo funciona",
  },

  // ── ProofStrip ───────────────────────────────────────────────────────────────
  proof: {
    label: "Ya confían en Eficcia",
    stats: [
      { value: "15+", label: "empresas diagnosticadas" },
      { value: "2 min", label: "para obtener tu diagnóstico" },
      { value: "3x", label: "más conversiones con chatbot IA" },
    ],
  },

  // ── DiagnosisReveal ──────────────────────────────────────────────────────────
  diagnosisReveal: {
    badge: "Qué revela el diagnóstico",
    headline: "En 2 minutos sabes más\nque en una hora de reunión.",
    subheadline:
      "El diagnóstico no es un formulario. Es un análisis personalizado que identifica exactamente dónde está la oportunidad en tu empresa.",
    cards: [
      {
        numero: "01",
        titulo: "Tu cuello de botella principal",
        descripcion:
          "Identificamos el proceso que más tiempo y dinero te está costando hoy — el que tiene mayor impacto si se automatiza primero.",
      },
      {
        numero: "02",
        titulo: "Las horas que puedes recuperar",
        descripcion:
          "Te damos una estimación concreta: cuántas horas semanales recuperaría tu equipo con la automatización correcta para tu caso.",
      },
      {
        numero: "03",
        titulo: "La solución exacta para tu empresa",
        descripcion:
          "No una lista genérica de servicios. La herramienta específica, el caso de uso específico, y el resultado esperado para tu rubro y tamaño.",
      },
    ],
    cta: "Comenzar mi diagnóstico",
  },

  // ── PainPoints ───────────────────────────────────────────────────────────────
  painPoints: {
    badge: "¿Te suena alguno de esto?",
    headline: "Si alguno aplica,\nhay un sistema que lo resuelve.",
    items: [
      "Clientes que preguntan y nadie responde a tiempo — o se van sin comprar",
      "Leads que llegan pero se enfrían porque el seguimiento es manual",
      "El equipo pierde horas en tareas repetitivas que no agregan valor",
      "Armas reportes a mano y cuando terminan ya son datos de ayer",
      "Sabes que hay procesos que podrían automatizarse, pero no sabes por dónde partir",
    ],
    cta: "Sí, quiero saber qué hacer",
  },

  // ── Outcomes ─────────────────────────────────────────────────────────────────
  outcomes: {
    badge: "Resultados reales",
    headline: "Lo que logran las empresas\nque implementan bien.",
    subheadline:
      "Sin promesas vagas. Estos son los resultados concretos que genera la IA implementada correctamente en PYMEs.",
    items: [
      {
        metrica: "3x",
        titulo: "más consultas atendidas",
        descripcion: "Sin contratar a nadie nuevo. El chatbot IA responde al instante, las 24 horas.",
      },
      {
        metrica: "80%",
        titulo: "menos tiempo en data entry",
        descripcion: "Documentos procesados automáticamente. Cero errores humanos, cero horas perdidas.",
      },
      {
        metrica: "15h",
        titulo: "semanales devueltas al equipo",
        descripcion: "Promedio de horas recuperadas cuando se automatizan las tareas administrativas principales.",
      },
      {
        metrica: "2x",
        titulo: "más oportunidades cerradas",
        descripcion: "Equipos de venta que automatizan el seguimiento cierran el doble con el mismo equipo.",
      },
      {
        metrica: "10 min",
        titulo: "para tener el reporte diario",
        descripcion: "Las métricas que necesitas llegan solas a tu WhatsApp o Slack. Sin armarlas a mano.",
      },
      {
        metrica: "Día 1",
        titulo: "de impacto visible",
        descripcion: "No proyectos de meses. Implementaciones que funcionan y se ven desde la primera semana.",
      },
    ],
  },

  // ── Process (reemplaza Consulting) ───────────────────────────────────────────
  process: {
    badge: "Cómo trabajamos",
    headline: "Tres pasos.\nNada más.",
    subheadline:
      "Sin auditorías interminables ni proyectos que nunca terminan. Diagnóstico claro, implementación real, resultados medibles.",
    steps: [
      {
        numero: "01",
        titulo: "Diagnóstico",
        descripcion:
          "Responde 4 preguntas. Analizamos tu caso y te decimos exactamente qué automatizar y qué resultado esperar.",
      },
      {
        numero: "02",
        titulo: "Implementación",
        descripcion:
          "Construimos e integramos el sistema en tus procesos reales. No necesitas tocar código ni entender la tecnología.",
      },
      {
        numero: "03",
        titulo: "Resultados",
        descripcion:
          "Medimos lo que funciona: tiempo ahorrado, leads capturados, ventas generadas. Si funciona, lo escalamos.",
      },
    ],
    cta: "Comenzar ahora",
  },

  // ── FinalCTA ──────────────────────────────────────────────────────────────────
  finalCta: {
    badge: "Es gratis",
    headline: "El diagnóstico es gratis.\nLos resultados son reales.",
    subheadline:
      "4 preguntas. 2 minutos. Al final sabes exactamente qué necesita tu empresa y qué resultado puede esperar.",
    cta_primary: "Comenzar mi diagnóstico",
    cta_secondary: "Prefiero hablar primero",
    cta_secondary_href: "https://calendly.com/eitan-eficcia/30min",
    nota: "Sin compromiso. Sin tarjeta de crédito. Solo claridad.",
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────────
  faq: {
    badge: "Preguntas frecuentes",
    headline: "Lo que suelen preguntar\nantes de empezar.",
    items: [
      {
        pregunta: "¿Cuánto cuesta el diagnóstico?",
        respuesta:
          "Es completamente gratis. Sin tarjeta de crédito, sin compromiso. Solo responde 4 preguntas y recibes un diagnóstico personalizado con la recomendación exacta para tu empresa.",
      },
      {
        pregunta: "¿Necesito herramientas o conocimientos técnicos previos?",
        respuesta:
          "No. No necesitas ninguna herramienta instalada ni saber de tecnología. Nosotros te mostramos qué usar y cómo integrarlo a tu operación actual desde cero.",
      },
      {
        pregunta: "¿Cuánto dura un proyecto de implementación?",
        respuesta:
          "Depende del caso. Un chatbot de atención al cliente puede estar funcionando en una semana. Automatizaciones de procesos internos o pipelines de ventas toman entre 3 y 4 semanas.",
      },
      {
        pregunta: "¿Cómo sé que esto funciona para mi rubro?",
        respuesta:
          "Hemos diagnosticado empresas de retail, salud, servicios profesionales, inmobiliarias y educación. El diagnóstico analiza tu caso puntual: rubro, tamaño y cuello de botella específico. Solo recomendamos lo que tiene impacto real en empresas como la tuya.",
      },
      {
        pregunta: "¿Qué pasa después del diagnóstico?",
        respuesta:
          "Si el diagnóstico muestra una oportunidad real, puedes agendar una llamada gratuita de 30 minutos para revisar los próximos pasos juntos. Sin presión y sin obligación de contratar.",
      },
      {
        pregunta: "¿Cuántas horas puede recuperar mi equipo con IA?",
        respuesta:
          "Depende del proceso automatizado. Empresas que automatizan atención al cliente recuperan entre 10 y 20 horas semanales. Las que automatizan tareas administrativas recuperan en promedio 15 horas por semana por equipo. El diagnóstico te da la estimación específica para tu caso.",
      },
      {
        pregunta: "¿Necesito tener WhatsApp Business o alguna plataforma específica?",
        respuesta:
          "No es requisito previo. Evaluamos qué canal usa tu empresa para comunicarse con clientes y recomendamos la integración que más sentido tiene. Trabajamos con WhatsApp Business, formularios web, email y CRMs existentes.",
      },
      {
        pregunta: "¿La IA reemplaza a personas en mi equipo?",
        respuesta:
          "No. La IA automatiza tareas repetitivas para que tu equipo se enfoque en lo que genera valor: ventas, atención personalizada, decisiones. No reemplaza personas, libera su tiempo.",
      },
      {
        pregunta: "¿Qué herramientas de IA usan en los proyectos?",
        respuesta:
          "Usamos herramientas accesibles y sin costos de desarrollo personalizado: Make, Zapier, Botpress, OpenAI API, Google Sheets y plataformas específicas según el caso. Sin código propio que mantener.",
      },
      {
        pregunta: "¿Cuánto cuesta implementar después del diagnóstico?",
        respuesta:
          "Los primeros proyectos los hacemos a cambio de testimonio y resultados documentados. El costo de las herramientas de IA suele ser entre $20 y $100 USD mensuales según el volumen, mucho menos que una contratación.",
      },
      {
        pregunta: "¿Funciona para empresas pequeñas de 1 a 5 personas?",
        respuesta:
          "Sí. De hecho, es donde más impacto genera: con equipos pequeños, cada hora vale el doble. Un chatbot que atiende clientes automáticamente puede equivaler a liberar medio tiempo de una persona.",
      },
      {
        pregunta: "¿Qué tan rápido se ven resultados?",
        respuesta:
          "La mayoría de las implementaciones generan impacto visible desde la primera semana: más respuestas atendidas, menos tiempo en tareas manuales, leads que no se pierden. No son proyectos de meses sin resultado.",
      },
    ],
  },

  // ── Quiz ──────────────────────────────────────────────────────────────────────
  quiz: {
    titulo_pagina: "Diagnóstico de IA",
    paso_email: {
      pregunta: "¿A dónde enviamos tu diagnóstico?",
      subpregunta: "Te llegará un resumen personalizado con la recomendación y los próximos pasos.",
      placeholder: "tu@empresa.com",
      cta: "Ver mi diagnóstico",
    },
    resultado: {
      badge: "Tu diagnóstico personalizado",
      cta_calendly: "https://calendly.com/eitan-eficcia/30min",
      cta_label: "Agendar llamada para revisar esto",
      nota: "La llamada es gratuita. 30 minutos. Sin presión.",
    },
  },
};
