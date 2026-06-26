import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-de-canto-cover.png";

const TITLE =
  "Box de Canto (Em L / Angular): A Solução Inteligente para Otimizar Banheiros Quadrados e Quinas | Fast Vidro";
const DESC =
  "Conheça o Box de Canto (Em L / Angular) da Fast Vidro: a solução ideal para banheiros quadrados e quinas. Veja vantagens, cores, segurança com Película Secure Box e atendimento em toda São Paulo.";
const URL = "https://glass-swift-site.lovable.app/blog/box-de-canto";

export const Route = createFileRoute("/blog_/box-de-canto")({
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
          datePublished: "2026-07-01",
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
    "Olá! Li o artigo sobre Box de Canto (Em L / Angular) e quero um orçamento sob medida para o meu banheiro.";

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
                alt="Box de Canto (Em L / Angular) — Fast Vidro"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Guia Técnico • Box de Vidro</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 1 de Julho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Box de Canto (Em L / Angular): A Solução Inteligente para Otimizar
            Banheiros Quadrados e Quinas
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Muitos projetos residenciais em São Paulo — desde os novos
              apartamentos compactos até reformas de casas mais antigas —
              apresentam banheiros com layouts desafiadores. Um dos desenhos de
              plantas mais comuns e complexos é o banheiro com formato quadrado,
              onde o chuveiro fica posicionado exatamente no canto do ambiente,
              dividindo espaço com o vaso sanitário e a bancada da pia.
            </p>
            <p>
              Se você tentar instalar um box reto tradicional nesse tipo de
              layout, acabará bloqueando a circulação ou reduzindo
              drasticamente a área útil do cômodo. Para resolver esse dilema
              arquitetônico com elegância e inteligência, a Fast Vidro fabrica e
              instala o <strong>Box de Canto</strong>, também amplamente
              conhecido no mercado como <strong>Box em L</strong> ou{" "}
              <strong>Box Angular</strong>.
            </p>
            <p>
              Neste artigo completo, vamos explorar detalhadamente como funciona
              esse modelo, suas especificações técnicas, vantagens de espaço e
              por que ele é a escolha perfeita para transformar quinas ociosas
              em uma área de banho confortável e sofisticada.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              1. O que é o Box de Canto (Em L / Angular)?
            </h2>
            <p>
              O box de canto é um sistema de engenharia projetado
              especificamente para ser instalado em quinas onde duas paredes
              formam um ângulo reto de 90 graus. Ao invés de fechar o vão de
              parede a parede em linha reta, o Box em L utiliza duas frentes de
              vidro que se encontram no centro, fechando completamente o
              quadrante do chuveiro.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Como funciona a abertura mecânica?
            </h3>
            <p>
              A configuração mais comum e eficiente do Box de Canto na Fast
              Vidro é composta por <strong>4 folhas de vidro temperado de 8mm</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Duas folhas fixas:</strong> Presas diretamente nas paredes
                laterais do banheiro.
              </li>
              <li>
                <strong>Duas folhas móveis (portas):</strong> Deslizam por meio de
                roldanas blindadas sobre os trilhos superiores em direção às
                paredes fixas.
              </li>
            </ul>
            <p>
              O fechamento ocorre no centro do ângulo de 90°. Quando você abre
              o box, as duas portas correm para os lados opostos
              simultaneamente, proporcionando uma abertura diagonal ampla e
              centralizada. Isso garante que o usuário entre e saia do chuveiro
              pelo ponto que oferece o maior espaço livre de circulação do
              banheiro.
            </p>

            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Projeto sob medida
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🛠️ Seu chuveiro fica na quina do banheiro e você quer otimizar o
                espaço?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Fale Agora com um Especialista da Fast Vidro no WhatsApp e
                receba um projeto sob medida para o seu ambiente hoje mesmo!
              </p>
              <a
                href={waLink(
                  "Olá! Meu chuveiro fica na quina do banheiro e preciso de um projeto sob medida de Box de Canto."
                )}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              2. As Grandes Vantagens de Instalar um Box em L
            </h2>
            <p>
              Se o layout do seu projeto exige o máximo aproveitamento de cada
              centímetro quadrado, o Box Angular de 4 folhas oferece benefícios
              que vão muito além de um box comum:
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Aproveitamento Perfeito de Banheiros Quadrados
            </h3>
            <p>
              Em banheiros pequenos e quadrados, o espaço central precisa ficar
              livre para a circulação. Ao confinar a área do chuveiro
              estritamente no canto através de um sistema em L, você consegue
              posicionar o gabinete da pia em uma parede e a bacia sanitária na
              outra, mantendo uma distância confortável e segura entre todos os
              elementos, sem que um interfira no outro.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Abertura Diagonal Ampla
            </h3>
            <p>
              Ao abrir as duas portas de correr simultaneamente em direções
              opostas, a passagem livre se dá pela diagonal do quadrado de
              banho. Essa mecânica inteligente oferece um vão de entrada
              surpreendentemente maior do que se você tentasse colocar uma porta
              de abrir ou correr tradicional em uma das laterais, facilitando o
              acesso ao chuveiro de forma ergonômica.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Vedação Hermética de Alta Performance
            </h3>
            <p>
              Por se encontrarem no centro em um ângulo reto, as portas móveis
              do Box de Canto contam com perfis de vedação magnética (imã de
              alta pressão) ou perfis de silicone de transposição. Isso garante
              que, mesmo com jatos fortes de duchas modernas e pressurizadas,
              nenhuma gota de água escape para a área seca do banheiro.
            </p>

            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Fotos e vídeos reais
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                💎 Quer ver fotos e vídeos de Box em L instalados pela nossa
                equipe?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Visite nossa Página de Modelos de Box e comprove o acabamento
                impecável da Fast Vidro.
              </p>
              <Link
                to="/box-de-banheiro"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Ver Página de Modelos de Box
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              3. Tabela Comparativa: Box Reto Tradicional vs. Box de Canto (Em
              L)
            </h2>
            <p>
              Para ajudar na escolha técnica adequada para o layout da sua obra,
              analise as diferenças práticas na tabela comparativa abaixo:
            </p>

            <div className="overflow-x-auto my-6 rounded-xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Fator de Análise</th>
                    <th className="px-4 py-3">Box Reto de Parede a Parede</th>
                    <th className="px-4 py-3">Box de Canto (Em L / Angular)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-bold">Layout do Banheiro</td>
                    <td className="px-4 py-3">
                      Indicado para vãos lineares (entre 2 paredes)
                    </td>
                    <td className="px-4 py-3">
                      Perfeito para quinas e formatos quadrados
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Número de Folhas</td>
                    <td className="px-4 py-3">
                      Geralmente 2 ou 3 folhas de vidro
                    </td>
                    <td className="px-4 py-3">
                      Padrão de 4 folhas (2 fixas e 2 móveis)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Ponto de Entrada</td>
                    <td className="px-4 py-3">
                      Lateral ou central (em linha reta)
                    </td>
                    <td className="px-4 py-3">
                      Centralizado na diagonal (ângulo de 90°)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Fechamento Central</td>
                    <td className="px-4 py-3">
                      Encontro do vidro com o perfil da parede
                    </td>
                    <td className="px-4 py-3">
                      Encontro magnético entre os dois vidros móveis
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Otimização de Espaço</td>
                    <td className="px-4 py-3">
                      Depende da largura total do vão linear
                    </td>
                    <td className="px-4 py-3">
                      Máxima em banheiros com cantos ociosos
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              4. Cores de Perfis de Alumínio e Tipos de Vidro Temperado
            </h2>
            <p>
              A personalização técnica é a nossa marca registrada na Fast
              Vidro. O Box de Canto pode ser fabricado com uma ampla variedade
              de cores e acabamentos de perfis para harmonizar perfeitamente com
              os revestimentos, pastilhas e metais escolhidos para o seu
              banheiro.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Cores de Perfis Mais Solicitadas em São Paulo
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Preto Fosco (Black Matte):</strong> A opção mais desejada
                em projetos modernos e com estilo industrial na capital, criando
                linhas geométricas elegantes no canto do banheiro.
              </li>
              <li>
                <strong>Cromado Alto Brilho:</strong> Um clássico atemporal,
                espelhado e altamente resistente, que combina perfeitamente com
                torneiras, registros e chuveiros premium.
              </li>
              <li>
                <strong>Branco Epóxi:</strong> Ideal para decorações
                minimalistas, transmitindo sensação de higiene total,
                suavidade e máxima amplitude.
              </li>
              <li>
                <strong>Bronze e Champanhe:</strong> Tons nobres que aquecem
                visualmente o ambiente e agregam um ar de sofisticação clássica
                e luxo.
              </li>
            </ul>
            <p>
              Trabalhamos rigorosamente com vidros temperados de 8mm das
              melhores marcas do mercado nacional, como Guardian e Cebrace. Você
              pode optar pelo vidro{" "}
              <Link to="/box-incolor" className="text-primary hover:underline font-bold">
                Incolor
              </Link>{" "}
              (que não bloqueia a visão e faz o banheiro parecer muito maior),
              pelo imponente{" "}
              <Link to="/box-fume" className="text-primary hover:underline font-bold">
                Fumê
              </Link>{" "}
              (para um toque de privacidade e elegância), pelo moderno Verde, ou
              pelo acabamento Jateado (que blinda totalmente a visibilidade da
              área interna do chuveiro).
            </p>

            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Guia de cores
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🎨 Quer escolher a cor que mais combina com o revestimento da
                sua quina?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Confira nosso Guia Completo de Cores e Acabamentos para se
                inspirar.
              </p>
              <Link
                to="/blog/cor-box-incolor-fume-verde-bronze"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Ver Catálogo de Cores e Acabamentos
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              5. Segurança Familiar Máxima: Película Secure Box
            </h2>
            <p>
              O Box de Canto movimenta duas portas móveis que se encontram no
              centro e possui uma área linear de vidro maior do que um box reto
              comum. Em um ambiente úmido, sujeito a variações de temperatura
              constantes (choque térmico entre o vapor do chuveiro e o ar frio)
              e riscos de impactos acidentais (escorregões ou fechamentos
              bruscos por crianças), a segurança é prioridade número um.
            </p>
            <p>
              Por essa razão, a Fast Vidro recomenda de forma unânime a
              aplicação da <strong>Película Secure Box</strong> em todos os
              projetos angulares.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Por que a Película Secure Box é indispensável?
            </h3>
            <p>
              A película Secure Box é uma camada invisível de polímero de alta
              resistência aplicada diretamente no vidro temperado. Em caso de uma
              quebra por forte impacto acidental, ela atua como um escudo de
              contenção definitivo: todos os estilhaços e fragmentos de vidro
              permanecem firmemente colados na película. Isso impede que o
              vidro caia no chão ou atinja o usuário, mantendo a estrutura do
              box em pé com total segurança até que nossa equipe técnica realize
              a substituição.
            </p>

            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Proteção familiar
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🛡️ Proteja sua família e garanta banhos tranquilos todos os
                dias.
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Descubra Tudo sobre a Tecnologia da Película Secure Box.
              </p>
              <Link
                to="/blog/secure-box-pelicula-protecao"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Conhecer a Película Secure Box
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              6. Atendimento Técnico e Instalação na Grande São Paulo (GEO)
            </h2>
            <p>
              A instalação de um Box em L exige um nível técnico altíssimo. As
              paredes da quina precisam ter o prumo checado milimetricamente e o
              encontro dos vidros no centro em 90° deve ser exato para evitar
              frestas e garantir o deslize suave das portas. A Fast Vidro conta
              com frota própria e equipes de montadores altamente
              especializados atendendo todas as regiões estratégicas de São
              Paulo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Zona Oeste:</strong> Projetos sob medida e atendimento
                ágil em Pinheiros, Perdizes, Lapa, Vila Madalena, Alto de
                Pinheiros, Butantã, Jaguaré e Pompeia.
              </li>
              <li>
                <strong>Zona Sul:</strong> Instalações diárias nos bairros do
                Morumbi, Moema, Brooklin, Vila Olímpia, Campo Belo, Santo Amaro,
                Saúde, Ipiranga e Vila Mariana.
              </li>
              <li>
                <strong>Zona Norte:</strong> Atendimento técnico rápido em
                Santana, Tucuruvi, Casa Verde, Freguesia do Ó, Mandaqui e Vila
                Maria.
              </li>
              <li>
                <strong>Zona Leste:</strong> Instalações focadas no Tatuapé,
                Anália Franco, Mooca, Vila Formosa, Belenzinho e Penha.
              </li>
              <li>
                <strong>Centro Expandido:</strong> Atendemos com precisão nos
                Jardins, Consolação, Higienópolis e Bela Vista.
              </li>
              <li>
                <strong>Região Metropolitana e ABC:</strong> Atendimento com
                frota dedicada nas cidades de Santo André, São Bernardo do
                Campo, São Caetano do Sul, Osasco, Barueri (incluindo
                Alphaville) e Guarulhos.
              </li>
            </ul>
            <p>
              Nossa equipe realiza a medição fina utilizando equipamentos
              digitais de alta precisão, assegurando que os trilhos superiores e
              inferiores se encaixem com perfeição e recebam a vedação ideal com
              silicone antifungo premium.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Conclusão: O Box em L é a Escolha Certa para Você?
            </h2>
            <p>
              Se o seu banheiro tem um formato quadrado ou se a área do
              chuveiro foi projetada em uma quina compartilhada com outros
              elementos, o <strong>Box de Canto (Em L / Angular)</strong> de 4
              folhas é, sem dúvidas, a solução mais inteligente, ergonômica e
              bonita do mercado. Ele transforma um canto que seria
              problemático em um verdadeiro destaque de design e
              funcionalidade na sua casa.
            </p>
            <p>
              Compre direto de quem fabrica com matérias-primas certificadas e
              garante o melhor prazo de instalação técnica de São Paulo com
              total segurança.
            </p>

            <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                AGENDE SUA MEDIÇÃO COM A FAST VIDRO
              </p>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black">
                Orçamento de Box de Canto (Em L) no WhatsApp
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Não corra o risco de errar nos ângulos da sua quina. Deixe que a
                equipe técnica da Fast Vidro resolva tudo para você! Mande as
                medidas aproximadas das duas laterais ou uma foto do canto do
                seu banheiro. Nossa equipe responderá em minutos com o melhor
                orçamento direto de fábrica para a sua região!
              </p>
              <a
                href={waLink(message)}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
              >
                <MessageCircle className="h-5 w-5" />
                CLIQUE AQUI PARA FALAR CONOSCO NO WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
