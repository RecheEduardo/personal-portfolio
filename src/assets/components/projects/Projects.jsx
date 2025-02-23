import React, { useState } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

// Imagem dos Projetos
import BlogalizandoIMG from "../../icons/projects-icons/banner_blogalizando.png"
import ReactQuizIMG from "../../icons/projects-icons/banner_reactquiz.png"
import ProjetoAcmeIMG from "../../icons/projects-icons/banner_projetoacme.png"
import CrudShowcaseIMG from "../../icons/projects-icons/banner_crudshowcase.png"
import MultistepFormIMG from "../../icons/projects-icons/banner_multistepform.png"
import OthersProjects from "../../icons/projects-icons/others.png"

const Projects = () => {

  const Cards = [
    {title: "Blogalizando", url: 'https://github.com/RecheEduardo/blogalizando', image: BlogalizandoIMG},
    {title: "Multistep Form", url: 'https://multistep-reactjs-form.vercel.app/', image: MultistepFormIMG},
    {title: "CRUD Showcase", url: 'https://github.com/RecheEduardo/crud-showcase', image: CrudShowcaseIMG},
    {title: "Projeto ACME", url: 'https://github.com/RecheEduardo/projeto-acme', image: ProjetoAcmeIMG},
    {title: "React Quiz", url: 'https://themed-quiz.vercel.app/', image: ReactQuizIMG},
    {url: 'https://github.com/RecheEduardo?tab=repositories', image: OthersProjects},
  ]

  return (
    <section className='projects' id='projects'>
      <h1>Meus <span>Projetos</span></h1>
      <div className="cards-slider">
        {Cards.map((project, index) => {
          return (
            <ProjectCard 
              key={index} 
              projectTitle={project.title} 
              projectURL={project.url} 
              projectImage={project.image}
            />)
          })
        } 
      </div>
    </section>
  )
}

export default Projects