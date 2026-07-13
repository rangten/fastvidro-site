import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, MapPin, MessageCircle, ArrowRight, Shield, ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { ModelDetailPage } from "@/components/ModelDetailPage";
import { getModel } from "@/lib/catalog";
import { bairroFromSlug, type ZonaInfo } from "@/lib/bairros";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { RegioesPremiumFooter } from "@/components/RegioesPremiumFooter";
import heroImg from "@/assets/regioes-sp-hero.jpg";
import pCorrer from "@/assets/porta-correr.png";
import pVersatik from "@/assets/porta-versatik.png";
import pGiro from "@/assets/porta-de-giro.png";
import pFlex from "@/assets/porta-flex.png";
import pNobre from "@/assets/porta-nobre.png";
import pVision from "@/assets/porta-vision.png";
import pFachada from "@/assets/portas-vidro-hero-fachada.png";

const GALERIA = [
  { src: pCorrer, modelo: "Porta de Correr" },
  { src: pVersatik, modelo: "Porta Versatik" },
  { src: pGiro, modelo: "Porta de Abrir (Giro)" },
  { src: pFlex, modelo: "Porta Flex" },
  { src: pNobre, modelo: "Porta Nobre" },
  { src: pVision, modelo: "Porta Vision" },
  { src: pFachada, modelo: "Fachada em Vidro" },
] as const;

const H1_VARIACOES = [
  (b: string) => `Portas de Vidro sob Medida em ${b} | Pronta Entrega e Instalação`,
  (b: string) => `Divisórias e Portas de Vidro Temperado no ${b}`,
  (b: string) => `Portas de Correr e Sistema Versatik em ${b} | Fast Vidro`,
  (b: string) => `Instalação de Portas de Vidro de Alto Padrão no ${b}`,
  (b: string) => `Portas de Vidro Temperado para Cozinha, Sala e Entrada em ${b}`,
];

const INTRO_VARIACOES = [
  (b: string) =>
    `Integre seus ambientes com elegância, aproveitando o máximo da luz natural na sua casa ou escritório no ${b}. Nossas portas de vidro sob medida são produzidas com vidros temperados certificados de alta resistência. Equipadas com sistemas de roldanas aparentes ou trilhos embutidos de alumínio, elas proporcionam um deslizamento extremamente suave, silencioso e duradouro.`,
  (b: string) =>
    `Se você precisa de otimização de espaço e um design moderno no ${b}, as portas de correr e divisórias de vidro da Fast Vidro são a escolha ideal. Atendemos projetos residenciais e comerciais instalando sistemas de alta performance, como a linha Versatik para grandes vãos. Garantimos segurança absoluta com vidros temperados de espessura certificada.`,
  (b: string) =>
    `Divida seus ambientes sem perder a sensação de amplitude. A Fast Vidro projeta e instala portas de giro, portas de correr e painéis divisórios de vidro no ${b}. Trabalhamos apenas com ferragens premium com amortecedores contra impactos e vidros de segurança de alta resistência mecânica, oferecendo soluções com estética impecável e funcionamento perfeito.`,
  (b: string) =>
    `Traga mais funcionalidade e sofisticação para os acessos da sua residência ou estabelecimento comercial no ${b}. Nossa equipe é especialista no desenvolvimento e instalação de portas de vidro temperado de correr ou de abrir (giro). Unimos a leveza do vidro à robustez de perfis de alumínio modernos e puxadores de inox que garantem alta durabilidade às peças.`,
  (b: string) =>
    `Renove a transição entre sua cozinha, lavanderia, sala ou área externa com as portas de vidro personalizadas da Fast Vidro no ${b}. Projetamos portas sob medida com folhas de vidro lapidadas, oferecendo opções de vidros transparentes, serigrafados, jateados ou com películas especiais de controle de privacidade, sempre focando em segurança e isolamento acústico eficiente.`,
];

const MODELOS_DESTAQUE = [
  {
    nome: (b: string) => `Porta de Vidro de Correr em ${b}`,
    to: "/portas-de-vidro/correr" as const,
    desc: "Otimização inteligente de espaço com trilhos modernos de alumínio ou roldanas aparentes em aço inox.",
  },
  {
    nome: (b: string) => `Porta Sistema Versatik em ${b}`,
    to: "/portas-de-vidro/versatik" as const,
    desc: "Sistema de trilho triplo onde as folhas correm juntas, garantindo até 70% de abertura livre para vãos maiores.",
  },
  {
    nome: (b: string) => `Porta de Vidro de Abrir (Giro) em ${b}`,
    to: "/portas-de-vidro/abrir" as const,
    desc: "Solução clássica com molas hidráulicas de piso ou dobradiças de alta durabilidade, ideal para passagens frequentes.",
  },
  {
    nome: (b: string) => `Porta Flex (Sanfonada) em ${b}`,
    to: "/portas-de-vidro/flex" as const,
    desc: "Folhas articuladas que se recolhem lateralmente, liberando praticamente todo o vão para integração total.",
  },
  {
    nome: (b: string) => `Porta Vision Minimalista em ${b}`,
    to: "/portas-de-vidro/vision" as const,
    desc: "Perfil ultrafino com vidro temperado de alta segurança, visual limpo para escritórios, lofts e salas de reunião.",
  },
  {
    nome: (b: string) => `Porta Nobre em ${b}`,
    to: "/portas-de-vidro/nobre" as const,
    desc: "Acabamento premium com ferragens de alto padrão, ideal para entradas sociais e ambientes de destaque.",
  },
] as const;

