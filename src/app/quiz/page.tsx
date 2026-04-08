import type { Metadata } from "next";
import { QuizPageClient } from "@/components/quiz/QuizPageClient";

export const metadata: Metadata = {
  title: "Quiz de Diagnóstico IA para PYMEs",
  description:
    "Responde 4 preguntas y recibe un diagnóstico personalizado de IA para tu empresa. Descubre si debes automatizar atención, seguimiento comercial u operaciones internas.",
  alternates: {
    canonical: "/quiz",
  },
  openGraph: {
    title: "Quiz de Diagnóstico IA para PYMEs | Eficcia",
    description:
      "En 2 minutos descubre qué automatizar primero en tu empresa y qué resultado puedes esperar.",
    url: "https://www.eficcia.com/quiz",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Quiz de diagnóstico de IA para PYMEs de Eficcia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiz de Diagnóstico IA para PYMEs | Eficcia",
    description:
      "Responde 4 preguntas y te decimos qué automatizar primero en tu empresa.",
    images: ["/og-image.svg"],
  },
};

const quizSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.eficcia.com/quiz#webpage",
      url: "https://www.eficcia.com/quiz",
      name: "Quiz de Diagnóstico IA para PYMEs",
      description:
        "Diagnóstico interactivo para identificar qué proceso conviene automatizar primero en una PYME chilena.",
      isPartOf: {
        "@id": "https://www.eficcia.com/#website",
      },
      about: {
        "@id": "https://www.eficcia.com/#service-diagnostico",
      },
      inLanguage: "es-CL",
      breadcrumb: {
        "@id": "https://www.eficcia.com/quiz#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.eficcia.com/quiz#breadcrumb",
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
          name: "Quiz de diagnóstico",
          item: "https://www.eficcia.com/quiz",
        },
      ],
    },
  ],
};

export default function QuizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
      />
      <QuizPageClient />
    </>
  );
}
