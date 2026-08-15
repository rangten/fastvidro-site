import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, MapPin, MessageCircle, ArrowRight, Shield, ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { ModelDetailPage } from "@/components/ModelDetailPage";
import { getModel } from "@/lib/catalog";
import { bairroFromSlug, type ZonaInfo } from "@/lib/bairros";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { RegioesPremiumFooter } from "@/components/RegioesPremiumFooter";
import heroImg from "@/assets/regioes-sp-hero.webp";
import pGuardaCorpo from "@/assets/projeto-guarda-corpo.webp";
import pSacada from "@/assets/projeto-fechamento-sacada.webp";
import pCoberturas from "@/assets/projeto-coberturas.webp";
import pComercial from "@/assets/projeto-comercial.webp";
import pEscritorios from "@/assets/projeto-escritorios.webp";
import pResidencial from "@/assets/projeto-residencial.webp";
import pFachada from "@/assets/projetos-hero-fachada-clara.webp";

const GALERIA = [
  { src: pGuardaCorpo, modelo: "Guarda-corpo de Vidro" },
  { src: pSacada, modelo: "Fechamento de Sacada" },
  { src: pCoberturas, modelo: "Cobertura de Vidro" },
  { src: pComercial, modelo: "Fachada Comercial" },
  { src: pEscritorios, modelo: "Divisórias para Escritórios" },
  { src: pResidencial, modelo: "Projeto Residencial" },
  { src: pFachada, modelo: "Fachada em Vidro" },
] as const;

const H1_VARIACOES = [
  (b: string) => `Vidraçaria de Projetos Especiais em ${b}`,
  (b: string) => `Guarda-Corpo, Sacadas e Coberturas de Vidro em ${b}`,
  (b: string) => `Projetos sob Medida em Vidro Temperado e Laminado no ${b}`,
  (b: string) => `Engenharia em Vidro e Soluções Especiais no ${b} | Fast Vidro`,
  (b: string) => `Instalação de Fachadas, Coberturas e Guarda-Corpo de Vidro em ${b}`,
];

const INTRO_VARIACOES = [
  (b: string) =>
    `Executamos projetos de engenharia em vidro que exigem máxima precisão técnica, segurança e acabamento premium no ${b}. Desde guarda-corpos imponentes para escadas e mezaninos até coberturas de vidro laminado de segurança. Contamos com tecnologia de medição digital a laser e instaladores próprios treinados para garantir uma execução sem dores de cabeça.`,
  (b: string) =>
    `A Fast Vidro é a sua parceira ideal para tirar do papel projetos arquitetônicos complexos em vidro no ${b}. Desenvolvemos soluções personalizadas para fechamentos de sacada (cortina de vidro), fachadas comerciais e vitrines que valorizam o seu imóvel. Aliamos vidros certificados das melhores marcas a uma instalação rápida que respeita o seu cronograma.`,
  (b: string) =>
    `Traga segurança, modernidade e valorização patrimonial para sua obra no ${b}. Nós nos especializamos em estruturas de vidro sob medida, calculadas rigorosamente sob as normas técnicas NBR 7199 e NBR 14718. Oferecemos suporte técnico completo do início ao fim do projeto para garantir uma estrutura perfeitamente alinhada, robusta e esteticamente deslumbrante.`,
  (b: string) =>
    `Se você busca uma vidraçaria parceira para executar coberturas de vidro, fechamentos residenciais ou estruturas comerciais no ${b}, a Fast Vidro entrega a melhor solução. Desenvolvemos projetos inteligentes em vidro laminado ou temperado, utilizando ferragens estruturais de altíssima performance que resistem bravamente a intempéries e cargas de vento.`,
  (b: string) =>
    `Eleve o design e a proteção do seu imóvel com as soluções de guarda-corpo de vidro e cortinas de vidro para sacada da Fast Vidro no ${b}. Atuamos com foco em engenharia aplicada, realizando testes de prumo e nível a laser e garantindo fixações robustas com acabamentos em inox ou alumínio anodizado que combinam proteção absoluta e sofisticação.`,
];

