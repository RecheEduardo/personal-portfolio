import React, { useState, useEffect, useRef } from 'react';
import './ProjectCard.css';

const ProjectCard = ({projectTitle, projectURL}) => {
  const cardRef = useRef(null);
  const [bounds, setBounds] = useState(null);

  // Função que manipula o movimento do mouse
  const rotateToMouse = (e) => {
    if (!bounds) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x * 2 + center.y * 2);

    // Altera o estilo de transformação do card
    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    // Altera o estilo do glow
    cardRef.current.querySelector('.glow').style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      setBounds(cardRef.current.getBoundingClientRect());
      document.addEventListener('mousemove', rotateToMouse);
    };

    const handleMouseLeave = () => {
      document.removeEventListener('mousemove', rotateToMouse);
      cardRef.current.style.transform = '';
      cardRef.current.style.background = '';
    };

    const cardElement = cardRef.current;
    cardElement.addEventListener('mouseenter', handleMouseEnter);
    cardElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cardElement.removeEventListener('mouseenter', handleMouseEnter);
      cardElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [bounds]);

  return (
    <a className="project-card" target='_blank' href={projectURL} ref={cardRef} style={{backgroundImage: `url`}}>
      {projectTitle}
      <div className="glow" />
    </a>
  );
};

export default ProjectCard;