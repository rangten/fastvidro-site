import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface BoxModelShowcasePageProps {
  eyebrow: string;
  title: string;
  introduction: string;
  paragraphs: string[];
  benefitsTitle: string;
  benefits: string[];
  whatsappMessage: string;
  galleryTitle: string;
  gallery: GalleryImage[];
}

export function BoxModelShowcasePage({
  eyebrow,
  title,
  introduction,
  paragraphs,
  benefitsTitle,
  benefits,
  whatsappMessage,
  galleryTitle,
  gallery,
}: BoxModelShowcasePageProps) {
  const whatsappUrl = waLink(whatsappMessage);
  const cover = gallery[0];

  if (!cover) return null;

  return (
    <SiteLayout>
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <Link
              to="/box-de-banheiro"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Voltar para Box de Banheiro
            </Link>
            <span className="mt-7 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
              {eyebrow} • São Paulo
            </span>
            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/80">{introduction}</p>
            <Button asChild size="lg" className="mt-8 h-auto py-3.5 font-bold uppercase">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Solicitar orçamento
              </a>
            </Button>
          </div>
          <figure className="mx-auto w-full max-w-lg overflow-hidden rounded-md border border-ink-foreground/15 bg-ink-foreground/5">
            <img
              src={cover.src}
              alt={cover.alt}
              width={cover.width}
              height={cover.height}
              className="aspect-[3/4] h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-20">
        <article>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-base leading-relaxed text-foreground/90 first:mt-0">
              {paragraph}
            </p>
          ))}
          <h2 className="mt-12 text-3xl font-black">{benefitsTitle}</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 border-b border-border pb-4">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <h2 className="mt-12 text-3xl font-black">Atendimento especializado em São Paulo</h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/90">
            A Fast Vidro realiza medição e instalação na Zona Norte — incluindo Santana, Tucuruvi,
            Parada Inglesa, Jardim São Paulo, Vila Maria, Vila Guilherme, Casa Verde, Mandaqui e
            Tremembé — e também atende as zonas Sul, Leste e Oeste de São Paulo.
          </p>
        </article>
        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" className="h-auto py-4 font-bold">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> Falar com especialista no WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-ink py-16 text-ink-foreground lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Galeria</span>
          <h2 className="mt-3 text-3xl font-black lg:text-4xl">{galleryTitle}</h2>
          <div className={`mt-8 grid gap-4 sm:grid-cols-2 ${gallery.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {gallery.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-md border border-ink-foreground/10 bg-ink-foreground/5">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Button asChild className="fixed bottom-6 right-6 z-40 h-auto rounded-full px-5 py-3 font-bold shadow-lg">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`Orçamento de ${eyebrow} pelo WhatsApp`}>
          <MessageCircle /> <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </Button>
    </SiteLayout>
  );
}