import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ZonaBoxPage, faqJsonLd } from "@/components/ZonaBoxPage";
import hero from "@/assets/box-banheiro-hero-real.png";
import flexCover from "@/assets/flex-cover.png";
import pisoTetoCover from "@/assets/piso-teto-cover.png";
import tradCover from "@/assets/tradicional-cover.png";
import eleganceCover from "@/assets/elegance-cover.png";

const FAQ = [
  { q: "Vocês instalam box de vidro em toda a Zona Norte?", a: "Sim. Atendemos Santana, Tucuruvi, Mandaqui, Tremembé, Jaçanã, Vila Maria, Vila Guilherme, Imirim, Casa Verde, Cachoeirinha e bairros vizinhos com equipe própria." },
  { q: "A medição na Zona Norte é gratuita?", a: "Sim, a visita técnica para medição é sem custo e sem compromisso em toda a Zona Norte de São Paulo." },
  { q: "Qual o prazo de instalação?", a: "Após a medição e aprovação do orçamento, a fabricação e instalação costumam ocorrer em poucos dias úteis, com agendamento ágil na região." },
  { q: "Qual a espessura do vidro utilizado?", a: "Trabalhamos com vidro temperado de 8mm certificado, com ferragens cromadas de alta durabilidade." },
  { q: "Vocês emitem garantia?", a: "Sim. Todos os boxes têm garantia de fabricação e de instalação, com suporte técnico direto pelo WhatsApp." },
];

export const Route = createFileRoute("/box-de-vidro-zona-norte")({
  head: () => ({
    meta: [
      { title: "Box de Vidro para Banheiro na Zona Norte SP | Fast Vidro" },
      { name: "description", content: "Fabricação e instalação rápida de box de banheiro na Zona Norte de SP. Vidro temperado 8mm com medição grátis e entrega agilizada." },
      { property: "og:title", content: "Box de Vidro para Banheiro na Zona Norte SP | Fast Vidro" },
      { property: "og:description", content: "Box de banheiro em vidro temperado 8mm na Zona Norte de SP. Medição grátis e instalação rápida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.fastvidro.com.br/box-de-vidro-zona-norte" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.fastvidro.com.br/box-de-vidro-zona-norte" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQ)) }],
  }),
  component: () => (
    <SiteLayout>
      <ZonaBoxPage
        eyebrow="Zona Norte — São Paulo"
        h1="Box de Banheiro Sob Medida na Zona Norte de São Paulo"
        subtitle="Atendimento expresso, medição rápida e instalação de box de vidro temperado na Zona Norte."
        heroImage={hero}
        bairros={["Santana", "Tucuruvi", "Mandaqui", "Tremembé", "Jaçanã", "Vila Maria", "Vila Guilherme", "Imirim", "Casa Verde", "Vila Nova Cachoeirinha", "Parada Inglesa", "Freguesia do Ó"]}
        intro="A Fast Vidro é especialista em box de banheiro sob medida na Zona Norte de São Paulo. Com equipe técnica dedicada à região, fazemos medição digital precisa, fabricação em vidro temperado de 8mm certificado e instalação limpa e rápida — ideal para apartamentos e casas dos bairros da ZN."
        differentials={[
          { title: "Equipe técnica dedicada à ZN", text: "Instaladores que atendem exclusivamente a Zona Norte, com agenda rápida e deslocamento curto." },
          { title: "Medição sem custo", text: "Visita técnica gratuita para conferir prumo, nível e vão real antes de fabricar." },
          { title: "Entrega agilizada", text: "Fabricação própria e logística otimizada para reduzir o prazo entre a medição e a instalação." },
        ]}
        gallery={[
          { src: flexCover, alt: "box-de-vidro-temperado-zona-norte" },
          { src: pisoTetoCover, alt: "box-de-vidro-temperado-zona-norte" },
          { src: tradCover, alt: "box-de-vidro-temperado-zona-norte" },
          { src: eleganceCover, alt: "box-de-vidro-temperado-zona-norte" },
        ]}
        ctaLabel="Orçamento Rápido para a Zona Norte"
        waMessage="Olá! Gostaria de um orçamento de box de vidro para a Zona Norte."
        faq={FAQ}
      />
    </SiteLayout>
  ),
});
