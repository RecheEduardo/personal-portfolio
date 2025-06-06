import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

// Imagem dos Projetos
import BlogalizandoIMG from "../../icons/projects-icons/banner_blogalizando.png"
import ReactQuizIMG from "../../icons/projects-icons/banner_reactquiz.png"
import ProjetoAcmeIMG from "../../icons/projects-icons/banner_projetoacme.png"
import CrudShowcaseIMG from "../../icons/projects-icons/banner_crudshowcase.png"
import MultistepFormIMG from "../../icons/projects-icons/banner_multistepform.png"
import VueDexIMG from "../../icons/projects-icons/banner_vuedex.png"
import DataForgeIMG from "../../icons/projects-icons/banner_dataforge.png"
import OthersProjects from "../../icons/projects-icons/others.png"

import { motion } from 'framer-motion'

const Projects = () => {

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        opacity: { duration: 0.5, ease: "easeInOut" },
        scale: { type: "spring", stiffness: 150, damping: 8 }
      }
    }
  };

  const Cards = [
    {title: "Blogalizando", url: 'https://blogalizando.onrender.com/', image: BlogalizandoIMG},
    {title: "Multistep Form", url: 'https://multistep-reactjs-form.vercel.app/', image: MultistepFormIMG},
    {title: "React Quiz", url: 'https://themed-quiz.vercel.app/', image: ReactQuizIMG},
    {title: "DataForge", url: 'https://github.com/RecheEduardo/DataForge', image: DataForgeIMG},
    {title: "VueDex", url: 'https://eduardo-pokedex.vercel.app/', image: VueDexIMG},
    {title: "CRUD Showcase", url: 'https://crudshowcase.free.nf/', image: CrudShowcaseIMG},
    {title: "Projeto ACME", url: 'https://github.com/RecheEduardo/projeto-acme', image: ProjetoAcmeIMG},
    {url: 'https://github.com/RecheEduardo?tab=repositories', image: OthersProjects},
  ]

  return (
    <section className='projects' id='projects'>
      <motion.h1
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
      >
        Meus <span>Projetos</span>
      </motion.h1>
      
      <div className="cards-slider">
        {Cards.map((project, index) => (
          <ProjectCard 
            key={index} 
            projectTitle={project.title} 
            projectURL={project.url} 
            projectImage={project.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
