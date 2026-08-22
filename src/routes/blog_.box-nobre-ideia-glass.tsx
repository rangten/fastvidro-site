import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-nobre-ideia-glass-cover.webp";
import interna from "@/assets/box-nobre-rose.webp";
import videoNobre from "@/assets/video-nobre.mp4";

const TITLE =
  "Box Nobre Ideia Glass: Conheça os Diferenciais que Definem o Novo Padrão de Luxo e Segurança no Banheiro";
const DESC =
  "Box Nobre Ideia Glass na Fast Vidro: amortecimento duplo, Puxador Asa Linear, trava anti-descarrilamento e vidro temperado ou laminado. Instalação técnica em toda São Paulo.";

export const Route = createFileRoute("/blog_/box-nobre-ideia-glass")({
  head: () => ({
    meta: [
      { title: `${TITLE} | Fast Vidro` },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: cover },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: cover },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://glass-swift-site.lovable.app/blog/box-nobre-ideia-glass",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESC,
          image: cover,
          datePublished: "2026-08-22",
          author: { "@type": "Organization", name: "Fast Vidro" },
          publisher: { "@type": "Organization", name: "Fast Vidro" },
          mainEntityOfPage:
            "https://glass-swift-site.lovable.app/blog/box-nobre-ideia-glass",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "Box Nobre Ideia Glass em detalhes",
          description:
            "Demonstração do Box Nobre Ideia Glass: amortecimento duplo e Puxador Asa Linear.",
          thumbnailUrl: cover,
          uploadDate: "2026-08-22",
        }),
      },
    ],
  }),
  component: Post,
});

