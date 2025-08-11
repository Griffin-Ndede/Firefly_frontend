// components/FloatingIconsBackground.jsx
import React from "react";
import { Star, Rocket, Cpu } from "lucide-react";

export default function FloatingIconsBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Floating Icons */}
      <Star className="absolute top-10 left-20 text-cyan-400 opacity-30 animate-float" size={50} strokeWidth={1} />
      <Rocket className="absolute top-40 right-10 text-pink-400 opacity-30 animate-float" size={60} strokeWidth={1} />
      <Cpu className="absolute bottom-20 left-1/3 text-purple-400 opacity-30 animate-float" size={55}  strokeWidth={1}/>
    </div>
  );
}
