'use client';
import { motion } from 'framer-motion';

interface BackgroundEffectsProps {
  className?: string;
}

export function BackgroundEffects({ className }: BackgroundEffectsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-indigo-900/90" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'url(/grid.svg)', backgroundSize: '40px 40px' }}
      />
      
      {/* Exotic jungle patterns overlay */}
      <div 
        className="absolute inset-0 opacity-15 mix-blend-soft-light"
        style={{ backgroundImage: 'url(/patterns/exotic-pattern.png)', backgroundSize: 'cover' }}
      />
      
      {/* Single abstract shape with optimized animation */}
      <motion.div 
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-fuchsia-600/20 blur-[140px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "mirror"
        }}
      />
      
      <motion.div 
        className="absolute top-[60%] -right-[5%] w-[40%] h-[40%] rounded-full bg-cyan-500/30 blur-[120px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-[30%] left-[60%] w-[35%] h-[35%] rounded-full bg-violet-400/25 blur-[100px]"
        animate={{
          x: [0, 35, 0],
          y: [0, -35, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-emerald-400/20 blur-[90px]"
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Reduced sparkles */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
        ))}
      </div>
      
      {/* Animated lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => {
          const startPos = Math.random() * 100;
          const endPos = Math.random() * 100;
          
          return (
            <motion.div
              key={`line-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{
                top: `${startPos}%`,
                left: '0%',
                width: '100%',
                transformOrigin: 'left center',
              }}
              animate={{
                top: [`${startPos}%`, `${endPos}%`, `${startPos}%`],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 10,
              }}
            />
          );
        })}
      </div>
    </div>
  );
} 