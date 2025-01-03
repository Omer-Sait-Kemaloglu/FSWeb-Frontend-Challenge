import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // İkonları içe aktarın
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left-side">
        <div className="logo">Ömer Sait Kemaloğlu</div>
        <div className="intro">
          <h1>I am a Frontend Developer...</h1>
          <p>who likes to create safe and scalable frontend products with great user experiences.</p>
          <div className="social-icons">
            <a
              href="https://github.com/Omer-Sait-Kemaloglu"
              target="_blank"
              rel="noopener noreferrer"
              className="button github"
            >
              <FaGithub className="icon" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="button linkedin"
            >
              <FaLinkedin className="icon" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img src="https://img.icons8.com/?size=50&id=8808&format=png" alt="Profile" className="profile-image" />
        <div className="overlay-text"></div>
      </div>
    </header>
  );
};

export default Header;
