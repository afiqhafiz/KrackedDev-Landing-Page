import React from "react";
import NavBar from "../navBar";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-10 py-5 border-b border-gray-800 bg-black">
      <h1 className="text-2xl font-extrabold">
        🇲🇾 Kracked <span className="text-pink-500">Devs</span>
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;
