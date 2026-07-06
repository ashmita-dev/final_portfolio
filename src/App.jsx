import Navbar from "./components/Navbar";
import Avatar from "./components/Avatar";
import CursorGlow from "./components/CursorGlow";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-neutral-950 relative">
      <CursorGlow />
      <Navbar />
      <Avatar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;