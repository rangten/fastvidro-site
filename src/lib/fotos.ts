// Fotos reais reaproveitadas das páginas de modelos
import flex1 from "@/assets/flex-1.webp";
import flex2 from "@/assets/flex-2.webp";
import flex3 from "@/assets/flex-3.webp";
import flex4 from "@/assets/flex-4.webp";
import flex5 from "@/assets/flex-5.webp";
import flexCover from "@/assets/flex-cover.webp";

import pisoTeto2 from "@/assets/piso-teto-2.webp";
import pisoTeto3 from "@/assets/piso-teto-3.webp";
import pisoTeto4 from "@/assets/piso-teto-4.webp";
import pisoTetoCover from "@/assets/piso-teto-cover.webp";

import tradCanto from "@/assets/tradicional-canto.webp";
import tradAbrir from "@/assets/tradicional-abrir.webp";
import tradCorrer from "@/assets/tradicional-correr.webp";
import tradCover from "@/assets/tradicional-cover.webp";

import elegance1 from "@/assets/elegance-1.webp";
import elegance2 from "@/assets/elegance-2.webp";
import elegance3 from "@/assets/elegance-3.webp";
import elegance4 from "@/assets/elegance-4.webp";
import eleganceCover from "@/assets/elegance-cover.webp";

import fume1 from "@/assets/box-fume-1.webp";
import fume2 from "@/assets/box-fume-2.webp";
import fume3 from "@/assets/box-fume-3.webp";

export const FOTOS_FUME = [fume1, fume2, fume3];
export const FOTOS_INCOLOR = [flexCover, pisoTetoCover, tradCover, eleganceCover, flex1];

// Galerias reais por modelo (reaproveitadas das páginas de modelo)
export const FOTOS_MODELO = {
  flex: [flexCover, flex1, flex2, flex3, flex4, flex5],
  pisoTeto: [pisoTetoCover, pisoTeto2, pisoTeto3, pisoTeto4],
  tradicional: [tradCover, tradCorrer, tradCanto, tradAbrir],
  elegance: [eleganceCover, elegance1, elegance2, elegance3, elegance4],
} as const;
