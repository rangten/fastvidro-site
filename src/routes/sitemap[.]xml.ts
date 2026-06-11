import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { allBairroSlugs } from "@/lib/bairros";

const BASE_URL = "https://www.fastvidro.com.br";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/box-de-banheiro", changefreq: "monthly", priority: "0.9" },
          { path: "/portas-de-vidro", changefreq: "monthly", priority: "0.9" },
          { path: "/espelhos", changefreq: "monthly", priority: "0.9" },
          { path: "/espelhos-led", changefreq: "monthly", priority: "0.9" },
          { path: "/projetos", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          ...allBairroSlugs().map((slug) => ({
            path: `/servicos/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
