import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ModelDetailPage } from "@/components/ModelDetailPage";
import { getModel } from "@/lib/catalog";

export const Route = createFileRoute("/espelhos/$modelo")({
  loader: ({ params }) => {
    const data = getModel("espelhos", params.modelo);
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Espelho ${loaderData.model.name} — Fast Vidro` },
          { name: "description", content: loaderData.model.description },
          { property: "og:title", content: `Espelho ${loaderData.model.name} — Fast Vidro` },
          { property: "og:description", content: loaderData.model.description },
        ]
      : [{ title: "Modelo de Espelho — Fast Vidro" }],
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
