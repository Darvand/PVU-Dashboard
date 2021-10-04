export interface Production {
  le: number;
  hours: number;
}

export interface Plant {
  production: Production;
  element: string;
  type: string;
  rarity: number;
  isSunflower: boolean;
  icon: string;
}

export interface Data {
  needWater: boolean;
  hasSeed: boolean;
  hasCrow: boolean;
  harvestTime: number;
  timeStoped: number;
  plant: Plant;
}

export interface FarmResponse {
  name: string;
  data: Data[];
  stats: {
    currentLE: number;
    currentSunflower: number;
    stimatedHoursIncludingPVU: number;
    stimatedHoursNotIncludingPVU: number;
  };
}

export interface FarmStored {
  token: string;
  name: string;
}
