import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Shield, ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { WHATSAPP_NUMBER } from "@/lib/site";
import type { ZonaInfo } from "@/lib/bairros";

import projeto1 from "@/assets/projeto-box-piso-teto-frontal-reto.jpg";
import projeto2 from "@/assets/projeto-box-canto-tradicional-reto.jpg";
import projeto3 from "@/assets/projeto-box-flex.jpg";
import projeto4 from "@/assets/projeto-box-porta-abrir.jpg";
import projeto5 from "@/assets/projeto-box-piso-teto-canto-cromado.jpg";

// Arrays separados — substitua futuramente por fotos reais por cor
export const FOTOS_FUME = [projeto1, projeto2, projeto3, projeto4, projeto5];
export const FOTOS_INCOLOR = [projeto5, projeto4, projeto3, projeto2, projeto1];

function hashSlug(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

interface Props {
  nome: string;
  zona: ZonaInfo;
  cor: "fume" | "incolor";
}

const COPY = {
  fume: {
    label: "Box Fumê",
    h1: (b: string) => `Box de Vidro Fumê em ${b}`,
    h2: "Procurando Box para Banheiro Fumê com Instalação Rápida?",
    paragrafo: (b: string) =>
      `A Fast Vidro é especialista na instalação de Box de Vidro Fumê em ${b}. Atendemos residências e condomínios com uma linha moderna que traz privacidade e sofisticação ao ambiente, incluindo o box de vidro elegance fumê, o prático box de vidro flex fumê para banheiros compactos, além dos modelos frontal, de canto e de abrir. Realizamos medição digital a laser no seu endereço em ${b} para garantir encaixe perfeito.`,
    wa: (b: string) =>
      `Olá! Estou no site da Fast Vidro e gostaria de ver fotos de modelos de box fumê instalados aqui em ${b}.`,
    fotos: FOTOS_FUME,
    swatch: "linear-gradient(135deg,#4b5563,#1f2937)",
  },
  incolor: {
    label: "Box Incolor",
    h1: (b: string) => `Box de Vidro Incolor em ${b}`,
    h2: "Box para Banheiro Incolor: Mais Amplitude e Claridade para o seu Ambiente",
    paragrafo: (b: string) =>
      `Se você busca um visual clean, minimalista e que valorize o espaço do seu banheiro, a Fast Vidro oferece a instalação de Box de Vidro Incolor em ${b}. Trabalhamos com vidro temperado de alta transparência de 8mm das melhores marcas, ideal para os modelos de box de vidro flex incolor, elegance com roldanas aparentes, além das opções tradicionais de box frontal, de canto ou de abrir. Peça sua medição técnica a laser em ${b}.`,
    wa: (b: string) =>
      `Olá! Estou no site da Fast Vidro e gostaria de ver fotos de modelos de box incolor instalados aqui em ${b}.`,
    fotos: FOTOS_INCOLOR,
    swatch: "linear-gradient(135deg,#ffffff,#e5e7eb)",
  },
} as const;

const MODELOS_LINKS = [
  { name: "Box Flex", to: "/box-de-banheiro/flex" },
  { name: "Box Elegance", to: "/box-de-banheiro/elegance" },
  { name: "Box Piso Teto", to: "/box-de-banheiro/piso-teto" },
  { name: "Box Tradicional", to: "/box-de-banheiro/tradicional" },
] as const;

export function BoxCorBairroPage({ nome, zona, cor }: Props) {
  const c = COPY[cor];
  // Foto aleatória por bairro — varia a cada bairro e a cada acesso (Math.random)
  const idxRandom = Math.floor(Math.random() * c.fotos.length);
  const idxBairro = hashSlug(nome) % c.fotos.length;
  const idx = (idxRandom + idxBairro) % c.fotos.length;
  const foto = c.fotos[idx];

  const waMsg = c.wa(nome);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
  const alt = `Instalação de ${c.label} sob medida em ${nome} - Fast Vidro`;

  return (
    <SiteLayout>
      {/* HERO escuro */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] ring-1 ring-white/20">
            <span
              className="inline-block h-3 w-3 rounded-full ring-1 ring-white/30"
              style={{ background: c.swatch }}
              aria-hidden
            />
            {c.label} • {zona.label}
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] max-w-4xl">
            {c.h1(nome)}
          </h1>
          <h2 className="mt-5 max-w-3xl text-lg lg:text-xl text-ink-foreground/80 font-semibold">
            {c.h2}
          </h2>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-black uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
          >
            <MessageCircle className="h-4 w-4" /> Pedir orçamento em {nome}
          </a>
        </div>
      </section>

      {/* Foto rotativa */}
      <section className="mx-auto max-w-5xl px-4 pt-12 lg:px-8 lg:pt-16">
        <figure
          className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-2"
          style={{
            backgroundColor: "#0b0f19",
            backgroundImage:
              "radial-gradient(120% 80% at 85% 15%, rgba(250,204,21,0.18), transparent 55%), linear-gradient(135deg, #0b0f19 0%, #111726 55%, #0b0f19 100%)",
          }}
        >
          <div className="relative flex items-center justify-center p-6 pt-14 lg:p-8 lg:pt-16 min-h-[340px] lg:min-h-[480px]">
            <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[11px] font-black uppercase tracking-wide text-primary-foreground shadow-md whitespace-nowrap">
              <MapPin className="h-3.5 w-3.5" /> {c.label} • {nome}
            </div>
            <img
              src={foto}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="relative max-h-[300px] sm:max-h-[380px] lg:max-h-[440px] w-auto max-w-full object-contain drop-shadow-2xl"
            />
          </div>
          <figcaption className="relative flex flex-col justify-center gap-3 p-6 pt-2 lg:p-10 text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              Projeto Fast Vidro
            </p>
            <p className="text-2xl lg:text-3xl font-black leading-tight text-white">
              {c.label} instalado em {nome}
            </p>
            <p className="text-sm lg:text-base text-white/75 leading-relaxed">
              Vidro temperado 8mm Cebrace/Guardian com película de segurança SECURE BOX.
              Medição digital a laser e instalação por equipe própria Fast Vidro.
            </p>
            <div className="mt-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/60">
              <span className="h-px w-8 bg-primary" />
              {zona.label} • São Paulo
            </div>
          </figcaption>
        </figure>
      </section>

      {/* Parágrafo SEO local */}
      <section className="mx-auto max-w-4xl px-4 py-14 lg:px-8 lg:py-16">
        <p className="text-base lg:text-lg leading-relaxed text-foreground/90">
          {c.paragrafo(nome)}
        </p>
      </section>

      {/* Segurança */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
            <Shield className="h-3 w-3" /> Segurança certificada
          </div>
          <h3 className="mt-4 text-2xl lg:text-3xl font-black leading-tight">
            {c.label} em {nome} com Película de Alta Resistência
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-foreground/85 max-w-3xl">
            Todos os nossos projetos de {c.label.toLowerCase()} contam com vidros temperados
            normatizados e a opção de aplicação da película de segurança Secure Box, que retém
            100% dos fragmentos fixados na estrutura em caso de quebra por impacto.
          </p>
          <Link
            to="/box-de-banheiro/secure-box"
            className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary hover:underline"
          >
            Conheça o Secure Box <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Modelos */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-20">
        <h3 className="text-2xl lg:text-3xl font-black leading-tight">
          Modelos de {c.label} mais procurados em {nome}
        </h3>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODELOS_LINKS.map((m) => (
            <li key={m.name}>
              <Link
                to={m.to}
                className="group block h-full rounded-2xl border border-border bg-card p-5 hover:border-primary hover:shadow-yellow transition"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Check className="h-4.5 w-4.5" />
                </span>
                <h4 className="mt-3 text-base font-black leading-tight">{m.name}</h4>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-primary">
                  Ver modelo <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition" />
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

        {/* Links internos cruzados */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Veja também nossos modelos de{" "}
          <Link to="/box-de-banheiro" className="font-semibold text-primary hover:underline">
            Box de Banheiro
          </Link>{" "}
          e conheça nossa proteção com a{" "}
          <Link to="/box-de-banheiro/secure-box" className="font-semibold text-primary hover:underline">
            Película Box + Seguro
          </Link>
          .
        </p>
      </section>
    </SiteLayout>
  );
}
