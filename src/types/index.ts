export type Elements =
  | "Metal"
  | "Electro"
  | "Water"
  | "Dark"
  | "Fire"
  | "Ice"
  | "Light"
  | "Parasite"
  | "Wind";
export type PlantType = "Tree" | "Plant";
export type Rarity = "Common" | "Uncommon" | "Rare" | "Mythic";
export type PlantQuality = "Very Low" | "Low" | "Normal" | "Good" | "Very Good";
export type Weather = "Winter" | "Autumn" | "Springer" | "Summer";

export interface Plant {
  nftId: string;
  id: number;
  element: Elements;
  type: PlantType;
  rarity: Rarity;
  production: {
    le: number;
    hours: number;
    quality: PlantQuality;
  };
}

export interface PlantStats {
  plantId: string;
  element: Elements;
  up: number;
  LE: number;
  LE2: number;
  LE3: number;
  LE4: number;
  hours: number;
}

export type WinterEvents =
  | "Volcano"
  | "Earthquake"
  | "Snowy"
  | "Cold Wave"
  | "Winter Storm"
  | "Windy"
  | "Coronal Mass Ejection"
  | "Solar Flares"
  | "Solar Maxima"
  | "Magnetic Reconnection";

export type SpringEvents =
  | "Hurricanes"
  | "Volcano"
  | "Tsunami"
  | "Earthquake"
  | "Rainy"
  | "Sunny"
  | "Cloudy"
  | "Iron Rain"
  | "Locusts Swarm"
  | "Rats Swarm"
  | "Malaria";

export type SummerEvents =
  | "Heat Wave"
  | "Hurricanes"
  | "Thunderstorm"
  | "Volcano"
  | "Tsunami"
  | "Earthquake"
  | "Tornado"
  | "Rainy"
  | "Sunny"
  | "Cloudy"
  | "Locusts Swarm"
  | "Rats Swarm"
  | "Malaria"
  | "Coronal Mass Ejection"
  | "Solar Flares"
  | "Solar Maxima"
  | "Proton Storm";

export type AutumnEvents =
  | "Hurricanes"
  | "Thunderstorm"
  | "Volcano"
  | "Tsunami"
  | "Earthquake"
  | "Tornado"
  | "Flood"
  | "Winter Storm"
  | "Rainy"
  | "Sunny"
  | "Cloudy"
  | "Windy"
  | "Iron Rain"
  | "Moonlight"
  | "Locusts Swarm"
  | "Rats Swarm"
  | "Malaria";

export type Events = WinterEvents | SpringEvents | SummerEvents | AutumnEvents;
