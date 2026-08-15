import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { WHATSAPP_NUMBER } from "@/lib/site";
import cover from "@/assets/nobre-cover.webp";
import img1 from "@/assets/nobre-1.webp";
import img2 from "@/assets/nobre-2.webp";
import img3 from "@/assets/nobre-3.webp";
import img4 from "@/assets/nobre-4.webp";

const META_TITLE = "Box Nobre com Amortecedor em SP | Vidro de Alto Padrão - Fast Vidro";
const META_DESC =
  "Conheça o legítimo Box Nobre com sistema de amortecimento duplo e alumínio reforçado na Zona Norte de SP. Segurança e acabamento premium sob medida. Peça orçamento!";

const WA_MSG = "Olá! Quero um orçamento do Box Nobre (Ideia Glass) com a Fast Vidro.";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

const gallery = [img1, img2, img3, img4];

export const Route = createFileRoute("/box-de-banheiro/nobre")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/box-de-banheiro/nobre" },
      { property: "og:image", content: cover },
      { name: "twitter:image", content: cover },
    ],
    links: [{ rel: "canonical", href: "/box-de-banheiro/nobre" }],
  }),
  component: BoxNobrePage,
});

function BoxNobrePage() {
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
            Box Nobre • Ideia Glass • São Paulo
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95]">
            Box Nobre em São Paulo: O Máximo em Segurança e Acabamento Premium
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">
            O primeiro box de banheiro com sistema de amortecimento duplo. Alumínio
            reforçado, puxador Asa Linear e o mais alto padrão de sofisticação.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
          >
            <MessageCircle className="h-4 w-4" /> Solicitar orçamento do Box Nobre
          </a>
        </div>
      </section>

      {/* Galeria */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {gallery.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-border bg-black/5 flex items-center justify-center aspect-[4/3]"
            >
              <img
                src={src}
                alt={`Box Nobre — foto ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Conteúdo SEO */}
      <section className="mx-auto max-w-4xl px-4 pb-16 lg:px-8 lg:pb-20">
        <article className="prose-fast">
          <p className="text-base leading-relaxed text-foreground/90">
            Se você busca o mais alto padrão de sofisticação combinado com uma engenharia
            focada na segurança total da sua família, a <strong>Fast Vidro</strong> traz a
            solução definitiva. Somos a sua grande referência em <strong>box de vidro</strong>{" "}
            e especialista em projetos de{" "}
            <strong>box de banheiro na Zona Norte de São Paulo</strong> e demais regiões da
            capital. O <strong>Box Nobre</strong>, projetado e fabricado pela renomada Ideia
            Glass, foi desenvolvido para transformar a sua área de banho em um ambiente
            luxuoso e altamente protegido.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            Como o próprio nome já diz, a linha Nobre é perfeita para fazer fechamentos de
            áreas de banho em absolutamente todos os formatos arquitetônicos. Ele se adapta
            com perfeição a projetos de Box Frontal com uma porta (F1), Box em L de Canto
            (C1), Box Frontal com duas folhas (F2) e Box com duas portas de correr
            centralizadas (F3). Pela sua robustez e estética impecável, ele também é
            amplamente utilizado por arquitetos para fechamentos de áreas externas e como
            porta de correr elegante para divisão de ambientes residenciais.
          </p>

          <h2 className="mt-12 text-3xl font-black">
            O Grande Diferencial: Sistema de Amortecimento Duplo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            O maior diferencial tecnológico do Box Nobre é o seu exclusivo{" "}
            <strong>
              sistema de amortecimento no fechamento e na abertura das portas
            </strong>
            . Esse mecanismo impede que movimentos bruscos ou impactos acidentais no dia a dia
            façam o vidro bater contra o perfil, eliminando o risco de quebras e garantindo um
            deslizar ultra suave e silencioso. É a tecnologia ideal para residências com
            crianças e idosos, proporcionando total tranquilidade.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            Além disso, o modelo se destaca pela sua resistência superior: todos os perfis
            estruturais são fabricados em Alumínio com ligas especiais reforçadas. As
            espessuras das paredes do alumínio da linha Nobre são significativamente mais
            robustas do que as dos boxes tradicionais do mercado, o que confere ao produto uma
            estabilidade mecânica incomparável e um acabamento premium perceptível ao toque.
            Para completar o design inovador, ele conta com o{" "}
            <strong>Puxador Asa Linear</strong>, que fica embutido na lateral do vidro,
            facilitando o manuseio e aumentando consideravelmente a área de passagem livre do
            vão.
          </p>

          <h2 className="mt-12 text-3xl font-black">
            Sua Vidraçaria de Confiança em Toda a Capital Paulista
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
            Inove no design e garanta a máxima proteção para quem você ama. Fale com um
            especialista em vidros de alto padrão!
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
