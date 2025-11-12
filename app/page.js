import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Experience/>
      <Certificates/>
      <Contact />
    </>
  );
}
