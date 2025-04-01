"use client";

import { motion } from "framer-motion";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import ScrollAnimation from "@/app/components/ScrollAnimation";
import Card from "@/app/components/Card";
import CallToAction from "@/app/components/CallToAction";
import FloatingText from "@/app/components/FloatingText";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <ScrollAnimation />
      <h2 className="text-4xl font-bold">Hover over the cards</h2>
      <div className="flex gap-8 mt-6">
        <Card
          title="Card 1"
          description="This card tilts and glows on hover."
        />
        <Card title="Card 2" description="Smooth and interactive animations." />
      </div>
      <CallToAction />
      <div className="center">
        <h2 className="text-4xl font-bold mb-6">Cool 3D Text</h2>
        <FloatingText />
      </div>
    </main>
  );
}
