import React, { useState } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

// Imagem dos Projetos
import BlogalizandoIMG from "../../icons/projects-icons/banner_blogalizando.png"
import ReactQuizIMG from "../../icons/projects-icons/banner_reactquiz.png"
import QRCodeGenIMG from "../../icons/projects-icons/banner_qrcodegenerator.png"
import CrudShowcaseIMG from "../../icons/projects-icons/banner_crudshowcase.png"
import MultistepFormIMG from "../../icons/projects-icons/banner_multistepform.png"

const Projects = () => {

  const Cards = [
    {title: "Blogalizando", url: 'https://github.com/RecheEduardo/blogalizando', image: BlogalizandoIMG},
    {title: "React Quiz", url: 'https://themed-quiz.vercel.app/', image: ReactQuizIMG},
    {title: "QR Code Generator", url: 'https://gerador-qrcode-reactjs.vercel.app/', image: QRCodeGenIMG},
    {title: "CRUD Showcase", url: 'https://github.com/RecheEduardo/crud-showcase', image: CrudShowcaseIMG},
    {title: "Multistep Form", url: 'https://multistep-reactjs-form.vercel.app/', image: MultistepFormIMG},
  ]

  return (
    <section className='projects'>
      <h1>Meus <span>Projetos</span></h1>
      <div className="cards-slider">
        {Cards.map((project, index) => {
          return (<ProjectCard key={index} projectTitle={project.title} projectURL={project.url} projectImage={project.image}/>)
        })
        } 
      </div>
    </section>
  )
}

export default Projects