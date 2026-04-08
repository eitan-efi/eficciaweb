import React from "react";
import { COPY } from "@/lib/copy";

export function ProofStrip() {
    return (
        <section className="w-full bg-[#050505] border-y border-white/5 py-8">
            <div className="container max-w-6xl mx-auto px-4 flex flex-col items-center">
                <p className="text-xs uppercase tracking-widest text-white/30 font-semibold mb-6">
                    {COPY.proof.label}
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {COPY.proof.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center pt-6 md:pt-0 pb-6 md:pb-0 px-8">
                            <span className="text-3xl font-medium text-white mb-2">{stat.value}</span>
                            <span className="text-sm text-white/50 font-light max-w-[150px]">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
