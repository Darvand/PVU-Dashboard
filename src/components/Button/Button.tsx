import React from "react";
import "./Button.scss";

interface Props {
  onClick: () => void;
  label: string;
}

const Button = ({ onClick, label }: Props) => {
  return (
    <button
      onClick={onClick}
      className="text-sm pt-3 pb-3 pl-7 pr-7 font-bold bg-blue-700 text-gray-50 cursor-pointer"
    >
      {label}
    </button>
  );
};

export default Button;
