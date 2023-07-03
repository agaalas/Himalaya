import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src="./assets/homie.png" alt="" className="nav-icon" />
      </Link>
      <Link to={"/projects"}>
        <img src="./assets/project.png" alt="" className="nav-icon" />
      </Link>
      <img src="./assets/document.png" alt="" className="nav-icon" />
      <img src="./assets/github-icon.png" alt="" className="nav-icon" />
      </div>
  );
}

export default Navbar;
