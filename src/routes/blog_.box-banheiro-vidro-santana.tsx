import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-banheiro-santana-cover.webp";

const TITLE =
  "Box de Banheiro em Vidro em Santana: Segurança e Elegância para Seu Projeto | Vidraçaria Santana";
const DESC =
  "Box de banheiro em vidro em Santana com a Fast Vidro: vidro temperado Cebrace/Guardian 8mm, modelos sob medida e película Secure Box. Vidraçaria Santana desde 1995.";

export const Route = createFileRoute("/blog_/box-banheiro-vidro-santana")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: cover },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: cover },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://glass-swift-site.lovable.app/blog/box-banheiro-vidro-santana",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESC,
          image: cover,
          datePublished: "2026-06-04",
          author: { "@type": "Organization", name: "Fast Vidro" },
          publisher: {
            "@type": "Organization",
            name: "Fast Vidro",
          },
          mainEntityOfPage:
            "https://glass-swift-site.lovable.app/blog/box-banheiro-vidro-santana",
        }),
      },
    ],
  }),
  component: Post,
});

function Post() {
  const message =
    "Olá! Li o post sobre Box de Banheiro em Santana e quero um orçamento com a Fast Vidro.";

  return (
    <SiteLayout>
      <article className="bg-background">
        <div className="bg-ink">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 pt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-foreground/70 hover:text-primary transition"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Voltar para o Blog
            </Link>
            <div className="mt-6 overflow-hidden rounded-xl">
              <img width={1200} height={800}
                src={cover}
                alt="Box de Banheiro em Vidro em Santana — Fast Vidro Vidraçaria Santana"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Box de Banheiro • Santana</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 04 de Junho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Box de Banheiro em Vidro em Santana: Segurança e Elegância para Seu
            Projeto | Vidraçaria Santana
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Procurando por <strong>box de banheiro em vidro em Santana</strong>?
              Se você está reformando ou construindo na Zona Norte de São Paulo,
              sabe que a escolha do box ideal vai muito além da estética. É
              preciso alinhar um design moderno com a máxima segurança e
              durabilidade que a sua família merece.
            </p>
            <p>
              Na Fast Vidro, trazemos a tradição de quem atua no mercado de{" "}
              <strong>vidraçaria Santana</strong> desde 1995, entregando projetos
              sob medida com instalação rápida e alto padrão de acabamento.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Por que escolher o Box de Vidro Temperado?
            </h2>
            <p>
              O banheiro é um dos ambientes mais importantes da casa, e o box é
              o protagonista. Trabalhar com materiais de primeira linha, como os
              vidros <strong>Cebrace e Guardian</strong>, garante que o seu
              espaço fique sofisticado e altamente seguro. O vidro temperado de
              8mm é o padrão ideal para aguentar o impacto do dia a dia e as
              variações de temperatura do banho.
            </p>
            <p>
              Dispomos de diversas opções que se adaptam perfeitamente ao
              tamanho do seu ambiente. Se você quer conhecer o design ideal para
              banheiros compactos ou grandes, confira nossos{" "}
              <Link
                to="/box-de-banheiro"
                className="text-primary hover:underline font-bold"
              >
                principais modelos de box de banheiro
              </Link>
              . Temos opções de box de canto, box de abrir, box de correr e
              engenharia sob medida.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Proteção em Primeiro Lugar: Película de Segurança SECURE BOX
            </h2>
            <p>
              Para quem não abre mão da tranquilidade, principalmente em casas
              com crianças ou idosos, nós recomendamos a aplicação da{" "}
              <strong>película de segurança para box</strong>. Caso ocorra uma
              quebra acidental por forte impacto, a película impede que os
              fragmentos de vidro se espalhem pelo chão, mantendo tudo preso na
              estrutura e evitando acidentes. Entenda como funciona e proteja
              sua família acessando mais detalhes sobre a nossa{" "}
              <Link
                to="/box-de-banheiro/secure-box"
                className="text-primary hover:underline font-bold"
              >
                película de segurança Secure Box
              </Link>
              .
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Sua Vidraçaria em Santana com Atendimento Rápido
            </h2>
            <p>
              Esqueça as obras demoradas e a dor de cabeça com atrasos. Unimos a
              precisão técnica com o compromisso de uma entrega ágil em toda a
              região de <strong>Santana</strong> e bairros vizinhos na Zona
              Norte de SP — Tucuruvi, Mandaqui, Casa Verde, Vila Maria,
              Freguesia do Ó, Parada Inglesa e Jardim São Paulo.
            </p>
            <p>
              Não feche o seu orçamento sem antes falar com a nossa equipe
              especializada. Clique no botão abaixo e chame no WhatsApp agora
              mesmo para garantir as melhores condições do mercado com{" "}
              <strong>instalação de box em Santana</strong> inclusa!
            </p>
          </div>

          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Fale agora com a Fast Vidro
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Orçamento de Box de Banheiro em Santana no WhatsApp
            </h3>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
