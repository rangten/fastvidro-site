// Fotos reais reaproveitadas das páginas de modelos
import flex1 from "@/assets/flex-1.png";
import flex2 from "@/assets/flex-2.png";
import flex3 from "@/assets/flex-3.png";
import flex4 from "@/assets/flex-4.png";
import flex5 from "@/assets/flex-5.png";
import flexCover from "@/assets/flex-cover.png";

import pisoTeto2 from "@/assets/piso-teto-2.png";
import pisoTeto3 from "@/assets/piso-teto-3.png";
import pisoTeto4 from "@/assets/piso-teto-4.png";
import pisoTetoCover from "@/assets/piso-teto-cover.png";

import tradCanto from "@/assets/tradicional-canto.png";
import tradAbrir from "@/assets/tradicional-abrir.png";
import tradCorrer from "@/assets/tradicional-correr.png";
import tradCover from "@/assets/tradicional-cover.png";

import elegance1 from "@/assets/elegance-1.png";
import elegance2 from "@/assets/elegance-2.png";
import elegance3 from "@/assets/elegance-3.png";
import elegance4 from "@/assets/elegance-4.png";
import eleganceCover from "@/assets/elegance-cover.png";

import fume1 from "@/assets/box-fume-1.png";
import fume2 from "@/assets/box-fume-2.png";
import fume3 from "@/assets/box-fume-3.png";

export const FOTOS_FUME = [fume1, fume2, fume3];
export const FOTOS_INCOLOR = [flexCover, pisoTetoCover, tradCover, eleganceCover, flex1];

// Galerias reais por modelo (reaproveitadas das páginas de modelo)
export const FOTOS_MODELO = {
  flex: [flexCover, flex1, flex2, flex3, flex4, flex5],
  pisoTeto: [pisoTetoCover, pisoTeto2, pisoTeto3, pisoTeto4],
  tradicional: [tradCover, tradCorrer, tradCanto, tradAbrir],
  elegance: [eleganceCover, elegance1, elegance2, elegance3, elegance4],
} as const;
