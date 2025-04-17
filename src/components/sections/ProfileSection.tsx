"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProfileSection() {
  return (
    <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col items-center justify-center min-h-[100vh] md:min-h-0">
      {/* Desktop version - Hidden on mobile */}
      <motion.div
        className="relative w-full max-w-[350px] hidden md:block"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative">
          {/* Animated glow effects */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 via-purple-500/20 to-blue-500/40 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 animate-pulse-slow -z-10"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/30 rounded-2xl blur-2xl opacity-50 group-hover:opacity-80 animate-pulse-slow -z-10 animation-delay-2000"></div>
          
          {/* Primary image container */}
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
            {/* Image with transparent background effect */}
            <div className="w-full h-full relative rounded-xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhmw3jd5q/image/upload/v1744902248/yo-blanco-1x1_ktxatq.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-center"
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                priority
              />
              
              {/* Subtle highlights and accents */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent mix-blend-overlay"></div>
              
              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-20 h-20 z-10">
                <div className="absolute top-4 right-4 w-[1px] h-12 bg-primary/60"></div>
                <div className="absolute top-4 right-4 h-[1px] w-12 bg-primary/60"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-20 h-20 z-10">
                <div className="absolute bottom-4 left-4 w-[1px] h-12 bg-primary/60"></div>
                <div className="absolute bottom-4 left-4 h-[1px] w-12 bg-primary/60"></div>
              </div>
            </div>
          </div>
          
          {/* Floating particle effects behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-20">
            <div className="absolute top-1/4 right-0 w-3 h-3 rounded-full bg-blue-500/50 animate-float-slow blur-sm"></div>
            <div className="absolute bottom-1/4 left-0 w-2 h-2 rounded-full bg-primary/50 animate-float-slow animation-delay-1000 blur-sm"></div>
            <div className="absolute top-3/4 right-1/4 w-4 h-4 rounded-full bg-purple-500/40 animate-float-slow animation-delay-2000 blur-sm"></div>
          </div>
        </div>
      </motion.div>
      
      {/* Mobile version - Compact circular image with actions */}
      <div className="flex flex-col items-center justify-center md:hidden h-[calc(100vh-80px)] py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Mobile circular image with glow effect */}
          <div className="relative mb-10">
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/40 to-purple-500/40 blur-md animate-pulse-slow"></div>
            
            {/* Circular profile image */}
            <div className="w-28 h-28 relative rounded-full overflow-hidden border-2 border-white/10">
              <Image
                src="https://res.cloudinary.com/dhmw3jd5q/image/upload/v1744902248/yo-blanco-1x1_ktxatq.jpg"
                alt="Profile"
                className="object-cover object-center"
                fill
                sizes="112px"
                priority
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-10">
            <h1 className="text-white text-xl font-medium tracking-wider mb-1">Matias Alzugaray</h1>
            <p className="text-primary text-sm font-light">Full-Stack Developer</p>
          </div>
          
          {/* Social links - compact layout */}
          <div className="mb-10">
            <SocialLinks />
          </div>
          
          {/* Call to action buttons - stacked for mobile */}
          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
            <Button 
              className="glass-button w-full text-sm py-1.5"
              asChild
            >
              <Link href="#contact">Let's work together</Link>
            </Button>
            <Button 
              className="glass-button-secondary w-full text-sm py-1.5"
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
          </div>
        </motion.div>
      </div>
    </div>
  );
} 