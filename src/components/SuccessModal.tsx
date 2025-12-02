import { motion } from "framer-motion";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-[2000]"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 12 }}
        className="bg-white/10 dark:bg-gray-900/40 border border-cyan-400/40 p-8 rounded-3xl text-center shadow-[0_0_25px_rgba(0,255,255,0.3)]"
      >
        <h2 className="text-3xl font-semibold text-cyan-400 mb-3">
          Message Sent Successfully
        </h2>
        <p className="text-gray-200 mb-6">Thank you for reaching out. I’ll get back soon!</p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:scale-105 transition-all"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
