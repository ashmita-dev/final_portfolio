import { motion } from "framer-motion";
import { about, timeline, stats } from "../data/portfolioData";
import Timeline from "../components/Timeline";
import StatsCounter from "../components/StatsCounter";
import GithubActivity from "../components/GithubActivity";
import TiltCard from "../components/TiltCard";
import ScrambleText from "../components/ScrambleText";
import GradientMesh from "../components/GradientMesh";

function About() {
  return (
    <section id="about" className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/20 via-neutral-950 to-neutral-950" />
      <GradientMesh />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-4xl font-bold mb-10 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent"
      >
        <ScrambleText text="About Me" />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-2xl text-neutral-300 text-lg mb-3 text-center"
      >
        {about.bio}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative max-w-2xl text-neutral-400 text-base mb-4 text-center"
      >
        {about.extendedBio}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="relative max-w-2xl text-amber-400 italic text-center mb-14"
      >
        {about.wittyLine}
      </motion.p>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl w-full mb-16">
        {about.highlights.map((item, i) => (
          <TiltCard key={item.title} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h4 className="text-amber-400 font-semibold mb-1.5">{item.title}</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          </TiltCard>
        ))}
      </div>

      <TiltCard className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 max-w-2xl w-full mb-16">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {about.education.degree}
          </h3>
          <p className="text-neutral-400 mb-1">{about.education.school}</p>
          <p className="text-neutral-500 mb-6">{about.education.graduation}</p>

          <div className="flex flex-wrap gap-2">
            {about.education.coursework.map((course, i) => (
              <motion.span
                key={course}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                className="text-sm bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </div>
      </TiltCard>

      <StatsCounter stats={stats} />

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-2xl font-semibold text-white mb-8 mt-8 text-center"
      >
        Milestones
      </motion.h3>

      <Timeline items={timeline} />

      <div className="mt-16 flex justify-center w-full">
        <GithubActivity username="ashmita-dev" />
      </div>
    </section>
  );
}

export default About;