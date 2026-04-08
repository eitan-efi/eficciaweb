import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — IA para PYMEs",
  description:
    "Guías prácticas de automatización e inteligencia artificial para PYMEs en Chile. Retail, servicios profesionales, salud y más.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="mb-16">
          <Link href="/" className="text-xs font-semibold tracking-[3px] uppercase text-sky-500/60 hover:text-sky-400 transition-colors">
            ← Eficcia
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-6 mb-4">
            Guías de IA para PYMEs
          </h1>
          <p className="text-white/50 text-lg">
            Implementación práctica, herramientas concretas y resultados reales.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-sky-500/30 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold tracking-[2px] uppercase text-sky-500/70">
                  {post.rubro}
                </span>
                <span className="text-white/20">·</span>
                <span className="text-xs text-white/30">{post.tiempoLectura}</span>
              </div>
              <h2 className="text-xl font-semibold text-white group-hover:text-sky-200 transition-colors leading-snug mb-2">
                {post.titulo}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">{post.descripcion}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
