import { motion } from "framer-motion";
import { personalInfo, currentlyBuilding } from "../data/portfolioData";
import MagneticButton from "../components/MagneticButton";
import GradientMesh from "../components/GradientMesh";
import Spotlight from "../components/Spotlight";
import { ChevronDown, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6 pt-24 md:pt-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/25 via-neutral-950 to-neutral-950" />

      <GradientMesh />
      <Spotlight />

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,158,11,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative text-amber-400 uppercase tracking-[0.35em] text-sm font-semibold mb-5"
      >
        Hi, I'm
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.95] mb-8 bg-gradient-to-r from-amber-200 via-white to-orange-200 bg-clip-text text-transparent"
      >
        Ashmita
        <br />
        Mazumdar
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative text-xl md:text-2xl text-neutral-300 text-center mb-5"
      >
        {personalInfo.role}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="relative max-w-2xl text-center italic text-neutral-400 text-base md:text-lg mb-8"
      >
        "{personalInfo.tagline}"
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative mb-10"
      >
        <div className="flex items-center gap-2 rounded-full border border-amber-500/40 bg-neutral-900/70 px-5 py-2 backdrop-blur">
          <Sparkles size={14} className="text-amber-400" />
          <span className="text-sm font-medium text-amber-300">
            {currentlyBuilding}
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="relative flex flex-wrap justify-center gap-4"
      >
        <MagneticButton
          href="#projects"
          className="px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold shadow-lg shadow-amber-900/40 hover:from-amber-500 hover:to-orange-500 transition"
        >
          See My Work
        </MagneticButton>

        <MagneticButton
          href="#contact"
          className="px-7 py-3.5 rounded-full border border-neutral-600 text-white hover:border-amber-400 transition"
        >
          Get In Touch
        </MagneticButton>

        <MagneticButton
          href={personalInfo.resume}
          target="_blank"
          rel="noreferrer"
          className="px-7 py-3.5 rounded-full border border-neutral-600 text-white hover:border-amber-400 transition"
        >
          Resume
        </MagneticButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative mt-16 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-2">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="text-amber-500" size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;