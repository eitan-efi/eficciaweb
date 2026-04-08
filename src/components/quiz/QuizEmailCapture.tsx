import React, { useState } from "react";
import { motion } from "framer-motion";
import { COPY } from "@/lib/copy";
import { QuizAnswers, QuizResultType, QuizSubmitPayload, QuizSubmitResponse } from "@/lib/types";
import { EnvelopeSimple, ArrowRight, CircleNotch, CheckCircle } from "@phosphor-icons/react";

interface QuizEmailCaptureProps {
    answers: QuizAnswers;
    resultado: QuizResultType;
    onSubmit: () => void;
}

export function QuizEmailCapture({ answers, resultado, onSubmit }: QuizEmailCaptureProps) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const copy = COPY.quiz.paso_email;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            setError("Por favor, ingresa un email válido.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            if (!answers.rubro || !answers.tamano || !answers.dolor || !answers.whatsapp) {
                throw new Error("Faltan respuestas del diagnóstico. Inténtalo de nuevo.");
            }

            const payload: QuizSubmitPayload = {
                email,
                rubro: answers.rubro,
                tamano: answers.tamano,
                dolor: answers.dolor,
                whatsapp: answers.whatsapp,
                resultado,
            };

            const res = await fetch("/api/quiz/submit", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: { "Content-Type": "application/json" }
            });

            const raw = await res.text();
            let data: QuizSubmitResponse | null = null;

            if (raw) {
                try {
                    data = JSON.parse(raw) as QuizSubmitResponse;
                } catch {
                    throw new Error("No pudimos procesar la respuesta del servidor.");
                }
            }

            if (!res.ok || !data?.ok) {
                throw new Error(data?.error || "Hubo un error al guardar tu resultado.");
            }

            onSubmit();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Ocurrió un error inesperado.");
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center max-w-2xl mx-auto w-full"
        >
            <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center mb-8 border border-sky-500/20">
                <EnvelopeSimple size={32} className="text-sky-400" weight="duotone" />
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 text-center text-balance">
                {copy.pregunta}
            </h2>
            <p className="text-lg text-white/50 mb-12 text-center max-w-md">
                {copy.subpregunta}
            </p>

            <div className="w-full mb-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex flex-col gap-3 text-left">
                    {copy.bullets?.map((item: string) => (
                        <div key={item} className="flex items-start gap-3">
                            <CheckCircle size={18} weight="fill" className="text-sky-400 shrink-0 mt-0.5" />
                            <p className="text-sm text-white/70 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-4 text-xs text-white/40 text-left leading-relaxed">
                    {copy.trust}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                <div className="relative w-full">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError("");
                        }}
                        placeholder={copy.placeholder}
                        className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-6 text-xl text-white placeholder-white/30 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all text-center"
                        disabled={loading}
                    />
                </div>

                {error && (
                    <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="group w-full bg-sky-600 hover:bg-sky-500 text-white rounded-2xl px-8 py-6 text-xl font-medium transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed border border-sky-400/20 shadow-[0_0_40px_-10px_rgba(2,132,199,0.4)]"
                >
                    {loading ? (
                        <CircleNotch size={24} className="animate-spin" />
                    ) : (
                        <>
                            {copy.cta}
                            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>
        </motion.div>
    );
}
