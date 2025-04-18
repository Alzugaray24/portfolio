import { useState, useEffect, memo, useMemo } from 'react';
import { 
  SiHtml5, SiCss3, SiSass, SiJavascript, SiReact, SiBootstrap, 
  SiGit, SiFigma, SiSpring, SiNextdotjs, SiAngular,
  SiNodedotjs, SiMysql, SiMongodb, SiTypescript,
  SiDocker, SiJenkins, SiExpress, SiChakraui, SiSqlite,
  SiPostman
} from "react-icons/si";
import { FaJava, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaintBrush, FaLaptopCode, FaWrench, FaChevronDown } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { IconType } from 'react-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import { useReducedMotion } from '@/utils/hooks';

// Map of icon names to icon components
const iconMap: Record<string, IconType> = {
  SiHtml5, SiCss3, SiSass, SiJavascript, SiReact, SiBootstrap,
  SiGit, SiFigma, SiSpring, SiNextdotjs, SiAngular,
  SiNodedotjs, SiMysql, SiMongodb, SiTypescript,
  SiDocker, SiJenkins, SiExpress, SiChakraui, SiSqlite,
  SiPostman,
  FaJava, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaintBrush, FaLaptopCode, FaWrench, FaChevronDown,
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

interface SkillPopupProps {
  skill: string;
  position: { x: number; y: number };
  onClose: () => void;
}

const SkillPopup = memo(({ skill, position, onClose }: SkillPopupProps) => {
  const prefersReducedMotion = useReducedMotion();
  
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
        className="glass-card p-3 rounded-lg shadow-xl w-[220px] text-left border border-white/10 bg-white/[0.03] backdrop-blur-lg"
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
        transition={{ duration: prefersReducedMotion ? 0.1 : 0.2 }}
        onMouseLeave={onClose}
      >
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-primary font-medium">Proficiency</span>
            <span className="text-xs text-white">{skillDetails[skill]?.level || 80}%</span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-1.5">
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
});

SkillPopup.displayName = 'SkillPopup';

const IconsComponent = memo(({ currentSkills, otherSkills }: IconsComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  // Check if we're on mobile on client-side only
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const allSkills = [...currentSkills, ...otherSkills];
  
  // Filter skills based on selected category
  const filteredSkills = selectedCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skillCategories[skill.name] === selectedCategory);

  // For mobile, limit to 6 skills initially unless expanded
  const displayedSkills = !showAllMobile && isMobile 
    ? filteredSkills.slice(0, 6) 
    : filteredSkills;

  // Render an icon based on its name
  const renderIcon = (iconName: string) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="text-white text-xl" /> : null;
  };

  // Categories for filter buttons - memoized to prevent recreation on each render
  const categories = useMemo(() => [
    { id: 'all', label: 'ALL' },
    { id: 'frontend', label: 'FRONTEND' },
    { id: 'backend', label: 'BACKEND' },
    { id: 'database', label: 'DATABASE' },
    { id: 'devops', label: 'DEVOPS' },
    { id: 'other', label: 'OTHER' }
  ], []);

  // Handle mouse hover events
  const handleSkillHover = (skill: string, e: React.MouseEvent) => {
    // Only show popup on desktop
    if (!isMobile) {
      setHoveredSkill(skill);
      setPopupPosition({ 
        x: e.clientX, 
        y: e.clientY 
      });
    }
  };

  // Animation variants respecting reduced motion preference
  const skillItemVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 20 
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.2 : 0.3, 
        delay: prefersReducedMotion ? 0 : i * 0.05 
      }
    }),
    hover: {
      scale: prefersReducedMotion ? 1.02 : 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="glass-card p-8 relative border border-white/5 bg-white/[0.03] backdrop-blur-lg rounded-xl">
      {/* Decorative accent elements - enhance the glass card appearance */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 via-purple-500/5 to-blue-500/10 rounded-xl blur-xl opacity-70 -z-10"></div>
      
      {/* Filter tabs - scrollable on mobile */}
      <div className="flex justify-start md:justify-center mb-8 overflow-x-auto pb-2 md:pb-0 md:flex-wrap gap-2 md:gap-3 no-scrollbar">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.id as SkillCategory);
              setShowAllMobile(false); // Reset expand state when changing category
            }}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all flex-shrink-0 ${
              selectedCategory === category.id 
                ? 'bg-primary text-white' 
                : 'glass-button-secondary text-gray-300 hover:bg-white/10'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {displayedSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={skillItemVariants}
            onMouseEnter={(e) => handleSkillHover(skill.name, e)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className={`w-16 h-16 flex items-center justify-center ${skill.color} rounded-full mb-3 shadow-lg relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
              {renderIcon(skill.iconName)}
            </div>
            <span className="text-xs font-medium text-white">{skill.name}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Show More button - Only on mobile when there are more skills to show */}
      {isMobile && filteredSkills.length > 6 && !showAllMobile && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={() => setShowAllMobile(true)} 
            className="glass-button w-full max-w-xs text-white px-6 py-2 rounded-full text-sm flex items-center justify-center gap-2"
          >
            Show All Skills
            <FaChevronDown className="text-xs" />
          </Button>
        </div>
      )}
      
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
});

IconsComponent.displayName = 'IconsComponent';

export default IconsComponent; 