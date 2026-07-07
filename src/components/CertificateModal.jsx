import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

function CertificateModal({ image, title, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-3xl w-full bg-neutral-900 border border-amber-500/40 rounded-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-neutral-800 hover:bg-amber-600 transition flex items-center justify-center text-neutral-300 hover:text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <img src={image} alt={title} className="w-full h-auto rounded-xl" />
            <p className="text-center text-neutral-400 text-sm mt-3">{title}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CertificateModal;