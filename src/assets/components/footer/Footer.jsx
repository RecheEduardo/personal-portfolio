import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import SiteLogo from '../../icons/icon_site_light.svg'
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col page-title">
            <img src={SiteLogo} width={30}/> 
            <h3>Eduardo.Reche</h3>
          </div>
          <div className="footer-col">
            <h4>Guia</h4>
            <ul>
              <li><a href="#main-header">Sobre Mim</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#experience">Experiência</a></li>
              <li><a href="/CV_Eduardo_Reche.pdf" target='_blank'>Meu CV</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Projetos</h4>
            <ul>
              <li><a href="#">Blogalizando</a></li>
              <li><a href="#">CRUD Showcase</a></li>
              <li><a href="#">Projeto ACME</a></li>
              <li><a href="#">MultiStep Form</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Veja também</h4>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/eduardorechemartins/" target='_blank'><FaLinkedin/></a>
                <a href="https://github.com/RecheEduardo" target='_blank'><FaGithub/></a>
                <a href="https://wa.me/5511994088541?text=Ol%C3%A1%2C%20Eduardo!" target='_blank'><FaWhatsapp/></a>
                <a href="mailto:eduardorechemartins2006@gmail.com" target='_blank'><IoMdMail/></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
