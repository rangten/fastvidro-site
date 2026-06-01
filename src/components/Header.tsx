import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/fast-vidro-logo.png.asset.json";
import { waLink } from "@/lib/site";

const nav = [
  { to: "/box-de-banheiro", label: "Box de Banheiro" },
  { to: "/portas-de-vidro", label: "Portas de Vidro" },
  { to: "/espelhos", label: "Espelhos" },
  { to: "/espelhos-led", label: "Espelhos LED" },
  { to: "/projetos", label: "Projetos" },
  { to: "/blog", label: "Blog" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-ink text-ink-foreground border-b-2 border-primary/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logoAsset.url} alt="Fast Vidro" className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold uppercase tracking-wide text-ink-foreground/80 transition hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="hidden md:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition hover:shadow-yellow"
          >
            <MessageCircle className="h-4 w-4" /> Orçamento
          </a>
          <button
            className="lg:hidden p-2 text-ink-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-primary/20 bg-ink">
          <nav className="flex flex-col px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold uppercase tracking-wide text-ink-foreground/90 border-b border-white/5 last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold uppercase text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Pedir orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
