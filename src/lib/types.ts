// ─── Quiz Types ───────────────────────────────────────────────────────────────

export type QuizRubro =
  | "retail"
  | "salud"
  | "servicios"
  | "inmobiliaria"
  | "educacion"
  | "otro";

export type QuizTamano = "1-5" | "6-15" | "16-30" | "31-50" | "+50";

export type QuizDolor =
  | "atencion_cliente"
  | "seguimiento_ventas"
  | "tareas_admin"
  | "reportes";

export type QuizWhatsapp = "si" | "no" | "evaluando";

export type QuizResultType = "chatbot" | "pipeline" | "admin";

// Respuestas acumuladas paso a paso
export interface QuizAnswers {
  rubro?: QuizRubro;
  tamano?: QuizTamano;
  dolor?: QuizDolor;
  whatsapp?: QuizWhatsapp;
  email?: string;
}

// Resultado calculado
export interface QuizResult {
  type: QuizResultType;
  titulo: string;
  descripcion: string;
  impacto: string;
  cta: string;
}

// Payload que el frontend envía al API route
export interface QuizSubmitPayload {
  email: string;
  rubro: QuizRubro;
  tamano: QuizTamano;
  dolor: QuizDolor;
  whatsapp: QuizWhatsapp;
  resultado: QuizResultType;
}

// Respuesta del API route
export interface QuizSubmitResponse {
  ok: boolean;
  error?: string;
}

// ─── Quiz UI Types ─────────────────────────────────────────────────────────────

export interface QuizOption {
  value: string;
  label: string;
  icon?: string; // emoji o nombre de ícono Phosphor
}

export interface QuizStepData {
  id: number;
  field: keyof QuizAnswers;
  pregunta: string;
  opciones: QuizOption[];
  insight?: Partial<Record<string, string>>; // value → texto del micro-insight
}
