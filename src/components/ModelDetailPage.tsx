import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";
import type { Category, Model } from "@/lib/catalog";

export function ModelDetailPage({
  category,
  model,
}: {
  category: Category;
  model: Model;
}) {
  const waMsg = `Olá! Quero um orçamento do modelo ${model.name} (${category.eyebrow}) com a Fast Vidro.`;

  return (
    <>
      {/* Hero do modelo */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url(${model.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <Link
            to="/$categoria"
            params={{ categoria: category.slug }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Voltar para {category.eyebrow}
          </Link>
          <span className="mt-6 block speed-line text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {category.eyebrow}
          </span>
          <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95]">
            {model.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">{model.description}</p>
          <a
            href={waLink(waMsg)}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
          >
            <MessageCircle className="h-4 w-4" /> Solicitar orçamento deste modelo
          </a>
        </div>
      </section>

      {/* Sobre o modelo */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <div>
            <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-foreground/60">
              Sobre o modelo
            </span>
            <h2 className="mt-3 text-4xl font-black">Sobre o {category.eyebrow} {model.name}</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{model.longDescription}</p>
            <ul className="mt-8 space-y-3">
              {[
                "Vidro temperado certificado",
                "Medição técnica gratuita em SP",
                "Instalação por equipe própria",
                "Garantia estendida em ferragens",
              ].map((f) => (
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
              src={model.image}
              alt={`${category.eyebrow} ${model.name}`}
              className="relative rounded-xl shadow-ink w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Galeria de 6 fotos do projeto instalado */}
      <section className="bg-ink text-ink-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Galeria
              </span>
              <h2 className="mt-3 text-4xl font-black">Projetos instalados</h2>
              <p className="mt-3 text-sm text-ink-foreground/60 max-w-xl">
                Fotos reais do modelo {model.name} instalado em obras Fast Vidro.
              </p>
            </div>
          </div>

          {/* Substitua os 6 itens de `model.gallery` pelas suas fotos reais. */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {model.gallery.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/10 aspect-[4/3]"
              >
                <img
                  src={src}
                  alt={`${model.name} — foto ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={waLink(waMsg)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
            >
              <MessageCircle className="h-4 w-4" /> Solicitar orçamento deste modelo
            </a>
          </div>
        </div>
      </section>

      {/* CTA flutuante WhatsApp (fixo no canto inferior direito) */}
      <a
        href={waLink(waMsg)}
        target="_blank"
        rel="noopener"
        aria-label="Solicitar orçamento pelo WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-yellow hover:scale-105 transition lg:text-sm"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Orçamento deste modelo</span>
      </a>
    </>
  );
}
