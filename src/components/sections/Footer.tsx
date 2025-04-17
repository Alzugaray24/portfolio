"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-10 bg-black/40 backdrop-blur-md text-white relative z-10 w-full">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="flex justify-center mb-12">
          <button 
            onClick={scrollToTop}
            className="text-xs tracking-widest uppercase hover:text-primary transition-colors flex flex-col items-center"
          >
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2 text-primary">
              <path d="M8 0L16 8H0L8 0Z" fill="currentColor"/>
            </svg>
            BACK TO TOP
          </button>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Link href="https://www.linkedin.com/in/matias-alzugaray-piven-29863a213/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaLinkedin size={16} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://github.com/Alzugaray24" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaGithub size={16} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.instagram.com/matias_alzugaray/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <FaInstagram size={16} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="mailto:alzugaray1997@gmail.com" className="text-white hover:text-primary transition-colors">
              <MdEmail size={16} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          
          <p className="text-xs text-gray-400">
            ©{new Date().getFullYear()} Matias Alzugaray. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 