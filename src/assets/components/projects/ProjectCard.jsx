import React, { useRef } from 'react';
import './ProjectCard.css';
import { motion } from 'framer-motion';

const ProjectCard = ({ projectTitle, projectURL, projectImage }) => {

  // Variantes para o efeito PopIn (fade e scale)
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        opacity: { duration: 0.5, ease: "easeInOut" },
        scale: { type: "spring", stiffness: 150, damping: 8 }
      }
    }
  };

  const cardRef = useRef(null);

  const rotateToMouse = (e) => {
    const bounds = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    const glow = cardRef.current.querySelector('.glow');
    if (glow) {
      glow.style.backgroundImage = `radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )`;
    }
  };

  const resetStyles = () => {
    cardRef.current.style.transform = '';
    const glow = cardRef.current.querySelector('.glow');
    if (glow) {
      glow.style.backgroundImage = '';
    }
  };

  return (
    <motion.a
      className="project-card"
      target="_blank"
      href={projectURL}
      ref={cardRef}
      style={{ backgroundImage: `url(${projectImage})` }}
      onMouseMove={rotateToMouse}
      onMouseLeave={resetStyles}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40% 0px -40% 0px" }} // <-- Cada card só aparece ao chegar na tela!
    >
      {projectTitle}
      <div className="glow" />
    </motion.a>
  );
};

export default ProjectCard;
