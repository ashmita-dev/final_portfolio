import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-colors duration-300 ${
        scrolled
          ? "bg-neutral-950/90 backdrop-blur border-b border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <a href="#" className="text-white font-semibold text-lg">
        {personalInfo.name.split(" ")[0]}
      </a>

      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-neutral-300 hover:text-purple-400 transition text-sm font-medium"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="group relative">
        <MagneticButton
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm px-4 py-2 border border-neutral-600 hover:border-purple-400 transition rounded-full text-white block"
        >
          GitHub
        </MagneticButton>
        <span className="absolute top-full right-0 mt-2 text-xs text-neutral-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          where the commits actually live
        </span>
      </div>
    </motion.nav>
  );
}

export default Navbar;