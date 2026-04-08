import { Resend } from "resend";
import type { QuizSubmitPayload } from "./types";
import { QUIZ_RESULTS } from "./quiz-data";

const FROM = "Eitan de Eficcia <eitan@eseficcia.com>";
const NOTIFY_TO = "eitan@eseficcia.com";
const CALENDLY = "https://calendly.com/eitan-eficcia/30min";

const RUBRO_LABEL: Record<string, string> = {
  retail: "Retail / Tienda",
  salud: "Salud / Clínica",
  servicios: "Servicios profesionales",
  inmobiliaria: "Inmobiliaria",
  educacion: "Educación",
  otro: "Otro",
};

const TAMANO_LABEL: Record<string, string> = {
  "1-5": "1 a 5 personas",
  "6-15": "6 a 15 personas",
  "16-30": "16 a 30 personas",
  "31-50": "31 a 50 personas",
  "+50": "Más de 50 personas",
};

const DOLOR_LABEL: Record<string, string> = {
  atencion_cliente: "Atención al cliente lenta o desbordada",
  seguimiento_ventas: "Leads que se enfrían sin seguimiento",
  tareas_admin: "Tareas administrativas que quitan tiempo",
  reportes: "Reportes manuales lentos o imprecisos",
};

// ─── Email al usuario ──────────────────────────────────────────────────────────

function userEmailHtml(payload: QuizSubmitPayload): string {
  const resultado = QUIZ_RESULTS[payload.resultado];

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#09090b;border-radius:16px 16px 0 0;padding:40px 40px 32px;text-align:center;">
          <p style="margin:0;font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#0ea5e9;">EFICCIA</p>
          <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.4);">Consultoría de IA para PYMEs</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#0a0a0a;padding:40px;">
          <p style="margin:0 0 8px;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#0ea5e9;">Tu diagnóstico personalizado</p>
          <h1 style="margin:0 0 24px;font-size:28px;font-weight:700;color:#ffffff;line-height:1.3;">${resultado.titulo}</h1>
          <p style="margin:0 0 32px;font-size:16px;color:rgba(255,255,255,0.6);line-height:1.7;">${resultado.descripcion}</p>

          <!-- Impacto -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(14,165,233,0.08);border:1px solid rgba(14,165,233,0.2);border-radius:12px;margin-bottom:32px;">
            <tr><td style="padding:24px;">
              <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#0ea5e9;">Impacto esperado</p>
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.7);line-height:1.6;">${resultado.impacto}</p>
            </td></tr>
          </table>

          <!-- CTA -->
          <table cellpadding="0" cellspacing="0" style="margin:0 auto 32px;">
            <tr><td style="background:#0284c7;border-radius:100px;text-align:center;">
              <a href="${CALENDLY}" style="display:inline-block;padding:16px 32px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;">
                Agendar llamada para revisar esto →
              </a>
            </td></tr>
          </table>

          <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.3);text-align:center;">La llamada es gratuita. 30 minutos. Sin presión.</p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#09090b;border-radius:0 0 16px 16px;padding:24px 40px;border-top:1px solid rgba(255,255,255,0.05);">
          <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.3);text-align:center;">
            Eficcia · eitan@eseficcia.com<br>
            <a href="https://eficcia.com" style="color:#0ea5e9;text-decoration:none;">eficcia.com</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Notificación a Eitan ──────────────────────────────────────────────────────

function notifyEmailHtml(payload: QuizSubmitPayload): string {
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;">
        <tr><td style="background:#09090b;padding:24px 32px;">
          <p style="margin:0;font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#0ea5e9;">NUEVO LEAD — QUIZ EFICCIA</p>
        </td></tr>
        <tr><td style="padding:32px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
              <p style="margin:0;font-size:12px;color:#999;text-transform:uppercase;letter-spacing:1px;">Email</p>
              <p style="margin:4px 0 0;font-size:16px;font-weight:600;color:#09090b;">${payload.email}</p>
            </td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
              <p style="margin:0;font-size:12px;color:#999;text-transform:uppercase;letter-spacing:1px;">Rubro</p>
              <p style="margin:4px 0 0;font-size:16px;color:#09090b;">${RUBRO_LABEL[payload.rubro] ?? payload.rubro}</p>
            </td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
              <p style="margin:0;font-size:12px;color:#999;text-transform:uppercase;letter-spacing:1px;">Tamaño</p>
              <p style="margin:4px 0 0;font-size:16px;color:#09090b;">${TAMANO_LABEL[payload.tamano] ?? payload.tamano}</p>
            </td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
              <p style="margin:0;font-size:12px;color:#999;text-transform:uppercase;letter-spacing:1px;">Dolor principal</p>
              <p style="margin:4px 0 0;font-size:16px;color:#09090b;">${DOLOR_LABEL[payload.dolor] ?? payload.dolor}</p>
            </td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
              <p style="margin:0;font-size:12px;color:#999;text-transform:uppercase;letter-spacing:1px;">WhatsApp de negocio</p>
              <p style="margin:4px 0 0;font-size:16px;color:#09090b;">${payload.whatsapp}</p>
            </td></tr>
            <tr><td style="padding:12px 0;">
              <p style="margin:0;font-size:12px;color:#999;text-transform:uppercase;letter-spacing:1px;">Resultado recomendado</p>
              <p style="margin:4px 0 0;font-size:16px;font-weight:700;color:#0284c7;">${payload.resultado.toUpperCase()}</p>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Función principal ─────────────────────────────────────────────────────────

export async function sendQuizEmails(payload: QuizSubmitPayload): Promise<void> {
  const resend = new Resend(process.env.RESEND_API_KEY);
  await Promise.all([
    resend.emails.send({
      from: FROM,
      to: payload.email,
      subject: "Tu diagnóstico de IA está listo — Eficcia",
      html: userEmailHtml(payload),
    }),
    resend.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      subject: `Nuevo lead del quiz — ${RUBRO_LABEL[payload.rubro] ?? payload.rubro}`,
      html: notifyEmailHtml(payload),
    }),
  ]);
}
