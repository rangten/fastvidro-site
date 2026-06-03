import { createFileRoute } from "@tanstack/react-router";
import { MirrorSeoPage } from "@/components/MirrorSeoPage";
import painelEspelho from "@/assets/painel-espelho.jpg.asset.json";

export const Route = createFileRoute("/espelhos/painel")({
  head: () => ({
    meta: [
      { title: "Painel de Espelho para Parede em SP | Ampliação de Ambientes - Fast Vidro" },
      { name: "description", content: "Quer ampliar sua sala de jantar? Conheça nossos Painéis de Espelho sob medida na Zona Norte de SP. Revestimento de paredes inteiras com junta seca ou paginação quadriculada. Peça orçamento!" },
      { property: "og:title", content: "Painel de Espelho para Parede em SP | Ampliação de Ambientes - Fast Vidro" },
      { property: "og:description", content: "Quer ampliar sua sala de jantar? Conheça nossos Painéis de Espelho sob medida na Zona Norte de SP. Revestimento de paredes inteiras com junta seca ou paginação quadriculada. Peça orçamento!" },
      { property: "og:url", content: "/espelhos/painel" },
    ],
    links: [
      { rel: "canonical", href: "/espelhos/painel" },
    ],
  }),
  component: () => (
    <MirrorSeoPage
      eyebrow="Painel de Espelho"
      h1="Painel de Espelho em São Paulo: Luxo e Iluminação para Grandes Paredes"
      heroLead="Dobre a percepção de espaço e crie uma atmosfera de luxo. A Fast Vidro é referência em revestimentos espelhados de grande porte na Zona Norte de São Paulo."
      heroImage={painelEspelho.url}
      heroImageAlt="Painel de espelho revestindo parede inteira em sala de jantar em São Paulo"
      benefits={[
        "Junta seca com emenda quase invisível",
        "Paginações decorativas quadriculadas e diamantadas",
        "Colas e fitas especiais que não mancham a prata",
        "Alinhamento perfeito com nível laser",
        "Atendimento na Zona Norte e região metropolitana",
      ]}
      paragraphs={[
        <>Para quem deseja dobrar a percepção de espaço de um ambiente e criar uma atmosfera de puro luxo e sofisticação, o <strong>Painel de Espelho</strong> é a escolha imbatível. A Fast Vidro é a sua grande parceira em revestimentos espelhados de grande porte, com ampla experiência de mercado na <strong>Zona Norte de São Paulo</strong> e atendimento técnico em toda a região metropolitana.</>,
        <>O painel consiste na cobertura de paredes inteiras através da junção milimétrica de placas de espelho premium. Desenvolvemos projetos com "junta seca" (onde a emenda entre os espelhos é quase invisível, gerando um efeito de parede contínua) ou paginações decorativas quadriculadas e diamantadas, muito utilizadas em salas de jantar, salas de estar, recepções comerciais e academias de alto padrão. Utilizamos colas e fitas especiais que não mancham a prata do espelho ao longo dos anos.</>,
        <>Nossa equipe realiza a conferência do prumo da parede com nível laser antes da colagem para garantir um alinhamento perfeito. Atendemos com agilidade no Tucuruvi, Vila Guilherme, Jardim São Paulo e demais regiões.</>,
      ]}
      waMessage="Olá! Vi o Painel de Espelho no site e gostaria de um orçamento para revestir minha parede."
    />
  ),
});
