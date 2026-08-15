import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-tucuruvi-cover.webp";

const TITLE =
  "Box de Banheiro no Tucuruvi: Modelos Ideais, Preços e Segurança Máxima para Seu Imóvel | Vidraçaria Zona Norte";
const DESC =
  "Buscando box de banheiro no Tucuruvi? Vidros temperados 8mm Cebrace/Guardian com a segurança da película SECURE BOX. Parcelas a partir de 12x R$ 89,99 instalado no Tucuruvi e toda a Zona Norte.";
const URL =
  "https://glass-swift-site.lovable.app/blog/box-banheiro-tucuruvi";

export const Route = createFileRoute("/blog_/box-banheiro-tucuruvi")({
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
    "Olá! Li o post sobre Box de Banheiro no Tucuruvi e quero um orçamento com a Fast Vidro.";

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
                alt="Box de Banheiro no Tucuruvi — Fast Vidro Vidraçaria Zona Norte"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Box de Banheiro • Tucuruvi</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 09 de Junho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Box de Banheiro no Tucuruvi: Modelos Ideais, Preços e Segurança Máxima para Seu Imóvel
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Se você mora, está construindo ou reformando uma residência no tradicional bairro do{" "}
              <strong>Tucuruvi</strong>, na Zona Norte de São Paulo, sabe que a escolha dos
              acabamentos internos é um passo decisivo. O planejamento do banheiro moderno exige
              soluções que vão muito além de reter a água do chuveiro. Hoje, o{" "}
              <strong>box de vidro temperado</strong> é uma peça-chave de decoração, amplitude de
              espaço e valorização do patrimônio.
            </p>
            <p>
              Como o Tucuruvi é uma das regiões mais conectadas e em plena expansão residencial da
              Zona Norte, os projetos de arquitetura locais demandam um olhar técnico apurado. A
              Fast Vidro, com uma trajetória sólida no segmento de vidraçaria iniciada em 1995,
              atende toda a região do Tucuruvi com equipes próprias, oferecendo o que há de melhor
              em vidros temperados de marcas líderes como <strong>Cebrace e Guardian</strong>.
            </p>
            <p>
              Neste guia completo, você vai descobrir como escolher o melhor box de banheiro no
              Tucuruvi, quais modelos se adaptam perfeitamente à planta do seu imóvel e como
              garantir a proteção da sua família com a nossa tecnologia exclusiva de blindagem de
              vidros.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              🚇 O Crescimento do Tucuruvi e as Necessidades de Cada Projeto
            </h2>
            <p>
              O Tucuruvi combina de forma única a tradição de suas ruas residenciais com a
              modernidade trazida pela expansão do metrô e do Shopping Metrô Tucuruvi. O bairro
              atrai tanto famílias que constroem ou reformam sobrados amplos nas proximidades da
              Avenida Nova Cantareira e da Avenida Mazzei, quanto novos moradores que optam pela
              praticidade dos modernos apartamentos compactos recém-lançados na região.
            </p>
            <p>
              Esses dois perfis de construção exigem abordagens técnicas de vidraçaria
              completamente distintas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Apartamentos compactos de condomínio:</strong> Costumam apresentar vãos de
                banho reduzidos. Cada milímetro conta para garantir passagem confortável e que a
                porta do box não colida com os demais elementos do banheiro.
              </li>
              <li>
                <strong>Sobrados e coberturas espaçosas:</strong> Abrem margem para vãos maiores e
                projetos imponentes, onde o vidro e as ferragens podem seguir tendências
                contemporâneas de design de alto padrão.
              </li>
            </ul>
            <p>
              Na Fast Vidro, nossos técnicos mapeiam as características estruturais de cada imóvel
              no Tucuruvi. Realizamos medições precisas para assegurar prumo perfeito, vedação
              total com silicone antifungo de alta performance e deslizamento suave que elimina
              barulhos ou travamentos no dia a dia.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              📐 Encontre o Modelo de Box Perfeito para Valorizar Seu Espaço
            </h2>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🚪 Box de Vidro com Porta de Correr (Solução Inteligente)
            </h3>
            <p>
              O modelo reto de correr é a escolha mais comum e eficiente para banheiros de
              apartamentos no Tucuruvi. Formado por uma placa de vidro fixa e uma folha móvel que
              desliza suavemente sobre trilhos horizontais, ele otimiza 100% da área útil interna
              e externa. Os perfis de alumínio recebem acabamentos de alta qualidade, disponíveis
              nas cores preta, branca, bronze ou cromada.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🌟 Box de Alto Padrão com Roldanas Aparentes (Linha Elegance)
            </h3>
            <p>
              Para projetos de design assinados e banheiros modernos nos sobrados e coberturas do
              Tucuruvi, a linha com roldanas aparentes é sinônimo de luxo. Esse sistema substitui
              os trilhos convencionais por um tubo superior reforçado de aço inox. Roldanas
              maciças polidas deslizam visivelmente sobre o eixo, conferindo estética clean,
              leveza visual e sofisticação de alto padrão.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              📐 Box em Formato de "L" ou Box de Canto
            </h3>
            <p>
              Ideal para banheiros onde a área do chuveiro ocupa o ângulo reto das paredes. Esse
              sistema utiliza duas folhas fixas instaladas nas alvenarias e duas portas móveis de
              correr que se conectam no centro, isolando com precisão milimétrica a zona molhada.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">⚡ Box Articulado (Linha Flex)</h3>
            <p>
              Para banheiros pequenos ou lavabos com vãos de passagem muito estreitos (inferiores
              a 90 cm), as folhas de vidro dobram-se uma contra a outra por meio de dobradiças
              especiais de alta resistência, proporcionando um ganho de quase 90% do vão livre.
            </p>
            <p>
              Quer conferir fotos reais de obras entregues, comparar puxadores e escolher a
              combinação de cores ideal para o seu projeto? Acesse nossa{" "}
              <Link to="/box-de-banheiro" className="text-primary hover:underline font-bold">
                galeria de modelos de box
              </Link>
              .
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              🔒 Segurança em Primeiro Lugar: Vidro de 8mm e a Blindagem SECURE BOX
            </h2>
            <p>
              O banheiro é, por natureza, uma área úmida e escorregadia, o que aumenta de forma
              considerável as chances de quedas ou acidentes domésticos. Por essa razão, a
              integridade física de quem você ama deve estar acima de qualquer decisão puramente
              visual ao adquirir o seu <strong>box de vidro no Tucuruvi</strong>.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🛡️ Matéria-Prima de Procedência Garantida
            </h3>
            <p>
              Trabalhamos de forma intransigente com painéis de <strong>vidro temperado de 8mm</strong>{" "}
              de altíssima qualidade, fabricados pelas líderes globais Cebrace e Guardian. A
              têmpera confere ao vidro uma resistência mecânica até cinco vezes maior que a de um
              vidro comum.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🥇 A Proteção Total com a Película SECURE BOX
            </h3>
            <p>
              Para blindar o seu lar contra qualquer imprevisto, desenvolvemos a aplicação
              opcional da <strong>película SECURE BOX</strong>. Caso o vidro sofra uma quebra
              acidental, a película retém 100% dos fragmentos juntos — nenhum caco cai no chão do
              banheiro e a estrutura continua erguida.
            </p>
            <p>
              Saiba todos os detalhes acessando a página da nossa{" "}
              <Link to="/box-de-banheiro/secure-box" className="text-primary hover:underline font-bold">
                película SECURE BOX
              </Link>
              .
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              💸 Condições de Fábrica com Entrega e Instalação Inclusas no Tucuruvi
            </h2>
            <p>
              Você pode assegurar o seu box de vidro incolor 8mm temperado, completo com kit de
              perfis e instalação profissional inclusa, com parcelas especiais{" "}
              <strong>a partir de 12x de R$ 89,99</strong>! Garantimos instalação limpa, ágil e em
              conformidade com as normas técnicas e regulamentos de horários de condomínios do
              Tucuruvi.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              📲 Solicite Seu Orçamento no Tucuruvi via WhatsApp!
            </h2>
            <p>
              Conte com a experiência de quem é referência em vidros e boxes na Zona Norte de São
              Paulo desde 1995. Clique no botão abaixo para chamar no WhatsApp agora mesmo e
              agende sua visita técnica de medição!
            </p>
          </div>

          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Fale agora com a Fast Vidro
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Orçamento de Box de Banheiro no Tucuruvi
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
