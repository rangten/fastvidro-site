import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-quem-somos-cover.png";

export const Route = createFileRoute("/blog_/fast-vidro-historia")({
  head: () => ({
    meta: [
      {
        title:
          "Fast Vidro: 30+ Anos em Vidros e Box de Banheiro em São Paulo",
      },
      {
        name: "description",
        content:
          "Conheça a história da Fast Vidro: mais de 30 anos no ramo do vidro em São Paulo, com box de banheiro, espelhos, portas e projetos sob medida.",
      },
      { property: "og:title", content: "Fast Vidro: 30+ Anos de História em Vidros e Box em SP" },
      {
        property: "og:description",
        content:
          "Trajetória, valores e linha completa de produtos da Fast Vidro: box Secure, Flex, Elegance, espelhos, portas e mais.",
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
    "Olá! Li o post sobre a história da Fast Vidro e gostaria de um orçamento personalizado.";

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
                alt="Fast Vidro — Quem Somos: mais de 30 anos em soluções em vidro"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Quem Somos</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> Jun 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Fast Vidro: Mais de 30 Anos de História, Inovação e Soluções em
            Vidros e Box de Banheiro em São Paulo
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              A história da Fast Vidro não é apenas sobre vender vidros; é sobre
              transformar ambientes e realizar sonhos com segurança e elegância.
              Com uma trajetória sólida e de muita dedicação, o proprietário da
              Fast Vidro atua no ramo do vidro desde <strong>1995</strong>. São
              mais de três décadas de experiência prática, acompanhando a
              evolução do mercado e trazendo o que há de mais moderno para cada
              projeto.
            </p>
            <p>
              Nossos valores fundamentais são baseados na confiança, na
              qualidade técnica e, acima de tudo, no atendimento personalizado.
              Para nós, cada cliente é único. Nossa verdadeira preocupação não é
              apenas entregar um produto, mas sim criar e oferecer{" "}
              <strong>soluções individuais</strong> que se adaptem perfeitamente
              à necessidade, ao espaço e ao orçamento de cada um.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Conheça Nossa Linha Completa de Produtos de Alta Qualidade
            </h2>
            <p>
              Se você procura por durabilidade e sofisticação, a Fast Vidro é a
              sua melhor escolha. Especialistas no segmento, oferecemos uma
              linha completa de soluções para o seu lar ou empresa, com destaque
              para a nossa especialidade: o <strong>box de banheiro</strong>.
            </p>

            <h3 className="text-xl font-black pt-2">
              Box de Vidro com Película Secure Box
            </h3>
            <p>
              A sua segurança e a da sua família vêm em primeiro lugar.
              Trabalhamos com a tecnologia <strong>Secure Box</strong>, uma
              película de segurança de alta resistência aplicada ao vidro
              temperado. Caso ocorra uma quebra acidental, os fragmentos ficam
              colados na película, evitando acidentes graves.
            </p>

            <h3 className="text-xl font-black pt-2">Box Flex</h3>
            <p>
              Ideal para banheiros compactos ou com vãos menores. O sistema do{" "}
              <strong>Box Flex</strong> (articulado) otimiza o espaço de
              abertura em até 90%, garantindo passagem livre com total conforto
              e um design moderno.
            </p>

            <h3 className="text-xl font-black pt-2">Box Elegance</h3>
            <p>
              Para quem não abre mão do luxo e do alto padrão. Com roldanas
              transparentes e aparentes deslizando suavemente sobre um trilho
              sofisticado de aço inox, o <strong>Box Elegance</strong>{" "}
              transforma qualquer banheiro em um verdadeiro spa residencial.
            </p>

            <h3 className="text-xl font-black pt-2">Soluções Sob Medida</h3>
            <p>
              Além da linha de box, desenvolvemos espelhos decorativos lapidados
              e bisotados, portas de vidro de correr ou abrir, fechamentos de
              sacada, guarda-corpos e divisórias que aliam estética e
              funcionalidade.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Atendimento Completo em São Paulo: Onde Estamos
            </h2>
            <p>
              Nossa sede e coração da operação estão estrategicamente
              posicionados para atender com máxima agilidade toda a{" "}
              <strong>Zona Norte de São Paulo</strong>. Se você está buscando
              instalação de box de vidro em Santana, Tucuruvi, Vila Maria, Casa
              Verde, Mandaqui, Freguesia do Ó, Tremembé, Cachoeirinha, Limão ou
              Jaçanã, a Fast Vidro garante uma visita técnica rápida e uma
              entrega eficiente.
            </p>
            <p>
              Atendemos também outras regiões! Sabendo da necessidade de um
              serviço profissional e de confiança em toda a capital paulista,
              expandimos nossa equipe para cobrir com total prontidão as
              seguintes localidades:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Zona Oeste</strong> — Lapa, Pinheiros, Perdizes, Barra
                Funda
              </li>
              <li>
                <strong>Zona Leste</strong> — Tatuapé, Mooca, Anália Franco,
                Itaquera
              </li>
              <li>
                <strong>Zona Sul</strong> — Moema, Morumbi, Santo Amaro, Vila
                Mariana
              </li>
              <li>
                <strong>Centro de São Paulo</strong> — Bela Vista, Consolação,
                República, Higienópolis
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Por que Escolher a Fast Vidro?
            </h2>
            <p>
              Quando você escolhe a Fast Vidro, você contrata a experiência de
              quem entende do assunto desde <strong>1995</strong>. Unimos o
              conhecimento técnico tradicional com as soluções mais modernas do
              mercado arquitetônico atual.
            </p>
            <p>
              Precisa de um projeto exclusivo para o seu banheiro ou quer
              renovar os vidros da sua casa com quem entende de verdade? Entre
              em contato conosco hoje mesmo, solicite um orçamento personalizado
              e descubra a solução ideal que a Fast Vidro preparou para você!
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Fale agora com a Fast Vidro
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Peça seu orçamento personalizado no WhatsApp
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
