import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkle } from "@phosphor-icons/react";

interface QuizMicroInsightProps {
    texto: string;
    onDone: () => void;
}

export function QuizMicroInsight({ texto, onDone }: QuizMicroInsightProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onDone();
        }, 3500); // ~3 seconds + animation time
        return () => clearTimeout(timer);
    }, [onDone]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center min-h-[40vh]"
        >
            <div className="max-w-2xl w-full p-8 rounded-3xl bg-white/[0.03] border border-sky-500/30 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-sky-600/20 blur-[60px] pointer-events-none" />

                <div className="flex flex-col items-center text-center relative z-10 gap-6">
                    <div className="text-sky-400 bg-sky-500/10 p-4 rounded-full">
                        <Sparkle size={32} weight="fill" />
                    </div>
                    <p className="text-2xl md:text-3xl text-white/90 font-medium leading-relaxed max-w-xl text-balance">
                        {texto}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
