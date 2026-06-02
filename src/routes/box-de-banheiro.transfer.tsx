import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { WHATSAPP_NUMBER } from "@/lib/site";
import cover from "@/assets/transfer-cover.png.asset.json";
import img1 from "@/assets/transfer-1.png.asset.json";
import img2 from "@/assets/transfer-2.png.asset.json";
import img3 from "@/assets/transfer-3.png.asset.json";
import img4 from "@/assets/transfer-4.png.asset.json";

const META_TITLE = "Box Transfer 3 Portas em SP | Box para Vãos Pequenos - Fast Vidro";
const META_DESC =
  "Procurando Box Transfer de 3 portas para vãos pequenos na Zona Norte de SP? Ganhe muito mais abertura e passagem livre no seu banheiro compacto. Peça seu orçamento!";

const WA_MSG = "Olá! Quero um orçamento do Box Transfer de 3 Portas (3 Folhas de Correr) com a Fast Vidro.";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

const gallery = [img1.url, img2.url, img3.url, img4.url];

export const Route = createFileRoute("/box-de-banheiro/transfer")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/box-de-banheiro/transfer" },
      { property: "og:image", content: cover.url },
      { name: "twitter:image", content: cover.url },
    ],
    links: [{ rel: "canonical", href: "/box-de-banheiro/transfer" }],
  }),
  component: BoxTransferPage,
});

function BoxTransferPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
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
            Box Transfer 3 Portas • São Paulo
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95]">
            Box Transfer de 3 Portas em São Paulo: A Solução Inteligente para Vãos Pequenos
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">
            Sistema de 3 folhas de correr — até 2/3 de passagem livre no vão. Ideal para
            banheiros compactos da capital paulista.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
          >
            <MessageCircle className="h-4 w-4" /> Solicitar orçamento do Box Transfer
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
                alt={`Box Transfer 3 Portas — foto ${i + 1}`}
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
            Se você tem um banheiro com o espaço do chuveiro muito estreito e acha que nenhum
            box vai funcionar bem, a <strong>Fast Vidro</strong> traz a engenharia perfeita
            para o seu lar. Somos a sua grande referência em <strong>box de vidro</strong> e
            especialista em projetos de{" "}
            <strong>box de banheiro na Zona Norte de São Paulo</strong> e demais regiões da
            capital. O <strong>Box Transfer de 3 Portas</strong> foi desenvolvido
            especificamente para resolver o problema de vãos pequenos e compactos com máxima
            eficiência.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            O grande diferencial do sistema Box Transfer está na sua configuração inteligente
            de correr: em vez de usar o padrão de uma folha fixa e uma móvel, ele utiliza{" "}
            <strong>3 folhas de vidro (sendo 1 fixa e 2 móveis de correr)</strong>. Quando
            você abre o box, as duas portas móveis deslizam juntas e se recolhem atrás da
            folha fixa. Essa engenharia inovadora garante uma abertura muito maior,
            proporcionando{" "}
            <strong>até 2/3 (cerca de 66%) de passagem livre no vão</strong>. É a escolha
            ideal para banheiros pequenos, apartamentos compactos ou para garantir melhor
            acessibilidade sem precisar de um espaço amplo de giro.
          </p>

          <h2 className="mt-12 text-3xl font-black">
            Design Moderno, Sem Trilho Inferior e Total Facilidade na Limpeza
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            Além de salvar o espaço do seu banheiro, o Box Transfer de 3 Portas oferece uma
            estética clean e altamente sofisticada. Uma de suas maiores vantagens funcionais é
            que ele <strong>não utiliza trilho no chão na área de passagem</strong>, contando
            apenas com guias discretas. Isso elimina o acúmulo de sujeira e água na base,
            facilitando drasticamente a limpeza diária do banheiro e evitando tropeços,
            trazendo muito mais segurança para crianças e idosos.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            Na Fast Vidro, priorizamos a durabilidade. Nossos modelos são produzidos
            rigorosamente sob medida com painéis de vidro temperado de 8mm de alta resistência
            e roldanas blindadas com rolamento suave, garantindo um deslizar leve, macio e
            silencioso. Trabalhamos com diversas opções de cores de acabamento para os perfis
            estruturais de alumínio de alta qualidade:{" "}
            <strong>Branco, Preto, Cromado e Dourado</strong>. Tudo instalado após uma medição
            técnica digital a laser para garantir vedação total e o prumo perfeito do seu
            projeto.
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
            Não sofra mais com a falta de espaço no seu banheiro. Fale com quem entende de
            engenharia em vidros!
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
