import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import coverImg from "@/assets/blog-qual-box-usar-cover.png";
import heroImg from "@/assets/product-projetos.jpg";
import { waLink, WA_MESSAGES } from "@/lib/site";
import { Phone, ShieldCheck, Palette, Box, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/blog_/como-saber-qual-box-usar")({
  head: () => ({
    meta: [
      { title: "Como Saber Qual Box Usar? Guia Definitivo para Escolher o Box de Vidro Perfeito — Fast Vidro" },
      { name: "description", content: "Aprenda a escolher o box de banheiro ideal: análise de vão, layout, altura e segurança. Guia completo da Fast Vidro com tabela de decisão rápida e atendimento em São Paulo." },
      { property: "og:title", content: "Como Saber Qual Box Usar? Guia Definitivo para Escolher o Box de Vidro Perfeito — Fast Vidro" },
      { property: "og:description", content: "Aprenda a escolher o box de banheiro ideal: análise de vão, layout, altura e segurança. Guia completo da Fast Vidro com tabela de decisão rápida." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://glass-swift-site.lovable.app/src/assets/blog-qual-box-usar-cover.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "article:published_time", content: "2026-07-06" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://glass-swift-site.lovable.app/blog/como-saber-qual-box-usar" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Como Saber Qual Box Usar? O Guia Definitivo para Escolher o Box de Vidro Perfeito para Seu Banheiro",
          description: "Aprenda a escolher o box de banheiro ideal: análise de vão, layout, altura e segurança. Guia completo da Fast Vidro com tabela de decisão rápida.",
          image: "https://glass-swift-site.lovable.app/src/assets/blog-qual-box-usar-cover.png",
          author: { "@type": "Organization", name: "Fast Vidro" },
          publisher: {
            "@type": "Organization",
            name: "Fast Vidro",
            logo: { "@type": "ImageObject", url: "https://glass-swift-site.lovable.app/favicon.png" },
          },
          datePublished: "2026-07-06",
          dateModified: "2026-07-06",
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://glass-swift-site.lovable.app/blog/como-saber-qual-box-usar" },
        }),
      },
    ],
  }),
  component: ComoSaberQualBoxUsar,
});

