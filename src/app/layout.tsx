import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Eficcia - Inteligencia Artificial para tu PYME",
  description: "Diagnóstico, claridad e implementación de IA funcional para PYMEs. Sin intermediarios, solo resultados.",
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
        {children}

        {/* Botón Personalizado de Botpress (Avatar Flotante) */}
        <button 
          id="bp-toggle-chat" 
          className="fixed bottom-8 right-8 w-16 h-16 rounded-full border-[3px] border-white bg-white shadow-lg cursor-pointer p-0 z-[9999] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl group"
          aria-label="Abrir chat de soporte"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://i.pravatar.cc/150?img=11" 
            alt="Asesor Eficcia" 
            className="w-full h-full rounded-full object-cover"
          />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[12px] font-bold w-[22px] h-[22px] flex items-center justify-center rounded-full border-2 border-white animate-pulse">
            1
          </span>
        </button>

        <Script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" strategy="afterInteractive" />
        <Script src="https://files.bpcontent.cloud/2026/03/31/17/20260331173524-1F4B79XI.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
