export function choixVersion(payload) {
    return { type: "CHOIX_VERSION", payload }
  };

export function choixCouleur(payload) {
  return { type: "CHOIX_COULEUR", payload }
};

export function choixJantes(payload) {
  return { type: "CHOIX_JANTES", payload }
};

export function choixSellerie(payload) {
    return { type: "CHOIX_SELLERIE", payload }
};

export function choixEquipements(payload) {
    return { type: "CHOIX_EQUIPEMENTS", payload }
};
export function suppressionEquipements(payload) {
  return { type: "SUPPRESSION_EQUIPEMENTS", payload }
};

export function choixAccessoires(payload) {
    return { type: "CHOIX_ACCESSOIRES", payload }
};

export function suppressionAccessoires(payload) {
  return { type: "SUPPRESSION_ACCESSOIRES", payload }
};