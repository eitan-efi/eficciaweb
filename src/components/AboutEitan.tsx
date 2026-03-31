"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PremiumButton } from "./PremiumButton";

export function AboutEitan() {
    return (
        <section className="py-32 w-full bg-background text-foreground border-t border-white/5" id="sobre-mi">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start"
                    >
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                            Soy Eitan Markovits.
                        </h2>
                        <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                            Fundé Eficcia porque vi a muchas PYMEs perder dinero en software caro o en consultorías que solo entregan presentaciones sin ejecución.
                        </p>
                        <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                            Trabajo directamente con los dueños, sin capas de intermediarios. Combino agilidad, pragmatismo y foco en ventas. Si la IA no genera caja o no ahorra costos, no perdemos tiempo.
                        </p>

                        <div className="flex gap-4 flex-wrap">
                            <PremiumButton href="https://calendly.com/eitan-eficcia/30min" variant="primary" className="bg-white text-black hover:bg-white/90" icon={<ArrowUpRight className="w-4 h-4 ml-2" />}>
                                Hablemos
                            </PremiumButton>
                            <a
                                href="https://linkedin.com/in/eitanmarkovits"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>
                    <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-background/5 p-8 flex border border-background/10 items-end">
                        <div className="text-background/40 font-mono text-sm max-w-xs absolute bottom-8 left-8">
                            "El perfeccionismo que no agrega valor es un desperdicio." <br /> — E.M.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
