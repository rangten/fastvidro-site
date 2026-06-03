import { createFileRoute } from "@tanstack/react-router";
import { MirrorSeoPage } from "@/components/MirrorSeoPage";
import espelhoBanheiro from "@/assets/espelho-banheiro.jpg";

export const Route = createFileRoute("/espelhos/banheiro")({
  head: () => ({
    meta: [
      { title: "Espelho para Banheiro sob Medida em SP | Vidraçaria - Fast Vidro" },
      { name: "description", content: "Encontre o espelho para banheiro perfeito na Zona Norte de SP. Modelos sob medida para armários, bancadas e lavabos com proteção contra umidade e reflexão perfeita. Solicite orçamento!" },
      { property: "og:title", content: "Espelho para Banheiro sob Medida em SP | Vidraçaria - Fast Vidro" },
      { property: "og:description", content: "Encontre o espelho para banheiro perfeito na Zona Norte de SP. Modelos sob medida para armários, bancadas e lavabos com proteção contra umidade e reflexão perfeita. Solicite orçamento!" },
      { property: "og:url", content: "/espelhos/banheiro" },
    ],
    links: [
      { rel: "canonical", href: "/espelhos/banheiro" },
    ],
  }),
  component: () => (
    <MirrorSeoPage
      eyebrow="Espelho para Banheiro"
      h1="Espelho para Banheiro em São Paulo: Amplitude e Praticidade para o seu Lavabo"
      heroLead="O espelho certo transforma seu banheiro. A Fast Vidro projeta e instala espelhos sob medida com proteção contra oxidação, ideais para resistir à umidade e valorizar seu espaço."
      heroImage={espelhoBanheiro}
      heroImageAlt="Espelho para banheiro sob medida instalado em lavabo na Zona Norte de SP"
      benefits={[
        "Proteção especial contra oxidação e umidade",
        "Sob medida para bancadas, nichos e paredes inteiras",
        "Acabamentos com bordas lapidadas ou corte bisotê",
        "Instalação segura por equipe própria",
        "Atendimento rápido na Zona Norte e Grande SP",
      ]}
      paragraphs={[
        <>O espelho é um item indispensável em qualquer banheiro, responsável por trazer sensação de amplitude, melhorar a iluminação e auxiliar nas tarefas diárias de higiene e maquiagem. A Fast Vidro é especialista em projetar e instalar o <strong>Espelho para Banheiro</strong> perfeito para o seu espaço, atendendo com pontualidade na <strong>Zona Norte de São Paulo</strong> e em todas as zonas da cidade.</>,
        <>Trabalhamos com espelhos com proteção especial contra oxidação, ideais para resistir à umidade constante gerada pelo vapor do chuveiro. Criamos projetos sob medida que se encaixam perfeitamente sobre a sua bancada, cobrindo nichos ou preenchendo paredes inteiras de lavabos compactos ou banheiros de casal. Você pode escolher o acabamento com bordas lapidadas clean ou o sofisticado corte bisotê.</>,
        <>Garanta um produto durável com instalação segura feita por equipe própria. Atendemos com rapidez em Santana, Parada Inglesa, Tremembé, Vila Maria e condomínios de toda a grande São Paulo.</>,
      ]}
      waMessage="Olá! Vi o Espelho para Banheiro no site e gostaria de um orçamento sob medida."
    />
  ),
});
