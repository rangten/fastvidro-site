import { createFileRoute } from "@tanstack/react-router";
import { MirrorSeoPage } from "@/components/MirrorSeoPage";
import espelhoLapidado from "@/assets/espelho-lapidado.webp";

export const Route = createFileRoute("/espelhos/lapidado")({
  head: () => ({
    meta: [
      { title: "Espelho Lapidado sob Medida em SP | Acabamento Clean - Fast Vidro" },
      { name: "description", content: "Procurando Espelho Lapidado com bordas polidas na Zona Norte de SP? O modelo ideal para um visual minimalista e seguro em mesas, paredes e armários. Faça seu orçamento!" },
      { property: "og:title", content: "Espelho Lapidado sob Medida em SP | Acabamento Clean - Fast Vidro" },
      { property: "og:description", content: "Procurando Espelho Lapidado com bordas polidas na Zona Norte de SP? O modelo ideal para um visual minimalista e seguro em mesas, paredes e armários. Faça seu orçamento!" },
      { property: "og:url", content: "/espelhos/lapidado" },
    ],
    links: [
      { rel: "canonical", href: "/espelhos/lapidado" },
    ],
  }),
  component: () => (
    <MirrorSeoPage
      eyebrow="Espelho Lapidado"
      h1="Espelho Lapidado em São Paulo: Estilo Minimalista com Bordas Polidas de Alta Segurança"
      heroLead="O clássico do minimalismo. A Fast Vidro oferece o melhor serviço de corte e tratamento de bordas da cidade, com forte atuação na Zona Norte de São Paulo."
      heroImage={espelhoLapidado}
      heroImageAlt="Espelho lapidado com bordas polidas instalado em parede de sala em São Paulo"
      benefits={[
        "Bordas polidas eliminando partes cortantes do vidro",
        "Acabamento liso, arredondado ou reto com brilho translúcido",
        "Indicado para colagem em paredes, guarda-roupas e tampos de mesa",
        "Matéria-prima de 4mm a 6mm das marcas Guardian e Cebrace",
        "Preço de fábrica com entrega rápida na Zona Norte de SP",
      ]}
      paragraphs={[
        <>O <strong>Espelho Lapidado</strong> é o verdadeiro clássico do minimalismo. Se você busca uma peça clean, onde o destaque total seja o reflexo e a integração com o ambiente, a Fast Vidro oferece o melhor serviço de corte e tratamento de bordas da cidade, com forte atuação na <strong>Zona Norte de São Paulo</strong> e entrega rápida em toda a capital.</>,
        <>O processo de lapidação consiste em lixar e polir as bordas brutas do espelho recém-cortado. Esse tratamento elimina totalmente as partes cortantes do vidro, tornando o manuseio e a limpeza 100% seguros para a sua família. Visualmente, as bordas ganham um acabamento liso, arredondado ou reto com um leve brilho translúcido. É o modelo mais indicado para colagem direta em paredes, revestimento de portas de guarda-roupas, tampos de mesa e nichos decorativos.</>,
        <>Garantimos um corte milimétrico e o uso de matéria-prima de espessura robusta (4mm a 6mm) das marcas Guardian e Cebrace. Peça sua cotação para Santana, Casa Verde, Mandaqui e garanta preço de fábrica.</>,
      ]}
      waMessage="Olá! Vi o Espelho Lapidado no site e gostaria de um orçamento sob medida."
    />
  ),
});
