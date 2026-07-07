import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-colors duration-300 ${
          scrolled ? "bg-neutral-950/90 backdrop-blur border-b border-neutral-800" : "bg-transparent"
        }`}
      >
        <a href="#" className="text-white font-semibold text-lg">
          {personalInfo.name.split(" ")[0]}
        </a>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-neutral-300 hover:text-amber-400 transition text-sm font-medium">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block group relative">
          <MagneticButton
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 py-2 border border-neutral-600 hover:border-amber-400 transition rounded-full text-white block"
          >
            GitHub
          </MagneticButton>
          <span className="hidden lg:block text-xs text-neutral-500 border border-neutral-700 rounded px-2 py-1">⌘K</span>
          <span className="absolute top-full right-0 mt-2 text-xs text-neutral-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
            where the commits actually live
          </span>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white z-50"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-950/98 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-2xl text-neutral-200 hover:text-amber-400 transition font-medium"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.08 }}
              className="mt-4 px-6 py-3 border border-amber-500 rounded-full text-amber-400 font-medium"
            >
              GitHub
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;