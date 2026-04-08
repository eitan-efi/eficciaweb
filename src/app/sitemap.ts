import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.eficcia.com";
  const now = new Date();

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.fecha),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: base,             lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/quiz`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`,   lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    ...blogEntries,
  ];
}
