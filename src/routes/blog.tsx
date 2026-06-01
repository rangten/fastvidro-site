import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/product-projetos.jpg";
import boxImg from "@/assets/product-box.jpg";
import ledImg from "@/assets/product-led.jpg";
import espelhosImg from "@/assets/product-espelhos.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Fast Vidro" },
      { name: "description", content: "Dicas, novidades e tendências sobre vidros, decoração e segurança." },
      { property: "og:title", content: "Blog — Fast Vidro" },
      { property: "og:description", content: "Conteúdo sobre vidros, decoração e tendências." },
    ],
  }),
  component: Blog,
});

const posts = [
  { title: "Como escolher o box de banheiro ideal", excerpt: "Modelos, espessuras, ferragens e dicas para acertar na hora de comprar.", img: boxImg, tag: "Box" },
  { title: "Tendência: espelhos LED em banheiros 2025", excerpt: "Por que o espelho LED virou item indispensável em reformas modernas.", img: ledImg, tag: "LED" },
  { title: "Vidro temperado: tudo sobre segurança", excerpt: "Entenda a diferença entre vidro comum e temperado e por que isso importa.", img: espelhosImg, tag: "Segurança" },
];

function Blog() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Conteúdo que ilumina."
        subtitle="Dicas, novidades e bastidores do mundo dos vidros."
        image={heroImg}
      />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-xl overflow-hidden border border-border bg-card hover:border-primary transition">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{p.tag}</span>
                <h3 className="mt-3 text-xl font-black leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary">
                  Em breve <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
