import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductPage } from "@/components/ProductPage";
import { RegioesPremiumFooter } from "@/components/RegioesPremiumFooter";
import img from "@/assets/portas-vidro-hero-fachada.png";
import { CATEGORIES } from "@/lib/catalog";

const category = CATEGORIES["portas-de-vidro"];

export const Route = createFileRoute("/portas-de-vidro/")({
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
        whatsappMessage="Olá! Preciso de um orçamento para Portas de Vidro com a Fast Vidro."
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
        modelLinkBase="/portas-de-vidro"
        models={category.models}
        ctaLabel="Solicitar visita técnica"
        seoHighlights={[
          { title: "Porta de Vidro Versatik para otimização de espaço", text: "O sistema Versatik é deslizante, silencioso e libera 100% da passagem — perfeito para integrar ambientes pequenos em apartamentos de São Paulo sem perder área útil." },
          { title: "Portas de correr Vision", text: "As portas de correr Vision combinam perfil ultrafino com vidro temperado de alta segurança, ideais para escritórios, lofts e salas de reunião com visual minimalista." },
          { title: "Instalação em toda a Capital e Grande SP", text: "Fabricação sob medida com ferragens importadas e instalação por equipe própria em Santana, Tucuruvi, Pinheiros, Moema, Morumbi, Tatuapé e Alphaville." },
        ]}
      />
      <RegioesPremiumFooter basePath="/portas-de-vidro" />
    </SiteLayout>
  ),
});
