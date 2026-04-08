"use client";

import { motion } from "framer-motion";
import { COPY } from "@/lib/copy";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function Process() {
    return (
        <section className="py-32 w-full bg-[#050505] relative overflow-hidden" id="metodologia">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-sky-500/10 text-sky-400 ring-1 ring-inset ring-sky-500/20">
                            {COPY.process.badge}
                        </div>
                        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6 text-white leading-tight whitespace-pre-wrap">
                            {COPY.process.headline}
                        </h2>
                        <p className="text-xl text-white/50 max-w-lg font-light leading-relaxed">
                            {COPY.process.subheadline}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="shrink-0 pt-4"
                    >
                        <Link
                            href="/quiz"
                            className="group inline-flex items-center justify-center h-14 px-8 text-base font-medium rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)] border border-white/10 bg-white text-black hover:bg-white/90 transition-all duration-300"
                        >
                            {COPY.process.cta}
                            <ArrowRight weight="bold" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {COPY.process.steps.map((step, i) => (
                        <motion.div
                            key={step.numero}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-10 hover:border-sky-500/30 transition-colors duration-500 group relative overflow-hidden flex flex-col h-full"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500/0 via-sky-500/0 to-sky-500/0 group-hover:via-sky-500 transition-all duration-700 opacity-0 group-hover:opacity-100" />

                            <h3 className="text-6xl font-light text-white/10 mb-6 font-mono tracking-tighter group-hover:text-sky-500/20 transition-colors">
                                {step.numero}
                            </h3>
                            <h4 className="text-2xl font-medium mb-4 text-white">{step.titulo}</h4>
                            <p className="text-white/50 leading-relaxed text-lg flex-1">{step.descripcion}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
