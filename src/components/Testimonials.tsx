const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.eficcia.com/#organization",
  name: "Eficcia",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "15",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Gerente CM&D" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "El chatbot responde en segundos lo que antes tomaba horas de nuestro equipo. Las consultas que llegaban al WhatsApp ya no se pierden.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Dueño de empresa de servicios" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "En dos semanas teníamos automatizado el seguimiento de leads. Cerramos más oportunidades con el mismo equipo.",
    },
  ],
};

const testimonials = [
  {
    quote:
      "El chatbot responde en segundos lo que antes tomaba horas de nuestro equipo. Las consultas que llegaban al WhatsApp ya no se pierden.",
    author: "Gerente de operaciones",
    company: "Empresa de retail, Santiago",
    stars: 5,
  },
  {
    quote:
      "En dos semanas teníamos automatizado el seguimiento de leads. Cerramos más oportunidades con el mismo equipo de ventas.",
    author: "Fundador",
    company: "Consultora de servicios profesionales",
    stars: 5,
  },
  {
    quote:
      "Antes armaba los reportes a mano todos los lunes. Ahora llegan solos a las 8am. Recuperé casi 4 horas semanales.",
    author: "Directora administrativa",
    company: "Clínica médica, Región Metropolitana",
    stars: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "text-amber-400" : "text-white/20"}>
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-medium tracking-wide uppercase mb-6">
          Resultados reales
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
          Lo que dicen las empresas
          <br />que ya implementaron.
        </h2>
        <div className="flex items-center gap-2 text-white/40 text-sm">
          <span className="text-amber-400 text-base">★★★★★</span>
          <span>4.9 / 5 — 15 empresas diagnosticadas</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] flex flex-col gap-4"
          >
            <StarRow count={t.stars} />
            <p className="text-white/80 leading-relaxed text-base flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="text-white font-medium text-sm">{t.author}</p>
              <p className="text-white/40 text-xs mt-0.5">{t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
