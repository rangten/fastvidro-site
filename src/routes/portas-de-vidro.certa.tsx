import { createFileRoute } from "@tanstack/react-router";
import { PortaSeoPage } from "@/components/PortaSeoPage";
import img from "@/assets/porta-certa.webp";

const TITLE = "Porta Certa em SP | Abertura Total em 180° - Fast Vidro";
const DESC = "Otimize espaço com a Porta Certa na Zona Norte de SP. O único sistema de giro que abre 180 graus para os dois lados, ideal para passagens compactas. Peça já seu orçamento!";

export const Route = createFileRoute("/portas-de-vidro/certa")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/portas-de-vidro/certa" },
      { property: "og:image", content: img },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/portas-de-vidro/certa" }],
  }),
  component: () => (
    <PortaSeoPage
      eyebrow="Porta Certa"
      h1="Porta Certa em São Paulo: Praticidade e Abertura Total em 180°"
      heroLead="Sistema de porta de giro com dobradiça oculta e abertura para os dois lados — design inovador para passagens compactas."
      heroImage={img}
      heroImageAlt="Porta Certa com abertura 180 graus - Fast Vidro"
      waMessage="Olá! Quero um orçamento para a Porta Certa com a Fast Vidro."
      benefits={[
        "Design inovador e sofisticado",
        "Dobradiça oculta (pivotante) para visual limpo",
        "Abertura total em 180° para os dois lados",
        "Vidro temperado de alta resistência",
        "Acabamento premium e alta durabilidade",
      ]}
      paragraphs={[
        <>Se você tem um vão de passagem onde cada centímetro importa e as portas tradicionais travam a circulação, a Fast Vidro tem a resposta ideal. A <strong>Porta Certa</strong> é uma exclusividade de engenharia que elimina as limitações de espaço, com instalação ágil em toda a <strong>Zona Norte de São Paulo</strong> e demais regiões da capital.</>,
        <>O grande segredo da Porta Certa está em suas dobradiças especiais que permitem a <strong>abertura total em 180 graus para os dois lados</strong> (tanto para dentro quanto para fora). Quando aberta, ela fica totalmente rente à parede, liberando 100% da passagem livre do vão. É o modelo mais inteligente do mercado para cozinhas compactas, corredores, lavanderias residenciais ou escritórios comerciais que precisam otimizar espaço com total elegância.</>,
        <>Fabricada sob medida com vidro temperado de alta segurança, garante excelente vedação e trincos ergonômicos. Atendemos com precisão técnica em bairros como Tucuruvi, Parada Inglesa, Vila Guilherme e toda a capital.</>,
      ]}
    />
  ),
});
