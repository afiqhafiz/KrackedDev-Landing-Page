// NavBar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Challenges", path: "/challenge" },
];

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="flex space-x-6 font-mono">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`px-3 py-1 rounded font-semibold transition-colors duration-200 ${location.pathname === item.path
              ? "bg-cyan-500 text-black"
              : "text-gray-400 hover:text-cyan-400"
            }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
