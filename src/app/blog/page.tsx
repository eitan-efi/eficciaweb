import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — IA para PYMEs",
  description:
    "Guías prácticas de automatización e inteligencia artificial para PYMEs en Chile. Retail, servicios profesionales, salud y más.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog de IA para PYMEs | Eficcia",
    description:
      "Guías prácticas para automatizar atención, seguimiento comercial y operación interna en empresas chilenas.",
    url: "https://www.eficcia.com/blog",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Blog de IA para PYMEs de Eficcia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de IA para PYMEs | Eficcia",
    description:
      "Guías prácticas para automatizar atención, seguimiento comercial y operación interna.",
    images: ["/og-image.svg"],
  },
};

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.eficcia.com/blog#collection",
        url: "https://www.eficcia.com/blog",
        name: "Blog de IA para PYMEs",
        description:
          "Colección de guías prácticas de automatización e inteligencia artificial para PYMEs en Chile.",
        isPartOf: {
          "@id": "https://www.eficcia.com/#website",
        },
        about: {
          "@id": "https://www.eficcia.com/#organization",
        },
        inLanguage: "es-CL",
      },
      {
        "@type": "ItemList",
        "@id": "https://www.eficcia.com/blog#itemlist",
        itemListElement: BLOG_POSTS.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `https://www.eficcia.com/blog/${post.slug}`,
          name: post.titulo,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.eficcia.com/blog#breadcrumb",
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
            name: "Blog",
            item: "https://www.eficcia.com/blog",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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

        <div className="mt-16 border border-sky-500/20 rounded-2xl p-8 bg-sky-500/5">
          <p className="text-white/60 text-sm mb-2">¿Quieres aplicarlo a tu empresa?</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-3">
            Parte por el diagnóstico y te decimos qué automatizar primero.
          </h2>
          <p className="text-white/55 leading-relaxed mb-6">
            El blog te muestra patrones. El quiz te dice cuál de esos patrones aplica a tu caso.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white rounded-full px-6 py-3 text-sm font-medium transition-all"
          >
            Ir al diagnóstico gratis →
          </Link>
        </div>
      </div>
    </main>
  );
}
