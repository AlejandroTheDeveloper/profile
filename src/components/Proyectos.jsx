import React from 'react';
import pycerImage from './resources/pycer.jpg'; // Update with the correct path
import braineirImage from './resources/braineir.jpg'; // Update with the correct path

const projects = [
  {
    name: 'Pycer',
    description: 'I am currently diving deep into multiple personal projects, with a focus on expanding my knowledge and skills in areas like Kotlin Multiplatform, Compose, React, and, most importantly, leveraging AI for software development.\n' +
    'These projects are not just side tasks; they represent my passion for exploring cutting-edge technologies and finding innovative ways to apply them.\n' +
    'I’ve been particularly excited about how Kotlin Multiplatform simplifies cross-platform development and how AI is reshaping the way we approach problem-solving in software engineering.',   
    image: pycerImage,
    url: '' // Update with the correct URL
  },
  {
    name: 'Braineir',
    description: 'Software development startup focus on helping customers to digitalize their business. Using the latest AI trends, covering from the development to the deployment of the web sites and other applications.\n' +
    'We believe in the power of AI to revolutionize business operations. By integrating cutting-edge AI technologies into our development processes, we help businesses streamline their workflows, improve customer engagement, and stay ahead of industry trends. Our team stays updated with the latest advancements to provide innovative applications that drive growth and efficiency.',
    image: braineirImage,
    url: 'https://www.braineir.com/' // Update with the correct URL
  },
  // Add more projects as needed
];

const Proyectos = () => {
  return (
    <div className="proyectos">
      <h2>Projects</h2>
      <p>
        I am currently working on multiple personal projects, learning about Kotlin Multiplatform, Compose, React, and most importantly, the usage of AI for development.
      </p>
      {projects.map((project, index) => (
        project.url ? (
          <a key={index} href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
            <div className="project">
              <div className="project-description">
                <h3>{project.name}</h3>
                {project.description.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="project-image">
                <img src={project.image} alt={`${project.name} Screenshot`} />
              </div>
            </div>
          </a>
        ) : (
          <div key={index} className="project-link">
            <div className="project">
              <div className="project-description">
                <h3>{project.name}</h3>
                {project.description.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="project-image">
                <img src={project.image} alt={`${project.name} Screenshot`} />
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default Proyectos;