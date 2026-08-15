import { createFileRoute } from "@tanstack/react-router";
import { PortaSeoPage } from "@/components/PortaSeoPage";
import img from "@/assets/porta-correr.webp";

const TITLE = "Porta de Correr de Vidro em SP | Divisória de Ambientes - Fast Vidro";
const DESC = "Otimize seu espaço com a Porta de Correr de Vidro na Zona Norte de SP. Deslizamento suave sobre trilhos para integrar ou dividir salas e cozinhas. Peça seu orçamento!";

export const Route = createFileRoute("/portas-de-vidro/correr")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/portas-de-vidro/correr" },
      { property: "og:image", content: img },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/portas-de-vidro/correr" }],
  }),
  component: () => (
    <PortaSeoPage
      eyebrow="Porta de Correr"
      h1="Porta de Correr em São Paulo: Economia de Espaço e Integração Moderna"
      heroLead="Porta tradicional de correr com deslizamento suave e silencioso, perfeita para integrar ambientes residenciais e comerciais."
      heroImage={img}
      heroImageAlt="Porta tradicional de correr em vidro - Fast Vidro"
      waMessage="Olá! Quero um orçamento para a Porta de Correr com a Fast Vidro."
      benefits={[
        "Deslizamento suave e silencioso",
        "Vidro temperado de alta resistência",
        "Design clássico e versátil",
        "Mais transparência e iluminação",
        "Instalação simples e rápida",
      ]}
      paragraphs={[
        <>A <strong>Porta de Correr de Vidro</strong> é a solução campeã de vendas para quem deseja otimizar a área útil de imóveis residenciais e comerciais. A Fast Vidro é líder nesse segmento, consolidada como a vidraçaria especialista na <strong>Zona Norte de São Paulo</strong> e referência em projetos sob medida por toda a capital paulista.</>,
        <>O funcionamento deste modelo baseia-se em folhas de vidro que correm lateralmente em trilhos discretos de alumínio, não ocupando espaço precioso para fora ou para dentro do cômodo. É a opção ideal para integrar a sala de estar à varanda, dividir a cozinha da lavanderia ou isolar closets com leveza e sofisticação, permitindo que a luz natural circule livremente por todo o imóvel.</>,
        <>Nossos perfis de alumínio possuem pintura eletrostática de alta durabilidade (nas cores Preto, Branco e Cromado) e roldanas blindadas que evitam travamentos. Solicite um técnico especialista para medição detalhada no Tucuruvi, Santana, Vila Guilherme ou qualquer outra região.</>,
      ]}
    />
  ),
});
