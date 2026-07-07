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
              className="text-neutral-300 hover:text-amber-400 transition text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() =>
              window.dispatchEvent(
                new KeyboardEvent("keydown", {
                  key: "k",
                  ctrlKey: true,
                })
              )
            }
            className="group relative flex items-center gap-3 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900/70 hover:border-amber-400 transition"
          >
            <span className="text-neutral-400">🔍</span>

            <span className="text-sm text-neutral-300">
              Search portfolio
            </span>

            <kbd className="text-xs border border-neutral-600 rounded px-2 py-0.5 text-neutral-500">
              Ctrl K
            </kbd>

            <div className="absolute top-full right-0 mt-3 w-72 rounded-xl border border-neutral-800 bg-neutral-900 p-4 text-left opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 shadow-xl">
              <p className="font-semibold text-white mb-2">
                Quick Command Palette
              </p>

              <p className="text-sm text-neutral-400 leading-6">
                • Jump to any section
                <br />
                • Open GitHub & LinkedIn
                <br />
                • Contact me instantly
              </p>

              <div className="mt-3 text-xs text-amber-400">
                Click here or press Ctrl + K
              </div>
            </div>
          </button>

          <MagneticButton
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 py-2 border border-neutral-600 hover:border-amber-400 transition rounded-full text-white"
          >
            GitHub
          </MagneticButton>
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