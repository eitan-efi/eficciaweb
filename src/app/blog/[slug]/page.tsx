import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS, getPost, type BlogSection } from "@/lib/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.titulo,
    description: post.descripcion,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.titulo,
      description: post.descripcion,
      type: "article",
      publishedTime: post.fecha,
      authors: ["Eitan Markovits Haim"],
    },
  };
}

function renderSection(section: BlogSection, i: number) {
  switch (section.tipo) {
    case "h2":
      return (
        <h2 key={i} className="text-2xl font-semibold text-white mt-12 mb-4 tracking-tight">
          {section.texto}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-xl font-medium text-white mt-8 mb-3">
          {section.texto}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-white/70 leading-relaxed mb-4">
          {section.texto}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mb-4 space-y-2 pl-0">
          {section.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-white/70">
              <span className="text-sky-400 mt-1 shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mb-4 space-y-3 pl-0 counter-reset-[step]">
          {section.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-4 text-white/70">
              <span className="text-sky-400 font-bold text-sm w-5 shrink-0 mt-0.5">{j + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "tabla":
      return (
        <div key={i} className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                {section.headers?.map((h, j) => (
                  <th key={j} className="text-left py-3 pr-6 text-white/40 font-medium uppercase tracking-wider text-xs">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.filas?.map((fila, j) => (
                <tr key={j} className="border-b border-white/[0.06]">
                  {fila.map((celda, k) => (
                    <td key={k} className="py-3 pr-6 text-white/70">
                      {celda}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titulo,
    description: post.descripcion,
    datePublished: post.fecha,
    dateModified: post.fecha,
    inLanguage: "es-CL",
    author: {
      "@type": "Person",
      name: "Eitan Markovits Haim",
      url: "https://www.eficcia.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Eficcia",
      url: "https://www.eficcia.com",
    },
    mainEntityOfPage: `https://www.eficcia.com/blog/${post.slug}`,
    about: { "@type": "Thing", name: `IA para ${post.rubro} en Chile` },
  };

  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="max-w-2xl mx-auto px-6 py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-white/30 mb-12">
          <Link href="/" className="hover:text-white/60 transition-colors">Eficcia</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
          <span>›</span>
          <span className="text-sky-500/70">{post.rubro}</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-[2px] uppercase text-sky-500/70 border border-sky-500/20 bg-sky-500/10 px-3 py-1 rounded-full">
              {post.rubro}
            </span>
            <span className="text-white/20 text-xs">·</span>
            <span className="text-white/30 text-xs">{post.tiempoLectura}</span>
            <span className="text-white/20 text-xs">·</span>
            <time className="text-white/30 text-xs" dateTime={post.fecha}>
              {new Date(post.fecha).toLocaleDateString("es-CL", {
                year: "numeric", month: "long", day: "numeric",
              })}
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight mb-4">
            {post.titulo}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">{post.descripcion}</p>
        </header>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* Content */}
        <div>{post.contenido.map(renderSection)}</div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-16 mb-10" />

        {/* CTA */}
        <div className="border border-sky-500/20 rounded-2xl p-8 bg-sky-500/5 text-center">
          <p className="text-white/60 text-sm mb-2">¿Quieres saber si esto aplica a tu empresa?</p>
          <h3 className="text-xl font-semibold text-white mb-6">
            Responde 4 preguntas y te decimos exactamente qué automatizar.
          </h3>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white rounded-full px-8 py-4 font-medium transition-all text-sm"
          >
            Comenzar diagnóstico gratis →
          </Link>
        </div>
      </article>
    </main>
  );
}
