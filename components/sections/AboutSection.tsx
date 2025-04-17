"use client";

import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <div className="w-full md:w-1/2 bg-transparent p-8 md:p-12 lg:p-16 flex flex-col justify-between relative z-10">
      {/* Logo */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Logo />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="flex-grow flex flex-col justify-center backdrop-blur-sm rounded-2xl p-6 border border-white/5 bg-black/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl mb-3 text-white/80">Hi, I am</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white section-heading">Matias Alzugaray</h1>
          <p className="text-primary/90 text-lg mb-4">Full-Stack Developer</p>
          <p className="text-gray-300 text-sm mb-6 max-w-md leading-relaxed">
            Passionate about creating modern web applications with exceptional user experiences using React, Node.js and other cutting-edge technologies.
          </p>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SocialLinks />
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button 
            className="glass-button"
            asChild
          >
            <Link href="#contact">Let's work together</Link>
          </Button>
          <Button 
            className="glass-button-secondary"
            asChild
          >
            <Link 
              href="https://asset.cloudinary.com/dhmw3jd5q/8bb88115bd14ecc881b5e8c370859f44" 
              target="_blank" 
              rel="noopener noreferrer" 
              download="Matias_Alzugaray_CV.pdf"
            >
              Download CV
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
} 