import { createFileRoute } from "@tanstack/react-router";
import { PortaSeoPage } from "@/components/PortaSeoPage";
import img from "@/assets/porta-de-giro.png";

const TITLE = "Porta de Abrir de Vidro em SP | Porta de Giro Tradicional - Fast Vidro";
const DESC = "Procurando Porta de Abrir de vidro temperado sob medida na Zona Norte de SP? Modelos clássicos com dobradiças e fechaduras para salas, cozinhas e escritórios. Peça orçamento!";

export const Route = createFileRoute("/portas-de-vidro/abrir")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/portas-de-vidro/abrir" },
      { property: "og:image", content: img },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/portas-de-vidro/abrir" }],
  }),
  component: () => (
    <PortaSeoPage
      eyebrow="Porta de Abrir"
      h1="Porta de Abrir em São Paulo: O Charme Clássico do Sistema de Giro"
      heroLead="Porta de giro tradicional e segura, com dobradiças de alta resistência e vedação superior para salas, escritórios e entradas."
      heroImage={img}
      heroImageAlt="Porta de Abrir / de Giro tradicional - Fast Vidro"
      waMessage="Olá! Quero um orçamento para a Porta de Abrir com a Fast Vidro."
      benefits={[
        "Abertura tradicional e prática",
        "Compatível com ferragens padrão",
        "Especificações de vidro disponíveis (8mm e 10mm)",
        "Instalação simples e econômica",
        "Vedação acústica e térmica superior",
      ]}
      paragraphs={[
        <>Para quem prefere a arquitetura tradicional com o toque contemporâneo do vidro, a Fast Vidro projeta e instala a melhor <strong>Porta de Abrir</strong> do mercado. Atendemos com total agilidade e garantia na <strong>Zona Norte de São Paulo</strong> e levamos nossa estrutura de fábrica para todas as regiões paulistas.</>,
        <>A Porta de Abrir (ou porta de giro estrutural) funciona fixada em dobradiças laterais de alta resistência instaladas na parede ou em batentes de alumínio. Ela oferece uma vedação acústica e térmica superior, além de permitir o uso de fechaduras convencionais com chave ou puxadores verticais imponentes. É a escolha mais consagrada para salas de reunião, divisórias de escritórios, entradas residenciais e cozinhas gourmet.</>,
        <>Trabalhamos com vidros temperados de 8mm e 10mm em tons Incolor, Fumê, Bronze ou Jateado para garantir a privacidade do seu espaço. Peça seu orçamento técnico para bairros como Jardim São Paulo, Tremembé, Vila Maria e garanta qualidade superior.</>,
      ]}
    />
  ),
});
