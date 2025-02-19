import React from 'react'
import './Experience.css'
import LogoProdesp from '../../icons/icon-prodesp.png'
import LogoNtk from '../../icons/ntk-logo.png'

const Experience = () => {
  return (
    <section className='experience'>
      <h1>Minha <span className='outline-reverse'>Experiência</span></h1>
      <div className="experience-cards">
        <div className="card">
          <div className="card-header">
            <div className="job-title">
              <img src={LogoProdesp} width={50} style={{borderRadius: "1.25rem"}} />
              <h2>Database Researcher na PRODESP</h2>
            </div>
            <div className="job-time">jun. 2024 - Atual</div>
          </div>
          <div className="card-body">
            <p>Atuando no sistema <strong>PRODESP</strong>, realizo o cadastro e atualização de dados de documentos, 
              garantindo a precisão das informações. Para otimizar o fluxo de trabalho, utilizo 
              consultas no banco de dados <strong>SQL</strong> para pesquisa e extração de registros relevantes. 
              Também realizo a digitalização de documentos com o pacote <strong>Office da Microsoft</strong>, assegurando
              sua organização e acessibilidade. Minha atuação envolve o uso de interfaces desenvolvidas 
              em <strong>Java</strong> e workstations no ambiente Windows, exigindo familiaridade com essas tecnologias. 
              Além disso, participo de reuniões esporádicas com a equipe, focadas em <strong>comunicação</strong>, produtividade
              e <strong>proatividade</strong>, contribuindo para um desempenho alinhado às demandas organizacionais.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="job-title">
              <img src={LogoNtk} width={50} style={{borderRadius: "1.25rem"}} />
              <h2>Auxiliar de Armazenista na NTK Confecções Eireli</h2>
            </div>
            <div className="job-time">ago. 2021 - jan. 2022</div>
          </div>
          <div className="card-body">
            <p>Durante minha experiência, atuei diretamente na <strong>organização</strong> e controle de estoque, garantindo que os 
              produtos estivessem devidamente armazenados e identificados para facilitar o <strong>fluxo</strong> de mercadorias. 
              Como <strong>Jovem Aprendiz</strong>, tive a oportunidade de desenvolver habilidades logísticas essenciais, 
              auxiliando no recebimento, conferência e separação de itens para distribuição. Além disso, participei da gestão 
              de inventário, verificando a entrada e saída de produtos para manter a acuracidade do estoque. 
              Essa vivência me proporcionou um forte senso de organização, atenção aos detalhes e <strong>trabalho em equipe</strong>,
              contribuindo para a <strong>otimização</strong> dos processos internos da empresa.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience