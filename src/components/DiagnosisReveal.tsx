"use client";

import { motion } from "framer-motion";
import { COPY } from "@/lib/copy";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function DiagnosisReveal() {
    return (
        <section className="py-32 bg-black relative overflow-hidden" id="diagnosis">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 shadow-[0_0_10px_rgba(2,132,199,0.2)]">
                        {COPY.diagnosisReveal.badge}
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6 text-white text-balance whitespace-pre-wrap">
                        {COPY.diagnosisReveal.headline}
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl font-light text-balance leading-relaxed">
                        {COPY.diagnosisReveal.subheadline}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {COPY.diagnosisReveal.cards.map((card, i) => (
                        <motion.div
                            key={card.numero}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-sky-500/40 hover:shadow-[0_0_30px_rgba(2,132,199,0.1)] transition-all duration-500 overflow-hidden text-left"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-sky-500/5 to-transparent pointer-events-none" />

                            <div className="flex flex-col h-full relative z-10">
                                <span className="text-5xl font-light text-white/10 mb-6 font-mono tracking-tighter group-hover:text-sky-500/20 transition-colors">
                                    {card.numero}
                                </span>
                                <h3 className="text-2xl font-medium text-white tracking-tight mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-sky-400 transition-all duration-300 line-clamp-2">
                                    {card.titulo}
                                </h3>
                                <p className="text-white/50 leading-relaxed font-light flex-1">
                                    {card.descripcion}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        href="/quiz"
                        className="group inline-flex items-center justify-center h-14 px-10 text-base font-medium rounded-full shadow-[0_0_20px_-5px_rgba(2,132,199,0.3)] border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-sky-500/30 transition-all duration-300"
                    >
                        {COPY.diagnosisReveal.cta}
                        <ArrowRight weight="bold" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
