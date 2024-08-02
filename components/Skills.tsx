import React from "react";
import { PinContainer } from "./ui/3d-pin";

const Skills: React.FC = () => {
  return (
    <section id="sobremi">
      <div className="h-[40rem] w-full flex items-center justify-center">
        <PinContainer
          title="Html, CSS, JavaScript, TypeScript"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Sitios Web Interactivos
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero
                natus dolore beatae fuga labore sapiente quo quas libero non id
                nobis quis quaerat magnam corrupti veniam, tempora ex
                necessitatibus?
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        <PinContainer
          title="Java, SpringBoot, JavaScript, React Native"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Aplicaciones Multiplataforma
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero
                natus dolore beatae fuga labore sapiente quo quas libero non id
                nobis quis quaerat magnam corrupti veniam, tempora ex
                necessitatibus?
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        <PinContainer
          title="Elementor, Divi, WooCommerce"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              CMS WordPress
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero
                natus dolore beatae fuga labore sapiente quo quas libero non id
                nobis quis quaerat magnam corrupti veniam, tempora ex
                necessitatibus?
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
    </section>
  );
};

export default Skills;
