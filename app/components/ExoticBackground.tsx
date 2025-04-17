'use client';

import { useEffect, useRef } from 'react';
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
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 blur-[120px]"
          animate={{
            x: ['-20%', '60%', '-20%'],
            y: ['10%', '30%', '10%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-600/20 to-fuchsia-500/20 blur-[100px]"
          animate={{
            x: ['60%', '10%', '60%'],
            y: ['60%', '20%', '60%'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
} 