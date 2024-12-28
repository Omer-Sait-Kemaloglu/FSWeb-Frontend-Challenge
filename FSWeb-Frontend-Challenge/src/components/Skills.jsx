import React from 'react';

const Skills = () => {
  const skills = ["JavaScript", "Node", "React", "VS Code", "Redux", "Figma"];

  return (
    <section className="skills">
      <h3>Skills</h3>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  );
};

export default Skills;
