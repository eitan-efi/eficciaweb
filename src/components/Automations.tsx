"use client";

import { motion } from "framer-motion";
import { Lightning, Files, PaperPlaneRight, Database, ChartBar, Wrench } from "@phosphor-icons/react/dist/ssr";

const automations = [
    {
        id: "01",
        title: "Respuesta Inmediata",
        description: "Cierra la brecha de atención. Contestar a leads en menos de 5 minutos te hace 10x más propenso a convertirlos.",
        icon: <Lightning weight="duotone" className="w-8 h-8 text-accent" />
    },
    {
        id: "02",
        title: "Procesamiento de Documentos",
        description: "Elimina horas de data entry manual. Extraemos información crítica de cientos de PDFs sin errores humanos.",
        icon: <Files weight="duotone" className="w-8 h-8 text-accent/80 group-hover:text-accent transition-colors" />
    },
    {
        id: "03",
        title: "Secuencias de Seguimiento",
        description: "Sella las fugas de tu pipeline. El 80% de los cierres requiere más de 5 toques; nosotros lo hacemos por ti.",
        icon: <PaperPlaneRight weight="duotone" className="w-8 h-8 text-accent/80 group-hover:text-accent transition-colors" />
    },
    {
        id: "04",
        title: "Reactivación de BD",
        description: "Despierta ingresos dormidos. Reactiva leads congelados y clientes antiguos de tu CRM con IA conversacional.",
        icon: <Database weight="duotone" className="w-8 h-8 text-accent/80 group-hover:text-accent transition-colors" />
    },
    {
        id: "05",
        title: "Reportes Automáticos",
        description: "Sistemas de KPIs al instante. Recibe resúmenes ejecutivos directamente en tu Slack o WhatsApp diario.",
        icon: <ChartBar weight="duotone" className="w-8 h-8 text-accent/80 group-hover:text-accent transition-colors" />
    },
    {
        id: "06",
        title: "Automatización a Medida",
        description: "¿Tienes un cuello de botella único? Cuéntanos tu proceso actual y diseñamos el sistema para delegarlo a la IA.",
        icon: <Wrench weight="duotone" className="w-8 h-8 text-accent" />
    }
];

export function Automations() {
    return (
        <section className="py-32 bg-black px-4 sm:px-6 relative" id="automatizacion">
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="container max-w-6xl mx-auto relative z-10">
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-accent/10 text-accent border border-accent/20 shadow-[0_0_10px_rgba(2,132,199,0.2)]">
                            Victorias Rápidas
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6 text-white text-balance">
                            Nuestros Servicios. <br className="hidden md:block" />
                            <span className="text-accent/80">Resultados palpables hoy.</span>
                        </h2>
                        <p className="text-lg text-white/50 max-w-2xl font-light">
                            Desházte de tareas repetitivas y gana más facilidad operativa. Implementamos las soluciones precisas que tus sueños de rentabilidad exigen, evitando la complejidad innecesaria.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {automations.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(2,132,199,0.1)] transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />

                            <div className="flex flex-col h-full relative z-10">
                                <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-accent/10 border border-white/5 group-hover:border-accent/20 transition-all duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-medium text-white tracking-tight mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent/80 transition-all duration-300">{item.title}</h3>
                                <p className="text-white/50 leading-relaxed font-light flex-1">{item.description}</p>

                                <div className="mt-8 flex items-center text-sm font-bold tracking-wide text-white/20 group-hover:text-accent/60 transition-colors duration-300">
                                    <span className="mr-2">&mdash;</span> {item.id}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
