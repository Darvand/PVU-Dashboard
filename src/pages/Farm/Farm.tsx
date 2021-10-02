import React, { ReactChild, useEffect, useState } from "react";
import { FaPlus, FaWindowClose } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { TabButton } from "../../components/Card/components/TabButton";
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
  closeModal: () => void;
}

const Modal = ({ show, children, closeModal }: ModalProps) => {
  if (!show) return <></>;
  return (
    <div className="fixed top-0 left-0 w-full h-full z-30 bg-opacity-70 flex justify-center items-center bg-gray-600 ">
      <div className="relative w-9/12 bg-gray-900 rounded-2xl">
        <div
          className="absolute top-0 right-0 text-xl text-gray-50 p-3"
          onClick={closeModal}
        >
          <FaWindowClose />
        </div>
        <div className="pt-10"></div>
        {children}
      </div>
    </div>
  );
};

const Farm = (props: Props) => {
  const [farmData, setFarmData] = useState<FarmResponse[]>([]);
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
      setFarmData(farm);
    }
  }, [farm]);
  return (
    <div className="pt-4">
      <Modal show={showModal} closeModal={() => setShowModal(false)}>
        <div className="w-full p-8 flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col justify-center items-center">
            <input
              className="text-sm p-2 text-gray-700 rounded-md"
              type="text"
              placeholder="Ejemplo: eyJhbGciOiJI..."
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <p className="text-sm text-gray-50">Ingresa el token</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              className="text-sm p-2 text-gray-700 rounded-md"
              type="text"
              placeholder="Ejemplo: Mi farm"
              value={farmName}
              onChange={(e) => setFarmName(e.target.value)}
            />
            <p className="text-sm text-gray-50">Ingresa el nombre</p>
          </div>
          <Button onClick={() => addFarm()} label="Agregar" />
        </div>
      </Modal>
      {loading && (
        <div className="text-9xl flex justify-center text-gray-50 mt-20 transition animate-spin">
          <AiOutlineLoading3Quarters />
        </div>
      )}
      {farmData.length === 0 && (
        <Tabs
          topTabs
          tabButton={{ icon: FaPlus, onClick: () => setShowModal(true) }}
        >
          {farmData.map((tabFarm, index) => (
            <Tab data={{ label: tabFarm.name, id: index }} key={index}>
              <div className="flex flex-col items-center pt-3 bg-gray-600 pb-5">
                <div className="flex flex-wrap gap-5 pb-5 items-center justify-center">
                  {!loading &&
                    tabFarm.data.map((plantData, index) => (
                      <Card plantData={plantData} key={index} />
                    ))}
                </div>
                <Button
                  onClick={() => removeFarm(tabFarm.name)}
                  label="Remover"
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
