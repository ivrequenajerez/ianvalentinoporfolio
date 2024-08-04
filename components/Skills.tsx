import React from "react";
import { PinContainer } from "./ui/3d-pin";

const Skills: React.FC = () => {
  return (
    <section id="sobremi">
      <div className="lg:h-[40rem] w-full flex flex-wrap gap-20 pb-32 lg:pb-0 lg:gap-0 lg:flex-nowrap lg:items-center justify-center">
        <PinContainer
          title="Html, CSS, JavaScript, TypeScript"
          href="https://github.com/ivrequenajerez"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Sitios Web Interactivos
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Me preocupo por la experiencia de los usuarios que visitan la web, así como la accesibilidad para todos a ésta
              </span>
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="Java, SpringBoot, JavaScript, React Native"
          href="https://github.com/ivrequenajerez"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Aplicaciones Multiplataforma
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Brindo a las empresas actuales herramientas para dar la oportunidad a actualizarse digitalizando sus negocios, facilitando así el desarrollo de
                sus actividades, procesos, etc.
              </span>
            </div>
          </div>
        </PinContainer>
        <PinContainer
          title="Elementor, Divi, WooCommerce"
          href="https://github.com/ivrequenajerez"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Branding
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Asesoro y diseño desde cero una marca, la identidad de un equipo, un servicio y un producto a ofrecer a un público objetivo.
              </span>
            </div>
          </div>
        </PinContainer>
      </div>
    </section>
  );
};

export default Skills;
