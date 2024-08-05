import React, { useEffect, useState } from "react";
import Image from "next/image";

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={handleClick}
      className="relative w-16 h-16 flex items-center justify-center bg-transparent overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
        <Image
          src="/light.png"
          alt="Light Mode"
          width={32}
          height={32}
          style={{
            opacity: isDarkMode ? 0 : 1,
            transition: 'opacity 0.3s ease',
            filter: 'invert(1)'
          }}
        />
        <Image
          src="/dark.png"
          alt="Dark Mode"
          width={32}
          height={32}
          style={{
            opacity: isDarkMode ? 1 : 0,
            transition: 'opacity 0.3s ease',
            filter: 'invert(1)'
          }}
        />
      </div>
    </button>
  );
};

export default ThemeToggleButton;
