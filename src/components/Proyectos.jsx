import React from 'react';
import pycerImage from './resources/pycer.jpg'; // Update with the correct path
import braineirImage from './resources/braineir.jpg'; // Update with the correct path

const Proyectos = () => {
  return (
    <div className="proyectos">
      <h2>Projects</h2>
      <p>I am currently diving deep into multiple personal projects, with a focus on expanding my knowledge and skills in areas like Kotlin Multiplatform, Compose, React, and, most importantly, leveraging AI for software development. </p>
      <p>These projects are not just side tasks; they represent my passion for exploring cutting-edge technologies and finding innovative ways to apply them. </p>
      <p>I’ve been particularly excited about how Kotlin Multiplatform simplifies cross-platform development and how AI is reshaping the way we approach problem-solving in software engineering.</p>      
      <div className="project">
        <div className="project-description">
          <h3>Pycer</h3>
          <p>Work in progress... I can't say much yet...</p>
        </div>
        <div className="project-image">
          <img src={pycerImage} alt="Pycer Screenshot" />
        </div>
      </div>
      <div className="project">
        <div className="project-description">
          <h3>Braineir</h3>
          <p>Work in progress... I can't say much yet...</p>
        </div>
        <div className="project-image">
          <img src={braineirImage} alt="Braineir Screenshot" />
        </div>
      </div>
    </div>
  );
};

export default Proyectos;