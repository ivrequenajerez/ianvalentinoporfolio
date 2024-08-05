"use client";
import React, { useState } from "react";
import Image from "next/image";
import ThemeToggleButton from "./ThemeToggleButton";

const MyHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <img
              src="/logo.png"
              width="50"
              height="50"
              alt="Logo Ian Valentino"
            />
            <span className="self-center text-base font-normal whitespace-nowrap text-white">
              Ian Valentino
            </span>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400  focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen ? "true" : "false"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 items-center">
              <li>
                <a
                  href="#sobremi"
                  className="block py-2 pr-4 pl-3 text-white lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-gray  hover:text-white border-white"
                >
                  Mi Objetivo
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="block py-2 pr-4 pl-3 text-white lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-gray  hover:text-white border-white"
                >
                  Mis Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="block py-2 pr-4 pl-3 text-white lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-gray  hover:text-white border-white"
                >
                  Contacto
                </a>
              </li>
              <li>
                <ThemeToggleButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MyHeader;
