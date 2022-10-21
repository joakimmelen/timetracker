import React from "react";
import { getProjects } from "../utils/api";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import NewProjectForm from "./NewProjectForm";

function Projects() {
  const projectData = useLoaderData();

  return (
    <div>
      <div>
        <h1>Manage and creates Projects</h1>
        {projectData}
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
