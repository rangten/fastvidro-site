import boxImg from "@/assets/product-box.jpg";
import portasImg from "@/assets/product-portas.jpg";
import espelhosImg from "@/assets/product-espelhos.jpg";
import projetosImg from "@/assets/product-projetos.jpg";
import heroBox from "@/assets/hero-box.jpg";
import flexCover from "@/assets/flex-cover.png.asset.json";

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
      { slug: "piso-teto", name: "Piso Teto", description: "Painéis fixos do piso ao teto, visual minimalista.", longDescription: "O Box Piso Teto traz uma estética minimalista de alto padrão: painéis de vidro temperado vão do piso ao teto, sem perfis intermediários, criando uma sensação de amplitude e sofisticação no banheiro.", image: boxImg, gallery: placeholderGallery(boxImg) },
      { slug: "tradicional", name: "Tradicional", description: "Modelo clássico, ótimo custo-benefício.", longDescription: "O Box Tradicional é a solução clássica e mais procurada para reformas em São Paulo. Estrutura robusta, instalação rápida e excelente custo-benefício, mantendo o padrão de segurança Fast Vidro.", image: boxImg, gallery: placeholderGallery(boxImg) },
      { slug: "canto", name: "Canto", description: "Aproveita o espaço de boxes em L.", longDescription: "O Box de Canto aproveita totalmente boxes em formato L, permitindo aberturas independentes em cada lateral. Ideal para banheiros maiores ou áreas de chuveiro em ambiente molhado.", image: boxImg, gallery: placeholderGallery(boxImg) },
      { slug: "transfer", name: "Transfer", description: "Sem perfil inferior, acessibilidade e limpeza.", longDescription: "O Box Transfer dispensa o perfil inferior, facilitando a passagem para cadeirantes e a limpeza do box. Solução acessível e segura para banheiros adaptados.", image: boxImg, gallery: placeholderGallery(boxImg) },
      { slug: "de-abrir", name: "De Abrir", description: "Porta pivotante, ideal para banheiros amplos.", longDescription: "O Box De Abrir utiliza dobradiças em aço inox com sistema pivotante. Indicado para banheiros amplos, oferece abertura ampla e visual sofisticado.", image: boxImg, gallery: placeholderGallery(boxImg) },
      { slug: "nobre", name: "Nobre", description: "Ferragens premium, acabamento sofisticado.", longDescription: "O Box Nobre é o nosso topo de linha: ferragens importadas, vidro temperado 10mm e acabamento em aço inox escovado. Para banheiros de alto padrão que merecem o melhor.", image: boxImg, gallery: placeholderGallery(boxImg) },
      { slug: "elegance", name: "Elegance", description: "Linhas finas, perfil reduzido, design moderno.", longDescription: "O Box Elegance combina linhas finas com roldanas aparentes em aço inox. Deslizamento silencioso e design contemporâneo — referência para reformas modernas em São Paulo.", image: boxImg, gallery: placeholderGallery(boxImg) },
      { slug: "duo-safe", name: "Duo Safe", description: "Película de segurança anti-estilhaço integrada.", longDescription: "O Box Duo Safe integra a tecnologia +Seguro: película anti-estilhaço aplicada ao vidro temperado, garantindo máxima proteção da família mesmo em caso de impacto.", image: boxImg, gallery: placeholderGallery(boxImg) },
    ],
  },
  "portas-de-vidro": {
    slug: "portas-de-vidro",
    eyebrow: "Portas de Vidro",
    title: "Portas de vidro sob medida",
    models: [
      { slug: "vision", name: "Vision", description: "Linhas finas, ideal para escritórios modernos.", longDescription: "A Porta Vision tem perfil ultrafino em alumínio, ideal para escritórios, salas de reunião e lofts modernos. Vidro temperado de alta segurança e visual minimalista.", image: portasImg, gallery: placeholderGallery(portasImg) },
      { slug: "nobre", name: "Nobre", description: "Acabamento premium para alto padrão.", longDescription: "A Porta Nobre é a escolha para projetos de alto padrão: ferragens importadas, vidro 10mm e acabamento premium em alumínio anodizado.", image: portasImg, gallery: placeholderGallery(portasImg) },
      { slug: "certo", name: "Certo", description: "Solução robusta para grandes vãos.", longDescription: "A Porta Certo foi pensada para grandes vãos comerciais e residenciais, com estrutura reforçada e ferragens de alta resistência.", image: portasImg, gallery: placeholderGallery(portasImg) },
      { slug: "flex", name: "Flex", description: "Adaptável a múltiplas configurações.", longDescription: "A Porta Flex se adapta a múltiplas configurações: abre, corre ou pivota conforme o projeto. Versatilidade total para arquitetos e designers.", image: portasImg, gallery: placeholderGallery(portasImg) },
      { slug: "de-abrir", name: "De Abrir", description: "Porta tradicional pivotante com molas.", longDescription: "A Porta De Abrir é o clássico pivotante com molas hidráulicas. Robusta, durável e elegante — solução tradicional reinventada com vidro temperado.", image: portasImg, gallery: placeholderGallery(portasImg) },
      { slug: "de-correr", name: "De Correr", description: "Aproveitamento total do espaço.", longDescription: "A Porta De Correr libera 100% do espaço útil. Trilho superior reforçado e roldanas silenciosas para uso intenso no dia a dia.", image: portasImg, gallery: placeholderGallery(portasImg) },
      { slug: "versatik", name: "Versatik", description: "Sistema deslizante silencioso e suave.", longDescription: "A Porta Versatik usa sistema deslizante com amortecedor, garantindo fechamento suave e silencioso. Perfeita para integrar ambientes pequenos sem perder área útil.", image: portasImg, gallery: placeholderGallery(portasImg) },
    ],
  },
  "espelhos": {
    slug: "espelhos",
    eyebrow: "Espelhos",
    title: "Espelhos sob medida",
    models: [
      { slug: "decorativo", name: "Decorativo", description: "Sob medida, formas livres e geométricas.", longDescription: "Os Espelhos Decorativos da Fast Vidro são cortados sob medida em formatos livres e geométricos — circulares, hexagonais, orgânicos. Eleva qualquer ambiente da casa.", image: espelhosImg, gallery: placeholderGallery(espelhosImg) },
      { slug: "banheiro", name: "Banheiro", description: "Resistência à umidade e fácil limpeza.", longDescription: "Os Espelhos para Banheiro recebem tratamento antiembaçante e proteção contra umidade, garantindo durabilidade mesmo em ambientes molhados.", image: espelhosImg, gallery: placeholderGallery(espelhosImg) },
      { slug: "parede-inteira", name: "Parede Inteira", description: "Amplia visualmente o ambiente.", longDescription: "Espelhos de Parede Inteira ampliam visualmente o ambiente, refletindo luz natural e dando sensação de amplitude. Indicado para salas, halls e academias residenciais.", image: espelhosImg, gallery: placeholderGallery(espelhosImg) },
      { slug: "lapidacao-reta", name: "Lapidação Reta", description: "Bordas polidas com acabamento limpo.", longDescription: "A Lapidação Reta deixa as bordas do espelho polidas e perfeitas ao toque, sem necessidade de moldura. Acabamento limpo e moderno.", image: espelhosImg, gallery: placeholderGallery(espelhosImg) },
      { slug: "bisote", name: "Bisotê", description: "Borda inclinada e brilhante, charme clássico.", longDescription: "O Bisotê cria uma borda inclinada que reflete a luz de forma elegante. Charme clássico para espelhos de banheiro, salas e quartos.", image: espelhosImg, gallery: placeholderGallery(espelhosImg) },
    ],
  },
  "projetos": {
    slug: "projetos",
    eyebrow: "Projetos",
    title: "Projetos personalizados em vidro",
    models: [
      { slug: "residencial", name: "Residencial", description: "Soluções sob medida para casas e apartamentos.", longDescription: "Projetos Residenciais sob medida: guarda-corpos, fechamentos de sacada, divisórias e mais. Atendemos casas e apartamentos em toda a Capital e Grande SP.", image: projetosImg, gallery: placeholderGallery(projetosImg) },
      { slug: "comercial", name: "Comercial", description: "Fachadas, vitrines e divisórias para o seu negócio.", longDescription: "Projetos Comerciais: fachadas em vidro temperado, vitrines, divisórias de loja e escritório. Solução completa para o seu negócio.", image: projetosImg, gallery: placeholderGallery(projetosImg) },
      { slug: "escritorios", name: "Escritórios", description: "Divisórias de vidro para ambientes corporativos.", longDescription: "Divisórias de vidro para escritórios corporativos, integrando ambientes sem perder privacidade. Sistemas com vidro duplo e jateado disponíveis.", image: projetosImg, gallery: placeholderGallery(projetosImg) },
      { slug: "guarda-corpo", name: "Guarda-corpo", description: "Vidro temperado para sacadas e escadas.", longDescription: "Guarda-corpos em vidro temperado para sacadas, escadas e mezaninos. Segurança certificada e visual contemporâneo.", image: projetosImg, gallery: placeholderGallery(projetosImg) },
      { slug: "fechamento-sacada", name: "Fechamento de Sacada", description: "Cortinas de vidro retráteis e silenciosas.", longDescription: "Fechamento de Sacada com vidro temperado retrátil: silencioso, seguro e fácil de manusear. Aumenta a área útil e protege contra vento e chuva.", image: projetosImg, gallery: placeholderGallery(projetosImg) },
      { slug: "coberturas", name: "Coberturas", description: "Coberturas em vidro temperado laminado.", longDescription: "Coberturas em vidro laminado de segurança para áreas externas, passagens e pergolados. Permite passagem de luz natural com total segurança.", image: heroBox, gallery: placeholderGallery(heroBox) },
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
