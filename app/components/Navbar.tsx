"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full bg-gray-800 p-4 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-xl font-bold text-white"
        >
          Motion UI
        </motion.h1>
        <ul className="flex space-x-6">
          <motion.li whileHover={{ scale: 1.2 }}>
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a href="#" className="text-gray-300 hover:text-white">
              About
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
}
