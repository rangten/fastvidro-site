import { createFileRoute, notFound } from "@tanstack/react-router";
import { bairroFromSlug } from "@/lib/bairros";
import { BoxCorBairroPage } from "@/components/BoxCorBairroPage";

export const Route = createFileRoute("/box-incolor/$bairro")({
  loader: ({ params }) => {
    const data = bairroFromSlug(params.bairro);
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Box de Vidro Incolor — Fast Vidro" }] };
    const { nome } = loaderData;
    const title = `Box de Vidro Incolor em ${nome} | Fast Vidro`;
    const desc = `Instalação de Box de Vidro Incolor em ${nome}: vidro temperado 8mm de alta transparência, amplitude e claridade. Peça sua medição.`;
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
    return <BoxCorBairroPage nome={nome} zona={zona} cor="incolor" />;
  },
});
