import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">Ömer Sait Kemaloğlu</div>
      <nav>
        <a href="#projects">TEMPLATE 2021</a>
      </nav>
      <div className="intro">
        <h1>I am a Frontend Developer...</h1>
        <p>who likes to create safe and scalable frontend products with great user experiences.</p>
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
        <div className="social-icons">
          <a href="https://github.com/Omer-Sait-Kemaloglu" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
