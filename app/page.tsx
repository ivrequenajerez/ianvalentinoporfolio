import Hero from "@/components/Hero";
import MyHeader from "@/components/MyHeader";
import Skills from "@/components/Skills";
import SobreMi from "@/components/SobreMi";

export default function Home() {
  return (
    <main>
      <MyHeader />
      <Hero/>
      <SobreMi/>
      <Skills/>
    </main>
  );
}
