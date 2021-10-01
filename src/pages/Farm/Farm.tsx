import React, { ReactChild, useContext, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import PlantInfoRow from "../../components/PlantCard/components/PlantInfoRow/PlantInfoRow";
import { Tab } from "../../components/PlantCard/components/Tab/Tab";
import Tabs from "../../components/PlantCard/components/Tabs/Tabs";
import { useFarmAPI } from "../../hooks/useFarmAPI";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AppContext } from "../../store/context";
import { FarmResponse, FarmStored } from "../../types/farm";
import PlantIconRow from "./components/PlantIconRow/PlantIconRow";

import "./Farm.scss";

interface Props {}

interface PlantInfoRowValueProps {
  value: string;
}
const PlantInfoRowValue = ({ value }: PlantInfoRowValueProps) => {
  return (
    <div className="row-label">
      <p className="text">{value}</p>
    </div>
  );
};

const calculateTimeStoped = (value: number) => {
  const hours = Math.floor(value);
  const minutes = 60 * (value - hours);
  return `${hours}h ${Math.floor(minutes)}m`;
};

const HOURS_ON_MONTH = 24 * 30;
const LE_SMALL_POT = 50;
const LE_BIG_POT = 100;

const leSpendOnPotsMonthly = (hours: number, isSunflower: boolean) => {
  if (!isSunflower) return LE_BIG_POT;
  return (hours / HOURS_ON_MONTH) * LE_SMALL_POT;
};

const calculateLeMonthly = (plant: FarmResponse["data"][0]["plant"]) => {
  const {
    isSunflower,
    production: { le, hours },
  } = plant;
  const leMonthly = (le / hours) * 24 * 30;
  const totalLeMonthly = leMonthly - leSpendOnPotsMonthly(hours, isSunflower);
  return totalLeMonthly;
};

interface ModalProps {
  show: boolean;
  children: ReactChild;
}

const Modal = ({ show, children }: ModalProps) => {
  if (!show) return <></>;
  return <div className="modal-container">{children}</div>;
};

const Farm = (props: Props) => {
  const { state, dispatch } = useContext(AppContext);
  const [farmData, setFarm] = useState<FarmResponse[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [farms, setFarms] = useLocalStorage<FarmStored[]>("farms", []);
  const [token, setToken] = useState("");
  const [farmName, setFarmName] = useState("");
  const { farm, error, loading } = useFarmAPI(farms);

  const addFarm = () => {
    setShowModal(false);
    if (!token && !farmName) return;
    if (farms.some((storedFarm) => storedFarm.token === token)) return;
    setFarms([...farms, { token, name: farmName }]);
    setToken("");
    setFarmName("");
  };

  const removeFarm = (toRemoveFarmName: string) => {
    const newFarms = farms.filter(
      (storedFarm) => storedFarm.name !== toRemoveFarmName
    );
    setFarms(newFarms);
  };

  useEffect(() => {
    if (farm !== null) {
      setFarm(farm);
    }
  }, [farm]);
  return (
    <div>
      <Button onClick={() => setShowModal(true)} label="Agregar farm" />
      <Modal show={showModal}>
        <div className="add-plant-modal">
          <p className="text">Ingresa el token</p>
          <input
            className="modal-input"
            type="text"
            placeholder="Ejemplo: eyJhbGciOiJI..."
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <p className="text">Ingresa el nombre</p>
          <input
            className="modal-input"
            type="text"
            placeholder="Ejemplo: Mi farm"
            value={farmName}
            onChange={(e) => setFarmName(e.target.value)}
          />
          <button className="modal-button" onClick={() => addFarm()}>
            Agregar
          </button>
        </div>
      </Modal>
      {farmData.length > 0 && (
        <Tabs topTabs>
          {farmData.map((tabFarm, index) => (
            <Tab data={{ label: tabFarm.name, id: index }} key={index}>
              <div className="flex-column align-center">
                <div className="farm-container">
                  {!loading &&
                    tabFarm.data.map((plantData, index) => {
                      const { hours, le } = plantData.plant.production;
                      const leMonthly = calculateLeMonthly(plantData.plant);
                      const pvuMonthly = (leMonthly / 500) * 0.95;
                      return (
                        <div className="plant-card-container" key={index}>
                          <div className="flex align-center">
                            <img
                              src={plantData.plant.icon}
                              alt="Plant Icon"
                              className="plant-card-image"
                            />
                          </div>
                          <div className="flex-column plant-info-container wf">
                            <PlantIconRow
                              needWater={plantData.needWater}
                              hasCrow={plantData.hasCrow}
                              hasSeed={plantData.hasSeed}
                            />
                            <PlantInfoRow field="Cosechable el">
                              <PlantInfoRowValue
                                value={plantData.harvestTime}
                              />
                            </PlantInfoRow>
                            <PlantInfoRow field="Tiempo detenido">
                              <PlantInfoRowValue
                                value={calculateTimeStoped(
                                  plantData.timeStoped
                                )}
                              />
                            </PlantInfoRow>
                            <PlantInfoRow field="Produccion">
                              <PlantInfoRowValue
                                value={`${le}LE/${hours}Horas`}
                              />
                            </PlantInfoRow>
                            <PlantInfoRow field="Relacion">
                              <PlantInfoRowValue
                                value={`${(le / hours).toFixed(2)}LE/Hora`}
                              />
                            </PlantInfoRow>
                            <PlantInfoRow field="LE Mensual">
                              <PlantInfoRowValue value={leMonthly.toFixed(2)} />
                            </PlantInfoRow>
                            <PlantInfoRow field="PVU Mensual">
                              <PlantInfoRowValue
                                value={`${pvuMonthly.toFixed(2)} PVU`}
                              />
                            </PlantInfoRow>
                            <PlantInfoRow field="Ganancia Mensual">
                              <PlantInfoRowValue
                                value={`${(
                                  pvuMonthly * state.PVU.price
                                ).toFixed(2)} USD`}
                              />
                            </PlantInfoRow>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <Button
                  onClick={() => removeFarm(tabFarm.name)}
                  label="Remover Farm"
                />
              </div>
            </Tab>
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default Farm;
