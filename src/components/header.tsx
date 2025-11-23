import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-10 py-5 border-b border-gray-800">
      <h1 className="text-2xl font-extrabold">
        🇲🇾 Kracked <span className="text-pink-500">Devs</span>
      </h1>
      <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg font-semibold">
        Join The Movement
      </button>
    </header>
  );
};

export default Header;
