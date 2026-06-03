import { createFileRoute } from "@tanstack/react-router";
import { MirrorSeoPage } from "@/components/MirrorSeoPage";
import espelhoBisote from "@/assets/espelho-bisote.png.asset.json";

export const Route = createFileRoute("/espelhos/bisote")({
  head: () => ({
    meta: [
      { title: "Espelho Bisotê sob Medida em SP | Bordas Chanfradas Elegantes - Fast Vidro" },
      { name: "description", content: "Compre Espelho Bisotê com bordas chanfradas decorativas na Zona Norte de SP. O clássico acabamento com efeito de moldura de cristal para salas e halls. Peça seu orçamento!" },
      { property: "og:title", content: "Espelho Bisotê sob Medida em SP | Bordas Chanfradas Elegantes - Fast Vidro" },
      { property: "og:description", content: "Compre Espelho Bisotê com bordas chanfradas decorativas na Zona Norte de SP. O clássico acabamento com efeito de moldura de cristal para salas e halls. Peça seu orçamento!" },
      { property: "og:url", content: "/espelhos/bisote" },
    ],
    links: [
      { rel: "canonical", href: "/espelhos/bisote" },
    ],
  }),
  component: () => (
    <MirrorSeoPage
      eyebrow="Espelho Bisotê"
      h1="Espelho Bisotê em São Paulo: O Requinte das Bordas Chanfradas com Efeito Cristal"
      heroLead="Conferir um aspecto clássico, nobre e imponente ao seu ambiente. A Fast Vidro domina a arte do acabamento lapidado ornamental na Zona Norte de São Paulo."
      heroImage={espelhoBisote.url}
      heroImageAlt="Espelho bisotê com bordas chanfradas decorativas em hall de entrada em São Paulo"
      benefits={[
        "Corte chanfrado que cria moldura natural no espelho",
        "Efeito de brilho similar ao cristal",
        "Ideal para salas de jantar, banheiros luxuosos e halls",
        "Larguras de bisotê personalizadas sob medida",
        "Medição e instalação perfeita por equipe técnica própria",
      ]}
      paragraphs={[
        <>Se a sua intenção é conferir um aspecto clássico, nobre e imponente ao seu ambiente, o <strong>Espelho Bisotê</strong> (ou bisotado) é a escolha perfeita. A Fast Vidro domina a arte do acabamento lapidado ornamental, consolidando-se como vidraçaria de referência na <strong>Zona Norte de São Paulo</strong> e atendendo com excelência clientes exigentes por toda a capital paulista.</>,
        <>O acabamento em bisotê é feito através de um corte chanfrado nas bordas do espelho, criando uma espécie de rampa angular que diminui a espessura do vidro nas extremidades. Esse trabalho artesanal cria uma moldura natural e delicada no próprio espelho, que refrata a luz e gera um lindo efeito de brilho similar ao cristal. É altamente recomendado para espelhos de sala de jantar, banheiros luxuosos, penteadeiras e halls de entrada onde a peça decorativa precisa se destacar por si só.</>,
        <>Trabalhamos com larguras de bisotê personalizadas de acordo com o tamanho da sua peça. Solicite a visita dos nossos técnicos para medição e instalação perfeita em bairros como Tucuruvi, Parada Inglesa, Tremembé e Zona Sul/Leste/Oeste de SP.</>,
      ]}
      waMessage="Olá! Vi o Espelho Bisotê no site e gostaria de um orçamento sob medida."
    />
  ),
});
