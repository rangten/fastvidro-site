
import { PageHero } from "./PageHero";
import { waLink } from "@/lib/site";
import fastVidroLogo from "@/assets/fast-vidro-logo.webp";
import { Check, ArrowRight, DoorOpen, ShieldCheck, Sparkles } from "lucide-react";

interface ProductModel {
  slug?: string;
  name: string;
  description: string;
  image?: string;
  imageAlt?: string;
  whatsappMessage?: string;
  actionLabel?: string;
  visualTitle?: string;
  benefits?: [string, string, string];
  badge?: string;
}

export interface ProductPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  /** Alt descritivo (com localização) para a imagem de destaque da seção "Sobre". */
  heroImageAlt?: string;
  intro: string;
  // Base do link de cada modelo (ex: "/box-de-banheiro"). O slug é concatenado.
  modelLinkBase?: string;
  // Cada modelo aceita uma imagem opcional. Para usar suas fotos reais,
  // basta preencher `image` com a URL/import da foto do projeto instalado.
  models: ProductModel[];
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
  heroImageAlt,
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
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-yellow rotate-2" />
            <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl bg-card p-3 shadow-ink sm:p-4">
              <img width={1200} height={800}
                src={heroImage}
                alt={heroImageAlt ?? title}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
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
              const href = m.whatsappMessage
                ? waLink(m.whatsappMessage)
                : modelLinkBase && m.slug
                  ? `${modelLinkBase}/${m.slug}`
                  : undefined;
              const isWhatsapp = Boolean(m.whatsappMessage);
              const cardBody = (
                <>
                  {/* Foto de destaque do modelo (substitua `m.image` pelas suas fotos reais). */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    {m.image ? (
                      <img width={1200} height={800}
                        src={m.image}
                        alt={m.imageAlt ?? `Modelo ${m.name}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full grid place-items-center text-ink-foreground/30 text-xs uppercase tracking-wider">
                        Foto em breve
                      </div>
                    )}
                    {m.benefits && (
                      <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-r from-black/90 via-black/60 to-transparent p-4 sm:p-5">
                        <div className="flex items-start justify-between gap-3">
                          <img
                            src={fastVidroLogo}
                            alt="Fast Vidro"
                            width={150}
                            height={60}
                            loading="lazy"
                            className="h-auto w-24 object-contain sm:w-28"
                          />
                          {m.badge && (
                            <span className="rounded-sm bg-primary px-2 py-1 text-[9px] font-black uppercase text-primary-foreground">
                              {m.badge}
                            </span>
                          )}
                        </div>
                        <div className="max-w-[82%]">
                          <strong className="block text-xl font-black uppercase leading-tight text-white sm:text-2xl">
                            {m.visualTitle ?? m.name}
                          </strong>
                          <ul className="mt-3 space-y-1.5">
                            {m.benefits.map((benefit, index) => {
                              const BenefitIcon = [DoorOpen, ShieldCheck, Sparkles][index] ?? Check;
                              return (
                                <li key={benefit} className="flex items-start gap-2 text-[10px] font-semibold leading-snug text-white sm:text-xs">
                                  <BenefitIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                                  <span>{benefit}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-sans text-xl font-semibold text-primary tracking-wide">{m.name}</h3>
                    <p className="mt-3 text-sm text-ink-foreground/70">{m.description}</p>
                    {href && (
                      <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-primary">
                        {m.actionLabel ?? "Ver modelo"} <ArrowRight className="h-3 w-3" />
                      </span>
                    )}
                  </div>
                </>
              );

              const cardClass =
                "group block overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition hover:border-primary hover:bg-white/[0.06]";

              return href ? (
                <a
                  key={m.name}
                  href={href}
                  className={cardClass}
                  target={isWhatsapp ? "_blank" : undefined}
                  rel={isWhatsapp ? "noopener noreferrer" : undefined}
                  aria-label={isWhatsapp ? `${m.actionLabel ?? "Solicitar orçamento"}: ${m.name}` : undefined}
                >
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
