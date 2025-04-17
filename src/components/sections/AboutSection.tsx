"use client";

import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <div className="hidden md:flex w-full md:w-1/2 bg-transparent p-8 md:px-8 md:py-12 flex-col justify-center items-start relative z-10 min-h-[50vh]">
      {/* Main content with enhanced visual design */}
      <div className="w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Intro text with subtle visual elements */}
          <div className="relative">
            <motion.span 
              className="text-primary/80 text-lg md:text-xl font-light block mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Hi, I am
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Matias <span className="text-primary">Alzugaray</span>
            </motion.h1>
            
            {/* Animated underline/accent */}
            <motion.div 
              className="h-[3px] w-0 bg-gradient-to-r from-primary via-purple-500 to-blue-400 mb-6"
              initial={{ width: 0 }}
              animate={{ width: "180px" }}
              transition={{ duration: 0.7, delay: 0.6 }}
            />
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-6 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Full-Stack Developer
            </motion.p>
            
            <motion.p 
              className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Dedicated to crafting sophisticated digital solutions with a focus on user-centric design, scalable architecture, and optimal performance across the full development stack.
            </motion.p>
            
            {/* Skill tags */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="text-xs bg-primary/20 text-primary/90 px-3 py-1 rounded-full">React</span>
              <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">Node.js</span>
              <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">MongoDB</span>
              <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">Express</span>
              <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">JavaScript</span>
            </motion.div>
          </div>

          {/* Social icons */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <SocialLinks />
          </motion.div>
          
          {/* Call to action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button 
              className="glass-button px-8 py-2 rounded-full"
              asChild
            >
              <Link href="#contact">Let's work together</Link>
            </Button>
            <Button 
              className="glass-button-secondary px-8 py-2 rounded-full"
              asChild
            >
              <Link 
                href="https://res.cloudinary.com/dhmw3jd5q/image/upload/v1744910497/matias-alzugaray-cv_z8aro9.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                download="Matias_Alzugaray_CV.pdf"
              >
                Download CV
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 