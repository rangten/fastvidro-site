import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-secure-box-cover.webp";

export const Route = createFileRoute("/blog_/secure-box-pelicula-protecao")({
  head: () => ({
    meta: [
      {
        title:
          "O que é Secure Box? Película de Proteção para Box de Vidro Temperado — Fast Vidro",
      },
      {
        name: "description",
        content:
          "Conheça o Secure Box: a película de segurança para box de vidro temperado que mantém os fragmentos presos em caso de quebra. Proteção real para sua família em São Paulo.",
      },
      {
        property: "og:title",
        content:
          "O que é Secure Box? Película de Proteção para Box de Vidro Temperado — Fast Vidro",
      },
      {
        property: "og:description",
        content:
          "Saiba como funciona a tecnologia Secure Box, a película antiestilhaço da Fast Vidro que protege sua família contra acidentes no banheiro.",
      },
      { property: "og:image", content: cover },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: cover },
    ],
  }),
  component: Post,
});

function Post() {
  const message =
    "Olá! Li o post sobre Secure Box e quero um orçamento para box de banheiro com película de segurança.";

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
                src={cover}
                alt="Secure Box — Película de Segurança para Box de Vidro Temperado | Fast Vidro"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Segurança e Tecnologia</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 04 de Junho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            O que é Secure Box? Conheça a Película de Proteção para Box de Vidro
            Temperado que Protege sua Família
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Quando pensamos em reformar ou construir um banheiro, a escolha do
              box é um dos momentos mais importantes. O vidro temperado é o
              padrão do mercado devido à sua resistência, mas você já parou para
              pensar no que acontece se ele quebrar? Pensando em levar o máximo
              de tranquilidade e proteção para o seu lar, a Fast Vidro traz uma
              tecnologia revolucionária: o <strong>Secure Box</strong>, a
              película de segurança definitiva para box de vidro.
            </p>
            <p>
              Muito além da estética, a nossa preocupação principal desde 1995 é
              criar e oferecer soluções individuais para cada cliente. É por
              isso que o sistema Secure Box se tornou um item indispensável para
              quem não abre mão da segurança de seus filhos, idosos e de toda a
              família na hora do banho.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Como Funciona a Película de Proteção Secure Box?
            </h2>
            <p>
              O vidro temperado é conhecido por ser até cinco vezes mais forte
              que o vidro comum. No entanto, em caso de impactos violentos,
              variações térmicas extremas ou desalinhamento das roldanas, ele
              pode sofrer uma quebra espontânea, estilhaçando-se em milhares de
              pedaços pequenos.
            </p>
            <p>
              É exatamente aí que entra o Secure Box. Esta é uma película de
              proteção de alta performance aplicada diretamente na superfície do
              vidro.
            </p>
            <p className="rounded-lg border-l-4 border-primary bg-card p-5">
              🛡️ <strong>O Grande Diferencial:</strong> Em caso de quebra, os
              fragmentos de vidro ficam totalmente presos na película. O vão do
              banheiro continua fechado, evitando que os pedaços cortantes se
              espalhem pelo chão ou atinjam alguém.
            </p>
            <p>
              Com essa tecnologia, você ganha tempo para entrar em contato com a
              nossa equipe de manutenção sem correr o risco de se cortar com os
              estilhaços ou pisar em resíduos de vidro pelo banheiro.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Vantagens de Instalar o Secure Box no seu Banheiro
            </h2>
            <p>
              Optar por essa solução traz uma série de benefícios que vão muito
              além de um box convencional:
            </p>

            <h3 className="text-xl font-black pt-2">Segurança Ativa</h3>
            <p>
              Proteção real contra acidentes graves causados por estilhaços
              voadores.
            </p>

            <h3 className="text-xl font-black pt-2">Alta Durabilidade</h3>
            <p>
              A película é desenvolvida com tecnologia que resiste à umidade
              constante e ao vapor do chuveiro, sem descolar ou amarelar com o
              tempo.
            </p>

            <h3 className="text-xl font-black pt-2">Fácil Limpeza</h3>
            <p>
              A camada protetora facilita o escoamento da água, reduzindo o
              acúmulo de gordura e manchas de sabonete no vidro.
            </p>

            <h3 className="text-xl font-black pt-2">Valorização do Imóvel</h3>
            <p>
              Um banheiro planejado com foco em segurança premium agrega muito
              mais valor ao seu projeto residencial.
            </p>

            <p>
              Para conhecer todos os detalhes técnicos, testes de resistência e
              solicitar um orçamento específico dessa tecnologia, acesse agora a
              nossa{" "}
              <Link
                to="/box-de-banheiro/secure-box"
                className="text-primary hover:underline font-bold"
              >
                página exclusiva do Sistema Secure Box Fast Vidro
              </Link>
              .
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Atendimento Especializado em Box de Vidro em São Paulo
            </h2>
            <p>
              A Fast Vidro realiza a medição, fabricação e instalação do seu box
              com película de segurança com uma equipe própria e altamente
              treinada. Nossa base atende com rapidez cirúrgica toda a{" "}
              <strong>Zona Norte de São Paulo</strong> (Santana, Tucuruvi,
              Mandaqui, Casa Verde, Vila Maria, Freguesia do Ó).
            </p>
            <p>
              Além disso, nossa frota está totalmente estruturada para atender
              com a mesma eficiência as demais regiões da capital paulista: Zona
              Oeste, Zona Leste, Zona Sul e o Centro de São Paulo. Não importa
              onde você esteja, nós levamos a solução ideal até você.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Garanta a Segurança do seu Banheiro Hoje Mesmo!
            </h2>
            <p>
              Não espere um acidente acontecer para pensar na proteção de quem
              você ama. O investimento em prevenção traz uma paz de espírito que
              não tem preço.
            </p>
            <p>
              Fale agora mesmo com um de nossos consultores técnicos através do
              nosso WhatsApp. Estamos prontos para tirar suas dúvidas, desenhar
              o projeto ideal para o seu espaço e enviar um orçamento sob
              medida!
            </p>
          </div>

          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Fale agora com a Fast Vidro
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Quero um orçamento de Secure Box no WhatsApp
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
