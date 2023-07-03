import React from "react";
import PeronalInfo from "./peronal-info";
import Projects from "./projects";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="header">Agamehdi Alaskarov</h1>
      <PeronalInfo />
      <Projects />
      <div className="contact">
        <button className="contact-me">Contact Me</button>
      </div>
    </div>
  );
}

export default Portfolio;
