import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ZonaBoxPage, faqJsonLd } from "@/components/ZonaBoxPage";
import hero from "@/assets/box-banheiro-hero-real.png";
import eleganceCover from "@/assets/elegance-cover.png";
import elegance1 from "@/assets/elegance-1.png";
import pisoTetoCover from "@/assets/piso-teto-cover.png";
import nobreCover from "@/assets/nobre-cover.png";

const FAQ = [
  { q: "Vocês atendem apartamentos na Zona Sul?", a: "Sim. Boa parte dos nossos projetos na Zona Sul é em apartamentos, com fechamento de vãos sob medida e ferragens de acabamento premium." },
  { q: "Quais bairros da Zona Sul são atendidos?", a: "Moema, Vila Mariana, Campo Belo, Brooklin, Santo Amaro, Morumbi, Ipiranga, Jabaquara, Saúde, Vila Mascote e adjacências." },
  { q: "O box com roldanas aparentes é mais caro?", a: "O modelo Elegance, com roldanas aparentes em inox, tem valor superior ao tradicional, mas entrega deslizamento silencioso e visual sofisticado." },
  { q: "Como funciona a vedação do box?", a: "Utilizamos borrachas de vedação de alta performance e perfis alinhados ao vão real medido em obra, evitando vazamento de água." },
  { q: "Vocês trabalham com condomínios?", a: "Sim, seguimos as regras de horário e acesso de cada condomínio da Zona Sul, com instalação limpa e organizada." },
];

export const Route = createFileRoute("/box-de-vidro-zona-sul")({
  head: () => ({
    meta: [
      { title: "Box de Vidro para Banheiro na Zona Sul SP | Fast Vidro" },
      { name: "description", content: "Vidraçaria especialista em box de banheiro na Zona Sul de SP. Modelos elegantes sob medida, alta vedação e instalação rápida." },
      { property: "og:title", content: "Box de Vidro para Banheiro na Zona Sul SP | Fast Vidro" },
      { property: "og:description", content: "Box de banheiro sob medida na Zona Sul de SP: modelos elegantes, alta vedação e instalação rápida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.fastvidro.com.br/box-de-vidro-zona-sul" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.fastvidro.com.br/box-de-vidro-zona-sul" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQ)) }],
  }),
  component: () => (
    <SiteLayout>
      <ZonaBoxPage
        eyebrow="Zona Sul — São Paulo"
        h1="Box de Banheiro de Vidro Temperado na Zona Sul"
        subtitle="Soluções modernas de box de vidro para residências e apartamentos na Zona Sul com acabamento impecável."
        heroImage={hero}
        bairros={["Moema", "Vila Mariana", "Campo Belo", "Brooklin", "Santo Amaro", "Morumbi", "Ipiranga", "Jabaquara", "Saúde", "Vila Mascote"]}
        intro="Na Zona Sul de São Paulo, a Fast Vidro executa projetos de box de banheiro voltados a apartamentos e residências de alto padrão: fechamento de vãos sob medida, roldanas aparentes em inox, perfis de linhas retas e vedação de alta performance. Cada projeto é medido em obra e fabricado em vidro temperado de 8mm."
        differentials={[
          { title: "Projetos para apartamentos", text: "Aproveitamento máximo de banheiros compactos e vãos irregulares típicos de prédios da ZS." },
          { title: "Fechamento de vãos sob medida", text: "Cada peça é cortada conforme a medição real, garantindo alinhamento perfeito e vedação total." },
          { title: "Roldanas aparentes premium", text: "Sistema Elegance em aço inox, com deslizamento silencioso e estética contemporânea." },
        ]}
        gallery={[
          { src: eleganceCover, alt: "instalacao-box-de-banheiro-zona-sul" },
          { src: elegance1, alt: "instalacao-box-de-banheiro-zona-sul" },
          { src: pisoTetoCover, alt: "instalacao-box-de-banheiro-zona-sul" },
          { src: nobreCover, alt: "instalacao-box-de-banheiro-zona-sul" },
        ]}
        ctaLabel="Solicitar Orçamento na Zona Sul"
        waMessage="Olá! Gostaria de um orçamento de box de vidro para a Zona Sul."
        faq={FAQ}
      />
    </SiteLayout>
  ),
});
