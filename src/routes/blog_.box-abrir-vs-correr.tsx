import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-abrir-vs-correr-cover.png";

const TITLE =
  "Box de Abrir (Porta de Giro) vs. Box de Correr: Quando Escolher Cada Modelo? | Fast Vidro";
const DESC =
  "Box de Abrir (Porta de Giro) ou Box de Correr? Veja o comparativo completo: vão livre, espaço, trilhos, segurança e qual o melhor modelo para o seu banheiro em São Paulo.";
const URL =
  "https://glass-swift-site.lovable.app/blog/box-abrir-vs-correr";

export const Route = createFileRoute("/blog_/box-abrir-vs-correr")({
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
          datePublished: "2026-06-30",
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
    "Olá! Li o artigo comparativo entre Box de Abrir e Box de Correr e quero um orçamento sob medida.";

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
                alt="Box de Abrir (Porta de Giro) vs. Box de Correr — Fast Vidro"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Comparativo • Box de Vidro</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 30 de Junho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Box de Abrir (Porta de Giro) vs. Box de Correr: Quando Escolher
            Cada Modelo?
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Na hora de planejar a área do chuveiro, a escolha do sistema de
              abertura da porta de vidro temperado é um dos fatores mais
              determinantes para o conforto do seu banho e a circulação do
              banheiro. Entre as diversas opções de engenharia disponíveis na
              Fast Vidro, duas se destacam como soluções tradicionais e
              altamente eficientes: o{" "}
              <strong>Box de Abrir (Porta de Giro)</strong> e o clássico{" "}
              <strong>Box de Correr</strong>.
            </p>
            <p>
              Embora pareçam escolhas simples, cada um desses modelos responde a
              necessidades arquitetônicas completamente diferentes. Instalar o
              modelo errado pode fazer com que a porta bata na bacia sanitária,
              no gabinete ou simplesmente deixe o espaço de entrada apertado e
              desconfortável.
            </p>
            <p>
              Neste guia técnico detalhado, vamos explicar o funcionamento de
              cada sistema, as vantagens mecânicas e as regras práticas de
              espaço para você decidir com segurança.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              1. O que é o Box de Correr (O Clássico Versátil)?
            </h2>
            <p>
              O box de correr é o modelo mais popular e vendido em toda a
              Região Metropolitana de São Paulo. Seu sistema é composto por uma
              folha de vidro fixa e uma folha móvel (porta) que desliza
              horizontalmente sobre um trilho de alumínio superior, com o auxílio
              de roldanas de alta performance.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Vantagens do Box de Correr
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Zero Ocupação de Espaço Externo:</strong> Como a porta
                corre paralelamente ao vidro fixo, ela não invade a área externa
                do banheiro ao ser aberta. Isso permite posicionar armários,
                bacias sanitárias e espelhos logo ao lado do box sem nenhuma
                interferência física.
              </li>
              <li>
                <strong>Estética Linear e Moderna:</strong> Os perfis horizontais
                trazem um visual limpo e simétrico que agrada a maioria dos
                clientes e arquitetos.
              </li>
              <li>
                <strong>Manutenção Prática:</strong> Por ter uma mecânica simples
                baseada em trilhos e roldanas, a manutenção preventiva é rápida
                e muito acessível.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Quando NÃO escolher o Box de Correr?
            </h3>
            <p>
              O box de correr não é recomendado para vãos muito estreitos
              (abaixo de 90 cm a 1 metro). Como a porta precisa se sobrepor à
              folha fixa, você perde cerca de 50% do vão total. Se o seu vão for
              de 80 cm, por exemplo, a sua passagem livre seria de míseros 37
              cm, tornando o acesso extremamente apertado.
            </p>

            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Orçamento sob medida
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🛠️ Tem um vão padrão ou grande e quer um orçamento sob medida?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Fale agora com um Especialista da Fast Vidro no WhatsApp e envie
                as fotos do seu banheiro para receber um projeto personalizado
                hoje mesmo!
              </p>
              <a
                href={waLink(
                  "Olá! Quero um orçamento sob medida para meu banheiro. Posso enviar fotos do vão?"
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
              2. O que é o Box de Abrir (Porta de Giro)?
            </h2>
            <p>
              O Box de Abrir (também chamado de box com porta de giro ou
              batente) funciona de forma semelhante a uma porta comum de madeira
              da sua casa. Ele utiliza dobradiças especiais fixadas na parede ou
              em uma torre de vidro fixa, permitindo que a folha móvel gire para
              dentro ou para fora do box sobre um eixo vertical.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Vantagens do Box de Abrir
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Aproveitamento Total em Vãos Estreitos:</strong> O modelo
                de abrir é a salvação para banheiros que possuem vãos muito
                pequenos (de 60 cm a 90 cm). Como não há necessidade de uma
                folha fixa para a porta correr por trás, a porta de giro pode
                ocupar quase a totalidade do vão, oferecendo uma abertura livre
                espetacular para banheiros compactos.
              </li>
              <li>
                <strong>Design Clean e Sem Trilho Superior:</strong> Diversos
                modelos de box de abrir dispensam o uso de trilhos horizontais
                superiores pesados, utilizando apenas perfis discretos de
                vedação e dobradiças metálicas nobres. Isso confere um visual
                extremamente leve, elegante e minimalista.
              </li>
              <li>
                <strong>Facilidade de Acesso:</strong> Permite uma abertura total
                e rápida, ideal para layouts onde o espaço frontal externa está
                livre.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              O Requisito Crucial: Espaço de Giro
            </h3>
            <p>
              Para instalar um box de abrir com segurança, é obrigatório que haja
              um raio livre de circulação na frente ou dentro do box para que a
              porta de vidro possa girar sem colidir com a bancada da pia, com o
              vaso sanitário ou com o próprio usuário durante a saída do banho.
            </p>

            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Modelos e fotos
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                💎 Quer conferir fotos e designs reais de portas de giro instaladas?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Acesse nossa Página de Modelos de Box e inspire-se com as
                soluções da Fast Vidro.
              </p>
              <Link
                to="/box-de-banheiro"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Ver Página de Modelos de Box
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              3. Tabela de Decisão Técnica: Correr vs. Abrir
            </h2>
            <p>
              Para facilitar a sua escolha antes de fechar o pedido direto com a
              nossa fábrica, preparamos este comparativo baseado nas principais
              dúvidas que recebemos no nosso balcão técnico:
            </p>

            <div className="overflow-x-auto my-6 rounded-xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Fator de Avaliação</th>
                    <th className="px-4 py-3">Box de Correr (Horizontal)</th>
                    <th className="px-4 py-3">Box de Abrir (Porta de Giro)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-bold">Largura Mínima Recomendada</td>
                    <td className="px-4 py-3">Vãos a partir de 1,00 metro</td>
                    <td className="px-4 py-3">Excelentes para vãos curtos (60cm a 90cm)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Uso de Espaço Frontal</td>
                    <td className="px-4 py-3">Não ocupa espaço externo ao abrir</td>
                    <td className="px-4 py-3">Exige área livre para o raio de abertura da porta</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Presença de Trilho Superior</td>
                    <td className="px-4 py-3">Sim, perfil robusto obrigatório</td>
                    <td className="px-4 py-3">Não obrigatório (design mais limpo e leve)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Abertura Livre do Vão</td>
                    <td className="px-4 py-3">Ganho de ~50% do espaço total</td>
                    <td className="px-4 py-3">Ganho de ~85 a 90% do espaço total</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Estilo de Instalação</td>
                    <td className="px-4 py-3">Roldanas e trilhos horizontais</td>
                    <td className="px-4 py-3">Dobradiças de parede e pivôs verticais</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              4. Cores de Perfis de Alumínio e Customização do Vidro
            </h2>
            <p>
              Independentemente de o seu projeto pedir uma porta de giro ou de
              correr, a personalização dos metais e do vidro temperado de 8mm é
              fundamental para a harmonia com o revestimento do ambiente. Na Fast
              Vidro, trabalhamos com acabamentos nobres de alta resistência à
              oxidação.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Cores de Perfis de Alumínio Mais Pedidas em SP
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Preto Fosco (Black Matte):</strong> O queridinho dos
                projetos modernos e industriais na capital paulista, criando
                linhas marcantes e sofisticadas.
              </li>
              <li>
                <strong>Cromado Alto Brilho:</strong> Traz um visual clássico,
                limpo e espelhado que combina perfeitamente com misturadores e
                chuveiros premium.
              </li>
              <li>
                <strong>Branco:</strong> Promove uma sensação de suavidade,
                amplitude e higiene total em banheiros com revestimentos claros.
              </li>
              <li>
                <strong>Bronze / Champanhe:</strong> Ideal para projetos que
                buscam tons quentes, requinte e uma paginação mais clássica.
              </li>
            </ul>

            <p>
              Trabalhamos com vidros das melhores marcas do mercado nacional
              (Cebrace e Guardian). Você pode escolher entre o{" "}
              <Link to="/box-incolor" className="text-primary hover:underline font-bold">
                Incolor
              </Link>{" "}
              (para máxima amplitude), o{" "}
              <Link to="/box-fume" className="text-primary hover:underline font-bold">
                Fumê
              </Link>{" "}
              (para um toque de privacidade imponente), o Verde ou o acabamento
              Jateado (que bloqueia totalmente a visão interna do chuveiro).
            </p>

            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Guia de cores
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🎨 Quer escolher a cor exata para combinar com a sua torneira?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Consulte o nosso Guia Completo de Cores e Acabamentos para não
                errar no design.
              </p>
              <Link
                to="/blog/cor-box-incolor-fume-verde-bronze"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Ver Catálogo de Cores e Acabamentos
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              5. Segurança Ativa da Família: Película Secure Box
            </h2>
            <p>
              Por ser uma área úmida e sujeita a variações bruscas de
              temperatura (choque térmico provocado pelo vapor quente do chuveiro)
              e impactos mecânicos acidentais (escorregões, batidas com o
              cotovelo ou fechamentos bruscos por crianças), a segurança do
              vidro temperado é inegociável.
            </p>
            <p>
              Na Fast Vidro, todos os nossos produtos seguem rigorosamente as
              normas técnicas da ABNT, mas para uma proteção residencial total,
              recomendamos sempre a aplicação da{" "}
              <strong>Película Secure Box</strong>.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Qual a importância da Película de Segurança?
            </h3>
            <p>
              A película Secure Box é uma camada de polímero de alta aderência
              instalada na face externa do vidro. Se houver uma quebra por forte
              impacto acidental, a película age como um escudo de contenção:
              todos os fragmentos de vidro quebrado continuam firmemente colados
              nela, impedindo que os cacos se espalhem pelo chão ou causem cortes
              nos usuários. O box se mantém estruturado em pé até que nossa
              assistência técnica faça a troca.
            </p>

            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Proteção familiar
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🛡️ Proteja quem você ama contra acidentes domésticos e cortes graves.
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Conheça a Tecnologia da Película Secure Box e Adicione ao Seu
                Pedido.
              </p>
              <Link
                to="/blog/secure-box-pelicula-protecao"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Conhecer a Película Secure Box
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              6. Atendimento e Instalação Técnica de Box em São Paulo
            </h2>
            <p>
              Sistemas de porta de giro exigem um cálculo de prumo perfeito da
              parede e folgas milimétricas nas dobradiças para evitar que o
              vidro raspe no chão ou apresente vazamentos de água. A Fast Vidro
              conta com frota própria e equipes de montadores experientes
              atendendo com máxima rapidez as seguintes regiões:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Zona Oeste:</strong> Pinheiros, Perdizes, Lapa, Vila
                Madalena, Alto de Pinheiros, Butantã, Jaguaré e Pompeia.
              </li>
              <li>
                <strong>Zona Sul:</strong> Morumbi, Moema, Brooklin, Vila
                Olímpia, Campo Belo, Santo Amaro, Saúde, Ipiranga e Vila Mariana.
              </li>
              <li>
                <strong>Zona Norte:</strong> Santana, Tucuruvi, Casa Verde,
                Freguesia do Ó, Vila Maria e Mandaqui.
              </li>
              <li>
                <strong>Zona Leste:</strong> Tatuapé, Anália Franco, Mooca,
                Vila Formosa, Belenzinho e Penha.
              </li>
              <li>
                <strong>Centro Expandido:</strong> Jardins, Consolação,
                Higienópolis e Bela Vista.
              </li>
              <li>
                <strong>Região Metropolitana e ABC:</strong> Santo André, São
                Bernardo do Campo, São Caetano do Sul, Osasco, Barueri
                (incluindo Alphaville) e Guarulhos.
              </li>
            </ul>
            <p>
              Nossos técnicos realizam a checagem com nível a laser no momento
              da medição fina e da montagem, garantindo que o seu box — seja de
              abrir ou de correr — funcione de forma suave e com vedação
              impecável de silicone antifungo.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Conclusão: Qual o Veredito para a Sua Reforma?
            </h2>
            <p>
              A regra de ouro é simples: se você tem um banheiro compacto com
              vão menor que 90 cm, mas possui espaço livre na frente para a
              porta girar, o <strong>Box de Abrir (Porta de Giro)</strong> é a
              sua melhor escolha. Por outro lado, se o seu vão é amplo (acima de
              1 metro) ou o espaço frontal do banheiro é apertado devido à
              proximidade do vaso sanitário ou do balcão, o{" "}
              <strong>Box de Correr</strong> continua sendo o clássico imbatível
              em praticidade.
            </p>
            <p>
              Garanta o preço competitivo direto de fábrica, matéria-prima
              certificada e o menor prazo de instalação técnica de São Paulo.
            </p>

            <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Fale agora com a Fast Vidro
              </p>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black">
                Orçamento de Box de Abrir ou Box de Correr no WhatsApp
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Não corra o risco de comprar um box que impeça a circulação do
                seu banheiro. Conte com o nosso suporte técnico! Mande uma foto
                do seu banheiro ou as medidas do vão. Nossa equipe responderá em
                minutos com a indicação perfeita e o melhor orçamento direto de
                fábrica para a sua região!
              </p>
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
        </div>
      </article>
    </SiteLayout>
  );
}
