import React from 'react'
import './Skills.css'
import { motion } from 'framer-motion'
import SkillsSlider from './SkillsSlider'

const Skills = () => {

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

  return (
    <>
      <motion.section className='skills' id='skills'>
        <motion.h1
          variants={textVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-40% 0px -40% 0px"
          }}
        >
          Minhas <span className='outline'>habilidades</span>
        </motion.h1>
        <SkillsSlider />
      </motion.section>
    </>
  )
}

export default Skills