import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ModelDetailPage } from "@/components/ModelDetailPage";
import { getModel } from "@/lib/catalog";

export const Route = createFileRoute("/box-de-banheiro/$modelo")({
  loader: ({ params }) => {
    const data = getModel("box-de-banheiro", params.modelo);
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Box ${loaderData.model.name} — Fast Vidro` },
          { name: "description", content: loaderData.model.description },
          { property: "og:title", content: `Box ${loaderData.model.name} — Fast Vidro` },
          { property: "og:description", content: loaderData.model.description },
        ]
      : [{ title: "Modelo de Box — Fast Vidro" }],
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
