import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Shield, Check, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { bairroFromSlug } from "@/lib/bairros";
import { WHATSAPP_NUMBER } from "@/lib/site";
import heroImg from "@/assets/regioes-sp-hero.jpg";
import projeto1 from "@/assets/projeto-box-piso-teto-frontal-reto.jpg";
import projeto2 from "@/assets/projeto-box-canto-tradicional-reto.jpg";
import projeto3 from "@/assets/projeto-box-flex.jpg";
import projeto4 from "@/assets/projeto-box-porta-abrir.jpg";
import projeto5 from "@/assets/projeto-box-piso-teto-canto-cromado.jpg";

const PROJETOS_HERO = [
  { src: projeto1, modelo: "Box Piso Teto Frontal Kit Reto" },
  { src: projeto2, modelo: "Box Canto Tradicional Kit Reto" },
  { src: projeto3, modelo: "Box Flex Articulado" },
  { src: projeto4, modelo: "Box Porta de Abrir" },
  { src: projeto5, modelo: "Box Piso Teto Canto Kit Reto Cromado" },
] as const;

function hashSlug(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export const Route = createFileRoute("/servicos/$bairro")({
  loader: ({ params }) => {
    const data = bairroFromSlug(params.bairro);
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Vidraçaria — Fast Vidro" }] };
    const { nome } = loaderData;
    const title = `Vidraçaria em ${nome}: Fast Vidro | Box e Cristais Sob Medida`;
    const desc = `Procurando Vidraçaria em ${nome}? A Fast Vidro oferece instalação rápida de box de banheiro em ${nome}, espelhos e fechamentos com acabamento premium. Peça seu orçamento!`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BairroPage,
});

const MODELOS = [
  {
    nome: "Box Kit Reto Minimalista",
    to: "/box-de-banheiro/piso-teto",
    desc: "Linhas retas, perfil discreto e acabamento contemporâneo.",
  },
  {
    nome: "Box Articulado Flex",
    to: "/box-de-banheiro/flex",
    desc: "Sistema retrátil ideal para banheiros pequenos e vãos estreitos.",
  },
  {
    nome: "Box de Correr Tradicional",
    to: "/box-de-banheiro/tradicional",
    desc: "Robusto, com roldanas silenciosas e instalação rápida.",
  },
] as const;

function BairroPage() {
  const { nome, zona } = Route.useLoaderData();
  const waMsg = `Olá! Gostaria de um orçamento de box de vidro da Fast Vidro para o meu imóvel aqui em ${nome}.`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
  const projeto = PROJETOS_HERO[hashSlug(nome) % PROJETOS_HERO.length];
  const projetoAlt = `Instalação de box de vidro sob medida em ${nome} - Fast Vidro`;

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] ring-1 ring-white/20">
            <MapPin className="h-3 w-3 text-primary" /> {zona.label} • São Paulo
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] max-w-4xl">
            Vidraçaria em {nome}: Fast Vidro | Box e Cristais Sob Medida
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">
            Atendimento técnico em {nome} com medição precisa, vidros temperados certificados e
            instalação no mesmo padrão Fast Vidro em toda a {zona.label}.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-black uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
          >
            <MessageCircle className="h-4 w-4" /> Pedir orçamento agora
          </a>
        </div>
      </section>

      {/* Projeto Hero estilizado — rodízio por bairro */}
      <section className="mx-auto max-w-4xl px-4 pt-12 lg:px-8 lg:pt-16">
        <figure className="relative rounded-3xl ring-1 ring-border bg-card shadow-xl">
          <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[11px] font-black uppercase tracking-wide text-primary-foreground shadow-md whitespace-nowrap">
            <MapPin className="h-3.5 w-3.5" /> Projeto Fast Vidro • {nome}
          </div>
          <img
            src={projeto.src}
            alt={projetoAlt}
            loading="lazy"
            decoding="async"
            className="w-full h-[240px] sm:h-[320px] lg:h-[400px] object-contain rounded-3xl"
          />
          <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 lg:p-8 rounded-b-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              Modelo instalado
            </p>
            <p className="mt-1 text-white text-lg lg:text-2xl font-black leading-tight">
              {projeto.modelo}
            </p>
          </figcaption>
        </figure>
      </section>

      {/* Texto da zona (único por zona — evita duplicidade) */}
      <section className="mx-auto max-w-4xl px-4 py-14 lg:px-8 lg:py-16">
        <p className="text-base lg:text-lg leading-relaxed text-foreground/90">{zona.texto}</p>
      </section>

      {/* H2 Segurança */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
            <Shield className="h-3 w-3" /> Segurança certificada
          </div>
          <h2 className="mt-4 text-3xl lg:text-4xl font-black leading-tight">
            Box de Banheiro em {nome} com Película de Alta Resistência
          </h2>
          <div className="mt-6 rounded-2xl bg-background p-7 border border-border">
            <h3 className="text-lg font-black">Compromisso com a Segurança da Sua Família</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">
              Na Fast Vidro, segurança não é um opcional. Todos os nossos projetos de box de vidro
              contam com vidros temperados normatizados e a opção de aplicação da película de
              segurança de alta resistência. Caso ocorra qualquer quebra por forte impacto, a
              película retém 100% dos fragmentos fixados na estrutura, impedindo acidentes graves.
            </p>
            <Link
              to="/box-de-banheiro/secure-box"
              className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary hover:underline"
            >
              Conheça o Secure Box <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* H3 Modelos */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-20">
        <h3 className="text-3xl lg:text-4xl font-black leading-tight">
          Soluções em Vidros e Box Mais Procurados em {nome}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
          Os modelos mais instalados em imóveis da {zona.label} pela equipe Fast Vidro.
        </p>

        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {MODELOS.map((m) => (
            <li key={m.nome}>
              <Link
                to={m.to}
                className="group block h-full rounded-2xl border border-border bg-card p-7 hover:border-primary hover:shadow-yellow transition"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Check className="h-5 w-5" />
                </span>
                <h4 className="mt-4 text-lg font-black leading-tight">{m.nome}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-primary">
                  Ver modelo <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 rounded-xl px-8 py-5 text-base lg:text-lg font-bold text-white shadow-lg hover:scale-[1.02] transition"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="h-6 w-6" />
            Falar com Especialista no WhatsApp
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
