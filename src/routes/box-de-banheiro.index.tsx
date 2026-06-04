import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductPage } from "@/components/ProductPage";
import img from "@/assets/box-banheiro-hero-real.png";
import { CATEGORIES } from "@/lib/catalog";

const category = CATEGORIES["box-de-banheiro"];

export const Route = createFileRoute("/box-de-banheiro/")({
  head: () => ({
    meta: [
      { title: "Box de Banheiro — Fast Vidro" },
      { name: "description", content: "Box de banheiro em vidro temperado com tecnologia anti-estilhaço. Modelos Flex, Piso Teto, Nobre, Elegance, Duo Safe e mais." },
      { property: "og:title", content: "Box de Banheiro — Fast Vidro" },
      { property: "og:description", content: "Box em vidro temperado com segurança e acabamento premium." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <ProductPage
        whatsappMessage="Olá! Gostaria de um orçamento para Box de Banheiro com a equipe da Fast Vidro."
        eyebrow="Box de Banheiro"
        title="Box de banheiro sob medida"
        subtitle="Vidro temperado com tecnologia anti-estilhaço, ferragens premium e instalação rápida."
        heroImage={img}
        intro="O box de banheiro é peça-chave para conforto, segurança e estética. Na Fast Vidro, cada box é medido in loco, fabricado em vidro temperado certificado e finalizado com ferragens cromadas de alta durabilidade — garantindo um banheiro mais bonito, seguro e fácil de limpar."
        features={[
          "Vidro temperado de 8mm com tecnologia anti-estilhaço",
          "Ferragens cromadas com garantia estendida",
          "Medição técnica gratuita e instalação ágil",
          "Mais de 10 modelos para ajustar ao seu espaço",
        ]}
        modelLinkBase="/box-de-banheiro"
        models={category.models}
        ctaLabel="Solicitar visita técnica"
        seoHighlights={[
          { title: "Box de Banheiro com Instalação Rápida em SP", text: "Atendemos toda a capital de São Paulo com medição, fabricação e instalação em prazo reduzido. Equipe própria, sem terceirização e sem sujeira na obra." },
          { title: "Box Flex para banheiro pequeno", text: "O modelo Box Flex é a solução ideal para banheiros pequenos: perfil discreto, abertura suave e aproveitamento máximo do espaço, mesmo em boxes de canto." },
          { title: "Box Elegance com roldanas aparentes", text: "O Box Elegance traz roldanas aparentes em aço inox, design sofisticado e deslizamento silencioso — referência para reformas de alto padrão em SP." },
        ]}
      />
    </SiteLayout>
  ),
});
