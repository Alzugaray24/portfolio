"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
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

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="ENTER YOUR NAME*"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-white/30 py-2 px-1 focus:outline-none focus:border-primary/70 placeholder-white/60 text-sm font-light relative z-10 text-white"
          />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="ENTER YOUR EMAIL*"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-white/30 py-2 px-1 focus:outline-none focus:border-primary/70 placeholder-white/60 text-sm font-light relative z-10 text-white"
          />
        </div>

        <div className="relative">
          <input
            type="tel"
            name="phone"
            placeholder="PHONE NUMBER"
            value={formData.phone}
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
          >
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
} 