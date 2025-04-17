"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/Logo';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  // Handle scroll event to add background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Fixed Navigation Bar */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2 bg-black/60 backdrop-blur-md' : 'py-4 bg-black/20 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto px-4 md:px-6 flex items-center justify-between max-w-[1180px]">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 z-50 relative">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link 
                href="#about" 
                className="text-sm text-white hover:text-primary transition-colors duration-300 relative group"
              >
                About me
                <span className="absolute -bottom-1 left-0 h-[1px] bg-primary/60 w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="#skills" 
                className="text-sm text-white hover:text-primary transition-colors duration-300 relative group"
              >
                Skills
                <span className="absolute -bottom-1 left-0 h-[1px] bg-primary/60 w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="#certificates" 
                className="text-sm text-white hover:text-primary transition-colors duration-300 relative group"
              >
                Certificates
                <span className="absolute -bottom-1 left-0 h-[1px] bg-primary/60 w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
              {/* 
              <Link 
                href="#portfolio" 
                className="text-sm text-white hover:text-primary transition-colors duration-300 relative group"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 h-[1px] bg-primary/60 w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
              */}
            </div>
            
            <Button 
              asChild
              className="glass-button whitespace-nowrap"
            >
              <Link href="#contact">CONTACT ME</Link>
            </Button>
          </div>
          
          {/* Toggle Button - Always visible with highest z-index */}
          <div className="relative z-50 md:hidden">
            <button 
              className="text-white p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40">
            {/* Background Overlay */}
            <motion.div 
              className="fixed inset-0 bg-black/95 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Menu Content */}
            <motion.div 
              className="fixed inset-0 z-40 pt-24 overflow-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mx-auto px-4 py-8 flex flex-col items-center gap-8 max-w-[1180px]">
                <div className="flex flex-col items-center gap-8 w-full">
                  <Link 
                    href="#about" 
                    className="text-xl text-white hover:text-primary transition-colors duration-300 relative group"
                    onClick={closeMenu}
                  >
                    About me
                    <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[1px] bg-primary/60 w-0 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link 
                    href="#skills" 
                    className="text-xl text-white hover:text-primary transition-colors duration-300 relative group"
                    onClick={closeMenu}
                  >
                    Skills
                    <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[1px] bg-primary/60 w-0 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link 
                    href="#certificates" 
                    className="text-xl text-white hover:text-primary transition-colors duration-300 relative group"
                    onClick={closeMenu}
                  >
                    Certificates
                    <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[1px] bg-primary/60 w-0 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  {/* 
                  <Link 
                    href="#portfolio" 
                    className="text-xl text-white hover:text-primary transition-colors duration-300 relative group"
                    onClick={closeMenu}
                  >
                    Portfolio
                    <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[1px] bg-primary/60 w-0 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  */}
                  
                  <Button 
                    asChild
                    className="glass-button whitespace-nowrap mt-4 w-full"
                    onClick={closeMenu}
                  >
                    <Link href="#contact">CONTACT ME</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
} 