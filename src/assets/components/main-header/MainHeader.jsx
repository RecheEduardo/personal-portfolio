import React from 'react';
import './MainHeader.css';
import Icon1 from '../../icons/icon1.svg';
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';
import { IoMdMail } from "react-icons/io";

const MainHeader = () => {
  return (
    <section className='main-header' id='main-header'>

      <motion.div className="greetings-msg"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { duration: 0.5 },
          y: { type: "spring", stiffness: 150, damping: 13 }
        }}
      >

        <div className="greetings-title">
          <h1>Olá! Sou <span>Eduardo</span>, seja</h1>
          <h1><span>bem vindo</span> ao meu <span className="outline">mundo</span>...</h1>
        </div>

        <p>Meu nome é Eduardo Reche, sou um desenvolvedor full stack apaixonado por softwares e tecnologia. Sempre busco equilibrar diversão e profissionalismo em meus projetos. Aqui você pode conferir alguns dos trabalhos que já realizei e as habilidades que domino!</p>
        <p>Meus projetos e aplicações buscam englobar uma alta gama de tecnologias e finalidades, utilizando stacks inteiros de desenvolvimento Back End & Front End e banco de dados relacional com SQL.</p>
        
        <motion.div className="media-icons">
          <motion.a
            href="https://www.linkedin.com/in/eduardorechemartins/"
            className="media-btn"
            target="_blank"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.25, ease: "easeIn" }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/RecheEduardo"
            className="media-btn"
            target="_blank"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.25, ease: "easeIn", delay: 0.1 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://wa.me/5511994088541?text=Ol%C3%A1%2C%20Eduardo!"
            className="media-btn"
            target="_blank"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.25, ease: "easeIn", delay: 0.2 }}
          >
            <FaWhatsapp />
          </motion.a>

          <motion.a
            href="mailto:eduardorechemartins2006@gmail.com"
            className="media-btn"
            target="_blank"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.25, ease: "easeIn", delay: 0.3 }}
          >
            <IoMdMail />
          </motion.a>
        </motion.div>

      </motion.div>

      <motion.img src={Icon1} className="greetings-img"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          opacity: { duration: 0.5 },
          scale: { type: "spring", stiffness: 50, damping: 10 },
          delay: 3
        }}
      />

    </section>
  )
}

export default MainHeader;
