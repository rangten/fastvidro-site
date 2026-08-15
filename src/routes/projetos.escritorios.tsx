import { createFileRoute } from "@tanstack/react-router";
import { ProjectSeoPage } from "@/components/ProjectSeoPage";
import hero from "@/assets/escritorio-interior.webp";

const TITLE = "Divisórias de Vidro para Escritório em SP | Fast Vidro";
const DESC = "Otimize seu espaço corporativo com divisórias de vidro para escritórios na Zona Norte de SP. Soluções acústicas para salas de reunião e ambientes integrados. Peça orçamento!";

export const Route = createFileRoute("/projetos/escritorios")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: hero },
      { property: "og:url", content: "/projetos/escritorios" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/projetos/escritorios" }],
  }),
  component: () => (
    <ProjectSeoPage
      eyebrow="Divisórias de Escritório"
      h1="Divisórias de Vidro para Escritórios em São Paulo: Modernidade e Acústica Corporativa"
      heroLead="Ambiente de trabalho integrado, iluminado e privativo com divisórias de vidro instaladas em toda a capital paulista."
      heroImage={hero}
      heroImageAlt="Divisória de vidro para escritório Fast Vidro"
      benefits={[
        "Isolamento acústico com passagem de luz natural",
        "Portas Versatik de correr ou de giro",
        "Vidros jateados e películas para privacidade",
        "Instalação limpa e rápida por equipe própria",
      ]}
      paragraphs={[
        <>Para empresas que buscam um ambiente de trabalho integrado, iluminado e ao mesmo tempo privativo, as <strong>divisórias de vidro para escritórios</strong> são a solução perfeita. A Fast Vidro é a sua grande parceira em soluções corporativas, com ampla experiência na <strong>Zona Norte de São Paulo</strong> e atendimento técnico especializado em toda a capital paulista.</>,
        <>As nossas divisórias são projetadas para criar salas de reunião executivas, escritórios de diretoria e estações de trabalho dinâmicas. Elas oferecem excelente isolamento acústico sem bloquear a passagem de luz natural, mantendo a sensação de amplitude e a sinergia entre as equipes. Podem ser instaladas com sistemas de portas de correr (como o sistema Versatik) ou portas de giro tradicionais, utilizando vidros temperados, laminados, jateados ou com películas decorativas para total privacidade.</>,
        <>Nossa instalação é limpa, rápida e realizada por equipe própria em bairros como Santana, Parada Inglesa, Casa Verde, Mandaqui e zonas empresariais de SP.</>,
      ]}
      waMessage="Olá! Quero um orçamento de divisórias de vidro para escritório com a Fast Vidro."
    />
  ),
});
