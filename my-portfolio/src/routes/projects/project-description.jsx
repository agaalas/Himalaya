import React from "react";
import styled from "styled-components";
import Project from "./project";
import ProjectOne from "./project-one";

function ProjectDescription() {
  const SProjectBtns = styled.div`
    margin-top: 40px;
  `;
  const SProjectBtn = styled.button`
    margin-right: 16px;
    border-radius: 80px;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.05) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      rgba(0, 0, 0, 0.1);
    box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.6),
      0px 2px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.04);
    padding: 6px 12px;
    color: var(--grey-grey-800, #bfc2cb);
    font-size: 14px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
  `;

  return (
    <div className="portfolio">
      <h1 className="header">Agamehdi Alaskarov</h1>
      <div className="description">
        <p className="portfolio-description">
          Seit einem Jahr beschäftige ich mich intensiv mit der Entwicklung von
          Webseiten und habe dabei umfassende Kenntnisse in den
          Programmiersprachen HTML, CSS, JavaScript, React, Mongoose und Sass
          erworben. Während dieser Zeit habe ich gelernt, ansprechende und
          interaktive Webseiten zu erstellen. Meine Fähigkeiten umfassen das
          Aufbauen der Struktur mit HTML, das Gestalten des Layouts mit CSS und
          Sass, das Hinzufügen von Interaktivität mit JavaScript und React,
          sowie die Integration von Datenbanken mit Mongoose. Mit dieser breiten
          Palette von Fähigkeiten bin ich in der Lage, professionelle und
          benutzerfreundliche Webseiten zu entwickeln.
        </p>
        <img src="./_Card.png" alt="" className="my-img" />
      </div>{" "}
      <SProjectBtns>
        <SProjectBtn>Project 1</SProjectBtn>
        <SProjectBtn>Project 2</SProjectBtn>
        <SProjectBtn>Project 3</SProjectBtn>
      </SProjectBtns>
      <ProjectOne/>
      <div className="contact">
        <button className="contact-me">Contact Me</button>
      </div>
    </div>
  );
}

export default ProjectDescription;
