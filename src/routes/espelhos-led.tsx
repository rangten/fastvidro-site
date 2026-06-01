import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductPage } from "@/components/ProductPage";
import img from "@/assets/product-led.jpg";

export const Route = createFileRoute("/espelhos-led")({
  head: () => ({
    meta: [
      { title: "Espelhos LED — Fast Vidro" },
      { name: "description", content: "Espelhos com iluminação LED retroiluminada e sensor touch. Ideal para banheiros e camarins." },
      { property: "og:title", content: "Espelhos LED — Fast Vidro" },
      { property: "og:description", content: "Espelhos LED com baixo consumo e design sofisticado." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <ProductPage
        eyebrow="Espelhos LED"
        title="Espelhos LED com tecnologia e design"
        subtitle="Iluminação frontal ou retroiluminada, sensor touch e baixo consumo de energia."
        heroImage={img}
        intro="Os espelhos LED da Fast Vidro unem funcionalidade e sofisticação. Perfeitos para banheiros, lavabos e camarins, oferecem iluminação ideal para skincare, maquiagem e barbear — com acionamento touch e LEDs de longa vida útil."
        features={[
          "Iluminação LED branca, neutra ou quente",
          "Acionamento touch ou sensor de aproximação",
          "Baixo consumo e longa vida útil (>30.000h)",
          "Anti-embaçante opcional para banhos quentes",
        ]}
        models={[
          { name: "Frontal", description: "LEDs na face do espelho para iluminação direta." },
          { name: "Retroiluminado", description: "Halo de luz indireta atrás do espelho." },
          { name: "Touch", description: "Toque para acender, apagar e regular intensidade." },
          { name: "Sensor", description: "Acende automaticamente ao se aproximar." },
          { name: "Anti-embaçante", description: "Resistência interna que evita embaçamento." },
        ]}
      />
    </SiteLayout>
  ),
});
