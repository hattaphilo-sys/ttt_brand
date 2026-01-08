"use client";
import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <motion.div
        className="absolute rounded-full opacity-40"
        style={{
          width: "min(60vmin, 60vw)",
          height: "min(60vmin, 60vw)",
          top: "10%",
          left: "10%",
          background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
          filter: "blur(35px)",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute rounded-full opacity-35"
        style={{
          width: "min(70vmin, 70vw)",
          height: "min(70vmin, 70vw)",
          bottom: "10%",
          right: "10%",
          background: "radial-gradient(circle, rgba(200,220,255,0.6) 0%, transparent 70%)",
          filter: "blur(45px)",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute rounded-full opacity-30"
        style={{
          width: "min(50vmin, 50vw)",
          height: "min(50vmin, 50vw)",
          top: "50%",
          left: "55%",
          background: "radial-gradient(circle, rgba(180,200,255,0.5) 0%, transparent 70%)",
          filter: "blur(40px)",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
