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
    <>
      <div className="slider-left" 
            style={{"--quantity": 7, 
                    "--width": '100px',
                    "--height": '9rem' }
       }>
        <div className="list">
            <div className="item" style={{"--position": 1}}><FaHtml5 /></div>
            <div className="item" style={{"--position": 2}}><FaJsSquare /></div>
            <div className="item" style={{"--position": 3}}><FaPhp /></div>
            <div className="item" style={{"--position": 4}}><FaGitAlt /></div>
            <div className="item" style={{"--position": 5}}><FaAngular /></div>
            <div className="item" style={{"--position": 6}}><FaBootstrap /></div>
            <div className="item" style={{"--position": 7}}><FaReact /></div>
        </div>
      </div>
      <div className="slider-right" style={{"--quantity": 7, 
                    "--width": '100px',
                    "--height": '9rem' }
       }>
        <div className="list">
            <div className="item" style={{"--position": 1}}><FaNodeJs /></div>
            <div className="item" style={{"--position": 2}}><GrMysql /></div>
            <div className="item" style={{"--position": 3}}><SiRubyonrails /></div>
            <div className="item" style={{"--position": 4}}><FaSass /></div>
            <div className="item" style={{"--position": 5}}><BiLogoPostgresql /></div>
            <div className="item" style={{"--position": 6}}><BiLogoTypescript /></div>
            <div className="item" style={{"--position": 7}}><SiSqlite /></div>
        </div>
      </div>
    </>
  );
};

export default SkillsSlider;
