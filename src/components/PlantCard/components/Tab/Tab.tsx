import React, { ReactChild } from "react";

export interface TabProps {
  children: ReactChild;
  data: {
    label: string;
    id: number;
  };
}

export const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};
