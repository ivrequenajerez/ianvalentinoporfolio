import Hero from "@/components/Hero";
import MyHeader from "@/components/MyHeader";
import Proyectos from "@/components/Proyectos";
import Skills from "@/components/Skills";
import SobreMi from "@/components/SobreMi";

export default function Home() {
  return (
    <main>
      <MyHeader />
      <Hero/>
      <SobreMi/>
      <Skills/>
      <Proyectos/>
    </main>
  );
}
