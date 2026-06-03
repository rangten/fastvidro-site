import boxImg from "@/assets/product-box.jpg";
import portasImg from "@/assets/product-portas.jpg";
import espelhosImg from "@/assets/product-espelhos.jpg";
import projetosImg from "@/assets/product-projetos.jpg";
import heroBox from "@/assets/hero-box.jpg";
import flexCover from "@/assets/flex-cover.png.asset.json";
import pisoTetoCover from "@/assets/piso-teto-cover.png.asset.json";
import tradicionalCover from "@/assets/tradicional-cover.png.asset.json";
import transferCover from "@/assets/transfer-cover.png.asset.json";
import nobreCover from "@/assets/nobre-cover.png.asset.json";
import eleganceCover from "@/assets/elegance-cover.png.asset.json";
import portaVision from "@/assets/porta-vision.png.asset.json";
import portaNobre from "@/assets/porta-nobre.png.asset.json";
import portaCerta from "@/assets/porta-certa.png.asset.json";
import portaFlex from "@/assets/porta-flex.png.asset.json";
import portaDeGiro from "@/assets/porta-de-giro.png.asset.json";
import portaCorrer from "@/assets/porta-correr.png.asset.json";
import portaVersatik from "@/assets/porta-versatik.png.asset.json";
import espelhoOrganico from "@/assets/espelho-organico.png.asset.json";
import espelhoBanheiro from "@/assets/espelho-banheiro.jpg.asset.json";
import painelEspelho from "@/assets/painel-espelho.jpg.asset.json";
import espelhoLapidado from "@/assets/espelho-lapidado.png.asset.json";
import espelhoBisote from "@/assets/espelho-bisote.png.asset.json";
import projetoResidencial from "@/assets/projeto-residencial.jpg.asset.json";
import projetoComercial from "@/assets/projeto-comercial.png.asset.json";
import projetoEscritorios from "@/assets/escritorio-interior.png.asset.json";
import comercialInterior from "@/assets/comercial-interior.png.asset.json";
import projetoGuardaCorpo from "@/assets/projeto-guarda-corpo.png.asset.json";
import projetoFechamentoSacada from "@/assets/projeto-fechamento-sacada.png.asset.json";
import projetoCoberturas from "@/assets/projeto-coberturas.png.asset.json";


// ============================================================
// CATÁLOGO CENTRAL — TODOS OS MODELOS DE TODAS AS CATEGORIAS
// ------------------------------------------------------------
// Para trocar as fotos reais, basta substituir os campos `image`
// e `gallery` (galeria de 6 fotos) de cada modelo abaixo.
// ============================================================

export type Model = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: [string, string, string, string, string, string];
};

export type Category = {
  slug: string; // ex: "box-de-banheiro"
  eyebrow: string;
  title: string;
  models: Model[];
};

// Placeholder de galeria — 6 imagens (substituir pelas fotos reais)
const placeholderGallery = (img: string): Model["gallery"] => [img, img, img, img, img, img];

