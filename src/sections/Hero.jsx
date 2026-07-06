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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/25 via-neutral-950 to-neutral-950" />

      <motion.div
        style={{ y: glowY }}
        className="absolute w-[600px] h-[600px] bg-amber-500/25 rounded-full blur-[100px] top-0 left-1/4"
      />
      <div className="absolute w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[100px] bottom-0 right-1/4" />
      <div className="absolute w-[300px] h-[300px] bg-amber-400/15 rounded-full blur-[90px] top-1/3 right-10" />

      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: "linear-gradient(rgba(245,158,11,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.25) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-amber-400 font-medium mb-4 tracking-widest uppercase text-sm"
      >
        Hi, I'm
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative text-4xl sm:text-5xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-white to-orange-200 bg-clip-text text-transparent px-2"
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
        className="relative flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 w-full px-4"
      >
        <MagneticButton
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 transition rounded-full text-white font-medium inline-block shadow-lg shadow-amber-900/40"
        >
          See My Work
        </MagneticButton>
        <MagneticButton
          href="#contact"
          className="px-6 py-3 border border-neutral-600 hover:border-amber-400 transition rounded-full text-white font-medium inline-block"
        >
          Get In Touch
        </MagneticButton>
        <MagneticButton
          href={personalInfo.resume}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-neutral-600 hover:border-amber-400 transition rounded-full text-white font-medium inline-block"
        >
          Download Resume
        </MagneticButton>
      </motion.div>
    </section>
  );
}

export default Hero;