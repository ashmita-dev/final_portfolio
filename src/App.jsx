import Navbar from "./components/Navbar";
import Avatar from "./components/Avatar";
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
import NowWidget from "./components/NowWidget";
import EasterEgg from "./components/EasterEgg";
import Marquee from "./components/Marquee";

function App() {
  return (
    <div className="bg-neutral-950 relative">
      <CursorGlow />
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <Avatar />
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
      <NowWidget />
      <EasterEgg />
    </div>
  );
}

export default App;