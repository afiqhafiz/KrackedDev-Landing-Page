import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Challenges", path: "/challenge" },
];

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="flex space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`px-3 py-2 rounded-md font-semibold ${
            location.pathname === item.path
              ? "bg-pink-600 text-black"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
