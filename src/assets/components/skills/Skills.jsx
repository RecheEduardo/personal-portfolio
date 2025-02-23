import React from 'react'
import './Skills.css'
import SkillsSlider from './SkillsSlider'

const Skills = () => {
  return (
    <>
      <section className='skills' id='skills'>
        <h1>Minhas <span className='outline'>habilidades</span></h1>
        <SkillsSlider />
      </section>
    </>
  )
}

export default Skills