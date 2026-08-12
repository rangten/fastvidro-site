// Mestre SEO Local — Fast Vidro
// Bairros agrupados por zona; cada zona tem um bloco de texto único
// para evitar duplicidade de conteúdo entre as páginas /servicos/:bairro.

export type Zona = "norte" | "sul" | "oeste" | "leste" | "centro";

export interface ZonaInfo {
  id: Zona;
  label: string;
  bairros: string[];
  texto: string;
}

export const ZONAS: ZonaInfo[] = [
  {
    id: "norte",
    label: "Zona Norte",
    bairros: [
      "Santana", "Mandaqui", "Tucuruvi", "Parada Inglesa", "Lauzane Paulista",
      "Horto Florestal", "Tremembé", "Casa Verde", "Bairro do Limão",
      "Vila Nova Cachoeirinha", "Imirim", "Freguesia do Ó", "Vila Maria",
      "Vila Guilherme", "Jaçanã", "Pirituba", "Cachoeirinha", "Guarulhos",
    ],
    texto:
      "Se você está construindo ou reformando na Zona Norte de São Paulo, sabe que a região exige soluções práticas e sob medida para imóveis de alta densidade vertical e condomínios tradicionais. A Fast Vidro atende diariamente a Zona Norte com uma equipe técnica dedicada a realizar medições digitais precisas e instalações limpas. Nossos projetos de box de banheiro e vidros são desenhados para valorizar a arquitetura local, unindo durabilidade e o melhor aproveitamento de espaço para o seu ambiente.",
  },
  {
    id: "sul",
    label: "Zona Sul",
    bairros: [
      "Moema", "Morumbi", "Vila Clementino", "Brooklin", "Socorro",
      "Santo Amaro", "Ibirapuera", "Saúde", "Campo Belo", "Vila Mariana",
      "Jabaquara", "Itaim Bibi", "Interlagos", "Paraíso", "Panamby",
      "Jardim Europa", "Vila Sônia",
    ],
    texto:
      "A Zona Sul de São Paulo é referência em lançamentos imobiliários de alto padrão, estúdios modernos e coberturas exclusivas. Atender o público exigente da ZS requer materiais de engenharia impecável e acabamentos minimalistas. A Fast Vidro executa projetos de vidraçaria na Zona Sul focando em designs contemporâneos, kits de linhas retas e roldanas de alta tecnologia, proporcionando salas de banho sofisticadas que combinam elegância e funcionalidade.",
  },
  {
    id: "oeste",
    label: "Zona Oeste",
    bairros: [
      "Alphaville", "Cotia", "Barueri", "Butantã", "Pinheiros", "Lapa",
      "Perdizes", "Vila Leopoldina", "Osasco", "Barra Funda", "Pompéia",
      "Vila Madalena", "Parque São Domingos", "Vila Olímpia", "Santana de Parnaíba",
    ],
    texto:
      "O vetor da Zona Oeste e suas regiões metropolitanas integradas destacam-se por condomínios fechados horizontais de alto padrão e apartamentos que valorizam a iluminação natural e o design aberto. A Fast Vidro desenvolve projetos personalizados na ZO com foco em máxima segurança e amplitude. Nossos vidros temperados e espelhos são lapidados com tecnologia de ponta para integrar e enriquecer o visual de ambientes exigentes.",
  },
  {
    id: "leste",
    label: "Zona Leste",
    bairros: [
      "Mooca", "Penha", "Vila Formosa", "Tatuapé", "Vila Prudente",
      "Belém", "Vila Carrão", "Ipiranga", "Anália Franco",
    ],
    texto:
      "A Zona Leste se consolidou como uma das regiões com maior crescimento vertical e modernização residencial de São Paulo. Com rotinas dinâmicas, os novos apartamentos na ZL exigem inteligência na hora de otimizar espaço nos banheiros e salas. A Fast Vidro leva para a Zona Leste sistemas articulados (retráteis) e soluções sob medida que resolvem vãos estreitos, trazendo facilidade de limpeza e um acabamento industrial impecável.",
  },
  {
    id: "centro",
    label: "Centro",
    bairros: [
      "Avenida Paulista", "Bom Retiro", "Liberdade", "Consolação", "Centro",
      "Aclimação", "Bela Vista", "Cambuci", "Brás", "Santa Cecília",
      "Pacaembu", "Higienópolis", "Jardins", "Frei Caneca",
    ],
    texto:
      "Reformar no Centro de São Paulo e em seus bairros históricos exige muita experiência técnica devido às estruturas e prumos específicos de edifícios tradicionais ou novos microapartamentos. A Fast Vidro oferece atendimento especializado para a região central, dispondo de caixilharia robusta para grandes vãos e engenharia compacta de alta performance, garantindo vedação total, isolamento e segurança para sua obra.",
  },
];

// slug helper
export function toSlug(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// pretty name from slug ("vila-guilherme" -> "Vila Guilherme", preserva acentos via map)
const SLUG_TO_NAME = new Map<string, string>();
const SLUG_TO_ZONA = new Map<string, ZonaInfo>();
for (const z of ZONAS) {
  for (const b of z.bairros) {
    const slug = toSlug(b);
    SLUG_TO_NAME.set(slug, b);
    SLUG_TO_ZONA.set(slug, z);
  }
}

export function bairroFromSlug(slug: string): { nome: string; zona: ZonaInfo } | null {
  const normalized = slug.toLowerCase();
  const nome = SLUG_TO_NAME.get(normalized);
  const zona = SLUG_TO_ZONA.get(normalized);
  if (!nome || !zona) return null;
  return { nome, zona };
}

export function allBairroSlugs(): string[] {
  return Array.from(SLUG_TO_NAME.keys());
}
