import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowLeft, Calendar, HelpCircle, ShieldCheck, Palette, Box, ChevronRight, Phone } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import cover from "@/assets/blog-faq-box-banheiro-cover.png";

const TITLE =
  "Guia de Dúvidas Frequentes (FAQ): Tudo o que Você Precisa Saber antes de Comprar Seu Box de Vidro | Fast Vidro";
const DESC =
  "As 14 principais dúvidas sobre box de banheiro respondidas por especialistas: Box Flex, segurança, película Secure Box, preços e atendimento em São Paulo.";
const URL =
  "https://glass-swift-site.lovable.app/blog/faq-box-banheiro";

export const Route = createFileRoute("/blog_/faq-box-banheiro")({
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
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "O Box Flex é resistente e seguro?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sim, com total segurança. O Box Flex da Fast Vidro utiliza vidros temperados de 8mm de marcas líderes (Cebrace ou Guardian) e ferragens em latão ou alumínio de alta densidade. O sistema articulado suporta milhares de ciclos de abertura e fechamento sem ceder.",
              },
            },
            {
              "@type": "Question",
              name: "O Box Flex vaza água para fora do banheiro?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não. O projeto de engenharia conta com sistema de vedação vertical composto por perfis de silicone flexíveis de alta durabilidade (batoques), perfis de alumínio no piso e silicone neutro antifungo, garantindo bloqueio hidrófugo eficaz.",
              },
            },
            {
              "@type": "Question",
              name: "Posso usar o sistema Box Flex em qualquer configuração de banheiro?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sim, o Box Flex é um dos sistemas mais versáteis do mercado. Pode ser configurado para vãos Frontais, vãos de Canto (Angular em L) e até mesmo instalado Sobre Banheiras.",
              },
            },
            {
              "@type": "Question",
              name: "Posso instalar o box fixado na parede que fica de frente para o Shaft?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Depende da configuração de abertura. Não é recomendado com 1 Folha Fixa e 1 de Correr, pois cria uma fresta inacessível. É recomendado com 2 ou mais Portas de Correr, que liberam o acesso total à parede do shaft.",
              },
            },
            {
              "@type": "Question",
              name: "O Box Até o Teto não fica muito pesado para deslizar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não. A Fast Vidro utiliza roldanas de engenharia com rolamentos blindados e blindagem dupla contra umidade. O sistema distribui o peso de forma otimizada sobre o trilho superior de alumínio estrutural, permitindo deslizamento ultra suave.",
              },
            },
            {
              "@type": "Question",
              name: "Todo banheiro pode receber o modelo de Box Até o Teto?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não recomendamos para todos os casos. A instalação só deve ser executada se o banheiro possuir uma janela, basculante ou sistema de exaustão forçada localizado DENTRO da área do chuveiro. Caso contrário, o vapor quente ficará confinado sem vazão.",
              },
            },
            {
              "@type": "Question",
              name: "O Box de Abrir (Giro) pode abrir para o lado de fora do chuveiro?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não é recomendado. A abertura de segurança técnica deve ser sempre para o lado interno da área de banho. Caso abra para fora, a água acumulada escorrerá para o piso seco e a porta pode colidir com o vaso sanitário ou gabinete da pia.",
              },
            },
            {
              "@type": "Question",
              name: "A Película de Segurança Secure Box altera a estética ou a cor do vidro?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "De forma alguma. A película protetora possui tecnologia óptica de alta claridade e transparência cristalina. É 100% invisível a olho nu e não interfere no brilho, na tonalidade ou na translucidez original do vidro temperado.",
              },
            },
            {
              "@type": "Question",
              name: "A película vai descolar ou estragar com o contato constante com a água e o vapor?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não. A Película Secure Box é instalada exclusivamente na face externa do box (do lado de fora da área do chuveiro), ficando totalmente protegida contra o fluxo direto de água quente e produtos químicos.",
              },
            },
            {
              "@type": "Question",
              name: "Por que preciso colocar película se o vidro temperado já é considerado 'de segurança'?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "O vidro temperado é um vidro de segurança porque se fragmenta em pequenos pedaços menos cortantes. No entanto, esses cacos caem de uma só vez no chão. A película impede que os fragmentos caiam, eliminando 100% desse risco de cortes e quedas.",
              },
            },
            {
              "@type": "Question",
              name: "Posso aplicar a Película Secure Box em um box que já está instalado?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não é possível. Para ter eficácia mecânica real, a película precisa ser aplicada nas chapas de vidro antes da montagem do box, com as bordas embutidas e prensadas por dentro das ferragens e perfis de alumínio.",
              },
            },
            {
              "@type": "Question",
              name: "É necessário colocar a película de segurança no Box Até o Teto?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Recomendamos fortemente. No modelo Até o Teto, a massa de vidro suspensa é maior e fica acima da linha da cabeça do usuário. Com a Película Secure Box, o teto de vidro se rompe mas permanece estruturado e preso no lugar.",
              },
            },
            {
              "@type": "Question",
              name: "Encontrei um orçamento de box mais barato no mercado. Por que escolher a Fast Vidro?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A Fast Vidro é especialista fabril em engenharia de vidros temperados. Entregamos matérias-primas de usinas líderes (Cebrace/Guardian), kits de alumínio estrutural robusto, instalação técnica por montadores próprios e conformidade rigorosa com as normas da ABNT.",
              },
            },
            {
              "@type": "Question",
              name: "Posso visitar a loja física de vocês para ver os modelos?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Hoje focamos no modelo de Atendimento Exclusivo a Domicílio. Nossos consultores e técnicos vão até a sua residência com mostruários de perfis de alumínio, catálogos de vidros e ferramentas de medição a laser.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Post,
});

