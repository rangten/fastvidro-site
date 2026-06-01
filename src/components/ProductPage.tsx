import { Link } from "@tanstack/react-router";
import { PageHero } from "./PageHero";
import { waLink } from "@/lib/site";
import { Check, ArrowRight } from "lucide-react";

export interface ProductPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  // Base do link de cada modelo (ex: "/box-de-banheiro"). O slug é concatenado.
  modelLinkBase?: string;
  // Cada modelo aceita uma imagem opcional. Para usar suas fotos reais,
  // basta preencher `image` com a URL/import da foto do projeto instalado.
  models: { slug?: string; name: string; description: string; image?: string }[];
  features: string[];
  ctaLabel?: string;
  seoHighlights?: { title: string; text: string }[];
  // Mensagem pré-preenchida do WhatsApp específica desta página.
  whatsappMessage?: string;
}


export function ProductPage({
  eyebrow,
  title,
  subtitle,
  heroImage,
  intro,
  models,
  modelLinkBase,
  features,
  ctaLabel = "Pedir orçamento",
  seoHighlights,
  whatsappMessage,
}: ProductPageProps) {
  const waMsg = whatsappMessage ?? `Olá! Quero um orçamento de ${title}.`;

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} image={heroImage} />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black">Sobre {eyebrow.toLowerCase()}</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3.5 w-3.5 text-primary-foreground" />
                  </span>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-yellow rounded-2xl rotate-2" />
            <img
              src={heroImage}
              alt={title}
              className="relative rounded-xl shadow-ink w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Modelos
              </span>
              <h2 className="mt-3 text-4xl font-black">Escolha o seu</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((m) => {
              const href = modelLinkBase && m.slug ? `${modelLinkBase}/${m.slug}` : undefined;
              const cardBody = (
                <>
                  {/* Foto de destaque do modelo (substitua `m.image` pelas suas fotos reais). */}
                  <div className="aspect-[4/3] overflow-hidden bg-black">
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={`Modelo ${m.name}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full grid place-items-center text-ink-foreground/30 text-xs uppercase tracking-wider">
                        Foto em breve
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-primary">{m.name}</h3>
                    <p className="mt-3 text-sm text-ink-foreground/70">{m.description}</p>
                    {href && (
                      <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-primary">
                        Ver modelo <ArrowRight className="h-3 w-3" />
                      </span>
                    )}
                  </div>
                </>
              );

              const cardClass =
                "group block overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition hover:border-primary hover:bg-white/[0.06]";

              return href ? (
                <a key={m.name} href={href} className={cardClass}>
                  {cardBody}
                </a>
              ) : (
                <div key={m.name} className={cardClass}>
                  {cardBody}
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <a
              href={waLink(waMsg)}
              target="_blank"
              rel="noopener"
              className="inline-block rounded-md bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </section>

      {seoHighlights && seoHighlights.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-foreground/60">
                Destaques
              </span>
              <h2 className="mt-3 text-4xl font-black">Soluções mais procuradas em São Paulo</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {seoHighlights.map((h) => (
              <div key={h.title} className="rounded-xl border border-border bg-card p-7 hover:border-primary transition">
                <h3 className="text-lg font-black leading-tight">{h.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
