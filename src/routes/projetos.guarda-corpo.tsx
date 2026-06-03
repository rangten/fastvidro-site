import { createFileRoute } from "@tanstack/react-router";
import { ProjectSeoPage } from "@/components/ProjectSeoPage";
import hero from "@/assets/projeto-guarda-corpo.png.asset.json";

const TITLE = "Guarda-Corpo de Vidro em SP | Torres e Bottons Inox - Fast Vidro";
const DESC = "Instalação de Guarda-Corpo de vidro laminado ou temperado laminado na Zona Norte de SP. Segurança máxima para escadas e sacadas com torres ou bottons de aço inox. Peça já!";

export const Route = createFileRoute("/projetos/guarda-corpo")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: hero.url },
      { property: "og:url", content: "/projetos/guarda-corpo" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/projetos/guarda-corpo" }],
  }),
  component: () => (
    <ProjectSeoPage
      eyebrow="Guarda-Corpo de Vidro"
      h1="Guarda-Corpo de Vidro em São Paulo: Segurança Máxima com Acabamento em Inox"
      heroLead="Projetos seguindo todas as normas técnicas, com vidro laminado e fixação em aço inox para escadas, sacadas e mezaninos."
      heroImage={hero.url}
      heroImageAlt="Guarda-corpo de vidro com bottons inox Fast Vidro"
      benefits={[
        "Vidro laminado ou temperado laminado",
        "Torres e bottons em aço inox 304",
        "Sem perfis pesados travando a vista",
        "Medição digital a laser para prumo impecável",
      ]}
      paragraphs={[
        <>Quando o assunto é proteção em alturas, a engenharia não pode falhar. A Fast Vidro é especialista em projetos e instalação de <strong>guarda-corpo de vidro na Zona Norte de São Paulo</strong> e demais regiões, seguindo rigorosamente todas as normas técnicas de segurança para escadas, mezaninos, sacadas e coberturas.</>,
        <>Para garantir total estabilidade estrutural e proteção contra quedas, nossos projetos utilizam exclusivamente <strong>vidro laminado ou vidro temperado laminado</strong>, que mantêm os fragmentos presos em caso de quebra extrema. A fixação é feita com sistemas nobres de alta resistência mecânica, utilizando <strong>torres ou bottons de aço inox</strong>, que não enferrujam e conferem um visual clean e sofisticado, sem a necessidade de perfis pesados de alumínio travando a vista.</>,
        <>Conte com nossa medição técnica digital a laser para um prumo impecável. Atendemos condomínios e residências em Santana, Tucuruvi, Tremembé, Mandaqui e toda a capital paulista.</>,
      ]}
      waMessage="Olá! Quero um orçamento de guarda-corpo de vidro com a Fast Vidro."
    />
  ),
});
