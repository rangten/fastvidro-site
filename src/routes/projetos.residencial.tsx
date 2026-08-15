import { createFileRoute } from "@tanstack/react-router";
import { ProjectSeoPage } from "@/components/ProjectSeoPage";
import hero from "@/assets/projeto-residencial.webp";

const TITLE = "Projetos Residenciais em Vidro em SP | Sob Medida - Fast Vidro";
const DESC = "Engenharia em vidros para projetos residenciais na Zona Norte de SP. Instalação sob medida de portas, janelas, escadas, guarda-corpo, espelhos e coberturas. Peça seu orçamento!";

export const Route = createFileRoute("/projetos/residencial")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: hero },
      { property: "og:url", content: "/projetos/residencial" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/projetos/residencial" }],
  }),
  component: () => (
    <ProjectSeoPage
      eyebrow="Projetos Residenciais"
      h1="Projetos Residenciais de Vidro em São Paulo: Sofisticação para o Seu Lar"
      heroLead="Vidraçaria referência em projetos residenciais na Zona Norte de SP, com atendimento em toda a capital."
      heroImage={hero}
      heroImageAlt="Projeto residencial em vidro Fast Vidro"
      benefits={[
        "Portas, janelas e escadas sob medida",
        "Guarda-corpo, espelhos e coberturas",
        "Vidros temperados e laminados certificados",
        "Atendimento em toda Zona Norte e Grande SP",
      ]}
      paragraphs={[
        <>Se você está construindo ou reformando e busca o que há de mais moderno em engenharia de vidros para a sua casa, a Fast Vidro é a sua escolha definitiva. Somos a vidraçaria referência em <strong>projetos residenciais na Zona Norte de São Paulo</strong> e atendemos com excelência toda a capital paulista, transformando ambientes com segurança, amplitude e muito design.</>,
        <>Nosso catálogo residencial é completo e focado em soluções sob medida. Desenvolvemos e instalamos <strong>portas de vidro</strong> (de correr, de abrir ou articuladas), <strong>janelas de vidro temperado</strong> de alta acústica, revestimentos estruturais para <strong>escadas de vidro</strong>, sistemas integrados de <strong>guarda-corpo</strong>, além de toda a linha de <strong>espelhos</strong> (orgânicos, bisotê, lapidados e painéis de parede) e <strong>coberturas de vidro</strong>. Seja para integrar a sua sala gourmet à área externa ou para garantir a segurança dos dormitórios, trabalhamos com vidros certificados das melhores marcas.</>,
        <>Garantimos atendimento ágil e medição digital a laser em bairros como Santana, Tucuruvi, Mandaqui, Casa Verde, Jardim São Paulo e demais zonas de SP. Fale conosco e traga seu projeto!</>,
      ]}
      waMessage="Olá! Quero um orçamento para projeto residencial em vidro com a Fast Vidro."
    />
  ),
});
