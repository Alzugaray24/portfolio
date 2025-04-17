import React, { useState } from 'react';
import { 
  SiHtml5, SiCss3, SiSass, SiJavascript, SiReact, SiBootstrap, 
  SiGit, SiFigma, SiSpring, SiNextdotjs, SiAngular,
  SiNodedotjs, SiMysql, SiMongodb, SiTypescript,
  SiDocker, SiJenkins, SiExpress, SiChakraui, SiSqlite,
  SiPostman
} from "react-icons/si";
import { FaJava, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaintBrush, FaLaptopCode, FaWrench } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { IconType } from 'react-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

// Map of icon names to icon components
const iconMap: Record<string, IconType> = {
  SiHtml5, SiCss3, SiSass, SiJavascript, SiReact, SiBootstrap,
  SiGit, SiFigma, SiSpring, SiNextdotjs, SiAngular,
  SiNodedotjs, SiMysql, SiMongodb, SiTypescript,
  SiDocker, SiJenkins, SiExpress, SiChakraui, SiSqlite,
  SiPostman,
  FaJava, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaintBrush, FaLaptopCode, FaWrench,
  IoLanguage
};

// Skill experience levels and descriptions
const skillDetails: Record<string, { level: number; description: string }> = {
  "REACT": { level: 90, description: "Building complex UI components, context API, hooks, Redux" },
  "REACT NATIVE": { level: 85, description: "Cross-platform mobile app development with reusable components" },
  "JAVASCRIPT": { level: 95, description: "ES6+, async/await, closures, prototypes, functional patterns" },
  "HTML": { level: 95, description: "Semantic elements, accessibility, SEO best practices" },
  "CSS": { level: 90, description: "Flexbox, Grid, animations, responsive design, SASS/SCSS" },
  "NODE.JS": { level: 80, description: "RESTful APIs, authentication, middleware, event-driven architecture" },
  "SQLITE": { level: 75, description: "Local database implementation for lightweight applications" },
  "MONGODB": { level: 80, description: "Schema design, CRUD operations, aggregation framework" },
  "CHAKRA-UI": { level: 85, description: "Component theming, responsive layouts, accessibility" },
  "EXPRESS": { level: 85, description: "Routing, middleware, REST API architecture" },
  "GIT": { level: 90, description: "Branching strategies, merge conflict resolution, CI/CD integration" },
  "POSTMAN": { level: 85, description: "API testing, environment setup, test automation" },
  "SPRING BOOT": { level: 70, description: "Java-based backend development, dependency injection" },
  "MYSQL": { level: 75, description: "Schema design, query optimization, indexing strategies" },
  "ANGULAR JS": { level: 70, description: "Component architecture, services, observables" },
  "JAVA": { level: 80, description: "OOP principles, multi-threading, design patterns" },
  "ENGLISH": { level: 90, description: "Professional working proficiency" },
  "SPANISH": { level: 100, description: "Native proficiency" },
  "DOCKER": { level: 70, description: "Containerization, image building, multi-container applications" },
  "CI/CD": { level: 75, description: "Automated deployment pipelines, continuous integration" }
};

// Types for the component props
interface Skill {
  name: string;
  iconName: string;
  color: string;
}

interface IconsComponentProps {
  currentSkills: Skill[];
  otherSkills: Skill[];
}

type SkillCategory = 'all' | 'frontend' | 'backend' | 'database' | 'devops' | 'other';

// Categorize skills
const skillCategories: Record<string, SkillCategory> = {
  "REACT": 'frontend',
  "REACT NATIVE": 'frontend',
  "JAVASCRIPT": 'frontend',
  "HTML": 'frontend',
  "CSS": 'frontend',
  "ANGULAR JS": 'frontend',
  "CHAKRA-UI": 'frontend',
  "NODE.JS": 'backend',
  "EXPRESS": 'backend',
  "SPRING BOOT": 'backend',
  "JAVA": 'backend',
  "SQLITE": 'database',
  "MONGODB": 'database',
  "MYSQL": 'database',
  "GIT": 'devops',
  "DOCKER": 'devops',
  "CI/CD": 'devops',
  "POSTMAN": 'devops',
  "ENGLISH": 'other',
  "SPANISH": 'other'
};

const SkillPopup = ({ skill, position, onClose }: { skill: string, position: { x: number, y: number }, onClose: () => void }) => {
  if (typeof document === 'undefined') return null; // SSR check
  
  return createPortal(
    <div 
      className="fixed z-[1000]" 
      style={{ 
        top: position.y + 80, // Position below the skill item
        left: position.x - 100, // Center horizontally
      }}
    >
      <motion.div 
        className="bg-black/80 backdrop-blur-sm p-3 rounded-lg shadow-xl w-[220px] text-left"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        onMouseLeave={onClose}
      >
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-primary font-medium">Proficiency</span>
            <span className="text-xs text-white">{skillDetails[skill]?.level || 80}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1.5">
            <div 
              className="bg-primary h-1.5 rounded-full" 
              style={{ width: `${skillDetails[skill]?.level || 80}%` }}
            ></div>
          </div>
        </div>
        <p className="text-xs text-gray-300">{skillDetails[skill]?.description || 'Advanced proficiency'}</p>
      </motion.div>
    </div>,
    document.body
  );
};

const IconsComponent: React.FC<IconsComponentProps> = ({ currentSkills, otherSkills }) => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  
  const allSkills = [...currentSkills, ...otherSkills];
  
  // Filter skills based on selected category
  const filteredSkills = selectedCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skillCategories[skill.name] === selectedCategory);

  // Render an icon based on its name
  const renderIcon = (iconName: string) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="text-white text-xl" /> : null;
  };

  // Categories for filter buttons
  const categories = [
    { id: 'all', label: 'ALL' },
    { id: 'frontend', label: 'FRONTEND' },
    { id: 'backend', label: 'BACKEND' },
    { id: 'database', label: 'DATABASE' },
    { id: 'devops', label: 'DEVOPS' },
    { id: 'other', label: 'OTHER' }
  ];

  // Handle mouse hover events
  const handleSkillHover = (skill: string, e: React.MouseEvent) => {
    setHoveredSkill(skill);
    setPopupPosition({ 
      x: e.clientX, 
      y: e.clientY 
    });
  };

  return (
    <div className="glass-card p-6 relative">
      {/* Filter tabs */}
      <div className="flex justify-center mb-8 flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id as SkillCategory)}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all ${
              selectedCategory === category.id 
                ? 'bg-primary text-white' 
                : 'bg-black/20 text-gray-300 hover:bg-black/30'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            onMouseEnter={(e) => handleSkillHover(skill.name, e)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className={`w-16 h-16 flex items-center justify-center ${skill.color} rounded-full mb-3 shadow-lg`}>
              {renderIcon(skill.iconName)}
            </div>
            <span className="text-xs font-medium text-white">{skill.name}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Render popup via portal */}
      <AnimatePresence>
        {hoveredSkill && (
          <SkillPopup 
            skill={hoveredSkill} 
            position={popupPosition} 
            onClose={() => setHoveredSkill(null)} 
          />
        )}
      </AnimatePresence>
      
      {filteredSkills.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          No skills found in this category
        </div>
      )}
    </div>
  );
};

export default IconsComponent; 