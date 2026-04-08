import type { QuizStepData, QuizResult, QuizResultType, QuizAnswers } from "./types";

// ─── Pasos del quiz ────────────────────────────────────────────────────────────

export const QUIZ_STEPS: QuizStepData[] = [
  {
    id: 1,
    field: "rubro",
    pregunta: "¿En qué rubro opera tu empresa?",
    opciones: [
      { value: "retail", label: "Retail / Tienda", icon: "🛍️" },
      { value: "salud", label: "Salud / Clínica", icon: "🏥" },
      { value: "servicios", label: "Servicios profesionales", icon: "💼" },
      { value: "inmobiliaria", label: "Inmobiliaria", icon: "🏠" },
      { value: "educacion", label: "Educación", icon: "📚" },
      { value: "otro", label: "Otro rubro", icon: "⚡" },
    ],
  },
  {
    id: 2,
    field: "tamano",
    pregunta: "¿Cuántas personas trabajan en tu equipo?",
    opciones: [
      { value: "1-5", label: "1 a 5 personas" },
      { value: "6-15", label: "6 a 15 personas" },
      { value: "16-30", label: "16 a 30 personas" },
      { value: "31-50", label: "31 a 50 personas" },
      { value: "+50", label: "Más de 50" },
    ],
    insight: {
      "1-5": "Con equipos pequeños, cada hora cuenta el doble. La IA libera tiempo que hoy no tienes.",
      "6-15": "Es el punto exacto donde las empresas empiezan a perder ventas por falta de seguimiento. Lo vemos todo el tiempo.",
      "16-30": "A este tamaño, automatizar bien puede reemplazar 1 o 2 contrataciones. Sin el costo.",
      "31-50": "Empresas de tu tamaño suelen tener 3 o más cuellos de botella que la IA puede resolver en paralelo.",
      "+50": "Con este equipo, el impacto de automatizar es inmediato y medible desde la primera semana.",
    },
  },
  {
    id: 3,
    field: "dolor",
    pregunta: "¿Cuál es tu mayor cuello de botella hoy?",
    opciones: [
      { value: "atencion_cliente", label: "Atención al cliente lenta o desbordada", icon: "💬" },
      { value: "seguimiento_ventas", label: "Leads que se enfrían sin seguimiento", icon: "📉" },
      { value: "tareas_admin", label: "Tareas administrativas que quitan tiempo", icon: "📋" },
      { value: "reportes", label: "Reportes manuales lentos o imprecisos", icon: "📊" },
    ],
    insight: {
      atencion_cliente: "El 78% de los clientes elige a quien responde primero. No al mejor, al más rápido.",
      seguimiento_ventas: "El 80% de los cierres requiere más de 5 contactos. Casi ningún equipo llega a hacerlos manualmente.",
      tareas_admin: "En promedio, un equipo de 10 personas pierde 15 horas semanales en tareas que la IA puede hacer en segundos.",
      reportes: "Si armas reportes a mano, estás tomando decisiones con datos de ayer. La IA te da los datos de hoy, solos.",
    },
  },
  {
    id: 4,
    field: "whatsapp",
    pregunta: "¿Por dónde llegan la mayoría de las consultas de tus clientes?",
    opciones: [
      { value: "si", label: "WhatsApp o mensajería", icon: "💬" },
      { value: "evaluando", label: "Redes sociales o formulario web", icon: "🌐" },
      { value: "no", label: "Email o teléfono", icon: "📧" },
    ],
  },
];

// ─── Resultados por tipo ───────────────────────────────────────────────────────

export const QUIZ_RESULTS: Record<QuizResultType, QuizResult> = {
  chatbot: {
    type: "chatbot",
    titulo: "Tu empresa necesita un Agente de Atención con IA",
    descripcion:
      "Basado en lo que nos contaste, tu mayor oportunidad está en responder más rápido y sin depender de tu equipo para cada consulta. Un agente IA en WhatsApp o tu web atiende, califica y deriva clientes solo — de día, de noche, los 7 días.",
    impacto:
      "Empresas similares recuperan entre 10 y 20 horas semanales y aumentan su tasa de respuesta de minutos a segundos.",
    cta: "Revisar cómo se vería esto en tu empresa",
  },
  pipeline: {
    type: "pipeline",
    titulo: "Tu empresa necesita automatizar el seguimiento de ventas",
    descripcion:
      "Tienes leads entrando, pero el seguimiento depende de que alguien se acuerde. Con IA, cada prospecto recibe el toque correcto en el momento correcto — sin intervención manual. Nada se cae.",
    impacto:
      "Equipos de ventas que automatizan el seguimiento cierran entre 2x y 3x más oportunidades con el mismo equipo.",
    cta: "Ver cómo funciona para tu proceso de ventas",
  },
  admin: {
    type: "admin",
    titulo: "Tu empresa necesita automatizar operaciones internas",
    descripcion:
      "Las horas que tu equipo pierde en tareas repetitivas son horas que no están en lo que importa. Automatizamos los flujos que más tiempo consumen: entrada de datos, reportes, notificaciones, coordinación interna.",
    impacto:
      "En promedio, las empresas que automatizan operaciones recuperan entre 15 y 25 horas semanales por equipo.",
    cta: "Analizar qué procesos automatizar primero",
  },
};

// ─── Lógica de resultado (también usada en quiz-logic.ts del lado backend) ─────

export function calcularResultado(answers: QuizAnswers): QuizResultType {
  const { dolor, whatsapp } = answers;

  if (dolor === "atencion_cliente") return "chatbot";
  if (dolor === "seguimiento_ventas") return "pipeline";
  if (dolor === "tareas_admin" || dolor === "reportes") return "admin";

  // Fallback: si tiene WhatsApp activo, chatbot es lo más directo
  if (whatsapp === "si") return "chatbot";

  return "admin";
}
