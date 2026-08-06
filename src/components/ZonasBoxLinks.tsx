import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";

const ZONAS_BOX = [
  { to: "/box-de-vidro-zona-norte", label: "Box de Vidro — Zona Norte", desc: "Santana, Tucuruvi, Mandaqui, Tremembé, Jaçanã e região." },
  { to: "/box-de-vidro-zona-sul", label: "Box de Vidro — Zona Sul", desc: "Moema, Vila Mariana, Brooklin, Morumbi, Saúde e região." },
  { to: "/box-de-vidro-zona-oeste", label: "Box de Vidro — Zona Oeste", desc: "Pinheiros, Perdizes, Lapa, Vila Madalena, Butantã e região." },
  { to: "/box-de-vidro-zona-leste", label: "Box de Vidro — Zona Leste", desc: "Tatuapé, Mooca, Penha, Vila Prudente, Itaquera e região." },
] as const;

export function ZonasBoxLinks() {
  return (
    <section className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-14 lg:py-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
          <MapPin className="h-3 w-3" /> Cobertura
        </span>
        <h2 className="mt-3 text-2xl lg:text-3xl font-black">
          📍 Atendimento de Box de Banheiro por Região em São Paulo
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ZONAS_BOX.map((z) => (
            <Link
              key={z.to}
              to={z.to}
              className="group rounded-xl border border-primary/25 bg-white/5 p-5 transition hover:border-primary hover:bg-white/10"
            >
              <h3 className="text-base font-bold text-primary">{z.label}</h3>
              <p className="mt-2 text-sm text-ink-foreground/70">{z.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-ink-foreground/80 group-hover:text-primary">
                Ver página <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
