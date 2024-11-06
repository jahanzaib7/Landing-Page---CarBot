import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">CarBot</a>
        <ul className="nav-menu">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#services">Services</a></li>
          <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;