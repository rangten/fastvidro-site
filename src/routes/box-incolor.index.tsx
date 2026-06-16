import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ZONAS, toSlug } from "@/lib/bairros";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site";

export const Route = createFileRoute("/box-incolor/")({
  head: () => ({
    meta: [
      { title: "Box de Vidro Incolor em São Paulo | Fast Vidro" },
      {
        name: "description",
        content:
          "Box de Vidro Incolor sob medida em São Paulo. Vidro temperado 8mm de alta transparência, amplitude e claridade. Instalação Fast Vidro.",
      },
    ],
  }),
  component: () => {
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Olá! Quero um orçamento de Box de Vidro Incolor com a Fast Vidro.",
    )}`;
    return (
      <SiteLayout>
        <section className="bg-ink text-ink-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] ring-1 ring-white/20">
              <span
                className="inline-block h-3 w-3 rounded-full ring-1 ring-white/40"
                style={{ background: "linear-gradient(135deg,#ffffff,#e5e7eb)" }}
              />
              Box Incolor
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] max-w-4xl">
              Box de Vidro Incolor em São Paulo
            </h1>
            <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">
              Mais amplitude e claridade. Vidro temperado de alta transparência 8mm das melhores
              marcas, com instalação rápida da equipe Fast Vidro em toda a capital.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-black uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
            >
              <MessageCircle className="h-4 w-4" /> Pedir orçamento
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
          <h2 className="text-2xl lg:text-3xl font-black">Box Incolor por bairro de São Paulo</h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
            Clique no seu bairro e veja a página dedicada ao Box Incolor na sua região.
          </p>
          <div className="mt-8 space-y-8">
            {ZONAS.map((z) => (
              <div key={z.id}>
                <h3 className="text-sm font-black uppercase tracking-wider text-primary">
                  {z.label}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {z.bairros.map((b) => (
                    <li key={b}>
                      <Link
                        to="/box-incolor/$bairro"
                        params={{ bairro: toSlug(b) }}
                        className="inline-block rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:border-primary hover:text-primary transition"
                      >
                        {b}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </SiteLayout>
    );
  },
});
