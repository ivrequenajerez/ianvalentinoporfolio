"use client";
import React from "react";
import { GlareCard } from "./ui/glare-card";

const Proyectos = () => {
  return (
    <section id="proyectos">
      <div className="flex flex-col items-center justify-center px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <GlareCard className="flex flex-col items-center justify-center">
            <GlareCard className="relative flex flex-col items-center justify-center">
              <img
                className="h-full w-full absolute inset-0 object-cover"
                src="/tresiete.png"
              />
              <div className="h-full w-full absolute inset-0 bg-black opacity-80"></div>
              <div className="flex flex-col items-start justify-end py-8 px-6 z-10">
                <p className="font-bold text-white text-lg">
                  TreSiete: Sitio Web para Cafetería
                </p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                  Sitio Web interactivo, con animaciones avanzadas y Carrito de
                  Compras. Next.js, TailWind, JavaScript.
                </p>
              </div>
            </GlareCard>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-center">
            <GlareCard className="relative flex flex-col items-center justify-center">
              <img
                className="h-full w-full absolute inset-0 object-cover"
                src="/eazy.png"
              />
              <div className="h-full w-full absolute inset-0 bg-black opacity-80"></div>
              <div className="flex flex-col items-start justify-end py-8 px-6 z-10">
                <p className="font-bold text-white text-lg">EazyChef</p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                  Aplicación multiplataforma para gestión de almacén de un
                  restaurante. React Native, NativeWind, TailWind, NoSQL, Expo, JavaScript.
                </p>
              </div>
            </GlareCard>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-center">
            <GlareCard className="relative flex flex-col items-center justify-center">
              <img
                className="h-full w-full absolute inset-0 object-cover"
                src="/mila.png"
              />
              <div className="h-full w-full absolute inset-0 bg-black opacity-80"></div>
              <div className="flex flex-col items-start justify-end py-8 px-6 z-10">
                <p className="font-bold text-white text-lg">
                  Mila Peluquería Unisex
                </p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                  Sitio Web personalizado para hacer reservas en Centro de
                  Belleza. CMS WordPress, PHP, Html, CSS.
                </p>
              </div>
            </GlareCard>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-center">
            <GlareCard className="relative flex flex-col items-center justify-center">
              <img
                className="h-full w-full absolute inset-0 object-cover"
                src="/asystem.png"
              />
              <div className="h-full w-full absolute inset-0 bg-black opacity-80"></div>
              <div className="flex flex-col items-start justify-end py-8 px-6 z-10">
                <p className="font-bold text-white text-lg">
                  Asystem: Webs y Diseño Gráfico
                </p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                  Sitio Web personalizado, diseños modernos e implementación de
                  funcionalidades complejas. CMS WordPress, PHP, Html, CSS.
                </p>
              </div>
            </GlareCard>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-center">
            <GlareCard className="relative flex flex-col items-center justify-center">
              <img
                className="h-full w-full absolute inset-0 object-cover"
                src="/delivuconnect.png"
              />
              <div className="h-full w-full absolute inset-0 bg-black opacity-80"></div>
              <div className="flex flex-col items-start justify-end py-8 px-6 z-10">
                <p className="font-bold text-white text-lg">
                  Delivuconnect: Directorio Empresarial
                </p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                  Directorio web con empresas de diversos sectores. Buscador
                  personalizado. CMS WordPress, PHP, Html, CSS.
                </p>
              </div>
            </GlareCard>
          </GlareCard>
          <GlareCard className="flex flex-col items-center justify-center">
            <GlareCard className="relative flex flex-col items-center justify-center">
              <img
                className="h-full w-full absolute inset-0 object-cover"
                src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />

              <div className="flex flex-col items-start justify-end py-8 px-6 z-10">
                <p className="font-bold text-white text-lg">
                  Pazzi Per La Pizza: Sitio Web
                </p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                  Sitio Web personalizado para hacer reservas y ver Carta en
                  línea. CMS WordPress, PHP, Html, CSS.
                </p>
              </div>
            </GlareCard>
          </GlareCard>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
