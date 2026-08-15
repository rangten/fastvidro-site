import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, MapPin, MessageCircle, ArrowRight, Shield, ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { bairroFromSlug, type ZonaInfo } from "@/lib/bairros";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { RegioesPremiumFooter } from "@/components/RegioesPremiumFooter";
import heroImg from "@/assets/regioes-sp-hero.webp";
import secureHero from "@/assets/secure-box-hero.webp";
import securePelicula from "@/assets/secure-box-pelicula.webp";
import secureLogo from "@/assets/secure-box-logo.webp";
import secureCover from "@/assets/blog-secure-box-cover.webp";

const GALERIA = [
  { src: secureHero, modelo: "Secure Box Instalado" },
  { src: securePelicula, modelo: "Película Antiestilhaço" },
  { src: secureCover, modelo: "Aplicação Profissional" },
  { src: secureLogo, modelo: "Selo Secure Box" },
] as const;

const H1_VARIACOES = [
  (b: string) => `Box Seguro em ${b} | Película de Segurança para Box`,
  (b: string) => `Como Deixar meu Box Seguro no ${b}? Película Anti Estilhaço`,
  (b: string) => `Película Segurança Box no ${b} | Proteção Antiestilhaço e Instalação Rápida`,
  (b: string) => `Película de Segurança para Box de Banheiro em ${b} | Fast Vidros`,
  (b: string) => `Secure Box no ${b} | Instalação de Película Anti Estilhaço para Box Seguro`,
];

const INTRO_VARIACOES = [
  (b: string) =>
    `Se você quer saber como deixar meu box seguro para proteger sua família contra acidentes domésticos, a Fast Vidros traz a solução ideal para o ${b}. O Secure Box consiste na aplicação de uma película de segurança para box de alta resistência. Caso ocorra a quebra do vidro temperado, a película anti estilhaço retém todos os fragmentos grudados na estrutura, eliminando o risco de cortes graves e garantindo total tranquilidade no banho.`,
  (b: string) =>
    `A segurança dentro do banheiro é uma prioridade absoluta, e a melhor forma de ter um box seguro no ${b} é com o nosso sistema de proteção ativa. Instalamos a película segurança box diretamente nos vidros temperados na sua residência. Essa película de segurança para box atua como um escudo invisível de alta performance mecânica, impedindo que os estilhaços se espalhem pelo chão caso o vidro venha a sofrer algum impacto.`,
  (b: string) =>
    `Procurando por película anti estilhaço para garantir um box seguro na sua casa ou apartamento no ${b}? A Fast Vidros realiza a aplicação especializada com corte preciso e película homologada de alta resistência. Descubra como deixar meu box seguro de verdade com nossa película segurança box, que oferece uma camada extra de proteção mecânica sem alterar a estética e a transparência original do seu vidro.`,
  (b: string) =>
    `Evite acidentes graves no banheiro aplicando a película de segurança para box da Fast Vidros no ${b}. Esse sistema inovador de película segurança box é essencial para lares com crianças, idosos ou pets. Em caso de quebra por impacto ou choque térmico, a tecnologia da nossa película anti estilhaço mantém toda a estrutura firme e intacta até que a manutenção ou substituição do vidro seja feita com total segurança.`,
  (b: string) =>
    `Muitas pessoas pesquisam sobre como deixar meu box seguro após ouvirem relatos de vidros de banheiro que estouram espontaneamente. No ${b}, a Fast Vidros resolve essa preocupação com a aplicação rápida de película anti estilhaço de padrão profissional. Tenha um box seguro de verdade aplicando a película segurança box com nossa equipe técnica qualificada, garantindo excelente durabilidade, fácil limpeza e proteção máxima para quem você mais ama.`,
];

