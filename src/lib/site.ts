// ============================================================
// CONSTANTE GLOBAL DO WHATSAPP — TROQUE AQUI PELO SEU NÚMERO REAL
// Formato: código do país (55) + DDD + número, somente dígitos.
// Exemplo: "5511967652289" para (11) 96765-2289
// Esta é a ÚNICA constante usada em todos os botões do site.
// ============================================================
export const WHATSAPP_NUMBER = "5511990238648";

export const SITE = {
  name: "Fast Vidro",
  tagline: "Agilidade e segurança em vidros",
  phone: "(11) 99023-8648",
  whatsapp: WHATSAPP_NUMBER,
  email: "contato@fastvidro.com.br",
  address:
    "Atendemos toda a Capital de São Paulo, Grande SP e Regiões Metropolitanas (Santana, Tucuruvi, Pinheiros, Moema, Morumbi, Tatuapé, Alphaville e região).",
  instagram: "https://instagram.com/fast.vidro",
  tiktok: "https://tiktok.com/@fastvidro",
  google: "https://g.page/fastvidro",
};

// Mensagens dinâmicas por página/produto — usadas nos botões do WhatsApp.
export const WA_MESSAGES = {
  default: "Olá! Gostaria de um orçamento com a Fast Vidro.",
  box: "Olá! Gostaria de um orçamento para Box de Banheiro com a equipe da Fast Vidro.",
  portas: "Olá! Preciso de um orçamento para Portas de Vidro com a Fast Vidro.",
  espelhos: "Olá! Gostaria de um orçamento para Espelhos Lapidados/Bisotê com a Fast Vidro.",
  espelhosLed: "Olá! Vi os Espelhos com LED no site e quero um orçamento sob medida.",
  projetos: "Olá! Quero solicitar um projeto personalizado em vidro com a Fast Vidro.",
  blog: "Olá! Vim pelo blog da Fast Vidro e gostaria de um orçamento.",
} as const;

export const waLink = (msg: string = WA_MESSAGES.default) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
