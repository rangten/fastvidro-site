import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { waLink } from "@/lib/site";
import img from "@/assets/product-projetos.jpg";
import boxImg from "@/assets/product-box.jpg";
import portasImg from "@/assets/product-portas.jpg";
import ledImg from "@/assets/product-led.jpg";
import espelhosImg from "@/assets/product-espelhos.jpg";
import heroImg from "@/assets/hero-box.jpg";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos personalizados — Fast Vidro" },
      { name: "description", content: "Projetos personalizados em vidro para residências, comércio e escritórios. Galeria de trabalhos realizados." },
      { property: "og:title", content: "Projetos personalizados — Fast Vidro" },
      { property: "og:description", content: "Soluções sob medida em vidro para qualquer ambiente." },
    ],
  }),
  component: Projetos,
});

const gallery = [img, boxImg, heroImg, portasImg, ledImg, espelhosImg];

function Projetos() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Projetos"
        title="Vidro sob medida. Sem limites."
        subtitle="Desenvolvemos soluções personalizadas em vidro para residências, escritórios, lojas e obras de grande porte."
        image={img}
      />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl bg-muted ${i % 5 === 0 ? "lg:row-span-2" : ""}`}
            >
              <img
                src={src}
                alt={`Projeto Fast Vidro ${i + 1}`}
                loading="lazy"
                className={`w-full object-cover transition duration-500 hover:scale-105 ${i % 5 === 0 ? "h-full min-h-[500px]" : "aspect-[4/3]"}`}
              />
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={waLink("Olá! Quero solicitar um projeto personalizado em vidro.")}
            target="_blank"
            rel="noopener"
            className="inline-block rounded-md bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
          >
            Solicitar projeto personalizado
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
