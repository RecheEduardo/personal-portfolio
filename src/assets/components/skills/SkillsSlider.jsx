import React from "react";
import "./SkillsSlider.css";
/* Importando Logos para o Slider */
import {
  FaHtml5,
  FaJsSquare,
  FaPhp,
  FaGitAlt,
  FaAngular,
  FaBootstrap,
  FaNodeJs,
  FaSass,
  FaReact
} from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiRubyonrails, SiSqlite } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const SkillsSlider = () => {
  return (
    <div className="sliders">
      <div className="slider-left" 
            style={{"--quantity": 7, 
                    "--width": '15rem',
                    "--height": '15rem' }
       }>
        <div className="list">
            <div className="item" style={{"--position": 1}}>
                <FaHtml5 />
                <span>HTML</span>
            </div>
            <div className="item" style={{"--position": 2}}>
                <FaJsSquare />
                <span>JavaScript</span>
            </div>
            <div className="item" style={{"--position": 3}}>
                <FaPhp />
                <span>PHP</span>
            </div>
            <div className="item" style={{"--position": 4}}>
                <FaGitAlt />
                <span>Git</span>
            </div>
            <div className="item" style={{"--position": 5}}>
                <FaAngular />
                <span>Angular</span>
            </div>
            <div className="item" style={{"--position": 6}}>
                <FaBootstrap />
                <span>Bootstrap</span>
            </div>
            <div className="item" style={{"--position": 7}}>
                <FaReact />
                <span>React.Js</span>
            </div>
        </div>
      </div>
      <div className="slider-right" style={{"--quantity": 7, 
                    "--width": '15rem',
                    "--height": '15rem'}
       }>
        <div className="list">
            <div className="item" style={{"--position": 1}}>
                <FaNodeJs />
                <span>Node.Js</span>
            </div>
            <div className="item" style={{"--position": 2}}>
                <GrMysql />
                <span>MySQL</span>
            </div>
            <div className="item" style={{"--position": 3}}>
                <SiRubyonrails />
                <span>Ruby on Rails</span>
            </div>
            <div className="item" style={{"--position": 4}}>
                <FaSass />
                <span>SASS</span>
            </div>
            <div className="item" style={{"--position": 5}}>
                <BiLogoPostgresql />
                <span>PostgreSQL</span>
            </div>
            <div className="item" style={{"--position": 6}}>
                <BiLogoTypescript />
                <span>TypeScript</span>
            </div>
            <div className="item" style={{"--position": 7}}>
                <SiSqlite />
                <span>SQLite3</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSlider;
