import { execFile } from "node:child_process";

import type { QuizSubmitPayload } from "@/lib/types";

const GWS_BIN = "/Users/eitanmarkovits/.nvm/versions/node/v20.20.0/bin/gws";
const SHEET_ID = "1xQ2pv8qk-WHKfwcLKpaDnRiRuxDMed8nJqysd08kKAo";

export function logToSheet(payload: QuizSubmitPayload): Promise<void> {
  const row = [
    new Date().toISOString(),
    payload.email,
    payload.rubro,
    payload.tamano,
    payload.dolor,
    payload.whatsapp,
    payload.resultado,
  ];

  const args = [
    "sheets",
    "+append",
    "--spreadsheet",
    SHEET_ID,
    "--json-values",
    JSON.stringify([row]),
  ];

  return new Promise((resolve, reject) => {
    execFile(GWS_BIN, args, (error, _stdout, stderr) => {
      if (error) {
        reject(new Error(stderr.trim() || error.message));
        return;
      }

      resolve();
    });
  });
}
