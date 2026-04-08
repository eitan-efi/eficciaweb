"use client";

import { motion } from "framer-motion";
import { COPY } from "@/lib/copy";

export function Outcomes() {
    return (
        <section className="py-32 bg-black px-4 sm:px-6 relative" id="resultados">
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="container max-w-6xl mx-auto relative z-10">
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 shadow-[0_0_10px_rgba(2,132,199,0.2)]">
                            {COPY.outcomes.badge}
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6 text-white text-balance whitespace-pre-wrap">
                            {COPY.outcomes.headline}
                        </h2>
                        <p className="text-lg text-white/50 max-w-2xl font-light">
                            {COPY.outcomes.subheadline}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {COPY.outcomes.items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-sky-500/40 hover:shadow-[0_0_30px_rgba(2,132,199,0.1)] transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-sky-500/5 to-transparent pointer-events-none" />

                            <div className="flex flex-col h-full relative z-10">
                                <div className="mb-6 flex items-baseline">
                                    <span className="text-5xl font-medium text-sky-400 tracking-tight group-hover:scale-105 transition-transform duration-500 origin-left">
                                        {item.metrica}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-medium text-white tracking-tight mb-3 transition-colors duration-300 flex-none">{item.titulo}</h3>
                                <p className="text-white/50 leading-relaxed font-light flex-1">{item.descripcion}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
