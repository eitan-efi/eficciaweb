import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { COPY } from "@/lib/copy";

export function SummaryBlock() {
  const copy = COPY.summaryBlock;

  return (
    <section className="w-full bg-[#050508] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-medium tracking-wide uppercase mb-5">
            {copy.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            {copy.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {copy.items.map((item) => (
            <div
              key={item.titulo}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left"
            >
              <p className="text-xs font-semibold tracking-[2px] uppercase text-sky-400 mb-3">
                {item.titulo}
              </p>
              <p className="text-white/70 leading-relaxed">{item.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/quiz"
            className="group inline-flex items-center justify-center h-12 px-8 text-sm font-medium rounded-full border border-sky-500/20 bg-sky-600 text-white hover:bg-sky-500 transition-all duration-300"
          >
            {copy.cta}
            <ArrowRight weight="bold" className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
