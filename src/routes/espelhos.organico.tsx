import { createFileRoute } from "@tanstack/react-router";
import { MirrorSeoPage } from "@/components/MirrorSeoPage";
import espelhoOrganico from "@/assets/espelho-organico.png";

export const Route = createFileRoute("/espelhos/organico")({
  head: () => ({
    meta: [
      { title: "Espelho Orgânico Lapidado em SP | Sob Medida - Fast Vidro" },
      { name: "description", content: "Procurando Espelho Orgânico sob medida na Zona Norte de SP? Conheça a maior tendência em decoração com formatos fluidos, lapidação premium e instalação para salas e banheiros. Peça orçamento!" },
      { property: "og:title", content: "Espelho Orgânico Lapidado em SP | Sob Medida - Fast Vidro" },
      { property: "og:description", content: "Procurando Espelho Orgânico sob medida na Zona Norte de SP? Conheça a maior tendência em decoração com formatos fluidos, lapidação premium e instalação para salas e banheiros. Peça orçamento!" },
      { property: "og:url", content: "/espelhos/organico" },
    ],
    links: [
      { rel: "canonical", href: "/espelhos/organico" },
    ],
  }),
  component: () => (
    <MirrorSeoPage
      eyebrow="Espelho Orgânico"
      h1="Espelho Orgânico em São Paulo: A Maior Tendência em Decoração Sob Medida"
      heroLead="Transforme seu ambiente com leveza e personalidade. O Espelho Orgânico da Fast Vidro traz formas fluidas e curvas naturais que valorizam a iluminação e ampliam qualquer espaço com um toque de arte contemporânea."
      heroImage={espelhoOrganico}
      heroImageAlt="Espelho Orgânico lapidado sob medida instalado em sala de estar em São Paulo"
      benefits={[
        "Formatos fluidos e assimétricos inspirados na natureza",
        "Fabricação sob medida com desenho único para cada cliente",
        "Espelhos de marcas líderes (Cebrace e Guardian)",
        "Medição técnica a laser e fixação química segura",
        "Atendimento na Zona Norte e toda a capital paulista",
      ]}
      paragraphs={[
        <>Se você quer transformar o visual da sua casa com leveza, modernidade e muita personalidade, a Fast Vidro traz o modelo do momento. Somos a sua vidraçaria referência em projetos de alto padrão e especialista em <strong>instalação de espelhos na Zona Norte de São Paulo</strong> e demais regiões da capital. O <strong>Espelho Orgânico</strong> destaca-se por abandonar as linhas retas tradicionais e abraçar formas fluidas, curvas naturais e assimétricas inspiradas na natureza.</>,
        <>Essa peça é perfeita para se tornar o ponto focal de salas de estar, halls de entrada modernos, lavabos sofisticados e dormitórios. Como fabricamos rigorosamente sob medida, cada peça possui um desenho único que valoriza a iluminação natural e amplia o ambiente com um toque de arte contemporânea. Toda a nossa produção utiliza espelhos de marcas líderes (como Cebrace e Guardian), garantindo reflexão perfeita e sem distorções.</>,
        <>Atendemos com total agilidade e medição técnica a laser em bairros tradicionais como Santana, Tucuruvi, Mandaqui, Casa Verde e por toda a capital paulista, garantindo uma fixação química segura e acabamento impecável.</>,
      ]}
      waMessage="Olá! Vi o Espelho Orgânico no site e gostaria de solicitar um orçamento sob medida."
    />
  ),
});
