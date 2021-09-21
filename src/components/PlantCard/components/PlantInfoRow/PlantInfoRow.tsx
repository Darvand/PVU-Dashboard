import React, { ReactChild, ReactElement } from "react";
import "./PlantInfoRow.scss";

interface PlantInfoRowProps {
  field: string;
  children: ReactChild;
}

const PlantInfoRow = ({ field, children }: PlantInfoRowProps): ReactElement => {
  return (
    <div className="stats-row">
      <span className="subtext">{field}: </span>
      {children}
    </div>
  );
};

export default PlantInfoRow;
