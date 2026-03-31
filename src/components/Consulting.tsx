"use client";

import { motion } from "framer-motion";
import { PremiumButton } from "./PremiumButton";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const steps = [
    { id: "01", title: "Auditoría Profunda", desc: "Revisamos cómo funciona tu empresa por dentro: qué procesos consumen más tiempo, dónde se escapa dinero y qué tiene sentido automatizar primero." },
    { id: "02", title: "Hoja de Ruta Concreta", desc: "No te dejamos con un PDF y buena suerte. Armamos el plan con herramientas concretas, tiempos reales y pasos claros para ejecutar." },
    { id: "03", title: "Implementación Real", desc: "Construimos e integramos todo en tus procesos reales. Tú no necesitas tocar código ni entender la tecnología — nosotros nos encargamos." },
    { id: "04", title: "Medición y Escalabilidad", desc: "Medimos qué está funcionando: tiempo ahorrado, leads capturados, ventas generadas. Si funciona, lo escalamos a más áreas de tu empresa." }
];

export function Consulting() {
    return (
        <section className="py-32 w-full bg-[#050505] relative overflow-hidden" id="metodologia">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-accent/20 text-accent ring-1 ring-inset ring-accent/30">
                            Cómo trabajamos
                        </div>
                        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6 text-white leading-tight">
                            Construimos sistemas. <br className="hidden md:block" />
                            <span className="text-white/30">No tiramos parches.</span>
                        </h2>
                        <p className="text-xl text-white/50 max-w-lg font-light leading-relaxed">
                            Cuatro pasos para tener IA funcionando en tu empresa — sin que necesites saber de tecnología ni contratar un equipo técnico.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="shrink-0 pt-4"
                    >
                        <PremiumButton href="https://calendly.com/eitan-eficcia/30min" variant="primary" className="h-14 px-8 bg-white text-black hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.15)]" icon={<ArrowUpRight className="w-5 h-5 ml-2" />}>
                            Analizar mi Empresa
                        </PremiumButton>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-10 hover:border-accent/30 transition-colors duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:via-accent transition-all duration-700 opacity-0 group-hover:opacity-100" />

                            <h3 className="text-6xl font-light text-white/10 mb-6 font-mono tracking-tighter group-hover:text-accent/20 transition-colors">
                                {step.id}
                            </h3>
                            <h4 className="text-2xl font-medium mb-4 text-white">{step.title}</h4>
                            <p className="text-white/50 leading-relaxed text-lg">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
