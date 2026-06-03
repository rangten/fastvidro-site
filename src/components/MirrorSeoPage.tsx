import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { WHATSAPP_NUMBER } from "@/lib/site";

export interface MirrorSeoPageProps {
  eyebrow: string;
  h1: string;
  heroLead: string;
  heroImage: string;
  heroImageAlt: string;
  benefits: string[];
  paragraphs: React.ReactNode[];
  waMessage: string;
}

export function MirrorSeoPage({
  eyebrow,
  h1,
  heroLead,
  heroImage,
  heroImageAlt,
  benefits,
  paragraphs,
  waMessage,
}: MirrorSeoPageProps) {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <a
            href="/espelhos"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Voltar para Espelhos
          </a>

          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-primary">
                {eyebrow} • São Paulo
              </span>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-5xl font-black leading-[0.95]">
                {h1}
              </h1>
              <p className="mt-5 text-base text-ink-foreground/80 max-w-xl">{heroLead}</p>
              <ul className="mt-8 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                      <Check className="h-3.5 w-3.5 text-primary-foreground" />
                    </span>
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
              >
                <MessageCircle className="h-4 w-4" /> Pedir orçamento
              </a>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
                <img
                  src={heroImage}
                  alt={heroImageAlt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-20">
        <article>
          {paragraphs.map((p, i) => (
            <p key={i} className={`${i === 0 ? "" : "mt-5"} text-base leading-relaxed text-foreground/90`}>
              {p}
            </p>
          ))}
        </article>

        <div className="mt-12 flex justify-center">
          <a
            href={waUrl}
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

      <a
        href={waUrl}
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
