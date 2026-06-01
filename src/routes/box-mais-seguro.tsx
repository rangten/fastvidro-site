import { createFileRoute } from "@tanstack/react-router";
import { Shield, Check, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { waLink } from "@/lib/site";
import boxImg from "@/assets/product-box.jpg";
import maisSeguroAsset from "@/assets/mais-seguro.png.asset.json";

export const Route = createFileRoute("/box-mais-seguro")({
  head: () => ({
    meta: [
      { title: "Box + Seguro — Película anti-estilhaço | Fast Vidro" },
      { name: "description", content: "Box de banheiro com película de segurança anti-estilhaço inclusa. Proteção máxima para sua família, exclusivo Fast Vidro." },
      { property: "og:title", content: "Box + Seguro — Fast Vidro" },
      { property: "og:description", content: "Tecnologia anti-estilhaço aplicada ao box de banheiro. Mais segurança em São Paulo." },
    ],
  }),
  component: BoxMaisSeguroPage,
});

const waMsg = "Olá! Quero um orçamento do Box +Seguro com película anti-estilhaço.";

const beneficios = [
  "Película de segurança aplicada em ambos os lados do vidro temperado",
  "Em caso de impacto, o vidro permanece integrado — sem estilhaços soltos",
  "Proteção extra para famílias com crianças, idosos e pets",
  "Acabamento idêntico ao box convencional, sem alterar a estética",
  "Resistência adicional contra riscos do dia a dia",
  "Garantia estendida exclusiva Fast Vidro",
];

function BoxMaisSeguroPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Box + Seguro"
        title="Box com película anti-estilhaço"
        subtitle="A tecnologia exclusiva da Fast Vidro que protege sua família mesmo em caso de impacto no vidro temperado."
        image={boxImg}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-foreground/60">
              Por que escolher
            </span>
            <h2 className="mt-3 text-4xl font-black">Proteção que não se vê — mas faz toda a diferença</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              O Box +Seguro recebe uma película de segurança de alta resistência, aplicada após
              a têmpera. Mesmo no caso raro de quebra do vidro, todos os fragmentos permanecem
              presos à película — evitando cortes graves e acidentes domésticos.
            </p>
            <ul className="mt-8 space-y-3">
              {beneficios.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3.5 w-3.5 text-primary-foreground" />
                  </span>
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink(waMsg)}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
            >
              <MessageCircle className="h-4 w-4" /> Quero o Box +Seguro
            </a>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-yellow rounded-2xl rotate-2" />
            <div className="relative rounded-xl shadow-ink overflow-hidden bg-white p-10 flex items-center justify-center">
              <img src={maisSeguroAsset.url} alt="Selo Box + Seguro" className="max-h-80 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <Shield className="h-12 w-12 text-primary mx-auto" />
          <h2 className="mt-5 text-4xl font-black">Disponível para todos os modelos de box</h2>
          <p className="mt-4 text-ink-foreground/70 max-w-2xl mx-auto text-sm">
            Adicione a tecnologia +Seguro a qualquer modelo do nosso catálogo: Flex, Piso Teto,
            Nobre, Elegance, Duo Safe e mais. Fale com nossa equipe para um orçamento personalizado.
          </p>
          <a
            href={waLink(waMsg)}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
          >
            <MessageCircle className="h-5 w-5" /> Solicitar orçamento
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
