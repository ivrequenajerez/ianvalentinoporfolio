"use client";
import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Proyectos = () => {
  return (
    <section id="proyectos">
      <div className="flex flex-col items-center justify-center px-10 dark:bg-black bg-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <CardSpotlight className="h-96 w-96">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              <a href="https://github.com/ivrequenajerez/tresiete">
                TreSiete: Sitio Web para Cafetería
              </a>
            </p>
            <div className="text-white dark:text-white dark:text-neutral-200 mt-4 relative z-20">
              Sitio Web interactivo, con animaciones avanzadas y Carrito de
              Compras.
              <ul className="list-none mt-2">
                <Step title="Next.js" />
                <Step title="TailWind" />
                <Step title="TypeScript" />
              </ul>
            </div>
          </CardSpotlight>

          <CardSpotlight className="h-96 w-96">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              <a href="https://github.com/ivrequenajerez/eazychef">
                EazyChef: App Multiplataforma
              </a>
            </p>
            <div className="text-white dark:text-neutral-200 mt-4 relative z-20">
              Aplicación multiplataforma para gestión de almacén de un
              restaurante.
              <ul className="list-none mt-2">
                <Step title="React Native" />
                <Step title="NativeWind" />
                <Step title="NoSQL" />
                <Step title="Expo" />
                <Step title="JavaScript" />
              </ul>
            </div>
          </CardSpotlight>

          <CardSpotlight className="h-96 w-96">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              <a href="https://spotdots.es/milapeluqueriaunisex/">
                Mila Peluquería Unisex
              </a>
            </p>
            <div className="text-white dark:text-neutral-200 mt-4 relative z-20">
              Sitio Web personalizado para hacer reservas en Centro de Belleza.
              <ul className="list-none mt-2">
                <Step title="CMS WordPress" />
                <Step title="PHP" />
                <Step title="HTML" />
                <Step title="CSS" />
              </ul>
            </div>
          </CardSpotlight>

          <CardSpotlight className="h-96 w-96">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              <a href="https://asystem.es/">Asystem: Webs y Diseño Gráfico</a>
            </p>
            <div className="text-white dark:text-neutral-200 mt-4 relative z-20">
              Sitios Web personalizados, diseños modernos, publicaciones para
              RRSS e implementación de funcionalidades complejas.
              <ul className="list-none mt-2">
                <Step title="CMS WordPress" />
                <Step title="PHP" />
                <Step title="HTML" />
                <Step title="CSS" />
              </ul>
            </div>
          </CardSpotlight>

          <CardSpotlight className="h-96 w-96">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              <a href="https://delivuconnect.com/">
                Delivuconnect: Directorio Empresarial
              </a>
            </p>
            <div className="text-white dark:text-neutral-200 mt-4 relative z-20">
              Directorio web con empresas de diversos sectores. Buscador
              personalizado.
              <ul className="list-none mt-2">
                <Step title="CMS WordPress" />
                <Step title="PHP" />
                <Step title="HTML" />
                <Step title="CSS" />
              </ul>
            </div>
          </CardSpotlight>

          <CardSpotlight className="h-96 w-96">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              <a href="https://spotdots.es/restaurantes/pazzi-per-la-pizza">
                Pazzi Per La Pizza: Sitio Web
              </a>
            </p>
            <div className="text-white dark:text-neutral-200 mt-4 relative z-20">
              Sitio Web personalizado para hacer reservas y ver Carta en línea.
              <ul className="list-none mt-2">
                <Step title="CMS WordPress" />
                <Step title="PHP" />
                <Step title="HTML" />
                <Step title="CSS" />
              </ul>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export default Proyectos;
