import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050508" },
    { media: "(prefers-color-scheme: light)", color: "#050508" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eficcia.com"),
  title: {
    default: "Eficcia | IA para PYMEs en Chile — Diagnóstico Gratis",
    template: "%s | Eficcia",
  },
  description:
    "Diagnóstico gratuito de IA para tu PYME en Chile. En 2 minutos descubre qué automatizar: chatbots, seguimiento de ventas y operaciones internas para empresas de 8 a 50 personas.",
  keywords: [
    "IA para PYMEs Chile",
    "inteligencia artificial empresas Chile",
    "automatización PYME",
    "chatbot empresa WhatsApp",
    "consultoría IA Chile",
    "automatizar ventas PYME",
  ],
  authors: [{ name: "Eitan Markovits Haim" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Eficcia | IA para PYMEs en Chile",
    description:
      "Diagnóstico gratuito de IA en 2 minutos. Descubre exactamente qué automatizar en tu empresa.",
    url: "https://www.eficcia.com",
    siteName: "Eficcia",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eficcia — IA para PYMEs en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eficcia | IA para PYMEs en Chile",
    description: "Diagnóstico gratuito de IA en 2 minutos. Descubre exactamente qué automatizar.",
    images: ["/og-image.png"],
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.eficcia.com/#organization",
      name: "Eficcia",
      url: "https://www.eficcia.com",
      description:
        "Consultoría de inteligencia artificial para PYMEs. Diagnóstico, hoja de ruta e implementación de chatbots, automatizaciones y dashboards para empresas de 8 a 50 personas en Chile.",
      telephone: "+56954067166",
      email: "eitan@eseficcia.com",
      areaServed: "CL",
      knowsAbout: [
        "Inteligencia Artificial",
        "Automatización de procesos",
        "Chatbots",
        "CRM",
        "PYMEs",
        "WhatsApp Business",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.eficcia.com/#business",
      name: "Eficcia",
      description:
        "Consultoría de IA para PYMEs en Chile. Implementamos chatbots, automatizaciones y dashboards para empresas de 8 a 50 personas.",
      url: "https://www.eficcia.com",
      telephone: "+56954067166",
      email: "eitan@eseficcia.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressCountry: "CL",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.eficcia.com/#website",
      url: "https://www.eficcia.com",
      name: "Eficcia",
      publisher: { "@id": "https://www.eficcia.com/#organization" },
    },
    {
      "@type": "Service",
      "@id": "https://www.eficcia.com/#service-diagnostico",
      name: "Diagnóstico de IA para PYMEs",
      description:
        "Diagnóstico gratuito en 2 minutos que identifica exactamente qué proceso automatizar en tu empresa. Incluye recomendación personalizada y estimación de horas recuperadas.",
      provider: { "@id": "https://www.eficcia.com/#organization" },
      areaServed: {
        "@type": "Country",
        name: "Chile",
      },
      serviceType: "Consultoría de Inteligencia Artificial",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "CLP",
        availability: "https://schema.org/InStock",
        description: "Diagnóstico gratuito sin compromiso",
      },
    },
    {
      "@type": "Article",
      "@id": "https://www.eficcia.com/#article",
      headline: "IA para PYMEs en Chile — Diagnóstico Gratuito de Automatización",
      description:
        "Diagnóstico gratuito de inteligencia artificial para PYMEs chilenas. Identifica qué automatizar en tu empresa: chatbots, seguimiento de ventas o procesos administrativos.",
      author: {
        "@type": "Person",
        name: "Eitan Markovits Haim",
        url: "https://www.eficcia.com",
      },
      publisher: { "@id": "https://www.eficcia.com/#organization" },
      datePublished: "2026-04-08",
      dateModified: new Date().toISOString().split("T")[0],
      inLanguage: "es-CL",
      about: [
        { "@type": "Thing", name: "Inteligencia Artificial para empresas" },
        { "@type": "Thing", name: "Automatización de procesos" },
        { "@type": "Thing", name: "Chatbots empresariales" },
        { "@type": "Thing", name: "PYMEs Chile" },
      ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark selection:bg-accent/20 selection:text-accent`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        {children}

        {/* Botón Personalizado de Botpress (Avatar Flotante) */}
        <button
          id="bp-toggle-chat"
          className="fixed bottom-8 right-8 w-16 h-16 rounded-full border-[3px] border-white bg-white shadow-lg cursor-pointer p-0 z-[9999] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl group"
          aria-label="Abrir chat de soporte"
        >
          {/* Globo de texto (Speech Bubble) animado intermitente */}
          <div className="absolute bottom-full right-0 mb-4 w-[14rem] sm:w-[16rem] bg-slate-900 text-white text-sm font-semibold p-4 rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] border border-slate-700 pointer-events-none animate-tooltip-fade">
            👋 Hola te ayudo a crecer tu negocio
            {/* Cola del globo apuntando hacia el avatar */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-slate-900 border-b border-r border-slate-700 transform rotate-45"></div>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.pravatar.cc/150?img=11"
            alt="Asesor Eficcia"
            className="w-full h-full rounded-full object-cover pointer-events-none"
          />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[12px] font-bold w-[22px] h-[22px] flex items-center justify-center rounded-full border-2 border-white animate-pulse pointer-events-none">
            1
          </span>
        </button>

        <Script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" strategy="afterInteractive" />
        <Script src="https://files.bpcontent.cloud/2026/03/31/17/20260331173524-1F4B79XI.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
