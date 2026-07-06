import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import avatarImg from "../assets/avatar.png";

const sectionLines = {
  hero: "Fair warning: I debug faster than I respond to texts.",
  about: "Comment lines: 0. Overthinking per semicolon: immeasurable.",
  skills: "Yes, I know React. No, I will not explain useEffect at a party.",
  projects: "Real projects. Real bugs. Real proud of both.",
  contact: "Reach out — my API uptime beats my sleep schedule.",
};

function Avatar() {
  const [line, setLine] = useState(sectionLines.hero);

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = "hero";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      });

      setLine(sectionLines[current]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-0 right-2 md:right-4 lg:right-6 z-40"
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-end">
        <AnimatePresence mode="wait">
          <motion.div
            key={line}
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="relative mb-2 mr-4 md:mr-8"
          >
            <div className="bg-white text-neutral-900 text-sm font-medium px-5 py-3 rounded-3xl max-w-[220px] md:max-w-xs shadow-xl text-center">
              {line}
            </div>
            <div className="absolute -bottom-2 right-10 w-4 h-4 bg-white rounded-full" />
            <div className="absolute -bottom-5 right-6 w-2.5 h-2.5 bg-white rounded-full" />
          </motion.div>
        </AnimatePresence>

        <motion.img
          src={avatarImg}
          alt="Ashmita"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-56 md:w-80 lg:w-96 drop-shadow-2xl"
        />
      </div>
    </motion.div>
  );
}

export default Avatar;