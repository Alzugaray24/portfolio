"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Navigation() {
  return (
    <motion.div 
      className="flex justify-between items-center z-20 relative mb-12 bg-black/20 backdrop-blur-sm py-4 px-8 rounded-full border border-white/5 w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center flex-1 mr-6">
        <Link 
          href="/about" 
          className="text-sm text-white hover:text-primary transition-colors duration-300 relative group px-3"
        >
          About me
          <span className="absolute -bottom-1 left-0 h-[1px] bg-primary/60 w-0 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
          href="/skills" 
          className="text-sm text-white hover:text-primary transition-colors duration-300 relative group px-3"
        >
          Skills
          <span className="absolute -bottom-1 left-0 h-[1px] bg-primary/60 w-0 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link 
          href="/portfolio" 
          className="text-sm text-white hover:text-primary transition-colors duration-300 relative group px-3"
        >
          Portfolio
          <span className="absolute -bottom-1 left-0 h-[1px] bg-primary/60 w-0 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </div>
      <Button 
        asChild
        className="glass-button whitespace-nowrap"
      >
        <Link href="/contact">CONTACT ME</Link>
      </Button>
    </motion.div>
  );
} 