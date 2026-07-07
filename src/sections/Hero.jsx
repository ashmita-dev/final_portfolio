import { motion } from "framer-motion";
import { personalInfo, stats, currentlyBuilding } from "../data/portfolioData";
import MagneticButton from "../components/MagneticButton";
import ScrambleText from "../components/ScrambleText";
import GradientMesh from "../components/GradientMesh";
import TiltCard from "../components/TiltCard";
import { ChevronDown } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6 py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/25 via-neutral-950 to-neutral-950" />
      <GradientMesh />

      <div className="absolute inset-0 opacity-[0.12]" style={{
        backgroundImage: "linear-gradient(rgba(245,158,11,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.25) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex items-center gap-2 mb-8 bg-neutral-900/70 border border-amber-500/30 rounded-full px-4 py-1.5 backdrop-blur"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
        </span>
        <span className="text-xs text-amber-300 font-medium">{currentlyBuilding}</span>
      </motion.div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full">
        <TiltCard className="md:col-span-2 md:row-span-2 bg-neutral-900/80 border border-neutral-800 rounded-3xl p-8 md:p-12 flex flex-col justify-center backdrop-blur">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-amber-400 font-medium mb-4 tracking-widest uppercase text-sm"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-white to-orange-200 bg-clip-text text-transparent leading-[1.05]"
          >
            Ashmita
            <br />
            Mazumdar
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-300 mb-6"
          >
            {personalInfo.role}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-neutral-400 italic mb-8 text-base max-w-md border-l-2 border-amber-500/40 pl-4"
          >
            "{personalInfo.tagline}"
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <MagneticButton
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 transition rounded-full text-white text-sm font-semibold shadow-lg shadow-amber-900/40"
            >
              See My Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="px-6 py-3 border border-neutral-600 hover:border-amber-400 transition rounded-full text-white text-sm font-medium"
            >
              Get In Touch
            </MagneticButton>
            <MagneticButton
              href={personalInfo.resume}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-neutral-600 hover:border-amber-400 transition rounded-full text-white text-sm font-medium"
            >
              Resume
            </MagneticButton>
          </motion.div>
        </TiltCard>

        {stats.slice(0, 2).map((stat, i) => (
          <TiltCard
            key={stat.label}
            className="bg-neutral-900/80 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-center items-center text-center backdrop-blur"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="text-4xl font-bold text-amber-400"
            >
              {stat.value}{stat.suffix}
            </motion.span>
            <span className="text-neutral-500 text-xs mt-1.5">{stat.label}</span>
          </TiltCard>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="relative mt-14 flex flex-col items-center gap-2"
      >
        <span className="text-neutral-500 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-amber-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;