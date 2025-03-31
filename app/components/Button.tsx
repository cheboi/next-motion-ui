"use client";

import { motion } from "framer-motion";

export default function Button({ text }: { text: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="px-6 py-3 mt-6 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold"
    >
      {text}
    </motion.button>
  );
}
