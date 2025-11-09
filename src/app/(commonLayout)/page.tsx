import AboutMe from "@/components/modules/Home/About";
import Hero from "@/components/modules/Home/Hero";
import Skills from "@/components/modules/Home/Skills";




export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills enableAnimations={true} heading="Technical Skills" />
    </>
  );
}
