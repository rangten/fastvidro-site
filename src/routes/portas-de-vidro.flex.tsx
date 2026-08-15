import { createFileRoute } from "@tanstack/react-router";
import { PortaSeoPage } from "@/components/PortaSeoPage";
import img from "@/assets/porta-flex.webp";

const TITLE = "Porta Flex Articulada em SP | Porta Camarão de Vidro - Fast Vidro";
const DESC = "Ganhe espaço com a Porta Flex articulada na Zona Norte de SP. Sistema camarão sem trilho inferior, perfeito para vãos estreitos e compactos. Solicite orçamento!";

export const Route = createFileRoute("/portas-de-vidro/flex")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/portas-de-vidro/flex" },
      { property: "og:image", content: img },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/portas-de-vidro/flex" }],
  }),
  component: () => (
    <PortaSeoPage
      eyebrow="Porta Flex"
      h1="Porta Flex em São Paulo: O Sistema Articulado Camarão que Salva Espaço"
      heroLead="Sistema de porta articulada inteligente, tipo camarão, sem trilho inferior — perfeita para vãos estreitos."
      heroImage={img}
      heroImageAlt="Porta Flex articulada camarão - Fast Vidro"
      waMessage="Olá! Quero um orçamento para a Porta Flex (camarão) com a Fast Vidro."
      benefits={[
        "90% de abertura: máxima otimização e ganho de espaço",
        "Sem trilho inferior: passagem totalmente livre e limpa",
        "Dobradiças super resistentes e duráveis",
        "Acabamento premium e design moderno",
        "Vidro temperado 8mm de alta segurança",
      ]}
      paragraphs={[
        <>Vãos extremamente estreitos exigem soluções inteligentes que não comprometam a estética do ambiente. Pensando nisso, a Fast Vidro oferece a <strong>Porta Flex</strong> (também conhecida como porta camarão de vidro), sendo a sua vidraçaria parceira na <strong>Zona Norte de São Paulo</strong> e especialista em instalações sob medida em toda a capital.</>,
        <>A Porta Flex destaca-se pelo seu sistema articulado, onde as folhas de vidro dobram-se entre si e se recolhem de forma compacta na lateral do vão. O grande diferencial deste modelo é que ele <strong>não utiliza trilho no chão na área de passagem</strong>, contando apenas com uma guia superior discreta. Isso deixa o piso totalmente livre, elimina o acúmulo de sujeira e evita qualquer risco de tropeços, sendo perfeita para banheiros pequenos, despensas e lavanderias.</>,
        <>Com dobradiças metálicas de alta resistência e vidros temperados de 8mm, entrega um design clean e um manuseio extremamente leve. Agende sua medição a laser para Santana, Casa Verde, Mandaqui ou qualquer zona de SP.</>,
      ]}
    />
  ),
});
