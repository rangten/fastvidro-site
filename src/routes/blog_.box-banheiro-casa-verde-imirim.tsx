import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-casa-verde-imirim-cover.webp";

const TITLE =
  "Box de Banheiro na Casa Verde e Imirim: Modelos, Preços e Segurança para Sua Reforma | Vidraçaria Zona Norte";
const DESC =
  "Procurando box de banheiro na Casa Verde ou Imirim? Vidros temperados 8mm Cebrace/Guardian com a segurança da película SECURE BOX. Parcelas a partir de 12x R$ 89,99 instalado na Zona Norte de SP.";
const URL =
  "https://glass-swift-site.lovable.app/blog/box-banheiro-casa-verde-imirim";

export const Route = createFileRoute("/blog_/box-banheiro-casa-verde-imirim")({
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
    "Olá! Li o post sobre Box de Banheiro na Casa Verde e Imirim e quero um orçamento com a Fast Vidro.";

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
                alt="Box de Banheiro na Casa Verde e Imirim — Fast Vidro Vidraçaria Zona Norte"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Box de Banheiro • Casa Verde e Imirim</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 10 de Junho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Box de Banheiro na Casa Verde e Imirim: Modelos, Preços e Segurança para Sua Reforma
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Se você é morador, arquiteto ou está à frente de uma obra ou reforma nas regiões da{" "}
              <strong>Casa Verde</strong> ou do <strong>Imirim</strong>, bairros tradicionais e de
              extrema importância na Zona Norte de São Paulo, sabe que a escolha dos acabamentos
              internos dita o sucesso do projeto. O banheiro contemporâneo deixou de ser apenas um
              espaço funcional e passou a ser encarado como uma área de relaxamento e sofisticação,
              onde o box de vidro temperado desempenha papel fundamental na estética e organização
              do ambiente.
            </p>
            <p>
              Com o mercado imobiliário aquecido nessas localidades, as exigências por materiais
              duráveis de alta procedência (como as marcas globais{" "}
              <strong>Cebrace e Guardian</strong>) e por mão de obra técnica qualificada cresceram
              consideravelmente. A Fast Vidro, com sua sólida bagagem no mercado de vidraçaria
              construída desde 1995, atende toda a região da Casa Verde e Imirim com frota própria
              e equipes de instaladores altamente treinadas.
            </p>
            <p>
              Neste guia completo e detalhado, você vai entender como escolher o{" "}
              <strong>box de banheiro na Casa Verde</strong> que melhor se adapta à sua planta,
              quais modelos valorizam o seu imóvel e como blindar a sua área de banho com foco em
              segurança familiar.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              🗺️ Logística Local e a Importância de uma Vidraçaria Próxima na ZN
            </h2>
            <p>
              Tanto a Casa Verde quanto o Imirim são bairros estrategicamente posicionados na Zona
              Norte, cortados por vias de grande fluxo como a Avenida Casa Verde, Avenida Imirim,
              Avenida Engenheiro Caetano Álvares e a própria Marginal Tietê. Essa posição
              geográfica confere dinamismo à região, mas também exige uma logística precisa por
              parte dos fornecedores para evitar atrasos crônicos de cronograma.
            </p>
            <p>
              Ao escolher a Fast Vidro, você opta por uma empresa com base operacional e rotina de
              atendimento totalmente integradas à Zona Norte. Isso traz vantagens claras para o
              seu projeto:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Agilidade no atendimento técnico:</strong> Nossos medidores chegam com
                pontualidade para realizar o escaneamento milimétrico do vão do seu banheiro.
              </li>
              <li>
                <strong>Adequação estrutural:</strong> Identificamos as variações de prumo e nível
                comuns tanto nos sobrados antigos do Imirim quanto nos prédios recém-construídos
                na Casa Verde Alta e Baixa.
              </li>
              <li>
                <strong>Instalação eficiente:</strong> Processo limpo, rápido e com total respeito
                às normas e horários de barulho dos condomínios residenciais locais.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              📐 Encontre o Modelo de Box Perfeito para Otimizar Seu Banheiro
            </h2>
            <p>
              Acertar no formato de abertura e no tipo de engenharia do vidro temperado é o
              segredo para garantir um fluxo confortável de circulação no banheiro. Conheça as
              opções mais eficientes trabalhadas pela Fast Vidro para atender aos lares da Casa
              Verde e Imirim:
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🚪 Box de Vidro de Correr (Linha Reta Otimizada)
            </h3>
            <p>
              O box de correr reto é a solução mais procurada para os novos apartamentos
              integrados da região. Composto por uma folha fixa de vidro e uma folha móvel que
              desliza horizontalmente sobre trilhos metálicos, ele aproveita 100% do espaço, pois
              não necessita de ângulo de giro para abertura. O acabamento dos perfis pode ser
              totalmente personalizado em cores como preto fosco, branco, bronze ou cromado
              brilhante.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🌟 Box Elegance com Roldanas Aparentes (Alto Padrão)
            </h3>
            <p>
              Para projetos residenciais sofisticados e banheiros modernos na Casa Verde, o modelo
              com roldanas aparentes entrega o máximo em luxo e design clean. Ele substitui os
              perfis de alumínio superiores por um tubo reforçado em aço inox. Roldanas maciças
              deslizam de forma visível e suave sobre o eixo, garantindo uma estética leve e
              contemporânea, valorizando porcelanatos e revestimentos nobres.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              📐 Box de Canto ou Formato em "L"
            </h3>
            <p>
              Modelo projetado especificamente para banheiros onde a área de banho fica encurralada
              no ângulo reto das paredes. Esse sistema utiliza duas folhas fixas presas à alvenaria
              e duas portas móveis centrais que deslizam e se encontram no meio do ângulo de 90
              graus, delimitando perfeitamente a zona molhada.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">⚡ Box Articulado (Sistema Flex)</h3>
            <p>
              A engenharia ideal para banheiros muito pequenos ou lavabos onde o vão total de
              passagem é estreito (abaixo de 90 cm). No sistema articulado, as folhas de vidro
              dobram-se uma contra a outra por meio de dobradiças especiais de alta durabilidade.
              O ganho de espaço de abertura livre chega a quase 90%.
            </p>
            <p>
              Quer conferir fotos de obras reais entregues pela nossa equipe na Zona Norte? Visite
              nossa{" "}
              <Link to="/box-de-banheiro" className="text-primary hover:underline font-bold">
                galeria completa de modelos de box
              </Link>
              .
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              🔒 Critério Inegociável de Segurança: Vidro de 8mm e a Blindagem SECURE BOX
            </h2>
            <p>
              O banheiro é estatisticamente o cômodo de uma residência com o maior índice de
              acidentes domésticos. Por isso, ao adquirir o seu{" "}
              <strong>box de vidro na Casa Verde</strong>, o cuidado com a integridade física de
              quem você ama deve estar acima de fatores puramente comerciais ou estéticos.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🛡️ Vidros Temperados de 8mm Certificados
            </h3>
            <p>
              Trabalhamos de forma rigorosa com chapas de <strong>vidro temperado 8mm</strong>{" "}
              fornecidas pelas gigantes mundiais Cebrace e Guardian. A têmpera confere ao vidro uma
              resistência mecânica até cinco vezes superior à de um vidro comum.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🥇 A Proteção Avançada da Película SECURE BOX
            </h3>
            <p>
              Oferecemos como diferencial exclusivo a aplicação opcional da{" "}
              <strong>película SECURE BOX</strong>. Caso ocorra uma quebra acidental, a película
              retém 100% dos fragmentos juntos — nenhum caco cai no chão e a estrutura do box
              continua de pé.
            </p>
            <p>
              Entenda todos os detalhes acessando a página da nossa{" "}
              <Link to="/box-de-banheiro/secure-box" className="text-primary hover:underline font-bold">
                película SECURE BOX
              </Link>
              .
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              💸 Condições Direto da Fábrica com Instalação Inclusa na ZN
            </h2>
            <p>
              Você pode garantir o seu box de vidro incolor 8mm temperado, com kit de acabamento
              completo e instalação profissional vedada com silicone antifungo de alta performance,
              com parcelas especiais <strong>a partir de 12x de R$ 89,99</strong>! Serviço ágil,
              limpo e em conformidade com as normas técnicas e regulamentos de condomínios da Casa
              Verde e Imirim.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              📲 Solicite Seu Orçamento na Casa Verde e Imirim via WhatsApp!
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
              Orçamento de Box de Banheiro na Casa Verde e Imirim
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
