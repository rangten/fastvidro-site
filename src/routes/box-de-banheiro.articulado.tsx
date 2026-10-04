import { createFileRoute } from "@tanstack/react-router";
import { BoxModelShowcasePage } from "@/components/BoxModelShowcasePage";
import gallery1 from "@/assets/box-articulado-galeria-1.webp";
import gallery2 from "@/assets/box-articulado-galeria-2.webp";
import gallery3 from "@/assets/box-articulado-galeria-3.webp";

const CANONICAL = "https://www.fastvidro.com.br/box-de-banheiro/articulado";
const META_TITLE = "Box Articulado em SP | Mais Abertura para Banheiro Pequeno - Fast Vidro";
const META_DESC = "Box Articulado sob medida em vidro temperado para banheiros pequenos em São Paulo. Amplie a passagem com instalação especializada. Peça seu orçamento.";

const gallery = [
  { src: gallery1, alt: "Box Articulado preto até o teto instalado em banheiro com mármore claro em São Paulo", width: 900, height: 1200 },
  { src: gallery2, alt: "Box Articulado preto frontal em vidro temperado instalado sob medida em São Paulo", width: 900, height: 1200 },
  { src: gallery3, alt: "Box Articulado branco em vidro temperado para banheiro compacto em São Paulo", width: 900, height: 1200 },
];

export const Route = createFileRoute("/box-de-banheiro/articulado")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:type", content: "product" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Box Articulado",
        description: META_DESC,
        brand: { "@type": "Brand", name: "Fast Vidro" },
        url: CANONICAL,
        areaServed: { "@type": "City", name: "São Paulo" },
        offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", url: CANONICAL },
      }),
    }],
  }),
  component: BoxArticuladoPage,
});

function BoxArticuladoPage() {
  return (
    <BoxModelShowcasePage
      eyebrow="Box Articulado"
      title="Box Articulado em São Paulo: Mais Passagem para Banheiros Pequenos"
      introduction="O sistema articulado recolhe as folhas de vidro para ampliar o vão de passagem e aproveitar melhor cada centímetro do banheiro. É fabricado sob medida e instalado por uma equipe especializada."
      paragraphs={[
        "O Box Articulado é indicado para banheiros compactos, suítes e lavabos nos quais uma porta convencional limitaria a circulação. Suas folhas trabalham de forma coordenada e ocupam menos espaço durante a abertura, entregando conforto sem comprometer o acabamento do ambiente.",
        "Cada projeto da Fast Vidro considera as medidas reais do vão, o prumo das paredes e a posição das louças. O vidro temperado de alta resistência e os perfis de qualidade formam um conjunto seguro, durável e fácil de usar no dia a dia.",
      ]}
      benefitsTitle="Por que escolher o Box Articulado?"
      benefits={[
        "Abertura articulada que otimiza o espaço",
        "Maior ganho de passagem em vãos pequenos",
        "Vidro temperado de alta resistência",
        "Instalação especializada e totalmente sob medida",
      ]}
      whatsappMessage="Olá! Gostaria de mais informações e orçamento para o Box Articulado."
      galleryTitle="Box Articulado instalado em São Paulo"
      gallery={gallery}
    />
  );
}