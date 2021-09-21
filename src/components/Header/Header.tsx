import React, { ReactElement } from "react";
import "./Header.scss";

export default function Header(): ReactElement {
  return (
    <div className="header-container">
      <img
        src="https://marketplace.plantvsundead.com/_nuxt/img/logo.487528b.svg"
        alt="PVU Logo"
        width="73px"
        height="36px"
      />
    </div>
  );
}
