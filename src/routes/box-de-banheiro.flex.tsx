import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { WHATSAPP_NUMBER } from "@/lib/site";
import flexCover from "@/assets/flex-cover.png.asset.json";
import img17 from "@/assets/flex-image-17.png.asset.json";

const META_TITLE = "Box Flex na Zona Norte de SP | Box Articulado - Fast Vidro";
const META_DESC =
  "Procurando o legítimo Box Flex na Zona Norte de São Paulo? Ganhe até 90% de vão livre no banheiro pequeno. Atendemos Santana, Tucuruvi e toda a ZN. Peça orçamento!";

const WA_MSG =
  "Olá! Quero um orçamento do Box Flex (Zona Norte de SP) com a Fast Vidro.";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

const gallery = [flexCover.url, img17.url];

export const Route = createFileRoute("/box-de-banheiro/flex")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/box-de-banheiro/flex" },
      { property: "og:image", content: flexCover.url },
      { name: "twitter:image", content: flexCover.url },
    ],
    links: [{ rel: "canonical", href: "/box-de-banheiro/flex" }],
  }),
  component: BoxFlexPage,
});

function BoxFlexPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url(${flexCover.url})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <a
            href="/box-de-banheiro"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Voltar para Box de Banheiro
          </a>
          <span className="mt-6 block speed-line text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Box Flex • Zona Norte de SP
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95]">
            Box Flex na Zona Norte de São Paulo: A Solução Perfeita para Banheiros Pequenos
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">
            Box articulado (camarão / pantográfico) com até 90% de vão livre. Atendemos Santana,
            Tucuruvi, Parada Inglesa e toda a Zona Norte de SP.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
          >
            <MessageCircle className="h-4 w-4" /> Solicitar orçamento do Box Flex
          </a>
        </div>
      </section>

      {/* Conteúdo SEO */}
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-20">
        <article className="prose-fast">
          <p className="text-base leading-relaxed text-foreground/90">
            Se você procura otimizar o espaço do seu ambiente com elegância e alta qualidade, a{" "}
            <strong>Fast Vidro</strong> é a sua grande referência em <strong>box de vidro</strong> e
            especialista em <strong>box de banheiro na Zona Norte de São Paulo</strong>. Sabendo
            que os novos apartamentos e residências da nossa região contam com banheiros cada vez
            mais compactos, trazemos a engenharia perfeita para o seu lar: o legítimo{" "}
            <strong>Box Flex</strong>.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            Por contar com um sistema de abertura articulada (também conhecido popularmente por aí
            como box camarão, box articulado ou box pantográfico), ele elimina a necessidade de um
            trilho superior fixo. Isso significa que você garante um aproveitamento espetacular do
            espaço, conquistando <strong>até 90% de passagem livre no vão</strong> do seu
            chuveiro. É o fim do aperto na hora do banho e a escolha ideal para garantir
            acessibilidade e total conforto para a sua família.
          </p>

          <h2 className="mt-12 text-3xl font-black">
            Design Sofisticado e Alta Resistência para o seu Banheiro
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            O design do Box Flex, produzido originalmente pela Ideia Glass, é completamente clean,
            discreto e altamente funcional. Suas dobradiças e ferragens são fabricadas com metais
            nobres de alta resistência, o que evita o desgaste precoce com a umidade e garante um
            deslizar extremamente macio, seguro e silencioso no dia a dia. Além disso, o modelo se
            adapta perfeitamente a vãos frontais ou layouts em cantos (o famoso Box em L).
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            Para se alinhar perfeitamente à decoração e ao estilo do seu projeto, oferecemos o Box
            Flex com garantia de fábrica e uma ampla variedade de cores de acabamento premium para
            os perfis: <strong>Branco, Dourado, Preto, Cromado e Rose</strong>.
          </p>

          <h2 className="mt-12 text-3xl font-black">
            Sua Vidraçaria de Confiança na Zona Norte de SP
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            Consolidada como a principal referência quando o assunto é instalação de{" "}
            <strong>box de banheiro na Zona Norte de São Paulo</strong>, a Fast Vidro orgulha-se
            de entregar um atendimento rápido, medição precisa com técnicos experientes e uma
            instalação impecável. Atendemos com agilidade e máxima eficiência os principais
            bairros da Zona Norte de SP, incluindo:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              <><strong>Santana</strong> e <strong>Tucuruvi</strong></>,
              <><strong>Parada Inglesa</strong> e <strong>Jardim São Paulo</strong></>,
              <><strong>Vila Maria</strong> e <strong>Vila Guilherme</strong></>,
              <><strong>Casa Verde</strong>, <strong>Mandaqui</strong> e <strong>Tremembé</strong></>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </span>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed text-foreground/90">
            Não compre o seu box de vidro sem antes falar com quem entende do assunto e garante o
            melhor preço de fábrica e segurança da região!
          </p>
        </article>

        {/* CTA WhatsApp grande */}
        <div className="mt-12 flex justify-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 rounded-xl px-8 py-5 text-base lg:text-lg font-bold text-white shadow-lg hover:scale-[1.02] transition"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden="true">
              <path d="M16.003 0C7.165 0 0 7.163 0 16c0 2.823.74 5.473 2.034 7.77L.057 32l8.45-2.21A15.93 15.93 0 0 0 16.003 32C24.84 32 32 24.836 32 16S24.84 0 16.003 0zm0 29.328c-2.503 0-4.83-.738-6.788-2.005l-.487-.29-5.014 1.312 1.337-4.888-.317-.503A13.27 13.27 0 0 1 2.667 16c0-7.35 5.984-13.333 13.336-13.333S29.34 8.65 29.34 16c0 7.352-5.984 13.328-13.337 13.328zm7.31-9.98c-.4-.2-2.37-1.17-2.737-1.302-.367-.135-.634-.2-.9.2-.267.4-1.034 1.302-1.268 1.57-.234.267-.467.3-.867.1-.4-.2-1.69-.624-3.218-1.99-1.19-1.062-1.99-2.37-2.224-2.77-.234-.4-.025-.616.175-.815.18-.18.4-.467.6-.7.2-.234.267-.4.4-.667.134-.267.067-.5-.033-.7-.1-.2-.9-2.17-1.234-2.97-.324-.78-.654-.674-.9-.687-.234-.012-.5-.014-.768-.014-.267 0-.7.1-1.067.5-.367.4-1.4 1.37-1.4 3.34 0 1.97 1.434 3.873 1.634 4.14.2.267 2.82 4.307 6.834 6.04 2.39 1.032 3.323 1.12 4.518.94.728-.11 2.37-.968 2.704-1.903.334-.935.334-1.737.234-1.903-.1-.167-.367-.267-.767-.467z" />
            </svg>
            Falar com Especialista no WhatsApp
          </a>
        </div>
      </section>

      {/* Galeria */}
      <section className="bg-ink text-ink-foreground py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Galeria
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black">Box Flex instalado em SP</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {gallery.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/10 aspect-[4/3] flex items-center justify-center p-2"
              >
                <img
                  src={src}
                  alt={`Box Flex instalado — foto ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA flutuante */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener"
        aria-label="Falar com especialista no WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:scale-105 transition lg:text-sm"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </SiteLayout>
  );
}
