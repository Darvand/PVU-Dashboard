import React, { ReactElement } from "react";
import {
  ELEMENT_ICONS,
  ELEMENT_COLORS,
  SPANISH_ELEMENTS,
} from "../../constants";
import { Elements } from "../../types";
import "./ElementLabel.scss";

interface ElementLabelProps {
  element: Elements;
}

const ElementLabel = ({ element }: ElementLabelProps): ReactElement => {
  return (
    <div
      style={{ backgroundColor: ELEMENT_COLORS[element] }}
      className="type-label"
    >
      <img src={ELEMENT_ICONS[element]} alt={`${element} Icon`} width="20px" />
      <p className="text">{SPANISH_ELEMENTS[element]}</p>
    </div>
  );
};

export default ElementLabel;
