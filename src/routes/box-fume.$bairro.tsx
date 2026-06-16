import { createFileRoute, notFound } from "@tanstack/react-router";
import { bairroFromSlug } from "@/lib/bairros";
import { BoxCorBairroPage } from "@/components/BoxCorBairroPage";

export const Route = createFileRoute("/box-fume/$bairro")({
  loader: ({ params }) => {
    const data = bairroFromSlug(params.bairro);
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Box de Vidro Fumê — Fast Vidro" }] };
    const { nome } = loaderData;
    const title = `Box de Vidro Fumê em ${nome} | Fast Vidro`;
    const desc = `Instalação de Box de Vidro Fumê em ${nome} pela Fast Vidro: privacidade, sofisticação e medição digital a laser. Peça seu orçamento.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: () => {
    const { nome, zona } = Route.useLoaderData();
    return <BoxCorBairroPage nome={nome} zona={zona} cor="fume" />;
  },
});
