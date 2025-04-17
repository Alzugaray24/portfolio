"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Certificate {
  id: number;
  title: string;
  institution: string;
  imageUrl: string;
  isPdf?: boolean;
  description: string;
  duration: string;
}

export function CertificatesSection() {
  // Datos de los certificados
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Mobile App Development",
      institution: "Coderhouse",
      imageUrl: "https://res.cloudinary.com/dhmw3jd5q/image/upload/v1744922926/app_xp0hn6.jpg",
      description: "Creating responsive mobile interfaces with reusable components and implementing navigation patterns for seamless user experience",
      duration: "3 months"
    },
    {
      id: 2,
      title: "Software Development",
      institution: "Sofka U",
      imageUrl: "https://res.cloudinary.com/dhmw3jd5q/image/upload/v1744922934/sofka_hrfhgq.jpg",
      description: "Implementing clean architecture and SOLID principles to build scalable and maintainable enterprise applications",
      duration: "3 months"
    },
    {
      id: 3,
      title: "SQL Certificate",
      institution: "CPE",
      imageUrl: "https://res.cloudinary.com/dhmw3jd5q/image/upload/v1744922939/sql_b1uxa4.jpg",
      description: "Advanced database design, complex query optimization, and performance tuning for enterprise-grade data systems",
      duration: "2 months"
    },
    {
      id: 4,
      title: "Backend Development",
      institution: "Coderhouse",
      imageUrl: "https://res.cloudinary.com/dhmw3jd5q/image/upload/v1744920299/backend-certificate_kfqxu0.jpg",
      description: "Building secure RESTful APIs, implementing authentication systems, and designing efficient database integrations",
      duration: "6 months"
    },
    {
      id: 5,
      title: "JavaScript",
      institution: "Coderhouse",
      imageUrl: "https://res.cloudinary.com/dhmw3jd5q/image/upload/v1744920400/javascript-certificate_nlveeh.jpg",
      description: "DOM manipulation, asynchronous programming with promises, and event-driven architecture for interactive web applications",
      duration: "9 weeks"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Certificate Carousel */}
      <div className="relative">
        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 z-10 flex items-center">
          <Button 
            onClick={prevCertificate} 
            variant="ghost" 
            className="h-12 w-12 rounded-full bg-black/30 backdrop-blur-sm hover:bg-primary/20 text-white"
            aria-label="Previous certificate"
          >
            <IoChevronBackOutline className="h-6 w-6" />
          </Button>
        </div>

        <div className="absolute inset-y-0 right-0 z-10 flex items-center">
          <Button 
            onClick={nextCertificate} 
            variant="ghost" 
            className="h-12 w-12 rounded-full bg-black/30 backdrop-blur-sm hover:bg-primary/20 text-white"
            aria-label="Next certificate"
          >
            <IoChevronForwardOutline className="h-6 w-6" />
          </Button>
        </div>

        {/* Certificate Display */}
        <div className="py-4 overflow-hidden">
          <motion.div 
            className="flex justify-center"
            key={certificates[currentIndex].id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-card p-4 max-w-2xl mx-auto w-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-4">
                {certificates[currentIndex].isPdf ? (
                  <iframe
                    src={certificates[currentIndex].imageUrl}
                    className="w-full h-full border-0"
                    style={{ height: '400px' }}
                    title={`${certificates[currentIndex].title} certificate`}
                  />
                ) : (
                  <Image
                    src={certificates[currentIndex].imageUrl}
                    alt={`${certificates[currentIndex].title} certificate`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 700px"
                    priority
                  />
                )}
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white">{certificates[currentIndex].title}</h3>
                <p className="text-primary/80 mb-2">{certificates[currentIndex].institution}</p>
                <p className="text-sm text-gray-300">{certificates[currentIndex].description}</p>
                <p className="text-xs text-primary/60 mt-1">Duration: {certificates[currentIndex].duration}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certificate Indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {certificates.map((cert, index) => (
            <button
              key={cert.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary' : 'bg-white/30'
              }`}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 