import React from "react";
import "./SkillsSlider.css";
/* Importando Logos para o Slider */
import { FaHtml5,FaJsSquare,FaPhp,FaGitAlt,
  FaAngular,FaBootstrap,FaNodeJs,FaSass,FaReact} from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiRubyonrails, SiSqlite } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import SkillBadge from "./SkillBadge";

const SkillsSlider = () => {

    const topSlider = [
        {icon: <FaHtml5 />, name: 'HTML', position: 1},
        {icon: <FaJsSquare />, name: 'JavaScript', position: 2},
        {icon: <FaPhp />, name: 'PHP', position: 3},
        {icon: <FaGitAlt />, name: 'Git', position: 4},
        {icon: <FaAngular />, name: 'Angular', position: 5},
        {icon: <FaBootstrap />, name: 'Bootstrap', position: 6},
        {icon: <FaReact />, name: 'React.Js', position: 7},
    ]

    const bottomSlider = [
        {icon: <FaNodeJs />, name: 'Node.Js', position: 1},
        {icon: <GrMysql />, name: 'MySQL', position: 2},
        {icon: <SiRubyonrails />, name: 'Ruby on Rails', position: 3},
        {icon: <FaSass />, name: 'SASS', position: 4},
        {icon: <BiLogoPostgresql />, name: 'PostgreSQL', position: 5},
        {icon: <BiLogoTypescript />, name: 'TypeScript', position: 6},
        {icon: <SiSqlite />, name: 'SQLite3', position: 7},
    ]

  return (
    <div className="sliders">
        <div className="slider-left" 
            style={{"--quantity": 7, 
                    "--width": '15rem',
                    "--height": '15rem' }
        }>
            <div className="list">
                {topSlider.map((badge, index) => {
                        return(<SkillBadge key={index} 
                            skillIcon={badge.icon} 
                            skillName={badge.name} 
                            position={badge.position}
                        />)
                    })
                }
            </div>
        </div>

        <div className="slider-right" 
            style={{"--quantity": 7, 
                    "--width": '15rem',
                    "--height": '15rem' }
        }>
            <div className="list">
                {bottomSlider.map((badge, index) => {
                        return(<SkillBadge key={index} 
                            skillIcon={badge.icon} 
                            skillName={badge.name} 
                            position={badge.position}
                        />)
                    })
                }
            </div>
      </div>
    </div>
  );
};

export default SkillsSlider;
