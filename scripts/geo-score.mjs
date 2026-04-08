// geo-score.mjs — GEO scoring script para Eficcia
// Uso: node scripts/geo-score.mjs [--changes "descripción de cambios"]
// Appends un run a src/data/geo-runs.json

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "src");
const PUBLIC = path.join(ROOT, "public");

const changesArg = process.argv.indexOf("--changes");
const changesDesc = changesArg !== -1 ? process.argv[changesArg + 1] : "";

// ─── helpers ──────────────────────────────────────────────────────────────────

function fileExists(p) {
  try { fs.accessSync(p); return true; } catch { return false; }
}

function read(p) {
  try { return fs.readFileSync(p, "utf-8"); } catch { return ""; }
}

function check(label, pass, pts) {
  return { label, pass, pts: pass ? pts : 0, max: pts };
}

// ─── dimensión 1: técnico ──────────────────────────────────────────────────────

function scoreTechnical() {
  const layout = read(path.join(SRC, "app", "layout.tsx"));
  const checks = [
    check("robots.txt",          fileExists(path.join(PUBLIC, "robots.txt")),                           1.5),
    check("sitemap.ts",          fileExists(path.join(SRC, "app", "sitemap.ts")),                        1.5),
    check("canonical (alternates)", layout.includes("alternates"),                                       1.0),
    check("viewport export",     layout.includes("Viewport") && layout.includes("export const viewport"), 1.0),
    check("OG image definida",   layout.includes("og-image") || (layout.includes("images") && layout.includes("openGraph")), 1.0),
    check("title template %s",   layout.includes("template") && layout.includes("%s"),                  0.5),
    check("robots metadata",     layout.includes("robots:") && layout.includes("index"),                0.5),
    check("metadataBase",        layout.includes("metadataBase"),                                        0.5),
    check("keywords",            layout.includes("keywords"),                                            0.5),
    check("authors",             layout.includes("authors"),                                             1.0),
  ];
  const score = checks.reduce((a, c) => a + c.pts, 0);
  return { score: Math.min(parseFloat(score.toFixed(1)), 10), checks };
}

// ─── dimensión 2: schema.org ───────────────────────────────────────────────────

function scoreSchema() {
  const layout   = read(path.join(SRC, "app", "layout.tsx"));
  const faq      = read(path.join(SRC, "components", "FAQ.tsx"));
  const proofStr = read(path.join(SRC, "components", "ProofStrip.tsx"));
  const all      = layout + faq + proofStr;

  const checks = [
    check("Organization",     layout.includes('"Organization"'),   0.5),
    check("LocalBusiness",    layout.includes('"LocalBusiness"'),  0.5),
    check("WebSite",          layout.includes('"WebSite"'),        0.5),
    check("FAQPage",          all.includes('"FAQPage"'),           2.0),
    check("Service",          all.includes('"Service"'),           2.0),
    check("BreadcrumbList",   all.includes('"BreadcrumbList"'),    1.0),
    check("Article/WebPage",  all.includes('"Article"') || all.includes('"WebPage"'), 1.5),
    check("AggregateRating",  all.includes('"AggregateRating"'),   2.0),
  ];
  const score = checks.reduce((a, c) => a + c.pts, 0);
  return { score: Math.min(parseFloat(score.toFixed(1)), 10), checks };
}

// ─── dimensión 3: contenido / geo ─────────────────────────────────────────────

