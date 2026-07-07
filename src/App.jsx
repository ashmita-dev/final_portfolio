import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import SectionDivider from "./components/SectionDivider";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import CommandPalette from "./components/CommandPalette";
import EasterEgg from "./components/EasterEgg";
import Marquee from "./components/Marquee";
import RobotMascot from "./components/RobotMascot";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div className="bg-neutral-950 relative">
      <ScrollProgress />
      <CursorGlow />
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Marquee
        items={[
          "React",
          "Node.js",
          "PostgreSQL",
          "Express",
          "Tailwind",
          "JavaScript",
        ]}
      />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
      <CommandPalette />
      <EasterEgg />
      <RobotMascot />
    </div>
  );
}

export default App;