import Image from "next/legacy/image";
import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="flex pt-6 h-screen">
      <Spotlight />
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
      <div className="flex flex-wrap column w-1/2 h-96 align-middle justify-end px-10 pt-5 gap-5">
        <div className="w-52 hover:opacity-90">
          <a href="https://delivuconnect.com/">
            <Image
              src="/delivuconnect.png"
              width={208}
              height={208}
              layout="responsive"
              objectFit="cover"
              quality={100}
              alt="Collage con Proyectos"
            />
          </a>
        </div>
        <div className="w-52 hover:opacity-90">
          <a href="#">
            <Image
              src="/mila.png"
              width={208}
              height={208}
              layout="responsive"
              objectFit="cover"
              quality={100}
              alt="Collage con Proyectos"
            />
          </a>
        </div>
        <div className="w-52 hover:opacity-90">
          <a href="https://spotdots.es/restaurantes/pazzi-per-la-pizza">
            <Image
              src="/pazzi.png"
              width={208}
              height={208}
              layout="responsive"
              objectFit="cover"
              quality={100}
              alt="Collage con Proyectos"
            />
          </a>
        </div>
        <div className="w-52 hover:opacity-90">
          <a href="#">
            <Image
              src="/tresiete.png"
              width={208}
              height={208}
              layout="responsive"
              objectFit="cover"
              quality={100}
              alt="Collage con Proyectos"
            />
          </a>
        </div>

        <div className="w-52 hover:opacity-90">
          <a href="#">
            <Image
              src="/asystem.png"
              width={208}
              height={208}
              layout="responsive"
              objectFit="cover"
              quality={100}
              alt="Collage con Proyectos"
            />
          </a>
        </div>
        <div className="w-52 hover:opacity-90">
          <a href="#">
            <Image
              src="/eazy.png"
              width={208}
              height={208}
              layout="responsive"
              objectFit="cover"
              quality={100}
              alt="Collage con Proyectos"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
