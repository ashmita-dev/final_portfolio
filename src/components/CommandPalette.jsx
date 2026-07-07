import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const commands = [
  { label: "Go to About", action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Go to Skills", action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Go to Projects", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Go to Contact", action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Open GitHub", action: () => window.open(personalInfo.github, "_blank") },
  { label: "Open LinkedIn", action: () => window.open(personalInfo.linkedin, "_blank") },
  { label: "Email Me", action: () => (window.location.href = `mailto:${personalInfo.email}`) },
  { label: "Download Resume", action: () => window.open(personalInfo.resume, "_blank") },
];

function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const runCommand = (cmd) => {
    cmd.action();
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[250] bg-black/70 backdrop-blur-sm flex items-start justify-center pt-32 px-6"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-lg bg-neutral-900 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-800">
              <Search size={18} className="text-amber-400 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command..."
                className="bg-transparent outline-none text-white placeholder-neutral-500 flex-1 text-sm"
              />
              <kbd className="text-xs text-neutral-500 border border-neutral-700 rounded px-1.5 py-0.5">Esc</kbd>
            </div>
            <div className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="text-neutral-500 text-sm px-4 py-3">No matches</p>
              )}
              {filtered.map((cmd) => (
                <button
                  key={cmd.label}
                  onClick={() => runCommand(cmd)}
                  className="w-full flex items-center justify-between text-left px-4 py-2.5 text-neutral-300 hover:bg-amber-600/10 hover:text-amber-400 transition text-sm"
                >
                  {cmd.label}
                  <ArrowRight size={14} className="opacity-40" />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;