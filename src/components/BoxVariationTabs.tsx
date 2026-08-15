import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, Check } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { FOTOS_MODELO, FOTOS_FUME } from "@/lib/fotos";

type ModeloId = "tradicional" | "flex" | "piso-teto" | "elegance";

interface VarTab {
  id: ModeloId;
  label: string;
  to: "/box-de-banheiro/tradicional" | "/box-de-banheiro/flex" | "/box-de-banheiro/piso-teto" | "/box-de-banheiro/elegance";
  h3: (b: string) => string;
  paragrafoIncolor: (b: string) => string;
  paragrafoFume: (b: string) => string;
  fotosIncolor: readonly string[];
}

const TABS: VarTab[] = [
  {
    id: "tradicional",
    label: "Box Tradicional",
    to: "/box-de-banheiro/tradicional",
    h3: (b) => `Box Tradicional em ${b}: Frontal, Canto e Porta de Abrir`,
    paragrafoIncolor: (b) =>
      `O Box Tradicional Incolor em ${b} é a escolha campeã de vendas: vidro temperado 8mm de alta transparência, perfis estruturados em alumínio e roldanas blindadas para deslizar silencioso. Atendemos vãos frontais, layout em canto (Box em L) e portas de abrir, sempre sob medida para o seu banheiro em ${b}.`,
    paragrafoFume: (b) =>
      `Na versão Fumê, o Box Tradicional ganha um toque de privacidade e sofisticação para ${b} — o tom esfumaçado disfarça marcas d'água e combina com revestimentos escuros, cubas pretas e metais dourados ou cromados de alto padrão.`,
    fotosIncolor: FOTOS_MODELO.tradicional,
  },
  {
    id: "flex",
    label: "Box Flex (Articulado)",
    to: "/box-de-banheiro/flex",
    h3: (b) => `Box Flex Articulado em ${b}: até 90% de vão livre`,
    paragrafoIncolor: (b) =>
      `O Box Flex Incolor é a solução perfeita para apartamentos compactos em ${b}: sistema articulado (camarão / pantográfico) sem trilho superior fixo, liberando até 90% de passagem livre. Vidro temperado 8mm incolor para amplitude máxima e dobradiças em metais nobres.`,
    paragrafoFume: (b) =>
      `A versão Box Flex Fumê em ${b} mantém toda a engenharia do articulado e acrescenta privacidade visual — ideal para banheiros suítes integradas ao quarto e lavabos sociais que pedem mais discrição.`,
    fotosIncolor: FOTOS_MODELO.flex,
  },
  {
    id: "piso-teto",
    label: "Box Até o Teto",
    to: "/box-de-banheiro/piso-teto",
    h3: (b) => `Box Piso Teto (Até o Teto) em ${b}: efeito sauna`,
    paragrafoIncolor: (b) =>
      `O Box Piso ao Teto Incolor entrega o desejado efeito sauna nos banheiros de ${b}: fechamento total do chão ao teto, retenção de calor e vapor, e redução de até 95% da umidade no restante do cômodo. Kit Reto minimalista em alumínio para visual contemporâneo.`,
    paragrafoFume: (b) =>
      `A versão Box Até o Teto Fumê em ${b} combina o mesmo conforto térmico com mais reserva visual — perfeita para banheiros amplos, suítes master e projetos de alto padrão na região.`,
    fotosIncolor: FOTOS_MODELO.pisoTeto,
  },
  {
    id: "elegance",
    label: "Box Elegance",
    to: "/box-de-banheiro/elegance",
    h3: (b) => `Box Elegance com Roldanas Aparentes em ${b}`,
    paragrafoIncolor: (b) =>
      `O Box Elegance Incolor em ${b} substitui o perfil de alumínio tradicional por roldanas maciças aparentes deslizando sobre tubo cilíndrico — visual industrial chique, leve e moderno, com vidro temperado 8mm cristalino.`,
    paragrafoFume: (b) =>
      `A versão Box Elegance Fumê em ${b} mantém o design icônico das roldanas aparentes e adiciona o tom esfumaçado para um banheiro com pegada premium e contemporânea.`,
    fotosIncolor: FOTOS_MODELO.elegance,
  },
];

