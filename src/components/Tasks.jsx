import React from "react";
import { getTasks } from "../utils/api";
import { Link } from "react-router-dom";
import NewTaskForm from "./NewTaskForm";
import { useTimeTrackContext } from "../context/TimeTrackerContext";

function Projects() {
  const { tasks } = useTimeTrackContext();

  return (
    <div>
      <div>
        <h3>Manage and Create Tasks</h3>
        <div>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        </div>
        <Link to={`/newtask`}>
          <button>Add Task</button>
        </Link>
      </div>
    </div>
  );
}

export default Projects;

export function loader() {
  return getProjects();
}