function scoreContent() {
  const hero  = read(path.join(SRC, "components", "Hero.tsx"));
  const copy  = read(path.join(SRC, "lib", "copy.ts"));
  const page  = read(path.join(SRC, "app", "page.tsx"));

  const faqCount = (copy.match(/pregunta:/g) || []).length;
  const hasStats = (copy.match(/\d+%|\d+x|\d+ hora|\d+ min/g) || []).length > 3;

  const checks = [
    check("H1 en Hero",                hero.includes("<h1"),                         1.5),
    check(`FAQ ≥5 items (${faqCount})`, faqCount >= 5,                               1.0),
    check(`FAQ ≥8 items (${faqCount})`, faqCount >= 8,                               1.0),
    check(`FAQ ≥12 items (${faqCount})`, faqCount >= 12,                             1.0),
    check("Blog /app/blog/",           fileExists(path.join(SRC, "app", "blog")),    2.5),
    check("Stats y datos concretos",   hasStats,                                     1.5),
    check("AboutEitan en page.tsx",    page.includes("AboutEitan"),                  1.5),
  ];
  const score = checks.reduce((a, c) => a + c.pts, 0);
  return { score: Math.min(parseFloat(score.toFixed(1)), 10), checks };
}

// ─── dimensión 4: e-e-a-t ─────────────────────────────────────────────────────

function scoreEEAT() {
  const layout = read(path.join(SRC, "app", "layout.tsx"));
  const page   = read(path.join(SRC, "app", "page.tsx"));

  const checks = [
    check("Teléfono en schema",          layout.includes("telephone"),                           1.0),
    check("Email en schema",             layout.includes("email") && layout.includes("@"),       1.0),
    check("Dirección en schema",         layout.includes("addressLocality"),                     1.0),
    check("Horario en schema",           layout.includes("openingHours"),                        1.0),
    check("Locale es_CL",               layout.includes("es_CL"),                               0.5),
    check("AboutEitan visible",          page.includes("AboutEitan"),                            2.0),
    check("Testimonials component",      fileExists(path.join(SRC, "components", "Testimonials.tsx")), 2.0),
    check("Nombre autor (Eitan)",        layout.includes("Eitan") || layout.includes("Markovits"), 0.5),
    check("Authors en metadata",         layout.includes("authors"),                             1.0),
  ];
  const score = checks.reduce((a, c) => a + c.pts, 0);
  return { score: Math.min(parseFloat(score.toFixed(1)), 10), checks };
}

// ─── main ──────────────────────────────────────────────────────────────────────

const tech    = scoreTechnical();
const schema  = scoreSchema();
const content = scoreContent();
const eeat    = scoreEEAT();
const overall = parseFloat(((tech.score + schema.score + content.score + eeat.score) / 4).toFixed(2));

// Cargar runs existentes
const runsPath = path.join(SRC, "data", "geo-runs.json");
let runs = [];
try { runs = JSON.parse(fs.readFileSync(runsPath, "utf-8")); } catch { runs = []; }

const run = {
  runId:   runs.length,
  date:    new Date().toISOString().split("T")[0],
  changes: changesDesc ? changesDesc.split("|").map(s => s.trim()) : [],
  scores: {
    technical: tech.score,
    schema:    schema.score,
    content:   content.score,
    eeat:      eeat.score,
  },
  overall,
  checks: {
    technical: tech.checks,
    schema:    schema.checks,
    content:   content.checks,
    eeat:      eeat.checks,
  },
};

runs.push(run);
fs.writeFileSync(runsPath, JSON.stringify(runs, null, 2));

// Output
console.log(`\n━━━ GEO Score — Run ${run.runId} (${run.date}) ━━━`);
console.log(`Overall:    ${overall}/10`);
console.log(`Técnico:    ${tech.score}/10`);
console.log(`Schema:     ${schema.score}/10`);
console.log(`Contenido:  ${content.score}/10`);
console.log(`E-E-A-T:    ${eeat.score}/10`);

// Mostrar qué falló
const allChecks = [
  ...tech.checks, ...schema.checks, ...content.checks, ...eeat.checks
];
const failed = allChecks.filter(c => !c.pass);
if (failed.length > 0) {
  console.log(`\nPendiente (${failed.length}):`);
  failed.forEach(c => console.log(`  ✗ ${c.label} (+${c.max} pts)`));
}

console.log(`\nGuardado en ${runsPath}\n`);