interface Props {
  bairro: string;
}

/**
 * Abas de variações (modelos × cores) totalmente pré-renderizadas no HTML.
 * Apenas a visibilidade é alternada via state — todo o conteúdo descritivo
 * e as fotos de cada variação são entregues no source para o Googlebot.
 */
export function BoxVariationTabs({ bairro }: Props) {
  const [active, setActive] = useState<ModeloId>("tradicional");
  const waMsg = (modelo: string) =>
    `Olá! Quero um orçamento de ${modelo} (Incolor ou Fumê) para o meu imóvel em ${bairro}.`;

  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-20">
      <div className="mb-8 max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
          Modelos e cores em {bairro}
        </span>
        <h2 className="mt-3 text-3xl lg:text-4xl font-black leading-tight">
          Variações de Box de Vidro Disponíveis em {bairro}
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Cada modelo abaixo está disponível nas cores Incolor e Fumê, instalado
          sob medida pela equipe Fast Vidro em {bairro}.
        </p>
      </div>

      {/* Botões de aba */}
      <div
        role="tablist"
        aria-label="Modelos de box disponíveis"
        className="flex flex-wrap gap-2 border-b border-border"
      >
        {TABS.map((t) => {
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`tab-panel-${t.id}`}
              id={`tab-${t.id}`}
              onClick={() => setActive(t.id)}
              className={
                "relative -mb-px rounded-t-lg px-4 py-3 text-xs sm:text-sm font-black uppercase tracking-wider transition " +
                (isActive
                  ? "border border-b-transparent border-border bg-card text-primary"
                  : "text-muted-foreground hover:text-foreground")
              }
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Painéis — TODOS renderizados no HTML; apenas o ativo é visível */}
      {TABS.map((t) => {
        const isActive = active === t.id;
        return (
          <div
            key={t.id}
            role="tabpanel"
            id={`tab-panel-${t.id}`}
            aria-labelledby={`tab-${t.id}`}
            hidden={!isActive}
            className="rounded-b-2xl rounded-tr-2xl border border-border bg-card p-6 lg:p-10"
          >
            <h3 className="text-2xl lg:text-3xl font-black leading-tight">
              {t.h3(bairro)}
            </h3>

            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              {/* Variação INCOLOR */}
              <article>
                <div className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full ring-1 ring-foreground/20"
                    style={{ background: "linear-gradient(135deg,#ffffff,#e5e7eb)" }}
                    aria-hidden
                  />
                  {t.label} Incolor em {bairro}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                  {t.paragrafoIncolor(bairro)}
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {t.fotosIncolor.slice(0, 3).map((src, i) => (
                    <div
                      key={i}
                      className="aspect-[3/4] overflow-hidden rounded-lg bg-muted flex items-center justify-center"
                    >
                      <img width={1200} height={800}
                        src={src}
                        alt={`${t.label} Incolor instalado em ${bairro} — projeto Fast Vidro ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </article>

              {/* Variação FUMÊ */}
              <article>
                <div className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{ background: "linear-gradient(135deg,#4b5563,#1f2937)" }}
                    aria-hidden
                  />
                  {t.label} Fumê em {bairro}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                  {t.paragrafoFume(bairro)}
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {FOTOS_FUME.map((src, i) => (
                    <div
                      key={i}
                      className="aspect-[3/4] overflow-hidden rounded-lg bg-ink flex items-center justify-center"
                    >
                      <img width={1200} height={800}
                        src={src}
                        alt={`${t.label} Fumê instalado em ${bairro} — projeto Fast Vidro ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to={t.to}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-xs font-black uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                <Check className="h-3.5 w-3.5" /> Conhecer o {t.label}
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg(t.label))}`}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-xs font-black uppercase tracking-wider text-primary-foreground hover:shadow-yellow transition"
              >
                <MessageCircle className="h-3.5 w-3.5" /> Orçamento em {bairro}
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}
