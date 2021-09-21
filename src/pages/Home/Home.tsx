import React, { ReactChild, ReactElement, useState } from "react";
import PlantCard from "../../components/PlantCard/PlantCard";
import "./Home.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNFTPlants } from "../../hooks/useNFTPlants";

interface AddPlantProps {
  addPlant: (nft: number) => void;
}

const AddPlant = ({ addPlant }: AddPlantProps): ReactElement => {
  return (
    <div className="add-plant-container" onClick={() => addPlant(1002726936)}>
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzgiIGhlaWdodD0iNzgiIHZpZXdCb3g9IjAgMCA3OCA3OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzkiIGN5PSIzOSIgcj0iMzgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iNCAxMiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM5IDI3QzM3LjY3NDUgMjcgMzYuNiAyOC4wNzQ1IDM2LjYgMjkuNFYzNi42SDI5LjRDMjguMDc0NSAzNi42IDI3IDM3LjY3NDUgMjcgMzlDMjcgNDAuMzI1NSAyOC4wNzQ1IDQxLjQgMjkuNCA0MS40SDM2LjZWNDguNkMzNi42IDQ5LjkyNTUgMzcuNjc0NSA1MSAzOSA1MUM0MC4zMjU1IDUxIDQxLjQgNDkuOTI1NSA0MS40IDQ4LjZWNDEuNEg0OC42QzQ5LjkyNTUgNDEuNCA1MSA0MC4zMjU1IDUxIDM5QzUxIDM3LjY3NDUgNDkuOTI1NSAzNi42IDQ4LjYgMzYuNkg0MS40VjI5LjRDNDEuNCAyOC4wNzQ1IDQwLjMyNTUgMjcgMzkgMjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
        alt=""
      />
    </div>
  );
};

interface ModalProps {
  show: boolean;
  children: ReactChild;
}

const Modal = ({ show, children }: ModalProps): ReactElement => {
  if (!show) return <></>;
  return <div className="modal-container">{children}</div>;
};

export default function Home(): ReactElement {
  const [nftInput, setNftInput] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [nfts, setNfts] = useLocalStorage<number[]>("nfts", []);
  const plants = useNFTPlants(nfts.map((nft) => String(nft)));
  const addPlant = () => {
    setShowModal(false);
    if (!nftInput) return;
    const nft = Number(nftInput);
    if (nfts.some((storedNft) => storedNft === nft)) return;
    setNfts([...nfts, nft]);
    setNftInput("");
  };

  const removePlant = (removedNft: number) => {
    const newNfts = nfts.filter((nft) => nft !== removedNft);
    setNfts(newNfts);
  };

  return (
    <div className="home-container">
      <Modal show={showModal}>
        <div className="add-plant-modal">
          <p className="text">Ingresa el NFT</p>
          <input
            className="modal-input"
            type="text"
            placeholder="Ejemplo: 1002726936"
            value={nftInput}
            onChange={(e) => setNftInput(e.target.value)}
          />
          <button className="modal-button" onClick={() => addPlant()}>
            Agregar
          </button>
        </div>
      </Modal>
      {plants.map((plant) => (
        <PlantCard plant={plant} removePlant={removePlant} key={plant.nftId} />
      ))}
      <AddPlant addPlant={() => setShowModal(true)} />
    </div>
  );
}
