import React, { useState } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

const Projects = () => {

  const [Cards , setCards] = useState([
    {title: "Blogalizando", url: 'https://github.com/RecheEduardo/blogalizando'},
    {title: "React Quiz", url: 'https://themed-quiz.vercel.app/'},
    {title: "QR Code Generator", url: 'https://gerador-qrcode-reactjs.vercel.app/'},
    {title: "CRUD Showcase", url: 'https://github.com/RecheEduardo/crud-showcase'},
    {title: "Multistep Form", url: 'https://multistep-reactjs-form.vercel.app/'},
  ])

  return (
    <section className='projects'>
      <h1>Meus <span>Projetos</span></h1>
      <div className="cards-slider">
        {Cards.map((project, index) => {
          return (<ProjectCard key={index} projectTitle={project.title} projectURL={project.url}/>)
        })
        } 
      </div>
    </section>
  )
}

export default Projects