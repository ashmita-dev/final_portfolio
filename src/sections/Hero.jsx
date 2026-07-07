import { motion } from "framer-motion";
import { personalInfo, stats, currentlyBuilding } from "../data/portfolioData";
import MagneticButton from "../components/MagneticButton";
import ScrambleText from "../components/ScrambleText";
import GradientMesh from "../components/GradientMesh";
import TiltCard from "../components/TiltCard";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6 py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/25 via-neutral-950 to-neutral-950" />
      <GradientMesh />

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
        {/* Big name tile */}
        <TiltCard className="md:col-span-2 md:row-span-2 bg-neutral-900/80 border border-neutral-800 rounded-3xl p-8 md:p-10 flex flex-col justify-center backdrop-blur">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-amber-400 font-medium mb-3 tracking-widest uppercase text-sm"
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-amber-200 via-white to-orange-200 bg-clip-text text-transparent"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-neutral-300 mb-5"
          >
            {personalInfo.role}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-neutral-400 italic mb-6 text-sm max-w-md"
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
              className="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 transition rounded-full text-white text-sm font-medium"
            >
              See My Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="px-5 py-2.5 border border-neutral-600 hover:border-amber-400 transition rounded-full text-white text-sm font-medium"
            >
              Get In Touch
            </MagneticButton>
            <MagneticButton
              href={personalInfo.resume}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 border border-neutral-600 hover:border-amber-400 transition rounded-full text-white text-sm font-medium"
            >
              Resume
            </MagneticButton>
          </motion.div>
        </TiltCard>

        {/* Now tile */}
        <TiltCard className="bg-neutral-900/80 border border-amber-500/30 rounded-3xl p-5 flex flex-col justify-center backdrop-blur">
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span className="text-xs text-amber-400 uppercase tracking-wide">Now</span>
          </div>
          <p className="text-neutral-300 text-sm">{currentlyBuilding}</p>
        </TiltCard>

        {/* Stat tiles */}
        {stats.slice(0, 2).map((stat) => (
          <TiltCard
            key={stat.label}
            className="bg-neutral-900/80 border border-neutral-800 rounded-3xl p-5 flex flex-col justify-center items-center text-center backdrop-blur"
          >
            <span className="text-3xl font-bold text-amber-400">
              {stat.value}{stat.suffix}
            </span>
            <span className="text-neutral-500 text-xs mt-1">{stat.label}</span>
          </TiltCard>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative mt-10 text-4xl font-bold bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent"
      >
        <ScrambleText text="" />
      </motion.div>
    </section>
  );
}

export default Hero;