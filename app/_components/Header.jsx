"use client"
import React from 'react';
import { useTheme } from '../context';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
  <header className="w-full shadow-md bg-white dark:bg-gray-600 dark:text-white "  >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl md:text-2xl font-bold">Where in the world?</h1>

        <button className="text-sm md:text-base transition cursor-pointer" onClick={toggleTheme}>
            {theme === 'light' ? '🌙Dark' : '☀️Light'} 
         
        </button>
      </div>
    </header>
  );
};

export default Header;
