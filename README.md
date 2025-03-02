<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Century+Gothic&weight=800&size=48&pause=1000&color=F7F7F7&center=true&vCenter=true&width=600&lines=Meu+Portf%C3%B3lio" alt="Typing SVG" />
</p>

---

# 📖 Visão Geral

Este portfólio foi desenvolvido para demonstrar meus projetos, experiências, habilidades e conquistas como desenvolvedor full stack. A aplicação utiliza uma interface moderna, interativa e repleta de animações, construída com **React.js**, **CSS3**, **Framer Motion** e **React Icons**. Cada parte do projeto foi cuidadosamente pensada para proporcionar uma experiência dinâmica e envolvente. 💻✨

---

# 🌟 Funcionalidades e Destaques

- **Animações Dinâmicas:** Toda a interface ganha vida com animações suaves utilizando _Framer Motion_, que controlam efeitos de fade, scale e rotações.
  
- **Interatividade nos Cards:** Os cards dos projetos possuem um efeito 3D que reage ao movimento do mouse, com um brilho dinâmico (_glow_) que realça cada item. 🔥
  
- **Navbar Inteligente:** A barra de navegação se oculta e reaparece conforme o scroll da página, garantindo uma experiência de navegação limpa e sem distrações. 📜
  
- **Mapeamento de Arrays para Componentes:** Arrays de objetos são usados para gerar dinamicamente componentes como _ProjectCard_ e _SkillBadge_, permitindo fácil manutenção e escalabilidade.
  
- **Responsividade:** Design adaptativo para oferecer uma ótima experiência tanto em dispositivos desktop quanto mobile. 📱💻

---

# 🛠️ Tecnologias Utilizadas

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="35"  />

• Biblioteca para construção de interfaces dinâmicas e interativas.

##

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" height="35"  />
  
• Para estilização moderna e responsiva.

##

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" height="35"  />
  
• Linguagem usada para a lógica dos componentes e manipulação dos dados.

##

<img src="https://img.shields.io/badge/Framer%20Motion-0055FF.svg?style=for-the-badge&logo=Framer&logoColor=white" height="35"  />
  
• Biblioteca para animações sofisticadas, proporcionando transições suaves e efeitos interativos.

##

<img src="https://img.shields.io/badge/React%20Icons-ab024b.svg?style=for-the-badge&logo=React-Table&logoColor=white" height="35"  />
  
• Conjunto de ícones que enriquecem visualmente os componentes.

---

# 📂 Estrutura do Projeto e Detalhes de Implementação

## 1. Renderização Inicial (index.js)

O arquivo `index.js` é o ponto de entrada da aplicação, onde o React renderiza o componente principal no DOM. O uso do `StrictMode` garante boas práticas e ajuda a identificar potenciais problemas.

~~~jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
~~~

---

## 2. Composição do Portfólio (App.jsx)

O componente `App.jsx` reúne todos os componentes principais do portfólio, como Navbar, MainHeader, Skills, Experience, Projects, e Footer. Essa organização modular facilita a manutenção e a escalabilidade.

~~~jsx
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
~~~

---

## 3. Animações e Interatividade com Framer Motion

**Exemplo: Componente Experience**

No componente `Experience`, utilizamos o Framer Motion para animar a entrada dos cards de experiência. São definidas variantes para o texto, container e efeitos de fade (da esquerda e da direita).

~~~jsx
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
~~~

Essas variantes são aplicadas nos elementos com as propriedades `initial`, `animate` ou `whileInView` para criar uma experiência visual fluida enquanto o usuário navega pela página.

---

## 4. Uso de Arrays e Mapeamento para Criação de Componentes

**Exemplo: Componente Projects**

No componente `Projects`, um array de objetos é definido contendo informações de cada projeto (título, URL e imagem). Esse array é mapeado para gerar dinamicamente os componentes `ProjectCard`.

