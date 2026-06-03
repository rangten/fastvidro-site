import { createFileRoute } from "@tanstack/react-router";
import { ProjectSeoPage } from "@/components/ProjectSeoPage";
import hero from "@/assets/projeto-coberturas.png";

const TITLE = "Cobertura de Vidro em SP | Vidro Laminado Estrutural - Fast Vidro";
const DESC = "Projetos de coberturas de vidro laminado na Zona Norte de SP. Iluminação natural com segurança e proteção térmica para garagens, corredores e áreas gourmet. Peça orçamento!";

export const Route = createFileRoute("/projetos/coberturas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: hero },
      { property: "og:url", content: "/projetos/coberturas" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/projetos/coberturas" }],
  }),
  component: () => (
    <ProjectSeoPage
      eyebrow="Coberturas de Vidro"
      h1="Coberturas de Vidro em São Paulo: Iluminação Natural com Engenharia de Alta Resistência"
      heroLead="Estruturas envidraçadas em vidro laminado para garagens, jardins, pergolados e áreas gourmet, com total segurança."
      heroImage={hero}
      heroImageAlt="Cobertura de vidro laminado Fast Vidro"
      benefits={[
        "Vidro laminado obrigatório para sobre cabeças",
        "Estruturas em alumínio ou aço tratado",
        "Opções com vidro de controle solar (refletivo)",
        "Ideal para garagens, pergolados e áreas gourmet",
      ]}
      paragraphs={[
        <>Para cobrir áreas externas sem perder a luminosidade natural do dia e a beleza do céu, a <strong>cobertura de vidro</strong> é a solução arquitetônica mais elegante do mercado. A Fast Vidro projeta e instala estruturas metálicas e envidraçadas com foco em segurança total na <strong>Zona Norte de São Paulo</strong> e em todas as zonas da cidade.</>,
        <>Seguindo rigorosamente as normas de segurança para envidraçamento sobre cabeças, todas as nossas coberturas são fabricadas obrigatoriamente com <strong>vidro laminado</strong>. Essa tecnologia de engenharia garante que, em caso de impacto por queda de objetos, o vidro trinque mas permaneça totalmente preso à película interna, evitando acidentes na área abaixo. É a escolha ideal para coberturas de garagens, corredores laterais, jardins de inverno, pergolados e áreas gourmet residenciais ou comerciais.</>,
        <>Trabalhamos com estruturas de alumínio com pintura eletrostática ou aço tratado, além de opções de vidros com controle solar (refletivos) para reduzir o calor. Solicite a visita técnica da nossa equipe no Tucuruvi, Santana, Casa Verde, Mandaqui ou qualquer bairro de SP.</>,
      ]}
      waMessage="Olá! Quero um orçamento de cobertura de vidro com a Fast Vidro."
    />
  ),
});
