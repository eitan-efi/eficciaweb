"use client";

import { motion } from "framer-motion";
import { PremiumButton } from "./PremiumButton";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-black">
            {/* Background Liquid Glass / Grain effect placeholder */}
            <div className="absolute inset-0 z-0 bg-background pointer-events-none" />

            {/* Morningside inspired ambient glow */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-accent/30 rounded-full blur-[140px] opacity-60 pointer-events-none mix-blend-screen" />
            <div className="absolute inset-0 z-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

            <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl flex flex-col items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest uppercase rounded-full bg-accent/10 sm:bg-white/5 text-accent sm:text-foreground border border-accent/20 sm:border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(2,132,199,0.3)]"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Tu socio estratégico para crecer con IA
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-medium tracking-tighter leading-[1.0] text-foreground mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                        Inteligencia Artificial <br className="hidden md:block" />
                        Que Mueve La Aguja.
                    </h1>

                    <p className="text-lg md:text-2xl text-foreground/50 max-w-3xl leading-relaxed mb-12 font-light">
                        Sistemas, automatizaciones y agentes para tu PYME. Diagnóstico, claridad e implementación sin los costos de una consultora tradicional.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <PremiumButton href="https://calendly.com/eitan-eficcia/30min" variant="primary" className="h-14 px-10 text-base shadow-[0_0_40px_-5px_rgba(2,132,199,0.6)] border border-accent/20 bg-accent text-white hover:bg-accent/90" icon={<ArrowRight weight="bold" className="ml-2 w-5 h-5" />}>
                            Agendar Llamada Gratuita
                        </PremiumButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
