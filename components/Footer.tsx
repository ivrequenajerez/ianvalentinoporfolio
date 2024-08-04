import React from "react";

const Footer = () => {
  return (
    <footer
      id="contacto"
      className="bg-gray-dark rounded-lg shadow dark:bg-gray-900 m-4 my-20"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-light">
              Ian Valentino
            </span>
          </a>
          <a
            href="https://wa.me/34640988723?text=Hola%2C%20quiero%20contactar%20contigo%20para%20trabajar%20juntos"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-light">
              +34 640 98 87 23
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-light">
            <li>
              <a
                href="https://linkedin.com/in/ianvalentino"
                className="hover:underline me-4 md:me-6   "
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_ianvalentino/"
                className="hover:underline me-4 md:me-6"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Descargar CV
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-light">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Ian Valentino
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
