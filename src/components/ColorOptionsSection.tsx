import { Link } from "@tanstack/react-router";

interface ColorOption {
  slug: string;
  name: string;
  swatch: string;     // CSS background for the dot
  ring?: string;      // optional ring color (for white/incolor)
  active: boolean;
  href?: string;
}

const COLORS: ColorOption[] = [
  { slug: "incolor", name: "Box Incolor", swatch: "linear-gradient(135deg,#ffffff,#e5e7eb)", ring: "ring-2 ring-border", active: true, href: "/box-incolor" },
  { slug: "fume", name: "Box Fumê", swatch: "linear-gradient(135deg,#4b5563,#1f2937)", active: true, href: "/box-fume" },
  { slug: "bronze", name: "Box Bronze", swatch: "linear-gradient(135deg,#a16207,#78350f)", active: false },
  { slug: "verde", name: "Box Verde", swatch: "linear-gradient(135deg,#15803d,#064e3b)", active: false },
  { slug: "pontilhado", name: "Box Pontilhado", swatch: "radial-gradient(#1f2937 1px, #f3f4f6 1.5px) 0 0/6px 6px", active: false },
  { slug: "jateado", name: "Box Jateado / Fosco", swatch: "linear-gradient(135deg,#e0f2fe,#bae6fd)", ring: "ring-2 ring-sky-200", active: false },
];

export function ColorOptionsSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 lg:px-8 py-16 lg:py-20">
      <div className="max-w-2xl">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
          Personalize
        </span>
        <h2 className="mt-3 text-3xl lg:text-4xl font-black leading-tight">
          Opções de Cores e Modelos de Box
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Escolha o tom do vidro ideal para o seu projeto. Cada cor traz uma identidade diferente
          ao banheiro — do clean total ao reservado e sofisticado.
        </p>
      </div>

      <ul className="mt-8 flex flex-wrap gap-3">
        {COLORS.map((c) => {
          const inner = (
            <span
              className={[
                "inline-flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-semibold transition",
                c.active
                  ? "border-border bg-card hover:border-primary hover:shadow-yellow"
                  : "border-dashed border-border bg-muted/40 text-muted-foreground cursor-not-allowed",
              ].join(" ")}
              aria-disabled={!c.active}
            >
              <span
                className={`inline-block h-5 w-5 rounded-full ${c.ring ?? ""}`}
                style={{ background: c.swatch }}
                aria-hidden
              />
              {c.name}
              {!c.active && (
                <span className="ml-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">
                  em breve
                </span>
              )}
            </span>
          );
          return (
            <li key={c.slug}>
              {c.active && c.href ? (
                <Link to={c.href} className="block">
                  {inner}
                </Link>
              ) : (
                inner
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
