import React from "react";
import "./PlantIconRow.scss";

interface PlantIconProps {
  active: boolean;
  icon: "Water" | "Crow" | "Seed";
}

const urlIcon: Record<PlantIconProps["icon"], string> = {
  Seed: "https://marketplace.plantvsundead.com/_nuxt/img/offering_seed.97319d5.svg",
  Water: "https://marketplace.plantvsundead.com/_nuxt/img/water@3x.22b98e2.png",
  Crow: "https://marketplace.plantvsundead.com/_nuxt/img/scarecrow@3x.50e7720.png",
};

const PlantIcon = ({ active, icon }: PlantIconProps) => {
  const url = urlIcon[icon];
  return (
    <div className="flex align-center">
      <img
        src={url}
        alt={`${icon} icon`}
        className={`plant-row-icon ${active ? "border-bottom" : "gray"}`}
        width={icon === "Seed" ? "22px" : "30px"}
      />
    </div>
  );
};

interface Props {
  needWater: boolean;
  hasCrow: boolean;
  hasSeed: boolean;
}

const PlantIconRow = ({ needWater, hasSeed, hasCrow }: Props) => {
  return (
    <div className="flex justify-center">
      <PlantIcon active={needWater} icon="Water" />
      <PlantIcon active={hasSeed} icon="Crow" />
      <PlantIcon active={hasCrow} icon="Seed" />
    </div>
  );
};

export default PlantIconRow;
