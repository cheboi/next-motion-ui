"use client";

import { motion } from "framer-motion";

export default function ScrollAnimation() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold"
      >
        Scroll Down to See Animations
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="mt-4 text-lg text-gray-300"
      >
        This section fades in when scrolled into view.
      </motion.p>
    </section>
  );
}
