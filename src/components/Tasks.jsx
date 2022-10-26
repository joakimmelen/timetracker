import React from "react";
import { Link } from "react-router-dom";
import { useTimeTrackContext } from "../context/TimeTrackerContext";

function Projects() {
  const { tasks, removeTask } = useTimeTrackContext();

  const handleClick = (id) => {
    removeTask(id);
  };

  return (
    <div>
      <div>
        <h3>Manage and Create Tasks</h3>
        <Link to={`/newtask`}>
          <button>Add Task</button>
        </Link>
      </div>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}
              <button onClick={() => handleClick(task.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
