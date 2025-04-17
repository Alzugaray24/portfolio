'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function ExoticBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Solid background color */}
      <div className="absolute inset-0 bg-[#030014]" />
      
      {/* Grid pattern overlay - using inline SVG for reliability */}
      <div className="absolute inset-0 opacity-30">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 25 0 L 0 0 0 25"
                fill="none"
                stroke="rgba(100, 100, 100, 0.15)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-600/10 via-blue-500/5 to-fuchsia-500/10 blur-[120px]"
          animate={{
            x: ['-10%', '10%', '-10%'],
            y: ['-5%', '15%', '-5%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "mirror"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-600/10 to-primary/5 blur-[150px]"
          animate={{
            x: ['5%', '-10%', '5%'],
            y: ['10%', '0%', '10%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "mirror"
          }}
        />
      </div>
      
      {/* Fine noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-soft-light"></div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient-subtle pointer-events-none"></div>
    </div>
  );
} 