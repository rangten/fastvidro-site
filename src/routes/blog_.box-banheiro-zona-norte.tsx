import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-zona-norte-cover.webp";

const TITLE =
  "Onde Encontrar Box de Banheiro na Zona Norte de SP? Guia Completo de Modelos, Preços e Segurança | Vidraçaria Zona Norte";
const DESC =
  "Procurando box de banheiro na Zona Norte de SP? Guia completo com modelos, preços a partir de 12x R$ 89,99, vidros Cebrace/Guardian 8mm e película SECURE BOX. Instalação rápida em Santana, Mandaqui, Tucuruvi e toda a ZN.";

export const Route = createFileRoute("/blog_/box-banheiro-zona-norte")({
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
        href: "https://glass-swift-site.lovable.app/blog/box-banheiro-zona-norte",
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
          datePublished: "2026-06-08",
          author: { "@type": "Organization", name: "Fast Vidro" },
          publisher: { "@type": "Organization", name: "Fast Vidro" },
          mainEntityOfPage:
            "https://glass-swift-site.lovable.app/blog/box-banheiro-zona-norte",
        }),
      },
    ],
  }),
  component: Post,
});

function Post() {
  const message =
    "Olá! Li o guia de Box de Banheiro na Zona Norte e quero um orçamento com a Fast Vidro.";

  return (
    <SiteLayout>
      <article className="bg-background">
        <header className="border-b border-border bg-card">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 py-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground/70 hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Voltar para o Blog
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
              <span className="text-primary">Box de Banheiro • Zona Norte SP</span>
              <span className="text-muted-foreground inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" /> 08 de Junho de 2026
              </span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
              {TITLE}
            </h1>
            <p className="mt-4 text-base text-muted-foreground max-w-3xl">{DESC}</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 lg:px-8 py-10">
          <figure className="overflow-hidden rounded-xl ring-1 ring-border shadow-ink">
            <img width={1200} height={800}
              src={cover}
              alt="Box de banheiro na Zona Norte de SP com película Secure Box — Fast Vidro"
              className="w-full h-auto object-cover"
loading="eager" fetchPriority="high" decoding="async"
/>
          </figure>

          <div className="prose-fast mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
            <p>
              Planejar ou reformar um imóvel na Zona Norte de São Paulo exige atenção a cada
              detalhe. Quando o assunto é a área do banho, a pergunta mais comum entre moradores e
              arquitetos da região é: <strong>onde encontrar box de banheiro na Zona Norte</strong>{" "}
              que alinhe preço justo, entrega rápida, materiais de marcas renomadas (como Cebrace e
              Guardian) e, acima de tudo, máxima segurança?
            </p>
            <p>
              A Zona Norte é uma das regiões mais tradicionais e dinâmicas da capital paulista.
              Seja nos apartamentos modernos que transformam a paisagem de Santana, nas casas
              amplas do Mandaqui, do Tucuruvi, ou nos novos condomínios residenciais da Vila
              Guilherme, Casa Verde e Tremembé, o banheiro deixou de ser apenas um cômodo
              funcional para se tornar um espaço de relaxamento e valorização do imóvel.
            </p>
            <p>
              Na Fast Vidro, com nossa sólida tradição de mercado iniciada em 1995, estruturamos
              uma operação logística e técnica focada em atender toda a Zona Norte de SP com
              agilidade e precisão milimétrica. Neste guia, vamos mostrar o que você deve levar em
              conta ao escolher seu box de vidro temperado e como transformar seu ambiente com
              total tranquilidade.
            </p>

            <h2 className="mt-10 text-3xl font-black">
              🗺️ Atendimento Local: A Importância de Escolher uma Vidraçaria Próxima a Você
            </h2>
            <p>
              Escolher uma vidraçaria que conheça a fundo a dinâmica da Zona Norte faz toda a
              diferença no cronograma da sua obra ou reforma. Empresas que vêm de regiões muito
              distantes costumam sofrer com atrasos no trânsito da Marginal Tietê ou das avenidas
              Engenheiro Caetano Álvares e Cruzeiro do Sul, o que impacta diretamente o horário da
              instalação.
            </p>
            <p>
              A Fast Vidro garante um atendimento ágil porque possui mapeamento completo dos
              bairros da ZN, atendendo com frota própria e técnicos experientes regiões como:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Santana e Jardim São Paulo</li>
              <li>Mandaqui e Lauzane Paulista</li>
              <li>Tucuruvi e Parada Inglesa</li>
              <li>Casa Verde, Imirim e Cachoeirinha</li>
              <li>Vila Guilherme, Vila Maria e Medeiros</li>
            </ul>
            <p>
              Além da proximidade física, nossa equipe técnica realiza medições precisas para que o
              vidro seja fabricado exatamente sob medida para as variações estruturais que cada
              imóvel apresenta, eliminando folgas e evitando problemas futuros com vazamentos de
              água ou portas desalinhadas.
            </p>

            <h2 className="mt-10 text-3xl font-black">
              📐 Engenharia e Design: Encontre o Modelo de Box Perfeito para Seu Espaço
            </h2>
            <p>
              Para que a sua busca por <strong>box de banheiro zona norte</strong> traga o
              resultado esperado, é preciso entender qual tipo de abertura valoriza mais a planta
              do seu banheiro. Nem sempre o modelo mais tradicional é o melhor para um espaço
              compacto. Conheça as principais opções disponíveis no mercado:
            </p>

            <h3 className="mt-6 text-2xl font-black">Box de Vidro de Correr (Linha Reta)</h3>
            <p>
              É a solução perfeita para otimizar espaço, muito utilizada nos apartamentos novos da
              Zona Norte. Ele possui uma folha fixa de vidro e outra móvel que desliza lateralmente
              sobre trilhos horizontais de alumínio ou inox. Permite um visual limpo e moderno sem
              ocupar espaço externo na hora de abrir.
            </p>

            <h3 className="mt-6 text-2xl font-black">Box de Vidro de Abrir (Porta Pivotante)</h3>
            <p>
              Muito indicado para banheiros com vãos médios a grandes, onde há espaço livre para
              que a porta gire para frente ou para trás. Utiliza dobradiças de alta resistência e
              puxadores sofisticados, conferindo um ar clássico e elegante ao ambiente.
            </p>

            <h3 className="mt-6 text-2xl font-black">Box de Canto (Em formato de "L")</h3>
            <p>
              Se o seu chuveiro fica localizado no encontro de duas paredes de alvenaria, o box de
              canto aproveita esse ângulo perfeitamente. Geralmente composto por duas partes fixas
              e duas portas de correr centrais, ele isola completamente a área molhada em banheiros
              com plantas quadradas.
            </p>

            <h3 className="mt-6 text-2xl font-black">Box Articulado (Estilo Flex ou Sanfonado)</h3>
            <p>
              A engenharia ideal para quem tem banheiros ou lavabos muito pequenos. Como as folhas
              de vidro dobram-se umas sobre as outras, o ganho de abertura chega a quase 90% do vão
              útil, garantindo uma passagem confortável mesmo nos menores espaços.
            </p>
            <p>
              Para analisar fotos reais de projetos concluídos, detalhes de acabamentos de perfis e
              escolher o estilo que mais combina com o seu projeto, confira{" "}
              <Link to="/box-de-banheiro" className="font-bold text-primary hover:underline">
                todos os nossos modelos de box
              </Link>
              .
            </p>

            <h2 className="mt-10 text-3xl font-black">
              🔒 Segurança em Primeiro Lugar com a Película SECURE BOX
            </h2>
            <p>
              Um dos pontos mais importantes ao instalar um <strong>box de banheiro na zona
              norte</strong> é certificar-se de que a integridade física de sua família estará
              protegida. Por padrão, trabalhamos exclusivamente com vidros temperados de 8mm
              produzidos pelas gigantes Cebrace e Guardian, que são até cinco vezes mais
              resistentes do que o vidro comum e passam por rigorosos testes térmicos e de impacto.
            </p>
            <p>
              Porém, qualquer vidro temperado está sujeito a quebras por impactos fortes nas bordas
              ou desgaste natural dos componentes ao longo dos anos. Pensando na total
              tranquilidade de lares com crianças, idosos e animais de estimação, a Fast Vidro
              oferece a tecnologia exclusiva <strong>SECURE BOX</strong>.
            </p>
            <p>
              A película SECURE BOX é uma camada de proteção de alta performance aplicada
              diretamente na superfície do vidro. Caso ocorra um acidente ou quebra do painel, a
              película retém 100% dos fragmentos. O vidro se estilhaça por inteiro, mas continua
              colado e preso na estrutura do box, impedindo que os cacos caiam no chão do banheiro.
              Isso evita ferimentos e cortes graves, dando o tempo necessário para você acionar
              nossa assistência técnica de forma segura. Descubra como funciona esse sistema de
              blindagem acessando a página da nossa{" "}
              <Link
                to="/box-de-banheiro/secure-box"
                className="font-bold text-primary hover:underline"
              >
                película SECURE BOX
              </Link>
              .
            </p>

            <h2 className="mt-10 text-3xl font-black">
              💸 Condições Especiais com Instalação Profissional Inclusa
            </h2>
            <p>
              Além de oferecer as melhores matérias-primas do mercado e instalação técnica
              especializada com vedação de silicone antifungo, nós facilitamos o investimento no
              seu lar. Na Fast Vidro, você encontra opções modernas de box de vidro incolor 8mm
              temperado com preços especiais a partir de <strong>12x de R$ 89,99 instalado</strong>!
              Não ponha em risco a segurança da sua casa contratando curiosos ou empresas sem
              histórico. Unimos mais de 30 anos de experiência com o melhor preço e prazo de
              entrega da Zona Norte de São Paulo.
            </p>

            <h2 className="mt-10 text-3xl font-black">
              📲 Peça Seu Orçamento na Zona Norte pelo WhatsApp!
            </h2>
            <p>
              Chega de procurar! A melhor solução para o seu projeto de vidros e boxes está aqui na
              Fast Vidro. Nossa equipe está de prontidão para analisar as medidas do seu banheiro,
              tirar dúvidas sobre acabamentos e enviar uma proposta comercial imbatível.
            </p>
            <p>
              Clique no botão abaixo para chamar no WhatsApp agora mesmo, converse com um
              especialista e garanta o seu box com a segurança da película SECURE BOX!
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 rounded-xl px-8 py-5 text-base lg:text-lg font-bold text-white shadow-lg hover:scale-[1.02] transition"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="h-6 w-6" />
              Falar com Especialista no WhatsApp
            </a>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
