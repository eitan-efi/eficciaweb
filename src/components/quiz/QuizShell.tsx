import React, { ReactNode } from "react";

interface QuizShellProps {
    children: ReactNode;
}

export function QuizShell({ children }: QuizShellProps) {
    return (
        <div className="min-h-screen bg-[#050508] text-slate-200 relative overflow-hidden flex flex-col items-center justify-center py-16 px-4">
            {/* Multi-source glow */}
            <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-sky-600/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-5%] right-[10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-[40%] left-[-5%] w-[300px] h-[300px] bg-sky-400/8 rounded-full blur-[100px] pointer-events-none" />

            {/* Subtle grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Brand mark */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2">
                <p className="text-xs font-bold tracking-[4px] uppercase text-sky-500/60">
                    EFICCIA
                </p>
            </div>

            <div className="relative z-10 w-full max-w-2xl mx-auto">
                {children}
            </div>
        </div>
    );
}
