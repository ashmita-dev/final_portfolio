import { motion } from "framer-motion";

function GithubActivity({ username }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 max-w-2xl w-full overflow-x-auto"
    >
      <h4 className="text-amber-400 text-sm uppercase tracking-wide mb-4">
        GitHub Activity
      </h4>
      <img
        src={`https://ghchart.rshah.org/f59e0b/${username}`}
        alt={`${username} GitHub contribution graph`}
        className="w-full min-w-[600px]"
      />
    </motion.div>
  );
}

export default GithubActivity;