import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="bg-neutral-950">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;