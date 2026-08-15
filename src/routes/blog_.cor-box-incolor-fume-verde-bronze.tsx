import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-cor-box-cover.webp";

export const Route = createFileRoute("/blog_/cor-box-incolor-fume-verde-bronze")({
  head: () => ({
    meta: [
      {
        title:
          "Vidro Incolor, Fumê, Verde ou Bronze? Guia Definitivo para Escolher a Cor do Seu Box — Fast Vidro",
      },
      {
        name: "description",
        content:
          "Guia completo para escolher a cor do box de vidro temperado: incolor, fumê, verde ou bronze. Vantagens, estilos e indicações para cada banheiro. Fast Vidro em São Paulo.",
      },
      {
        property: "og:title",
        content:
          "Vidro Incolor, Fumê, Verde ou Bronze? Guia Definitivo para Escolher a Cor do Seu Box",
      },
      {
        property: "og:description",
        content:
          "Descubra qual cor de vidro temperado combina com o seu banheiro: incolor, fumê, verde ou bronze. Veja vantagens, estilos e indicações.",
      },
      { property: "og:image", content: cover },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: cover },
    ],
  }),
  component: Post,
});

function Post() {
  const message =
    "Olá! Li o guia sobre cores de box (incolor, fumê, verde ou bronze) e quero um orçamento sob medida.";

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
                alt="Guia de cores de box de vidro: incolor, fumê, verde e bronze — Fast Vidro"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Box de Banheiro</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 25 de Junho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Vidro Incolor, Fumê, Verde ou Bronze? Guia Definitivo para Escolher
            a Cor do Seu Box
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Na hora de reformar ou planejar o banheiro, a escolha do{" "}
              <strong>box de vidro</strong> vai muito além do tamanho. A cor do
              vidro temperado desempenha um papel fundamental na estética, na
              sensação de espaço e até na privacidade do ambiente.
            </p>
            <p>
              Se você está indeciso entre o clássico{" "}
              <Link to="/box-incolor" className="text-primary hover:underline font-bold">
                vidro incolor
              </Link>
              , o moderno{" "}
              <Link to="/box-fume" className="text-primary hover:underline font-bold">
                fumê
              </Link>
              , ou os sofisticados verde e bronze, este guia definitivo vai te
              ajudar a tomar a melhor decisão para o seu projeto.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              1. Box de Vidro Incolor: O Campeão de Vendas
            </h2>
            <p>
              O vidro incolor é a escolha mais tradicional e versátil do
              mercado. Por ser totalmente transparente, ele se adapta a qualquer
              estilo de decoração e revestimento.
            </p>
            <p>
              <strong>Vantagens:</strong> Amplitude visual (ideal para banheiros
              pequenos, pois não cria barreiras visuais) e máxima iluminação
              natural ou artificial dentro da área do banho.
            </p>
            <p>
              <strong>Para quem é indicado?</strong> Para quem tem banheiros
              compactos, investiu em revestimentos nobres dentro do box (como
              porcelanatos que imitam mármore ou amadeirados) e quer deixá-los à
              mostra, ou simplesmente prefere uma decoração clean e atemporal.
            </p>
            <p>
              <Link to="/box-incolor" className="text-primary hover:underline font-bold">
                Conheça nossa linha completa de Box Incolor →
              </Link>
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              2. Box de Vidro Fumê: Modernidade e Privacidade
            </h2>
            <p>
              O vidro fumê (um tom cinza escuro translúcido) traz uma pegada
              contemporânea, urbana e muito elegante para o banheiro.
            </p>
            <p>
              <strong>Vantagens:</strong> Garante maior privacidade na hora do
              banho, esconde parcialmente a área interna do box e disfarça
              marcas de gotas d'água com mais facilidade no dia a dia.
            </p>
            <p>
              <strong>Para quem é indicado?</strong> Banheiros de médio a grande
              porte, projetos com decoração moderna, industrial ou minimalista,
              e para quem prioriza privacidade. Combina perfeitamente com
              perfis e roldanas de alumínio preto ou cromado.
            </p>
            <p>
              <Link to="/box-fume" className="text-primary hover:underline font-bold">
                Veja todos os modelos de Box Fumê →
              </Link>
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              3. Box de Vidro Bronze: Sofisticação e Aconchego
            </h2>
            <p>
              O vidro bronze tem um tom marrom quente e translúcido que
              transmite luxo imediato ao ambiente. É uma das grandes tendências
              da arquitetura de interiores de alto padrão.
            </p>
            <p>
              <strong>Vantagens:</strong> Traz uma sensação de acolhimento e
              sofisticação única. Combina perfeitamente com metais dourados,
              rose gold ou pretos, criando um contraste de altíssimo nível.
            </p>
            <p>
              <strong>Para quem é indicado?</strong> Para quem busca um banheiro
              com atmosfera de "spa", que utilize revestimentos em tons quentes,
              beges ou amadeirados, e quer que o box seja o grande destaque do
              ambiente.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              4. Box de Vidro Verde: O Toque Clássico e Suave
            </h2>
            <p>
              O vidro verde já foi um grande padrão de sofisticação e continua
              tendo o seu espaço em projetos específicos que buscam um toque de
              cor sutil.
            </p>
            <p>
              <strong>Vantagens:</strong> Oferece uma estética suave e
              diferenciada, mantendo uma boa passagem de luz para o interior do
              box.
            </p>
            <p>
              <strong>Para quem é indicado?</strong> Banheiros que apostam em
              paletas de cores neutras ou com elementos naturais (como plantas e
              pedras), onde o tom esverdeado harmonize com o restante da
              decoração.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Tabela Comparativa Rápida
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr className="text-left">
                    <th className="px-4 py-3 font-black">Cor do Vidro</th>
                    <th className="px-4 py-3 font-black">Privacidade</th>
                    <th className="px-4 py-3 font-black">Amplitude</th>
                    <th className="px-4 py-3 font-black">Estilo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-bold">Incolor</td>
                    <td className="px-4 py-3">Baixa</td>
                    <td className="px-4 py-3">Alta (Máxima)</td>
                    <td className="px-4 py-3">Clean / Atemporal</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Fumê</td>
                    <td className="px-4 py-3">Alta</td>
                    <td className="px-4 py-3">Média</td>
                    <td className="px-4 py-3">Moderno / Industrial</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Bronze</td>
                    <td className="px-4 py-3">Média-Alta</td>
                    <td className="px-4 py-3">Média</td>
                    <td className="px-4 py-3">Luxo / Aconchegante</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Verde</td>
                    <td className="px-4 py-3">Média</td>
                    <td className="px-4 py-3">Média-Alta</td>
                    <td className="px-4 py-3">Clássico / Natural</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Qualidade e Segurança em Primeiro Lugar
            </h2>
            <p>
              Independentemente da cor escolhida, o fator mais importante é a{" "}
              <strong>segurança da sua família</strong>. Certifique-se de
              escolher sempre vidro temperado de 8mm, produzido pelas melhores
              marcas do mercado (como Cebrace e Guardian), e que conte com uma{" "}
              <Link to="/blog/secure-box-pelicula-protecao" className="text-primary hover:underline font-bold">
                película de segurança SECURE BOX
              </Link>{" "}
              de alta resistência.
            </p>
            <p>
              Na Fast Vidro, todos os nossos projetos seguem as normas rígidas
              da ABNT e contam com a tecnologia de instalação de ponta para
              garantir um deslizamento suave, silencioso e totalmente seguro.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Conheça os Modelos de Box da Fast Vidro
            </h2>
            <p>
              Além da cor, escolher o <strong>modelo de abertura</strong> também
              faz toda a diferença no resultado final do seu banheiro:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <Link to="/box-de-banheiro/tradicional" className="text-primary hover:underline font-bold">
                  Box Tradicional de Correr
                </Link>{" "}
                — o clássico de melhor custo-benefício.
              </li>
              <li>
                <Link to="/box-de-banheiro/flex" className="text-primary hover:underline font-bold">
                  Box Flex
                </Link>{" "}
                — abertura total para ganho de espaço.
              </li>
              <li>
                <Link to="/box-de-banheiro/piso-teto" className="text-primary hover:underline font-bold">
                  Box Piso-Teto
                </Link>{" "}
                — visual minimalista, sem perfis aparentes.
              </li>
              <li>
                <Link to="/box-de-banheiro/elegance" className="text-primary hover:underline font-bold">
                  Box Elegance
                </Link>{" "}
                — design premium com perfis ultrafinos.
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Fale agora com a Fast Vidro
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Quer transformar o seu banheiro com o box ideal?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Atendemos toda a capital de São Paulo e Grande SP com medição
              técnica digital e instalação especializada rápida.
            </p>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar orçamento no WhatsApp
            </a>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/box-incolor"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Ver Box Incolor
              </Link>
              <Link
                to="/box-fume"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Ver Box Fumê
              </Link>
              <Link
                to="/box-de-banheiro"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Todos os Modelos
              </Link>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
