import React from "react";
import { getProjects } from "../utils/api";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import NewProjectForm from "./NewProjectForm";
import { useTimeTrackContext } from "../context/TimeTrackerContext";

function Projects() {
  const { projects } = useTimeTrackContext();

  return (
    <div>
      <div>
        <h3>Manage and Create Projects</h3>
        <div>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>{project.title}</li>
            ))}
          </ul>
        </div>
        <Link to={`/newproject`}>
          <button>Add Project</button>
        </Link>
      </div>
    </div>
  );
}

export default Projects;

export function loader() {
  return getProjects();
}
