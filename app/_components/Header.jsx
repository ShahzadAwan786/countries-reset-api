import React from 'react';

const Header = () => {
  return (
    <header className="w-full shadow-md bg-white ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl md:text-2xl font-bold">Where in the world?</h1>

        <button className="text-sm md:text-base hover:underline transition">
          🌙 Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
