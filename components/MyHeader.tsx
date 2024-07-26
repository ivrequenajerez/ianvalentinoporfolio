import React from "react";
import Image from "next/image";

const MyHeader = () => {
  return (
    <header>
      <div className="inline-flex items-center w-full px-10 pt-5">
        <div className="flex justify-start w-full items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="font-medium">Ian Requena</h1>
        </div>
        <div className="flex justify-end w-full">
          <ul className="inline-flex gap-5">
            <li className="hover:text-gray-light"><a href="#">Mi Objetivo</a></li>
            <li className="hover:text-gray-light"><a href="#">Mis Proyectos</a></li>
            <li className="hover:text-gray-light"><a href="#">Contacto</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MyHeader;
