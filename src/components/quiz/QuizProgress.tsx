import React from "react";
import { motion } from "framer-motion";

interface QuizProgressProps {
    step: number;
    total: number;
}

export function QuizProgress({ step, total }: QuizProgressProps) {
    return (
        <div className="w-full mb-14">
            <div className="flex items-center gap-2 mb-3">
                {Array.from({ length: total }, (_, i) => (
                    <motion.div
                        key={i}
                        className="flex-1 h-[3px] rounded-full overflow-hidden bg-white/10"
                    >
                        <motion.div
                            className="h-full rounded-full bg-sky-500"
                            initial={{ width: 0 }}
                            animate={{ width: i < step ? "100%" : "0%" }}
                            transition={{ duration: 0.45, ease: "easeOut", delay: i < step ? 0 : 0 }}
                        />
                    </motion.div>
                ))}
            </div>
            <p className="text-xs font-semibold tracking-[2px] uppercase text-white/30 text-right">
                {step} / {total}
            </p>
        </div>
    );
}
