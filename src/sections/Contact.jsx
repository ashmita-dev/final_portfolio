import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import MagneticButton from "../components/MagneticButton";

function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6 py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900/25 via-neutral-950 to-neutral-950" />
      <div className="absolute w-[500px] h-[500px] bg-amber-500/25 rounded-full blur-[100px] top-1/3 left-1/2 -translate-x-1/2" />
      <div className="absolute w-72 h-72 bg-orange-500/15 rounded-full blur-[90px] bottom-0 right-1/4" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-4xl font-bold mb-4 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent"
      >
        Let's Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative text-amber-400 italic mb-12 max-w-xl"
      >
        Slide into my inbox. My APIs respond faster than my texts.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex flex-col md:flex-row gap-4 mb-4"
      >
        <MagneticButton
          href={`mailto:${personalInfo.email}`}
          className="px-6 py-3 bg-amber-600 hover:bg-amber-500 transition rounded-full text-white font-medium"
        >
          {personalInfo.email}
        </MagneticButton>

        <MagneticButton
          href={`tel:${personalInfo.phone}`}
          className="px-6 py-3 border border-neutral-600 hover:border-amber-400 transition rounded-full text-white font-medium"
        >
          {personalInfo.phone}
        </MagneticButton>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="relative text-neutral-600 text-xs mb-10"
      >
        Response time: usually faster than my code reviews.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative flex gap-4 mb-10"
      >
        <MagneticButton
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-neutral-600 hover:border-amber-400 transition rounded-full text-white font-medium"
        >
          GitHub
        </MagneticButton>

        <MagneticButton
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-neutral-600 hover:border-amber-400 transition rounded-full text-white font-medium"
        >
          LinkedIn
        </MagneticButton>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative text-neutral-600 text-sm"
      >
        {personalInfo.name} — {personalInfo.location}
      </motion.p>
    </section>
  );
}

export default Contact;