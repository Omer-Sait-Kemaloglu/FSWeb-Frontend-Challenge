import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <p className="message-title">Send me a message!</p>
      <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
      <p className="email">Feel free to contact me via email: omersaitkemaloglu@gmail.com</p>
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://via.placeholder.com/40" alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://via.placeholder.com/40" alt="Instagram" />
        </a>
        <a href="https://github.com/Omer-Sait-Kemaloglu" target="_blank" rel="noopener noreferrer">
          <img src="https://via.placeholder.com/40" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin" target="_blank" rel="noopener noreferrer">
          <img src="https://via.placeholder.com/40" alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
