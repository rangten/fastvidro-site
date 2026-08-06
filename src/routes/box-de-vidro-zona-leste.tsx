import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ZonaBoxPage, faqJsonLd } from "@/components/ZonaBoxPage";
import hero from "@/assets/box-banheiro-hero-real.png";
import tradCover from "@/assets/tradicional-cover.png";
import tradCorrer from "@/assets/tradicional-correr.png";
import tradCanto from "@/assets/tradicional-canto.png";
import pisoTetoCover from "@/assets/piso-teto-cover.png";

const FAQ = [
  { q: "Qual o preço de um box de vidro na Zona Leste?", a: "O valor depende do vão, do modelo e da cor do vidro. Enviamos o orçamento pelo WhatsApp em poucos minutos após as medidas iniciais." },
  { q: "Quais bairros da Zona Leste são atendidos?", a: "Tatuapé, Anália Franco, Mooca, Vila Formosa, Belém, Penha, Vila Prudente, Carrão, Itaquera, Aricanduva e região." },
  { q: "O vidro é certificado?", a: "Sim. Usamos vidro temperado de 8mm certificado, que ao quebrar se fragmenta em pedaços pequenos, reduzindo o risco de corte." },
  { q: "Qual a garantia do box?", a: "Garantia de fabricação e instalação, com assistência técnica direta da Fast Vidro." },
  { q: "Vocês parcelam o pagamento?", a: "Sim, trabalhamos com condições facilitadas de pagamento — consulte pelo WhatsApp." },
];

export const Route = createFileRoute("/box-de-vidro-zona-leste")({
  head: () => ({
    meta: [
      { title: "Box de Vidro para Banheiro na Zona Leste SP | Fast Vidro" },
      { name: "description", content: "Preço justo e instalação rápida de box de vidro para banheiro na Zona Leste SP. Vidro temperado certificado e garantia." },
      { property: "og:title", content: "Box de Vidro para Banheiro na Zona Leste SP | Fast Vidro" },
      { property: "og:description", content: "Box de vidro temperado certificado na Zona Leste de SP, com preço justo, agilidade e garantia." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.fastvidro.com.br/box-de-vidro-zona-leste" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.fastvidro.com.br/box-de-vidro-zona-leste" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQ)) }],
  }),
  component: () => (
    <SiteLayout>
      <ZonaBoxPage
        eyebrow="Zona Leste — São Paulo"
        h1="Box de Vidro para Banheiro na Zona Leste de São Paulo"
        subtitle="Qualidade, segurança e preço direto da fábrica para instalação de box de vidro na Zona Leste."
        heroImage={hero}
        bairros={["Tatuapé", "Anália Franco", "Mooca", "Vila Formosa", "Belém", "Penha", "Vila Prudente", "Carrão", "Itaquera", "Aricanduva"]}
        intro="A Fast Vidro atende a Zona Leste de São Paulo com o melhor custo-benefício em box de banheiro: fabricação própria, vidro temperado de 8mm certificado e agilidade de entrega. Do Tatuapé a Itaquera, nossa equipe faz a medição gratuita e instala com garantia total."
        differentials={[
          { title: "Melhor custo-benefício", text: "Preço direto da fábrica, sem intermediários, com condições facilitadas de pagamento." },
          { title: "Agilidade de entrega", text: "Prazos curtos entre medição, fabricação e instalação em toda a Zona Leste." },
          { title: "Garantia total", text: "Garantia de fabricação e instalação, com suporte técnico rápido pelo WhatsApp." },
        ]}
        gallery={[
          { src: tradCover, alt: "box-de-vidro-sob-medida-zona-leste" },
          { src: tradCorrer, alt: "box-de-vidro-sob-medida-zona-leste" },
          { src: tradCanto, alt: "box-de-vidro-sob-medida-zona-leste" },
          { src: pisoTetoCover, alt: "box-de-vidro-sob-medida-zona-leste" },
        ]}
        ctaLabel="Pedir Orçamento na Zona Leste"
        waMessage="Olá! Gostaria de um orçamento de box de vidro para a Zona Leste."
        faq={FAQ}
      />
    </SiteLayout>
  ),
});
