import React from "react";
import { TabProps } from "../Tab/Tab";
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
          {/* <img src={icon} alt="Icon Tab" className="tab-icon" /> */}
          <p className="tab-icon">{icon}</p>
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
