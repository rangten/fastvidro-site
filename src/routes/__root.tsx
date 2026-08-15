import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fast Vidro — Agilidade e Segurança em Vidros" },
      { name: "description", content: "Box de banheiro, portas de vidro, espelhos e espelhos LED. Projetos sob medida com tecnologia anti-estilhaço." },
      { name: "author", content: "Fast Vidro" },
      { property: "og:title", content: "Fast Vidro — Agilidade e Segurança em Vidros" },
      { property: "og:description", content: "Box de banheiro, portas de vidro, espelhos e espelhos LED. Projetos sob medida com tecnologia anti-estilhaço." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Fast Vidro" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fast Vidro — Agilidade e Segurança em Vidros" },
      { name: "twitter:description", content: "Box de banheiro, portas de vidro, espelhos e espelhos LED. Projetos sob medida com tecnologia anti-estilhaço." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/926668dd-5c52-4794-a905-1b86b7465602/id-preview-b13171af--100b1016-c973-4192-9f56-d825a6b0ff30.lovable.app-1780839221439.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/926668dd-5c52-4794-a905-1b86b7465602/id-preview-b13171af--100b1016-c973-4192-9f56-d825a6b0ff30.lovable.app-1780839221439.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],

  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const fontHref =
    "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800;900&display=swap";
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        {/* Fontes carregadas de forma assíncrona (não bloqueiam a renderização) */}
        <link rel="preload" as="style" href={fontHref} />
        <link rel="stylesheet" href={fontHref} media="print" data-async-font="" />
        <noscript>
          <link rel="stylesheet" href={fontHref} />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.querySelector('link[data-async-font]');if(l){l.addEventListener('load',function(){l.media='all'});if(l.sheet)l.media='all';}})();`,
          }}
        />
        {/* Google Ads: carregado após a renderização inicial para não bloquear o LCP */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-18214089234');
var load=function(){if(window.__gtagLoaded)return;window.__gtagLoaded=1;var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=AW-18214089234';document.head.appendChild(s);};
if(document.readyState==='complete'){setTimeout(load,1500);}else{window.addEventListener('load',function(){setTimeout(load,1500)});}
['pointerdown','keydown','touchstart'].forEach(function(e){window.addEventListener(e,load,{once:true,passive:true})});`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );

}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
