import React from "react";
import "./projectcard.css";
import github from "../../assets/github.svg";

export default function ProjectCard({ nameProject }) {
  return (
    <div className="containerCard">
      <div className="headerCard">
        <h1 className="titleProject">{nameProject}</h1>
        <img src={github} alt="github logo" />
      </div>
    </div>
  );
}
