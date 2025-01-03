import React from 'react';
import './Skills.css';

// İkonları doğru şekilde import edin
import javascriptIcon from '../assets/javascript.png';
import nodeIcon from '../assets/node.png';
import reactIcon from '../assets/react.png';
import vscodeIcon from '../assets/vscode.png';
import reduxIcon from '../assets/redux.png';
import figmaIcon from '../assets/figma.png';

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: javascriptIcon },
    { name: "Node", icon: nodeIcon },
    { name: "React", icon: reactIcon },
    { name: "VS Code", icon: vscodeIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "Figma", icon: figmaIcon }
  ];

  return (
    <section className="skills">
      <h3>Skills</h3>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.name} className="skill-item">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
