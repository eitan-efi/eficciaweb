export interface BlogPost {
  slug: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  rubro: string;
  tiempoLectura: string;
  resumen: string[];
  contenido: BlogSection[];
}

export interface BlogSection {
  tipo: "h2" | "h3" | "p" | "ul" | "ol" | "tabla";
  texto?: string;
  items?: string[];
  headers?: string[];
  filas?: string[][];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "chatbot-atencion-cliente-retail-whatsapp",
    titulo: "Chatbot de atención al cliente para retail en WhatsApp: cómo implementarlo sin código",
    descripcion:
      "Guía práctica para tiendas y comercios que quieren atender más consultas sin contratar personal extra. Herramientas, costos reales y pasos concretos.",
    fecha: "2026-04-08",
    rubro: "Retail",
    tiempoLectura: "6 min",
    resumen: [
      "WhatsApp es el canal más directo para atender consultas retail en Chile sin cambiar hábitos del cliente.",
      "Un chatbot puede responder FAQs, calificar leads y derivar al equipo humano cuando haga falta.",
      "Con herramientas no-code, una versión útil puede implementarse en alrededor de una semana.",
    ],
    contenido: [
      {
        tipo: "p",
        texto:
          "El 78% de los clientes elige al proveedor que responde primero, no al mejor. Para una tienda retail, eso significa que cada consulta sin responder en los primeros 10 minutos es una venta potencial perdida. Un chatbot en WhatsApp resuelve exactamente ese problema.",
      },
      {
        tipo: "h2",
        texto: "Por qué WhatsApp y no otro canal",
      },
      {
        tipo: "p",
        texto:
          "En Chile, WhatsApp tiene una penetración del 90% en adultos. Para una tienda retail, es el canal donde ya están tus clientes. No hay que enseñarles a usar una nueva plataforma: el chatbot aparece en el número que ya tienen guardado.",
      },
      {
        tipo: "h2",
        texto: "Qué puede hacer un chatbot de retail en WhatsApp",
      },
      {
        tipo: "ul",
        items: [
          "Responder preguntas frecuentes: horarios, precios, disponibilidad de stock",
          "Recibir y confirmar pedidos por mensaje",
          "Derivar al equipo humano cuando la consulta lo requiere",
          "Enviar recordatorios de pedidos pendientes o promociones",
          "Calificar leads según intención de compra antes de pasarlos a ventas",
        ],
      },
      {
        tipo: "h2",
        texto: "Herramientas recomendadas (sin desarrollo a medida)",
      },
      {
        tipo: "tabla",
        headers: ["Herramienta", "Costo mensual aprox.", "Ideal para"],
        filas: [
          ["Botpress", "$0–$50 USD", "Chatbots conversacionales con IA"],
          ["WhatsApp Business API (Meta)", "$0 + costo por mensaje", "Integración oficial con WhatsApp"],
          ["Make (Integromat)", "$9–$29 USD", "Automatizar flujos sin código"],
          ["Zapier", "$19–$49 USD", "Conectar WhatsApp con CRM o Google Sheets"],
        ],
      },
      {
        tipo: "h2",
        texto: "Pasos para implementarlo en una semana",
      },
      {
        tipo: "ol",
        items: [
          "Crear cuenta en WhatsApp Business API a través de Meta for Developers o un proveedor como 360dialog",
          "Definir las 10 preguntas más frecuentes que recibe tu tienda",
          "Construir el flujo del chatbot en Botpress (interfaz visual, sin código)",
          "Conectar Botpress con WhatsApp Business vía webhook",
          "Probar con 5 escenarios reales antes de activarlo para clientes",
        ],
      },
      {
        tipo: "h2",
        texto: "Resultados que puedes esperar",
      },
      {
        tipo: "p",
        texto:
          "Tiendas de retail que implementan un chatbot en WhatsApp reportan atender entre 3 y 5 veces más consultas con el mismo equipo. El tiempo de respuesta promedio pasa de minutos u horas a segundos. El costo total de la solución rara vez supera los $100 USD al mes.",
      },
      {
        tipo: "h2",
        texto: "Cuándo sí necesitas ayuda y cuándo no",
      },
      {
        tipo: "p",
        texto:
          "Si tu tienda recibe menos de 20 consultas al día, puedes intentar la implementación sola con las herramientas mencionadas. Si superas eso, o si necesitas integrar el chatbot con tu sistema de inventario o CRM, tiene sentido trabajar con alguien que ya lo haya hecho antes para evitar semanas de prueba y error.",
      },
    ],
  },
  {
    slug: "automatizar-seguimiento-ventas-servicios-profesionales",
    titulo: "Cómo automatizar el seguimiento de ventas en una empresa de servicios profesionales",
    descripcion:
      "El 80% de los cierres requiere más de 5 contactos. La mayoría de los equipos nunca llega a hacerlos. Esta guía explica cómo automatizar ese seguimiento sin perder la personalización.",
    fecha: "2026-04-08",
    rubro: "Servicios profesionales",
    tiempoLectura: "7 min",
    resumen: [
      "El cuello de botella suele estar en el seguimiento manual, no en la falta de leads.",
      "Automatizar recordatorios, secuencias y estados de CRM evita que oportunidades reales se enfríen.",
      "La personalización se puede mantener usando contexto del prospecto dentro del flujo automatizado.",
    ],
    contenido: [
      {
        tipo: "p",
        texto:
          "En servicios profesionales —consultoras, estudios jurídicos, agencias, contadores, arquitectos— el principal problema de ventas no es la falta de leads: es que los leads se enfrían. Un prospecto interesado hoy, si no recibe seguimiento en 48 horas, elige a otro.",
      },
      {
        tipo: "h2",
        texto: "El problema: el seguimiento manual no escala",
      },
      {
        tipo: "p",
        texto:
          "Un equipo de 5 personas manejando 30 prospectos activos tiene que recordar quién está en qué etapa, cuándo fue el último contacto y qué mensaje enviar. Sin sistema, eso no funciona. El seguimiento se hace solo cuando alguien se acuerda, y la mitad de los leads se pierde en el proceso.",
      },
      {
        tipo: "h2",
        texto: "Qué automatizar exactamente",
      },
      {
        tipo: "ul",
        items: [
          "Email o mensaje automático de seguimiento a las 24h de un primer contacto sin respuesta",
          "Recordatorio al equipo cuando un lead no ha tenido contacto en más de 3 días",
          "Secuencia de 3 a 5 mensajes espaciados en el tiempo para leads que no respondieron",
          "Notificación cuando un prospecto abre una propuesta enviada por email",
          "Actualización automática del estado del lead en el CRM según las acciones tomadas",
        ],
      },
      {
        tipo: "h2",
        texto: "Herramientas para implementarlo",
      },
      {
        tipo: "tabla",
        headers: ["Herramienta", "Función", "Costo aprox."],
        filas: [
          ["HubSpot CRM (free)", "Gestión de pipeline y seguimiento", "$0"],
          ["Make", "Automatizar flujos entre herramientas", "$9–$29 USD/mes"],
          ["Instantly / Smartlead", "Secuencias de email automatizadas", "$30–$50 USD/mes"],
          ["OpenAI API", "Personalizar mensajes con IA según el contexto", "$5–$20 USD/mes"],
        ],
      },
      {
        tipo: "h2",
        texto: "Cómo armar el flujo en 3 pasos",
      },
      {
        tipo: "ol",
        items: [
          "Definir las etapas de tu proceso de venta: contacto inicial, propuesta enviada, negociación, cierre",
          "Crear una secuencia de seguimiento para cada etapa: qué mensaje enviar, cuándo y por qué canal",
          "Automatizar esa secuencia con Make o Zapier conectado a tu CRM y herramienta de email",
        ],
      },
      {
        tipo: "h2",
        texto: "Personalización sin perder tiempo",
      },
      {
        tipo: "p",
        texto:
          "El mayor miedo al automatizar seguimientos es sonar robótico. La solución es usar IA para personalizar el mensaje base con datos del prospecto: su nombre, empresa, rubro y en qué parte del proceso está. Con OpenAI API conectado vía Make, cada mensaje sale diferente aunque el flujo sea automatizado.",
      },
      {
        tipo: "h2",
        texto: "Resultados esperados",
      },
      {
        tipo: "p",
        texto:
          "Empresas de servicios que automatizan su pipeline de ventas reportan cerrar entre 2 y 3 veces más oportunidades con el mismo equipo. La razón es simple: ningún lead se olvida, y el seguimiento ocurre siempre en el momento correcto.",
      },
    ],
  },
  {
    slug: "ia-clinicas-consultorios-reducir-tiempo-administrativo",
    titulo: "IA para clínicas y consultorios: cómo reducir el tiempo administrativo sin cambiar tus herramientas",
    descripcion:
      "Agenda, confirmaciones, fichas y reportes consumen horas que podrían estar en pacientes. Guía práctica de automatización para centros de salud pequeños y medianos en Chile.",
    fecha: "2026-04-08",
    rubro: "Salud",
    tiempoLectura: "6 min",
    resumen: [
      "En clínicas y consultorios, la mayor ganancia suele estar en automatizar tareas administrativas repetitivas.",
      "Confirmaciones de citas, consultas frecuentes y reportes son tres puntos de partida claros.",
      "La IA debe usarse para lo operativo; las decisiones clínicas siguen requiriendo criterio humano.",
    ],
    contenido: [
      {
        tipo: "p",
        texto:
          "En una clínica o consultorio de tamaño mediano, entre el 25% y el 35% del tiempo del personal administrativo se va en tareas repetitivas: confirmar citas, responder las mismas preguntas por WhatsApp, traspasar datos entre sistemas y armar reportes manuales. La IA no reemplaza ese personal, pero puede hacer que su tiempo rinda el doble.",
      },
      {
        tipo: "h2",
        texto: "Los tres cuellos de botella más comunes en salud",
      },
      {
        tipo: "ul",
        items: [
          "Confirmación de citas: llamadas o mensajes manuales que toman 2 a 3 horas diarias",
          "Respuesta a consultas frecuentes por WhatsApp: precios, horarios, coberturas de seguros",
          "Generación de reportes: métricas de atención, ingresos por prestación, ausentismo",
        ],
      },
      {
        tipo: "h2",
        texto: "Solución 1: automatizar confirmaciones de citas",
      },
      {
        tipo: "p",
        texto:
          "Un flujo automatizado en Make o Zapier puede leer la agenda del día siguiente desde Google Calendar o tu sistema de reservas, y enviar un mensaje de WhatsApp o email de confirmación a cada paciente con un botón para confirmar o cancelar. Si cancela, libera el slot automáticamente. Costo: menos de $30 USD al mes. Tiempo ahorrado: 10 a 15 horas semanales en clínicas con 40 o más citas diarias.",
      },
      {
        tipo: "h2",
        texto: "Solución 2: chatbot para consultas frecuentes",
      },
      {
        tipo: "p",
        texto:
          "Las preguntas más frecuentes en salud son siempre las mismas: ¿tienen convenio con tal seguro?, ¿cuánto cuesta una consulta?, ¿qué documentos traer?, ¿cómo llegar? Un chatbot en WhatsApp responde las 24 horas sin intervención humana. Solo deriva al equipo cuando la consulta requiere criterio clínico o administrativo específico.",
      },
      {
        tipo: "h2",
        texto: "Solución 3: reportes automáticos",
      },
      {
        tipo: "p",
        texto:
          "Si los datos de atención viven en Google Sheets o en un sistema exportable a Excel, es posible generar un reporte automático diario o semanal que llegue por email o WhatsApp. Sin armar nada manualmente. Con Make o con un script simple, los datos se procesan y el resumen llega solo.",
      },
      {
        tipo: "h2",
        texto: "Herramientas compatibles con la realidad de una clínica mediana",
      },
      {
        tipo: "tabla",
        headers: ["Necesidad", "Herramienta recomendada", "Costo mensual"],
        filas: [
          ["Confirmación automática de citas", "Make + WhatsApp Business API", "$20–$40 USD"],
          ["Chatbot de consultas frecuentes", "Botpress + WhatsApp", "$0–$30 USD"],
          ["Reportes automáticos", "Make + Google Sheets + Gmail", "$9–$20 USD"],
          ["Integración con sistema de agenda", "Zapier o Make", "$9–$29 USD"],
        ],
      },
      {
        tipo: "h2",
        texto: "Por dónde empezar",
      },
      {
        tipo: "p",
        texto:
          "La recomendación es atacar primero el cuello de botella que más tiempo consume. Para la mayoría de las clínicas, eso es la confirmación de citas. En una semana de implementación es posible tener ese flujo funcionando, medir el tiempo recuperado y decidir si escalar a las otras soluciones.",
      },
      {
        tipo: "h2",
        texto: "Lo que no automatizar",
      },
      {
        tipo: "p",
        texto:
          "Evitar automatizar decisiones clínicas, derivaciones complejas o conversaciones que requieren empatía. La IA en salud funciona bien para lo administrativo y lo repetitivo. Todo lo que requiere criterio humano debe seguir en manos de personas.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
