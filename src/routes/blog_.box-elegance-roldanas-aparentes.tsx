import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-elegance-roldanas-aparentes-cover.webp";

const TITLE =
  "Box Elegance (Roldanas Aparentes): O Guia Definitivo do Box de Alto Padrão para Seu Banheiro | Fast Vidro";
const DESC =
  "Conheça o Box Elegance com Roldanas Aparentes da Fast Vidro: design premium, deslize suave, metais nobres e vidro temperado 8mm/10mm. Veja cores, segurança com Película Secure Box e atendimento em São Paulo.";
const URL = "https://glass-swift-site.lovable.app/blog/box-elegance-roldanas-aparentes";

export const Route = createFileRoute("/blog_/box-elegance-roldanas-aparentes")({
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
          datePublished: "2026-07-02",
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
    "Olá! Li o artigo sobre Box Elegance com Roldanas Aparentes e quero um orçamento sob medida para o meu banheiro.";

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
              <img width={1200} height={800}
                src={cover}
                alt="Box Elegance com Roldanas Aparentes — Fast Vidro"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Guia Técnico • Box de Vidro</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 2 de Julho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Box Elegance (Roldanas Aparentes): O Guia Definitivo do Box de Alto
            Padrão para Seu Banheiro
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Quando o objetivo de uma reforma residencial é transformar o
              banheiro em um verdadeiro spa de luxo, cada detalhe conta. Em
              projetos de alto padrão na Grande São Paulo, o box deixou de ser
              apenas um item funcional para conter a água do banho e passou a
              ser o grande protagonista do design de interiores. Se você busca o
              ápice da sofisticação, modernidade e valorização estética para o
              seu imóvel, precisa conhecer o{" "}
              <strong>Box Elegance com Roldanas Aparentes</strong>.
            </p>
            <p>
              Desenvolvido para quem não abre mão do design premium, este
              modelo revolucionou o mercado de vidraçaria. Na{" "}
              <strong>Fast Vidro</strong>, nós fabricamos e instalamos o Sistema
              Elegance sob medida, garantindo que a robustez do metal nobre e a
              leveza do vidro temperado tragam uma atmosfera de hotel cinco
              estrelas para a sua casa.
            </p>
            <p>
              Neste artigo completo, vamos explicar o que torna o Box Elegance
              tão especial, suas especificações técnicas, vantagens visuais e
              por que ele é considerado o melhor investimento em design para
              banheiros modernos.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              1. O que é o Box Elegance com Roldanas Aparentes?
            </h2>
            <p>
              O Box Elegance é um sistema de engenharia para box de correr que
              elimina completamente aquele trilho de alumínio superior grosso
              e fechado dos modelos tradicionais. Em vez de esconder o
              mecanismo de rolamento, o Sistema Elegance faz o oposto: ele exibe
              as roldanas como <strong>elementos de design</strong>.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              A Engenharia por Trás do Modelo
            </h3>
            <p>
              A porta de vidro desliza suavemente sobre um tubo maciço de metal
              nobre (geralmente latão cromado ou aço inox) através de{" "}
              <strong>roldanas aparentes de grande porte</strong>. Essas
              roldanas possuem rolamentos blindados de altíssima precisão e
              giram diretamente sobre a barra superior. O sistema é composto
              por uma folha fixa e uma folha móvel de vidro temperado pesado —
              geralmente na espessura de <strong>8mm ou 10mm</strong> —,
              garantindo estabilidade absoluta e um deslize incrivelmente
              silencioso.
            </p>

            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Orçamento sob medida
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                Quer modernizar seu banheiro com o modelo mais desejado pelos
                arquitetos?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Fale Agora com um Especialista da Fast Vidro no WhatsApp e
                solicite um orçamento do modelo Elegance para o seu espaço!
              </p>
              <a
                href={waLink(message)}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              2. As Vantagens Premium do Sistema Elegance
            </h2>
            <p>
              Optar pelo Box Elegance com roldanas aparentes traz uma série de
              benefícios que justificam o seu status de produto de alto padrão
              no mercado paulistano:
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Estética Sofisticada e Valorização do Imóvel
            </h3>
            <p>
              O visual clean, minimalista e imponente do metal polido ou
              escovado transforma completamente a percepção do banheiro.
              Imóveis que contam com acabamentos diferenciados como o Box
              Elegance são muito mais valorizados no mercado imobiliário de São
              Paulo, pois demonstram cuidado com o design e com a qualidade dos
              materiais.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Deslize Ultra Suave e Silencioso
            </h3>
            <p>
              Graças à engenharia dos rolamentos blindados e ao peso balanceado
              do vidro de 8mm ou 10mm, a porta desliza com o menor esforço
              possível. Não há aquele atrito barulhento ou sensação de "vidro
              raspando" comum em boxes convencionais com trilhos antigos. É o
              máximo em conforto tátil e acústico.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Facilidade de Limpeza e Manutenção
            </h3>
            <p>
              Como o sistema não possui o trilho superior fechado em formato de
              canaleta (onde costuma acumular poeira, resíduos de sabonete e
              umidade), a limpeza do topo do box é infinitamente mais simples.
              Um pano macio é o suficiente para manter a barra de metal e as
              roldanas brilhando como novas.
            </p>

            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Inspire-se
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                Quer se inspirar com projetos reais instalados pela nossa
                fábrica?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Acesse nossa Página de Modelos de Box e veja fotos exclusivas
                da Linha Elegance.
              </p>
              <Link
                to="/box-de-banheiro"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Ver Página de Modelos de Box
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              3. Tabela Comparativa: Box Tradicional vs. Box Elegance
            </h2>
            <p>
              Para entender perfeitamente onde está a diferença técnica e de
              valor do Sistema Elegance, veja a comparação direta abaixo:
            </p>

            <div className="overflow-x-auto my-6 rounded-xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Critério Técnico</th>
                    <th className="px-4 py-3">
                      Box de Correr Tradicional
                    </th>
                    <th className="px-4 py-3">
                      Box Elegance (Roldanas Aparentes)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-bold">Perfil Superior</td>
                    <td className="px-4 py-3">
                      Trilho de alumínio grosso e fechado
                    </td>
                    <td className="px-4 py-3">
                      Barra cilíndrica maciça de metal nobre
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">
                      Mecanismo de Rotação
                    </td>
                    <td className="px-4 py-3">
                      Roldanas pequenas escondidas no trilho
                    </td>
                    <td className="px-4 py-3">
                      Roldanas grandes, expostas e decorativas
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">
                      Espessura do Vidro
                    </td>
                    <td className="px-4 py-3">Padrão 8mm</td>
                    <td className="px-4 py-3">
                      Recomendado 8mm ou 10mm (mais robusto)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">
                      Acúmulo de Sujeira
                    </td>
                    <td className="px-4 py-3">
                      Alto (dentro da canaleta do trilho)
                    </td>
                    <td className="px-4 py-3">
                      Praticamente zero (barra lisa e aberta)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Apelo Visual</td>
                    <td className="px-4 py-3">Funcional e convencional</td>
                    <td className="px-4 py-3">
                      Luxuoso, moderno e imponente
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              4. Cores de Metais e Personalização do Vidro Premium
            </h2>
            <p>
              Na <strong>Fast Vidro</strong>, cada projeto da Linha Elegance é
              tratado como uma obra de arte única. Os metais de sustentação e
              as roldanas estão disponíveis em acabamentos nobres com
              tratamento especial contra oxidação e manchas d'água.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Cores de Roldanas e Barras Mais Pedidas em SP
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Preto Fosco (Black Matte):</strong> A combinação
                perfeita para o estilo industrial de luxo ou banheiros com
                paginação em tons de cinza, branco e mármore.
              </li>
              <li>
                <strong>Cromado Alto Brilho / Polido:</strong> O clássico
                espelhado que reflete a iluminação do banheiro e combina com
                torneiras e chuveiros de marcas premium.
              </li>
              <li>
                <strong>Inox Escovado:</strong> Traz uma textura acetinada
                extremamente elegante, ideal para projetos contemporâneos e
                minimalistas.
              </li>
              <li>
                <strong>Dourado / Gold Premium:</strong> O ápice do luxo,
                trazendo um toque de imponência e aquecimento visual para
                banheiros clássicos.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Tipos de Vidros Temperados de Alta Resistência
            </h3>
            <p>
              Para que o design do Box Elegance se destaque, trabalhamos com
              vidros das renomadas marcas Guardian e Cebrace. Você pode escolher
              o vidro{" "}
              <Link to="/box-incolor" className="text-primary hover:underline font-bold">
                Incolor
              </Link>{" "}
              tradicional, o exclusivo vidro Extra Clear (com baixíssimo teor
              de ferro, eliminando aquele tom esverdeado nas bordas do vidro
              comum), o imponente{" "}
              <Link to="/box-fume" className="text-primary hover:underline font-bold">
                Fumê
              </Link>, ou o sofisticado Verde.
            </p>

            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Guia de cores
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                Quer escolher o acabamento que combina com os metais do seu
                banheiro?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Confira nosso Catálogo de Cores e Acabamentos e faça sua
                escolha.
              </p>
              <Link
                to="/blog/cor-box-incolor-fume-verde-bronze"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Ver Catálogo de Cores e Acabamentos
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              5. Proteção Máxima Invisível: Película Secure Box
            </h2>
            <p>
              Por utilizar vidros mais pesados e robustos de até 10mm e
              movimentar uma folha de grande porte sobre uma barra suspensa, a
              segurança nunca deve ser deixada de lado. O banheiro é um local
              propício a escorregões, além de sofrer com constantes choques
              térmicos (entre a água quente do chuveiro e o ar frio externo).
            </p>
            <p>
              Para blindar o seu investimento e garantir a total integridade
              física da sua família, a <strong>Fast Vidro</strong> recomenda a
              aplicação da <strong>Película Secure Box</strong>.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Como a Película Garante a Sua Segurança?
            </h3>
            <p>
              A película Secure Box é uma camada de segurança de alta
              tecnologia aplicada na superfície do vidro temperado. Caso ocorra
              uma quebra por forte impacto mecânico ou acidente, a película age
              como um imã estrutural: todos os fragmentos de vidro quebrado
              ficam presos e colados na película. O vidro não estilhaça, não
              cai sobre quem está tomando banho e não espalha cacos cortantes
              pelo chão. A estrutura se mantém de pé até que nossos técnicos
              especializados venham fazer a reposição.
            </p>

            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Segurança absoluta
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                Una a sofisticação do alto padrão à segurança absoluta dentro de
                casa.
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Saiba Tudo sobre a Tecnologia da Película Secure Box.
              </p>
              <Link
                to="/blog/secure-box-pelicula-protecao"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Conhecer a Película Secure Box
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              6. Atendimento Premium e Instalação na Grande São Paulo
            </h2>
            <p>
              O Box Elegance exige uma <strong>instalação cirúrgica</strong>.
              Como o tubo superior suporta todo o peso do vidro móvel, a
              furação na parede deve ser milimetricamente calculada e os
              freios regulados com precisão para que a porta pare suavemente e
              nunca bata nas extremidades. A Fast Vidro atende com frota
              própria e montadores especialistas nos bairros mais nobres e
              regiões estratégicas de São Paulo:
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Zona Sul
            </h3>
            <p>
              Atendimento diário com hora marcada no Morumbi, Moema, Brooklin,
              Vila Olímpia, Campo Belo, Santo Amaro, Jardins, Itaim Bibi e
              Vila Mariana.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Zona Oeste
            </h3>
            <p>
              Instalações de alto padrão em Pinheiros, Perdizes, Lapa, Vila
              Madalena, Alto de Pinheiros, Pompéia e Butantã.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Zona Norte
            </h3>
            <p>
              Projetos sob medida em Santana, Tucuruvi, Casa Verde, Freguesia
              do Ó e Mandaqui.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Zona Leste
            </h3>
            <p>
              Atendimento focado nos bairros do Tatuapé, Anália Franco, Mooca
              e Vila Formosa.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Região Metropolitana e Condomínios
            </h3>
            <p>
              Atendemos também com frota dedicada à região do Grande ABC
              (Santo André, São Bernardo e São Caetano), Osasco, Guarulhos e
              condomínios fechados em Barueri (Alphaville e Tamboré) e Santana
              de Parnaíba.
            </p>
            <p>
              Nossos técnicos utilizam ferramentas de medição a laser de alta
              precisão fina e fazem a vedação completa com silicone neutro
              antifungo premium para garantir que seu Box Elegance funcione
              perfeitamente sem vazamentos.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Conclusão: O Box Elegance Vale o Investimento?
            </h2>
            <p>
              Se você está buscando o melhor para a sua casa, preza por
              detalhes arquitetônicos impecáveis, deseja um banheiro com
              visual clean e quer valorizar o seu imóvel no mercado de São
              Paulo, o <strong>Box Elegance com Roldanas Aparentes</strong> é o
              investimento ideal. Ele eleva o padrão do ambiente, oferecendo
              um deslize suave e uma estética incomparável.
            </p>
            <p>
              Compre direto de quem entende de engenharia de vidros. Garanta o
              melhor preço de fábrica, matéria-prima certificada e uma
              instalação limpa e segura.
            </p>

            <div className="my-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-black">
                Transforme Seu Banheiro em um Ambiente de Luxo Hoje Mesmo!
              </h3>
              <p className="mt-3 text-base text-muted-foreground">
                Deixe que os especialistas da Fast Vidro cuidem do design e da
                instalação técnica com perfeição.
              </p>
              <a
                href={waLink(
                  "Olá! Vim do artigo sobre Box Elegance e quero transformar meu banheiro em um ambiente de luxo. Pode me passar um orçamento?"
                )}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-3 rounded-xl bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-lg hover:scale-[1.02] transition"
              >
                <MessageCircle className="h-5 w-5" />
                Clique Aqui para Falar Conosco no WhatsApp
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Mande as fotos do seu banheiro ou as medidas do vão. Nossa
                equipe técnica responderá em poucos minutos com o projeto ideal
                e o melhor orçamento sob medida para o seu bairro!
              </p>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
