import { Elements, PlantQuality, PlantType, Rarity } from "../types";

export const SPANISH_ELEMENTS: Record<Elements, string> = {
  Metal: "Metal",
  Electro: "Electrico",
  Dark: "Oscuridad",
  Fire: "Fuego",
  Ice: "Hielo",
  Light: "Luz",
  Parasite: "Parasito",
  Water: "Agua",
  Wind: "Viento",
};

export const SPANISH_RARITY: Record<Rarity, string> = {
  Common: "Comun",
  Uncommon: "Poco comun",
  Rare: "Rara",
  Mythic: "Mitica",
};

export const SPANISH_QUALITY: Record<PlantQuality, string> = {
  "Very Low": "Muy baja",
  Low: "Baja",
  Normal: "Decente",
  Good: "Buena",
  "Very Good": "Excelente",
};

export const SPANISH_TYPE: Record<PlantType, string> = {
  Plant: "Planta",
  Tree: "Arbol",
};
