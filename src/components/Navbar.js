import React from "react";
import logo from "../Img/svg/wimpole-logo.svg";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-center py-[3rem] bg-white">
      <Image src={logo} />
    </nav>
  );
}

export default Navbar;
