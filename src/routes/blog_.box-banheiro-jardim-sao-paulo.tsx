import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-jardim-sao-paulo-cover.webp";

const TITLE =
  "Box de Banheiro no Jardim São Paulo: Modelos de Alto Padrão, Segurança e Instalação sob Medida | Vidraçaria Zona Norte";
const DESC =
  "Buscando box de banheiro no Jardim São Paulo? Vidros temperados 8mm Cebrace/Guardian com película SECURE BOX. Parcelas a partir de 12x R$ 89,99 instalado em toda Zona Norte.";
const URL =
  "https://glass-swift-site.lovable.app/blog/box-banheiro-jardim-sao-paulo";

export const Route = createFileRoute("/blog_/box-banheiro-jardim-sao-paulo")({
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
          datePublished: "2026-06-09",
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
    "Olá! Li o post sobre Box de Banheiro no Jardim São Paulo e quero um orçamento com a Fast Vidro.";

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
                alt="Box de Banheiro no Jardim São Paulo — Fast Vidro Vidraçaria Zona Norte"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Box de Banheiro • Jardim São Paulo</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 09 de Junho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Box de Banheiro no Jardim São Paulo: Modelos de Alto Padrão, Segurança e Instalação sob Medida
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Se você é morador ou está planejando a reforma do seu imóvel no{" "}
              <strong>Jardim São Paulo</strong>, uma das regiões mais valorizadas,
              arborizadas e nobres da Zona Norte de São Paulo, sabe que cada
              detalhe do acabamento faz a diferença. Quando pensamos no
              planejamento dos banheiros e suítes, a escolha do{" "}
              <strong>box de vidro temperado</strong> vai muito além de evitar
              que a água do chuveiro molhe o piso: trata-se de um elemento
              central de design, sofisticação e, principalmente, proteção para
              a sua família.
            </p>
            <p>
              Por ser um bairro predominantemente residencial e de alto padrão,
              o perfil dos imóveis no Jardim São Paulo exige soluções que unam
              estética impecável com engenharia de ponta. A Fast Vidro, com sua
              sólida tradição no mercado de vidraçaria desde 1995, atende a
              região com uma estrutura logística e técnica focada em entregar
              projetos sob medida utilizando as melhores matérias-primas do
              mercado, como os vidros <strong>Cebrace e Guardian</strong>.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              🌳 A Dinâmica Arquitetônica do Jardim São Paulo e o Impacto no Seu Projeto de Vidro
            </h2>
            <p>
              O Jardim São Paulo possui uma característica única na Zona Norte.
              Ao mesmo tempo em que preserva ruas tranquilas repletas de
              sobrados amplos e casas de alto padrão, o bairro passou por uma
              forte verticalização nos últimos anos, especialmente nas
              proximidades da estação de metrô Jardim São Paulo-Ayrton Senna e
              de vias importantes como a Avenida Leonor Alvim e a Rua Carlos de
              Laet.
            </p>
            <p>Essa dualidade arquitetônica se reflete diretamente nos banheiros da região:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Nos novos apartamentos:</strong> As plantas integradas
                exigem máxima otimização do espaço interno do banheiro, onde
                cada centímetro poupado na abertura da porta do box garante
                maior conforto de circulação.
              </li>
              <li>
                <strong>Nas casas e coberturas tradicionais:</strong> Os vãos
                de banho costumam ser muito mais amplos, abrindo espaço para
                projetos arrojados, boxes de canto ou sistemas com roldanas
                aparentes que se tornam o destaque visual do ambiente.
              </li>
            </ul>
            <p>
              Compreender essa realidade local é o que permite à equipe técnica
              da Fast Vidro realizar medições milimétricas, avaliando o prumo
              das paredes e o nível do piso para garantir uma instalação sem
              frestas, eliminando vazamentos e ruídos no manuseio das portas de
              vidro.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              📐 Modelos de Box de Vidro Ideais para os Banheiros do Jardim São Paulo
            </h2>
            <p>
              Para que a sua busca por <strong>box de banheiro no Jardim São Paulo</strong>{" "}
              traga o resultado esperado, é fundamental selecionar o sistema de
              abertura correto para a planta do seu cômodo. Conheça as opções
              mais eficientes e sofisticadas trabalhadas pela nossa equipe
              técnica:
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">🌟 Box com Roldanas Aparentes (Linha Elegance)</h3>
            <p>
              Para quem reside nos condomínios de alto padrão do Jardim São
              Paulo, o <strong>Box Elegance</strong> é a escolha perfeita. Esse
              modelo elimina os perfis tradicionais de alumínio na parte
              superior e os substitui por um tubo robusto de aço inox polido ou
              escovado. Roldanas maciças ficam totalmente aparentes e deslizam
              suavemente sobre esse eixo, conferindo um visual extremamente
              clean, moderno e sofisticado ao banheiro.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">🚪 Box de Correr Tradicional (Otimização de Espaço)</h3>
            <p>
              É a solução mais prática e instalada em vãos retos de banheiros
              de apartamentos. Composto por uma folha fixa de vidro e outra
              móvel que desliza lateralmente, ele não ocupa nenhum espaço
              externo na hora do banho. Os perfis podem ser personalizados nas
              cores preta, branca, cromada ou bronze.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">📐 Box de Canto ou Formato em "L"</h3>
            <p>
              Caso a área do seu chuveiro esteja posicionada no encontro de
              duas paredes de alvenaria, o box em formato de "L" aproveita esse
              ângulo com perfeição. Geralmente estruturado com duas folhas
              fixas nas extremidades e duas portas de correr centrais que se
              encontram no meio, esse sistema delimita com total precisão a
              área molhada.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">⚡ Box Articulado (Sistema Flex)</h3>
            <p>
              Indicado para banheiros menores ou lavabos onde o vão total de
              abertura é muito estreito (abaixo de 90 cm). Como as folhas de
              vidro dobram-se uma contra a outra por meio de dobradiças
              especiais, o sistema ganha quase 90% de passagem livre.
            </p>
            <p>
              Quer analisar fotos reais de projetos executados pela nossa
              equipe, checar opções de puxadores e escolher a cor de perfil
              perfeita para a sua reforma? Acesse a nossa{" "}
              <Link to="/box-de-banheiro" className="text-primary hover:underline font-bold">
                página exclusiva de modelos de box
              </Link>
              .
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              🔒 Segurança Familiar: Vidro Temperado de 8mm e a Blindagem SECURE BOX
            </h2>
            <p>
              O banheiro é um dos locais mais propensos a quedas e acidentes
              domésticos devido ao piso molhado. Por esse motivo, ao escolher
              seu <strong>box de vidro no Jardim São Paulo</strong>, o fator
              segurança deve estar acima de qualquer critério puramente
              estético.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">🛡️ A Alta Resistência do Vidro Temperado</h3>
            <p>
              Na Fast Vidro, trabalhamos rigorosamente com chapas de{" "}
              <strong>vidro temperado de 8mm</strong> de procedência certificada,
              produzidas pelas líderes mundiais Cebrace e Guardian. A têmpera é
              um tratamento térmico que torna o vidro até cinco vezes mais
              resistente a impactos e a variações bruscas de temperatura do que
              um vidro comum.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">🥇 A Tecnologia Exclusiva da Película SECURE BOX</h3>
            <p>
              Para oferecer uma proteção de nível superior, desenvolvemos a
              aplicação opcional da <strong>película SECURE BOX</strong>. Esse
              sistema funciona como a tecnologia de segurança dos vidros
              automotivos: caso ocorra uma quebra acidental, a película retém
              100% dos fragmentos, mantendo a estrutura do box de pé e
              eliminando riscos de cortes graves.
            </p>
            <p>
              Proteja quem você ama investindo em um sistema testado e aprovado.
              Saiba mais detalhes acessando a página da nossa{" "}
              <Link to="/box-de-banheiro/secure-box" className="text-primary hover:underline font-bold">
                película SECURE BOX
              </Link>
              .
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              💸 Condições Comerciais Exclusivas com Entrega Rápida no Bairro
            </h2>
            <p>
              Instalar um box com design de alto padrão não significa pagar
              valores abusivos. Você pode garantir o seu box de vidro incolor
              8mm temperado, com kit completo de perfis e instalação
              profissional inclusa (com vedação em silicone antifungo), com
              parcelas especiais <strong>a partir de 12x de R$ 89,99</strong>!
              Garantimos uma execução limpa, rápida e adequada às regras dos
              condomínios do Jardim São Paulo.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              📲 Solicite Seu Orçamento sem Compromisso no Jardim São Paulo
            </h2>
            <p>
              Fale com quem é referência em vidraçaria e box na Zona Norte
              desde 1995. Clique no botão abaixo para chamar no WhatsApp agora
              mesmo e agende a sua visita técnica de medição!
            </p>
          </div>

          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Fale agora com a Fast Vidro
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Orçamento de Box de Banheiro no Jardim São Paulo
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
