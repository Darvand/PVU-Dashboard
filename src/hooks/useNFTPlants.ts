import { plantStats } from "../constants/plants";
import { Plant, PlantQuality, PlantStats, PlantType } from "../types";

const getQuality = (le: number, hours: number): PlantQuality => {
  const qualityRatio = le / hours;
  if (qualityRatio < 7) {
    return "Very Low";
  }
  if (qualityRatio < 8) {
    return "Low";
  }
  if (qualityRatio < 10) {
    return "Normal";
  }
  if (qualityRatio < 12) {
    return "Good";
  }
  return "Very Good";
};

interface PartialPlant {
  rarity: Plant["rarity"];
  le: Plant["production"]["le"];
}

const getPartialPlant = (
  plantStat: PlantStats,
  rarityMultiplier: number
): PartialPlant => {
  if (rarityMultiplier >= 0 && rarityMultiplier <= 59) {
    return {
      rarity: "Common",
      le: plantStat.LE + rarityMultiplier * plantStat.up,
    };
  }
  if (rarityMultiplier >= 60 && rarityMultiplier <= 88) {
    return {
      rarity: "Uncommon",
      le: plantStat.LE2 + (rarityMultiplier - 60) * plantStat.up,
    };
  }
  if (rarityMultiplier >= 89 && rarityMultiplier <= 98) {
    return {
      rarity: "Rare",
      le: plantStat.LE3 + (rarityMultiplier - 89) * plantStat.up,
    };
  }
  return {
    rarity: "Mythic",
    le: plantStat.LE4,
  };
};

const transformNFT = (nft: string): Plant => {
  const typeId = Number(nft.substring(0, 3));
  const plantId = Number(nft.substring(3, 5));
  // const rarityId = Number(nft.substring(5, 6));
  const rarityMultiplier = Number(nft.substring(6, 8));

  const type: PlantType = typeId >= 100 && typeId < 200 ? "Plant" : "Tree";
  const plantStat =
    plantStats.find((plantStat) => Number(plantStat.plantId) === plantId) ||
    plantStats[0];
  const partialPlant = getPartialPlant(plantStat, rarityMultiplier);
  return {
    id: plantId,
    element: plantStat.element,
    nftId: nft,
    rarity: partialPlant.rarity,
    type,
    production: {
      hours: plantStat.hours,
      le: partialPlant.le,
      quality: getQuality(partialPlant.le, plantStat.hours),
    },
  };
};

export const useNFTPlants = (nfts: string[]): Plant[] => nfts.map(transformNFT);
