import "./SkillsSlider.css";
/* Importando Logos para o Slider */
import { FaPhp, FaGitAlt,
  FaVuejs, FaNodeJs, FaSass, FaReact, FaPython, 
  FaJava,
  FaAws} from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiNestjs, SiRubyonrails, SiSpringboot, SiSqlite, SiTailwindcss } from "react-icons/si";
import SkillBadge from "./SkillBadge";

import { motion } from "framer-motion";

const SkillsSlider = () => {

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        opacity: { duration: 0.5, ease: "easeInOut" },
        scale: { type: "spring", stiffness: 150, damping: 15 }
      }
    }
  };

  const topSlider = [
    { icon: <FaGitAlt />, name: 'Git'},
    { icon: <FaReact />, name: 'React.Js'},
    { icon: <FaPhp />, name: 'PHP'},
    { icon: <FaVuejs />, name: 'Vue.Js'},
    { icon: <SiTailwindcss />, name: 'Tailwind CSS'},
    { icon: <FaPython />, name: 'Python'},
    { icon: <BiLogoTypescript />, name: 'TypeScript'},
    { icon: <FaJava />, name: 'Java'},
  ];
  
  const bottomSlider = [
    { icon: <FaNodeJs />, name: 'Node.Js'},
    { icon: <SiSpringboot />, name: 'Spring Boot'},
    { icon: <FaAws />, name: 'AWS'},
    { icon: <BiLogoPostgresql />, name: 'PostgreSQL'},
    { icon: <SiNestjs />, name: 'NestJS'},
    { icon: <SiRubyonrails />, name: 'Ruby on Rails'},
    { icon: <FaSass />, name: 'SASS'},
    { icon: <SiSqlite />, name: 'SQLite3'},
  ];

  return (
    <div className="sliders">
      <motion.div className="slider-left"
        variants={contentVariants}
        initial="hidden"
        whileInView="show"
        style={{ "--quantity": topSlider.length }}
        viewport={{
          once: true,
          margin: "-30% 0px -30% 0px"
        }}
      >
        <div className="list">
          {topSlider.map((badge, index) => (
            <SkillBadge key={index} 
              skillIcon={badge.icon} 
              skillName={badge.name} 
              position={index + 1}
            />
          ))}
        </div>
      </motion.div>

      <motion.div className="slider-right"
        variants={contentVariants}
        initial="hidden"
        whileInView="show"
        style={{ "--quantity": bottomSlider.length }}
        viewport={{
          once: true,
          margin: "-20% 0px -20% 0px"
        }}
      >
        <div className="list">
          {bottomSlider.map((badge, index) => (
            <SkillBadge key={index} 
              skillIcon={badge.icon} 
              skillName={badge.name} 
              position={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsSlider;
