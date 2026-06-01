import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ModelDetailPage } from "@/components/ModelDetailPage";
import { getModel } from "@/lib/catalog";

export const Route = createFileRoute("/portas-de-vidro/$modelo")({
  loader: ({ params }) => {
    const data = getModel("portas-de-vidro", params.modelo);
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Porta ${loaderData.model.name} — Fast Vidro` },
          { name: "description", content: loaderData.model.description },
          { property: "og:title", content: `Porta ${loaderData.model.name} — Fast Vidro` },
          { property: "og:description", content: loaderData.model.description },
        ]
      : [{ title: "Modelo de Porta — Fast Vidro" }],
  }),
  component: () => {
    const { category, model } = Route.useLoaderData();
    return (
      <SiteLayout>
        <ModelDetailPage category={category} model={model} />
      </SiteLayout>
    );
  },
});
