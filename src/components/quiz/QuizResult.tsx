import React from "react";
import { motion } from "framer-motion";
import { QuizResultType, QuizAnswers } from "@/lib/types";
import { COPY } from "@/lib/copy";
import { QUIZ_RESULTS } from "@/lib/quiz-data";
import { CalendarBlank, Target, ChartLineUp, CheckCircle } from "@phosphor-icons/react";

interface QuizResultProps {
    resultado: QuizResultType;
    answers: QuizAnswers;
}

export function QuizResult({ resultado }: QuizResultProps) {
    const data = QUIZ_RESULTS[resultado];
    const copy = COPY.quiz.resultado;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center w-full max-w-3xl mx-auto"
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-medium tracking-wide uppercase mb-8">
                <Target size={16} weight="bold" />
                {copy.badge}
            </div>

            <div className="w-full bg-white/[0.02] border border-sky-500/20 rounded-[2rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-sky-600/10 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                            {data.titulo}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                            {data.descripcion}
                        </p>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
                        <div className="bg-sky-500/20 p-3 rounded-xl shrink-0 mt-1">
                            <ChartLineUp size={24} className="text-sky-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white mb-2">Impacto esperado</h3>
                            <p className="text-white/60 leading-relaxed">
                                {data.impacto}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[2px] text-sky-400 mb-4">
                    Qué pasa en la revisión
                </h3>
                <div className="flex flex-col gap-3">
                    {copy.next_steps?.map((item: string) => (
                        <div key={item} className="flex items-start gap-3">
                            <CheckCircle size={18} weight="fill" className="text-sky-400 shrink-0 mt-0.5" />
                            <p className="text-sm text-white/70 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex flex-col items-center gap-4 mt-12">
                <a
                    href={copy.cta_calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-sky-600 hover:bg-sky-500 text-white rounded-full px-10 py-5 text-xl font-medium transition-all border border-sky-400/20 shadow-[0_0_40px_-5px_rgba(2,132,199,0.5)]"
                >
                    {copy.cta_label}
                    <CalendarBlank size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
                <p className="text-sm text-white/40">
                    {copy.nota}
                </p>
            </div>
        </motion.div>
    );
}
