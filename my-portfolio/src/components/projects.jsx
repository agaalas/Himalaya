import React from "react";

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="header">Projects & Documents</h1>
      <div className="projects">
        <div className="project">
          <div className="project-info">
            <h1 className="project-header">My Projects</h1>
          </div>
          <div className="project-link">
            <img src="./assets/project.png" alt="" className="project-icon" />
            <button className="projeckt-btn">To my projects</button>
          </div>
        </div>
        <div className="project">
          <div className="project-info">
            <h1 className="project-header">My Documents</h1>
          </div>
          <div className="project-link">
            <img src="./assets/document.png" alt="" className="project-icon" />
            <button className="projeckt-btn">To my documents</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
