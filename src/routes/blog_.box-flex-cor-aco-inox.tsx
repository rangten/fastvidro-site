import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-flex-inox-cover.webp";
import interna1 from "@/assets/box-flex-inox-banheiro.webp";
import interna2 from "@/assets/box-flex-inox-instalado.webp";
import interna3 from "@/assets/box-flex-inox-ferragens.webp";
import videoFlexMp4 from "@/assets/video-flex-inox.mp4";
import videoFlexWebm from "@/assets/video-flex-inox.webm";

const TITLE =
  "Box Flex Cor Aço Inox Ideia Glass: Luxo Exclusivo com 90% de Abertura para Banheiros em SP";
const DESC =
  "Box Flex Ideia Glass na cor Aço Inox: sistema articulado camarão com até 90% de abertura útil, ferragens em latão e alumínio e piso livre de trilhos. Medição a laser em toda São Paulo.";

export const Route = createFileRoute("/blog_/box-flex-cor-aco-inox")({
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
        href: "https://glass-swift-site.lovable.app/blog/box-flex-cor-aco-inox",
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
            "https://glass-swift-site.lovable.app/blog/box-flex-cor-aco-inox",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "Box Flex Cor Aço Inox Ideia Glass em funcionamento",
          description:
            "Demonstração do Box Flex Ideia Glass na cor Aço Inox: sistema articulado camarão com até 90% de abertura útil.",
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
    "Olá! Li o post sobre o Box Flex Cor Aço Inox Ideia Glass e quero um orçamento com a Fast Vidro.";

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
                width={1086}
                height={1448}
                src={cover}
                alt="Box Flex Ideia Glass cor Aço Inox com até 90% de abertura útil — Fast Vidro"
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
            Box Flex Cor Aço Inox Ideia Glass: Luxo Exclusivo com 90% de
            Abertura para Banheiros em SP
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              A busca por otimização de espaço tornou-se prioridade nos projetos
              de arquitetura em São Paulo. Com o crescimento dos apartamentos
              compactos e a busca por suítes funcionais, o box de correr
              tradicional tornou-se um obstáculo: por exigir o traspasse das
              folhas, ele reduz a passagem útil a apenas 50% do vão.
            </p>
            <p>
              Para resolver definitivamente essa limitação, a{" "}
              <strong>Fast Vidro</strong> apresenta o{" "}
              <strong>Box Flex da Ideia Glass na Cor Aço Inox</strong>. Trata-se
              de um sistema articulado inteligente (tipo camarão) que recolhe os
              painéis de vidro rente à parede, entregando uma impressionante
              abertura de até <strong>90% do vão de passagem</strong>.
            </p>
            <p>
              Neste artigo, explicamos os diferenciais dessa peça de alto padrão
              e listamos onde você pode contratar nossa medição a laser em todas
              as regiões de São Paulo.
            </p>

            <figure className="pt-2">
              <img
                width={1066}
                height={1476}
                src={interna2}
                alt="Box Flex cor Aço Inox Escovado instalado em banheiro com acabamento premium — Fast Vidro SP"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Box Flex Ideia Glass com ferragens em Inox Escovado instalado
                pela Fast Vidro.
              </figcaption>
            </figure>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Os Diferenciais Técnicos do Box Flex Cor Aço Inox Ideia Glass
            </h2>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Abertura Articulada de 90% (Sistema Pantográfico / Camarão)
            </h3>
            <p>
              Ao contrário do box de correr convencional, as folhas do Box Flex
              articulam-se sobre dobradiças reforçadas e correm de forma
              compacta. Em um banheiro com vão de apenas 1,00 metro, a passagem
              livre salta de 50 cm (no modelo tradicional) para{" "}
              <strong>90 cm úteis</strong> com o Box Flex.
            </p>

            <figure className="pt-2">
              <img
                width={768}
                height={1024}
                src={interna1}
                alt="Box Flex Ideia Glass articulado aberto rente à parede em banheiro com revestimento de pedra — São Paulo"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Folhas do Box Flex recolhidas rente à parede: máxima abertura
                do vão de passagem.
              </figcaption>
            </figure>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Ferragens em Latão e Alumínio no Acabamento Cor Aço Inox
            </h3>
            <p>
              As dobradiças e perfis do Kit Flex são fabricados em{" "}
              <strong>Latão e Alumínio de alta densidade</strong>, recebendo um
              acabamento refinado na cor Aço Inox. Essa composição de metais
              nobres garante resistência estrutural contra torções, prevenção
              absoluta contra ferrugem e uma estética sofisticada que combina
              perfeitamente com os metais sanitários mais modernos do mercado.
            </p>

            <figure className="pt-2">
              <img
                width={701}
                height={1600}
                src={interna3}
                alt="Detalhe das dobradiças e ferragens em Inox Escovado do Box Flex Ideia Glass — latão e alumínio de alta densidade"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Dobradiças e puxadores do Kit Flex no acabamento Inox Escovado:
                beleza que não enferruja.
              </figcaption>
            </figure>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Piso Livre de Trilhos e Acessibilidade Plena
            </h3>
            <p>
              O Box Flex elimina a necessidade de trilhos inferiores e
              superiores expostos. Essa característica traz dois benefícios
              imediatos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Facilidade de Limpeza:</strong> sem acúmulo de sujeira
                ou limo em canaletas no chão.
              </li>
              <li>
                <strong>Acessibilidade:</strong> piso 100% livre de barreiras
                físicas, permitindo o acesso seguro para idosos, cadeirantes,
                pessoas com mobilidade reduzida e facilitando o banho de
                crianças.
              </li>
            </ul>

            {/* Vídeo otimizado para PageSpeed */}
            <figure className="pt-2">
              <div className="mx-auto max-w-md overflow-hidden rounded-xl border border-border bg-black">
                <video
                  src={videoFlex}
                  poster={cover}
                  controls
                  playsInline
                  preload="none"
                  width={480}
                  height={854}
                  className="block w-full h-auto"
                  aria-label="Vídeo demonstrativo do Box Flex Cor Aço Inox Ideia Glass"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Assista ao vídeo: o sistema articulado do Box Flex Cor Aço Inox
                em funcionamento.
              </figcaption>
            </figure>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Atendimento Fast Vidro: Cobertura por Região e Bairros de São
              Paulo
            </h2>
            <p>
              Para garantir que o seu projeto receba uma instalação técnica
              impecável dentro das normas ABNT (NBR 14207), a Fast Vidro envia
              projetistas equipados com trena a laser diretamente ao seu
              endereço. Abaixo, confira como atendemos as principais regiões e
              bairros da capital paulista:
            </p>

            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink text-ink-foreground">
                    <th className="px-4 py-3 text-left font-bold uppercase tracking-wider">
                      Região
                    </th>
                    <th className="px-4 py-3 text-left font-bold uppercase tracking-wider">
                      Principais bairros atendidos
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-bold">
                      <Link to="/box-de-vidro-zona-sul" className="text-primary hover:underline">
                        Zona Sul
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      Moema, Vila Mariana, Morumbi, Brooklin, Campo Belo
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">
                      <Link to="/box-de-vidro-zona-oeste" className="text-primary hover:underline">
                        Zona Oeste
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      Pinheiros, Perdizes, Vila Madalena, Lapa, Butantã
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">
                      <Link to="/box-de-vidro-zona-leste" className="text-primary hover:underline">
                        Zona Leste
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      Tatuapé, Anália Franco, Mooca, Belém, Vila Prudente
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">
                      <Link to="/box-de-vidro-zona-norte" className="text-primary hover:underline">
                        Zona Norte
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      Santana, Tucuruvi, Jardim São Paulo, Casa Verde
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🟢 Onde Comprar Box Flex Ideia Glass na Zona Sul de SP?
            </h3>
            <p>
              Procurando por box articulado para banheiro pequeno em Moema ou
              vidraçaria para instalar box flex em Vila Mariana? Nossos técnicos
              realizam medições rápidas e apresentam o catálogo de acabamentos
              na cor aço inox nas seguintes localidades:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Onde comprar box de vidro camarão em{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "moema" }} className="text-primary hover:underline font-bold">Moema</Link>{" "}
                e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-mariana" }} className="text-primary hover:underline font-bold">Vila Mariana</Link>.
              </li>
              <li>
                Instalação de box flex articulado Ideia Glass no{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "morumbi" }} className="text-primary hover:underline font-bold">Morumbi</Link>{" "}
                e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "brooklin" }} className="text-primary hover:underline font-bold">Brooklin</Link>.
              </li>
              <li>
                Vidraçaria especializada em box na cor aço inox para banheiro
                compacto no{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "campo-belo" }} className="text-primary hover:underline font-bold">Campo Belo</Link>{" "}
                e Vila Nova Conceição.
              </li>
              <li>
                Box flex para apartamento pequeno no{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "ipiranga" }} className="text-primary hover:underline font-bold">Ipiranga</Link>{" "}
                e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "saude" }} className="text-primary hover:underline font-bold">Saúde</Link>.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🔵 Instalação de Box Flex Ideia Glass na Zona Oeste de SP
            </h3>
            <p>
              Se você reside em edifícios na Zona Oeste e busca por box
              articulado sem trilho no piso em Pinheiros ou box de vidro dobrável
              em Perdizes, a Fast Vidro oferece soluções personalizadas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Comprar box flex Ideia Glass na cor aço inox em{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "pinheiros" }} className="text-primary hover:underline font-bold">Pinheiros</Link>{" "}
                e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-madalena" }} className="text-primary hover:underline font-bold">Vila Madalena</Link>.
              </li>
              <li>
                Preço de box articulado para vão estreito em{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "perdizes" }} className="text-primary hover:underline font-bold">Perdizes</Link>{" "}
                e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "pompeia" }} className="text-primary hover:underline font-bold">Pompéia</Link>.
              </li>
              <li>
                Vidraçaria de box flex para banheiro de apartamento na{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "lapa" }} className="text-primary hover:underline font-bold">Lapa</Link>{" "}
                e Alto de Pinheiros.
              </li>
              <li>
                Instalação de box camarão de vidro temperado no{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "butanta" }} className="text-primary hover:underline font-bold">Butantã</Link>{" "}
                e Jaguaré.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🔴 Box Articulado Cor Aço Inox na Zona Leste de SP
            </h3>
            <p>
              Projetos imobiliários modernos na Zona Leste exigem máxima
              otimização. Atendemos chamados de box articulado para banheiro no
              Tatuapé e box flex para suíte no Jardim Anália Franco:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Onde encontrar box flex Ideia Glass no{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "tatuape" }} className="text-primary hover:underline font-bold">Tatuapé</Link>{" "}
                e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "analia-franco" }} className="text-primary hover:underline font-bold">Jardim Anália Franco</Link>.
              </li>
              <li>
                Box de banheiro articulado com 90% de abertura na{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "mooca" }} className="text-primary hover:underline font-bold">Mooca</Link>{" "}
                e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "belem" }} className="text-primary hover:underline font-bold">Belém</Link>.
              </li>
              <li>
                Vidraçaria para box camarão na cor aço inox na{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-prudente" }} className="text-primary hover:underline font-bold">Vila Prudente</Link>{" "}
                e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "penha" }} className="text-primary hover:underline font-bold">Penha</Link>.
              </li>
              <li>
                Orçamento de box dobrável Ideia Glass na Aricanduva e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-carrao" }} className="text-primary hover:underline font-bold">Carrão</Link>.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              🟡 Onde Encontrar Box Flex Ideia Glass na Zona Norte de SP
            </h3>
            <p>
              Para quem busca box camarão Ideia Glass em Santana ou vidraçaria
              para box flex na Casa Verde, disponibilizamos atendimento local
              ágil:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Instalação de box articulado Ideia Glass em{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "santana" }} className="text-primary hover:underline font-bold">Santana</Link>{" "}
                e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "tucuruvi" }} className="text-primary hover:underline font-bold">Tucuruvi</Link>.
              </li>
              <li>
                Vidraçaria especialista em box flex cor aço inox no Jardim São
                Paulo e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "mandaqui" }} className="text-primary hover:underline font-bold">Mandaqui</Link>.
              </li>
              <li>
                Box de vidro camarão para banheiro pequeno na{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "casa-verde" }} className="text-primary hover:underline font-bold">Casa Verde</Link>{" "}
                e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "bairro-do-limao" }} className="text-primary hover:underline font-bold">Limão</Link>.
              </li>
              <li>
                Comprar kit box flex Ideia Glass no{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "tremembe" }} className="text-primary hover:underline font-bold">Tremembé</Link>{" "}
                e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-guilherme" }} className="text-primary hover:underline font-bold">Vila Guilherme</Link>.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Por que Escolher a Fast Vidro para Instalar seu Box Flex?
            </h2>
            <p>
              Por se tratar de um sistema articulado de precisão, o Box Flex
              exige prumo perfeito, alinhamento milimétrico das dobradiças em
              latão/alumínio e vedação com silicone antifungo especial.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Visita e Medição Técnica Gratuita a Laser:</strong>{" "}
                medimos o vão com exatidão para que as folhas dobrem sem folgas
                ou atrito.
              </li>
              <li>
                <strong>Kits Originais Ideia Glass com Garantia:</strong>{" "}
                trabalhamos apenas com ferragens originais em latão e alumínio
                reforçado e vidros temperados de alta resistência (8mm) com
                opção de{" "}
                <Link to="/box-de-banheiro/secure-box" className="text-primary hover:underline font-bold">
                  Película de Segurança Secure Box
                </Link>
                .
              </li>
              <li>
                <strong>Atendimento Agilizado em SP e ABC:</strong> equipes
                locais preparadas para atender condomínios residenciais e casas
                com total respeito ao seu tempo.
              </li>
            </ul>
            <p>
              Veja todos os detalhes técnicos do modelo na página do{" "}
              <Link to="/box-de-banheiro/flex" className="text-primary hover:underline font-bold">
                Box Flex
              </Link>{" "}
              e compare com os demais modelos do nosso catálogo de{" "}
              <Link to="/box-de-banheiro" className="text-primary hover:underline font-bold">
                box de banheiro sob medida
              </Link>
              .
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Solicite Seu Orçamento Sem Compromisso!
            </h3>
            <p>
              Transforme seu banheiro compacto em um ambiente de alto padrão,
              moderno e espaçoso. Clique no botão abaixo e fale diretamente com
              nossos projetistas pelo WhatsApp!
            </p>
            <p>
              Instalação garantida em todas as regiões da Capital de São Paulo e
              Grande ABC.
            </p>
          </div>

          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Fale agora com a Fast Vidro
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Orçamento do Box Flex Aço Inox no WhatsApp
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
