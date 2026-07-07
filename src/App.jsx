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

function App() {
  return (
    <div className="bg-neutral-950 relative">
      <CursorGlow />
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <Avatar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
    </div>
  );
}

export default App;