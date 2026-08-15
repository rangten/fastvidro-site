import { createFileRoute } from "@tanstack/react-router";
import { ProjectSeoPage } from "@/components/ProjectSeoPage";
import hero from "@/assets/projeto-fechamento-sacada.webp";

const TITLE = "Fechamento de Sacada em SP | Envidraçamento de Sacadas - Fast Vidro";
const DESC = "Ganhe um novo ambiente com o fechamento de sacada na Zona Norte de SP. Envidraçamento retrátil articulado com vedação total contra chuva, vento e poeira. Peça seu orçamento!";

export const Route = createFileRoute("/projetos/fechamento-sacada")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: hero },
      { property: "og:url", content: "/projetos/fechamento-sacada" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/projetos/fechamento-sacada" }],
  }),
  component: () => (
    <ProjectSeoPage
      eyebrow="Fechamento de Sacada"
      h1="Fechamento de Sacada em São Paulo: Proteção, Conforto e Valorização do Seu Imóvel"
      heroLead="Sistemas retráteis articulados para edifícios residenciais em toda a capital, com vedação contra ventos, chuva e poluição."
      heroImage={hero}
      heroImageAlt="Fechamento de sacada com vidro retrátil Fast Vidro"
      benefits={[
        "Folhas que deslizam e articulam no canto",
        "Vedação total contra chuva, vento e poeira",
        "Redução do ruído urbano",
        "Roldanas blindadas e travas de segurança",
      ]}
      paragraphs={[
        <>O envidraçamento de áreas externas é a melhor forma de proteger o seu apartamento e ganhar um novo espaço de convivência integrado. A Fast Vidro é referência absoluta em <strong>fechamento de sacada na Zona Norte de São Paulo</strong>, oferecendo sistemas retráteis de alta performance para edifícios residenciais em toda a capital.</>,
        <>Nosso sistema de fechamento permite a abertura total ou parcial das folhas de vidro, que deslizam suavemente e se articulam em um canto da parede (sistema de folha giratória). Esse projeto garante <strong>vedação total contra ventos fortes, chuvas pesadas, poluição e poeira</strong>, além de proporcionar uma excelente redução do ruído externo da cidade. Utilizamos vidros laminados ou temperados de alta espessura com roldanas blindadas de rolamento suave e travas de segurança robustas.</>,
        <>Atendemos com agilidade e projetos sob medida aprovados pelas normas dos condomínios em Santana, Tucuruvi, Jardim São Paulo, Vila Maria e demais regiões paulistas.</>,
      ]}
      waMessage="Olá! Quero um orçamento de fechamento de sacada com a Fast Vidro."
    />
  ),
});
