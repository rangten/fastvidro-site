import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-box-3-folhas-versatik-cover.png";

export const Route = createFileRoute("/blog_/box-3-folhas-sistema-versatik")({
  head: () => ({
    meta: [
      {
        title:
          "Box 3 Folhas (Sistema Versatik): Guia Completo | Fast Vidro",
      },
      {
        name: "description",
        content:
          "Conheça o Box 3 Folhas com Sistema Versatik: máxima abertura de vão, acessibilidade e design moderno. Guia completo de modelos, cores, segurança e instalação em São Paulo.",
      },
      {
        property: "og:title",
        content:
          "Box 3 Folhas (Sistema Versatik): O Guia Completo para Máxima Abertura de Vão e Acessibilidade",
      },
      {
        property: "og:description",
        content:
          "Guia definitivo do Box 3 Folhas com Sistema Versatik: abertura de 66% do vão, acessibilidade, cores de perfil, vidros temperados e segurança com Película Secure Box da Fast Vidro.",
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
    "Olá! Li o artigo sobre Box 3 Folhas Sistema Versatik e quero um orçamento sob medida.";

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
                alt="Box 3 Folhas Sistema Versatik — Fast Vidro"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">Guia Técnico • Box de Vidro</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 29 de Junho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Box 3 Folhas (Sistema Versatik): O Guia Completo para Máxima
            Abertura de Vão e Acessibilidade
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Se você está reformando o banheiro e se deparou com um vão de
              tamanho médio a grande, mas que precisa de uma área de passagem
              livre muito maior do que um box comum pode oferecer, você precisa
              conhecer o <strong>Box 3 Folhas</strong>, popularmente conhecido
              no mercado de vidraçaria como <strong>Sistema Versatik</strong>.
            </p>
            <p>
              Em cidades dinâmicas como São Paulo, onde os projetos residenciais
              exigem soluções que unam sofisticação, ganho de espaço e
              acessibilidade, esse modelo tornou-se o queridinho de arquitetos e
              decoradores. Na Fast Vidro, este sistema é amplamente fabricado
              sob medida para resolver o problema de quem não quer ficar
              esbarrando nos perfis na hora do banho.
            </p>
            <p>
              Neste artigo ultra detalhado, você vai entender o funcionamento
              mecânico do sistema de 3 folhas, suas vantagens funcionais e por
              que ele é considerado a evolução do box de correr tradicional.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              1. O que é o Box 3 Folhas (Sistema Versatik)?
            </h2>
            <p>
              Ao contrário do box de correr tradicional (que possui apenas duas
              folhas: uma fixa e uma móvel), o Box de 3 Folhas com Sistema
              Versatik conta com uma engenharia diferenciada. Ele é composto por
              uma folha de vidro fixa e duas folhas móveis (de correr) que
              deslizam no mesmo sentido sobre trilhos paralelos integrados.
            </p>
            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Como funciona na prática?
            </h3>
            <p>
              Quando você empurra a porta para abrir o box, a primeira folha
              móvel corre e se sobrepõe à segunda folha móvel que, por sua
              vez, desliza e se recolhe junto com a folha que está fixa na
              parede.
            </p>
            <p>
              Isso significa que, em vez de perder metade do vão com um vidro
              fixo, as duas portas se agrupam perfeitamente em apenas um terço
              do espaço. O resultado prático é surpreendente: uma abertura livre
              de aproximadamente <strong>2/3 (cerca de 66%)</strong> de todo o
              vão do seu banheiro.
            </p>

            {/* CTA 1 */}
            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Simulação de abertura
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🛠️ Tem um vão médio ou grande e quer aproveitar cada centímetro?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Fale com um especialista da Fast Vidro e receba uma simulação de
                abertura para o seu espaço.
              </p>
              <a
                href={waLink(
                  "Olá! Tenho um vão médio/grande e quero uma simulação de abertura para o Box 3 Folhas Sistema Versatik."
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
              2. As Vantagens Imbatíveis do Sistema de 3 Folhas
            </h2>
            <p>
              Se você preza por conforto técnico e usabilidade no dia a dia, o
              Box de 3 folhas traz uma série de benefícios que justificam o
              investimento no sistema de engenharia:
            </p>
            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Acessibilidade Prática e Conforto
            </h3>
            <p>
              Por liberar quase 70% do vão de passagem, este box é o modelo
              ideal para residências com idosos, gestantes, cadeirantes ou
              pessoas com mobilidade reduzida. A entrada e saída do chuveiro
              ocorrem de forma natural, segura e sem malabarismos, permitindo
              inclusive o acesso facilitado de cadeiras de banho ou o auxílio de
              acompanhantes.
            </p>
            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Otimização de Banheiros com Vão Médio
            </h3>
            <p>
              Sabe aquele banheiro que tem um vão de 1,10m a 1,40m? Se você
              colocar um box de correr de 2 folhas, a passagem fica com pouco
              mais de 50cm. Com o sistema Versatik de 3 folhas, a sua passagem
              livre salta para quase 85cm de largura. É uma mudança drástica na
              percepção de espaço e no conforto do banho.
            </p>
            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Vedação de Água Superior
            </h3>
            <p>
              O design dos perfis de alumínio do Sistema Versatik conta com uma
              sobreposição perfeita entre as lâminas de vidro temperado de 8mm.
              Isso impede que os jatos de água do chuveiro passem pelas frestas,
              mantendo o lado externo do banheiro completamente seco, eliminando
              o risco de pisos escorregadios após o banho.
            </p>

            {/* CTA 2 */}
            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Modelos e fotos
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                💎 Quer conferir fotos de projetos reais com o Sistema Versatik?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Veja a elegância das 3 folhas instaladas em projetos reais da
                Fast Vidro.
              </p>
              <Link
                to="/box-de-banheiro"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Acesse nossa Página de Modelos de Box
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              3. Análise Comparativa: Box de 2 Folhas vs. Box de 3 Folhas
            </h2>
            <p>
              Para que não restem dúvidas sobre qual modelo atende melhor às
              exigências técnicas da sua obra, montamos este comparativo direto
              entre os sistemas:
            </p>

            <div className="overflow-x-auto my-6 rounded-xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Característica Técnica</th>
                    <th className="px-4 py-3">Box Tradicional (2 Folhas)</th>
                    <th className="px-4 py-3">Box Versatik (3 Folhas)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-bold">Abertura Livre do Vão</td>
                    <td className="px-4 py-3">Apenas ~50% de passagem livre</td>
                    <td className="px-4 py-3">Impressionantes ~66% (2/3) de abertura</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Número de Trilhos</td>
                    <td className="px-4 py-3">1 trilho integrado</td>
                    <td className="px-4 py-3">Trilhos paralelos duplos de alta engenharia</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Foco em Acessibilidade</td>
                    <td className="px-4 py-3">Baixo a Médio</td>
                    <td className="px-4 py-3">Altíssimo (Ideal para cadeiras e auxílio)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Limpeza entre os Vidros</td>
                    <td className="px-4 py-3">Difícil na área de sobreposição fixa</td>
                    <td className="px-4 py-3">Facilitada pelo deslocamento das folhas</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">Estilo de Design</td>
                    <td className="px-4 py-3">Convencional e discreto</td>
                    <td className="px-4 py-3">Robusto, moderno e imponente</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              4. Cores de Perfis de Alumínio e Tipos de Vidro
            </h2>
            <p>
              Na Fast Vidro, acreditamos que a segurança deve caminhar lado a
              lado com o design de interiores. Sendo assim, o sistema de 3
              folhas pode ser completamente personalizado para combinar com os
              metais, cubas e nichos do seu banheiro.
            </p>
            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Cores de Perfis de Alumínio Mais Procuradas em São Paulo
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Preto Fosco (Black Matte):</strong> A escolha número um
                de arquitetos na capital paulista. Cria um contraste elegante e
                moderno com revestimentos claros ou marmorizados.
              </li>
              <li>
                <strong>Cromado / Brilhante:</strong> O acabamento atemporal que
                combina com qualquer registro, chuveiro ou acessório de metal do
                banheiro.
              </li>
              <li>
                <strong>Branco Epóxi:</strong> Ideal para quem busca um visual
                clean, suave e que passe a sensação de higiene absoluta.
              </li>
              <li>
                <strong>Bronze ou Champanhe:</strong> Confere um toque clássico,
                aconchegante e luxuoso ao ambiente.
              </li>
            </ul>
            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Opções de Vidros Temperados (8mm de Espessura)
            </h3>
            <p>
              Trabalhamos com matéria-prima de primeira linha (marcas como
              Guardian e Cebrace). Você pode escolher o vidro{" "}
              <Link to="/box-incolor" className="text-primary hover:underline font-bold">
                Incolor
              </Link>{" "}
              para dar total amplitude visual ao banheiro, o clássico{" "}
              <Link to="/box-fume" className="text-primary hover:underline font-bold">
                Fumê
              </Link>{" "}
              para maior privacidade e imponência visual, o sofisticado Verde, ou
              o acabamento Jateado para quem deseja bloquear totalmente a
              visibilidade interna da área de banho.
            </p>

            {/* CTA 3 */}
            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Guia de cores
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🎨 Quer escolher a cor ideal para o seu projeto?
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Consulte nosso catálogo de cores e acabamentos e faça a
                combinação perfeita.
              </p>
              <Link
                to="/blog/cor-box-incolor-fume-verde-bronze"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Ver Catálogo de Cores e Acabamentos
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              5. Segurança Blindada: Película Secure Box
            </h2>
            <p>
              Por movimentar duas folhas de vidro simultaneamente, a engenharia
              do Box de 3 Folhas exige componentes de alta qualidade e uma camada
              extra de proteção. Um escorregão no box ou um fechamento mais
              brusco feito por crianças pode gerar um impacto indesejado no
              vidro temperado.
            </p>
            <p>
              Pensando na total integridade da sua família, a Fast Vidro
              recomenda fortemente a inclusão da{" "}
              <strong>Película Secure Box</strong> na instalação do seu sistema.
            </p>
            <h3 className="text-xl sm:text-2xl font-black pt-4">
              Como funciona a Película de Segurança?
            </h3>
            <p>
              A película Secure Box é uma película invisível de alta aderência
              aplicada diretamente na face do vidro temperado. Em caso de
              quebra por forte impacto acidental, os fragmentos de vidro não
              se estilhaçam pelo chão do banheiro. Eles permanecem totalmente
              colados na película, mantendo a estrutura do box em pé de forma
              segura até a chegada dos nossos técnicos. É a blindagem essencial
              contra acidentes domésticos.
            </p>

            {/* CTA 4 */}
            <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Proteção máxima
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">
                🛡️ Garante tranquilidade e proteção para seus filhos e familiares.
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Descubra os benefícios da Película Secure Box e adicione ao seu
                projeto.
              </p>
              <Link
                to="/blog/secure-box-pelicula-protecao"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary hover:text-primary transition"
              >
                Saiba Tudo sobre a Tecnologia da Película Secure Box
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              6. Atendimento Técnico e Instalação na Grande São Paulo
            </h2>
            <p>
              O Box de 3 folhas exige uma instalação com nível e prumo
              cirúrgicos para que as duas portas corram de forma suave e
              sincronizada, sem travar ou fazer ruídos. A equipe técnica da Fast
              Vidro conta com frota própria e profissionais especializados que
              atuam diariamente em todas as regiões estratégicas de São Paulo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Zona Sul:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "morumbi" }} className="text-primary hover:underline font-bold">Morumbi</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "moema" }} className="text-primary hover:underline font-bold">Moema</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-olimpia" }} className="text-primary hover:underline font-bold">Vila Olímpia</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "brooklin" }} className="text-primary hover:underline font-bold">Brooklin</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "santo-amaro" }} className="text-primary hover:underline font-bold">Santo Amaro</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "campo-belo" }} className="text-primary hover:underline font-bold">Campo Belo</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "saude" }} className="text-primary hover:underline font-bold">Saúde</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "ipiranga" }} className="text-primary hover:underline font-bold">Ipiranga</Link> e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-mariana" }} className="text-primary hover:underline font-bold">Vila Mariana</Link>.
              </li>
              <li>
                <strong>Zona Oeste:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "pinheiros" }} className="text-primary hover:underline font-bold">Pinheiros</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "perdizes" }} className="text-primary hover:underline font-bold">Perdizes</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "lapa" }} className="text-primary hover:underline font-bold">Lapa</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-madalena" }} className="text-primary hover:underline font-bold">Vila Madalena</Link>,{" "}
                Butantã e Pompeia.
              </li>
              <li>
                <strong>Zona Leste:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "tatuape" }} className="text-primary hover:underline font-bold">Tatuapé</Link>, Anália Franco,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "mooca" }} className="text-primary hover:underline font-bold">Mooca</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "vila-formosa" }} className="text-primary hover:underline font-bold">Vila Formosa</Link>, Belenzinho e Penha.
              </li>
              <li>
                <strong>Zona Norte:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "santana" }} className="text-primary hover:underline font-bold">Santana</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "tucuruvi" }} className="text-primary hover:underline font-bold">Tucuruvi</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "casa-verde" }} className="text-primary hover:underline font-bold">Casa Verde</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "freguesia-do-o" }} className="text-primary hover:underline font-bold">Freguesia do Ó</Link> e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "mandaqui" }} className="text-primary hover:underline font-bold">Mandaqui</Link>.
              </li>
              <li>
                <strong>Centro e Regiões Centrais:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "jardins" }} className="text-primary hover:underline font-bold">Jardins</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "consolacao" }} className="text-primary hover:underline font-bold">Consolação</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "higienopolis" }} className="text-primary hover:underline font-bold">Higienópolis</Link> e{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "bela-vista" }} className="text-primary hover:underline font-bold">Bela Vista</Link>.
              </li>
              <li>
                <strong>Cidades Vizinhas / Região Metropolitana:</strong>{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "guarulhos" }} className="text-primary hover:underline font-bold">Guarulhos</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "osasco" }} className="text-primary hover:underline font-bold">Osasco</Link>,{" "}
                <Link to="/servicos/$bairro" params={{ bairro: "barueri" }} className="text-primary hover:underline font-bold">Barueri</Link> (Alphaville), além de Santo André, São Bernardo e São Caetano.
              </li>
            </ul>
            <p>
              Ao escolher a Fast Vidro, nossos técnicos vão até o seu endereço
              para realizar a medição técnica de precisão fina, garantindo que
              o trilho duplo seja fixado com a vedação perfeita contra
              vazamentos.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Conclusão: O Sistema Versatik é a Escolha Certa para Você?
            </h2>
            <p>
              Se você possui um vão de tamanho médio a grande, precisa
              priorizar a acessibilidade de algum familiar, ou simplesmente quer
              desfrutar de um banheiro espaçoso com uma abertura de passagem
              espetacular, o <strong>Box 3 Folhas (Sistema Versatik)</strong> é,
              sem dúvidas, a melhor e mais moderna decisão de compra. Ele alia a
              estética limpa do vidro à máxima inteligência de aproveitamento de
              espaço.
            </p>
            <p>
              Compre direto de quem fabrica com matéria-prima certificada e
              oferece o menor prazo de entrega com instalação limpa de verdade
              em São Paulo.
            </p>
          </div>

          {/* WhatsApp CTA Final */}
          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Orçamento direto de fábrica
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              📞 Peça seu orçamento direto de fábrica hoje!
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Não arrisque a funcionalidade do seu banheiro com medições
              incorretas. Deixe os especialistas da Fast Vidro cuidarem de tudo!
              Envie a largura aproximada do seu vão e receba uma proposta
              comercial detalhada e sob medida para o seu bairro em poucos
              minutos!
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
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
