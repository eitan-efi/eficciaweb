"use client";

import { motion } from "framer-motion";
import { COPY } from "@/lib/copy";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function PainPoints() {
    return (
        <section className="py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden">
            <div className="container max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-white/5 text-white/70 ring-1 ring-inset ring-white/10">
                        {COPY.painPoints.badge}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white whitespace-pre-wrap leading-tight">
                        {COPY.painPoints.headline}
                    </h2>
                </div>

                <div className="flex flex-col gap-4 mb-16 px-4 md:px-12 w-full max-w-3xl mx-auto">
                    {COPY.painPoints.items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex items-start gap-4 p-5 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-sky-500/20 transition-colors"
                        >
                            <CheckCircle weight="fill" className="text-sky-500 w-6 h-6 shrink-0 mt-0.5" />
                            <p className="text-lg text-white/80 font-light leading-relaxed">
                                {item}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center w-full">
                    <Link
                        href="/quiz"
                        className="group w-full max-w-[320px] inline-flex items-center justify-center h-14 px-8 text-base font-medium rounded-full shadow-[0_0_30px_-5px_rgba(2,132,199,0.5)] border border-sky-500/20 bg-sky-600 text-white hover:bg-sky-500 transition-all duration-300"
                    >
                        {COPY.painPoints.cta}
                        <ArrowRight weight="bold" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
