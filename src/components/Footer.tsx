import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";
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
            className="mt-6 inline-flex items-center gap-2 text-sm text-ink-foreground/80 hover:text-primary"
          >
            <Instagram className="h-4 w-4" /> @fast.vidro
          </a>
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

      <div className="border-t border-white/10 py-5 text-center text-xs text-ink-foreground/50">
        © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
