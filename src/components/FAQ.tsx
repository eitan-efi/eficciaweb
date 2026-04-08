"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";
import { COPY } from "@/lib/copy";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COPY.faq.items.map((item) => ({
    "@type": "Question",
    name: item.pregunta,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.respuesta,
    },
  })),
};

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const copy = COPY.faq;

  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-medium tracking-wide uppercase mb-6">
          {copy.badge}
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight whitespace-pre-line">
          {copy.headline}
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {copy.items.map((item, index) => {
          const isOpen = open === index;
          return (
            <div
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] hover:border-sky-500/30 transition-colors"
            >
              <button
                onClick={() => setOpen(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-white font-medium text-base leading-snug">
                  {item.pregunta}
                </span>
                <span className="shrink-0 text-sky-400">
                  {isOpen ? <Minus size={20} weight="bold" /> : <Plus size={20} weight="bold" />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white/60 leading-relaxed text-base">
                      {item.respuesta}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
