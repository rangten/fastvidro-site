import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Zap, Award, Hammer, Star, ArrowRight } from "lucide-react";
import boxImgAsset from "@/assets/card-box-banheiro.png";
import portasImgAsset from "@/assets/card-portas-vidro.png";
import espelhosImgAsset from "@/assets/card-espelhos.jpg";
import projetosImgAsset from "@/assets/card-projetos.png";
import secureBoxLogo from "@/assets/secure-box-logo.png";
import secureBoxHeroAsset from "@/assets/secure-box-hero.png";
import sobreFastVidroAsset from "@/assets/sobre-fast-vidro.jpg";
const boxImg = boxImgAsset;
const portasImg = portasImgAsset;
const espelhosImg = espelhosImgAsset;
const projetosImg = projetosImgAsset;
import { SiteLayout } from "@/components/SiteLayout";
import { HeroCarousel } from "@/components/HeroCarousel";
import { RegioesAtendidasCard } from "@/components/RegioesAtendidasCard";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Box de Banheiro na Zona Norte e Toda SP com Entrega Rápida | Fast Vidros" },
      { name: "description", content: "Box de banheiro em vidro temperado em São Paulo (Zona Norte, Sul, Leste e Oeste) com instalação rápida, tecnologia anti-estilhaço e acabamento premium. Peça orçamento pelo WhatsApp." },
      { property: "og:title", content: "Box de Banheiro na Zona Norte e Toda SP com Entrega Rápida | Fast Vidros" },
      { property: "og:description", content: "Instalação ágil de box de vidro temperado em toda São Paulo. Segurança, acabamento premium e entrega rápida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.fastvidro.com.br/" },
    ],
    links: [
      { rel: "canonical", href: "https://www.fastvidro.com.br/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.fastvidro.com.br/#business",
          name: "Fast Vidros",
          description: "Box de banheiro, portas de vidro, espelhos e espelhos LED. Projetos sob medida com tecnologia anti-estilhaço em São Paulo.",
          url: "https://www.fastvidro.com.br/",
          telephone: "+5511990238648",
          image: "https://www.fastvidro.com.br/favicon.png",
          priceRange: "$$",
          areaServed: { "@type": "City", name: "São Paulo, SP" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          sameAs: [
            "https://instagram.com/fast.vidro",
            "https://tiktok.com/@fastvidro",
            "https://g.page/fastvidro",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const products = [
  { to: "/box-de-banheiro", title: "Box de Banheiro", img: boxImg, desc: "Modelos Flex, Piso Teto, Nobre, Elegance, Duo Safe e mais.", logo: false },
  { to: "/portas-de-vidro", title: "Portas de Vidro", img: portasImg, desc: "Vision, Nobre, Flex, de Correr, Versatik e personalizadas.", logo: false },
  { to: "/espelhos", title: "Espelhos", img: espelhosImg, desc: "Decorativos sob medida com lapidação reta ou bisotê.", logo: false },
  { to: "/projetos", title: "Projetos", img: projetosImg, desc: "Soluções em vidro personalizadas para qualquer ambiente.", logo: false },
  { to: "/box-de-banheiro/secure-box", title: "Secure Box", img: secureBoxLogo, desc: "Película antiestilhaço de alta performance para máxima proteção da família.", logo: true },
] as const;

const diffs = [
  { icon: Shield, title: "Segurança", desc: "Tecnologia anti-estilhaço em todos os vidros temperados." },
  { icon: Zap, title: "Agilidade", desc: "Visita técnica, instalação e entrega no menor prazo do mercado." },
  { icon: Award, title: "Qualidade", desc: "Vidros certificados e acabamento premium em cada peça." },
  { icon: Hammer, title: "Tradição", desc: "Anos de experiência transformando ambientes com vidro." },
];

function Home() {
  return (
    <SiteLayout>
      <HeroCarousel />

      <section className="bg-ink text-ink-foreground border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 grid grid-cols-3 gap-6">
          <div>
            <div className="text-3xl lg:text-4xl font-black text-primary">500+</div>
            <div className="text-xs uppercase tracking-wider text-ink-foreground/60">Projetos entregues</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-black text-primary">5.0</div>
            <div className="text-xs uppercase tracking-wider text-ink-foreground/60">Avaliação Google</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-black text-primary">24h</div>
            <div className="text-xs uppercase tracking-wider text-ink-foreground/60">Resposta</div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Destaque</span>
            <h2 className="mt-3 text-5xl lg:text-6xl font-black leading-[0.95]">
              SECURE BOX
            </h2>
            <p className="mt-5 text-base max-w-lg">
              Secure Box — Tecnologia anti-estilhaço exclusiva: mesmo em caso de impacto, o vidro
              permanece integrado à película de segurança, evitando acidentes em casa.
            </p>
            <Link
              to="/box-de-banheiro/secure-box"
              className="mt-7 inline-block rounded-md bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink-foreground hover:bg-ink/80 transition"
            >
              Quero o Secure Box
            </Link>
          </div>
          <div className="relative">
            <img src={secureBoxHeroAsset} alt="Secure Box com película anti-estilhaço em vidro temperado instalado em São Paulo - Fast Vidros" className="rounded-xl shadow-ink w-full max-h-[520px] object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-foreground/60">
              Catálogo
            </span>
            <h2 className="mt-3 text-5xl font-black">Nossos produtos</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Cada peça é projetada, fabricada e instalada por nossa equipe especializada.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary transition"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                {p.logo ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-white p-6">
                    <img
                      src={p.img}
                      alt={`${p.title} — película anti-estilhaço Fast Vidros`}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <img
                    src={p.img}
                    alt={`${p.title} em vidro temperado instalado em São Paulo - Fast Vidros`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-xl font-black text-ink-foreground leading-tight">{p.title}</h3>
                  <p className="mt-1.5 text-xs text-ink-foreground/80 line-clamp-2">{p.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-primary">
                    Ver mais <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-foreground/60">
              Por que Fast Vidro
            </span>
            <h2 className="mt-3 text-5xl font-black">Quatro pilares. Zero atrito.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {diffs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl bg-background p-7 border border-border hover:border-primary transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-foreground/60">
            Clientes
          </span>
          <h2 className="mt-3 text-5xl font-black">O que dizem sobre a gente</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { name: "Mariana S.", text: "Box instalado em 3 dias, acabamento impecável. Equipe muito atenciosa." },
            { name: "Carlos R.", text: "Porta de vidro do escritório ficou perfeita. Preço justo e prazo cumprido." },
            { name: "Luana M.", text: "Espelho LED do banheiro virou destaque da reforma. Recomendo!" },
          ].map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-7">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed">"{t.text}"</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <RegioesAtendidasCard />

      <section className="bg-ink text-ink-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Sobre a Fast Vidro
            </span>
            <h2 className="mt-3 text-5xl font-black">Velocidade que não compromete o cuidado.</h2>
            <p className="mt-5 text-base text-ink-foreground/80">
              Nascemos para encurtar prazos sem abrir mão da qualidade. Cada projeto da Fast Vidro
              passa por medição precisa, fabricação em vidro temperado certificado e instalação
              feita por equipe própria.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="mt-7 inline-block rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
            >
              Fale com um especialista
            </a>
          </div>
          <div className="w-full">
            <img
              src={sobreFastVidroAsset}
              alt="Box de vidro temperado instalado em São Paulo - Fast Vidros"
              className="w-full h-auto max-h-[520px] object-cover rounded-xl shadow-ink"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Bloco de conteúdo SEO — instalação de box em SP por região */}
      <section className="bg-ink text-ink-foreground border-t border-white/10 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="border-l-4 border-primary pl-6">
            <h2 className="text-3xl lg:text-4xl font-black text-ink-foreground">
              Instalação Rápida de Box de Banheiro em São Paulo
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-foreground/80">
              A Fast Vidros é especializada no fornecimento e instalação ágil de box para banheiro
              em São Paulo. Trabalhamos com vidro temperado de alta resistência, acabamentos
              impecáveis em alumínio e opções modernas para transformar o seu banheiro com agilidade,
              segurança e transparência.
            </p>

            <h3 className="mt-10 text-2xl font-black text-primary">
              Atendimento Especializado nos Principais Bairros de SP
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-foreground/80">
              Atendemos com medição rápida e equipe própria na Zona Norte (Santana, Tucuruvi,
              Mandaqui, Vila Guilherme, Vila Maria, Casa Verde, Jaçanã, Tremembé, Limão e Imirim),
              Zona Leste (Tatuapé, Mooca, Vila Carrão, Anália Franco e Belém), Zona Oeste (Lapa,
              Vila Leopoldina, Perdizes e Pinheiros) e Zona Sul (Itaim Bibi, Moema, Vila Mariana e
              Morumbi). Se você busca praticidade e cumprimento rigoroso de prazos, a Fast Vidros é
              a sua melhor escolha.
            </p>

            <h3 className="mt-10 text-2xl font-black text-primary">
              Diferenciais do Nosso Box de Vidro
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-foreground/80">
              Oferecemos modelos de box frontal de abrir, box de correr, box de canto e opções sob
              medida com películas de proteção e materiais das melhores marcas do mercado. Cada
              projeto é executado com foco na vedação eficiente e durabilidade dos acessórios.
            </p>

            <p className="mt-4 text-base leading-relaxed text-ink-foreground/80">
              Também oferecemos a linha exclusiva{" "}
              <Link to="/box-de-banheiro/secure-box" className="font-bold text-primary hover:underline">
                <strong>Secure Box</strong>
              </Link>
              : box de vidro temperado acompanhado de película de proteção para evitar acidentes e
              garantir a retenção de estilhaços. Ideal para famílias com crianças e idosos.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { to: "/box-de-vidro-zona-norte", label: "Zona Norte" },
              { to: "/box-de-vidro-zona-leste", label: "Zona Leste" },
              { to: "/box-de-vidro-zona-oeste", label: "Zona Oeste" },
              { to: "/box-de-vidro-zona-sul", label: "Zona Sul" },
            ].map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-4 text-center text-sm font-bold uppercase tracking-wide text-ink-foreground/90 hover:border-primary hover:text-primary transition"
              >
                Box {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
