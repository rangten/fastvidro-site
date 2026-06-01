import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductPage } from "@/components/ProductPage";
import img from "@/assets/product-espelhos.jpg";

export const Route = createFileRoute("/espelhos")({
  head: () => ({
    meta: [
      { title: "Espelhos sob medida — Fast Vidro" },
      { name: "description", content: "Espelhos decorativos, para banheiro e parede inteira. Acabamentos com lapidação reta ou bisotê." },
      { property: "og:title", content: "Espelhos sob medida — Fast Vidro" },
      { property: "og:description", content: "Espelhos com acabamento premium para qualquer ambiente." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <ProductPage
        whatsappMessage="Olá! Gostaria de um orçamento para Espelhos Lapidados/Bisotê com a Fast Vidro."

        eyebrow="Espelhos"
        title="Espelhos que ampliam e decoram"
        subtitle="Decorativos, para banheiro ou parede inteira — com lapidação precisa e instalação segura."
        heroImage={img}
        intro="Mais do que um item funcional, o espelho é um elemento de decoração que amplia, ilumina e valoriza ambientes. A Fast Vidro corta, lapida e instala espelhos sob medida com acabamento premium e fixação invisível."
        features={[
          "Espelhos de 4mm e 6mm de alta refletância",
          "Lapidação reta ou bisotê",
          "Furação para arandelas e suportes",
          "Fixação invisível com fita de alta aderência ou parafusos ocultos",
        ]}
        models={[
          { name: "Decorativo", description: "Sob medida, formas livres e geométricas." },
          { name: "Banheiro", description: "Resistência à umidade e fácil limpeza." },
          { name: "Parede Inteira", description: "Amplia visualmente o ambiente." },
          { name: "Lapidação Reta", description: "Bordas polidas com acabamento limpo." },
          { name: "Bisotê", description: "Borda inclinada e brilhante, charme clássico." },
        ]}
      />
    </SiteLayout>
  ),
});
