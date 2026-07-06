import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "../data/portfolioData";
import MagneticButton from "../components/MagneticButton";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-neutral-950 to-neutral-950" />

      <motion.div
        style={{ y: glowY }}
        className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[100px] top-0 left-1/4"
      />
      <div className="absolute w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-[100px] bottom-0 right-1/4" />
      <div className="absolute w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[90px] top-1/3 right-10" />

      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-purple-400 font-medium mb-4 tracking-widest uppercase text-sm"
      >
        Hi, I'm
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-white to-fuchsia-300 bg-clip-text text-transparent"
      >
        {personalInfo.name}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative text-xl md:text-2xl text-neutral-300 mb-8"
      >
        {personalInfo.role}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative max-w-xl text-neutral-300 italic mb-10"
      >
        "{personalInfo.tagline}"
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative flex flex-wrap justify-center gap-4"
      >
        <MagneticButton
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 transition rounded-full text-white font-medium inline-block shadow-lg shadow-purple-900/50"
        >
          See My Work
        </MagneticButton>
        <MagneticButton
          href="#contact"
          className="px-6 py-3 border border-neutral-600 hover:border-purple-400 transition rounded-full text-white font-medium inline-block"
        >
          Get In Touch
        </MagneticButton>
        <MagneticButton
          href={personalInfo.resume}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-neutral-600 hover:border-purple-400 transition rounded-full text-white font-medium inline-block"
        >
          Download Resume
        </MagneticButton>
      </motion.div>
    </section>
  );
}

export default Hero;