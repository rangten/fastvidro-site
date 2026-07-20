import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/box-fume/$bairro")({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/servicos/$bairro",
      params: { bairro: params.bairro },
      statusCode: 301,
      replace: true,
    });
  },
});
