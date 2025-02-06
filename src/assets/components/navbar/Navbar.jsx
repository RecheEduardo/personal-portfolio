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
          <li>Sobre Mim</li>
          <li>Conhecimentos</li>
          <li>Projetos</li>
          <li>Experiência</li>
          <li>Formação</li>
        </ul>
        <button className='cv-button'><span>Meu CV</span><FaDownload/></button>
      </nav>
    </header>
  )
}

export default Navbar