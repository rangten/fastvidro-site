import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight, X, Building2 } from "lucide-react";
import { ZONAS, toSlug } from "@/lib/bairros";
import heroImg from "@/assets/regioes-sp-hero.jpg";

export function RegioesAtendidasCard() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-foreground/60">
            Cobertura
          </span>
          <h2 className="mt-3 text-5xl font-black">Regiões Atendidas</h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Equipe própria atendendo toda a capital e Grande SP — instalação no menor prazo do mercado.
        </p>
      </div>

      {/* Card bento-style: assimétrico, com faixa amarela diagonal e contagem */}
      <div className="grid gap-5 lg:grid-cols-12">
        {/* Painel principal */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative overflow-hidden rounded-2xl lg:col-span-8 aspect-[16/9] lg:aspect-auto lg:min-h-[420px] text-left ring-1 ring-border hover:ring-primary transition"
        >
          <img
            src={heroImg}
            alt="Skyline de São Paulo — atendimento Fast Vidro"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/60 to-transparent" />

          {/* faixa diagonal amarela */}
          <div className="absolute -right-12 top-8 rotate-[8deg] bg-primary px-12 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-primary-foreground shadow-yellow">
            Atendimento em toda SP
          </div>

          <div className="relative z-10 flex h-full flex-col justify-between p-7 lg:p-10 text-ink-foreground">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ring-1 ring-white/20">
              <MapPin className="h-3 w-3 text-primary" />
              Capital • Grande SP
            </div>

            <div>
              <h3 className="text-4xl lg:text-6xl font-black leading-[0.9]">
                Atendemos<br />
                <span className="text-primary">em São Paulo</span>
              </h3>
              <p className="mt-4 max-w-md text-sm text-ink-foreground/80">
                Mais de <span className="font-bold text-primary">70 bairros</span> em 5 zonas com
                medição técnica e instalação no mesmo padrão Fast Vidro.
              </p>
              <span className="mt-6 inline-flex items-center gap-3 rounded-md bg-primary px-7 py-3.5 text-sm font-black uppercase tracking-wide text-primary-foreground shadow-yellow group-hover:translate-x-1 transition">
                Veja os bairros <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </button>

        {/* Coluna lateral com zonas-resumo */}
        <div className="lg:col-span-4 grid gap-3">
          {ZONAS.map((z) => (
            <button
              key={z.id}
              type="button"
              onClick={() => setOpen(true)}
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 text-left hover:border-primary hover:bg-muted transition"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-black uppercase tracking-wider">{z.label}</div>
                  <div className="text-xs text-muted-foreground">{z.bairros.length} bairros</div>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
            </button>
          ))}
        </div>
      </div>

      {/* Modal de bairros */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-ink/80 backdrop-blur-sm p-0 sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-background ring-1 ring-border shadow-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background px-6 py-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  Cobertura Fast Vidro
                </span>
                <h3 className="text-xl font-black">Bairros atendidos em São Paulo</h3>
              </div>
              <button
                type="button"
                aria-label="Fechar"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-5">
              {ZONAS.map((z) => (
                <div key={z.id}>
                  <div className="mb-3 flex items-center gap-2 border-b-2 border-primary pb-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <h4 className="text-xs font-black uppercase tracking-wider">{z.label}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {z.bairros.map((b) => (
                      <li key={b}>
                        <Link
                          to="/servicos/$bairro"
                          params={{ bairro: toSlug(b) }}
                          onClick={() => setOpen(false)}
                          className="block rounded px-2 py-1 text-sm text-foreground/80 hover:bg-primary hover:text-primary-foreground hover:font-bold transition"
                        >
                          {b}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
