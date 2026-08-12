import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

function InstagramColorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#ig-grad)" />
      <rect x="14" y="14" width="36" height="36" rx="10" fill="none" stroke="#fff" strokeWidth="3.5" />
      <circle cx="32" cy="32" r="8" fill="none" stroke="#fff" strokeWidth="3.5" />
      <circle cx="46" cy="18" r="2.5" fill="#fff" />
    </svg>
  );
}
import logoAsset from "@/assets/fast-vidro-logo.png";
import { SITE, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logoAsset} alt="Fast Vidro" className="h-16 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-ink-foreground/70">
            Soluções em vidro com velocidade, segurança e acabamento premium para sua casa ou obra.
          </p>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-3 text-base font-medium text-ink-foreground/90 hover:text-primary"
          >
            <InstagramColorIcon className="h-8 w-8" /> @fast.vidro
          </a>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-widest text-primary">REGIÕES ATENDIDAS</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/box-de-vidro-zona-norte" className="text-ink-foreground/80 hover:text-primary">Box de Vidro Zona Norte</Link></li>
            <li><Link to="/box-de-vidro-zona-sul" className="text-ink-foreground/80 hover:text-primary">Box de Vidro Zona Sul</Link></li>
            <li><Link to="/box-de-vidro-zona-oeste" className="text-ink-foreground/80 hover:text-primary">Box de Vidro Zona Oeste</Link></li>
            <li><Link to="/box-de-vidro-zona-leste" className="text-ink-foreground/80 hover:text-primary">Box de Vidro Zona Leste</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-widest text-primary">PRODUTOS</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/box-de-banheiro" className="text-ink-foreground/80 hover:text-primary">Box de Banheiro</Link></li>
            <li><Link to="/portas-de-vidro" className="text-ink-foreground/80 hover:text-primary">Portas de Vidro</Link></li>
            <li><Link to="/espelhos" className="text-ink-foreground/80 hover:text-primary">Espelhos</Link></li>
            <li><Link to="/projetos" className="text-ink-foreground/80 hover:text-primary">Projetos sob medida</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-widest text-primary">CONTATO</h4>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> {SITE.phone}</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /> <span>{SITE.address}</span></li>
          </ul>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-block rounded-md bg-primary px-4 py-2.5 text-sm font-bold uppercase text-primary-foreground hover:shadow-yellow transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* Bloco de links internos por região — SEO Local */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              zona: "Zona Norte",
              links: [
                ["santana", "Santana"],
                ["tucuruvi", "Tucuruvi"],
                ["mandaqui", "Mandaqui"],
                ["vila-maria", "Vila Maria"],
                ["casa-verde", "Casa Verde"],
              ],
            },
            {
              zona: "Zona Leste",
              links: [
                ["tatuape", "Tatuapé"],
                ["mooca", "Mooca"],
                ["vila-carrão", "Vila Carrão"],
                ["analia-franco", "Anália Franco"],
                ["belem", "Belém"],
              ],
            },
            {
              zona: "Zona Oeste",
              links: [
                ["lapa", "Lapa"],
                ["vila-leopoldina", "Vila Leopoldina"],
                ["perdizes", "Perdizes"],
                ["pinheiros", "Pinheiros"],
              ],
            },
            {
              zona: "Zona Sul",
              links: [
                ["itaim-bibi", "Itaim Bibi"],
                ["moema", "Moema"],
                ["vila-mariana", "Vila Mariana"],
                ["morumbi", "Morumbi"],
              ],
            },
          ].map((g) => (
            <div key={g.zona}>
              <h4 className="text-xs font-bold tracking-widest text-primary">{g.zona.toUpperCase()}</h4>
              <ul className="mt-3 space-y-1.5 text-sm">
                {g.links.map(([slug, name]) => (
                  <li key={slug}>
                    <Link
                      to="/servicos/$bairro"
                      params={{ bairro: slug }}
                      className="text-ink-foreground/70 hover:text-primary transition"
                    >
                      Box {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-ink-foreground/50">
        © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
