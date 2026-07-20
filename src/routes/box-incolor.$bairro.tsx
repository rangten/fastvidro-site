import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/box-incolor/$bairro")({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/servicos/$bairro",
      params: { bairro: params.bairro },
      statusCode: 301,
      replace: true,
    });
  },
});