function ComoSaberQualBoxUsar() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Guia Técnico • Escolha de Box"
        title="Como Saber Qual Box Usar?"
        subtitle="O guia definitivo para escolher o box de vidro perfeito para seu banheiro."
        image={heroImg}
      />

      <article className="mx-auto max-w-4xl px-4 lg:px-8 py-16">
        <img
          src={coverImg}
          alt="Como Saber Qual Box Usar - Guia Definitivo Fast Vidro"
          className="w-full rounded-xl mb-10"
          loading="eager"
        />

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="lead">
            Reformar ou planejar um banheiro exige a tomada de diversas decisões técnicas e estéticas, e uma das etapas mais importantes é a escolha do <strong>box de vidro</strong>. Diante de tantos modelos, sistemas de abertura, tipos de vidros e cores de perfis disponíveis no mercado paulistano, é muito comum se sentir perdido e fazer a pergunta crucial: <em>como saber qual box usar no meu banheiro?</em>
          </p>

          <p>
            Escolher o modelo errado pode transformar o momento do banho — que deveria ser o mais relaxante do dia — em uma experiência frustrante. Um box mal planejado pode deixar a área de passagem apertada, bater nos móveis, vazar água por todo o piso ou quebrar a harmonia visual do ambiente. Na <strong>Fast Vidro</strong>, desenvolvemos este guia definitivo para cruzar as dimensões do seu banheiro com a engenharia de vidro ideal.
          </p>

          <p>
            A partir de agora, você entenderá de forma simples os critérios de <strong>tamanho de vão, layout, estética e segurança</strong> para tomar a decisão correta e investir com precisão.
          </p>

          <h2>1. Passo 1: Analise a Largura do Vão (O Critério Técnico Eliminatório)</h2>

          <p>
            O tamanho da abertura onde o chuveiro está posicionado é o fator que mais dita qual sistema de engenharia pode ou não ser instalado. Como regra de fábrica na Fast Vidro, dividimos os vãos em três grandes categorias de tamanho para guiar a escolha do modelo:
          </p>

          <h3>Vãos Pequenos ou Estreitos (De 60 cm a 90 cm)</h3>
          <p>
            Se o seu banheiro possui um vão curto, os modelos de correr tradicionais de duas folhas estão descartados, pois a porta ocuparia apenas metade do espaço, deixando a passagem livre estreita demais.
          </p>
          <p>
            <strong>A Escolha Certa:</strong> Invista no <Link to="/box-de-banheiro/abrir" className="text-primary hover:underline font-semibold">Box de Abrir (Porta de Giro)</Link> — se houver área livre na frente para o raio de abertura da porta — ou no moderno <Link to="/box-de-banheiro/flex" className="text-primary hover:underline font-semibold">Box Flex (Sanfonado/Articulado)</Link>. O Box Flex dobra as folhas de vidro e as recolhe rente à parede, liberando até 90% do vão total para uma entrada confortável.
          </p>

          <h3>Vãos Médios (De 95 cm a 1,20 m)</h3>
          <p>
            Essa é uma faixa de transição muito comum em apartamentos modernos na Região Metropolitana de São Paulo.
          </p>
          <p>
            <strong>A Escolha Certa:</strong> Um box de correr tradicional funciona, mas deixa a passagem com cerca de 50 cm. Se você busca mais conforto ou precisa de acessibilidade, a melhor opção é o <Link to="/box-de-banheiro/transfer" className="text-primary hover:underline font-semibold">Box 3 Folhas (Sistema Versatik)</Link>. Ele possui uma folha fixa e duas móveis paralelas, proporcionando uma abertura livre de aproximadamente 2/3 (66%) do vão total.
          </p>

          <h3>Vãos Grandes ou Amplos (Acima de 1,25 m)</h3>
          <p>
            Vãos espaçosos oferecem total liberdade para a criação de projetos de alto padrão e designs imponentes.
          </p>
          <p>
            <strong>A Escolha Certa:</strong> Aqui, o clássico <Link to="/box-de-banheiro/tradicional" className="text-primary hover:underline font-semibold">Box de Correr de 2 Folhas</Link> trabalha com folga e elegância. Se você quer transformar o banheiro em um ambiente de luxo, esse espaço é ideal para o sofisticado <Link to="/box-de-banheiro/elegance" className="text-primary hover:underline font-semibold">Box Elegance com Roldanas Aparentes</Link>, que exibe metais nobres e proporciona um deslize ultra suave e silencioso. Para vãos gigantescos (acima de 1,60m), recomenda-se o sistema de 4 folhas (duas fixas nas laterais e duas portas correndo para o centro).
          </p>

          <div className="not-prose my-8 rounded-xl border border-border bg-card p-6">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Phone className="h-5 w-5 text-whatsapp" />
              Quer saber exatamente qual modelo cabe nas medidas do seu banheiro?
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Fale agora com um Especialista da Fast Vidro no WhatsApp e envie as medidas aproximadas para receber uma indicação personalizada!
            </p>
            <a
              href={waLink("Olá! Quero saber qual box usar no meu banheiro. Tenho as medidas do vão!")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-whatsapp-foreground hover:opacity-90 transition"
            >
              Falar com Especialista no WhatsApp
            </a>
          </div>

          <h2>2. Passo 2: Avalie o Layout do Banheiro (A Circulação do Ambiente)</h2>

          <p>
            Além de medir a parede do chuveiro, você precisa olhar para o banheiro como um todo. O posicionamento do vaso sanitário, do gabinete da pia e dos armários planejados influencia diretamente a mecânica do vidro.
          </p>

          <h3>Layout em Linha Reta (Parede a Parede)</h3>
          <p>
            É o desenho mais tradicional, onde o chuveiro fica confinado no fundo do banheiro e o box fecha o espaço de uma parede lateral à outra. Permite o uso de sistemas retos de correr (tradicional, Versatik ou Elegance) e de abrir.
          </p>

          <h3>Layout de Canto ou Quadrado (Chuveiro na Quina)</h3>
          <p>
            Muito comum em banheiros onde o espaço central precisa ficar livre para a circulação e o chuveiro ocupa uma quina ociosa de 90 graus.
          </p>
          <p>
            <strong>A Escolha Certa:</strong> O <Link to="/blog/box-de-canto" className="text-primary hover:underline font-semibold">Box de Canto (Em L / Angular)</Link>. Composto por duas folhas fixas e duas portas móveis que se encontram no centro através de um perfil magnético de alta vedação, ele otimiza o espaço criando um quadrante perfeito para o banho sem interferir nas louças sanitárias laterais.
          </p>

          <h2>3. Passo 3: Defina a Altura e o Conforto Térmico (Padrão ou Até o Teto?)</h2>

          <p>
            A escolha da altura do vidro determina o design visual do ambiente e o nível de retenção de umidade e calor durante o banho.
          </p>

          <h3>O Modelo Padrão Convencional (Altura de 1,90m)</h3>
          <p>
            Deixa um espaço aberto entre o topo do box e o teto do banheiro. É a opção mais econômica, de rápida instalação e indicada para banheiros pequenos que necessitam que o vapor circule em direção ao exaustor ou à janela externa localizada fora da área do chuveiro.
          </p>

          <h3>O Modelo Total Até o Teto (Efeito Sauna)</h3>
          <p>
            Os painéis de vidro temperado estendem-se do piso até o gesso ou laje. É uma forte tendência da arquitetura de luxo por criar linhas visuais limpas que dão sensação de amplitude. O vapor fica confinado na área de banho, mantendo o calor nos dias frios e protegendo os móveis planejados contra o mofo. <strong>Atenção:</strong> exige obrigatoriamente uma janela ou basculante dentro da área do chuveiro.
          </p>

          <div className="not-prose my-8 rounded-xl border border-border bg-card p-6">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Box className="h-5 w-5 text-primary" />
              Quer conferir fotos e inspirações de todos esses modelos instalados?
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Acesse nossa Página de Modelos de Box e escolha o seu design favorito.
            </p>
            <Link
              to="/box-de-banheiro"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
            >
              Ver Todos os Modelos de Box <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <h2>4. Matriz de Decisão Rápida: O Cruzamento Perfeito</h2>

          <p>
            Para facilitar a sua escolha técnica antes de fechar o pedido direto com a nossa fábrica, criamos esta tabela de cruzamento de necessidades:
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-3 text-left font-bold">Se o seu banheiro tem...</th>
                  <th className="border border-border px-4 py-3 text-left font-bold">E você prioriza...</th>
                  <th className="border border-border px-4 py-3 text-left font-bold">O modelo ideal é...</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-3">Vão curto (&lt; 90cm)</td>
                  <td className="border border-border px-4 py-3">Máximo ganho de passagem</td>
                  <td className="border border-border px-4 py-3 font-semibold">Box Flex (Sanfonado)</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border px-4 py-3">Vão médio (1m a 1,20m)</td>
                  <td className="border border-border px-4 py-3">Acessibilidade e abertura</td>
                  <td className="border border-border px-4 py-3 font-semibold">Box 3 Folhas (Versatik)</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3">Vão amplo (&gt; 1,30m)</td>
                  <td className="border border-border px-4 py-3">Economia e praticidade</td>
                  <td className="border border-border px-4 py-3 font-semibold">Box de Correr Tradicional</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border px-4 py-3">Vão amplo (&gt; 1,30m)</td>
                  <td className="border border-border px-4 py-3">Estética premium e luxo</td>
                  <td className="border border-border px-4 py-3 font-semibold">Box Elegance (Roldanas Aparentes)</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3">Chuveiro na quina</td>
                  <td className="border border-border px-4 py-3">Otimizar espaço quadrado</td>
                  <td className="border border-border px-4 py-3 font-semibold">Box de Canto (Em L)</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border px-4 py-3">Janela interna no chuveiro</td>
                  <td className="border border-border px-4 py-3">Banho aquecido e design limpo</td>
                  <td className="border border-border px-4 py-3 font-semibold">Box Até o Teto</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>5. Customização Estética e Blindagem com Película</h2>

          <p>
            Na Fast Vidro, o box ideal se complementa com a escolha correta de cores e acabamentos que conversem com a decoração do seu lar. Os perfis de alumínio podem ser personalizados em <strong>Preto Fosco (Black Matte), Cromado Alto Brilho, Branco ou Bronze/Champanhe</strong>. Os vidros temperados de 8mm de marcas renomadas (Cebrace e Guardian) estão disponíveis nas versões <strong>Incolor, Fumê, Verde ou Jateado</strong>.
          </p>

          <div className="not-prose my-8 rounded-xl border border-border bg-card p-6">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              Quer ver qual combinação de cores combina com o seu revestimento?
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Confira nosso Guia Completo de Cores e Acabamentos.
            </p>
            <Link
              to="/blog/cor-box-incolor-fume-verde-bronze"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
            >
              Ver Guia de Cores <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <h3>Segurança Inegociável: Película Secure Box</h3>

          <p>
            Independentemente do modelo escolhido, a segurança da sua família deve vir em primeiro lugar. O banheiro é um local úmido, propício a escorregões, e o vidro temperado sofre com constantes choques térmicos. Por isso, a Fast Vidro recomenda fortemente a inclusão da <strong>Película Secure Box</strong>.
          </p>

          <p>
            Se houver uma quebra por forte impacto acidental, a película atua como um escudo de contenção: todos os estilhaços de vidro ficam firmemente colados nela, impedindo que caiam no chão ou machuquem o usuário. O box permanece de pé de forma segura até que nossa assistência técnica faça a reposição.
          </p>

          <div className="not-prose my-8 rounded-xl border border-border bg-card p-6">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Garanta proteção total contra acidentes domésticos e cortes graves.
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Descubra Tudo sobre a Tecnologia da Película Secure Box.
            </p>
            <Link
              to="/blog/secure-box-pelicula-protecao"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
            >
              Conhecer a Película Secure Box <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <h2>6. Atendimento Técnico com Medição de Precisão em SP (GEO)</h2>

          <p>
            Não se preocupe em acertar milimetricamente as medidas do vão na hora de solicitar o seu orçamento. O papel do cliente é passar uma noção aproximada para que possamos calcular os valores diretos de fábrica. Após a pré-aprovação do orçamento, a Fast Vidro envia um técnico especializado até o seu endereço para realizar a medição técnica oficial utilizando <strong>trenas a laser de alta precisão</strong>.
          </p>

          <p>
            Nossa frota própria atende diariamente e com máxima pontualidade todas as regiões de São Paulo:
          </p>

          <ul>
            <li><strong>Zona Sul:</strong> Projetos entregues no <Link to="/servicos/morumbi" className="text-primary hover:underline">Morumbi</Link>, <Link to="/servicos/moema" className="text-primary hover:underline">Moema</Link>, Brooklin, Vila Olímpia, Campo Belo, Santo Amaro, Saúde e Vila Mariana.</li>
            <li><strong>Zona Oeste:</strong> Instalações sob medida em <Link to="/servicos/pinheiros" className="text-primary hover:underline">Pinheiros</Link>, Perdizes, Lapa, Vila Madalena, Alto de Pinheiros e Butantã.</li>
            <li><strong>Zona Norte:</strong> Atendimento técnico rápido em <Link to="/servicos/santana" className="text-primary hover:underline">Santana</Link>, <Link to="/servicos/tucuruvi" className="text-primary hover:underline">Tucuruvi</Link>, <Link to="/servicos/casa-verde" className="text-primary hover:underline">Casa Verde</Link>, Freguesia do Ó e <Link to="/servicos/mandaqui" className="text-primary hover:underline">Mandaqui</Link>.</li>
            <li><strong>Zona Leste:</strong> Atendemos com agilidade no <Link to="/servicos/tatuape" className="text-primary hover:underline">Tatuapé</Link>, Anália Franco, Mooca, Vila Formosa e Penha.</li>
            <li><strong>Centro e Região Metropolitana:</strong> Atendimento nos Jardins, Consolação, Higienópolis e também nas cidades do Grande ABC (Santo André, São Bernardo e São Caetano).</li>
          </ul>

          <p>
            Nossos montadores analisam o prumo das paredes, o nível do piso e fazem toda a fixação com parafusos de inox e silicone neutro antifungo premium, garantindo que o seu box funcione perfeitamente sem vazamentos.
          </p>

          <h2>Conclusão: O Box Perfeito Existe e Está na Fábrica</h2>

          <p>
            Saber qual box usar é uma equação simples quando cruzamos o tamanho do seu vão com o layout e as suas necessidades de conforto. Seja um modelo <Link to="/box-de-banheiro/flex" className="text-primary hover:underline font-semibold">Flex</Link> para vãos compactos, um sistema <Link to="/box-de-banheiro/transfer" className="text-primary hover:underline font-semibold">Versatik</Link> para máxima acessibilidade ou a <Link to="/box-de-banheiro/elegance" className="text-primary hover:underline font-semibold">Linha Elegance</Link> para o topo do luxo, a Fast Vidro tem a engenharia exata para o seu projeto.
          </p>

          <p>
            Compre direto de quem fabrica com matérias-primas certificadas e garante o menor prazo de entrega com instalação limpa e segura em São Paulo.
          </p>
        </div>

        <div className="not-prose mt-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-center">
          <h3 className="text-2xl font-black text-primary-foreground mb-3">
            PRONTO PARA FAZER A ESCOLHA CERTA?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
            Deixe que o time técnico da Fast Vidro calcule o projeto perfeito para o seu banheiro! Mande uma foto do seu banheiro ou as medidas aproximadas do seu vão. Nossa equipe responderá em poucos minutos com a melhor indicação de modelo e o orçamento direto de fábrica para o seu bairro!
          </p>
          <a
            href={waLink(WA_MESSAGES.default)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-background hover:opacity-90 transition"
          >
            CLIQUE AQUI PARA FALAR CONOSCO NO WHATSAPP
          </a>
        </div>
      </article>
    </SiteLayout>
  );
}
