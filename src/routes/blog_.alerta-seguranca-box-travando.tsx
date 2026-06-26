import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar, Shield } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-alerta-seguranca-box-travando-cover.png";

const TITLE =
  "Alerta de Segurança: Box Travando ou Emperrado? Pare de Usar Agora e Chame a Assistência! | Fast Vidro";
const DESC =
  "Box de banheiro travando ou emperrado é risco de acidente. Saiba os sinais de alerta, por que ocorre e como a manutenção preventiva da Fast Vidro protege sua família em São Paulo.";
const URL =
  "https://glass-swift-site.lovable.app/blog/alerta-seguranca-box-travando";

export const Route = createFileRoute("/blog_/alerta-seguranca-box-travando")({
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
          datePublished: "2026-07-04",
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
    "Olá! Meu box de banheiro está travando/emperrado. Vi o artigo de alerta de segurança e quero agendar uma vistoria técnica urgente.";

  return (
    <SiteLayout>
      <article className="bg-background">
        {/* Cover */}
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
                alt="Alerta de Segurança: Box Travando ou Emperrado — Fast Vidro Assistência Técnica"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Segurança • Manutenção</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 4 de Julho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Alerta de Segurança: Box Travando ou Emperrado? Pare de Usar Agora
            e Chame a Assistência!
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              O banheiro é um dos ambientes mais utilizados em qualquer
              residência em São Paulo, e o <strong>box de vidro temperado</strong>{" "}
              é acionado diversas vezes todos os dias por todos os membros da
              família. Por ser um item tão comum na rotina, muitas pessoas
              acabam ignorando pequenos sinais de desgaste no sistema de
              abertura. Sabe aquele tranco leve na hora de fechar, aquele barulho
              de vidro raspando no metal ou a porta que exige um esforço extra
              para correr?
            </p>
            <p>
              Na <strong>Fast Vidro</strong>, emitimos um alerta técnico urgente:
              um <strong>box de banheiro travando ou emperrado</strong> é um
              risco iminente de acidente doméstico. O vidro temperado de 8mm ou
              10mm é extremamente resistente a impactos frontais, mas ele possui
              pontos de tensão crônicos. Quando o sistema mecânico falha e
              força o vidro de maneira incorreta, pode ocorrer a quebra
              espontânea, estilhaçando a folha inteira em segundos.
            </p>
            <p>
              Neste artigo vital, explicamos os motivos técnicos pelos quais o
              seu box emperra, os sinais de perigo que você nunca deve ignorar e
              como agir para proteger a integridade física da sua família.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              1. Por que o Box de Vidro Começa a Travar?
            </h2>
            <p>
              A mecânica de um box de correr ou de abrir parece simples, mas
              envolve a distribuição perfeita de cargas pesadas sobre componentes
              pequenos. Quando a folha de vidro começa a apresentar resistência
              para se movimentar, os motivos técnicos geralmente são:
            </p>

            <h3 className="text-xl font-black pt-4">
              Desgaste Natural ou Quebra das Roldanas
            </h3>
            <p>
              As <strong>roldanas</strong> são as pequenas rodas que sustentam
              todo o peso do vidro móvel. Com o tempo, a umidade constante do
              chuveiro, o vapor quente e os resíduos de shampoo penetram nos
              rolamentos. Se a roldana não for blindada ou de boa qualidade,
              ela oxida (enferruja) e para de girar. Quando isso acontece, em
              vez de rolar suavemente sobre o trilho de alumínio, a roldana
              começa a arrastar, gerando atrito direto e sobrecarga no vidro.
            </p>

            <h3 className="text-xl font-black pt-4">
              Ressecamento ou Perda dos Batedores de Borracha
            </h3>
            <p>
              Os <strong>batedores (ou freios)</strong> são peças de borracha ou
              silicone instaladas nas extremidades dos trilhos. A função deles
              é amortecer o impacto e impedir que a porta de vidro colida
              diretamente com a parede de alvenaria ou com o perfil de alumínio
              lateral ao ser aberta ou fechada com força. Se o batedor quebrar
              ou cair, o vidro sofrerá um impacto seco de alta intensidade — a
              principal causa de estouro de vidros temperados.
            </p>

            <h3 className="text-xl font-black pt-4">
              Desalinhamento do Trilho ou Prumo da Parede
            </h3>
            <p>
              Casas e edifícios em São Paulo sofrem micro-assentamentos
              estruturais ao longo dos anos. Isso pode fazer com que o prumo da
              parede ou o nível do piso saiam milimetricamente do eixo. Se o
              trilho superior do box entortar ou ceder, o vidro passará a
              trabalhar torto, raspando na canaleta inferior ou na folha fixa.
            </p>
          </div>

          {/* CTA 1 — Assistência técnica/WhatsApp */}
          <div className="mt-10 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Sinal de alerta no seu banheiro?
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              O seu box está fazendo barulho, pesado ou raspando no chão?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Fale Agora com a Assistência Técnica da Fast Vidro no WhatsApp e
              agende uma vistoria de segurança preventiva para o seu bairro hoje
              mesmo!
            </p>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com Assistência Técnica no WhatsApp
            </a>
          </div>

          <div className="prose-content mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              2. Os 5 Sinais de Alerta: Se Notar Isso, Pare de Usar!
            </h2>
            <p>
              Não espere o vidro quebrar para tomar uma atitude. Faça uma
              checagem visual e tátil no seu banheiro agora mesmo. Se
              identificar qualquer um desses 5 sinais, suspenda o uso do
              chuveiro e chame um vidraceiro especializado:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Porta Pesada:</strong> Você precisa usar as duas mãos ou
                fazer força excessiva para conseguir abrir ou fechar o box.
              </li>
              <li>
                <strong>Barulho de Atrito:</strong> Som de metal raspando em
                metal ou, pior ainda, o som agudo de vidro raspando na canaleta
                de alumínio inferior.
              </li>
              <li>
                <strong>Porta Fora do Trilho:</strong> A folha móvel parece
                bamba, inclinada ou dá a sensação de que vai se soltar do
                trilho superior a qualquer momento.
              </li>
              <li>
                <strong>Falta de Amortecimento:</strong> O box fecha batendo
                direto no metal da parede, sem a presença do batedor de
                borracha protetor.
              </li>
              <li>
                <strong>Rachaduras ou Lascas:</strong> Qualquer micro-lasca nas
                bordas ou furos do vidro (perto do puxador ou das roldanas). No
                vidro temperado, uma lasca milimétrica pode fazer a peça inteira
                explodir devido à pressão interna do material.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              3. A Importância da Manutenção Preventiva (Norma ABNT NBR 14207)
            </h2>
            <p>
              O que pouca gente sabe é que o box de vidro possui uma norma
              técnica nacional regulamentada pela <strong>ABNT (NBR 14207)</strong>,
              que determina que todo box de banheiro deve passar por uma
              manutenção preventiva técnica a cada 12 meses.
            </p>
            <p>
              Nessa revisão realizada pelos técnicos da Fast Vidro, nós fazemos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                A substituição das roldanas antigas por modelos novos com
                rolamento blindado;
              </li>
              <li>
                A troca de batedores, guias de piso e cunhas de regulagem;
              </li>
              <li>O reaperto de parafusos de sustentação e puxadores;</li>
              <li>
                A checagem do prumo e do nível para garantir o deslize suave;
              </li>
              <li>
                A renovação do silicone de vedação para eliminar mofos e
                vazamentos de água.
              </li>
            </ul>
            <p>
              Investir na manutenção preventiva anual custa uma fração
              minúscula do valor de um box novo e garante a paz de espírito de
              que nenhum acidente grave acontecerá com seus filhos, idosos ou
              pets.
            </p>
          </div>

          {/* CTA 2 — Modelos de Box */}
          <div className="mt-10 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Quer substituir seu box antigo?
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Quer substituir seu box antigo por um sistema moderno, leve e
              seguro?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Acesse nossa Página de Modelos de Box e conheça nossas linhas com
              engenharia de alta performance.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/box-de-banheiro"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Ver Modelos de Box
              </Link>
              <Link
                to="/blog/cor-box-incolor-fume-verde-bronze"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Guia de Cores de Box
              </Link>
            </div>
          </div>

          <div className="prose-content mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              4. Tabela de Riscos: O que Acontece se Você Ignorar o Problema?
            </h2>
            <p>
              Abaixo, um resumo técnico dos sintomas, causas mecânicas e
              riscos reais para quem continua usando um box defeituoso:
            </p>

            <div className="overflow-x-auto my-6 rounded-xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Sintoma Apresentado</th>
                    <th className="px-4 py-3">
                      O que Está Acontecendo na Mecânica
                    </th>
                    <th className="px-4 py-3">Risco Real para o Usuário</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-bold">
                      Pequeno estalo ao correr
                    </td>
                    <td className="px-4 py-3">
                      Roldana com rolamento quebrado ou ovalado
                    </td>
                    <td className="px-4 py-3">
                      Desprendimento da porta e queda do vidro pesado
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">
                      Vidro raspando embaixo
                    </td>
                    <td className="px-4 py-3">
                      Perda de prumo ou trilho superior cedendo
                    </td>
                    <td className="px-4 py-3">
                      Quebra espontânea por pressão na borda do vidro
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">
                      Porta batendo seco no fim
                    </td>
                    <td className="px-4 py-3">
                      Batedor de borracha ausente ou ressecado
                    </td>
                    <td className="px-4 py-3">
                      Impacto seco que estilhaça o vidro temperado
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">
                      Puxador frouxo ou chacoalhando
                    </td>
                    <td className="px-4 py-3">
                      Parafuso interno em contato direto com o vidro
                    </td>
                    <td className="px-4 py-3">
                      Rachadura concêntrica a partir do furo do puxador
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              5. Blindagem Absoluta contra Acidentes: Película Secure Box
            </h2>
            <p>
              Mesmo realizando a manutenção preventiva anualmente, imprevistos
              mecânicos ou impactos acidentais bruscos (como um escorregão no
              piso molhado do chuveiro) podem quebrar o vidro. É por isso que a{" "}
              <strong>Fast Vidro</strong> não abre mão de recomendar em 100% das
              instalações a <strong>Película Secure Box</strong>.
            </p>

            <h3 className="text-xl font-black pt-4">
              Como a Tecnologia Secure Box Salva Vidas?
            </h3>
            <p>
              O vidro temperado, ao quebrar, divide-se em milhares de pequenos
              pedaços granulados que, embora sejam menos cortantes que o vidro
              comum, causam ferimentos e cortes pelo impacto da queda.
            </p>
            <p>
              Com a <strong>Película Secure Box</strong> aplicada na face do
              vidro, a história muda completamente: em caso de quebra, todos os
              fragmentos de vidro ficam grudados na película de polímero. O
              vidro quebrado não cai no chão, não atinge quem está tomando banho
              e o box permanece estruturado em pé, fechando o vão até que nossa
              assistência técnica vá fazer a substituição.
            </p>
          </div>

          {/* CTA 3 — Secure Box */}
          <div className="mt-10 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Proteção máxima
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Não coloque a segurança de quem você ama em segundo plano
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Conheça Tudo sobre a Película Secure Box e Proteja Seu Banheiro
              Hoje.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/blog/secure-box-pelicula-protecao"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                <Shield className="h-4 w-4" />
                Conhecer a Película Secure Box
              </Link>
              <a
                href={waLink(
                  "Olá! Quero saber mais sobre a Película Secure Box para o meu box de banheiro."
                )}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-xs font-bold uppercase tracking-wider text-whatsapp-foreground shadow-ink hover:scale-105 transition"
              >
                <MessageCircle className="h-4 w-4" />
                Falar sobre Secure Box no WhatsApp
              </a>
            </div>
          </div>

          <div className="prose-content mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              6. Atendimento de Emergência e Manutenção em São Paulo (GEO)
            </h2>
            <p>
              Não tente consertar o box sozinho tirando o vidro do trilho; o
              peso e o manuseio incorreto por falta de ferramentas apropriadas
              podem causar o estouro da peça nas suas mãos. A Fast Vidro possui
              equipes técnicas focadas exclusivamente em vistorias, troca de
              roldanas e reparos urgentes em todas as zonas de São Paulo:
            </p>

            <h3 className="text-xl font-black pt-4">Zona Sul</h3>
            <p>
              Atendimento preventivo rápido no{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "morumbi" }}
                className="text-primary hover:underline font-bold"
              >
                Morumbi
              </Link>
              ,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "moema" }}
                className="text-primary hover:underline font-bold"
              >
                Moema
              </Link>
              , Brooklin,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "vila-olimpia" }}
                className="text-primary hover:underline font-bold"
              >
                Vila Olímpia
              </Link>
              ,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "campo-belo" }}
                className="text-primary hover:underline font-bold"
              >
                Campo Belo
              </Link>
              ,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "santo-amaro" }}
                className="text-primary hover:underline font-bold"
              >
                Santo Amaro
              </Link>
              ,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "saude" }}
                className="text-primary hover:underline font-bold"
              >
                Saúde
              </Link>
              ,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "ipiranga" }}
                className="text-primary hover:underline font-bold"
              >
                Ipiranga
              </Link>{" "}
              e{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "vila-mariana" }}
                className="text-primary hover:underline font-bold"
              >
                Vila Mariana
              </Link>
              .
            </p>

            <h3 className="text-xl font-black pt-4">Zona Oeste</h3>
            <p>
              Vistorias técnicas especializadas em{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "pinheiros" }}
                className="text-primary hover:underline font-bold"
              >
                Pinheiros
              </Link>
              ,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "perdizes" }}
                className="text-primary hover:underline font-bold"
              >
                Perdizes
              </Link>
              ,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "lapa" }}
                className="text-primary hover:underline font-bold"
              >
                Lapa
              </Link>
              ,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "vila-madalena" }}
                className="text-primary hover:underline font-bold"
              >
                Vila Madalena
              </Link>
              , Butantã, Pompéia e Vila Leopoldina.
            </p>

            <h3 className="text-xl font-black pt-4">Zona Norte</h3>
            <p>
              Reparos e trocas de kits em{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "santana" }}
                className="text-primary hover:underline font-bold"
              >
                Santana
              </Link>
              ,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "tucuruvi" }}
                className="text-primary hover:underline font-bold"
              >
                Tucuruvi
              </Link>
              ,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "casa-verde" }}
                className="text-primary hover:underline font-bold"
              >
                Casa Verde
              </Link>
              ,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "freguesia-do-o" }}
                className="text-primary hover:underline font-bold"
              >
                Freguesia do Ó
              </Link>{" "}
              e{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "mandaqui" }}
                className="text-primary hover:underline font-bold"
              >
                Mandaqui
              </Link>
              .
            </p>

            <h3 className="text-xl font-black pt-4">Zona Leste</h3>
            <p>
              Atendimento ágil nos bairros do{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "tatuape" }}
                className="text-primary hover:underline font-bold"
              >
                Tatuapé
              </Link>
              , Anália Franco,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "mooca" }}
                className="text-primary hover:underline font-bold"
              >
                Mooca
              </Link>
              ,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "vila-formosa" }}
                className="text-primary hover:underline font-bold"
              >
                Vila Formosa
              </Link>
              , Belenzinho e{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "penha" }}
                className="text-primary hover:underline font-bold"
              >
                Penha
              </Link>
              .
            </p>

            <h3 className="text-xl font-black pt-4">
              Centro e Região Metropolitana
            </h3>
            <p>
              Atendemos os{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "jardins" }}
                className="text-primary hover:underline font-bold"
              >
                Jardins
              </Link>
              ,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "consolacao" }}
                className="text-primary hover:underline font-bold"
              >
                Consolação
              </Link>
              ,{" "}
              <Link
                to="/servicos/$bairro"
                params={{ bairro: "higienopolis" }}
                className="text-primary hover:underline font-bold"
              >
                Higienópolis
              </Link>{" "}
              e também a região do Grande ABC (Santo André, São Bernardo e São
              Caetano).
            </p>
            <p>
              Nossos profissionais andam com kits de roldanas originais de
              fábrica, silicones antifungo de cura neutra e ferramentas de
              ajuste a laser para garantir que o seu box volte a correr com a
              leveza de um papel.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Conclusão: Segurança Não Se Adia
            </h2>
            <p>
              Se o box do seu banheiro está travando, pesado ou emperrado, não
              force a barra. Esse comportamento travado é o vidro avisando que a
              mecânica falhou e que a tensão estrutural está errada. Proteja sua
              família, evite acidentes domésticos graves e garanta um banho
              relaxante e macio novamente.
            </p>
            <p>
              Chame a equipe que fabrica, entende de engenharia de vidros e
              oferece o menor prazo de atendimento e manutenção de São Paulo.
            </p>
          </div>

          {/* CTA Final — WhatsApp */}
          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Sinal de alerta ativado?
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Chame a Fast Vidro Agora!
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Evite que um susto aconteça no momento do banho. Fale com o nosso
              suporte de atendimento imediato.
            </p>
            <a
              href={waLink(
                "Olá! Meu box está travando ou emperrado. Vi o artigo de alerta de segurança e quero um orçamento de manutenção urgente."
              )}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp Agora
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              Envie um curto vídeo do seu box correndo ou fazendo barulho.
              Nossos técnicos analisam na hora e enviam um orçamento sem
              compromisso para regularizar o seu box com preço de fábrica!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/blog/manutencao-box-banheiro"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Ver artigo sobre Manutenção Anual
              </Link>
              <Link
                to="/blog/secure-box-pelicula-protecao"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Conhecer a Película Secure Box
              </Link>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
