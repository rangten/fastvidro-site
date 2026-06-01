import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductPage } from "@/components/ProductPage";
import img from "@/assets/product-portas.jpg";

export const Route = createFileRoute("/portas-de-vidro")({
  head: () => ({
    meta: [
      { title: "Portas de Vidro — Fast Vidro" },
      { name: "description", content: "Portas de vidro temperado: Vision, Nobre, Flex, de Correr, Versatik. Integração de ambientes com luz e elegância." },
      { property: "og:title", content: "Portas de Vidro — Fast Vidro" },
      { property: "og:description", content: "Portas de vidro sob medida com acabamentos premium." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <ProductPage
        eyebrow="Portas de Vidro"
        title="Portas de vidro que integram e iluminam"
        subtitle="Soluções para residências, escritórios e comércio com vidros incolor, jateado, fumê ou bronze."
        heroImage={img}
        intro="Portas de vidro ampliam visualmente o ambiente, levam luz natural para áreas internas e dão um ar contemporâneo a qualquer projeto. A Fast Vidro produz portas sob medida com vidro temperado de alta segurança e ferragens de longa durabilidade."
        features={[
          "Vidro temperado 8mm ou 10mm certificado",
          "Opções incolor, jateado, fumê e bronze",
          "Ferragens importadas com garantia",
          "Modelos de correr, abrir ou pivotantes",
        ]}
        models={[
          { name: "Vision", description: "Linhas finas, ideal para escritórios modernos." },
          { name: "Nobre", description: "Acabamento premium para alto padrão." },
          { name: "Certo", description: "Solução robusta para grandes vãos." },
          { name: "Flex", description: "Adaptável a múltiplas configurações." },
          { name: "De Abrir", description: "Porta tradicional pivotante com molas." },
          { name: "De Correr", description: "Aproveitamento total do espaço." },
          { name: "Versatik", description: "Sistema deslizante silencioso e suave." },
        ]}
        ctaLabel="Solicitar visita técnica"
      />
    </SiteLayout>
  ),
});
