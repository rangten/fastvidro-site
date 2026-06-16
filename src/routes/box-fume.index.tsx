import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ZONAS } from "@/lib/bairros";
import { toSlug } from "@/lib/bairros";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site";

export const Route = createFileRoute("/box-fume/")({
  head: () => ({
    meta: [
      { title: "Box de Vidro Fumê em São Paulo | Fast Vidro" },
      {
        name: "description",
        content:
          "Box de Vidro Fumê sob medida em São Paulo. Privacidade, sofisticação e instalação rápida pela Fast Vidro. Atendemos todos os bairros da capital.",
      },
    ],
  }),
  component: () => {
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Olá! Quero um orçamento de Box de Vidro Fumê com a Fast Vidro.",
    )}`;
    return (
      <SiteLayout>
        <section className="bg-ink text-ink-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] ring-1 ring-white/20">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ background: "linear-gradient(135deg,#4b5563,#1f2937)" }}
              />
              Box Fumê
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] max-w-4xl">
              Box de Vidro Fumê em São Paulo
            </h1>
            <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">
              Privacidade, sofisticação e o tom escuro mais procurado dos banheiros modernos.
              A Fast Vidro instala em toda a capital com medição digital a laser.
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
          <h2 className="text-2xl lg:text-3xl font-black">Box Fumê por bairro de São Paulo</h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
            Clique no seu bairro e veja a página dedicada ao Box Fumê na sua região.
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
                        to="/box-fume/$bairro"
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
