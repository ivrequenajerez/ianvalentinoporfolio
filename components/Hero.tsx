import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex">
      <div className="flex flex-wrap column w-1/2 h-96 align-middle px-10 pt-5">
        <div className="flex flex-wrap content-center">
          <h2 className="text-7xl font-bold">
            Desarrollador de Aplicaciones Multiplataforma
          </h2>
        </div>
        <div className="flex">
          <p>
            Soy un diseñador y desarrollador de aplicaciones multiplataforma con
            5 años de experiencia en crear proyectos con diseños y
            funcionalidades innovadoras y funcionales.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap column w-1/2 h-96 align-middle justify-end px-10 pt-5">
      <Image 
        src="/collagehero.png" 
        width={600} 
        height={300} 
        layout="responsive" 
        objectFit="cover" 
        quality={100} 
        alt="Collage con Proyectos" 
      />
      </div>
    </div>
  );
};

export default Hero;
