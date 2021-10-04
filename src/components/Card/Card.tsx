import React, { useContext } from "react";
import { AppContext } from "../../store/context";
import { FarmResponse } from "../../types/farm";
import { CardIcon } from "./components/CardIcon";
import { CardInfo } from "./components/CardInfo";

import { DateTime, Interval } from "luxon";

interface CardProps {
  plantData: FarmResponse["data"][0];
}

const HOURS_ON_MONTH = 24 * 30;
const LE_SMALL_POT = 50;
const LE_BIG_POT = 100;

const calculateTimeStoped = (value: number) => {
  const hours = Math.floor(value);
  const minutes = 60 * (value - hours);
  return `${hours}h ${Math.floor(minutes)}m`;
};

const leSpendOnPotsMonthly = (hours: number, isSunflower: boolean) => {
  if (!isSunflower) return LE_BIG_POT;
  return (hours / HOURS_ON_MONTH) * LE_SMALL_POT;
};

const calculateLeMonthly = (plant: CardProps["plantData"]["plant"]) => {
  const {
    isSunflower,
    production: { le, hours },
  } = plant;
  const leMonthly = (le / hours) * 24 * 30;
  const totalLeMonthly = leMonthly - leSpendOnPotsMonthly(hours, isSunflower);
  return totalLeMonthly;
};

const harvestColor = (harvestTime: DateTime) => {
  const now = DateTime.now();
  const isPassedHaverstTime = harvestTime > now;
  const differenceInHours = isPassedHaverstTime
    ? Interval.fromDateTimes(now, harvestTime).length("hours")
    : 0;
  if (differenceInHours > 24) return "bg-gray-700";
  if (harvestTime.day !== now.day) return "bg-gray-700";
  return differenceInHours > 0 ? "bg-green-900" : "bg-green-600";
};

const Card = ({ plantData }: CardProps) => {
  const { state } = useContext(AppContext);
  const { hours, le } = plantData.plant.production;
  const leMonthly = calculateLeMonthly(plantData.plant);
  const pvuMonthly = (leMonthly / 550) * 0.95;
  const harvestTime = DateTime.fromMillis(plantData.harvestTime);
  const harvestTimeFormatted = harvestTime.toLocaleString(
    DateTime.DATETIME_MED
  );
  const bgColor = harvestColor(harvestTime);
  return (
    <div className="bg-gray-800 w-80 rounded-xl" style={{ height: "400px" }}>
      <div
        className={`font-sans text-gray-50 h-1/3 flex justify-around items-center rounded-t-xl rounded-tl-xl p-3 ${bgColor}`}
      >
        <div className="grid-cols-2 grid-rows-2 grid gap-2">
          <CardIcon active={plantData.needWater} icon="Water" />
          <CardIcon active={plantData.hasCrow} icon="Crow" />
          <CardIcon active={plantData.hasSeed} icon="Seed" />
        </div>
        <div className="w-28 right-7 top-8 ">
          <img
            src={plantData.plant.icon}
            alt="Plant Icon"
            className="absolute z-10 w-auto h-auto"
            style={{ maxWidth: "112px", maxHeight: "112px" }}
          />
          <img
            src={plantData.plant.icon}
            alt="Plant Icon"
            className="filter brightness-0 transform scale-105 w-auto h-auto"
            style={{ maxWidth: "112px", maxHeight: "112px" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 h-2/3 rounded-b-xl rounded-bl-xl p-3 items-center">
        <CardInfo
          title="Cosechable el"
          value={harvestTimeFormatted}
          colSpan={2}
        />
        <CardInfo
          title="Tiempo detenido"
          value={calculateTimeStoped(plantData.timeStoped)}
        />
        <CardInfo title="Produccion" value={`${le}LE/${hours}Horas`} />
        <CardInfo
          title="Relacion"
          value={`${(le / hours).toFixed(2)}LE/Hora`}
        />
        <CardInfo title="LE Mensual" value={leMonthly.toFixed(2)} />
        <CardInfo title="PVU Mensual" value={`${pvuMonthly.toFixed(2)} PVU`} />
        <CardInfo
          title="Ganancia Mensual"
          value={`${(pvuMonthly * state.PVU.price).toFixed(2)} USD`}
        />
      </div>
    </div>
  );
};

export default Card;
