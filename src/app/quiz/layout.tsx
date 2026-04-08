import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz de Diagnóstico de IA para PYMEs",
  description:
    "Responde 4 preguntas y descubre qué automatizar primero en tu empresa. Diagnóstico gratuito de IA para PYMEs en Chile.",
  alternates: {
    canonical: "/quiz",
  },
  openGraph: {
    title: "Quiz de Diagnóstico de IA para PYMEs | Eficcia",
    description:
      "Diagnóstico gratuito en 2 minutos para detectar el cuello de botella principal y la automatización con mayor impacto.",
    url: "https://www.eficcia.com/quiz",
    siteName: "Eficcia",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Quiz de diagnóstico de IA para PYMEs en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiz de Diagnóstico de IA para PYMEs | Eficcia",
    description:
      "Responde 4 preguntas y descubre qué automatizar primero en tu empresa.",
    images: ["/og-image.svg"],
  },
};

const quizPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.eficcia.com/quiz#webpage",
  url: "https://www.eficcia.com/quiz",
  name: "Quiz de Diagnóstico de IA para PYMEs",
  description:
    "Página de diagnóstico gratuito de IA para PYMEs en Chile. En 4 preguntas identifica el principal cuello de botella y la automatización con mayor impacto.",
  inLanguage: "es-CL",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.eficcia.com/#website",
  },
  about: [
    { "@type": "Thing", name: "Diagnóstico de IA" },
    { "@type": "Thing", name: "Automatización para PYMEs" },
    { "@type": "Thing", name: "Chatbots y seguimiento de ventas" },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
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
  publisher: {
    "@type": "Organization",
    "@id": "https://www.eficcia.com/#organization",
  },
};

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizPageSchema) }}
      />
      {children}
    </>
  );
}
