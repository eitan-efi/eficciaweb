import { NextResponse } from "next/server";

import { logToSheet } from "@/lib/sheet-logger";
import { sendQuizEmails } from "@/lib/email-sender";
import type { QuizSubmitPayload, QuizSubmitResponse } from "@/lib/types";

export const runtime = "nodejs";

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

export async function POST(request: Request) {
  let payload: Partial<QuizSubmitPayload>;

  try {
    payload = (await request.json()) as Partial<QuizSubmitPayload>;
  } catch {
    return NextResponse.json<QuizSubmitResponse>(
      { ok: false, error: "Faltan datos" },
      { status: 400 }
    );
  }

  if (!hasRequiredFields(payload)) {
    return NextResponse.json<QuizSubmitResponse>(
      { ok: false, error: "Faltan datos" },
      { status: 400 }
    );
  }

  try {
    await Promise.all([
      logToSheet(payload),
      sendQuizEmails(payload),
    ]);

    return NextResponse.json<QuizSubmitResponse>({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error interno";

    return NextResponse.json<QuizSubmitResponse>(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}
