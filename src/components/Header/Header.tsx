import React, { ReactElement } from "react";

export default function Header(): ReactElement {
  return (
    <div className="bg-gray-900 fixed h-14 w-full flex justify-center items-center top-0 z-20">
      <img
        src="https://marketplace.plantvsundead.com/_nuxt/img/logo.487528b.svg"
        alt="PVU Logo"
        width="73px"
        height="36px"
      />
    </div>
  );
}
