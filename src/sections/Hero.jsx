import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "../data/portfolioData";

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
      <motion.div
        style={{ y: glowY }}
        className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl top-10 left-1/3"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-purple-400 font-medium mb-4 tracking-wide"
      >
        Hi, I'm
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-5xl md:text-7xl font-bold text-white mb-4"
      >
        {personalInfo.name}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-xl md:text-2xl text-neutral-400 mb-8"
      >
        {personalInfo.role}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-xl text-neutral-300 italic mb-10"
      >
        "{personalInfo.tagline}"
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 transition rounded-full text-white font-medium"
        >
          See My Work
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-neutral-600 hover:border-purple-400 transition rounded-full text-white font-medium"
        >
          Get In Touch
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;