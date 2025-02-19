import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <section className='experience'>
      <h1>Minha <span className='outline-reverse'>Experiência</span></h1>
      <div className="experience-cards">
        <div className="card">
          <div className="card-header">
            <div className="job-title"><h2>Database Researcher na PRODESP</h2></div>
            <div className="job-time">jun. 2024 - Atual</div>
          </div>
          <div className="card-body">
            <p>Atuando no sistema PRODESP, realizo o cadastro e atualização de dados de documentos, 
              garantindo a precisão das informações. Para otimizar o fluxo de trabalho, utilizo 
              consultas no banco de dados SQL para pesquisa e extração de registros relevantes. 
              Também realizo a digitalização de documentos com o pacote Office da Microsoft, assegurando
               sua organização e acessibilidade. Minha atuação envolve o uso de interfaces desenvolvidas 
               em Java e workstations no ambiente Windows, exigindo familiaridade com essas tecnologias. 
               Além disso, participo de reuniões esporádicas com a equipe, focadas em comunicação, produtividade
                e proatividade, contribuindo para um desempenho alinhado às demandas organizacionais.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience