import { PlantStats } from "../types";

export enum PlantType {
  FIRE = "Fuego",
  WATER = "Agua",
  WIND = "Viento",
  ELECTRO = "Electrico",
  ICE = "Hielo",
  LIGHT = "Luz",
  DARK = "Oscuro",
  METAL = "Metal",
  PARASITE = "Parasito",
}

export enum PlantRarity {
  COMMON = "Comun",
  UNCOMMON = "No comun",
  RARE = "Rara",
  MYTICAL = "Mitica",
}

export const PLANT_RARITIES = [
  {
    rarity: PlantRarity.COMMON,
    id: 1,
  },
  {
    rarity: PlantRarity.UNCOMMON,
    id: 2,
  },
  {
    rarity: PlantRarity.RARE,
    id: 2,
  },
  {
    rarity: PlantRarity.MYTICAL,
    id: 3,
  },
];

const FirePlants: Partial<Plant>[] = Array.from([0, 1, 7, 17, 30]).map(
  (id) => ({
    id,
    type: PlantType.FIRE,
  })
);

const WaterPlants: Partial<Plant>[] = Array.from([4, 5, 36, 38, 39]).map(
  (id) => ({
    id,
    type: PlantType.WATER,
  })
);

const WindPlants: Partial<Plant>[] = Array.from([9, 10, 16, 37]).map((id) => ({
  id,
  type: PlantType.WIND,
}));

const ElectroPlants: Partial<Plant>[] = Array.from([3, 8, 15, 32, 34]).map(
  (id) => ({
    id,
    type: PlantType.ELECTRO,
  })
);

const IcePlants: Partial<Plant>[] = Array.from([2, 6, 29]).map((id) => ({
  id,
  type: PlantType.ICE,
}));

const LightPlants: Partial<Plant>[] = Array.from([18, 19, 20, 21]).map(
  (id) => ({
    id,
    type: PlantType.LIGHT,
  })
);

const DarkPlants: Partial<Plant>[] = Array.from([14, 31, 33, 35]).map((id) => ({
  id,
  type: PlantType.DARK,
}));

const MetalPlants: Partial<Plant>[] = Array.from([25, 26, 27, 28]).map(
  (id) => ({
    id,
    type: PlantType.METAL,
  })
);

const ParasitePlants: Partial<Plant>[] = Array.from([
  11, 12, 13, 22, 23, 24,
]).map((id) => ({
  id,
  type: PlantType.PARASITE,
}));

export interface Plant {
  id: number;
  type: PlantType;
  rarity: PlantRarity;
}

export const PLANTS_BY_TYPE = [
  FirePlants,
  WaterPlants,
  WindPlants,
  ElectroPlants,
  IcePlants,
  LightPlants,
  DarkPlants,
  MetalPlants,
  ParasitePlants,
];

export const PLANTS = FirePlants.concat(WaterPlants)
  .concat(WindPlants)
  .concat(ElectroPlants)
  .concat(IcePlants)
  .concat(LightPlants)
  .concat(DarkPlants)
  .concat(MetalPlants)
  .concat(ParasitePlants);

export const plantStats: PlantStats[] = [
  {
    plantId: "93",
    element: "Dark",
    up: 5,
    LE: 2600,
    LE2: 2950,
    LE3: 3150,
    LE4: 3300,
    hours: 216,
  },
  {
    plantId: "90",
    element: "Fire",
    up: 5,
    LE: 750,
    LE2: 1100,
    LE3: 1300,
    LE4: 1500,
    hours: 48,
  },
  {
    plantId: "92",
    element: "Ice",
    up: 5,
    LE: 1050,
    LE2: 1400,
    LE3: 1600,
    LE4: 1800,
    hours: 96,
  },
  {
    plantId: "91",
    element: "Light",
    up: 5,
    LE: 1400,
    LE2: 1750,
    LE3: 1940,
    LE4: 2120,
    hours: 240,
  },
  {
    plantId: "91",
    element: "Light",
    up: 5,
    LE: 1400,
    LE2: 1750,
    LE3: 1940,
    LE4: 2120,
    hours: 240,
  },
  {
    plantId: "00",
    element: "Fire",
    up: 1,
    LE: 400,
    LE2: 500,
    LE3: 600,
    LE4: 800,
    hours: 48,
  },
  {
    plantId: "01",
    element: "Fire",
    up: 1,
    LE: 400,
    LE2: 500,
    LE3: 600,
    LE4: 800,
    hours: 48,
  },
  {
    plantId: "07",
    element: "Fire",
    up: 1,
    LE: 400,
    LE2: 500,
    LE3: 600,
    LE4: 800,
    hours: 48,
  },
  {
    plantId: "17",
    element: "Fire",
    up: 1,
    LE: 650,
    LE2: 760,
    LE3: 900,
    LE4: 1100,
    hours: 72,
  },
  {
    plantId: "30",
    element: "Fire",
    up: 1,
    LE: 650,
    LE2: 760,
    LE3: 900,
    LE4: 1100,
    hours: 72,
  },
  {
    plantId: "04",
    element: "Water",
    up: 1,
    LE: 950,
    LE2: 1100,
    LE3: 1200,
    LE4: 1400,
    hours: 108,
  },
  {
    plantId: "05",
    element: "Water",
    up: 1,
    LE: 950,
    LE2: 1100,
    LE3: 1200,
    LE4: 1400,
    hours: 108,
  },
  {
    plantId: "36",
    element: "Water",
    up: 1,
    LE: 950,
    LE2: 1100,
    LE3: 1200,
    LE4: 1400,
    hours: 108,
  },
  {
    plantId: "38",
    element: "Water",
    up: 1,
    LE: 1050,
    LE2: 1200,
    LE3: 1300,
    LE4: 1500,
    hours: 120,
  },
  {
    plantId: "39",
    element: "Water",
    up: 1,
    LE: 1050,
    LE2: 1200,
    LE3: 1300,
    LE4: 1500,
    hours: 120,
  },
  {
    plantId: "09",
    element: "Wind",
    up: 1,
    LE: 750,
    LE2: 860,
    LE3: 950,
    LE4: 1150,
    hours: 72,
  },
  {
    plantId: "10",
    element: "Wind",
    up: 1,
    LE: 750,
    LE2: 860,
    LE3: 950,
    LE4: 1150,
    hours: 72,
  },
  {
    plantId: "16",
    element: "Wind",
    up: 1,
    LE: 900,
    LE2: 1010,
    LE3: 1100,
    LE4: 1250,
    hours: 96,
  },
  {
    plantId: "37",
    element: "Wind",
    up: 1,
    LE: 900,
    LE2: 1010,
    LE3: 1100,
    LE4: 1250,
    hours: 96,
  },
  {
    plantId: "03",
    element: "Electro",
    up: 1,
    LE: 500,
    LE2: 610,
    LE3: 680,
    LE4: 850,
    hours: 48,
  },
  {
    plantId: "08",
    element: "Electro",
    up: 1,
    LE: 500,
    LE2: 610,
    LE3: 680,
    LE4: 850,
    hours: 48,
  },
  {
    plantId: "15",
    element: "Electro",
    up: 1,
    LE: 500,
    LE2: 610,
    LE3: 680,
    LE4: 850,
    hours: 48,
  },
  {
    plantId: "32",
    element: "Electro",
    up: 1,
    LE: 650,
    LE2: 760,
    LE3: 900,
    LE4: 1100,
    hours: 60,
  },
  {
    plantId: "34",
    element: "Electro",
    up: 1,
    LE: 650,
    LE2: 760,
    LE3: 900,
    LE4: 1100,
    hours: 60,
  },
  {
    plantId: "02",
    element: "Ice",
    up: 1,
    LE: 500,
    LE2: 610,
    LE3: 680,
    LE4: 850,
    hours: 60,
  },
  {
    plantId: "06",
    element: "Ice",
    up: 1,
    LE: 500,
    LE2: 610,
    LE3: 680,
    LE4: 850,
    hours: 60,
  },
  {
    plantId: "29",
    element: "Ice",
    up: 1,
    LE: 800,
    LE2: 910,
    LE3: 1e3,
    LE4: 1250,
    hours: 96,
  },
  {
    plantId: "18",
    element: "Light",
    up: 1,
    LE: 1200,
    LE2: 1310,
    LE3: 1400,
    LE4: 1500,
    hours: 240,
  },
  {
    plantId: "19",
    element: "Light",
    up: 1,
    LE: 1200,
    LE2: 1310,
    LE3: 1400,
    LE4: 1500,
    hours: 240,
  },
  {
    plantId: "20",
    element: "Light",
    up: 1,
    LE: 1600,
    LE2: 1710,
    LE3: 1800,
    LE4: 2e3,
    hours: 312,
  },
  {
    plantId: "21",
    element: "Light",
    up: 1,
    LE: 1600,
    LE2: 1710,
    LE3: 1800,
    LE4: 2e3,
    hours: 312,
  },
  {
    plantId: "14",
    element: "Dark",
    up: 10,
    LE: 1200,
    LE2: 1900,
    LE3: 2300,
    LE4: 2500,
    hours: 192,
  },
  {
    plantId: "31",
    element: "Dark",
    up: 10,
    LE: 1200,
    LE2: 1900,
    LE3: 2300,
    LE4: 2500,
    hours: 192,
  },
  {
    plantId: "33",
    element: "Dark",
    up: 10,
    LE: 1400,
    LE2: 2100,
    LE3: 2500,
    LE4: 2800,
    hours: 216,
  },
  {
    plantId: "35",
    element: "Dark",
    up: 10,
    LE: 1400,
    LE2: 2100,
    LE3: 2500,
    LE4: 2800,
    hours: 216,
  },
  {
    plantId: "25",
    element: "Metal",
    up: 10,
    LE: 3500,
    LE2: 4300,
    LE3: 4800,
    LE4: 5200,
    hours: 336,
  },
  {
    plantId: "26",
    element: "Metal",
    up: 10,
    LE: 3500,
    LE2: 4300,
    LE3: 4800,
    LE4: 5200,
    hours: 336,
  },
  {
    plantId: "27",
    element: "Metal",
    up: 10,
    LE: 5500,
    LE2: 6400,
    LE3: 6800,
    LE4: 7100,
    hours: 480,
  },
  {
    plantId: "28",
    element: "Metal",
    up: 10,
    LE: 5500,
    LE2: 6400,
    LE3: 6800,
    LE4: 7100,
    hours: 480,
  },
  {
    plantId: "11",
    element: "Parasite",
    up: 1,
    LE: 900,
    LE2: 1010,
    LE3: 1100,
    LE4: 1250,
    hours: 120,
  },
  {
    plantId: "12",
    element: "Parasite",
    up: 1,
    LE: 900,
    LE2: 1010,
    LE3: 1100,
    LE4: 1250,
    hours: 120,
  },
  {
    plantId: "13",
    element: "Parasite",
    up: 1,
    LE: 900,
    LE2: 1010,
    LE3: 1100,
    LE4: 1250,
    hours: 120,
  },
  {
    plantId: "22",
    element: "Parasite",
    up: 1,
    LE: 1300,
    LE2: 1410,
    LE3: 1500,
    LE4: 1650,
    hours: 168,
  },
  {
    plantId: "23",
    element: "Parasite",
    up: 1,
    LE: 1300,
    LE2: 1410,
    LE3: 1500,
    LE4: 1650,
    hours: 168,
  },
  {
    plantId: "24",
    element: "Parasite",
    up: 1,
    LE: 1300,
    LE2: 1410,
    LE3: 1500,
    LE4: 1650,
    hours: 168,
  },
];
