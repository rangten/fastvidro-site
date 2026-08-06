import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ZonaBoxPage, faqJsonLd } from "@/components/ZonaBoxPage";
import hero from "@/assets/box-banheiro-hero-real.png";
import flexCover from "@/assets/flex-cover.png";
import flex1 from "@/assets/flex-1.png";
import flex2 from "@/assets/flex-2.png";
import eleganceCover from "@/assets/elegance-cover.png";

const FAQ = [
  { q: "O box articulado (Flex) serve para banheiro pequeno?", a: "Sim. O modelo Flex dobra as folhas de vidro para dentro do vão, liberando circulação — é a melhor escolha para banheiros compactos da Zona Oeste." },
  { q: "Quais bairros da Zona Oeste vocês atendem?", a: "Pinheiros, Perdizes, Lapa, Vila Madalena, Alto de Pinheiros, Pompéia, Butantã, Vila Leopoldina, Jaguaré, Barra Funda e região." },
  { q: "Existem perfis minimalistas disponíveis?", a: "Sim, oferecemos perfis slim e acabamentos em preto, branco, cromado e dourado para projetos de estética minimalista." },
  { q: "Quanto tempo demora a instalação?", a: "A instalação de um box padrão leva em média de 2 a 4 horas, sem quebra-quebra e com limpeza ao final." },
  { q: "Posso escolher a cor do vidro?", a: "Sim: incolor, fumê, verde e bronze, todos em vidro temperado certificado." },
];

export const Route = createFileRoute("/box-de-vidro-zona-oeste")({
  head: () => ({
    meta: [
      { title: "Box de Vidro para Banheiro na Zona Oeste SP | Fast Vidro" },
      { name: "description", content: "Box de vidro para banheiro na Zona Oeste SP. Projetos personalizados sob medida, roldanas aparentes e máxima segurança." },
      { property: "og:title", content: "Box de Vidro para Banheiro na Zona Oeste SP | Fast Vidro" },
      { property: "og:description", content: "Projetos sob medida de box de vidro na Zona Oeste de SP, com perfis minimalistas e box articulado Flex." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.fastvidro.com.br/box-de-vidro-zona-oeste" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.fastvidro.com.br/box-de-vidro-zona-oeste" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQ)) }],
  }),
  component: () => (
    <SiteLayout>
      <ZonaBoxPage
        eyebrow="Zona Oeste — São Paulo"
        h1="Instalação de Box de Banheiro na Zona Oeste de SP"
        subtitle="Agilidade na medição e modelos exclusivos de box de vidro temperado na Zona Oeste."
        heroImage={hero}
        bairros={["Pinheiros", "Perdizes", "Lapa", "Vila Madalena", "Alto de Pinheiros", "Pompéia", "Butantã", "Vila Leopoldina", "Jaguaré", "Barra Funda"]}
        intro="A Zona Oeste concentra apartamentos modernos e reformas de estética refinada. A Fast Vidro atende a região com foco em sofisticação: perfis minimalistas, ferragens discretas e o box articulado Flex, ideal para banheiros compactos que exigem aproveitamento inteligente de cada centímetro."
        differentials={[
          { title: "Sofisticação no acabamento", text: "Perfis slim e ferragens em cores especiais para projetos assinados por arquitetos." },
          { title: "Box articulado Flex", text: "Folhas que se dobram para dentro do vão, liberando circulação em banheiros pequenos." },
          { title: "Medição ágil na ZO", text: "Agendamento rápido de visita técnica gratuita em Pinheiros, Lapa, Butantã e região." },
        ]}
        gallery={[
          { src: flexCover, alt: "box-de-vidro-articulado-zona-oeste" },
          { src: flex1, alt: "box-de-vidro-articulado-zona-oeste" },
          { src: flex2, alt: "box-de-vidro-articulado-zona-oeste" },
          { src: eleganceCover, alt: "box-de-vidro-articulado-zona-oeste" },
        ]}
        ctaLabel="Falar com Atendente — Zona Oeste"
        waMessage="Olá! Gostaria de um orçamento de box de vidro para a Zona Oeste."
        faq={FAQ}
      />
    </SiteLayout>
  ),
});
