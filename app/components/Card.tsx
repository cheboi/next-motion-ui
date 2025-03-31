"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      className="w-64"
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
        }}
        className="p-6 bg-gray-800 rounded-lg text-center"
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </motion.div>
    </Tilt>
  );
}
