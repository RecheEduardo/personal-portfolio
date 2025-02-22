import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='projects'>
      <h1>Meus <span>Projetos</span></h1>
      <div className="cards-slider">
        <ProjectCard projectTitle={"Blogalizando"}/>
        <ProjectCard projectTitle={"CRUD Showcase"}/>
        <ProjectCard projectTitle={"React MultiStep Form"}/>  
      </div>
    </section>
  )
}

export default Projects