import React, { ReactElement } from "react";
import { Plant } from "../../types";
import Greenhouse from "./components/Greenhouse/Greenhouse";
import PlantInfo from "./components/PlantInfo/PlantInfo";
import { Tab } from "./components/Tab/Tab";
import Tabs from "./components/Tabs/Tabs";
import "./PlantCard.scss";

interface PlantCardProps {
  plant: Plant;
  removePlant: (nft: number) => void;
}

const PlantCard = ({ plant, removePlant }: PlantCardProps): ReactElement => {
  return (
    <div className="plant-container">
      <span className="remove" onClick={() => removePlant(Number(plant.nftId))}>
        X
      </span>
      <Tabs>
        <Tab data={{ label: "General", id: 1 }}>
          <PlantInfo plant={plant} />
        </Tab>
        <Tab data={{ label: "Invernadero", id: 2 }}>
          <div className="flex justify-center align-center text fh">
            <Greenhouse plant={plant} />
          </div>
        </Tab>
        <Tab data={{ label: "Ganancia", id: 3 }}>
          <div
            className="flex justify-center align-center text fh"
            style={{ textAlign: "center", padding: "10px 20px" }}
          >
            Pronto podras conocer las ganancias de esta planta
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PlantCard;
