import React from "react";
import { TabProps } from "../Tab/Tab";
import { IconType } from "react-icons";
import { IconContext } from "react-icons/lib";

interface Props {
  data: TabProps["data"][];
  changeTab: (id: number) => void;
  activeTab: number;
  tabButton?: {
    icon: IconType;
    onClick: () => void;
  };
}

const TabButtons = ({ data, changeTab, activeTab, tabButton }: Props) => {
  return (
    <div className="flex justify-center">
      {data.map(({ label: icon, id }) => (
        <button
          className={`cursor-pointer w-full ${
            id === activeTab ? "bg-gray-600" : "bg-gray-900"
          } rounded-t-3xl rounded-tl-3xl`}
          onClick={() => changeTab(id)}
          key={id}
        >
          <p className="pt-2 pb-2 text-sm text-gray-50">{icon}</p>
        </button>
      ))}
      {tabButton && (
        <div
          className="text-base rounded-t-xl p-4 bg-blue-900 text-gray-50 cursor-pointer"
          onClick={tabButton.onClick}
        >
          <tabButton.icon />
        </div>
      )}
    </div>
  );
};

export default TabButtons;
