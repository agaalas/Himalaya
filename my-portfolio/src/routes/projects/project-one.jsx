import React from "react";
import { styled } from "styled-components";

function ProjectOne() {
  const SProjectImg = styled.img`
    width: 1000px;
    margin-top: 76px;
    border-radius: 40px;
    background: radial-gradient(
      100% 100% at 50% 0%,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.02) 100%
    );
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6),
      0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
    backdrop-filter: blur(12px);
    padding: 10px;
    margin-bottom: 99px;
  `;
  const SFirstLook = styled.div`
    display: flex;
  `;
  const SFlImg = styled.img`
    width: 502px;
    border-radius: 40px;
    background: radial-gradient(
      100% 100% at 50% 0%,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.02) 100%
    );
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6),
      0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
    backdrop-filter: blur(12px);
    padding: 10px;
    margin-right: 80px;
  `;
  const SFlHeader = styled.h1`
    color: var(--adaptive-strong, #fff);
    font-size: 40px;
    font-family: Inter;
    font-weight: 600;
    line-height: 48px;
  `;
  const SFlDescription = styled.p`
    color: var(--adaptive-medium, rgba(255, 255, 255, 0.4));
    font-size: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    width: 410px;
  `;
  const SLoginDescription = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const SFeedbackHeader = styled.h1`
    color: var(--adaptive-strong, #fff);
    font-size: 40px;
    font-family: Inter;
    font-weight: 600;
    line-height: 48px;
    display: flex;
    justify-content: center;
    margin-right: 125px;
    margin-top: 99px;
  `;
  const SFeedbackDescription = styled.p`
    color: var(--adaptive-medium, rgba(255, 255, 255, 0.4));
    font-size: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    display: flex;
    justify-content: center;
    margin-right: 125px;
    margin-top: 5px;
  `;
  const SFeedbacksImg = styled.img`
    border-radius: 40px;
    background: radial-gradient(
      100% 100% at 50% 0%,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.02) 100%
    );
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6),
      0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 1px 2px 0px rgba(0, 0, 0, 0.04);
    backdrop-filter: blur(12px);
    padding: 10px;
    margin-top: 35px;
  `;

  return (
    <div className="project-one">
      <SProjectImg src="./assets/project-1/ganze-seite.png" alt="" />
      <SFirstLook>
        <SFlImg src="./assets/project-1/login.png" alt="" />
        <SLoginDescription>
          <SFlHeader>Product Feedback Page</SFlHeader>
          <SFlDescription>
            Das Projekt dreht sich um eine Feedback-Seite, auf der Benutzer
            Feedback hinzufügen, sich anmelden, abmelden und Feedbacks mit
            "Likes" versehen können. Eine Sidebar ermöglicht es den Benutzern,
            die Feedbacks nach bestimmten Kriterien zu filtern. Die Webseite
            wurde mit HTML, CSS und React entwickelt, wobei Styled Components
            für die Gestaltung verwendet wurden. Die Integration mit der
            MongoDB-Datenbank wurde mithilfe von Mongoose realisiert. Diese
            Kombination von Technologien ermöglicht eine interaktive und
            ansprechende Plattform für den Austausch von Feedback.
          </SFlDescription>
        </SLoginDescription>
      </SFirstLook>
      <SFeedbackHeader>Feedbacks</SFeedbackHeader>
      <SFeedbackDescription>
        Feedbacks stammen von einem MongoDB-Server mit Mongoose als
        Schnittstelle zur Datenbank.
      </SFeedbackDescription>
      <SFeedbacksImg src="./assets/project-1/feedbacks.png" alt="" />
    </div>
  );
}

export default ProjectOne;
