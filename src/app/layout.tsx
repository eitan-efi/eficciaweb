import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      </body>
    </html>
  );
}
