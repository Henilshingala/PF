import Navbar from "@/components/Navbar";
import AboutMe from "@/components/sections/AboutMe";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Internships from "@/components/sections/Internships";
import Stats from "@/components/sections/Stats";
import TechGrid from "@/components/sections/TechGrid";
import TechStackOrbit from "@/components/sections/TechStackOrbit";
import WorkingStyle from "@/components/sections/WorkingStyle";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechStackOrbit />
      <TechGrid />
      <FeaturedProjects />
      <Stats />
      <Internships />
      <AboutMe />
      <WorkingStyle />
      <Footer />
    </main>
  );
}
