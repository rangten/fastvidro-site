import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle, Shield } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { RegioesPremiumFooter } from "@/components/RegioesPremiumFooter";
import { WHATSAPP_NUMBER } from "@/lib/site";
import secureBoxLogo from "@/assets/secure-box-logo.webp";
import secureBoxPelicula from "@/assets/secure-box-pelicula.webp";

const META_TITLE = "Secure Box em SP | Box com Película Antiestilhaço - Fast Vidro";
const META_DESC =
  "Conheça o Secure Box na Zona Norte de SP. O box de banheiro com película de segurança que retém os estilhaços em caso de quebra. Proteja sua família e peça orçamento!";

const WA_MSG = "Olá! Quero um orçamento do Secure Box com película antiestilhaço com a Fast Vidro.";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

const beneficios = [
  "Película de segurança de alta performance aplicada em um dos lados do vidro temperado",
  "Em caso de impacto, o vidro permanece integrado — sem estilhaços soltos",
  "Proteção extra para famílias com crianças, idosos e pets",
  "Acabamento idêntico ao box convencional, sem alterar a estética",
  "Resistência adicional contra riscos do dia a dia",
  "Garantia estendida exclusiva Fast Vidro",
];

export const Route = createFileRoute("/box-de-banheiro/secure-box")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/box-de-banheiro/secure-box" },
      { property: "og:image", content: secureBoxLogo },
      { name: "twitter:image", content: secureBoxLogo },
    ],
    links: [{ rel: "canonical", href: "/box-de-banheiro/secure-box" }],
  }),
  component: SecureBoxPage,
});

function SecureBoxPage() {
  return (
    <SiteLayout>
      {/* Hero estilo Box +Seguro com novo logo */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <a
            href="/box-de-banheiro"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Voltar para Box de Banheiro
          </a>

          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Secure Box • São Paulo
              </span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95]">
                Secure Box em São Paulo: Segurança Máxima com Película Antiestilhaço
              </h1>
              <p className="mt-5 text-base text-ink-foreground/80 max-w-xl">
                O Secure Box recebe uma película de segurança de alta resistência, aplicada
                após a têmpera. Mesmo no caso raro de quebra, todos os fragmentos permanecem
                presos à película — evitando cortes graves e acidentes domésticos.
              </p>
              <ul className="mt-8 space-y-3">
                {beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                      <Check className="h-3.5 w-3.5 text-primary-foreground" />
                    </span>
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
              >
                <MessageCircle className="h-4 w-4" /> Quero o Secure Box
              </a>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden bg-black flex items-center justify-center p-8 ring-1 ring-white/10">
                <img
                  src={secureBoxLogo}
                  alt="Secure Box — Película de Segurança para Box de Vidro Temperado"
                  className="max-h-80 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo SEO expandido */}
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-20">
        <article className="prose-fast">
          <p className="text-base leading-relaxed text-foreground/90">
            Se a sua prioridade absoluta é a proteção da sua família dentro do banheiro, a
            Fast Vidro apresenta a solução definitiva em engenharia de prevenção. Somos a sua
            grande referência em <strong>box de vidro</strong> e especialista em projetos de{" "}
            <strong>box de banheiro na Zona Norte de São Paulo</strong> e demais regiões da
            capital. O <strong>Secure Box</strong> foi desenvolvido exclusivamente para quem
            não abre mão da máxima tranquilidade, unindo a resistência do vidro temperado à
            tecnologia de retenção de estilhaços.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            O grande diferencial do Secure Box é a aplicação de uma{" "}
            <strong>película de segurança de alta performance</strong> diretamente nas lâminas
            de vidro. Essa tecnologia funciona como um escudo invisível: em caso de um impacto
            extremo que venha a quebrar o vidro temperado, a película cumpre o papel vital de{" "}
            <strong>segurar todos os estilhaços colados na estrutura</strong>. Isso impede que
            os pedaços de vidro se espalhem pelo chão do banheiro ou caiam sobre quem está
            tomando banho, eliminando drasticamente o risco de cortes e acidentes graves. É o
            modelo mais recomendado por arquitetos para residências com crianças, idosos ou
            pets.
          </p>

          <figure className="mt-10 overflow-hidden rounded-xl shadow-ink ring-1 ring-border">
            <img
              src={secureBoxPelicula}
              alt="Demonstração da película de segurança Secure Box — vidro estilhaçado mas íntegro"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <figcaption className="bg-ink text-ink-foreground/80 text-xs uppercase tracking-wider px-4 py-3 text-center">
              Mesmo estilhaçado, o vidro permanece preso à película de segurança
            </figcaption>
          </figure>



          <h2 className="mt-12 text-3xl font-black">
            Alta Resistência Mecânica e Acabamento de Alto Padrão
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            Na Fast Vidro, não comprometemos o cuidado e a qualidade. O Secure Box é produzido
            rigorosamente sob medida com painéis de vidro temperado de 8mm de espessura
            certificado, que já possui uma resistência até 5 vezes maior que o vidro comum.
            Com a adição da película antiestilhaço integrada, o box ganha uma camada extra de
            proteção mecânica e durabilidade. As roldanas, perfis e acessórios de alumínio
            robusto garantem um deslizar suave, macio e altamente estável das portas.
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground/90">
            Para combinar perfeitamente com o design do seu ambiente, disponibilizamos o
            Secure Box em diversos acabamentos modernos para os perfis estruturais, como{" "}
            <strong>Branco, Preto e Cromado</strong>. Antes de iniciar a montagem, nossa
            equipe realiza uma medição técnica digital de alta precisão com trenas a laser,
            garantindo o prumo perfeito, alinhamento impecável e vedação total contra
            vazamentos de água no seu espaço de banho.
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
            Oferecemos o melhor preço de fábrica e as melhores condições de pagamento do
            mercado. Nossa equipe atende com total agilidade nas seguintes áreas:
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
            Não espere o acidente acontecer para proteger quem você ama. Fale com um
            especialista e garanta o verdadeiro box seguro para o seu lar!
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

        <div className="mt-12 flex items-center justify-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
          <Shield className="h-4 w-4 text-primary" />
          Disponível para todos os modelos de box da Fast Vidro
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
      <RegioesPremiumFooter basePath="/secure-box" title="Secure Box nas Regiões Atendidas" />
    </SiteLayout>
  );
}
