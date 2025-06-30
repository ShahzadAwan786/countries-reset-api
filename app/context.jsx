"use client";
import { createContext, useState, useContext, useEffect } from "react";

const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, settheme] = useState("light");

  useEffect(() => {
    if (theme==="dark") {
      document.documentElement.classList.add("dark");
    }
    else {
        document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    settheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={{ theme, settheme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => useContext(themeContext);
