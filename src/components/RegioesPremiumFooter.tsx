import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { ZONAS, toSlug } from "@/lib/bairros";

/**
 * Rodapé geográfico semântico — apenas nomes de bairros agrupados por zona.
 * NÃO repetir termos de produtos para evitar keyword stuffing.
 */
export function RegioesPremiumFooter() {
  return (
    <section
      aria-labelledby="regioes-premium-title"
      className="border-t border-border bg-muted/40"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-14 lg:py-16">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              <MapPin className="h-3 w-3" /> Cobertura
            </span>
            <h2
              id="regioes-premium-title"
              className="mt-3 text-2xl lg:text-3xl font-black leading-tight"
            >
              Regiões de Atendimento Premium
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Equipe própria Fast Vidro atendendo a capital e a Grande São Paulo.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {ZONAS.map((z) => (
            <div key={z.id}>
              <h3 className="mb-3 border-b-2 border-primary/70 pb-2 text-xs font-black uppercase tracking-[0.2em] text-foreground">
                {z.label}
              </h3>
              <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
                {z.bairros.map((b) => (
                  <li key={b}>
                    <Link
                      to="/servicos/$bairro"
                      params={{ bairro: toSlug(b) }}
                      className="text-xs text-foreground/75 hover:text-primary hover:underline transition"
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
    </section>
  );
}
