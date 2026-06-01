export const SITE = {
  name: "Fast Vidro",
  tagline: "Agilidade e segurança em vidros",
  phone: "(11) 99999-9999",
  whatsapp: "5511999999999",
  email: "contato@fastvidro.com.br",
  address: "São Paulo — SP",
  instagram: "https://instagram.com/fastvidro",
  tiktok: "https://tiktok.com/@fastvidro",
  google: "https://g.page/fastvidro",
};

export const waLink = (msg = "Olá! Gostaria de um orçamento.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
