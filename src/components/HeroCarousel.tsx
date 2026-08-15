import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/site";

import heroDefault from "@/assets/hero-box.webp";
import flexDesktop from "@/assets/hero-flex-desktop.webp";
import flexMobile from "@/assets/hero-flex-mobile.webp";
import boxDesktop from "@/assets/hero-box-desktop.webp";
import boxMobile from "@/assets/hero-box-mobile.webp";

type Slide = {
  kind: "text" | "image";
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  desktopImage: string;
  mobileImage: string;
  href?: string;
  primary?: { label: string; href: string; icon?: React.ReactNode };
  secondary?: { label: string; to: string };
};

const slides: Slide[] = [
  {
    kind: "image",
    desktopImage: boxDesktop,
    mobileImage: boxMobile,
    href: waLink("Olá! Quero a Promoção Especial do Box da Fast Vidro."),
  },
  {
    kind: "image",
    desktopImage: flexDesktop,
    mobileImage: flexMobile,
    href: waLink("Olá! Quero orçamento do Box Flex Premium da Fast Vidro."),
  },
  {
    kind: "text",
    eyebrow: "Fast Vidros",
    title: (
      <>
        Box de Banheiro na Zona Norte e Toda SP com{" "}
        <span className="text-primary">Entrega Rápida</span>
      </>
    ),
    subtitle:
      "Instalação ágil de box em vidro temperado em toda São Paulo — Zona Norte, Leste, Oeste e Sul — com tecnologia anti-estilhaço e acabamento premium.",
    desktopImage: heroDefault,
    mobileImage: heroDefault,
    primary: { label: "Pedir orçamento", href: waLink(), icon: <MessageCircle className="h-4 w-4" /> },
    secondary: { label: "Ver box", to: "/box-de-banheiro" },
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);
  const [ready, setReady] = useState(false);

  // Defer carousel bootstrapping (layout reads + autoplay) until after the
  // first paint so the LCP banner renders without any JS on the critical path.
  useEffect(() => {
    let done = false;
    const start = () => {
      if (done) return;
      done = true;
      setReady(true);
    };
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    const id = w.requestIdleCallback
      ? w.requestIdleCallback(start, { timeout: 2000 })
      : window.setTimeout(start, 1200);
    const events: Array<keyof WindowEventMap> = ["pointerdown", "keydown", "touchstart"];
    events.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));
    return () => {
      events.forEach((e) => window.removeEventListener(e, start));
      if (!w.requestIdleCallback) window.clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSel = () => setSelected(emblaApi.selectedScrollSnap());
    onSel();
    emblaApi.on("select", onSel);
    return () => {
      emblaApi.off("select", onSel);
    };
  }, [emblaApi]);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative bg-ink text-ink-foreground">
      <div className="overflow-hidden" ref={ready ? emblaRef : undefined}>
        <div className="flex">
          {slides.map((s, i) => (
            <div key={i} className="relative flex-[0_0_100%] min-w-0">
              {s.kind === "image" ? (
                // Promotional slides: entire banner is clickable, image shown intact (no crop)
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  className="block bg-ink"
                  aria-label="Falar no WhatsApp"
                >
                  {(i === 0 || ready) && (
                  <picture>
                    <source media="(min-width: 768px)" srcSet={s.desktopImage} width={1200} height={619} />
                    <img
                      src={s.mobileImage}
                      alt="Banner promocional Fast Vidro"
                      width={960}
                      height={1200}
                      className="block w-full h-auto max-h-[70vh] object-contain mx-auto"
                      loading={i === 0 ? "eager" : "lazy"}
                      fetchPriority={i === 0 ? "high" : "auto"}
                      decoding={i === 0 ? "sync" : "async"}
                    />
                  </picture>
                  )}
                </a>
              ) : (
                <div className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[600px]">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={s.desktopImage} width={1200} height={675} />
                    <img
                      src={s.mobileImage}
                      alt=""
                      aria-hidden="true"
                      width={1200}
                      height={675}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>

                  <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40 md:to-ink/20" />
                  <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-28 h-full flex flex-col justify-center">
                    {s.eyebrow && (
                      <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-primary">
                        {s.eyebrow}
                      </span>
                    )}
                    {s.title && (
                      <h1 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] max-w-4xl">
                        {s.title}
                      </h1>
                    )}
                    {s.subtitle && (
                      <p className="mt-6 max-w-xl text-base sm:text-lg text-ink-foreground/80">
                        {s.subtitle}
                      </p>
                    )}
                    {s.primary && (
                      <div className="mt-9 flex flex-wrap gap-3">
                        <a
                          href={s.primary.href}
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
                        >
                          {s.primary.icon} {s.primary.label}
                        </a>
                        {s.secondary && (
                          <Link
                            to={s.secondary.to}
                            className="inline-flex items-center gap-2 rounded-md border-2 border-ink-foreground/30 px-7 py-4 text-sm font-bold uppercase tracking-wide text-ink-foreground hover:border-primary hover:text-primary transition"
                          >
                            {s.secondary.label} <ArrowRight className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-10 grid h-11 w-11 place-items-center rounded-full bg-ink/60 backdrop-blur border border-white/15 text-ink-foreground hover:bg-primary hover:text-primary-foreground transition"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Próximo slide"
        className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-10 grid h-11 w-11 place-items-center rounded-full bg-ink/60 backdrop-blur border border-white/15 text-ink-foreground hover:bg-primary hover:text-primary-foreground transition"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              selected === i ? "w-8 bg-primary" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Floating WhatsApp CTA for promotional slides (discreet, bottom) */}
      <noscript />
    </section>
  );
}
