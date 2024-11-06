import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2023 CarBot. All rights reserved.</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;