import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { SummaryBlock } from "@/components/SummaryBlock";
import { DiagnosisReveal } from "@/components/DiagnosisReveal";
import { PainPoints } from "@/components/PainPoints";
import { Outcomes } from "@/components/Outcomes";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";

import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.eficcia.com/#webpage",
        url: "https://www.eficcia.com",
        name: "Eficcia | IA para PYMEs en Chile — Diagnóstico Gratis",
        description:
          "Diagnóstico gratuito de IA para PYMEs en Chile. En 2 minutos identifica qué automatizar primero y qué resultado esperar.",
        isPartOf: {
          "@id": "https://www.eficcia.com/#website",
        },
        about: [
          { "@id": "https://www.eficcia.com/#organization" },
          { "@id": "https://www.eficcia.com/#service-diagnostico" },
        ],
        breadcrumb: {
          "@id": "https://www.eficcia.com/#breadcrumb",
        },
        inLanguage: "es-CL",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.eficcia.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://www.eficcia.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Diagnóstico de IA",
            item: "https://www.eficcia.com/quiz",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Navbar />
      <main className="w-full min-h-[100dvh] flex flex-col items-center">
        <Hero />
        <ProofStrip />
        <SummaryBlock />
        <DiagnosisReveal />
        <PainPoints />
        <Outcomes />
        <Testimonials />
        <Process />

        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
