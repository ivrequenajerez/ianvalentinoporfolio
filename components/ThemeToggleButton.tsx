import React, { useEffect, useState } from "react";

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    console.log("isDarkMode:", isDarkMode); // Añade esto
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleClick = () => {
    console.log("Button clicked"); // Añade esto
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={handleClick}
      className="w-16 h-16 border border-white text-white flex items-center justify-center"
    >
      {isDarkMode ? "DR" : "LG"}
    </button>
  );
};

export default ThemeToggleButton;