const MODELOS_DESTAQUE = [
  {
    nome: (b: string) => `Secure Box Tradicional em ${b}`,
    to: "/box-de-banheiro/secure-box" as const,
    desc: "Box de correr com película antiestilhaço aplicada — segurança para famílias com crianças, idosos e pets.",
  },
  {
    nome: (b: string) => `Box Elegance com Película em ${b}`,
    to: "/box-de-banheiro/elegance" as const,
    desc: "Alto padrão com roldanas aparentes combinado à proteção Secure Box para máxima tranquilidade.",
  },
  {
    nome: (b: string) => `Box Piso-Teto Seguro em ${b}`,
    to: "/box-de-banheiro/piso-teto" as const,
    desc: "Vedação total do chão ao teto com aplicação da película de segurança para banheiros modernos.",
  },
  {
    nome: (b: string) => `Box Flex Sanfonado no ${b}`,
    to: "/box-de-banheiro/flex" as const,
    desc: "Ideal para banheiros compactos, também pode receber a aplicação Secure Box para reforço mecânico.",
  },
  {
    nome: (b: string) => `Box Tradicional de Correr em ${b}`,
    to: "/box-de-banheiro/tradicional" as const,
    desc: "O modelo clássico e econômico com opção de reforço via película antiestilhaço homologada.",
  },
  {
    nome: (b: string) => `Ver Todos os Modelos em ${b}`,
    to: "/box-de-banheiro" as const,
    desc: "Explore o catálogo completo Fast Vidro e escolha o modelo ideal para receber a proteção Secure Box.",
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

type LoaderData = { nome: string; zona: ZonaInfo };

export const Route = createFileRoute("/secure-box/$bairro")({
  loader: ({ params }): LoaderData => {
    const bairro = bairroFromSlug(params.bairro);
    if (!bairro) throw notFound();
    return { nome: bairro.nome, zona: bairro.zona };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Secure Box — Fast Vidro" }] };
    const { nome } = loaderData;
    const seed = hashSlug(params.bairro);
    const title = H1_VARIACOES[seed % H1_VARIACOES.length](nome) + " — Fast Vidro";
    const desc = `Aplicação de película de segurança antiestilhaço para box de banheiro no ${nome}. Proteja sua família com o sistema Secure Box da Fast Vidro.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:image", content: secureLogo },
      ],
    };
  },
  component: SecureBoxBairroPage,
});

function SecureBoxBairroPage() {
  const { nome, zona } = Route.useLoaderData();
  const { bairro: slug } = Route.useParams();
  const seed = hashSlug(slug);

  const h1 = H1_VARIACOES[seed % H1_VARIACOES.length](nome);
  const intro = INTRO_VARIACOES[seed % INTRO_VARIACOES.length](nome);
  const galeria = pickGallery(seed, 4);

  const waMsg = `Olá! Gostaria de um orçamento do Secure Box (película de segurança antiestilhaço) da Fast Vidros para meu imóvel em ${nome}.`;
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
            to="/box-de-banheiro/secure-box"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Secure Box
          </Link>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] ring-1 ring-white/20">
            <MapPin className="h-3 w-3 text-primary" /> {zona.label} • São Paulo
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] max-w-4xl">
            {h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">
            Película de segurança antiestilhaço aplicada por equipe técnica Fast Vidros em {nome}.
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
          Aplicações Secure Box em {nome}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          Exemplos reais de instalação da película antiestilhaço pela equipe Fast Vidros na {zona.label}.
        </p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galeria.map((g, i) => (
            <li key={i} className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[4/5] overflow-hidden bg-black/5">
                <img
                  src={g.src}
                  alt={`${g.modelo} aplicado em ${nome} — Fast Vidros`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition"
                />
              </div>
              <div className="p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Secure Box Fast Vidros
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
          Modelos Compatíveis com Secure Box em {nome}
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
            Proteção Antiestilhaço no {nome}
          </h2>
          <div className="mt-6 rounded-2xl bg-background p-7 border border-border">
            <p className="text-sm leading-relaxed text-foreground/85">
              A película Secure Box é homologada, de alta resistência mecânica e aplicada
              conforme as recomendações técnicas para vidros temperados de segurança
              (<strong>NBR 7199</strong> e <strong>NBR NM 294</strong>). Em caso de impacto
              ou choque térmico, os fragmentos permanecem retidos na estrutura, evitando
              cortes graves e garantindo tempo hábil para substituição segura do vidro.
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

      <RegioesPremiumFooter basePath="/secure-box" />
    </SiteLayout>
  );
}
