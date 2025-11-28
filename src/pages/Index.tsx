import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import SpaceScene3D from "@/components/SpaceScene3D";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#150134] to-[#1a0a2e] relative">
      <SpaceScene3D />
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
