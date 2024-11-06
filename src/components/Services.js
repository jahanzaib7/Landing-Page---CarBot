import React from 'react';
import './Services.css';

function Services() {
  const services = [
    { title: "Connected Car Solutions", description: "Integrate smart technology into vehicles for enhanced connectivity and user experience." },
    { title: "Advanced Driver Assistance Systems", description: "Develop and implement cutting-edge ADAS for improved safety and autonomous capabilities." },
    { title: "Electric Vehicle Solutions", description: "Provide innovative solutions for electric vehicles, including battery management and charging systems." }
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;