~~~jsx
const Cards = [
  { title: "Blogalizando", url: 'https://github.com/RecheEduardo/blogalizando', image: BlogalizandoIMG },
  { title: "Multistep Form", url: 'https://multistep-reactjs-form.vercel.app/', image: MultistepFormIMG },
  { title: "CRUD Showcase", url: 'https://github.com/RecheEduardo/crud-showcase', image: CrudShowcaseIMG },
  { title: "Projeto ACME", url: 'https://github.com/RecheEduardo/projeto-acme', image: ProjetoAcmeIMG },
  { title: "React Quiz", url: 'https://themed-quiz.vercel.app/', image: ReactQuizIMG },
  { url: 'https://github.com/RecheEduardo?tab=repositories', image: OthersProjects },
];

return (
  <section className='projects' id='projects'>
    <motion.h1 variants={textVariants} initial="hidden" whileInView="show">
      Meus <span>Projetos</span>
    </motion.h1>
    
    <div className="cards-slider">
      {Cards.map((project, index) => (
        <ProjectCard 
          key={index} 
          projectTitle={project.title} 
          projectURL={project.url} 
          projectImage={project.image}
        />
      ))}
    </div>
  </section>
)
~~~

Este padrão de mapeamento é amplamente utilizado no projeto para renderizar listas, como na exibição das habilidades (SkillsSlider) e dos projetos.

---

## 5. Efeito 3D e Interatividade nos Cards de Projeto

**Exemplo: Componente ProjectCard**

O componente `ProjectCard` demonstra um efeito 3D interativo. Ao mover o mouse sobre o card, a função `rotateToMouse` calcula a posição do cursor em relação ao elemento e aplica uma transformação 3D com rotação e escala, além de um efeito de brilho dinâmico.

~~~jsx
const rotateToMouse = (e) => {
  const bounds = cardRef.current.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  };
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  cardRef.current.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;
  
  const glow = cardRef.current.querySelector('.glow');
  if (glow) {
    glow.style.backgroundImage = `radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #0000000f
    )`;
  }
};
~~~

Essa implementação torna cada projeto visualmente atraente e interativo, diferenciando-se por meio de efeitos que respondem aos movimentos do usuário.

---

## 6. Navegação e Comportamento da Navbar

**Exemplo: Componente Navbar**

A Navbar utiliza um estado para detectar a direção do scroll e ajustar sua visibilidade. Se o usuário rolar para baixo, a Navbar desaparece; se rolar para cima, ela reaparece. Isso é implementado com um evento `scroll` que atualiza o estado do componente.

~~~jsx
const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

const handleScroll = () => {
  if (window.scrollY < 50) {
    setShowNavbar(true);
  } else if (window.scrollY > lastScrollY) {
    setShowNavbar(false);
  } else {
    setShowNavbar(true);
  }
  setLastScrollY(window.scrollY);
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [lastScrollY]);
~~~

Essa lógica contribui para uma experiência de navegação mais limpa e intuitiva.

---

# 🚀 Como Rodar o Projeto Localmente

Para testar ou desenvolver localmente, siga estes passos:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seuusuario/portfolio-eduardoreche.git
   cd portfolio-eduardoreche
2. **Instale as dependências:**
   ~~~bash
   npm install
3. **Inicie a Aplicação**
   ~~~bash
   npm run dev
4. **Acesse via navegador**
    Abra http://localhost:3000 e veja o portfólio em ação!

---

# 🤝 Contribuições

Este projeto é open source e está em constante evolução!  
Se você tiver sugestões, encontrar bugs ou desejar colaborar, fique à vontade para:

- Abrir _issues_ com feedback.
  
- Enviar _pull requests_ com melhorias e novas funcionalidades.

Toda contribuição é muito bem-vinda! 💡🔧

---

# 🎨 Considerações Finais

- **Design & Interatividade:** Cada detalhe foi pensado para criar uma experiência visual cativante e uma navegação intuitiva.
  
- **Aprendizado & Crescimento:** Este portfólio reflete minha paixão por tecnologia e desenvolvimento, reunindo técnicas modernas e inovadoras.
  
- **Feedback:** Sua opinião é muito importante! Caso tenha sugestões para melhorar ainda mais o portfólio, deixe seu feedback.

---

<h3 align="center">Feito com ❤️ por Eduardo Reche</h1>  