function Post() {
  const message =
    "Olá! Li o artigo FAQ sobre box de banheiro e quero tirar minhas dúvidas e solicitar um orçamento.";

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
                alt="FAQ Box de Banheiro — Dúvidas Frequentes sobre Box de Vidro Temperado — Fast Vidro"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-4 lg:px-0 py-14">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-5">
            <span className="text-primary">FAQ • Box de Vidro</span>
            <span className="text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 7 de Julho de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] tracking-tight">
            Guia de Dúvidas Frequentes (FAQ): Tudo o que Você Precisa Saber antes de Comprar Seu Box de Vidro
          </h1>

          <div className="prose-content mt-8 space-y-6 text-[17px] leading-relaxed text-foreground/90">
            <p>
              Decidir qual é o melhor modelo de box, garantir a segurança da sua família e entender os detalhes técnicos da instalação são passos fundamentais para quem está reformando ou construindo em São Paulo. É muito comum surgirem dúvidas complexas sobre resistência, vazamentos, películas de proteção e o layout ideal do banheiro.
            </p>
            <p>
              Na <strong>Fast Vidro</strong>, acreditamos que a transparência com o cliente vem em primeiro lugar. Por isso, reunimos neste guia definitivo as <strong>14 principais perguntas e respostas</strong> que recebemos diariamente em nossa fábrica. Nossos especialistas responderam a cada uma delas de forma técnica, clara e direta para te dar total segurança na hora da escolha.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              1. Dúvidas sobre o Box Flex (Articulado / Sanfonado)
            </h2>

            <h3 className="text-xl font-bold pt-4">O Box Flex é resistente e seguro?</h3>
            <p>
              <strong>Sim, com total segurança.</strong> O Box Flex comercializado pela Fast Vidro utiliza vidros temperados de 8mm de espessura de marcas líderes de mercado (Cebrace ou Guardian) e ferragens em latão ou alumínio de alta densidade. O sistema articulado é projetado para suportar milhares de ciclos de abertura e fechamento sem ceder. Como não possui trilho superior, toda a carga estrutural e o torque são distribuídos em dobradiças de alta performance com amortecimento interno, garantindo estabilidade e robustez mecânica.
            </p>

            <h3 className="text-xl font-bold pt-4">O Box Flex vaza água para fora do banheiro?</h3>
            <p>
              <strong>Não.</strong> O projeto de engenharia do Box Flex conta com um sistema de vedação vertical composto por perfis de silicone flexíveis de alta durabilidade (batoques). Além disso, aplicamos perfis de alumínio no piso (vedação inferior) combinados com silicone neutro antifungo de cura rápida. Esse conjunto garante um bloqueio hidrófugo altamente eficaz, mantendo a área externa do chuveiro totalmente seca.
            </p>

            <h3 className="text-xl font-bold pt-4">Posso usar o sistema Box Flex em qualquer configuração de banheiro?</h3>
            <p>
              <strong>Sim,</strong> o Box Flex é um dos sistemas mais versáteis do mercado. Ele pode ser configurado para vãos <strong>Frontais</strong> (de parede a parede), vãos de <strong>Canto (Angular em L)</strong> — unindo duas frentes articuladas no centro através de perfis magnéticos de 90° —, e até mesmo instalado <strong>Sobre Banheiras</strong>, otimizando o espaço de passagens estreitas onde um box tradicional de correr ou de abrir comprometeria a circulação.
            </p>

            <div className="not-prose my-8 rounded-xl border border-border bg-card p-6">
              <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Quer conhecer todos os detalhes do Box Flex?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Veja fotos, cores disponíveis e especificações técnicas completas do sistema articulado mais versátil do mercado.
              </p>
              <Link
                to="/box-de-banheiro/flex"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
              >
                Ver Box Flex <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              2. Dúvidas sobre Layout e Engenharia do Banheiro
            </h2>

            <h3 className="text-xl font-bold pt-4">Posso instalar o box fixado na parede que fica de frente para o Shaft (coluna de instalações hidráulicas)?</h3>
            <p>
              <strong>Depende da configuração de abertura escolhida.</strong>
            </p>
            <p>
              <strong className="text-red-400">Não recomendado (1 Folha Fixa e 1 de Correr):</strong> Se o projeto prever o vidro fixo encostado na parede do shaft, criará uma fresta interna inacessível de poucos centímetros. Isso impossibilita totalmente a higienização do local, gerando acúmulo crônico de umidade, mofo e limo na parede e no vidro.
            </p>
            <p>
              <strong className="text-emerald-400">Recomendado (2 ou mais Portas de Correr):</strong> Se o sistema utilizar folhas móveis que deslizam e se movimentam livremente, liberando o acesso total à parede do shaft para manutenção e limpeza, a instalação pode ser realizada sem nenhum problema técnico.
            </p>

            <h3 className="text-xl font-bold pt-4">O Box Até o Teto não fica muito pesado para deslizar?</h3>
            <p>
              <strong>Não.</strong> Embora a folha de vidro seja consideravelmente maior e mais pesada devido à altura total (piso ao teto), a Fast Vidro utiliza roldanas de engenharia com rolamentos blindados e blindagem dupla contra umidade. Esse sistema distribui o peso de forma otimizada sobre o trilho superior de alumínio estrutural, permitindo um deslizamento ultra suave, leve e silencioso, que pode ser operado com o toque de apenas um dedo.
            </p>

            <h3 className="text-xl font-bold pt-4">Todo banheiro pode receber o modelo de Box Até o Teto?</h3>
            <p>
              <strong>Não recomendamos para todos os casos.</strong> Tecnicamente, a instalação do Box Até o Teto (efeito sauna) só deve ser executada se o banheiro possuir uma janela, basculante ou sistema de exaustão forçada (shaft de ventilação) localizado obrigatoriamente <strong>DENTRO</strong> da área do chuveiro. Caso contrário, o vapor quente ficará totalmente confinado sem vazão, o que pode provocar sufocamento térmico no usuário, além de estufar a pintura do gesso e acelerar o surgimento de bolor no teto.
            </p>

            <h3 className="text-xl font-bold pt-4">O Box de Abrir (Giro) pode abrir para o lado de fora do chuveiro?</h3>
            <p>
              <strong>Não é recomendado pela nossa engenharia.</strong> A abertura de segurança técnica deve ser sempre para o lado interno da área de banho. Caso abra para fora, a água acumulada na face interna do vidro escorrerá diretamente para o piso seco do banheiro ao abrir a porta, causando vazamentos. Além disso, dependendo do layout do ambiente, a porta projetada para fora pode colidir violentamente contra o vaso sanitário ou o gabinete da pia, gerando riscos de quebra do vidro por impacto.
            </p>

            <div className="not-prose my-8 rounded-xl border border-border bg-card p-6">
              <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Phone className="h-5 w-5 text-whatsapp" />
                Ficou em dúvida sobre o layout do seu banheiro?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Fale com os Nossos Projetistas no WhatsApp e envie uma foto do ambiente para receber uma análise técnica sem custo!
              </p>
              <a
                href={waLink("Olá! Tenho dúvidas sobre o layout do meu banheiro e quero uma análise técnica.")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-whatsapp px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-whatsapp-foreground hover:opacity-90 transition"
              >
                Falar com Projetista no WhatsApp
              </a>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              3. Dúvidas sobre a Película de Segurança Secure Box
            </h2>

            <h3 className="text-xl font-bold pt-4">A Película de Segurança Secure Box altera a estética ou a cor do vidro?</h3>
            <p>
              <strong>De forma alguma.</strong> A película protetora utilizada pela Fast Vidro possui tecnologia óptica de alta claridade e transparência cristalina. Ela é <strong>100% invisível a olho nu</strong> e não interfere no brilho, na tonalidade ou na translucidez original do vidro temperado (seja ele incolor, fumê ou verde).
            </p>

            <h3 className="text-xl font-bold pt-4">A película vai descolar ou estragar com o contato constante com a água e o vapor do chuveiro?</h3>
            <p>
              <strong>Não.</strong> Por uma diretriz técnica rigorosa de segurança, a Película Secure Box é instalada exclusivamente na <strong>face externa do box</strong> (do lado de fora da área do chuveiro). Dessa forma, ela fica totalmente protegida contra o fluxo direto de água quente, shampoos e produtos químicos abrasivos, garantindo que sua cola acrílica de alta aderência permaneça intacta por muitos anos.
            </p>

            <h3 className="text-xl font-bold pt-4">Por que preciso colocar película se o vidro temperado já é considerado "de segurança"?</h3>
            <p>
              O vidro temperado é, por lei, um vidro de segurança porque, ao sofrer um forte impacto, ele se fragmenta em milhares de pequenos pedaços granulados e menos cortantes que o vidro comum. No entanto, esses milhares de cacos pesados caem de uma só vez no chão. Se você estiver tomando banho descalço e nu, a queda desses estilhaços pode provocar sustos, quedas no piso molhado e pequenos cortes ou escoriações pelo impacto. <strong>A película impede que os fragmentos caiam, eliminando 100% desse risco.</strong>
            </p>

            <h3 className="text-xl font-bold pt-4">Posso aplicar a Película Secure Box em um box que já está instalado na minha casa?</h3>
            <p>
              <strong>Não é possível.</strong> Para que a película de segurança tenha eficácia mecânica real, ela precisa ser aplicada nas chapas de vidro <strong>antes da montagem do box</strong>. Isso acontece porque as bordas da película devem ficar embutidas e prensadas por dentro das ferragens, perfis de alumínio e roldanas. Se for colada com o box já pronto, em caso de quebra, o vidro estilhaçado escapará pelas bordas e o sistema desmoronará da mesma forma.
            </p>

            <h3 className="text-xl font-bold pt-4">É necessário colocar a película de segurança no Box Até o Teto?</h3>
            <p>
              <strong>Recomendamos fortemente.</strong> No modelo Até o Teto, a massa de vidro suspensa é muito maior e fica posicionada acima da linha da cabeça do usuário. Em um evento raríssimo de quebra espontânea por choque térmico ou impacto, o volume de fragmentos caindo do alto é considerável. Com a Película Secure Box, o teto de vidro se rompe, mas permanece totalmente estruturado e preso no lugar, protegendo sua cabeça e integridade física.
            </p>

            <div className="not-prose my-8 rounded-xl border border-border bg-card p-6">
              <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Não abra mão da proteção de quem você ama.
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Conheça os Testes Práticos e a Tecnologia da Película Secure Box.
              </p>
              <Link
                to="/blog/secure-box-pelicula-protecao"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:shadow-yellow transition"
              >
                Conhecer a Película Secure Box <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              4. Dúvidas sobre Mercado, Preço e Atendimento
            </h2>

            <h3 className="text-xl font-bold pt-4">Encontrei um orçamento de box mais barato no mercado. Por que escolher a Fast Vidro?</h3>
            <p>
              O mercado de vidraçarias em São Paulo possui variações de preços, mas o vidro do seu banheiro é um item de segurança estrutural que não aceita improvisos. Muitos fornecedores utilizam vidros sem têmpera certificada, ferragens de alumínio reciclado de baixa espessura (que entortam) e roldanas paralelas que travam em poucos meses.
            </p>
            <p>
              Na <strong>Fast Vidro</strong>, nós somos especialistas fabris em engenharia de vidros temperados. Não vendemos apenas vidros; entregamos um pacote completo de engenharia que inclui matérias-primas de usinas líderes (Cebrace/Guardian), kits de alumínio estrutural robusto, instalação técnica executada por montadores próprios e conformidade rigorosa com as normas da <strong>ABNT</strong>. O valor que você investe se traduz em paz de espírito e na proteção real da vida da sua família.
            </p>

            <h3 className="text-xl font-bold pt-4">Posso visitar a loja física de vocês para ver os modelos?</h3>
            <p>
              Hoje, focamos nossa operação em um modelo moderno de <strong>Atendimento Exclusivo a Domicílio</strong>. Fechamos nossos showrooms físicos tradicionais para transferir essa economia de custos estruturais diretamente em descontos no preço de fábrica para você.
            </p>
            <p>
              Para sua total comodidade na correria de São Paulo, nossos consultores e técnicos especializados vão até a sua residência ou obra com mostruários de perfis de alumínio, catálogos de vidros e ferramentas de medição a laser. Você escolhe o modelo no conforto do seu lar, com avaliação técnica do espaço em tempo real e sem perder horas no trânsito.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              5. Atendimento Especializado e Cobertura Geográfica (GEO)
            </h2>

            <p>
              Independentemente do seu bairro ou região na Grande São Paulo, a equipe técnica da Fast Vidro vai até você com frota própria e equipe altamente qualificada:
            </p>

            <p>
              <strong>Zona Sul:</strong> Atendimento diário com hora marcada no Morumbi, Moema, Brooklin, Vila Olímpia, Campo Belo, Santo Amaro, Saúde, Ipiranga e Vila Mariana.
            </p>

            <p>
              <strong>Zona Oeste:</strong> Visitas técnicas e medições a laser em Pinheiros, Perdizes, Lapa, Vila Madalena, Alto de Pinheiros, Butantã e Pompeia.
            </p>

            <p>
              <strong>Zona Norte:</strong> Atendimento ágil e consultorias residenciais em Santana, Tucuruvi, Casa Verde, Freguesia do Ó e Mandaqui.
            </p>

            <p>
              <strong>Zona Leste:</strong> Projetos sob medida nos bairros do Tatuapé, Anália Franco, Mooca, Vila Formosa, Belenzinho e Penha.
            </p>

            <p>
              <strong>Centro e ABC Paulista:</strong> Projetos executados nos Jardins, Consolação, Higienópolis e nas cidades de Santo André, São Bernardo e São Caetano.
            </p>

            <h2 className="text-2xl sm:text-3xl font-black pt-6">
              Conclusão: Informação Técnica É o Primeiro Passo para a Segurança
            </h2>

            <p>
              Comprar um box de vidro temperado exige entender os detalhes que fazem a diferença entre um banheiro seguro e funcional e uma dor de cabeça futura. Sabendo das especificações do Box Flex, dos limites do Box Até o Teto e da importância vital da película protetora, você está pronto para tomar a melhor decisão.
            </p>

            <p>
              Confie o seu projeto a quem é autoridade no assunto na cidade de São Paulo.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Fale agora com a Fast Vidro
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black">
              Ficou com mais alguma dúvida ou quer seu orçamento?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Nossa equipe técnica de engenheiros e consultores está pronta para analisar o seu caso específico. Tire suas dúvidas ou passe as medidas iniciais do seu banheiro. Respondemos de forma rápida, com atendimento exclusivo e preço direto de fábrica para a sua região!
            </p>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold uppercase tracking-wide text-whatsapp-foreground shadow-ink hover:scale-105 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Falar Diretamente no WhatsApp
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
                Película Secure Box
              </Link>
              <Link
                to="/blog/como-saber-qual-box-usar"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
              >
                Qual Box Usar?
              </Link>
            </div>
          </div>

          {/* Neighborhood links */}
          <div className="mt-10 rounded-xl border border-border bg-card p-6">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Box className="h-5 w-5 text-primary" />
              Atendimento por região em São Paulo
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                ["/servicos/santana", "Santana"],
                ["/servicos/tucuruvi", "Tucuruvi"],
                ["/servicos/casa-verde", "Casa Verde"],
                ["/servicos/vila-guilherme", "Vila Guilherme"],
                ["/servicos/mandaqui", "Mandaqui"],
                ["/servicos/jardim-sao-paulo", "Jardim São Paulo"],
                ["/servicos/morumbi", "Morumbi"],
                ["/servicos/moema", "Moema"],
                ["/servicos/pinheiros", "Pinheiros"],
                ["/servicos/tatuape", "Tatuapé"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  to={href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
                >
                  Box {label} <ChevronRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
