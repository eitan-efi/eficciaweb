const evidence = [
  {
    eyebrow: "Captura de demanda",
    title: "Consultas y oportunidades ya entrando al sistema",
    body:
      "Ya hay flujos activos capturando intención comercial, ordenando consultas y dejando trazabilidad para seguimiento.",
  },
  {
    eyebrow: "Automatización operativa",
    title: "Procesos conectados para responder y derivar mejor",
    body:
      "La operación ya puede clasificar señales, activar handoff comercial y reducir trabajo manual en puntos críticos del proceso.",
  },
  {
    eyebrow: "Medición y control",
    title: "Eventos y señales útiles ya visibles para tomar decisiones",
    body:
      "No mostramos promesas vacías. Mostramos implementaciones donde la medición ya está encendida y la operación puede mejorar con datos.",
  },
];

export function Testimonials() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-medium tracking-wide uppercase mb-6">
          Evidencia operativa
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
          Lo que ya está funcionando
          <br />en una implementación real.
        </h2>
        <p className="max-w-2xl text-white/55 leading-relaxed">
          No mostramos ratings ni testimonios inventados. Mostramos señales generales del tipo de operación que ya
          estamos ayudando a ordenar, medir y automatizar en implementaciones reales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {evidence.map((item) => (
          <div
            key={item.title}
            className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] text-left"
          >
            <p className="text-xs font-semibold tracking-[2px] uppercase text-sky-400 mb-4">
              {item.eyebrow}
            </p>
            <p className="text-base font-medium text-white mb-2">{item.title}</p>
            <p className="text-white/55 leading-relaxed text-sm">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
