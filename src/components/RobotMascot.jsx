import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sectionLines = {
  hero: "Beep boop. Full stack. No small talk.",
  about: "Fun fact: I run on coffee and console.log statements.",
  skills: "I've read the docs. Mostly. Some of them.",
  projects: "Built by her. Occasionally fixed by me at 2am.",
  contact: "Send a message. I promise I'm friendlier than I look.",
};

function RobotMascot() {
  const [line, setLine] = useState(sectionLines.hero);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = "hero";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = id;
      });
      setLine(sectionLines[current]);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 3200);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <>
      <motion.div
        className="fixed bottom-0 right-4 md:right-16 z-40 pointer-events-none"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative flex flex-col items-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={line}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative mb-2 mr-4 md:mr-10 hidden sm:block"
            >
              <div className="bg-white text-neutral-900 text-sm font-medium px-5 py-3 rounded-3xl max-w-[190px] shadow-xl text-center">
                {line}
              </div>
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white rounded-full" />
              <div className="absolute -bottom-5 right-4 w-2.5 h-2.5 bg-white rounded-full" />
            </motion.div>
          </AnimatePresence>

          {/* Robot SVG */}
          <svg width="150" height="170" viewBox="0 0 150 170" className="drop-shadow-2xl">
            {/* Antenna */}
            <motion.circle
              cx="75" cy="14" r="6" fill="#F59E0B"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            <line x1="75" y1="20" x2="75" y2="34" stroke="#78716C" strokeWidth="3" />

            {/* Head */}
            <rect x="30" y="34" width="90" height="72" rx="24" fill="#E7E5E4" />
            <rect x="30" y="34" width="90" height="72" rx="24" fill="url(#headGradient)" opacity="0.5" />

            {/* Face screen */}
            <rect x="42" y="50" width="66" height="42" rx="14" fill="#1C1917" />

            {/* Eyes */}
            {blink ? (
              <>
                <rect x="58" y="68" width="14" height="3" rx="1.5" fill="#F59E0B" />
                <rect x="78" y="68" width="14" height="3" rx="1.5" fill="#F59E0B" />
              </>
            ) : (
              <>
                <circle cx="65" cy="70" r="7" fill="#F59E0B" />
                <circle cx="85" cy="70" r="7" fill="#F59E0B" />
              </>
            )}

            {/* Cheek glow */}
            <circle cx="46" cy="82" r="5" fill="#FB923C" opacity="0.5" />
            <circle cx="104" cy="82" r="5" fill="#FB923C" opacity="0.5" />

            {/* Body */}
            <rect x="40" y="106" width="70" height="54" rx="18" fill="#D6D3D1" />
            <rect x="55" y="120" width="40" height="26" rx="8" fill="#F59E0B" opacity="0.85" />
            <circle cx="75" cy="133" r="6" fill="#1C1917" opacity="0.6" />

            {/* Arms */}
            <motion.rect
              x="18" y="112" width="16" height="34" rx="8" fill="#D6D3D1"
              animate={{ rotate: [0, -8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "26px 116px" }}
            />
            <rect x="116" y="112" width="16" height="34" rx="8" fill="#D6D3D1" />

            <defs>
              <linearGradient id="headGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      <div className="fixed bottom-0 left-0 w-full z-30 sm:hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={line}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="bg-neutral-900/95 backdrop-blur border-t border-amber-500/40 text-neutral-200 text-sm px-4 py-3 text-center"
          >
            🤖 {line}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default RobotMascot;