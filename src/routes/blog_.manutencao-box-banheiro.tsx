import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-manutencao-box-cover.webp";

export const Route = createFileRoute("/blog_/manutencao-box-banheiro")({
  head: () => ({
    meta: [
      {
        title:
          "Manutenção do Box de Banheiro: Obrigatória uma Vez por Ano? | Fast Vidro",
      },
      {
        name: "description",
        content:
          "Saiba por que a manutenção anual do box de vidro é obrigatória segundo a NBR 14207 da ABNT. Dicas de segurança, sinais de alerta e serviço técnico da Fast Vidro em São Paulo.",
      },
      {
        property: "og:title",
        content:
          "Manutenção do Box de Banheiro: Você Sabia que Ela é Obrigatória uma Vez por Ano?",
      },
      {
        property: "og:description",
        content:
          "Descubra por que a revisão anual do box de vidro temperado é essencial para a segurança da sua família, segundo a norma ABNT NBR 14207.",
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
    "Olá! Li o artigo sobre manutenção do box de banheiro e quero agendar uma revisão técnica.";

  return (
    <SiteLayout>
      <article className="bg-background">
        {/* Cover */}
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
                alt="Manutenção do Box de Banheiro: revisão anual obrigatória pela NBR 14207 — Fast Vidro"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Manutenção • Box de Vidro</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 25 de Junho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Manutenção do Box de Banheiro: Você Sabia que Ela é Obrigatória uma
            Vez por Ano?
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              O <strong>box de vidro temperado</strong> é um item indispensável
              nos lares de São Paulo pela sua praticidade, beleza e durabilidade.
              No entanto, por ser um elemento de segurança que usamos todos os
              dias, muitas pessoas esquecem que ele precisa de cuidados técnicos
              periódicos.
            </p>
            <p>
              Se você não lembra a última vez que fez uma revisão no seu box — ou
              se nunca fez —, este artigo é um alerta importante para a segurança
              da sua família e a valorização do seu imóvel.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              O que diz a Norma Técnica da ABNT (NBR 14207)?
            </h2>
            <p>
              Pouca gente sabe, mas o vidro do box de banheiro é regulamentado por
              uma norma específica no Brasil: a{" "}
              <strong>NBR 14207 da ABNT</strong>.
            </p>
            <p>
              Essa norma estabelece todas as diretrizes de fabricação, instalação
              e, principalmente, de utilização segura do box. E o texto é muito
              claro: a <strong>manutenção preventiva do box de vidro</strong>{" "}
              deve ser realizada impreterivelmente a cada 12 meses (uma vez por
              ano).
            </p>
            <p>
              Assim como fazemos a revisão do carro ou do elevador do condomínio,
              os componentes do box sofrem desgaste natural com o uso diário, a
              umidade e o vapor do chuveiro. A revisão anual garante que pequenas
              falhas sejam corrigidas antes que se tornem um problema grave.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Por que a Manutenção Anual é Essencial?
            </h2>
            <p>
              O vidro temperado de 8mm é extremamente resistente a impactos
              frontais. Porém, o perigo geralmente não está no vidro em si, mas
              sim no desgaste das peças que o sustentam. A manutenção preventiva
              evita:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Desregulagem de Roldanas:</strong> Com o tempo, as
                roldanas podem oxidar ou sair do trilho, fazendo com que a porta
                de vidro bata direto no perfil de alumínio ou na parede.
              </li>
              <li>
                <strong>Ressecamento de Batedores:</strong> Os batedores de
                borracha ou silicone evitam o impacto direto do vidro com o metal.
                Se eles ressecarem e caírem, o vidro pode quebrar ao ser fechado
                com mais força.
              </li>
              <li>
                <strong>Travamento da Porta:</strong> O acúmulo de sujeira e
                resíduos de xampu no trilho dificulta o deslize, exigindo que o
                usuário force a porta, o que aumenta o risco de acidentes.
              </li>
              <li>
                <strong>Perda de Fixação:</strong> Parafusos e cunhas podem
                afrouxar com o "abre e fecha" diário, comprometendo a estrutura
                inteira.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              4 Sinais de Alerta no Seu Box (Hora de Chamar o Técnico)
            </h2>
            <p>
              Se você notar qualquer um desses sinais abaixo, não espere o prazo
              de um ano. Solicite uma visita técnica imediatamente:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Porta pesada ou travando ao abrir ou fechar.</li>
              <li>Barulho de atrito de metal com metal ou vidro com metal.</li>
              <li>
                Guarnições, batedores ou calços de borracha danificados ou soltos.
              </li>
              <li>
                Água vazando para fora do box por falha na vedação de silicone.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Como Funciona a Revisão da Fast Vidro?
            </h2>
            <p>
              Na Fast Vidro, nós não apenas instalamos os melhores modelos do
              mercado (como os sistemas{" "}
              <Link
                to="/box-de-banheiro/tradicional"
                className="text-primary hover:underline font-bold"
              >
                tradicionais
              </Link>
              , de abrir,{" "}
              <Link
                to="/box-de-banheiro/flex"
                className="text-primary hover:underline font-bold"
              >
                flex
              </Link>{" "}
              ou o exclusivo{" "}
              <Link
                to="/box-de-banheiro/secure-box"
                className="text-primary hover:underline font-bold"
              >
                Secure Box
              </Link>
              ), mas também realizamos o serviço técnico de manutenção preventiva
              dentro das normas da ABNT.
            </p>
            <p>
              Durante a visita técnica, nossa equipe avalia a integridade do
              vidro, substitui roldanas gastas, troca batedores e borrachas
              antigas, ajusta o prumo da porta e refaz a vedação para deixar seu
              box como novo, silencioso e, acima de tudo,{" "}
              <strong>100% seguro</strong>.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Seu box está em dia com a norma?
            </h2>
            <p>
              Não coloque a segurança de quem você ama em risco. Se o seu box já
              passou de um ano da instalação ou da última revisão,{" "}
              <a
                href={waLink(message)}
                target="_blank"
                rel="noopener"
                className="text-primary hover:underline font-bold"
              >
                clique aqui para agendar uma manutenção preventiva ou solicitar um
                orçamento com os especialistas da Fast Vidro no WhatsApp
              </a>
              !
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Fale agora com a Fast Vidro
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Agende a revisão do seu box e durma tranquilo
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Atendemos toda a capital de São Paulo e Grande SP com medição
              técnica digital e instalação especializada rápida.
            </p>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar manutenção no WhatsApp
            </a>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/box-de-banheiro"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Ver todos os modelos
              </Link>
              <Link
                to="/blog/secure-box-pelicula-protecao"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Conheça o Secure Box
              </Link>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
