"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProfileSection() {
  return (
    <div className="w-full md:w-1/2 bg-transparent p-8 pt-24 md:p-12 md:pt-28 lg:p-16 lg:pt-32 flex flex-col relative z-10 min-h-screen md:min-h-0">
      {/* Profile image container - Hidden on mobile */}
      <div className="hidden md:flex flex-grow items-center justify-center">
        <motion.div 
          className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden glass-card shadow-[0_0_30px_rgba(106,17,203,0.2)] transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(106,17,203,0.3)" }}
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10"></div>
          
          {/* Border glow effect */}
          <div className="absolute inset-0 border border-primary/30 rounded-2xl z-20"></div>
          
          {/* Image */}
          <Image
            src="https://res.cloudinary.com/dhmw3jd5q/image/upload/v1744902248/yo-blanco-1x1_ktxatq.jpg"
            alt="Profile"
            className="w-full h-full object-cover object-center"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            priority
          />
          
          {/* Decorative corner accents */}
          <div className="absolute top-0 right-0 w-20 h-20 z-20">
            <div className="absolute top-4 right-4 w-[1px] h-8 bg-primary/60"></div>
            <div className="absolute top-4 right-4 h-[1px] w-8 bg-primary/60"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-20 h-20 z-20">
            <div className="absolute bottom-4 left-4 w-[1px] h-8 bg-primary/60"></div>
            <div className="absolute bottom-4 left-4 h-[1px] w-8 bg-primary/60"></div>
          </div>
          
          {/* Subtle overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 via-transparent to-purple-500/30 mix-blend-overlay opacity-80 z-10"></div>
        </motion.div>
      </div>
      
      {/* Mobile intro text - Only visible on mobile */}
      <div className="flex flex-col items-center justify-center md:hidden h-full min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Mobile profile image - circular and small */}
          <div className="w-32 h-32 mx-auto mb-8 relative rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_20px_rgba(106,17,203,0.3)]">
            <Image
              src="https://res.cloudinary.com/dhmw3jd5q/image/upload/v1744902248/yo-blanco-1x1_ktxatq.jpg"
              alt="Profile"
              className="object-cover object-center"
              fill
              sizes="(max-width: 768px) 128px, 128px"
              priority
            />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-2">My name is Matias</h2>
          <p className="text-xl text-primary mb-8">I'M A DEVELOPER</p>
          
          {/* Social links */}
          <div className="justify-center mb-8">
            <SocialLinks />
          </div>
          
          {/* Call to action buttons for mobile */}
          <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
            <Button 
              className="glass-button w-full"
              asChild
            >
              <Link href="#contact">Let's work together</Link>
            </Button>
            <Button 
              className="glass-button-secondary w-full"
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
          </div>
        </motion.div>
      </div>
    </div>
  );
} 