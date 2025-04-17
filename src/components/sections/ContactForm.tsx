"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setStatus('loading');

    // Configuración completa de EmailJS
    emailjs.sendForm(
      'service_8rtizlm', 
      'template_negubmd', 
      formRef.current,
      '1AEp6DVLcA6XgxsZp' 
    )
      .then(() => {
        setStatus('success');
        setFormData({
          user_name: "",
          user_email: "",
          user_phone: "",
          message: "",
        });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('Error enviando el formulario:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <div className="w-full max-w-[1180px] mx-auto px-6">
      <div className="text-center mb-12">
        <div className="inline-block glass-card px-16 py-4 mb-10">
          <h1 className="text-xl tracking-widest font-normal text-white">CONTACT</h1>
        </div>

        <p className="text-sm text-center max-w-md mx-auto leading-relaxed text-gray-300 px-4">
          Interested in working together? Fill out the form below with some info about your project and I will get back to you as soon as possible.
        </p>

        {/* Simplified divider */}
        <div className="flex justify-center my-6">
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Form Column */}
        <div className="w-full md:w-2/3">
          {status === 'success' && (
            <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-center">
              <p className="text-green-400 text-sm">Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-center">
              <p className="text-red-400 text-sm">Error sending message. Please try again or email me directly.</p>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 p-4 glass-card bg-black/10 rounded-lg">
            <div className="relative">
              <input
                type="text"
                name="user_name"
                placeholder="ENTER YOUR NAME*"
                value={formData.user_name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/30 py-3 px-3 focus:outline-none focus:border-primary/70 placeholder-white/60 text-sm font-light relative z-10 text-white"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="user_email"
                placeholder="ENTER YOUR EMAIL*"
                value={formData.user_email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/30 py-3 px-3 focus:outline-none focus:border-primary/70 placeholder-white/60 text-sm font-light relative z-10 text-white"
              />
            </div>

            <div className="relative">
              <input
                type="tel"
                name="user_phone"
                placeholder="PHONE NUMBER"
                value={formData.user_phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/30 py-3 px-3 focus:outline-none focus:border-primary/70 placeholder-white/60 text-sm font-light relative z-10 text-white"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="YOUR MESSAGE*"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/30 py-3 px-3 focus:outline-none focus:border-primary/70 placeholder-white/60 text-sm font-light resize-none relative z-10 text-white"
              />
            </div>

            <div className="flex justify-center mt-10">
              <Button
                type="submit"
                className="glass-button"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'SENDING...' : 'SUBMIT'}
              </Button>
            </div>
          </form>
        </div>

        {/* Decorative element - only visible on desktop */}
        <div className="hidden md:flex md:w-1/3 flex-col justify-center items-center">
          <div className="relative h-96 w-full">
            {/* Main decorative frame */}
            <motion.div 
              className="absolute inset-0 glass-card border border-white/10 rounded-xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Animated floating circles */}
              <motion.div 
                className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 blur-xl"
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut" 
                }}
                style={{
                  top: '30%',
                  left: '25%',
                }}
              />

              <motion.div 
                className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-primary/20 blur-xl"
                animate={{ 
                  y: [0, 30, 0],
                  x: [0, -15, 0],
                  scale: [1, 1.15, 1], 
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                style={{
                  top: '50%',
                  right: '20%',
                }}
              />

              {/* Decorative accent lines */}
              <div className="absolute top-8 right-8 w-20 h-20">
                <div className="absolute top-0 right-0 w-[1px] h-16 bg-primary/40"></div>
                <div className="absolute top-0 right-0 h-[1px] w-16 bg-primary/40"></div>
              </div>
              <div className="absolute bottom-8 left-8 w-20 h-20">
                <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-primary/40"></div>
                <div className="absolute bottom-0 left-0 h-[1px] w-16 bg-primary/40"></div>
              </div>

              {/* Subtle text overlay */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
                <p className="text-white/20 text-xs uppercase tracking-[0.3em]">let's collaborate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 