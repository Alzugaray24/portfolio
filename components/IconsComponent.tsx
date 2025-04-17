import React from 'react';
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

const IconsComponent: React.FC<IconsComponentProps> = ({ currentSkills, otherSkills }) => {
  // Render an icon based on its name
  const renderIcon = (iconName: string) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="text-white text-xl" /> : null;
  };

  return (
    <>
      {/* USING NOW SKILLS */}
      <div className="mb-10">
        <h3 className="text-center font-medium text-sm tracking-widest mb-6 text-white">USING NOW:</h3>
        <div className="grid grid-cols-4 gap-6 max-w-md mx-auto">
          {currentSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-12 h-12 flex items-center justify-center ${skill.color} rounded-full mb-2 skill-bubble`}>
                {renderIcon(skill.iconName)}
              </div>
              <span className="text-xs text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* OTHER SKILLS */}
      <div className="mb-10">
        <h3 className="text-center font-medium text-sm tracking-widest mb-6 text-white">OTHER SKILLS:</h3>
        <div className="grid grid-cols-4 gap-6 max-w-md mx-auto">
          {otherSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-12 h-12 flex items-center justify-center ${skill.color} rounded-full mb-2 skill-bubble`}>
                {renderIcon(skill.iconName)}
              </div>
              <span className="text-xs text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IconsComponent; 