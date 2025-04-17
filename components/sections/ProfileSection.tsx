"use client";

import Image from "next/image";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export function ProfileSection() {
  const [isImageError, setIsImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full md:w-1/2 bg-transparent p-8 md:p-12 lg:p-16 flex flex-col relative z-10">
      {/* Navigation */}
      <Navigation />

      {/* Profile image container */}
      <div className="flex-grow flex items-center justify-center">
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
          {isImageError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-800">
              <p className="text-white">Image not available</p>
            </div>
          ) : (
            <>
              <img
                src="https://res.cloudinary.com/dhmw3jd5q/image/upload/v1744902248/yo-blanco-1x1_ktxatq.jpg"
                alt="Profile"
                className={`w-full h-full object-cover object-center transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onError={() => setIsImageError(true)}
                onLoad={() => setIsLoaded(true)}
              />
              
              {/* Loading overlay */}
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </>
          )}
          
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
    </div>
  );
} 