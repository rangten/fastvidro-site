import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ModelDetailPage } from "@/components/ModelDetailPage";
import { getModel } from "@/lib/catalog";

export const Route = createFileRoute("/projetos/$modelo")({
  loader: ({ params }) => {
    const data = getModel("projetos", params.modelo);
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Projeto ${loaderData.model.name} — Fast Vidro` },
          { name: "description", content: loaderData.model.description },
          { property: "og:title", content: `Projeto ${loaderData.model.name} — Fast Vidro` },
          { property: "og:description", content: loaderData.model.description },
        ]
      : [{ title: "Projeto — Fast Vidro" }],
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
