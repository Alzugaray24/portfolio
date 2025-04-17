"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';

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
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block glass-card px-16 py-4 mb-10">
          <h1 className="text-xl tracking-widest font-normal text-white">CONTACT</h1>
        </div>

        <p className="text-sm text-center max-w-md mx-auto leading-relaxed text-gray-300">
          Interested in working together? Fill out the form below with some info about your project and I will get back to you as soon as possible.
        </p>

        {/* Simplified divider */}
        <div className="flex justify-center my-6">
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>
      </div>

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

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
        <div className="relative">
          <input
            type="text"
            name="user_name"
            placeholder="ENTER YOUR NAME*"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-white/30 py-2 px-1 focus:outline-none focus:border-primary/70 placeholder-white/60 text-sm font-light relative z-10 text-white"
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
            className="w-full bg-transparent border-b border-white/30 py-2 px-1 focus:outline-none focus:border-primary/70 placeholder-white/60 text-sm font-light relative z-10 text-white"
          />
        </div>

        <div className="relative">
          <input
            type="tel"
            name="user_phone"
            placeholder="PHONE NUMBER"
            value={formData.user_phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/30 py-2 px-1 focus:outline-none focus:border-primary/70 placeholder-white/60 text-sm font-light relative z-10 text-white"
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
            className="w-full bg-transparent border-b border-white/30 py-2 px-1 focus:outline-none focus:border-primary/70 placeholder-white/60 text-sm font-light resize-none relative z-10 text-white"
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
  );
} 