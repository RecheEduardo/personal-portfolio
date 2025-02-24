import React from 'react'
import SiteLogo from '../../icons/icon_site.svg'
import { FaDownload } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <nav className='nav-top'>
        <div className="site-logo">
          <img src={SiteLogo} width={40} />
          <h1>Eduardo.Reche</h1>
        </div>
        <ul>
          <li><a href="#skills">Conhecimentos</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#projects">Projetos</a></li>
        </ul>
        <a href='/CV_Eduardo_Reche.pdf' target='_blank' className='cv-button'><span>Meu CV</span><FaDownload/></a>
      </nav>
    </header>
  )
}

export default Navbar