"use client";

import { motion } from "framer-motion";
import { COPY } from "@/lib/copy";
import Link from "next/link";
import { ArrowRight, CalendarBlank } from "@phosphor-icons/react/dist/ssr";

export function FinalCTA() {
    return (
        <section className="py-32 w-full bg-black relative overflow-hidden flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-600/20 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

            <div className="container max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 md:p-16 lg:p-20 flex flex-col items-center text-center backdrop-blur-xl shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-50" />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-semibold rounded-full bg-white/5 text-white/70 tracking-wide uppercase shadow-sm border border-white/10">
                            {COPY.finalCta.badge}
                        </div>

                        <h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-6 text-white whitespace-pre-wrap leading-tight">
                            {COPY.finalCta.headline}
                        </h2>

                        <p className="text-xl text-white/50 max-w-xl font-light leading-relaxed mb-12 text-balance">
                            {COPY.finalCta.subheadline}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                            <Link
                                href="/quiz"
                                className="group w-full sm:w-auto inline-flex items-center justify-center h-14 px-10 text-lg font-medium rounded-full shadow-[0_0_40px_-5px_rgba(2,132,199,0.7)] border border-sky-500/20 bg-sky-600 text-white hover:bg-sky-500 transition-all duration-300"
                            >
                                {COPY.finalCta.cta_primary}
                                <ArrowRight weight="bold" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href={COPY.finalCta.cta_secondary_href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full sm:w-auto inline-flex items-center justify-center h-14 px-10 text-lg font-medium rounded-full border border-white/10 bg-transparent text-white hover:bg-white/5 transition-all duration-300"
                            >
                                {COPY.finalCta.cta_secondary}
                                <CalendarBlank weight="bold" className="ml-2 w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>

                        <p className="mt-8 text-sm text-white/30 font-light">
                            {COPY.finalCta.nota}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
