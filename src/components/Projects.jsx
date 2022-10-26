import React from "react";
import { getProjects } from "../utils/api";
import { Link } from "react-router-dom";
import { useTimeTrackContext } from "../context/TimeTrackerContext";

function Projects() {
  const { projects, removeProject } = useTimeTrackContext();

  const handleClick = (id) => {
    removeProject(id);
  };

  return (
    <div>
      <div>
        <h3>Manage and Create Projects</h3>
        <Link to={`/newproject`}>
          <button>Add Project</button>
        </Link>
      </div>
      <div>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              {project.title}
              <button onClick={() => handleClick(project.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;

export function loader() {
  return getProjects();
}
