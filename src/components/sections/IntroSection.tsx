"use client";

import { Button } from "@/components/ui/button";

export function IntroSection() {
  return (
    <div className="bg-[#1a1a1a] text-white p-8 md:p-12 lg:p-16">
      <h2 className="text-2xl font-bold mb-6">MY SERVICES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <div className="bg-black/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
          <p className="text-gray-300">
            Creating modern and responsive user interfaces using React, Next.js, and TailwindCSS.
            Focus on performance and exceptional user experience.
          </p>
        </div>
        
        <div className="bg-black/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Backend Development</h3>
          <p className="text-gray-300">
            Building efficient and scalable APIs using Node.js and Express.
            Implementation of SQL and NoSQL databases according to project requirements.
          </p>
        </div>
        
        <div className="bg-black/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">System Design</h3>
          <p className="text-gray-300">
            Planning and architecture of technological solutions tailored to specific needs.
            Focus on scalability, security, and maintainability.
          </p>
        </div>
      </div>
      <Button 
        variant="outline" 
        className="border-white bg-white text-black hover:bg-gray-200 hover:border-gray-200 transition-colors"
      >
        VIEW PORTFOLIO
      </Button>
    </div>
  );
} 