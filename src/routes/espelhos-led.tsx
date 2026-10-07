import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Bath, BedDouble, Sofa, House, Ruler, Lightbulb, ShieldCheck, Gem, Star, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";
import banner from "@/assets/espelhos-led-banner.webp";
import retangular from "@/assets/espelhos-led-retangular.webp";
import organicoBanheiro from "@/assets/espelhos-led-organico-banheiro.webp";
import organicoSala from "@/assets/espelhos-led-organico-sala.webp";

const title = "Espelho LED Sob Medida em São Paulo — Fast Vidro";
const description = "Espelhos LED sob medida com formatos orgânicos e retangulares, iluminação traseira e acabamento premium. Medição e instalação em São Paulo com a Fast Vidro.";
const whatsapp = waLink("Olá! Gostaria de solicitar um orçamento para Espelho LED Sob Medida.");
const environments = [{ icon: House, name: "Lavabos" }, { icon: BedDouble, name: "Quartos" }, { icon: Sofa, name: "Sala" }, { icon: Bath, name: "Banheiros" }];
const benefits = [
  { icon: Ruler, title: "Tamanhos Personalizados", text: "Do seu jeito, no seu espaço." },
  { icon: Lightbulb, title: "Iluminação em LED de Alta Eficiência", text: "Mais beleza e economia." },
  { icon: ShieldCheck, title: "Instalação Rápida e Segura", text: "Com nossa equipe especializada." },
  { icon: Gem, title: "Acabamento Premium", text: "Qualidade em cada detalhe." },
  { icon: Star, title: "Valoriza Seu Ambiente", text: "Mais estilo e funcionalidade." },
];
const photos = [
  { src: retangular, title: "Retangular", alt: "Espelho retangular com iluminação LED traseira sobre bancada de banheiro", width: 1200, height: 900 },
  { src: organicoBanheiro, title: "Orgânico para lavabo", alt: "Espelho orgânico com iluminação LED quente em lavabo", width: 675, height: 1200 },
  { src: organicoSala, title: "Orgânico para sala", alt: "Espelho orgânico com iluminação LED suave em sala de jantar", width: 900, height: 1200 },
];

export const Route = createFileRoute("/espelhos-led")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EspelhosLedPage,
});

function EspelhosLedPage() {
  return (
    <SiteLayout>
      <div className="bg-ink text-ink-foreground">
        <section aria-labelledby="led-title" className="border-b border-primary/25">
          <img src={banner} width={1024} height={372} alt="Fast Vidro — Espelho LED sob medida, completo e colocado, com acabamento premium" loading="eager" fetchPriority="high" decoding="async" className="block h-auto w-full" />
          <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
            <h1 id="led-title" className="text-3xl font-black leading-tight tracking-normal sm:text-4xl lg:text-5xl">ESPELHO LED SOB MEDIDA</h1>
            <p className="mt-3 max-w-2xl text-base text-ink-foreground/80 lg:text-lg">Sofisticação, Iluminação e Modernidade para o Seu Ambiente.</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-10 gap-y-6">
              <ul className="grid w-full grid-cols-4 gap-2 sm:w-auto sm:gap-8" aria-label="Ambientes recomendados">
                {environments.map(({ icon: Icon, name }) => <li key={name} className="flex flex-col items-center gap-2 text-xs font-semibold sm:text-sm"><Icon className="h-6 w-6 text-primary" strokeWidth={1.5} /><span>{name}</span></li>)}
              </ul>
              <Button asChild size="lg" className="h-auto w-full whitespace-normal py-4 text-center font-bold sm:w-auto"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />Solicitar orçamento no WhatsApp</a></Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-bold text-primary"><CheckCircle2 className="h-5 w-5 shrink-0" />ESPELHO LED COMPLETO É COLOCADO!</p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16" aria-labelledby="led-benefits">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Detalhes que fazem a diferença</p>
          <h2 id="led-benefits" className="mt-3 text-3xl font-black tracking-normal">Seu espaço, valorizado pela luz</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map(({ icon: Icon, title: heading, text }) => <li key={heading} className="rounded-lg border border-primary/25 p-5"><Icon className="h-8 w-8 text-primary" strokeWidth={1.5} /><h3 className="mt-5 text-lg leading-snug tracking-normal">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-ink-foreground/70">{text}</p></li>)}
          </ul>
        </section>
        <section className="border-t border-primary/25" aria-labelledby="led-projects">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Formatos sob medida</p>
            <h2 id="led-projects" className="mt-3 text-3xl font-black tracking-normal">Iluminação que transforma ambientes</h2>
            <div className="mt-8 grid items-start gap-6 md:grid-cols-3">
              {photos.map((photo) => <figure key={photo.src}><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" className="block h-auto w-full rounded-lg" /><figcaption className="mt-4 border-l-2 border-primary pl-3 text-sm font-semibold">{photo.title}</figcaption></figure>)}
            </div>
          </div>
        </section>
        <section className="border-t border-primary/25 px-4 py-12 text-center lg:py-16">
          <h2 className="text-3xl font-black tracking-normal">Um espelho feito para o seu projeto</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-foreground/75">Espelhos orgânicos e retangulares com iluminação traseira suave, acabamento premium e instalação em São Paulo.</p>
          <Button asChild size="lg" className="mt-7 h-auto max-w-full whitespace-normal py-4 font-bold"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />Pedir orçamento sob medida</a></Button>
        </section>
      </div>
    </SiteLayout>
  );
}
