import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/product-projetos.jpg";
import quemSomosImg from "@/assets/blog-quem-somos-cover.png";
import espelhosLedImg from "@/assets/blog-espelhos-led-cover.png";
import secureBoxImg from "@/assets/blog-secure-box-cover.png";
import boxSantanaImg from "@/assets/blog-box-banheiro-santana-cover.png";
import boxMandaquiImg from "@/assets/blog-box-mandaqui-cover.png";
import boxZonaNorteImg from "@/assets/blog-box-zona-norte-cover.png";
import boxJardimSPImg from "@/assets/blog-box-jardim-sao-paulo-cover.png";
import boxTucuruviImg from "@/assets/blog-box-tucuruvi-cover.png";
import { ArrowRight, Calendar } from "lucide-react";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog Fast Vidro — Dicas, Vidros e Reformas em São Paulo" },
      { name: "description", content: "Guias e artigos sobre box de banheiro, espelhos LED, vidros temperados e tendências de reformas em São Paulo." },
      { property: "og:title", content: "Blog Fast Vidro — Vidros, Box e Espelhos em SP" },
      { property: "og:description", content: "Conteúdo prático sobre vidros, segurança e decoração para sua casa em São Paulo." },
    ],
  }),
  component: Blog,
});

const posts: Array<{
  tag: string;
  date: string;
  img: string;
  title: string;
  excerpt: string;
  to?: string;
}> = [
  {
    tag: "Box de Banheiro • Jardim São Paulo",
    date: "09 de Junho de 2026",
    img: boxJardimSPImg,
    title:
      "Box de Banheiro no Jardim São Paulo: Modelos de Alto Padrão, Segurança e Instalação sob Medida",
    excerpt:
      "Box de banheiro no Jardim São Paulo com vidros temperados 8mm Cebrace/Guardian, película SECURE BOX e instalação a partir de 12x R$ 89,99 em toda Zona Norte.",
    to: "/blog/box-banheiro-jardim-sao-paulo",
  },
  {
    tag: "Box de Banheiro • Zona Norte SP",
    date: "08 de Junho de 2026",
    img: boxZonaNorteImg,
    title:
      "Onde Encontrar Box de Banheiro na Zona Norte de SP? Guia Completo de Modelos, Preços e Segurança",
    excerpt:
      "Guia completo para encontrar box de banheiro na Zona Norte de SP: modelos, vidros Cebrace/Guardian 8mm, película SECURE BOX e instalação a partir de 12x R$ 89,99.",
    to: "/blog/box-banheiro-zona-norte",
  },
  {
    tag: "Box de Banheiro • Mandaqui",
    date: "07 de Junho de 2026",
    img: boxMandaquiImg,
    title:
      "Guia do Box de Banheiro no Mandaqui: Projetos Modernos, Segurança com SECURE BOX e Tendências de Vidraçaria",
    excerpt:
      "Procurando box de banheiro no Mandaqui? Modelos de vidro temperado 8mm Cebrace/Guardian, película SECURE BOX e instalação ágil em toda a Zona Norte de SP.",
    to: "/blog/box-banheiro-mandaqui",
  },
  {
    tag: "Box de Banheiro • Santana",
    date: "04 de Junho de 2026",
    img: boxSantanaImg,
    title:
      "Box de Banheiro em Vidro em Santana: Segurança e Elegância para Seu Projeto | Vidraçaria Santana",
    excerpt:
      "Box de banheiro em vidro temperado em Santana com a Fast Vidro: modelos sob medida, vidros Cebrace/Guardian e película Secure Box. Vidraçaria Santana desde 1995.",
    to: "/blog/box-banheiro-vidro-santana",
  },
  {
    tag: "Segurança e Tecnologia",
    date: "04 de Junho de 2026",
    img: secureBoxImg,
    title:
      "O que é Secure Box? Conheça a Película de Proteção para Box de Vidro Temperado que Protege sua Família",
    excerpt:
      "Entenda como a tecnologia Secure Box, a película de segurança da Fast Vidro, mantém os fragmentos de vidro presos em caso de quebra — protegendo crianças, idosos e toda a família.",
    to: "/blog/secure-box-pelicula-protecao",
  },
  {
    tag: "Espelhos LED",
    date: "04 de Junho de 2026",
    img: espelhosLedImg,
    title: "Espelho com LED Sob Medida: Como Escolher a Iluminação Perfeita para seu Banheiro",
    excerpt:
      "Descubra como escolher a iluminação ideal para o seu espelho com LED sob medida. Luz quente, neutra ou fria? Frontal ou retroiluminado? Veja o guia completo da Fast Vidro em São Paulo.",
    to: "/blog/espelhos-led-sob-medida",
  },
  {
    tag: "Quem Somos",
    date: "Jun 2026",
    img: quemSomosImg,
    title:
      "Fast Vidro: Mais de 30 Anos de História, Inovação e Soluções em Vidros e Box de Banheiro em São Paulo",
    excerpt:
      "Conheça a trajetória da Fast Vidro desde 1995, nossos valores, a linha completa de produtos (Secure Box, Flex, Elegance, espelhos, portas) e as regiões de São Paulo onde atendemos com agilidade.",
    to: "/blog/fast-vidro-historia",
  },
];

function Blog() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Conteúdo que ilumina."
        subtitle="Dicas, novidades e bastidores do mundo dos vidros em São Paulo."
        image={heroImg}
      />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-foreground/60">
              Últimas publicações
            </span>
            <h2 className="mt-3 text-4xl font-black">Feed Fast Vidro</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Guias práticos para quem quer reformar com vidro temperado em São Paulo sem dor de cabeça.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-xl overflow-hidden border border-border bg-card hover:border-primary transition flex flex-col">
              {p.to ? (
                <Link to={p.to} className="block aspect-[16/10] overflow-hidden bg-muted" aria-label={p.title}>
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </Link>
              ) : (
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                  <span className="text-primary">{p.tag}</span>
                  <span className="text-muted-foreground inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                </div>
                <h3 className="mt-3 text-xl font-black leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                {p.to ? (
                  <Link
                    to={p.to}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary"
                  >
                    Ler artigo completo <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ) : (
                  <a
                    href={waLink(`Olá! Quero saber mais sobre: ${p.title}`)}
                    target="_blank"
                    rel="noopener"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary"
                  >
                    Falar com especialista <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
