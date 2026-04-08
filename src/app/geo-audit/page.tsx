import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO Audit Dashboard",
  description: "Panel interno de scoring GEO para Eficcia.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

interface CheckItem {
  label: string;
  pass: boolean;
  pts: number;
  max: number;
}

interface GeoRun {
  runId: number;
  date: string;
  changes: string[];
  scores: {
    technical: number;
    schema: number;
    content: number;
    eeat: number;
  };
  overall: number;
  checks: {
    technical: CheckItem[];
    schema: CheckItem[];
    content: CheckItem[];
    eeat: CheckItem[];
  };
}

function getRuns(): GeoRun[] {
  try {
    const p = path.join(process.cwd(), "src/data/geo-runs.json");
    return JSON.parse(fs.readFileSync(p, "utf-8"));
  } catch {
    return [];
  }
}

function ScoreBar({ value, max = 10 }: { value: number; max?: number }) {
  const pct = Math.round((value / max) * 100);
  const color =
    pct >= 80 ? "bg-emerald-500" : pct >= 60 ? "bg-sky-500" : pct >= 40 ? "bg-amber-500" : "bg-red-500";
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-sm font-semibold text-white w-10 text-right">{value}/10</span>
    </div>
  );
}

function OverallBadge({ score }: { score: number }) {
  const color =
    score >= 8 ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
    : score >= 6 ? "border-sky-500/40 bg-sky-500/10 text-sky-400"
    : score >= 4 ? "border-amber-500/40 bg-amber-500/10 text-amber-400"
    : "border-red-500/40 bg-red-500/10 text-red-400";
  return (
    <span className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl border text-2xl font-bold ${color}`}>
      {score}
    </span>
  );
}

function DeltaBadge({ delta }: { delta: number }) {
  if (delta === 0) return <span className="text-white/30 text-xs">—</span>;
  const positive = delta > 0;
  return (
    <span className={`text-xs font-semibold ${positive ? "text-emerald-400" : "text-red-400"}`}>
      {positive ? "+" : ""}{delta.toFixed(2)}
    </span>
  );
}

export default function GeoAuditPage() {
  const runs = getRuns();
  const latest = runs[runs.length - 1];
  const target = 8.0;

  const dimLabels: Record<string, string> = {
    technical: "Técnico",
    schema:    "Schema.org",
    content:   "Contenido GEO",
    eeat:      "E-E-A-T",
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans p-8 max-w-5xl mx-auto">

      {/* Header */}
      <div className="mb-12">
        <p className="text-xs font-bold tracking-[4px] uppercase text-sky-500/60 mb-3">EFICCIA</p>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">GEO Audit Dashboard</h1>
        <p className="text-white/40 text-sm">
          Scoring automático contra criterios GEO / Schema.org / E-E-A-T. Actualiza con{" "}
          <code className="bg-white/10 px-1.5 py-0.5 rounded text-sky-400">node scripts/geo-score.mjs</code>
        </p>
      </div>

      {/* Latest score */}
      {latest && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
            <p className="text-xs font-semibold tracking-[2px] uppercase text-white/40 mb-4">Score actual — Run {latest.runId}</p>
            <div className="flex items-start gap-5">
              <OverallBadge score={latest.overall} />
              <div className="flex-1 space-y-3">
                {(Object.entries(latest.scores) as [string, number][]).map(([dim, val]) => (
                  <div key={dim}>
                    <p className="text-xs text-white/40 mb-1">{dimLabels[dim]}</p>
                    <ScoreBar value={val} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
            <p className="text-xs font-semibold tracking-[2px] uppercase text-white/40 mb-4">Progreso al objetivo ({target}/10)</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Score actual</span>
                <span className="text-white font-semibold">{latest.overall}</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sky-500 rounded-full transition-all"
                  style={{ width: `${Math.min((latest.overall / target) * 100, 100)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-white/30">
                <span>0</span>
                <span>Objetivo: {target}</span>
                <span>10</span>
              </div>
              <p className="text-white/40 text-sm mt-2">
                Faltan <span className="text-white font-semibold">{Math.max(0, target - latest.overall).toFixed(2)} puntos</span> para llegar al objetivo.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Historial de corridas */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Historial de corridas</h2>
        <div className="border border-white/10 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="text-left px-5 py-3 text-white/40 font-medium">Run</th>
                <th className="text-left px-5 py-3 text-white/40 font-medium">Fecha</th>
                <th className="text-right px-5 py-3 text-white/40 font-medium">Técnico</th>
                <th className="text-right px-5 py-3 text-white/40 font-medium">Schema</th>
                <th className="text-right px-5 py-3 text-white/40 font-medium">Contenido</th>
                <th className="text-right px-5 py-3 text-white/40 font-medium">E-E-A-T</th>
                <th className="text-right px-5 py-3 text-white/40 font-medium">Overall</th>
                <th className="text-right px-5 py-3 text-white/40 font-medium">Δ</th>
              </tr>
            </thead>
            <tbody>
              {runs.map((run, i) => {
                const prev = runs[i - 1];
                const delta = prev ? run.overall - prev.overall : 0;
                return (
                  <tr key={run.runId} className="border-b border-white/[0.06] last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="px-5 py-4 text-white/60 font-mono">R{run.runId}</td>
                    <td className="px-5 py-4 text-white/50">{run.date}</td>
                    <td className="px-5 py-4 text-right text-white/80">{run.scores.technical}</td>
                    <td className="px-5 py-4 text-right text-white/80">{run.scores.schema}</td>
                    <td className="px-5 py-4 text-right text-white/80">{run.scores.content}</td>
                    <td className="px-5 py-4 text-right text-white/80">{run.scores.eeat}</td>
                    <td className="px-5 py-4 text-right font-semibold text-white">{run.overall}</td>
                    <td className="px-5 py-4 text-right"><DeltaBadge delta={delta} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cambios por corrida */}
      {runs.some(r => r.changes.length > 0) && (
        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Cambios implementados</h2>
          <div className="space-y-3">
            {runs.filter(r => r.changes.length > 0).map(run => (
              <div key={run.runId} className="border border-white/10 rounded-xl p-5 bg-white/[0.02]">
                <p className="text-xs font-semibold tracking-[2px] uppercase text-sky-500/70 mb-3">Run {run.runId} — {run.date}</p>
                <ul className="space-y-1.5">
                  {run.changes.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="text-sky-400 mt-0.5">✓</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Checks pendientes del último run */}
      {latest && (
        <div>
          <h2 className="text-lg font-semibold mb-4">Checks pendientes (Run {latest.runId})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(Object.entries(latest.checks) as [string, CheckItem[]][]).map(([dim, checks]) => {
              const failed = checks.filter(c => !c.pass);
              if (failed.length === 0) return null;
              return (
                <div key={dim} className="border border-white/10 rounded-xl p-5 bg-white/[0.02]">
                  <p className="text-xs font-semibold tracking-[2px] uppercase text-white/40 mb-3">{dimLabels[dim]}</p>
                  <ul className="space-y-2">
                    {failed.map((c, i) => (
                      <li key={i} className="flex items-center justify-between text-sm">
                        <span className="text-white/60 flex items-center gap-2">
                          <span className="text-red-400/70">✗</span>{c.label}
                        </span>
                        <span className="text-amber-400/70 text-xs font-medium">+{c.max}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