const MODELOS_DESTAQUE = [
  {
    nome: (b: string) => `Guarda-Corpo de Vidro em ${b}`,
    to: "/projetos/guarda-corpo" as const,
    desc: "Segurança intransigente para escadas, sacadas e mezaninos, com fixação por torres de inox ou botões de alta resistência.",
  },
  {
    nome: (b: string) => `Fechamento de Sacada em ${b}`,
    to: "/projetos/fechamento-sacada" as const,
    desc: "Sistema retrátil de cortina de vidro que protege sua varanda contra ventos, chuvas e poeira, reduzindo ruídos externos.",
  },
  {
    nome: (b: string) => `Coberturas de Vidro em ${b}`,
    to: "/projetos/coberturas" as const,
    desc: "Estrutura metálica integrada a vidros laminados de segurança com película PVB, ideal para garagens, áreas gourmet e pergolados.",
  },
  {
    nome: (b: string) => `Fachadas e Vitrines de Lojas em ${b}`,
    to: "/projetos/comercial" as const,
    desc: "Vidros temperados de grandes dimensões e alta transparência projetados para destacar comércios com máxima segurança patrimonial.",
  },
  {
    nome: (b: string) => `Projetos Residenciais em ${b}`,
    to: "/projetos/residencial" as const,
    desc: "Soluções sob medida para casas e apartamentos: divisórias, box, portas, espelhos e coberturas em um único fornecedor.",
  },
  {
    nome: (b: string) => `Divisórias para Escritórios em ${b}`,
    to: "/projetos/escritorios" as const,
    desc: "Divisórias de vidro temperado com perfis minimalistas, ideais para salas de reunião, coworkings e ambientes corporativos.",
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

export const Route = createFileRoute("/projetos/$modelo")({
  loader: ({ params }): LoaderData => {
    const model = getModel("projetos", params.modelo);
    if (model) return { kind: "model", data: model };
    const bairro = bairroFromSlug(params.modelo);
    if (bairro) return { kind: "bairro", nome: bairro.nome, zona: bairro.zona };
    throw notFound();
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Projetos — Fast Vidro" }] };
    if (loaderData.kind === "model") {
      const { model } = loaderData.data;
      return {
        meta: [
          { title: `Projeto ${model.name} — Fast Vidro` },
          { name: "description", content: model.description },
          { property: "og:title", content: `Projeto ${model.name} — Fast Vidro` },
          { property: "og:description", content: model.description },
        ],
      };
    }
    const { nome } = loaderData;
    const seed = hashSlug(params.modelo);
    const title = H1_VARIACOES[seed % H1_VARIACOES.length](nome) + " — Fast Vidro";
    const desc = `Guarda-corpos, fechamentos de sacada, coberturas e estruturas de vidro sob medida no ${nome}. Engenharia com normas NBR 7199 e NBR 14718.`;
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
  component: ProjetoDispatch,
});

function ProjetoDispatch() {
  const loaderData = Route.useLoaderData();
  if (loaderData.kind === "model") {
    const { category, model } = loaderData.data;
    return (
      <SiteLayout>
        <ModelDetailPage category={category} model={model} />
      </SiteLayout>
    );
  }
  return <ProjetoBairroPage nome={loaderData.nome} zona={loaderData.zona} />;
}

function ProjetoBairroPage({ nome, zona }: { nome: string; zona: ZonaInfo }) {
  const { modelo: slug } = Route.useParams();
  const seed = hashSlug(slug);

  const h1 = H1_VARIACOES[seed % H1_VARIACOES.length](nome);
  const intro = INTRO_VARIACOES[seed % INTRO_VARIACOES.length](nome);
  const galeria = pickGallery(seed, 4);

  const waMsg = `Olá! Gostaria de um orçamento de projeto especial em vidro (guarda-corpo, sacada, cobertura ou fachada) da Fast Vidro para meu imóvel em ${nome}.`;
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
            to="/projetos"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Projetos
          </Link>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] ring-1 ring-white/20">
            <MapPin className="h-3 w-3 text-primary" /> {zona.label} • São Paulo
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] max-w-4xl">
            {h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">
            Guarda-corpos, fechamentos de sacada, coberturas e estruturas de vidro sob medida no {nome}.
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
          Projetos Especiais Executados em {nome}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          Uma seleção de obras reais entregues pela equipe Fast Vidro na {zona.label}.
        </p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galeria.map((g, i) => (
            <li key={i} className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[4/5] overflow-hidden bg-black/5">
                <img width={1200} height={800}
                  src={g.src}
                  alt={`${g.modelo} executado em ${nome} — Fast Vidro`}
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
                  Ver projeto <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
            <Shield className="h-3 w-3" /> Engenharia rigorosa
          </div>
          <h2 className="mt-4 text-3xl lg:text-4xl font-black leading-tight">
            Engenharia Rigorosa no {nome}
          </h2>
          <div className="mt-6 rounded-2xl bg-background p-7 border border-border">
            <p className="text-sm leading-relaxed text-foreground/85">
              Nossos projetos especiais são calculados e executados sob o padrão técnico das
              normas <strong>NBR 7199</strong> (vidros na construção civil) e{" "}
              <strong>NBR 14718</strong> (guarda-corpos), garantindo estabilidade estrutural
              absoluta. Medição digital a laser, ferragens estruturais e instalação por
              equipe própria treinada.
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

      <RegioesPremiumFooter basePath="/projetos" />
    </SiteLayout>
  );
}
