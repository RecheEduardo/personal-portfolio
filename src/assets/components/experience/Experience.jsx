import React from 'react';
import './Experience.css';
import LogoProdesp from '../../icons/icon-prodesp.png';
import LogoNtk from '../../icons/ntk-logo.png';

import { motion } from 'framer-motion';

const Experience = () => {

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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: "beforeChildren" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -150 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        opacity: { duration: 0.5, ease: "easeInOut" },
        x: { type: "spring", stiffness: 150, damping: 15 },
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 150 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        opacity: { duration: 0.5, ease: "easeInOut" },
        x: { type: "spring", stiffness: 150, damping: 15 },
      }
    }
  };

  return (
    <section className='experience' id='experience'>

      <motion.h1
        variants= {textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
      >
        Minha <span className='outline-reverse'>Experiência</span>
      </motion.h1>

      <motion.div
        className="experience-cards"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >

        <motion.div className="card"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
        >
          <div className="card-header">
            <div className="job-title">
              <img src={LogoProdesp} width={50} style={{ borderRadius: "1.25rem" }} />
              <h2>Database Researcher na PRODESP</h2>
            </div>
            <div className="job-time">
              jun. 2024 - Atual
            </div>
          </div>

          <div className="card-body">
            <motion.p
              variants={fadeInLeft}
            >
              Atuando no sistema <strong>PRODESP</strong>, realizo o cadastro e atualização de dados de documentos, 
              garantindo a precisão das informações. Para otimizar o fluxo de trabalho, utilizo 
              consultas no banco de dados <strong>SQL</strong> para pesquisa e extração de registros relevantes. 
              Também realizo a digitalização de documentos com o pacote <strong>Office da Microsoft</strong>, assegurando
              sua organização e acessibilidade. Minha atuação envolve o uso de interfaces desenvolvidas 
              em <strong>Java</strong> e workstations no ambiente Windows, exigindo familiaridade com essas tecnologias. 
              Além disso, participo de reuniões esporádicas com a equipe, focadas em <strong>comunicação</strong>, produtividade
              e <strong>proatividade</strong>, contribuindo para um desempenho alinhado às demandas organizacionais.
            </motion.p>
          </div>
        </motion.div>

        <motion.div className="card"
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
        >
          <div className="card-header">
            <div className="job-title">
              <img src={LogoNtk} width={50} style={{ borderRadius: "1.25rem" }} />
              <h2>Auxiliar de Armazenista na NTK Confecções Eireli</h2>
            </div>
            <div className="job-time">
              ago. 2021 - jan. 2022
            </div>
          </div>

          <div className="card-body">
            <motion.p
              variants={fadeInRight}
            >
              Durante minha experiência, atuei diretamente na <strong>organização</strong> e controle de estoque, garantindo que os 
              produtos estivessem devidamente armazenados e identificados para facilitar o <strong>fluxo</strong> de mercadorias. 
              Como <strong>Jovem Aprendiz</strong>, tive a oportunidade de desenvolver habilidades logísticas essenciais, 
              auxiliando no recebimento, conferência e separação de itens para distribuição. Além disso, participei da gestão 
              de inventário, verificando a entrada e saída de produtos para manter a acuracidade do estoque. 
              Essa vivência me proporcionou um forte senso de organização, atenção aos detalhes e <strong>trabalho em equipe</strong>,
              contribuindo para a <strong>otimização</strong> dos processos internos da empresa.
            </motion.p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Experience;
