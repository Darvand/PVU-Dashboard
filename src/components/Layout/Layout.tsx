import React, { ReactChild, ReactElement } from "react";
import Header from "../Header/Header";
import "./Layout.scss";

interface Props {
  children: ReactChild[] | ReactChild;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-container">{children}</div>
    </div>
  );
}
