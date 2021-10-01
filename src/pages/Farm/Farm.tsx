import React, { ReactChild, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { Tab } from "../../components/PlantCard/components/Tab/Tab";
import Tabs from "../../components/PlantCard/components/Tabs/Tabs";
import { useFarmAPI } from "../../hooks/useFarmAPI";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { FarmResponse, FarmStored } from "../../types/farm";

import "./Farm.scss";

interface Props {}

interface ModalProps {
  show: boolean;
  children: ReactChild;
}

const Modal = ({ show, children }: ModalProps) => {
  if (!show) return <></>;
  return <div className="modal-container">{children}</div>;
};

const Farm = (props: Props) => {
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
    console.log(farm);
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
              <div className="flex flex-col items-center pt-3">
                <div className="farm-container">
                  {!loading &&
                    tabFarm.data.map((plantData, index) => (
                      <Card plantData={plantData} key={index} />
                    ))}
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
