import React, { ReactElement } from "react";
import { Plant } from "../../../../types";
import "./PlantImage.scss";

interface PlantImageProps {
  id: Plant["id"];
  rarity: Plant["rarity"];
}

const getRarityId: Record<Plant["rarity"], number> = {
  Common: 1,
  Uncommon: 2,
  Rare: 2,
  Mythic: 3,
};

const PlantImage = ({ id, rarity }: PlantImageProps): ReactElement => {
  const rarityId = getRarityId[rarity];
  return (
    <img
      src={`https://pvuresources.s3.ap-southeast-2.amazonaws.com/icon/plant/${id}_${rarityId}.png`}
      alt="Plant Icon"
      className="plant-icon"
    />
  );
};

export default PlantImage;
