import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/product-projetos.jpg";
import boxImg from "@/assets/product-box.jpg";
import ledImg from "@/assets/product-led.jpg";
import espelhosImg from "@/assets/product-espelhos.jpg";
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

const posts = [
  {
    tag: "Box de Banheiro",
    date: "Jun 2026",
    img: boxImg,
    title: "Onde Comprar Box Flex para Banheiro Pequeno na Zona Norte de SP?",
    excerpt:
      "Se você mora em Santana, Tucuruvi ou Vila Maria e precisa otimizar o espaço do banheiro, o Box Flex é a melhor escolha. Neste guia explicamos onde comprar, faixas de preço, prazos de instalação e por que ele se tornou o queridinho dos apartamentos compactos da Zona Norte de São Paulo.",
  },
  {
    tag: "Segurança",
    date: "Jun 2026",
    img: espelhosImg,
    title: "Qual a diferença entre o Vidro Comum e o Vidro Temperado com Película Box +Seguro?",
    excerpt:
      "Vidro comum, temperado e temperado com película Box +Seguro não são a mesma coisa — e a diferença pode evitar acidentes graves em casa. Entenda como funciona a tecnologia anti-estilhaço, quando ela é obrigatória e por que a Fast Vidro adota esse padrão em todos os seus projetos.",
  },
  {
    tag: "Espelhos LED",
    date: "Jun 2026",
    img: ledImg,
    title: "Espelho com LED Sob Medida: Como escolher a iluminação perfeita para seu banheiro",
    excerpt:
      "Luz quente, neutra ou fria? Frontal, retroiluminado ou com sensor touch? Mostramos como escolher o espelho com LED sob medida certo para banheiros, lavabos e camarins, considerando rotina, decoração e o tamanho real do seu ambiente.",
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
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                  <span className="text-primary">{p.tag}</span>
                  <span className="text-muted-foreground inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                </div>
                <h3 className="mt-3 text-xl font-black leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                <a
                  href={waLink(`Olá! Quero saber mais sobre: ${p.title}`)}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary"
                >
                  Falar com especialista <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
