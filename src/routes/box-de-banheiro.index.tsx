import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductPage } from "@/components/ProductPage";
import { ColorOptionsSection } from "@/components/ColorOptionsSection";
import { ZonasBoxLinks } from "@/components/ZonasBoxLinks";
import img from "@/assets/box-banheiro-hero-real.webp";
import flexCover from "@/assets/flex-cover.webp";
import pisoTetoCover from "@/assets/piso-teto-cover.webp";
import tradicionalCover from "@/assets/tradicional-cover.webp";
import eleganceCover from "@/assets/elegance-cover.webp";
import secureBoxLogo from "@/assets/secure-box-logo.webp";
import boxAbrirImg from "@/assets/tradicional-abrir.webp";

const CANONICAL = "https://www.fastvidro.com.br/box-de-banheiro";
const META_TITLE = "Box de Banheiro em SP: Elegance, Flex e Secure Box | Fast Vidros";
const META_DESC =
  "Instalação ágil de box de banheiro em vidro temperado na Zona Norte e SP. Conheça o Secure Box e modelos Elegance e Flex. Solicite orçamento via WhatsApp!";

const H1_TITLE = "Box de Banheiro na Zona Norte e Toda SP | Mediação e Instalação Rápida";

// Curadoria dos cards "Escolha o Seu" — cada um aponta para sua página individual.
const MODELOS = [
  {
    slug: "flex",
    name: "Flex",
    description: "Versátil para box de canto e frontal, perfil discreto e abertura suave.",
    image: flexCover,
    imageAlt: "Instalação de Box Flex em vidro temperado na Zona Norte de São Paulo",
  },
  {
    slug: "piso-teto",
    name: "Piso Teto",
    description: "Painéis fixos do piso ao teto, visual minimalista e efeito sauna.",
    image: pisoTetoCover,
    imageAlt: "Box Piso Teto em vidro temperado instalado em São Paulo",
  },
  {
    slug: "tradicional",
    name: "Tradicional",
    description: "Modelo clássico, ótimo custo-benefício para qualquer banheiro.",
    image: tradicionalCover,
    imageAlt: "Box Tradicional de vidro temperado instalado na Zona Norte SP",
  },
  {
    slug: "secure-box",
    name: "Secure",
    description: "Película antiestilhaço que retém os fragmentos em caso de quebra.",
    image: secureBoxLogo,
    imageAlt: "Secure Box com película de segurança para box de banheiro em SP",
  },
  {
    slug: "elegance",
    name: "Elegance",
    description: "Roldanas aparentes, design moderno e sofisticado.",
    image: eleganceCover,
    imageAlt: "Box Elegance com roldanas aparentes instalado em São Paulo",
  },
  {
    slug: "de-abrir",
    name: "Box de Abrir",
    description: "Porta de giro em vidro temperado, ideal para vãos pequenos.",
    image: boxAbrirImg,
    imageAlt: "Box de Abrir em vidro temperado instalado na Zona Norte de SP",
  },
];

export const Route = createFileRoute("/box-de-banheiro/")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Instalação de Box de Banheiro em SP",
          description:
            "Box de banheiro sob medida em vidro temperado com tecnologia anti-estilhaço, medição técnica gratuita e instalação rápida em toda a cidade de São Paulo.",
          provider: {
            "@type": "LocalBusiness",
            name: "Fast Vidro",
            telephone: "+55 11 99023-8648",
            url: "https://www.fastvidro.com.br",
          },
          areaServed: {
            "@type": "City",
            name: "São Paulo, SP",
          },
          serviceType: "Instalação de Box de Banheiro",
        }),
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <ProductPage
        whatsappMessage="Olá! Gostaria de um orçamento para Box de Banheiro com a equipe da Fast Vidro."
        eyebrow="Box de Banheiro"
        title={H1_TITLE}
        subtitle="Vidro temperado com tecnologia anti-estilhaço, ferragens premium e instalação rápida."
        heroImage={img}
        heroImageAlt="Instalação de box de banheiro em vidro temperado na Zona Norte SP"
        intro="O box de banheiro é peça-chave para conforto, segurança e estética. Na Fast Vidro, cada box é medido in loco, fabricado em vidro temperado certificado e finalizado com ferragens cromadas de alta durabilidade — garantindo um banheiro mais bonito, seguro e fácil de limpar."
        features={[
          "Vidro temperado de 8mm com tecnologia anti-estilhaço",
          "Ferragens cromadas com garantia estendida",
          "Medição técnica gratuita e instalação ágil",
          "Mais de 10 modelos para ajustar ao seu espaço",
        ]}
        modelLinkBase="/box-de-banheiro"
        models={MODELOS}
        ctaLabel="Solicitar visita técnica"
        seoHighlights={[
          { title: "Box de Banheiro com Instalação Rápida em SP", text: "Atendemos toda a capital de São Paulo com medição, fabricação e instalação em prazo reduzido. Equipe própria, sem terceirização e sem sujeira na obra." },
          { title: "Box Flex para banheiro pequeno", text: "O modelo Box Flex é a solução ideal para banheiros pequenos: perfil discreto, abertura suave e aproveitamento máximo do espaço, mesmo em boxes de canto." },
          { title: "Box Elegance com roldanas aparentes", text: "O Box Elegance traz roldanas aparentes em aço inox, design sofisticado e deslizamento silencioso — referência para reformas de alto padrão em SP." },
        ]}
      />
      <ColorOptionsSection />
      <ZonasBoxLinks />
    </SiteLayout>
  ),
});
