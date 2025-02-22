import React, { useRef } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ projectTitle, projectURL, projectImage }) => {
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
    <a
      className="project-card"
      target="_blank"
      href={projectURL}
      ref={cardRef}
      style={{ backgroundImage: `url(${projectImage})` }}
      onMouseMove={rotateToMouse}
      onMouseLeave={resetStyles}
    >
      {projectTitle}
      <div className="glow" />
    </a>
  );
};

export default ProjectCard;
