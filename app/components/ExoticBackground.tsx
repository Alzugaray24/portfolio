'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function ExoticBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* SVG Background pattern */}
      <div 
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: 'url("/patterns/exotic-grid.svg")',
          backgroundSize: '120px',
          opacity: 0.8
        }}
      />
      
      {/* Animated gradient orbs - reduced to one with simpler animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-fuchsia-500/20 blur-[150px]"
          animate={{
            x: ['-10%', '40%', '-10%'],
            y: ['20%', '40%', '20%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "mirror"
          }}
        />
      </div>
      
      {/* Subtle noise texture - precomputed for better performance */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise"
      />
    </div>
  );
} 