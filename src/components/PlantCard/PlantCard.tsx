import React, { ReactElement } from "react";
import { useGreenhouseProbability } from "../../hooks/useGreenhouseProbability";
import { Plant } from "../../types";
import PlantInfo from "./components/PlantInfo/PlantInfo";
import "./PlantCard.scss";

interface PlantCardProps {
  plant: Plant;
  removePlant: (nft: number) => void;
}

const PlantCard = ({ plant, removePlant }: PlantCardProps): ReactElement => {
  const { againstProbability, inFavorProbability, neutralProbability } =
    useGreenhouseProbability(plant);
  console.log(againstProbability, inFavorProbability, neutralProbability);
  return (
    <div className="plant-container">
      <span className="remove" onClick={() => removePlant(Number(plant.nftId))}>
        X
      </span>
      <PlantInfo plant={plant} />
      <div className="plant-greenhouse">
        <span className="use-greenhouse-span">
          {againstProbability > 0.2
            ? "Usar invernadero"
            : "No usar invernadero"}
        </span>
        <div className="greenhouse-probability">
          <span style={{ color: "green" }}>
            {(inFavorProbability * 100).toFixed(2)}%
          </span>
          <span style={{ color: "red" }}>
            {(againstProbability * 100).toFixed(2)}%
          </span>
          <span style={{ color: "gray" }}>
            {(neutralProbability * 100).toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
