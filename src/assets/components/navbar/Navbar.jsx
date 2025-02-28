import React, { useState, useEffect } from 'react';
import SiteLogo from '../../icons/icon_site.svg';
import { FaDownload } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); 
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header>
      <nav className={`nav-top ${showNavbar ? 'show' : 'hide'}`}>
        <div className="site-logo">
          <a href="#main-header"><img src={SiteLogo} width={40} alt="Logo" /></a>
          <h1>Eduardo.Reche</h1>
        </div>
        <ul className='sections-list'>
          <li><a href="#main-header">Sobre Mim</a></li>
          <li><a href="#skills">Conhecimentos</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#projects">Projetos</a></li>
        </ul>
        <a href='/CV_Eduardo_Reche.pdf' target='_blank' className='cv-button'><span>Meu CV</span><FaDownload /></a>
      </nav>
    </header>
  );
};

export default Navbar;
