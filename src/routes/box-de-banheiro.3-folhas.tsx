import { createFileRoute } from "@tanstack/react-router";
import { BoxModelShowcasePage } from "@/components/BoxModelShowcasePage";
import gallery1 from "@/assets/box-3-folhas-galeria-1.webp";
import gallery2 from "@/assets/box-3-folhas-galeria-2.webp";
import gallery3 from "@/assets/box-3-folhas-galeria-3.webp";
import gallery4 from "@/assets/box-3-folhas-galeria-4.webp";

const CANONICAL = "https://www.fastvidro.com.br/box-de-banheiro/3-folhas";
const META_TITLE = "Box 3 Folhas em SP | Duas Folhas Móveis e Vão Ampliado - Fast Vidro";
const META_DESC = "Box 3 Folhas sob medida em São Paulo, com duas folhas móveis e uma fixa. Mais abertura, deslize suave e vidro temperado. Solicite um orçamento.";

const gallery = [
  { src: gallery1, alt: "Box 3 Folhas branco com nicho iluminado instalado em banheiro em São Paulo", width: 894, height: 1200 },
  { src: gallery2, alt: "Divisória 3 Portas com adesivo jateado e duas folhas móveis em São Paulo", width: 899, height: 1200 },
  { src: gallery3, alt: "Divisória 3 Portas transparente com acabamento moderno instalada sob medida", width: 899, height: 1200 },
  { src: gallery4, alt: "Porta 3 Folhas ampla em vidro transparente instalada em projeto residencial em São Paulo", width: 901, height: 1200 },
];

export const Route = createFileRoute("/box-de-banheiro/3-folhas")({
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
        name: "Box 3 Folhas",
        alternateName: "Box 3 Portas",
        description: META_DESC,
        brand: { "@type": "Brand", name: "Fast Vidro" },
        url: CANONICAL,
        areaServed: { "@type": "City", name: "São Paulo" },
        offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "BRL", url: CANONICAL },
      }),
    }],
  }),
  component: BoxTresFolhasPage,
});

function BoxTresFolhasPage() {
  return (
    <BoxModelShowcasePage
      eyebrow="Box 3 Folhas"
      title="Box 3 Folhas em São Paulo: Vão Ampliado com Duas Folhas Móveis"
      introduction="Com duas folhas móveis e uma fixa, o Box 3 Folhas aumenta a área de abertura e combina praticidade, deslize suave e acabamento moderno em banheiros com espaço intermediário."
      paragraphs={[
        "Também conhecido como Box 3 Portas, este modelo distribui o fechamento em três painéis. As duas folhas móveis correm de forma coordenada e se recolhem junto à folha fixa, criando uma passagem maior que a de um box de correr tradicional.",
        "A Fast Vidro fabrica cada conjunto conforme o vão do banheiro, utilizando vidro temperado de alta resistência, roldanas de movimento suave e perfis com acabamento preciso. O resultado é um box funcional, elegante e adequado ao uso diário.",
      ]}
      benefitsTitle="Diferenciais do Box 3 Folhas"
      benefits={[
        "Duas folhas móveis e uma fixa",
        "Vão de abertura ampliado",
        "Vidro temperado de alta resistência",
        "Deslize suave e acabamento moderno",
      ]}
      whatsappMessage="Olá! Gostaria de mais informações e orçamento para o Box 3 Portas."
      galleryTitle="Box e divisórias de 3 Folhas instalados em SP"
      gallery={gallery}
    />
  );
}