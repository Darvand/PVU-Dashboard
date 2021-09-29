import React, { ReactElement } from "react";
import { Plant } from "../../../../types";
import "./PlantImage.scss";

interface PlantImageProps {
  id: Plant["id"];
  rarity: Plant["rarity"];
  type: Plant["type"];
}

const getRarityId: Record<Plant["rarity"], number> = {
  Common: 1,
  Uncommon: 2,
  Rare: 2,
  Mythic: 3,
};

const PlantImage = ({ id, rarity, type }: PlantImageProps): ReactElement => {
  const rarityId = getRarityId[rarity];
  const plantType = type === "Plant" ? "plant" : "mtree";
  return (
    <img
      src={`https://pvuresources.s3.ap-southeast-2.amazonaws.com/icon/${plantType}/${id}_${rarityId}.png`}
      alt="Plant Icon"
      className="plant-icon"
    />
  );
};

export default PlantImage;
