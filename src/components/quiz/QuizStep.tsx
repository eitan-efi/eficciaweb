"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";
import { QuizStepData } from "@/lib/types";

interface QuizStepProps {
    data: QuizStepData;
    onAnswer: (value: string) => void;
}

export function QuizStep({ data, onAnswer }: QuizStepProps) {
    const [selected, setSelected] = useState<string | null>(null);

    const handleClick = (value: string) => {
        if (selected) return;
        setSelected(value);
        setTimeout(() => onAnswer(value), 380);
    };

    const hasIcons = data.opciones.every((o) => !!o.icon);
    const useGrid = hasIcons && data.opciones.length >= 4;

    return (
        <motion.div
            key={data.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-10 w-full"
        >
            <div className="text-center">
                <p className="text-xs font-semibold tracking-[3px] uppercase text-sky-500/70 mb-4">
                    Pregunta {data.id}
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight text-balance">
                    {data.pregunta}
                </h2>
            </div>

            <div
                className={
                    useGrid
                        ? "grid grid-cols-2 gap-3 w-full"
                        : "flex flex-col gap-3 w-full"
                }
            >
                {data.opciones.map((opcion) => {
                    const isSelected = selected === opcion.value;
                    const isDimmed = selected !== null && !isSelected;

                    return (
                        <button
                            key={opcion.value}
                            onClick={() => handleClick(opcion.value)}
                            disabled={!!selected}
                            className={[
                                "group relative flex items-center gap-4 rounded-2xl border text-left w-full overflow-hidden transition-all duration-300",
                                useGrid ? "flex-col justify-center p-6 aspect-square" : "p-5",
                                isSelected
                                    ? "border-sky-400 bg-sky-500/15 shadow-[0_0_30px_-5px_rgba(14,165,233,0.35)]"
                                    : isDimmed
                                    ? "border-white/5 bg-white/[0.02] opacity-40"
                                    : "border-white/10 bg-white/[0.04] hover:border-sky-500/40 hover:bg-white/8",
                            ].join(" ")}
                        >
                            {/* Hover glow */}
                            {!selected && (
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
                            )}

                            {opcion.icon && (
                                <span
                                    className={[
                                        "text-2xl relative z-10 shrink-0 flex items-center justify-center rounded-xl border transition-colors",
                                        useGrid ? "w-12 h-12" : "w-11 h-11",
                                        isSelected
                                            ? "bg-sky-500/20 border-sky-400/40"
                                            : "bg-white/5 border-white/10 group-hover:bg-sky-500/10 group-hover:border-sky-500/30",
                                    ].join(" ")}
                                >
                                    {opcion.icon}
                                </span>
                            )}

                            <span
                                className={[
                                    "font-medium relative z-10 leading-snug transition-colors",
                                    useGrid ? "text-base text-center" : "text-lg",
                                    isSelected ? "text-white" : "text-white/80 group-hover:text-white",
                                ].join(" ")}
                            >
                                {opcion.label}
                            </span>

                            {/* Checkmark */}
                            <AnimatePresence>
                                {isSelected && (
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className={[
                                            "absolute text-sky-400 z-10",
                                            useGrid ? "top-3 right-3" : "right-4",
                                        ].join(" ")}
                                    >
                                        <CheckCircle size={22} weight="fill" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    );
                })}
            </div>
        </motion.div>
    );
}
