import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductPage } from "@/components/ProductPage";
import { RegioesPremiumFooter } from "@/components/RegioesPremiumFooter";
import img from "@/assets/espelhos-hero-sala-jantar.webp";
import { CATEGORIES } from "@/lib/catalog";

const category = CATEGORIES["espelhos"];

export const Route = createFileRoute("/espelhos/")({
  head: () => ({
    meta: [
      { title: "Espelhos Sob Medida na Zona Norte e SP | LED e Bisotê | Fast Vidros" },
      { name: "description", content: "Espelhos decorativos, orgânicos, com LED e bisotê para banheiros e ambientes. Fabricação e instalação sob medida em toda São Paulo." },
      { property: "og:title", content: "Espelhos Sob Medida na Zona Norte e SP | LED e Bisotê | Fast Vidros" },
      { property: "og:description", content: "Espelhos decorativos, orgânicos, com LED e bisotê para banheiros e ambientes. Fabricação e instalação sob medida em toda São Paulo." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <ProductPage
        whatsappMessage="Olá! Gostaria de um orçamento para Espelhos Lapidados/Bisotê com a Fast Vidro."
        eyebrow="Espelhos"
        title="Espelhos que ampliam e decoram"
        subtitle="Decorativos, para banheiro ou parede inteira — com lapidação precisa e instalação segura."
        heroImage={img}
        intro="Mais do que um item funcional, o espelho é um elemento de decoração que amplia, ilumina e valoriza ambientes. A Fast Vidro corta, lapida e instala espelhos sob medida com acabamento premium e fixação invisível."
        features={[
          "Espelhos de 4mm e 6mm de alta refletância",
          "Lapidação reta ou bisotê",
          "Furação para arandelas e suportes",
          "Fixação invisível com fita de alta aderência ou parafusos ocultos",
        ]}
        modelLinkBase="/espelhos"
        models={category.models}
      />
      <RegioesPremiumFooter
        basePath="/espelhos"
        title="Espelhos sob Medida por Bairro em São Paulo"
      />
    </SiteLayout>
  ),
});

