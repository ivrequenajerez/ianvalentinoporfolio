"use client";
import React from "react";
import ScrollAppear from "./ui/ScrollAppear";

const SobreMi = () => {
  return (
    <section id="sobremi">
      <ScrollAppear>
        <div className="lg:flex hidden flex-col items-center justify-center h-96 px-10 dark:bg-black bg-slate-100">
          <h2 className="text-7xl font-bold w-1/2 text-center py-5">
            Tus ideas, las llevo a la <span className="text-gray-dark dark:text-cyan-300/50">realidad</span>
          </h2>
          <p className="text-lg font-medium w-1/2 text-center">
            Aprovechando todo mi potencial profesional para luego impulsar las{" "}
            <strong>ideas</strong> más brillantes a su mayor expresión. Me
            apasiona trabajar en proyectos creativos, transformando actividades
            cotidianas en experiencias fáciles, cómodas y agradables. ¡Hagamos
            algo increíble juntos!
          </p>
        </div>
      </ScrollAppear>
    </section>
  );
};

export default SobreMi;
