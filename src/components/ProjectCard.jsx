import React from "react";

const ProjectCard = ({ title, description, github, live, screenshot }) => {
  return (
    <div className="project-card">
      <img src={screenshot} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <a href={github} target="_blank" rel="noopener noreferrer" className="github">GitHub</a>
          <a href={live} target="_blank" rel="noopener noreferrer" className="live">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
