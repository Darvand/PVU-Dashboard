import React from "react";
import "./Button.scss";

interface Props {
  onClick: () => void;
  label: string;
}

const Button = ({ onClick, label }: Props) => {
  return (
    <button onClick={onClick} className="primary-button">
      {label}
    </button>
  );
};

export default Button;
