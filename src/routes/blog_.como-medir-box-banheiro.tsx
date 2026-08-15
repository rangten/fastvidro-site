import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-como-medir-box-cover.webp";

const TITLE =
  "Como Medir Seu Box de Forma Correta antes de Pedir um Orçamento: O Guia Técnico Passo a Passo | Fast Vidro";
const DESC =
  "Aprenda a medir corretamente o vão do seu box de banheiro antes de pedir orçamento: regra dos 3 pontos, altura ideal, tabela de modelos por largura e dicas técnicas da Fast Vidro em São Paulo.";
const URL =
  "https://glass-swift-site.lovable.app/blog/como-medir-box-banheiro";

export const Route = createFileRoute("/blog_/como-medir-box-banheiro")({
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
          datePublished: "2026-07-05",
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
                alt="Como medir seu box de banheiro de forma correta — Guia Técnico Fast Vidro"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Guia Técnico • Medição</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 5 de Julho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Como Medir Seu Box de Forma Correta antes de Pedir um Orçamento: O
            Guia Técnico Passo a Passo
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              O primeiro passo para transformar o seu banheiro com um lindo
              <strong> box de vidro temperado</strong> é saber exatamente o
              tamanho do espaço disponível. Obter as medidas corretas do vão do
              chuveiro é fundamental para que você receba um orçamento preciso,
              sem surpresas no valor final e sem atrasos na fabricação da sua
              peça.
            </p>
            <p>
              Na Fast Vidro, sabemos que muitos clientes ficam em dúvida ou
              com medo de passar as medidas erradas no momento do atendimento
              digital pelo WhatsApp. Embora a nossa equipe técnica sempre
              realize uma medição fina e oficial com trena a laser antes da
              instalação, ter uma noção real do tamanho do vão agiliza muito o
              processo de orçamento direto de fábrica.
            </p>
            <p>
              Neste guia prático vamos te ensinar o método correto que os
              profissionais de vidraçaria utilizam para medir a largura e a
              altura do box, evitando os erros mais comuns que podem alterar o
              preço do projeto. Prepare a sua trena e vamos ao passo a passo!
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              1. O que Você Vai Precisar para Medir o Box?
            </h2>
            <p>
              Diferente do que muitos pensam, você não precisa de equipamentos
              profissionais e caros para tirar a medida inicial do seu
              banheiro. Você vai precisar apenas de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Uma Trena Metálica ou Fita Métrica:</strong> Dê
                preferência para a trena metálica tradicional — não dobra com
                facilidade e garante maior precisão em distâncias longas.
              </li>
              <li>
                <strong>Papel e Caneta:</strong> Para anotar os três pontos de
                checagem da largura e a altura.
              </li>
              <li>
                <strong>Nível de Mão (Opcional):</strong> Ajuda a notar se as
                paredes estão muito tortas (fora de prumo).
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              2. Passo a Passo: Como Medir a Largura do Vão (A Regra dos 3
              Pontos)
            </h2>
            <p>
              As paredes dos banheiros em São Paulo — sejam de prédios novos
              ou casas antigas — quase nunca são perfeitamente retas ou
              paralelas. Devido à camada de reboco, azulejos e pastilhas, é
              muito comum que o topo do vão seja mais largo ou mais estreito
              do que a base (perto do chão).
            </p>
            <p>
              Por isso, nunca meça apenas um ponto. Aplique a{" "}
              <strong>Regra dos 3 Pontos</strong>:
            </p>

            <h3 className="text-xl font-black pt-4">
              Passo 1: Medição da Base (Ponto Inferior)
            </h3>
            <p>
              Estique a trena de uma parede até a outra apoiando-a diretamente
              no chão ou na borda da pedra do baguete de granito (filete).
              Anote o valor exato em centímetros (exemplo: 115,5 cm).
            </p>

            <h3 className="text-xl font-black pt-4">
              Passo 2: Medição do Meio (Ponto Central)
            </h3>
            <p>
              Suba a trena a uma altura aproximada de 1 metro em relação ao
              chão (na altura da sua cintura) e meça a distância de parede a
              parede novamente. Anote o valor.
            </p>

            <h3 className="text-xl font-black pt-4">
              Passo 3: Medição do Topo (Ponto Superior)
            </h3>
            <p>
              Por fim, posicione a trena na altura padrão onde o box termina —
              geralmente a 1,90 metro do chão — e tire a terceira medida de
              parede a parede. Anote o resultado.
            </p>

            <h3 className="text-xl font-black pt-4">
              Qual medida passar para a Fast Vidro?
            </h3>
            <p>
              Para o orçamento inicial de boxes de correr tradicionais, passe
              sempre <strong>a menor medida</strong> entre as três anotadas.
              Isso garante que o trilho superior de alumínio seja cortado em um
              tamanho que caiba perfeitamente no vão sem emperrar nas paredes.
              Na hora da instalação, nossos profissionais fazem o ajuste fino
              compensando as frestas com perfis de regulagem e silicone.
            </p>
          </div>

          {/* CTA 1 — WhatsApp guia por vídeo */}
          <div className="mt-10 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Dúvida na hora de esticar a trena?
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Não se preocupe! Te guiamos por vídeo no WhatsApp.
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Fale agora com um Especialista da Fast Vidro e envie uma foto do
              seu banheiro — nós te orientamos passo a passo em tempo real.
            </p>
            <a
              href={waLink(
                "Olá! Li o artigo de como medir o box e preciso de ajuda para tirar as medidas do meu banheiro."
              )}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com Especialista no WhatsApp
            </a>
          </div>

          <div className="prose-content mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              3. Como Medir a Altura Ideal do Box?
            </h2>
            <p>
              A altura do box de vidro temperado vai depender do modelo que
              você escolheu para o design do seu projeto. Veja as regras
              técnicas para cada caso:
            </p>

            <h3 className="text-xl font-black pt-4">
              Altura para Box Padrão Convencional
            </h3>
            <p>
              O padrão de mercado utilizado na fábrica da Fast Vidro para
              boxes convencionais de correr ou de abrir é de{" "}
              <strong>1,90 metro de altura</strong> (contando o trilho
              superior). Para medir, basta colocar a ponta da trena no chão
              (ou em cima do baguete de granito) e esticá-la verticalmente até
              a marca de 1,90 m. Verifique se essa altura não vai cortar
              nenhuma janela ou basculante ao meio.
            </p>

            <h3 className="text-xl font-black pt-4">
              Altura para Box Até o Teto (Box Engenharia)
            </h3>
            <p>
              Se você optou pelo sofisticado <strong>Box Até o Teto</strong>{" "}
              (efeito sauna), você deve medir a distância vertical total do
              chão até o teto do banheiro. Faça essa medição em dois pontos
              (no canto esquerdo e no canto direito), pois o teto de gesso ou
              laje também pode apresentar pequenas quedas de nível.
            </p>
          </div>

          {/* CTA 2 — Modelos */}
          <div className="mt-10 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Qual modelo combina com o seu vão?
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Veja todos os modelos de box para qualquer medida.
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Conheça as opções da Fast Vidro para vãos pequenos, médios e
              amplos — sob medida e direto de fábrica.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/box-de-banheiro"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Ver Modelos de Box
              </Link>
              <Link
                to="/blog/box-convencional-vs-ate-o-teto"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Convencional vs. Até o Teto
              </Link>
            </div>
          </div>

          <div className="prose-content mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              4. Tabela de Vãos: Qual o Modelo Ideal para a Sua Medida?
            </h2>
            <p>
              Criamos esta tabela de referência rápida cruzando a largura do
              vão com o sistema de abertura recomendado pela nossa
              engenharia:
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-3 text-left font-bold">
                      Largura do Vão Medido
                    </th>
                    <th className="border border-border px-4 py-3 text-left font-bold">
                      Modelo de Box Recomendado
                    </th>
                    <th className="border border-border px-4 py-3 text-left font-bold">
                      Vantagem Técnica
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-3 font-semibold">
                      De 60 cm a 90 cm
                    </td>
                    <td className="border border-border px-4 py-3">
                      Box de Abrir (Giro) ou Box Flex
                    </td>
                    <td className="border border-border px-4 py-3">
                      Vão muito curto; evita que a passagem livre fique
                      estreita
                    </td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border px-4 py-3 font-semibold">
                      De 95 cm a 1,20 m
                    </td>
                    <td className="border border-border px-4 py-3">
                      Box 3 Folhas (Versatik) ou Box Flex
                    </td>
                    <td className="border border-border px-4 py-3">
                      Otimiza a abertura, liberando até 70% do espaço para o
                      banho
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3 font-semibold">
                      De 1,20 m a 1,50 m
                    </td>
                    <td className="border border-border px-4 py-3">
                      Box de Correr Tradicional (2 folhas)
                    </td>
                    <td className="border border-border px-4 py-3">
                      Espaço ideal para o clássico (1 folha fixa e 1 móvel)
                    </td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border px-4 py-3 font-semibold">
                      Acima de 1,50 m
                    </td>
                    <td className="border border-border px-4 py-3">
                      Box de Correr de 3 ou 4 folhas
                    </td>
                    <td className="border border-border px-4 py-3">
                      Vãos amplos exigem mais folhas para balancear o peso do
                      vidro
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3 font-semibold">
                      Chuveiro na Quina (L)
                    </td>
                    <td className="border border-border px-4 py-3">
                      Box de Canto (Angular em L)
                    </td>
                    <td className="border border-border px-4 py-3">
                      Fecha o quadrante de 90° aproveitando as duas paredes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              5. Cuidados Estéticos: Cores de Perfis e Segurança com Película
            </h2>
            <p>
              Depois de definir as medidas e o modelo, chega a hora de
              escolher a personalização. Na Fast Vidro, trabalhamos com perfis
              de alumínio de alta durabilidade em cores modernas como o{" "}
              <strong>Preto Fosco (Black Matte)</strong>, Cromado Alto Brilho,
              Branco e Bronze. Os vidros temperados de 8mm podem ser Incolor,
              Fumê, Verde ou Jateado.
            </p>
          </div>

          {/* CTA 3 — Cores */}
          <div className="mt-10 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Catálogo de Cores e Acabamentos
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Escolha a cor que combina com seus metais e revestimentos.
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/blog/cor-box-incolor-fume-verde-bronze"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Guia de Cores do Box
              </Link>
              <Link
                to="/box-incolor"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Box Incolor
              </Link>
              <Link
                to="/box-fume"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Box Fumê
              </Link>
            </div>
          </div>

          <div className="prose-content mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <h3 className="text-xl font-black pt-4">
              Segurança Inegociável: Película Secure Box
            </h3>
            <p>
              Lembre-se de incluir no seu pedido a aplicação da{" "}
              <strong>Película Secure Box</strong>. Independentemente do
              tamanho ou altura do seu vidro temperado, a película é o único
              elemento que garante proteção total para a sua família. Em caso
              de quebra acidental por impacto ou choque térmico, todos os
              fragmentos de vidro ficam grudados na película, mantendo o box
              em pé e evitando que cacos caiam sobre o usuário ou pelo chão do
              banheiro.
            </p>
          </div>

          {/* CTA 4 — Secure Box */}
          <div className="mt-10 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Proteção Total da Família
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Conheça a Tecnologia Película Secure Box.
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/blog/secure-box-pelicula-protecao"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Saiba Tudo sobre Secure Box
              </Link>
              <Link
                to="/box-de-banheiro/secure-box"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Box com Secure Box
              </Link>
            </div>
          </div>

          <div className="prose-content mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              6. Atendimento Técnico com Medição Gratuita em São Paulo
            </h2>
            <p>
              Reforçando: você não precisa se preocupar em passar a medida
              com precisão milimétrica pelo WhatsApp. A medida do cliente
              serve apenas para gerarmos o orçamento inicial estimado. Assim
              que o projeto é pré-aprovado, a Fast Vidro envia um técnico
              especializado até a sua residência para realizar a medição
              oficial com ferramentas a laser de alta precisão.
            </p>
            <p>
              Atendemos com frota própria de forma ágil e pontual em todas as
              regiões e bairros de São Paulo:
            </p>

            <h3 className="text-xl font-black pt-4">Zona Norte</h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["santana", "Santana"],
                ["tucuruvi", "Tucuruvi"],
                ["mandaqui", "Mandaqui"],
                ["casa-verde", "Casa Verde"],
                ["freguesia-do-o", "Freguesia do Ó"],
                ["jardim-sao-paulo", "Jardim São Paulo"],
                ["vila-guilherme", "Vila Guilherme"],
              ].map(([slug, name]) => (
                <Link
                  key={slug}
                  to="/servicos/$bairro"
                  params={{ bairro: slug }}
                  className="inline-flex items-center rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
                >
                  {name}
                </Link>
              ))}
            </div>

            <h3 className="text-xl font-black pt-4">Zona Sul</h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["morumbi", "Morumbi"],
                ["moema", "Moema"],
                ["brooklin", "Brooklin"],
                ["vila-olimpia", "Vila Olímpia"],
                ["campo-belo", "Campo Belo"],
                ["santo-amaro", "Santo Amaro"],
                ["saude", "Saúde"],
                ["ipiranga", "Ipiranga"],
                ["vila-mariana", "Vila Mariana"],
              ].map(([slug, name]) => (
                <Link
                  key={slug}
                  to="/servicos/$bairro"
                  params={{ bairro: slug }}
                  className="inline-flex items-center rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
                >
                  {name}
                </Link>
              ))}
            </div>

            <h3 className="text-xl font-black pt-4">Zona Oeste</h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["pinheiros", "Pinheiros"],
                ["perdizes", "Perdizes"],
                ["lapa", "Lapa"],
                ["vila-madalena", "Vila Madalena"],
                ["alto-de-pinheiros", "Alto de Pinheiros"],
                ["butanta", "Butantã"],
                ["pompeia", "Pompeia"],
              ].map(([slug, name]) => (
                <Link
                  key={slug}
                  to="/servicos/$bairro"
                  params={{ bairro: slug }}
                  className="inline-flex items-center rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
                >
                  {name}
                </Link>
              ))}
            </div>

            <h3 className="text-xl font-black pt-4">Zona Leste</h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["tatuape", "Tatuapé"],
                ["analia-franco", "Anália Franco"],
                ["mooca", "Mooca"],
                ["vila-formosa", "Vila Formosa"],
                ["belenzinho", "Belenzinho"],
                ["penha", "Penha"],
              ].map(([slug, name]) => (
                <Link
                  key={slug}
                  to="/servicos/$bairro"
                  params={{ bairro: slug }}
                  className="inline-flex items-center rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
                >
                  {name}
                </Link>
              ))}
            </div>

            <h3 className="text-xl font-black pt-4">Centro e Jardins</h3>
            <div className="flex flex-wrap gap-2">
              {[
                ["jardins", "Jardins"],
                ["consolacao", "Consolação"],
                ["higienopolis", "Higienópolis"],
              ].map(([slug, name]) => (
                <Link
                  key={slug}
                  to="/servicos/$bairro"
                  params={{ bairro: slug }}
                  className="inline-flex items-center rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
                >
                  {name}
                </Link>
              ))}
            </div>

            <p className="pt-4">
              Nossos técnicos avaliam o prumo das paredes, o nível do piso e
              se há encanamentos passando no local da furação, garantindo uma
              instalação totalmente segura e sem riscos de vazamento.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Conclusão: Medir É Simples e Agiliza Seu Orçamento
            </h2>
            <p>
              Seguindo a regra dos 3 pontos para a largura e definindo a
              altura ideal para o seu modelo de banheiro, você elimina
              qualquer chance de erro grave e consegue um preço direto de
              fábrica exato com os nossos consultores. Deixe o medo de lado,
              tire as medidas aproximadas e dê o primeiro passo para renovar o
              seu banheiro.
            </p>
            <p>
              Fale com quem fabrica com matéria-prima certificada de grandes
              marcas como <strong>Cebrace</strong> e <strong>Guardian</strong>{" "}
              e oferece o menor prazo de entrega com montagem limpa e segura
              em São Paulo.
            </p>
          </div>

          {/* CTA Final */}
          <div className="mt-12 rounded-xl bg-ink p-10 text-center text-ink-foreground">
            <p className="text-sm font-bold uppercase tracking-wider text-primary">
              Tem as medidas em mãos?
            </p>
            <h3 className="mt-2 text-3xl sm:text-4xl font-black">
              Peça Seu Orçamento Agora!
            </h3>
            <p className="mt-3 text-sm text-ink-foreground/80 max-w-xl mx-auto">
              Nossa equipe de atendimento técnico está de plantão para calcular
              o valor do seu box em poucos minutos. Envie a largura e a altura
              aproximadas — e, se possível, uma foto do banheiro.
            </p>
            <a
              href={waLink(
                "Olá! Já tenho as medidas aproximadas do meu box e gostaria de um orçamento direto de fábrica."
              )}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Enviar Medidas no WhatsApp
            </a>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
