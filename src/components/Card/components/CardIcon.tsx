import React from "react";
interface CardIconProps {
  active: boolean;
  icon: "Water" | "Crow" | "Seed";
}

const urlIcon: Record<CardIconProps["icon"], string> = {
  Seed: "https://marketplace.plantvsundead.com/_nuxt/img/offering_seed.97319d5.svg",
  Water: "https://marketplace.plantvsundead.com/_nuxt/img/water@3x.22b98e2.png",
  Crow: "https://marketplace.plantvsundead.com/_nuxt/img/scarecrow@3x.50e7720.png",
};

export const CardIcon = ({ icon, active }: CardIconProps) => {
  return (
    <img
      src={urlIcon[icon]}
      alt={`${icon} icon`}
      className={`w-11 h-11 bg-gray-800 rounded-md ${
        icon === "Seed" && "p-1"
      } filter ${active ? "brightness-100" : "brightness-50"}`}
    />
  );
};
