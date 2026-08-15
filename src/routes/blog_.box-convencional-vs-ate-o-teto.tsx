import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-convencional-vs-piso-teto-cover.webp";

export const Route = createFileRoute("/blog_/box-convencional-vs-ate-o-teto")({
  head: () => ({
    meta: [
      {
        title:
          "Box Convencional vs. Box Até o Teto: Qual o Melhor? | Fast Vidro",
      },
      {
        name: "description",
        content:
          "Comparativo completo entre box de banheiro convencional e box até o teto (piso-teto). Veja vantagens, preços, segurança e qual modelo escolher para o seu banheiro em São Paulo.",
      },
      {
        property: "og:title",
        content:
          "Box de Banheiro Convencional vs. Box Até o Teto: Qual o Melhor para Seu Banheiro?",
      },
      {
        property: "og:description",
        content:
          "Análise completa dos modelos convencional e piso-teto: retenção de calor, proteção de móveis, investimento e segurança. Descubra o ideal para você com a Fast Vidro.",
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
    "Olá! Li o artigo comparativo entre box convencional e box até o teto e quero um orçamento sob medida.";

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
                alt="Box de Banheiro Convencional vs. Box Até o Teto: qual o melhor para seu banheiro? — Fast Vidro"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Comparativo • Box de Vidro</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 27 de Junho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Box de Banheiro Convencional vs. Box Até o Teto: Qual o Melhor para
            Seu Banheiro?
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Na hora de reformar ou construir o banheiro dos seus sonhos, a
              escolha do <strong>box ideal</strong> vai muito além da estética.
              Trata-se de funcionalidade, segurança, valorização do imóvel e
              conforto térmico diário. Na Fast Vidro, percebemos que duas
              opções dominam os projetos modernos na Grande São Paulo: o
              clássico <strong>Box Convencional</strong> e o sofisticado{" "}
              <strong>Box Até o Teto</strong>.
            </p>
            <p>
              Neste artigo completo, vamos analisar minuciosamente as
              características, vantagens e desvantagens de cada modelo para que
              você faça a escolha certa.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              1. O que é o Box de Banheiro Convencional?
            </h2>
            <p>
              O <Link to="/box-de-banheiro/tradicional" className="text-primary hover:underline font-bold">box convencional</Link>{" "}
              é o modelo mais tradicional e encontrado na maioria das
              residências em São Paulo. Ele possui uma altura padrão — que
              geralmente varia entre 1,80 m e 1,90 m —, deixando um espaço aberto
              entre o topo do vidro e o teto do banheiro.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Vantagens do Modelo Convencional
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Ventilação Natural:</strong> O espaço aberto permite que
                o vapor da água saia rapidamente da área de banho, evitando o
                acúmulo excessivo de umidade nas paredes do box.
              </li>
              <li>
                <strong>Economia:</strong> Por utilizar menos vidro e ferragens
                de menor porte, o custo inicial de fabricação e instalação
                costuma ser mais acessível.
              </li>
              <li>
                <strong>Instalação Simplificada:</strong> Adapta-se facilmente a
                quase qualquer layout de banheiro, sem a necessidade de
                vistorias técnicas complexas no teto.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Para quem é indicado?
            </h3>
            <p>
              É ideal para banheiros pequenos, sem janela externa interna na área
              do chuveiro (onde o vapor precisa circular para o restante do
              ambiente para ser extraído por um exaustor) ou para quem busca uma
              solução rápida, segura e com excelente custo-benefício.
            </p>

            {/* CTA 1 */}
            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Orçamento rápido
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🛠️ Precisa de um orçamento para o seu bairro?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Receba atendimento personalizado da Fast Vidro para a sua região.
              </p>
              <a
                href={waLink(
                  "Olá! Preciso de um orçamento rápido para box de banheiro no meu bairro."
                )}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              2. O que é o Box Até o Teto (Box Engenharia)?
            </h2>
            <p>
              O <Link to="/box-de-banheiro/piso-teto" className="text-primary hover:underline font-bold">box até o teto</Link>{" "}
              (também conhecido no setor como box engenharia ou box total) é uma
              forte tendência da arquitetura contemporânea. Como o próprio nome
              diz, os painéis de vidro temperado vão do piso ou da borda da
              banheira até o teto do banheiro, vedando completamente a área de
              banho.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Vantagens do Box Até o Teto
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Estética Premium e Amplitude:</strong> A continuidade do
                vidro cria uma linha visual limpa que dá a sensação de que o
                banheiro é muito maior e mais luxuoso.
              </li>
              <li>
                <strong>Efeito Sauna (Retenção de Vapor):</strong> Ao confinar o
                vapor dentro do espaço do chuveiro, o calor é mantido. Isso
                proporciona um banho incrivelmente relaxante e aquecido, ideal
                para os dias frios de inverno em São Paulo.
              </li>
              <li>
                <strong>Preservação do Mobiliário:</strong> Como o vapor não se
                espalha pelo banheiro, seus móveis planejados, espelhos e a
                pintura do teto externo ficam protegidos contra mofo e
                estufamento causados pela umidade.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Cuidados Importantes
            </h3>
            <p>
              Para instalar este modelo, o banheiro obrigatoriamente deve ter uma
              janela ou basculante <strong>dentro da área do chuveiro</strong>{" "}
              para a saída do ar e do vapor após o banho. Caso contrário, o
              ambiente pode acumular fungos.
            </p>

            {/* CTA 2 */}
            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Nossos projetos
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                💎 Quer conhecer todos os nossos designs de vidro?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Veja fotos reais de projetos instalados pela nossa equipe em São
                Paulo.
              </p>
              <Link
                to="/box-de-banheiro"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Ver Página de Modelos de Box
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              3. Comparação Direta: Qual Escolher?
            </h2>
            <p>
              Para facilitar sua decisão, criamos uma tabela comparativa direta
              entre os dois modelos com base nos critérios mais solicitados pelos
              nossos clientes na fábrica da Fast Vidro:
            </p>

            <div className="overflow-x-auto my-6 rounded-xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Critério</th>
                    <th className="px-4 py-3">Box Convencional</th>
                    <th className="px-4 py-3">Box Até o Teto</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-bold">Retenção de Calor</td>
                    <td className="px-4 py-3">Baixa (o vapor espalha)</td>
                    <td className="px-4 py-3">Alta (efeito sauna relaxante)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Proteção de Móveis</td>
                    <td className="px-4 py-3">Moderada</td>
                    <td className="px-4 py-3">Máxima (umidade confinada)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Sensação de Espaço</td>
                    <td className="px-4 py-3">Padrão</td>
                    <td className="px-4 py-3">Ampliada (modernidade)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Exigência de Janela</td>
                    <td className="px-4 py-3">Pode ser fora do box</td>
                    <td className="px-4 py-3">Obrigatória dentro do box</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Investimento</td>
                    <td className="px-4 py-3">Econômico</td>
                    <td className="px-4 py-3">Médio a Alto</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              4. Cores e Acabamentos Disponíveis
            </h2>
            <p>
              Independente de escolher o modelo convencional ou o até o teto, a
              personalização dos perfis de alumínio e das roldanas é essencial
              para combinar com os metais do seu banheiro. Na Fast Vidro,
              trabalhamos com uma paleta completa de cores de alta durabilidade
              e pintura eletrostática ou anodizada.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Cores de Perfis Mais Pedidas em São Paulo:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Preto Fosco (Black Matte):</strong> Perfeito para
                banheiros industriais e modernos.
              </li>
              <li>
                <strong>Branco:</strong> Traz sensação de limpeza, ideal para
                decorações clássicas e minimalistas.
              </li>
              <li>
                <strong>Bronze / Champanhe:</strong> Agrega um toque vintage e
                sofisticado de alto padrão.
              </li>
              <li>
                <strong>Cromado / Brilhante:</strong> O clássico versátil que
                combina com qualquer torneira ou chuveiro.
              </li>
            </ul>
            <p>
              Quanto aos vidros, você pode optar pelo Incolor tradicional,
              Verde, Fumê, ou com acabamentos privativos como o Jateado ou
              Pontilhado.
            </p>

            {/* CTA 3 */}
            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Guia de cores
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🎨 Quer ver qual cor combina melhor com o seu revestimento?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Confira nosso guia completo e acerte em cheio no projeto.
              </p>
              <Link
                to="/blog/cor-box-incolor-fume-verde-bronze"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Ver Guia Completo de Cores e Acabamentos
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              5. Segurança em Primeiro Lugar: Película Secure Box
            </h2>
            <p>
              Trabalhamos exclusivamente com <strong>Vidro Temperado de 8 mm ou 10 mm</strong>,
              que é até 5 vezes mais resistente que o vidro comum. No entanto,
              por se tratar de uma área de grande variação térmica e impacto
              constante, a segurança da sua família deve ser blindada.
            </p>
            <p>
              É por isso que a Fast Vidro recomenda fortemente a aplicação da{" "}
              <strong>Película Secure Box</strong>.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Por que usar a Película de Segurança?
            </h3>
            <p>
              Caso ocorra uma quebra acidental (por impacto ou desgaste de
              roldana), a película retém todos os fragmentos de vidro colados na
              estrutura, impedindo que os pedaços caiam no chão ou machuquem
              alguém. O box continua em pé de forma segura até a chegada da
              nossa assistência técnica.
            </p>

            {/* CTA 4 */}
            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Proteção máxima
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🛡️ Proteja sua família hoje mesmo contra acidentes domésticos.
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Entenda como a película de segurança funciona e por que ela é
                indispensável.
              </p>
              <Link
                to="/blog/secure-box-pelicula-protecao"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Saiba Tudo sobre a Película Secure Box
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              6. Atendimento e Instalação de Box de Vidro em São Paulo
            </h2>
            <p>
              A Fast Vidro é referência no mercado de vidraçaria porque une
              agilidade de fábrica com instalação técnica residencial
              impecável. Atendemos com frota própria e profissionais
              especializados em diversos bairros e regiões estratégicas da
              capital paulista.
            </p>
            <p>
              Se você está reformando seu apartamento ou casa, nós entregamos e
              instalamos com rapidez e garantia de vedação nos seguintes locais:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Zona Sul:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "morumbi" }} className="text-primary hover:underline font-bold">Morumbi</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "santo-amaro" }} className="text-primary hover:underline font-bold">Santo Amaro</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "brooklin" }} className="text-primary hover:underline font-bold">Brooklin</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-olimpia" }} className="text-primary hover:underline font-bold">Vila Olímpia</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "moema" }} className="text-primary hover:underline font-bold">Moema</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "saude" }} className="text-primary hover:underline font-bold">Saúde</Link> e arredores.
              </li>
              <li>
                <strong>Zona Oeste:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "pinheiros" }} className="text-primary hover:underline font-bold">Pinheiros</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "perdizes" }} className="text-primary hover:underline font-bold">Perdizes</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "lapa" }} className="text-primary hover:underline font-bold">Lapa</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-madalena" }} className="text-primary hover:underline font-bold">Vila Madalena</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "butanta" }} className="text-primary hover:underline font-bold">Butantã</Link> e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "alto-de-pinheiros" }} className="text-primary hover:underline font-bold">Alto de Pinheiros</Link>.
              </li>
              <li>
                <strong>Zona Norte:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "santana" }} className="text-primary hover:underline font-bold">Santana</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "tucuruvi" }} className="text-primary hover:underline font-bold">Tucuruvi</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-maria" }} className="text-primary hover:underline font-bold">Vila Maria</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "casa-verde" }} className="text-primary hover:underline font-bold">Casa Verde</Link> e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "freguesia-do-o" }} className="text-primary hover:underline font-bold">Freguesia do Ó</Link>.
              </li>
              <li>
                <strong>Zona Leste:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "tatuape" }} className="text-primary hover:underline font-bold">Tatuapé</Link>,{" "}
                Anália Franco,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "mooca" }} className="text-primary hover:underline font-bold">Mooca</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-formosa" }} className="text-primary hover:underline font-bold">Vila Formosa</Link> e{" "}
                Itaquera.
              </li>
              <li>
                <strong>Centro e Região Metropolitana:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "consolacao" }} className="text-primary hover:underline font-bold">Consolação</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "bela-vista" }} className="text-primary hover:underline font-bold">Bela Vista</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "jardins" }} className="text-primary hover:underline font-bold">Jardins</Link> e também a região do ABC (Santo André, São Bernardo e São Caetano).
              </li>
            </ul>
            <p>
              Independentemente da sua localização em São Paulo, nossa equipe
              vai até o local para realizar a medição fina e garantir que o seu
              box — seja ele convencional ou até o teto — fique perfeitamente
              alinhado e sem vazamentos.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Conclusão: Qual o veredito para o seu projeto?
            </h2>
            <p>
              Se o seu objetivo é <strong>economizar sem abrir mão da segurança</strong>,
              o <strong>Box Convencional</strong> atende perfeitamente. Mas se
              você busca transformar o seu banheiro em um verdadeiro{" "}
              <strong>spa residencial</strong>, valorizando o imóvel e protegendo
              seus móveis da umidade, o <strong>Box Até o Teto</strong> é o
              investimento ideal.
            </p>
            <p>
              Não feche o seu orçamento sem antes falar com quem entende de
              verdade do assunto. Garanta o preço direto de fábrica, o menor
              prazo de entrega de São Paulo e uma instalação limpa e segura.
            </p>
          </div>

          {/* WhatsApp CTA Final */}
          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Pronto para transformar seu banheiro?
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              📞 Não perca tempo calculando medidas erradas
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Deixe que o especialista da Fast Vidro resolva para você. Envie
              uma foto do seu banheiro e receba uma estimativa de preço em
              poucos minutos para o seu bairro!
            </p>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
            >
              <MessageCircle className="h-5 w-5" />
              👉 Clique aqui para falar no WhatsApp
            </a>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/box-de-banheiro"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Ver todos os modelos
              </Link>
              <Link
                to="/blog/cor-box-incolor-fume-verde-bronze"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Guia de Cores
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
