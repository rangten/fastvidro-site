import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, MapPin, MessageCircle, ArrowRight, Shield, ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { bairroFromSlug } from "@/lib/bairros";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { RegioesPremiumFooter } from "@/components/RegioesPremiumFooter";
import heroImg from "@/assets/regioes-sp-hero.jpg";
import espOrganico from "@/assets/espelho-organico.png";
import espBisote from "@/assets/espelho-bisote.png";
import espLapidado from "@/assets/espelho-lapidado.png";
import espBanheiro from "@/assets/espelho-banheiro.jpg";
import espPainel from "@/assets/painel-espelho.jpg";
import espSala from "@/assets/espelhos-hero-sala-jantar.png";

const GALERIA = [
  { src: espOrganico, modelo: "Espelho Orgânico" },
  { src: espBisote, modelo: "Espelho Bisotê" },
  { src: espLapidado, modelo: "Espelho Lapidado" },
  { src: espBanheiro, modelo: "Espelho para Banheiro" },
  { src: espPainel, modelo: "Painel de Espelho" },
  { src: espSala, modelo: "Espelho Decorativo" },
] as const;

const H1_VARIACOES = [
  (b: string) => `Espelhos sob Medida em ${b} | Instalação Premium`,
  (b: string) => `Fábrica de Espelhos em ${b}: Orgânicos, Bisotês e Painéis`,
  (b: string) => `Onde Comprar Espelho sob Medida no ${b}? Fast Vidro`,
  (b: string) => `Espelhos Decorativos e Lapidados com Fixação Segura em ${b}`,
  (b: string) => `Espelho para Banheiro, Sala e Closet sob Medida no ${b}`,
];

const INTRO_VARIACOES = [
  (b: string) =>
    `Um espelho planejado de alto padrão tem o poder de transformar completamente a percepção de espaço do seu ambiente. Na Fast Vidro, nós cortamos, lapidamos e instalamos espelhos sob medida no ${b}. Utilizamos chapas premium de alta refletividade com dupla camada de prata, o que elimina qualquer distorção na imagem. Toda a instalação é feita com fixação invisível de alta performance e segurança.`,
  (b: string) =>
    `Procurando por espelhos decorativos ou painéis amplos no ${b}? Nós desenvolvemos projetos sob medida que integram perfeitamente a arquitetura do seu espaço. Seja para um espelho orgânico no lavabo ou paredes inteiras espelhadas para closets e academias, nossa equipe técnica executa o serviço de forma limpa, rápida e seguindo as normas rígidas de segurança para vidros.`,
  (b: string) =>
    `Leve muito mais sofisticação, brilho e sensação de amplitude para a sua casa ou comércio no ${b}. A Fast Vidro é especialista em lapidação e acabamento bisotê para espelhos sob medida. Trabalhamos com matéria-prima de excelente qualidade que previne manchas e oxidação precoce, garantindo uma durabilidade muito superior e uma instalação impecável e segura.`,
  (b: string) =>
    `Se você valoriza acabamento impecável e design de interiores moderno, nossa linha de espelhos no ${b} vai superar suas expectativas. Desenvolvemos desde espelhos com LED integrado até painéis inteiros sob medida para halls de entrada, quartos e salas de jantar. Nosso processo de corte e lapidação computadorizado garante bordas perfeitas e segurança total na colagem estrutural.`,
  (b: string) =>
    `Transforme a iluminação natural e a estética do seu imóvel no ${b} com os espelhos decorativos da Fast Vidro. Realizamos projetos personalizados de espelhos bisotados e lapidados, utilizando técnicas avançadas de fixação com fitas de alta aderência e silicones neutros específicos para espelhos, evitando manchas escuras ao longo dos anos e garantindo total estabilidade.`,
];

