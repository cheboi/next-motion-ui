"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold"
      >
        Ready to Get Started?
      </motion.h2>

      <motion.button
        whileHover={{ scale: 1.1 }}
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold"
      >
        Get Started
      </motion.button>
    </section>
  );
}
