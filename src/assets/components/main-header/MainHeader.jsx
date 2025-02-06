import React from 'react'
import './MainHeader.css'
import Icon1 from '../../icons/icon1.svg'

const MainHeader = () => {
  return (
    <section>
      <div className="greetings-msg"></div>
      <img src={Icon1} className="greetings-img" width={700}/>
    </section>
  )
}

export default MainHeader