/**
 * Fonte única das imagens editoriais do site.
 * Todos os arquivos ficam em /public/images/.
 */

export const heroImage = {
  src: '/images/laboratorio-finatti.jpeg',
  alt: 'Fachada da Finatti Medicina Diagnóstica - Laboratório de Patologia e Citopatologia em Cianorte-PR',
  /** classe Tailwind de object-position (foco da imagem no recorte) */
  objectPosition: 'object-center',
};

/** Imagens (lâminas reais do laboratório) dos 4 cards de serviços. */
export const serviceImages = {
  histopatologia: '/images/servico-histopatologia.jpeg',
  citopatologia: '/images/servico-citopatologia.jpeg',
  imunoHistoquimica: '/images/servico-imuno-histoquimica.jpeg',
  patologiaMolecular: '/images/servico-patologia-molecular.jpeg',
  /**
   * Punção aspirativa por agulha fina. A PAAF está listada como item do card de
   * Citopatologia (mantendo a grade par de 4 cards), então esta imagem fica
   * disponível para uso futuro — ex.: uma página dedicada ao exame.
   */
  paaf: '/images/servico-paaf.jpeg',
};