const MODELOS_DESTAQUE = [
  {
    nome: (b: string) => `Espelho Orgânico em ${b}`,
    to: "/espelhos/organico" as const,
    desc: "Tendência de design com formas fluidas e naturais, lapidação impecável e perfeito para lavabos, salas e halls de entrada.",
  },
  {
    nome: (b: string) => `Painel de Espelho em ${b}`,
    to: "/espelhos/painel" as const,
    desc: "Ideal para academias, estúdios, salas de jantar e closets. Amplia visualmente o espaço e otimiza a iluminação natural.",
  },
  {
    nome: (b: string) => `Espelho Bisotê em ${b}`,
    to: "/espelhos/bisote" as const,
    desc: "Acabamento clássico com borda chanfrada e brilhante que cria uma moldura delicada no próprio vidro, levando luxo ao ambiente.",
  },
  {
    nome: (b: string) => `Espelho Lapidado em ${b}`,
    to: "/espelhos/lapidado" as const,
    desc: "Bordas retas, polidas e com acabamento liso e seguro. Ideal para colagem direta em paredes de banheiros e quartos.",
  },
  {
    nome: (b: string) => `Espelho com LED em ${b}`,
    to: "/espelhos-led" as const,
    desc: "Iluminação embutida uniforme e moderna, ideal para camarins, banheiros e maquiagem com fiação oculta de alto padrão.",
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

export const Route = createFileRoute("/espelhos/$bairro")({
  loader: ({ params }) => {
    const data = bairroFromSlug(params.bairro);
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Espelhos sob Medida — Fast Vidro" }] };
    const { nome } = loaderData;
    const seed = hashSlug(params.bairro);
    const title = H1_VARIACOES[seed % H1_VARIACOES.length](nome) + " — Fast Vidro";
    const desc = `Espelhos orgânicos, lapidados, bisotados e painéis sob medida com fixação invisível de alta segurança no ${nome}. Peça seu orçamento com a Fast Vidro.`;
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
  component: EspelhoBairroPage,
});

function EspelhoBairroPage() {
  const { nome, zona } = Route.useLoaderData();
  const { bairro: slug } = Route.useParams();
  const seed = hashSlug(slug);

  const h1 = H1_VARIACOES[seed % H1_VARIACOES.length](nome);
  const intro = INTRO_VARIACOES[seed % INTRO_VARIACOES.length](nome);
  const galeria = pickGallery(seed, 4);

  const waMsg = `Olá! Gostaria de um orçamento de espelhos sob medida da Fast Vidro para meu imóvel em ${nome}.`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;

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
          <Link
            to="/espelhos"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Espelhos
          </Link>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] ring-1 ring-white/20">
            <MapPin className="h-3 w-3 text-primary" /> {zona.label} • São Paulo
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] max-w-4xl">
            {h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">
            Espelhos orgânicos, lapidados, bisotados e painéis sob medida com fixação invisível de alta segurança no {nome}.
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

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-14 lg:px-8 lg:py-16">
        <p className="text-base lg:text-lg leading-relaxed text-foreground/90">{intro}</p>
      </section>

      {/* Galeria randomizada */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 pb-8">
        <h2 className="text-2xl lg:text-3xl font-black leading-tight">
          Projetos de Espelhos Instalados em {nome}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          Uma seleção de projetos reais entregues pela equipe Fast Vidro na {zona.label}.
        </p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galeria.map((g, i) => (
            <li
              key={i}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden bg-black/5">
                <img
                  src={g.src}
                  alt={`${g.modelo} instalado em ${nome} — Fast Vidro`}
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

      {/* Modelos em destaque */}
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

      {/* Selo Garantia */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
            <Shield className="h-3 w-3" /> Garantia técnica
          </div>
          <h2 className="mt-4 text-3xl lg:text-4xl font-black leading-tight">
            Qualidade e Instalação Limpa no {nome}
          </h2>
          <div className="mt-6 rounded-2xl bg-background p-7 border border-border">
            <p className="text-sm leading-relaxed text-foreground/85">
              Processo executado seguindo as normas técnicas de segurança para espelhos
              (<strong>NBR 15198</strong>), garantindo que as peças sejam fixadas sem risco
              de oxidação ou queda. Utilizamos silicones neutros específicos para espelhos e
              fitas de alta aderência estrutural, preservando a camada de prata e evitando
              manchas escuras ao longo dos anos.
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

      <RegioesPremiumFooter />
    </SiteLayout>
  );
}
