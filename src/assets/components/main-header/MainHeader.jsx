import React from 'react'
import './MainHeader.css'
import Icon1 from '../../icons/icon1.svg'
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const MainHeader = () => {
  return (
    <section className='main-header' id='main-header'>
      <div className="greetings-msg">
        <div className="greetings-title">
          <h1>Olá! Sou <span>Eduardo</span>, seja</h1>
          <h1><span>bem vindo</span> ao meu <span className="outline">mundo</span>...</h1>
        </div>
        <p>Meu nome é Eduardo Reche, sou um desenvolvedor full stack apaixonado por softwares e tecnologia. Sempre busco equilibrar diversão e profissionalismo em meus projetos. Aqui você pode conferir alguns dos trabalhos que já realizei e as habilidades que domino!</p>
        <p>Meus projetos e aplicações buscam englobar uma alta gama de tecnologias e finalidades, utilizando stacks inteiros de desenvolvimento Back End & Front End e banco de dados relacional com SQL.</p>
        <div className="media-icons">
            <a href="https://www.linkedin.com/in/eduardorechemartins/" className='media-btn' target='_blank'><FaLinkedin/></a>
            <a href="https://github.com/RecheEduardo" className='media-btn' target='_blank'><FaGithub/></a>
            <a href="https://wa.me/5511994088541?text=Ol%C3%A1%2C%20Eduardo!" className='media-btn' target='_blank'><FaWhatsapp/></a>
            <a href="mailto:eduardorechemartins2006@gmail.com" className='media-btn' target='_blank'><IoMdMail/></a>
        </div>
      </div>
      <img src={Icon1} className="greetings-img" width={800}/>
    </section>
  )
}

export default MainHeader