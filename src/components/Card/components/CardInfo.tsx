import React from "react";

interface CardInfoProps {
  colSpan?: number;
  title: string;
  value: string;
}

export const CardInfo = ({ colSpan = 1, title, value }: CardInfoProps) => {
  return (
    <div className={`grid justify-center col-span-${colSpan}`}>
      <span className="text-center text-gray-300 text-sm ">{title}</span>
      <span className="font-bold text-center text-gray-50 text-sm">
        {value}
      </span>
    </div>
  );
};
