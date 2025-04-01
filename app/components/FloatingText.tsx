"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";

export default function FloatingText() {
  return (
    <div className="h-64 w-full flex items-center justify-center">
      <Canvas>
        <ambientLight intensity={1} />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Text fontSize={1} color="white" depthWrite={false}>
            3D Text
          </Text>
        </Float>
      </Canvas>
    </div>
  );
}
