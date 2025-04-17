"use client";

import React from "react";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { DiagonalSplit } from "@/components/sections/DiagonalSplit";
import { 
  SiHtml5, SiCss3, SiSass, SiJavascript, SiReact, SiBootstrap, 
  SiGit, SiFigma, SiSpring, SiNextdotjs, SiAngular,
  SiNodedotjs, SiMysql, SiMongodb, SiTypescript,
  SiDocker, SiJenkins, SiExpress, SiChakraui, SiSqlite,
  SiPostman
} from "react-icons/si";
import { FaJava, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaintBrush, FaLaptopCode, FaWrench } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import ExoticBackground from "@/app/components/ExoticBackground";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Navigation } from "@/components/Navigation";

// Dynamic import for icons - will only load when Skills section is rendered
const IconsComponent = dynamic(() => import('@/components/IconsComponent'), {
  loading: () => <div className="text-center text-white">Loading skills...</div>,
  ssr: false
});

export default function Home() {
  // Array de habilidades actuales con sus respectivos iconos
  const currentSkills = [
    { name: "REACT", iconName: "SiReact", color: "bg-cyan-500" },
    { name: "REACT NATIVE", iconName: "SiReact", color: "bg-blue-500" },
    { name: "JAVASCRIPT", iconName: "SiJavascript", color: "bg-yellow-400" },
    { name: "HTML", iconName: "SiHtml5", color: "bg-red-500" },
    { name: "CSS", iconName: "SiCss3", color: "bg-blue-600" },
    { name: "NODE.JS", iconName: "SiNodedotjs", color: "bg-green-600" },
    { name: "SQLITE", iconName: "SiSqlite", color: "bg-blue-800" },
    { name: "MONGODB", iconName: "SiMongodb", color: "bg-green-500" },
    { name: "CHAKRA-UI", iconName: "SiChakraui", color: "bg-teal-500" },
    { name: "EXPRESS", iconName: "SiExpress", color: "bg-gray-800" },
    { name: "GIT", iconName: "SiGit", color: "bg-red-600" },
    { name: "POSTMAN", iconName: "SiPostman", color: "bg-orange-500" },
    { name: "SPRING BOOT", iconName: "SiSpring", color: "bg-green-700" },
    { name: "MYSQL", iconName: "SiMysql", color: "bg-blue-700" },
    { name: "ANGULAR JS", iconName: "SiAngular", color: "bg-red-500" },
    { name: "JAVA", iconName: "FaJava", color: "bg-orange-600" }
  ];

  // Array de otras habilidades
  const otherSkills = [
    { name: "ENGLISH", iconName: "IoLanguage", color: "bg-blue-600" },
    { name: "SPANISH", iconName: "IoLanguage", color: "bg-yellow-500" },
    { name: "DOCKER", iconName: "SiDocker", color: "bg-blue-500" },
    { name: "CI/CD", iconName: "SiJenkins", color: "bg-green-500" }
  ];

  return (
    <div className="relative min-h-screen bg-transparent">
      {/* Background Effect */}
      <ExoticBackground />
      
      {/* Navigation (global) */}
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="relative flex flex-col md:flex-row min-h-screen">
          <AboutSection />
          <ProfileSection />
          <DiagonalSplit />
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 pt-32 md:pt-20 relative z-10">
          <div className="max-w-3xl mx-auto px-4">
            {/* ABOUT ME HEADER */}
            <div className="flex justify-center mb-12">
              <div className="glass-card px-10 py-2">
                <h2 className="text-center text-sm tracking-widest font-medium text-white">ABOUT ME</h2>
              </div>
            </div>

            {/* INTRO TEXT */}
            <div className="mb-12">
              <p className="text-center text-sm text-gray-300 max-w-xl mx-auto">
                I'm a 26-year-old advanced student of Computer Science with a strong foundation in full-stack development. 
                With over 2 years of professional experience, I specialize in creating elegant and functional web solutions
                that stand out for their design and performance. I'm constantly learning new technologies and adapting quickly
                to project requirements, delivering efficient and high-quality solutions.
              </p>
            </div>

            {/* RESUME BUTTON */}
            <div className="flex justify-center mb-16">
              <Button 
                className="glass-button"
                asChild
              >
                <Link 
                  href="https://asset.cloudinary.com/dhmw3jd5q/8bb88115bd14ecc881b5e8c370859f44" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  download="Matias_Alzugaray_CV.pdf"
                >
                  RESUME
                </Link>
              </Button>
            </div>

            {/* SERVICES SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="glass-card p-6 h-full flex flex-col items-center">
                <h3 className="font-medium mb-4 tracking-wider text-white">FRONTEND DEVELOPMENT</h3>
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                  <FaLaptopCode className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-gray-300 flex-grow text-center">
                  Creating responsive and interactive user interfaces using React, React Native, and Angular. Focusing on modern design principles, performance optimization, and exceptional user experience.
                </p>
              </div>
              <div className="glass-card p-6 h-full flex flex-col items-center">
                <h3 className="font-medium mb-4 tracking-wider text-white">BACKEND DEVELOPMENT</h3>
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                  <FaWrench className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-gray-300 flex-grow text-center">
                  Building robust server-side applications with Node.js, Express, and Spring Boot. Implementation of RESTful APIs and efficient database management with MySQL and MongoDB.
                </p>
              </div>
              <div className="glass-card p-6 h-full flex flex-col items-center">
                <h3 className="font-medium mb-4 tracking-wider text-white">FULL-STACK SOLUTIONS</h3>
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                  <FaPaintBrush className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-gray-300 flex-grow text-center">
                  End-to-end development from concept to deployment. Implementing scalable architecture with clean code principles, modern tools, and best development practices for web and mobile applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative z-10">
          <div className="max-w-3xl mx-auto px-4">
            {/* SKILLS HEADER */}
            <div className="flex justify-center mb-8">
              <div className="glass-card px-10 py-2">
                <h2 className="text-center text-sm tracking-widest font-medium text-white">SKILLS</h2>
              </div>
            </div>

            {/* Render IconsComponent with skill data */}
            <IconsComponent 
              currentSkills={currentSkills} 
              otherSkills={otherSkills} 
            />
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 relative z-10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex justify-center mb-12">
              <div className="glass-card px-10 py-2">
                <h2 className="text-center text-sm tracking-widest font-medium text-white">PORTFOLIO</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="glass-card overflow-hidden">
                  <div className="h-48 bg-black/50 flex items-center justify-center">
                    <p className="text-gray-400">Project Image {item}</p>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2 text-white">Project Title {item}</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Short description of the project, technologies used and main features.
                    </p>
                    <div className="flex justify-between">
                      <Button className="glass-button" size="sm">DEMO</Button>
                      <Button className="glass-button-secondary" size="sm">CODE</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <Button 
                className="glass-button px-8"
                asChild
              >
                <Link href="#portfolio">VIEW PORTFOLIO</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative z-10">
          <ContactForm />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
} 