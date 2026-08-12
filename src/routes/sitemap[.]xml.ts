import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { allBairroSlugs } from "@/lib/bairros";

const BASE_URL = "https://www.fastvidro.com.br";

// ============================================================
// MODELOS POR CATEGORIA — slugs reais que possuem rota estática
// (correspondem aos arquivos box-de-banheiro.flex.tsx, etc.)
// ============================================================
const MODEL_SLUGS: Record<string, string[]> = {
  "box-de-banheiro": [
    "flex",
    "piso-teto",
    "tradicional",
    "transfer",
    "nobre",
    "elegance",
    "secure-box",
    "de-abrir",
  ],
  "portas-de-vidro": [
    "vision",
    "nobre",
    "certa",
    "flex",
    "abrir",
    "correr",
    "versatik",
  ],
  espelhos: ["organico", "banheiro", "painel", "lapidado", "bisote"],
  projetos: [
    "residencial",
    "comercial",
    "escritorios",
    "guarda-corpo",
    "fechamento-sacada",
    "coberturas",
  ],
};

// ============================================================
// POSTS DO BLOG — slugs reais (URL final: /blog/<slug>)
// ============================================================
const BLOG_POSTS = [
  "alerta-seguranca-box-travando",
  "box-3-folhas-sistema-versatik",
  "box-abrir-vs-correr",
  "box-banheiro-casa-verde-imirim",
  "box-banheiro-jardim-sao-paulo",
  "box-banheiro-mandaqui",
  "box-banheiro-tucuruvi",
  "box-banheiro-vidro-santana",
  "box-banheiro-vila-guilherme",
  "box-banheiro-zona-norte",
  "box-convencional-vs-ate-o-teto",
  "box-de-canto",
  "box-elegance-roldanas-aparentes",
  "box-tradicional-vs-flex",
  "como-limpar-box-banheiro",
  "como-medir-box-banheiro",
  "como-saber-qual-box-usar",
  "cor-box-incolor-fume-verde-bronze",
  "espelhos-led-sob-medida",
  "faq-box-banheiro",
  "fast-vidro-historia",
  "manutencao-box-banheiro",
  "secure-box-pelicula-protecao",
];

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const bairros = allBairroSlugs();

        const entries: SitemapEntry[] = [
          // ---- Páginas estáticas principais ----
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/box-de-banheiro", changefreq: "monthly", priority: "0.9" },
          { path: "/box-de-vidro-zona-norte", changefreq: "monthly", priority: "0.9" },
          { path: "/box-de-vidro-zona-sul", changefreq: "monthly", priority: "0.9" },
          { path: "/box-de-vidro-zona-oeste", changefreq: "monthly", priority: "0.9" },
          { path: "/box-de-vidro-zona-leste", changefreq: "monthly", priority: "0.9" },
          { path: "/portas-de-vidro", changefreq: "monthly", priority: "0.9" },
          { path: "/espelhos", changefreq: "monthly", priority: "0.9" },
          { path: "/espelhos-led", changefreq: "monthly", priority: "0.9" },
          { path: "/projetos", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/box-fume", changefreq: "monthly", priority: "0.8" },
          { path: "/box-incolor", changefreq: "monthly", priority: "0.8" },

          // ---- Páginas de modelo (URLs reais e finais) ----
          ...Object.entries(MODEL_SLUGS).flatMap(([cat, slugs]) =>
            slugs.map((slug) => ({
              path: `/${cat}/${slug}`,
              changefreq: "monthly" as const,
              priority: "0.8",
            })),
          ),

          // ---- Páginas de bairro por categoria (URLs reais e finais) ----
          ...bairros.map((slug) => ({
            path: `/servicos/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...bairros.map((slug) => ({
            path: `/espelhos/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...bairros.map((slug) => ({
            path: `/portas-de-vidro/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...bairros.map((slug) => ({
            path: `/projetos/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...bairros.map((slug) => ({
            path: `/secure-box/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),

          // ---- Posts do blog (URLs reais e finais) ----
          ...BLOG_POSTS.map((slug) => ({
            path: `/blog/${slug}`,
            changefreq: "weekly" as const,
            priority: "0.6",
          })),
        ];

        // Segurança: remove qualquer URL que ainda contenha variáveis
        // de rota ($bairro, $modelo, etc.) — só URLs reais e finais.
        const safe = entries.filter((e) => !e.path.includes("$"));

        const urls = safe.map((e) =>
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
