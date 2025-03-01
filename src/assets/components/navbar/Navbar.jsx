import React, { useState, useEffect } from 'react';
import SiteLogo from '../../icons/icon_site.svg';
import { motion } from 'framer-motion';
import { FaDownload } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY < 50) {
      setShowNavbar(true);
    } else if (window.scrollY > lastScrollY) {
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
      <nav className={`nav-top ${showNavbar ? 'show' : 'hide'}`} >
        <motion.div className="nav-content"
          animate={{ 
            opacity: showNavbar ? 1 : 0,
            y: showNavbar ? 0 : -40  
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
        >
          <motion.div className="site-logo"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              opacity: { duration: 0.75 },
              scale: { type: "spring", stiffness: 300, damping: 10 },
            }}
          >
            <a href="#main-header"><img src={SiteLogo} width={40} alt="Logo" /></a>
            <h1>Eduardo.Reche</h1>
          </motion.div>
          <ul className='sections-list'>
            <li><a href="#main-header">Sobre Mim</a></li>
            <li><a href="#skills">Conhecimentos</a></li>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#projects">Projetos</a></li>
          </ul>
          <a href='/CV_Eduardo_Reche.pdf' target='_blank' className='cv-button'>
            <span>Meu CV</span><FaDownload />
          </a>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
