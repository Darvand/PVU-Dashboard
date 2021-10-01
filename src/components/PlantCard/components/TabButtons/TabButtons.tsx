import React from "react";
import { TabProps } from "../Tab/Tab";
import { GrFormAdd } from "react-icons/gr";
import "./TabButtons.scss";

interface Props {
  data: TabProps["data"][];
  changeTab: (id: number) => void;
  activeTab: number;
}

const TabButtons = ({ data, changeTab, activeTab }: Props) => {
  return (
    <div className="tab-buttons">
      {data.map(({ label: icon, id }) => (
        <button
          className={`tab-button ${id === activeTab ? "active" : ""}`}
          onClick={() => changeTab(id)}
          key={id}
        >
          <p className="tab-icon">{icon}</p>
        </button>
      ))}
      {/* <button>
        <GrFormAdd />
      </button> */}
    </div>
  );
};

export default TabButtons;
