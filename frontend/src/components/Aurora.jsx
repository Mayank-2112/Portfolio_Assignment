import React, { useEffect } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";

const colors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
export default function Aurora() {
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <>
      <motion.div
        style={{ backgroundImage }}
        className="fixed w-full grid h-full overflow-hidden bg-gray-950"
      >
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} fade speed={1} />
          </Canvas>
        </div>
        
      </motion.div>
    </>
  );
}