function Post() {
  const message =
    "Olá! Li o post sobre o Box Nobre Ideia Glass e quero um orçamento com a Fast Vidro.";

  return (
    <SiteLayout>
      <article className="bg-background">
        <div className="bg-ink">
          <div className="mx-auto max-w-5xl px-4 lg:px-8 pt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-foreground/70 hover:text-primary transition"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Voltar para o Blog
            </Link>
            <div className="mt-6 overflow-hidden rounded-xl">
              <img
                width={1200}
                height={800}
                src={cover}
                alt="Box Nobre Ideia Glass — novo padrão de luxo e segurança no banheiro | Fast Vidro"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Box de Banheiro • Alto Padrão</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 22 de Agosto de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Box Nobre Ideia Glass: Conheça os Diferenciais que Definem o Novo
            Padrão de Luxo e Segurança no Banheiro
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Ao planejar a reforma ou construção de um banheiro modernizado, o
              box de vidro é um dos elementos centrais. Além de conter a água
              da área de banho, ele define a estética do ambiente. No entanto,
              modelos de box convencionais costumam apresentar dores crônicas:
              batidas secas ao fechar a porta, puxadores pontuais que diminuem
              o vão de passagem ou roldanas que desalinham com o tempo.
            </p>
            <p>
              Para resolver definitivamente esses problemas, a Ideia Glass
              desenvolveu o <strong>Box Nobre</strong>. Neste artigo, a equipe
              técnica da <strong>Fast Vidro</strong> detalha por que esse
              modelo se consolidou como a melhor escolha em engenharia de
              vidros para quem não abre mão de conforto, máxima segurança e
              elegância.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Os 4 Grandes Diferenciais Técnicos do Box Nobre Ideia Glass
            </h2>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              1. Sistema de Amortecimento Duplo (Abertura e Fechamento)
            </h3>
            <p>
              Diferente dos boxes comuns que dependem de batedores rígidos de
              borracha, o Box Nobre conta com um sistema de amortecimento
              patenteado.
            </p>
            <p>
              <strong>Como funciona:</strong> na etapa final do percurso da
              porta — tanto ao abrir quanto ao fechar —, um dispositivo
              hidráulico absorve a força do movimento.
            </p>
            <p>
              <strong>O benefício prático:</strong> a porta desliza suavemente
              até se encaixar no lugar certo sem nenhum ruído ou tranco. Isso
              elimina acidentes com batidas fortes, prolonga a vida útil dos
              componentes e garante segurança total para crianças e idosos.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              2. Puxador Asa Linear: Design que Ganha Espaço de Passagem
            </h3>
            <p>
              Outro grande destaque exclusivo do projeto é o{" "}
              <strong>Puxador Asa Linear</strong>. Enquanto os puxadores
              tradicionais exigem furação no centro da folha de vidro e ocupam
              espaço no vão, o Puxador Asa é fixado diretamente na borda
              lateral do vidro.
            </p>
            <p>
              <strong>Ganho de vão:</strong> por ser instalado no topo da
              folha, ele permite que a porta corra até o limite máximo do
              trilho, garantindo até 5 cm a mais de abertura útil no box.
            </p>
            <p>
              <strong>Proteção de borda:</strong> além do apelo estético
              elegante, o perfil do puxador protege a lateral do vidro contra
              eventuais impactos secos.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              3. Guias e Roldanas com Trava Anti-Descarrilamento
            </h3>
            <p>
              A mecânica de rolamento do Box Nobre foi desenhada para suportar
              alto fluxo de uso com desgaste zero. As roldanas contam com
              rolamentos blindados e travas de segurança ativas que fixam o
              conjunto dentro do trilho superior. Isso impede que a porta saia
              do trilho sob qualquer pressão lateral, garantindo deslizamento
              leve, silencioso e seguro por anos.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              4. Estrutura Reforçada para Vidro Temperado ou Laminado
            </h3>
            <p>
              Para sustentar todo esse conjunto de alto padrão, os perfis de
              alumínio da linha Nobre possuem paredes mais robustas e ligas
              estruturais especiais.
            </p>
            <p>
              <strong>Opções de vidro:</strong> a estrutura permite a
              instalação de vidros com espessura reforçada de 8 mm, aceitando
              tanto o <strong>vidro temperado</strong> quanto o{" "}
              <strong>vidro laminado temperado</strong> (que mantém os
              fragmentos presos em caso de quebra). Para proteção extra,
              conheça a nossa{" "}
              <Link
                to="/box-de-banheiro/secure-box"
                className="text-primary hover:underline font-bold"
              >
                película de segurança Secure Box
              </Link>
              .
            </p>

            {/* Imagem interna */}
            <figure className="pt-2">
              <img
                width={1000}
                height={1000}
                src={interna}
                alt="Box Nobre com acabamento Rose Ideia Glass instalado em banheiro moderno — Fast Vidro"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Box Nobre com ferragens em acabamento Rose instalado pela Fast
                Vidro.
              </figcaption>
            </figure>

            {/* Vídeo otimizado para PageSpeed */}
            <figure className="pt-2">
              <div className="mx-auto max-w-md overflow-hidden rounded-xl border border-border bg-black">
                <video
                  src={videoNobre}
                  poster={cover}
                  controls
                  playsInline
                  preload="none"
                  width={480}
                  height={854}
                  className="block w-full h-auto"
                  aria-label="Vídeo demonstrativo do Box Nobre Ideia Glass"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Assista ao vídeo: o amortecimento suave do Box Nobre Ideia
                Glass em funcionamento.
              </figcaption>
            </figure>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Formatos e Opções de Personalização para o seu Projeto
            </h2>
            <p>
              O Box Nobre não é engessado; ele se adapta com perfeição aos mais
              diversos layouts de banheiros e projetos de arquitetura:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Box Frontal (F1 / F2 / F3):</strong> para vãos retos
                pequenos, médios ou grandes com 1, 2 ou mais folhas.
              </li>
              <li>
                <strong>Box em L (Canto – C1):</strong> excelente para otimizar
                o espaço do banheiro.
              </li>
              <li>
                <strong>Box Até o Teto:</strong> harmonização perfeita com o
                Puxador Asa Linear em projetos estilo sauna.
              </li>
              <li>
                <strong>Variedade de acabamentos:</strong> ferragens
                disponíveis em cores modernas (Cromado, Preto Fosco, Rose,
                Dourado e Cinza) para combinar com os metais do seu banheiro.
              </li>
            </ul>
            <p>
              Compare com os demais modelos do nosso catálogo de{" "}
              <Link
                to="/box-de-banheiro"
                className="text-primary hover:underline font-bold"
              >
                box de banheiro sob medida
              </Link>{" "}
              e veja todos os detalhes técnicos na página do{" "}
              <Link
                to="/box-de-banheiro/nobre"
                className="text-primary hover:underline font-bold"
              >
                Box Nobre
              </Link>
              .
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Por que Instalar seu Box Nobre com a Fast Vidro?
            </h2>
            <p>
              O Box Nobre é um produto de alta engenharia, e sua performance
              depende 100% de uma instalação técnica precisa e alinhada às
              normas da ABNT (NBR 14207). Na Fast Vidro, oferecemos um
              atendimento completo sem você precisar sair de casa:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Medição técnica a laser no local:</strong> garantimos
                milimetragem exata do vão para evitar folgas no amortecedor.
              </li>
              <li>
                <strong>Kits e componentes originais Ideia Glass:</strong>{" "}
                trabalhamos exclusivamente com vidros certificados e ferragens
                homologadas.
              </li>
              <li>
                <strong>Instalação especializada:</strong> nossa equipe própria
                ajusta a pressão dos amortecedores e a vedação com silicone
                antifungo de alta durabilidade.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Conclusão e Agendamento
            </h3>
            <p>
              Quer transformar seu banho em uma experiência diária de conforto,
              praticidade e segurança? Escolha o Box Nobre da Ideia Glass com a
              qualidade de instalação da Fast Vidro.
            </p>
            <p>
              Solicite um orçamento sem compromisso no seu WhatsApp! Atendemos
              toda a Capital de São Paulo e Região do Grande ABC com agilidade
              e preço direto de fábrica.
            </p>
          </div>

          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Fale agora com a Fast Vidro
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Orçamento do Box Nobre no WhatsApp
            </h3>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
