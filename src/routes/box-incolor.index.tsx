import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ZONAS, toSlug } from "@/lib/bairros";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { FOTOS_INCOLOR } from "@/components/BoxCorBairroPage";

export const Route = createFileRoute("/box-incolor/")({
  head: () => ({
    meta: [
      { title: "Box de Banheiro e Box de Vidro Incolor Sob Medida | Fast Vidro" },
      {
        name: "description",
        content:
          "Box de Vidro Incolor sob medida em São Paulo. Vidro temperado 8mm de alta transparência, amplitude e claridade. Modelos Flex, Elegance, Piso Teto, Tradicional e mais.",
      },
    ],
  }),
  component: () => {
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Olá! Quero um orçamento de Box de Vidro Incolor com a Fast Vidro.",
    )}`;
    const foto = FOTOS_INCOLOR[0];
    return (
      <SiteLayout>
        {/* HERO */}
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
              Box de Banheiro e Box de Vidro Incolor Sob Medida
            </h1>
            <h2 className="mt-5 max-w-3xl text-lg lg:text-xl text-ink-foreground/80 font-semibold">
              Modelos de Box para Banheiro com Instalação Rápida e Preço de Fábrica
            </h2>
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

        {/* SEO Rich Content */}
        <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Imagem */}
            <figure
              className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl flex items-center justify-center p-6"
              style={{
                backgroundColor: "#0b0f19",
                backgroundImage:
                  "radial-gradient(120% 80% at 85% 15%, rgba(250,204,21,0.18), transparent 55%), linear-gradient(135deg, #0b0f19 0%, #111726 55%, #0b0f19 100%)",
              }}
            >
              <img
                src={foto}
                alt="Box de Vidro Incolor sob medida - Fast Vidro"
                loading="lazy"
                decoding="async"
                className="max-h-[360px] sm:max-h-[420px] lg:max-h-[480px] w-auto max-w-full object-contain drop-shadow-2xl"
              />
            </figure>

            {/* Texto */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-black leading-tight text-foreground">
                Onde Encontrar Box de Banheiro com Acabamento Premium?
              </h3>
              <p className="mt-5 text-base lg:text-lg leading-relaxed text-foreground/85">
                Se você está redecorando ou construindo e quer saber onde encontrar box de banheiro com a máxima qualidade, a Fast Vidro oferece uma linha completa de box de vidro temperado 8mm. Desenvolvemos projetos personalizados para todos os estilos de ambientes, incluindo o moderno box frontal, o tradicional box de correr, o sofisticado box até o teto (totalmente vedado), além de soluções inteligentes como o box de canto (em L), o clássico box de abrir, o versátil box flex articulado (tipo camarão para espaços compactos) e o elegante box elegance com roldanas de inox aparentes.
              </p>
            </div>
          </div>
        </section>

        {/* Bairros */}
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
