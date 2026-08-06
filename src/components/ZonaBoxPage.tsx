import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, ShieldCheck, Ruler, Truck } from "lucide-react";
import { waLink } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface ZonaBoxPageProps {
  eyebrow: string;
  h1: string;
  subtitle: string;
  heroImage: string;
  bairros: string[];
  intro: string;
  differentials: { title: string; text: string }[];
  gallery: { src: string; alt: string }[];
  ctaLabel: string;
  waMessage: string;
  faq: { q: string; a: string }[];
}

export function ZonaBoxPage(props: ZonaBoxPageProps) {
  const {
    eyebrow,
    h1,
    subtitle,
    heroImage,
    bairros,
    intro,
    differentials,
    gallery,
    ctaLabel,
    waMessage,
    faq,
  } = props;

  const icons = [ShieldCheck, Ruler, Truck];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
          <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.02]">
            {h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">{subtitle}</p>
          <a
            href={waLink(waMessage)}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
          >
            <MessageCircle className="h-4 w-4" /> {ctaLabel}
          </a>
        </div>
      </section>

      {/* INTRO + BAIRROS */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-base leading-relaxed text-foreground/85">{intro}</p>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">
              Conheça também nossa{" "}
              <Link
                to="/box-de-banheiro"
                className="font-semibold text-primary underline underline-offset-4"
              >
                linha completa de modelos de box de banheiro
              </Link>{" "}
              — Flex, Piso Teto, Elegance, Nobre, Tradicional e Secure Box — todos disponíveis
              para esta região.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-muted/40 p-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              <MapPin className="h-3 w-3" /> Bairros atendidos
            </span>
            <ul className="mt-4 flex flex-wrap gap-2">
              {bairros.map((b) => {
                const slug = toSlug(b);
                const exists = !!bairroFromSlug(slug);
                const base =
                  "inline-block rounded-full border border-primary/40 bg-background px-3 py-1.5 text-xs font-semibold text-foreground/80";
                return (
                  <li key={b}>
                    {exists ? (
                      <Link
                        to="/servicos/$bairro"
                        params={{ bairro: slug }}
                        className={`${base} cursor-pointer transition-colors duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary`}
                      >
                        {b}
                      </Link>
                    ) : (
                      <span className={base}>{b}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-14">
          <h2 className="text-2xl lg:text-3xl font-black">Projetos executados pela Fast Vidro</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g) => (
              <img
                key={g.src + g.alt}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-56 w-full rounded-xl object-cover shadow-sm ring-1 ring-border"
              />
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-14">
        <h2 className="text-2xl lg:text-3xl font-black">Por que escolher a Fast Vidro aqui</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {differentials.map((d, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={d.title} className="rounded-xl border border-border bg-card p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-lg font-bold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 py-14">
          <h2 className="text-2xl lg:text-3xl font-black">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-6">
            {faq.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-5 px-4 lg:px-8 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl lg:text-3xl font-black">Medição gratuita e orçamento na hora</h2>
            <p className="mt-2 text-sm text-ink-foreground/75">
              Fale agora com um consultor Fast Vidro pelo WhatsApp.
            </p>
          </div>
          <a
            href={waLink(waMessage)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
          >
            <MessageCircle className="h-4 w-4" /> {ctaLabel}
          </a>
        </div>
      </section>
    </>
  );
}

export function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
