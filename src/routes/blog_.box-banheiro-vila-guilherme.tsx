import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-vila-guilherme-cover.png";

const TITLE =
  "Box de Banheiro na Vila Guilherme: Guia de Modelos, Design e Segurança para Seu Banheiro | Vidraçaria Zona Norte";
const DESC =
  "Procurando box de banheiro na Vila Guilherme? Vidros temperados 8mm Cebrace/Guardian com a proteção da película SECURE BOX. Parcelas a partir de 12x R$ 89,99 instalado na Zona Norte de SP.";
const URL =
  "https://glass-swift-site.lovable.app/blog/box-banheiro-vila-guilherme";

export const Route = createFileRoute("/blog_/box-banheiro-vila-guilherme")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: cover },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: cover },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESC,
          image: cover,
          datePublished: "2026-06-10",
          author: { "@type": "Organization", name: "Fast Vidro" },
          publisher: { "@type": "Organization", name: "Fast Vidro" },
          mainEntityOfPage: URL,
        }),
      },
    ],
  }),
  component: Post,
});

function Post() {
  const message =
    "Olá! Li o post sobre Box de Banheiro na Vila Guilherme e quero um orçamento com a Fast Vidro.";

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
              <img
                src={cover}
                alt="Box de Banheiro na Vila Guilherme — Fast Vidro Vidraçaria Zona Norte"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Box de Banheiro • Vila Guilherme</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 10 de Junho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Box de Banheiro na Vila Guilherme: Guia de Modelos, Design e Segurança para Seu Banheiro
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Se você é morador da <strong>Vila Guilherme</strong>, um dos bairros mais tradicionais,
              estratégicos e em constante crescimento na Zona Norte de São Paulo, sabe que valorizar
              o seu imóvel é um investimento inteligente. Seja na hora de planejar um apartamento
              recém-entregue ou atualizar os ambientes de um sobrado consolidado, a escolha do{" "}
              <strong>box de vidro temperado</strong> para o banheiro é uma etapa crucial.
            </p>
            <p>
              Por ser uma região que une a tradição residencial a um forte desenvolvimento
              imobiliário vertical, a busca por serviços de vidraçaria com alto padrão técnico
              disparou. A Fast Vidro, atuando com excelência desde 1995, atende toda a Vila
              Guilherme com frota própria e equipes de instalação altamente experientes, trabalhando
              exclusivamente com vidros das marcas globais <strong>Cebrace e Guardian</strong>.
            </p>
            <p>
              Neste guia, preparamos um conteúdo detalhado para ajudar você a escolher o melhor{" "}
              <strong>box de banheiro na Vila Guilherme</strong>, apresentando os sistemas de
              abertura que melhor aproveitam o seu espaço e os critérios de segurança que você não
              pode deixar de fora.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              🗺️ A Localização Estratégica da Vila Guilherme e a Logística de Obra
            </h2>
            <p>
              A Vila Guilherme possui uma posição privilegiada na Zona Norte, cercada pela Marginal
              Tietê e por avenidas importantes como a Avenida Joaquina Ramalho, Avenida General
              Ataliba Leonel e Avenida Zaki Narchi. Essa proximidade com grandes eixos viários
              atrai muitos moradores, mas também gera desafios logísticos devido ao trânsito
              intenso em horários de pico.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Pontualidade no atendimento:</strong> Nossos técnicos se deslocam com
                agilidade pelas ruas da Vila Guilherme para realizar a medição técnica
                computadorizada e sem atrasos.
              </li>
              <li>
                <strong>Leitura estrutural precisa:</strong> Avaliamos as variações de prumo e
                nível das paredes para garantir que o vidro seja cortado de forma milimétrica.
              </li>
              <li>
                <strong>Respeito aos condomínios:</strong> Instalações limpas, rápidas e adequadas
                às regras de horários e barulhos dos novos condomínios da região.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              📐 Modelos de Box de Vidro Ideais para Otimizar o Espaço do Seu Imóvel
            </h2>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🚪 Box de Vidro de Correr (Linha Reta Prática)
            </h3>
            <p>
              O modelo reto de correr é a solução ideal e mais instalada nos banheiros de
              apartamentos da Vila Guilherme. Composto por uma lâmina fixa e outra móvel que
              desliza horizontalmente sobre trilhos embutidos, o sistema aproveita 100% da área
              útil sem exigir espaço de giro externo. Perfis personalizados em preto, branco,
              bronze ou cromado.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🌟 Box de Alto Padrão com Roldanas Aparentes (Linha Elegance)
            </h3>
            <p>
              Para transformar a suíte principal em um ambiente digno de revista, o sistema com
              roldanas aparentes substitui os trilhos superiores por um tubo robusto de aço inox.
              Roldanas maciças polidas deslizam visivelmente sobre o eixo, com visual clean que
              valoriza porcelanatos grandes e pastilhas.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              📐 Box em Formato de "L" (Box de Canto)
            </h3>
            <p>
              Projetado para banheiros onde a área do chuveiro fica posicionada no encontro
              angular das paredes. Duas folhas fixas e duas portas móveis centrais de correr
              fecham perfeitamente o ângulo de 90 graus, isolando a água com precisão milimétrica.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">⚡ Box Articulado (Sistema Flex)</h3>
            <p>
              Engenharia perfeita para lavabos ou banheiros compactos com vão de passagem
              inferior a 90 cm. As folhas de vidro dobram-se uma contra a outra por meio de
              dobradiças especiais, com ganho de espaço de quase 90% do vão total.
            </p>
            <p>
              Quer conferir fotos reais de projetos concluídos pela nossa equipe? Acesse nossa{" "}
              <Link to="/box-de-banheiro" className="text-primary hover:underline font-bold">
                página oficial de modelos de box
              </Link>
              .
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              🔒 Segurança Familiar como Critério Inegociável no Banheiro
            </h2>
            <p>
              Estatisticamente, o banheiro é o cômodo residencial com o maior índice de acidentes
              domésticos. Ao buscar por um <strong>box de vidro na Vila Guilherme</strong>, a
              proteção física da sua família deve estar acima de fatores puramente estéticos.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🛡️ Vidros Temperados de 8mm Certificados
            </h3>
            <p>
              Trabalhamos com painéis de <strong>vidro temperado 8mm</strong> de procedência
              controlada, fornecidos pelas maiores fabricantes mundiais, Cebrace e Guardian. A
              têmpera eleva em até cinco vezes a resistência mecânica do vidro comum.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🥇 A Blindagem Exclusiva com a Película SECURE BOX
            </h3>
            <p>
              Oferecemos a aplicação opcional da nossa tecnologia exclusiva: a{" "}
              <strong>película SECURE BOX</strong>. Caso ocorra uma quebra acidental, a película
              retém 100% dos fragmentos unidos — nenhum caco cai no chão do banheiro e a
              estrutura continua erguida.
            </p>
            <p>
              Entenda todos os detalhes acessando a página da nossa{" "}
              <Link to="/box-de-banheiro/secure-box" className="text-primary hover:underline font-bold">
                película SECURE BOX
              </Link>
              .
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              💸 Condições de Fábrica com Instalação Profissional na Vila Guilherme
            </h2>
            <p>
              Você pode garantir o seu box de vidro incolor 8mm temperado, com kit de acabamento
              completo e instalação profissional vedada com silicone antifungo de alta performance,
              com parcelas especiais <strong>a partir de 12x de R$ 89,99</strong>! Serviço limpo,
              ágil e em conformidade com as diretrizes técnicas de engenharia.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              📲 Solicite Seu Orçamento na Vila Guilherme via WhatsApp!
            </h2>
            <p>
              Conte com a tradição de quem é referência em vidros e boxes na Zona Norte de São
              Paulo desde 1995. Clique no botão abaixo para chamar no WhatsApp agora mesmo e
              agende a sua visita técnica de medição!
            </p>
          </div>

          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Fale agora com a Fast Vidro
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Orçamento de Box de Banheiro na Vila Guilherme
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
