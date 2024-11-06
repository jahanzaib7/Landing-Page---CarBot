import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Welcome to CarBot';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the speed here (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <h1>{text}</h1>
        <p>Driving innovation in the automotive industry</p>
        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
}

export default Hero;