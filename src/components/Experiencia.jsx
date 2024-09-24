import React from 'react';

const experiences = [
  {
    company: 'MetricTristar Inc.',
    website: 'http://metrictristarinc.ie/',
    date: 'NOV 2015 - SEP 2024',
    details: `At Metric, I began as a Junior Android Developer and progressed to a Senior Developer, leading various projects and collaborating closely with my team. 
          Involvement included working on the company's main product, a ticketing system for public transport, along with coordinating other satellite apps and integrations. 
          Responsibilities spanned from designing and developing Android and backend applications to managing EMV payment integrations, hardware setups, and Android app releases, all within an Agile environment.
          \n
          Additionally, collaboration with a German team on a project managing ticket vending machines (TVMs) in Hamburg allowed me to contribute to the maintenance and enhancement of a Java backend system. 
          Key contributions included implementing features like Keycloak authentication, REST APIs, and advertisement management, while also updating libraries and resolving bugs. 
          This experience fostered teamwork across cross-functional teams and helped ensure legacy systems remained up-to-date.`,
    tags: ['Android Development', 
            'EMV Integration', 
            'Agile Methodology', 
            'REST APIs', 
            'Hardware Integration', 
            'Java Backend', 
            'Keycloak Authentication', 
            'Ticketing Systems', 
            'Cross-functional Collaboration', 
            'Payment Systems'
          ],
  },
  {
    company: 'Elevator App Development',
    website: '',
    date: 'DEC 2014 - SEP 2015',
    details: `I worked remotely as a freelance Java Android developer, collaborating closely with the lead dev to create apps for external clients. 
    My main project was an Android app for booking yoga classes across multiple centers, featuring map integration. The app was successfully published on the Play Store. 
    I also worked to keep iOS and Android development aligned.`,
    tags: ['Android Development', 'Remote Work', 'Freelance'],
  },
  {
    company: 'Control Web S.L.',
    website: 'https://controlnet.es/',
    date: 'FEB 2012 - AUG 2015',
    details: `At Controlnet, I grew as a developer, working on web technologies like ASP.NET, MVC, and Entity Framework, as well as Android development. 
    I delivered two major projects, handling everything from start to finish. 
    One was a mobile app for crop control that integrated with government portals, and the other was a .NET billing system for a phone cooperative. 
    I also helped maintain a .NET app, adding features like accountability modules, and worked on various VB .NET projects. 
    Throughout, I tackled technical challenges and worked both solo and with teams.`,
    tags: [ 'ASP.NET',
      'Entity Framework',
      'Android Development',
      'VB .NET',
      'Billing System'],
  },
];

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      {experiences.map((experience, index) => (
        experience.website ? (
          <a key={index} href={experience.website} target="_blank" rel="noopener noreferrer" className="experience-item">
            <div className="experience-date">
              {experience.date}
            </div>
            <div className="experience-details">
              <h3>{experience.company}</h3>
              {experience.details.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <div className="tags">
                {experience.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ) : (
          <div key={index} className="experience-item">
            <div className="experience-date">
              {experience.date}
            </div>
            <div className="experience-details">
              <h3>{experience.company}</h3>
              {experience.details.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <div className="tags">
                {experience.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        )
      ))}
      <a href="https://alejandroperrod.github.io/cv/alejandro_cv_20240904.pdf" target="_blank" rel="noopener noreferrer" className="experience-item">
        <div className="cv-div">... and more</div>
      </a>
    </div>
  );
};

export default Experience;
