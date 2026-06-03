import { createFileRoute } from "@tanstack/react-router";
import { PortaSeoPage } from "@/components/PortaSeoPage";
import img from "@/assets/porta-versatik.png";

const TITLE = "Porta Versatik em SP | Sistema de Portas Simultâneas - Fast Vidro";
const DESC = "Conheça a Porta Versatik na Zona Norte de SP. Tecnologia de engenharia que move várias folhas de vidro ao mesmo tempo, liberando vãos gigantes. Peça orçamento!";

export const Route = createFileRoute("/portas-de-vidro/versatik")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/portas-de-vidro/versatik" },
      { property: "og:image", content: img },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/portas-de-vidro/versatik" }],
  }),
  component: () => (
    <PortaSeoPage
      eyebrow="Porta Versatik"
      h1="Porta Versatik em São Paulo: Engenharia Inteligente para Vãos Amplos"
      heroLead="Sistema com tração simultânea — várias folhas deslizam juntas, liberando até 2/3 do vão com um único movimento."
      heroImage={img}
      heroImageAlt="Porta Versatik com abertura simultânea - Fast Vidro"
      waMessage="Olá! Quero um orçamento para a Porta Versatik com a Fast Vidro."
      benefits={[
        "Abertura de até 2/3 do vão",
        "Vidro temperado de alta resistência",
        "Design moderno e versátil",
        "Deslizamento suave e silencioso",
        "Instalação simples e rápida",
      ]}
      paragraphs={[
        <>Para projetos modernos que possuem grandes vãos de parede e exigem uma abertura generosa sem acumular folhas fixas pesadas, a Fast Vidro apresenta a inovadora <strong>Porta Versatik</strong>. Somos a sua vidraçaria de confiança na <strong>Zona Norte de São Paulo</strong>, trazendo tecnologia de ponta para toda a capital paulista.</>,
        <>O sistema Versatik é uma verdadeira obra-prima da engenharia de vidros: através de um mecanismo de tração simultânea, <strong>ao mover a primeira porta de correr, as outras folhas móveis deslizam juntas de forma sincronizada</strong>. Isso permite o fechamento ou a abertura de grandes vãos com um único movimento suave, liberando até 2/3 de passagem livre. É o modelo perfeito para fechamentos de varandas integradas, divisórias de grandes escritórios e acessos a áreas de lazer.</>,
        <>Utilizando perfis robustos e vidros temperados com alto padrão de segurança, a Porta Versatik oferece isolamento acústico superior e estabilidade incomparável contra ventos e impactos. Garanta a melhor instalação em Santana, Parada Inglesa, Casa Verde e toda a grande SP.</>,
      ]}
    />
  ),
});
