import React, { useEffect } from 'react';
import './App.css';
import Perfil from './components/Perfil';
import Proyectos from './components/Proyectos';
import Experiencia from './components/Experiencia';
import About from './components/About';
import Contacto from './components/Contacto';

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLi = document.querySelectorAll("nav ul li a");

      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${current}`) {
          a.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="left-panel">
        <Perfil />
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
        <Contacto />
      </div>
      <div className="right-panel">
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experiencia />
        </section>
        <section id="projects">
          <Proyectos />
        </section>
      </div>
    </div>
  );
}

export default App;
