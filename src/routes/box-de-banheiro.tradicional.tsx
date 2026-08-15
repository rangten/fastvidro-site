import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { WHATSAPP_NUMBER } from "@/lib/site";
import cover from "@/assets/tradicional-cover.webp";
import imgCanto from "@/assets/tradicional-canto.webp";
import imgAbrir from "@/assets/tradicional-abrir.webp";
import imgCorrer from "@/assets/tradicional-correr.webp";

const META_TITLE = "Box Tradicional de Vidro em SP | Modelos de Correr e Abrir - Fast Vidro";
const META_DESC =
  "Procurando Box Tradicional de Vidro na Zona Norte de SP? Confira nossos modelos Frontal, de Canto e de Abrir sob medida com vidro temperado 8mm. Peça seu orçamento!";

const WA_MSG = "Olá! Quero um orçamento do Box Tradicional (Frontal, Canto ou de Abrir) com a Fast Vidro.";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

const variantes = [
  {
    img: imgCorrer,
    title: "Box Frontal (F1) — De Correr",
    desc: "1 folha fixa + 1 folha de correr para vãos de parede a parede. Otimiza o lateral e garante vedação perfeita.",
  },
  {
    img: imgCanto,
    title: "Box de Canto (Box em L)",
    desc: "2 folhas fixas + 2 folhas de correr que se encontram no centro. Ideal para chuveiros posicionados no canto.",
  },
  {
    img: imgAbrir,
    title: "Box com Porta de Abrir",
    desc: "1 folha fixa + 1 porta de giro com dobradiças de alta resistência. Design clean para vãos menores.",
  },
];

export const Route = createFileRoute("/box-de-banheiro/tradicional")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/box-de-banheiro/tradicional" },
      { property: "og:image", content: cover },
      { name: "twitter:image", content: cover },
    ],
    links: [{ rel: "canonical", href: "/box-de-banheiro/tradicional" }],
  }),
  component: BoxTradicionalPage,
});

function BoxTradicionalPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${cover})` }}
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
            Box Tradicional • São Paulo
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95]">
            Box Tradicional em São Paulo: O Clássico com Melhor Custo-Benefício
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">
            Frontal, de Canto ou com Porta de Abrir — vidro temperado 8mm sob medida,
            instalado em toda a capital paulista.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
          >
            <MessageCircle className="h-4 w-4" /> Solicitar orçamento do Box Tradicional
          </a>
        </div>
      </section>

      {/* Conteúdo SEO */}
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-20">
        <article className="prose-fast">
          <p className="text-base leading-relaxed text-foreground/90">
            Se você busca uma solução prática, altamente durável e com excelente custo-benefício
            para a sua casa ou apartamento, a <strong>Fast Vidro</strong> é a sua grande
            referência em <strong>box de vidro</strong> e especialista em projetos de{" "}
            <strong>box de banheiro na Zona Norte de São Paulo</strong> e demais regiões da
            capital. O <strong>Box Tradicional</strong> (também conhecido amplamente como box
            padrão) é o modelo mais consagrado do mercado, unindo versatilidade, eficiência e
            estética limpa para qualquer tipo de projeto.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            Para nos adaptarmos perfeitamente ao espaço disponível no seu ambiente e garantir o
            máximo de aproveitamento e conforto, trabalhamos com as três principais
            configurações técnicas do modelo tradicional:
          </p>

          {/* Variações com imagens */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 not-prose">
            {variantes.map((v) => (
              <div
                key={v.title}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="aspect-[3/4] bg-black/5 flex items-center justify-center overflow-hidden">
                  <img width={1200} height={800}
                    src={v.img}
                    alt={v.title}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-black leading-tight">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-3xl font-black">
            Segurança Máxima com Vidro Temperado de 8mm e Ferragens Robustas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            Na Fast Vidro, a segurança da sua família vem sempre em primeiro lugar. Todos os
            nossos modelos de Box Tradicional são produzidos rigorosamente sob medida utilizando
            painéis de vidro temperado de <strong>8mm de espessura</strong>, que oferecem
            altíssima resistência mecânica contra impactos e variações de temperatura. Toda a
            instalação é feita com perfis de alumínio anodizado ou com pintura eletrostática de
            alta qualidade, que não enferrujam com a umidade do chuveiro, e garantem rolamentos
            blindados com deslizar suave e silencioso.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            Para se adequar perfeitamente ao estilo do seu ambiente, disponibilizamos o Box
            Tradicional em diversas opções de cores de vidro (como Incolor, Fumê, Bronze e
            Jateado) e acabamentos para os perfis estruturais, incluindo as cores mais desejadas
            do mercado: <strong>Branco, Preto, Cromado, Ouro e Bronze</strong>. Antes de cada
            instalação, nossa equipe realiza uma medição técnica detalhada a laser para
            garantir o prumo perfeito e vedação total contra vazamentos de água.
          </p>

          <h2 className="mt-12 text-3xl font-black">
            Sua Vidraçaria Especialista em Toda a Capital Paulista
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            Consolidada como líder na instalação de{" "}
            <strong>box de banheiro na Zona Norte de São Paulo</strong> — atendendo com
            pontualidade e rapidez bairros tradicionais como{" "}
            <strong>
              Santana, Tucuruvi, Parada Inglesa, Jardim São Paulo, Vila Maria, Vila Guilherme,
              Casa Verde, Mandaqui e Tremembé
            </strong>{" "}
            — a Fast Vidro orgulha-se de levar esse mesmo padrão de excelência para todas as
            regiões de SP.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            Oferecemos o melhor preço de fábrica e as melhores condições de pagamento da
            região. Nossa equipe técnica atende com total agilidade nas seguintes áreas:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              <><strong>Zona Norte:</strong> Nossa base operacional com atendimento e entrega ultra rápida.</>,
              <><strong>Zona Leste:</strong> Instalações precisas para casas, sobrados e novos condomínios.</>,
              <><strong>Zona Oeste:</strong> Projetos sob medida com acabamento refinado e agilidade.</>,
              <><strong>Zona Sul:</strong> Cobertura completa com instaladores experientes e qualificados.</>,
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
            Garanta um box seguro, bonito e instalado por profissionais qualificados. Fale com
            quem entende do assunto!
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
