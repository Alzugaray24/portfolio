"use client";

import React, { ReactNode } from "react";
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
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { motion } from "framer-motion";

// Dynamic import for icons - will only load when Skills section is rendered
const IconsComponent = dynamic(() => import('@/components/IconsComponent'), {
  loading: () => <div className="text-center text-white">Loading skills...</div>,
  ssr: false
});

// Componente de animación para secciones
const AnimatedSection = ({ 
  id, 
  className, 
  children 
}: { 
  id: string; 
  className: string; 
  children: ReactNode 
}) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

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
      
      <main className="relative flex flex-col items-center justify-center w-full overflow-hidden text-white">
        {/* Hero section - Desktop shows information on left, image on right. Mobile only shows the image with buttons */}
        <section id="home" className="flex flex-col w-full min-h-[100vh] justify-center items-center">
          <div className="max-w-[1180px] mx-auto w-full px-4 py-8">
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 w-full">
              <ProfileSection />
              <AboutSection />
            </div>
            <DiagonalSplit />
          </div>
        </section>

        {/* About Me Section - with improved content structure */}
        <AnimatedSection id="about" className="py-16 md:py-24 relative z-10 w-full">
          <div className="max-w-[1180px] mx-auto px-4">
            {/* ABOUT ME HEADER */}
            <motion.div 
              className="flex justify-center mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card px-12 py-3">
                <h2 className="text-center text-sm tracking-widest font-medium text-white">ABOUT ME</h2>
              </div>
            </motion.div>

            {/* INTRO TEXT - Enhanced presentation */}
            <div className="mb-12">
              <p className="text-center text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                I'm a 27-year-old advanced student of Computer Science with a strong foundation in full-stack development. 
                With over 2 years of professional experience, I specialize in creating elegant and functional web solutions
                that stand out for their design and performance.
              </p>
              <div className="h-[1px] w-20 bg-primary/40 mx-auto mt-8"></div>
            </div>

            {/* RESUME BUTTON */}
            <div className="flex justify-center mb-16">
              <Button 
                className="glass-button px-8 py-2 rounded-full"
                asChild
              >
                <Link 
                  href="https://res.cloudinary.com/dhmw3jd5q/image/upload/v1744910497/matias-alzugaray-cv_z8aro9.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  download="Matias_Alzugaray_CV.pdf"
                >
                  RESUME
                </Link>
              </Button>
            </div>

            {/* SERVICES SECTION - Improved card design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                className="glass-card p-8 h-full flex flex-col items-center rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-medium mb-4 tracking-wider text-white">FRONTEND DEVELOPMENT</h3>
                <div className="mx-auto mb-6 w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                  <FaLaptopCode className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-gray-300 flex-grow text-center leading-relaxed">
                  Creating responsive and interactive user interfaces using React, React Native, and Angular. Focusing on modern design principles, performance optimization, and exceptional user experience.
                </p>
              </motion.div>
              <motion.div 
                className="glass-card p-8 h-full flex flex-col items-center rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-medium mb-4 tracking-wider text-white">BACKEND DEVELOPMENT</h3>
                <div className="mx-auto mb-6 w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                  <FaWrench className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-gray-300 flex-grow text-center leading-relaxed">
                  Building robust server-side applications with Node.js, Express, and Spring Boot. Implementation of RESTful APIs and efficient database management with MySQL and MongoDB.
                </p>
              </motion.div>
              <motion.div 
                className="glass-card p-8 h-full flex flex-col items-center rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="font-medium mb-4 tracking-wider text-white">FULL-STACK SOLUTIONS</h3>
                <div className="mx-auto mb-6 w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full">
                  <FaPaintBrush className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-gray-300 flex-grow text-center leading-relaxed">
                  End-to-end development from concept to deployment. Implementing scalable architecture with clean code principles, modern tools, and best development practices for web and mobile applications.
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <section id="skills" className="relative w-full py-20 md:py-28">
          <div className="max-w-[1180px] mx-auto px-4">
            {/* SKILLS HEADER */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card px-10 py-2">
                <h2 className="text-center text-sm tracking-widest font-medium text-white">SKILLS</h2>
              </div>
            </motion.div>

            {/* Render IconsComponent with skill data */}
            <IconsComponent 
              currentSkills={currentSkills} 
              otherSkills={otherSkills} 
            />
          </div>
        </section>

        {/* Certificates Section */}
        <AnimatedSection id="certificates" className="py-12 relative z-10 w-full">
          <div className="max-w-[1180px] mx-auto px-4">
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-card px-10 py-2">
                <h2 className="text-center text-sm tracking-widest font-medium text-white">CERTIFICATES</h2>
              </div>
            </motion.div>
            <CertificatesSection />
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="py-12 relative z-10 w-full">
          <div className="max-w-[1180px] mx-auto px-4">
            <ContactForm />
          </div>
        </AnimatedSection>

        {/* Intersection Observer Effect */}
        <div className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-primary to-blue-500"
            style={{ 
              scaleX: 0,
              transformOrigin: "0% 50%"
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ 
              scaleX: [0, 1, 0],
              transition: { 
                duration: 1.5,
                times: [0, 0.5, 1],
                ease: "easeInOut"
              }
            }}
            viewport={{ once: false }}
          />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
} 