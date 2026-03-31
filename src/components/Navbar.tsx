"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md border-b border-foreground/5"
        >
            <div className="flex items-center gap-2 relative z-10 w-[140px] h-[38px]">
                <Image
                    src="/logo.png"
                    alt="Eficcia AI Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
                <a href="#automatizacion" className="hover:text-accent transition-colors">Automatización</a>
                <a href="#metodologia" className="hover:text-accent transition-colors">Consultoría</a>
            </div>

            <div className="relative z-10 flex items-center">
                <a
                    href="https://calendly.com/eitan-eficcia/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-all rounded-full bg-foreground text-background hover:bg-foreground/90"
                >
                    <span>Agendar Diagnóstico</span>
                    <ArrowRight weight="bold" className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </motion.nav>
    );
}
