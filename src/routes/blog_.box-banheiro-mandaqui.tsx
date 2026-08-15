import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-mandaqui-cover.webp";

const TITLE =
  "Guia do Box de Banheiro no Mandaqui: Projetos Modernos, Segurança com SECURE BOX e Tendências de Vidraçaria | Vidraçaria Mandaqui";
const DESC =
  "Procurando box de banheiro no Mandaqui? Conheça os melhores modelos de vidro temperado com a proteção exclusiva da película SECURE BOX. Instalação ágil e segura em toda a Zona Norte. Faça seu orçamento!";

export const Route = createFileRoute("/blog_/box-banheiro-mandaqui")({
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
        href: "https://glass-swift-site.lovable.app/blog/box-banheiro-mandaqui",
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
          datePublished: "2026-06-07",
          author: { "@type": "Organization", name: "Fast Vidro" },
          publisher: { "@type": "Organization", name: "Fast Vidro" },
          mainEntityOfPage:
            "https://glass-swift-site.lovable.app/blog/box-banheiro-mandaqui",
        }),
      },
    ],
  }),
  component: Post,
});

function Post() {
  const message =
    "Olá! Li o guia de Box de Banheiro no Mandaqui e quero um orçamento com a Fast Vidro.";

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
              <span className="text-primary">Box de Banheiro • Mandaqui</span>
              <span className="text-muted-foreground inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" /> 07 de Junho de 2026
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
              alt="Box de banheiro no Mandaqui com película Secure Box — Fast Vidro"
              className="w-full h-auto object-cover"
loading="eager" fetchPriority="high" decoding="async"
/>
          </figure>

          <div className="prose-fast mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
            <p>
              Se você está construindo, reformando ou apenas renovando o design do seu lar na Zona
              Norte de São Paulo, o planejamento do banheiro é um dos pontos cruciais da obra. A
              escolha por um <strong>box de banheiro no Mandaqui</strong> envolve muito mais do que
              decidir a cor do acabamento; exige conhecimento técnico sobre o espaço, a escolha da
              engenharia correta e, acima de tudo, foco total na segurança da sua família.
            </p>
            <p>
              Na Fast Vidro, combinamos a tradição e a precisão técnica de quem atua no mercado de
              box e vidros desde 1995. Ao longo de mais de três décadas, aprendemos que cada bairro
              possui suas características de moradia — desde os amplos apartamentos próximos à
              Avenida Engenheiro Caetano Álvares até as casas tradicionais das ruas residenciais do
              Mandaqui. Para atender a essa demanda exigente com rapidez e pontualidade, preparamos
              este guia definitivo para você acertar em cheio na escolha do seu vidro temperado.
            </p>

            <h2 className="mt-10 text-3xl font-black">
              🏛️ A Evolução do Box de Banheiro na Arquitetura Moderna
            </h2>
            <p>
              Antigamente, o box de banheiro era visto apenas como uma barreira funcional para
              conter a água do banho. Hoje, ele é considerado um elemento central de design de
              interiores e arquitetura. Um box planejado corretamente tem o poder de ampliar
              visualmente banheiros pequenos, otimizar a iluminação natural e injetar um toque de
              sofisticação e modernidade no ambiente.
            </p>
            <p>
              Para que o projeto atinja o seu potencial máximo, o segredo está na escolha do
              material. Nós trabalhamos estritamente com as maiores e mais conceituadas marcas de
              float do mercado nacional, como <strong>Cebrace e Guardian</strong>. Isentos de
              distorções ópticas e produzidos com rigorosos controles de qualidade, esses vidros
              garantem um reflexo limpo, alta durabilidade contra manchas provocadas pelo uso
              diário e uma resistência estrutural insuperável.
            </p>

            <h2 className="mt-10 text-3xl font-black">
              🛠️ Conheça os Modelos de Box Ideais para o seu Espaço
            </h2>
            <p>
              Nem todo banheiro possui a mesma planta, e forçar um layout errado pode comprometer a
              circulação de ar, bloquear a abertura de portas ou até causar batidas acidentais nos
              sanitários. Para evitar esses problemas, compreender a engenharia de abertura é
              essencial. Veja quais são os modelos de box mais indicados para cada situação:
            </p>

            <h3 className="mt-6 text-2xl font-black">1. Box de Correr (Linha Tradicional e Reta)</h3>
            <p>
              É o campeão de vendas em apartamentos e residências no Mandaqui. Composto por uma
              folha de vidro fixa e outra que desliza suavemente sobre um trilho horizontal, ele é
              perfeito para otimizar espaço. Se o seu vão tem uma largura a partir de 1 metro, essa
              opção garante uma excelente área de passagem sem invadir o restante do banheiro.
            </p>

            <h3 className="mt-6 text-2xl font-black">2. Box de Abrir (Portas Pivotantes)</h3>
            <p>
              Indicado para vãos médios a grandes, ou para projetos onde a largura do banheiro
              impede a abertura lateral por trilhos. A porta se move para frente ou para trás por
              meio de dobradiças especiais de latão ou inox. É um modelo clássico, elegante, que
              permite vãos de abertura muito amplos e limpos.
            </p>

            <h3 className="mt-6 text-2xl font-black">3. Box de Canto (Canto em L ou Quadrado)</h3>
            <p>
              Ideal para banheiros onde a área do chuveiro fica localizada exatamente no ângulo de
              encontro entre duas paredes. Geralmente utiliza duas folhas fixas e duas portas de
              correr que se encontram no centro, fechando um ângulo de 90 graus. Maximiza a área
              útil de banheiros quadrados e traz um visual super simétrico.
            </p>

            <h3 className="mt-6 text-2xl font-black">4. Box Articulado (Box Sanfonado ou Flex)</h3>
            <p>
              A solução perfeita para banheiros muito pequenos e compactos, onde cada centímetro
              conta. As folhas de vidro dobram-se umas sobre as outras na hora de abrir, liberando
              até 90% do vão de passagem. É a engenharia salvadora para lavabos transformados ou
              apartamentos compactos.
            </p>
            <p>
              Quer analisar fotos reais, configurações técnicas e acabamentos para escolher o
              design que mais combina com a sua casa? Acesse agora a nossa página exclusiva e
              confira{" "}
              <Link to="/box-de-banheiro" className="font-bold text-primary hover:underline">
                todos os nossos modelos de box disponíveis
              </Link>
              .
            </p>

            <h2 className="mt-10 text-3xl font-black">
              🔒 Segurança Máxima em Foco: Por que a Película SECURE BOX é Indispensável?
            </h2>
            <p>
              Quando falamos de vidro temperado de 8mm, estamos lidando com um material até cinco
              vezes mais resistente do que o vidro comum. No entanto, por questões físicas naturais
              e impactos extremos localizados nas bordas, qualquer vidro temperado está sujeito à
              quebra acidental. No momento da quebra, o vidro temperado se fragmenta em milhares de
              pequenos pedaços granulados. Embora esses pedaços não sejam pontiagudos como os do
              vidro comum, o impacto da queda dos cacos ainda pode assustar e ferir quem estiver
              por perto.
            </p>
            <p>
              Pensando na total proteção da sua família — especialmente em residências que contam
              com crianças, pets ou idosos —, a Fast Vidro desenvolveu e implementou o sistema{" "}
              <strong>SECURE BOX</strong>.
            </p>
            <p>
              A película SECURE BOX é uma camada de proteção invisível de alta performance aplicada
              diretamente na superfície do vidro. Caso ocorra qualquer tipo de quebra ou quebra
              espontânea por estresse térmico, a tecnologia da película atua retendo 100% dos
              fragmentos. O vidro trinca por inteiro, mas permanece totalmente colado e preso à
              estrutura do box, sem espalhar um único caco no chão do banheiro.
            </p>
            <p>
              Isso dá à sua família o tempo necessário para sair do ambiente com total segurança e
              aguardar a chegada da nossa equipe técnica para realizar a substituição do painel,
              sem riscos de cortes ou acidentes graves. Para entender detalhadamente os testes de
              resistência e como esse sistema blinda o seu banheiro,{" "}
              <Link
                to="/box-de-banheiro/secure-box"
                className="font-bold text-primary hover:underline"
              >
                leia mais sobre os benefícios da película SECURE BOX
              </Link>
              .
            </p>

            <h2 className="mt-10 text-3xl font-black">
              📐 O Diferencial da Instalação Profissional com a Fast Vidro
            </h2>
            <p>
              Um bom projeto de vidraçaria não depende apenas de um vidro de marca renomada ou de
              um kit de alumínio bonito. O verdadeiro segredo para um box não dar manutenção, não
              vazar água e deslizar suavemente por anos está na qualidade da instalação técnica.
            </p>
            <p>
              Nossa equipe é altamente treinada para realizar medições a laser milimétricas,
              avaliar o prumo das paredes (que frequentemente apresentam deformações em construções
              novas ou antigas) e aplicar a vedação com silicones antifungo de cura neutra e alta
              performance. Isso evita o surgimento de manchas pretas de bolor nas bordas e garante
              que a água do seu chuveiro fique exatamente onde deve ficar.
            </p>
            <p>
              Unimos essa precisão técnica, conquistada desde 1995, à agilidade logística que dá
              nome à nossa marca. Atendemos a região do Mandaqui com agilidade, cumprindo prazos à
              risca e mantendo uma instalação limpa, organizada e sem dores de cabeça para a sua
              obra.
            </p>

            <h2 className="mt-10 text-3xl font-black">
              📲 Solicite Seu Orçamento de Box no Mandaqui Hoje Mesmo!
            </h2>
            <p>
              Se você busca uma vidraçaria no Mandaqui que ofereça preço justo, facilidade no
              pagamento, materiais das marcas Cebrace e Guardian, engenharia moderna e a proteção
              exclusiva da película SECURE BOX, a sua busca terminou.
            </p>
            <p>
              Nossa equipe está pronta para avaliar a planta do seu banheiro, tirar suas dúvidas
              técnicas e enviar uma proposta comercial imbatível com instalação inclusa para a sua
              região.
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
