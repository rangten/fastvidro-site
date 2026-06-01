import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductPage } from "@/components/ProductPage";
import img from "@/assets/product-projetos.jpg";
import { CATEGORIES } from "@/lib/catalog";

const category = CATEGORIES["projetos"];

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos personalizados — Fast Vidro" },
      { name: "description", content: "Projetos personalizados em vidro para residências, comércio e escritórios." },
      { property: "og:title", content: "Projetos personalizados — Fast Vidro" },
      { property: "og:description", content: "Soluções sob medida em vidro para qualquer ambiente." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <ProductPage
        whatsappMessage="Olá! Quero solicitar um projeto personalizado em vidro com a Fast Vidro."
        eyebrow="Projetos"
        title="Vidro sob medida. Sem limites."
        subtitle="Soluções personalizadas em vidro para residências, escritórios, lojas e obras de grande porte."
        heroImage={img}
        intro="A Fast Vidro desenvolve projetos personalizados em vidro temperado e laminado, do residencial ao corporativo. Cada projeto é único: da concepção até a instalação, garantimos acabamento impecável e prazo cumprido."
        features={[
          "Atendimento técnico e visita gratuita",
          "Vidros temperados e laminados certificados",
          "Equipe própria de instalação em toda SP",
          "Acompanhamento do início ao fim do projeto",
        ]}
        modelLinkBase="/projetos"
        models={category.models}
        ctaLabel="Solicitar projeto personalizado"
      />
    </SiteLayout>
  ),
});
