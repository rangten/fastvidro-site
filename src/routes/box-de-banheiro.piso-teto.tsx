import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { WHATSAPP_NUMBER } from "@/lib/site";
import cover from "@/assets/piso-teto-cover.png.asset.json";
import img2 from "@/assets/piso-teto-2.png.asset.json";
import img3 from "@/assets/piso-teto-3.png.asset.json";
import img4 from "@/assets/piso-teto-4.png.asset.json";

const META_TITLE = "Box Piso ao Teto em SP | Box Até o Teto Efeito Sauna - Fast Vidro";
const META_DESC =
  "Quer um Box Piso Teto com efeito sauna para seu banheiro? Especialistas em box de banheiro sob medida em toda a cidade de São Paulo. Conforto térmico e design. Peça orçamento!";

const WA_MSG = "Olá! Quero um orçamento do Box Piso Teto (efeito sauna) com a Fast Vidro.";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

const gallery = [img2.url, img3.url, img4.url, img2.url, img3.url, img4.url];

export const Route = createFileRoute("/box-de-banheiro/piso-teto")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/box-de-banheiro/piso-teto" },
      { property: "og:image", content: cover.url },
      { name: "twitter:image", content: cover.url },
    ],
    links: [{ rel: "canonical", href: "/box-de-banheiro/piso-teto" }],
  }),
  component: BoxPisoTetoPage,
});

function BoxPisoTetoPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url(${cover.url})` }}
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
            Box Piso Teto • São Paulo
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95]">
            Box Piso Teto em São Paulo: Conforto Térmico e Design Minimalista
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">
            Efeito sauna, redução de até 95% da umidade e Kit Reto minimalista em vidro
            temperado de 8mm — sob medida para toda a capital paulista.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
          >
            <MessageCircle className="h-4 w-4" /> Solicitar orçamento do Box Piso Teto
          </a>
        </div>
      </section>

      {/* Conteúdo SEO */}
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-20">
        <article className="prose-fast">
          <p className="text-base leading-relaxed text-foreground/90">
            Se você deseja transformar o seu banheiro em um verdadeiro spa residencial, a{" "}
            <strong>Fast Vidro</strong> é a sua grande referência em <strong>box de vidro</strong>{" "}
            e especialista em projetos de{" "}
            <strong>box de banheiro na Zona Norte de São Paulo</strong> e demais regiões da
            capital. O <strong>Box Piso ao Teto</strong> é a escolha perfeita para quem não abre
            mão de sofisticação, engenharia sob medida e uma experiência de banho totalmente
            exclusiva.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            O grande diferencial deste modelo é o incrível{" "}
            <strong>Conforto Térmico com Efeito Sauna</strong>. Por fechar completamente o vão do
            chão até o teto do ambiente, o box retém o calor e todo o vapor da ducha dentro da
            área de banho. O resultado é um relaxamento profundo e incomparável, além de garantir
            uma <strong>redução de até 95% na umidade</strong> do restante do cômodo. Isso
            protege diretamente os seus móveis, gabinetes, pinturas e espelhos contra o mofo e o
            estufamento causados pelo vapor d'água.
          </p>

          <h2 className="mt-12 text-3xl font-black">
            Ferragens Kit Reto Minimalista e Acabamento Premium
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            O segredo da estética imponente do Box Piso Teto está no seu acabamento de alto
            padrão. Utilizamos o Kit Reto, que conta com perfis estruturais de alumínio com
            quinas retas e um design geométrico extremamente moderno. Esse visual robusto e ao
            mesmo tempo discreto elimina o excesso de informação visual do banheiro, combinando
            perfeitamente com as cubas, torneiras, revestimentos e decorações mais elegantes e
            atuais do mercado de luxo.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            Cada projeto que executamos é único. Nossos boxes são produzidos rigorosamente sob
            medida utilizando painéis de <strong>vidro temperado de 8mm</strong> de espessura, o
            que garante a flexibilidade ideal, leveza total no deslizar das portas e altíssima
            resistência mecânica e de segurança. Além disso, toda a nossa instalação é precedida
            por uma medição técnica digital de alta precisão com trenas a laser, assegurando o
            prumo perfeito em relação ao gesso ou teto do seu banheiro.
          </p>

          <h2 className="mt-12 text-3xl font-black">
            Atendimento em Toda a Cidade de São Paulo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            Consolidada como líder na instalação de{" "}
            <strong>box de banheiro na Zona Norte de São Paulo</strong> — atendendo com rapidez
            bairros tradicionais como{" "}
            <strong>
              Santana, Tucuruvi, Parada Inglesa, Jardim São Paulo, Vila Maria, Vila Guilherme,
              Casa Verde, Mandaqui e Tremembé
            </strong>{" "}
            — a Fast Vidro expandiu sua estrutura para levar essa mesma qualidade a toda a
            capital paulista.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            Independentemente de onde esteja o seu imóvel ou a sua obra, nossa equipe técnica
            está pronta para te atender com agilidade e o melhor preço de fábrica do mercado.
            Atendemos com excelência as seguintes regiões de SP:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              <><strong>Zona Norte:</strong> Nossa sede e forte atuação regional.</>,
              <><strong>Zona Leste:</strong> Projetos e instalações sob medida residenciais e corporativas.</>,
              <><strong>Zona Oeste:</strong> Atendimento rápido para apartamentos e casas de alto padrão.</>,
              <><strong>Zona Sul:</strong> Cobertura completa com pontualidade e equipe especializada.</>,
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
            Traga o seu projeto para quem entende de verdade de engenharia em vidros e garanta
            um acabamento impecável.
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
          <h2 className="mt-3 text-3xl lg:text-4xl font-black">Box Piso Teto instalado em SP</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/10 aspect-[4/3]"
              >
                <img
                  src={src}
                  alt={`Box Piso Teto instalado — foto ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
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
