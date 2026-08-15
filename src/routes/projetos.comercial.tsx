import { createFileRoute } from "@tanstack/react-router";
import { ProjectSeoPage } from "@/components/ProjectSeoPage";
import hero from "@/assets/comercial-interior.webp";

const TITLE = "Vidraçaria para Projetos Comerciais em SP | Vitrines - Fast Vidro";
const DESC = "Especialista em projetos comerciais na Zona Norte de SP. Instalação de vitrines de lojas, portas de vidro temperado e janelas institucionais de alta resistência. Solicite orçamento!";

export const Route = createFileRoute("/projetos/comercial")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: hero },
      { property: "og:url", content: "/projetos/comercial" },
      { property: "og:type", content: "product" },
    ],
    links: [{ rel: "canonical", href: "/projetos/comercial" }],
  }),
  component: () => (
    <ProjectSeoPage
      eyebrow="Projetos Comerciais"
      h1="Projetos Comerciais em Vidro em São Paulo: Impacto Visual para o Seu Negócio"
      heroLead="Soluções robustas e seguras em vidro para comércios, lojas de shopping e prédios empresariais em toda a Grande SP."
      heroImage={hero}
      heroImageAlt="Projeto comercial em vidro Fast Vidro"
      benefits={[
        "Vitrines de grande porte e alta transparência",
        "Portas com mola hidráulica de piso",
        "Janelas estruturais reforçadas",
        "Vidros temperados e laminados antiarrombamento",
      ]}
      paragraphs={[
        <>A fachada e o visual interno da sua empresa são cartões de visita cruciais para atrair clientes. A Fast Vidro projeta e executa <strong>projetos comerciais em vidro na Zona Norte de São Paulo</strong> e em toda a região metropolitana, oferecendo soluções robustas, seguras e com estética corporativa de alto padrão para comércios, lojas de shopping e prédios empresariais.</>,
        <>Somos especialistas na fabricação e montagem de <strong>vitrines de vidro</strong> de grande porte com máxima transparência e segurança, além de <strong>portas de vidro</strong> com molas hidráulicas de piso (ideais para alto fluxo de passagem) e <strong>janelas</strong> estruturais em alumínio reforçado. Trabalhamos com vidros temperados e laminados de espessuras robustas, garantindo isolamento térmico, proteção acústica e alta resistência contra impactos e tentativas de arrombamento.</>,
        <>Atendemos com total pontualidade e cumprimento rigoroso de prazos em bairros como Santana, Vila Maria, Vila Guilherme, Tucuruvi e polos comerciais de toda a grande São Paulo.</>,
      ]}
      waMessage="Olá! Quero um orçamento para projeto comercial em vidro com a Fast Vidro."
    />
  ),
});
