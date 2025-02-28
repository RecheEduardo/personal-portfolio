import './App.css'
import Navbar from './assets/components/navbar/Navbar'
import MainHeader from './assets/components/main-header/MainHeader'
import Skills from './assets/components/skills/Skills'
import Experience from './assets/components/experience/Experience'
import Projects from './assets/components/projects/Projects'
import Training from './assets/components/training/Training'
import Footer from './assets/components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <MainHeader />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  )
}

export default App