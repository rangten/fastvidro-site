import { createFileRoute, Link } from "@tanstack/react-router";
import comoMedirImg from "@/assets/blog-como-medir-box-cover.png";
import alertaSegurancaImg from "@/assets/blog-alerta-seguranca-box-travando-cover.png";
import limparBoxImg from "@/assets/blog-como-limpar-box-cover.png";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/product-projetos.jpg";
import boxEleganceImg from "@/assets/blog-box-elegance-roldanas-aparentes-cover.png";
import boxDeCantoImg from "@/assets/blog-box-de-canto-cover.png";
import boxAbrirVsCorrerImg from "@/assets/blog-box-abrir-vs-correr-cover.png";
import box3FolhasImg from "@/assets/blog-box-3-folhas-versatik-cover.png";
import convencionalVsPisoTetoImg from "@/assets/blog-box-convencional-vs-piso-teto-cover.png";
import tradicionalVsFlexImg from "@/assets/blog-box-tradicional-vs-flex-cover.png";
import manutencaoImg from "@/assets/blog-manutencao-box-cover.png";
import quemSomosImg from "@/assets/blog-quem-somos-cover.png";
import espelhosLedImg from "@/assets/blog-espelhos-led-cover.png";
import secureBoxImg from "@/assets/blog-secure-box-cover.png";
import boxSantanaImg from "@/assets/blog-box-banheiro-santana-cover.png";
import boxMandaquiImg from "@/assets/blog-box-mandaqui-cover.png";
import boxZonaNorteImg from "@/assets/blog-box-zona-norte-cover.png";
import boxJardimSPImg from "@/assets/blog-box-jardim-sao-paulo-cover.png";
import boxTucuruviImg from "@/assets/blog-box-tucuruvi-cover.png";
import boxCasaVerdeImg from "@/assets/blog-box-casa-verde-imirim-cover.png";
import boxVilaGuilhermeImg from "@/assets/blog-box-vila-guilherme-cover.png";
import corBoxImg from "@/assets/blog-cor-box-cover.png";
import qualBoxImg from "@/assets/blog-qual-box-usar-cover.png";
import { ArrowRight, Calendar } from "lucide-react";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog Fast Vidro — Dicas, Vidros e Reformas em São Paulo" },
      { name: "description", content: "Guias e artigos sobre box de banheiro, espelhos LED, vidros temperados e tendências de reformas em São Paulo." },
      { property: "og:title", content: "Blog Fast Vidro — Vidros, Box e Espelhos em SP" },
      { property: "og:description", content: "Conteúdo prático sobre vidros, segurança e decoração para sua casa em São Paulo." },
    ],
  }),
  component: Blog,
});

const posts: Array<{
  tag: string;
  date: string;
  img: string;
  title: string;
  excerpt: string;
  to?: string;
}> = [
  {
    tag: "Guia Técnico • Medição",
    date: "5 de Julho de 2026",
    img: comoMedirImg,
    title:
      "Como Medir Seu Box de Forma Correta antes de Pedir um Orçamento: O Guia Técnico Passo a Passo",
    excerpt:
      "Aprenda a medir o vão do box de banheiro com a regra dos 3 pontos, defina a altura ideal e use nossa tabela de modelos por largura para pedir um orçamento preciso na Fast Vidro.",
    to: "/blog/como-medir-box-banheiro",
  },
  {
    tag: "Segurança • Manutenção",
    date: "4 de Julho de 2026",
    img: alertaSegurancaImg,
    title:
      "Alerta de Segurança: Box Travando ou Emperrado? Pare de Usar Agora e Chame a Assistência!",
    excerpt:
      "Box de banheiro travando ou emperrado é risco de acidente. Saiba os sinais de alerta, por que ocorre e como a manutenção preventiva da Fast Vidro protege sua família em São Paulo.",
    to: "/blog/alerta-seguranca-box-travando",
  },
  {
    tag: "Limpeza • Box de Vidro",
    date: "3 de Julho de 2026",
    img: limparBoxImg,
    title:
      "Como Limpar o Box de Banheiro Corretamente: O Guia Definitivo para Eliminar Manchas sem Danificar o Vidro",
    excerpt:
      "Aprenda a limpar seu box de vidro temperado corretamente: receita caseira com bicarbonato e vinagre, produtos que nunca deve usar e tabela de frequência para manter o box novo por anos.",
    to: "/blog/como-limpar-box-banheiro",
  },
  {
    tag: "Guia Técnico • Box de Vidro",
    date: "2 de Julho de 2026",
    img: boxEleganceImg,
    title:
      "Box Elegance (Roldanas Aparentes): O Guia Definitivo do Box de Alto Padrão para Seu Banheiro",
    excerpt:
      "Conheça o Box Elegance com Roldanas Aparentes da Fast Vidro: design premium, deslize suave, metais nobres e vidro temperado 8mm/10mm. Veja cores, segurança com Película Secure Box e atendimento em São Paulo.",
    to: "/blog/box-elegance-roldanas-aparentes",
  },
  {
    tag: "Guia Técnico • Box de Vidro",
    date: "1 de Julho de 2026",
    img: boxDeCantoImg,
    title:
      "Box de Canto (Em L / Angular): A Solução Inteligente para Otimizar Banheiros Quadrados e Quinas",
    excerpt:
      "Conheça o Box de Canto da Fast Vidro: a solução ideal para banheiros quadrados e quinas. Veja vantagens, cores, segurança com Película Secure Box e atendimento em toda São Paulo.",
    to: "/blog/box-de-canto",
  },
  {
    tag: "Comparativo • Box de Vidro",
    date: "30 de Junho de 2026",
    img: boxAbrirVsCorrerImg,
    title:
      "Box de Abrir (Porta de Giro) vs. Box de Correr: Quando Escolher Cada Modelo?",
    excerpt:
      "Comparativo técnico completo entre Box de Abrir (Porta de Giro) e Box de Correr: vão livre, espaço, trilhos, cores e segurança. Descubra o ideal para o seu banheiro em SP.",
    to: "/blog/box-abrir-vs-correr",
  },
  {
    tag: "Guia Técnico • Box de Vidro",
    date: "29 de Junho de 2026",
    img: box3FolhasImg,
    title:
      "Box 3 Folhas (Sistema Versatik): O Guia Completo para Máxima Abertura de Vão e Acessibilidade",
    excerpt:
      "Conheça o Box 3 Folhas com Sistema Versatik: máxima abertura de vão, acessibilidade, design moderno, cores de perfil e segurança com Película Secure Box em São Paulo.",
    to: "/blog/box-3-folhas-sistema-versatik",
  },
  {
    tag: "Comparativo • Box de Vidro",
    date: "28 de Junho de 2026",
    img: tradicionalVsFlexImg,
    title:
      "Box Tradicional de Correr vs. Box Flex (Sanfonado): Qual a Melhor Solução para Banheiros Pequenos?",
    excerpt:
      "Comparativo definitivo entre Box de Correr e Box Flex Sanfonado: vão livre, mecânica, estética, cores e segurança com a Película Secure Box. Ideal para banheiros pequenos em SP.",
    to: "/blog/box-tradicional-vs-flex",
  },
  {
    tag: "Comparativo • Box de Vidro",
    date: "27 de Junho de 2026",
    img: convencionalVsPisoTetoImg,
    title:
      "Box de Banheiro Convencional vs. Box Até o Teto: Qual o Melhor para Seu Banheiro?",
    excerpt:
      "Análise completa dos modelos convencional e piso-teto: retenção de calor, proteção de móveis, investimento e segurança. Descubra o ideal para o seu banheiro.",
    to: "/blog/box-convencional-vs-ate-o-teto",
  },
  {
    tag: "Manutenção • Box de Vidro",
    date: "25 de Junho de 2026",
    img: manutencaoImg,
    title:
      "Manutenção do Box de Banheiro: Você Sabia que Ela é Obrigatória uma Vez por Ano?",
    excerpt:
      "Descubra por que a revisão anual do box de vidro temperado é obrigatória pela NBR 14207 da ABNT e como a Fast Vidro realiza a manutenção preventiva em São Paulo.",
    to: "/blog/manutencao-box-banheiro",
  },
  {
    tag: "Guia de Cores • Box de Vidro",
    date: "25 de Junho de 2026",
    img: corBoxImg,
    title:
      "Vidro Incolor, Fumê, Verde ou Bronze? Guia Definitivo para Escolher a Cor do Seu Box",
    excerpt:
      "Guia completo para escolher a cor do box de vidro temperado: incolor, fumê, verde ou bronze. Vantagens, estilos e indicações para cada tipo de banheiro.",
    to: "/blog/cor-box-incolor-fume-verde-bronze",
  },
  {
    tag: "Box de Banheiro • Vila Guilherme",
    date: "10 de Junho de 2026",
    img: boxVilaGuilhermeImg,
    title:
      "Box de Banheiro na Vila Guilherme: Guia de Modelos, Design e Segurança para Seu Banheiro",
    excerpt:
      "Guia completo de box de banheiro na Vila Guilherme: modelos, vidros Cebrace/Guardian 8mm, película SECURE BOX e instalação a partir de 12x R$ 89,99.",
    to: "/blog/box-banheiro-vila-guilherme",
  },
  {
    tag: "Box de Banheiro • Casa Verde e Imirim",
    date: "10 de Junho de 2026",
    img: boxCasaVerdeImg,
    title:
      "Box de Banheiro na Casa Verde e Imirim: Modelos, Preços e Segurança para Sua Reforma",
    excerpt:
      "Guia completo de box de banheiro na Casa Verde e Imirim: modelos, vidros Cebrace/Guardian 8mm, película SECURE BOX e instalação a partir de 12x R$ 89,99.",
    to: "/blog/box-banheiro-casa-verde-imirim",
  },
  {
    tag: "Box de Banheiro • Tucuruvi",
    date: "09 de Junho de 2026",
    img: boxTucuruviImg,
    title:
      "Box de Banheiro no Tucuruvi: Modelos Ideais, Preços e Segurança Máxima para Seu Imóvel",
    excerpt:
      "Guia completo de box de banheiro no Tucuruvi: modelos para apartamentos e sobrados, vidros Cebrace/Guardian 8mm, película SECURE BOX e instalação a partir de 12x R$ 89,99.",
    to: "/blog/box-banheiro-tucuruvi",
  },
  {
    tag: "Box de Banheiro • Jardim São Paulo",
    date: "09 de Junho de 2026",
    img: boxJardimSPImg,
    title:
      "Box de Banheiro no Jardim São Paulo: Modelos de Alto Padrão, Segurança e Instalação sob Medida",
    excerpt:
      "Box de banheiro no Jardim São Paulo com vidros temperados 8mm Cebrace/Guardian, película SECURE BOX e instalação a partir de 12x R$ 89,99 em toda Zona Norte.",
    to: "/blog/box-banheiro-jardim-sao-paulo",
  },
  {
    tag: "Box de Banheiro • Zona Norte SP",
    date: "08 de Junho de 2026",
    img: boxZonaNorteImg,
    title:
      "Onde Encontrar Box de Banheiro na Zona Norte de SP? Guia Completo de Modelos, Preços e Segurança",
    excerpt:
      "Guia completo para encontrar box de banheiro na Zona Norte de SP: modelos, vidros Cebrace/Guardian 8mm, película SECURE BOX e instalação a partir de 12x R$ 89,99.",
    to: "/blog/box-banheiro-zona-norte",
  },
  {
    tag: "Box de Banheiro • Mandaqui",
    date: "07 de Junho de 2026",
    img: boxMandaquiImg,
    title:
      "Guia do Box de Banheiro no Mandaqui: Projetos Modernos, Segurança com SECURE BOX e Tendências de Vidraçaria",
    excerpt:
      "Procurando box de banheiro no Mandaqui? Modelos de vidro temperado 8mm Cebrace/Guardian, película SECURE BOX e instalação ágil em toda a Zona Norte de SP.",
    to: "/blog/box-banheiro-mandaqui",
  },
  {
    tag: "Box de Banheiro • Santana",
    date: "04 de Junho de 2026",
    img: boxSantanaImg,
    title:
      "Box de Banheiro em Vidro em Santana: Segurança e Elegância para Seu Projeto | Vidraçaria Santana",
    excerpt:
      "Box de banheiro em vidro temperado em Santana com a Fast Vidro: modelos sob medida, vidros Cebrace/Guardian e película Secure Box. Vidraçaria Santana desde 1995.",
    to: "/blog/box-banheiro-vidro-santana",
  },
  {
    tag: "Segurança e Tecnologia",
    date: "04 de Junho de 2026",
    img: secureBoxImg,
    title:
      "O que é Secure Box? Conheça a Película de Proteção para Box de Vidro Temperado que Protege sua Família",
    excerpt:
      "Entenda como a tecnologia Secure Box, a película de segurança da Fast Vidro, mantém os fragmentos de vidro presos em caso de quebra — protegendo crianças, idosos e toda a família.",
    to: "/blog/secure-box-pelicula-protecao",
  },
  {
    tag: "Espelhos LED",
    date: "04 de Junho de 2026",
    img: espelhosLedImg,
    title: "Espelho com LED Sob Medida: Como Escolher a Iluminação Perfeita para seu Banheiro",
    excerpt:
      "Descubra como escolher a iluminação ideal para o seu espelho com LED sob medida. Luz quente, neutra ou fria? Frontal ou retroiluminado? Veja o guia completo da Fast Vidro em São Paulo.",
    to: "/blog/espelhos-led-sob-medida",
  },
  {
    tag: "Quem Somos",
    date: "Jun 2026",
    img: quemSomosImg,
    title:
      "Fast Vidro: Mais de 30 Anos de História, Inovação e Soluções em Vidros e Box de Banheiro em São Paulo",
    excerpt:
      "Conheça a trajetória da Fast Vidro desde 1995, nossos valores, a linha completa de produtos (Secure Box, Flex, Elegance, espelhos, portas) e as regiões de São Paulo onde atendemos com agilidade.",
    to: "/blog/fast-vidro-historia",
  },
];

function Blog() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Conteúdo que ilumina."
        subtitle="Dicas, novidades e bastidores do mundo dos vidros em São Paulo."
        image={heroImg}
      />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="speed-line text-xs font-bold uppercase tracking-[0.3em] text-foreground/60">
              Últimas publicações
            </span>
            <h2 className="mt-3 text-4xl font-black">Feed Fast Vidro</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Guias práticos para quem quer reformar com vidro temperado em São Paulo sem dor de cabeça.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-xl overflow-hidden border border-border bg-card hover:border-primary transition flex flex-col">
              {p.to ? (
                <Link to={p.to} className="block aspect-[16/10] overflow-hidden bg-muted" aria-label={p.title}>
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </Link>
              ) : (
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                  <span className="text-primary">{p.tag}</span>
                  <span className="text-muted-foreground inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                </div>
                <h3 className="mt-3 text-xl font-black leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                {p.to ? (
                  <Link
                    to={p.to}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary"
                  >
                    Ler artigo completo <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ) : (
                  <a
                    href={waLink(`Olá! Quero saber mais sobre: ${p.title}`)}
                    target="_blank"
                    rel="noopener"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary"
                  >
                    Falar com especialista <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