function hashSlug(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function pickGallery(seed: number, count: number) {
  const arr = [...GALERIA];
  const out: typeof GALERIA[number][] = [];
  for (let i = 0; i < count && arr.length; i++) {
    const idx = (seed + i * 7) % arr.length;
    out.push(arr.splice(idx, 1)[0]);
  }
  return out;
}

type LoaderData =
  | { kind: "model"; data: NonNullable<ReturnType<typeof getModel>> }
  | { kind: "bairro"; nome: string; zona: ZonaInfo };

export const Route = createFileRoute("/portas-de-vidro/$modelo")({
  loader: ({ params }): LoaderData => {
    const model = getModel("portas-de-vidro", params.modelo);
    if (model) return { kind: "model", data: model };
    const bairro = bairroFromSlug(params.modelo);
    if (bairro) return { kind: "bairro", nome: bairro.nome, zona: bairro.zona };
    throw notFound();
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Portas de Vidro — Fast Vidro" }] };
    if (loaderData.kind === "model") {
      const { model } = loaderData.data;
      return {
        meta: [
          { title: `Porta ${model.name} — Fast Vidro` },
          { name: "description", content: model.description },
          { property: "og:title", content: `Porta ${model.name} — Fast Vidro` },
          { property: "og:description", content: model.description },
        ],
      };
    }
    const { nome } = loaderData;
    const seed = hashSlug(params.modelo);
    const title = H1_VARIACOES[seed % H1_VARIACOES.length](nome) + " — Fast Vidro";
    const desc = `Portas de correr, sistema Versatik, portas de abrir e divisórias de vidro temperado sob medida no ${nome}. Peça seu orçamento com a Fast Vidro.`;
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
  component: PortaDispatch,
});

function PortaDispatch() {
  const loaderData = Route.useLoaderData();
  if (loaderData.kind === "model") {
    const { category, model } = loaderData.data;
    return (
      <SiteLayout>
        <ModelDetailPage category={category} model={model} />
      </SiteLayout>
    );
  }
  return <PortaBairroPage nome={loaderData.nome} zona={loaderData.zona} />;
}

function PortaBairroPage({ nome, zona }: { nome: string; zona: ZonaInfo }) {
  const { modelo: slug } = Route.useParams();
  const seed = hashSlug(slug);

  const h1 = H1_VARIACOES[seed % H1_VARIACOES.length](nome);
  const intro = INTRO_VARIACOES[seed % INTRO_VARIACOES.length](nome);
  const galeria = pickGallery(seed, 4);

  const waMsg = `Olá! Gostaria de um orçamento de portas de vidro sob medida da Fast Vidro para meu imóvel em ${nome}.`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <Link
            to="/portas-de-vidro"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Portas de Vidro
          </Link>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] ring-1 ring-white/20">
            <MapPin className="h-3 w-3 text-primary" /> {zona.label} • São Paulo
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] max-w-4xl">
            {h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">
            Portas de correr, divisórias de ambientes, sistemas Versatik e portas de abrir com vidro temperado de alta resistência no {nome}.
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

      <section className="mx-auto max-w-4xl px-4 py-14 lg:px-8 lg:py-16">
        <p className="text-base lg:text-lg leading-relaxed text-foreground/90">{intro}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8 pb-8">
        <h2 className="text-2xl lg:text-3xl font-black leading-tight">
          Projetos de Portas de Vidro Instalados em {nome}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          Uma seleção de projetos reais entregues pela equipe Fast Vidro na {zona.label}.
        </p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galeria.map((g, i) => (
            <li key={i} className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[4/5] overflow-hidden bg-black/5">
                <img
                  src={g.src}
                  alt={`${g.modelo} instalada em ${nome} — Fast Vidro`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition"
                />
              </div>
              <div className="p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Projeto Fast Vidro
                </p>
                <p className="mt-1 text-sm font-black leading-tight">
                  {g.modelo} • {nome}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-20">
        <h2 className="text-3xl lg:text-4xl font-black leading-tight">
          Modelos em Destaque em {nome}
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MODELOS_DESTAQUE.map((m) => (
            <li key={m.to}>
              <Link
                to={m.to}
                className="group block h-full rounded-2xl border border-border bg-card p-7 hover:border-primary hover:shadow-yellow transition"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-black leading-tight">{m.nome(nome)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-primary">
                  Ver modelo <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
            <Shield className="h-3 w-3" /> Segurança certificada
          </div>
          <h2 className="mt-4 text-3xl lg:text-4xl font-black leading-tight">
            Segurança Certificada no {nome}
          </h2>
          <div className="mt-6 rounded-2xl bg-background p-7 border border-border">
            <p className="text-sm leading-relaxed text-foreground/85">
              Todas as portas e divisórias utilizam vidros temperados rigorosamente em
              conformidade com as normas <strong>NBR 14698</strong> e <strong>NBR 7199</strong>,
              garantindo resistência até 5x superior a impactos. Ferragens com amortecimento
              de fechamento, trilhos de alumínio anodizado e instalação limpa por equipe
              própria Fast Vidro.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
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
        </div>
      </section>

      <RegioesPremiumFooter basePath="/portas-de-vidro" />
    </SiteLayout>
  );
}
