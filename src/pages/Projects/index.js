import React, { useEffect, useState } from "react";
import "./projects.css";

import Category from "../../components/Category";
import { dataProjects } from "../../data/dataProjects";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const [selectCat, setSelectCat] = useState("default");
  dataProjects.map((project) => console.log(project.name));

  const data = [
    "All",
    "ReactJS",
    "React Native",
    "C#",
    "JavaScript",
    "TypeScript",
  ];

  return (
    <section className="containerProjects" id="projects">
      <div className="titleContainer">
        <h1 className="title">Projects</h1>
      </div>
      <div className="categories">
        {data.map((title, index) => (
          <Category name={title} key={index} />
        ))}
      </div>
      <div className="projects">
        {dataProjects.map((project) => (
          <ProjectCard nameProject={project.name} key={project.id} />
        ))}
      </div>
    </section>
  );
}
