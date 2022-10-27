import React from "react";
import { Link } from "react-router-dom";
import { useTimeTrackContext } from "../context/TimeTrackerContext";
import styles from "./Tasks.module.css";

function Projects() {
  const { tasks, removeTask } = useTimeTrackContext();

  const handleClick = (id) => {
    removeTask(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topcontainer}>
        <h3 className={styles.h3}>Manage and Create Tasks</h3>
        <Link to={`/newtask`}>
          <button>Add Task</button>
        </Link>
      </div>
      <div className={styles.content}>
        <ul className={styles.ul}>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}
              <button
                className={styles.removeButton}
                onClick={() => handleClick(task.id)}
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
