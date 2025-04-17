"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import ExoticBackground from "../components/ExoticBackground";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern online store built with Next.js, Prisma, and Stripe integration.",
      image: "/placeholder-project-1.jpg",
      demo: "https://demo-link.com",
      code: "https://github.com/yourusername/project1"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app with drag-and-drop UI and real-time collaboration features.",
      image: "/placeholder-project-2.jpg",
      demo: "https://demo-link.com",
      code: "https://github.com/yourusername/project2"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio showcasing creative work and professional skills.",
      image: "/placeholder-project-3.jpg",
      demo: "https://demo-link.com",
      code: "https://github.com/yourusername/project3"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Interactive weather visualization using OpenWeatherMap API and D3.js.",
      image: "/placeholder-project-4.jpg",
      demo: "https://demo-link.com",
      code: "https://github.com/yourusername/project4"
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "Data visualization dashboard for social media performance metrics.",
      image: "/placeholder-project-5.jpg",
      demo: "https://demo-link.com",
      code: "https://github.com/yourusername/project5"
    },
    {
      id: 6,
      title: "AI Image Generator",
      description: "Web app that generates artwork using machine learning algorithms.",
      image: "/placeholder-project-6.jpg",
      demo: "https://demo-link.com",
      code: "https://github.com/yourusername/project6"
    }
  ];

  return (
    <>
      <ExoticBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent projects and creative work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-black/30 backdrop-blur-sm border border-white/10 p-5 rounded-2xl shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="h-52 mb-4 overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-3">
                <Button 
                  asChild
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Link href={project.demo}>View Demo</Link>
                </Button>
                <Button 
                  asChild
                  className="bg-transparent border border-white/30 hover:bg-white/10" 
                >
                  <Link href={project.code}>See Code</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            asChild
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg"
          >
            <Link href="https://github.com/yourusername">SEE MORE PROJECTS</Link>
          </Button>
        </div>
      </div>
    </>
  );
} 