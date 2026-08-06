import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/fast-vidro-logo.png";
import secureBoxLogo from "@/assets/secure-box-logo.png";
import { waLink } from "@/lib/site";

type NavItem = {
  to: string;
  label: string;
  image?: { src: string; alt: string };
};

const nav: NavItem[] = [
  { to: "/box-de-banheiro", label: "Box de Banheiro" },
  { to: "/portas-de-vidro", label: "Portas de Vidro" },
  { to: "/box-de-banheiro/secure-box", label: "Secure Box", image: { src: secureBoxLogo, alt: "Secure Box" } },
  { to: "/espelhos", label: "Espelhos" },
  { to: "/projetos", label: "Projetos" },
  { to: "/blog", label: "Blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [boxOpen, setBoxOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-ink text-ink-foreground border-b-2 border-primary/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8 lg:py-6">
        <Link to="/" className="flex items-center gap-2 py-1 pr-2" onClick={() => setOpen(false)}>
          <img
            src={logoAsset}
            alt="Fast Vidro"
            className="h-20 sm:h-24 lg:h-28 w-auto object-contain drop-shadow-[0_2px_8px_rgba(250,204,21,0.15)]"
          />
        </Link>


        <nav className="hidden lg:flex items-center gap-7">
          <div className="relative group">
            <div className="flex items-center gap-1">
              <Link
                to="/box-de-banheiro"
                className="flex items-center text-sm font-semibold uppercase tracking-wide text-ink-foreground/80 transition hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                Box de Banheiro
              </Link>
              <ChevronDown className="h-4 w-4 text-ink-foreground/60 transition group-hover:rotate-180 group-hover:text-primary" />
            </div>
            <div className="invisible absolute left-0 top-full z-50 w-72 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <ul className="overflow-hidden rounded-lg border border-primary/30 bg-ink shadow-xl">
                {BOX_SUBMENU.map((s) => (
                  <li key={s.to}>
                    <Link
                      to={s.to}
                      className="block border-b border-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-ink-foreground/80 transition last:border-0 hover:bg-primary/10 hover:text-primary"
                      activeProps={{ className: "text-primary" }}
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {nav.map((n) => (

            <Link
              key={`${n.to}-${n.label}`}
              to={n.to}
              className="flex items-center text-sm font-semibold uppercase tracking-wide text-ink-foreground/80 transition hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.image ? (
                <img
                  src={n.image.src}
                  alt={n.image.alt}
                  className="h-16 lg:h-20 w-auto object-contain bg-black rounded-lg px-3 py-1.5 shadow-md ring-1 ring-primary/30"
                />
              ) : (
                n.label
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/5511990238648"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary py-1 pl-2 pr-2.5 text-primary-foreground transition hover:shadow-yellow md:gap-2 md:px-3 md:py-2"
          >
            <MessageCircle className="h-4 w-4 shrink-0 md:h-6 md:w-6" />
            <span className="text-[11px] font-black whitespace-nowrap md:hidden">
              (11) 99023-8648
            </span>
            <span className="hidden flex-col leading-tight text-left md:flex">
              <span className="text-[10px] font-semibold uppercase tracking-wider">
                WhatsApp e Orçamento
              </span>
              <span className="text-sm font-black whitespace-nowrap">(11) 99023-8648</span>
            </span>
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
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="mb-3 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold uppercase text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> (11) 99023-8648
            </a>
            <div className="border-b border-white/5">
              <div className="flex items-center justify-between">
                <Link
                  to="/box-de-banheiro"
                  onClick={() => setOpen(false)}
                  className="flex-1 py-3 text-sm font-semibold uppercase tracking-wide text-ink-foreground/90"
                >
                  Box de Banheiro
                </Link>
                <button
                  type="button"
                  aria-label="Abrir submenu de Box de Banheiro"
                  aria-expanded={boxOpen}
                  onClick={() => setBoxOpen((v) => !v)}
                  className="p-2 text-ink-foreground/70"
                >
                  <ChevronDown className={`h-5 w-5 transition ${boxOpen ? "rotate-180 text-primary" : ""}`} />
                </button>
              </div>
              {boxOpen && (
                <ul className="pb-2 pl-3">
                  {BOX_SUBMENU.map((s) => (
                    <li key={s.to}>
                      <Link
                        to={s.to}
                        onClick={() => setOpen(false)}
                        className="block py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-foreground/70 hover:text-primary"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {nav.map((n) => (

              <Link
                key={`${n.to}-${n.label}`}
                to={n.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-3 text-sm font-semibold uppercase tracking-wide text-ink-foreground/90 border-b border-white/5 last:border-0"
              >
                {n.image && (
                  <img
                    src={n.image.src}
                    alt={n.image.alt}
                    className="h-14 w-auto object-contain bg-black rounded-lg px-2.5 py-1 shadow-md ring-1 ring-primary/30"
                  />
                )}
                <span>{n.label}</span>
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
