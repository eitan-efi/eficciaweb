import type { QuizSubmitPayload, QuizSubmitResponse } from "../../src/lib/types";
import { sendQuizEmails } from "../../src/lib/email-sender";

type NetlifyEvent = {
  body: string | null;
  httpMethod?: string;
};

function json(statusCode: number, body: QuizSubmitResponse) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
    body: JSON.stringify(body),
  };
}

function hasRequiredFields(payload: Partial<QuizSubmitPayload>): payload is QuizSubmitPayload {
  return Boolean(
    payload.email &&
      payload.rubro &&
      payload.tamano &&
      payload.dolor &&
      payload.whatsapp &&
      payload.resultado
  );
}

export async function handler(event: NetlifyEvent) {
  if (event.httpMethod && event.httpMethod !== "POST") {
    return json(405, { ok: false, error: "Método no permitido" });
  }

  let payload: Partial<QuizSubmitPayload>;

  try {
    payload = JSON.parse(event.body ?? "{}") as Partial<QuizSubmitPayload>;
  } catch {
    return json(400, { ok: false, error: "Faltan datos" });
  }

  if (!hasRequiredFields(payload)) {
    return json(400, { ok: false, error: "Faltan datos" });
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      return json(503, {
        ok: false,
        error: "El envío de correos no está configurado todavía.",
      });
    }

    await sendQuizEmails(payload);
    return json(200, { ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error interno";
    return json(500, { ok: false, error: message });
  }
}
