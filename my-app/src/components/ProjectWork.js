import "./ProjectCardStyle.css";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";
import { NavLink } from "react-router-dom";
import React from "react";

const ProjectWork = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {ProjectCardData.map((val, ind) =>{
                return(
                    <ProjectCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    source={val.source}
                    />
                )
            })}
        </div>
    </div>
  )
};

export default ProjectWork;