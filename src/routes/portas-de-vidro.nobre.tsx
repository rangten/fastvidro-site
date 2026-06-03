import { createFileRoute } from "@tanstack/react-router";
import { PortaSeoPage } from "@/components/PortaSeoPage";
import img from "@/assets/porta-nobre.png.asset.json";

const TITLE = "Porta Nobre com Amortecedor em SP | Alumínio Reforçado - Fast Vidro";
const DESC = "Procurando Porta Nobre com sistema de amortecimento duplo na Zona Norte de SP? Conheça o modelo premium com perfis robustos para fechamentos e divisórias. Peça seu orçamento!";

export const Route = createFileRoute("/portas-de-vidro/nobre")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/portas-de-vidro/nobre" },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/portas-de-vidro/nobre" }],
  }),
  component: () => (
    <PortaSeoPage
      eyebrow="Porta Nobre"
      h1="Porta Nobre em São Paulo: Robustez e Sistema Antimpacto Premium"
      heroLead="Sistema de porta deslizante com amortecedores duplos e segurança reforçada — alumínio robusto para divisórias e fechamentos amplos."
      heroImage={img.url}
      heroImageAlt="Porta Nobre com amortecedor e alumínio reforçado - Fast Vidro"
      waMessage="Olá! Quero um orçamento para a Porta Nobre com a Fast Vidro."
      benefits={[
        "Design nobre e exclusivo",
        "Amortecedores na abertura e fechamento (evita batidas)",
        "Vidro laminado de 8mm para máxima resistência",
        "Acabamento premium e alta durabilidade",
        "Disponível em Preto, Branco e Cromado",
      ]}
      paragraphs={[
        <>Para quem exige o máximo de estabilidade estrutural e proteção em vãos amplos, a Fast Vidro traz a legítima <strong>Porta Nobre</strong>. Desenvolvida com a tecnologia de ponta da Ideia Glass, somos especialistas em aplicar essa solução de alto padrão na <strong>Zona Norte de São Paulo</strong> e em toda a região metropolitana.</>,
        <>O maior diferencial da Porta Nobre é o seu <strong>sistema de amortecimento duplo</strong> (na abertura e no fechamento). Esse mecanismo impede batidas bruscas, garantindo que o vidro deslize de forma controlada e segura, ideal para casas com crianças. Suas paredes de alumínio são significativamente mais espessas que o padrão de mercado, conferindo uma resistência mecânica sem igual para fechamentos de áreas externas, divisórias de salas e vãos de grande porte.</>,
        <>Disponível em acabamentos incríveis como Preto, Branco e Cromado. Conte com nossa equipe técnica qualificada para uma instalação perfeita em Santana, Vila Maria, Tremembé e demais zonas de SP.</>,
      ]}
    />
  ),
});
