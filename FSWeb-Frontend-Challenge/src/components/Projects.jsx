import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h3>Projects</h3>
      <div className="project">
        <h4>Workintech</h4>
        <p>A platform for managing remote work.</p>
        <div className="project-image">
          <img src="https://img.icons8.com/?size=50&id=8808&format=png" alt="Workintech" />
        </div>
        <button>View Site</button>
        <button>GitHub</button>
      </div>
      <div className="project">
        <h4>Journey</h4>
        <p>A travel planning application.</p>
        <div className="project-image">
          <img src="https://img.icons8.com/?size=50&id=8808&format=png" alt="Journey" />
        </div>
        <button>View Site</button>
        <button>GitHub</button>
      </div>
    </section>
  );
};

export default Projects;
