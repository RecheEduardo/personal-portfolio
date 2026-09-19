import './Experience.css';

import { motion } from 'framer-motion';
import { textVariants, containerVariants, fadeInLeft } from './Variants';
import { experienceSchema } from './Schema';

const Experience = () => {

  return (
    <section className='experience' id='experience'>
      <motion.h1 variants= {textVariants} initial="hidden"
        whileInView="show" viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
      >
        Minha <span className='outline-reverse'>Experiência</span>
      </motion.h1>

      <motion.div
        className="experience-cards"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {experienceSchema.map((experience, index) => (
          <motion.div key={index} className="card"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
          >
            <div className="card-header">
              <div className="job-title">
                <img src={experience.companyLogo} width={70} style={{ borderRadius: "1.25rem" }} />
                <h2>{experience.jobTitle}</h2>
              </div>
              <div className="job-time">{experience.jobTime}</div>
            </div>
            <div className="card-body">
              <motion.p variants={fadeInLeft}>{experience.jobDescription}</motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Experience;