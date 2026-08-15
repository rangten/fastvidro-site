import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-como-limpar-box-cover.webp";

const TITLE =
  "Como Limpar o Box de Banheiro Corretamente: O Guia Definitivo para Eliminar Manchas sem Danificar o Vidro | Fast Vidro";
const DESC =
  "Aprenda a limpar seu box de vidro temperado corretamente: receita caseira com bicarbonato e vinagre, produtos que nunca deve usar, tabela de frequência e dicas para manter o box novo por anos. Fast Vidro SP.";
const URL =
  "https://glass-swift-site.lovable.app/blog/como-limpar-box-banheiro";

export const Route = createFileRoute("/blog_/como-limpar-box-banheiro")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: cover },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: cover },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESC,
          image: cover,
          datePublished: "2026-07-03",
          author: { "@type": "Organization", name: "Fast Vidro" },
          publisher: { "@type": "Organization", name: "Fast Vidro" },
          mainEntityOfPage: URL,
        }),
      },
    ],
  }),
  component: Post,
});

function Post() {
  const message =
    "Olá! Li o artigo sobre como limpar o box de banheiro e quero um orçamento para manutenção ou troca.";

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
              <img width={1200} height={800}
                src={cover}
                alt="Como limpar o box de banheiro corretamente sem danificar o vidro temperado — Fast Vidro"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Limpeza • Box de Vidro</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 3 de Julho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Como Limpar o Box de Banheiro Corretamente: O Guia Definitivo para
            Eliminar Manchas sem Danificar o Vidro
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Manter o <strong>box de vidro temperado</strong> sempre limpo,
              transparente e brilhando é um dos maiores desafios domésticos na
              rotina dos lares em São Paulo. Com a correria do dia a dia, é
              muito comum notar o surgimento daquelas manchas esbranquiçadas ou
              foscas que parecem impregnadas no vidro, deixando o banheiro com
              um aspecto descuidado, mesmo que ele tenha sido lavado
              recentemente.
            </p>
            <p>
              Na Fast Vidro, recebemos diariamente mensagens de clientes
              perguntando se o vidro "manchou para sempre" ou qual é o produto
              milagroso para resolver esse problema. A verdade é que a maioria
              das pessoas limpa o box de forma errada, utilizando produtos
              abrasivos que removem o brilho do alumínio e riscam a superfície
              do vidro temperado.
            </p>
            <p>
              Neste guia técnico definitivo, vamos te ensinar a química correta
              da limpeza residencial, revelando como eliminar gordura corporal,
              calcário da água e restos de sabonete com segurança, além de dar
              dicas para o seu box durar muito mais tempo.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              1. O que Causa as Manchas no Vidro do Box?
            </h2>
            <p>
              Antes de esfregar o vidro com qualquer produto, é preciso entender
              o inimigo que estamos combatendo. As manchas esbranquiçadas e
              opacas que surgem no box de banheiro são provocadas por três
              fatores principais que se acumulam após cada banho:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Gordura Corporal:</strong> Durante o banho quente, a
                gordura natural da nossa pele se desprende com a água e o
                sabonete, evaporando e grudando diretamente na superfície do
                vidro.
              </li>
              <li>
                <strong>Resíduos de Produtos Químicos:</strong> Restos de
                shampoos, condicionadores, sabonetes e óleos corporais formam
                uma película pegajosa e escorregadia no vidro e nos perfis de
                alumínio.
              </li>
              <li>
                <strong>Calcário e Minerais da Água:</strong> A água que chega
                às nossas torneiras em São Paulo contém minerais. Quando as
                gotículas de água secam sozinhas no vidro por causa do calor,
                esses minerais evaporam e se solidificam, criando pequenas
                crostas esbranquiçadas (o chamado calcário).
              </li>
            </ul>
            <p>
              Se você não remover essa camada periodicamente, ela se acumula e
              sofre uma reação química com o calor constante do chuveiro,
              tornando a limpeza cada vez mais difícil.
            </p>
          </div>

          {/* CTA 1 — Manutenção/WhatsApp */}
          <div className="mt-10 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Manutenção e Troca de Box
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Seu box atual já está muito velho, riscado ou com as roldanas
              travando?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Fale agora com um Especialista da Fast Vidro no WhatsApp e solicite
              um orçamento de manutenção ou troca direto de fábrica!
            </p>
            <a
              href={waLink(
                "Olá! Li o artigo sobre limpeza de box e quero um orçamento de manutenção ou troca."
              )}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com Especialista no WhatsApp
            </a>
          </div>

          <div className="prose-content mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              2. O que VOCÊ NUNCA DEVE USAR na Limpeza do Box
            </h2>
            <p>
              Muitas receitas caseiras da internet e produtos de supermercado
              prometem milagres, mas causam danos irreversíveis à estrutura do
              seu box de vidro temperado e aos perfis de acabamento. Evite
              terminantemente:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Palha de Aço (Bombril) Seca ou Úmida:</strong> Ela cria
                microfissuras invisíveis a olho nu na superfície do vidro. Com
                o tempo, essas fissuras tiram o brilho do material e
                enfraquecem o vidro temperado de 8mm, aumentando o risco de
                quebra espontânea.
              </li>
              <li>
                <strong>Produtos Ácidos ou Cloro Puro:</strong> Água sanitária
                pura, produtos para limpar pedras ou azulejos e ácidos fortes
                reagem com o alumínio dos trilhos, manchando e descascando a
                pintura eletrostática (especialmente nos perfis Preto Fosco e
                Bronze).
              </li>
              <li>
                <strong>Esponjas de Cozinha do Lado Verde (Abrasivo):</strong>{" "}
                O lado áspero da esponja convencional risca o vidro e destrói
                o polimento dos metais cromados de alto padrão.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              3. Passo a Passo: A Receita Caseira Segura e Eficiente (Aprovada
              pela Fábrica)
            </h2>
            <p>
              Para limpar o vidro sem correr riscos e remover toda a gordura
              impregnada, a equipe técnica da Fast Vidro recomenda uma mistura
              simples, barata e altamente eficaz baseada em desengordurantes
              naturais.
            </p>

            <h3 className="text-xl font-black pt-4">
              Ingredientes Necessários
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>1 colher de sopa de sabão em pó ou detergente neutro de alta qualidade;</li>
              <li>2 colheres de sopa de bicarbonato de sódio (excelente para remover crostas minerais);</li>
              <li>1 colher de sopa de álcool 70%;</li>
              <li>1 xícara de vinagre de álcool branco (o ácido acético natural que dissolve gordura e calcário);</li>
              <li>1 xícara de água morna.</li>
            </ul>

            <h3 className="text-xl font-black pt-4">
              Como Aplicar no Vidro
            </h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Misture bem os ingredientes em uma bacia pequena até formar uma
                pasta efervescente e espumosa.
              </li>
              <li>
                Com o banheiro ainda úmido após o banho (o vapor ajuda a
                amolecer a sujeira), utilize o lado macio (amarelo) da esponja
                para aplicar a mistura por todo o vidro, fazendo movimentos
                circulares e suaves.
              </li>
              <li>
                Deixe a mistura agir na superfície por cerca de 5 a 10 minutos.
                Não deixe secar.
              </li>
              <li>
                Enxágue abundantemente com água fria do próprio chuveiro até
                remover todo o produto.
              </li>
            </ol>
            <p>
              <strong>Dica de Ouro:</strong> Utilize um rodinho de pia de
              borracha para remover o excesso de água e seque completamente o
              vidro com um pano de microfibra que não solte fiapos. Se o vidro
              ficar seco, as manchas de água não se formam!
            </p>
          </div>

          {/* CTA 2 — Modelos */}
          <div className="mt-10 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Pensando em trocar de box?
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Pensando em trocar de box para um modelo mais moderno e fácil de
              limpar?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Acesse nossa Página de Modelos de Box e conheça designs que
              reduzem o acúmulo de sujeira nas canaletas.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/box-de-banheiro"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Ver Modelos de Box
              </Link>
              <Link
                to="/blog/cor-box-incolor-fume-verde-bronze"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Guia de Cores de Box
              </Link>
            </div>
          </div>

          <div className="prose-content mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              4. Tabela de Frequência de Limpeza: Como Manter o Box Novo
            </h2>
            <p>
              Para garantir que os vidros da marca Cebrace ou Guardian
              instalados pela Fast Vidro mantenham a transparência de fábrica
              por anos, siga este cronograma técnico de manutenção doméstica:
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-3 text-left font-bold">
                      Tipo de Cuidado
                    </th>
                    <th className="border border-border px-4 py-3 text-left font-bold">
                      Frequência Recomendada
                    </th>
                    <th className="border border-border px-4 py-3 text-left font-bold">
                      Objetivo Principal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-3 font-semibold">
                      Passar o rodinho de borracha
                    </td>
                    <td className="border border-border px-4 py-3">
                      Após cada banho (Diário)
                    </td>
                    <td className="border border-border px-4 py-3">
                      Evitar que as gotas d'água sequem e formem calcário
                    </td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border px-4 py-3 font-semibold">
                      Lavagem com detergente neutro
                    </td>
                    <td className="border border-border px-4 py-3">
                      1 vez por semana
                    </td>
                    <td className="border border-border px-4 py-3">
                      Remover o acúmulo de gordura corporal e shampoos
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3 font-semibold">
                      Aplicação da pasta de bicarbonato
                    </td>
                    <td className="border border-border px-4 py-3">
                      A cada 15 dias
                    </td>
                    <td className="border border-border px-4 py-3">
                      Eliminar manchas esbranquiçadas e devolver o brilho
                    </td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border px-4 py-3 font-semibold">
                      Secagem dos trilhos de alumínio
                    </td>
                    <td className="border border-border px-4 py-3">
                      2 vezes por semana
                    </td>
                    <td className="border border-border px-4 py-3">
                      Evitar o surgimento de mofo e oxidação nas roldanas
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              5. Como Limpar Box com Película Secure Box?
            </h2>
            <p>
              Se você seguiu a recomendação de segurança da Fast Vidro e
              instalou a <strong>Película Secure Box</strong> para proteger seus
              filhos e familiares contra acidentes domésticos, os cuidados com a
              limpeza devem ser ligeiramente adaptados. Como a película fica
              aplicada na face externa do vidro, ela exige carinho no manuseio.
            </p>
            <h3 className="text-xl font-black pt-4">
              Regras para Higienização da Película
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Use apenas Detergente Neutro e Água:</strong> Não
                utilize o vinagre ou o álcool sobre a película protetora de
                polímero. O detergente neutro com água morna é mais do que
                suficiente para remover a poeira e marcas de dedos externos.
              </li>
              <li>
                <strong>Nunca use panos ásperos:</strong> Utilize sempre panos de
                microfibra macios ou esponjas de silicone para não riscar a
                camada protetora invisível da película.
              </li>
            </ul>
          </div>

          {/* CTA 3 — Secure Box */}
          <div className="mt-10 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Proteção e Segurança
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Ainda não tem proteção no seu box de vidro?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Saiba Tudo sobre a Tecnologia da Película Secure Box e proteja
              sua casa.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/blog/secure-box-pelicula-protecao"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Conheça o Secure Box
              </Link>
              <Link
                to="/box-de-banheiro"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Ver Modelos de Box
              </Link>
            </div>
          </div>

          <div className="prose-content mt-10 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              6. Atendimento Local e Manutenção Técnica de Box em São Paulo
            </h2>
            <p>
              Muitas vezes, a mancha ou o aspecto fosco do box não é apenas
              sujeira, mas sim o desgaste natural de componentes como roldanas
              oxidadas que estão soltando resíduos de ferrugem no vidro, ou
              silicone antigo que acumulou mofo preto impossível de limpar.
            </p>
            <p>
              A Fast Vidro conta com equipes de técnicos que realizam vistorias
              de manutenção e troca de kits antigos nos principais bairros e
              regiões estratégicas de São Paulo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Zona Sul:</strong> Atendimento rápido no{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "morumbi" }} className="text-primary hover:underline font-bold">Morumbi</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "moema" }} className="text-primary hover:underline font-bold">Moema</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "brooklin" }} className="text-primary hover:underline font-bold">Brooklin</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-olimpia" }} className="text-primary hover:underline font-bold">Vila Olímpia</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "campo-belo" }} className="text-primary hover:underline font-bold">Campo Belo</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "santo-amaro" }} className="text-primary hover:underline font-bold">Santo Amaro</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "saude" }} className="text-primary hover:underline font-bold">Saúde</Link> e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-mariana" }} className="text-primary hover:underline font-bold">Vila Mariana</Link>.
              </li>
              <li>
                <strong>Zona Oeste:</strong> Manutenções e novas instalações em{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "pinheiros" }} className="text-primary hover:underline font-bold">Pinheiros</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "perdizes" }} className="text-primary hover:underline font-bold">Perdizes</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "lapa" }} className="text-primary hover:underline font-bold">Lapa</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-madalena" }} className="text-primary hover:underline font-bold">Vila Madalena</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "alto-de-pinheiros" }} className="text-primary hover:underline font-bold">Alto de Pinheiros</Link> e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "butanta" }} className="text-primary hover:underline font-bold">Butantã</Link>.
              </li>
              <li>
                <strong>Zona Norte:</strong> Atendimento técnico ágil em{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "santana" }} className="text-primary hover:underline font-bold">Santana</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "tucuruvi" }} className="text-primary hover:underline font-bold">Tucuruvi</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "casa-verde" }} className="text-primary hover:underline font-bold">Casa Verde</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "freguesia-do-o" }} className="text-primary hover:underline font-bold">Freguesia do Ó</Link> e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "mandaqui" }} className="text-primary hover:underline font-bold">Mandaqui</Link>.
              </li>
              <li>
                <strong>Zona Leste:</strong> Atendemos com frota própria no{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "tatuape" }} className="text-primary hover:underline font-bold">Tatuapé</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "analia-franco" }} className="text-primary hover:underline font-bold">Anália Franco</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "mooca" }} className="text-primary hover:underline font-bold">Mooca</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-formosa" }} className="text-primary hover:underline font-bold">Vila Formosa</Link> e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "penha" }} className="text-primary hover:underline font-bold">Penha</Link>.
              </li>
              <li>
                <strong>Centro e Região Metropolitana:</strong> Projetos
                executados nos <Link to="/servicos/$bairro" params={{ bairro: "jardins" }} className="text-primary hover:underline font-bold">Jardins</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "consolacao" }} className="text-primary hover:underline font-bold">Consolação</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "higienopolis" }} className="text-primary hover:underline font-bold">Higienópolis</Link> e também no
                Grande ABC (Santo André, São Bernardo e São Caetano).
              </li>
            </ul>
            <p>
              Nossos montadores realizam a raspagem de silicone velho
              contaminado e a aplicação de vedação nova com silicone neutro
              antifungo de alta performance, devolvendo a vida útil ao seu
              banheiro.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Conclusão: O Segredo Está na Prevenção
            </h2>
            <p>
              Limpar o box de banheiro corretamente não exige produtos caros,
              mas sim a técnica certa. Usando detergente neutro, vinagre de
              álcool e bicarbonato de sódio, você elimina as manchas de gordura
              e calcário sem agredir os perfis de alumínio (sejam eles pretos,
              brancos ou cromados). E lembre-se: passar o rodinho de borracha
              após o banho leva apenas 10 segundos e evita 90% das manchas!
            </p>
            <p>
              Se o seu box atual já passou do tempo de limpeza e precisa de uma
              reforma completa nos trilhos ou substituição por vidros novos com
              vedação impecável, fale com a nossa fábrica.
            </p>
          </div>

          {/* Final WhatsApp CTA */}
          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Deixe seu box antigo e manchado no passado!
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Fale agora mesmo com a equipe de atendimento técnico da Fast Vidro
              e renove o visual do seu banheiro com preço direto de fábrica.
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Mande uma foto do seu box atual. Nós avaliamos se vale a pena
              fazer uma manutenção nos perfis e roldanas ou se uma troca por um
              modelo moderno cabe perfeitamente no seu orçamento!
            </p>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Clique Aqui para Falar Conosco no WhatsApp
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
                Guia de Cores de Box
              </Link>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
