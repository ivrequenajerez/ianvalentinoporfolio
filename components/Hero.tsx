import Image from "next/legacy/image";
import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="flex flex-wrap lg:pt-6 lg:h-screen w-full dark:bg-black bg-slate-100">
      <Spotlight />
      <div className="flex flex-wrap w-1/2 h-96 align-middle px-10 pt-5 content-center gap-3">
        <div className="flex flex-wrap content-center">
          <h2 className="text-4xl lg:text-7xl font-bold dark:text-white text-black">
            Desarrollador de Aplicaciones Multiplataforma
          </h2>
        </div>
        <div className="lg:flex hidden">
          <p>
            Soy un diseñador y desarrollador de aplicaciones multiplataforma con
            {" "}<strong>5 años de experiencia</strong> en crear proyectos con diseños y
            funcionalidades innovadoras y funcionales.
          </p>
        </div>
      </div>
      <div className="lg:flex hidden flex-wrap w-1/2 h-96 align-middle justify-end px-10 pt-5 gap-5 ">
        <div className="flex flex-wrap justify-center gap-5 w-full ">
          <div className="w-52 hover:opacity-90 transition-shadow duration-300 shadow-md shadow-black/50">
            <a href="https://delivuconnect.com/">
              <img
                src="/delivuconnect.png"
                width="208"
                height="208"
                className="object-cover w-full h-auto"
                alt="Collage con Proyectos"
              />
            </a>
          </div>
          <div className="w-52 hover:opacity-90  transition-shadow duration-300 shadow-md shadow-black/50">
            <a href="#">
              <img
                src="/mila.png"
                width="208"
                height="208"
                className="object-cover w-full h-auto"
                alt="Collage con Proyectos"
              />
            </a>
          </div>
          <div className="w-52 hover:opacity-90 transition-shadow duration-300 shadow-md shadow-black/50">
            <a href="https://spotdots.es/restaurantes/pazzi-per-la-pizza">
              <img
                src="/pazzi.png"
                width="208"
                height="208"
                className="object-cover w-full h-auto"
                alt="Collage con Proyectos"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 w-full mt-5">
          <div className="w-52 hover:opacity-90 transition-shadow duration-300 shadow-md shadow-black/50">
            <a href="https://github.com/ivrequenajerez/tresiete">
              <img
                src="/tresiete.png"
                width="208"
                height="208"
                className="object-cover w-full h-auto"
                alt="Collage con Proyectos"
              />
            </a>
          </div>
          <div className="w-52 hover:opacity-90 transition-shadow duration-300 shadow-md shadow-black/50">
            <a href="https://asystem.es/">
              <img
                src="/asystem.png"
                width="208"
                height="208"
                className="object-cover w-full h-auto"
                alt="Collage con Proyectos"
              />
            </a>
          </div>
          <div className="w-52 hover:opacity-90 transition-shadow duration-300 shadow-md shadow-black/50">
            <a href="https://github.com/ivrequenajerez/eazychef">
              <img
                src="/eazy.png"
                width="208"
                height="208"
                className="object-cover w-full h-auto"
                alt="Collage con Proyectos"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
