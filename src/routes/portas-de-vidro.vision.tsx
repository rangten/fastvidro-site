import { createFileRoute } from "@tanstack/react-router";
import { PortaSeoPage } from "@/components/PortaSeoPage";
import img from "@/assets/porta-vision.webp";

const TITLE = "Porta Vision em SP | Engenharia de Roldanas Aparentes - Fast Vidro";
const DESC = "Conheça a Porta Vision com roldanas aparentes de alta performance na Zona Norte de SP. Design inovador e deslizamento ultra suave para divisões de ambientes. Peça orçamento!";

export const Route = createFileRoute("/portas-de-vidro/vision")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/portas-de-vidro/vision" },
      { property: "og:image", content: img },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/portas-de-vidro/vision" }],
  }),
  component: () => (
    <PortaSeoPage
      eyebrow="Porta Vision"
      h1="Porta Vision em São Paulo: Sofisticação com Engenharia de Roldanas Aparentes"
      heroLead="Sistema deslizante com roldanas aparentes de alto desempenho, vidro temperado e design minimalista para integrar ambientes com sofisticação."
      heroImage={img}
      heroImageAlt="Porta Vision com roldanas aparentes - Fast Vidro"
      waMessage="Olá! Quero um orçamento para a Porta Vision com a Fast Vidro."
      benefits={[
        "Design moderno e exclusivo com roldanas aparentes",
        "Roldanas aparentes de alto desempenho",
        "Vidro temperado de alta segurança",
        "Acabamento premium e durável",
        "Versatilidade e ganho de espaço",
      ]}
      paragraphs={[
        <>Se você busca um divisor de ambientes que seja o verdadeiro destaque da sua arquitetura, a Fast Vidro apresenta a <strong>Porta Vision</strong>. Sendo a sua vidraçaria referência em projetos de alto padrão e especialista em <strong>instalação na Zona Norte de São Paulo</strong> e demais regiões da capital, trazemos este sistema inovador de roldanas aparentes para portas de passagem.</>,
        <>O grande diferencial da Porta Vision está na sua mecânica leve e minimalista. O vidro temperado desliza com suavidade absoluta sobre um trilho superior robusto, deixando os rolamentos nobres totalmente à mostra. É perfeita para integrar salas, cozinhas, escritórios e lavanderias, garantindo amplitude visual, excelente isolamento e um design industrial moderno.</>,
        <>Produzida sob medida com vidro de 8mm ou 10mm, oferece segurança mecânica máxima. Atendemos com agilidade bairros como Santana, Tucuruvi, Mandaqui, Casa Verde e toda a capital paulista com medição a laser e vedação impecável.</>,
      ]}
    />
  ),
});
