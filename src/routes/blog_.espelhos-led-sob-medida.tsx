import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-espelhos-led-cover.webp";

export const Route = createFileRoute("/blog_/espelhos-led-sob-medida")({
  head: () => ({
    meta: [
      {
        title:
          "Espelho com LED Sob Medida: Como Escolher a Iluminação Perfeita — Fast Vidro",
      },
      {
        name: "description",
        content:
          "Descubra como escolher a iluminação perfeita para seu espelho com LED sob medida. Luz quente, neutra ou fria? Frontal ou retroiluminado? Veja o guia completo da Fast Vidro em São Paulo.",
      },
      {
        property: "og:title",
        content:
          "Espelho com LED Sob Medida: Como Escolher a Iluminação Perfeita — Fast Vidro",
      },
      {
        property: "og:description",
        content:
          "Guia completo sobre espelhos LED sob medida: temperatura de cor, iluminação frontal vs. retroiluminada e instalação profissional em São Paulo.",
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
    "Olá! Li o post sobre Espelho com LED Sob Medida e gostaria de um orçamento personalizado.";

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
                alt="Espelho com LED sob medida — Fast Vidro"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Espelhos LED</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 04 de Junho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Espelho com LED Sob Medida: Como Escolher a Iluminação Perfeita para
            seu Banheiro
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              O banheiro deixou de ser apenas um espaço funcional da casa para
              se tornar um ambiente de relaxamento, autocuidado e sofisticação.
              Se você quer transformar o visual desse cômodo sem encarar
              grandes reformas, o segredo está na iluminação. E a maior
              tendência de decoração atual cumpre esse papel com perfeição: o{" "}
              <strong>espelho com LED sob medida</strong>.
            </p>
            <p>
              Seja para fazer a maquiagem perfeita, barbear-se com precisão ou
              criar um clima de spa residencial na hora do banho, a escolha da
              luz certa faz toda a diferença. Neste artigo, vamos te mostrar
              como escolher a iluminação ideal para o seu espelho decorativo e
              valorizar ainda mais o seu espaço.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Luz Quente, Neutra ou Fria: Qual Escolher?
            </h2>
            <p>
              Uma das principais dúvidas na hora de planejar o seu espelho de
              LED sob medida é a temperatura da cor da luz. Cada uma cumpre uma
              função específica no design e na utilidade do dia a dia:
            </p>

            <h3 className="text-xl font-black pt-2">
              Luz Fria (Branca — acima de 5000K)
            </h3>
            <p>
              Ideal para quem busca máxima precisão. Excelente para banheiros
              modernos e para atividades funcionais, pois revela os mínimos
              detalhes sem criar sombras indesejadas.
            </p>

            <h3 className="text-xl font-black pt-2">
              Luz Neutra (Branca Natural — em torno de 4000K)
            </h3>
            <p>
              É a mais fiel à luz do dia. É a cor mais recomendada por
              maquiadores profissionais, pois não altera a tonalidade real da
              pele e dos produtos.
            </p>

            <h3 className="text-xl font-black pt-2">
              Luz Quente (Amarelada — em torno de 3000K)
            </h3>
            <p>
              Perfeita para quem prioriza o aconchego. Traz uma sensação de
              conforto, relaxamento e sofisticação premium, ideal para um banho
              calmo no fim do dia.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Design Funcional: Iluminação Frontal vs. Retroiluminado
            </h2>
            <p>
              Outro ponto crucial para o seu projeto é o direcionamento do fluxo
              luminoso. A Fast Vidro trabalha com tecnologias sob medida que se
              adaptam exatamente ao seu objetivo:
            </p>

            <h3 className="text-xl font-black pt-2">
              Espelho com LED Frontal (Luz Direta)
            </h3>
            <p>
              O jato de luz passa por um jato de areia no próprio vidro
              (difusor), iluminando diretamente o rosto de quem está em frente ao
              espelho. É a escolha perfeita para tarefas de precisão,
              eliminando sombras nos olhos e no pescoço.
            </p>

            <h3 className="text-xl font-black pt-2">
              Espelho Retroiluminado (Luz Indireta)
            </h3>
            <p>
              A fita de LED é instalada por trás do espelho, criando uma
              moldura flutuante de luz difusa na parede. O efeito estético é
              deslumbrante e adiciona profundidade, luxo e um toque super
              moderno ao banheiro.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Por que Optar por um Espelho Sob Medida?
            </h2>
            <p>
              Banheiros e lavabos possuem metragens e disposições de bancada
              completamente diferentes. Um modelo padrão comprado pronto muitas
              vezes não se encaixa de forma harmoniosa ou não oferece a
              intensidade de luz necessária.
            </p>
            <p>
              Optar por um espelho sob medida com a Fast Vidro garante que cada
              milímetro seja aproveitado. Nossos produtos utilizam espelhos de
              marcas líderes de mercado (como Guardian e Cebrace), garantindo
              reflexo perfeito, sem distorções, com proteção avançada contra
              oxidação e manchas causadas pela umidade do banheiro.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Atendimento e Instalação Profissional em São Paulo
            </h2>
            <p>
              A Fast Vidro cuida de todo o processo para você, desde a medição
              técnica precisa até a instalação final com segurança. Atendemos
              com máxima agilidade toda a <strong>Zona Norte de São Paulo</strong>{" "}
              (Santana, Tucuruvi, Freguesia do Ó, Casa Verde, Mandaqui, Vila
              Maria) e expandimos nossa estrutura para cobrir com total
              prontidão os principais bairros da Zona Oeste, Zona Leste, Zona
              Sul e Centro de São Paulo.
            </p>
            <p>
              Quer conferir outros modelos para se inspirar? Visite nossa{" "}
              <Link to="/espelhos" className="text-primary hover:underline font-bold">
                página exclusiva de Espelhos Decorativos e Lapidados
              </Link>{" "}
              e descubra como transformar sua casa.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Fale agora com a Fast Vidro
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Quer transformar o seu banheiro com um Espelho LED Sob Medida?
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
