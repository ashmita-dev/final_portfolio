import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6 py-24 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-4"
      >
        Let's Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-purple-400 italic mb-12 max-w-xl"
      >
        Slide into my inbox. My APIs respond faster than my texts.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row gap-4 mb-4"
      >
        <a
          href={`mailto:${personalInfo.email}`}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 transition rounded-full text-white font-medium"
        >
          {personalInfo.email}
        </a>

        <a
          href={`tel:${personalInfo.phone}`}
          className="px-6 py-3 border border-neutral-600 hover:border-purple-400 transition rounded-full text-white font-medium"
        >
          {personalInfo.phone}
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="text-neutral-600 text-xs mb-10"
      >
        Response time: usually faster than my code reviews.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex gap-4 mb-10"
      >
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-neutral-600 hover:border-purple-400 transition rounded-full text-white font-medium"
        >
          GitHub
        </a>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-neutral-600 hover:border-purple-400 transition rounded-full text-white font-medium"
        >
          LinkedIn
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-neutral-600 text-sm"
      >
        {personalInfo.name} — {personalInfo.location}
      </motion.p>
    </section>
  );
}

export default Contact;