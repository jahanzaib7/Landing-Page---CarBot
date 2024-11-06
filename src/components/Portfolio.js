import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    { title: "Project 1", description: "Description of Project 1" },
    { title: "Project 2", description: "Description of Project 2" },
    { title: "Project 3", description: "Description of Project 3" }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;