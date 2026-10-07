import { createFileRoute } from "@tanstack/react-router";
import { PortaSeoPage } from "@/components/PortaSeoPage";
import img from "@/assets/porta-3-folhas-galeria-1.webp";
import gallery2 from "@/assets/porta-3-folhas-galeria-2.webp";
import gallery3 from "@/assets/porta-3-folhas-galeria-3.webp";
import gallery4 from "@/assets/porta-3-folhas-galeria-4.webp";

const TITLE = "Porta 3 Folhas em SP | Duas Folhas Móveis e Uma Fixa - Fast Vidro";
const DESC = "Porta 3 Folhas sob medida em São Paulo, com duas folhas móveis e uma fixa. Vidro temperado, passagem ampliada e deslize suave. Peça seu orçamento!";

export const Route = createFileRoute("/portas-de-vidro/versatik")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://www.fastvidro.com.br/portas-de-vidro/versatik" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.fastvidro.com.br/portas-de-vidro/versatik" }],
  }),
  component: () => (
    <PortaSeoPage
      eyebrow="Porta 3 Folhas"
      h1="Porta 3 Folhas em São Paulo: Mais Abertura e Integração de Ambientes"
      heroLead="Duas folhas móveis e uma fixa em vidro temperado, com passagem ampliada e deslizamento suave para integrar seus ambientes."
      heroImage={img}
      heroImageAlt="Porta 3 Folhas em vidro transparente entre cozinha e lavanderia — Fast Vidro"
      waMessage="Olá! Quero um orçamento para a Porta 3 Folhas com a Fast Vidro."
      gallery={[
        { src: img, alt: "Porta 3 Folhas transparente entre cozinha e lavanderia", width: 899, height: 1200 },
        { src: gallery2, alt: "Porta 3 Folhas em vidro transparente integrando sala e área externa", width: 901, height: 1200 },
        { src: gallery3, alt: "Porta 3 Folhas com privacidade em cozinha planejada", width: 899, height: 1200 },
        { src: gallery4, alt: "Porta 3 Folhas com acabamento moderno em cozinha", width: 900, height: 1200 },
      ]}
      benefits={[
        "Abertura de até 2/3 do vão",
        "Vidro temperado de alta resistência",
        "Design moderno e versátil",
        "Deslizamento suave e silencioso",
        "Instalação simples e rápida",
      ]}
      paragraphs={[
        <>A <strong>Porta 3 Folhas</strong> da Fast Vidro integra ambientes com luz natural e aproveitamento do espaço. Com fabricação sob medida, atende cozinhas, lavanderias, salas e acessos a áreas externas na <strong>Zona Norte de São Paulo</strong> e em toda a capital.</>,
        <>O conjunto utiliza <strong>duas folhas móveis e uma fixa</strong>. As folhas móveis se recolhem junto à folha fixa, ampliando a passagem e liberando até 2/3 do vão. O deslizamento suave torna a abertura prática no dia a dia, com acabamento moderno e elegante.</>,
        <>Produzida com vidro temperado de alta resistência e perfis adequados ao projeto, a Porta 3 Folhas combina segurança e funcionalidade. Solicite medição e instalação em Santana, Parada Inglesa, Casa Verde e toda a grande SP.</>,
      ]}
    />
  ),
});
