import React from "react";
import { Link } from "react-router-dom";
import { useTimeTrackContext } from "../context/TimeTrackerContext";
import styles from "./Projects.module.css";

function Projects() {
  const { projects, removeProject } = useTimeTrackContext();

  const handleClick = (id) => {
    removeProject(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topcontainer}>
        <h3 className={styles.h3}>Manage and Create Projects</h3>
        <Link to={`/newproject`}>
          <button>Add Project</button>
        </Link>
      </div>
      <div className={styles.content}>
        <ul className={styles.ul}>
          {projects.map((project) => (
            <li className={styles.li} key={project.id}>
              {project.title}
              <button
                className={styles.removeButton}
                onClick={() => handleClick(project.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;

// export function loader() {
//   return getProjects();
// }
