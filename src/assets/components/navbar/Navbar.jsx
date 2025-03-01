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

  const navItems = [
    { name: 'Sobre Mim', href: '#main-header' },
    { name: 'Conhecimentos', href: '#skills' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Projetos', href: '#projects' },
  ];

  return (
    <header>
      <nav className={`nav-top ${showNavbar ? 'show' : 'hide'}`}>
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
          <div className="site-logo popIn">
            <a href="#main-header"><img src={SiteLogo} width={40} alt="Logo" /></a>
            <h1>Eduardo.Reche</h1>
          </div>

          <motion.ul className='sections-list'
            initial="hidden"
            animate="show"
            transition={{duration: 0.25, ease: "easeIn"}}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.25, ease:"easeIn" } }
            }}
          >
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.25 },
                  show: { opacity: 1, scale: 1 }
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { type: "spring", stiffness: 100, damping: 10 }
                }}
              >
                <a href={item.href}>{item.name}</a>
              </motion.li>
            ))}
          </motion.ul>

          <a href='/CV_Eduardo_Reche.pdf' target='_blank' className='cv-button popIn' >
            <span>Meu CV</span><FaDownload />
          </a>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;