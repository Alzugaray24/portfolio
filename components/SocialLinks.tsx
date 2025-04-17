"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <div className={`flex gap-3 mt-8 ${className}`}>
      <Link 
        href="mailto:alzugaray1997@gmail.com" 
        className="bg-black/30 border border-white/10 text-white p-3 rounded-full hover:bg-primary/20 hover:border-primary/30 transition-all" 
        aria-label="Email"
      >
        <MdEmail size={20} />
        <span className="sr-only">Email</span>
      </Link>
      <Link 
        href="https://github.com/Alzugaray24" 
        target="_blank" rel="noopener noreferrer" 
        className="bg-black/30 border border-white/10 text-white p-3 rounded-full hover:bg-primary/20 hover:border-primary/30 transition-all" 
        aria-label="GitHub"
      >
        <FaGithub size={20} />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link 
        href="https://www.linkedin.com/in/matias-alzugaray-piven-29863a213/" 
        target="_blank" rel="noopener noreferrer" 
        className="bg-black/30 border border-white/10 text-white p-3 rounded-full hover:bg-primary/20 hover:border-primary/30 transition-all" 
        aria-label="LinkedIn"
      >
        <FaLinkedin size={20} />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link 
        href="tel:+59896206666" 
        className="bg-black/30 border border-white/10 text-white p-3 rounded-full hover:bg-primary/20 hover:border-primary/30 transition-all" 
        aria-label="Phone"
      >
        <MdPhone size={20} />
        <span className="sr-only">Phone</span>
      </Link>
    </div>
  );
} 