const evidence = [
  {
    value: "12",
    title: "activaciones de 'Interesado (Asesor)'",
    body:
      "Registradas en el export del 5 de abril de 2026 de CM&D. Es una señal operativa temprana de handoff comercial funcionando.",
  },
  {
    value: "12",
    title: "eventos AddToCart detectados",
    body:
      "Visibles en el export del 5 de abril de 2026. Muestran que el flujo ya está capturando intención comercial y enviando señal útil al sistema.",
  },
  {
    value: "1",
    title: "cliente con medición ya encendida",
    body:
      "CM&D ya tiene el evento Lead visible en Meta vía Conversions API. No es un caso cerrado todavía, pero sí una implementación real operando.",
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
          No mostramos ratings ni testimonios inventados. Mostramos señales concretas de lo que ya está operando
          hoy en el primer cliente activo de Eficcia, con datos internos y etapa todavía temprana.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {evidence.map((item) => (
          <div
            key={item.title}
            className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] text-left"
          >
            <p className="text-5xl font-medium text-sky-400 tracking-tight mb-4">{item.value}</p>
            <p className="text-base font-medium text-white mb-2">{item.title}</p>
            <p className="text-white/55 leading-relaxed text-sm">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
