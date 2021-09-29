import React, { ReactElement } from "react";
import {
  RARITY_COLORS,
  SPANISH_QUALITY,
  SPANISH_RARITY,
  SPANISH_TYPE,
} from "../../../../constants";
import { Plant } from "../../../../types";
import ElementLabel from "../../../ElementLabel/ElementLabel";
import PlantImage from "../PlantImage/PlantImage";
import PlantInfoRow from "../PlantInfoRow/PlantInfoRow";
import "./PlantInfo.scss";

interface PlantInfoProps {
  plant: Plant;
}

const PlantInfo = ({ plant }: PlantInfoProps): ReactElement => {
  return (
    <div className="plant-info">
      <PlantImage id={plant.id} rarity={plant.rarity} type={plant.type} />
      <div className="stats-container">
        <PlantInfoRow field="Tipo">
          <div className="type-label">
            <p className="text">{SPANISH_TYPE[plant.type]}</p>
          </div>
        </PlantInfoRow>
        <PlantInfoRow field="Elemento">
          <ElementLabel element={plant.element} />
        </PlantInfoRow>
        <PlantInfoRow field="Rareza">
          <div className="type-label">
            <p style={{ color: RARITY_COLORS[plant.rarity] }}>
              {SPANISH_RARITY[plant.rarity]}
            </p>
          </div>
        </PlantInfoRow>
        <PlantInfoRow field="Calidad">
          <div className="type-label">
            <p className="text">{SPANISH_QUALITY[plant.production.quality]}</p>
          </div>
        </PlantInfoRow>
        <PlantInfoRow field="LE/Hora">
          <div className="type-label">
            <p className="text">
              {(plant.production.le / plant.production.hours).toFixed(2)}
            </p>
          </div>
        </PlantInfoRow>
        <div className="stats-row" style={{ alignSelf: "center" }}>
          <span className="subtext">{`${plant.production.le}LE/${plant.production.hours}Horas`}</span>
        </div>
      </div>
    </div>
  );
};

export default PlantInfo;
