import { waLink } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-ink-foreground/80">{subtitle}</p>
        <a
          href={waLink(`Olá! Quero um orçamento de ${title}.`)}
          target="_blank"
          rel="noopener"
          className="mt-8 inline-block rounded-md bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
        >
          Pedir orçamento agora
        </a>
      </div>
    </section>
  );
}
