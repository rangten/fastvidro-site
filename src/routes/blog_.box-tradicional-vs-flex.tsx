import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-tradicional-vs-flex-cover.webp";

export const Route = createFileRoute("/blog_/box-tradicional-vs-flex")({
  head: () => ({
    meta: [
      {
        title:
          "Box Tradicional de Correr vs. Box Flex (Sanfonado) | Fast Vidro",
      },
      {
        name: "description",
        content:
          "Box Tradicional de Correr ou Box Flex (Sanfonado)? Veja o comparativo completo de vantagens, vão livre, segurança e qual a melhor solução para banheiros pequenos em São Paulo.",
      },
      {
        property: "og:title",
        content:
          "Box Tradicional de Correr vs. Box Flex (Sanfonado): Qual a Melhor Solução para Banheiros Pequenos?",
      },
      {
        property: "og:description",
        content:
          "Guia definitivo entre Box de Correr e Box Flex Sanfonado: vão livre, mecânica, estética, cores e segurança com a Película Secure Box da Fast Vidro.",
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
    "Olá! Li o artigo comparativo entre Box Tradicional de Correr e Box Flex e quero um orçamento sob medida.";

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
                alt="Box Tradicional de Correr vs. Box Flex (Sanfonado) — Fast Vidro"
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
              <Calendar className="h-3 w-3" /> 28 de Junho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Box Tradicional de Correr vs. Box Flex (Sanfonado): Qual a Melhor
            Solução para Banheiros Pequenos?
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              O aproveitamento de espaço tornou-se um dos maiores desafios da
              arquitetura residencial na Região Metropolitana de São Paulo. Com
              apartamentos e casas apresentando metragens cada vez mais
              compactas, planejar cada centímetro do banheiro é fundamental
              para garantir conforto, estética e, acima de tudo, funcionalidade
              no dia a dia.
            </p>
            <p>
              Quando o assunto é a área do banho, a escolha da abertura da
              porta do vidro temperado é o fator que dita se o seu ambiente
              será prático ou apertado. Na Fast Vidro, recebemos diariamente
              clientes com uma dúvida muito comum: devo escolher o clássico{" "}
              <strong>Box Tradicional de Correr</strong> ou apostar na inovação
              do <strong>Box Flex</strong> (também conhecido como Box Sanfonado
              ou Articulado)?
            </p>
            <p>
              Neste guia definitivo, analisamos minuciosamente as
              características técnicas, vantagens mecânicas e as indicações
              reais de cada modelo para você acertar em cheio no seu projeto.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              1. O que é o Box Tradicional de Correr?
            </h2>
            <p>
              O{" "}
              <Link to="/box-de-banheiro/tradicional" className="text-primary hover:underline font-bold">
                box de correr
              </Link>{" "}
              é o campeão absoluto de vendas em São Paulo. O sistema baseia-se
              em uma ou mais folhas de vidro fixas combinadas com uma ou mais
              folhas móveis que deslizam horizontalmente sobre um trilho de
              alumínio, com o auxílio de roldanas blindadas.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Vantagens do Modelo Tradicional de Correr
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Mecânica Consagrada e Confiável:</strong> Por ter menos
                componentes articulados, sua manutenção preventiva é simples e
                espaçada, focando apenas na lubrificação ou troca periódica de
                roldanas.
              </li>
              <li>
                <strong>Estética Limpa:</strong> Os perfis horizontais guiam o
                olhar de forma linear, combinando perfeitamente com projetos
                minimalistas modernos.
              </li>
              <li>
                <strong>Excelente Custo-Benefício:</strong> Devido à alta
                escala de produção industrial das ferragens desse modelo, o
                valor final direto de fábrica na Fast Vidro é extremamente
                competitivo.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              A Grande Limitação em Vãos Pequenos
            </h3>
            <p>
              O box tradicional de correr exige que o espaço do vão seja
              dividido. Em um modelo padrão de duas folhas (uma fixa e uma
              móvel), você perde exatamente <strong>50% do vão total</strong>{" "}
              para a folha fixa. Se o vão total do seu banheiro for de, por
              exemplo, 1 metro, a sua passagem livre para o banho será de
              apenas cerca de 45 a 47 centímetros (descontando os perfis). Para
              pessoas de maior estatura ou com problemas de mobilidade, essa
              abertura pode ser desconfortável ou até inviável.
            </p>

            {/* CTA 1 */}
            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Orçamento sob medida
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🛠️ Seu espaço é padrão e você quer um orçamento sob medida?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Envie as fotos do seu banheiro e receba um projeto
                personalizado hoje mesmo.
              </p>
              <a
                href={waLink(
                  "Olá! Quero um orçamento sob medida para meu banheiro. Posso enviar fotos do vão?"
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
              2. O que é o Box Flex (Sanfonado / Articulado)?
            </h2>
            <p>
              O{" "}
              <Link to="/box-de-banheiro/flex" className="text-primary hover:underline font-bold">
                Box Flex
              </Link>{" "}
              é a solução de engenharia perfeita para banheiros compactos ou
              com vãos muito pequenos, onde a instalação de uma porta de
              correr tradicional deixaria uma passagem estreita demais.
            </p>
            <p>
              Diferente do modelo de correr, o sistema Flex funciona por meio
              de dobradiças centrais e laterais especiais que interligam as
              folhas de vidro. Ao abrir o box, as folhas dobram-se uma contra a
              outra e recolhem-se inteiramente na lateral da parede, imitando o
              movimento de uma sanfona, porém com a robustez, elegância e
              segurança do vidro temperado pesado de 8mm.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Vantagens Imbatíveis do Box Flex
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Máxima Abertura do Vão (até 90% de passagem livre):</strong>{" "}
                Como o vidro se dobra e se posiciona rente à parede lateral,
                você ganha quase a totalidade do vão livre para entrar e sair
                do chuveiro.
              </li>
              <li>
                <strong>Inexistência de Trilho Superior Pesado:</strong>{" "}
                Diversos modelos modernos de Box Flex dispensam aquele trilho
                superior grosso e robusto dos boxes de correr, deixando o
                design do banheiro muito mais leve, clean e sofisticado.
              </li>
              <li>
                <strong>Solução para Vãos de 60cm a 1,20m:</strong> Ele
                consegue resolver o problema de banheiros onde nenhum outro
                modelo de box de vidro conseguiria ser instalado com conforto.
              </li>
            </ul>

            {/* CTA 2 */}
            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Modelos e fotos
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                💎 Quer ver fotos e vídeos do mecanismo do Box Flex em funcionamento?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Descubra como transformamos espaços apertados em ambientes
                luxuosos.
              </p>
              <Link
                to="/box-de-banheiro"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Ver Página Exclusiva de Modelos de Box
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              3. Tabela Comparativa: Tradicional vs. Flex
            </h2>
            <p>
              Para ajudar na visualização técnica antes de fechar o pedido com
              a nossa fábrica, compare os principais fatores de escolha na
              tabela abaixo:
            </p>

            <div className="overflow-x-auto my-6 rounded-xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Fator de Análise</th>
                    <th className="px-4 py-3">Box Tradicional de Correr</th>
                    <th className="px-4 py-3">Box Flex (Sanfonado)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-bold">Abertura Livre do Vão</td>
                    <td className="px-4 py-3">Ganho de ~50% do espaço total</td>
                    <td className="px-4 py-3">Ganho de ~90% do espaço total</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Vãos Curtos (&lt; 1m)</td>
                    <td className="px-4 py-3">Não recomendado (passagem estreita)</td>
                    <td className="px-4 py-3">Altamente recomendado</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Manutenção Mecânica</td>
                    <td className="px-4 py-3">Muito baixa e simples</td>
                    <td className="px-4 py-3">Requer regulagem fina das dobradiças</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Limpeza do Vidro</td>
                    <td className="px-4 py-3">Vidros sobrepostos dificultam o meio</td>
                    <td className="px-4 py-3">Abertura total facilita o acesso</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Visual Estético</td>
                    <td className="px-4 py-3">Clássico, robusto e linear</td>
                    <td className="px-4 py-3">Moderno, minimalista e dinâmico</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              4. Cores de Perfis e Estilização do Vidro
            </h2>
            <p>
              A harmonia visual do seu banheiro depende da escolha correta das
              cores dos acabamentos e do tipo de vidro. Na Fast Vidro,
              customizamos o seu Box Flex ou de Correr para que converse
              perfeitamente com o revestimento, nichos e louças do seu ambiente.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Cores de Perfis de Alumínio Disponíveis
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Preto Fosco (Black Matte):</strong> Em alta no design
                paulistano, combina com o estilo industrial e contrasta
                lindamente com revestimentos claros ou amadeirados.
              </li>
              <li>
                <strong>Cromado de Alto Brilho:</strong> Reflete a luz do
                ambiente, combinando com chuveiros e torneiras de metal premium.
              </li>
              <li>
                <strong>Branco Epóxi:</strong> A escolha tradicional que
                transmite sensação de higiene, amplitude e discrição.
              </li>
              <li>
                <strong>Champanhe e Bronze:</strong> Tons nobres que trazem
                aquecimento visual e sofisticação para decorações clássicas.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Tipos de Vidros Temperados
            </h3>
            <p>
              Trabalhamos com vidros de alta resistência na espessura de 8mm.
              Você pode escolher entre o{" "}
              <Link to="/box-incolor" className="text-primary hover:underline font-bold">
                Incolor
              </Link>{" "}
              (para máxima amplitude visual), o{" "}
              <Link to="/box-fume" className="text-primary hover:underline font-bold">
                Fumê
              </Link>{" "}
              (para um toque de privacidade e imponência), o Verde ou o
              acabamento Jateado/Pontilhado (para quem não quer visibilidade
              da área interna do chuveiro).
            </p>

            {/* CTA 3 */}
            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Guia de cores
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🎨 Em dúvida sobre qual cor valoriza mais o seu revestimento?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Acesse o nosso catálogo de cores e acabamentos para se inspirar
                com nossos projetos executados.
              </p>
              <Link
                to="/blog/cor-box-incolor-fume-verde-bronze"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Ver Catálogo de Cores e Acabamentos
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              5. Blindagem e Segurança Familiar: Película Secure Box
            </h2>
            <p>
              Um box de banheiro lida diariamente com variações bruscas de
              temperatura (choque térmico entre o vapor quente do chuveiro e o
              ar frio externo) e impactos mecânicos inadvertidos, como batidas
              de cotovelo, escorregões ou fechamentos bruscos por crianças.
            </p>
            <p>
              Por isso, na Fast Vidro, não abrimos mão da segurança técnica.
              Independentemente de escolher o sistema de correr ou o sistema
              articulado flex, recomendamos fortemente a aplicação da{" "}
              <strong>Película Secure Box</strong>.
            </p>

            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Como funciona a Película Secure Box?
            </h3>
            <p>
              Trata-se de uma película de segurança de alta performance
              aplicada diretamente na face externa do vidro temperado. Caso
              ocorra uma quebra por impacto extremo, a película atua como um
              escudo retentor: todos os fragmentos de vidro ficam colados e
              presos na película, impedindo que caiam sobre o usuário ou se
              espalhem pelo chão do banheiro. O box permanece estruturado até
              que nossa equipe técnica especializada chegue para realizar a
              substituição segura.
            </p>

            {/* CTA 4 */}
            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Proteção máxima
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🛡️ Não coloque a segurança de quem você ama em risco.
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Descubra os benefícios da Película Secure Box e adicione ao seu
                projeto.
              </p>
              <Link
                to="/blog/secure-box-pelicula-protecao"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Saiba Tudo sobre a Película Secure Box
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              6. Instalação com Atendimento Geolocalizado em SP
            </h2>
            <p>
              A precisão na instalação de um box — principalmente o Box Flex,
              que exige furação e regulagem milimétrica das dobradiças para
              não travar — demanda mão de obra própria e altamente treinada. A
              Fast Vidro atende com rapidez, frota equipada e garantia técnica
              estendida nas principais regiões da capital de São Paulo e
              cidades vizinhas:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Zona Oeste:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "pinheiros" }} className="text-primary hover:underline font-bold">Pinheiros</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "perdizes" }} className="text-primary hover:underline font-bold">Perdizes</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "lapa" }} className="text-primary hover:underline font-bold">Lapa</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-madalena" }} className="text-primary hover:underline font-bold">Vila Madalena</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "alto-de-pinheiros" }} className="text-primary hover:underline font-bold">Alto de Pinheiros</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "butanta" }} className="text-primary hover:underline font-bold">Butantã</Link> e Jaguaré.
              </li>
              <li>
                <strong>Zona Sul:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "morumbi" }} className="text-primary hover:underline font-bold">Morumbi</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "moema" }} className="text-primary hover:underline font-bold">Moema</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "brooklin" }} className="text-primary hover:underline font-bold">Brooklin</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-olimpia" }} className="text-primary hover:underline font-bold">Vila Olímpia</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "campo-belo" }} className="text-primary hover:underline font-bold">Campo Belo</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "santo-amaro" }} className="text-primary hover:underline font-bold">Santo Amaro</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "saude" }} className="text-primary hover:underline font-bold">Saúde</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "ipiranga" }} className="text-primary hover:underline font-bold">Ipiranga</Link> e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-mariana" }} className="text-primary hover:underline font-bold">Vila Mariana</Link>.
              </li>
              <li>
                <strong>Zona Norte:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "santana" }} className="text-primary hover:underline font-bold">Santana</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "tucuruvi" }} className="text-primary hover:underline font-bold">Tucuruvi</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "casa-verde" }} className="text-primary hover:underline font-bold">Casa Verde</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "freguesia-do-o" }} className="text-primary hover:underline font-bold">Freguesia do Ó</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-guilherme" }} className="text-primary hover:underline font-bold">Vila Guilherme</Link> e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "mandaqui" }} className="text-primary hover:underline font-bold">Mandaqui</Link>.
              </li>
              <li>
                <strong>Zona Leste:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "tatuape" }} className="text-primary hover:underline font-bold">Tatuapé</Link>,{" "}
                Anália Franco,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "mooca" }} className="text-primary hover:underline font-bold">Mooca</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-formosa" }} className="text-primary hover:underline font-bold">Vila Formosa</Link>,{" "}
                Belenzinho e Penha.
              </li>
              <li>
                <strong>Centro Expandido:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "consolacao" }} className="text-primary hover:underline font-bold">Consolação</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "higienopolis" }} className="text-primary hover:underline font-bold">Higienópolis</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "bela-vista" }} className="text-primary hover:underline font-bold">Bela Vista</Link>,
                República e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "jardins" }} className="text-primary hover:underline font-bold">Jardins</Link>.
              </li>
              <li>
                <strong>Grande ABC e Região Metropolitana:</strong> Santo
                André, São Bernardo do Campo, São Caetano do Sul, Osasco,
                Barueri (incluindo Alphaville) e Guarulhos.
              </li>
            </ul>

            <p>
              Nossos técnicos realizam a checagem do prumo da parede e do nível
              do piso no momento da instalação, assegurando que o fechamento
              seja hermético e sem riscos de vazamento de água para fora do
              banheiro.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Conclusão: Qual o Veredito para o Seu Banheiro?
            </h2>
            <p>
              Se o seu banheiro possui um vão confortável (acima de 1,20 m) e
              você busca economia e visual linear, o{" "}
              <strong>Box Tradicional de Correr</strong> cumpre o papel com
              perfeição. No entanto, se você está lidando com um banheiro
              pequeno, apartamento compacto ou um vão estreito onde cada
              centímetro quadrado conta, o <strong>Box Flex (Sanfonado)</strong>{" "}
              é o investimento correto e inteligente, pois devolve a liberdade
              de espaço e valoriza o imóvel no mercado imobiliário paulistano.
            </p>
            <p>
              Consulte sempre quem fabrica direto e garante o menor prazo de
              entrega do mercado com instalação limpa e segura.
            </p>
          </div>

          {/* WhatsApp CTA Final */}
          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Fale com quem entende de box em São Paulo
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              📞 Evite dores de cabeça com folgas ou vidros travando
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Mande as medidas aproximadas do seu vão ou uma foto do seu
              banheiro. Nossa equipe responderá em poucos minutos com o melhor
              orçamento direto de fábrica para a sua região!
            </p>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
            >
              <MessageCircle className="h-5 w-5" />
              👉 Clique aqui para falar conosco no WhatsApp
            </a>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/box-de-banheiro/flex"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Ver Box Flex
              </Link>
              <Link
                to="/box-de-banheiro/tradicional"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Ver Box Tradicional
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