export const CATEGORIES: Record<string, Category> = {
  "box-de-banheiro": {
    slug: "box-de-banheiro",
    eyebrow: "Box de Banheiro",
    title: "Box de banheiro sob medida",
    models: [
      { slug: "flex", name: "Flex", description: "Versátil para box de canto e frontal, perfil discreto.", longDescription: "O Box Flex é a escolha ideal para banheiros pequenos e médios em São Paulo. Com perfil discreto em alumínio anodizado, roldanas silenciosas e vidro temperado de 8mm, ele se adapta tanto a boxes frontais quanto de canto, garantindo abertura suave e máximo aproveitamento do espaço.", image: flexCover.url, gallery: placeholderGallery(flexCover.url) },
      { slug: "piso-teto", name: "Piso Teto", description: "Painéis fixos do piso ao teto, visual minimalista.", longDescription: "O Box Piso Teto traz uma estética minimalista de alto padrão: painéis de vidro temperado vão do piso ao teto, sem perfis intermediários, criando uma sensação de amplitude e sofisticação no banheiro.", image: pisoTetoCover.url, gallery: placeholderGallery(pisoTetoCover.url) },
      { slug: "tradicional", name: "Tradicional", description: "Modelo clássico, ótimo custo-benefício.", longDescription: "O Box Tradicional é a solução clássica e mais procurada para reformas em São Paulo. Estrutura robusta, instalação rápida e excelente custo-benefício, mantendo o padrão de segurança Fast Vidro.", image: tradicionalCover.url, gallery: placeholderGallery(tradicionalCover.url) },
      { slug: "transfer", name: "3 Folhas de Correr", description: "Sistema com 3 folhas de correr, ideal para vãos pequenos.", longDescription: "O Box 3 Folhas de Correr (Transfer) é a solução perfeita para vãos pequenos: 1 folha fixa + 2 móveis que se recolhem atrás da fixa, garantindo até 2/3 de passagem livre no vão.", image: transferCover.url, gallery: placeholderGallery(transferCover.url) },
      { slug: "nobre", name: "Nobre", description: "Amortecedor duplo + alumínio reforçado.", longDescription: "O Box Nobre é o topo de linha da Ideia Glass: sistema de amortecimento na abertura e no fechamento, alumínio reforçado e puxador Asa Linear embutido. Segurança e acabamento premium.", image: nobreCover.url, gallery: placeholderGallery(nobreCover.url) },
      { slug: "elegance", name: "Elegance", description: "Roldanas aparentes, design moderno e sofisticado.", longDescription: "O Box Elegance combina linhas finas com roldanas aparentes maciças sobre tubo cilíndrico. Deslizamento silencioso e design contemporâneo — referência para reformas modernas em São Paulo.", image: eleganceCover.url, gallery: placeholderGallery(eleganceCover.url) },
    ],
  },
  "portas-de-vidro": {
    slug: "portas-de-vidro",
    eyebrow: "Portas de Vidro",
    title: "Portas de vidro sob medida",
    models: [
      { slug: "vision", name: "Vision", description: "Linhas finas, ideal para escritórios modernos.", longDescription: "A Porta Vision tem perfil ultrafino em alumínio, ideal para escritórios, salas de reunião e lofts modernos. Vidro temperado de alta segurança e visual minimalista.", image: portaVision.url, gallery: placeholderGallery(portaVision.url) },
      { slug: "nobre", name: "Nobre", description: "Acabamento premium para alto padrão.", longDescription: "A Porta Nobre é a escolha para projetos de alto padrão: ferragens importadas, vidro 10mm e acabamento premium em alumínio anodizado.", image: portaNobre.url, gallery: placeholderGallery(portaNobre.url) },
      { slug: "certa", name: "Certa", description: "Solução robusta para grandes vãos.", longDescription: "A Porta Certo foi pensada para grandes vãos comerciais e residenciais, com estrutura reforçada e ferragens de alta resistência.", image: portaCerta.url, gallery: placeholderGallery(portaCerta.url) },
      { slug: "flex", name: "Flex", description: "Adaptável a múltiplas configurações.", longDescription: "A Porta Flex se adapta a múltiplas configurações: abre, corre ou pivota conforme o projeto. Versatilidade total para arquitetos e designers.", image: portaFlex.url, gallery: placeholderGallery(portaFlex.url) },
      { slug: "abrir", name: "De Abrir", description: "Porta tradicional pivotante com molas.", longDescription: "A Porta De Abrir é o clássico pivotante com molas hidráulicas. Robusta, durável e elegante — solução tradicional reinventada com vidro temperado.", image: portaDeGiro.url, gallery: placeholderGallery(portaDeGiro.url) },
      { slug: "correr", name: "De Correr", description: "Aproveitamento total do espaço.", longDescription: "A Porta De Correr libera 100% do espaço útil. Trilho superior reforçado e roldanas silenciosas para uso intenso no dia a dia.", image: portaCorrer.url, gallery: placeholderGallery(portaCorrer.url) },
      { slug: "versatik", name: "Versatik", description: "Sistema deslizante silencioso e suave.", longDescription: "A Porta Versatik usa sistema deslizante com amortecedor, garantindo fechamento suave e silencioso. Perfeita para integrar ambientes pequenos sem perder área útil.", image: portaVersatik.url, gallery: placeholderGallery(portaVersatik.url) },
    ],
  },
  "espelhos": {
    slug: "espelhos",
    eyebrow: "Espelhos",
    title: "Espelhos sob medida",
    models: [
      { slug: "organico", name: "Espelho Orgânico", description: "Formas orgânicas sob medida, design contemporâneo.", longDescription: "O Espelho Orgânico da Fast Vidro é cortado sob medida em formas fluidas e contemporâneas, trazendo personalidade e movimento para qualquer ambiente. Perfeito para lavabos, banheiros e salas modernas.", image: espelhoOrganico.url, gallery: placeholderGallery(espelhoOrganico.url) },
      { slug: "banheiro", name: "Espelho Banheiro", description: "Resistência à umidade e fácil limpeza.", longDescription: "Os Espelhos para Banheiro recebem tratamento antiembaçante e proteção contra umidade, garantindo durabilidade mesmo em ambientes molhados.", image: espelhoBanheiro.url, gallery: placeholderGallery(espelhoBanheiro.url) },
      { slug: "painel", name: "Painel de Espelho", description: "Amplia visualmente o ambiente.", longDescription: "Painéis de espelho ampliam visualmente o ambiente, refletindo luz natural e dando sensação de amplitude. Indicado para salas, halls e academias residenciais.", image: painelEspelho.url, gallery: placeholderGallery(painelEspelho.url) },
      { slug: "lapidado", name: "Espelho Lapidado", description: "Bordas polidas com acabamento limpo.", longDescription: "A Lapidação Reta deixa as bordas do espelho polidas e perfeitas ao toque, sem necessidade de moldura. Acabamento limpo e moderno.", image: espelhoLapidado.url, gallery: placeholderGallery(espelhoLapidado.url) },
      { slug: "bisote", name: "Espelho Bisotê", description: "Borda inclinada e brilhante, charme clássico.", longDescription: "O Bisotê cria uma borda inclinada que reflete a luz de forma elegante. Charme clássico para espelhos de banheiro, salas e quartos.", image: espelhoBisote.url, gallery: placeholderGallery(espelhoBisote.url) },
    ],
  },
  "projetos": {
    slug: "projetos",
    eyebrow: "Projetos",
    title: "Projetos personalizados em vidro",
    models: [
      { slug: "residencial", name: "Residencial", description: "Soluções sob medida para casas e apartamentos.", longDescription: "Projetos Residenciais sob medida: guarda-corpos, fechamentos de sacada, divisórias e mais. Atendemos casas e apartamentos em toda a Capital e Grande SP.", image: projetoResidencial.url, gallery: placeholderGallery(projetoResidencial.url) },
      { slug: "comercial", name: "Comercial", description: "Fachadas, vitrines e divisórias para o seu negócio.", longDescription: "Projetos Comerciais: fachadas em vidro temperado, vitrines, divisórias de loja e escritório. Solução completa para o seu negócio.", image: projetoComercial.url, gallery: [comercialInterior.url, projetoComercial.url, comercialInterior.url, projetoComercial.url, comercialInterior.url, projetoComercial.url] },
      { slug: "escritorios", name: "Escritórios", description: "Divisórias de vidro para ambientes corporativos.", longDescription: "Divisórias de vidro para escritórios corporativos, integrando ambientes sem perder privacidade. Sistemas com vidro duplo e jateado disponíveis.", image: projetoEscritorios.url, gallery: placeholderGallery(projetoEscritorios.url) },
      { slug: "guarda-corpo", name: "Guarda-corpo", description: "Vidro temperado para sacadas e escadas.", longDescription: "Guarda-corpos em vidro temperado para sacadas, escadas e mezaninos. Segurança certificada e visual contemporâneo.", image: projetoGuardaCorpo.url, gallery: placeholderGallery(projetoGuardaCorpo.url) },
      { slug: "fechamento-sacada", name: "Fechamento de Sacada", description: "Cortinas de vidro retráteis e silenciosas.", longDescription: "Fechamento de Sacada com vidro temperado retrátil: silencioso, seguro e fácil de manusear. Aumenta a área útil e protege contra vento e chuva.", image: projetoFechamentoSacada.url, gallery: placeholderGallery(projetoFechamentoSacada.url) },
      { slug: "coberturas", name: "Coberturas", description: "Coberturas em vidro temperado laminado.", longDescription: "Coberturas em vidro laminado de segurança para áreas externas, passagens e pergolados. Permite passagem de luz natural com total segurança.", image: projetoCoberturas.url, gallery: placeholderGallery(projetoCoberturas.url) },
    ],
  },
};

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES[slug];
}

export function getModel(categorySlug: string, modelSlug: string): { category: Category; model: Model } | undefined {
  const category = CATEGORIES[categorySlug];
  if (!category) return undefined;
  const model = category.models.find((m) => m.slug === modelSlug);
  if (!model) return undefined;
  return { category, model };
}
